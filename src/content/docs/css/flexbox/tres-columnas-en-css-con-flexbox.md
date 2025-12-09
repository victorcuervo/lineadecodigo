---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMVSKG3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmdUuPHPe2%2FbW9270p8r2K35dscpAMk1S1f3Hi2xZeWAIgfrqhmYKjq1jKef%2FSkDIQcFWMEDnnlSB534%2FgZ2cX1cwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGpelzpfewEODjECCrcA2Q59uF1%2FfjUB1gxfjp%2BMrPFqH%2BPkNpdUcBdCfBJnUEp3VyjFhx3A7r86ankneynL0mhMt8rYohBXTCthBBsH0d0%2F%2Bo3M3zRmtOUMLumoWh8YZ4Sda6LWdcVU1CoLT8eUzOOWw%2BLWSoaRjERw3by3iTQoDpyQ9VTKHoHEAXtaPMffGslIMuNqkpocKzSowFHvuJB0i%2BOCvB%2BFcSNVm3h9cZ0zGt00t8HjhtEQrhdv6zJ8FjyP1nEh7yMg6V5s5Rgvxk2xe0cJ0QId11HBgygTe0rto2UwU5%2FRdW%2BbKiGKrfb1K0EvvA54zDgaUlxIzhv%2Bvt%2BZUBPX78O%2BRmjXbJdTwcKOtcHuCVEKR3SVkN0ds%2FUGBEqiKzEpHLuxt0c7GXdYAnq7jo9sdtKcyFZOOCu2UiBNzHzeymg6ntUuszSVErEhXK%2FiOA4HAWaEvj3Z5%2BQIbjlqfpD%2BN8IG8K7xv32eCqmwpjJtfFYzTAakibkPXNUo5WOsBHCqwMd0gKmCwcKo80SuKUiXWEOpILePIo4VylYr15bZ60fLGMln74PlASptG%2BGT9DvZ%2FfO39GRXqwpKvYOHNAXrsKPwPoN6tuTPtotRjc1dp8s0J4%2BUSLL3N6JDbCsZ%2B3OKHUUTk0DMPfo3ckGOqUBd%2FvVL4irgMI0yKDHNCHj8ropWi%2F1uesXXAvgrxmGqYYN8hwNsx6XKTOZlFUSie%2ByiUD0UkfIrw28NVfXjIZGskjmajGfJLVr8ApC4902ACu4PmlCEb62fF0HFRNBtL%2F0hDbU9wIemdbOJjnR5Hqq2%2BsQJOhiHVslW0bF%2ByKuT9%2B6Va8Vnd%2BIdf7ALil9YgDOl%2FQ3iSzNjjmRtkxzcdsGiig6FoTK&X-Amz-Signature=6959001c444e846005ff5cf3b68eb9fe392b9bf7ff08e44a4d85cfcd1faffec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMVSKG3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmdUuPHPe2%2FbW9270p8r2K35dscpAMk1S1f3Hi2xZeWAIgfrqhmYKjq1jKef%2FSkDIQcFWMEDnnlSB534%2FgZ2cX1cwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGpelzpfewEODjECCrcA2Q59uF1%2FfjUB1gxfjp%2BMrPFqH%2BPkNpdUcBdCfBJnUEp3VyjFhx3A7r86ankneynL0mhMt8rYohBXTCthBBsH0d0%2F%2Bo3M3zRmtOUMLumoWh8YZ4Sda6LWdcVU1CoLT8eUzOOWw%2BLWSoaRjERw3by3iTQoDpyQ9VTKHoHEAXtaPMffGslIMuNqkpocKzSowFHvuJB0i%2BOCvB%2BFcSNVm3h9cZ0zGt00t8HjhtEQrhdv6zJ8FjyP1nEh7yMg6V5s5Rgvxk2xe0cJ0QId11HBgygTe0rto2UwU5%2FRdW%2BbKiGKrfb1K0EvvA54zDgaUlxIzhv%2Bvt%2BZUBPX78O%2BRmjXbJdTwcKOtcHuCVEKR3SVkN0ds%2FUGBEqiKzEpHLuxt0c7GXdYAnq7jo9sdtKcyFZOOCu2UiBNzHzeymg6ntUuszSVErEhXK%2FiOA4HAWaEvj3Z5%2BQIbjlqfpD%2BN8IG8K7xv32eCqmwpjJtfFYzTAakibkPXNUo5WOsBHCqwMd0gKmCwcKo80SuKUiXWEOpILePIo4VylYr15bZ60fLGMln74PlASptG%2BGT9DvZ%2FfO39GRXqwpKvYOHNAXrsKPwPoN6tuTPtotRjc1dp8s0J4%2BUSLL3N6JDbCsZ%2B3OKHUUTk0DMPfo3ckGOqUBd%2FvVL4irgMI0yKDHNCHj8ropWi%2F1uesXXAvgrxmGqYYN8hwNsx6XKTOZlFUSie%2ByiUD0UkfIrw28NVfXjIZGskjmajGfJLVr8ApC4902ACu4PmlCEb62fF0HFRNBtL%2F0hDbU9wIemdbOJjnR5Hqq2%2BsQJOhiHVslW0bF%2ByKuT9%2B6Va8Vnd%2BIdf7ALil9YgDOl%2FQ3iSzNjjmRtkxzcdsGiig6FoTK&X-Amz-Signature=18f3fc04eba9b38144a7a3685baf3994c5fa50343c5641db621b6019058261b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

