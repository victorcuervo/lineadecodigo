---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DGJMJB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8xvHTbuRTr2OUSETInaZsWwufOcDG5j6daL1IcrSAJgIhAMxcF0WAPp1P72rSwVMfsCI6i4dKxcML6xedYi0wEdxUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyux1mXxxsEBbeMdWoq3AMfqrtEoDWCqfZ6lXrgCHmeqEX164ztCy7TR9BRkdwhmg8%2FiIgrvH0fvwTNDvAsPop698RRVd%2BoGSuqtg19lMn2A2x49zlHpY8zbepeyr9vkvbsUjE%2F7LApfFh15s87VW32puMS8PMRKYMXMn7rB12%2BZiUxNWSuv2ILj4bht85gromNaa3WyO03ogDfNs%2FYZG1MVbSiNj0OQ5puOcMFdvD6zGIyzzdZKBv2i5OwBe5cTtU9b%2BHDnVqwXdDm4E4ZrHHpI5Qv5PhcEbTW%2FwEZarZCGgC3pkY%2B26BK2grhB8JUakm88UX17OA1f29Bh0YEjQ1VtYcqMfA1YK5Xcc71pavC5Q6t%2BB9hIItWyQOKAKc2TR%2FlBkUcjs8kh8bCrDBbh7sS5gsZMSGsjaOS4WQgyfZDf37XhQ3cLWapvOQp8dhmpXk2gELwNJboV8Vax%2FJ%2BfGMzBfGhqRKlRqELccaVbbu49c8RGsdlGjIrOfdDQrNVn8agCKMAy2L5CEIhSGgXYFFTJYpXTShuX1ynqi1yplLe94GMalmrRnHZ7lJVUTghgXdNRIMel1Lkq%2B0Vgk1%2FyYPbioxkEBx2YWBzMCVSb9mfzIZtOAFOd6BKoO9qXzV3g8IaP9IAggf84p7o2zDbh9%2FJBjqkAQPlfN2z9KbZBd%2FBmlMbdtDAkE5T4EF58rvqNZHYA%2BsKAdAnNntrMn9sx1CQfs4sRNuscXF5v0SJ7t%2FNNC%2FhGXUJBoa0p78wjPJlJIwMZscNNd7sOm8rlRhdL%2FUYrt60xH%2Fr%2FuPOfLBBZ6RSHirK5ONPSuRC3wprZMQydcs6k0%2Bji60bqwnJr3dDV5Z0OAXtzTuJ9ZZqWqQRcy%2F0rBL07hkZHIJT&X-Amz-Signature=20036c5c957065ed50c67c87237fef6940d2bb78006d8c7ab8722b1709c1d73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DGJMJB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8xvHTbuRTr2OUSETInaZsWwufOcDG5j6daL1IcrSAJgIhAMxcF0WAPp1P72rSwVMfsCI6i4dKxcML6xedYi0wEdxUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyux1mXxxsEBbeMdWoq3AMfqrtEoDWCqfZ6lXrgCHmeqEX164ztCy7TR9BRkdwhmg8%2FiIgrvH0fvwTNDvAsPop698RRVd%2BoGSuqtg19lMn2A2x49zlHpY8zbepeyr9vkvbsUjE%2F7LApfFh15s87VW32puMS8PMRKYMXMn7rB12%2BZiUxNWSuv2ILj4bht85gromNaa3WyO03ogDfNs%2FYZG1MVbSiNj0OQ5puOcMFdvD6zGIyzzdZKBv2i5OwBe5cTtU9b%2BHDnVqwXdDm4E4ZrHHpI5Qv5PhcEbTW%2FwEZarZCGgC3pkY%2B26BK2grhB8JUakm88UX17OA1f29Bh0YEjQ1VtYcqMfA1YK5Xcc71pavC5Q6t%2BB9hIItWyQOKAKc2TR%2FlBkUcjs8kh8bCrDBbh7sS5gsZMSGsjaOS4WQgyfZDf37XhQ3cLWapvOQp8dhmpXk2gELwNJboV8Vax%2FJ%2BfGMzBfGhqRKlRqELccaVbbu49c8RGsdlGjIrOfdDQrNVn8agCKMAy2L5CEIhSGgXYFFTJYpXTShuX1ynqi1yplLe94GMalmrRnHZ7lJVUTghgXdNRIMel1Lkq%2B0Vgk1%2FyYPbioxkEBx2YWBzMCVSb9mfzIZtOAFOd6BKoO9qXzV3g8IaP9IAggf84p7o2zDbh9%2FJBjqkAQPlfN2z9KbZBd%2FBmlMbdtDAkE5T4EF58rvqNZHYA%2BsKAdAnNntrMn9sx1CQfs4sRNuscXF5v0SJ7t%2FNNC%2FhGXUJBoa0p78wjPJlJIwMZscNNd7sOm8rlRhdL%2FUYrt60xH%2Fr%2FuPOfLBBZ6RSHirK5ONPSuRC3wprZMQydcs6k0%2Bji60bqwnJr3dDV5Z0OAXtzTuJ9ZZqWqQRcy%2F0rBL07hkZHIJT&X-Amz-Signature=6ff20074889547a62fe8f4f3f0716c603960042e234a1a4e45d5fb48684d2847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

