const fs=require('fs');
const write=()=>{
    const data="I am Prajjwal Singh";
    fs.writeFile("./mydir/data.txt",data,(err)=>{
        if(err) console.log(err);
        else console.log("file updated");
    });
}
write();