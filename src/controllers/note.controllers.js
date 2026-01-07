// boilerplate code
//aaj iske aandar routes likhenge date : 1/7/2026 

import { ApiError } from '../utils/ApiError.js';
import Project from '../models/project.model.js';
import Note from '../models/note.model.js';
import mongoose from 'mongoose';

const getNotes = async (req, res) => { 
     // get all notes for a project
     const {projectId} = req.params;
     // as we are using mongoose for storage 
     const project = await Project.findById(projectId) //project -> mongoose
     //error handling
     if(!project){
        throw new ApiError('Project not found', 404); 
     }
     const notes = await Note.find({
        //agar findbyid use kiya to direct projectid se leneka kyuki wo safe hai 
        //but sirf find use kiya toh hume mongoose bulana padta hai for safer side 
        projectId: mongoose.Types.ObjectId(projectId)
     }).populate("createdBy", "name email");
     res.status(200).json({
            success: true,
            data: notes
        });
     };

const getNoteById = async (req, res) => { 
    // get a single note by id
    const {noteId} = req.params;
    
    const note = await ProjectNote.findById(noteId).populate(
        "createdBy",
        "username  fullName avatar"
    );

    if (!note) {
        throw new ApiError("Note not found", 404);
    }

    res.status(200).json({
        success: true,
        data: note
    });
};

const createNote = async (req, res) => { 
    // create a new note
    const { projectId } = req.params;
    const { title, content } = req.body;
    const userId = req.user._id; // Assuming req.user is populated by authentication middleware

    const project = await Project.findById(projectId)
    if (!project) {
        throw new ApiError("Project not found", 404);
    }   
    //agar project id se project mila to fir notes banao
    const note = new Note({
        projectId,
        title,
        content,
        createdBy: userId
    });
    await note.save();

    res.status(201).json({
        success: true,
        data: note
    });
};

const updateNote = async (req, res) => { };

const deleteNote = async (req, res) => { };

