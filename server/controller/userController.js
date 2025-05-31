import User from '../models/userModel.js'; // Updated import path

// Create a new contact
export const addUser = async (req, res) => {
    try {
        // Enhanced debugging
        console.log('Request headers:', req.headers);
        console.log('Request body:', req.body);
        console.log('Request body type:', typeof req.body);
        console.log('Request content-type:', req.get('Content-Type'));
        
        // Check if req.body exists
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Request body is empty or not properly formatted. Make sure Content-Type is set to application/json',
                debug: {
                    bodyReceived: req.body,
                    contentType: req.get('Content-Type')
                }
            });
        }
        
        const { userName, email, phoneNumber } = req.body;
        
        // Validate required fields
        if (!userName || !email || !phoneNumber) {
            return res.status(400).json({
                success: false,
                message: 'Name, email, and phone number are required fields',
                received: { userName, email, phoneNumber }
            });
        }
        
        // Check if contact with email already exists
        const existingContact = await User.findOne({ email });
        if (existingContact) {
            return res.status(409).json({
                success: false,
                message: 'Contact with this email already exists'
            });
        }
        
        // Create new contact
        const newContact = new User({
            userName,
            email,
            phoneNumber
        });
        
        const savedContact = await newContact.save();
        
        res.status(201).json({
            success: true,
            message: 'Contact created successfully',
            data: savedContact
        });
        
    } catch (error) {
        console.error('Error creating contact:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Get all contacts or a specific contact by ID
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            // Get specific contact by ID
            const contact = await User.findById(id);
            
            if (!contact) {
                return res.status(404).json({
                    success: false,
                    message: 'Contact not found'
                });
            }

            res.status(200).json({
                success: true,
                data: contact
            });
        } else {
            // Get all contacts with pagination
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skip = (page - 1) * limit;

            const contacts = await User.find()
                .skip(skip)
                .limit(limit)
                .sort({ createdAt: -1 });

            const totalContacts = await User.countDocuments();
            const totalPages = Math.ceil(totalContacts / limit);

            res.status(200).json({
                success: true,
                data: contacts,
                pagination: {
                    currentPage: page,
                    totalPages,
                    totalContacts,
                    hasNextPage: page < totalPages,
                    hasPrevPage: page > 1
                }
            });
        }

    } catch (error) {
        console.error('Error fetching contact(s):', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Update contact by ID
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        // Validate ID
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Contact ID is required'
            });
        }

        // If email is being updated, check for duplicates
        if (updateData.email) {
            const existingContact = await User.findOne({ 
                email: updateData.email,
                _id: { $ne: id }
            });
            
            if (existingContact) {
                return res.status(409).json({
                    success: false,
                    message: 'Another contact with this email already exists'
                });
            }
        }

        // Update contact
        const updatedContact = await User.findByIdAndUpdate(
            id,
            { ...updateData, updatedAt: new Date() },
            { 
                new: true, // Return updated document
                runValidators: true // Run schema validations
            }
        );

        if (!updatedContact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Contact updated successfully',
            data: updatedContact
        });

    } catch (error) {
        console.error('Error updating contact:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Delete contact by ID
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate ID
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Contact ID is required'
            });
        }

        // Delete contact
        const deletedContact = await User.findByIdAndDelete(id);

        if (!deletedContact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Contact deleted successfully',
            data: deletedContact
        });

    } catch (error) {
        console.error('Error deleting contact:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};
