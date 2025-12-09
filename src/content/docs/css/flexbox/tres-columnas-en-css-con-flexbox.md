---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A2PDZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC8D499WUn9%2Ff9XCfsa8qtM%2B%2BE9B1YeZpS1o9%2FYWNJSgIgd4VOLmCGVltUitwwUBJDrArznbsd9UZZ%2Fj37PXyhlGUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6baki%2BTWq%2BJKf%2FNSrcA9w0vFCvGYxPvUIf49zevwc1HDWvyf3Ehodn8FrFdwW554ycxjtlmtRu%2BjlKFFRBoVaHtdfxrVNuKj%2BI5f9qN8wx1Zlb2kV%2B6VuvYVVVPyQ5IGiqgJvGfV0pdkR462absL0YHeCkai5pf6GXGvq4vfqyTJSpgAW5O1wW9HQvYp0ob6wOa%2BVtmIp38eWkXo8w8N2uwyhCKoWjX7YglofJaYZLYxORyzqXZAxPnHvGMF97QmWx4i7MjOUer0vx94hfI8lbqsB3dll6FScz2zD7GLj3Wssr6eS2h4u8Wh4DU%2BHPT8JFzMj5oaYiir%2BrfOpgWOtuYWAZQNDAO99YYC%2B%2Fyqp4yQbgZmoOHFKKG25%2BT0gBp9y2%2BozLMpcMSa%2FA8j7y6Dh1DYg7oCcSNWWOuQk2uDFaZu2RS6xZfX83qdsD3c6DkbtJ2Jm74bfOxgCDQIRlL2Vsdnp4mmUlE0pAy3sFKZCjDJMeph5oD7my0czpJD6sxFYh2ALMFJ1zGXZNzF5UuNcmm9XgpMQPVSB8zRTN26Lfnl797anGTlL%2FGFSJTByD7X1gxsd8YaGDb%2FAedQVRqdtafX4my5jnPHz3IcAQvyz5OCi12ScXzhtgS2ZeJDH0u7UGYFPYdfogmwzzMKWH38kGOqUBRP6owXavSAmEVXxs9auctuRWqAcWCOE8EuR%2FyhkEVSbwlZhVQlqGtd7TzoH2WicqPQGXkYYXmlr5c%2BgAtY32WqBbWr9IDJ3U5aEqaEBrENUh4mnaKwzltx0PiMFngwgFfpDxfmQx7%2FWHYdjEKndTw4CeTGAvZOz7xsy7BI5Asjyb8Mvic7flLj1hKzEpFI4fsxyzUjfgiSVBEqHHkDysiLQe6Koo&X-Amz-Signature=d48c7b413c855718ad9c3c3a359370f3fb03cd57b0777435b6c1ac0780b494e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6A2PDZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC8D499WUn9%2Ff9XCfsa8qtM%2B%2BE9B1YeZpS1o9%2FYWNJSgIgd4VOLmCGVltUitwwUBJDrArznbsd9UZZ%2Fj37PXyhlGUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6baki%2BTWq%2BJKf%2FNSrcA9w0vFCvGYxPvUIf49zevwc1HDWvyf3Ehodn8FrFdwW554ycxjtlmtRu%2BjlKFFRBoVaHtdfxrVNuKj%2BI5f9qN8wx1Zlb2kV%2B6VuvYVVVPyQ5IGiqgJvGfV0pdkR462absL0YHeCkai5pf6GXGvq4vfqyTJSpgAW5O1wW9HQvYp0ob6wOa%2BVtmIp38eWkXo8w8N2uwyhCKoWjX7YglofJaYZLYxORyzqXZAxPnHvGMF97QmWx4i7MjOUer0vx94hfI8lbqsB3dll6FScz2zD7GLj3Wssr6eS2h4u8Wh4DU%2BHPT8JFzMj5oaYiir%2BrfOpgWOtuYWAZQNDAO99YYC%2B%2Fyqp4yQbgZmoOHFKKG25%2BT0gBp9y2%2BozLMpcMSa%2FA8j7y6Dh1DYg7oCcSNWWOuQk2uDFaZu2RS6xZfX83qdsD3c6DkbtJ2Jm74bfOxgCDQIRlL2Vsdnp4mmUlE0pAy3sFKZCjDJMeph5oD7my0czpJD6sxFYh2ALMFJ1zGXZNzF5UuNcmm9XgpMQPVSB8zRTN26Lfnl797anGTlL%2FGFSJTByD7X1gxsd8YaGDb%2FAedQVRqdtafX4my5jnPHz3IcAQvyz5OCi12ScXzhtgS2ZeJDH0u7UGYFPYdfogmwzzMKWH38kGOqUBRP6owXavSAmEVXxs9auctuRWqAcWCOE8EuR%2FyhkEVSbwlZhVQlqGtd7TzoH2WicqPQGXkYYXmlr5c%2BgAtY32WqBbWr9IDJ3U5aEqaEBrENUh4mnaKwzltx0PiMFngwgFfpDxfmQx7%2FWHYdjEKndTw4CeTGAvZOz7xsy7BI5Asjyb8Mvic7flLj1hKzEpFI4fsxyzUjfgiSVBEqHHkDysiLQe6Koo&X-Amz-Signature=024fd956c9fd12d0c63c1bf8150a14e57fdf2dc7410e5415774f3a03878fc3e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

