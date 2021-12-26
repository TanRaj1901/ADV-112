console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier('Mobilenet',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!")
}

function check() {
    img = document.getElementsByClassName('img-responsive');
    classifier.classify(img , gotresult);
}

function gotresult(error , results) {
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}