---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LCYNTG4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIGwoD6aKdjpTiyRcu0z0bdXHShPCduD2b%2Fxe6En1NexqAiEAyEJOJ310CxsRHmVJqLdSd3v7ypYDjHOFGujnlX3jSH4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBWwtUalGQ33fsibVCrcAyu3pf5KH%2B%2BY%2FgYCb3fMr4i%2B6eF0qLi8q74Cvt4IQEI8xKvJC6%2FbmfyQ9Qe27yIM8eFf6nr%2Fmy9Zua%2FV%2FlntzIiOxzd2P6zYW7yhokVUarknqukgpfGH4tIpQQmEjEePb8k92RL7L1cp3mVNqDijCTeiT9pzf6nKv5t8G612%2BS%2FzxdDR2qERclg8rGG2O24fcNGRhCc9g%2BW7Cog0J6rjV04z8NPnHDaCIzsy05MBPDf2wDBub7Fr55F9jwyGUxjHqmXTS3CpQDurP95zFYyZ%2FdI4em0ga8x42RofmGHDkbstS%2B4bZbuKpE%2BNG40jbpTK%2FUR7awc5ZOtPP4J1NK4oNiHtUTh0vNHK1Q41ft2Jzn888lsr5xSbn1wSy6rGbXMVE5Hg52Uw4ODsBlx2rLm%2F0z8hjpqJL5pIq5veuMXv%2FMypyPsetz4Krtni%2FZ5qeppv6Oy5YjVLwYIg9Vf10R0lvUGpLDiHUawaYVGk4jxXHBfl0cGVT1DfrB3HiVuFPMUBNtjZugajLojL2BJUy1AJWRz5sXiLkZHM6eifBQW643O3mLowsD4Td7oMgPesIoagzekT%2BYbBts%2B5G%2F3jbGdaqdjt6ytTAC8%2BTIxtDm%2FVWVQIKNmlzMxLkoL08TASMOuUw8kGOqUBlnzgSbzW0mmk9%2BefIEMGlimhU7VsR7%2FpR4FN%2FbAFNN6ccD2sNQ83YRSmb%2B74NwPUyek%2FSn8NNGUaH1V7hTkuSrAft3nueKp%2BxZ14T66W8nrNElvwCT5IDqKPKX5T7O%2Bcd7o%2Bz6ck%2BR4sY5GdJwFQ2XG7B7hCq8TITeSoROqAXJNR1i2TS%2FuFIGp3R89VvKP4NW4PBzjoESaAs9F63P%2FPQP4LIZkG&X-Amz-Signature=fdf86f354900a851b45185133e4a463b4ad0dd15ce9c248406ce1f8ad36fb6be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LCYNTG4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIGwoD6aKdjpTiyRcu0z0bdXHShPCduD2b%2Fxe6En1NexqAiEAyEJOJ310CxsRHmVJqLdSd3v7ypYDjHOFGujnlX3jSH4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBWwtUalGQ33fsibVCrcAyu3pf5KH%2B%2BY%2FgYCb3fMr4i%2B6eF0qLi8q74Cvt4IQEI8xKvJC6%2FbmfyQ9Qe27yIM8eFf6nr%2Fmy9Zua%2FV%2FlntzIiOxzd2P6zYW7yhokVUarknqukgpfGH4tIpQQmEjEePb8k92RL7L1cp3mVNqDijCTeiT9pzf6nKv5t8G612%2BS%2FzxdDR2qERclg8rGG2O24fcNGRhCc9g%2BW7Cog0J6rjV04z8NPnHDaCIzsy05MBPDf2wDBub7Fr55F9jwyGUxjHqmXTS3CpQDurP95zFYyZ%2FdI4em0ga8x42RofmGHDkbstS%2B4bZbuKpE%2BNG40jbpTK%2FUR7awc5ZOtPP4J1NK4oNiHtUTh0vNHK1Q41ft2Jzn888lsr5xSbn1wSy6rGbXMVE5Hg52Uw4ODsBlx2rLm%2F0z8hjpqJL5pIq5veuMXv%2FMypyPsetz4Krtni%2FZ5qeppv6Oy5YjVLwYIg9Vf10R0lvUGpLDiHUawaYVGk4jxXHBfl0cGVT1DfrB3HiVuFPMUBNtjZugajLojL2BJUy1AJWRz5sXiLkZHM6eifBQW643O3mLowsD4Td7oMgPesIoagzekT%2BYbBts%2B5G%2F3jbGdaqdjt6ytTAC8%2BTIxtDm%2FVWVQIKNmlzMxLkoL08TASMOuUw8kGOqUBlnzgSbzW0mmk9%2BefIEMGlimhU7VsR7%2FpR4FN%2FbAFNN6ccD2sNQ83YRSmb%2B74NwPUyek%2FSn8NNGUaH1V7hTkuSrAft3nueKp%2BxZ14T66W8nrNElvwCT5IDqKPKX5T7O%2Bcd7o%2Bz6ck%2BR4sY5GdJwFQ2XG7B7hCq8TITeSoROqAXJNR1i2TS%2FuFIGp3R89VvKP4NW4PBzjoESaAs9F63P%2FPQP4LIZkG&X-Amz-Signature=1097831154a3fd7848a09439d51d1eb81413cab59fef111adaa23598294ea9ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

