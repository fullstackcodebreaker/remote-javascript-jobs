var mongoose = require('mongoose');
var schema = mongoose.Schema;

var jobSchema = new Schema ({
    title: {
        type: string,
        required: true
    },
    description: {
        type: String,
        required: true

    },
    job_type: {
        type: string,
        required: true
    },
    skills: {
        type: number,
        required: true
    },
    how_to_apply: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    salary: {
        type: number,
    },
    company_name: {
        type: string,
    },
    company_website: {
        type: string,
    },
    headquaters: {
        hq_city: {
         type: String,
        },
        hq_country: {
         type: String,
        }
     },
     contact_name: {
         type: String
     },
     contact_email: {
         type: String
     }    
});

module.exports = mongoose.model('job', jobSchema);