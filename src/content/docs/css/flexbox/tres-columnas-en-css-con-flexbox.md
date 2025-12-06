---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHZIWAKT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1UP65i0u5QG3eVyvkc3uAbVvgdAMT9E5H%2B44n38YCpAiEA1RWJU3gVy3a1Y0B9nxpxONLzX%2B%2BFttc3NYg6rtLBNvgq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPEtd9lw3WBAf9eyvCrcAyv0VxuHh2rQU5tloO%2F1m%2FaD%2F%2B0f8JlQRd3JLC%2BdThlXF17lMMG38t7KGd882DcYPXyDw58bBWzGeo5k%2F40PegfbRnMh%2Bae30WE%2BYUSvjYnaxuvuM3c0Ubl1EViafBrUFGbRRs8bOQdXFjevDZ%2By0ZPAJ%2FNT8Jg5BdkrX2nIR31e9BHjI2%2FEW3%2F7oA4%2BQNVrOOzPNmO%2FuX%2FWuOaUjJkrgL8i4dMvMgPcilFZkUA4yOQkmQ3vTbJuHPN1AWW5rTqfGQNgDgH8jLpidBTl3wLiL28ip9Jr3bqylk4oLGnKJ7ebSaFzicbgVV7tTcCqWRe%2BwkZyZpuD5bJ6%2BjLHKv1osV4kVpklabwBttRRTMaOQLP%2FMSokTmE0Reiw8iLMNI4nbkTZFydewQckcA3%2B79tKBqXJKAnyYbBGgHZcd3E8UUBwZEnkf8E7uIbMZnJLqkm9K%2FTiU%2BIZV93%2FI%2BGMhv%2F9iMmLtl%2BR2d66KsJGWQiQ67%2Fz4y2BYz1NmW6CE%2FxNa2zsouLW1DpUVs0zPhtWDjmO30rNNN2K8iOmikmOEvQTeWmymME0x4Wwtg6nZhM6lNMPFgYf2Bfk0gOLM%2Bi4aNlAhIbhIZ4pRJVxO4%2Fo%2FSdIcq1fbj9UQjC0DqerzSxNMN79zskGOqUBLj3XamsVthniMP2A9ATEBHv2nwp0rr6zfvKlFaDULzKpBlWi02NhK9vN5QUc%2BR%2BEfsDA9z%2BzzrL%2Fe7OPuxycA03BZhliULZ0lDNPfA9iGvFEEjvLqdjigTtbi5YwtJDJdz1LkOtSDxyPlZPR3S8kbB1z9MXSZ7IwPEbEVjlufnVoGCzz0%2FZ7vN%2FGDAGfdRpXNM7zGE0J9CPDlkuNVY4LvMRTD87u&X-Amz-Signature=84a42be72cf13abc6e4492ad0f584b92a12e901404eb6b20cb255605ad72f6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHZIWAKT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1UP65i0u5QG3eVyvkc3uAbVvgdAMT9E5H%2B44n38YCpAiEA1RWJU3gVy3a1Y0B9nxpxONLzX%2B%2BFttc3NYg6rtLBNvgq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPEtd9lw3WBAf9eyvCrcAyv0VxuHh2rQU5tloO%2F1m%2FaD%2F%2B0f8JlQRd3JLC%2BdThlXF17lMMG38t7KGd882DcYPXyDw58bBWzGeo5k%2F40PegfbRnMh%2Bae30WE%2BYUSvjYnaxuvuM3c0Ubl1EViafBrUFGbRRs8bOQdXFjevDZ%2By0ZPAJ%2FNT8Jg5BdkrX2nIR31e9BHjI2%2FEW3%2F7oA4%2BQNVrOOzPNmO%2FuX%2FWuOaUjJkrgL8i4dMvMgPcilFZkUA4yOQkmQ3vTbJuHPN1AWW5rTqfGQNgDgH8jLpidBTl3wLiL28ip9Jr3bqylk4oLGnKJ7ebSaFzicbgVV7tTcCqWRe%2BwkZyZpuD5bJ6%2BjLHKv1osV4kVpklabwBttRRTMaOQLP%2FMSokTmE0Reiw8iLMNI4nbkTZFydewQckcA3%2B79tKBqXJKAnyYbBGgHZcd3E8UUBwZEnkf8E7uIbMZnJLqkm9K%2FTiU%2BIZV93%2FI%2BGMhv%2F9iMmLtl%2BR2d66KsJGWQiQ67%2Fz4y2BYz1NmW6CE%2FxNa2zsouLW1DpUVs0zPhtWDjmO30rNNN2K8iOmikmOEvQTeWmymME0x4Wwtg6nZhM6lNMPFgYf2Bfk0gOLM%2Bi4aNlAhIbhIZ4pRJVxO4%2Fo%2FSdIcq1fbj9UQjC0DqerzSxNMN79zskGOqUBLj3XamsVthniMP2A9ATEBHv2nwp0rr6zfvKlFaDULzKpBlWi02NhK9vN5QUc%2BR%2BEfsDA9z%2BzzrL%2Fe7OPuxycA03BZhliULZ0lDNPfA9iGvFEEjvLqdjigTtbi5YwtJDJdz1LkOtSDxyPlZPR3S8kbB1z9MXSZ7IwPEbEVjlufnVoGCzz0%2FZ7vN%2FGDAGfdRpXNM7zGE0J9CPDlkuNVY4LvMRTD87u&X-Amz-Signature=1da22e08bfa1e742227e977e9ccd993012b7bd4812c4d42fc2791e3133b3a94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

