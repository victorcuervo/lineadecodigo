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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E42UPGK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiBw5NL1u3B8zrkLf%2FffsQTKM61PO5%2BOk1eTyfDls0gwIhAIx94D0m4e0rRToMhqhiavhx2teC1zPHlkPTX7dXcbM9KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4sE0e%2FjMdnyor%2F2cq3AMf01kVF0RqGQB359vLxpaWkijn3%2FdX6Qvp2NFm5lDfMg45xElkJGLJMbJ5oc7wCYom69NpKTUyB%2BOBL%2B7%2BOWRjyJZy%2BX4aGU8IR8KHr9BpANSyfvfhH8KmmAhgQqjmWUHiT6QMw8uKyY6aH6G%2FYdlk5i8dFH4jjbDQmO5JEYdsmadk3Kj2mz%2BNfHq6N%2BTJ3SanR4hYOYXA1Dh0dFPPFcpKGBDscI6xUiH2fgu8T8kODTfjSAK8GU1S9Klx9btVo%2B2wbGp%2BXWW2jEjTyYkU3UO4w3iz5unc%2FF0XweXbDIDy0RRrMXx6UZxlWgb8PsEYJwnE64EXCeWbg5wV8B%2FpqohPeKCi%2BciNCWARNQWDf7HmRsc%2BIxLgYRMQ3N98c7lLD4XlmyRALKnYCeHrt9q0Dx3yTiSynEJ3yDMWnUAX7xLzOugMh%2FARdmowwmO%2FXWFbGfWIQqKj034CK6okicwa87viUD4%2FfLQqUAVtYLo%2ByCVNDuJmHbpL2apll1CCuZ6PSNDqL8Oc2VWJ1T0sV5yyvOKDCvQ%2BpeFt1RFPFXhLVAXr1NyRLlGTlPevauhV0FEWbeHLkAm1xVPenYKPKLPl6uWxnghFWvopSgdfHoeGw3neJMjXeM0sZVfs7F3q1TCZ79jJBjqkAer4z%2BQuBNLVoi2oQ8JKfgVpuVkGp6%2BOfc%2BatXK95qFe%2FZBTrUm8q6N93U0JrmTKMIAFBTk1Apzu6cJb7XDfVp9ANChh%2BkfUOWwGZ2OmgHEr3PcwDz1BBPvFBnZmrcio46s2wUC5R%2B%2Fxk6gEfxmTK0xTRK6Y1s2bOvz%2FgE%2BCqN97kaZYdo6qT%2Bp3dn9DydUZPQY81Iw5HzJt6yocteTbIDxL%2FZu5&X-Amz-Signature=e7fa68730b6d1e677c168f9f50987244a9377d9ff0dfc5080519d629aac6e35e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E42UPGK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiBw5NL1u3B8zrkLf%2FffsQTKM61PO5%2BOk1eTyfDls0gwIhAIx94D0m4e0rRToMhqhiavhx2teC1zPHlkPTX7dXcbM9KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4sE0e%2FjMdnyor%2F2cq3AMf01kVF0RqGQB359vLxpaWkijn3%2FdX6Qvp2NFm5lDfMg45xElkJGLJMbJ5oc7wCYom69NpKTUyB%2BOBL%2B7%2BOWRjyJZy%2BX4aGU8IR8KHr9BpANSyfvfhH8KmmAhgQqjmWUHiT6QMw8uKyY6aH6G%2FYdlk5i8dFH4jjbDQmO5JEYdsmadk3Kj2mz%2BNfHq6N%2BTJ3SanR4hYOYXA1Dh0dFPPFcpKGBDscI6xUiH2fgu8T8kODTfjSAK8GU1S9Klx9btVo%2B2wbGp%2BXWW2jEjTyYkU3UO4w3iz5unc%2FF0XweXbDIDy0RRrMXx6UZxlWgb8PsEYJwnE64EXCeWbg5wV8B%2FpqohPeKCi%2BciNCWARNQWDf7HmRsc%2BIxLgYRMQ3N98c7lLD4XlmyRALKnYCeHrt9q0Dx3yTiSynEJ3yDMWnUAX7xLzOugMh%2FARdmowwmO%2FXWFbGfWIQqKj034CK6okicwa87viUD4%2FfLQqUAVtYLo%2ByCVNDuJmHbpL2apll1CCuZ6PSNDqL8Oc2VWJ1T0sV5yyvOKDCvQ%2BpeFt1RFPFXhLVAXr1NyRLlGTlPevauhV0FEWbeHLkAm1xVPenYKPKLPl6uWxnghFWvopSgdfHoeGw3neJMjXeM0sZVfs7F3q1TCZ79jJBjqkAer4z%2BQuBNLVoi2oQ8JKfgVpuVkGp6%2BOfc%2BatXK95qFe%2FZBTrUm8q6N93U0JrmTKMIAFBTk1Apzu6cJb7XDfVp9ANChh%2BkfUOWwGZ2OmgHEr3PcwDz1BBPvFBnZmrcio46s2wUC5R%2B%2Fxk6gEfxmTK0xTRK6Y1s2bOvz%2FgE%2BCqN97kaZYdo6qT%2Bp3dn9DydUZPQY81Iw5HzJt6yocteTbIDxL%2FZu5&X-Amz-Signature=98cdf778ec5098389622f62839c758031a0b674044987c039b7d3506ce955b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
