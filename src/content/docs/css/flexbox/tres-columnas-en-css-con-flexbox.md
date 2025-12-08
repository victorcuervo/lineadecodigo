---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVAZIEZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE1xv%2B%2FK6QNPi5DxRsioykfR5oIPgnX6v%2Fd%2Bf5uxBLNAiB5ujO2iy21zK9QhssutyeA8uyo5ZDlhLgHrsU2bYmqCyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3JfN0vG1fFKy1NqHKtwD4HMiEN%2BkqDzkAaBsQVdw2z18lrlJkMEvpTKffIzyh2XuU7AKOU04xhxnrOTKtuQdsmjLNHVfQFQ%2FwcIurEzbWdcDhoZHwORgTKvmdXCuOv5%2BX8YhWFWLwIHCWN1UVAuQ0TxOlsEw2DvEvecK4Fz3vj979ZAVYkWxZnAh%2FFS6RhcHYa5rRochbfR3cL8jBn46i97r0rR8usbhNC4MaviwGaEfbsqAEi5IqJEc%2FESVxtUmI%2Bhy4zmEz1Ba47RcT%2BwBb1alOycqlcneGkwik9Q248qXOqH8xvV0NDMABLxjWvEhjRuCRVJOGeTLZBJ1xav9vNkavDLdeFlzT2jqRxKdyN%2BNMWRvby%2F1uK8QsUkAvpzoHzOdTYKt7t4sgA8YrWZHASjDXlxWrP9irttJSA7uFngewrcLjb5tpoYxx1ESQD%2F0k%2FGnSTiKT%2FMFPvmOnvVEETx6fwTByibmLPzLpeWZSqfv7B7wr1PpBZxIMHoV1I6DQuvdM6JmkgdsPjQURhD7V1Oo3ppiTjgS81IQgiwQSdPttF7IBjUSb%2BL%2F8xWcY2q%2BSYciTIAfe48DLyJymbwbuF1gX20F%2Bfw80LLtKxKZTySnbY0qnLB61CfoobD0bRsyylfGU9RirsKta0Ew5uTbyQY6pgGPyo8jX2hAxhstXu%2FGZM3jedlkCHF5OUZWVo9UM%2FD3Et4DzW4eioIVUS6b8Arix4PqbRn81aIBbMjh02wakwf6TDIwmv298Mju%2FET0D7veRz84eTVfTA%2FmanfwAwvPvrLcp7ByfT02Uvuvxm4EGzoX6NptiRd6yqtTuBEzB8aT2MGUKTRIbb3NP2E%2FxvWLGzu71lMizRQiZduJps1iCXlZytc9Vw3G&X-Amz-Signature=38d2039fcff0eccc6a5c896157877d018b12b4212b8d113dbb93bebd32f3d1b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVAZIEZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE1xv%2B%2FK6QNPi5DxRsioykfR5oIPgnX6v%2Fd%2Bf5uxBLNAiB5ujO2iy21zK9QhssutyeA8uyo5ZDlhLgHrsU2bYmqCyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3JfN0vG1fFKy1NqHKtwD4HMiEN%2BkqDzkAaBsQVdw2z18lrlJkMEvpTKffIzyh2XuU7AKOU04xhxnrOTKtuQdsmjLNHVfQFQ%2FwcIurEzbWdcDhoZHwORgTKvmdXCuOv5%2BX8YhWFWLwIHCWN1UVAuQ0TxOlsEw2DvEvecK4Fz3vj979ZAVYkWxZnAh%2FFS6RhcHYa5rRochbfR3cL8jBn46i97r0rR8usbhNC4MaviwGaEfbsqAEi5IqJEc%2FESVxtUmI%2Bhy4zmEz1Ba47RcT%2BwBb1alOycqlcneGkwik9Q248qXOqH8xvV0NDMABLxjWvEhjRuCRVJOGeTLZBJ1xav9vNkavDLdeFlzT2jqRxKdyN%2BNMWRvby%2F1uK8QsUkAvpzoHzOdTYKt7t4sgA8YrWZHASjDXlxWrP9irttJSA7uFngewrcLjb5tpoYxx1ESQD%2F0k%2FGnSTiKT%2FMFPvmOnvVEETx6fwTByibmLPzLpeWZSqfv7B7wr1PpBZxIMHoV1I6DQuvdM6JmkgdsPjQURhD7V1Oo3ppiTjgS81IQgiwQSdPttF7IBjUSb%2BL%2F8xWcY2q%2BSYciTIAfe48DLyJymbwbuF1gX20F%2Bfw80LLtKxKZTySnbY0qnLB61CfoobD0bRsyylfGU9RirsKta0Ew5uTbyQY6pgGPyo8jX2hAxhstXu%2FGZM3jedlkCHF5OUZWVo9UM%2FD3Et4DzW4eioIVUS6b8Arix4PqbRn81aIBbMjh02wakwf6TDIwmv298Mju%2FET0D7veRz84eTVfTA%2FmanfwAwvPvrLcp7ByfT02Uvuvxm4EGzoX6NptiRd6yqtTuBEzB8aT2MGUKTRIbb3NP2E%2FxvWLGzu71lMizRQiZduJps1iCXlZytc9Vw3G&X-Amz-Signature=0ad010d11355a43fed1295b75555964a133338ab2ff6d5bd11af8c2cf712e2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

