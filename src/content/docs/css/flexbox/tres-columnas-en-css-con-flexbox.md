---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O5BNUZF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BSPKJd8IBgGv%2FxXhDXSLF0Knf%2FZy0Fth0rHJIWWaUkwIhALpOqS%2FRaAiwO90%2FG62HtQq9hu3izsDvvF6Es02xWs8PKv8DCHoQABoMNjM3NDIzMTgzODA1Igxf%2BkK84rnnpKCItukq3APNzN27NGktC9NmtOAPkZe%2FubbxthKQEenBWPpIRzUpZkFyrVnPqcqRYFpTWKu%2BuBnfmJJ4g7hhICvLsTRM9JiZ9WD1dDLNZIuC963UkGuKjz%2BMUEltNV8Y%2FAsFiM0u%2Bs7%2FygmsVHK5uhtqXtDVnY0wUEPk8vkM0kCOVw%2BL8d%2ByQKaVca4NUvxfiFxMbHmqkpPKjfOtmk1bst%2FqxokdXuWSgMTsQiLE%2BrQ1ct0YRdHPr5zTfFPmMI0ge7euCorPq2%2BaukedgNR66%2B6jWBnkKVWtj3iTqHsPRa5AyAMgtXlIvihq5bhvjegG5JbnDp3GV4Cd3P1C5XoEIYjqKji%2Fdobmc%2FOe3bR0OlYw9gXX%2BympkOmCTsaDSV1FmbEThmbI9SXaFsDaweu7Md9InUt6ukOp2TpmHx%2Brfv4IKLCb7vzg13YihhOJEmQfpkJ9qYqdu8YAu6qi1QIbO%2FkpthlegNIeckdGiRImTb1N37odXI%2FoGOQOLEr%2BO0HeefhfTZUYyTFmEbt1i07IyGGL%2FH9XKub8HHCENBwFPTde7fAS7SziyWvIqZ2wuZh5WgNmG2rvscnT%2F5XpLNFqX5ZmM8Rnq%2B3xUOw%2FQ9mFX8H0HobJMT6fIdZfMEcpfjf0HGwfLjCzyNHJBjqkAWKq1XbmoL6knoysNNzwpoqppygS%2Bw%2FIKNxkvr30y7hvOVdPNr50PtkSq1JSRmRdU6eF9kyst96cGn2WUXBChZEuu56Z72lJcB6kxR91idf6kuy1rqUOHtR879ngWmoImhlc474T5RdvtwcuudCHmDjPitnzXufneFzu%2B%2Fipy53gc%2F%2FNsyLPOGA%2BnOnCcY31MZrl2MAnqhDtZlF1tkbVh27Ya8Ja&X-Amz-Signature=87fde63ed2f5975c9e7295dd91f96817f4a2451cb9f3df032b60a940b5d52765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O5BNUZF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BSPKJd8IBgGv%2FxXhDXSLF0Knf%2FZy0Fth0rHJIWWaUkwIhALpOqS%2FRaAiwO90%2FG62HtQq9hu3izsDvvF6Es02xWs8PKv8DCHoQABoMNjM3NDIzMTgzODA1Igxf%2BkK84rnnpKCItukq3APNzN27NGktC9NmtOAPkZe%2FubbxthKQEenBWPpIRzUpZkFyrVnPqcqRYFpTWKu%2BuBnfmJJ4g7hhICvLsTRM9JiZ9WD1dDLNZIuC963UkGuKjz%2BMUEltNV8Y%2FAsFiM0u%2Bs7%2FygmsVHK5uhtqXtDVnY0wUEPk8vkM0kCOVw%2BL8d%2ByQKaVca4NUvxfiFxMbHmqkpPKjfOtmk1bst%2FqxokdXuWSgMTsQiLE%2BrQ1ct0YRdHPr5zTfFPmMI0ge7euCorPq2%2BaukedgNR66%2B6jWBnkKVWtj3iTqHsPRa5AyAMgtXlIvihq5bhvjegG5JbnDp3GV4Cd3P1C5XoEIYjqKji%2Fdobmc%2FOe3bR0OlYw9gXX%2BympkOmCTsaDSV1FmbEThmbI9SXaFsDaweu7Md9InUt6ukOp2TpmHx%2Brfv4IKLCb7vzg13YihhOJEmQfpkJ9qYqdu8YAu6qi1QIbO%2FkpthlegNIeckdGiRImTb1N37odXI%2FoGOQOLEr%2BO0HeefhfTZUYyTFmEbt1i07IyGGL%2FH9XKub8HHCENBwFPTde7fAS7SziyWvIqZ2wuZh5WgNmG2rvscnT%2F5XpLNFqX5ZmM8Rnq%2B3xUOw%2FQ9mFX8H0HobJMT6fIdZfMEcpfjf0HGwfLjCzyNHJBjqkAWKq1XbmoL6knoysNNzwpoqppygS%2Bw%2FIKNxkvr30y7hvOVdPNr50PtkSq1JSRmRdU6eF9kyst96cGn2WUXBChZEuu56Z72lJcB6kxR91idf6kuy1rqUOHtR879ngWmoImhlc474T5RdvtwcuudCHmDjPitnzXufneFzu%2B%2Fipy53gc%2F%2FNsyLPOGA%2BnOnCcY31MZrl2MAnqhDtZlF1tkbVh27Ya8Ja&X-Amz-Signature=7aea8619c01b01d025b4a62a17683e95e3bcb88e7bc6dd401a3365247f12d5ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

