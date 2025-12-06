---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIF2RFJN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwjfPnXa8FD08jgcJj0DQpZzM%2FReRmFo5%2BvNeVoS185AiEA6mEXXQ%2FaRA%2FyrwN912Sg29wrw%2BsBkroRkfPbfy40n8Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDI2MlW%2BJ6r4Ko34circA9ATsvIghuU1MtPsOW7DmBjo080k5Hw59%2FhsKZovOd1HnHjJy2Fe0auGpDh0BvgekGyhHL9FjKUgF1RamS6gc0LJLk0meL%2FzPJJuht42ICZBpy1p%2FFxp9H5x0XrlOTzyvJs%2BgdGqDBIbD273jgQtDu6N8EjsMY6k8h7cZ2acV9fsmjts%2BPppoqnKRvOju5DHjd2QaR9Auv1%2FV20ix1jWL%2FRBSP6zYf%2BXnEVBDnxquuOxFEFdiB4hSDCbe8w45TwK3xrGanevJ%2BAn7oyrrn4XB7y3hlcA9bJyA3RHkYuOj5pIPmrCYmlBXPoHm6CZbYBsbOW0I1%2F4gW%2BUtaBw9FherSLOAWbv8zVaH3XrGAFaUJ5pm5dvpOvphSA8h%2FnzHNcwtc2ePQZfcvyarGjKDDcIVlaYsWid%2FvUXuNZtgEHTI2MB0nPW8vNFxrk%2Fc%2BOVoRiIiy7DSE6ESAeYfo5UjiMI2ov7dzj3gYRgK6iN9tiHxCLECIGhI3q%2FDfZUI2U%2FlVlwMzQbs8VIvHn4%2BssczB8yXkH%2Bp5cLml%2B2FUAyDFZ%2FWPy1KB185qupOEHORlTfDS6Qmc7PxlbOKLTmfb%2FYAlEsQi%2BVZseXKg9Zhxm76Iv8BdTBTj2b76l7GyUagI7YMKjCzskGOqUBnFtCGjFs2WYX5QViKkBgxrVSUo9Idee%2Fsr5r9gyGZQ%2F4QD3icJKvJStyJi2LymvX0Y%2Fy%2FjB2%2FJeC2AmMoG0JPszHsZ5rKFM7lYiTLgSMZemhoWrugvL0HLnSKzbucZYQXey5f9mHQpkzxUxOHDPUQvpboCC4N5KbDL6HD2VXN%2B9Esj%2BiS4igDw5chOhKdLyasc1NA8ysj6ttyInQubuli5B7IAvK&X-Amz-Signature=42ea53d2c03923bd452d997cc7b668bba3750619c0e9a19d7a0fdde774ce95ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIF2RFJN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwjfPnXa8FD08jgcJj0DQpZzM%2FReRmFo5%2BvNeVoS185AiEA6mEXXQ%2FaRA%2FyrwN912Sg29wrw%2BsBkroRkfPbfy40n8Mq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDI2MlW%2BJ6r4Ko34circA9ATsvIghuU1MtPsOW7DmBjo080k5Hw59%2FhsKZovOd1HnHjJy2Fe0auGpDh0BvgekGyhHL9FjKUgF1RamS6gc0LJLk0meL%2FzPJJuht42ICZBpy1p%2FFxp9H5x0XrlOTzyvJs%2BgdGqDBIbD273jgQtDu6N8EjsMY6k8h7cZ2acV9fsmjts%2BPppoqnKRvOju5DHjd2QaR9Auv1%2FV20ix1jWL%2FRBSP6zYf%2BXnEVBDnxquuOxFEFdiB4hSDCbe8w45TwK3xrGanevJ%2BAn7oyrrn4XB7y3hlcA9bJyA3RHkYuOj5pIPmrCYmlBXPoHm6CZbYBsbOW0I1%2F4gW%2BUtaBw9FherSLOAWbv8zVaH3XrGAFaUJ5pm5dvpOvphSA8h%2FnzHNcwtc2ePQZfcvyarGjKDDcIVlaYsWid%2FvUXuNZtgEHTI2MB0nPW8vNFxrk%2Fc%2BOVoRiIiy7DSE6ESAeYfo5UjiMI2ov7dzj3gYRgK6iN9tiHxCLECIGhI3q%2FDfZUI2U%2FlVlwMzQbs8VIvHn4%2BssczB8yXkH%2Bp5cLml%2B2FUAyDFZ%2FWPy1KB185qupOEHORlTfDS6Qmc7PxlbOKLTmfb%2FYAlEsQi%2BVZseXKg9Zhxm76Iv8BdTBTj2b76l7GyUagI7YMKjCzskGOqUBnFtCGjFs2WYX5QViKkBgxrVSUo9Idee%2Fsr5r9gyGZQ%2F4QD3icJKvJStyJi2LymvX0Y%2Fy%2FjB2%2FJeC2AmMoG0JPszHsZ5rKFM7lYiTLgSMZemhoWrugvL0HLnSKzbucZYQXey5f9mHQpkzxUxOHDPUQvpboCC4N5KbDL6HD2VXN%2B9Esj%2BiS4igDw5chOhKdLyasc1NA8ysj6ttyInQubuli5B7IAvK&X-Amz-Signature=b04f66c3c30743a1583b9f62c5b815852ac59359820474d1770d8750330b65a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

