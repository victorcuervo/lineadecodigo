---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R74IYWJ7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8J61WZwbuJEfM0XFOsXom9CUhP6MaelQrKYYDRVRIgQIgV7kpB%2F4YtFGlYEvXwVkNfrDwx1vzCGERVj3cOQBe0JAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPkJjnr7ufvgYExVGCrcA5kFVpMJk6nwW%2F6pxyODC0EJYFsibrWbfKNLiQB1A2XfCLKcY%2BbZNvFemmHrq9u47VNe2RbxKnJf3IpQ9mz2wJ9RVngclfPVL0CAaXpsbBvwx6fowOtBnkJ5R%2BvchoSQJ9x4zObcFRLizW%2FeksoLmMyiDdDoPxunJXU7Q1GBTvoLhfTGTzqhS51TbNm3%2BoP%2F89I09xjy5ZVV%2BEcw%2FFWs4ajaKSP1zbH0SUxrfPWJ5PXVyou%2FoojRpd6XBOnvzJAgW%2BMPQsS1pLWDypxXiLx1keRmr270L7EgMiOywREBpdcHxlcqMTzjuyXVSdamw89tydx%2FPR6HRtF9REpCZu1LGWtFGDoK%2FlFymjXZm6eZSMJglK2kO0S6bsZi3XlzrFh4VvaoMyCIQNORCWgRz3Mpd5%2Fc1brBi2GDdmEOidLj0ukMqn3ZV23QT3DkUq1JeboPGJ4ct0mUJoP1SWDzEj0t6gQfU6LdOHefA2CcT%2Fd8p8KJoeA%2FNuE27xAZ1RdyAX3Nv5%2FnV5QcU2vBpBYe9p8tZOVgSfPIE2FUwrFvyxA%2Fgsk50m7Oh4BKogq8hBhqGZGDOMtr7TNVg5nsiB8eh4cF2sUPi8DqzyhwN4js5lnn9DTuIbEcDPPfYIeV6kBrMOrSyskGOqUBoPgnC5xqZMRm3v1om%2BW7k9p0U4Hw%2FgHKs32HsjYCJr1Rd8DaSrgpQldFknfl3rc4xECCLhfniYygzguAcyRc%2FBoY%2FietqoAR8580vtT1e1n1de%2BlLO%2FrtUu%2Bbg28j8IZf13mu0bpNcSNCKQJHX4twHeOvrXs262P8sWXWBVujIugNUvyC1t6rB%2FbCK%2BCWYN2igIieu351KWikhzSP68kO%2F0WzEC5&X-Amz-Signature=cf60ee130bb6974da9a76d513071e42bf94c3fdd17a509ff51d2c4b78a2ca513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R74IYWJ7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8J61WZwbuJEfM0XFOsXom9CUhP6MaelQrKYYDRVRIgQIgV7kpB%2F4YtFGlYEvXwVkNfrDwx1vzCGERVj3cOQBe0JAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPkJjnr7ufvgYExVGCrcA5kFVpMJk6nwW%2F6pxyODC0EJYFsibrWbfKNLiQB1A2XfCLKcY%2BbZNvFemmHrq9u47VNe2RbxKnJf3IpQ9mz2wJ9RVngclfPVL0CAaXpsbBvwx6fowOtBnkJ5R%2BvchoSQJ9x4zObcFRLizW%2FeksoLmMyiDdDoPxunJXU7Q1GBTvoLhfTGTzqhS51TbNm3%2BoP%2F89I09xjy5ZVV%2BEcw%2FFWs4ajaKSP1zbH0SUxrfPWJ5PXVyou%2FoojRpd6XBOnvzJAgW%2BMPQsS1pLWDypxXiLx1keRmr270L7EgMiOywREBpdcHxlcqMTzjuyXVSdamw89tydx%2FPR6HRtF9REpCZu1LGWtFGDoK%2FlFymjXZm6eZSMJglK2kO0S6bsZi3XlzrFh4VvaoMyCIQNORCWgRz3Mpd5%2Fc1brBi2GDdmEOidLj0ukMqn3ZV23QT3DkUq1JeboPGJ4ct0mUJoP1SWDzEj0t6gQfU6LdOHefA2CcT%2Fd8p8KJoeA%2FNuE27xAZ1RdyAX3Nv5%2FnV5QcU2vBpBYe9p8tZOVgSfPIE2FUwrFvyxA%2Fgsk50m7Oh4BKogq8hBhqGZGDOMtr7TNVg5nsiB8eh4cF2sUPi8DqzyhwN4js5lnn9DTuIbEcDPPfYIeV6kBrMOrSyskGOqUBoPgnC5xqZMRm3v1om%2BW7k9p0U4Hw%2FgHKs32HsjYCJr1Rd8DaSrgpQldFknfl3rc4xECCLhfniYygzguAcyRc%2FBoY%2FietqoAR8580vtT1e1n1de%2BlLO%2FrtUu%2Bbg28j8IZf13mu0bpNcSNCKQJHX4twHeOvrXs262P8sWXWBVujIugNUvyC1t6rB%2FbCK%2BCWYN2igIieu351KWikhzSP68kO%2F0WzEC5&X-Amz-Signature=6e0f0c17f24dc9d0e287ac9141a77d32c4484fba4934139eb4cd2fdbabfec18e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

