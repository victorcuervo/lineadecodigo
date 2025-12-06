---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2QPAJL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNApOWOrDbzKR6DErXIdpkcZ03xQWr5uBAYeB54BDH4wIhAMYNTKgCkVLZsCfldVTDEXi6IHwz0Ato5qXTnmxmsOXCKv8DCG0QABoMNjM3NDIzMTgzODA1Igyxexvv7pfUJN%2FIYQkq3AN%2BRZQzVfLtRTDpdZtCsqUcgp4NjiI9u6h4L1lFscml97qPt12rY2dWfQGRIc4%2BlQSPGT%2F3ud%2BEaGlCeofxbglXeWgCPQJmsm%2BlZT4aZJbpNkt%2FScg6mncvzdodZzTXc14suuefg8wHQqqvf0s4nnJ0Mb4XCeeKaM8OWtK2B6641N2Ln8wG5GFGQr%2Fkgz8rAg%2FXRqmjFvqkZXzE%2F5hQElPyyITsVmsMH0PZA%2B1yi%2FFwg9ssaG9%2Fy6ozWCRdUNpDtkcpc00e0DZCaOL8YwP4vrXUUDYmZzuVs5wJaokvMO%2BhaRbCDkmlO%2FuOPEcUS6VxUsmFE1KBAWY%2FhS1ovafX7qD9NLJXE4C7dIG%2Bh%2Fq1bdMU1whEXCXU%2FN%2FQkuyJFfbV8moqgbimBTds3lQ3725DnSFtSGEY7W6TMZOeB468237XiqnSROc0tYujoWW5j9OGJOG0MHR0peenyEOIlpFEEAQC41hSKRmsBzn0Bz5mD8Ab0tp2W%2BFzrbkzzqRxxRvpHksLb6W8UdvBUiQLAn%2BF1%2FTncQBy58istz7xmEat0YbHwygi27LuyQ1r6SmrkKqPjWUdurVeGwmw7evasO9WueA62hx4pBs2UmYUCWWdg1Ha93qtAQCG%2FFR4Nz8hYTDq3c7JBjqkAcpB07T1x5PSNs7oGNKd2pQJ2c3n3BGyVnm7JdVrhs%2BvSw4lE2rpD%2B2mSJ4T%2FcPtfhM%2BlmZwhgFJbbgmFczvZ7SUCijV9aQU%2BIanYuqfhXhEmUMzVyS2qBVDJesLS6eiwzpBHSLTwmiAZnGHEi7RjpgozVY36pxZ5%2BqLGF%2BDda%2Bf7BG9pSjnEkc2Emu6mLsC5Bg846RRNHiVJZlkaI%2F9E6qsuuzL&X-Amz-Signature=7a895ad018f4357bfe6115f6d3a34147ad7fa08e4b0be0c670c0e42c0d3ffd3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2QPAJL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNApOWOrDbzKR6DErXIdpkcZ03xQWr5uBAYeB54BDH4wIhAMYNTKgCkVLZsCfldVTDEXi6IHwz0Ato5qXTnmxmsOXCKv8DCG0QABoMNjM3NDIzMTgzODA1Igyxexvv7pfUJN%2FIYQkq3AN%2BRZQzVfLtRTDpdZtCsqUcgp4NjiI9u6h4L1lFscml97qPt12rY2dWfQGRIc4%2BlQSPGT%2F3ud%2BEaGlCeofxbglXeWgCPQJmsm%2BlZT4aZJbpNkt%2FScg6mncvzdodZzTXc14suuefg8wHQqqvf0s4nnJ0Mb4XCeeKaM8OWtK2B6641N2Ln8wG5GFGQr%2Fkgz8rAg%2FXRqmjFvqkZXzE%2F5hQElPyyITsVmsMH0PZA%2B1yi%2FFwg9ssaG9%2Fy6ozWCRdUNpDtkcpc00e0DZCaOL8YwP4vrXUUDYmZzuVs5wJaokvMO%2BhaRbCDkmlO%2FuOPEcUS6VxUsmFE1KBAWY%2FhS1ovafX7qD9NLJXE4C7dIG%2Bh%2Fq1bdMU1whEXCXU%2FN%2FQkuyJFfbV8moqgbimBTds3lQ3725DnSFtSGEY7W6TMZOeB468237XiqnSROc0tYujoWW5j9OGJOG0MHR0peenyEOIlpFEEAQC41hSKRmsBzn0Bz5mD8Ab0tp2W%2BFzrbkzzqRxxRvpHksLb6W8UdvBUiQLAn%2BF1%2FTncQBy58istz7xmEat0YbHwygi27LuyQ1r6SmrkKqPjWUdurVeGwmw7evasO9WueA62hx4pBs2UmYUCWWdg1Ha93qtAQCG%2FFR4Nz8hYTDq3c7JBjqkAcpB07T1x5PSNs7oGNKd2pQJ2c3n3BGyVnm7JdVrhs%2BvSw4lE2rpD%2B2mSJ4T%2FcPtfhM%2BlmZwhgFJbbgmFczvZ7SUCijV9aQU%2BIanYuqfhXhEmUMzVyS2qBVDJesLS6eiwzpBHSLTwmiAZnGHEi7RjpgozVY36pxZ5%2BqLGF%2BDda%2Bf7BG9pSjnEkc2Emu6mLsC5Bg846RRNHiVJZlkaI%2F9E6qsuuzL&X-Amz-Signature=763611172e135ad4c829159c28606ac2acbdca3d3b2989b65d109a70be0e07aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

