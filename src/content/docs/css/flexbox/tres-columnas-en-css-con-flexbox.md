---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOMQYII%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9EOJVmKGttJzFjYkgJFZ5KFq7Nx0ElPBgobxFSjWV8AiEAoYtUhegokWcTL5aqska7axEExrOW8mwaxRe7tTbHamUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLjih16%2BUvym1%2Fr6CrcAy3P2oOH%2BNA6qo41HzXNw7kvaBM7t2l2r4NBoI6DC2xa4ZUV0DINGHjvYkIxJk267NRQOaA45AsLBbS8Ho7e2HZw3D%2BxQYZ48OOcVBYfKMM%2FzR4wlWO%2B8wet4eKK%2FerFT%2FqApCf2Ma8XORdX%2B%2BYCN1BE%2FetqBITTBDvW0PNNTP6Sg0VtMivaNFnvoktoAfLG9NLwW%2Fzsj6un0SlSVkJpChF1K7klGnP3I8c5B1a3LkYCmBTVF2wSJSRNMbosDvAVLzAE7wDQU6ljTOxrWcbeysdFxDkmnZxlyb520U3Qt6ict2FxmMOJRiMiLwpXUgf5k36TUEIMRS0JrNu%2BQg1CwLKwwfa5Lww7M3%2FP98fcX%2BBj7cHyGT1dWKua7fsKgF9vcWsu33lQks%2FsnSVYEfqX21tAzsTrb3VMYl6nIp80DNmmZCpU%2Fpkf%2FX%2FyokIxskdHyg%2BO%2BQGLoGIs9u%2B6bgLCYl%2FfTs9eWCZhAynm5G3NsHt8wIWJ3gHzjj3tkpFdf8fC09tHKDFV7z%2BxZTLXXcU%2FNsK3n5dWkWw3FGUBMNTtHYv6joSznCWWd64yhZJJjB%2FzIUPAbYluY5A2sWao%2Bo%2Faof%2Bd0h%2B5HNtGsOMVSToqcBO94RLpwxma1gJvtrLQMLGA3ckGOqUBmy65fec6gOBUjXb0OhtQQUTHwtWOPqL8fi5pBpGNqO%2FjO0nT3fqP9YHINH0B17Qll22C7tlT4Iii8uqIwPEv6te0htOubYZg7CJt9AKZxDJm6yet13qmkdaxT32Yv4Xxxz1iTz%2BMHifnI17Ay2FrTJQtpdR%2FY6QkDjzegRCmvEeRoyyNpNPLZwFESRnuPHQZOrJJoQL%2BsqhWwjv%2FRtYs1GMn35gD&X-Amz-Signature=c34fdfa9e7a218806fc711507fee077e2c56c4cd58bcfa582bcc8bf021a7066d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOMQYII%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9EOJVmKGttJzFjYkgJFZ5KFq7Nx0ElPBgobxFSjWV8AiEAoYtUhegokWcTL5aqska7axEExrOW8mwaxRe7tTbHamUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLjih16%2BUvym1%2Fr6CrcAy3P2oOH%2BNA6qo41HzXNw7kvaBM7t2l2r4NBoI6DC2xa4ZUV0DINGHjvYkIxJk267NRQOaA45AsLBbS8Ho7e2HZw3D%2BxQYZ48OOcVBYfKMM%2FzR4wlWO%2B8wet4eKK%2FerFT%2FqApCf2Ma8XORdX%2B%2BYCN1BE%2FetqBITTBDvW0PNNTP6Sg0VtMivaNFnvoktoAfLG9NLwW%2Fzsj6un0SlSVkJpChF1K7klGnP3I8c5B1a3LkYCmBTVF2wSJSRNMbosDvAVLzAE7wDQU6ljTOxrWcbeysdFxDkmnZxlyb520U3Qt6ict2FxmMOJRiMiLwpXUgf5k36TUEIMRS0JrNu%2BQg1CwLKwwfa5Lww7M3%2FP98fcX%2BBj7cHyGT1dWKua7fsKgF9vcWsu33lQks%2FsnSVYEfqX21tAzsTrb3VMYl6nIp80DNmmZCpU%2Fpkf%2FX%2FyokIxskdHyg%2BO%2BQGLoGIs9u%2B6bgLCYl%2FfTs9eWCZhAynm5G3NsHt8wIWJ3gHzjj3tkpFdf8fC09tHKDFV7z%2BxZTLXXcU%2FNsK3n5dWkWw3FGUBMNTtHYv6joSznCWWd64yhZJJjB%2FzIUPAbYluY5A2sWao%2Bo%2Faof%2Bd0h%2B5HNtGsOMVSToqcBO94RLpwxma1gJvtrLQMLGA3ckGOqUBmy65fec6gOBUjXb0OhtQQUTHwtWOPqL8fi5pBpGNqO%2FjO0nT3fqP9YHINH0B17Qll22C7tlT4Iii8uqIwPEv6te0htOubYZg7CJt9AKZxDJm6yet13qmkdaxT32Yv4Xxxz1iTz%2BMHifnI17Ay2FrTJQtpdR%2FY6QkDjzegRCmvEeRoyyNpNPLZwFESRnuPHQZOrJJoQL%2BsqhWwjv%2FRtYs1GMn35gD&X-Amz-Signature=6a211e38e7d5f76bcab75c96aee81b0474571c0c6ccfab33d022ca5a98060f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

