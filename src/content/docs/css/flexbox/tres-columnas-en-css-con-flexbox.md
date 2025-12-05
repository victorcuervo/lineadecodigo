---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNQSZMA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6xFBdN5tBpDWyrk9zmkRljpWcDDWMKreRUDuW%2BA3lwAiAByVHISpoF5lC4tzlqEk4un5FexPywsYa6ISeHk2u9XSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMVW%2FqAHlwhvrxQmhTKtwDzsM%2B9BLgHhwU1Q27ARyrqFNH8Uij%2FGYqiHe2jXEF2kvx14taoT4gm6po5RM%2FmXzy4ysjlDBVN20egDPJNZIU1D%2BNPxYp3qtFfcN7BpVR4uj2YRZOs8dXoESZLsLWInzkbSLQyLga2MXbCWNjDgjwQr0lX7KV7gHkMzvS8dGN4lShndL3qWXu16ozIynVD1OEJiEALzoGVQH%2F3UHuXgPZEOOrPLFCnQl3zZpBYNGsqxlROq16VPJVu6aZ1HkT2QC%2B4ZTR4kTy6%2FhRh09tFISMt3QJmaIVJUj42ptw9Im38bMgt7jz4Casc%2BkgisLkex8u41ZDr2KuSdIi0%2Fip76GTJgJ0pP4hm4fekBQswzBddhqyA2IzTAxPBynabzKhMOzFzDDmwoRaG4xkKegS9otQF5ZjxF%2FNuKJNByMOroxpaz3ihc6cquGPxjzbvCH1R2NolacCkAAuInRUjcSEEDdUAjO5AJ70WU%2FNlv1sY1cT0pUhcbxDa48%2Bn4V1DZaCN%2BqPjDpAkrHbgbzPi9SWLMCFT71Pu%2FwfUdHW1hZ374kVAhmQ3IlN%2BrQnNgIPIicX8Lqzl0CTsrGfaB7pUl6jhSvZ3MMOV5mTaeZ1Jv64YUAcFbUHtWolnVuzFjVjDnIwmMjKyQY6pgFJ9MH%2BlUWN0aWs%2FNdGMXDcEn%2FCbPrnI5Mmqi59DvgqlbIVdHQrJIa0qMCVGh0L%2B7ODmGkQbIywiM0Iuy%2FXSgM6kv92VU83cLVTphpdodYgq7Utq39tPY%2BNrz5ZG5x95q1GbrU1wLSwtcI9h1N3DeASfEn3J7enTCvzeC8Np22uyXrK33hGBujN0mFl6pBJwQaeqOEjQqquP2e4JYRtr4pQi3vE%2FXRP&X-Amz-Signature=e42189812f10c73b093dbe17ffd0b49aa7d325ebb5ac244e3f09f496169bf73f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNQSZMA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6xFBdN5tBpDWyrk9zmkRljpWcDDWMKreRUDuW%2BA3lwAiAByVHISpoF5lC4tzlqEk4un5FexPywsYa6ISeHk2u9XSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMVW%2FqAHlwhvrxQmhTKtwDzsM%2B9BLgHhwU1Q27ARyrqFNH8Uij%2FGYqiHe2jXEF2kvx14taoT4gm6po5RM%2FmXzy4ysjlDBVN20egDPJNZIU1D%2BNPxYp3qtFfcN7BpVR4uj2YRZOs8dXoESZLsLWInzkbSLQyLga2MXbCWNjDgjwQr0lX7KV7gHkMzvS8dGN4lShndL3qWXu16ozIynVD1OEJiEALzoGVQH%2F3UHuXgPZEOOrPLFCnQl3zZpBYNGsqxlROq16VPJVu6aZ1HkT2QC%2B4ZTR4kTy6%2FhRh09tFISMt3QJmaIVJUj42ptw9Im38bMgt7jz4Casc%2BkgisLkex8u41ZDr2KuSdIi0%2Fip76GTJgJ0pP4hm4fekBQswzBddhqyA2IzTAxPBynabzKhMOzFzDDmwoRaG4xkKegS9otQF5ZjxF%2FNuKJNByMOroxpaz3ihc6cquGPxjzbvCH1R2NolacCkAAuInRUjcSEEDdUAjO5AJ70WU%2FNlv1sY1cT0pUhcbxDa48%2Bn4V1DZaCN%2BqPjDpAkrHbgbzPi9SWLMCFT71Pu%2FwfUdHW1hZ374kVAhmQ3IlN%2BrQnNgIPIicX8Lqzl0CTsrGfaB7pUl6jhSvZ3MMOV5mTaeZ1Jv64YUAcFbUHtWolnVuzFjVjDnIwmMjKyQY6pgFJ9MH%2BlUWN0aWs%2FNdGMXDcEn%2FCbPrnI5Mmqi59DvgqlbIVdHQrJIa0qMCVGh0L%2B7ODmGkQbIywiM0Iuy%2FXSgM6kv92VU83cLVTphpdodYgq7Utq39tPY%2BNrz5ZG5x95q1GbrU1wLSwtcI9h1N3DeASfEn3J7enTCvzeC8Np22uyXrK33hGBujN0mFl6pBJwQaeqOEjQqquP2e4JYRtr4pQi3vE%2FXRP&X-Amz-Signature=c6c0ec8f6475150e0c939cd982a20c1fc2c2d2d5edb359f9190e5fd869c4a660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

