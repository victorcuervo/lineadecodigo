---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE4PCGNO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGycVHDpSYl8iao3bunne4wLbXSFhdn1bFN3osxSv%2FHdAiEAmaiIESFMXi%2B2FEgOoY21kIHOexR5730XdVFUtUC5hQEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVkGJhIRO8ZGoyhTyrcA0FP%2FotPT2OsXmqYbmS5efRRaD1u3X2oPcydxejVJwepiYhTqWHWWSSa10GoKpu5uVkwpvhfdAKhmUeltPtOqm5gS%2FhP%2Boa0VF62tPv3MxHhZLo1UuLjPLoG45XW%2FQv8ZAwUVJDI5zNmJNrKHhcTDxlkQ%2FMS1HV88cGg0k3hw3ouoiBEoPSvk8N0hbAey%2BR3qssGMjKJ%2FOO4tuYuOXG2QY9QdpPa784lnpNma0OjmdEqVbUIGhpHS46QjLmA6QgUE6CCXzcqHAcKp5ihDazpyIQ2s6P3azJ0yC1JlFE7VRdJe9UV%2Fhglm9skR0Q2yAYDwPzs6rGTHjALXv%2BbjLc8rV9sOugKJ9%2BzklW8liAPIAdoecfQY9UiBdgsIlChvThpDrWD6th9R2kSwoN6CZ%2BuSadpWV2Eyp0SztbG4RxU1ukOE%2FJyWS4ihpeAn2ou0%2BTBIvN8DTs%2BpcZVrK%2FwHn46DDv8MaelXjXM20pNh6MsGRdULcU9WbmecIotJMf1MDYa43RqqvrqqwjU9X3HCQxInSCXqUa6exM0D0Pxy65LWK1giMXIp9MSPNww8AZI6o476v7ThBStIJ9xyRfYvcaNRpURRatC%2FR1WcaUDY%2BaYvXzfT%2BhtSFnkgaY2ETeaMLX90skGOqUBz9VTvPBdlslZx7HjVgAsv7D6vvVXY9oGUEFxZ2dWgrW9oGjQB2rAupLBN%2BB7GsGRwLrP5sLFMI%2FjXG104llXxfJGdjAGzg%2FKMv5ImU%2F8QU35oB3qIHAabCXboiQJmfXVkKQBHjvVBFQJ%2FZLyWfJJLaDGtdTd9ctsmConaySta1Y7VoSDHDr2RUqFahdmAtB2%2BI4C1qSLrhFEqCvOFGNpMVIGfrew&X-Amz-Signature=7517fdc20fee87f3ae48eb0570b2c08ba73cbfd935a48f6f0d07b3f24f57502f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE4PCGNO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGycVHDpSYl8iao3bunne4wLbXSFhdn1bFN3osxSv%2FHdAiEAmaiIESFMXi%2B2FEgOoY21kIHOexR5730XdVFUtUC5hQEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVkGJhIRO8ZGoyhTyrcA0FP%2FotPT2OsXmqYbmS5efRRaD1u3X2oPcydxejVJwepiYhTqWHWWSSa10GoKpu5uVkwpvhfdAKhmUeltPtOqm5gS%2FhP%2Boa0VF62tPv3MxHhZLo1UuLjPLoG45XW%2FQv8ZAwUVJDI5zNmJNrKHhcTDxlkQ%2FMS1HV88cGg0k3hw3ouoiBEoPSvk8N0hbAey%2BR3qssGMjKJ%2FOO4tuYuOXG2QY9QdpPa784lnpNma0OjmdEqVbUIGhpHS46QjLmA6QgUE6CCXzcqHAcKp5ihDazpyIQ2s6P3azJ0yC1JlFE7VRdJe9UV%2Fhglm9skR0Q2yAYDwPzs6rGTHjALXv%2BbjLc8rV9sOugKJ9%2BzklW8liAPIAdoecfQY9UiBdgsIlChvThpDrWD6th9R2kSwoN6CZ%2BuSadpWV2Eyp0SztbG4RxU1ukOE%2FJyWS4ihpeAn2ou0%2BTBIvN8DTs%2BpcZVrK%2FwHn46DDv8MaelXjXM20pNh6MsGRdULcU9WbmecIotJMf1MDYa43RqqvrqqwjU9X3HCQxInSCXqUa6exM0D0Pxy65LWK1giMXIp9MSPNww8AZI6o476v7ThBStIJ9xyRfYvcaNRpURRatC%2FR1WcaUDY%2BaYvXzfT%2BhtSFnkgaY2ETeaMLX90skGOqUBz9VTvPBdlslZx7HjVgAsv7D6vvVXY9oGUEFxZ2dWgrW9oGjQB2rAupLBN%2BB7GsGRwLrP5sLFMI%2FjXG104llXxfJGdjAGzg%2FKMv5ImU%2F8QU35oB3qIHAabCXboiQJmfXVkKQBHjvVBFQJ%2FZLyWfJJLaDGtdTd9ctsmConaySta1Y7VoSDHDr2RUqFahdmAtB2%2BI4C1qSLrhFEqCvOFGNpMVIGfrew&X-Amz-Signature=7b938947b31f8d549ff9b4b8d10ac4fbeaf63206726d128bfcecebb81ce0567f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

