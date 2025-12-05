---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GY2ASZQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgNb5fSQpiG4cMQnt3f3MnX53FhnBTmFWY3KXpLI%2FN4AiAoe2kQp3gqPA5TMjcxDTRWIaX%2BaqLSmOgkulTCjjr0mCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMl%2Bl4b%2FB%2B5leWKncqKtwD7f7X%2BzOjv0%2FLu4G9A4QoW2U1qPWSQW9YB3qy1YohCqBePEniNYT2Cee1bHUMnmeKzDfEl2rAh2Eht5RJRxyHWDH462XkWnJrklYyDIcF%2FepznE%2F3pmBwcoPmdo09GSVqj4DIGFmaElCARWOJ3L0Cn%2BiSlBXzAXs9%2B%2FyTO69WoXkcOM8ZBI2bf7mXtzaW16btLiZUr04M1pV7cOmf%2BdXCMPhHPhZZK4QacPssaKDumW3mHcP2wRS6cudD2WkvKYBe3zvcWJ1XmTIiUeNiU1GDSc8h568j2XehHZb%2By60ZIPhQcV1TQuZ7wGXLlfvklXudk9sMGaqGaacViIUuwkRdBevIiaM3RsVbnlZ7vp%2FrKsoBM58x691D6IHSwiTNC6IWGpqmB1QV5hMom91PJCwHoSag4tGmE4GkijXTUt46xxwlNAGhP2GKgqGvBSfm%2FQUtjra6lInarpqGeSkCAgN9JEBzF%2BJREt83TqyHEpN6%2BTXNyJasc%2BT6%2BmLml%2Fcvz%2FyBkGo8ZcbU7fBINsa6dLzCjQ2gFRjBn00RJ5XoQBJdyaSU3Onw7v1FIpN%2Bkb2ngVVmGc0Kj0K5IHOw7lHzPnS8%2BSiKboUfgZ96eLn5vNtq4kC76uoH7%2BCoUZhLKCAw74vIyQY6pgFq0OqQu8du2q%2FCy0iZUGX4m9SHB5SNNaRacNcEEiv2%2BZ6E9FRvP11%2B8DEtR9kyVWJIOC6P%2Bxl8WJjDxlfgjMqIV2xjiIqx8l3W4Ggn3Vq1YFJbDunxi%2FevawkEmldeTCfsocaLTlniHiQSzKOa2ygtrlU9tbDTzsCM6eQdL%2F03jm%2FzLqQdEX6QSwuBp6YWUeRVejrf1IjyX8uywc%2FloJtzrIUT8iYJ&X-Amz-Signature=30115b7a5192527c65a1f2fea5802b87a3f80484a59634475169a73837e88a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GY2ASZQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgNb5fSQpiG4cMQnt3f3MnX53FhnBTmFWY3KXpLI%2FN4AiAoe2kQp3gqPA5TMjcxDTRWIaX%2BaqLSmOgkulTCjjr0mCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMl%2Bl4b%2FB%2B5leWKncqKtwD7f7X%2BzOjv0%2FLu4G9A4QoW2U1qPWSQW9YB3qy1YohCqBePEniNYT2Cee1bHUMnmeKzDfEl2rAh2Eht5RJRxyHWDH462XkWnJrklYyDIcF%2FepznE%2F3pmBwcoPmdo09GSVqj4DIGFmaElCARWOJ3L0Cn%2BiSlBXzAXs9%2B%2FyTO69WoXkcOM8ZBI2bf7mXtzaW16btLiZUr04M1pV7cOmf%2BdXCMPhHPhZZK4QacPssaKDumW3mHcP2wRS6cudD2WkvKYBe3zvcWJ1XmTIiUeNiU1GDSc8h568j2XehHZb%2By60ZIPhQcV1TQuZ7wGXLlfvklXudk9sMGaqGaacViIUuwkRdBevIiaM3RsVbnlZ7vp%2FrKsoBM58x691D6IHSwiTNC6IWGpqmB1QV5hMom91PJCwHoSag4tGmE4GkijXTUt46xxwlNAGhP2GKgqGvBSfm%2FQUtjra6lInarpqGeSkCAgN9JEBzF%2BJREt83TqyHEpN6%2BTXNyJasc%2BT6%2BmLml%2Fcvz%2FyBkGo8ZcbU7fBINsa6dLzCjQ2gFRjBn00RJ5XoQBJdyaSU3Onw7v1FIpN%2Bkb2ngVVmGc0Kj0K5IHOw7lHzPnS8%2BSiKboUfgZ96eLn5vNtq4kC76uoH7%2BCoUZhLKCAw74vIyQY6pgFq0OqQu8du2q%2FCy0iZUGX4m9SHB5SNNaRacNcEEiv2%2BZ6E9FRvP11%2B8DEtR9kyVWJIOC6P%2Bxl8WJjDxlfgjMqIV2xjiIqx8l3W4Ggn3Vq1YFJbDunxi%2FevawkEmldeTCfsocaLTlniHiQSzKOa2ygtrlU9tbDTzsCM6eQdL%2F03jm%2FzLqQdEX6QSwuBp6YWUeRVejrf1IjyX8uywc%2FloJtzrIUT8iYJ&X-Amz-Signature=6b88947890c999ce70e25dc5b25d1dd04aa14d46bfb2869a1224e42ef00f4a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

