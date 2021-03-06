<!DOCTYPE html>
<html>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
    <title>Resumable upload for Web Apps</title>
</head>

<body>
<!doctype html>
<style type="text/css">
body {
	background-color: #FFFFFF;
}
</style>
<BR>
<BR>
<BR>
<div align="center">
  <p><img src="https://lh6.googleusercontent.com/hMIToryPvGthRzhVS6peKN2PrjKe0QpZon0SBGlnQS2HK-RRwJxqFoJ6CkESimwm5zWOTBSR=w16383" id="loader"></p>
  <table width="459" border="0">
    <tbody>
      <tr>
        <td width="462"><div align="center">
        <div><h3>Share files to Sheikh Salman's drive, please upload compressed '.zip' if you need to upload multple files faster.</h3></div>
          <hr>
          
        </div>
        <style>
 input { display:block; margin: 20px; }
 
          </style>
        
        
         <form>
        <input name="file" id="uploadfile" type="file">
    </form>
   
    <div id="progress"></div>
        <hr>
        </td>
        
      </tr>
      
    </tbody>
  </table>
  <h3>&nbsp;</h3>
  <p>&nbsp;</p>
</div>


   

<script>
    const chunkSize = 5242880;

    $('#uploadfile').on("change", function() {
        var file = this.files[0];
        if (file.name != "") {
            var fr = new FileReader();
            fr.fileName = file.name;
            fr.fileSize = file.size;
            fr.fileType = file.type;
            fr.onload = init;
            fr.readAsArrayBuffer(file);
        }
    });

    function init() {
    
       var loader=document.getElementById("loader")
       
    
    
        $("#progress").text("Initializing.");
        var fileName ="uptosalman_"+this.fileName;
        var fileSize = this.fileSize;
        var fileType = this.fileType;
        console.log({fileName: fileName, fileSize: fileSize, fileType: fileType});
        var buf = this.result;
        var chunkpot = getChunkpot(chunkSize, fileSize);
        var uint8Array = new Uint8Array(buf);
        var chunks = chunkpot.chunks.map(function(e) {
            return {
                data: uint8Array.slice(e.startByte, e.endByte + 1),
                length: e.numByte,
                range: "bytes " + e.startByte + "-" + e.endByte + "/" + chunkpot.total,
            };
        });
        google.script.run.withSuccessHandler(function(at) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable");
            xhr.setRequestHeader('Authorization', "Bearer " + at);
            xhr.setRequestHeader('Content-Type', "application/json");
            xhr.send(JSON.stringify({
                mimeType: fileType,
                name: fileName,
            }));
            xhr.onload = function() {
                doUpload({
                    location: xhr.getResponseHeader("location"),
                    chunks: chunks,
                });
            };
            xhr.onerror = function() {
                console.log(xhr.response);
            };
        }).getAt();
    }

    function doUpload(e) {
        var chunks = e.chunks;
        var location = e.location;
        var cnt = 0;
        var end = chunks.length;
        var temp = function callback(cnt) {
            var e = chunks[cnt];
            var xhr = new XMLHttpRequest();
            xhr.open("PUT", location, true);
            xhr.setRequestHeader('Content-Range', e.range);
            xhr.send(e.data);
            xhr.onloadend = function() {
                var status = xhr.status;
                cnt += 1;
                console.log("Uploading: " + status + " (" + cnt + " / " + end + ")");
                $("#progress").text("Uploading: " + Math.floor(100 * cnt / end) + "%"+" ....Please dont close the tab until done.");
                if (status == 308) {
                    callback(cnt);
                } else if (status == 200) {
                    $("#progress").text("Done.");
                } else {
                    $("#progress").text("Error: " + xhr.response);
                }
            };
        }(cnt);
    }

    function getChunkpot(chunkSize, fileSize) {
        var chunkPot = {};
        chunkPot.total = fileSize;
        chunkPot.chunks = [];
        if (fileSize > chunkSize) {
            var numE = chunkSize;
            var endS = function(f, n) {
                var c = f % n;
                if (c == 0) {
                    return 0;
                } else {
                    return c;
                }
            }(fileSize, numE);
            var repeat = Math.floor(fileSize / numE);
            for (var i = 0; i <= repeat; i++) {
                var startAddress = i * numE;
                var c = {};
                c.startByte = startAddress;
                if (i < repeat) {
                    c.endByte = startAddress + numE - 1;
                    c.numByte = numE;
                    chunkPot.chunks.push(c);
                } else if (i == repeat && endS > 0) {
                    c.endByte = startAddress + endS - 1;
                    c.numByte = endS;
                    chunkPot.chunks.push(c);
                }
            }
        } else {
            var chunk = {
                startByte: 0,
                endByte: fileSize - 1,
                numByte: fileSize,
            };
            chunkPot.chunks.push(chunk);
        }
        return chunkPot;
    }
</script>
</body>

</html>