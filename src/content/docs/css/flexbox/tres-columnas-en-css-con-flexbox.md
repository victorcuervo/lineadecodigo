---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXR6LAFD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6Y2g2iYjgBXjYjHGlc7o7A4PZHZMeyvBZGDCXGnE5AgIhAIhQewNy2%2BXedhwDq3Xb%2FqYCknImb6FwnxJokQTgRpTWKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz84OxzYCSBxpJ4susq3AP8f0qzrTQhGPaZ%2FiQ8Nd3hSSS3%2BE8tOTSmUvKcAR%2FiljnmxovzEH%2BqVYYJxjA7Fa%2FZ36f5lzL5iTcksEM0itNW3W3q5chrwHnwQ82vgMS9GtPnG%2Bhkx6Qn7jRxrMWIbXENQJeEJaIAQVKHCFHlw3ZWYM3u5nJ30VRRnByWIcIY8sVTDTRZOgLPSEBpBSNX9ODXjuhXiVsdH7J5SjKQeSWtgtlTlbsgYjfYBiO6FmncBcz966bmDfs8AxYkTAkvl73zjK2kjSzl%2FvMLcN8Mahp%2FmdBC4TzCuSowJp4kGj3J4MAHjsIYNF%2BHqvrw6Oud50zuhudsQnvlmqZUeEzl6%2F%2Bpfw%2FNlj4pTXGCjNn9MmfFczScMwFd5n8gCJp8xhPlGrhvoeBz%2F1DA%2Bb%2FqFVJ%2BpbtZjOLYt7MhbpDKpGc0vmAQHvCcQI1ReCuASGeI2Y4A3wq8hgzP8qVJsWXkjyADqQeIRRCMxP9%2BoeHQ6IiIQLDYMwBvx8NzQXjVm%2FJ%2BTl48eRFMYq1eDfAsB5Tubc1G%2BnGJwSAp4LyatxZijSCqS%2BJ12urf02pdnLvnPfT5zc1tI7lHJd%2B5qed%2F815r7Omf2tfiQAEUOHfZnGTt9UGb9he79y7EaudnVpkH%2Bal%2FPjD08trJBjqkAYmPJpyXnelxOt4YSwa0nqgMh6olBRDh84S5FNZyO1mhL1xqOx6R5GwFMhRReDVuyy3UsTqkqIa1gRsQA%2Bjr4GpmMpYZi1NScbD%2BEtR5G3klRtVYSYe712tTzv6dpY2F7xSNt47IwpWnDsW0S3vgrbMK5aXcRBJutXKwn5Trfp8Lab0e6W%2Bb3eG050DE9VD6eOfxWQhQS9BXJZD%2FNOlXS8%2F7oTZW&X-Amz-Signature=96e1ac134c157a0eb5d7978d77e8b5d860091ff3b0a9795ee31d6b3e6e003ad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXR6LAFD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6Y2g2iYjgBXjYjHGlc7o7A4PZHZMeyvBZGDCXGnE5AgIhAIhQewNy2%2BXedhwDq3Xb%2FqYCknImb6FwnxJokQTgRpTWKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz84OxzYCSBxpJ4susq3AP8f0qzrTQhGPaZ%2FiQ8Nd3hSSS3%2BE8tOTSmUvKcAR%2FiljnmxovzEH%2BqVYYJxjA7Fa%2FZ36f5lzL5iTcksEM0itNW3W3q5chrwHnwQ82vgMS9GtPnG%2Bhkx6Qn7jRxrMWIbXENQJeEJaIAQVKHCFHlw3ZWYM3u5nJ30VRRnByWIcIY8sVTDTRZOgLPSEBpBSNX9ODXjuhXiVsdH7J5SjKQeSWtgtlTlbsgYjfYBiO6FmncBcz966bmDfs8AxYkTAkvl73zjK2kjSzl%2FvMLcN8Mahp%2FmdBC4TzCuSowJp4kGj3J4MAHjsIYNF%2BHqvrw6Oud50zuhudsQnvlmqZUeEzl6%2F%2Bpfw%2FNlj4pTXGCjNn9MmfFczScMwFd5n8gCJp8xhPlGrhvoeBz%2F1DA%2Bb%2FqFVJ%2BpbtZjOLYt7MhbpDKpGc0vmAQHvCcQI1ReCuASGeI2Y4A3wq8hgzP8qVJsWXkjyADqQeIRRCMxP9%2BoeHQ6IiIQLDYMwBvx8NzQXjVm%2FJ%2BTl48eRFMYq1eDfAsB5Tubc1G%2BnGJwSAp4LyatxZijSCqS%2BJ12urf02pdnLvnPfT5zc1tI7lHJd%2B5qed%2F815r7Omf2tfiQAEUOHfZnGTt9UGb9he79y7EaudnVpkH%2Bal%2FPjD08trJBjqkAYmPJpyXnelxOt4YSwa0nqgMh6olBRDh84S5FNZyO1mhL1xqOx6R5GwFMhRReDVuyy3UsTqkqIa1gRsQA%2Bjr4GpmMpYZi1NScbD%2BEtR5G3klRtVYSYe712tTzv6dpY2F7xSNt47IwpWnDsW0S3vgrbMK5aXcRBJutXKwn5Trfp8Lab0e6W%2Bb3eG050DE9VD6eOfxWQhQS9BXJZD%2FNOlXS8%2F7oTZW&X-Amz-Signature=781116c4006f58a59533f7188188f35da67b82d76a00b9321ad67d2ddd1c169d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

