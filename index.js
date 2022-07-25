function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function generateName(){
      var first_name = ["Nguyễn Văn Chiến","Phạm Trà My","Trần Văn Hướng","Nguyễn Ngọc Thắng","Trần Quốc Tuấn","Trần Văn Giỏi","Nguyễn Khánh Ly","Nguyễn Vũ Thảo Vi"];

      var name = capFirst(first_name[getRandomInt(0, first_name.length + 1)]);
        document.getElementById("random_name").innerHTML = name;
    }
