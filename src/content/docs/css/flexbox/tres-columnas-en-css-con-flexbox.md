---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNDKJY4O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB1JYQa1dZbUeHZCK7Gy3C27CW6cDHH487EYLyU7YGWwIgP1XMzGrUBG%2FuHCxd8%2B7RhIfM12zOoNv49BEyDjRga94q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEo6JvvoaVEq%2BfwQsyrcA8kSmGHgYpRAHOaxLYlnS3IbqpsgSnA%2BlDpr6Wtl58xzgsrn1wQrWMBSEgRkxG7o2cNVysL3WB%2B6sjShJ9xANd2zf%2FT6FjcgrTCZkqJx3swy23mE%2Fwp2mndiaQBYBDz0MvYcR440Hq6WRwM9It06Om5VgCAWCZBgx6MVnV3aigypt55DoWmrv5hJkr%2B1TtfnHUnF%2BH1NVpUj5tDUA5x1WtC9yqGw5QhjdRM8NESDv1DN0IQ5nqzeKjFTc5m%2BTRDlhAff7VJX0obgYSWABdmow47DcfW4JhNkIavHr8RKnHb%2Fbx8VX0ZeKTwQt5vya2zDbRq%2B0TGM%2FpPd8jzP44PExqyt5BdQdInvRflmXcNb%2ByYDqLOhH6B4VxgRAVhazpOOQTTB6b88%2FaNyGtqJOz0JK6DSvi7e%2B9770YGMGpfhdnVe40EPKG3uzxDSDhhVLWom75BIEoxZQxa8F41STflK22VMcTKtLW7Y4jgIcB7abLSZNvSpL8THtMw3NjBxeaTZpkM2CJB6g8EjUjMDq3reNLwWz5jGOh6ZPZPobyqNsT2A59pLHrwsFGOFtyurvnqtRQRM9DeF%2F6OfUvUdfEnHrZk%2FziyFnpEl5QFAOYjjqMhuJos4gFXm90V7zSuJMJGwyckGOqUBSAiCrWdEftFCo7RaAZurB6CC6aixmhqdfB3IRaOKjNAa62XQ%2BFcoqmO6ckNk1mhnQykXswMBOZFIrg%2BnhJXpzg3ZUCFV3nozN1P1UsLI8uts4dNF8xNRKnfJ42U65v%2BY9h1tMlSNFsY1Uj54VS6cFkvuySDouIeAhCHB20CGMVuUr%2FHAtfvfranl%2FsUUSEH7ivZkd%2F1w4%2Fu00tfI%2FrsjqxR%2BG4W1&X-Amz-Signature=551c94fe654ea40e6c18ad6892dd5ccb6b2cd2b500cd79f45cefd463bdb8a6fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNDKJY4O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB1JYQa1dZbUeHZCK7Gy3C27CW6cDHH487EYLyU7YGWwIgP1XMzGrUBG%2FuHCxd8%2B7RhIfM12zOoNv49BEyDjRga94q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEo6JvvoaVEq%2BfwQsyrcA8kSmGHgYpRAHOaxLYlnS3IbqpsgSnA%2BlDpr6Wtl58xzgsrn1wQrWMBSEgRkxG7o2cNVysL3WB%2B6sjShJ9xANd2zf%2FT6FjcgrTCZkqJx3swy23mE%2Fwp2mndiaQBYBDz0MvYcR440Hq6WRwM9It06Om5VgCAWCZBgx6MVnV3aigypt55DoWmrv5hJkr%2B1TtfnHUnF%2BH1NVpUj5tDUA5x1WtC9yqGw5QhjdRM8NESDv1DN0IQ5nqzeKjFTc5m%2BTRDlhAff7VJX0obgYSWABdmow47DcfW4JhNkIavHr8RKnHb%2Fbx8VX0ZeKTwQt5vya2zDbRq%2B0TGM%2FpPd8jzP44PExqyt5BdQdInvRflmXcNb%2ByYDqLOhH6B4VxgRAVhazpOOQTTB6b88%2FaNyGtqJOz0JK6DSvi7e%2B9770YGMGpfhdnVe40EPKG3uzxDSDhhVLWom75BIEoxZQxa8F41STflK22VMcTKtLW7Y4jgIcB7abLSZNvSpL8THtMw3NjBxeaTZpkM2CJB6g8EjUjMDq3reNLwWz5jGOh6ZPZPobyqNsT2A59pLHrwsFGOFtyurvnqtRQRM9DeF%2F6OfUvUdfEnHrZk%2FziyFnpEl5QFAOYjjqMhuJos4gFXm90V7zSuJMJGwyckGOqUBSAiCrWdEftFCo7RaAZurB6CC6aixmhqdfB3IRaOKjNAa62XQ%2BFcoqmO6ckNk1mhnQykXswMBOZFIrg%2BnhJXpzg3ZUCFV3nozN1P1UsLI8uts4dNF8xNRKnfJ42U65v%2BY9h1tMlSNFsY1Uj54VS6cFkvuySDouIeAhCHB20CGMVuUr%2FHAtfvfranl%2FsUUSEH7ivZkd%2F1w4%2Fu00tfI%2FrsjqxR%2BG4W1&X-Amz-Signature=535ce5622017bf07c3f05d6116432adeb5b53a3a8bde8ab76152fd2df88c1712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

