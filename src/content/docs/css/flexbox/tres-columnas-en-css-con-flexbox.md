---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKR3IKC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsNnt9I75GfCxuk7PIP1tJWGh7s2JSh%2FeWjOh8rXLfagIhAJsnVLWgX9Q6GxRGOFg9eikc%2Bphzs1dyX81FZT5I9nGQKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt602A8iH0CJ7HvU8q3APx8gFRk%2F18p8G3q4rt3J2Jj6nurpisOBCWoCTVqgSSbD1EHY2x9npigSrKoBovJ13iqXUCKVVjEf8wUW3tgRuaRuyKghN%2BEHuhK8FPxC11myPZMXpSFj4E3m6pKmYFDml6kRIlxdWEux0SoHccUuS%2BiK6oHvutePKnoR4VHLCDgR7a85ZNW0IHY3Ag3Ds8Oti5yxhRfmON7Go93HzQmiBo9Teaz2l3BXQffBwBrbE959bU9gRDV3r%2Fu1uDwZ7zoyfn5Lyysx3sCsIakLETngfNRqbTDIukyZCelslfxh13GiJHAq00u%2FUjXKAikFS7TnPPwUJjZOUwpDNi5OYU%2FLDxVzbiLaWEuDrduUjYoMElTDfv20QN3S9rms8T5nAG95hXSuEWLkYkZKwaaI10xRbu76aHdmgkSjEGI%2F4KIROXkdK15Cu1uppoHgMEii3ArrgNY%2Ff8EUodxYz8QQdPDh2iL%2FSPWlAd7H8QdZbNJj0NH5UZoFOXaoaavVtOgh0cZEchC4pTss9Nq2fw%2BOn%2Fbyz4c6WjQUyKA3mHF4OybWqyFCUp9tbKgX5CdcIX%2Fu84MylwYptHX0aFjNpMHid27bzt8ZA33s4mLY4WvGWlqlJumpJztw%2F5qkSSmAtH2zDg7dnJBjqkAfBkMCUFalDG3kzg5Y3IF%2BqSI2%2F8leiwhyXXL%2FPasS2DdjHLDNlM%2BpU12gd0ncqy037diHAerh3bj5Mhv2j0X1CWZyR3ygzgYFSy4eLPDzy3Xw3ddxlXg1bnRhyZ2oPUOvTSOt4UMuvYEZCOGJ7aub%2B32R3zAL82NU6hXBN7GYcSU8HbWqK4ZKNeruQq5i9Kl7yHN44EYPT6Iy8PsoHFa10EJTig&X-Amz-Signature=d01f61e39f5f0f44ef9cfc877651c0aa7148026244f460c66e4bf1dcbfe6f138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKR3IKC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsNnt9I75GfCxuk7PIP1tJWGh7s2JSh%2FeWjOh8rXLfagIhAJsnVLWgX9Q6GxRGOFg9eikc%2Bphzs1dyX81FZT5I9nGQKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt602A8iH0CJ7HvU8q3APx8gFRk%2F18p8G3q4rt3J2Jj6nurpisOBCWoCTVqgSSbD1EHY2x9npigSrKoBovJ13iqXUCKVVjEf8wUW3tgRuaRuyKghN%2BEHuhK8FPxC11myPZMXpSFj4E3m6pKmYFDml6kRIlxdWEux0SoHccUuS%2BiK6oHvutePKnoR4VHLCDgR7a85ZNW0IHY3Ag3Ds8Oti5yxhRfmON7Go93HzQmiBo9Teaz2l3BXQffBwBrbE959bU9gRDV3r%2Fu1uDwZ7zoyfn5Lyysx3sCsIakLETngfNRqbTDIukyZCelslfxh13GiJHAq00u%2FUjXKAikFS7TnPPwUJjZOUwpDNi5OYU%2FLDxVzbiLaWEuDrduUjYoMElTDfv20QN3S9rms8T5nAG95hXSuEWLkYkZKwaaI10xRbu76aHdmgkSjEGI%2F4KIROXkdK15Cu1uppoHgMEii3ArrgNY%2Ff8EUodxYz8QQdPDh2iL%2FSPWlAd7H8QdZbNJj0NH5UZoFOXaoaavVtOgh0cZEchC4pTss9Nq2fw%2BOn%2Fbyz4c6WjQUyKA3mHF4OybWqyFCUp9tbKgX5CdcIX%2Fu84MylwYptHX0aFjNpMHid27bzt8ZA33s4mLY4WvGWlqlJumpJztw%2F5qkSSmAtH2zDg7dnJBjqkAfBkMCUFalDG3kzg5Y3IF%2BqSI2%2F8leiwhyXXL%2FPasS2DdjHLDNlM%2BpU12gd0ncqy037diHAerh3bj5Mhv2j0X1CWZyR3ygzgYFSy4eLPDzy3Xw3ddxlXg1bnRhyZ2oPUOvTSOt4UMuvYEZCOGJ7aub%2B32R3zAL82NU6hXBN7GYcSU8HbWqK4ZKNeruQq5i9Kl7yHN44EYPT6Iy8PsoHFa10EJTig&X-Amz-Signature=8045d30174094a274b8597ec90ee41059acb41fe7f1c17190797c82f7b741bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

