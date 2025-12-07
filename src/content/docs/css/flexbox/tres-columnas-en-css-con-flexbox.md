---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LWLQMTF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGc58cp07dpT9aJwEAweL%2FaqNWJw4uooxo4anASeyZhzAiBkQj6l7FbvwWFufJG0vNds9TCLdGHIP6xOSjb1yfiNXyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSQYX63Mym%2FQKhhIHKtwDxRrXZh%2F8oA4cH%2Bnwa1AkFmK5Z9BDw9waxaqmYxkwO8r3L1vddx8vhe8kPWbQhJMbZ5R2Vzixn9TDJXrv8bzXmyKzQgr1hbyFJTRqOSRWuQvpIy9XZTFMYYMifD9uOHppZWfD5fTNfcgGHM9%2BR53JPoFeDxsyZgjlcbWzElsX5o2fUDec%2F67REXt5RzCvjGoyx0C%2BEU1W5Ut%2Bj6M2dSmcPExgzyEQ8PrVOhP7%2BmID8VzDwfd3o4cu5KECWOXvwGj06VO18TdczhhNX5rY8B1c0oZN1qyQHsIVciAERUMhJ%2FgStROVeXi3y52h845kgUzGCXq9O9t3X2usbTI7H1uhwJm88JKyl3JNH7n8mUa8yGVPFLS3RSEYQYUT3H9QP%2Fe5Ud12xqeoxFpRW9EU7X1TeOJKslv5vkzLChuBBK3Uha9L3i4SG8JCD%2Ba2ZNS38YZdJDIp8mZcZgpEPlVpS8X8HMDTnIGvtLECGSg5o2FTKyWLEtJAIICuLCLvG2HLCNERYyl4%2FUwL0UPm5bdxSgegUKPoiF1rxuVrusWYrhMGs%2FQUtzfYlydWcrwsB1X5pc3N9GFIbucABCRcLT877zCuPv7r1OnWGG%2BcJnNcgDR5N8BlME7Z%2F4MRdAkVvW0wvJrVyQY6pgHQ0yDEPOPjzNs0GI78HJFLjMo%2FKjT8w1ONz85ZkQOy0dzvD7EPPYNh%2Bh2ClYV99CwlmhZ3JdcW1PjNMAMe2%2FUDcRLH6g3OJ3U2WCXd4Ie7ZOkI%2BNzOv6j6VIZyvKh1CU3WJmrkZUXvY7%2BFM7VQy0ub1hRIbE313ZJ0S8aXnrYukaJVHLLr9wsmGmnWjO%2FBy1S5hnpNlVkdUk8QVRwf0HBBYuRSUZcM&X-Amz-Signature=686c89ee8c3147a26d9ba213e5ba792cc7a4ebdba7608b68699647fcf38218ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LWLQMTF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGc58cp07dpT9aJwEAweL%2FaqNWJw4uooxo4anASeyZhzAiBkQj6l7FbvwWFufJG0vNds9TCLdGHIP6xOSjb1yfiNXyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSQYX63Mym%2FQKhhIHKtwDxRrXZh%2F8oA4cH%2Bnwa1AkFmK5Z9BDw9waxaqmYxkwO8r3L1vddx8vhe8kPWbQhJMbZ5R2Vzixn9TDJXrv8bzXmyKzQgr1hbyFJTRqOSRWuQvpIy9XZTFMYYMifD9uOHppZWfD5fTNfcgGHM9%2BR53JPoFeDxsyZgjlcbWzElsX5o2fUDec%2F67REXt5RzCvjGoyx0C%2BEU1W5Ut%2Bj6M2dSmcPExgzyEQ8PrVOhP7%2BmID8VzDwfd3o4cu5KECWOXvwGj06VO18TdczhhNX5rY8B1c0oZN1qyQHsIVciAERUMhJ%2FgStROVeXi3y52h845kgUzGCXq9O9t3X2usbTI7H1uhwJm88JKyl3JNH7n8mUa8yGVPFLS3RSEYQYUT3H9QP%2Fe5Ud12xqeoxFpRW9EU7X1TeOJKslv5vkzLChuBBK3Uha9L3i4SG8JCD%2Ba2ZNS38YZdJDIp8mZcZgpEPlVpS8X8HMDTnIGvtLECGSg5o2FTKyWLEtJAIICuLCLvG2HLCNERYyl4%2FUwL0UPm5bdxSgegUKPoiF1rxuVrusWYrhMGs%2FQUtzfYlydWcrwsB1X5pc3N9GFIbucABCRcLT877zCuPv7r1OnWGG%2BcJnNcgDR5N8BlME7Z%2F4MRdAkVvW0wvJrVyQY6pgHQ0yDEPOPjzNs0GI78HJFLjMo%2FKjT8w1ONz85ZkQOy0dzvD7EPPYNh%2Bh2ClYV99CwlmhZ3JdcW1PjNMAMe2%2FUDcRLH6g3OJ3U2WCXd4Ie7ZOkI%2BNzOv6j6VIZyvKh1CU3WJmrkZUXvY7%2BFM7VQy0ub1hRIbE313ZJ0S8aXnrYukaJVHLLr9wsmGmnWjO%2FBy1S5hnpNlVkdUk8QVRwf0HBBYuRSUZcM&X-Amz-Signature=56ab364a4f0392b0fa90f25ba44f0ca017a5917343f025cc01249cbfdbdbe710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

