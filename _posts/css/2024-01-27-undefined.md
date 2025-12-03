---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7JHQ5V4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDAyLh%2BXOYir2kWoDM3EV%2FSt71BXTvUjjeuRKfS85D%2FxQIgDclAL9dFjCCU31u%2BwP3KSsoxHOImBpPLhwb9EVhJLYgq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNhBdfHjmMCc6nvhGircA4C9tj4hhAdSkZ7N2RDBwaWKBaDYCJkyeew0bTa4%2Bny30MbiZtJQTdp2UbCdSCrDVScyqqZJQnL%2FPpHY9jTPNOiuWMv3Cv9qCOQ6zd5RFoBV%2F9ZYReY7mieWpG2rNfBeZIPvpS5SpGBteuxRKIlcN9NsPXMim0CPrtQwswnldE60BIh4YfiIchvOheY%2BOaXIxs52dox0jYmfqebg4idCmfemcoi%2FBuI3IpeZLh3XlOh4yFUKY6FtO0TSEZRxY%2BG1XpBuZamxhP3L4oHjwXDSxQk%2BGlzJ1j0kW6awKxycag5kvkclH%2Bv5OyzEKnklIQ%2BGpHm7X9G0VTnVElcG3qUbPshsaayjwgXhtfNH8RBQdiAseL4pkESNHvQmrlzifPGYzmUoFpCMa8bnOwN%2FpgHbL%2Faniu0FsBuThHQ0LYXBXW6bQKA0ai6G8uOyNUECB7IcqKxiEq9e4brqOWhaGs4wxGLlZbCWXQE5FvMhgI%2F5qkbW6gsAFWWlDlqE9ZD1K7StVBJlBqlE0fSH%2Bggf99r8xiWG7omwr8iyu6Tvps3uAqntSqNIOirnEv%2B7cHExMTxnb1r1LCOdF4X2eI7w7T0s%2BI85B3%2Fo9NzewnY4RPY2OvwFu6KQDUUqySJnE9JCMM2mwckGOqUB8jDIBGktUi3%2Br4BINuUOnW7rmfRK9MWhLZgRsYTgvdnprNvy5%2BuIG7UaZTWWC15Jwz23JpdMmmkOpvmlpZp9I%2FzeQNIzsmCu1et3MRjV1BEd9uQVz41Tfw1c2BaAxgHdGoscusS9EoSg1Nce2do7oUhjstAiOJv6IG9UT%2BdNT%2FdiznAMLF%2B%2FcmLcC39XvAAl2qnn1sTX%2FMZj1GxTNsd4NtS3gFS%2F&X-Amz-Signature=48d4a7759aa688e944e9b4882a15581d8cf77c8847ed67238dfea56d2b651737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7JHQ5V4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDAyLh%2BXOYir2kWoDM3EV%2FSt71BXTvUjjeuRKfS85D%2FxQIgDclAL9dFjCCU31u%2BwP3KSsoxHOImBpPLhwb9EVhJLYgq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNhBdfHjmMCc6nvhGircA4C9tj4hhAdSkZ7N2RDBwaWKBaDYCJkyeew0bTa4%2Bny30MbiZtJQTdp2UbCdSCrDVScyqqZJQnL%2FPpHY9jTPNOiuWMv3Cv9qCOQ6zd5RFoBV%2F9ZYReY7mieWpG2rNfBeZIPvpS5SpGBteuxRKIlcN9NsPXMim0CPrtQwswnldE60BIh4YfiIchvOheY%2BOaXIxs52dox0jYmfqebg4idCmfemcoi%2FBuI3IpeZLh3XlOh4yFUKY6FtO0TSEZRxY%2BG1XpBuZamxhP3L4oHjwXDSxQk%2BGlzJ1j0kW6awKxycag5kvkclH%2Bv5OyzEKnklIQ%2BGpHm7X9G0VTnVElcG3qUbPshsaayjwgXhtfNH8RBQdiAseL4pkESNHvQmrlzifPGYzmUoFpCMa8bnOwN%2FpgHbL%2Faniu0FsBuThHQ0LYXBXW6bQKA0ai6G8uOyNUECB7IcqKxiEq9e4brqOWhaGs4wxGLlZbCWXQE5FvMhgI%2F5qkbW6gsAFWWlDlqE9ZD1K7StVBJlBqlE0fSH%2Bggf99r8xiWG7omwr8iyu6Tvps3uAqntSqNIOirnEv%2B7cHExMTxnb1r1LCOdF4X2eI7w7T0s%2BI85B3%2Fo9NzewnY4RPY2OvwFu6KQDUUqySJnE9JCMM2mwckGOqUB8jDIBGktUi3%2Br4BINuUOnW7rmfRK9MWhLZgRsYTgvdnprNvy5%2BuIG7UaZTWWC15Jwz23JpdMmmkOpvmlpZp9I%2FzeQNIzsmCu1et3MRjV1BEd9uQVz41Tfw1c2BaAxgHdGoscusS9EoSg1Nce2do7oUhjstAiOJv6IG9UT%2BdNT%2FdiznAMLF%2B%2FcmLcC39XvAAl2qnn1sTX%2FMZj1GxTNsd4NtS3gFS%2F&X-Amz-Signature=0a070c0825728f0f807a875d9486d6c80e7f420f4eda69e5fe6de646873c1232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

