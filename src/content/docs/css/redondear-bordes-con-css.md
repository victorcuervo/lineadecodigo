---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYIYCEMI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBHWVFAu9NnPUwnqmftfimuQerYwP62y4fMkw0yPwEvKAiAseSGRottcSfsjlbAHEEyInbydNl25wCeFR4XNtGf%2B1Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMOn7XolelSvwWm6QhKtwDkJF82l%2FGOnbd3R9rAN%2B1hpcrthjq%2Fg0D9yr%2FIei%2B%2FJ9IuIfzVthOM5JmyAyXpzkEyXsxdPXFAr4XRg2KlarXKDi9SvV6nzSlpW%2FbZyqTpA0KsDGc6WQcWsOLFFAlscY9D564IJfZF%2Ff86Y2hz6h%2FDO%2F1w9U8Pq2kUgm5Z2iXXASbfVmugfHdQJDdpVCZ9lPPvYqfwZu1JOPV%2F0cf9GLPUU7Nj0sBGRKRgwb%2Bi2YwrM%2Fc8qKci31HS5ZtX38abKEmddSpS7rZw1sYpvbdG60qAl%2FT24z1KSsGZeIt8rqbbTQxOKbhRdU5nFx%2FuklBKG8r1IIcLnccS87XJiYlpPLnxx0YvGrTnJpcRtDgMw3Ys3YohY2GXfGLNJZrSG8pFh%2BWPTEUAebse4X6Nj7o86zwLvvfblTYbAsV0CO5mMoeRZf8THsPPsSr0tRc2tyRjwdTDwyibKRoy7qfVk3IpD5qvlqNgAArHBI4rs7%2FtbXoruE%2F%2B6Iyb7y3MtFb%2Fobul08A22uOviIVILr4ZmIvRuu5TrK9xs%2BV3SiCc%2FRT6MfQ6eoOUfOme1TgfBxTqikkGZdW8EOHqVRoeYvmPbEBaLJHegt3aqT5AtjRsOZuGp6S34xVSdWqOnOWXeX46SQwpMvEyQY6pgF1yjxgjqWAdl%2FZ7Jno%2BX0Fm%2Bb3uBYU%2F2HnoE2YEAERb4eGmEogVL%2F1fbTnmgDpVKmT%2F%2Bca8fPwlxbKyqA3KZaVI2TdEjV%2BD2ctsVdR4JzfZmGISUd47j%2B7Es%2FD8xvMT2w%2Bj372uhEXFTghfZAefTqOOvQIyMKjdpc11aYjWG%2BEG9qiPBPr2VkQzKOTf0TQw1bpHHY1TTgUhs0267DDGXdQ6jX1iZYw&X-Amz-Signature=8c03fb2c36546ecf4ad29909e0080b1dec7469fd673f2aeba7d1b02f8aca0902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYIYCEMI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBHWVFAu9NnPUwnqmftfimuQerYwP62y4fMkw0yPwEvKAiAseSGRottcSfsjlbAHEEyInbydNl25wCeFR4XNtGf%2B1Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMOn7XolelSvwWm6QhKtwDkJF82l%2FGOnbd3R9rAN%2B1hpcrthjq%2Fg0D9yr%2FIei%2B%2FJ9IuIfzVthOM5JmyAyXpzkEyXsxdPXFAr4XRg2KlarXKDi9SvV6nzSlpW%2FbZyqTpA0KsDGc6WQcWsOLFFAlscY9D564IJfZF%2Ff86Y2hz6h%2FDO%2F1w9U8Pq2kUgm5Z2iXXASbfVmugfHdQJDdpVCZ9lPPvYqfwZu1JOPV%2F0cf9GLPUU7Nj0sBGRKRgwb%2Bi2YwrM%2Fc8qKci31HS5ZtX38abKEmddSpS7rZw1sYpvbdG60qAl%2FT24z1KSsGZeIt8rqbbTQxOKbhRdU5nFx%2FuklBKG8r1IIcLnccS87XJiYlpPLnxx0YvGrTnJpcRtDgMw3Ys3YohY2GXfGLNJZrSG8pFh%2BWPTEUAebse4X6Nj7o86zwLvvfblTYbAsV0CO5mMoeRZf8THsPPsSr0tRc2tyRjwdTDwyibKRoy7qfVk3IpD5qvlqNgAArHBI4rs7%2FtbXoruE%2F%2B6Iyb7y3MtFb%2Fobul08A22uOviIVILr4ZmIvRuu5TrK9xs%2BV3SiCc%2FRT6MfQ6eoOUfOme1TgfBxTqikkGZdW8EOHqVRoeYvmPbEBaLJHegt3aqT5AtjRsOZuGp6S34xVSdWqOnOWXeX46SQwpMvEyQY6pgF1yjxgjqWAdl%2FZ7Jno%2BX0Fm%2Bb3uBYU%2F2HnoE2YEAERb4eGmEogVL%2F1fbTnmgDpVKmT%2F%2Bca8fPwlxbKyqA3KZaVI2TdEjV%2BD2ctsVdR4JzfZmGISUd47j%2B7Es%2FD8xvMT2w%2Bj372uhEXFTghfZAefTqOOvQIyMKjdpc11aYjWG%2BEG9qiPBPr2VkQzKOTf0TQw1bpHHY1TTgUhs0267DDGXdQ6jX1iZYw&X-Amz-Signature=c88c957aa9a766651f837f6fc7a5a87cde836ac26be0c7fa1859193431165f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
