---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E43NOU2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz74YHsC1J8Hr8%2F0eXQX5x8tYu08AABcmHMtXRmdBzUQIhAOi2wIScDjXw7ma1MbuvKJvOk4JFUBcb0u4jj6kGqlWpKv8DCG8QABoMNjM3NDIzMTgzODA1IgwF91pmMJxH5xbzawIq3AMGYMWYYSh9xX2F2EgtGtA%2FHfG0Geu76RDLFPl1kyyDjvXJZXQEj8Cdc6vjJsC1d%2Fx2Cz9kg81qe7uYXu559ZIBTq3mOoV7izMWVJFE8OQbvKYVH%2B48hz0jPP77wv7WB5gsjDp9dzTPEEYPMC4kNt9y4eDcvPqPUBKaRrrXF6aIoG7%2FWRkQ4AnFWHrC5LZPWDQPiySeKpbZLo1ClJj%2FgeWlOhzJ%2FlP4nI90ZXiHddVSvFRb4WhiQmUT0dbU5FjXcfT%2FSv6wf0%2FPXEAlDpstT%2FFvWq0ZR552tKL3EBlw0OJ5dru%2FBAjI0Lh95bk6MkJvb0ljZL8ulC2QaQEjzE2ppgkm3AFoQJAXLrDFSzlOktPz4Bgb2VSHqgoLTKTjuW0jjjRUXbtLLQpSkRNxeYgZRSsspkWqjm3OKj3t%2Bnz7mS5XCGDpJUDjg60Ee1Gb8gOJgxfvTSdjf4xCT%2Bz3ORHTuFN3gXjwIeFT4vjfUwnGrW%2BYOPmBXkkc1Ol22Gy6%2B17hcdrL71G5qiNhM0i6tl5luD%2FSiKr4fcHzqOqGhO1aVQQgVKF4jvE60z6a%2FEqV15JplF6WLleAEZp%2FlRVAU8%2BSmY1e%2FyjAKLoDX2szIjPrSWGzMKr0hHgKf15repJd7zDY%2Fc7JBjqkAZqhLEIgeckV31aLSdzfl993zPGMIRVEBECx%2FIwojQNAfZlBkMk23TAoswJ7AEWO5TuiQL8fGlw9g%2BZuY0Lh%2FN2bey2yayIyyfYRTlc8r3k7TqgqhxAqh9RhOxCQSzVLEOcC138uy4QV5sZ9A3GKNe5IQx%2FIJ6p%2Fv5FnShzfU5p7Kezzbcg9RGVihDIJ6A%2BzvKaUXxwxb1e6ohDuk9V5ynwtemjv&X-Amz-Signature=5088436424d42f687f420ec072b57f517fcfcf8b98388c6e78a8fb8fe0ab7369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E43NOU2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz74YHsC1J8Hr8%2F0eXQX5x8tYu08AABcmHMtXRmdBzUQIhAOi2wIScDjXw7ma1MbuvKJvOk4JFUBcb0u4jj6kGqlWpKv8DCG8QABoMNjM3NDIzMTgzODA1IgwF91pmMJxH5xbzawIq3AMGYMWYYSh9xX2F2EgtGtA%2FHfG0Geu76RDLFPl1kyyDjvXJZXQEj8Cdc6vjJsC1d%2Fx2Cz9kg81qe7uYXu559ZIBTq3mOoV7izMWVJFE8OQbvKYVH%2B48hz0jPP77wv7WB5gsjDp9dzTPEEYPMC4kNt9y4eDcvPqPUBKaRrrXF6aIoG7%2FWRkQ4AnFWHrC5LZPWDQPiySeKpbZLo1ClJj%2FgeWlOhzJ%2FlP4nI90ZXiHddVSvFRb4WhiQmUT0dbU5FjXcfT%2FSv6wf0%2FPXEAlDpstT%2FFvWq0ZR552tKL3EBlw0OJ5dru%2FBAjI0Lh95bk6MkJvb0ljZL8ulC2QaQEjzE2ppgkm3AFoQJAXLrDFSzlOktPz4Bgb2VSHqgoLTKTjuW0jjjRUXbtLLQpSkRNxeYgZRSsspkWqjm3OKj3t%2Bnz7mS5XCGDpJUDjg60Ee1Gb8gOJgxfvTSdjf4xCT%2Bz3ORHTuFN3gXjwIeFT4vjfUwnGrW%2BYOPmBXkkc1Ol22Gy6%2B17hcdrL71G5qiNhM0i6tl5luD%2FSiKr4fcHzqOqGhO1aVQQgVKF4jvE60z6a%2FEqV15JplF6WLleAEZp%2FlRVAU8%2BSmY1e%2FyjAKLoDX2szIjPrSWGzMKr0hHgKf15repJd7zDY%2Fc7JBjqkAZqhLEIgeckV31aLSdzfl993zPGMIRVEBECx%2FIwojQNAfZlBkMk23TAoswJ7AEWO5TuiQL8fGlw9g%2BZuY0Lh%2FN2bey2yayIyyfYRTlc8r3k7TqgqhxAqh9RhOxCQSzVLEOcC138uy4QV5sZ9A3GKNe5IQx%2FIJ6p%2Fv5FnShzfU5p7Kezzbcg9RGVihDIJ6A%2BzvKaUXxwxb1e6ohDuk9V5ynwtemjv&X-Amz-Signature=8b8a7a6816252efabcd42b4ade56a7df1aa32e8efcf75db915914b02176e3ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

