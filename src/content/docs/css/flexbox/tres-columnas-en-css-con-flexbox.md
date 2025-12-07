---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2DG26SU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpgJ2aICFp7GJR7DucVwbSDIoFdoRl%2ByezmjogeNix2QIgFP4UcLKO5vJPjEoN4VFTRi9I2qqWpae%2B3eMCxSuesvAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDg5tCpSKOAAXTPYBCrcA%2FkuHcAJJOhtAGXFVj7%2FXD2Z6yjCSN6HzccAVyPLagqaxVt1sxjfphNvOyLfb6KJcXs4i3k5PtYtCZj7DYrlQ4o1R8WyJbw0EZZ4Zyk%2BZkF%2F%2BC0zaAcmv0pKsWE%2BudYaIpL4wKHOt0KePLbuMg646b38%2F1o%2B5SqaDgiyKo0AnVnznuo5jPGtum9BNis4o5bGF%2BDcBHKa5cNtskT4xLWTGwR7eZF6bbw11GdZELDeKXkA4Z90iZrr0wxov0WYOQJEz%2Fv8kU0cWsFp9kCVDqiN3BOnNnFAxwSw3QQ7ehE0muBvyXA2XA1Y1EDKUlmMQ05LE1B0jY9hKvxmAZ47lYzNL9AVxbT%2F%2FikXxBA8m%2BHlKi%2B2weIMLTWAAUu4kTGtrVeZg3AULW%2BHDmJOjakbiGv%2BqEtFJZYY8a7%2BPfRD3gEGIlDsSChoLczrWiDko%2BcD2%2FiL1NwWz%2FGGilmxl599f2OZZ%2FofVPYLYgQlp6Qm%2FsyRKCrJpgMh2cMpDpqu26OWZbPRtx%2FAjq5WsNyVeZnT9cUNuaC2Ln1sNMaTwEBzCZj3XdaQZTfjGvx6%2Bo4xQuDHcsib94ay2elgjWZWtMb2rOLcKU%2Ba%2F2KIHb%2BU8ac6cegrvGb%2BqPtaYw%2F8mpBQ4HGyMPyZ1ckGOqUBWWOGJnMdeG13bwrxbEfhmOWbyUP1VZOZF%2B00CZ9vFzywxGk75rKNpedgrywf6svV6d4fyJ8lEBLQm3jx%2FeufRHnClOj23dqOlee%2FgViNg2FFDdtjzvclsa6CggK96eMwkqd4dLX4viuP1wL%2F53tF7yofowj01C97rIugVp2YTKCaAiRXUPTPHKD4Chy7nzPT5QCIPPi%2BeXpC%2FYQt6Ol2vg4i9EaC&X-Amz-Signature=752d3dd1c2bf3539ddc99a341e8bb6abe3fd63dbbef4f1b1a14d10baf5779811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2DG26SU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpgJ2aICFp7GJR7DucVwbSDIoFdoRl%2ByezmjogeNix2QIgFP4UcLKO5vJPjEoN4VFTRi9I2qqWpae%2B3eMCxSuesvAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDg5tCpSKOAAXTPYBCrcA%2FkuHcAJJOhtAGXFVj7%2FXD2Z6yjCSN6HzccAVyPLagqaxVt1sxjfphNvOyLfb6KJcXs4i3k5PtYtCZj7DYrlQ4o1R8WyJbw0EZZ4Zyk%2BZkF%2F%2BC0zaAcmv0pKsWE%2BudYaIpL4wKHOt0KePLbuMg646b38%2F1o%2B5SqaDgiyKo0AnVnznuo5jPGtum9BNis4o5bGF%2BDcBHKa5cNtskT4xLWTGwR7eZF6bbw11GdZELDeKXkA4Z90iZrr0wxov0WYOQJEz%2Fv8kU0cWsFp9kCVDqiN3BOnNnFAxwSw3QQ7ehE0muBvyXA2XA1Y1EDKUlmMQ05LE1B0jY9hKvxmAZ47lYzNL9AVxbT%2F%2FikXxBA8m%2BHlKi%2B2weIMLTWAAUu4kTGtrVeZg3AULW%2BHDmJOjakbiGv%2BqEtFJZYY8a7%2BPfRD3gEGIlDsSChoLczrWiDko%2BcD2%2FiL1NwWz%2FGGilmxl599f2OZZ%2FofVPYLYgQlp6Qm%2FsyRKCrJpgMh2cMpDpqu26OWZbPRtx%2FAjq5WsNyVeZnT9cUNuaC2Ln1sNMaTwEBzCZj3XdaQZTfjGvx6%2Bo4xQuDHcsib94ay2elgjWZWtMb2rOLcKU%2Ba%2F2KIHb%2BU8ac6cegrvGb%2BqPtaYw%2F8mpBQ4HGyMPyZ1ckGOqUBWWOGJnMdeG13bwrxbEfhmOWbyUP1VZOZF%2B00CZ9vFzywxGk75rKNpedgrywf6svV6d4fyJ8lEBLQm3jx%2FeufRHnClOj23dqOlee%2FgViNg2FFDdtjzvclsa6CggK96eMwkqd4dLX4viuP1wL%2F53tF7yofowj01C97rIugVp2YTKCaAiRXUPTPHKD4Chy7nzPT5QCIPPi%2BeXpC%2FYQt6Ol2vg4i9EaC&X-Amz-Signature=feb28ed8f691e29855734343bfa82cbe714aeaed8e186b2c2fda7a1481bf9277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

