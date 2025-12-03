---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYFCSY6G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIExMjIgA60oVKGtgviZaXA9O9%2BNakRzji2jFqIVmUSOQAiBLl6suaEshkJqEEJQOdCf2wGF8yXMtAcCDrKKrXy0gWCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMf84Smxc8vU1lFTSvKtwDnIzJdW9%2F2jzbWfKFYbWPriWYfsZNzNrtWMtYYQgBmw0oazEFDdTseLDOSESZq5mYRXmfp1%2FeTwE6hdoUCgFFTYs%2FCCxeW5dfWq3Kg9q2Y5giCRRJQ84iTeAQjxueXygJzPbnd9SM5hbuyexb0%2FN02inGN9hL6uNA6I8bzXBJmbiTyXsDPKI%2FqxfteuuzNYnOOPp56OOX%2F%2BjaP%2BCqONDkuunxnwSpmaqEWGgM%2BmyTKHLUvBqNRLTg%2BdyxOnXLhL8%2B8MUHqTBjrj9Xy%2BwldIlku2z6b0JzI9EJnL9AI0Ex%2BxyozcFG5Gywkc0VzRLROZKdmMzi%2B5OhYb96yfSBldLBPEVIKsY6pgNd8XdhavkUVCHnt%2FWWU3Ggc7Ot3q3Jlmi3XkiyfaggNs%2BQfWYwuqx6nVzG%2BVeQ5jh1kirS%2B%2FaVB7kftoliS1OrCVusZIaqJrxNlPDdCkrgKLQn1pON7DC42K0B9BdTYgXM8ljgibdbmn4v7LnVB222B8pRFbNbLt6ce%2BJSviiWX0Isgg1FGRj4d1Llfs51tuB9quwILlntXj66Uayt3GlEeydD8c2b2WhbPxb4OjgM9%2BQHWF61aCKf95j3fTqWCugrvTAgDFOw08he%2F9PB7Aui3HNQ%2Fhww8K7AyQY6pgFdzys%2FFvKaJ7VDjLS%2FLM8umQN6XY%2FxOvKf0l%2F42XA1twwOucjZN5HtcqWXfMNvAEWG9gwX4ZAbKID%2F3rVwRGkjCpwhleioBA%2FPsqCviuRwVkBTZgfb%2Bni8%2B2iMA3wUXl90UcjpZka5gXnSN7TCuTV8D4sO2DrOPbNp6Dx35fOmKHQbXJN5hKsMre0H8BNRPJLA7I1u2qlycY1WUIgYepbAOwpwJtR1&X-Amz-Signature=e02b631b3b97ea0947bc134426be431c6dbf2b7a09a50cffa928dbce15ef100e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYFCSY6G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIExMjIgA60oVKGtgviZaXA9O9%2BNakRzji2jFqIVmUSOQAiBLl6suaEshkJqEEJQOdCf2wGF8yXMtAcCDrKKrXy0gWCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMf84Smxc8vU1lFTSvKtwDnIzJdW9%2F2jzbWfKFYbWPriWYfsZNzNrtWMtYYQgBmw0oazEFDdTseLDOSESZq5mYRXmfp1%2FeTwE6hdoUCgFFTYs%2FCCxeW5dfWq3Kg9q2Y5giCRRJQ84iTeAQjxueXygJzPbnd9SM5hbuyexb0%2FN02inGN9hL6uNA6I8bzXBJmbiTyXsDPKI%2FqxfteuuzNYnOOPp56OOX%2F%2BjaP%2BCqONDkuunxnwSpmaqEWGgM%2BmyTKHLUvBqNRLTg%2BdyxOnXLhL8%2B8MUHqTBjrj9Xy%2BwldIlku2z6b0JzI9EJnL9AI0Ex%2BxyozcFG5Gywkc0VzRLROZKdmMzi%2B5OhYb96yfSBldLBPEVIKsY6pgNd8XdhavkUVCHnt%2FWWU3Ggc7Ot3q3Jlmi3XkiyfaggNs%2BQfWYwuqx6nVzG%2BVeQ5jh1kirS%2B%2FaVB7kftoliS1OrCVusZIaqJrxNlPDdCkrgKLQn1pON7DC42K0B9BdTYgXM8ljgibdbmn4v7LnVB222B8pRFbNbLt6ce%2BJSviiWX0Isgg1FGRj4d1Llfs51tuB9quwILlntXj66Uayt3GlEeydD8c2b2WhbPxb4OjgM9%2BQHWF61aCKf95j3fTqWCugrvTAgDFOw08he%2F9PB7Aui3HNQ%2Fhww8K7AyQY6pgFdzys%2FFvKaJ7VDjLS%2FLM8umQN6XY%2FxOvKf0l%2F42XA1twwOucjZN5HtcqWXfMNvAEWG9gwX4ZAbKID%2F3rVwRGkjCpwhleioBA%2FPsqCviuRwVkBTZgfb%2Bni8%2B2iMA3wUXl90UcjpZka5gXnSN7TCuTV8D4sO2DrOPbNp6Dx35fOmKHQbXJN5hKsMre0H8BNRPJLA7I1u2qlycY1WUIgYepbAOwpwJtR1&X-Amz-Signature=ca390f2a888f616ce0bdb001446009702f05fb5b47b645125a0f53e4c1981dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

