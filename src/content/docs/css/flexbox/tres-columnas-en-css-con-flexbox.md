---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7RHZNV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjIEU%2FUtF%2FFBdiHK6h9m3EgeS4yimHIp7kccvcsN0FwwIgMd8iuj72xgK6eTEKpHSsW1QRfLt8DdZF8mESPgT8InQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKG4kSiGlI2ddS9fIyrcA%2B9gg6xiuMGbZKUGCIK27%2FnIV1kh2C%2FOwrIh8M5Tp8S4lwfZTCXE8Te3Qjbdh7vhHdqjSyFAlAyCIaErDllLi3%2BEiVoDqSOiYR1lbCTRIbAd3CabJVCsNj2JvVSgR%2B4YdtVh0nLu0je%2FsGco4ibGxjS5cNGtjVvwTmcVXGwfwHzw5XzgOdWH8If0oeRAEfwfXHvlAl1vJV50nrJECQbocjXlxOjF33QqNJFRWh66%2FZL34YvoKubTeHOG%2FxP1GpSWmfMNlEgeX%2BqIMQuYAb3sQqr79IbRwVCgXgVvOZJIVZClKKh4YGM0187NEjxS86uT1qdC9p7P%2FRvxuUXjGC3p3daTXvZBTT0fBtVP8WdnX2JdSTpz%2FdRWZED%2FEYFuxX1UKRMV0n2PA9GndaZ6tROStv%2FARRAMeQzuMxYkMegf0Ge3cAFkhU9bDGEI3iZEbUjFstcqxrE2kUoJjGXOpqgYOgV3BBcQOHFB%2FLvkyNY%2FPjmZBJAu%2BRpGdqwXjasyb%2FIPErLwiRsGgNQhcat3utgY4w%2BfGKjARiUgXS7BR1grTLg4HBFxQTkxi09%2BWcSd25wFs8gKZpmSjQnbrhXBjXh4jO4fjUEjiWINVa5C%2BOP0l7gnacvZewK%2F7zx9p7pGMLyg1MkGOqUBjDLEdZ379TjB8FGmDD%2BC7ktmHrh%2FL%2Bn3L3vu3ObwR4IK7VIF78xRVez8sEql%2B1GPhUslecPwwM75blNOz0f2Z%2FtKoprf%2BggKw23BVJe65c769zWb96cYBjSl82G5bOiA4lZq0Pk%2BxFSJTcIFjf5blcsIywOMpn%2BrPmB4Sgq6De0zE0WpIfjsjgIC%2Fp1HUeiUuCU2ZsPTX8GkIYwjZy5vXMbaAzsv&X-Amz-Signature=8570191dae1054b3a5adee4e14e296cdb39c7ad767726a19713ce32cf7550e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7RHZNV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjIEU%2FUtF%2FFBdiHK6h9m3EgeS4yimHIp7kccvcsN0FwwIgMd8iuj72xgK6eTEKpHSsW1QRfLt8DdZF8mESPgT8InQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKG4kSiGlI2ddS9fIyrcA%2B9gg6xiuMGbZKUGCIK27%2FnIV1kh2C%2FOwrIh8M5Tp8S4lwfZTCXE8Te3Qjbdh7vhHdqjSyFAlAyCIaErDllLi3%2BEiVoDqSOiYR1lbCTRIbAd3CabJVCsNj2JvVSgR%2B4YdtVh0nLu0je%2FsGco4ibGxjS5cNGtjVvwTmcVXGwfwHzw5XzgOdWH8If0oeRAEfwfXHvlAl1vJV50nrJECQbocjXlxOjF33QqNJFRWh66%2FZL34YvoKubTeHOG%2FxP1GpSWmfMNlEgeX%2BqIMQuYAb3sQqr79IbRwVCgXgVvOZJIVZClKKh4YGM0187NEjxS86uT1qdC9p7P%2FRvxuUXjGC3p3daTXvZBTT0fBtVP8WdnX2JdSTpz%2FdRWZED%2FEYFuxX1UKRMV0n2PA9GndaZ6tROStv%2FARRAMeQzuMxYkMegf0Ge3cAFkhU9bDGEI3iZEbUjFstcqxrE2kUoJjGXOpqgYOgV3BBcQOHFB%2FLvkyNY%2FPjmZBJAu%2BRpGdqwXjasyb%2FIPErLwiRsGgNQhcat3utgY4w%2BfGKjARiUgXS7BR1grTLg4HBFxQTkxi09%2BWcSd25wFs8gKZpmSjQnbrhXBjXh4jO4fjUEjiWINVa5C%2BOP0l7gnacvZewK%2F7zx9p7pGMLyg1MkGOqUBjDLEdZ379TjB8FGmDD%2BC7ktmHrh%2FL%2Bn3L3vu3ObwR4IK7VIF78xRVez8sEql%2B1GPhUslecPwwM75blNOz0f2Z%2FtKoprf%2BggKw23BVJe65c769zWb96cYBjSl82G5bOiA4lZq0Pk%2BxFSJTcIFjf5blcsIywOMpn%2BrPmB4Sgq6De0zE0WpIfjsjgIC%2Fp1HUeiUuCU2ZsPTX8GkIYwjZy5vXMbaAzsv&X-Amz-Signature=00121fd237ddf60a6b79a798dee41749328f563bc343e8cba8ae44760e6d7c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

