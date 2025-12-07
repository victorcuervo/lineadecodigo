---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVQW4TTT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8rHgXQYxX5A8AdJITMO8eJeijsVr2n9WBV8ExgNoHcAiBP%2BPLQf%2F1Yjsnzm6%2Fr7yEmdoCEUg%2F%2FykGbBUXInpHeAyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMTS4LGpqUgY1R8fKtwDDnwIYr9Mm19V3Otucv9ikVYXMzcHizLHHj0aKxXs6AQZm%2FBY%2Bm4sK7ZWNlwaPA1LmY4%2BOsR27RAGpKg26nvy3l%2FToa%2F8LPbTQi7ZEhm0kazqy%2FTgqBqC4x9k7Mq3Bk97MzykeMeRLYmCqKrN4MHJw%2B4o1CqD4mB5PjBzdnaxJrhT%2Fm3UJwiS2mfm6lEQ4ZYW%2FoEfXAl%2FhsderpsV9mqu0J5QWmcDiFVpHWag2dleZPBMTLPbL%2BkM2HawhdgY2Gr4zfIeclY4l05llEx1IgUWPxpO8%2BV7zxG9rWQ3W5yinLTY1WSqx7B4z7%2F9gMaJ74irC6G3PGjRK4ScYwuIjg9%2BLWr7R%2B4Qx%2BlUKpszUlxnc6DmQ7s6vElj%2FdNxHHfLGUsL5vyEHZlcYr09TzpQrEeR87NO%2FIzrK%2FguJ8TAlTxDcnQMfuC3wdO9T1EklBtTZGDSV5%2BF098bt5GGgWahiPjUIox4AgftNYKQUA3pBjIhwOP%2BMKo%2B%2Be5mkhmIjkXMt83d6oS9FBfvGnoa%2B7PQPQ1OsbhhfXL0tsPGR3UPQhY713ki8v7X9MBqZ2ppWjMEpQsLKHqhROkM9wTaA5N%2FCAwhvR12Vi26gfZb%2F5ZqvlwbCRMznWXgQ4tu1GS8vRAwjYXYyQY6pgHQmVK6xMuGEij2YxW2GSNtYndep27eA%2BabcNXuXU9rwqI3wVgkRyHwWRqWn4tlVLNmaPhAWReQeYia7d5bUWYEZbeI1wH8FdbZ0oFeIKId7TDYDkQ0WaIwe0lQz%2BvsF5LeXWdqxg1%2B3QZF%2FRTOAnaC%2BV34dooSuvFR4CKnREI%2BjcQDhpQDA1DjggAwLLv1u6e5SAJ%2B63lxBsN4MR60%2FREJlycY%2FLEs&X-Amz-Signature=327dc46eaab96b43bb06c6dfc4c411284f214d5a2b762e439fc1f8e6dfa77112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVQW4TTT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8rHgXQYxX5A8AdJITMO8eJeijsVr2n9WBV8ExgNoHcAiBP%2BPLQf%2F1Yjsnzm6%2Fr7yEmdoCEUg%2F%2FykGbBUXInpHeAyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMTS4LGpqUgY1R8fKtwDDnwIYr9Mm19V3Otucv9ikVYXMzcHizLHHj0aKxXs6AQZm%2FBY%2Bm4sK7ZWNlwaPA1LmY4%2BOsR27RAGpKg26nvy3l%2FToa%2F8LPbTQi7ZEhm0kazqy%2FTgqBqC4x9k7Mq3Bk97MzykeMeRLYmCqKrN4MHJw%2B4o1CqD4mB5PjBzdnaxJrhT%2Fm3UJwiS2mfm6lEQ4ZYW%2FoEfXAl%2FhsderpsV9mqu0J5QWmcDiFVpHWag2dleZPBMTLPbL%2BkM2HawhdgY2Gr4zfIeclY4l05llEx1IgUWPxpO8%2BV7zxG9rWQ3W5yinLTY1WSqx7B4z7%2F9gMaJ74irC6G3PGjRK4ScYwuIjg9%2BLWr7R%2B4Qx%2BlUKpszUlxnc6DmQ7s6vElj%2FdNxHHfLGUsL5vyEHZlcYr09TzpQrEeR87NO%2FIzrK%2FguJ8TAlTxDcnQMfuC3wdO9T1EklBtTZGDSV5%2BF098bt5GGgWahiPjUIox4AgftNYKQUA3pBjIhwOP%2BMKo%2B%2Be5mkhmIjkXMt83d6oS9FBfvGnoa%2B7PQPQ1OsbhhfXL0tsPGR3UPQhY713ki8v7X9MBqZ2ppWjMEpQsLKHqhROkM9wTaA5N%2FCAwhvR12Vi26gfZb%2F5ZqvlwbCRMznWXgQ4tu1GS8vRAwjYXYyQY6pgHQmVK6xMuGEij2YxW2GSNtYndep27eA%2BabcNXuXU9rwqI3wVgkRyHwWRqWn4tlVLNmaPhAWReQeYia7d5bUWYEZbeI1wH8FdbZ0oFeIKId7TDYDkQ0WaIwe0lQz%2BvsF5LeXWdqxg1%2B3QZF%2FRTOAnaC%2BV34dooSuvFR4CKnREI%2BjcQDhpQDA1DjggAwLLv1u6e5SAJ%2B63lxBsN4MR60%2FREJlycY%2FLEs&X-Amz-Signature=fe4ed1d95cf5fcf132b4fe6ae13a8cf1e5e9bad4e71468fe07ed42094babe510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

