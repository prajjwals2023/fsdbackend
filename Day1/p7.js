const fs=require('fs');
fs.unlink("./mydir/data.txt",(err)=>{
    if(err) {
        console.error('Error deleting File:$(err)');
        return;
    }
    console.log("File deleted Successfully")
})