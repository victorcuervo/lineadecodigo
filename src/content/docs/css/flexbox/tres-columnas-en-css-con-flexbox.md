---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPK5CJZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE5vzsdwzhEeRkouJzeeOfg8y50A1qQBONJ4REVf2HoAiAwxxBpw9rY4UD5mWJvHiELXsIg4CzTKK5ogU0b%2Bmon6SqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4C8r6vEvmpAExMUJKtwD5fSm%2FcZvJCm93QTaKakrdPLqIHNb27PzhE5ficZ4LrD%2FVuecLlf73RTOpbYvuKqw7T8OlTkBfak3ctvj6XyLGQjkVlA3dwcnhVtImEf2bT0YHGUi%2Bo0juT5hznBApkJcG2Gd24EztESa3v83loUXQV%2FVoJz74082xJhboGxRRUX2uTpaa5ElCX3DQbq4VqgWHVWtQvbuPNmIwtGvfUcuOtu6FLHxBj0RBNZtx0UHcLz40z%2FFyDXaQwV3NOKUpvlBfwoB0Wr3GnbFGJpJwcUyttzMXtCzkVYHj6GUINGqyBnB6OaZ9bddKaM1yaPyaIc7DSorc%2FsFgeupehz%2BPlSjZc7h3cwgxScqUXfKfe1EoLal%2Fyu%2BELkm%2F7C1vDQRSCZ46YoFhlqPPI4aLgIbA0BJSGfajZq9iUylB15iSCAOZMWgcM5N%2FUS3%2F7ruYcwCFA9t6sOYKENkCJ%2BL76njUvkmAW%2FbZPP%2B%2BiqZ9ZYabCgudnm5gDRof1GBADAkMUPyNfps1Ubd7Q%2BhIKaxo86vdyd69uGxZAePatcYoIvV1Xyz8Q3at63iKAC4%2FG2O%2B5tM9lAabAheGVJ0OkEenuZebHD%2BdnAJ7pdym5tUW5lKV%2BU4MOgHnhR6avPGnyy6cPcw5Y%2FbyQY6pgGOmJKiaz6x4oquTu8eZBE1Wo2EpUpzbRK5D8ducrXXgda%2FOG9tQtwK3dcRr2wrQUzi1FVv4WbQUMHlE0GRNQGdKZCPaIXZ5QEXhnKnVpYIjXvl0bBzhNjtOPjzZTtGzcs72RTpiPYv7oC6%2BBCapWd0NwejByhsYrsxGu2uZgIcCTHZui01MjxgM4t3WIhkBk%2BUHpq4Yg%2BKCVSWUvZ2CKvY%2B9%2FXwqaq&X-Amz-Signature=03ec887016a5c1a995a2fc608ea134dd697bf2375ea4734be0f4972a94fe6f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPK5CJZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE5vzsdwzhEeRkouJzeeOfg8y50A1qQBONJ4REVf2HoAiAwxxBpw9rY4UD5mWJvHiELXsIg4CzTKK5ogU0b%2Bmon6SqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4C8r6vEvmpAExMUJKtwD5fSm%2FcZvJCm93QTaKakrdPLqIHNb27PzhE5ficZ4LrD%2FVuecLlf73RTOpbYvuKqw7T8OlTkBfak3ctvj6XyLGQjkVlA3dwcnhVtImEf2bT0YHGUi%2Bo0juT5hznBApkJcG2Gd24EztESa3v83loUXQV%2FVoJz74082xJhboGxRRUX2uTpaa5ElCX3DQbq4VqgWHVWtQvbuPNmIwtGvfUcuOtu6FLHxBj0RBNZtx0UHcLz40z%2FFyDXaQwV3NOKUpvlBfwoB0Wr3GnbFGJpJwcUyttzMXtCzkVYHj6GUINGqyBnB6OaZ9bddKaM1yaPyaIc7DSorc%2FsFgeupehz%2BPlSjZc7h3cwgxScqUXfKfe1EoLal%2Fyu%2BELkm%2F7C1vDQRSCZ46YoFhlqPPI4aLgIbA0BJSGfajZq9iUylB15iSCAOZMWgcM5N%2FUS3%2F7ruYcwCFA9t6sOYKENkCJ%2BL76njUvkmAW%2FbZPP%2B%2BiqZ9ZYabCgudnm5gDRof1GBADAkMUPyNfps1Ubd7Q%2BhIKaxo86vdyd69uGxZAePatcYoIvV1Xyz8Q3at63iKAC4%2FG2O%2B5tM9lAabAheGVJ0OkEenuZebHD%2BdnAJ7pdym5tUW5lKV%2BU4MOgHnhR6avPGnyy6cPcw5Y%2FbyQY6pgGOmJKiaz6x4oquTu8eZBE1Wo2EpUpzbRK5D8ducrXXgda%2FOG9tQtwK3dcRr2wrQUzi1FVv4WbQUMHlE0GRNQGdKZCPaIXZ5QEXhnKnVpYIjXvl0bBzhNjtOPjzZTtGzcs72RTpiPYv7oC6%2BBCapWd0NwejByhsYrsxGu2uZgIcCTHZui01MjxgM4t3WIhkBk%2BUHpq4Yg%2BKCVSWUvZ2CKvY%2B9%2FXwqaq&X-Amz-Signature=029c1a6e6554bfd70242f720cffe3e3fc45f88db2829866d414969db5d32b279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

