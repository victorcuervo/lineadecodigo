---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMWY2MZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwNfK%2FghY81ctDkhIoypY573Ojci5wMYcUKKisHBKjRAiEA4u%2FWVZ7Ma1ZYmYCqmYhLkmZAdtU6KNHX%2Ff%2F%2FkxUU%2FHoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKzBZLebHcfuwdbjSircAzpMSKfqDtcGiD520sQW1Ec7Qd2GvdsQnHU57UZZroKeGZ9XGH12lUdjIxT8zAIy76wl%2FwkJNUbQnCrMOu7aCGs9adhoGR5mOLqrJwfWwqPKLmzW7DR0waJHns5CiSWYOgwBZMWrMySXu%2BWRW8j%2BheQ28CQR0l3xgyJm5sMLI0yX0zWgw6lZvokVxeglbNwapHCyjALnOBFx4d7U7WwGg5THT9%2BmOlj8PZlKEA8y19hKf%2FTcJqrhL%2FeqtrU1h0XxztpWhA5VKuddeB%2BqUODHsHegqvakOBuZqS73ixlVr1cQBUAYTKt5BT12GCd5TcWqXZOkzmudK8NxCcHXixTtBqeAY5mwBSQkSCUL4zwFNmUXxsDD5O0Y%2FZwco9PZ%2FSdVJ2DAHIbbX%2B7tGExr9cHTnrS4M6MbYDM73DEaTKFg3V7yIpjqFQqocOlmxQcW6RWJQ1Y2IQBNT%2FJwzpWlpS7jGgJtPEozN69lnJvmqdoGzAq3EnzNPyvZJS%2BB20gJa%2FcEmu8AhKyR%2B%2FCbKUa24CAmtaG4JTz8TMsCS3fdjtt8D%2BKB4GBvDs0YAcgb2%2BxsS0yy4ZAbDSqqxckSV3srwhHLSwwgDL5HHoDiwrRHzXH7jx2LFf%2BY85ztBbfBZ2GXMMTM0ckGOqUBXzf3g4R32HYepVo1WsqZgtAT5iFioITpFw%2BOXtbHNoWArHaIptlxV9OfnQfPHKVqyca3FaF5Lnb%2ByN0PAbfTnHuefvEUIP9kFB2BSPbpW7yxwI4TNZB5wYl8G3ymoOvFbASk6rET1XL%2FgleEyuNI0PHnz8AYX3aqzzQJDTUCnQGL2Pw0c5RqqNlhLAEy9UHGUimg7LpC%2BSQsNFI1pNsf41XUZUn%2F&X-Amz-Signature=72587e5bf8388689b600b5c8d481fbeed800192bb59577c64441c69b28ac04ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMWY2MZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwNfK%2FghY81ctDkhIoypY573Ojci5wMYcUKKisHBKjRAiEA4u%2FWVZ7Ma1ZYmYCqmYhLkmZAdtU6KNHX%2Ff%2F%2FkxUU%2FHoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKzBZLebHcfuwdbjSircAzpMSKfqDtcGiD520sQW1Ec7Qd2GvdsQnHU57UZZroKeGZ9XGH12lUdjIxT8zAIy76wl%2FwkJNUbQnCrMOu7aCGs9adhoGR5mOLqrJwfWwqPKLmzW7DR0waJHns5CiSWYOgwBZMWrMySXu%2BWRW8j%2BheQ28CQR0l3xgyJm5sMLI0yX0zWgw6lZvokVxeglbNwapHCyjALnOBFx4d7U7WwGg5THT9%2BmOlj8PZlKEA8y19hKf%2FTcJqrhL%2FeqtrU1h0XxztpWhA5VKuddeB%2BqUODHsHegqvakOBuZqS73ixlVr1cQBUAYTKt5BT12GCd5TcWqXZOkzmudK8NxCcHXixTtBqeAY5mwBSQkSCUL4zwFNmUXxsDD5O0Y%2FZwco9PZ%2FSdVJ2DAHIbbX%2B7tGExr9cHTnrS4M6MbYDM73DEaTKFg3V7yIpjqFQqocOlmxQcW6RWJQ1Y2IQBNT%2FJwzpWlpS7jGgJtPEozN69lnJvmqdoGzAq3EnzNPyvZJS%2BB20gJa%2FcEmu8AhKyR%2B%2FCbKUa24CAmtaG4JTz8TMsCS3fdjtt8D%2BKB4GBvDs0YAcgb2%2BxsS0yy4ZAbDSqqxckSV3srwhHLSwwgDL5HHoDiwrRHzXH7jx2LFf%2BY85ztBbfBZ2GXMMTM0ckGOqUBXzf3g4R32HYepVo1WsqZgtAT5iFioITpFw%2BOXtbHNoWArHaIptlxV9OfnQfPHKVqyca3FaF5Lnb%2ByN0PAbfTnHuefvEUIP9kFB2BSPbpW7yxwI4TNZB5wYl8G3ymoOvFbASk6rET1XL%2FgleEyuNI0PHnz8AYX3aqzzQJDTUCnQGL2Pw0c5RqqNlhLAEy9UHGUimg7LpC%2BSQsNFI1pNsf41XUZUn%2F&X-Amz-Signature=b4773da9c523505beabace7e99ff771a62465de9a4ecafad8a9453d47b33d83e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

