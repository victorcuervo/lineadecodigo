---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJZE4OL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOFO8obb8G432JV3hPIYcC00uG0y8TJyiEoE2cfllP5AIgNjFWLW5cKHdjHhK4u5V6hVzrAbwq%2BkKOYWCPiVsSqCoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICrVmnZNaC7sRyAuCrcAzB4OOU1vLA88HmR%2FzkivjgDw%2Fy3rXnxQrubnRHZHQGP5HtdBtCkzb%2BVZEyxFFdYmF9yzISWgrxpu3PutVS7K55D0eelTP%2FQlTVrw486xizMASlqDGfITGu2fw8OcDpWpuGAJ5bzvfCTlAYDfMm7dTNC%2BQ1ymBoevQ8TIMTLaS5TbDpDOdVGMd1z487JnLzMsz%2FgSLYu7ZLjYVagh06S7tOFiy1xDDUiC2c3j13glZbQke5l%2Frg%2F3Bwbe3VD1LL1Go5kp7PYWns%2BBFZYnzd2oqXFwHUGwlvpS3t%2FbrEvNn1uUg9clDyoH1M%2Fz2KmYwAHSVwiBiQ4p5UjOctaMRzfAIhHi%2FInJ64zlG%2B5vZPjQqk8wIUnFzJLhdoBHtoZon%2B%2BauSt9zfTRolbwNEkbwI4n4VKW%2Bi7ssSjH163OluOA4cRWpUzZWX1oNM%2BshMIPlmDf8TohWvN2UuQJjPfj1OlH0uae%2BfVIZilBJeZC0zWqPLYvmW8vTji5hHREixviCNUnpUynCvsR9uJHnLXBGyISLcg%2FT2M9V3XEfncED53h%2BiFCylWDoY%2FPxqAAE0zA%2FRNabJ3i716RCcKnwFYZjoPihFGj%2F3%2FGf0gJB8U5xCJSBDxTKaN4GNBOWwB2kQyMKmZ1ckGOqUBK7u%2BBsfxQB8hwYuzAbtiSkHItrpQe5e8f%2BPRczvavJJiSPoaf4r%2FXiER%2BOwdSPElNipUa%2BVQWUkXL%2BN9wmPa2DUPrBZVJ9hAUzP9KN3BSqCovIDp40267AnBiY3EP9vX7NCQZFyYAm%2F4sU0UfeG%2BvYVYnVGfFz9f3MquZ16%2Fsjj1Luz70z67ESF%2FmEp%2BFBvqKD5kU7R40R9k3ylXyMXki8v3qC%2Bz&X-Amz-Signature=3562687e256032df75f633e929a9757cb189cee7d67718e96a11d136575f2661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJZE4OL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOFO8obb8G432JV3hPIYcC00uG0y8TJyiEoE2cfllP5AIgNjFWLW5cKHdjHhK4u5V6hVzrAbwq%2BkKOYWCPiVsSqCoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICrVmnZNaC7sRyAuCrcAzB4OOU1vLA88HmR%2FzkivjgDw%2Fy3rXnxQrubnRHZHQGP5HtdBtCkzb%2BVZEyxFFdYmF9yzISWgrxpu3PutVS7K55D0eelTP%2FQlTVrw486xizMASlqDGfITGu2fw8OcDpWpuGAJ5bzvfCTlAYDfMm7dTNC%2BQ1ymBoevQ8TIMTLaS5TbDpDOdVGMd1z487JnLzMsz%2FgSLYu7ZLjYVagh06S7tOFiy1xDDUiC2c3j13glZbQke5l%2Frg%2F3Bwbe3VD1LL1Go5kp7PYWns%2BBFZYnzd2oqXFwHUGwlvpS3t%2FbrEvNn1uUg9clDyoH1M%2Fz2KmYwAHSVwiBiQ4p5UjOctaMRzfAIhHi%2FInJ64zlG%2B5vZPjQqk8wIUnFzJLhdoBHtoZon%2B%2BauSt9zfTRolbwNEkbwI4n4VKW%2Bi7ssSjH163OluOA4cRWpUzZWX1oNM%2BshMIPlmDf8TohWvN2UuQJjPfj1OlH0uae%2BfVIZilBJeZC0zWqPLYvmW8vTji5hHREixviCNUnpUynCvsR9uJHnLXBGyISLcg%2FT2M9V3XEfncED53h%2BiFCylWDoY%2FPxqAAE0zA%2FRNabJ3i716RCcKnwFYZjoPihFGj%2F3%2FGf0gJB8U5xCJSBDxTKaN4GNBOWwB2kQyMKmZ1ckGOqUBK7u%2BBsfxQB8hwYuzAbtiSkHItrpQe5e8f%2BPRczvavJJiSPoaf4r%2FXiER%2BOwdSPElNipUa%2BVQWUkXL%2BN9wmPa2DUPrBZVJ9hAUzP9KN3BSqCovIDp40267AnBiY3EP9vX7NCQZFyYAm%2F4sU0UfeG%2BvYVYnVGfFz9f3MquZ16%2Fsjj1Luz70z67ESF%2FmEp%2BFBvqKD5kU7R40R9k3ylXyMXki8v3qC%2Bz&X-Amz-Signature=eff55fd8aa3e908a6b673f54053b3054aeab693b65217fcfa3806cd93a566802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

