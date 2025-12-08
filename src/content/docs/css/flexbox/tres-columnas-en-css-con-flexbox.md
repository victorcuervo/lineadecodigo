---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXE3H6Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP0G125YzuSnSO62jOE3HRshspNR%2FNNr1kyqI5OtkbRQIgUVBwU5%2FlCeuz64ap2sAyIhYNVaDHn%2BRgA4sNzf5Rb3EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyZAby3DipVB96%2B%2FyrcA6WwQoRNOmnTahDVJmUmOSr4xXVCM%2FUFXzMZeQdkGFuWDI%2BBNQeKQoIIRNXBewwpySHBMfhF2kMcui7X7TNNzcWARodqYngKRZli3zl1zRfyKaWkM7trDJha4LVJN%2BuejuI8IhM5YTw998TCVJ5ICnr%2BaMJ5UAy9b%2BnNwLMVU7ZcRWkUGFckTV3XrrbkItPXo4zoL1Y9qSRoTTCcEUf7Dyufui12oQREYzX8m1mPgpdrpGP6%2F2aj5TK4zzJBQKQ%2FBlWaPnqcOheXA2n2jX5CClFSmzBHQ%2F9EfjkY27hj9WrFcOag8ScK%2BHat1lIjxFZtGETEJnNhsc0wIoCq%2BfCzNaqFWt4Sd997Qz3U0tnvp7tu2Z0MdxrZtjiQI8wTgsvuyF1IdbYO%2F5B%2ByX%2FmCsILuWwXDm%2BJJPXqYA%2FBOnjvDBPzpvmY7bjfMtHwBYB3NBSD0x8uxxMiiCmXVb2fr9fiYxjzA0dslhp3YiMFI5EMEbWHFKQYKSlCmu4XVHa%2Fam%2F8BSotoprci5lxPaRWh19rcI9eld0K7IysKeJGCPbiOaS88UaEOGbGZHOmx2kDhqYvAdcC6I9lrOqOjhcAU8UYnghD0ZMuMlluPxENM6uDt%2F4POPfQgEgYj2wKf%2BhZMOvu2MkGOqUB8OkHaQHH9X6Pa%2FJGGbC9SKgQ3fdiBEgkfb4PbIQpOYDTL2cu2m3uoRkDKIgHYeqdBhlGjBK%2F06gRF463I4h5GAlTQUf%2BiuYyGQ1toSu517tdTB%2BwhW0Hw2%2B7cq%2FO5r%2FVSq3IQSNdZm%2FNxpiFVuDS78w0eP%2B6tUOluMRsdsN%2FAe1OEQYhBhAMUm5qIDtgb4hskaX0je%2F8ESIJYKb1CC%2B7fVM%2BVkQ4&X-Amz-Signature=de5c1a4306ad919983fb761cb51f99318b9ca68dcf1b47fcd8a0d5322c7194ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXE3H6Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP0G125YzuSnSO62jOE3HRshspNR%2FNNr1kyqI5OtkbRQIgUVBwU5%2FlCeuz64ap2sAyIhYNVaDHn%2BRgA4sNzf5Rb3EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyZAby3DipVB96%2B%2FyrcA6WwQoRNOmnTahDVJmUmOSr4xXVCM%2FUFXzMZeQdkGFuWDI%2BBNQeKQoIIRNXBewwpySHBMfhF2kMcui7X7TNNzcWARodqYngKRZli3zl1zRfyKaWkM7trDJha4LVJN%2BuejuI8IhM5YTw998TCVJ5ICnr%2BaMJ5UAy9b%2BnNwLMVU7ZcRWkUGFckTV3XrrbkItPXo4zoL1Y9qSRoTTCcEUf7Dyufui12oQREYzX8m1mPgpdrpGP6%2F2aj5TK4zzJBQKQ%2FBlWaPnqcOheXA2n2jX5CClFSmzBHQ%2F9EfjkY27hj9WrFcOag8ScK%2BHat1lIjxFZtGETEJnNhsc0wIoCq%2BfCzNaqFWt4Sd997Qz3U0tnvp7tu2Z0MdxrZtjiQI8wTgsvuyF1IdbYO%2F5B%2ByX%2FmCsILuWwXDm%2BJJPXqYA%2FBOnjvDBPzpvmY7bjfMtHwBYB3NBSD0x8uxxMiiCmXVb2fr9fiYxjzA0dslhp3YiMFI5EMEbWHFKQYKSlCmu4XVHa%2Fam%2F8BSotoprci5lxPaRWh19rcI9eld0K7IysKeJGCPbiOaS88UaEOGbGZHOmx2kDhqYvAdcC6I9lrOqOjhcAU8UYnghD0ZMuMlluPxENM6uDt%2F4POPfQgEgYj2wKf%2BhZMOvu2MkGOqUB8OkHaQHH9X6Pa%2FJGGbC9SKgQ3fdiBEgkfb4PbIQpOYDTL2cu2m3uoRkDKIgHYeqdBhlGjBK%2F06gRF463I4h5GAlTQUf%2BiuYyGQ1toSu517tdTB%2BwhW0Hw2%2B7cq%2FO5r%2FVSq3IQSNdZm%2FNxpiFVuDS78w0eP%2B6tUOluMRsdsN%2FAe1OEQYhBhAMUm5qIDtgb4hskaX0je%2F8ESIJYKb1CC%2B7fVM%2BVkQ4&X-Amz-Signature=c8cfc25214cc6bdea18ca7191cdef18a83ba275bd0b78f27b0217213bfaf1e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

