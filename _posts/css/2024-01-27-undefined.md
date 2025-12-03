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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD5Z5ZKK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCG8Q%2BjVvowTRPbh9%2FVTWy0353tSoQyw95SjYWqKOD78QIhAMazz3O8bhrE5ky7UaAnsp9vLJIOaOJz7NStcl%2F0FIWsKv8DCCIQABoMNjM3NDIzMTgzODA1Igy9ul9Z3O1JUPynBIgq3APAS5WuKGRrqGf8Rn1kuW4tD1X93%2Bw7SOyouwm7n%2BokIHLm9zhCvAl01rIx0hH11XNlxRe6mGCQ%2BM4BKUdPxjagPy5rVWDCSsDK%2Fgk8aCa0G0j3U1RsyzycR4hBl8%2B0HP9rw6c1Q%2BO12eRPjPEKcm7IfKhqY5b61or5gUlpL87ypOy3QgY0YtdRzUTGeVp6hVBpyzKPWR4EZN4jvai6ZAL7JHDTrfcGI25I3u4LSPdXTxIrTK26YWCw2Q33l4bRcqjmNkDNduxUQZiKxr99aHzBoSumkHKwr7l8Ty9Ev8XUuPL9Zd7mzCEIFcuknv6IseP7FXN2H1PAarzOPgqhRg0qurvpxV1c0fGAWKxZApxPKTpN5vXMiJ1j2B1v9ThdKntmJzY4UgAOeejooVQIHWOtproeF%2FbyQOHVdUmviQDIqyfbxAoh4GxlY5D2pKDeodJtFqa9t2sUBrdZo3eVtxq%2B8TiSS5odCPWWLS3CwxiJRKl9MYOCP6ZqjssuYX%2Ff1EM0IDUfpifeTvUMg6xmIcmRLBUzzsQQgDLungTaSsf5lxJBmMqUJdPvROfR52odEhAXpA07CNjo9H5JnGa%2FaTXNSGwAOFZNpYmexWlPyacor%2B0roUT0hhsbTVl9mTC3nr7JBjqkAYK23KEbN0GQ6CHavEGscayhVN4i%2FJ136yPivACQKrq%2Fs%2Btc3uX5xoSkb0lSFllvasoz9zjHlVF9MVz2vn85onKUSL%2FXyttO%2BjTXwXO8kwIZmYuvqHhQklFGSOwKjZxeNoypP7ZImaSCieh40C%2BwVh1RmA58lnzVflhnSYUtiP%2F8sWRGi5Ifni75%2FL8dQHrSt0lo%2B%2FxGnKA9pgDmoOtibtbc0SHG&X-Amz-Signature=0faf932532f6305ff132bd184f1bc5c4e8c9a163a47e30b9e9062d7c58cd43fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD5Z5ZKK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCG8Q%2BjVvowTRPbh9%2FVTWy0353tSoQyw95SjYWqKOD78QIhAMazz3O8bhrE5ky7UaAnsp9vLJIOaOJz7NStcl%2F0FIWsKv8DCCIQABoMNjM3NDIzMTgzODA1Igy9ul9Z3O1JUPynBIgq3APAS5WuKGRrqGf8Rn1kuW4tD1X93%2Bw7SOyouwm7n%2BokIHLm9zhCvAl01rIx0hH11XNlxRe6mGCQ%2BM4BKUdPxjagPy5rVWDCSsDK%2Fgk8aCa0G0j3U1RsyzycR4hBl8%2B0HP9rw6c1Q%2BO12eRPjPEKcm7IfKhqY5b61or5gUlpL87ypOy3QgY0YtdRzUTGeVp6hVBpyzKPWR4EZN4jvai6ZAL7JHDTrfcGI25I3u4LSPdXTxIrTK26YWCw2Q33l4bRcqjmNkDNduxUQZiKxr99aHzBoSumkHKwr7l8Ty9Ev8XUuPL9Zd7mzCEIFcuknv6IseP7FXN2H1PAarzOPgqhRg0qurvpxV1c0fGAWKxZApxPKTpN5vXMiJ1j2B1v9ThdKntmJzY4UgAOeejooVQIHWOtproeF%2FbyQOHVdUmviQDIqyfbxAoh4GxlY5D2pKDeodJtFqa9t2sUBrdZo3eVtxq%2B8TiSS5odCPWWLS3CwxiJRKl9MYOCP6ZqjssuYX%2Ff1EM0IDUfpifeTvUMg6xmIcmRLBUzzsQQgDLungTaSsf5lxJBmMqUJdPvROfR52odEhAXpA07CNjo9H5JnGa%2FaTXNSGwAOFZNpYmexWlPyacor%2B0roUT0hhsbTVl9mTC3nr7JBjqkAYK23KEbN0GQ6CHavEGscayhVN4i%2FJ136yPivACQKrq%2Fs%2Btc3uX5xoSkb0lSFllvasoz9zjHlVF9MVz2vn85onKUSL%2FXyttO%2BjTXwXO8kwIZmYuvqHhQklFGSOwKjZxeNoypP7ZImaSCieh40C%2BwVh1RmA58lnzVflhnSYUtiP%2F8sWRGi5Ifni75%2FL8dQHrSt0lo%2B%2FxGnKA9pgDmoOtibtbc0SHG&X-Amz-Signature=bcd30aa191a4404334a4348129b9fab73e3a8aeef0d7300204d5046b7f404db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

