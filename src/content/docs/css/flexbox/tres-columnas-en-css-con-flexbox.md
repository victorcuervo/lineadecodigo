---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AFDDNV2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6QAde2XGa6svRBlMOyotpry4QT%2BR5ZMBMpf8Lc%2FssHgIgfM8Af%2FzNsCD31RnBiqQGC9m0McKRk4sdbwXvttUdawwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDG0BFE1BWkAFPANN6ircA%2BvemJ3gLAxgYDviOqp4IQhDbGhnrGePVAdi5%2Bqx2PTAJea482n8SmI8nYjdTkpczZCf1kNnniGPiQ1RvIrV5IpjAAcRWYdeeBocAAGiV7VcxEpOtmVhrNV2HoFnkD9tfOuuULcPZfnbzfbnXO8vDEy2DF7nqrrtnr1QqyeOO5sY6KUVVcAwzHYpTmmppi1FMIbfK7qNnXRjoTE9O9U9YqE4XQk1kxd4bAC%2BhzVjkmH1nvbH%2FO3CuM0N%2BYuA1UJi7LJd1vKOCMNZ2uRYotInoCt4to0yRcZrqss1Y7j5NicAzFun1Mo%2Bjk1eeZcbRzhYoU0%2FC5QheebzGImsT0HVtxPdwbjpp1zHwCzKgTmbJrHxxntJZxeEuXG3UiLsRoTL3hfuVc37BahhOlXP3%2FSX2MvCbK%2FAVS615TpgvOQsXpOG1DiXK6snnUyGeuvY4Ekvj4ewF7eGTjXNQTQjFruTYfrPXWpAObVwTm4pe0Xa1j%2FdDCaaxTRExlL8EaKjtf81nRIediPTxzKgHHRDLP51hrG3iCi%2F2WOXvRdFbEjTS9EeB0josCsRalaNpxUpRRc0IYb9irWKx4dopZxsHGCGJpbJmBW9RvQoxvBKsJ73jOFUMzrXqL3RZhgXYY6fMKnrz8kGOqUBHn8EDlSLAwVipWg89hSvt%2FWbMDjTluGy%2BhJ7Ia8pWM%2B%2FKW7v5V8Xoo7wW1ym6QEBZaaIAd%2FcsXXa8%2B%2FiUggBs2zNRGE9FPIZkh1P3OU66FCislt%2B9WsbLOkohNQwdKjn4MsiMlAPqeMza9h3QhM%2BZl7sgjY7uLB2BJwGVC%2BRTD7Qu0U3GVYwtF0IXBUlXV0HF697XN%2F7pG4rolGfd2j%2FkIiquy%2BJ&X-Amz-Signature=3d6856867b12440a6bc5c6ee8239817dee942831c6f653bde87783d0f33046ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AFDDNV2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6QAde2XGa6svRBlMOyotpry4QT%2BR5ZMBMpf8Lc%2FssHgIgfM8Af%2FzNsCD31RnBiqQGC9m0McKRk4sdbwXvttUdawwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDG0BFE1BWkAFPANN6ircA%2BvemJ3gLAxgYDviOqp4IQhDbGhnrGePVAdi5%2Bqx2PTAJea482n8SmI8nYjdTkpczZCf1kNnniGPiQ1RvIrV5IpjAAcRWYdeeBocAAGiV7VcxEpOtmVhrNV2HoFnkD9tfOuuULcPZfnbzfbnXO8vDEy2DF7nqrrtnr1QqyeOO5sY6KUVVcAwzHYpTmmppi1FMIbfK7qNnXRjoTE9O9U9YqE4XQk1kxd4bAC%2BhzVjkmH1nvbH%2FO3CuM0N%2BYuA1UJi7LJd1vKOCMNZ2uRYotInoCt4to0yRcZrqss1Y7j5NicAzFun1Mo%2Bjk1eeZcbRzhYoU0%2FC5QheebzGImsT0HVtxPdwbjpp1zHwCzKgTmbJrHxxntJZxeEuXG3UiLsRoTL3hfuVc37BahhOlXP3%2FSX2MvCbK%2FAVS615TpgvOQsXpOG1DiXK6snnUyGeuvY4Ekvj4ewF7eGTjXNQTQjFruTYfrPXWpAObVwTm4pe0Xa1j%2FdDCaaxTRExlL8EaKjtf81nRIediPTxzKgHHRDLP51hrG3iCi%2F2WOXvRdFbEjTS9EeB0josCsRalaNpxUpRRc0IYb9irWKx4dopZxsHGCGJpbJmBW9RvQoxvBKsJ73jOFUMzrXqL3RZhgXYY6fMKnrz8kGOqUBHn8EDlSLAwVipWg89hSvt%2FWbMDjTluGy%2BhJ7Ia8pWM%2B%2FKW7v5V8Xoo7wW1ym6QEBZaaIAd%2FcsXXa8%2B%2FiUggBs2zNRGE9FPIZkh1P3OU66FCislt%2B9WsbLOkohNQwdKjn4MsiMlAPqeMza9h3QhM%2BZl7sgjY7uLB2BJwGVC%2BRTD7Qu0U3GVYwtF0IXBUlXV0HF697XN%2F7pG4rolGfd2j%2FkIiquy%2BJ&X-Amz-Signature=32aecfb0e87f679953a74061206082299a307930af632126af466f9b992df33b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

