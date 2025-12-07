---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNT4M23%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRjjnWeP1GFiAOmGXcIOVjxSo1w5H%2BfmpA1ShowM940AiBHVlFElYN0OymJkDkJWwnb4C7wFZHROeSpxKUEiY6VKSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtrbGzv0Mr71fCTZIKtwDHe7rlqUvryLy7RIlTD1KX257ge7FSHOQoLwH0juLXqIIFt8glTq529WX3OPGY%2FZd1ZTYAWNDKKxaIxXcgk4U2M2F0rizoqPoOOo9etzsQiJt4z46%2FFkx3CsdGH6rhqeHcNgsyammkW%2BU8Jo3pGjxsmPkFYCUj5ucGF1AUm%2F2aVCn2lX%2FNo7Z8STZYmKs%2Fz01L5Q1TEk9eJzxZg2bULxDGBrdUy3oKcO%2B2sVrIL44Fz8WBpVUqsWiSSxr%2FjaWYhlH6Y2DqNPJ5e0HqRSR8nJG%2BonnHQ4BJevQPSgG%2FsXgAtfej1gUI2TLWD6nX4qVduHKLHqFxx4m01Fp8mFBYJib3b2CgDlzxJi07P2NheSt29w%2Br53%2FOU2f1%2BU7l8sJiypP88ErIX8IAVTn1q5UL4kFGCfcN%2BVyKPRawfK%2BOIOVwjmMFCLlbx5fHzNb392%2FRLPWyDUuY4cQi6H3WmltZkJnEhs5L5haQgPfgiIoBLBB8GUnTAcLwhBHIKAuwOtrE25oPUZ88k3fZJgcbVcsCefky1NfE7YcArItuRVKGi%2FI85O9SvHkmhNSqEBfl%2F0Ku5ZF6iuySEHsAWc09B9thfJy1AAGt%2FmARm%2BQUV75CVuCmALRJxr3z88GW2lh8y8wv5nVyQY6pgGPpM2LpA1qROA95gebCwTYJQCg%2FIQHigpg2OhL4iQiaSdGlQnaiMWhgHcOrPCbPuwLmi%2FzRa8049Pe5umAGPMNWT8Y41SPVb8Vn%2BPja6HlkwjlZORRMe8W70VZUQJ7ZvS%2Bu6N5OSTZ0R%2FqcUHogi%2Brnju0F2TR8Ol7Gei5mIfzDf6jqtHlfLNEm66RVU25i9wiCQMONUcGrvUdK9390qr63YTuWKU1&X-Amz-Signature=72a33a0d086728641b9f1a71eb6a1489117143b013c730f3acc5bdcba3304718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNT4M23%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRjjnWeP1GFiAOmGXcIOVjxSo1w5H%2BfmpA1ShowM940AiBHVlFElYN0OymJkDkJWwnb4C7wFZHROeSpxKUEiY6VKSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtrbGzv0Mr71fCTZIKtwDHe7rlqUvryLy7RIlTD1KX257ge7FSHOQoLwH0juLXqIIFt8glTq529WX3OPGY%2FZd1ZTYAWNDKKxaIxXcgk4U2M2F0rizoqPoOOo9etzsQiJt4z46%2FFkx3CsdGH6rhqeHcNgsyammkW%2BU8Jo3pGjxsmPkFYCUj5ucGF1AUm%2F2aVCn2lX%2FNo7Z8STZYmKs%2Fz01L5Q1TEk9eJzxZg2bULxDGBrdUy3oKcO%2B2sVrIL44Fz8WBpVUqsWiSSxr%2FjaWYhlH6Y2DqNPJ5e0HqRSR8nJG%2BonnHQ4BJevQPSgG%2FsXgAtfej1gUI2TLWD6nX4qVduHKLHqFxx4m01Fp8mFBYJib3b2CgDlzxJi07P2NheSt29w%2Br53%2FOU2f1%2BU7l8sJiypP88ErIX8IAVTn1q5UL4kFGCfcN%2BVyKPRawfK%2BOIOVwjmMFCLlbx5fHzNb392%2FRLPWyDUuY4cQi6H3WmltZkJnEhs5L5haQgPfgiIoBLBB8GUnTAcLwhBHIKAuwOtrE25oPUZ88k3fZJgcbVcsCefky1NfE7YcArItuRVKGi%2FI85O9SvHkmhNSqEBfl%2F0Ku5ZF6iuySEHsAWc09B9thfJy1AAGt%2FmARm%2BQUV75CVuCmALRJxr3z88GW2lh8y8wv5nVyQY6pgGPpM2LpA1qROA95gebCwTYJQCg%2FIQHigpg2OhL4iQiaSdGlQnaiMWhgHcOrPCbPuwLmi%2FzRa8049Pe5umAGPMNWT8Y41SPVb8Vn%2BPja6HlkwjlZORRMe8W70VZUQJ7ZvS%2Bu6N5OSTZ0R%2FqcUHogi%2Brnju0F2TR8Ol7Gei5mIfzDf6jqtHlfLNEm66RVU25i9wiCQMONUcGrvUdK9390qr63YTuWKU1&X-Amz-Signature=bd59e9d6e66bfbbf7a24a8fe8c311bdf0fe1d69faf987137857b32786ec79d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

