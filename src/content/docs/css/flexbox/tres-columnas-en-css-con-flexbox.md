---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YBGTPJC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgHfd0IztZm7LdgnBuefXDICDGuLc7axGUlNyUD0ghTwIgSJ9YJ2Jegz0iaKgpgRAH0hB2HBoft%2F6Pg%2FyiYWrdxyAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh2baW%2B0%2BKr2zPMMircA8w75AHetc0Q8sA32VYnFDBtcZWLgwWI2svUbuPb3s1H9UR8x0LJEHG2KyfZwZj9KOmgFvahoH5NIM%2B8gn%2FyOj39nnicVLVeQ2GoxykNqT5zqOnjUpsqhAtFcnCgArfaHvdmbUfH9WffeSVRAx%2Bsdu5hI0K9vOn1zOCtgQ8tHhhuxEtKrnvn1BOEeag%2BOOwJNRRBvdulQ9JyEfAy7oYUgwSSysh9m8UL15O%2ByzutsjCc1v2cGedeG2nFg%2FWN%2FR3iqzRP6SZD7KCMZzUiv%2FkgwWJar7yPFO5GhdgS2H2WBGzEBCWZfcsJTxsBGyXRMxLZKfRqscb6gWphckJvD7dELVMe7wmsnfwsqm6w2EGDjrux6vUvTZmLSr7YreBTPPgzg9aBDN%2Fx%2BSB%2FQl18nR%2BhYjQyYlpqnGl3rhZIoUPmfEWxywo4UBrg0%2BEbNnOKbsr%2FY8bYNjGznhFZsmHpK4ohfBc9k7EWU2FRy6IS7U%2BclyVUUhNdnH%2ByTxUflrMKhPfihMpLmT2MG6y5%2FCn%2B1g5cshK1pi9v%2BSZahlBer60yPbujlnVWUpaTqfO20Sqmp%2F%2Fn4CByy9oBkzU4Va6KcOpKD%2FtBTw3OJH8h95q06gFeQNlrUzcoD4qufIj%2FzyJWMPiG3MkGOqUBCPOUw8I%2FXTAgNT6bG3C%2F1zXD4SEx7b2%2BFJMA8F1ViyOqjnWmI2Jvkl%2BqagOsgLKMeEmxe5nP%2FywxMFoEqlZnVaxTw8LvyR8NYej1rwQouY4j2n4352QdgL9D%2BN%2BAB9cDwTM3iFI5GeEXM9bWOiyAwdATSjWm0q7Po7ZAudUoXgqvv2hht8xrcn3REkqIxfkZ33BwesgN8mx%2B7iOu7dgqNenFcBGl&X-Amz-Signature=bdd9cf13687f87966fd88aec48f486871d925305acfc8322d750fbeff2fd8459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YBGTPJC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgHfd0IztZm7LdgnBuefXDICDGuLc7axGUlNyUD0ghTwIgSJ9YJ2Jegz0iaKgpgRAH0hB2HBoft%2F6Pg%2FyiYWrdxyAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh2baW%2B0%2BKr2zPMMircA8w75AHetc0Q8sA32VYnFDBtcZWLgwWI2svUbuPb3s1H9UR8x0LJEHG2KyfZwZj9KOmgFvahoH5NIM%2B8gn%2FyOj39nnicVLVeQ2GoxykNqT5zqOnjUpsqhAtFcnCgArfaHvdmbUfH9WffeSVRAx%2Bsdu5hI0K9vOn1zOCtgQ8tHhhuxEtKrnvn1BOEeag%2BOOwJNRRBvdulQ9JyEfAy7oYUgwSSysh9m8UL15O%2ByzutsjCc1v2cGedeG2nFg%2FWN%2FR3iqzRP6SZD7KCMZzUiv%2FkgwWJar7yPFO5GhdgS2H2WBGzEBCWZfcsJTxsBGyXRMxLZKfRqscb6gWphckJvD7dELVMe7wmsnfwsqm6w2EGDjrux6vUvTZmLSr7YreBTPPgzg9aBDN%2Fx%2BSB%2FQl18nR%2BhYjQyYlpqnGl3rhZIoUPmfEWxywo4UBrg0%2BEbNnOKbsr%2FY8bYNjGznhFZsmHpK4ohfBc9k7EWU2FRy6IS7U%2BclyVUUhNdnH%2ByTxUflrMKhPfihMpLmT2MG6y5%2FCn%2B1g5cshK1pi9v%2BSZahlBer60yPbujlnVWUpaTqfO20Sqmp%2F%2Fn4CByy9oBkzU4Va6KcOpKD%2FtBTw3OJH8h95q06gFeQNlrUzcoD4qufIj%2FzyJWMPiG3MkGOqUBCPOUw8I%2FXTAgNT6bG3C%2F1zXD4SEx7b2%2BFJMA8F1ViyOqjnWmI2Jvkl%2BqagOsgLKMeEmxe5nP%2FywxMFoEqlZnVaxTw8LvyR8NYej1rwQouY4j2n4352QdgL9D%2BN%2BAB9cDwTM3iFI5GeEXM9bWOiyAwdATSjWm0q7Po7ZAudUoXgqvv2hht8xrcn3REkqIxfkZ33BwesgN8mx%2B7iOu7dgqNenFcBGl&X-Amz-Signature=db33f83086991252e41d6a3aa5fa6144363a677b1ab09ee64b966799fd20f97c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

