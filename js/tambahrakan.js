

  function tambah(){

    var laporan=document.getElementById("are").value;

    var database = firebase.database();

      var ref = database.ref('HILANG');

      var data = {
        LAPORANs: laporan,
        LONGITUDE: laporan
      }
      ref.push(data);

      alert("Aduan kehilangan sudah dihantar"+ laporan);
  }
