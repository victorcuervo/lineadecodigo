---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCCAZVH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0bVpnCkl3RC1ONevH91XH95D%2BIAfgOLxEQD3hJYYtMwIhAJEfoU0ERbyJzzDPi1Tx9QxvTCoNySbAE9salDPs%2BsleKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvdeRtaGZSLYqUgnsq3AOn7ZI1r3ayyrJMbcG07uUNC1d5KrkLaJ7CuUmnFQvMxzO3EPorvAjejfPwoB4cLjd8ExRpbLsmRb%2BbKF9bLF4MtGVrBbmlFQ0cdrGy1t%2Fzus4%2F9ibIMZ5nJavuljB772HSr8JLg3%2BuRzcAU%2BuDoVGwT8k%2BWGZIWG7b2EnMSfZQXK%2F57L8DzUuosHJffuaAs3kCptQHHAJPqxFZglIvmFFRzTLjdUhqSW%2BKXbtmUN0jLVX2%2FeK00Xg0v8aoaf%2BRiGV82V%2BXmwx7UNkkwEXRY9PinKAJ9n352242i76l6CjvcebeJdz6%2BPBSoNG%2FFXECb49LgMwXaBJKFW8mgTtsrX4Fpnm8dVHVFLkc0KryYbxJ%2B14ehPzhR2rbHwKB4ug2XJOQyAd3SeYqPbZ9hlg46PQKa1PKUP4KLiH3DNw9ci2NkeFrfgxCF6oR86pNgKrGqFI0OvnrGDKKNnvqWkXMv%2F6IbtfUL6QIgxeufFa0oIXuVCoAx9G8%2BzWCF3gCnFB8XssFjzmaesLjrUp7x1%2B9A5qKbQs38eKf%2FBa%2FnSOBxTb%2B3IeIga78gmQyE9vl3RdrOOIAwKwJy9tVTHVMzEckpQDOguUV2wcqFcpPBkVJXYKMKQ1GjYNaGIhScKLgLjDYtNnJBjqkAVt36LzLzEMDLQf0aqskHhF1Knz0Y%2BHUEJfCfDizJc%2BZ4degwTv8WSmDb19YSwg%2F4c%2BOvL0SBu5D5bNSmPAJbgDbvUY0UpY8F4FE2l5fkPcT7P%2B06O%2BofMfyayElldGKPnKKE1u73k2%2FAmbKx%2FTpGTivFAa1EdzfUbuRaI%2BAWAZ2piEwP5WVP8OpV%2B3fJIGrsPUIaIk1FujA7Hw8NN0y9rEyUEAj&X-Amz-Signature=7c78e6ffebbd0051744fe3eb926b29a3c741ba41fad75ebd927be39a98d6eafa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCCAZVH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0bVpnCkl3RC1ONevH91XH95D%2BIAfgOLxEQD3hJYYtMwIhAJEfoU0ERbyJzzDPi1Tx9QxvTCoNySbAE9salDPs%2BsleKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvdeRtaGZSLYqUgnsq3AOn7ZI1r3ayyrJMbcG07uUNC1d5KrkLaJ7CuUmnFQvMxzO3EPorvAjejfPwoB4cLjd8ExRpbLsmRb%2BbKF9bLF4MtGVrBbmlFQ0cdrGy1t%2Fzus4%2F9ibIMZ5nJavuljB772HSr8JLg3%2BuRzcAU%2BuDoVGwT8k%2BWGZIWG7b2EnMSfZQXK%2F57L8DzUuosHJffuaAs3kCptQHHAJPqxFZglIvmFFRzTLjdUhqSW%2BKXbtmUN0jLVX2%2FeK00Xg0v8aoaf%2BRiGV82V%2BXmwx7UNkkwEXRY9PinKAJ9n352242i76l6CjvcebeJdz6%2BPBSoNG%2FFXECb49LgMwXaBJKFW8mgTtsrX4Fpnm8dVHVFLkc0KryYbxJ%2B14ehPzhR2rbHwKB4ug2XJOQyAd3SeYqPbZ9hlg46PQKa1PKUP4KLiH3DNw9ci2NkeFrfgxCF6oR86pNgKrGqFI0OvnrGDKKNnvqWkXMv%2F6IbtfUL6QIgxeufFa0oIXuVCoAx9G8%2BzWCF3gCnFB8XssFjzmaesLjrUp7x1%2B9A5qKbQs38eKf%2FBa%2FnSOBxTb%2B3IeIga78gmQyE9vl3RdrOOIAwKwJy9tVTHVMzEckpQDOguUV2wcqFcpPBkVJXYKMKQ1GjYNaGIhScKLgLjDYtNnJBjqkAVt36LzLzEMDLQf0aqskHhF1Knz0Y%2BHUEJfCfDizJc%2BZ4degwTv8WSmDb19YSwg%2F4c%2BOvL0SBu5D5bNSmPAJbgDbvUY0UpY8F4FE2l5fkPcT7P%2B06O%2BofMfyayElldGKPnKKE1u73k2%2FAmbKx%2FTpGTivFAa1EdzfUbuRaI%2BAWAZ2piEwP5WVP8OpV%2B3fJIGrsPUIaIk1FujA7Hw8NN0y9rEyUEAj&X-Amz-Signature=57594b0acd421068b96c95dc8fc7832dc1c4b496b5a17d28599e61646af4a7e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

