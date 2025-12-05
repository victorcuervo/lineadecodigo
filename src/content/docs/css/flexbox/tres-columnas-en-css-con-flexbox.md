---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJURLM3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoZcAMlU0HkkWJjVrnsnrcjRqHdA5vDsR%2FDAjW2JliLAIge0pNxGSkSMsLg517Sp3Eq0tUZDKnaCknb7%2BR2JDoF2Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKHz0aUM2EedWaKOXCrcA6BiLD%2BcYe%2FjaX9j1GSR%2Bm7%2FFBoYSbJn28HEzIcBbOUmYcAOxLCWMr%2BJwzKIBGwZRLOeau9VCl6pzOC9vSYjX8N3lYaogxMPW3rLOFqMrStgi2cHLsnkS2VOUxgK1tFajkHhVo4OHfSLl%2FDyDfgf6HrWRVUABI4dPuvFLf79IF9RX%2FHyXBb3VRPRzuK0IS%2Fkrv0mC0U%2BLQfLVGbtGzGTWwUj%2BY%2BGpnHxOLt0C4QbG7wudRAzJwesd%2FjUbp8mu7T2mTAVvSY5WuHc65zvEYfL3HxiU8xe5LujZS8vGaSOSlirR9FUBip%2BiyM2Rc4jb18s%2FPcAm2tUQd6MtF%2FuSgF%2FK4SC1rwj%2BpBTwk8ts4La%2B%2Fd9I3XFnW6v2FICpkTd1gblmsutD63V3dDBMe8mZuuiEM2S1dWX7IPg7tAlrOfw6tNYo%2BcVD1oYnrHTyN8FjBwW96LHqK3D1BvCEVs%2FDB%2Bol83%2FLCx03OQU9uYX%2BMijuBh0Y6qM%2BGl9InbxGrzoSHQSVbtvI%2Bq2SEcpTBDpdAFRhd6nr4Y5yERQ3layToTmjLRojJVMbPHoST343nctBkg%2BdKzqNt9hbndsQvLag%2Bhe%2BiBEc6lENaIEFys0n1SKsHUpzQia36w7tR0yQ1ISMJjIyskGOqUB9sBFvAjlKMUwd8SmV82VznPq0xFGomRI3MtBB9NKe9ZX4xazQlv3CQTXKsrnsk4QTNzSduj1jNqXWy3avyHE%2BsQ6TSCrIOdsmq6Kj1XY6%2BYl3AplCT5kmNVzUO34y0xi%2Bkn9qOSRiEtcGdOhdJs%2BZc61oSxikrOkb0Nv8ZBGAqMq6CPPNQ5LGh0PRRqTG3236r3icDizK%2FZ6MHHVDgC7qPWtt%2FG6&X-Amz-Signature=c92044a9316644465f582939d2693da7643864f2cf8ca8a349109c4c5955dea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJURLM3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoZcAMlU0HkkWJjVrnsnrcjRqHdA5vDsR%2FDAjW2JliLAIge0pNxGSkSMsLg517Sp3Eq0tUZDKnaCknb7%2BR2JDoF2Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKHz0aUM2EedWaKOXCrcA6BiLD%2BcYe%2FjaX9j1GSR%2Bm7%2FFBoYSbJn28HEzIcBbOUmYcAOxLCWMr%2BJwzKIBGwZRLOeau9VCl6pzOC9vSYjX8N3lYaogxMPW3rLOFqMrStgi2cHLsnkS2VOUxgK1tFajkHhVo4OHfSLl%2FDyDfgf6HrWRVUABI4dPuvFLf79IF9RX%2FHyXBb3VRPRzuK0IS%2Fkrv0mC0U%2BLQfLVGbtGzGTWwUj%2BY%2BGpnHxOLt0C4QbG7wudRAzJwesd%2FjUbp8mu7T2mTAVvSY5WuHc65zvEYfL3HxiU8xe5LujZS8vGaSOSlirR9FUBip%2BiyM2Rc4jb18s%2FPcAm2tUQd6MtF%2FuSgF%2FK4SC1rwj%2BpBTwk8ts4La%2B%2Fd9I3XFnW6v2FICpkTd1gblmsutD63V3dDBMe8mZuuiEM2S1dWX7IPg7tAlrOfw6tNYo%2BcVD1oYnrHTyN8FjBwW96LHqK3D1BvCEVs%2FDB%2Bol83%2FLCx03OQU9uYX%2BMijuBh0Y6qM%2BGl9InbxGrzoSHQSVbtvI%2Bq2SEcpTBDpdAFRhd6nr4Y5yERQ3layToTmjLRojJVMbPHoST343nctBkg%2BdKzqNt9hbndsQvLag%2Bhe%2BiBEc6lENaIEFys0n1SKsHUpzQia36w7tR0yQ1ISMJjIyskGOqUB9sBFvAjlKMUwd8SmV82VznPq0xFGomRI3MtBB9NKe9ZX4xazQlv3CQTXKsrnsk4QTNzSduj1jNqXWy3avyHE%2BsQ6TSCrIOdsmq6Kj1XY6%2BYl3AplCT5kmNVzUO34y0xi%2Bkn9qOSRiEtcGdOhdJs%2BZc61oSxikrOkb0Nv8ZBGAqMq6CPPNQ5LGh0PRRqTG3236r3icDizK%2FZ6MHHVDgC7qPWtt%2FG6&X-Amz-Signature=9e153f6e4c7c83df72d42df5cadc78e62f85ab03d847e136deec71102de8d79a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

