---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVGVOMG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaKD3BabSq3JdPz4L2F2mxtMRy6iSR1Gfe5tg9z0sAYwIgc1orS%2FWPlsXHxQtIXdLA4II78Yd30UmH2RZjG%2FfvwtUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBj5atASPhvgVmRr7SrcA6nyIuiAFapVQe6CTtJ9HLlLomCVHG2U8g2xBzUp4Pl9N6AOiLWd%2FKZ3ROuLl8azzGpRV8m4oELOR4bkiszZ89sOQg8aZ9WP2JioKETelYiKtgUTWsNNnu1Ry7cL56Xne%2BsABtT%2BSI9iHnTY%2BVAbO7%2BABHxztUgca1Old9BToVyJAsI7wlAVdKvMXE%2Fm%2B6vTlKo5BgjSyrhAwMii0JG75YEUqLD%2Bzlv9zU5%2BHJ0cTPC7aqPX5%2F7G8UShs3E2kPZS5MjVmVMdF9%2FaTxxjzdp6AcbYeGQDXEZOQHcjAmo1%2FmtAweIxhsL9bDK3Zh9DPUQ4COSQeIwWh0bXsM6ne1%2BiJ9dbaI2FJwoQ99cWV9hjqsEauvjl8MVEfLpmcuKXE2Zcgllpdh%2BFarIHm46rTUcdgyDTU1xUmapsd8ze2LH9TbRw36LsRRT6UR7MgS%2FvvfnAySP9BtQDf95GEG7a5RmHtKsUyfucSrQtQbkP2wa8Esdwc7hfRW4%2FxIR%2BUuutrXzE9kics2giLUJiihZC9Vw589MADn18uBecoieDaQ8xObAUZIlnWmhIiwJ%2B9ksSsgmrAERgfAHpwVp57%2Br9Q8Ig4CXWfggym63nDBtRg%2FMexJWECBs%2FqlA7sg%2FSfd2pMN7v2MkGOqUBsTDOC%2Bd8bI9NnYdq1lR1AcarjaSuJrFGp5B29CWnyXis24cXUMV7hrBZMFMqfKYsgQQjhlyyfN2JyAE5fwfZqMwQ2mRquTYAwiX8mLY4TKib3IjeXSXjXi1ya%2BjhmY9iZqNYSiHyqmQy0smQ%2B%2FYr6bLF%2BOpfm43Gfh6YbGvH601rtmOQu57v5qlgcjWq6I9iSNGMZSo%2FrB3o2mDm6Wu9wN8eAmxK&X-Amz-Signature=120ea5306448ab394fb5257111c6a8242e1f7974d5f2a008f8b41ed6e80310b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVGVOMG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaKD3BabSq3JdPz4L2F2mxtMRy6iSR1Gfe5tg9z0sAYwIgc1orS%2FWPlsXHxQtIXdLA4II78Yd30UmH2RZjG%2FfvwtUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBj5atASPhvgVmRr7SrcA6nyIuiAFapVQe6CTtJ9HLlLomCVHG2U8g2xBzUp4Pl9N6AOiLWd%2FKZ3ROuLl8azzGpRV8m4oELOR4bkiszZ89sOQg8aZ9WP2JioKETelYiKtgUTWsNNnu1Ry7cL56Xne%2BsABtT%2BSI9iHnTY%2BVAbO7%2BABHxztUgca1Old9BToVyJAsI7wlAVdKvMXE%2Fm%2B6vTlKo5BgjSyrhAwMii0JG75YEUqLD%2Bzlv9zU5%2BHJ0cTPC7aqPX5%2F7G8UShs3E2kPZS5MjVmVMdF9%2FaTxxjzdp6AcbYeGQDXEZOQHcjAmo1%2FmtAweIxhsL9bDK3Zh9DPUQ4COSQeIwWh0bXsM6ne1%2BiJ9dbaI2FJwoQ99cWV9hjqsEauvjl8MVEfLpmcuKXE2Zcgllpdh%2BFarIHm46rTUcdgyDTU1xUmapsd8ze2LH9TbRw36LsRRT6UR7MgS%2FvvfnAySP9BtQDf95GEG7a5RmHtKsUyfucSrQtQbkP2wa8Esdwc7hfRW4%2FxIR%2BUuutrXzE9kics2giLUJiihZC9Vw589MADn18uBecoieDaQ8xObAUZIlnWmhIiwJ%2B9ksSsgmrAERgfAHpwVp57%2Br9Q8Ig4CXWfggym63nDBtRg%2FMexJWECBs%2FqlA7sg%2FSfd2pMN7v2MkGOqUBsTDOC%2Bd8bI9NnYdq1lR1AcarjaSuJrFGp5B29CWnyXis24cXUMV7hrBZMFMqfKYsgQQjhlyyfN2JyAE5fwfZqMwQ2mRquTYAwiX8mLY4TKib3IjeXSXjXi1ya%2BjhmY9iZqNYSiHyqmQy0smQ%2B%2FYr6bLF%2BOpfm43Gfh6YbGvH601rtmOQu57v5qlgcjWq6I9iSNGMZSo%2FrB3o2mDm6Wu9wN8eAmxK&X-Amz-Signature=8c5bd188338e8b39b1a36d89ad9be2b7ded54d1eaf640211c98b8c963541ba5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

