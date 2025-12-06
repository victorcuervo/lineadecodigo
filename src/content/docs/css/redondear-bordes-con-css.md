---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA5K4XQI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FRLnLMmlpR9N3BNJb16vZwQZI7AKDfdKlIkHVhbl9%2FQIhAPAezH7YShEgnIYdqXb5QhBhqTT0sv7EftXGsgoMlmAkKv8DCHUQABoMNjM3NDIzMTgzODA1Igw89arkoCOonF6su7kq3AMILoDqm8ObQjijPndzAQuh5ZsU5CyAsRMzlN5TBG4ZO9mcXKKdWMT%2F0lDvv76YonCmJLX2JK25C8GNHVIgiy7voel3N7f%2B1D7Kk0JJOjWHmrdZE9uh6Lvb6zGbjstxHmi6RG8Eva5Xd1QbCsq66fjvni8rnCnzStL2noqApStk%2B9K9cZnCsDNPb9%2FvJvr0u8%2BNY3vORwV0yWAarhgaV298EweWcovcAw2E93hTVLzMK0FIWPfqlIM4qBqM0%2B9XTk6s57WcyxZau7AXTrG99K3A3iPlwphk672hb8xT6HS7m%2B7e2yOkpxjUAYxV8waHTvADU0O4WSqqzDjAAAqzTAqCaczdfEbdYkNfk41TuUI6WPeSIuDwr1ysamANC%2BfWoTRmu%2F89RQUk7AkOt20YYgKgCbluLyBgw3QUiCS861hLWXmkRKkyRYWmpKEp9AuXqmOO1E9tiG0bIlSqEcB%2F0HB9vf%2FoZoqMmn620zsIMTyJxNmljrMVtMlXyhQyWpd%2BtEyLOg1IzXf8qQYocVXGAXw075mR9YhZHCMzfWApHWxk4eIYW%2F8%2FZ4CDMHuzceavDS%2FLffHCCU3An4lCiR1UgIUGkALPEMj2qsRfJ2axfLEQ0WoX2hjHhfTsitEXLzDhptDJBjqkAX65mN54v9u6GMeHk%2BWSyTKH7agQn%2BOXryZ4ju6oyepfo9yIwA2l73yWYw43SNajSCfgL%2B112T4Ndp91Da2%2FBkZyysmMJcHirQRF%2BV6qCp%2BlLJmzGPagac6YGMZ1uQMa6aFpVF%2BFcSfMIhAcloZ3B4PdWpKbPqiUfcy%2FH2hrpPaQxPDY1yGomEvo29SCCgexTXCAYywr51vWgbREfAB6lcSs7VTe&X-Amz-Signature=411c107d8d2d621cef81b8ed3bdad6e788da1ace6ebbb502bfb53466547fbd84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA5K4XQI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FRLnLMmlpR9N3BNJb16vZwQZI7AKDfdKlIkHVhbl9%2FQIhAPAezH7YShEgnIYdqXb5QhBhqTT0sv7EftXGsgoMlmAkKv8DCHUQABoMNjM3NDIzMTgzODA1Igw89arkoCOonF6su7kq3AMILoDqm8ObQjijPndzAQuh5ZsU5CyAsRMzlN5TBG4ZO9mcXKKdWMT%2F0lDvv76YonCmJLX2JK25C8GNHVIgiy7voel3N7f%2B1D7Kk0JJOjWHmrdZE9uh6Lvb6zGbjstxHmi6RG8Eva5Xd1QbCsq66fjvni8rnCnzStL2noqApStk%2B9K9cZnCsDNPb9%2FvJvr0u8%2BNY3vORwV0yWAarhgaV298EweWcovcAw2E93hTVLzMK0FIWPfqlIM4qBqM0%2B9XTk6s57WcyxZau7AXTrG99K3A3iPlwphk672hb8xT6HS7m%2B7e2yOkpxjUAYxV8waHTvADU0O4WSqqzDjAAAqzTAqCaczdfEbdYkNfk41TuUI6WPeSIuDwr1ysamANC%2BfWoTRmu%2F89RQUk7AkOt20YYgKgCbluLyBgw3QUiCS861hLWXmkRKkyRYWmpKEp9AuXqmOO1E9tiG0bIlSqEcB%2F0HB9vf%2FoZoqMmn620zsIMTyJxNmljrMVtMlXyhQyWpd%2BtEyLOg1IzXf8qQYocVXGAXw075mR9YhZHCMzfWApHWxk4eIYW%2F8%2FZ4CDMHuzceavDS%2FLffHCCU3An4lCiR1UgIUGkALPEMj2qsRfJ2axfLEQ0WoX2hjHhfTsitEXLzDhptDJBjqkAX65mN54v9u6GMeHk%2BWSyTKH7agQn%2BOXryZ4ju6oyepfo9yIwA2l73yWYw43SNajSCfgL%2B112T4Ndp91Da2%2FBkZyysmMJcHirQRF%2BV6qCp%2BlLJmzGPagac6YGMZ1uQMa6aFpVF%2BFcSfMIhAcloZ3B4PdWpKbPqiUfcy%2FH2hrpPaQxPDY1yGomEvo29SCCgexTXCAYywr51vWgbREfAB6lcSs7VTe&X-Amz-Signature=0454112ca11d8f9f20943af3cd44d0c5cb2e076c5aebe00e8dd10e50fbd7e29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
