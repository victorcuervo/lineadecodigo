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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFIQJBZQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpZB9lNv3QA8gyzWYTTMm9gOrbpsE6uqKmfOvDxzVT7AiAuRvUhPULhauuC6pNodIiBTHr%2Bte9dssfHlW37bNvIgSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtW8VqIwXGxomVlJDKtwD%2BM2FZomKS2emUyGv2zHuOjRgksVPW0WZSAAKxnebbX%2Bv9qMiblIIyQEWf5xIQqJmN1cadZSF1eVpf8r4STNi%2B0mM51ZmJdAt5E2lXCt9dpUoH9vJF%2BZ6Oopgh6MFZv04Apq%2F1xcpi9phl8XCtTunuJr9sNUQhc4kIM7JX%2Ba%2BHXkJF3VdL%2Bu5o0IV3DL7sFj1p6vuSMB8SZbeA0UNXi3PIlDDRs9F14R%2B%2BnydeZeRxYQ4Bo9MlPFyGuJHGAwW79vfo4EWUrNigjcaHbJO%2B3dnz%2Fwhfzf93x0TfUQ4Y%2BRWsZTJmVlBztI4gKF7ZvyxcPGqGoQM22JHZ5piTt5Hau0G5N6WJIpGMgoy%2BNerTFCOIjK4fGEIH412amWlKHXLAsMViYdo2qE18thABRjyYB0RoL88631XSm%2BPbzIKERiUO8SFsfqBTT6ckj%2FhE%2F5zLcQcExyif0ksmnIY6Tm8g%2BciV7Vc8eN5vG8hjRyonrUzgYCbjzIHcAMnStNtaUWPZk5XPsVkHWETw8NwvRou3vsjy8O6Ap%2B3Qdhgje16oBQDXyxxZmx6efcB1GPwI6TjHe6zAV9dsmp1F4HM95bz1lqr36wCBLC9%2FFLVdgFfaDaqTaIgd2Ym0KXBttvOx08wraXfyQY6pgELSUHxWdkZfBqVUUQ4wJcWlqcazrD0%2B2AuhHgqscun89YO6BjbOX7VojBLi077RUqomaIxIxXxStAX7Kqlu39Y25%2FRMkV%2FinDVU18anB9BFO1SmtwRS8V9swdWyIwSLlOhr61CmUsKAFWk7s1EUIy4k9VAzOi%2FYpYgGdEUAJ3lwLChmMc7RwS8%2Bm98yh3yEtpz8YSJu4Vf5snryJ3FMTTRd8fhUtZ5&X-Amz-Signature=26683bf73b38a4f6fe028a6af733f3d20e85a3e4fb5e5093ab4ae706770f1e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFIQJBZQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpZB9lNv3QA8gyzWYTTMm9gOrbpsE6uqKmfOvDxzVT7AiAuRvUhPULhauuC6pNodIiBTHr%2Bte9dssfHlW37bNvIgSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtW8VqIwXGxomVlJDKtwD%2BM2FZomKS2emUyGv2zHuOjRgksVPW0WZSAAKxnebbX%2Bv9qMiblIIyQEWf5xIQqJmN1cadZSF1eVpf8r4STNi%2B0mM51ZmJdAt5E2lXCt9dpUoH9vJF%2BZ6Oopgh6MFZv04Apq%2F1xcpi9phl8XCtTunuJr9sNUQhc4kIM7JX%2Ba%2BHXkJF3VdL%2Bu5o0IV3DL7sFj1p6vuSMB8SZbeA0UNXi3PIlDDRs9F14R%2B%2BnydeZeRxYQ4Bo9MlPFyGuJHGAwW79vfo4EWUrNigjcaHbJO%2B3dnz%2Fwhfzf93x0TfUQ4Y%2BRWsZTJmVlBztI4gKF7ZvyxcPGqGoQM22JHZ5piTt5Hau0G5N6WJIpGMgoy%2BNerTFCOIjK4fGEIH412amWlKHXLAsMViYdo2qE18thABRjyYB0RoL88631XSm%2BPbzIKERiUO8SFsfqBTT6ckj%2FhE%2F5zLcQcExyif0ksmnIY6Tm8g%2BciV7Vc8eN5vG8hjRyonrUzgYCbjzIHcAMnStNtaUWPZk5XPsVkHWETw8NwvRou3vsjy8O6Ap%2B3Qdhgje16oBQDXyxxZmx6efcB1GPwI6TjHe6zAV9dsmp1F4HM95bz1lqr36wCBLC9%2FFLVdgFfaDaqTaIgd2Ym0KXBttvOx08wraXfyQY6pgELSUHxWdkZfBqVUUQ4wJcWlqcazrD0%2B2AuhHgqscun89YO6BjbOX7VojBLi077RUqomaIxIxXxStAX7Kqlu39Y25%2FRMkV%2FinDVU18anB9BFO1SmtwRS8V9swdWyIwSLlOhr61CmUsKAFWk7s1EUIy4k9VAzOi%2FYpYgGdEUAJ3lwLChmMc7RwS8%2Bm98yh3yEtpz8YSJu4Vf5snryJ3FMTTRd8fhUtZ5&X-Amz-Signature=e9968dde2e6db17c4a96dc8d2027776d30b3559540d46cf7d18de9951c33d7f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
