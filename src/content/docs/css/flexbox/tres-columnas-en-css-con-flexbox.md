---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T5BWZHR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWnGw35StGgei7u0n7tHOBJC%2BTZZokKxMH%2BQngWdmsTwIhAMfXYkao%2BQRu3B5kt%2FX1hT1nxx5srV7Q7B1Qx%2FfI0l%2BoKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9wpCvV9dcj9y0Pdoq3AOfRm5Nr0fblqDMPVzc1Rda5AaizGG6070gSCZrqd8HBmfGI4p0bsAdx2DFyTQjgFD1S3%2BGOBsThGhyi2UFC0BrkrXu0wsnHguE%2BbXVVO2PMygn57cJYNVnk7Ez9xNbtEy4eL3jlC%2FKcf2UPokXiG%2BDJPE6OKfaWVSkHLIpPsUgQNbPBAg%2Bhk7OlB9JEARtBGB19uPPod58fvARP3LgXBzhNw8CHVxQostnHt%2FvznZsk6otQtZruLz79CGB8Wz2vy5QnVIAm79JwcPqfJhU73mHvF%2Bsl3TfJcB5vkyfPRuaRIE3ef1cB14JkUHt2mvhykh0DTdWMmTSTDwgS9tzQOXnyxXwGVitG2BhXFNg6S4aMmWaJIXyEoCecwgPCmrl611FbQnC4bZlmxapz62Zj8xQo2H1dbBKmI4kpgMxlqPC2Jz8tr%2BytkM2my76DN9ElshXiEVzG98wYchPganZv4TScBpX7jal2XqBBEG1x5Hbublu8Jqq8jYtmi9SEB9ojChix9eB9B%2Fpx6OoGBEU3qjahqgbwy6eaqZmJ%2F0X384jr29Rl6k8gPAJEwkvfWQB01y89BffUXZT0PMNtMvsk%2BuLOafSZ5iKjnVDI1HOUi2fwWkISSvsFfM4nERpsDCq3NzJBjqkAXoTKIXwmhDhIJU%2B4Hm%2BwmS4GB5bf8QSEfIdkOM08zRWg8jn22y33ZbjHcvxqVxgXOYt4lQmqn4ogN3oxc7rNniV47UHolCbZbM%2BK30XFWsxYLgk6oZ2NLOvE9DhJO8x4g8eK5aCaX3nAH9kz%2BTtyZX%2BIFWtiBGxSevXYCvzw%2FmLH6sI35oCe7yd2DAbd9%2FWccAIoMrrU3MBzacJ9HpVl3FC1OeU&X-Amz-Signature=efaede8ccdc0a7ac045f8a97d865a51def2fb43be49f4c32387eb74de57f46a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T5BWZHR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWnGw35StGgei7u0n7tHOBJC%2BTZZokKxMH%2BQngWdmsTwIhAMfXYkao%2BQRu3B5kt%2FX1hT1nxx5srV7Q7B1Qx%2FfI0l%2BoKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9wpCvV9dcj9y0Pdoq3AOfRm5Nr0fblqDMPVzc1Rda5AaizGG6070gSCZrqd8HBmfGI4p0bsAdx2DFyTQjgFD1S3%2BGOBsThGhyi2UFC0BrkrXu0wsnHguE%2BbXVVO2PMygn57cJYNVnk7Ez9xNbtEy4eL3jlC%2FKcf2UPokXiG%2BDJPE6OKfaWVSkHLIpPsUgQNbPBAg%2Bhk7OlB9JEARtBGB19uPPod58fvARP3LgXBzhNw8CHVxQostnHt%2FvznZsk6otQtZruLz79CGB8Wz2vy5QnVIAm79JwcPqfJhU73mHvF%2Bsl3TfJcB5vkyfPRuaRIE3ef1cB14JkUHt2mvhykh0DTdWMmTSTDwgS9tzQOXnyxXwGVitG2BhXFNg6S4aMmWaJIXyEoCecwgPCmrl611FbQnC4bZlmxapz62Zj8xQo2H1dbBKmI4kpgMxlqPC2Jz8tr%2BytkM2my76DN9ElshXiEVzG98wYchPganZv4TScBpX7jal2XqBBEG1x5Hbublu8Jqq8jYtmi9SEB9ojChix9eB9B%2Fpx6OoGBEU3qjahqgbwy6eaqZmJ%2F0X384jr29Rl6k8gPAJEwkvfWQB01y89BffUXZT0PMNtMvsk%2BuLOafSZ5iKjnVDI1HOUi2fwWkISSvsFfM4nERpsDCq3NzJBjqkAXoTKIXwmhDhIJU%2B4Hm%2BwmS4GB5bf8QSEfIdkOM08zRWg8jn22y33ZbjHcvxqVxgXOYt4lQmqn4ogN3oxc7rNniV47UHolCbZbM%2BK30XFWsxYLgk6oZ2NLOvE9DhJO8x4g8eK5aCaX3nAH9kz%2BTtyZX%2BIFWtiBGxSevXYCvzw%2FmLH6sI35oCe7yd2DAbd9%2FWccAIoMrrU3MBzacJ9HpVl3FC1OeU&X-Amz-Signature=be0ffbc7c8ae1383e15fec6b5f5b545142a3ba1cda9ce3dc68ad060ad3c3e486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

