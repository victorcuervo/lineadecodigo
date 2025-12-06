---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTHW7QQ6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU3szXgZPy9SEmcuG5rjcoiB8nzNlyuNzqatsHJcisHAiA0%2Fxmnz5ld9KSP6dXtLK7TctUKMdMJeAbrg7zazoJyyyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMP96Qid53Zlvf6Kg4KtwDGVJ0o0%2FfSSNIKUFpiU2h73rwYun5YZgL1q3AV3W4yk2uDI9CuhHgq8V4k7CRKZ0Jqm2GVhha%2B5%2F4FGOaNJ7DhtltZucX1e45YmaWj%2Fd72f8jF6flLUbZPWuH6SUfUhgFv3MgL%2FHClAsw2JItq9FJ%2BSzS2O5OMadlR0iXUSV2pr5f5rNzM0734klgHopdr5uOasE27UEcy8Qoh6N7wZPkp9P%2BPIor0iL1ckbQsPTkwORJSNCwfKjQESN4GOvweKbsUWQA7sH%2BDB%2BksDcPckQHp4n48ovBRznPnaV3I%2FadEMqD2zmsyw5aLmJtmLkkKGUumruicDCGpk4rLWW3oCRzf7SFqJrC%2FoxkDjHBePMC%2Fs06trf4YxFgEPt1Lsd455wsJCu8MIaOMTqgt2mxPnZw7lAoAJofyaoBsrL3Y6WIQIOLbhDlYMGfEKCWmQJg%2BOXf5iIGpgAXFX3QdekQqqUmfcJBgy60HpO5ZP6foXqHshqtTr6ClkaC3Z6SPaC0tPt9wFyxgyKQ97hnBEIcIyQDrLTJZaIsHJQAzehJBKZhn9sOlsy6pKwWkBk5FLrlqs33XeFE3sdcqny7%2FLny%2FzsLWWmV5DPjBESggvIbdReQ6e4b50mVcTjuQfUbV7sw9erPyQY6pgFZl6AIs2O5PSEoxBRe7O0ZyETO%2FlM1Qs2FkkXoNzLOT5sN%2FQuIhS7IUhZlkAjNkb4JHjcJKrqhYcq5t%2FXXNiIeTBpCCWzxYjRbQps1gxLKIsvfD8PEONRKn9REmv6vfuxVz3YBRmBwrhN%2FGhebkXmiJgveFl%2BggyJljd6Abct7AvhNEx7jxO6L1pH39tZ0%2B0RMq7Csx82KG1NvpKq2teoI8R5CJ7rz&X-Amz-Signature=b198fb0105ce695acd786554384996830ddcb5af63a3957964cd2aadd908ae81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTHW7QQ6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU3szXgZPy9SEmcuG5rjcoiB8nzNlyuNzqatsHJcisHAiA0%2Fxmnz5ld9KSP6dXtLK7TctUKMdMJeAbrg7zazoJyyyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMP96Qid53Zlvf6Kg4KtwDGVJ0o0%2FfSSNIKUFpiU2h73rwYun5YZgL1q3AV3W4yk2uDI9CuhHgq8V4k7CRKZ0Jqm2GVhha%2B5%2F4FGOaNJ7DhtltZucX1e45YmaWj%2Fd72f8jF6flLUbZPWuH6SUfUhgFv3MgL%2FHClAsw2JItq9FJ%2BSzS2O5OMadlR0iXUSV2pr5f5rNzM0734klgHopdr5uOasE27UEcy8Qoh6N7wZPkp9P%2BPIor0iL1ckbQsPTkwORJSNCwfKjQESN4GOvweKbsUWQA7sH%2BDB%2BksDcPckQHp4n48ovBRznPnaV3I%2FadEMqD2zmsyw5aLmJtmLkkKGUumruicDCGpk4rLWW3oCRzf7SFqJrC%2FoxkDjHBePMC%2Fs06trf4YxFgEPt1Lsd455wsJCu8MIaOMTqgt2mxPnZw7lAoAJofyaoBsrL3Y6WIQIOLbhDlYMGfEKCWmQJg%2BOXf5iIGpgAXFX3QdekQqqUmfcJBgy60HpO5ZP6foXqHshqtTr6ClkaC3Z6SPaC0tPt9wFyxgyKQ97hnBEIcIyQDrLTJZaIsHJQAzehJBKZhn9sOlsy6pKwWkBk5FLrlqs33XeFE3sdcqny7%2FLny%2FzsLWWmV5DPjBESggvIbdReQ6e4b50mVcTjuQfUbV7sw9erPyQY6pgFZl6AIs2O5PSEoxBRe7O0ZyETO%2FlM1Qs2FkkXoNzLOT5sN%2FQuIhS7IUhZlkAjNkb4JHjcJKrqhYcq5t%2FXXNiIeTBpCCWzxYjRbQps1gxLKIsvfD8PEONRKn9REmv6vfuxVz3YBRmBwrhN%2FGhebkXmiJgveFl%2BggyJljd6Abct7AvhNEx7jxO6L1pH39tZ0%2B0RMq7Csx82KG1NvpKq2teoI8R5CJ7rz&X-Amz-Signature=655376d8351da5f2613324ca25087d60e133ac52f7af78d19c81e09048a7b02c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

