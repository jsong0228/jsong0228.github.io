<script language="javascript">
    var timeout,interval
    var threshold = 10000;
    var secondsleft=threshold;

    window.onload = function()
    {
        startschedule();
    }

     function startChecking()
     {
        secondsleft-=1000;
        document.querySelector(".div1").innerHTML = "Activating in " + Math.abs((secondsleft/1000))+" secs";
        if(secondsleft == 0)
        {
            //document.getElementById("clickme").style.display="";
            clearInterval(interval);
            document.querySelector(".div1").style.display="none";
            document.querySelector(".div2").style.display="";
        }
    }
    function startschedule()
    {
          clearInterval(interval);
          secondsleft=threshold;
          document.querySelector(".div1").innerHTML = "Activating in " + Math.abs((secondsleft/1000))+" secs";
           interval = setInterval(function()
           {
               startChecking();
           },1000)
   }

   function resetTimer()
   {
        startschedule();
   }
</script>
    <div id="countdown">"here must show countdown 10 seconds"</div>
    <div class="sale" style="display:none;">"show this div after countdown"</div>


    /* Open */
    function openNav() {
        document.getElementById("buy").style.display = "block";
    }

    /* Close */
    function closeNav() {
        document.getElementById("buy").style.display = "none";
    }
