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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMWEMZYQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8LPTSlDWneh3ASUDha%2FufzYYH%2BPJcSCcWhu%2FwnztQ1wIgLegf8XFbxkP1V7rcG4l%2Fyb9k4bCn%2Bx43yP%2BUZdYY0mcqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWPWVSyHH3j7BckBSrcA3O%2FevvEayXTaY%2FKgV5LBppd2Kh%2FoGomxZFw4fZZtf9hYtKGYs2sDDjWJVmKOKXVbnbtCnq8gbP3DQIYRVOuoZQtbiVeveiGD%2Fou8HkF80UJ%2FMJj4grOKQmRdniZAFhtm5ZPC6YoFJEoXLPbzGSb05bYo4e%2BDbLf96O5aQZcmqZMCQVXjzYbblGaTEKMvXNzyCuJlsk%2F5gee%2FC9T9pDbJjqMla52PLdTP3qzU3wD5bsNS6kRADwmxVQhwsdX1fsCzmPN2g%2FmStwWxH7Wr692L3oQ8fCqMYaLAEme%2Bn2913MlylBcPSSjdAnxGlFtJQ7BrG4tafWSwGoVphmw4N9fPQgk8ZaSGSB1Vb8651Inoyncz6EzssL8OwORgUwHUHpMZd8RVnjUAh6psPDi1xyLoboCxEGC7HqE0tkhYkUIBccX%2FFE2bUlRTp%2Fad7cTdhEW2E%2BIO0fj7IezjqMSAe%2B%2B1TxObePqnD1sNiZMESyR8ew1PdeyE1rGQAzkrY%2B%2BLOQUupsvMnwrO8FV83kOb7Vyq7BedduC9rbF2qlKlUfmLIWFY0vOddQSzKNJSV%2FG1eORXxsr%2F6F98vfVdQfeccx0ti0fNz5JrruavUbqWp52VMvwuzpdnJtGiHGLM5t%2FMJHl28kGOqUBrc6tdMT88W0rGOKldDUyDNu9HUU6xA6T8wjJO%2FMkzXhUsSQ3ie%2BfSR4fRWSgPk8saoDn9edPvoH2W2BMRONbMNgI3Fs0%2F1c4%2BPQBxhzEOCiQhvHaCav7ULmoi%2FG5FbKW2ZL1uNBBVqNBUKzYZ7lS4pQ4j%2B9lVRCusM14oZF3tMK71SjHwYtawrI2hT62chOxc%2FcGUbPWA%2FpcoKoc716799%2B1sZ50&X-Amz-Signature=5356c167bb5d60e38aa17c4ef5cb681b8aa3da97ddf4f2f0fe08ec645948f683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMWEMZYQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8LPTSlDWneh3ASUDha%2FufzYYH%2BPJcSCcWhu%2FwnztQ1wIgLegf8XFbxkP1V7rcG4l%2Fyb9k4bCn%2Bx43yP%2BUZdYY0mcqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWPWVSyHH3j7BckBSrcA3O%2FevvEayXTaY%2FKgV5LBppd2Kh%2FoGomxZFw4fZZtf9hYtKGYs2sDDjWJVmKOKXVbnbtCnq8gbP3DQIYRVOuoZQtbiVeveiGD%2Fou8HkF80UJ%2FMJj4grOKQmRdniZAFhtm5ZPC6YoFJEoXLPbzGSb05bYo4e%2BDbLf96O5aQZcmqZMCQVXjzYbblGaTEKMvXNzyCuJlsk%2F5gee%2FC9T9pDbJjqMla52PLdTP3qzU3wD5bsNS6kRADwmxVQhwsdX1fsCzmPN2g%2FmStwWxH7Wr692L3oQ8fCqMYaLAEme%2Bn2913MlylBcPSSjdAnxGlFtJQ7BrG4tafWSwGoVphmw4N9fPQgk8ZaSGSB1Vb8651Inoyncz6EzssL8OwORgUwHUHpMZd8RVnjUAh6psPDi1xyLoboCxEGC7HqE0tkhYkUIBccX%2FFE2bUlRTp%2Fad7cTdhEW2E%2BIO0fj7IezjqMSAe%2B%2B1TxObePqnD1sNiZMESyR8ew1PdeyE1rGQAzkrY%2B%2BLOQUupsvMnwrO8FV83kOb7Vyq7BedduC9rbF2qlKlUfmLIWFY0vOddQSzKNJSV%2FG1eORXxsr%2F6F98vfVdQfeccx0ti0fNz5JrruavUbqWp52VMvwuzpdnJtGiHGLM5t%2FMJHl28kGOqUBrc6tdMT88W0rGOKldDUyDNu9HUU6xA6T8wjJO%2FMkzXhUsSQ3ie%2BfSR4fRWSgPk8saoDn9edPvoH2W2BMRONbMNgI3Fs0%2F1c4%2BPQBxhzEOCiQhvHaCav7ULmoi%2FG5FbKW2ZL1uNBBVqNBUKzYZ7lS4pQ4j%2B9lVRCusM14oZF3tMK71SjHwYtawrI2hT62chOxc%2FcGUbPWA%2FpcoKoc716799%2B1sZ50&X-Amz-Signature=7115333e2404ae9e06aee415ad1d66695c729889a4da7c0a32a263d53ec3b990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
