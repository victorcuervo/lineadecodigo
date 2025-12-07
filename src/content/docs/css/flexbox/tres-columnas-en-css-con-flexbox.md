---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RARP4KYV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwYGkcibOQeCzc7t3yB7Q1ExXaEGXOyc2sV9yTmwbgbwIhAL8SDUk%2B9giglkqvQLPBIhvTd2BBRPmgSBCeqxKJI3OyKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUolaxMaMXesfTVLIq3APD2WKrKUxd6uGEZWRqOIwL7SySj%2BeYAuZRWY8gU7ffqLCml741ciafhMpBO2L6H3FwwSCgCnVMDfdqlEllX7fdG7a8l2ag2FOI7RElbcdqso2aidtQsE4KsgYefOL%2BsCWQbxC5jMtWIqs9NoWsDHqRa%2FuYmG%2FcyR%2BWhJUpl6mH75IrgEaC15fcRNEFRVVXQQIcFMXM1q784Ad0wKkQrRal7ykYV4QIxwZuo7tETR0Ohmm15YtI%2BIvBVC%2BffrRNgNvev2om1rajEZoc52dYyzhqDSNIiyWSLPv6ljT7AWFvJN%2B%2FOVVO6ChQxQqk9Hs2MPzOPpYwTCBIISFPIeDMALY9sBfFPEcJvtHKPCW%2B921Uk1Iot4QJpQ53Dyb0u7TvhFuLp2iE3pDskT74scjgC5GiMQMaVRQR5CDNxu0n2Eb1ynb9EVLyfn%2BEC3Y097qbfeKc4hENAApvUQLdVau6QHbfXHm33G8jpFm0pmEQ7RYCFYO6PTS5wF5rKbtFgDIGhjDyLD0YGItgVi3PJnyMhhMsx3tx%2Bl09hStEqBI9JaauI0Uiv9ut5Aa0vJvOHr%2F9xRCrlsQ54mAmOxHPSxfesmpDQdYfarVvidGyPuB55U82MfkyA5oJupB14CmCOzD3%2FdLJBjqkAfjg6hLkQuLw6Mn8sjHgugIQHFtbfSkV0aul6PTKShWG2Gvo99c91HYfKUGsUlESrqSK18oWeSqfwIRWdWstQPfXeuBFk2PDSKdkk9WrVMmM%2Fz0%2FmEj7IBAesWLB8y6Qj4CfvfyUhtS2hEUxJ5iET9p%2BEdGQ11sRh5jYAJP67vVVmQm1qygylfsruDOTP7RGVZ7SbtjvclekXba77rnPCaIFoc%2FW&X-Amz-Signature=3ca46c63d5176e04bb34a31a2ae84f565d3a9c65bdbc842b8eeebf08b0778f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RARP4KYV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwYGkcibOQeCzc7t3yB7Q1ExXaEGXOyc2sV9yTmwbgbwIhAL8SDUk%2B9giglkqvQLPBIhvTd2BBRPmgSBCeqxKJI3OyKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUolaxMaMXesfTVLIq3APD2WKrKUxd6uGEZWRqOIwL7SySj%2BeYAuZRWY8gU7ffqLCml741ciafhMpBO2L6H3FwwSCgCnVMDfdqlEllX7fdG7a8l2ag2FOI7RElbcdqso2aidtQsE4KsgYefOL%2BsCWQbxC5jMtWIqs9NoWsDHqRa%2FuYmG%2FcyR%2BWhJUpl6mH75IrgEaC15fcRNEFRVVXQQIcFMXM1q784Ad0wKkQrRal7ykYV4QIxwZuo7tETR0Ohmm15YtI%2BIvBVC%2BffrRNgNvev2om1rajEZoc52dYyzhqDSNIiyWSLPv6ljT7AWFvJN%2B%2FOVVO6ChQxQqk9Hs2MPzOPpYwTCBIISFPIeDMALY9sBfFPEcJvtHKPCW%2B921Uk1Iot4QJpQ53Dyb0u7TvhFuLp2iE3pDskT74scjgC5GiMQMaVRQR5CDNxu0n2Eb1ynb9EVLyfn%2BEC3Y097qbfeKc4hENAApvUQLdVau6QHbfXHm33G8jpFm0pmEQ7RYCFYO6PTS5wF5rKbtFgDIGhjDyLD0YGItgVi3PJnyMhhMsx3tx%2Bl09hStEqBI9JaauI0Uiv9ut5Aa0vJvOHr%2F9xRCrlsQ54mAmOxHPSxfesmpDQdYfarVvidGyPuB55U82MfkyA5oJupB14CmCOzD3%2FdLJBjqkAfjg6hLkQuLw6Mn8sjHgugIQHFtbfSkV0aul6PTKShWG2Gvo99c91HYfKUGsUlESrqSK18oWeSqfwIRWdWstQPfXeuBFk2PDSKdkk9WrVMmM%2Fz0%2FmEj7IBAesWLB8y6Qj4CfvfyUhtS2hEUxJ5iET9p%2BEdGQ11sRh5jYAJP67vVVmQm1qygylfsruDOTP7RGVZ7SbtjvclekXba77rnPCaIFoc%2FW&X-Amz-Signature=20364c69e98dfdd3a31e5c083da71a4cab3f35d2470c9f3ddb3c92cbcdc3bcd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

