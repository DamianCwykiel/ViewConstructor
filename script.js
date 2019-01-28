/*VIEW_CONSTRUCTOR*/    
        
function updateOutput() {
    $("iframe").contents().find("html").html("<html><head><style>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
}
$(".toggleButton").hover(function() {
     $(this).addClass("highlighButton");
}, 
function() {
    $(this).removeClass("highlighButton");
});
$(".toggleButton").click(function() {
    $(this).toggleClass("active");
    $(this).removeClass("highlighButton");
    let panelId = $(this).attr("id") + "Panel";
    $("#" + panelId).toggleClass("hidden");
    let numberOfactivePanels = 4 - $(".hidden").length;
    $(".panel").width(($(window).width() / numberOfactivePanels) - 10);
});
$(".panel").height($(window).height() - $(".header").height() - 20);
$(".panel").width(($(window).width() / 2) - 10);
    updateOutput();
$("textarea").on("change keyup paste", function() {
    updateOutput();
});
