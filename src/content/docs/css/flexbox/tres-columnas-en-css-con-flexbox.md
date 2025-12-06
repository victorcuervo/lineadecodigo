---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDHP6PY4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdMt20LaRoiGFy6YnW3wwhB5HYd91sEK%2FQsxYxq1U0FgIgC2xxgajXNmrFlirEuumFrssGLdQOdAQx7J8mQaX7%2BrUq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPfNxKYTNMD0tD%2BkZSrcA2q90viG1%2FjfmHra3g6DuczTW%2Bfal8CIx2q%2ByFy5ECvRr00eD6dBBmiLfC6YoFFP2B3OxekkJIcWBkcj%2B0yOqDPR0OIMYP3z%2BrNT33m6uoRMnPs%2FnYgYK5cCB%2BTSd%2FGmnPvtXDtPL%2BJiLSgqAvdNEOm6rxChSGF6sONY1feyi4OubV3PZu4VlK5cqm%2B5Cur3Nh2wByYszdWNv2qsOHmtSdE8oltqTDCFvuu%2FOyQ%2Bt0IhQj%2BNcmDqqA%2BO8O8IAygQ%2BjvJ0cEmFdbeaIicVv9OPUDBfwLNUHC0AS8jzfE4Jad7CG8Vso0ZD1xFys1zDKS43JamTsZHcignUWrm8bXfZEsDPDdQdv5DrgV85fAsi6sP4%2Bi184jrcqvKqp%2BuyYiERj9hgFoujqJRK7yX%2BKhCqKRok42gaReNSinH1RUYO5mTHd6svyfF6z%2FwG29jQYkM%2Fe37x48bSTA52H5eUGSYZQUOeJMK6NVcavje1JoWMFjfgius6i0gajFRzdeF0G7ugEZe1KExJm1z0A4wbWYWvSfcc06UKC7I3sNfo7BmxIJvfBjrrXxD8geyJSjKXCbKsqSzuWw%2BpI8GltbezfOe5pFMLHekV6EjN2XGLoffdQUoftRCRYGl6Z%2B440eCMLPT0skGOqUBS0uzPF2fw1zZxKffFAQajZjJV6oArZjmpUURsvc19WnytgMy5symKL6jCSS04ChDOkyRVxPfIh%2BLKRUGaaoQkxcV0KGzcEoeV%2BV3fPnrchl4h3WjPrR2p04r7UMmq7OfJcfO5K9iM3EvFzxm7cdJZz9xGy3LDOykHUALPiGtXd9c3zUBoeJV06ekaL8qiIMgOsvoZ8bCIoYwAh7LKw0fHV2ZyRsh&X-Amz-Signature=5f30c573c595da56402537615b3de268380090caffc84856563858620a555332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDHP6PY4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdMt20LaRoiGFy6YnW3wwhB5HYd91sEK%2FQsxYxq1U0FgIgC2xxgajXNmrFlirEuumFrssGLdQOdAQx7J8mQaX7%2BrUq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPfNxKYTNMD0tD%2BkZSrcA2q90viG1%2FjfmHra3g6DuczTW%2Bfal8CIx2q%2ByFy5ECvRr00eD6dBBmiLfC6YoFFP2B3OxekkJIcWBkcj%2B0yOqDPR0OIMYP3z%2BrNT33m6uoRMnPs%2FnYgYK5cCB%2BTSd%2FGmnPvtXDtPL%2BJiLSgqAvdNEOm6rxChSGF6sONY1feyi4OubV3PZu4VlK5cqm%2B5Cur3Nh2wByYszdWNv2qsOHmtSdE8oltqTDCFvuu%2FOyQ%2Bt0IhQj%2BNcmDqqA%2BO8O8IAygQ%2BjvJ0cEmFdbeaIicVv9OPUDBfwLNUHC0AS8jzfE4Jad7CG8Vso0ZD1xFys1zDKS43JamTsZHcignUWrm8bXfZEsDPDdQdv5DrgV85fAsi6sP4%2Bi184jrcqvKqp%2BuyYiERj9hgFoujqJRK7yX%2BKhCqKRok42gaReNSinH1RUYO5mTHd6svyfF6z%2FwG29jQYkM%2Fe37x48bSTA52H5eUGSYZQUOeJMK6NVcavje1JoWMFjfgius6i0gajFRzdeF0G7ugEZe1KExJm1z0A4wbWYWvSfcc06UKC7I3sNfo7BmxIJvfBjrrXxD8geyJSjKXCbKsqSzuWw%2BpI8GltbezfOe5pFMLHekV6EjN2XGLoffdQUoftRCRYGl6Z%2B440eCMLPT0skGOqUBS0uzPF2fw1zZxKffFAQajZjJV6oArZjmpUURsvc19WnytgMy5symKL6jCSS04ChDOkyRVxPfIh%2BLKRUGaaoQkxcV0KGzcEoeV%2BV3fPnrchl4h3WjPrR2p04r7UMmq7OfJcfO5K9iM3EvFzxm7cdJZz9xGy3LDOykHUALPiGtXd9c3zUBoeJV06ekaL8qiIMgOsvoZ8bCIoYwAh7LKw0fHV2ZyRsh&X-Amz-Signature=7e5703505f42d999b117ad09b96acd3fedb10dbcc25c4a720d519abaf30a8dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

