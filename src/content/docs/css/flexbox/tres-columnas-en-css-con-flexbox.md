---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5LZXUO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOC%2BMzHtjYo3TuLjRTt1bfg7vYGgHpboBgfYz1h2vmwAIgK%2BvfQv1Zv0MpfLECV5oS1Jg2U9cuARXyNq3h8RVHKy8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGtPSN8f2Wd5S6%2BkFircA2Z7vfRqe99I%2F0EoLnH4xW%2FhW%2BKJqFUoDucBT4Emw2DKPqoZ78EHVDkps86rWSDInLrYx8jH0GOKLo4fWVa7mNQiPrE2M1FwWwTCtyu3TuIlEfooMiKfJj9dG%2B3LLsu%2BqQ%2BvW2iLh%2FisJ77bWgIewjs9ZAMc7721ybJxVnvA36ktPbXkeOVWW3j4FcomM9eQGlOKvAXiwpKOilAeF7usWkeCAbCYYqct%2FDvTJagbuJvyVpAgcc675EzaCm4KD6sEgVXlbs2oRC%2BbevQCfv7%2Buurc6rgDrvUAUW8KEr53YtAwOWnspbUifAuYhGcy021EvaS0JggHRQ7Tc%2Bcjhrc0LKG0SvxcPrRxa%2FmZVuIC%2BOGPieUIArnure5GFrZqAusy%2B1jWIceEbFCUjRnhvMcwkBsWnx4WYIjuVywdxWFnQHl%2BEPJ0006GjCITEoFFbB1L9xO1nnlS7SpolNkjNN9dciSUCIuZKXjjTYkE0mGS2wFhEy33ASLrFWegw5E3gZnVTp9grzn6se4gBrEJ0AuH%2FMhORFAJ9z44qpXlwWsMCOhLVVjx3O7QsKMByxDwvMy7Cw8bOYQqE8C3Rn0O6j6bIqpMBdEAavbBuMBgiNAb43zcBwZBxGJ3B%2FYgtkZ8MPrMy8kGOqUBwCsbn6NypaHQFLI1RT8zQW4s7ZJiIJsadNXOcXsOt7%2Fsy%2FUjU%2FtWHms1XD%2FBHq0pSJT%2Fw%2BI65RtEaqRADJ2aJLbuC%2Blnqz%2FweA0d2gz6Wyrk7vjOFrqcWruRdKU827tCIe5VBNZMzR3zdgGtva41%2FkZ3uznZOkE66zwqCo4WntAn515%2B40VOSmUnP5VjQ20uC%2BE5qcTOqH%2BJcyZeIKNP5DjpaovA&X-Amz-Signature=c638b2b0ac57af4a79b9f6c442596595c05cf6a1b9ffad2711272b2f9751b344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5LZXUO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOC%2BMzHtjYo3TuLjRTt1bfg7vYGgHpboBgfYz1h2vmwAIgK%2BvfQv1Zv0MpfLECV5oS1Jg2U9cuARXyNq3h8RVHKy8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGtPSN8f2Wd5S6%2BkFircA2Z7vfRqe99I%2F0EoLnH4xW%2FhW%2BKJqFUoDucBT4Emw2DKPqoZ78EHVDkps86rWSDInLrYx8jH0GOKLo4fWVa7mNQiPrE2M1FwWwTCtyu3TuIlEfooMiKfJj9dG%2B3LLsu%2BqQ%2BvW2iLh%2FisJ77bWgIewjs9ZAMc7721ybJxVnvA36ktPbXkeOVWW3j4FcomM9eQGlOKvAXiwpKOilAeF7usWkeCAbCYYqct%2FDvTJagbuJvyVpAgcc675EzaCm4KD6sEgVXlbs2oRC%2BbevQCfv7%2Buurc6rgDrvUAUW8KEr53YtAwOWnspbUifAuYhGcy021EvaS0JggHRQ7Tc%2Bcjhrc0LKG0SvxcPrRxa%2FmZVuIC%2BOGPieUIArnure5GFrZqAusy%2B1jWIceEbFCUjRnhvMcwkBsWnx4WYIjuVywdxWFnQHl%2BEPJ0006GjCITEoFFbB1L9xO1nnlS7SpolNkjNN9dciSUCIuZKXjjTYkE0mGS2wFhEy33ASLrFWegw5E3gZnVTp9grzn6se4gBrEJ0AuH%2FMhORFAJ9z44qpXlwWsMCOhLVVjx3O7QsKMByxDwvMy7Cw8bOYQqE8C3Rn0O6j6bIqpMBdEAavbBuMBgiNAb43zcBwZBxGJ3B%2FYgtkZ8MPrMy8kGOqUBwCsbn6NypaHQFLI1RT8zQW4s7ZJiIJsadNXOcXsOt7%2Fsy%2FUjU%2FtWHms1XD%2FBHq0pSJT%2Fw%2BI65RtEaqRADJ2aJLbuC%2Blnqz%2FweA0d2gz6Wyrk7vjOFrqcWruRdKU827tCIe5VBNZMzR3zdgGtva41%2FkZ3uznZOkE66zwqCo4WntAn515%2B40VOSmUnP5VjQ20uC%2BE5qcTOqH%2BJcyZeIKNP5DjpaovA&X-Amz-Signature=555b85716c27f8a35dedff09d1d2990f5abd8711d969757e90c85c7282a5b73b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

