---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOX6XCM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX%2BKxhP%2BIDc4c0swD56fE38ptwGVsVIwvRRTbk%2FslIIQIgEskI7g%2BX4Cx2ERRtspYFJZToWAhMWJiPaWn%2F%2FdCc9gwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGM66%2Bi6eiig4qTfGircA98fzTMZWhf48PSyW5EXmCr4dLIsYiYFw2pcfGtHh8Tpbg%2BP4%2FYkd2%2FcX3T7gYHfPc05IN6Zmlzf7VdgtcPEa78JfZy7dyttk6rtuKwPgaHxZQ7P%2FvviWbawx%2FqgS9X%2Fl3y%2FoCFEW9VpJkdERE17c129fzS3JI0ZOt8EumghQclQgm%2B2W6Ij3vA%2FqVdqbioPYJB%2F9fiFpHjmUB6dSPAxqmLEhujdgRVGeEN1gqkC9x5z6z7d6eC21R4SNvvONVKuktUliXnOxXRoOaX9Dht56u92qg6GwbhUmfl9BptKz5i7Z5FXkNvHhHLIwBmYT3nTvF7IywdnirL3QkU0wJF9RgZuE7OTDRVoMPdM6H6xnGQCq%2Bpn5Goj%2B8pz5W3EJoVog2ytanCnKz9hEjH%2FZgCC%2FcW8%2F8ec%2FBKOibW5b0g9TTq6sM6m72KPiGevO%2FT6m7M5MzW3bq3OAZsBSvI2qoWsdFAPmZ2i3KUSQP%2B5K%2F55aoILhYrqxDEy9cPgoLA7CIqRV7Y0VDkdrLi%2B5PVdM%2BnmN5%2BJ%2F34TJSBQOqh3CD%2B3zctFWLEMADKLNxjCcUYjtWaIKcA9cQoMIwUox31CnA6obZZFjMuBNsVhEdvXPoAtz3LOgn8FAd8COEt9T16eMLGxyckGOqUBTtV8NFGnzDRfR6bNBOazQ4vyOG4yzyBBWNQ372qfYjY3VmKJSlBX%2BrZS8DVe3StCI%2Fo2RdKMR6CK7UmpsUOFahXwmsTrGkIXUUwOP6I%2FP5VlRAwTQzm0U7b9lu023n9v3wdQIWHiUFYvEUiaFQadHJTkwNsD8uQO1mi7MLw%2FHaqdZFr1I3%2FfL8jjNbSA6TKBfcNORufqwpoNr5gCjUlE3EKZ1TcY&X-Amz-Signature=c87e780ec57590e4c46c018e07bfa8b90b84345a5d12692706f48ab485320987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOX6XCM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX%2BKxhP%2BIDc4c0swD56fE38ptwGVsVIwvRRTbk%2FslIIQIgEskI7g%2BX4Cx2ERRtspYFJZToWAhMWJiPaWn%2F%2FdCc9gwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGM66%2Bi6eiig4qTfGircA98fzTMZWhf48PSyW5EXmCr4dLIsYiYFw2pcfGtHh8Tpbg%2BP4%2FYkd2%2FcX3T7gYHfPc05IN6Zmlzf7VdgtcPEa78JfZy7dyttk6rtuKwPgaHxZQ7P%2FvviWbawx%2FqgS9X%2Fl3y%2FoCFEW9VpJkdERE17c129fzS3JI0ZOt8EumghQclQgm%2B2W6Ij3vA%2FqVdqbioPYJB%2F9fiFpHjmUB6dSPAxqmLEhujdgRVGeEN1gqkC9x5z6z7d6eC21R4SNvvONVKuktUliXnOxXRoOaX9Dht56u92qg6GwbhUmfl9BptKz5i7Z5FXkNvHhHLIwBmYT3nTvF7IywdnirL3QkU0wJF9RgZuE7OTDRVoMPdM6H6xnGQCq%2Bpn5Goj%2B8pz5W3EJoVog2ytanCnKz9hEjH%2FZgCC%2FcW8%2F8ec%2FBKOibW5b0g9TTq6sM6m72KPiGevO%2FT6m7M5MzW3bq3OAZsBSvI2qoWsdFAPmZ2i3KUSQP%2B5K%2F55aoILhYrqxDEy9cPgoLA7CIqRV7Y0VDkdrLi%2B5PVdM%2BnmN5%2BJ%2F34TJSBQOqh3CD%2B3zctFWLEMADKLNxjCcUYjtWaIKcA9cQoMIwUox31CnA6obZZFjMuBNsVhEdvXPoAtz3LOgn8FAd8COEt9T16eMLGxyckGOqUBTtV8NFGnzDRfR6bNBOazQ4vyOG4yzyBBWNQ372qfYjY3VmKJSlBX%2BrZS8DVe3StCI%2Fo2RdKMR6CK7UmpsUOFahXwmsTrGkIXUUwOP6I%2FP5VlRAwTQzm0U7b9lu023n9v3wdQIWHiUFYvEUiaFQadHJTkwNsD8uQO1mi7MLw%2FHaqdZFr1I3%2FfL8jjNbSA6TKBfcNORufqwpoNr5gCjUlE3EKZ1TcY&X-Amz-Signature=59c083dd80b58cb89125a4fa829ae72a722f3d8393348be8dbca1a613437005c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

