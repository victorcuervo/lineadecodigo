---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTVOCWWZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXGOE9qaik2chqNlhpduI63n39PcLr5FbLnFxLjbjfGAiBL7LJHgqw%2FcIQuCnIP8EWHqhleGhwlt2EJhOwbc2Vc%2BiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzyySu6LLKGbTUfi2KtwDQuLqQMUQycgmUYTtC%2FtwuX5kF33r2rWrAoWp4dLGNpwk5eTI0BCHXSh80cMNAJ0dFrmdEsexHiE%2FKEAIgD9Pdg5rONBIFsHWQHmv4%2BD7vi94%2BDeeEYVTu1CC5Oj90IxI1gDZh9%2B7IbV6ZT16i%2BLBqRpr0BQHcpcjRiPPyptdH66FwSON2I23VdV4%2BLN0xFFPP5XiP8euQHc9gCgTmYOaI9gXuIAYtg0x1PZjkqcXepLLTVGD38he1aMwSzDL3C8Orc1n%2B7OVdTRMPjjPrc3dGjCbvJZduVl9%2F9vnJ2tGtIOoeHB9IS3ZeRUHSBvA0oh2LpYbL%2FQchoUCsna3p4tNM7iG7rep%2Fji5cGsorzlCyM17mtij9axnIgkV%2FkuR01WsYomPcDR%2BBHnp67weVHsw1Cp%2B4820%2BznLeOmlGY9svCrGcP8T0FZzwJsy3oWGWijB%2BMFSXDhsEEAwNsKhV0NMWWdoIBcOc7EMKTdZIw7aQyMHyue3EEIVA3g8L3WvH3xFG1xz2wSh4KoyGeciava8Rc68Z0XRqqZsGEykTW5tl1LyWgb%2B3ezcAw6Oac09Lp9cOUrZp9%2BdQn%2BcaJoslN38lQ0gCtjmJTk0GpNFH77XDBwlRJU9OTNmF6twoUQw9KTfyQY6pgE1eoFt0WrwANIe%2BvBPEEQCdlrL7VUXlh0umqNuDE82VhzoJaFjZ8w4SKCDWbRPe%2BbG003E5HijxpWK%2BNRtutqZjEe3BtHb%2FqQGOYXpZxa0tRD6Mk1jaBS%2B6MGGZ0jM0Ph58zRccrrmZijsLqzlR923Po0PQGYxf9%2FuuDsn2E6ZZKHW2y3iUcb%2BdMKVOyquXMmze0QNVftqvzvpOKTAw4c%2BDcYvJ4oh&X-Amz-Signature=d0728ddd503882e9b1411410cbd90ff9bc0b193fdcaf2045ce4487e5a29bf25f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTVOCWWZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXGOE9qaik2chqNlhpduI63n39PcLr5FbLnFxLjbjfGAiBL7LJHgqw%2FcIQuCnIP8EWHqhleGhwlt2EJhOwbc2Vc%2BiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzyySu6LLKGbTUfi2KtwDQuLqQMUQycgmUYTtC%2FtwuX5kF33r2rWrAoWp4dLGNpwk5eTI0BCHXSh80cMNAJ0dFrmdEsexHiE%2FKEAIgD9Pdg5rONBIFsHWQHmv4%2BD7vi94%2BDeeEYVTu1CC5Oj90IxI1gDZh9%2B7IbV6ZT16i%2BLBqRpr0BQHcpcjRiPPyptdH66FwSON2I23VdV4%2BLN0xFFPP5XiP8euQHc9gCgTmYOaI9gXuIAYtg0x1PZjkqcXepLLTVGD38he1aMwSzDL3C8Orc1n%2B7OVdTRMPjjPrc3dGjCbvJZduVl9%2F9vnJ2tGtIOoeHB9IS3ZeRUHSBvA0oh2LpYbL%2FQchoUCsna3p4tNM7iG7rep%2Fji5cGsorzlCyM17mtij9axnIgkV%2FkuR01WsYomPcDR%2BBHnp67weVHsw1Cp%2B4820%2BznLeOmlGY9svCrGcP8T0FZzwJsy3oWGWijB%2BMFSXDhsEEAwNsKhV0NMWWdoIBcOc7EMKTdZIw7aQyMHyue3EEIVA3g8L3WvH3xFG1xz2wSh4KoyGeciava8Rc68Z0XRqqZsGEykTW5tl1LyWgb%2B3ezcAw6Oac09Lp9cOUrZp9%2BdQn%2BcaJoslN38lQ0gCtjmJTk0GpNFH77XDBwlRJU9OTNmF6twoUQw9KTfyQY6pgE1eoFt0WrwANIe%2BvBPEEQCdlrL7VUXlh0umqNuDE82VhzoJaFjZ8w4SKCDWbRPe%2BbG003E5HijxpWK%2BNRtutqZjEe3BtHb%2FqQGOYXpZxa0tRD6Mk1jaBS%2B6MGGZ0jM0Ph58zRccrrmZijsLqzlR923Po0PQGYxf9%2FuuDsn2E6ZZKHW2y3iUcb%2BdMKVOyquXMmze0QNVftqvzvpOKTAw4c%2BDcYvJ4oh&X-Amz-Signature=d8ab7297e6f32402e31b7f3fcb3239385ac9942634dc5ffa580d14441d16d097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

