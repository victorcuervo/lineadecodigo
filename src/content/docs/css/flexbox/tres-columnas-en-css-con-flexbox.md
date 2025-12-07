---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IG3HLXZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfKBw258OddL3yIr1vlr91jJUjQ1nYr8E2ZcNnyPhYfwIgYmbWekr8bcNjkL1mZ3%2BgKhWztCG2NRAf%2BN3MVmoK3GcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1pmu8AMWZA3rgyMyrcA6KhRDfs%2F9RQOFZxNqnh6EnUh56gKWVwybCAM774H6VSSgpoeS5g3MVEdPeoFUzFxqaVP5wIBZakpHRXpFTlkzlFXEG92v9Ucgwr38iOsKuPHYg6Xg%2FRFcjpGfh8PbDi%2BMRTUq1Pn1JYsFu7lAp8ibcIVJ9NZHmQcIqPykQbFUmMF5a8PlAMoABnC4C0BNM5id6Waz067kyL95j5nuuRw3RUew1OSqSwOR%2BuXXC%2FO2jsTP56lvrRBC86mP6oWjoUGbRGW%2BWdW%2BrVO9HoTQlYO2ZQ2RNW9NJYjBF%2FXI1vq0bpjmGq94dkUsk0OOEqdy8CkdCoiLHTmsTkl0mDC61CGkWV1MQfyBIhnDOBSwF7j2GBX5KSMcBppDnOVxjK3mYH7z4Mhhys%2FRo3d8kV2pA1ExVgvWYgi3RARvSnUJaFO6dt2FJuXNib6uS3y6kz7orV4WlPDuBkl7wYynO7ENOvMHZW5dfsyWrNHXq4puJbqAsYJ2s889exY0OWXbNy8MfbGjpS4bQbbS9r23Sd6pBZwzFnD9QyKOK821KNMtY0r81YeWTkYiZFZ%2FMX5JvdoeNYZ1qE8rSeDSv4YRJdZGaZv4LnTtZs4wROkDbPomJNA8%2Bqun02l%2B1rdFJ1zSBWMNSZ1ckGOqUBohEA5ZDv2BCkIvBiW2wAYN9DdSceIj5TxR%2FFXHRPhC%2Fldd1lph3Fo7ZWxM0TfWR3mx1V%2F773kOL1PkKTjclUQmy04crTFP6x3fg1undK646KJmLJlzoFTIgdBSPQ5ou3eTOnRd8WxXlBK2ugSWqmBRoROQgF6xshyMeO2zt33cSg98ybfgUGNs6dX91zfblj8AHTGKB3TXnO4DgTsYHuk8CBFFk2&X-Amz-Signature=14792bda77162a0a1a4a1969c6063b8e64cfce61952f050383c96dfd0092750f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IG3HLXZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfKBw258OddL3yIr1vlr91jJUjQ1nYr8E2ZcNnyPhYfwIgYmbWekr8bcNjkL1mZ3%2BgKhWztCG2NRAf%2BN3MVmoK3GcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1pmu8AMWZA3rgyMyrcA6KhRDfs%2F9RQOFZxNqnh6EnUh56gKWVwybCAM774H6VSSgpoeS5g3MVEdPeoFUzFxqaVP5wIBZakpHRXpFTlkzlFXEG92v9Ucgwr38iOsKuPHYg6Xg%2FRFcjpGfh8PbDi%2BMRTUq1Pn1JYsFu7lAp8ibcIVJ9NZHmQcIqPykQbFUmMF5a8PlAMoABnC4C0BNM5id6Waz067kyL95j5nuuRw3RUew1OSqSwOR%2BuXXC%2FO2jsTP56lvrRBC86mP6oWjoUGbRGW%2BWdW%2BrVO9HoTQlYO2ZQ2RNW9NJYjBF%2FXI1vq0bpjmGq94dkUsk0OOEqdy8CkdCoiLHTmsTkl0mDC61CGkWV1MQfyBIhnDOBSwF7j2GBX5KSMcBppDnOVxjK3mYH7z4Mhhys%2FRo3d8kV2pA1ExVgvWYgi3RARvSnUJaFO6dt2FJuXNib6uS3y6kz7orV4WlPDuBkl7wYynO7ENOvMHZW5dfsyWrNHXq4puJbqAsYJ2s889exY0OWXbNy8MfbGjpS4bQbbS9r23Sd6pBZwzFnD9QyKOK821KNMtY0r81YeWTkYiZFZ%2FMX5JvdoeNYZ1qE8rSeDSv4YRJdZGaZv4LnTtZs4wROkDbPomJNA8%2Bqun02l%2B1rdFJ1zSBWMNSZ1ckGOqUBohEA5ZDv2BCkIvBiW2wAYN9DdSceIj5TxR%2FFXHRPhC%2Fldd1lph3Fo7ZWxM0TfWR3mx1V%2F773kOL1PkKTjclUQmy04crTFP6x3fg1undK646KJmLJlzoFTIgdBSPQ5ou3eTOnRd8WxXlBK2ugSWqmBRoROQgF6xshyMeO2zt33cSg98ybfgUGNs6dX91zfblj8AHTGKB3TXnO4DgTsYHuk8CBFFk2&X-Amz-Signature=e4f405c99601dd6b9dcf5cb4cd1936e4bdb2d6e8560b8baaa108c8dc9cf59687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

