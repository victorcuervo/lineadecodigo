---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URWSDYYU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FCcQYeCL7oTOwMPg36nnMh4JCeaWoChnvkLgipRwFdwIgKjcokfuqfKC9Aqxmb2uQKcqjidyOYeXBWpS5gGcEBpYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1uFjvO8OUfWV2cACrcA0GXoyQXabqZHmMH8mnwBkg9VeUFLiV6ULorTlsdJc%2FKu%2F%2FIGKRGqtKkxzR12%2FdHAPT4poauWSzm1G%2F7%2BXC7CSxGIMNBu0Rdb3s3LZSyNrTgXSbj8SXFVwa%2F38AFVdgxtiSp7VY790GcI4cJVF0S53P84VvnjLjq6F9Toyj3niCVwEgfv59eFoZrF2bLmFZ4p8M71hwPGtS8xhajawYNMW4T8UHlojMRJLqx3mVJvNBnWEaR6lda%2FSgG%2FsRzYtVp%2FHSvSHZ7f%2B6G7a3Hsv6nImu4Jm6PqTACrBzEz%2FhwbZMLjaP3b2loI9Oe9%2ByemLBY%2BqiRtgAQm5J7wMKDCB2q8fCtClws%2FfXgMQgecxB4xKbEbyYR1uvDTY1ysB9%2FY8aKpl2tpOD2KSMF3dt5WpPNxtzbvZLiXqUY22o9%2FULaNFxlupQGI1sKegLv27hvnJgdBQPemj2SFURyvR%2FQiVbQwV4NoEYUtDmhcvZhe%2FayYlRaJb6VryxOOMkEcktvjr2rBjzJ7qB%2BXSjthvVTk3rVtxBMm%2FjmLZQ0qGwQB0CywP8oCdM7h5kPctPOqhKhI1PS8jd%2FZtQzr5uoD8%2FQTbGwNO2bYp4R15p%2BKZT1h0BXzDQOOMPTh2aBW2ALJ%2FIbMMqz1skGOqUBwC%2BW2mhnKzO5Uowwi9gY97oeV4cyeen8KH%2BWdvJqP%2FSr294td1pB9MH%2FZ9u5IocsZTZ7NqLoJstqgL4xYrHWuzUH7XD6VZvrJXAjigX%2Ba0l5eeRjbFQXOGcG%2BKk76f9bimIPWiAsVq6fdNpNS%2FFbsFs7bqIZZSTD%2FX2CVonBoftTAZzn0omPisTrjsXVjsRsZKQC2irbUjqXEWQ6n9XhxfoR7zUs&X-Amz-Signature=9bf102fb3cfa50a1b5b695f65ee0b58f4ec32fbfae7fdd1a2f8c01597a131f09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URWSDYYU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FCcQYeCL7oTOwMPg36nnMh4JCeaWoChnvkLgipRwFdwIgKjcokfuqfKC9Aqxmb2uQKcqjidyOYeXBWpS5gGcEBpYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1uFjvO8OUfWV2cACrcA0GXoyQXabqZHmMH8mnwBkg9VeUFLiV6ULorTlsdJc%2FKu%2F%2FIGKRGqtKkxzR12%2FdHAPT4poauWSzm1G%2F7%2BXC7CSxGIMNBu0Rdb3s3LZSyNrTgXSbj8SXFVwa%2F38AFVdgxtiSp7VY790GcI4cJVF0S53P84VvnjLjq6F9Toyj3niCVwEgfv59eFoZrF2bLmFZ4p8M71hwPGtS8xhajawYNMW4T8UHlojMRJLqx3mVJvNBnWEaR6lda%2FSgG%2FsRzYtVp%2FHSvSHZ7f%2B6G7a3Hsv6nImu4Jm6PqTACrBzEz%2FhwbZMLjaP3b2loI9Oe9%2ByemLBY%2BqiRtgAQm5J7wMKDCB2q8fCtClws%2FfXgMQgecxB4xKbEbyYR1uvDTY1ysB9%2FY8aKpl2tpOD2KSMF3dt5WpPNxtzbvZLiXqUY22o9%2FULaNFxlupQGI1sKegLv27hvnJgdBQPemj2SFURyvR%2FQiVbQwV4NoEYUtDmhcvZhe%2FayYlRaJb6VryxOOMkEcktvjr2rBjzJ7qB%2BXSjthvVTk3rVtxBMm%2FjmLZQ0qGwQB0CywP8oCdM7h5kPctPOqhKhI1PS8jd%2FZtQzr5uoD8%2FQTbGwNO2bYp4R15p%2BKZT1h0BXzDQOOMPTh2aBW2ALJ%2FIbMMqz1skGOqUBwC%2BW2mhnKzO5Uowwi9gY97oeV4cyeen8KH%2BWdvJqP%2FSr294td1pB9MH%2FZ9u5IocsZTZ7NqLoJstqgL4xYrHWuzUH7XD6VZvrJXAjigX%2Ba0l5eeRjbFQXOGcG%2BKk76f9bimIPWiAsVq6fdNpNS%2FFbsFs7bqIZZSTD%2FX2CVonBoftTAZzn0omPisTrjsXVjsRsZKQC2irbUjqXEWQ6n9XhxfoR7zUs&X-Amz-Signature=f6717e44b554a4ab1ecfd70f134613bf9befef915f0c496f258e2312bbf74ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

