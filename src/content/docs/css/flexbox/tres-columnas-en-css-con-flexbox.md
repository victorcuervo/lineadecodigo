---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTXEERS6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDk1GBYtuk9g%2BJQd0WPcjft2rAeqs4sD6zaz0s0y64wHAiB6dpezmepNte%2FAbl33YonNCoHjd48bHcI5MNXushFzMSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMbGnn1n5MG9fCHIG4KtwDXYnP%2FxqraLnfJNZnqBVRnmZczkRYgo%2ByYcwvRhz%2FPcjdms%2BeYK0xTmOs8D%2BYyVmg6AMIDvw%2FBSSNRADkZUtvGNsrvHayAi2oLwSCRAzJl5vMy2G7B65PCACxj02SQDjUQKayXNr3XdJuvQmUhGyyGJm1BfGD6kyOyskzQq%2Fs7e3I6j7jk46dEnzn4NcVyhFJaMuQdZG2RIVfZGOAmuyjvtlrMk21cn1y5B8hMeJ%2FmwQ8Tx%2BIck12fuOdDry8d7tz17Fh0VOlLFxJh2uEYA6muJd8H2KpmKIKIYmCPvGscvXMWDl0EibBmfmWFY5WJA5AXdEQ%2B%2FLPAmjs1oM8UO06syl6oiyxOIXgU%2FJtr7lRahNOAbUNdD2dZv8GISXNwA0ZqtRU8WnueOOR4fptsBZ51gCET6EphQ7SYI3oEkzIgyh3%2BbWIF7wFjVaVJ9AXhs41YVlXUDvGl7HqEUcKNj63ePtXabTlrCyKQXkzSNffs8vyo1ieai%2BKVUP2ortiZtMOiSex5iNOeuJo1C0vGW5KOVECIGu4nlYQS8EGrIpnmCvs3KlSS0Bfye0fXsjV16Y8Z3pyV8j7GbbqZ%2BGUWvnPspQGc%2BSdLERE5uwkF4Yk2N62o2fFPGfNsxa9AZYw%2FZTDyQY6pgFcYzyQGuZtjhtSUDqNSQILPNjC2yf0VFWn%2F4ZU0czS8NxRRrGMWrqfh8N4zgRzNTvyTWO4kcj4w3qTiDioQ39aChSMd3mK3ONBrBo5J3FqyJwkIhSRTxEesk77GPYnR2nE7Guz1rxyvlKsxhLR8VxYLfSVtbcTgBQxyFixLtADxyHbmvlHcXLX3TbUMeyE4oHZSapJyclso6KNqfvPo1ghBtnriwv4&X-Amz-Signature=7240ae1e3ab3734cd5845c6d5536eccf65b5a13476aacb4fa661b1a64025ec13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTXEERS6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDk1GBYtuk9g%2BJQd0WPcjft2rAeqs4sD6zaz0s0y64wHAiB6dpezmepNte%2FAbl33YonNCoHjd48bHcI5MNXushFzMSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMbGnn1n5MG9fCHIG4KtwDXYnP%2FxqraLnfJNZnqBVRnmZczkRYgo%2ByYcwvRhz%2FPcjdms%2BeYK0xTmOs8D%2BYyVmg6AMIDvw%2FBSSNRADkZUtvGNsrvHayAi2oLwSCRAzJl5vMy2G7B65PCACxj02SQDjUQKayXNr3XdJuvQmUhGyyGJm1BfGD6kyOyskzQq%2Fs7e3I6j7jk46dEnzn4NcVyhFJaMuQdZG2RIVfZGOAmuyjvtlrMk21cn1y5B8hMeJ%2FmwQ8Tx%2BIck12fuOdDry8d7tz17Fh0VOlLFxJh2uEYA6muJd8H2KpmKIKIYmCPvGscvXMWDl0EibBmfmWFY5WJA5AXdEQ%2B%2FLPAmjs1oM8UO06syl6oiyxOIXgU%2FJtr7lRahNOAbUNdD2dZv8GISXNwA0ZqtRU8WnueOOR4fptsBZ51gCET6EphQ7SYI3oEkzIgyh3%2BbWIF7wFjVaVJ9AXhs41YVlXUDvGl7HqEUcKNj63ePtXabTlrCyKQXkzSNffs8vyo1ieai%2BKVUP2ortiZtMOiSex5iNOeuJo1C0vGW5KOVECIGu4nlYQS8EGrIpnmCvs3KlSS0Bfye0fXsjV16Y8Z3pyV8j7GbbqZ%2BGUWvnPspQGc%2BSdLERE5uwkF4Yk2N62o2fFPGfNsxa9AZYw%2FZTDyQY6pgFcYzyQGuZtjhtSUDqNSQILPNjC2yf0VFWn%2F4ZU0czS8NxRRrGMWrqfh8N4zgRzNTvyTWO4kcj4w3qTiDioQ39aChSMd3mK3ONBrBo5J3FqyJwkIhSRTxEesk77GPYnR2nE7Guz1rxyvlKsxhLR8VxYLfSVtbcTgBQxyFixLtADxyHbmvlHcXLX3TbUMeyE4oHZSapJyclso6KNqfvPo1ghBtnriwv4&X-Amz-Signature=ab0cc284a09af3251b033311c2a738c692f578d36ee5fd9fae63893560ac780a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

