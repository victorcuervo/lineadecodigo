---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCU5DIVM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsM35utDvORXylbL27Pk%2B4wnTod6yQ%2Fe6LSxABM7v2cwIgV5otrDm19RKEk3uYSVD6Y46u4VKKxE%2Fkr6kpQRQE55Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDH53dnw1YtJaHhUDVircAxAWHLjfnmPZ2FVx0jFTVu%2F5FPTdK2tWI7pI2N6TH5Z8HmMsuWIzuD2pNAlKIlVRTgmGzjPu6XnyHkEwOpQwhrz4tD61le3aV4HCJebe6tV3w5wgB9ePq9iJIBfQqLpxmVNwiBUdLjjG5yReeCMDn3F%2FrNxWDGpv1a7LM2Y51delpvcubH6DLKcSwmzrHY0nhjBCFPbnYI9p7SrwFX6N2or06mMKrcEgKWGycyi%2FLROQPUqyJBVh8eP6ZvKvdHL34z9uPnWKD9iaDlU%2FG3Q0dVY3N32RbSEhfwU0rbiyn38YeVlsfLwnNTQzfUkW85TUxdlqn1DNik3qJzUEVVbbaiTTQnmEML%2Fh1peTzWdXkiXN6zsFSzayIs3lVQgyhpMWdU5OjPIP4HhGtRNYRjUPrY%2Fa9qpSiwyRa97sp9BZDzZEqSSq3Lv5qUbzDMtkQvEXa0F1014nX2RWmGPZZ5VX9pO7eRomkk%2FLi4Pp6sfbjLhPVwrOJlDSO2wnvjpNHYNv1rNjgB%2FccMGL3b964B3Bzn3XFTvO8wpc4ZgLV3P2Ok0vuQf4CObR3JKnTIHzGylMFEvwQoM1KGfHEUxokL8k1Fo6v5YV8pRTV7LMpUKeqXZuYQTTRCBdaNzLuv%2BzMM2m0MkGOqUBBP9S0iyNq2IojO1gqnSHIxPvHvorrydT9h%2B8dqwLU6iEvlaHilcmBNTv3Gp%2BeedOPea3SAE1Mw%2Flb1yp2nzMooNzgwPxEUpWRNc5h11S21vNgNgcL2ogc63W1m%2Bq%2F%2FhhZNZrzDPINgqke%2FemTgGZ0iE7IO3j9eg%2F0TGIV7iKoEmZSX%2FegkBjddNeUp%2FWjMdRw%2F%2Fps6kTrarBpb3R0%2FbxhnsMHpos&X-Amz-Signature=1a3f75d7f03cd88fcab977b2a39bb08c7f0af613e14eabdab568d61e05024143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCU5DIVM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsM35utDvORXylbL27Pk%2B4wnTod6yQ%2Fe6LSxABM7v2cwIgV5otrDm19RKEk3uYSVD6Y46u4VKKxE%2Fkr6kpQRQE55Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDH53dnw1YtJaHhUDVircAxAWHLjfnmPZ2FVx0jFTVu%2F5FPTdK2tWI7pI2N6TH5Z8HmMsuWIzuD2pNAlKIlVRTgmGzjPu6XnyHkEwOpQwhrz4tD61le3aV4HCJebe6tV3w5wgB9ePq9iJIBfQqLpxmVNwiBUdLjjG5yReeCMDn3F%2FrNxWDGpv1a7LM2Y51delpvcubH6DLKcSwmzrHY0nhjBCFPbnYI9p7SrwFX6N2or06mMKrcEgKWGycyi%2FLROQPUqyJBVh8eP6ZvKvdHL34z9uPnWKD9iaDlU%2FG3Q0dVY3N32RbSEhfwU0rbiyn38YeVlsfLwnNTQzfUkW85TUxdlqn1DNik3qJzUEVVbbaiTTQnmEML%2Fh1peTzWdXkiXN6zsFSzayIs3lVQgyhpMWdU5OjPIP4HhGtRNYRjUPrY%2Fa9qpSiwyRa97sp9BZDzZEqSSq3Lv5qUbzDMtkQvEXa0F1014nX2RWmGPZZ5VX9pO7eRomkk%2FLi4Pp6sfbjLhPVwrOJlDSO2wnvjpNHYNv1rNjgB%2FccMGL3b964B3Bzn3XFTvO8wpc4ZgLV3P2Ok0vuQf4CObR3JKnTIHzGylMFEvwQoM1KGfHEUxokL8k1Fo6v5YV8pRTV7LMpUKeqXZuYQTTRCBdaNzLuv%2BzMM2m0MkGOqUBBP9S0iyNq2IojO1gqnSHIxPvHvorrydT9h%2B8dqwLU6iEvlaHilcmBNTv3Gp%2BeedOPea3SAE1Mw%2Flb1yp2nzMooNzgwPxEUpWRNc5h11S21vNgNgcL2ogc63W1m%2Bq%2F%2FhhZNZrzDPINgqke%2FemTgGZ0iE7IO3j9eg%2F0TGIV7iKoEmZSX%2FegkBjddNeUp%2FWjMdRw%2F%2Fps6kTrarBpb3R0%2FbxhnsMHpos&X-Amz-Signature=aa66dda4893d6c3c695cf949a9fe0517b42f72597e8a193d4617ed5f56a97bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

