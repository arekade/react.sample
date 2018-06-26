// append new id to data
export default function(data) {
    // use uuid to generate uniquie id
    const uuidv4 = require('uuid/v4');  
    data.map(item => 
        // assign new id
        item.newid = uuidv4().split('-')[0]
    )

    // return sorted data
    return data.sort((a, b) => {
        if (a.newid < b.newid) {
        return -1;
        }
        if (a.newid > b.newid) {
        return 1
        }
        return 0;
    });
}