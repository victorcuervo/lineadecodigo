---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCSL372%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcFYU8g5OZAw4JPMi9ygwSDgVj1XUkgca8%2BRh8gzd1sAiEAjT9vFoF9h44x4YYCnzewan8HRvcnS7Sz%2FxtctkgEKaQqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHJQ1tbvjNlnvrVnCrcA6Azveed6MbFj2KzxgVQBBlxH66tCh9bClaT8o%2BoSXkp79omqGWBKbJRWE10nyPN3XawkZJUpWHy4grzPOcp6yF3l1R%2Fw9GwBKjABYNy7kxEzbS3fnGWAQYtdxS9yJ2H24TaWxkKzmNhMls%2FtS6xKaOQIh6co8ABWB2YLnxLZ92s6a6wngfRydYlFfClSD7dTeLs%2F6gdHs%2B6o3vQjKYcknXqaki6e5HRrUwXt%2FolKJVQY77WGWIim5schFujtt%2Fkdsk%2BZzKdMezOsnZDBFoBwxyVQano0UCPPxEtbrzNwqghnr7uKv5Z8TpMkbDoUK1qlm8CuiF59L3kfzqkbLW8dU1nvt8hx5XOTTH%2FvbT4RUl82qBLGmhYxfxu4TOY8qFQNBbykvHQG28sy%2BME0NwoAsA4Hf9roND1wjahdjOfm0WlVOF9VLamXSKHWJ3Em6yxBhzWMRJeNQD6LMiLO9JIy5sQ2opWpDADZXo0wyGikVeWgLedz8LRv2jFXYy8%2BlNUFrOZwJYeornb1ckt2sQwc%2FZas2a5F5LLIdzCIZPIqYVbgCmMDlarS%2B4bV3oK%2Byd2i%2B73MW%2BaZA2kcfymiNvxiGSmA%2FBfMeIm0%2Bf%2FFcjFFZSGkrt43I1TOe9ebA8jMKbD38kGOqUB9%2Bk4qvFphDQmo%2BGCG2tYbzCmSVLIw9tOvISFQjlGyBM3kRW7XUpOfRcAq8ChSBFPu90dnJ8mtC11C%2Bp7fJbni4zQaanwRCKXEpPmsyjitdwDzPTw1iLgGXQ7oDNS%2FC%2Bs7fIy0LjDtIZkmIxRovVLP1sT44XBdVaArp66xNInoXbkMJvpjr1WDNmyIQSfE%2FR8tMXzCw8%2FHFxLi3nTKPVxp3J%2FhMUe&X-Amz-Signature=b8ee394e2d774d0b1aed5cc2fda65fc4b66c34ab172221f43d7f54b1f80a9031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCSL372%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcFYU8g5OZAw4JPMi9ygwSDgVj1XUkgca8%2BRh8gzd1sAiEAjT9vFoF9h44x4YYCnzewan8HRvcnS7Sz%2FxtctkgEKaQqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHJQ1tbvjNlnvrVnCrcA6Azveed6MbFj2KzxgVQBBlxH66tCh9bClaT8o%2BoSXkp79omqGWBKbJRWE10nyPN3XawkZJUpWHy4grzPOcp6yF3l1R%2Fw9GwBKjABYNy7kxEzbS3fnGWAQYtdxS9yJ2H24TaWxkKzmNhMls%2FtS6xKaOQIh6co8ABWB2YLnxLZ92s6a6wngfRydYlFfClSD7dTeLs%2F6gdHs%2B6o3vQjKYcknXqaki6e5HRrUwXt%2FolKJVQY77WGWIim5schFujtt%2Fkdsk%2BZzKdMezOsnZDBFoBwxyVQano0UCPPxEtbrzNwqghnr7uKv5Z8TpMkbDoUK1qlm8CuiF59L3kfzqkbLW8dU1nvt8hx5XOTTH%2FvbT4RUl82qBLGmhYxfxu4TOY8qFQNBbykvHQG28sy%2BME0NwoAsA4Hf9roND1wjahdjOfm0WlVOF9VLamXSKHWJ3Em6yxBhzWMRJeNQD6LMiLO9JIy5sQ2opWpDADZXo0wyGikVeWgLedz8LRv2jFXYy8%2BlNUFrOZwJYeornb1ckt2sQwc%2FZas2a5F5LLIdzCIZPIqYVbgCmMDlarS%2B4bV3oK%2Byd2i%2B73MW%2BaZA2kcfymiNvxiGSmA%2FBfMeIm0%2Bf%2FFcjFFZSGkrt43I1TOe9ebA8jMKbD38kGOqUB9%2Bk4qvFphDQmo%2BGCG2tYbzCmSVLIw9tOvISFQjlGyBM3kRW7XUpOfRcAq8ChSBFPu90dnJ8mtC11C%2Bp7fJbni4zQaanwRCKXEpPmsyjitdwDzPTw1iLgGXQ7oDNS%2FC%2Bs7fIy0LjDtIZkmIxRovVLP1sT44XBdVaArp66xNInoXbkMJvpjr1WDNmyIQSfE%2FR8tMXzCw8%2FHFxLi3nTKPVxp3J%2FhMUe&X-Amz-Signature=dedca538de163b4f94f361e6a3a812b08179c845d849ff2a18318cea6751a52d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

