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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNMP623U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2gG1n1URMajqGQ2VHaVkdvKAz1V4Am2Q2mgY6oVbpIwIgVzlC0fp1jHxZJjR79OQZgZDjC4yoWlSatgO6hWlT1nkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfvIGCII6TgypjG4SrcA7ZBkyxMQFH5c4miMg%2BeHvuX73wtHs1d2%2BepXd29FnvkZ%2FpPGYEjsedJ7KmsCea9sqWdP7ABEar32Ae6HqkGIePwcVW6nTPZPy2%2BqCs7npQxScmeirpTwflmLoAGBEFvnsn07ifs%2FLhuoyDIOjXf7RkC%2BMnip0ZGKMNgADtR%2BWfmR0%2BCvhBs11vg4R0G54i1GVr51ayaslGNN96IW2EX3%2B%2BCeL6TIhBactvZYJfpvNpng%2BHPbDT7rlQfehyPl2Udja%2FMfimQXg0KbZYT88f4tCRcPIHSxafDyCZqheYCqTDAcN7wLjeg1nYW7x75JeKW5MwqB00bX97MjIbN2iD4lC26ZiQVK8z0akmCI3pjIB%2B7etz6VZf7x6vhA1ItyIY%2B9vl9uRbRZ24unwDrkDZai%2FDIT1bBv3kYrBi3OEpVVabCJAaTwNSiD8Y%2FnwC%2Fk2JvWs0SoAYaAkP16hq4iw6ex6ot%2B4vDUIIxnfjTk37AWmY7Soc2kPoizjEdLwUEV%2Fcm1m7u5lnjPa0SmmmG4du2qN1NOeuGDaRswYXx5bgAWZwEQttZOGZJ4pwiK7MTAfVFcbfOxSWkqU6yeUTcRRPol0GguxSN2OWa%2F3XruDiyE8%2FDjKcUO2jnqKxz7zFfML6k38kGOqUBiBelkctcd1GVLNs8fo3kKjwu3ExQG8CDigwfvQ3Hu1tKgA2aPGZ1VCEnnbHxfNnMXFJ3pdk1jY05ynIU%2FXCJxng9i0miqUyqi3DvZjfZPljxyW0PwunfHpKL1V2%2BBhxUW0haXc2s2f0NgCfTNMW%2FtUHcNZQqymbiDYhnPtlPY7P3ZiZ3r5r7B7flRHxqypRqkodwCVN6fawG5sG3JLJpyWmrycNE&X-Amz-Signature=3b1d3d83104b183f963d06404b46ac7c5848c1a800eb623edaf7422d33403a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNMP623U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2gG1n1URMajqGQ2VHaVkdvKAz1V4Am2Q2mgY6oVbpIwIgVzlC0fp1jHxZJjR79OQZgZDjC4yoWlSatgO6hWlT1nkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfvIGCII6TgypjG4SrcA7ZBkyxMQFH5c4miMg%2BeHvuX73wtHs1d2%2BepXd29FnvkZ%2FpPGYEjsedJ7KmsCea9sqWdP7ABEar32Ae6HqkGIePwcVW6nTPZPy2%2BqCs7npQxScmeirpTwflmLoAGBEFvnsn07ifs%2FLhuoyDIOjXf7RkC%2BMnip0ZGKMNgADtR%2BWfmR0%2BCvhBs11vg4R0G54i1GVr51ayaslGNN96IW2EX3%2B%2BCeL6TIhBactvZYJfpvNpng%2BHPbDT7rlQfehyPl2Udja%2FMfimQXg0KbZYT88f4tCRcPIHSxafDyCZqheYCqTDAcN7wLjeg1nYW7x75JeKW5MwqB00bX97MjIbN2iD4lC26ZiQVK8z0akmCI3pjIB%2B7etz6VZf7x6vhA1ItyIY%2B9vl9uRbRZ24unwDrkDZai%2FDIT1bBv3kYrBi3OEpVVabCJAaTwNSiD8Y%2FnwC%2Fk2JvWs0SoAYaAkP16hq4iw6ex6ot%2B4vDUIIxnfjTk37AWmY7Soc2kPoizjEdLwUEV%2Fcm1m7u5lnjPa0SmmmG4du2qN1NOeuGDaRswYXx5bgAWZwEQttZOGZJ4pwiK7MTAfVFcbfOxSWkqU6yeUTcRRPol0GguxSN2OWa%2F3XruDiyE8%2FDjKcUO2jnqKxz7zFfML6k38kGOqUBiBelkctcd1GVLNs8fo3kKjwu3ExQG8CDigwfvQ3Hu1tKgA2aPGZ1VCEnnbHxfNnMXFJ3pdk1jY05ynIU%2FXCJxng9i0miqUyqi3DvZjfZPljxyW0PwunfHpKL1V2%2BBhxUW0haXc2s2f0NgCfTNMW%2FtUHcNZQqymbiDYhnPtlPY7P3ZiZ3r5r7B7flRHxqypRqkodwCVN6fawG5sG3JLJpyWmrycNE&X-Amz-Signature=328948d6dc5706bf896475b92f3e72d0a133d0217b531cb2e1fca21135e0995a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
