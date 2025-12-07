---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDB26ZOF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGu5o%2Fq%2BD%2BGzXaBcqtmQq8ClKr8tUGrpFhLrEYXezm3sAiAE6955ZcG3pu2%2Fwe5etwX0FhhXvHAxUmYKd7oe7SwH1yqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnEvJq3gYP%2Bz%2BfHsQKtwDBmE7T9On3%2BJP16GCWQP1lVXKE3nRGrfB39D1uq2yUAT69KXHQ0OltjK0HtO2L7VqKF9bVwzvsdMoLxkP8oZHvEVWoKUP84vSfl34dDhAQj%2FfEb8G%2BnXXau35moZeWGNM6wNd4WjwFfqyakhqWmoM8dh2gcLvI7aTF5Ayz9g0FxbAVq6yqwsohLBFGx8QiTwrQ8oJVXMD6cK6hNRj9FyKZbIJgLCm9f3MY84dPm15jr8poX0O2H7rf%2BIi%2BzKYRajaDRVt87ZPhftVLoSus0Kk6oiGh%2Fg1mS1JZ%2F524O8QjXNAM1fCWwGDn4vw4B0IlTlGVU%2B1kGlYbpUyT40f3CEm70eH5gEhXjJtbJmcV2WqqvOIiUgDEZDCv6Lzdv%2FFKITKna%2BbEOqbyCCIjhep%2F1FFb2Kuqmh5Auez1ZP7WbhUPjQxrrFJ0JrDaET4n0GBBlIvkMbehrqASIg07RlIoLg4aN87EJBi93At1rh%2F74TlQpLNgQZ11nn3bB37%2FJmMRME3r5EQyd0NB3paGiN%2B%2BJ8%2BoQliuwRFmpgcZhSisc3zwyzT2zfzWremh1uFC9a23eqFaB8web66%2FX55XKEsg0W2tWZnXRkxTrajVtOxD%2FPycnxp5YZSO9vUoVUDbb0wxZ7UyQY6pgELsCBb5nFvL22tFCyRcQmNe7fept4z2kFIj%2B9UeSoq8gdZiK4AEnRugFlw67QfbT6YhOMpgKCWzKZfgKnWYM4dHyv43BXP4IHNlx785kNusJF6%2BhsqB4Bj8d92MSTUsl9j34gDhaacSMi%2FHxWNGk7X0t3eJqBjqdiDhi8E5exXx8YgJrC0Nb39NkOVWhFh1WYqAeUS21CS3gXJksv5HIkfUS6woZKf&X-Amz-Signature=c131e698280282d9ce34ddf73dc037f5c7f5c8db8c2ef49fa6da34e3326f9d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDB26ZOF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGu5o%2Fq%2BD%2BGzXaBcqtmQq8ClKr8tUGrpFhLrEYXezm3sAiAE6955ZcG3pu2%2Fwe5etwX0FhhXvHAxUmYKd7oe7SwH1yqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnEvJq3gYP%2Bz%2BfHsQKtwDBmE7T9On3%2BJP16GCWQP1lVXKE3nRGrfB39D1uq2yUAT69KXHQ0OltjK0HtO2L7VqKF9bVwzvsdMoLxkP8oZHvEVWoKUP84vSfl34dDhAQj%2FfEb8G%2BnXXau35moZeWGNM6wNd4WjwFfqyakhqWmoM8dh2gcLvI7aTF5Ayz9g0FxbAVq6yqwsohLBFGx8QiTwrQ8oJVXMD6cK6hNRj9FyKZbIJgLCm9f3MY84dPm15jr8poX0O2H7rf%2BIi%2BzKYRajaDRVt87ZPhftVLoSus0Kk6oiGh%2Fg1mS1JZ%2F524O8QjXNAM1fCWwGDn4vw4B0IlTlGVU%2B1kGlYbpUyT40f3CEm70eH5gEhXjJtbJmcV2WqqvOIiUgDEZDCv6Lzdv%2FFKITKna%2BbEOqbyCCIjhep%2F1FFb2Kuqmh5Auez1ZP7WbhUPjQxrrFJ0JrDaET4n0GBBlIvkMbehrqASIg07RlIoLg4aN87EJBi93At1rh%2F74TlQpLNgQZ11nn3bB37%2FJmMRME3r5EQyd0NB3paGiN%2B%2BJ8%2BoQliuwRFmpgcZhSisc3zwyzT2zfzWremh1uFC9a23eqFaB8web66%2FX55XKEsg0W2tWZnXRkxTrajVtOxD%2FPycnxp5YZSO9vUoVUDbb0wxZ7UyQY6pgELsCBb5nFvL22tFCyRcQmNe7fept4z2kFIj%2B9UeSoq8gdZiK4AEnRugFlw67QfbT6YhOMpgKCWzKZfgKnWYM4dHyv43BXP4IHNlx785kNusJF6%2BhsqB4Bj8d92MSTUsl9j34gDhaacSMi%2FHxWNGk7X0t3eJqBjqdiDhi8E5exXx8YgJrC0Nb39NkOVWhFh1WYqAeUS21CS3gXJksv5HIkfUS6woZKf&X-Amz-Signature=71de3fa4fbc736517a7fbcbf9818879755551051c26d000414f2e13abd4d153c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

