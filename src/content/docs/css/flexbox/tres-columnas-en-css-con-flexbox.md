---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ASCJXV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgNVW4eYy9vCJsRCbGEsMbYHNJU1vAtv0MzSlcWx2afAiBiGWuOcmGDCvqW1OkddGNMCWPrMLWLDHbqJgQjCHXPCSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMbBvXr7m0CNkuKC1DKtwDzDCNZexWFo7eU%2Bo3ynu%2BOs6JYzQw1YV2ZoWeaFE%2F0xXMJ1Ud8y%2Bep2fLRvOqIvJC4AsXt0Tl7DprLqYIJNr%2Bx1V6p4pYvx0H5myXXICdIYWW%2BkTMaKE5Mw0N9AnYPqR1vcbT17QFDysufHPsEdmma%2B4lFzXHy%2FR9lPcdhkD5R%2BZqbvJU1GbYFH8AgIETMzOWWjLr8m%2BaeTTK1cXOsuTX3tO0dMSl2%2FHWpBrja5N9%2B2PnVqOSpW9doZ2BH1DAPUMm8JQQmIkqyfswYapNovxo76YcUHtlqianyN%2BVRyjnlykgnAiSp4vgluhuOqPqp44v6%2BHr4GoWID96DHgeQDrfuZcBwDERZrhd0BSj2Xg3y0eBACM1KqdEzc4QNOC40ojPO990BxEySmgcxs2ERtiOX%2B0gTn%2BsTDv6VQrj8ufoAxNxpupUZ5Ls7LAAq1QZUTmyj8m4N%2BDAGcIX3vEGTDk%2BH8f2NCIKmv0y%2B5hTm4s3xTw06nt295vy%2BtqgaZWNR8W%2BY39mNr7xNs0h1gFwf8w%2B3XBCO9NHo7opMjpZReaNpD6qSmH0%2BoC3V7KTzHryDzqIKCbsJcKi4mBviYY%2FRN3Hf0qEeyVs0sUG2jT1b1wt55YjNCAdTL%2F27TyCE6ww8fzLyQY6pgGCujY%2BG%2FxOJhDOQMFar3kQEeRHtQzFL9%2Fzx5QCS64JYZv5fArTQwsjwprVHaiLAV6f1HtoA65thq66uJqynLTiLThbp1nModRTsXNqDJD7IkF5JY0YVGelKERAW%2Fhx5sVofdRlKhK8Gfx0xSBMwnkCWAs%2FLnqarhUs5aeXv3I72EVEvRWibA0n%2FYNgwE7nT7R7DtyRFsmyYSKKD5K9gXxIyGcJoSrs&X-Amz-Signature=4893cd88f424afc459b4fda658a31b5fa66616b297822fa581eddfc8fbec211e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ASCJXV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgNVW4eYy9vCJsRCbGEsMbYHNJU1vAtv0MzSlcWx2afAiBiGWuOcmGDCvqW1OkddGNMCWPrMLWLDHbqJgQjCHXPCSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMbBvXr7m0CNkuKC1DKtwDzDCNZexWFo7eU%2Bo3ynu%2BOs6JYzQw1YV2ZoWeaFE%2F0xXMJ1Ud8y%2Bep2fLRvOqIvJC4AsXt0Tl7DprLqYIJNr%2Bx1V6p4pYvx0H5myXXICdIYWW%2BkTMaKE5Mw0N9AnYPqR1vcbT17QFDysufHPsEdmma%2B4lFzXHy%2FR9lPcdhkD5R%2BZqbvJU1GbYFH8AgIETMzOWWjLr8m%2BaeTTK1cXOsuTX3tO0dMSl2%2FHWpBrja5N9%2B2PnVqOSpW9doZ2BH1DAPUMm8JQQmIkqyfswYapNovxo76YcUHtlqianyN%2BVRyjnlykgnAiSp4vgluhuOqPqp44v6%2BHr4GoWID96DHgeQDrfuZcBwDERZrhd0BSj2Xg3y0eBACM1KqdEzc4QNOC40ojPO990BxEySmgcxs2ERtiOX%2B0gTn%2BsTDv6VQrj8ufoAxNxpupUZ5Ls7LAAq1QZUTmyj8m4N%2BDAGcIX3vEGTDk%2BH8f2NCIKmv0y%2B5hTm4s3xTw06nt295vy%2BtqgaZWNR8W%2BY39mNr7xNs0h1gFwf8w%2B3XBCO9NHo7opMjpZReaNpD6qSmH0%2BoC3V7KTzHryDzqIKCbsJcKi4mBviYY%2FRN3Hf0qEeyVs0sUG2jT1b1wt55YjNCAdTL%2F27TyCE6ww8fzLyQY6pgGCujY%2BG%2FxOJhDOQMFar3kQEeRHtQzFL9%2Fzx5QCS64JYZv5fArTQwsjwprVHaiLAV6f1HtoA65thq66uJqynLTiLThbp1nModRTsXNqDJD7IkF5JY0YVGelKERAW%2Fhx5sVofdRlKhK8Gfx0xSBMwnkCWAs%2FLnqarhUs5aeXv3I72EVEvRWibA0n%2FYNgwE7nT7R7DtyRFsmyYSKKD5K9gXxIyGcJoSrs&X-Amz-Signature=c3b05a04734e6e6352e1d4f90da0cd1d25b8e956f74a876d3b80bf83f3b8bd8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

