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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625WUH2F3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIH1qkQDuF7kCJgrWM6xgSxA30CZOl%2B%2BkY6tDfKyf%2F%2F7hAiA7jKg6N3wCcAZ9kaOwbVdkxyusCwpy7HqJ7bMYJS2EmCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM%2BUwBop812qY1FlI7KtwDGueWzGrnTvl58PoF7zBfBJkMIRjRnnk6pC9f63ASPHVo1YUUxTpvWr%2FRBEKk%2BU6SG7LPrfzQ%2F9dodPzqIMowsBO43x3BuCKcfNLQvqEn8mAoo%2BXXUDMEIIBf3%2FgNGh2%2BRNpAhNyPaVaVJnU3tJMmoSfHXkfo771MYKqwm9HP3oM3EMCvVqE8WDkcw%2BNrGqZ8OO9om4tVNwekypDVggeiFdUlrpPQ4Er7aTppH1G5hLFSfDbpX4xGqR9N4FA9Oj1CUhDmBgif%2FUCgp%2BOTNbe9dUVJCxqINW%2F588bBsks7MsirbazTerxyR%2B%2F04Mq2QgzZR9A5IDOl76Hp%2Fg9FT1M2f1a4PtBZX4v9KP%2FDvJrU9ToKVKrN%2F%2B59810CozRys1PXHYylWk33rfbC40r7gTPL75NIHeWvqWxdbwf9mZgZBcAYJ0Oi8smZ%2F%2FiQebtZRfis74okCjtdiKM%2Bp%2BTYxK8mJ%2Fa8Et5myMrTGrSC86wV7hGysVSr0WxzQR51r8vBw3Y9vtb8ptB2LfUCWbTcw88pvTgdyBsPuTA6Nx%2F7rkajdEpmidi0kbPfLbqH93myQbdl8%2BwGdSeaPA5FhDw6dCyS1%2FJiOEnzQ4Ba5h9tdzhgMoLnYxwnR5P%2BEOpOxa0w4NS%2FyQY6pgHrGrGMIy3tX4WXrqDY%2BLgvMjDyYl2E%2F8uNnkemHnUVkLjt9IhpY%2BMmYCNJcDFOCAZ4Dym1sxVaQSzd4rsiFk%2Bk%2FhYoFGsQaeGzm%2B31rLIj13LQ5aeA7UGJnXtginVGtbr8qtVx8%2BZjr67XLNbnHtHyEeh2PODculCpviC82xMF8Bk5KYv23vSJjWbWqP1o2omzjbLdCiA1rfLYtJr1ufUo8%2BYQwhU8&X-Amz-Signature=b282a54156cee2314e66f62fe45ff2324ea0c817832ce4426beea2a9c1c110b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625WUH2F3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIH1qkQDuF7kCJgrWM6xgSxA30CZOl%2B%2BkY6tDfKyf%2F%2F7hAiA7jKg6N3wCcAZ9kaOwbVdkxyusCwpy7HqJ7bMYJS2EmCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM%2BUwBop812qY1FlI7KtwDGueWzGrnTvl58PoF7zBfBJkMIRjRnnk6pC9f63ASPHVo1YUUxTpvWr%2FRBEKk%2BU6SG7LPrfzQ%2F9dodPzqIMowsBO43x3BuCKcfNLQvqEn8mAoo%2BXXUDMEIIBf3%2FgNGh2%2BRNpAhNyPaVaVJnU3tJMmoSfHXkfo771MYKqwm9HP3oM3EMCvVqE8WDkcw%2BNrGqZ8OO9om4tVNwekypDVggeiFdUlrpPQ4Er7aTppH1G5hLFSfDbpX4xGqR9N4FA9Oj1CUhDmBgif%2FUCgp%2BOTNbe9dUVJCxqINW%2F588bBsks7MsirbazTerxyR%2B%2F04Mq2QgzZR9A5IDOl76Hp%2Fg9FT1M2f1a4PtBZX4v9KP%2FDvJrU9ToKVKrN%2F%2B59810CozRys1PXHYylWk33rfbC40r7gTPL75NIHeWvqWxdbwf9mZgZBcAYJ0Oi8smZ%2F%2FiQebtZRfis74okCjtdiKM%2Bp%2BTYxK8mJ%2Fa8Et5myMrTGrSC86wV7hGysVSr0WxzQR51r8vBw3Y9vtb8ptB2LfUCWbTcw88pvTgdyBsPuTA6Nx%2F7rkajdEpmidi0kbPfLbqH93myQbdl8%2BwGdSeaPA5FhDw6dCyS1%2FJiOEnzQ4Ba5h9tdzhgMoLnYxwnR5P%2BEOpOxa0w4NS%2FyQY6pgHrGrGMIy3tX4WXrqDY%2BLgvMjDyYl2E%2F8uNnkemHnUVkLjt9IhpY%2BMmYCNJcDFOCAZ4Dym1sxVaQSzd4rsiFk%2Bk%2FhYoFGsQaeGzm%2B31rLIj13LQ5aeA7UGJnXtginVGtbr8qtVx8%2BZjr67XLNbnHtHyEeh2PODculCpviC82xMF8Bk5KYv23vSJjWbWqP1o2omzjbLdCiA1rfLYtJr1ufUo8%2BYQwhU8&X-Amz-Signature=1647f4032b0413847d1c88bdf328078340dcb3240b36eb36ce3a8486a428ed3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

