---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMXC6YZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxCQMSH2k2zG3SN%2BpLfTrp8kgmK1oJRiFTgjq3KjjQRAiBTK1d2UuiKyba7SoHBYNS3K4%2FV6dxbxy%2FDsO%2Fgv9%2F2siqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm%2B5dQ6H8RO0ZwHUdKtwDsvu8bqYShekMuP2WDtX5DjoPlRI5bIEWv8Cb11rKGx2sVf5cuqX4IEb8WFRv3P3kFaGB5XtdDMZF9dBCwcBZ14rB4G8CAbSmHqvaL6Yx5C%2FGjbLxDeslz1CtauA9cm5Cnq6ocdt9VxQsSlafdQ%2B6d5aISVVJ0DDRxJ1VDt9UAddl%2Bhc9q2Wfn0%2BcKNvInMGEdG6eHnZ1Qt3mTQEHJ9%2BRMc33D4iloGEJGpOOIT5eu%2FNb%2Bria4mzeE6j06O6SYIbWVH%2F%2B%2B7%2BmzV8yQL6XOLq01HxskDS4weLTUuJ%2BfHvaX%2BCQKhyIXf5W87hfSccZa%2BTE7f%2B4zNSjFYG6dwd8OnM%2B%2FPCca8Mcb7OI2m9xoQf58OrM3OIj2%2BBgXDHWefbQKP%2FjcALg%2B8WijR9HnrnIM9tlvrbHi5Y0hF1mu77zFrKhOYy1yDgTj2u2Dqx1VzXG0QGgCHX9uo%2BsH6mBKGT%2FSEpxMMnvq8%2BEO5pgFaUAC%2FTeTVvnhLIgqyiMUzADj6xza9N91HMXwbSxi3Xdz8P6WMnSwQ%2F9gsP1hN3GyeVCB%2F1k2vk46n7BYobZDodXPG%2FZUaLbYVF6h8eOJv1zTQdig43Z8cqLRBGLbA2l1tu4E4xCp%2FqX0LMpixh70GTvKSEw1tDZyQY6pgHrZIqFNKQnuqCwWFHs1BGg85sH0bBKUcleVXvfDjnQYptXUPUINJISCzHXThPYweE3H2lz7uwLuW1cTXoXkb6kKJEKGUDvokLiPNSw%2F4xCcWk9Qn%2F6hocvHHUuNEYHdlfkEp3KBOswrJAZS%2FwA7CIYEZ5KeQFCBTh4i%2BVVjKrKXBeNNWc7jR1w5JBWdnIz3qJF3DquarLaO9G1eoIYrPgY%2FdSq8q2n&X-Amz-Signature=a4f16b6bebbce8f37823bb318a353dad9e3b0d14ff9691637d46755d303fd57d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMXC6YZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxCQMSH2k2zG3SN%2BpLfTrp8kgmK1oJRiFTgjq3KjjQRAiBTK1d2UuiKyba7SoHBYNS3K4%2FV6dxbxy%2FDsO%2Fgv9%2F2siqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm%2B5dQ6H8RO0ZwHUdKtwDsvu8bqYShekMuP2WDtX5DjoPlRI5bIEWv8Cb11rKGx2sVf5cuqX4IEb8WFRv3P3kFaGB5XtdDMZF9dBCwcBZ14rB4G8CAbSmHqvaL6Yx5C%2FGjbLxDeslz1CtauA9cm5Cnq6ocdt9VxQsSlafdQ%2B6d5aISVVJ0DDRxJ1VDt9UAddl%2Bhc9q2Wfn0%2BcKNvInMGEdG6eHnZ1Qt3mTQEHJ9%2BRMc33D4iloGEJGpOOIT5eu%2FNb%2Bria4mzeE6j06O6SYIbWVH%2F%2B%2B7%2BmzV8yQL6XOLq01HxskDS4weLTUuJ%2BfHvaX%2BCQKhyIXf5W87hfSccZa%2BTE7f%2B4zNSjFYG6dwd8OnM%2B%2FPCca8Mcb7OI2m9xoQf58OrM3OIj2%2BBgXDHWefbQKP%2FjcALg%2B8WijR9HnrnIM9tlvrbHi5Y0hF1mu77zFrKhOYy1yDgTj2u2Dqx1VzXG0QGgCHX9uo%2BsH6mBKGT%2FSEpxMMnvq8%2BEO5pgFaUAC%2FTeTVvnhLIgqyiMUzADj6xza9N91HMXwbSxi3Xdz8P6WMnSwQ%2F9gsP1hN3GyeVCB%2F1k2vk46n7BYobZDodXPG%2FZUaLbYVF6h8eOJv1zTQdig43Z8cqLRBGLbA2l1tu4E4xCp%2FqX0LMpixh70GTvKSEw1tDZyQY6pgHrZIqFNKQnuqCwWFHs1BGg85sH0bBKUcleVXvfDjnQYptXUPUINJISCzHXThPYweE3H2lz7uwLuW1cTXoXkb6kKJEKGUDvokLiPNSw%2F4xCcWk9Qn%2F6hocvHHUuNEYHdlfkEp3KBOswrJAZS%2FwA7CIYEZ5KeQFCBTh4i%2BVVjKrKXBeNNWc7jR1w5JBWdnIz3qJF3DquarLaO9G1eoIYrPgY%2FdSq8q2n&X-Amz-Signature=380121aa903026b859f6f11411a816af8d5d2bb490a7f3bc04e85bc2aed96f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

