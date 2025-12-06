---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYY5BEE7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6xcbw9459xcNxZ7lsLRSs10F1bDII72LZzzvaerOnagIgK3K1g8EUsn%2B%2BgnT36pZ%2ByjzOkjoo%2BQTKS7GU%2BhQ0fQEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIWnj1SpIe0igxJrkSrcA8P%2BAhiZuB9Yx%2FFrqPaHmRdvr8iFMnZJS9eicQtt019dAnV9ns5VjMZsW9AcGrzXj6SjulwrVumeTdosKwvHszwbnHopBeHOe8nVuQKlVcCjYESenTT1vaTdbNRM3YueNBVlpWDo%2B8W34biH9s2RJIBWi8JxITYRzWAG5bv3yR%2BulTP9WMEQ6dRj4ia7xMRfiVGJTe9VvI5FBD4yWPCZXp9%2FJQukAXfKwqpjnwHP8OF9eljjgvN%2BoAuqcQh2vTLDLZUaYzcy2knVepCaJ5MV4fvoeTsuNziyQy9DenZJrphCNqz377uiVExp2DcdX6q4Z4uhDELfgFtvBi%2FvTs3wd9rJQCQCWM5UvgyM12VQury78eDBxvztFYWTI8eUQ2wfJxeoKW9cpXp7e%2B7%2FS27FsTzqamKitI08bgmEsfGyFa5GOYXg2WfGlNrqdZmhCx8qZHITPxN8qPArol8jB4bLsDxqWi2bapyG4Rt4FZpxEKNqtQstSdJ2CsjJqMzKXINjpLk5ZPjDAU3rKlIW9wdad4ji4RRdZ1D%2B9kHDx7wnn0U9X5aC1BOk%2BDcLBRUpIY5BaPzhWB7sQ2gUcj2b1AzKbHUZ7Z1s74M0SNsZevVsEUIRNKGoRcPIsAg3S9aqMIP9zskGOqUBpLgNqBLRFwaQ2zSwJL4shoLP5vjnBiK6WqiMH4rErqX0THCJjU5LWXhFFdsnh95ODtksaaStHoW2J3%2FDCgvAUj%2BVq4gcmf8V7fV%2F3D9wdW6MrXk1zVN2W6v2KV71XUpL9t94UgUURh5o1kvqLumbIjuh%2FohkpqB4Vr2VdBnfDhDPKZMbJhofPag1KMJ1%2FgaCielBgzPHXQ2KtVhZwqa44LWvShhp&X-Amz-Signature=5218c64b21cd46abf19c39842cb97575a82b0262d51bcb8aa452edb354a8a6a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYY5BEE7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6xcbw9459xcNxZ7lsLRSs10F1bDII72LZzzvaerOnagIgK3K1g8EUsn%2B%2BgnT36pZ%2ByjzOkjoo%2BQTKS7GU%2BhQ0fQEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIWnj1SpIe0igxJrkSrcA8P%2BAhiZuB9Yx%2FFrqPaHmRdvr8iFMnZJS9eicQtt019dAnV9ns5VjMZsW9AcGrzXj6SjulwrVumeTdosKwvHszwbnHopBeHOe8nVuQKlVcCjYESenTT1vaTdbNRM3YueNBVlpWDo%2B8W34biH9s2RJIBWi8JxITYRzWAG5bv3yR%2BulTP9WMEQ6dRj4ia7xMRfiVGJTe9VvI5FBD4yWPCZXp9%2FJQukAXfKwqpjnwHP8OF9eljjgvN%2BoAuqcQh2vTLDLZUaYzcy2knVepCaJ5MV4fvoeTsuNziyQy9DenZJrphCNqz377uiVExp2DcdX6q4Z4uhDELfgFtvBi%2FvTs3wd9rJQCQCWM5UvgyM12VQury78eDBxvztFYWTI8eUQ2wfJxeoKW9cpXp7e%2B7%2FS27FsTzqamKitI08bgmEsfGyFa5GOYXg2WfGlNrqdZmhCx8qZHITPxN8qPArol8jB4bLsDxqWi2bapyG4Rt4FZpxEKNqtQstSdJ2CsjJqMzKXINjpLk5ZPjDAU3rKlIW9wdad4ji4RRdZ1D%2B9kHDx7wnn0U9X5aC1BOk%2BDcLBRUpIY5BaPzhWB7sQ2gUcj2b1AzKbHUZ7Z1s74M0SNsZevVsEUIRNKGoRcPIsAg3S9aqMIP9zskGOqUBpLgNqBLRFwaQ2zSwJL4shoLP5vjnBiK6WqiMH4rErqX0THCJjU5LWXhFFdsnh95ODtksaaStHoW2J3%2FDCgvAUj%2BVq4gcmf8V7fV%2F3D9wdW6MrXk1zVN2W6v2KV71XUpL9t94UgUURh5o1kvqLumbIjuh%2FohkpqB4Vr2VdBnfDhDPKZMbJhofPag1KMJ1%2FgaCielBgzPHXQ2KtVhZwqa44LWvShhp&X-Amz-Signature=23de53140c3dd8458412020f37ae5b6ec08ddda7846c1635d958b13e5007e54d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

