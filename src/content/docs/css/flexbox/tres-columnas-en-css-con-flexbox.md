---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP6AAIYK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlWlQ9EzH3nd1xjz8yaiqXZHVcvC1lZnZgOXM0reAj1AiBKPWHGlyJFCEySvqGMqPw5vQc8bnnxkgmslf5ejvCpDCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa9HMeuE5cmDURVG8KtwD0LCidLXST6USNNWpKXN8DnNe6Du70v9sTsuGnfRSmlGVxkN8DKYh1EYjtVGgqJlnpBerQaYXZRbxr1ePukvG%2F3uDey%2B4SC61rLkBSMH1DfD4GGpt4scokOFmJU%2F3NDerbnp6MQj%2FS6l9DIMTKtht3qg9MnfXuZAls5ahi8N8zDtbSVTmMusQGHiz6oYJ7gszLeyVriTTj9NeFwFiJXB%2FHmprXWNbA3am1QcbGsftQUzQyW6btg26SRDW8WNVoI91JPbv3TwUMTfZ2P0II12jAYW3aZh%2FBbDI0n8Ul19PXNPlk3j2qrqKuA3GFj%2FSxqslPZ3mneIgFrbeBSQwDdZN1NX8OR6ERoUPqljWAo2vsPpGosFkljS%2BH%2B1iWJqjAPn54DqF2GZvrV3JUpKiY8j0VZsAnQt8bcEin2oSKpTrx1Csnz%2B3axmwdMdA0grW%2FZlIlb8UHSXxGtOi7u1t3McXaCSSSPtjJ3nVsC6%2B82cT%2FrAKZm6iczvA%2FO5c3dhrHqbum74F8l8Q3Gh%2BmrcsYKW98ReTtZAK624j7ejdVoXalRqGal4Y5OTmK7BHglqVBWIe9fZE5OX65r3dH%2FDviRYJm3y7w6XhWYjYvqtKE08earL8bZe%2BBVw179I3UKIw4o%2FbyQY6pgEUvpOuGycIHohluDkVRRtg9dhc8QJYv6INZJosLpwUFg4j8Z5zApOK7qDKalbLZmXds9VLhxJRkuzZgVE0hFjpHLvNWyeH%2FVCXQ%2F%2ByDmmKLjsDWJvr3pVoKtutFUXdZnUpp3aw6o2sz%2BVGn69%2BnNfvI3sorKsCAYFl4jmsUhuYKpFCetDTHSd3GWCbFYstEikOn%2BAGKDeXaGl9o%2BSOfen8afGERtZY&X-Amz-Signature=3df139de66da12de0a6f9a9cedcefd0ac83b8cefce3667c9c4482825299dd03a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP6AAIYK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlWlQ9EzH3nd1xjz8yaiqXZHVcvC1lZnZgOXM0reAj1AiBKPWHGlyJFCEySvqGMqPw5vQc8bnnxkgmslf5ejvCpDCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa9HMeuE5cmDURVG8KtwD0LCidLXST6USNNWpKXN8DnNe6Du70v9sTsuGnfRSmlGVxkN8DKYh1EYjtVGgqJlnpBerQaYXZRbxr1ePukvG%2F3uDey%2B4SC61rLkBSMH1DfD4GGpt4scokOFmJU%2F3NDerbnp6MQj%2FS6l9DIMTKtht3qg9MnfXuZAls5ahi8N8zDtbSVTmMusQGHiz6oYJ7gszLeyVriTTj9NeFwFiJXB%2FHmprXWNbA3am1QcbGsftQUzQyW6btg26SRDW8WNVoI91JPbv3TwUMTfZ2P0II12jAYW3aZh%2FBbDI0n8Ul19PXNPlk3j2qrqKuA3GFj%2FSxqslPZ3mneIgFrbeBSQwDdZN1NX8OR6ERoUPqljWAo2vsPpGosFkljS%2BH%2B1iWJqjAPn54DqF2GZvrV3JUpKiY8j0VZsAnQt8bcEin2oSKpTrx1Csnz%2B3axmwdMdA0grW%2FZlIlb8UHSXxGtOi7u1t3McXaCSSSPtjJ3nVsC6%2B82cT%2FrAKZm6iczvA%2FO5c3dhrHqbum74F8l8Q3Gh%2BmrcsYKW98ReTtZAK624j7ejdVoXalRqGal4Y5OTmK7BHglqVBWIe9fZE5OX65r3dH%2FDviRYJm3y7w6XhWYjYvqtKE08earL8bZe%2BBVw179I3UKIw4o%2FbyQY6pgEUvpOuGycIHohluDkVRRtg9dhc8QJYv6INZJosLpwUFg4j8Z5zApOK7qDKalbLZmXds9VLhxJRkuzZgVE0hFjpHLvNWyeH%2FVCXQ%2F%2ByDmmKLjsDWJvr3pVoKtutFUXdZnUpp3aw6o2sz%2BVGn69%2BnNfvI3sorKsCAYFl4jmsUhuYKpFCetDTHSd3GWCbFYstEikOn%2BAGKDeXaGl9o%2BSOfen8afGERtZY&X-Amz-Signature=485592c5e482ab23220cf542d6d8b7ee51ad75b86e527d28f3083e6d72e6c908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

