---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCK557B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvWgL0%2Bdhqwl3rdKDUAzTUFpD4Oytrc72f%2FpqgYzqVHAiAPibpKtF6ZBo%2BJNIRd6YCIp5LqSOtE1rvaTmyfWWtzJiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMal%2Bvm%2BX8sk2WmYUxKtwDXQ7EUjMZt5tdVfC5iATWYhhqPPneLVv9ZucqTCjdELE4OUaC%2Fgr%2Fgm1wXdHO9ir%2BpwLS3xFERtvDrRNAk4sCXu6dOM1kLZGJrraPwB96u8l0kwvYOD0XqdsQxUcagrrDl7N6awufQf5HfPin2QVV0KlfMGfTdCxnjXpgDfbZor302mRkEcW3z%2Bcz%2FA5GngZJTeAJkXIcUSXh7lwbhRVFh9AogWoGS11cqKATIqdoDD%2FZfsWX8mEx6HRU%2B7N2IR1Gp%2BE3enPyrXiu4BkczcJKaI0b%2FbZsnumsyn%2FLr7%2FwC80RqWcdo66RFDhz9lfNwMwkKf7S5J41Ad2khQCqx5yF7m68gW4TpOTt9ofCtJwBcXQL3tlRUwoJIsAwBjeuzWvxdM4ZybL7yBboptnhdRDxanQpDVkbxQl0muoVumPRoqRzPcOuTm2Rx2N1Cfo7Fht4UMcSychIrNgL22%2FaNmdKaud3ToZ%2FRmjZBuJE8RjKM3aNP8fyb0VmGcw0JGkKY6T4VhILLRpB3lLTXMl%2F%2BKq0Bh%2BBilMjRhLHyg%2FeQrqVXMMVVF8hXTVDfM6mZ3LDd9IhEiByc%2BHtN6Ka8CptASz9RsZ6w3YJy6E3C4H1Yql4AHowjKeD%2FkPKpeQN7CQwweTbyQY6pgHpl6ZLNnX0ZSg97rOrN6K9KEPivSgngnQtSRnmIhPZU7L5iWCtXzHzPwrC8b7xmm8JMXBLnhW9CAZ4DbkzMzuu%2FiHBjMm6tc%2FBKXRiJWAAi8FE9qxIsVQIjPL5%2ByJ2FXSMG2OZHQcLIXQ%2BJClrVCHrpqhCHuaPruaPDzb0TgYkwkary3DVLdSWdk9Lm61T3JNLnFU37Z5poBziTpGjR1bKQ5%2Bwut9n&X-Amz-Signature=3cf4fb750625b23b7b7271c07abee219a1396ed8cf08f43ec1f2eb59ba4edb34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCK557B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvWgL0%2Bdhqwl3rdKDUAzTUFpD4Oytrc72f%2FpqgYzqVHAiAPibpKtF6ZBo%2BJNIRd6YCIp5LqSOtE1rvaTmyfWWtzJiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMal%2Bvm%2BX8sk2WmYUxKtwDXQ7EUjMZt5tdVfC5iATWYhhqPPneLVv9ZucqTCjdELE4OUaC%2Fgr%2Fgm1wXdHO9ir%2BpwLS3xFERtvDrRNAk4sCXu6dOM1kLZGJrraPwB96u8l0kwvYOD0XqdsQxUcagrrDl7N6awufQf5HfPin2QVV0KlfMGfTdCxnjXpgDfbZor302mRkEcW3z%2Bcz%2FA5GngZJTeAJkXIcUSXh7lwbhRVFh9AogWoGS11cqKATIqdoDD%2FZfsWX8mEx6HRU%2B7N2IR1Gp%2BE3enPyrXiu4BkczcJKaI0b%2FbZsnumsyn%2FLr7%2FwC80RqWcdo66RFDhz9lfNwMwkKf7S5J41Ad2khQCqx5yF7m68gW4TpOTt9ofCtJwBcXQL3tlRUwoJIsAwBjeuzWvxdM4ZybL7yBboptnhdRDxanQpDVkbxQl0muoVumPRoqRzPcOuTm2Rx2N1Cfo7Fht4UMcSychIrNgL22%2FaNmdKaud3ToZ%2FRmjZBuJE8RjKM3aNP8fyb0VmGcw0JGkKY6T4VhILLRpB3lLTXMl%2F%2BKq0Bh%2BBilMjRhLHyg%2FeQrqVXMMVVF8hXTVDfM6mZ3LDd9IhEiByc%2BHtN6Ka8CptASz9RsZ6w3YJy6E3C4H1Yql4AHowjKeD%2FkPKpeQN7CQwweTbyQY6pgHpl6ZLNnX0ZSg97rOrN6K9KEPivSgngnQtSRnmIhPZU7L5iWCtXzHzPwrC8b7xmm8JMXBLnhW9CAZ4DbkzMzuu%2FiHBjMm6tc%2FBKXRiJWAAi8FE9qxIsVQIjPL5%2ByJ2FXSMG2OZHQcLIXQ%2BJClrVCHrpqhCHuaPruaPDzb0TgYkwkary3DVLdSWdk9Lm61T3JNLnFU37Z5poBziTpGjR1bKQ5%2Bwut9n&X-Amz-Signature=4021d00e6a215a10d28ad4a163a179e43b533a624802bf428e6a2c74c3fb388d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

