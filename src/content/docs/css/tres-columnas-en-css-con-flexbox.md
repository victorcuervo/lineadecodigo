---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCK3TUO7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFxLpUOiqVEoKpF2ryfiKGhjReLq0WKVnB0Bi3QHWrp6AiAuSh67%2BgZZ0laFOpd1t%2BLEabiMxNdWQShp5IBnKNwOCir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMvGFXL9N46SEjUC39KtwDWeFRYngF8sTTwHAc6th6wE95YTcMV%2Frs%2BBYuvG5LAkYBUKFc3ZYAsMMe5LNczxthJTutO5KjXciV9CQyGrl9R0a3kKI51ZDANFJuEAYyKzGuPr%2BzHz2GqfXjobyMnNISHUhOKBdNw1tpUGoFgkofF14tQUAZwxxHKZGPGHHUHB5rKW2jq%2BCfMpCRFBGnuAPfusMCc%2FF1L1SZ%2BQQA75JRRgJEDSrbe1hN9yMU5qono17FCVa13hOwtdcTxeCPB6qyopuse5YYY72Fkvt80ngIZp%2Fk9%2BVKV6sjUv8RZ2vFCv1Zh8AlJ1ElwjXD1%2FzFSTgpfUdMCzrkK6CtPLpHzPNO1cnLQPNVo30awUaj5LHUKZai4i1Ntn3C1PpamCU727IvoKJ%2BkQMzCfBUnIyDBa7cJvVRrML9xuvF0equxe2ksce%2F2jGUqAde7JXsmflkoB6LlCWqBjDeYGEq5%2FyDjve6gisRuoS4B01gDSyG57GeBTgdZRJZp9GuCydM9PtAy%2BQs7Ae39UO9SRp8L0l2p6ngQFBb0JFPiCfYg7K3JSeR0Dt4pTrPX3Hv4N51Ku7gStv7rZL3lFkky60N8LX3zY7zHTJutkpFLkivR5VZO17D3KxTTtJUfF9VkdIRNvsws93CyQY6pgHYfZVXclDYS6Kk19QreZlZyJxhQ1w4o8Py9GZRIHlDQksk6h5vOfD9k2ZAdwRaEQNHpQi%2BZEgAvj2kyvBwZRssKEYc%2BZi7qZWXo0PbEY%2FdD%2Fo6hyFiVSIq0qpSHedeJlTWzt8ScBdecSuhXrLpHlilfoZ4ByDUP7HHFsuke2ox4VwgzRMsGGi2GzgbdvGJ%2FwXhJ%2BOXUU49MSWzxTCfHlIzYocgNpJD&X-Amz-Signature=4867b170896f8ba996a71d87f344b169a40e45153aaeb169e7de7b3053d3f529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCK3TUO7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFxLpUOiqVEoKpF2ryfiKGhjReLq0WKVnB0Bi3QHWrp6AiAuSh67%2BgZZ0laFOpd1t%2BLEabiMxNdWQShp5IBnKNwOCir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMvGFXL9N46SEjUC39KtwDWeFRYngF8sTTwHAc6th6wE95YTcMV%2Frs%2BBYuvG5LAkYBUKFc3ZYAsMMe5LNczxthJTutO5KjXciV9CQyGrl9R0a3kKI51ZDANFJuEAYyKzGuPr%2BzHz2GqfXjobyMnNISHUhOKBdNw1tpUGoFgkofF14tQUAZwxxHKZGPGHHUHB5rKW2jq%2BCfMpCRFBGnuAPfusMCc%2FF1L1SZ%2BQQA75JRRgJEDSrbe1hN9yMU5qono17FCVa13hOwtdcTxeCPB6qyopuse5YYY72Fkvt80ngIZp%2Fk9%2BVKV6sjUv8RZ2vFCv1Zh8AlJ1ElwjXD1%2FzFSTgpfUdMCzrkK6CtPLpHzPNO1cnLQPNVo30awUaj5LHUKZai4i1Ntn3C1PpamCU727IvoKJ%2BkQMzCfBUnIyDBa7cJvVRrML9xuvF0equxe2ksce%2F2jGUqAde7JXsmflkoB6LlCWqBjDeYGEq5%2FyDjve6gisRuoS4B01gDSyG57GeBTgdZRJZp9GuCydM9PtAy%2BQs7Ae39UO9SRp8L0l2p6ngQFBb0JFPiCfYg7K3JSeR0Dt4pTrPX3Hv4N51Ku7gStv7rZL3lFkky60N8LX3zY7zHTJutkpFLkivR5VZO17D3KxTTtJUfF9VkdIRNvsws93CyQY6pgHYfZVXclDYS6Kk19QreZlZyJxhQ1w4o8Py9GZRIHlDQksk6h5vOfD9k2ZAdwRaEQNHpQi%2BZEgAvj2kyvBwZRssKEYc%2BZi7qZWXo0PbEY%2FdD%2Fo6hyFiVSIq0qpSHedeJlTWzt8ScBdecSuhXrLpHlilfoZ4ByDUP7HHFsuke2ox4VwgzRMsGGi2GzgbdvGJ%2FwXhJ%2BOXUU49MSWzxTCfHlIzYocgNpJD&X-Amz-Signature=31f400ae95f5197a4de1814da95a7a3ab042b991781da35c7db2fc1e7a025b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

