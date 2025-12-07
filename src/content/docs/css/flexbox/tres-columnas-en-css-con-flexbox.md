---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RGH6HSL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHuqA4cxluYjkF32UF19tRZIyvq6WM4y0HDsnhlTKwiAiEAqToHwnl%2Fs6LPn4yXgpdn6x6N7fV1LDV9fonMwH9RUlwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNp3eHvX8Qh4VIohNyrcAxXJYal0w0nh3%2B6MpMIBmSqoVM5wgbEe6caQ0ZL6PA4Mp9amXYkmYEjVcn4MMW1RhjLwmLvY4yDfv7RcI7pNg74od2wY9iLFdoddMjVXUOvob4ZhJL3DzCluX5D0m4Q%2BDb52nST%2BAyY7FMZYz%2FSO6b82yp4V95TzdGyEgu1m5urqEjjhzSxfo0ByMUm%2F%2FNG1S4zjibqMwLZ9IkmJ3yu6saYDsKn25YfpNAKtlhkdQcQl8Yq0Fuz%2Fok6KDWVQojRiLtrVOqafln4%2FMdcFLvWFU1Dqk98BQN8i6HICbDhCiltP8By3Lf7%2F2fBTLYGVPpGSFOI9P%2FtHbSYPHC6HzrdJWaQ1zbAkZZIUUoMbRg23LLQ9W35MM93ht31dCB%2BXH5ZALsysR3U2hW9yZDewEEimW8lCsVSoZAdQYnh09LKI1uXmBmgbIcOBZFCzZjNn4mqGmSG0rBVAIB%2FOC4sY9DOjLbZNPfTvqrJZ0%2BbXwezMu088jbospZCuSwpOht3CQDZtmzyEUbHdleFOlrh%2Btq6HDAo8tg4E1taYgnuxOid%2FkLlGODQYlcizDI6B1ojm4tWJRLf3wirqQ%2FvtzE3PzLx3rWyPK9z5IMdJCUy1Q80%2BWrUyi4TF9wkQjg6ia52%2FMLD%2B0skGOqUBvVdqNytl41SCWLt739TWT%2FRmaCHg6kTD52eiY%2BSEhdjU1eD1Y7LihO2nnIydvQcMMhwePNIaImO%2BVBLMVtfDoSzoBPQOasOY4BTrx%2BMTXCooCa4VPN5dMA96EDVmCU8Wg6h4pCtPkO6HT3wMItIDZiFMMXbxtSQoS1AGAPmD7OTyPMQ%2FkW3q6RkO8hzAKxTIuKf%2BgQtTp1PNxT1ypwAbW%2FOsPBpL&X-Amz-Signature=c5466c1d38aa2b21622ba49493314bc7d240587e0859f3253e811ef575452626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RGH6HSL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHuqA4cxluYjkF32UF19tRZIyvq6WM4y0HDsnhlTKwiAiEAqToHwnl%2Fs6LPn4yXgpdn6x6N7fV1LDV9fonMwH9RUlwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNp3eHvX8Qh4VIohNyrcAxXJYal0w0nh3%2B6MpMIBmSqoVM5wgbEe6caQ0ZL6PA4Mp9amXYkmYEjVcn4MMW1RhjLwmLvY4yDfv7RcI7pNg74od2wY9iLFdoddMjVXUOvob4ZhJL3DzCluX5D0m4Q%2BDb52nST%2BAyY7FMZYz%2FSO6b82yp4V95TzdGyEgu1m5urqEjjhzSxfo0ByMUm%2F%2FNG1S4zjibqMwLZ9IkmJ3yu6saYDsKn25YfpNAKtlhkdQcQl8Yq0Fuz%2Fok6KDWVQojRiLtrVOqafln4%2FMdcFLvWFU1Dqk98BQN8i6HICbDhCiltP8By3Lf7%2F2fBTLYGVPpGSFOI9P%2FtHbSYPHC6HzrdJWaQ1zbAkZZIUUoMbRg23LLQ9W35MM93ht31dCB%2BXH5ZALsysR3U2hW9yZDewEEimW8lCsVSoZAdQYnh09LKI1uXmBmgbIcOBZFCzZjNn4mqGmSG0rBVAIB%2FOC4sY9DOjLbZNPfTvqrJZ0%2BbXwezMu088jbospZCuSwpOht3CQDZtmzyEUbHdleFOlrh%2Btq6HDAo8tg4E1taYgnuxOid%2FkLlGODQYlcizDI6B1ojm4tWJRLf3wirqQ%2FvtzE3PzLx3rWyPK9z5IMdJCUy1Q80%2BWrUyi4TF9wkQjg6ia52%2FMLD%2B0skGOqUBvVdqNytl41SCWLt739TWT%2FRmaCHg6kTD52eiY%2BSEhdjU1eD1Y7LihO2nnIydvQcMMhwePNIaImO%2BVBLMVtfDoSzoBPQOasOY4BTrx%2BMTXCooCa4VPN5dMA96EDVmCU8Wg6h4pCtPkO6HT3wMItIDZiFMMXbxtSQoS1AGAPmD7OTyPMQ%2FkW3q6RkO8hzAKxTIuKf%2BgQtTp1PNxT1ypwAbW%2FOsPBpL&X-Amz-Signature=409f4e3948c7fc5efa8cfd13c474654850517da82fcadc1c437b84e484f37c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

