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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDPFONPS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw9wllb3J6jgWAW9mbm9MjKa0vNtDStqiU7cmJi3dZegIgUHoYYN3WIjJxAZGnN%2BW6rb3X6qIDpR6avD435Q1ILm8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPZwk%2Fe4hPVYoa0dhyrcA6C8Y67d0qzFemfLcCPi3ndgapt%2B4ZGhlbxoxFXkFyWdvxpWOJbD2EHheNY5oE897lCyuxHbGd02ZiUu67MliB8JPVtbShgw4MtzzvRTIKB63Q%2BYQyo9ZZBiv441y%2FRKhjbBvzEkW3DlH55rLtgHTCKbF%2FHwWtc8RIbLgKme5a1IDYd9juXUNvPLtD7T3GqAfBLtVHqayLz25HQlgCbswbAP6nSH94FhBVJFyAgu4xXzW4X%2BoyrZCDMz3fz8Tl0giZ8MJR3lFr9acdo34fHo3yK7a3AF7sHOG68L89ikZVmwNUhY%2B6uL83WLfHTqazkszijHlFnmJFE50lm03zOoIPsiCJ6gZZgZq7Kd%2F6CW53mcQtgeeTVInLnl97NkkslCoKIYMtYdNkMN164e4ch7CiSLgkA2Ajay9WGPTzjS%2BV%2BdvyR3R9fPJk%2BG3JZ8lap%2FiueIBFHwldrU2SkR5i%2By4TharhehSzPKti4aOt2rJ6KLGYoLraIZH4upFfwEdDKtX8dxFHNthLzec6m3ijlvXif3wbLxY4BgsdBTvjbAOcfqdrT7TntWTKojvswMa6Neins02y3qYjbtVWUDpLSh%2Fm80KVevZOnzo%2F0r1JsDb5AmZvJNSJ%2FSIqprUbyUMMPzy8kGOqUBNjhMYUnCayADIx75lKWJekmdZRMVxm6SBBIUHdEwBRNMC1LN%2FX564QYpYrMfpiQaA%2BUjfFzwtbQeFclYijmHHN%2Fp8lhghBbr2d2kBQQn3gmq%2F3ihOJgq7aoyK7Orpw%2BczlDjpdwBzCyf7fJOV4rBhJ0Ukv94xLsRWD5wU4XSExcdQcfCQrS5qaWfL8jIWyEnx6yLxOkPjNJc5JH7EgDzXQNkfCxO&X-Amz-Signature=20ed0f3e2167832e1a884716fc291045e8f8f5134f682835ca17635949e090ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDPFONPS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw9wllb3J6jgWAW9mbm9MjKa0vNtDStqiU7cmJi3dZegIgUHoYYN3WIjJxAZGnN%2BW6rb3X6qIDpR6avD435Q1ILm8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPZwk%2Fe4hPVYoa0dhyrcA6C8Y67d0qzFemfLcCPi3ndgapt%2B4ZGhlbxoxFXkFyWdvxpWOJbD2EHheNY5oE897lCyuxHbGd02ZiUu67MliB8JPVtbShgw4MtzzvRTIKB63Q%2BYQyo9ZZBiv441y%2FRKhjbBvzEkW3DlH55rLtgHTCKbF%2FHwWtc8RIbLgKme5a1IDYd9juXUNvPLtD7T3GqAfBLtVHqayLz25HQlgCbswbAP6nSH94FhBVJFyAgu4xXzW4X%2BoyrZCDMz3fz8Tl0giZ8MJR3lFr9acdo34fHo3yK7a3AF7sHOG68L89ikZVmwNUhY%2B6uL83WLfHTqazkszijHlFnmJFE50lm03zOoIPsiCJ6gZZgZq7Kd%2F6CW53mcQtgeeTVInLnl97NkkslCoKIYMtYdNkMN164e4ch7CiSLgkA2Ajay9WGPTzjS%2BV%2BdvyR3R9fPJk%2BG3JZ8lap%2FiueIBFHwldrU2SkR5i%2By4TharhehSzPKti4aOt2rJ6KLGYoLraIZH4upFfwEdDKtX8dxFHNthLzec6m3ijlvXif3wbLxY4BgsdBTvjbAOcfqdrT7TntWTKojvswMa6Neins02y3qYjbtVWUDpLSh%2Fm80KVevZOnzo%2F0r1JsDb5AmZvJNSJ%2FSIqprUbyUMMPzy8kGOqUBNjhMYUnCayADIx75lKWJekmdZRMVxm6SBBIUHdEwBRNMC1LN%2FX564QYpYrMfpiQaA%2BUjfFzwtbQeFclYijmHHN%2Fp8lhghBbr2d2kBQQn3gmq%2F3ihOJgq7aoyK7Orpw%2BczlDjpdwBzCyf7fJOV4rBhJ0Ukv94xLsRWD5wU4XSExcdQcfCQrS5qaWfL8jIWyEnx6yLxOkPjNJc5JH7EgDzXQNkfCxO&X-Amz-Signature=64984e539de80dc622026a580a54ed3d69d4beb7f4e5df73f38d0bf98c7cb1de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
