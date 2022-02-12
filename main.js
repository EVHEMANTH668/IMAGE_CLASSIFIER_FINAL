Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:100
});

camera = get("camera")

Webcam.attach("#camera");

// GETTING ELEMENTS BY SHORT CUT

function get(x) {
    document.getElementById(x);
}

// getting the snapshot

function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML = '<img id = "captured_image" src="' + data_uri + '"/>';
    });
}

console.log("ml5 version"+ " : " +ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2UWeWWUoh/model.json",modelLoaded);

function modelLoaded() {
    console.log("Model Is Loaded");
}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error){
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result_object_name").innerText = results[0].label;
        document.getElementById("result_object_accuracy").innerText = results[0].confidence.toFixed(3);
    }
}