$(document).ready(function() {
    // Manejo de navegación
    $('.nav-link').click(function(e) {
        e.preventDefault();
        
        // Remover clase active de todos los elementos
        $('.nav-link').removeClass('active');
        $('.section').removeClass('active');
        
        // Agregar clase active al elemento clickeado
        $(this).addClass('active');
        
        // Mostrar sección correspondiente
        $($(this).attr('href')).addClass('active');
    });
});