---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VC7TZLY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3AgQSzUijhn5h%2FPYWQcuGg%2FFedB5UJLDNJWJco5CB7gIgPVJ7Dl6jT0qE89gS%2F1rV2LF1P7PxfHEm2gFNWu5d2BIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLxy8l%2BjdkeHYmFHhircA%2BGNO8gNqrkpcGFteXviwu%2F5A0U8p4d2Sb52F09PdHKHBT14%2FCxdQfg82TKjUe0wq6XgSFJCeMQNfO9O1HccQE0j8CW%2BhXU4QCWL%2BRO7TlqMXTQ%2F5XmeSebq4L7LotQOJvBmka8nKovquJuY5N8kJzCvFpz%2FyRg%2FOsEkv9p7JeZ%2FmZvGHRkGLWlDV1AP1kJ4o9n1xs%2ByFQMBHGhKrBiAIQ5abelTQpEWRlo%2BTIMwqbLbkVrExXwIPC4Gim8jK2NbOSrklgX8Ns7wuNeyvqFzhIZsW1PBOPxsdeccWgz5JnbtC50vYW7EYMHrI0LnhsYBV0FDcMh%2FUzMfE6nmRVgVjIUmJ7SlZjziVf%2BSiUmjYDjRrkAe7AnxhCet4Cio3MzZDZO7IP6wfucUUHfc1fxgSk3vvhDCSYTzCGiDfeOblWrVuRSbbR3uFo4dqIuaHO%2FkiDQBi%2FXfm8zlOPwLnRMKVZiEDyflHD%2Ff5JpIkCcW9Tu%2FlnMPTuZ7uxyXwOyVDf0k3eWAEKl%2FaAejjlvUzXafHxi9Pk1IkvDc2W%2BtmYCqiPOkjUfdK0e1RNd0YrGpA6uUpmjm2PoU8B5x2Uyf2JydCnE6DNrn1Mxw3fEdcnDiwIdKJ%2BEd33tspfzNskOIMO3M0ckGOqUBoOMQFJDVL%2FGOXvru97dcZ1bD0fsNLprHDQhpWXSvYeRnQGYTN4g37B2RGYpqUbl3DikaTjs2WeuuOeb%2Fheqmjr7MG%2F1hioTcFDjVPqz6aikJiSICIfBrQ%2BuLdXWkJW6a2I4KVyIwO31oYNDs9BG32ScQwpnUPck84Qat3GlnR1Tf2q1ZepZbNJl42wFRb9tYTXX%2Bl%2FvoWDqtODtqWCgum9tWAdr7&X-Amz-Signature=3e1011da936ad319994c070ffec49ee4e114e26f2bd46c83216ac7c9cb50389a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VC7TZLY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3AgQSzUijhn5h%2FPYWQcuGg%2FFedB5UJLDNJWJco5CB7gIgPVJ7Dl6jT0qE89gS%2F1rV2LF1P7PxfHEm2gFNWu5d2BIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLxy8l%2BjdkeHYmFHhircA%2BGNO8gNqrkpcGFteXviwu%2F5A0U8p4d2Sb52F09PdHKHBT14%2FCxdQfg82TKjUe0wq6XgSFJCeMQNfO9O1HccQE0j8CW%2BhXU4QCWL%2BRO7TlqMXTQ%2F5XmeSebq4L7LotQOJvBmka8nKovquJuY5N8kJzCvFpz%2FyRg%2FOsEkv9p7JeZ%2FmZvGHRkGLWlDV1AP1kJ4o9n1xs%2ByFQMBHGhKrBiAIQ5abelTQpEWRlo%2BTIMwqbLbkVrExXwIPC4Gim8jK2NbOSrklgX8Ns7wuNeyvqFzhIZsW1PBOPxsdeccWgz5JnbtC50vYW7EYMHrI0LnhsYBV0FDcMh%2FUzMfE6nmRVgVjIUmJ7SlZjziVf%2BSiUmjYDjRrkAe7AnxhCet4Cio3MzZDZO7IP6wfucUUHfc1fxgSk3vvhDCSYTzCGiDfeOblWrVuRSbbR3uFo4dqIuaHO%2FkiDQBi%2FXfm8zlOPwLnRMKVZiEDyflHD%2Ff5JpIkCcW9Tu%2FlnMPTuZ7uxyXwOyVDf0k3eWAEKl%2FaAejjlvUzXafHxi9Pk1IkvDc2W%2BtmYCqiPOkjUfdK0e1RNd0YrGpA6uUpmjm2PoU8B5x2Uyf2JydCnE6DNrn1Mxw3fEdcnDiwIdKJ%2BEd33tspfzNskOIMO3M0ckGOqUBoOMQFJDVL%2FGOXvru97dcZ1bD0fsNLprHDQhpWXSvYeRnQGYTN4g37B2RGYpqUbl3DikaTjs2WeuuOeb%2Fheqmjr7MG%2F1hioTcFDjVPqz6aikJiSICIfBrQ%2BuLdXWkJW6a2I4KVyIwO31oYNDs9BG32ScQwpnUPck84Qat3GlnR1Tf2q1ZepZbNJl42wFRb9tYTXX%2Bl%2FvoWDqtODtqWCgum9tWAdr7&X-Amz-Signature=52697006e591df893be1faa9361dfc44ab8514951e6be77536db10fdcfc385c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

