---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KHP77MM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwNfMf6IIn5MymnwsrMQ7dV3MUr3odEnLjp4q2ulWQcAIhAJC%2FuwcaKOT%2FjK9QnuwwQMbghTDQvbAbgL0zmyVpVeP9KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ6LqWwmIAkAJ%2BElMq3AOFxEvGTwJEFuCpSqZfbvQDPeDHd0CcnP4v8ezD7QlgnzbeW1mqxsCzdYwELrugSEMLS8Cl5D6ZVSVgJr1migIqaPadHyl6BEneZWOTZDcdzrv99SuNwQ9NR3RJy6j6uj7Jw%2B0oUZ8M%2B0eWY8d%2BImKrW%2FgsJLLhCh9Dji1EfQlWwrZVRxdZW8Z5PES7MHlvfYHoo1QGjp2BnVwpMtB%2BSQLE%2Fb73drFb%2BwGk9GwaocKm4lYcXfpBwvyqv%2FeaCmjTWB%2BDIepkAjKNk1XS3mDkeCb%2BFU7Th7rJeRezWtjy5lf2i8coUUP%2FSmdhF9%2BgUuJvdgqugo6nhknNNh%2FL8uOEd%2FSL0QIWKLakTKBW0xS7Pi92TNPMvhlYUsczzl%2B3zP7PNPs8Eo%2Bop%2FKWLJxWNfFBDE4TP793%2FBSbdC2695SIAKX67W0qP45qO7E7P9EBd1fenAa5iPlCUhuls53dmsPDhYRk37it0avbTzMj3YPwTf1sxVweI4C3Y4PfwLiRnCNQsDbaUKTfmHljxyXsAzyndHk6UetX%2Bs%2FdNZUVREK3rurhDfIhMbUrAahYdI3JyuEk1AQSpUoB1mZgWr9U%2BBoOYmHOo0EqWkyODOF%2F5CeEVlxUgZG0eYye2rFGt0MhFjC7gt3JBjqkAQfIz1Z6ew5mRP5CodGYSnmUKNCnqBNL13eTPjcK0pkDCerikIwL98W%2FGMliU6B0Q9r0vxudciOp42hwm4SDI%2FErWaH5TVhGvRy0JeimsnpbMw9QDoDAVad1cxJd0c0woLgyFjO1iVwK5RSDcMCwjSNpEamRjaSAKzVLmS34bT%2Ffw5ogzTQEgyFQGS3KE4BmaZmIG3GSWBpiz5RzpG1ttrNm5Sqa&X-Amz-Signature=f10e9d1589f17bcaf10fbbad5e985629b8b13de1162205a5e90dc57fb4703086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KHP77MM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwNfMf6IIn5MymnwsrMQ7dV3MUr3odEnLjp4q2ulWQcAIhAJC%2FuwcaKOT%2FjK9QnuwwQMbghTDQvbAbgL0zmyVpVeP9KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ6LqWwmIAkAJ%2BElMq3AOFxEvGTwJEFuCpSqZfbvQDPeDHd0CcnP4v8ezD7QlgnzbeW1mqxsCzdYwELrugSEMLS8Cl5D6ZVSVgJr1migIqaPadHyl6BEneZWOTZDcdzrv99SuNwQ9NR3RJy6j6uj7Jw%2B0oUZ8M%2B0eWY8d%2BImKrW%2FgsJLLhCh9Dji1EfQlWwrZVRxdZW8Z5PES7MHlvfYHoo1QGjp2BnVwpMtB%2BSQLE%2Fb73drFb%2BwGk9GwaocKm4lYcXfpBwvyqv%2FeaCmjTWB%2BDIepkAjKNk1XS3mDkeCb%2BFU7Th7rJeRezWtjy5lf2i8coUUP%2FSmdhF9%2BgUuJvdgqugo6nhknNNh%2FL8uOEd%2FSL0QIWKLakTKBW0xS7Pi92TNPMvhlYUsczzl%2B3zP7PNPs8Eo%2Bop%2FKWLJxWNfFBDE4TP793%2FBSbdC2695SIAKX67W0qP45qO7E7P9EBd1fenAa5iPlCUhuls53dmsPDhYRk37it0avbTzMj3YPwTf1sxVweI4C3Y4PfwLiRnCNQsDbaUKTfmHljxyXsAzyndHk6UetX%2Bs%2FdNZUVREK3rurhDfIhMbUrAahYdI3JyuEk1AQSpUoB1mZgWr9U%2BBoOYmHOo0EqWkyODOF%2F5CeEVlxUgZG0eYye2rFGt0MhFjC7gt3JBjqkAQfIz1Z6ew5mRP5CodGYSnmUKNCnqBNL13eTPjcK0pkDCerikIwL98W%2FGMliU6B0Q9r0vxudciOp42hwm4SDI%2FErWaH5TVhGvRy0JeimsnpbMw9QDoDAVad1cxJd0c0woLgyFjO1iVwK5RSDcMCwjSNpEamRjaSAKzVLmS34bT%2Ffw5ogzTQEgyFQGS3KE4BmaZmIG3GSWBpiz5RzpG1ttrNm5Sqa&X-Amz-Signature=e01f1ccab0b115a76232c3ce5343ed27cb14e5fa2adb71ba086f0a12f7cf2a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

