---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NR3SXAA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVo8VCs1FxH8RnVz%2BhrbNLLaHEcVmHt8MQCbpnBJlODAiEA6TyRYTvQAeoI419FrU4Ywses1klTzHeNS1YlAG90IY8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9Bw4qcbgJN5Pm26ircA8x8qqn9%2BdPln%2BB3xNrG2aPu4%2F9lt7SzByWBoEq8j0Gd9FoAtlXz8ke9OOz7XflBPCDrwOUgFqa31Wz0HZbuog0bUyVI3OA7Ak9BDnZIYgxu%2F8%2BDiC81xFzy%2FOMR1hYWQcQVf7Xb6qT7TyQxbP89qWEpXWu%2B27pUl%2B2Q89jFrGVNCFeNhZ31tid5rdDa5PcQ83YYugBbqUyontiALXcDhQYlh6deODWMphqeVosTcM0DRGhkNcHikNBguR8O7gADF%2F%2B0bcDxCnQ9m3P6KgKzTH0uMieaMTAgjS2KHyPne%2Fhavimcgmhikw0BOtDj2wdYWzU0fEQmiBvuemrJT%2FmNUcFFm3fnoJZTELKvltliCLzIWfz5pcAM5QT4Iy%2FRf5VQInqKAaWoVz1maCDHezj8A7cPOXZlkP1rxqkq8%2BQFxedpWWed0638s%2FyGKCV2iBTBIdiYVF2lcPdZRYUtcSKSJfJ%2FloJdIJuVu8QViE17OmB1fCgsro69SHCuVbmFg%2FS85BgECwxmXiRyla1m9uSp2vkJubfla62rKmzZI125A9ec4roQlQgTWi8lu7mMoGuRrafeVSH%2FAIcvqdYO7kS%2Ben3vSwPxdpYKNwQhpvvdPjV2CnYCJqWifsnA5ZUvMJGd1MkGOqUBdXcFDLoMVBlVxkV52vfgSeN0gTAB27UdYRsrVL9ME1eP7PNFpEnrbQwASAwt0tfJc52MUXKHgH5hcefNW%2FsV%2BF8nDTgdv0hRN79x2%2BLsyd2idpjYqquCLSdvfsOxQKAtjxRwIL7y8P%2BLTqiXC2ihbTVieedTq1nejfHYgyeMU8A5%2B7E9HhqGQcsZVDpaz5NCgQguxDvirUDUPx%2FBZB94D%2BT8m6is&X-Amz-Signature=06cfc25f470549bac224eeb90591b65816fd388dbff86ed59131a5b5472a3036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NR3SXAA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVo8VCs1FxH8RnVz%2BhrbNLLaHEcVmHt8MQCbpnBJlODAiEA6TyRYTvQAeoI419FrU4Ywses1klTzHeNS1YlAG90IY8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9Bw4qcbgJN5Pm26ircA8x8qqn9%2BdPln%2BB3xNrG2aPu4%2F9lt7SzByWBoEq8j0Gd9FoAtlXz8ke9OOz7XflBPCDrwOUgFqa31Wz0HZbuog0bUyVI3OA7Ak9BDnZIYgxu%2F8%2BDiC81xFzy%2FOMR1hYWQcQVf7Xb6qT7TyQxbP89qWEpXWu%2B27pUl%2B2Q89jFrGVNCFeNhZ31tid5rdDa5PcQ83YYugBbqUyontiALXcDhQYlh6deODWMphqeVosTcM0DRGhkNcHikNBguR8O7gADF%2F%2B0bcDxCnQ9m3P6KgKzTH0uMieaMTAgjS2KHyPne%2Fhavimcgmhikw0BOtDj2wdYWzU0fEQmiBvuemrJT%2FmNUcFFm3fnoJZTELKvltliCLzIWfz5pcAM5QT4Iy%2FRf5VQInqKAaWoVz1maCDHezj8A7cPOXZlkP1rxqkq8%2BQFxedpWWed0638s%2FyGKCV2iBTBIdiYVF2lcPdZRYUtcSKSJfJ%2FloJdIJuVu8QViE17OmB1fCgsro69SHCuVbmFg%2FS85BgECwxmXiRyla1m9uSp2vkJubfla62rKmzZI125A9ec4roQlQgTWi8lu7mMoGuRrafeVSH%2FAIcvqdYO7kS%2Ben3vSwPxdpYKNwQhpvvdPjV2CnYCJqWifsnA5ZUvMJGd1MkGOqUBdXcFDLoMVBlVxkV52vfgSeN0gTAB27UdYRsrVL9ME1eP7PNFpEnrbQwASAwt0tfJc52MUXKHgH5hcefNW%2FsV%2BF8nDTgdv0hRN79x2%2BLsyd2idpjYqquCLSdvfsOxQKAtjxRwIL7y8P%2BLTqiXC2ihbTVieedTq1nejfHYgyeMU8A5%2B7E9HhqGQcsZVDpaz5NCgQguxDvirUDUPx%2FBZB94D%2BT8m6is&X-Amz-Signature=c8fa1c3854c418b917b998d1f5712b455c9fd7b4c7f1a9474ca8eca034b55c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

