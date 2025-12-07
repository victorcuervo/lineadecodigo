---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMFSOYGJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqFCBcvXADEAoQ46IapAWiXBixd7v5WTovBNLldt%2FikAiAXLwqwaXZnDZQO9jsfO%2BlcbDBNqJedKxJ7%2BRdBzKScAyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyFFtYB8MzSdbMUXKKtwD1iJWAMuJ1z2%2BctYyndWIp3ms3eW5tFd8R7Y4E32Sz7VdsUYwwXdoWfyOa6GI6lMcsl6ycSGXo191x8J%2BOFtJad6XEoLbe9hK6wjG1bujsSLj3LZKipQGgd%2BS1xAqtR0ds9r2OQypSDvSvbACfVoKhfGVKCg2sEhtxsZ8a%2BMcE3%2Fg3%2FkuzvWJGHPmJ%2BgDO4CbHS8CfXIVOZC%2FDYeR4Iu%2Fun77G6rrLwcDILGxtoHGffPwJLHrougrv9%2BqIOSdPkubNhCw2NRQ6xG9SvK%2FT7fuPx5JdqlTdXw%2FJJDASiCf6rvdC0ioIftHANAZEiPFOG1PLdanudeqzAx7IS%2BuiFfINwaoorTu79N9Ql9ziwQix9fnamkmGrTUwfyrQXsMIzba9F0eWfLJwxXEl21vBWuv%2BqAfRGB5lztYcP7vdHqJQDhrqEwZzHGXmBq4BqIFS0LwiSodBiSz1%2B4z5wy0AuDRolHRMirb%2FOJ7t8RtUERzAkq35YbN4pAiJ8DWa9V4JIydX9Ndh0QsGfNSXAs1QuUxH3UCU4Egf8%2BjPWhbDEgROFpFFMNlVB1g4Bs0TQ%2BR7Yi1CKBSHVzhB2OEBF%2FbGVgEnLLyVq%2BtYCSp%2FoAKHT10EpVzLumCanYzlXRypT4w%2B8bXyQY6pgGS%2B%2B9s6BL3ktWpLglKdYnw1nwSNtzAnGZIA1aXAfF9zayeRNh49Gh4Lo7Bc3TErw7JXpE%2BurvHozNzb%2BaGuuu6ydp%2FEInO0cv%2BllfwdfousQdt%2F%2Ba9jUFDFM%2BGO5MShID89G0d73OKNm8wlkqQI%2BO7aGiaRvc6%2B2K88dUQBZW5h%2Fu%2FveIoEEmkbU9hERZbghcI3TvlCYALsB1dny%2F0YctQyL93qVil&X-Amz-Signature=04d326433aff44a6f908c1e0ac8cd0f3dc6128f35c78f7d4bd35bb7e470cbbc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMFSOYGJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqFCBcvXADEAoQ46IapAWiXBixd7v5WTovBNLldt%2FikAiAXLwqwaXZnDZQO9jsfO%2BlcbDBNqJedKxJ7%2BRdBzKScAyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyFFtYB8MzSdbMUXKKtwD1iJWAMuJ1z2%2BctYyndWIp3ms3eW5tFd8R7Y4E32Sz7VdsUYwwXdoWfyOa6GI6lMcsl6ycSGXo191x8J%2BOFtJad6XEoLbe9hK6wjG1bujsSLj3LZKipQGgd%2BS1xAqtR0ds9r2OQypSDvSvbACfVoKhfGVKCg2sEhtxsZ8a%2BMcE3%2Fg3%2FkuzvWJGHPmJ%2BgDO4CbHS8CfXIVOZC%2FDYeR4Iu%2Fun77G6rrLwcDILGxtoHGffPwJLHrougrv9%2BqIOSdPkubNhCw2NRQ6xG9SvK%2FT7fuPx5JdqlTdXw%2FJJDASiCf6rvdC0ioIftHANAZEiPFOG1PLdanudeqzAx7IS%2BuiFfINwaoorTu79N9Ql9ziwQix9fnamkmGrTUwfyrQXsMIzba9F0eWfLJwxXEl21vBWuv%2BqAfRGB5lztYcP7vdHqJQDhrqEwZzHGXmBq4BqIFS0LwiSodBiSz1%2B4z5wy0AuDRolHRMirb%2FOJ7t8RtUERzAkq35YbN4pAiJ8DWa9V4JIydX9Ndh0QsGfNSXAs1QuUxH3UCU4Egf8%2BjPWhbDEgROFpFFMNlVB1g4Bs0TQ%2BR7Yi1CKBSHVzhB2OEBF%2FbGVgEnLLyVq%2BtYCSp%2FoAKHT10EpVzLumCanYzlXRypT4w%2B8bXyQY6pgGS%2B%2B9s6BL3ktWpLglKdYnw1nwSNtzAnGZIA1aXAfF9zayeRNh49Gh4Lo7Bc3TErw7JXpE%2BurvHozNzb%2BaGuuu6ydp%2FEInO0cv%2BllfwdfousQdt%2F%2Ba9jUFDFM%2BGO5MShID89G0d73OKNm8wlkqQI%2BO7aGiaRvc6%2B2K88dUQBZW5h%2Fu%2FveIoEEmkbU9hERZbghcI3TvlCYALsB1dny%2F0YctQyL93qVil&X-Amz-Signature=707a4b72f35923b856061c3b1bd3bbec3c1e61b816353c08c58d6a4ea1ada740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

