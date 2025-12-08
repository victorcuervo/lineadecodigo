---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCYDKUCB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcAKMQI0Eo9ZCYc75P8wdu1U1XiI8uEGCNwKOnOmAvNAiAmYv2Xw0GWlvA99dSc%2FHFxNm78Xe3L9KAC4QtnMvPADyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhYn0N7M9EbAWUv%2FKtwDbDaVTuYfa8n%2FyRjAvSiya0nSJBakjtQsdHNX0KtodKJHe6kWjs9t5a1eHHMjZBWt7Pac94wwTZHMr73RRr6IzazbWbK4HeQv8FqxoGu7fomrzI5vfJ6tYmEgXoO6QFiomrIRbWBnufIn0r0rUnFBPJqNxFEHpWDUKYw6Een0t8cOoF2OHo413VgR0N1iVldo8MXs7hVZvqhVTtfkZGpNW%2FppRPn%2FDXDUbwzWMfX%2Fy2fvkXc43REltqSbTddHyF1%2B%2FT9NImm6LWtGMZRhdOeww7SDDrnHKSp1kvD%2FgE2gz6ieewXlayBHD1YRubC%2B%2FKmR%2BpbXYsdQosrV4U6pTDm3eLuc%2BA0XmhpuNDv9QjYjUJeNWWRo%2Fom3f%2BsssET%2BB8%2BsW1Xv5jsF%2FLIFqcHAWJmUH5gpGf6Ng5xEZAzr79ozUkDoXQUUtyYnOjjCC9byGKWorQ8lRXVFT3H3sxY708AXUf%2BylORKIedIRjOcEzK4%2Bs7%2B3tGdSs7%2BnCG2IGwQ7yRHAaOm3oU4xh4WY5rc1jPkNq%2FFVh5zwx6yY%2Bb2gxNqJgsdzWOYU2qgGQVc7DGg%2BWm9FQyfEgxuAjJDbb8T7FDDFU6pdBgZ3VsyAPBbpW7Ua%2BKsReG%2FSvLCvPAVBIcwgKLYyQY6pgFm65%2BIEM0YPtW7uAzZnzyYF7aKBZfDcSAD9YQSL%2BewwxGzuJ%2FesRxvSUTYO5ioRgqqJougoiToioseG7ULs4ZtfbAijFfxptI2l1ehmZSQeDHXopGExKu%2FcZGwsJt4MEQCpFubxm23LvY8QfpqlxizIDrCjYsr0FoiwQt%2BU98ZaQKThXgGVVySShinHFwl1zoL4nLTwpX7VFd15Lqx3vMenuydC3jF&X-Amz-Signature=65fedcaac1b6a60ac81a5f96b2486aa0b3491aa7c896184700cdf418ee6eb5ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCYDKUCB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcAKMQI0Eo9ZCYc75P8wdu1U1XiI8uEGCNwKOnOmAvNAiAmYv2Xw0GWlvA99dSc%2FHFxNm78Xe3L9KAC4QtnMvPADyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhYn0N7M9EbAWUv%2FKtwDbDaVTuYfa8n%2FyRjAvSiya0nSJBakjtQsdHNX0KtodKJHe6kWjs9t5a1eHHMjZBWt7Pac94wwTZHMr73RRr6IzazbWbK4HeQv8FqxoGu7fomrzI5vfJ6tYmEgXoO6QFiomrIRbWBnufIn0r0rUnFBPJqNxFEHpWDUKYw6Een0t8cOoF2OHo413VgR0N1iVldo8MXs7hVZvqhVTtfkZGpNW%2FppRPn%2FDXDUbwzWMfX%2Fy2fvkXc43REltqSbTddHyF1%2B%2FT9NImm6LWtGMZRhdOeww7SDDrnHKSp1kvD%2FgE2gz6ieewXlayBHD1YRubC%2B%2FKmR%2BpbXYsdQosrV4U6pTDm3eLuc%2BA0XmhpuNDv9QjYjUJeNWWRo%2Fom3f%2BsssET%2BB8%2BsW1Xv5jsF%2FLIFqcHAWJmUH5gpGf6Ng5xEZAzr79ozUkDoXQUUtyYnOjjCC9byGKWorQ8lRXVFT3H3sxY708AXUf%2BylORKIedIRjOcEzK4%2Bs7%2B3tGdSs7%2BnCG2IGwQ7yRHAaOm3oU4xh4WY5rc1jPkNq%2FFVh5zwx6yY%2Bb2gxNqJgsdzWOYU2qgGQVc7DGg%2BWm9FQyfEgxuAjJDbb8T7FDDFU6pdBgZ3VsyAPBbpW7Ua%2BKsReG%2FSvLCvPAVBIcwgKLYyQY6pgFm65%2BIEM0YPtW7uAzZnzyYF7aKBZfDcSAD9YQSL%2BewwxGzuJ%2FesRxvSUTYO5ioRgqqJougoiToioseG7ULs4ZtfbAijFfxptI2l1ehmZSQeDHXopGExKu%2FcZGwsJt4MEQCpFubxm23LvY8QfpqlxizIDrCjYsr0FoiwQt%2BU98ZaQKThXgGVVySShinHFwl1zoL4nLTwpX7VFd15Lqx3vMenuydC3jF&X-Amz-Signature=69113d44191d6d32287edf92d3392e015d3b98858fbb4c57c085f5cc85483256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

