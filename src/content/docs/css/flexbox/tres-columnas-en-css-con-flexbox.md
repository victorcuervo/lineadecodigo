---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2UPNL7K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6T1JA4%2FDuEKrM%2BE4QEBxwxfjjshb3QQCPDTM2guBS8AiEA%2FqpcudTOq1srTTTJuWEbAzzFLV4eEpwyc7%2BwXHhOq94q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDDAqNNg69N6a%2Fh8WzCrcA%2FR%2Bbh4fPsVdmqItricA9%2FhNOjTPvlQKSQ3%2BFPUXw833ZuMCz38zmhOuVHdSH5r8O%2F0%2FvbF%2BwkCyMxO6WuQb3kmGO0XeJQYDfzrQlZeXRKR4G%2FY%2BNPYn3Yte5FdA1KjebSILhvdWrA18iTcrnnaxeE9YSuQT1vjrOlUUJ3aew6DAX6TjH97ZNvx8AzCV7OMTLfLmMyRDRJTzvKUVjaAilH5pdzstBC2nzU28uhVWB%2FOIi0e0Hst5O0pah7iAAIr9zoWVxI8WfFhFCVEc%2B19LwlrBUfpAPzRwVASOs%2BblJGualxuTJnzXNE2Bhi4M75xgqzoQs7ov1It%2BGWbERc37UUzIZ2WHtcfVaCJuYdGBMLghFUvCBB3sP57U2S1LsewhKJ%2FP5V7Eit60MGJM%2BNUrTcQTPBkrKz%2ByJph1CDiZkhEHu56eOZmEe58tPR4WOT4MQWWXU7BVM4iaaUI84c1j0v0ewy5T3v%2BKN4cOnI0WGYOTMHdNlRhVIqFaOHXo%2FvxtizrlB6d4EGdzom9dYxlD3MZvSSEJNGASxEaBvep%2BFiNpFetqMeHj7dnesfppryqHwbNsnCHHMmHGGNSlwhiMmBD%2FVla5EIK8r%2BO8kq1wyJEq8UhG%2BJOqMvhAhYBwMNWJ0MkGOqUBz%2BEJD3Nhsp66RFTQAT2ROfPJAkPkUsH3wz7D%2B96FhhY86trxNFkCTHNaWa6uztK4%2FdU72LAWs2btbML8%2BtKtY3ooGUGikfusexO3qjAPF6jxERufPGkTOuiFK3Z1QoeIPQI9UTqW%2FGl2HH8hpe3O9dPZdmaMax22FWVx9UEqKm6Tnbq%2FsPjQvI8FvI%2FD2gFz%2FSlsFIs%2BBH806XDPWcmD1xplByvz&X-Amz-Signature=7a9037587b1d70d258a5277783b149b3b0e2cfedfc4cb056ba227b6793ccef72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2UPNL7K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6T1JA4%2FDuEKrM%2BE4QEBxwxfjjshb3QQCPDTM2guBS8AiEA%2FqpcudTOq1srTTTJuWEbAzzFLV4eEpwyc7%2BwXHhOq94q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDDAqNNg69N6a%2Fh8WzCrcA%2FR%2Bbh4fPsVdmqItricA9%2FhNOjTPvlQKSQ3%2BFPUXw833ZuMCz38zmhOuVHdSH5r8O%2F0%2FvbF%2BwkCyMxO6WuQb3kmGO0XeJQYDfzrQlZeXRKR4G%2FY%2BNPYn3Yte5FdA1KjebSILhvdWrA18iTcrnnaxeE9YSuQT1vjrOlUUJ3aew6DAX6TjH97ZNvx8AzCV7OMTLfLmMyRDRJTzvKUVjaAilH5pdzstBC2nzU28uhVWB%2FOIi0e0Hst5O0pah7iAAIr9zoWVxI8WfFhFCVEc%2B19LwlrBUfpAPzRwVASOs%2BblJGualxuTJnzXNE2Bhi4M75xgqzoQs7ov1It%2BGWbERc37UUzIZ2WHtcfVaCJuYdGBMLghFUvCBB3sP57U2S1LsewhKJ%2FP5V7Eit60MGJM%2BNUrTcQTPBkrKz%2ByJph1CDiZkhEHu56eOZmEe58tPR4WOT4MQWWXU7BVM4iaaUI84c1j0v0ewy5T3v%2BKN4cOnI0WGYOTMHdNlRhVIqFaOHXo%2FvxtizrlB6d4EGdzom9dYxlD3MZvSSEJNGASxEaBvep%2BFiNpFetqMeHj7dnesfppryqHwbNsnCHHMmHGGNSlwhiMmBD%2FVla5EIK8r%2BO8kq1wyJEq8UhG%2BJOqMvhAhYBwMNWJ0MkGOqUBz%2BEJD3Nhsp66RFTQAT2ROfPJAkPkUsH3wz7D%2B96FhhY86trxNFkCTHNaWa6uztK4%2FdU72LAWs2btbML8%2BtKtY3ooGUGikfusexO3qjAPF6jxERufPGkTOuiFK3Z1QoeIPQI9UTqW%2FGl2HH8hpe3O9dPZdmaMax22FWVx9UEqKm6Tnbq%2FsPjQvI8FvI%2FD2gFz%2FSlsFIs%2BBH806XDPWcmD1xplByvz&X-Amz-Signature=0eda6caeb38db56d6c9643b2310f354ac19396b28fba6afbf681db4115355fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

