---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKN7TGN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPwQv9FSmcQiBaoZar%2BNaBkSNb0dvvL%2FwdV%2BfqivcCSgIgYI3pJmRKhRzTIMwgZFq3hZctap4MKr9Jg%2BkuRbmkRIsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGXX6GyKC5SsS%2FMybircA5xLOrnTMM0fpQb7K8ANWYdeIkrYDs5VZc6DY4f5Z1LZ7AC%2Fz3rJtV0q9qpbuabnchjIfvW52tk5MCzKuicLM%2BpnsLEv9C3CgXL6SJHUmRgoXqkDakHqYv3By%2BOA1w3dZsgZuomuAWDaM0a5fOBCfaFEhXXR%2F2nT3G8R9gVbKNWtLc9gAL2tszt2zrsnpwrQWF0lsIeTUPJQQwCqMBW8XKWLA3UHq9K5ZNS2JumSvy65VoI7RWKsEERzWWndLmGkMNi9U%2FK4xFdN01VOOn1Bm46Lr2FDTWwAIr5oOdIZEwCFeoX32jDP7Dpqqug%2Fkg9acPFadeogQ9%2F3lxiFSQL%2FMR9%2FwVFSBJBJbTNFYJFo%2BhNc%2Fri1koOkHf5Nh%2BmSOpNhpu%2BmgiGRibt%2BOqNE9knXwlKOgA%2B1O3Xm6jjl%2FOSUc0TSLdqFsfPMrLwhOPr04%2BtaPjJ0vVLJem7D8bEgN3xIltmU1VuH%2FfiMuc04MipN8pEl%2FHEBFCsq8iUpaq0PL0VgWhSDUEKpGmMQ3dQYTjSLysXp50sRCcjOp2P8721csVxZqSC5QmkyP7r760wlnbQsZkMV2do%2FwawbeUs2F6tpH0uIB20A3j%2FvVAwobCHCkdF29SPPc92AjZkG7NbWMPWm0MkGOqUBVDIHlObtYBBT9RV3Q6gSFV4ZFRbgrbpWeXfOl132i8qiTwOr71eXzbG0yYTQ%2Buq2LSEAwTJot4cdkiulgOIGgutooRDff4d9QxVtRjVUOOYsEyUn8UkCdHWaHxmnPIoDVHmZgC%2B5tNARoEICKnjVvT%2BZslGMRJeWCxeEiYEM4ghRUKld25cxjhIawfi9Yux03pDNtd6rV4DQArKLAO3aCUl2jMUL&X-Amz-Signature=b0a86311d5866d496f659ce2d33b0bb5118a8c983c00ada5bb3fb8b7014974b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKN7TGN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPwQv9FSmcQiBaoZar%2BNaBkSNb0dvvL%2FwdV%2BfqivcCSgIgYI3pJmRKhRzTIMwgZFq3hZctap4MKr9Jg%2BkuRbmkRIsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGXX6GyKC5SsS%2FMybircA5xLOrnTMM0fpQb7K8ANWYdeIkrYDs5VZc6DY4f5Z1LZ7AC%2Fz3rJtV0q9qpbuabnchjIfvW52tk5MCzKuicLM%2BpnsLEv9C3CgXL6SJHUmRgoXqkDakHqYv3By%2BOA1w3dZsgZuomuAWDaM0a5fOBCfaFEhXXR%2F2nT3G8R9gVbKNWtLc9gAL2tszt2zrsnpwrQWF0lsIeTUPJQQwCqMBW8XKWLA3UHq9K5ZNS2JumSvy65VoI7RWKsEERzWWndLmGkMNi9U%2FK4xFdN01VOOn1Bm46Lr2FDTWwAIr5oOdIZEwCFeoX32jDP7Dpqqug%2Fkg9acPFadeogQ9%2F3lxiFSQL%2FMR9%2FwVFSBJBJbTNFYJFo%2BhNc%2Fri1koOkHf5Nh%2BmSOpNhpu%2BmgiGRibt%2BOqNE9knXwlKOgA%2B1O3Xm6jjl%2FOSUc0TSLdqFsfPMrLwhOPr04%2BtaPjJ0vVLJem7D8bEgN3xIltmU1VuH%2FfiMuc04MipN8pEl%2FHEBFCsq8iUpaq0PL0VgWhSDUEKpGmMQ3dQYTjSLysXp50sRCcjOp2P8721csVxZqSC5QmkyP7r760wlnbQsZkMV2do%2FwawbeUs2F6tpH0uIB20A3j%2FvVAwobCHCkdF29SPPc92AjZkG7NbWMPWm0MkGOqUBVDIHlObtYBBT9RV3Q6gSFV4ZFRbgrbpWeXfOl132i8qiTwOr71eXzbG0yYTQ%2Buq2LSEAwTJot4cdkiulgOIGgutooRDff4d9QxVtRjVUOOYsEyUn8UkCdHWaHxmnPIoDVHmZgC%2B5tNARoEICKnjVvT%2BZslGMRJeWCxeEiYEM4ghRUKld25cxjhIawfi9Yux03pDNtd6rV4DQArKLAO3aCUl2jMUL&X-Amz-Signature=b0d04223d3f0fb9a1d565c0e45925cb8c9e5bca389c0cb3e2305baf1a1aa6283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

