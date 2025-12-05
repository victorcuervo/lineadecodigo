---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUKCNOU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBU3cQ3XBmNDjpHRQ7iOgGsd93CdoOGkVdGGu%2BnsA0DcAiAICr29bItyYZt%2BsUk372MMwBne%2FAJifyx6%2Foinyp%2Freir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMSi7lQySEZIOGz0WmKtwD5YJ6%2FKr0IxSs5u6M69oyeX5q3U2XUvcmO77xChyssizKNq29vW34gVrzSU9%2BqOAs2LDuyjfgLok%2FLSGALR%2F8SJeip2PB77E8FR%2Fly2JdPkOtUcOi%2FAfvYg5mp7iW%2FdfhgA7yvYQV203oBuc0mbA%2BbrhEaFqnFyj7f47wAts9aDt95yFns9If2Yrz76ACUKtS9eFPh67Wx5ar35kTZlKbf3wN05VXqx6B%2F%2FwWLE9tqFYFVuxE6gzP7IGl%2B7yFl9Bd%2FXVnS5DXrP%2FtG8zPaZsMslc7pjLTSqG4jmRRZ4tOvsnph71einUbNv2dtXRx2zQ5zDjJUZnq0FmPuncysEhZp3n2HOKp%2FqV9Rvo3dH9d0Ckvb3QQh%2FdN7gg8dVefvjLm67lo%2FJFu6KThkrdcrtNlWULwcJZ4U%2BBZm90xE8hjn68h1F7ABZouQn1ikNEo%2FRouP7aSnqphDU2f0z0QR%2F5bsFG6TD0qzoo93F6I3PcX1XVqo2RH30SOIWC8cCYqeBKqdJk755M7Y2MpWPc%2F1AXoj2aMYJ4NXPb0ZYShDUGVQjkUv0qeu0FvZObepA7V5JNfAw8RJ%2BMXaHZXbprPGzNwq4OYi0CE%2BIZBEIbfH3oOFuRYvoxDwS083M6vO%2Bkw9PHLyQY6pgHiivcI8dkndNulfsZ0kaLcRVvBi56vyAF04yr5B2u2eXaQT4%2BvJPm7B542OSDtwKNz%2B0xxi9h5gwvxW3FLgGUoq75mM8z0ydTyximyoqi5KPCH1ayWEolVntzXgam%2FlfpbsJch4it0i1pV9TMvdFXItpVxZbVHUvZpMU%2Fw5RfJnBasTysIqjqEJXju5V0XgBAph%2FjaxVwwJWcit%2FIlkpoP2HJ0wOdf&X-Amz-Signature=b2a00d49c0d9b506f0af838fe5659afc204dd25bcfe92a3d4c4fe23c749ead7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUKCNOU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBU3cQ3XBmNDjpHRQ7iOgGsd93CdoOGkVdGGu%2BnsA0DcAiAICr29bItyYZt%2BsUk372MMwBne%2FAJifyx6%2Foinyp%2Freir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMSi7lQySEZIOGz0WmKtwD5YJ6%2FKr0IxSs5u6M69oyeX5q3U2XUvcmO77xChyssizKNq29vW34gVrzSU9%2BqOAs2LDuyjfgLok%2FLSGALR%2F8SJeip2PB77E8FR%2Fly2JdPkOtUcOi%2FAfvYg5mp7iW%2FdfhgA7yvYQV203oBuc0mbA%2BbrhEaFqnFyj7f47wAts9aDt95yFns9If2Yrz76ACUKtS9eFPh67Wx5ar35kTZlKbf3wN05VXqx6B%2F%2FwWLE9tqFYFVuxE6gzP7IGl%2B7yFl9Bd%2FXVnS5DXrP%2FtG8zPaZsMslc7pjLTSqG4jmRRZ4tOvsnph71einUbNv2dtXRx2zQ5zDjJUZnq0FmPuncysEhZp3n2HOKp%2FqV9Rvo3dH9d0Ckvb3QQh%2FdN7gg8dVefvjLm67lo%2FJFu6KThkrdcrtNlWULwcJZ4U%2BBZm90xE8hjn68h1F7ABZouQn1ikNEo%2FRouP7aSnqphDU2f0z0QR%2F5bsFG6TD0qzoo93F6I3PcX1XVqo2RH30SOIWC8cCYqeBKqdJk755M7Y2MpWPc%2F1AXoj2aMYJ4NXPb0ZYShDUGVQjkUv0qeu0FvZObepA7V5JNfAw8RJ%2BMXaHZXbprPGzNwq4OYi0CE%2BIZBEIbfH3oOFuRYvoxDwS083M6vO%2Bkw9PHLyQY6pgHiivcI8dkndNulfsZ0kaLcRVvBi56vyAF04yr5B2u2eXaQT4%2BvJPm7B542OSDtwKNz%2B0xxi9h5gwvxW3FLgGUoq75mM8z0ydTyximyoqi5KPCH1ayWEolVntzXgam%2FlfpbsJch4it0i1pV9TMvdFXItpVxZbVHUvZpMU%2Fw5RfJnBasTysIqjqEJXju5V0XgBAph%2FjaxVwwJWcit%2FIlkpoP2HJ0wOdf&X-Amz-Signature=7a1020b1d5030eb6d90137117eb817bc80c27347429b1c6001589ddb60992ab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

