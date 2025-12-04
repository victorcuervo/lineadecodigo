---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKT57AW3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBDdKjXwx1mokQjyBDSGtLsQiPv3X50FmzVl6ULbJ2UlAiA61YMHCFytyfiobX2Z0C7aCGcKIqz6TnMqf3tSPh1xPir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMR3MZVK011rZMbSLvKtwD8SQVTuGNatDpKN6BrA20oKbaD2P8GIzazf09S3BGW2%2BXh%2FepTVv4d4hYNPSz8qrdCeOU%2BP0Li65YVk%2F7dURq%2F8LNbYIAw9EEuaIocPsILYUoKNoqXU2%2Fd9%2FdDOX0lEVi7%2BiYeSJfGem%2BKQYmJ%2FWsHRrPXxKv9QNn%2Bc0c8bhFJJRHtvoSTvavTNaluHWdWp7WfpWV2upeyGwCCBack9q8GbM3k9bGzOd9Ey6Xj7ReYiRtEZagbw43LTeO0hFiUIL9rGHCXAyhOzH%2B2s%2Fiukk40gNeWncZbRJczUr9VnyLwvm%2Bm9VW%2FvrrRrGFKbrAyLk00yMEnb3dQNMjhCxQsXHrSIMVW5G4xYsbe9%2F1Wghb5nFWAphdJQyJOfObcuo83Li9fAOAAUmoYZkMVEY%2FahltaHWYjlQ9%2B2KLnUD2MKeqCBuf9jFEKi%2Fv%2BlDVDzTVENeX%2BauoZOx4qWmTtRvsNUcLqoYE9LAWLvbUEttKCrbbQdtvyfksHEM8n3CCXJjKtALsdGTB2k6KCQa%2Fv1yRG%2Fqs3NT2f3Cs0xghf6KIYRDJ7NzehXML7mlS14c3QGkQ4%2B8iR3v%2BM31CepFQM5%2BIY3Xh7vEr196zYt%2BnAD5R02YZ9fLjeqqQ9paqvLMZa80w2ObFyQY6pgEmG2Fz8l2pfAOPkNA%2BfLno0qNY86J5aGhiWUNeSBC7OvPnTaFycD7wEFSp%2FiWE4a%2BugMbDWaIbXzOnLuRr7ZypXV%2FZd%2B2cOPv2sK1WqugchPrCtyubqCjmarBoQEuE7ChxOa8jCqCjjDg2FEwKt4CTJhrqwZdu6yv%2Bk5Z3GFV4%2Bkxs%2B%2BlfRobEizZoluM1EhbwfG1YxkWTv7tj7kyXpCBdtPjcjByN&X-Amz-Signature=068058d490159839328e0fb5c4523d722aa913069da5f4f5aefe0550d626f20d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKT57AW3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBDdKjXwx1mokQjyBDSGtLsQiPv3X50FmzVl6ULbJ2UlAiA61YMHCFytyfiobX2Z0C7aCGcKIqz6TnMqf3tSPh1xPir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMR3MZVK011rZMbSLvKtwD8SQVTuGNatDpKN6BrA20oKbaD2P8GIzazf09S3BGW2%2BXh%2FepTVv4d4hYNPSz8qrdCeOU%2BP0Li65YVk%2F7dURq%2F8LNbYIAw9EEuaIocPsILYUoKNoqXU2%2Fd9%2FdDOX0lEVi7%2BiYeSJfGem%2BKQYmJ%2FWsHRrPXxKv9QNn%2Bc0c8bhFJJRHtvoSTvavTNaluHWdWp7WfpWV2upeyGwCCBack9q8GbM3k9bGzOd9Ey6Xj7ReYiRtEZagbw43LTeO0hFiUIL9rGHCXAyhOzH%2B2s%2Fiukk40gNeWncZbRJczUr9VnyLwvm%2Bm9VW%2FvrrRrGFKbrAyLk00yMEnb3dQNMjhCxQsXHrSIMVW5G4xYsbe9%2F1Wghb5nFWAphdJQyJOfObcuo83Li9fAOAAUmoYZkMVEY%2FahltaHWYjlQ9%2B2KLnUD2MKeqCBuf9jFEKi%2Fv%2BlDVDzTVENeX%2BauoZOx4qWmTtRvsNUcLqoYE9LAWLvbUEttKCrbbQdtvyfksHEM8n3CCXJjKtALsdGTB2k6KCQa%2Fv1yRG%2Fqs3NT2f3Cs0xghf6KIYRDJ7NzehXML7mlS14c3QGkQ4%2B8iR3v%2BM31CepFQM5%2BIY3Xh7vEr196zYt%2BnAD5R02YZ9fLjeqqQ9paqvLMZa80w2ObFyQY6pgEmG2Fz8l2pfAOPkNA%2BfLno0qNY86J5aGhiWUNeSBC7OvPnTaFycD7wEFSp%2FiWE4a%2BugMbDWaIbXzOnLuRr7ZypXV%2FZd%2B2cOPv2sK1WqugchPrCtyubqCjmarBoQEuE7ChxOa8jCqCjjDg2FEwKt4CTJhrqwZdu6yv%2Bk5Z3GFV4%2Bkxs%2B%2BlfRobEizZoluM1EhbwfG1YxkWTv7tj7kyXpCBdtPjcjByN&X-Amz-Signature=2ac9973bfd13f2c9e9f4db80c051b78603b78e3a1f33b3ae3dcf943a727eab67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

