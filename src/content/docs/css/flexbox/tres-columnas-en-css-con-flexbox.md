---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GJ6JQYK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX0saL%2FipIIB%2BaUlSYU3tjVdvNGdbN0VTux6A57ZU3FAIhAJhh211bEu7WA432XU4w0e76mzevI854585%2FND%2Btsis1KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsjG%2BGsGRrgCwUhyAq3AM3u6DP9Ce39zr5s1dR6BjHumYS6ywwuGNFlRp2rxRZAF%2F01%2BR55oSod7HV3YRChiNLklg1wuJkKKxG8I7BKejHAakA%2FfM%2BKwJGIvwObdVGKa5bMCclSPYLekRaMMXzpcYvqTxeNoJ8%2FrDIg9qjvNeTx31tLoGalHbUWhvHG5sSBXnbquHma7UK3GWxoMq0B916NONGHa%2Fnvot%2BcypS%2FD%2Bbvvl4o7pwtiw0EPs7fASJOc17ja7iEICg%2BfVSakY2UnwaxDQ82km6XQFN3KukHJNv2V7xxFjGtG0Tc8lNmZOiSlB7sUFcw0etAUvZ%2BG31QMbLvVrNOq2EUi2TJ0nUKS6s1oGxA1YK5SYJGTXGKwPrtk%2BlPlZLBBSlbhqUuknZEVpbVBFFGfs6OTKPWwS8e%2BtVSdbZPvbuii79LxRNAvc788sKxhNMc4h5DtK6x84j33Px8ctQbygoX8UA%2FE2%2Bp741MnsU0LRMkV%2BhXNy5BZbaA9Esz3qcDUwVo%2F6DH1GA13DJJSfs2VNCPm7GCtxbJfNK%2F0ihE2BSlK8cd%2B6Uv5NyqFPTcLWNgeLx0uKe7LYchMN7CHJhl0hx3FNlyRnbIeeWOmhyL3NODLZyg9hH3bQR310hz4hW6XqB3ppD1jDH89rJBjqkAY4oiDafZgGLEOmalHgDh4eAV8XciD%2B%2F%2B9FkgMNlZD0DfaQDfhbqy%2B3FxN7TAYvMopsMkti273hHk5f3IcALOxom3bZ0yPz7Epc%2FdhlYtJ%2FYNlvNp%2FebXCJcGEZFD2kRcasVgsq0efQaMpD2ROLIC7j6x6anW1hzMNiyNYIJVf3FxMYO8xfBsj8UIsZGy%2FKucz5DzYKEk%2Fk%2FjgnKnuPDPO%2BHcPUn&X-Amz-Signature=0b24f6065738d35e0dd10b52c3c7be63132857f7b2b9dc2d85e8e3d8092ec4e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GJ6JQYK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX0saL%2FipIIB%2BaUlSYU3tjVdvNGdbN0VTux6A57ZU3FAIhAJhh211bEu7WA432XU4w0e76mzevI854585%2FND%2Btsis1KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsjG%2BGsGRrgCwUhyAq3AM3u6DP9Ce39zr5s1dR6BjHumYS6ywwuGNFlRp2rxRZAF%2F01%2BR55oSod7HV3YRChiNLklg1wuJkKKxG8I7BKejHAakA%2FfM%2BKwJGIvwObdVGKa5bMCclSPYLekRaMMXzpcYvqTxeNoJ8%2FrDIg9qjvNeTx31tLoGalHbUWhvHG5sSBXnbquHma7UK3GWxoMq0B916NONGHa%2Fnvot%2BcypS%2FD%2Bbvvl4o7pwtiw0EPs7fASJOc17ja7iEICg%2BfVSakY2UnwaxDQ82km6XQFN3KukHJNv2V7xxFjGtG0Tc8lNmZOiSlB7sUFcw0etAUvZ%2BG31QMbLvVrNOq2EUi2TJ0nUKS6s1oGxA1YK5SYJGTXGKwPrtk%2BlPlZLBBSlbhqUuknZEVpbVBFFGfs6OTKPWwS8e%2BtVSdbZPvbuii79LxRNAvc788sKxhNMc4h5DtK6x84j33Px8ctQbygoX8UA%2FE2%2Bp741MnsU0LRMkV%2BhXNy5BZbaA9Esz3qcDUwVo%2F6DH1GA13DJJSfs2VNCPm7GCtxbJfNK%2F0ihE2BSlK8cd%2B6Uv5NyqFPTcLWNgeLx0uKe7LYchMN7CHJhl0hx3FNlyRnbIeeWOmhyL3NODLZyg9hH3bQR310hz4hW6XqB3ppD1jDH89rJBjqkAY4oiDafZgGLEOmalHgDh4eAV8XciD%2B%2F%2B9FkgMNlZD0DfaQDfhbqy%2B3FxN7TAYvMopsMkti273hHk5f3IcALOxom3bZ0yPz7Epc%2FdhlYtJ%2FYNlvNp%2FebXCJcGEZFD2kRcasVgsq0efQaMpD2ROLIC7j6x6anW1hzMNiyNYIJVf3FxMYO8xfBsj8UIsZGy%2FKucz5DzYKEk%2Fk%2FjgnKnuPDPO%2BHcPUn&X-Amz-Signature=e1c0d85685ffbd60870520ccfb09e11d462915c2914e61a92306bdb67b139323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

