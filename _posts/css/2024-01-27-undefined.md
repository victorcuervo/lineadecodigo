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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y42LM2L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFEAreVF%2BVNcLodCb%2BnjRw94n0HNriWVsRrienj0lWF%2FAiBHIvMK3oL%2BUVmaapgMckilxgDDogppkJsJhvBTBv3d5yr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM0ugkpKca%2FREIupLzKtwDFbo4USkSSVveblK4rFnaHQSYetffkejvD0yZMR13wNqC4T5gJ7bZXWpsb6jq%2FBLaZ7AyipcKUNpYmBb9KKcvVLDEcbSXsNhPKsBMOCbd6GAJFQQzfHL6X0dWxOnIxKVVasRx1d3PtvoRvNWqmioNTyAeC6loG9YvIy3fknHea3M4BzfGOJXMS%2F9ZRPm4U79LNWJmsC0U1KydsieWi%2BCTAmu32ZKV9WSNBJXKN3Fj%2Bm9rHQceHtMFr4lgwAkcxvSQ9e0mTYg8momYQKnCO1ezR7AyYRXLM0qWelJx5K9cP9%2FI9FkIfDW7Z2wEVU5%2BjBCq7UckecZgQgAeMMSUkErBK2OmNyuUlAICAVUGijAL7JWjgNd9N%2BZ%2F2MpDXRsMJyIqdNN8uiBl61cpFDl1JyXPCwDx0eala0%2Bgl%2F91c%2FePLFTxjf6U26t9ioyVvEx6WQJHuTnYCEYRD6Nr%2FGVt%2B8fqbesWkgVyPNVu%2FciXGJyDcgJEEokmZwlWPgpOyTk3ZHI4REZWYqx9waS2aTMEfdHZLtBBJJpXsW1WA3zjSgq5ppUUpOLbf1h%2F%2F3p6jDuPcoWtoe2q38HnRmwGwxvEfz6PtqiNRBIfT44zTzirqsEJj6K8KxcCoeAys3ATtEQw%2FIbByQY6pgG2HXNuMZ2HpUbUvGyMY3tfl1Gk88QyWp8vK174q0Xi4oVJslvU3R%2Fa5EuaRdP7Ic%2B6UFSBImvsQVQe767Utv8v2rlvfyfw2YjTpuBXq4DXoz89NSv82n1lwhXM1fPdy5B54nhEsLyM3%2F1e02NDt72QoZrJnasX%2Fk%2F83swJoNPjJ%2BFPV9HC87FOHNtDR%2FRjCxhpi0Y6YmHkgqYJlX03eQM4FKY%2FPM5N&X-Amz-Signature=11442f820cd07fe8b3b287cb81294310c6a1d2b97eb2c8ab81140889d9c6e41b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y42LM2L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFEAreVF%2BVNcLodCb%2BnjRw94n0HNriWVsRrienj0lWF%2FAiBHIvMK3oL%2BUVmaapgMckilxgDDogppkJsJhvBTBv3d5yr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM0ugkpKca%2FREIupLzKtwDFbo4USkSSVveblK4rFnaHQSYetffkejvD0yZMR13wNqC4T5gJ7bZXWpsb6jq%2FBLaZ7AyipcKUNpYmBb9KKcvVLDEcbSXsNhPKsBMOCbd6GAJFQQzfHL6X0dWxOnIxKVVasRx1d3PtvoRvNWqmioNTyAeC6loG9YvIy3fknHea3M4BzfGOJXMS%2F9ZRPm4U79LNWJmsC0U1KydsieWi%2BCTAmu32ZKV9WSNBJXKN3Fj%2Bm9rHQceHtMFr4lgwAkcxvSQ9e0mTYg8momYQKnCO1ezR7AyYRXLM0qWelJx5K9cP9%2FI9FkIfDW7Z2wEVU5%2BjBCq7UckecZgQgAeMMSUkErBK2OmNyuUlAICAVUGijAL7JWjgNd9N%2BZ%2F2MpDXRsMJyIqdNN8uiBl61cpFDl1JyXPCwDx0eala0%2Bgl%2F91c%2FePLFTxjf6U26t9ioyVvEx6WQJHuTnYCEYRD6Nr%2FGVt%2B8fqbesWkgVyPNVu%2FciXGJyDcgJEEokmZwlWPgpOyTk3ZHI4REZWYqx9waS2aTMEfdHZLtBBJJpXsW1WA3zjSgq5ppUUpOLbf1h%2F%2F3p6jDuPcoWtoe2q38HnRmwGwxvEfz6PtqiNRBIfT44zTzirqsEJj6K8KxcCoeAys3ATtEQw%2FIbByQY6pgG2HXNuMZ2HpUbUvGyMY3tfl1Gk88QyWp8vK174q0Xi4oVJslvU3R%2Fa5EuaRdP7Ic%2B6UFSBImvsQVQe767Utv8v2rlvfyfw2YjTpuBXq4DXoz89NSv82n1lwhXM1fPdy5B54nhEsLyM3%2F1e02NDt72QoZrJnasX%2Fk%2F83swJoNPjJ%2BFPV9HC87FOHNtDR%2FRjCxhpi0Y6YmHkgqYJlX03eQM4FKY%2FPM5N&X-Amz-Signature=9fd5297889e8344f0991242e657fd85466fb0bd57c43ca335e927e7a55020dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

