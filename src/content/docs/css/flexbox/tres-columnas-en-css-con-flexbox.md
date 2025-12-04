---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY5JWBPQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD2srhkx%2Bf3dnIbff%2FUemUqscNkTxH%2BZTFOOnnREA8UXgIhALd9VObbCTedvi52qgw%2B7Rq66rphtzIB0L5bJIRxt%2BF9Kv8DCDwQABoMNjM3NDIzMTgzODA1IgzLUsYVIcn0pqRltu4q3AP4YHLT%2FTooEpgAsgE9i22bS3RxKjrOqRqOgG4dnTjyBAJ8%2B4WE5h9cODJpvmk%2FuJK33lS45OmyYSKT%2BvNenifzCfaOIDfMIo1DoOlVG%2Bbda6E2QKauE2ry7yykqyi%2FhkBxjIoXOnHYclb5qradh5Ct9mHzdmXjhqnzPmZ8mKlvMz0W3MXwcc0vto8rA1KOlK7WgOtD73PbKwYIiF2QyjzX1ApJjjfE8JaLhJ9BZQZKnZJFdLkhO1UCkr%2BKrB7qlysUIkEh9Ros7F9IVvtOsYIy8e8CLL3Gfby34t8VPkD9XoWIwZbnSELfCo9Tm5EVD2zS1FQS9z%2B8c8zZURHQ1FaqaecywpH9YbGjcUxiZ%2BNRqqZD%2FlJPcthOr7yAtdJZHsQaWvjrDN66mLARLyRNlaQFNKWelhox2wVZg9%2F4ckLEv%2Fcfqt7EBnhhePrqA5qzoUwd0GnkH1CoL5gq9%2B9RUbL0iRbAS3ny1GPNcoJsPEMN8wbGKRtOJdwr6ttf3s9alJHeYowup%2FfZHCX8RDH8AXWDKdS%2BlcTfrZhP0S7C4zkYZ8A6n9%2Fp0STYeH6tl8Z1sj2v2Xg%2FkC%2F8U9EeMGLzfwxSMD0jpU7l8hnHVq%2F%2Bss2BWllMH9Xnc7cYaEvDEDDG88PJBjqkAUbwssjPqaBTRM9ohTlSLx6SyPyLkgVxcVrtg2CVBiAogTwkuSNJawgSbQHEbhjKWBFHVHhQLiW5noswrcj3xSPaHn4tisRNEHUqfPdjZ9vv%2BfN2jnBP46ospk%2FhvB%2BcyArA5%2B9CNtxcU1hv4geA6Uw2otsXvXSriR72Bf%2F75%2FP7NAQvEFV9mD%2BBy%2BRy8Oiz3N7VqsMijbWts7e5MybM1OCJex0O&X-Amz-Signature=24dbab93cecad46675afbe870a283d5802a09a47660561ec7ea25384b87d5c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY5JWBPQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD2srhkx%2Bf3dnIbff%2FUemUqscNkTxH%2BZTFOOnnREA8UXgIhALd9VObbCTedvi52qgw%2B7Rq66rphtzIB0L5bJIRxt%2BF9Kv8DCDwQABoMNjM3NDIzMTgzODA1IgzLUsYVIcn0pqRltu4q3AP4YHLT%2FTooEpgAsgE9i22bS3RxKjrOqRqOgG4dnTjyBAJ8%2B4WE5h9cODJpvmk%2FuJK33lS45OmyYSKT%2BvNenifzCfaOIDfMIo1DoOlVG%2Bbda6E2QKauE2ry7yykqyi%2FhkBxjIoXOnHYclb5qradh5Ct9mHzdmXjhqnzPmZ8mKlvMz0W3MXwcc0vto8rA1KOlK7WgOtD73PbKwYIiF2QyjzX1ApJjjfE8JaLhJ9BZQZKnZJFdLkhO1UCkr%2BKrB7qlysUIkEh9Ros7F9IVvtOsYIy8e8CLL3Gfby34t8VPkD9XoWIwZbnSELfCo9Tm5EVD2zS1FQS9z%2B8c8zZURHQ1FaqaecywpH9YbGjcUxiZ%2BNRqqZD%2FlJPcthOr7yAtdJZHsQaWvjrDN66mLARLyRNlaQFNKWelhox2wVZg9%2F4ckLEv%2Fcfqt7EBnhhePrqA5qzoUwd0GnkH1CoL5gq9%2B9RUbL0iRbAS3ny1GPNcoJsPEMN8wbGKRtOJdwr6ttf3s9alJHeYowup%2FfZHCX8RDH8AXWDKdS%2BlcTfrZhP0S7C4zkYZ8A6n9%2Fp0STYeH6tl8Z1sj2v2Xg%2FkC%2F8U9EeMGLzfwxSMD0jpU7l8hnHVq%2F%2Bss2BWllMH9Xnc7cYaEvDEDDG88PJBjqkAUbwssjPqaBTRM9ohTlSLx6SyPyLkgVxcVrtg2CVBiAogTwkuSNJawgSbQHEbhjKWBFHVHhQLiW5noswrcj3xSPaHn4tisRNEHUqfPdjZ9vv%2BfN2jnBP46ospk%2FhvB%2BcyArA5%2B9CNtxcU1hv4geA6Uw2otsXvXSriR72Bf%2F75%2FP7NAQvEFV9mD%2BBy%2BRy8Oiz3N7VqsMijbWts7e5MybM1OCJex0O&X-Amz-Signature=3c744c4a7e4537842190efce160f9a34057f62ae4e81fbcf2f250e5edd85596a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

