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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C3AXIAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCCKCz6SIKR5aAMcbqMv15993vAzhv2XgONleteRwWxPgIhAMPvfCKSIm4Jtv6aSUM8PFauJiC8sJZYRXTcCAJuF8RVKv8DCCwQABoMNjM3NDIzMTgzODA1Igy3GG1G9%2BRMpNMcLw8q3AP1MY6lhHR0vzrf2fUVnzMn5sUjeYYRNuKQ%2FqLUkaZZDfBcGzT74osoffY9QzyRymLhLOOyPqA2f8E%2F5h21QslYpPRm7oqF8zDj7FaC3Wkh8TCEZIt76mIm9MJlHlQYxWeS5EsA5Urp80X48r036X7tMc4m1kKfaS89WkVvZf1UYbuPrK3UZ8NeUZXqb0mYnKXRzfws1PgIfLTZBe9678ObZibQyKG2zbkPGqEikoBGTvIAelU5ievFNn4YKpMkS6NxeU%2FbKLROtTWhfYxXdPnoI7696YAMXUSHQrnCEaOd9an0sisJVLdg9TGYUa8Tpa25ykkJOa1AxoBtngRQez2XIBcTjDNHf%2FrM3Bu0NNr%2F0qHkiANKKqYcNDHUfQHfH1ZP5KBXzt3Furi55V%2FWDHp9ySg0lurFEYwozsjWehyyZCM5DI8kiFPmNVXtSzk8xfgnDDe4F2GZ8GzbjGfwxk35p5JB%2B4QBcPOM%2Bidex30Xa%2FocdOl%2F%2Bsrj926By0PpXyUBdFBODyDnl6lIt0YUVs%2BiR8Rmh9%2Fbcw%2BB%2Fy5beugSUgZDoqs4gGicr1412fKCIbkEb%2BHSUaT9lCUjU5tCRdl0c04Eg0AR6E6xrpliQWXo%2FX6s8FBh1J%2BBjNSKrzD5rcDJBjqkAVpmI93%2FMHaYUfGSiv95j18W2WEdQnz8BV9OkbSc0%2BWVv7v8eOcvYVUhclqunTts1QTaEXVvxemezyOTpUSpn3%2F4cFpWpmpLMJ3%2BZTIqSgaQ5IO8sDZdWICZNRykst25WdzFxmJfDid4rpyH8VJXGiyIujCe%2BAhbybF61X8ixKtAu4JyVr%2F4iqhzW7Dr3Ze0oyfTzXqq3Y1YfjRqLrHqC2GUHr6f&X-Amz-Signature=24e496adfacd1d8c9015fb65e13bfc288f2ca13d8da65db09b6e73e55ba685f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C3AXIAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCCKCz6SIKR5aAMcbqMv15993vAzhv2XgONleteRwWxPgIhAMPvfCKSIm4Jtv6aSUM8PFauJiC8sJZYRXTcCAJuF8RVKv8DCCwQABoMNjM3NDIzMTgzODA1Igy3GG1G9%2BRMpNMcLw8q3AP1MY6lhHR0vzrf2fUVnzMn5sUjeYYRNuKQ%2FqLUkaZZDfBcGzT74osoffY9QzyRymLhLOOyPqA2f8E%2F5h21QslYpPRm7oqF8zDj7FaC3Wkh8TCEZIt76mIm9MJlHlQYxWeS5EsA5Urp80X48r036X7tMc4m1kKfaS89WkVvZf1UYbuPrK3UZ8NeUZXqb0mYnKXRzfws1PgIfLTZBe9678ObZibQyKG2zbkPGqEikoBGTvIAelU5ievFNn4YKpMkS6NxeU%2FbKLROtTWhfYxXdPnoI7696YAMXUSHQrnCEaOd9an0sisJVLdg9TGYUa8Tpa25ykkJOa1AxoBtngRQez2XIBcTjDNHf%2FrM3Bu0NNr%2F0qHkiANKKqYcNDHUfQHfH1ZP5KBXzt3Furi55V%2FWDHp9ySg0lurFEYwozsjWehyyZCM5DI8kiFPmNVXtSzk8xfgnDDe4F2GZ8GzbjGfwxk35p5JB%2B4QBcPOM%2Bidex30Xa%2FocdOl%2F%2Bsrj926By0PpXyUBdFBODyDnl6lIt0YUVs%2BiR8Rmh9%2Fbcw%2BB%2Fy5beugSUgZDoqs4gGicr1412fKCIbkEb%2BHSUaT9lCUjU5tCRdl0c04Eg0AR6E6xrpliQWXo%2FX6s8FBh1J%2BBjNSKrzD5rcDJBjqkAVpmI93%2FMHaYUfGSiv95j18W2WEdQnz8BV9OkbSc0%2BWVv7v8eOcvYVUhclqunTts1QTaEXVvxemezyOTpUSpn3%2F4cFpWpmpLMJ3%2BZTIqSgaQ5IO8sDZdWICZNRykst25WdzFxmJfDid4rpyH8VJXGiyIujCe%2BAhbybF61X8ixKtAu4JyVr%2F4iqhzW7Dr3Ze0oyfTzXqq3Y1YfjRqLrHqC2GUHr6f&X-Amz-Signature=52495744bf8b495c37fc27791383a58b2edab8cc96a31017dec5b363b3e1f4cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

