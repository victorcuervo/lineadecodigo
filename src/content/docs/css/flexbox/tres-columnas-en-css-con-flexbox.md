---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH234ONJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5dVyvjkL2GsZiHb5SOgx%2FWpNML4zQK%2FoHYFWaegLP1AiEAsje6%2B%2FaXb%2F%2F3HhCmAYBybzLyiuJ3eyyx2bl9D8XDxrIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2WXf7vKjBPuAbiAyrcA1DCWGHbP2rqD77Y4UVxQ2thGtnvATMyG1pyNvT5K2M%2F%2BIAOaDHWvC7qg0J6VHdgAEiygeOsebqIV7Gq5rA8Q51T6%2BSx91TMuebELPKbXOz2f3nI3tcAOgUXZS7JmyzvORMhu8qLgWu6Gghm%2BiUptame%2BK5ClPiexGVDOt7l4x7yHVI2h7ipc330DL30lgojMp%2FmTuCI2ENkvLdrVlXwRSCH4HXsL3Bb1cFgrFRDkWhYP4Y3%2FVSd3hM4BrCJ64JITrqsYqI9tI9%2BiC59dxgpcwUUHNMO%2Bkgz%2FVCg6ruFo806JTUSOc4%2BOHEmq9jcf79xXsIrAlX2M6Kx%2FoNipXvoq483Hul9Y%2FeS3VS8uCTsnk6lWH8Me%2BvLaOq8%2F02XvNFgYwNVCIAcDT96A06toy9pQ0Xq99BCpH0%2Fn%2Bj7YHVgbqt9w%2FMumxTqEIk8oRQL83F9VIgNWFeQbOfDHMVGpM0ZgqlCP5ziB4nJGo5g%2Fq59QIIZvZe3PN2ff2RRH1HTSryQDwtL%2FX3S5E2%2BaQIk1Y6v3hmR%2Fhmxt%2Fi1SDZfh9Q%2FNLh4qc%2Blz9YGyB2m6t0WxL0iWnslT4FDErDGw5fVef5%2Fi2R9TwBeWHsFcSolwWNaZcenPacYdCoxC%2B5ZOQ8%2FMO2O3skGOqUBNPHnEqQI6QW%2BYf0U3r8ZPWMygcshVZInKbVQWzjR1N757wQavT3eEMnjEMtv%2Bi282hWCuepJ3VoX35ii2zuEXMRX5ESHm1QHpRNy7QM3cymCGxTCp%2BOY1uRTtubYAwT9M1FpJRYhX%2BNuo0HL6til53t1PLHd%2FHS6kssDZ63%2FNeKivYOULg0vZqHEyGW3c3vfHmH7eIHencj3DL9a92ZFRvlAb7Sj&X-Amz-Signature=f5e9d9ced4eca657ccb700a96a2317330634a3e5ad7bf13cc8ed07b2167126aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH234ONJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5dVyvjkL2GsZiHb5SOgx%2FWpNML4zQK%2FoHYFWaegLP1AiEAsje6%2B%2FaXb%2F%2F3HhCmAYBybzLyiuJ3eyyx2bl9D8XDxrIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2WXf7vKjBPuAbiAyrcA1DCWGHbP2rqD77Y4UVxQ2thGtnvATMyG1pyNvT5K2M%2F%2BIAOaDHWvC7qg0J6VHdgAEiygeOsebqIV7Gq5rA8Q51T6%2BSx91TMuebELPKbXOz2f3nI3tcAOgUXZS7JmyzvORMhu8qLgWu6Gghm%2BiUptame%2BK5ClPiexGVDOt7l4x7yHVI2h7ipc330DL30lgojMp%2FmTuCI2ENkvLdrVlXwRSCH4HXsL3Bb1cFgrFRDkWhYP4Y3%2FVSd3hM4BrCJ64JITrqsYqI9tI9%2BiC59dxgpcwUUHNMO%2Bkgz%2FVCg6ruFo806JTUSOc4%2BOHEmq9jcf79xXsIrAlX2M6Kx%2FoNipXvoq483Hul9Y%2FeS3VS8uCTsnk6lWH8Me%2BvLaOq8%2F02XvNFgYwNVCIAcDT96A06toy9pQ0Xq99BCpH0%2Fn%2Bj7YHVgbqt9w%2FMumxTqEIk8oRQL83F9VIgNWFeQbOfDHMVGpM0ZgqlCP5ziB4nJGo5g%2Fq59QIIZvZe3PN2ff2RRH1HTSryQDwtL%2FX3S5E2%2BaQIk1Y6v3hmR%2Fhmxt%2Fi1SDZfh9Q%2FNLh4qc%2Blz9YGyB2m6t0WxL0iWnslT4FDErDGw5fVef5%2Fi2R9TwBeWHsFcSolwWNaZcenPacYdCoxC%2B5ZOQ8%2FMO2O3skGOqUBNPHnEqQI6QW%2BYf0U3r8ZPWMygcshVZInKbVQWzjR1N757wQavT3eEMnjEMtv%2Bi282hWCuepJ3VoX35ii2zuEXMRX5ESHm1QHpRNy7QM3cymCGxTCp%2BOY1uRTtubYAwT9M1FpJRYhX%2BNuo0HL6til53t1PLHd%2FHS6kssDZ63%2FNeKivYOULg0vZqHEyGW3c3vfHmH7eIHencj3DL9a92ZFRvlAb7Sj&X-Amz-Signature=65cd83d7361b31fc7f2e3a23209ee860191d04d5acf52c717729d1bb15cdcc46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

