var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/diq5tbufz/upload';
var CLOUDINARY_UPLOAD_PRESET = 'oce6ivs3'


var preview = document.getElementById('preview');
var upload = document.getElementById('upload');

upload.addEventListener('change', (event) =>  {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(res => {
        console.log(res);
        preview.src = res.data.url
    }).catch(err => {
        console.log(err)
    });
});