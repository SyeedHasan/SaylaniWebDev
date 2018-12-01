// var name0 = document.getElementById("name").innerHTML;
// var designation0 = document.getElementById("designation").innerHTML;
// var image0 = document.getElementById("image").getAttribute("src");
// var about0 = document.getElementById("about").innerHTML;
// var address0 = document.getElementById("address").innerHTML;
// var mail0 = document.getElementById("mail").innerHTML;
// var phone0 = document.getElementById("phone").innerHTML;
// var lIn0 = document.getElementById("lIn").innerHTML;
// var exp10 = document.getElementById("exp1").innerHTML;
// var exp20 = document.getElementById("exp2").innerHTML;
// var exp30 = document.getElementById("exp3").innerHTML;
// var exp40 = document.getElementById("exp4").innerHTML;
// var exp50 = document.getElementById("exp5").innerHTML;
// var exp60 = document.getElementById("exp6").innerHTML;
// var dur10 = document.getElementById("dur1").innerHTML;
// var deg10 = document.getElementById("deg1").innerHTML;
// var inst10 = document.getElementById("inst1").innerHTML;
// var dur20 = document.getElementById("dur2").innerHTML;
// var deg20 = document.getElementById("deg2").innerHTML;
// var inst20 = document.getElementById("inst2").innerHTML;
// var dur30 = document.getElementById("dur3").innerHTML;
// var deg30 = document.getElementById("deg3").innerHTML;
// var inst30 = document.getElementById("inst3").innerHTML;
// var skill10 = document.getElementById("skill1").innerHTML;
// var skill20 = document.getElementById("skill2").innerHTML;
// var skill30 = document.getElementById("skill3").innerHTML;
// var skill40 = document.getElementById("skill4").innerHTML;
// var portfolio0 = document.getElementById("portfolio").innerHTML;
// var QR0 = document.getElementById("QR").getAttribute("src");


function Bio(name, designation, image, about, address, mail, phone, lIn, exp1, exp2, exp3, exp4, exp5, exp6, dur1, dur2, dur3, deg1, deg2, deg3, inst1, inst2, inst3, skill1, skill2, skill3, skill4, portfolio, QR) {
    this.name = name;
    this.designation = designation;
    this.image = image;
    this.about = about;
    this.address = address;
    this.mail = mail;
    this.phone = phone;
    this.lIn = lIn;
    this.exp1 = exp1;
    this.exp2 = exp2;
    this.exp3 = exp3;
    this.exp4 = exp4;
    this.exp5 = exp5;
    this.exp6 = exp6;
    this.dur1 = dur1;
    this.deg1 = deg1;
    this.inst1 = inst1;
    this.dur2 = dur2;
    this.deg2 = deg2;
    this.inst2 = inst2;
    this.dur3 = dur3;
    this.deg3 = deg3;
    this.inst3 = inst3;
    this.skill1 = skill1;
    this.skill2 = skill2;
    this.skill3 = skill3;
    this.skill4 = skill4;
    this.portfolio = portfolio;
    this.QR = QR;

    // this.change = function () {
    document.getElementById("name").innerHTML = name;
    document.getElementById("designation").innerHTML = designation;
    document.getElementById("image").setAttribute("src", image);
    document.getElementById("about").innerHTML = about;
    document.getElementById("address").innerHTML = address;
    document.getElementById("mail").innerHTML = mail;
    document.getElementById("phone").innerHTML = phone;
    document.getElementById("lIn").innerHTML = lIn;
    document.getElementById("exp1").innerHTML = exp1;
    document.getElementById("exp2").innerHTML = exp2;
    document.getElementById("exp3").innerHTML = exp3;
    document.getElementById("exp4").innerHTML = exp4;
    document.getElementById("exp5").innerHTML = exp5;
    document.getElementById("exp6").innerHTML = exp6;
    document.getElementById("dur1").innerHTML = dur1;
    document.getElementById("deg1").innerHTML = deg1;
    document.getElementById("inst1").innerHTML = inst1;
    document.getElementById("dur2").innerHTML = dur2;
    document.getElementById("deg2").innerHTML = deg2;
    document.getElementById("inst2").innerHTML = inst2;
    document.getElementById("dur3").innerHTML = dur3;
    document.getElementById("deg3").innerHTML = deg3;
    document.getElementById("inst3").innerHTML = inst3;
    document.getElementById("skill1").innerHTML = skill1;
    document.getElementById("skill2").innerHTML = skill2;
    document.getElementById("skill3").innerHTML = skill3;
    document.getElementById("skill4").innerHTML = skill4;
    document.getElementById("portfolio").innerHTML = portfolio;
    document.getElementById("QR").setAttribute("src", QR);
    // }
}

var Hasan = new Bio(
    "SYED HASAN AKHTAR",
    "[ &nbsp;&nbsp; FRONT END DEVELOPER &nbsp;&nbsp; | &nbsp;&nbsp; UI/UX DESIGNER &nbsp;&nbsp; ]",
    "images/in.jpg",
    "Hi! I design &amp; develop pages, apps &amp; templates for web. I thrive to learn and implement what practices are considered best.",
    "C-9, Hasan Center, Gulshan-Iqbal, Block-16, Karachi, 75490",
    "naqvi_hasan@live.com", "0343-3562183",
    "<img class='my' src='images/abc.png'>/in/syed.hasan009/",
    "WEB DESIGN", "PRINT DESIGN", "WEB DEVELOPMENT", "POSTER DESIGN", "TEMPLATE DESIGN", "ILLUSTRATION",
    "2017 - PRESENT", "2014 - 2016 ", "2012 - 2014",
    "BACHELORS OF SOFTWARE ENGINEERING (BSSE)", "INTERMEDIATE (HSC)", "MATRICULATION (SSC)",
    "NED University", "Tabanis College", "Happy Home School",
    "JAVASCRIPT", "BOOTSTRAP", "ADOBE ILLUSTRATOR CC", "VISUAL STUDIO 2017",
    "syedhasan-firebaseapp.com",
    "images/qr.png"
)
// nabeel.change();
