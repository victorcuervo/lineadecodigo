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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VFDCELD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FaW5n2TtZrUUItiJ6swJqAK%2Fc16QKKoHVtOjMSM2vIgIhAJ2OQ9aF5Gg1y6NRfIy4Txakfs34je5T5v9Xb2KU6dw4Kv8DCHUQABoMNjM3NDIzMTgzODA1IgydQCl%2FVa64Q3w8BG4q3APDzJgcmvO8gj%2BQ6og8VTEt2ZruVavkX8er5HlhOcQ6xOPNzygnRhzW%2BxXwqDJtRSI%2BSvMJx3lGSLdEBqtbBArbZoa%2BHWebpTV%2B3vqypprqALU6V2F%2BOW88jD5DQjY7zdQ%2BenMWtzfnTduPqFFHZU%2Fj%2F64duKKpMG8VyKsTRLoqs5QKVZJKQeBBYXY0lzhlh2w%2FkLaqUOWCMt%2F5UfNkmJh0PrZivtVNEf73qf%2B9H3ZfX9eFv60weY82vs7f99VQj9P1jKG0Sa2j36Bd5FVpDEIHC%2FfEJTqML9Z2ssldt5IJAH3doIX3zocOfgOIYTBAmEcVuRhBZpu63QPRS9zDJ6btIf6yPP62r8C46n%2FZzWMJThzQNnAqMQObW8nJ%2BI3HpPpy78oLaIqZmPd2bx3Xh%2BGU%2F5F6cjN9qcGnJNvTCLXLItiVAyh9oVa2%2FrHSilMAQR%2FyavJrYFsEv8umFbrr7xR0gPWqT%2BKNTXPSSm%2Bh4aR5TUxYuyYIb%2Fxv1M2Weiy0xeqA5sqCMmJ%2Brc9wuUWoueHjqzgbG8KcQvVbH1dFtmaXvUmVpJC0bfH993h%2BQqAl7DmQZb5sK9msD36xb50DucauJYzKahZo6cw20D4Q4EuDwhL%2F6GTtPG2HY0RJPTDOptDJBjqkAePeHFOrjUAnEtBPnylFp%2B5zIzXXDtIHtWDUJ1klG05L1PAIgBPWI6KShQp3pkkDrivyTP28OIwV0HEB76cq3dsHyX4liAlbYogGJPKsoiFQfzHBD4QmrM4CqvFqFV8%2FyyseuYeCgRRYPmicWLvpfFhu%2BLnOsuIUarZ4D2axkzTZHbb2SfkUU4BwM1LFwmPvGd8GPS8ZrJrzzLN3eIU%2FZYJVGcMt&X-Amz-Signature=050bc14661f21435107f51a537bb8117d269895e110e1f1628a9eb8480af1cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VFDCELD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FaW5n2TtZrUUItiJ6swJqAK%2Fc16QKKoHVtOjMSM2vIgIhAJ2OQ9aF5Gg1y6NRfIy4Txakfs34je5T5v9Xb2KU6dw4Kv8DCHUQABoMNjM3NDIzMTgzODA1IgydQCl%2FVa64Q3w8BG4q3APDzJgcmvO8gj%2BQ6og8VTEt2ZruVavkX8er5HlhOcQ6xOPNzygnRhzW%2BxXwqDJtRSI%2BSvMJx3lGSLdEBqtbBArbZoa%2BHWebpTV%2B3vqypprqALU6V2F%2BOW88jD5DQjY7zdQ%2BenMWtzfnTduPqFFHZU%2Fj%2F64duKKpMG8VyKsTRLoqs5QKVZJKQeBBYXY0lzhlh2w%2FkLaqUOWCMt%2F5UfNkmJh0PrZivtVNEf73qf%2B9H3ZfX9eFv60weY82vs7f99VQj9P1jKG0Sa2j36Bd5FVpDEIHC%2FfEJTqML9Z2ssldt5IJAH3doIX3zocOfgOIYTBAmEcVuRhBZpu63QPRS9zDJ6btIf6yPP62r8C46n%2FZzWMJThzQNnAqMQObW8nJ%2BI3HpPpy78oLaIqZmPd2bx3Xh%2BGU%2F5F6cjN9qcGnJNvTCLXLItiVAyh9oVa2%2FrHSilMAQR%2FyavJrYFsEv8umFbrr7xR0gPWqT%2BKNTXPSSm%2Bh4aR5TUxYuyYIb%2Fxv1M2Weiy0xeqA5sqCMmJ%2Brc9wuUWoueHjqzgbG8KcQvVbH1dFtmaXvUmVpJC0bfH993h%2BQqAl7DmQZb5sK9msD36xb50DucauJYzKahZo6cw20D4Q4EuDwhL%2F6GTtPG2HY0RJPTDOptDJBjqkAePeHFOrjUAnEtBPnylFp%2B5zIzXXDtIHtWDUJ1klG05L1PAIgBPWI6KShQp3pkkDrivyTP28OIwV0HEB76cq3dsHyX4liAlbYogGJPKsoiFQfzHBD4QmrM4CqvFqFV8%2FyyseuYeCgRRYPmicWLvpfFhu%2BLnOsuIUarZ4D2axkzTZHbb2SfkUU4BwM1LFwmPvGd8GPS8ZrJrzzLN3eIU%2FZYJVGcMt&X-Amz-Signature=21a39c2ff7565378400f32a09c998090ecb15a17627a8701692a48ed197dcaad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
