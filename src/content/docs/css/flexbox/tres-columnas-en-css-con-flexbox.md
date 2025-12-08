---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JDPVLO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUtAISqarRX%2FXBMQnxRf9MOY6MoYWhMpo6ql1si2vlFAiA4GYY0PXi4i955ZfI0mxFpISeLkfGxgmyYFArg9LPQfSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuFhgewBMCL%2BsDsqeKtwDV1NSGnskiCxPK0bwKSUlDkm9ZdEfRTVaIX%2BoVCwdCpR9wVgWQuFLd5CTpUPTTvPcW%2BhP5aCnLT43ZIbnltEGHDr4bcn74hX%2FEX%2B7rk%2BEaBeHPZu3z4kfLLab3VgogTc6XDledZS7X24wDxhWcjx6ji05k6P3Wo1eu7IGetegzrznSsNnr%2F7Z76F3m9T419byaXOfnypoOMK6cllUgYrZDH89v9LiXbCFp%2Fi8pYwRLi0oGdhXThiy%2BO3IPff2bmevLWmxEkuF1%2BbmJAdyRk3ePXIzxKD8ZW6aIr%2BP1xWZ2vcyZaxm8BOGCgSfxUf%2BiEWS6HcrQ%2FRsdvPcgGTlooQRmC7RnfLpBsyLI55cXBIzHIQJKoC%2Fc6HLxod8W%2B49kCQhO0L8XoqjqXmk83zaGDM9NfWMjVB8G7%2F%2Fxc3HF1HujTmuS6luSL0Sp8eP7ezOnjldsWlLg8GZjbAZ2mLma1%2FTniOjmj0De3ZtaiG6xjvJweu8CcOyAGKgcUfz%2Fhwg7OmIm0VPqU2ALaY5PwHlxF5fRT%2BsbgQiZ8kjam8SfOaeMcWxHq1Am%2B5xUbchY1n1kU8PtPo5MMwSUxKqWfBKc9o%2BsXzPqkG2NdiD2syPHH89J8Fqd8mnRPx0yuu8VDMwnsPdyQY6pgFIZb68N34WGSuLlhm4ui2pGCFfM8sVTElz3GDGxQlVHFGiOs1%2FAIJwasMNgjYtjD%2BckDDCk6g8hMe3O9HdDQyFM8lsUhZkzu2uCGzU2eWQT52T65zGinCPjyCQ%2FTy3%2FeTZ%2FseyX%2B3iKyX27HXSROWFnWrCBe4KEvC3t71Gl6StJgom3YgccNsgczPb3tfxqaN0Zm9LbO2hyUtX0oeSti5qWMD83cpu&X-Amz-Signature=4dfde4c7598794c14f0daa642bc7dd49f6b39af12f18e09a604b0f7e27b7d7bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JDPVLO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUtAISqarRX%2FXBMQnxRf9MOY6MoYWhMpo6ql1si2vlFAiA4GYY0PXi4i955ZfI0mxFpISeLkfGxgmyYFArg9LPQfSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuFhgewBMCL%2BsDsqeKtwDV1NSGnskiCxPK0bwKSUlDkm9ZdEfRTVaIX%2BoVCwdCpR9wVgWQuFLd5CTpUPTTvPcW%2BhP5aCnLT43ZIbnltEGHDr4bcn74hX%2FEX%2B7rk%2BEaBeHPZu3z4kfLLab3VgogTc6XDledZS7X24wDxhWcjx6ji05k6P3Wo1eu7IGetegzrznSsNnr%2F7Z76F3m9T419byaXOfnypoOMK6cllUgYrZDH89v9LiXbCFp%2Fi8pYwRLi0oGdhXThiy%2BO3IPff2bmevLWmxEkuF1%2BbmJAdyRk3ePXIzxKD8ZW6aIr%2BP1xWZ2vcyZaxm8BOGCgSfxUf%2BiEWS6HcrQ%2FRsdvPcgGTlooQRmC7RnfLpBsyLI55cXBIzHIQJKoC%2Fc6HLxod8W%2B49kCQhO0L8XoqjqXmk83zaGDM9NfWMjVB8G7%2F%2Fxc3HF1HujTmuS6luSL0Sp8eP7ezOnjldsWlLg8GZjbAZ2mLma1%2FTniOjmj0De3ZtaiG6xjvJweu8CcOyAGKgcUfz%2Fhwg7OmIm0VPqU2ALaY5PwHlxF5fRT%2BsbgQiZ8kjam8SfOaeMcWxHq1Am%2B5xUbchY1n1kU8PtPo5MMwSUxKqWfBKc9o%2BsXzPqkG2NdiD2syPHH89J8Fqd8mnRPx0yuu8VDMwnsPdyQY6pgFIZb68N34WGSuLlhm4ui2pGCFfM8sVTElz3GDGxQlVHFGiOs1%2FAIJwasMNgjYtjD%2BckDDCk6g8hMe3O9HdDQyFM8lsUhZkzu2uCGzU2eWQT52T65zGinCPjyCQ%2FTy3%2FeTZ%2FseyX%2B3iKyX27HXSROWFnWrCBe4KEvC3t71Gl6StJgom3YgccNsgczPb3tfxqaN0Zm9LbO2hyUtX0oeSti5qWMD83cpu&X-Amz-Signature=00634af07c49a478cb8726c037b8b7f31ef485edddc643f8fde9eb6ac1b759ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

