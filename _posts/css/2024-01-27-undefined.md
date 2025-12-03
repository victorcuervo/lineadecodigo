---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EV4T6QG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIGare9V3ljy%2B49zlDa7U%2B5LJuUq8QBEPRhyBQa8eQzGPAiEAtGloUmo%2FkHZmFDzzVrzL4W6GLIV2pOIlX7QlPYZS1Jwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGBpI0WRAi%2FXbnHalircA%2BL9%2F14ASryvFwlYiXWBqT57TSdNDFMhkJmw6KEsoGGnE2rdUOzOVD8hGq5klvmpqj3v1%2Fu7WpfeDEDHuV2TeFNwjvGcuDviOoU0T6PObkj8PIyyEBCame06GeGOrNfiA566qQID0Hc8aeE25igLq%2BxQv52qeJeDiOinGqO6iEOhdgJyfGvX3yYpU6X5ExKcCzpF%2FrnFx1a9mrQ2J2PGEGq8oTSlDruVIJClMArrlmng%2FVf6AaCFvXzR3sPvVAJj%2BPOGL7hXO1JNwCMX1VK%2Bi440%2FyoVOCnvSJMEkaGWH93gSPGrLENYm1kYghrHiu4ZNV%2FG6ivNNyMWmfkB6DMXUyEBarFIwneR0wHP6MaQ5B26FBqJGQzQo1MQSQ0ajM%2F3v00sVz8RHTmMWAltHPN2xWx0iYvS3eMTKW7uuX72dtXVNklAJmcgO5CCc9C8l1W%2F%2B%2F%2FwJtsJOV6NlZC9r%2FvZbOhK9oAVz3Ffd4xZjho3M0%2F3cYQ8Zv%2F4Rso0sojEVtko2HFglGPyRVrmJ6raBYSxfr7Tkm0kR%2BQG2UDSpetujZK8oWA1K%2FlPZx2LNr1ns0801sGXW1LZACtzyWobhTAvbZ4PxqULpzWsDx%2BpTSu1Gbx0Ln4QkWPKfgkLjs89MK7NwMkGOqUBN9gBrHaYXfydE1d45oRQivPXbvADLs%2FxFWBftkJXhGNP16nM0HGTAoRXbvj98YBTa%2Fl%2BLKgbuKi7rsNz6yY46%2FYJ42MX4oPU7Rd5KxdKqz7x8sAIQTZME7q%2BrT75hTjqetU3fLcckP9PYL1l8bjoA6WeU4N16sLrJit9E1772sVlIv7Q%2Bb%2F%2F4ZqPgCeTuQMSfnxbMLNGltxw4HFv1iQxwneE4%2BzX&X-Amz-Signature=97c01b7d1744ca108b80b98a260cc709a620bd579b5d1b835f818ae065c8dbcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EV4T6QG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIGare9V3ljy%2B49zlDa7U%2B5LJuUq8QBEPRhyBQa8eQzGPAiEAtGloUmo%2FkHZmFDzzVrzL4W6GLIV2pOIlX7QlPYZS1Jwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGBpI0WRAi%2FXbnHalircA%2BL9%2F14ASryvFwlYiXWBqT57TSdNDFMhkJmw6KEsoGGnE2rdUOzOVD8hGq5klvmpqj3v1%2Fu7WpfeDEDHuV2TeFNwjvGcuDviOoU0T6PObkj8PIyyEBCame06GeGOrNfiA566qQID0Hc8aeE25igLq%2BxQv52qeJeDiOinGqO6iEOhdgJyfGvX3yYpU6X5ExKcCzpF%2FrnFx1a9mrQ2J2PGEGq8oTSlDruVIJClMArrlmng%2FVf6AaCFvXzR3sPvVAJj%2BPOGL7hXO1JNwCMX1VK%2Bi440%2FyoVOCnvSJMEkaGWH93gSPGrLENYm1kYghrHiu4ZNV%2FG6ivNNyMWmfkB6DMXUyEBarFIwneR0wHP6MaQ5B26FBqJGQzQo1MQSQ0ajM%2F3v00sVz8RHTmMWAltHPN2xWx0iYvS3eMTKW7uuX72dtXVNklAJmcgO5CCc9C8l1W%2F%2B%2F%2FwJtsJOV6NlZC9r%2FvZbOhK9oAVz3Ffd4xZjho3M0%2F3cYQ8Zv%2F4Rso0sojEVtko2HFglGPyRVrmJ6raBYSxfr7Tkm0kR%2BQG2UDSpetujZK8oWA1K%2FlPZx2LNr1ns0801sGXW1LZACtzyWobhTAvbZ4PxqULpzWsDx%2BpTSu1Gbx0Ln4QkWPKfgkLjs89MK7NwMkGOqUBN9gBrHaYXfydE1d45oRQivPXbvADLs%2FxFWBftkJXhGNP16nM0HGTAoRXbvj98YBTa%2Fl%2BLKgbuKi7rsNz6yY46%2FYJ42MX4oPU7Rd5KxdKqz7x8sAIQTZME7q%2BrT75hTjqetU3fLcckP9PYL1l8bjoA6WeU4N16sLrJit9E1772sVlIv7Q%2Bb%2F%2F4ZqPgCeTuQMSfnxbMLNGltxw4HFv1iQxwneE4%2BzX&X-Amz-Signature=ba9e64d0ee4bb5795cd9b27e6a8480f2db5c7f12480d797b25dc33bc222c4f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

