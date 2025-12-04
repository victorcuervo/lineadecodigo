---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7T5DVZN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBalnJRg8znMvtHAFxNx7a16foxCU7iCwEDWeM1mozWQAiEAzYaXHq4%2BplHlaN7o5KceTj5rE0mhjDI3ws3SDmIrVOEq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDOGi3ro8J4c8cuAd3CrcA0%2BsDKbs4JYhhOKYVJEc%2B6XcwzQ5VG0XYxI9e39rq%2B2NGt4JzK6zdF9Hsm0%2B1OXXGMKoRj5SLx%2BtMn5KoIje3ZxTPckr7jF%2FlsFp%2Fby6at3Y7z0BqHJ1wZ%2Bl1l6xxDY59JHuN0aCi7Iv7p6wLKZnQaOZRREEQCrcHyZVUdA0QIqcl9MIvYOZ0xKDhF9tY999kasCKVxyLVUW0vJ5B8C8XxWJ0zOdXKHy24S1vCmIMaqSn%2B7ourbYRIjFU%2F%2Fko1QKi0cxrZxD0MIn%2FuFCTx%2BeLYLUsH9xljI2KTtk3MYYibAhCBrGZX5G%2BjRU5xrNuvXyH9e3fLS%2FvDpcUGaaxaPKXksRMkJGj9bjnXCCZPPjJgH8dj5wkJp5R3tllDjuZhSgD9WTbBHC%2BYzFqB17c96co3NuCHGmmiZab5qVPTFKhg2hV9ECDmdF4fnx9S3qEZKtHoWVlAjc98JP5j%2BbYpPn%2FL9ZqeZ2cc27aaK%2FKVWCXIauMhjXE6e%2FrSD%2Feuqp24YiO4DkD77mkgm97xto0to1Ap%2FNaOOtDRCBjRZqY%2BaGxej93age6AKWooPxSmxDs4drmg1j1nAhmqLLZFP3q5OEpnP7PIAKDFXdTCyXSMAPg4DTE2VQDKP6iq%2Br8hPqMOPbxskGOqUB%2B664dy%2FCBobM9m%2F7jHkqV0vPjNqr%2BwNL2S%2BVzPZllQkARHymJEN5hpfcfX%2BN%2FKAbO6YJwSNWdoW95PCrAUzsKEbk6xB7V1jXTQ47l1QO7d4Hh8uE3z16KJnt9XL3FV6YIUItbRxFtNJpcaK%2Bnd2BbUNKQdGCNY1y13ny4AHIOy5vaqgCSIezg%2FDkcuMa51ntDp5HLFeEKDtKFJH7264sGPa0WVkx&X-Amz-Signature=807ead34baa012cbb3ac1b63b3c4864e5ee6683884087e8e6b9ef05da4bf0f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7T5DVZN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBalnJRg8znMvtHAFxNx7a16foxCU7iCwEDWeM1mozWQAiEAzYaXHq4%2BplHlaN7o5KceTj5rE0mhjDI3ws3SDmIrVOEq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDOGi3ro8J4c8cuAd3CrcA0%2BsDKbs4JYhhOKYVJEc%2B6XcwzQ5VG0XYxI9e39rq%2B2NGt4JzK6zdF9Hsm0%2B1OXXGMKoRj5SLx%2BtMn5KoIje3ZxTPckr7jF%2FlsFp%2Fby6at3Y7z0BqHJ1wZ%2Bl1l6xxDY59JHuN0aCi7Iv7p6wLKZnQaOZRREEQCrcHyZVUdA0QIqcl9MIvYOZ0xKDhF9tY999kasCKVxyLVUW0vJ5B8C8XxWJ0zOdXKHy24S1vCmIMaqSn%2B7ourbYRIjFU%2F%2Fko1QKi0cxrZxD0MIn%2FuFCTx%2BeLYLUsH9xljI2KTtk3MYYibAhCBrGZX5G%2BjRU5xrNuvXyH9e3fLS%2FvDpcUGaaxaPKXksRMkJGj9bjnXCCZPPjJgH8dj5wkJp5R3tllDjuZhSgD9WTbBHC%2BYzFqB17c96co3NuCHGmmiZab5qVPTFKhg2hV9ECDmdF4fnx9S3qEZKtHoWVlAjc98JP5j%2BbYpPn%2FL9ZqeZ2cc27aaK%2FKVWCXIauMhjXE6e%2FrSD%2Feuqp24YiO4DkD77mkgm97xto0to1Ap%2FNaOOtDRCBjRZqY%2BaGxej93age6AKWooPxSmxDs4drmg1j1nAhmqLLZFP3q5OEpnP7PIAKDFXdTCyXSMAPg4DTE2VQDKP6iq%2Br8hPqMOPbxskGOqUB%2B664dy%2FCBobM9m%2F7jHkqV0vPjNqr%2BwNL2S%2BVzPZllQkARHymJEN5hpfcfX%2BN%2FKAbO6YJwSNWdoW95PCrAUzsKEbk6xB7V1jXTQ47l1QO7d4Hh8uE3z16KJnt9XL3FV6YIUItbRxFtNJpcaK%2Bnd2BbUNKQdGCNY1y13ny4AHIOy5vaqgCSIezg%2FDkcuMa51ntDp5HLFeEKDtKFJH7264sGPa0WVkx&X-Amz-Signature=369f0bfba0f5038ae964f9c3d09e1e7e9c6aff5f501261d66fe9c48b6bc74f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

