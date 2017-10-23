

function missing(){
    var laporan=document.getElementById("are").value;

    alert("Aduan kehilangan sudah dihantar " + laporan);

    var database = firebase.database();

        var ref = database.ref('HILANG');

        var data = {
          LAPORAN: laporan,
        }
        ref.push(data);
  
  }
