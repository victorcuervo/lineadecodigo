---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HCFY4FE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU%2FQtSj4ock0OefSajTQLTf6YMFWiJ9aYpJWHIFjxVKQIgNMusVzAXI8lITTNRSGFUOS7MSfwFGtyw0TGjSWfe4V4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6hWqUIW18PiI5oOCrcA9regI3H2bpL3rT6y2avLpv7WREJQ3dBtVaWHULnh2qMvNgl57VFUetG0hhMkAp6jwx4Iu76nnut%2Fi%2BCjQlFwzTtW0ZK1lUyl97ybDSzaXqL48MxoWixj%2BdbHBiiATirqLxde9GEW77j1LzAD5Qja32WLly%2Fj2xrTratfupbtuYklGyi%2BLwHiQdmkAEziZ3ezLheWb2F%2F06NrEurFq%2BhbyEcuAn9eal3Mhy%2BuCM17ZOhPA0HsACOJEcCYyzTcNW%2Fe0QOgEdIOE6BjNqTPwPwPdT%2B32RyeZ5NcXzURyuKByYA0G%2B88exZmVLq9vy1As8gvSvMRsxS0MIRT8V1%2FbJOnZpdWOcxlN7JaRPdfYJrnZUxXOhmSw34wgCP7BwerFiGCuWj7%2B9thKz0vQiPB4sGTxdcDYY4R4wmQamF4Tq0cbmep%2FAA3ZadYTWln7ouYFvjflmWoQKnccsaJ5cXN0geMFFyzkjqkOG8uFB%2F1e6d3g9Jx2rEMfTgHrPT%2FlVvV1wPGUq%2B32YtlR9N3vTSSA8YddR%2FyyezveoYYepsXcx7meT4K%2FVviXGjyWMZ5S2yUskyift04zosfMLAPqUL59uhSHkjEPQKNz82nvX3gdigpTc5psj1%2F2k3woTqyHiDMKzC3ckGOqUBDBYG2w63qUhFUanHuzJlSkqQvkmmG2QN53hWGdR%2FF3gN0EYhoJlCRQhqSPQc4LBTWeX97a7upe0%2Bizd5ZH%2FDUGU4QFo6g2qHCGnlPqxnGv5x2iRwqvwzaduTwtTayyEs03jumJOaFfI%2BKCko7T8MpWTgwzjdkVWTCYjR%2FjBKN62czCZBJs3mqeV71kLMwrtBnwSJakyaMI6zDcvAQlc2rM77q9d1&X-Amz-Signature=9b6325e9eea7bd62433064d5f73ee81859802a5b72b1b557089796850fcb2a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HCFY4FE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU%2FQtSj4ock0OefSajTQLTf6YMFWiJ9aYpJWHIFjxVKQIgNMusVzAXI8lITTNRSGFUOS7MSfwFGtyw0TGjSWfe4V4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6hWqUIW18PiI5oOCrcA9regI3H2bpL3rT6y2avLpv7WREJQ3dBtVaWHULnh2qMvNgl57VFUetG0hhMkAp6jwx4Iu76nnut%2Fi%2BCjQlFwzTtW0ZK1lUyl97ybDSzaXqL48MxoWixj%2BdbHBiiATirqLxde9GEW77j1LzAD5Qja32WLly%2Fj2xrTratfupbtuYklGyi%2BLwHiQdmkAEziZ3ezLheWb2F%2F06NrEurFq%2BhbyEcuAn9eal3Mhy%2BuCM17ZOhPA0HsACOJEcCYyzTcNW%2Fe0QOgEdIOE6BjNqTPwPwPdT%2B32RyeZ5NcXzURyuKByYA0G%2B88exZmVLq9vy1As8gvSvMRsxS0MIRT8V1%2FbJOnZpdWOcxlN7JaRPdfYJrnZUxXOhmSw34wgCP7BwerFiGCuWj7%2B9thKz0vQiPB4sGTxdcDYY4R4wmQamF4Tq0cbmep%2FAA3ZadYTWln7ouYFvjflmWoQKnccsaJ5cXN0geMFFyzkjqkOG8uFB%2F1e6d3g9Jx2rEMfTgHrPT%2FlVvV1wPGUq%2B32YtlR9N3vTSSA8YddR%2FyyezveoYYepsXcx7meT4K%2FVviXGjyWMZ5S2yUskyift04zosfMLAPqUL59uhSHkjEPQKNz82nvX3gdigpTc5psj1%2F2k3woTqyHiDMKzC3ckGOqUBDBYG2w63qUhFUanHuzJlSkqQvkmmG2QN53hWGdR%2FF3gN0EYhoJlCRQhqSPQc4LBTWeX97a7upe0%2Bizd5ZH%2FDUGU4QFo6g2qHCGnlPqxnGv5x2iRwqvwzaduTwtTayyEs03jumJOaFfI%2BKCko7T8MpWTgwzjdkVWTCYjR%2FjBKN62czCZBJs3mqeV71kLMwrtBnwSJakyaMI6zDcvAQlc2rM77q9d1&X-Amz-Signature=e1a370e8ea2f401ee3e89894498d885ea601e1c33452f3afffafefa2573411e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

