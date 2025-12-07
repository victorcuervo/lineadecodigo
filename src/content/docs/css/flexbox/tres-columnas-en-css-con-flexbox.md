---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBWJXQMC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpYeLuG9BRi8jks89ZjS%2FmrDi4OWvoUcigG8bR3N3U%2FAiBZApP8YzF%2FUq1dxqiSVTFNkxNu21wxYySk47z6qWs6riqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZcMscwn4VNq9P7RDKtwDFjYHlkJtEQ9D1ZCX96uZPNHIXe0HOurAVt1WPc7%2B2X2IqH1LbgsxuXZf4dVPowujuI1jXGN8Yxftnaiv%2BE85i%2FPJKCsLTvriCRhjenZIF5WI7lUyA27tVMWUo04yh9kMJg48a0erdl93sQGw0WhnuOAfPcdp9BhyDXfdzQh7KB784NyN78pYHCJgRK8Aw5LkDjqZvaOw9PA4SgvzjEm%2Bw9mvRM8Q0qwHn5Gc9GNQqWuujkn5tIqb33uOGgsSQFzolnT322G3T4BwhOpnfCUweZyuTMcTiDYy42UcWmTc42FALAs2RnhFWNLXoUs6Wkfc4LlRK6DVhqMk6aW6LK%2FhKta5pFvSWRt%2ByDPzlMPkUN%2FLT4RHHkHJTUzuSo2zoBnQCvitpGqkdHTycXfaSSkydaynG8HKwTQ1KNXArluu70JpGg98VdhtLQ%2FYQ22eZCvSdpiW%2FMOBZhPdXoidCL%2FfOc6L2wm%2BXB5BJ4zb1YdjAgD5JVa56uJrgX5PApILfwoMP6mVzp7Un4ndu%2Bn7OfJcnelllOFgOC24tcEYftpfxNJ80hVTnoQSi8x7sTRzmH6imXzg06EoAGi1uI6tz0D0MSx1I8mBI5cUydLazty7U6RRLV1ePpsp%2FIIHhUswuP3SyQY6pgH2yMt%2B7gCcuE97OueQh2nUmOLmkJ6wuHJpGrJrduuNyeq89SbBKNpRjhuXkmjMTesTusOu0n2ng4QTm6rOeVrbkLGcgWfVB3OiOHycfyGXGepC2HhcooNwp2DSQ%2FUUbNVObCv1uc1XMusFPvg6g5%2FIQCH74q5euI3fbrxT5iYTyT0YiyikmA4wqX3KFhRPXA0l0gu%2BwBKqMOMlGspE67XzJrW4MDn8&X-Amz-Signature=bca5d525f5e3abe7d7ddec1fed5c387c91baf6469aca81e0416e7684c927f674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBWJXQMC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpYeLuG9BRi8jks89ZjS%2FmrDi4OWvoUcigG8bR3N3U%2FAiBZApP8YzF%2FUq1dxqiSVTFNkxNu21wxYySk47z6qWs6riqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZcMscwn4VNq9P7RDKtwDFjYHlkJtEQ9D1ZCX96uZPNHIXe0HOurAVt1WPc7%2B2X2IqH1LbgsxuXZf4dVPowujuI1jXGN8Yxftnaiv%2BE85i%2FPJKCsLTvriCRhjenZIF5WI7lUyA27tVMWUo04yh9kMJg48a0erdl93sQGw0WhnuOAfPcdp9BhyDXfdzQh7KB784NyN78pYHCJgRK8Aw5LkDjqZvaOw9PA4SgvzjEm%2Bw9mvRM8Q0qwHn5Gc9GNQqWuujkn5tIqb33uOGgsSQFzolnT322G3T4BwhOpnfCUweZyuTMcTiDYy42UcWmTc42FALAs2RnhFWNLXoUs6Wkfc4LlRK6DVhqMk6aW6LK%2FhKta5pFvSWRt%2ByDPzlMPkUN%2FLT4RHHkHJTUzuSo2zoBnQCvitpGqkdHTycXfaSSkydaynG8HKwTQ1KNXArluu70JpGg98VdhtLQ%2FYQ22eZCvSdpiW%2FMOBZhPdXoidCL%2FfOc6L2wm%2BXB5BJ4zb1YdjAgD5JVa56uJrgX5PApILfwoMP6mVzp7Un4ndu%2Bn7OfJcnelllOFgOC24tcEYftpfxNJ80hVTnoQSi8x7sTRzmH6imXzg06EoAGi1uI6tz0D0MSx1I8mBI5cUydLazty7U6RRLV1ePpsp%2FIIHhUswuP3SyQY6pgH2yMt%2B7gCcuE97OueQh2nUmOLmkJ6wuHJpGrJrduuNyeq89SbBKNpRjhuXkmjMTesTusOu0n2ng4QTm6rOeVrbkLGcgWfVB3OiOHycfyGXGepC2HhcooNwp2DSQ%2FUUbNVObCv1uc1XMusFPvg6g5%2FIQCH74q5euI3fbrxT5iYTyT0YiyikmA4wqX3KFhRPXA0l0gu%2BwBKqMOMlGspE67XzJrW4MDn8&X-Amz-Signature=c16fd6db89b551ee42370c451eaa07bb20b392c01182448c887b87310fc53f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

