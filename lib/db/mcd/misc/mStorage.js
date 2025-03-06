import multer from 'multer';
import { getNewUID } from './helpers.js';
import * as mime from 'mime-types';

export const reviewStorage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'public/reviews')
    },
    filename: function (req, file, cb) {
        
        let newFileName = getNewUID() + '.' + mime.extension(file.mimetype)
        let ext = mime.extension(file.mimetype)
        cb(null, newFileName);

    }
    
});

export const productsStorage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'public/products')
    },
    filename: function (req, file, cb) {
        
        let newFileName = getNewUID() + '.' + mime.extension(file.mimetype)
        let ext = mime.extension(file.mimetype)
        cb(null, newFileName);

    }
});