---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJQYVWNK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGWOtwarANnY2qjRI%2BNVK97JHN2enxvgAH%2B8OSVgg4gAIgGRXUxfK37ueNGiKqCVEDHNI9gIv5KzB6%2FO0wjff09qcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHSQ%2BlDU79Y4BBBTOCrcAxcL01fZcMSQ0PVDM7q2fWgREu5xMYODfz5NZASM9xMKfon%2FyVYg1RoSnCtbY%2BN%2BAeWhP0fKYCPVQqaKjATJ5zXG7OxJ%2F5trqYKl4WNlQl8VzitEf7921HVjYM7WPik1w%2Bd75%2BTynamjlvQQaJdo%2B6Jh%2BGhjGq%2BprRDgRNFKMTNP57%2F%2FsPYFLofS1ivGdEd5h%2FH9kBAIoup85%2FAKd2ISdmFiJrPF7Ca0mrE0DPZnIrCpesfnzZMCf%2B%2FQof1siQ3q5pMz%2BafZ6j3KKbgoTkcYE%2BMWOluiKb0nVo06VLYzcznre6pLp0JjlBB%2FtkqBaBaqdAmhXLLUNM6KS5yacxTKDuZngCwnRkL9QSbZiNY9m%2B75rv7ST7DX3vhnqVv%2BJHTdFB9h7V6b5SrnIZzzytojXtuYxlVjuoRZrcDQvWWanrZDIF50GAk%2BErDVbJXiBs1Nuqz6bhqkddDDItXnlpIMDTFsnNfVuab4BZdX3VHOFtFpGWYsXjn6Fcb%2FlP54zIRGDPQpsMwSnH9ZY9vqBVMAv%2F0%2FL2LgRaBoa1Nl8cqdkdJ6HEETOCJGQSGmpHnHJiZ7moXMd75RoE5JPuN4KAmBhZDu69jzy2CBMV3wRCK%2FCSfiWFgsksVTvbdds7j%2BMJ%2Bm0MkGOqUB0qjb9tN%2F1bkxUL3XmvIsUZG2GyGJGICim7BhYQhKgpkrgx1EzN7FaIUeeVWtO7HMCF9dlbcOgFaFvH8w3OY5OAMZksVaRC8Qh3fy%2Bk9XAnj9HRR8tbMI7iuIqNGETP38OzR5OU8Z5lLtXBh%2BfN9ZkSC2Vdpj89z8EKMA%2BlQKPkph8U%2B7CL0FaVznvJrEeWSusvk8zNXs%2Big39AXK0oUNiIOi%2BiOm&X-Amz-Signature=27366cc5e8dbf3593b40cbc6bb730a9f330f50f7f6b84c6ac59375c596afc7c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJQYVWNK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGWOtwarANnY2qjRI%2BNVK97JHN2enxvgAH%2B8OSVgg4gAIgGRXUxfK37ueNGiKqCVEDHNI9gIv5KzB6%2FO0wjff09qcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHSQ%2BlDU79Y4BBBTOCrcAxcL01fZcMSQ0PVDM7q2fWgREu5xMYODfz5NZASM9xMKfon%2FyVYg1RoSnCtbY%2BN%2BAeWhP0fKYCPVQqaKjATJ5zXG7OxJ%2F5trqYKl4WNlQl8VzitEf7921HVjYM7WPik1w%2Bd75%2BTynamjlvQQaJdo%2B6Jh%2BGhjGq%2BprRDgRNFKMTNP57%2F%2FsPYFLofS1ivGdEd5h%2FH9kBAIoup85%2FAKd2ISdmFiJrPF7Ca0mrE0DPZnIrCpesfnzZMCf%2B%2FQof1siQ3q5pMz%2BafZ6j3KKbgoTkcYE%2BMWOluiKb0nVo06VLYzcznre6pLp0JjlBB%2FtkqBaBaqdAmhXLLUNM6KS5yacxTKDuZngCwnRkL9QSbZiNY9m%2B75rv7ST7DX3vhnqVv%2BJHTdFB9h7V6b5SrnIZzzytojXtuYxlVjuoRZrcDQvWWanrZDIF50GAk%2BErDVbJXiBs1Nuqz6bhqkddDDItXnlpIMDTFsnNfVuab4BZdX3VHOFtFpGWYsXjn6Fcb%2FlP54zIRGDPQpsMwSnH9ZY9vqBVMAv%2F0%2FL2LgRaBoa1Nl8cqdkdJ6HEETOCJGQSGmpHnHJiZ7moXMd75RoE5JPuN4KAmBhZDu69jzy2CBMV3wRCK%2FCSfiWFgsksVTvbdds7j%2BMJ%2Bm0MkGOqUB0qjb9tN%2F1bkxUL3XmvIsUZG2GyGJGICim7BhYQhKgpkrgx1EzN7FaIUeeVWtO7HMCF9dlbcOgFaFvH8w3OY5OAMZksVaRC8Qh3fy%2Bk9XAnj9HRR8tbMI7iuIqNGETP38OzR5OU8Z5lLtXBh%2BfN9ZkSC2Vdpj89z8EKMA%2BlQKPkph8U%2B7CL0FaVznvJrEeWSusvk8zNXs%2Big39AXK0oUNiIOi%2BiOm&X-Amz-Signature=ccac073b60bef954f02cd157b498b502e6d2e110b9884aa64d333273f0572029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

