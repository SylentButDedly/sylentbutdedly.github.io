<!DOCTYPE html>
<html lang="en">
<head>
    <title><?php echo $_REQUEST['hero']; ?></title>
    <script type="text/javascript" src="../../js/pandascore-api.js"></script>
</head>
<body>
    <p>Version: b0.0.6</p>
    <pre id="main" style="word-wrap: break-word; white-space: pre-wrap;"></pre>
    <script type=text/javascript>
        //document.getElementById("main").textContent = getData("/ow/heroes");
        console.log("Hello!");

        getData("/ow/heroes");
    </script>
</body>
</html>