---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA5K4XQI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FRLnLMmlpR9N3BNJb16vZwQZI7AKDfdKlIkHVhbl9%2FQIhAPAezH7YShEgnIYdqXb5QhBhqTT0sv7EftXGsgoMlmAkKv8DCHUQABoMNjM3NDIzMTgzODA1Igw89arkoCOonF6su7kq3AMILoDqm8ObQjijPndzAQuh5ZsU5CyAsRMzlN5TBG4ZO9mcXKKdWMT%2F0lDvv76YonCmJLX2JK25C8GNHVIgiy7voel3N7f%2B1D7Kk0JJOjWHmrdZE9uh6Lvb6zGbjstxHmi6RG8Eva5Xd1QbCsq66fjvni8rnCnzStL2noqApStk%2B9K9cZnCsDNPb9%2FvJvr0u8%2BNY3vORwV0yWAarhgaV298EweWcovcAw2E93hTVLzMK0FIWPfqlIM4qBqM0%2B9XTk6s57WcyxZau7AXTrG99K3A3iPlwphk672hb8xT6HS7m%2B7e2yOkpxjUAYxV8waHTvADU0O4WSqqzDjAAAqzTAqCaczdfEbdYkNfk41TuUI6WPeSIuDwr1ysamANC%2BfWoTRmu%2F89RQUk7AkOt20YYgKgCbluLyBgw3QUiCS861hLWXmkRKkyRYWmpKEp9AuXqmOO1E9tiG0bIlSqEcB%2F0HB9vf%2FoZoqMmn620zsIMTyJxNmljrMVtMlXyhQyWpd%2BtEyLOg1IzXf8qQYocVXGAXw075mR9YhZHCMzfWApHWxk4eIYW%2F8%2FZ4CDMHuzceavDS%2FLffHCCU3An4lCiR1UgIUGkALPEMj2qsRfJ2axfLEQ0WoX2hjHhfTsitEXLzDhptDJBjqkAX65mN54v9u6GMeHk%2BWSyTKH7agQn%2BOXryZ4ju6oyepfo9yIwA2l73yWYw43SNajSCfgL%2B112T4Ndp91Da2%2FBkZyysmMJcHirQRF%2BV6qCp%2BlLJmzGPagac6YGMZ1uQMa6aFpVF%2BFcSfMIhAcloZ3B4PdWpKbPqiUfcy%2FH2hrpPaQxPDY1yGomEvo29SCCgexTXCAYywr51vWgbREfAB6lcSs7VTe&X-Amz-Signature=d9228df6caa7f28097aaa51a745ee625fa6b55b464cec5409c02f2ff7f16d66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA5K4XQI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FRLnLMmlpR9N3BNJb16vZwQZI7AKDfdKlIkHVhbl9%2FQIhAPAezH7YShEgnIYdqXb5QhBhqTT0sv7EftXGsgoMlmAkKv8DCHUQABoMNjM3NDIzMTgzODA1Igw89arkoCOonF6su7kq3AMILoDqm8ObQjijPndzAQuh5ZsU5CyAsRMzlN5TBG4ZO9mcXKKdWMT%2F0lDvv76YonCmJLX2JK25C8GNHVIgiy7voel3N7f%2B1D7Kk0JJOjWHmrdZE9uh6Lvb6zGbjstxHmi6RG8Eva5Xd1QbCsq66fjvni8rnCnzStL2noqApStk%2B9K9cZnCsDNPb9%2FvJvr0u8%2BNY3vORwV0yWAarhgaV298EweWcovcAw2E93hTVLzMK0FIWPfqlIM4qBqM0%2B9XTk6s57WcyxZau7AXTrG99K3A3iPlwphk672hb8xT6HS7m%2B7e2yOkpxjUAYxV8waHTvADU0O4WSqqzDjAAAqzTAqCaczdfEbdYkNfk41TuUI6WPeSIuDwr1ysamANC%2BfWoTRmu%2F89RQUk7AkOt20YYgKgCbluLyBgw3QUiCS861hLWXmkRKkyRYWmpKEp9AuXqmOO1E9tiG0bIlSqEcB%2F0HB9vf%2FoZoqMmn620zsIMTyJxNmljrMVtMlXyhQyWpd%2BtEyLOg1IzXf8qQYocVXGAXw075mR9YhZHCMzfWApHWxk4eIYW%2F8%2FZ4CDMHuzceavDS%2FLffHCCU3An4lCiR1UgIUGkALPEMj2qsRfJ2axfLEQ0WoX2hjHhfTsitEXLzDhptDJBjqkAX65mN54v9u6GMeHk%2BWSyTKH7agQn%2BOXryZ4ju6oyepfo9yIwA2l73yWYw43SNajSCfgL%2B112T4Ndp91Da2%2FBkZyysmMJcHirQRF%2BV6qCp%2BlLJmzGPagac6YGMZ1uQMa6aFpVF%2BFcSfMIhAcloZ3B4PdWpKbPqiUfcy%2FH2hrpPaQxPDY1yGomEvo29SCCgexTXCAYywr51vWgbREfAB6lcSs7VTe&X-Amz-Signature=03bb170c6040867b6d96829694c699c97e4565ceb0b0555c3d50413d39d6b2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

