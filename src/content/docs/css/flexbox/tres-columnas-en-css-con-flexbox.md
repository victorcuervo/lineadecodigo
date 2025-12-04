---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW2KLZPI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCRvsPHJHWbpbXtPVf9ZOoCWO90PYrUJ%2B%2FNS%2FpE%2BAc3fAIhAMe7DTC14wjkXxZjCnXCbXMm%2BTWdZeObkuzH%2Fvu7zptfKv8DCEUQABoMNjM3NDIzMTgzODA1IgwR0A0vus5ShpuNZwwq3AMRdUo3vcjOYRdvH%2FjuttIXRagzU1qmlVF1uWMFsvqiAYT%2BrwI2Y7A6jogqMkEKe4VU7mi81uafYZ5simTm9Zsowmu4ayIeu7Jp50as%2B0hMCa51fJ%2B80AqjBQfZoifjnoDgbvl24tzHVaKO074LPi3%2FWaXjV0qMCvUzpSGBCfwsZl3oFhM9QdbFulkoMcpWC9ZDZo4zYy31Ad9TMrWx0656u5jPEF6klxdPcShJn4CEDEqFEacEUvm2G0on4qZM8g5senmLqquGn5JbtCvlqLh92U4q9EX9bL91c46gOPZNNugKae%2B3THAtBVRO7Hlko%2FdbuR7UOa4Cn4RggKCNyBc%2Bm9FNX5u8a7Dkr4Kzu9oUg8LuwYLXzB0obm2zZ9OyOCvixKBa6HpcsPC1Ll1%2BRR9FDRwzoX%2F7HAnrfK2o8%2BA%2Bf8xMeEsEWY8sSKh9mEQB1TmFYlOkKJVgHoS4znxpZMf0UEy1od9mn0mv8l1m%2FU9CZ4VsW%2B9lXYpDQq712Dm9dGwXFAVBm2fIp361eL1jhHnaAblHykGumnbRTtZ6qYWbjyqbpeuFYkRRj2msAr0jzPLAaVOW2pQf8ndKUTUHqORuSYidHu7YMZAwD3S8EwXMV4C0k6mxHiKnMOwXyzC%2B5sXJBjqkAUCztUj9tT4llkR3DZTQmCTwlrPt%2FfJ4E8n7eOox7e%2F7dEO69Gv41enMAcrZyRXk1CD8U0G67HG3on4KQBezVgkYVpJuw7WH6ONgt21QvK0FQvGvAqYc1kKB8LmaDMYig1AXMrbG3bEKDk4jDy%2BWyq4l9eLNzgJYUjOUa%2B7L0%2FM%2FYzzihYOtt%2FmdqX%2BuVcrUo26Ol5hSvPTuUZ4w9cbanCTd1JIp&X-Amz-Signature=d3a3c00de9e5b8637730d7695402ae1cd345a9dc680837ddd09a96cd3c082ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW2KLZPI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCRvsPHJHWbpbXtPVf9ZOoCWO90PYrUJ%2B%2FNS%2FpE%2BAc3fAIhAMe7DTC14wjkXxZjCnXCbXMm%2BTWdZeObkuzH%2Fvu7zptfKv8DCEUQABoMNjM3NDIzMTgzODA1IgwR0A0vus5ShpuNZwwq3AMRdUo3vcjOYRdvH%2FjuttIXRagzU1qmlVF1uWMFsvqiAYT%2BrwI2Y7A6jogqMkEKe4VU7mi81uafYZ5simTm9Zsowmu4ayIeu7Jp50as%2B0hMCa51fJ%2B80AqjBQfZoifjnoDgbvl24tzHVaKO074LPi3%2FWaXjV0qMCvUzpSGBCfwsZl3oFhM9QdbFulkoMcpWC9ZDZo4zYy31Ad9TMrWx0656u5jPEF6klxdPcShJn4CEDEqFEacEUvm2G0on4qZM8g5senmLqquGn5JbtCvlqLh92U4q9EX9bL91c46gOPZNNugKae%2B3THAtBVRO7Hlko%2FdbuR7UOa4Cn4RggKCNyBc%2Bm9FNX5u8a7Dkr4Kzu9oUg8LuwYLXzB0obm2zZ9OyOCvixKBa6HpcsPC1Ll1%2BRR9FDRwzoX%2F7HAnrfK2o8%2BA%2Bf8xMeEsEWY8sSKh9mEQB1TmFYlOkKJVgHoS4znxpZMf0UEy1od9mn0mv8l1m%2FU9CZ4VsW%2B9lXYpDQq712Dm9dGwXFAVBm2fIp361eL1jhHnaAblHykGumnbRTtZ6qYWbjyqbpeuFYkRRj2msAr0jzPLAaVOW2pQf8ndKUTUHqORuSYidHu7YMZAwD3S8EwXMV4C0k6mxHiKnMOwXyzC%2B5sXJBjqkAUCztUj9tT4llkR3DZTQmCTwlrPt%2FfJ4E8n7eOox7e%2F7dEO69Gv41enMAcrZyRXk1CD8U0G67HG3on4KQBezVgkYVpJuw7WH6ONgt21QvK0FQvGvAqYc1kKB8LmaDMYig1AXMrbG3bEKDk4jDy%2BWyq4l9eLNzgJYUjOUa%2B7L0%2FM%2FYzzihYOtt%2FmdqX%2BuVcrUo26Ol5hSvPTuUZ4w9cbanCTd1JIp&X-Amz-Signature=7b3869d5ddfc16b4741d1746365c09c2b8818618862bec63914589a7cc73c652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

