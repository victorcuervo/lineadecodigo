---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU45WTMR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAfxuUC3Vh1h1QYQrYA9NCXLt4WH2ik1%2BgEqfgGFOKtUAiEAkmgZsPFFqodNhuxAOYOvw33fBOzxQxETWqwcEtCchBkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDM3f3mWCza4sOp7tlSrcA8xwpEW%2BXxx2OI5nYiJd2wdDIFOakETq%2Bd93jLZoouiv3lBi31%2F%2ByV%2B2k4%2B8BcC5FS9seEA4szfaR0EBZW171PebvnCLmuxllQjRB7gIdVX0KjDW%2BtbdA3fxYgo958cms9AXylN5mxOgDj94a74L4xpJeZ90VwsArB5KD%2Fw2YhsTrbJMgQkrsxtvx8XX%2B0XU6fs0V7GsGRlcTpWG%2Bdq65NailNdyzEjLuv7CkZFD%2FCKgpyub6SyZ2Ms4bZwJQuEWdX7iibJWzz2iRv8CCnqHcXeM6GH%2FIntag465jWmdEs5lUrBNeWTSpHkCNn48V1nmsVCBAWS4cnrbwk%2BBaBymmzH6sl7P19TUgdBfcYIbSY%2F7I3ZB9wkD6VYJRDLpuBrW%2FsAGZfgU42VFv8fcz5RD5j57CFkdXeD%2FP6DDmThLQfEUzDOFV1fDf4vwD7ktkQQzvJFyAQwQRQpHGnH3JTeTdsnk%2Bo2kbtcXgA31pGKRSSL6%2FG%2Frmn3wvCvcFt1CBmrnP%2BDW11U5xWnyHipn6v6ny2ZX5TabcPjpiV2C5NKqmag2IsKbFb5n0Lr0bjjbwdBybNAwXDj3Py4CRi4IXQpkyiDpSEVeAIq%2F2KFn32dDADy8AR65rk6ZKY6rSOOyMOGHxckGOqUBo2aYtM%2F7dv7xq5SYr8NDl%2FrSl%2BNqqRCq5AFZ9RDagCCRNN4%2FnJEpOdMa2%2BSqyS7f1Nc4MP6AzohyPuOly%2FgeP8UwH6I9ieZ0wY727VBpP10idIIdjCkaKxt5k1Lg%2FQu1NdYpajA5TiG6EjEGfQ9T6RlaoHZ4qyYpi%2BJG%2FrAblYwszeZqaS%2BxKUHRWQLQBtRlwuXD0s%2FMiX6k3X5lQ7DpD0WvZFUg&X-Amz-Signature=14a49dce2ce90fbee268cbd941d70618937eef7bea889c450fcf32750c6e5b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU45WTMR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAfxuUC3Vh1h1QYQrYA9NCXLt4WH2ik1%2BgEqfgGFOKtUAiEAkmgZsPFFqodNhuxAOYOvw33fBOzxQxETWqwcEtCchBkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDM3f3mWCza4sOp7tlSrcA8xwpEW%2BXxx2OI5nYiJd2wdDIFOakETq%2Bd93jLZoouiv3lBi31%2F%2ByV%2B2k4%2B8BcC5FS9seEA4szfaR0EBZW171PebvnCLmuxllQjRB7gIdVX0KjDW%2BtbdA3fxYgo958cms9AXylN5mxOgDj94a74L4xpJeZ90VwsArB5KD%2Fw2YhsTrbJMgQkrsxtvx8XX%2B0XU6fs0V7GsGRlcTpWG%2Bdq65NailNdyzEjLuv7CkZFD%2FCKgpyub6SyZ2Ms4bZwJQuEWdX7iibJWzz2iRv8CCnqHcXeM6GH%2FIntag465jWmdEs5lUrBNeWTSpHkCNn48V1nmsVCBAWS4cnrbwk%2BBaBymmzH6sl7P19TUgdBfcYIbSY%2F7I3ZB9wkD6VYJRDLpuBrW%2FsAGZfgU42VFv8fcz5RD5j57CFkdXeD%2FP6DDmThLQfEUzDOFV1fDf4vwD7ktkQQzvJFyAQwQRQpHGnH3JTeTdsnk%2Bo2kbtcXgA31pGKRSSL6%2FG%2Frmn3wvCvcFt1CBmrnP%2BDW11U5xWnyHipn6v6ny2ZX5TabcPjpiV2C5NKqmag2IsKbFb5n0Lr0bjjbwdBybNAwXDj3Py4CRi4IXQpkyiDpSEVeAIq%2F2KFn32dDADy8AR65rk6ZKY6rSOOyMOGHxckGOqUBo2aYtM%2F7dv7xq5SYr8NDl%2FrSl%2BNqqRCq5AFZ9RDagCCRNN4%2FnJEpOdMa2%2BSqyS7f1Nc4MP6AzohyPuOly%2FgeP8UwH6I9ieZ0wY727VBpP10idIIdjCkaKxt5k1Lg%2FQu1NdYpajA5TiG6EjEGfQ9T6RlaoHZ4qyYpi%2BJG%2FrAblYwszeZqaS%2BxKUHRWQLQBtRlwuXD0s%2FMiX6k3X5lQ7DpD0WvZFUg&X-Amz-Signature=e28cad469f87d66206a0360d9b98a8ad793d37809510f723cd9176e7e54b58b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

