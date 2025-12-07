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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645BSFL33%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOXqsPr968ViwhNE9mueEiwAYWNBpt99LF2TaCtDhf8QIgYKxluBxQFy8RujS5y%2FojXIaiNGhqBDMCnGNdfklQ0kgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH82u2uW9VP7%2BQcZvCrcAwuMX0NuH%2F63YsXItGt3tbqjX5Ze3nl%2FwDAF4scHKy0RC4BsSd1Ski4GmCfLx9qqIL3Ync684Mjk8g044CnBKHn4ikzIBosZuaqMqlG1at3YdJFpVBP6Avj7sDHQS9W25ybVmEvwlyXZL5ERJb6qQsO2ZTveMndSzCZJAQqDktpiLWQFncpwGmE2qfyjPfUzxPj0VI%2B6JhZteZulthIwRrIGX9WHlnfHmy8MxrZ02hQvVGgLmYorMWtgdENohWdktrzmeGa6mGZVzi7exXy3NPnGD7hnSaumWwYBWsr%2FmqivzPT0Sdr5cDmbkzOnynohjyDSpPr7Rf2jKf6NJ42PIGwHZN5Tvdc1O9YSSwcI3zpowgQCewLtSM3IEFQHxNqNCbY78rewe%2B%2BDejG%2F%2BFiAJ1UJhsChR1AFv89%2Bvj1d%2FCD4AlFp7Q%2BNe7p3vS8M0koLGGRUCGjYLwe%2BrlA7Mt2JYFzAawF4XJEpurl66NWJhHRFCpIn12%2F6ryaWIAWDN72n%2Ff18xfwAxtkRTgups7vmldqbtGeJ88QvKE5NcuVQ%2B2aHoS%2FYOyb02n1wrz1z8P6DWBHb4gmgS2e1Eqxlh9K3kR3dgAWJOnUjmu3KNrVEp0OGdoen%2FCNCDd%2Fj5fgYMOj90skGOqUBK3eQYqKnwObrRWa4VWUehGRwwewhmrU%2FvWZFyHnVtzAQ7OYMC8SMoQ2cfy7AGLqjFXm6i2eGl9kdw7zIZ7I0h5Q8YYucMLTcATRJXPEnZBcYUViJuzILf0yjsC05TPL25BKHrJMK%2FRa3y7XAdMghTZtGvf6AP1QrWz5nj8Xh7fvnhYXxgTKGsGNT1suT%2FeCBvUHhfFpejqmo8MP3GtQZ%2FdNi%2FgAV&X-Amz-Signature=08fa2109f8047833c79f213f733133210dd7af7c10a2e9422502e4f5750d697f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645BSFL33%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOXqsPr968ViwhNE9mueEiwAYWNBpt99LF2TaCtDhf8QIgYKxluBxQFy8RujS5y%2FojXIaiNGhqBDMCnGNdfklQ0kgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH82u2uW9VP7%2BQcZvCrcAwuMX0NuH%2F63YsXItGt3tbqjX5Ze3nl%2FwDAF4scHKy0RC4BsSd1Ski4GmCfLx9qqIL3Ync684Mjk8g044CnBKHn4ikzIBosZuaqMqlG1at3YdJFpVBP6Avj7sDHQS9W25ybVmEvwlyXZL5ERJb6qQsO2ZTveMndSzCZJAQqDktpiLWQFncpwGmE2qfyjPfUzxPj0VI%2B6JhZteZulthIwRrIGX9WHlnfHmy8MxrZ02hQvVGgLmYorMWtgdENohWdktrzmeGa6mGZVzi7exXy3NPnGD7hnSaumWwYBWsr%2FmqivzPT0Sdr5cDmbkzOnynohjyDSpPr7Rf2jKf6NJ42PIGwHZN5Tvdc1O9YSSwcI3zpowgQCewLtSM3IEFQHxNqNCbY78rewe%2B%2BDejG%2F%2BFiAJ1UJhsChR1AFv89%2Bvj1d%2FCD4AlFp7Q%2BNe7p3vS8M0koLGGRUCGjYLwe%2BrlA7Mt2JYFzAawF4XJEpurl66NWJhHRFCpIn12%2F6ryaWIAWDN72n%2Ff18xfwAxtkRTgups7vmldqbtGeJ88QvKE5NcuVQ%2B2aHoS%2FYOyb02n1wrz1z8P6DWBHb4gmgS2e1Eqxlh9K3kR3dgAWJOnUjmu3KNrVEp0OGdoen%2FCNCDd%2Fj5fgYMOj90skGOqUBK3eQYqKnwObrRWa4VWUehGRwwewhmrU%2FvWZFyHnVtzAQ7OYMC8SMoQ2cfy7AGLqjFXm6i2eGl9kdw7zIZ7I0h5Q8YYucMLTcATRJXPEnZBcYUViJuzILf0yjsC05TPL25BKHrJMK%2FRa3y7XAdMghTZtGvf6AP1QrWz5nj8Xh7fvnhYXxgTKGsGNT1suT%2FeCBvUHhfFpejqmo8MP3GtQZ%2FdNi%2FgAV&X-Amz-Signature=176d8dde600d7e15c6ef5c59e2870868125c6949e772f40217236fa426f9c085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
