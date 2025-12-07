---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T43Q3D43%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxP0GW3eb44nHfWJc1qZz0a4rMjZJDFNRd8%2BUTcvgX4AiAm%2FrJluBM9cyYwxbvdagTY1UDRJLZEWCJxGxjS9CFxCiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMplNWnoKT3F%2FxFJxvKtwDC6olAUfobPlJj3jpbBJ0VK3AD6BTbeBc35854lXsxbG%2Fjqm0p%2BynxJEpyEWsBtTqntot3DV83g6aPGOIsv4M83lOqIk66rm60Vb%2FwuXrT8aPittbp8ODmpJZPWs%2FmpeVTKNvrdn4HTJIO3WznRustt2mjyYeBUdPQoSsr5tpnF1gRRDSyJ02OQVJ488794u968WsIorv4qhc3RgyOX7rSwV0kgtwRf6A5W%2BalcRzlw96mvyo%2BPY8qwviUh5C3BP5N7vkIA0KT2lOphAPpCcYeHIb8s8BPLF4hUAvviw44ndkqIQU4Vgy%2FMcD8aU2q69N0R2nvfyAl7n9FEUqfuyx%2BCltCJSX0y9ISLTMBI7%2BGYXxTSVNSt%2B%2F5s3ItVFSZaepac2mbaI7cYr7Y73zNbwVQsuPZ1ZkJMGvCEpGekYkcrAZGdYbvhdcxNP9U%2BWgWN4hUjiEX%2F8smudrf%2B8kqUfG%2FyrSSmqxekgVpFbva5kRasWO24dngB952XEqHe%2Fte%2Fyp7uuVeuG9Q%2BNpwLRz5Lboyj6fN5gl5ONTaPbg%2FFreKnm8HkssBfrFlpEEyQ1LLhFLBs2wngOamc8m2JN2usJ2TQFwy58zdJqhPu3fwVC7C5wdtqBisPF1KOpWy04whrvWyQY6pgFdyRrAmMYG9JhpL3m7M21qyFeMiw0ORQwz09XVRZTepZt72U7jrfY%2F%2FeMmkmT1XcWyXlHCT0kugpVUJT8hGBxpizKrf6vSAkmLT3JbpIEEhEz4dXvf%2B%2BqY1BMzJghawuDKL8vUV5%2Fh6BHg%2BGJRcYfKIV4B4I9TM%2Bac4qXuGbyaXBszpKoruutFQgbD%2Frsjfh74uLSABwvWeWMqatQV3wXoYLVyKpCl&X-Amz-Signature=3440197bada55b5704316751a18fea5bb15a25ae8b3ea59af213291a809dc03c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T43Q3D43%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxP0GW3eb44nHfWJc1qZz0a4rMjZJDFNRd8%2BUTcvgX4AiAm%2FrJluBM9cyYwxbvdagTY1UDRJLZEWCJxGxjS9CFxCiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMplNWnoKT3F%2FxFJxvKtwDC6olAUfobPlJj3jpbBJ0VK3AD6BTbeBc35854lXsxbG%2Fjqm0p%2BynxJEpyEWsBtTqntot3DV83g6aPGOIsv4M83lOqIk66rm60Vb%2FwuXrT8aPittbp8ODmpJZPWs%2FmpeVTKNvrdn4HTJIO3WznRustt2mjyYeBUdPQoSsr5tpnF1gRRDSyJ02OQVJ488794u968WsIorv4qhc3RgyOX7rSwV0kgtwRf6A5W%2BalcRzlw96mvyo%2BPY8qwviUh5C3BP5N7vkIA0KT2lOphAPpCcYeHIb8s8BPLF4hUAvviw44ndkqIQU4Vgy%2FMcD8aU2q69N0R2nvfyAl7n9FEUqfuyx%2BCltCJSX0y9ISLTMBI7%2BGYXxTSVNSt%2B%2F5s3ItVFSZaepac2mbaI7cYr7Y73zNbwVQsuPZ1ZkJMGvCEpGekYkcrAZGdYbvhdcxNP9U%2BWgWN4hUjiEX%2F8smudrf%2B8kqUfG%2FyrSSmqxekgVpFbva5kRasWO24dngB952XEqHe%2Fte%2Fyp7uuVeuG9Q%2BNpwLRz5Lboyj6fN5gl5ONTaPbg%2FFreKnm8HkssBfrFlpEEyQ1LLhFLBs2wngOamc8m2JN2usJ2TQFwy58zdJqhPu3fwVC7C5wdtqBisPF1KOpWy04whrvWyQY6pgFdyRrAmMYG9JhpL3m7M21qyFeMiw0ORQwz09XVRZTepZt72U7jrfY%2F%2FeMmkmT1XcWyXlHCT0kugpVUJT8hGBxpizKrf6vSAkmLT3JbpIEEhEz4dXvf%2B%2BqY1BMzJghawuDKL8vUV5%2Fh6BHg%2BGJRcYfKIV4B4I9TM%2Bac4qXuGbyaXBszpKoruutFQgbD%2Frsjfh74uLSABwvWeWMqatQV3wXoYLVyKpCl&X-Amz-Signature=6e812111fe8cff6683df4f0842002652f96cb49bf87c74819a44f9e2d18d4660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

