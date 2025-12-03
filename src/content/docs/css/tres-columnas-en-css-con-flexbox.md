---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSOE6EEB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDiTThnCkcVsoTfL%2Bq4MSixPVVwQ3iPbk0Y57IAz2YLlAiAbuE39Zm40%2BBUXNoUlNPD4ZxnoYGxh7QI3J%2Bvw%2BYbkTCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM8Mu2CfgTui0B1M1PKtwDKti%2FHQs%2FDT2OSpWssHk2J19JI6mXF5JIR8jORhJdFYqFymFvmrI3IUk6g%2FzRF5zN5zRCC21mJu2rbeE3PmNrtNwQwSkkXozT9Z5NAlZC1m36de0bmhdxZoOgkMwAA8ZjHilAEjso4rYJ7Xq9SwxHIcaxy749yklkr9hEUC0jPJ80DYK4yqHnT4kTtBzI%2B1%2FwFU7eu9uN8Fcu9gJysUaa8fIZvK4G5%2BGNjKWx%2BbZw1x9JR2rCZuFR%2Fuv8RS%2Bef5EEi40jeWKW8aRtGfNxUKqnlLOOsniANIDlwsQCnKFr8A9yvy%2Fd8eJBlNFu33ehwZpzc3nIZdcdY%2BiJXqdBz52V%2BeccD7S6f3h%2BqbyqY5bPoQTdWb88KRvVtAwdDcqPV%2FpDWAIuf7jA9SLx4HyK%2B6kc5qV8Yf9GDMZoQbDRVyB9TthHmqoNzrAI0rdwXsX2bnew8Wo6lIKJZl%2FPX5yASzrMC7%2BIOmtDPrIB0pFUHSG%2B3BRoYj0utO3u2nSSfFeqUEduNHR0D%2BK7vFVMH%2B1ABSzmcDOHIbM2nZu%2BXzndVfwU2rl8mxAhew1uZvKeZtU2xcxYYzTOUCpsxa0HE5jtmxDHk2a%2BOCcpDqS7%2Bc4MUmMxvFueWj25xhpHGOrpSSQww%2FfCyQY6pgGPzFzj41wOSY9Vgl9jqbKyjSbWNDKV3icsY8CwYT%2FN79XXBTk9U0xc%2BOHHJUSBfxprO7jaz4gshVgKk4q8lsO8mIxulYu0I7%2Bap5gwqDkMAB6FMLpEGvi3Idtv6AlC%2BJouqIN3aTsm%2BQMiHPBHKXVeTYSOdeI0SwgGtEBYGJcrykbhXW7h1I6VMrMyonBzr%2FunONF63n40vCjNYkq4%2BbRv8JHz9ENV&X-Amz-Signature=02c56419ac2225ef2da797a4804b45a22a93011518c1dbbf571e46e8f97c511d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSOE6EEB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDiTThnCkcVsoTfL%2Bq4MSixPVVwQ3iPbk0Y57IAz2YLlAiAbuE39Zm40%2BBUXNoUlNPD4ZxnoYGxh7QI3J%2Bvw%2BYbkTCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM8Mu2CfgTui0B1M1PKtwDKti%2FHQs%2FDT2OSpWssHk2J19JI6mXF5JIR8jORhJdFYqFymFvmrI3IUk6g%2FzRF5zN5zRCC21mJu2rbeE3PmNrtNwQwSkkXozT9Z5NAlZC1m36de0bmhdxZoOgkMwAA8ZjHilAEjso4rYJ7Xq9SwxHIcaxy749yklkr9hEUC0jPJ80DYK4yqHnT4kTtBzI%2B1%2FwFU7eu9uN8Fcu9gJysUaa8fIZvK4G5%2BGNjKWx%2BbZw1x9JR2rCZuFR%2Fuv8RS%2Bef5EEi40jeWKW8aRtGfNxUKqnlLOOsniANIDlwsQCnKFr8A9yvy%2Fd8eJBlNFu33ehwZpzc3nIZdcdY%2BiJXqdBz52V%2BeccD7S6f3h%2BqbyqY5bPoQTdWb88KRvVtAwdDcqPV%2FpDWAIuf7jA9SLx4HyK%2B6kc5qV8Yf9GDMZoQbDRVyB9TthHmqoNzrAI0rdwXsX2bnew8Wo6lIKJZl%2FPX5yASzrMC7%2BIOmtDPrIB0pFUHSG%2B3BRoYj0utO3u2nSSfFeqUEduNHR0D%2BK7vFVMH%2B1ABSzmcDOHIbM2nZu%2BXzndVfwU2rl8mxAhew1uZvKeZtU2xcxYYzTOUCpsxa0HE5jtmxDHk2a%2BOCcpDqS7%2Bc4MUmMxvFueWj25xhpHGOrpSSQww%2FfCyQY6pgGPzFzj41wOSY9Vgl9jqbKyjSbWNDKV3icsY8CwYT%2FN79XXBTk9U0xc%2BOHHJUSBfxprO7jaz4gshVgKk4q8lsO8mIxulYu0I7%2Bap5gwqDkMAB6FMLpEGvi3Idtv6AlC%2BJouqIN3aTsm%2BQMiHPBHKXVeTYSOdeI0SwgGtEBYGJcrykbhXW7h1I6VMrMyonBzr%2FunONF63n40vCjNYkq4%2BbRv8JHz9ENV&X-Amz-Signature=03243f99f130e7465b2301c1f3c60608334975bd38422cbb8e1366b374e1c38d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

