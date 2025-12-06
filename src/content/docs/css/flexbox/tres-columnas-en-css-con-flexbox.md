---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XXVARP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSoblDnZ707cBFNjgCfUa7AGK9ngLQAbLPhESI25yR%2BgIhAPyTAnSHu34mw05XLE503ZLYK4UseSahi65X8lL0Z%2BueKv8DCG8QABoMNjM3NDIzMTgzODA1Igw0cqQNniqUvYBCLKMq3ANmUjg9f4WPFAncedBxiwTfUXViHI1aTu6qOEF2ULhGl3NclO%2FmSnfcnrHuGTL8ruFXlWre4ttomrs%2BUU1KH69l6xTTGQb40LTUmKBO%2FFDse8EambsFsfhAqF1ORPpNeB7hJSihKv7oEsUlCb0S9VdPX%2BclqAYG61%2Bx%2F7Cc52KPoeoqGeral%2BaTDKQvFUhUNeaTiudcDPPFRziSkW25aApzb4At0xyBCq%2Fymq%2F4U%2BKO41HNf3wrCb7RIGNLS1W3Imxa849jFH8PPFbJG58vAo%2FqwjPD1aqa%2F6VIBLTqwfF%2FKvUXRtOZWMh3bWkhOE3XMlfL6NSkh12y8W527wnNYZ8LwpDoT3bscQ4F4Q7jabwHZH2%2F%2B%2BB1%2BFUXABuhXVU9u5H5bLgBqqpjRTyXL3YI2Q10Lex1BIlELucuqv0wx5slb52tCNrXL8MXjJf5RDq8NdA1Njt%2BUWCuEseC7MoqKHKvsHIFNLelHGfVRGJGjFZSEWLmJ8Cn5D8BFGpdgxrC7V9IsDEoauPUQm8zFGS376zGUhyRQkN02CIbgl7dNZSAE%2BljjkMsCEhA4hPG5fwbNdZpqYrCvEA5xb%2BJ2un55Eww53aG%2F29ZlIvE3sUwZ%2Fs6uzNjZKjNSrtCOBmRHTDW%2Fc7JBjqkAZjb%2BuMId%2F55G3toGkyB94SwhrHmP9ppW7Mh%2FFqkjc%2BZW4j988Lg%2B3FA%2F6%2F9o8fMndnENE6aeHACGAZIx40vKUKRxV5fV8gEBQyOQe3h5w5zVazMgt%2FxpTOtuCN2FxwgPHSyR4T6J9a7mZ4uFlzQ%2BdkPk3tgXmzx1m0EjgqpMk2kVSgaocCTsU9Ab3VDnBjMBg71XHmaGmZh6GyT40qKJ6s46h6L&X-Amz-Signature=b1de4bfc9f3dc99eb764555a7924d1379b37d753cf90701375fc7074feee90ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XXVARP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSoblDnZ707cBFNjgCfUa7AGK9ngLQAbLPhESI25yR%2BgIhAPyTAnSHu34mw05XLE503ZLYK4UseSahi65X8lL0Z%2BueKv8DCG8QABoMNjM3NDIzMTgzODA1Igw0cqQNniqUvYBCLKMq3ANmUjg9f4WPFAncedBxiwTfUXViHI1aTu6qOEF2ULhGl3NclO%2FmSnfcnrHuGTL8ruFXlWre4ttomrs%2BUU1KH69l6xTTGQb40LTUmKBO%2FFDse8EambsFsfhAqF1ORPpNeB7hJSihKv7oEsUlCb0S9VdPX%2BclqAYG61%2Bx%2F7Cc52KPoeoqGeral%2BaTDKQvFUhUNeaTiudcDPPFRziSkW25aApzb4At0xyBCq%2Fymq%2F4U%2BKO41HNf3wrCb7RIGNLS1W3Imxa849jFH8PPFbJG58vAo%2FqwjPD1aqa%2F6VIBLTqwfF%2FKvUXRtOZWMh3bWkhOE3XMlfL6NSkh12y8W527wnNYZ8LwpDoT3bscQ4F4Q7jabwHZH2%2F%2B%2BB1%2BFUXABuhXVU9u5H5bLgBqqpjRTyXL3YI2Q10Lex1BIlELucuqv0wx5slb52tCNrXL8MXjJf5RDq8NdA1Njt%2BUWCuEseC7MoqKHKvsHIFNLelHGfVRGJGjFZSEWLmJ8Cn5D8BFGpdgxrC7V9IsDEoauPUQm8zFGS376zGUhyRQkN02CIbgl7dNZSAE%2BljjkMsCEhA4hPG5fwbNdZpqYrCvEA5xb%2BJ2un55Eww53aG%2F29ZlIvE3sUwZ%2Fs6uzNjZKjNSrtCOBmRHTDW%2Fc7JBjqkAZjb%2BuMId%2F55G3toGkyB94SwhrHmP9ppW7Mh%2FFqkjc%2BZW4j988Lg%2B3FA%2F6%2F9o8fMndnENE6aeHACGAZIx40vKUKRxV5fV8gEBQyOQe3h5w5zVazMgt%2FxpTOtuCN2FxwgPHSyR4T6J9a7mZ4uFlzQ%2BdkPk3tgXmzx1m0EjgqpMk2kVSgaocCTsU9Ab3VDnBjMBg71XHmaGmZh6GyT40qKJ6s46h6L&X-Amz-Signature=a74239d3e1d18a34b44edfb2b4f96b2f641d05e4ec94710daa39b4eae851280e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

