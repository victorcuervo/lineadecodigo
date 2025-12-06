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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5VCUFN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdI%2BxHl95Xnbnm%2FPh%2F3FycqGFmYlrD3SVhhTppU6%2BGNAiBUB9AHWOkeUJO08xyHVR1XpiNw%2FqEvwyy%2FfuopibodEyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM7gqjnmU3E3NirueXKtwDfavxRG%2FpIG%2FKy6H23KQ5SN82Jrlp1b58JujsTlJl4nVT7UXP7p0uI%2BLCFC3kk8Bw2Y6bmu9KRKCLRji4QWxJ0hRIpEMPIHqqwysp%2FpFJ6eOFqP0smLyW4W8vyG65RRswvTBDxGQSs13%2BR5zzi06WgSbnnRGBWgOqj3dBJhkOpEAMEnDArkPWnuONBZFQfW6lrKJdqLrF%2B2wDwS6Lok0kR2URSl5oPM14mXIo4VXjqiFMwaG5uomAD%2BKn2vFpKhoylB5qYolA4j4qQ4MHvaRM8RRN5kZZlvvdXvpO6%2BDTU1Dwu1Jsm6ih7j%2BV738HM9r08l6B4bMgbbaTVRq%2FXJqpWdE9Wtlpj1StRXDbE429Je8ZDlXQPH%2BxI0dXxRyCOQ2IMIIBpou2Y8Fim1bHHpEMR9LpFo8%2B7%2BWxxjibEk%2BGKCoKI6hrY42JZDJl4c68DkvTMP2azVAuLz830KjgQUnG9%2F%2BFkNMFSie9R48D33984GKKtwCSRbjEszsEBlGiSug0mDs42inOjmX0akJCP9JeJhPZx%2Fs2YUcgDc5UxgakUagGLGWq9cm0QjkCZaohMzNNUxB2pA%2Fl2rRbrhyImUia2rKjGBVRWVDRCipiQTskdaAXqG774iaa%2BfXcxQswk8zRyQY6pgGc7uuiJ9ne9D5RYlAQV%2BLihUSrYHgtPdSQS%2BWPJZ7P7i4dfx65x43Qgf4ibI7ToHTKKJgU8JbBy73eXiZH4AkOKFD%2FAKf%2BK2Rb%2FS0WNfCSWORnGw2ry%2FebJvctB1MH%2FXnps6naV%2FaFQs%2F5c55jFlIQVSma4z402zHOpHjkUOvcnH7Hd5KMIMm8i8d%2F2OD3%2FeQBEaD5A%2FG%2BzEtqUlpJVd7hI9%2BdpV9T&X-Amz-Signature=faa9ee77f3dba6ec1e6b1e9b06d996160b6394dd218ce177e18655e041185851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5VCUFN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdI%2BxHl95Xnbnm%2FPh%2F3FycqGFmYlrD3SVhhTppU6%2BGNAiBUB9AHWOkeUJO08xyHVR1XpiNw%2FqEvwyy%2FfuopibodEyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM7gqjnmU3E3NirueXKtwDfavxRG%2FpIG%2FKy6H23KQ5SN82Jrlp1b58JujsTlJl4nVT7UXP7p0uI%2BLCFC3kk8Bw2Y6bmu9KRKCLRji4QWxJ0hRIpEMPIHqqwysp%2FpFJ6eOFqP0smLyW4W8vyG65RRswvTBDxGQSs13%2BR5zzi06WgSbnnRGBWgOqj3dBJhkOpEAMEnDArkPWnuONBZFQfW6lrKJdqLrF%2B2wDwS6Lok0kR2URSl5oPM14mXIo4VXjqiFMwaG5uomAD%2BKn2vFpKhoylB5qYolA4j4qQ4MHvaRM8RRN5kZZlvvdXvpO6%2BDTU1Dwu1Jsm6ih7j%2BV738HM9r08l6B4bMgbbaTVRq%2FXJqpWdE9Wtlpj1StRXDbE429Je8ZDlXQPH%2BxI0dXxRyCOQ2IMIIBpou2Y8Fim1bHHpEMR9LpFo8%2B7%2BWxxjibEk%2BGKCoKI6hrY42JZDJl4c68DkvTMP2azVAuLz830KjgQUnG9%2F%2BFkNMFSie9R48D33984GKKtwCSRbjEszsEBlGiSug0mDs42inOjmX0akJCP9JeJhPZx%2Fs2YUcgDc5UxgakUagGLGWq9cm0QjkCZaohMzNNUxB2pA%2Fl2rRbrhyImUia2rKjGBVRWVDRCipiQTskdaAXqG774iaa%2BfXcxQswk8zRyQY6pgGc7uuiJ9ne9D5RYlAQV%2BLihUSrYHgtPdSQS%2BWPJZ7P7i4dfx65x43Qgf4ibI7ToHTKKJgU8JbBy73eXiZH4AkOKFD%2FAKf%2BK2Rb%2FS0WNfCSWORnGw2ry%2FebJvctB1MH%2FXnps6naV%2FaFQs%2F5c55jFlIQVSma4z402zHOpHjkUOvcnH7Hd5KMIMm8i8d%2F2OD3%2FeQBEaD5A%2FG%2BzEtqUlpJVd7hI9%2BdpV9T&X-Amz-Signature=b395019d121ce27b195f338e96fcf35efa1d1e7d509fdc39e8d0d498c2c705f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
