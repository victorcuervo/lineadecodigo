---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LUGASJC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKD5fAt%2BP85CmtBZfABVGsye2z%2F%2FpkA1SMjpWE7K4OnAIgImqbDHwCdouo7nrCGbBW7XFZlq2f2AVSsMZQC0V2u60q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCEftCxUT5%2FcpZQpjircA4CWvSAfC3Cz9kOSDgciPQ1gAUxwvF6Ly4SaISmM7%2BPVfi1C%2B2tsnaubSboxnFgKVeIpmrx9jffOINVe2azIVPqdcZb6TUM0yDNLnqLiLbSE%2F4OXRlbh%2FMHDzQxMloKxmhuINg4nyFz94RJd8utrl4avk7GQukcbdWZvlKCEnkHc54%2Fig2w%2FBIseEIPXBMNk9VeARBPqHhFM5NizCTT2Yk77vmFddgvNFMhUng58C3p%2BCHc1H9z1Ebgqp58EjnUFfZKZsZ6oOOE7QTUvmq%2BSGlpH86KGUEsa3M2FYHPKBubSHgiBurX%2FAfIUg8NTugQkygGjvLj%2BeHzxodaSfnQ1%2FUnd1tbbvRpt0wjkasw%2FuFBRTLZTzDz%2BgoN0%2BS%2BANj%2BnLI33JH6nitXliKZCE%2F3qIuYYFLyncZd4YaAdunpSiJkqN6cypCkx1RGBV848tWDzp34AV8ByuvP9900JAcyXkGhd34Wa3klWlBYqpZWqm5Oa%2Bdx6I%2BldcnYcPrqdtPPMFPmt2L7l%2BAUKkNyjK2vN1xdx%2F6RJndQftzWOMiSQNjVEx%2BPiOFLEZuj3lVKdHWwDaG2Ic31ct%2BeU8R4YHnLnBKiHp6%2BwvU3GKqWqXlkZF7S%2FasOYO%2B%2Fj1vlDNJGHMNeMyMkGOqUByVSsXvGZhC8Fej%2BB9Xlv7retl2HxJCGsAPQh%2FI8cBHdSh4GtztliWOSMzYxLu9IkwwbLmqfFR54pZlTyKrFdiE9GfV8QdVgmLdLqG9CmtDIhWXIffniqykaT2aUnSN7rmGqxFF9wrMr6GHaRJB1qpiNNnRdWBeY1P6x3WakrLYGGzEB%2FV7iXPcjl%2Fd8C9EmGdTxjZGksknULxObtu0MhkT9KTpIq&X-Amz-Signature=fdb58d92bfea1a014d0d8ab49069b2117d15205f24bdeda20a230a6e1cf1cdc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LUGASJC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKD5fAt%2BP85CmtBZfABVGsye2z%2F%2FpkA1SMjpWE7K4OnAIgImqbDHwCdouo7nrCGbBW7XFZlq2f2AVSsMZQC0V2u60q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCEftCxUT5%2FcpZQpjircA4CWvSAfC3Cz9kOSDgciPQ1gAUxwvF6Ly4SaISmM7%2BPVfi1C%2B2tsnaubSboxnFgKVeIpmrx9jffOINVe2azIVPqdcZb6TUM0yDNLnqLiLbSE%2F4OXRlbh%2FMHDzQxMloKxmhuINg4nyFz94RJd8utrl4avk7GQukcbdWZvlKCEnkHc54%2Fig2w%2FBIseEIPXBMNk9VeARBPqHhFM5NizCTT2Yk77vmFddgvNFMhUng58C3p%2BCHc1H9z1Ebgqp58EjnUFfZKZsZ6oOOE7QTUvmq%2BSGlpH86KGUEsa3M2FYHPKBubSHgiBurX%2FAfIUg8NTugQkygGjvLj%2BeHzxodaSfnQ1%2FUnd1tbbvRpt0wjkasw%2FuFBRTLZTzDz%2BgoN0%2BS%2BANj%2BnLI33JH6nitXliKZCE%2F3qIuYYFLyncZd4YaAdunpSiJkqN6cypCkx1RGBV848tWDzp34AV8ByuvP9900JAcyXkGhd34Wa3klWlBYqpZWqm5Oa%2Bdx6I%2BldcnYcPrqdtPPMFPmt2L7l%2BAUKkNyjK2vN1xdx%2F6RJndQftzWOMiSQNjVEx%2BPiOFLEZuj3lVKdHWwDaG2Ic31ct%2BeU8R4YHnLnBKiHp6%2BwvU3GKqWqXlkZF7S%2FasOYO%2B%2Fj1vlDNJGHMNeMyMkGOqUByVSsXvGZhC8Fej%2BB9Xlv7retl2HxJCGsAPQh%2FI8cBHdSh4GtztliWOSMzYxLu9IkwwbLmqfFR54pZlTyKrFdiE9GfV8QdVgmLdLqG9CmtDIhWXIffniqykaT2aUnSN7rmGqxFF9wrMr6GHaRJB1qpiNNnRdWBeY1P6x3WakrLYGGzEB%2FV7iXPcjl%2Fd8C9EmGdTxjZGksknULxObtu0MhkT9KTpIq&X-Amz-Signature=18621d7627d4e6cc80d557deb21e73651113d49425a2c51af27941625c5cd77a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

