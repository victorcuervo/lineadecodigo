---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CS7KUO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFDohRbinW4V5CpPYeEdtGLjnusg%2BRT7U5L9I6xF%2BVYgAiEA31bIFuLLVT17YkRdarsa%2BUVq4zDBRoLDIRTschpBLoQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDPR5clKUWXFI%2Bit58yrcA%2BaCAd1E4QaM7khuXPQ3zWFkHRAxWnGkoGnJ3GwV83XQihxsEDhwadZlBUtOGwJCKAdRE43lVjNatTAeZjFebJeA%2BDVxkK6%2BIpARXLvUFUhySsLLHghDoSUjW%2FwjjD72Ffl%2FPGPmFzO9LJ3hQvSRz1nzAaQlmaJpbYeFtw%2Fvm36ie3DOX%2B480Mvo%2FnSn5ZEjzS0f%2F4H1W89zPRcOshwBP8rQAyBbMteWvwNJlG8ZCd%2FdekgMuIYylGkEkmQJ5g2oYpugo0Ld703UcrRjH2K49goHlaLLqSGN66n5QdXZyiNA%2FXcOiQVr94VyWevnXfryIB85KMuJRArIWofE8ia%2FkHf0cm%2FITTNQCmrhB6bnb7leDARveOic488ZIFgJ0EuOYIJWg0ZVv3KWb0HV9otObHtBhfvszK0BnYA7EbmQo2PIW2bphQBtMI5S%2FL9mIx77QAuuRe3Dp8b0JT5bkmV2Zw5rqQ6zAlQm1fPOc0iDlkuHxZEZHQb3pP%2FDH6QlYpsiGCXGP9dojN3wRIiFyFwRsHBuef1zsTqILyFcBlH1BAKYFtINXsqxZlc9%2B7qDeq%2BVgyEVNZn5aKiirG5mn0HGyD%2FDMLyXcqI7olX0wmhbfCeEiuPpdD7oWja7hRlRMNqgxskGOqUBwrF8vDy9fYU8XgY%2BvewDVvqpFgnynf81jmqMRlX7qdNw%2BDc5lLD5AvzMOsADYtjp3IYGS%2BndR5CIxSQ4nGmKXA5FVA2WXIydslKcF3kGJ3Fgv3CP5qdmFzpFXHpC4vMV9lyvpI7gpPnODiLpaMk1dIr6laRtMvFpy%2BOVczxWqt5qpeV8iMzCour7BMtwlhbmcOUb6rVIQSkXwyJZ%2B1lHrV0%2Fl5De&X-Amz-Signature=19e30c21dd8cf64db82c8e2a566966979d5a4a3dbf091f294220da41bdc7e9db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CS7KUO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFDohRbinW4V5CpPYeEdtGLjnusg%2BRT7U5L9I6xF%2BVYgAiEA31bIFuLLVT17YkRdarsa%2BUVq4zDBRoLDIRTschpBLoQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDPR5clKUWXFI%2Bit58yrcA%2BaCAd1E4QaM7khuXPQ3zWFkHRAxWnGkoGnJ3GwV83XQihxsEDhwadZlBUtOGwJCKAdRE43lVjNatTAeZjFebJeA%2BDVxkK6%2BIpARXLvUFUhySsLLHghDoSUjW%2FwjjD72Ffl%2FPGPmFzO9LJ3hQvSRz1nzAaQlmaJpbYeFtw%2Fvm36ie3DOX%2B480Mvo%2FnSn5ZEjzS0f%2F4H1W89zPRcOshwBP8rQAyBbMteWvwNJlG8ZCd%2FdekgMuIYylGkEkmQJ5g2oYpugo0Ld703UcrRjH2K49goHlaLLqSGN66n5QdXZyiNA%2FXcOiQVr94VyWevnXfryIB85KMuJRArIWofE8ia%2FkHf0cm%2FITTNQCmrhB6bnb7leDARveOic488ZIFgJ0EuOYIJWg0ZVv3KWb0HV9otObHtBhfvszK0BnYA7EbmQo2PIW2bphQBtMI5S%2FL9mIx77QAuuRe3Dp8b0JT5bkmV2Zw5rqQ6zAlQm1fPOc0iDlkuHxZEZHQb3pP%2FDH6QlYpsiGCXGP9dojN3wRIiFyFwRsHBuef1zsTqILyFcBlH1BAKYFtINXsqxZlc9%2B7qDeq%2BVgyEVNZn5aKiirG5mn0HGyD%2FDMLyXcqI7olX0wmhbfCeEiuPpdD7oWja7hRlRMNqgxskGOqUBwrF8vDy9fYU8XgY%2BvewDVvqpFgnynf81jmqMRlX7qdNw%2BDc5lLD5AvzMOsADYtjp3IYGS%2BndR5CIxSQ4nGmKXA5FVA2WXIydslKcF3kGJ3Fgv3CP5qdmFzpFXHpC4vMV9lyvpI7gpPnODiLpaMk1dIr6laRtMvFpy%2BOVczxWqt5qpeV8iMzCour7BMtwlhbmcOUb6rVIQSkXwyJZ%2B1lHrV0%2Fl5De&X-Amz-Signature=3d65fae5b6e8dab05431a3a2f19707fafaeb23c6824a2ebb2f70ffba2a14a78f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

