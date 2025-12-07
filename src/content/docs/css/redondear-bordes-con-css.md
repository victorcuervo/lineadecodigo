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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SZXI3TU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDew7Y1pU1IelpZRCH56JKKBi2hc7B5kMCyLU%2F7TbmJDAiEAktpniXlzxfQtCE84yyCrgw8SCMk5iZb6Qi66d1lGocsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaJtViVrEzu8yMPECrcA8VYaLjXFKxk6%2BzO%2BlMemW35PnUDeW2Yd2mSL9XyOIUzoLF8Es9P%2BRdRWc1aOenfiRUm84Y6ztOpHyxQCvAnlV8X5XWZuERx6cz1hs8W0ez3Xz52%2FNG9WqMy6LawFq%2B4NUiA02zdLYACIfRJV60k3xvW9oRaifaFuMjLTvg7Ei3o5R0SFNsEkAMAjx%2BWT2mcXEGoBiuFHRtbEjszl7mmk%2B6n%2BLtOf6CYR3GtAACOXIQNq6EayDU45bAN2WiS6Pg6EOJFEhZHqZhFfPh1%2FMErQZW%2Bo5nRtrPbsSwp3U5MTTywxZiJ7lHyMntJWdNRRpCLCFoZjtVZ8IkYdkB5%2Bf2sGPCCF98CucYxc8RkkrEA9b0%2BZ%2FH0BSL9TCu4qc%2FOSJMTv%2BklQR4h4gdjAbxfvwT9MKvWfWPGQDu2%2FbhMKZriY4sJX21d9wLC49auoTaXTAzHJFRWUBDTwOgo78BL5lD0FcXVIM5GJ%2B17VKf%2FveZ%2Be8HNcl32we4N47vMZ4sSS5w1tyMFvt5qEBMRgNlK2uHwtGGTATRuCoIOH%2BnZWA7qGEX%2F9%2F7WBeWXHsxzTMZtGmI0rbjiFS33HArfg5zxdBVjdipyCSVzq4HSwZXMHonrJn6dShsq6pumPWaPy67ZMP6o18kGOqUBmu5fgLN%2BtqtUzjQxc1uciPvePoNJDNvGgySEdI3fFFXbzaSKzImMNch4Gc%2BKvIfx55mJ3uOQYVBPPs5AJOc2qUkeiKQIZLDcqsQAQq0%2BZRYSQ1go87XDbyrCLGv7kA%2BGPHUPBMrFZfptp7hhFRfOEOdhIFEPB4JRUVtIzhEpK41IPTy5N%2BpzoK4b9Nn9%2Fv3AYER7itkwbM272nf3VyfxDgA18hsL&X-Amz-Signature=af6c3201c874661aeedf06747182758da39b1ce3e1e1a478211a8f99085e62b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SZXI3TU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDew7Y1pU1IelpZRCH56JKKBi2hc7B5kMCyLU%2F7TbmJDAiEAktpniXlzxfQtCE84yyCrgw8SCMk5iZb6Qi66d1lGocsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaJtViVrEzu8yMPECrcA8VYaLjXFKxk6%2BzO%2BlMemW35PnUDeW2Yd2mSL9XyOIUzoLF8Es9P%2BRdRWc1aOenfiRUm84Y6ztOpHyxQCvAnlV8X5XWZuERx6cz1hs8W0ez3Xz52%2FNG9WqMy6LawFq%2B4NUiA02zdLYACIfRJV60k3xvW9oRaifaFuMjLTvg7Ei3o5R0SFNsEkAMAjx%2BWT2mcXEGoBiuFHRtbEjszl7mmk%2B6n%2BLtOf6CYR3GtAACOXIQNq6EayDU45bAN2WiS6Pg6EOJFEhZHqZhFfPh1%2FMErQZW%2Bo5nRtrPbsSwp3U5MTTywxZiJ7lHyMntJWdNRRpCLCFoZjtVZ8IkYdkB5%2Bf2sGPCCF98CucYxc8RkkrEA9b0%2BZ%2FH0BSL9TCu4qc%2FOSJMTv%2BklQR4h4gdjAbxfvwT9MKvWfWPGQDu2%2FbhMKZriY4sJX21d9wLC49auoTaXTAzHJFRWUBDTwOgo78BL5lD0FcXVIM5GJ%2B17VKf%2FveZ%2Be8HNcl32we4N47vMZ4sSS5w1tyMFvt5qEBMRgNlK2uHwtGGTATRuCoIOH%2BnZWA7qGEX%2F9%2F7WBeWXHsxzTMZtGmI0rbjiFS33HArfg5zxdBVjdipyCSVzq4HSwZXMHonrJn6dShsq6pumPWaPy67ZMP6o18kGOqUBmu5fgLN%2BtqtUzjQxc1uciPvePoNJDNvGgySEdI3fFFXbzaSKzImMNch4Gc%2BKvIfx55mJ3uOQYVBPPs5AJOc2qUkeiKQIZLDcqsQAQq0%2BZRYSQ1go87XDbyrCLGv7kA%2BGPHUPBMrFZfptp7hhFRfOEOdhIFEPB4JRUVtIzhEpK41IPTy5N%2BpzoK4b9Nn9%2Fv3AYER7itkwbM272nf3VyfxDgA18hsL&X-Amz-Signature=1920c66c9f4d04e5aa5a18d7b512edeea9df9807f8b348785fd8ec24fccc2c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
