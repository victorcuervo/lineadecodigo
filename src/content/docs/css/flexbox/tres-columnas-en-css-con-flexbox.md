---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XOZILNQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq6EatUvcjDliIni6bEG8C4SZFkG9u8uTMZERuIAgvpwIhAJGP184oODjqHqA6aMiy8swJcPTnLnk5ZpopG1kF7Fw6Kv8DCGEQABoMNjM3NDIzMTgzODA1IgxXbfy2T1iMgGIXr7Yq3AMrYhetASY%2Fews9R7WGKkzLvN6zjrrjlKUwUHz2HsKjihTki7p15L5M9I25U6GXS%2Fdoeeuv6eElACVZdIrRsY0vBXSaD6C9wTHDbHBGh30Sb8uxmKu%2FSKALuDFP3HgyR2aUKNsuzTtANY%2FJ6KHR%2BClIVID%2BFj3fbNc5mL5X4UTp9LzoT1AjBvc1OifN7HIdhtxqnqy4SO4FNnIzGCdQD5DtCASG4t%2FlOlsFAZjw7be0rK%2BHLrp3gb3BR5aM3d63D4sVzECOvUsZbkkWyXFazgTCIqi7H0NyscqEr3IGFzYR0r9%2FZWPEmGOLpSNL5Amnf%2B8v1nGClv7lzPjyYgh4qRKel0IeVaKmQfMkzNzKjlhf9iiC0p3sVPnGvhSvDB20Sshlbte1%2Fgh0aKsyBHNBcQ6Fz%2BjLiTm69lwR7NvIkBcmemqDxekFfEy6r%2BkdkrxM2k6%2FELOW%2FrdMRcohZ0fO4dkLOP0w5aqlLT2kBUbNEavfgoOg23dgnaS495Gl8746sdA7MU%2BjWmQk1uk2%2F68F2QFs5AGHDzHhSGvaT57Z6cCAh0faSo2hN50jO%2B96Z3u%2Bg6hss9083QfxKv9VoXJTvsA4FdMRXsKmDoU2wrPhQ3eA6cwXDYqtso1VuHFYujCt9svJBjqkAbFO62t8V0P9apPouwp%2BkDVc%2FnE2c4NqEOlrakHq8Ct38Pi8BU%2F1pzPBaDOqxHbPyxdz0XtcsgktyJsu1pjQn%2F1b5RxnYumcV9KZVLtppuIn2yLcla7EaRMFwRnkmfCOCpTRtTtpr9aWYdLYzsqJCCIMM4b%2FM3ymzc3o45fHyktSDp%2Bjcp7FFIouTpDrallwYOhZFmUke%2FPmDwYZoJBk0%2B%2F86KXY&X-Amz-Signature=899102c4d8c0e4fdbdd3904af3f39d41fe6df09da374e573be6b7374b9d0dd78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XOZILNQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq6EatUvcjDliIni6bEG8C4SZFkG9u8uTMZERuIAgvpwIhAJGP184oODjqHqA6aMiy8swJcPTnLnk5ZpopG1kF7Fw6Kv8DCGEQABoMNjM3NDIzMTgzODA1IgxXbfy2T1iMgGIXr7Yq3AMrYhetASY%2Fews9R7WGKkzLvN6zjrrjlKUwUHz2HsKjihTki7p15L5M9I25U6GXS%2Fdoeeuv6eElACVZdIrRsY0vBXSaD6C9wTHDbHBGh30Sb8uxmKu%2FSKALuDFP3HgyR2aUKNsuzTtANY%2FJ6KHR%2BClIVID%2BFj3fbNc5mL5X4UTp9LzoT1AjBvc1OifN7HIdhtxqnqy4SO4FNnIzGCdQD5DtCASG4t%2FlOlsFAZjw7be0rK%2BHLrp3gb3BR5aM3d63D4sVzECOvUsZbkkWyXFazgTCIqi7H0NyscqEr3IGFzYR0r9%2FZWPEmGOLpSNL5Amnf%2B8v1nGClv7lzPjyYgh4qRKel0IeVaKmQfMkzNzKjlhf9iiC0p3sVPnGvhSvDB20Sshlbte1%2Fgh0aKsyBHNBcQ6Fz%2BjLiTm69lwR7NvIkBcmemqDxekFfEy6r%2BkdkrxM2k6%2FELOW%2FrdMRcohZ0fO4dkLOP0w5aqlLT2kBUbNEavfgoOg23dgnaS495Gl8746sdA7MU%2BjWmQk1uk2%2F68F2QFs5AGHDzHhSGvaT57Z6cCAh0faSo2hN50jO%2B96Z3u%2Bg6hss9083QfxKv9VoXJTvsA4FdMRXsKmDoU2wrPhQ3eA6cwXDYqtso1VuHFYujCt9svJBjqkAbFO62t8V0P9apPouwp%2BkDVc%2FnE2c4NqEOlrakHq8Ct38Pi8BU%2F1pzPBaDOqxHbPyxdz0XtcsgktyJsu1pjQn%2F1b5RxnYumcV9KZVLtppuIn2yLcla7EaRMFwRnkmfCOCpTRtTtpr9aWYdLYzsqJCCIMM4b%2FM3ymzc3o45fHyktSDp%2Bjcp7FFIouTpDrallwYOhZFmUke%2FPmDwYZoJBk0%2B%2F86KXY&X-Amz-Signature=3afea9ca714271dd48481c90a19841a9125f62c53aa241790f96c0e2da484874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

