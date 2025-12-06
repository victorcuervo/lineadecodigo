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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJ5OKJP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJGyncL87ayfL8S%2B8bDHJBq0qNHigMEgSiGwguHJH4iQIhANCVe4HwNZ2XPecpLrqS10f1dz4eb6KTs4QxLi0kk%2B8hKv8DCGkQABoMNjM3NDIzMTgzODA1IgzbmKOOKqR4eMkjIeIq3AMHoCXMUGiognMPIV47OdDxlqzIKPurWBl8sR0Lv2%2FCowOtbnz7iEXnXH8Z8x7qbOEH%2B166hSeEyb1jLYXvmjv8g8u1zHKbAxHyF69q1eZmDYwWt6%2FkyKqxx4BgW4bIBQKv0oino9BK6epIdAZjFPcVwV4%2FEEwRqnv%2BZrh33%2BYfkCFW46Yn0W6t%2BlzkAPOoYTGomEMjK2qP1h2gygFszR7GfZyAZDv2Tc6JMhIRiQWCZNlP%2FiK8FxjN7SQB0Mqb%2FWOw%2FzZq0yI5k%2BGBvzukt85OjiQkj3djZhZRd4%2FyjyItGA3%2F%2FB303h7MxMgojRm%2F8KA5LwQhvDKvX9UPYuJ8fVVF4lXL%2Fd6VtgWSuGe5F46AFjI4dk%2FDxCltmU1hKYBXerZ2ZYacE%2F68BZCn92TSiHmgwr7Tdqr3zNYoOZoeWLxhBXuh1P8HmTMUoUaVHDSlsSF1F%2FnDmeSx4aScT2%2Fyfti4%2FHDMTGYnffCCqMb73IP2UvInR8C8ohoK93el22exTV7bi63M%2FifzAwY2gYpCvGf9Y4O32G%2FQsDEUqp9Eve2G4UGhiCpc8wTXZFUN1vox1W8IC9o8rrsar5TcKl4k%2BHn%2F%2BbhyUhKGYuPYyQGNrMHqgrVwmXGDdqiumPX0bjCV6M3JBjqkATgwv7M8yVmu7hDPIYhZXYqVUTDcRhHINgXejB2ESMzJBIjd%2FelSNqfMXdFpqCBiJEpNlyGc3Oa%2BHlU4iif0seZX97lIhT115Qt7sbfAnj612kydEhMCk9wZMaFRo2lKfq5KLJuHce0KcRac1qSCapPpPePQHHqKbs6Ltkb1E%2BZbGbBdHhb1L1pSg9Vh8wqMBawZT97NPpPpcnKwRtJrSUE2T6W4&X-Amz-Signature=1074424d8e6cfa8751fb4847065fb2b56d4348f8c73952e40eaad6dd910248b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJ5OKJP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJGyncL87ayfL8S%2B8bDHJBq0qNHigMEgSiGwguHJH4iQIhANCVe4HwNZ2XPecpLrqS10f1dz4eb6KTs4QxLi0kk%2B8hKv8DCGkQABoMNjM3NDIzMTgzODA1IgzbmKOOKqR4eMkjIeIq3AMHoCXMUGiognMPIV47OdDxlqzIKPurWBl8sR0Lv2%2FCowOtbnz7iEXnXH8Z8x7qbOEH%2B166hSeEyb1jLYXvmjv8g8u1zHKbAxHyF69q1eZmDYwWt6%2FkyKqxx4BgW4bIBQKv0oino9BK6epIdAZjFPcVwV4%2FEEwRqnv%2BZrh33%2BYfkCFW46Yn0W6t%2BlzkAPOoYTGomEMjK2qP1h2gygFszR7GfZyAZDv2Tc6JMhIRiQWCZNlP%2FiK8FxjN7SQB0Mqb%2FWOw%2FzZq0yI5k%2BGBvzukt85OjiQkj3djZhZRd4%2FyjyItGA3%2F%2FB303h7MxMgojRm%2F8KA5LwQhvDKvX9UPYuJ8fVVF4lXL%2Fd6VtgWSuGe5F46AFjI4dk%2FDxCltmU1hKYBXerZ2ZYacE%2F68BZCn92TSiHmgwr7Tdqr3zNYoOZoeWLxhBXuh1P8HmTMUoUaVHDSlsSF1F%2FnDmeSx4aScT2%2Fyfti4%2FHDMTGYnffCCqMb73IP2UvInR8C8ohoK93el22exTV7bi63M%2FifzAwY2gYpCvGf9Y4O32G%2FQsDEUqp9Eve2G4UGhiCpc8wTXZFUN1vox1W8IC9o8rrsar5TcKl4k%2BHn%2F%2BbhyUhKGYuPYyQGNrMHqgrVwmXGDdqiumPX0bjCV6M3JBjqkATgwv7M8yVmu7hDPIYhZXYqVUTDcRhHINgXejB2ESMzJBIjd%2FelSNqfMXdFpqCBiJEpNlyGc3Oa%2BHlU4iif0seZX97lIhT115Qt7sbfAnj612kydEhMCk9wZMaFRo2lKfq5KLJuHce0KcRac1qSCapPpPePQHHqKbs6Ltkb1E%2BZbGbBdHhb1L1pSg9Vh8wqMBawZT97NPpPpcnKwRtJrSUE2T6W4&X-Amz-Signature=6f93ccf34a1f64f723ce554cbd6232fe51647bd99a20aaae688d3c5caaf6cdfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
