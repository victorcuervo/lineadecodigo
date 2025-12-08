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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7VJBC6M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbdzJpUZ0fU84c8IMjC0CHpjpe%2BubB8xd8WgOTCFQ9TAiEAw8EUKMUA1x5HMWYTSrPz8pS2AG9QUMT5NOCeHpObQ%2BIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD0%2BIPaYCM0BBctPSrcA%2Fui0r1W0zcqQclFjoKpX749qgeMR%2BdufpuOm%2Fj5R0ViSUZp%2FD2O9XNoqrqHS7T4E37ddBdZg6qf298vihg1deNQ%2FeKdHIhH3E9gdKpKIpoLqKEY1kpzamXqkyrU7TVekikPn%2FHgldFDUamZZw1Kn5gN0Yy3XdGr5f39zskfhs26hx7xAzzXsc2ubMOaGDtgtMRM86y3yMlDo1KaE%2BtVBXddLmApewzLkTUeE7Rsa94%2B10ieMmeYV5RqlgHwEQ1P3dps4dI6B6dWGdocJg4LEmgq1SHLShpd4cFVDuJGRumBH7CVrp5P2uPzoeVUTE2Ie4dTo%2BYvd0hOLX%2Fc21TruP4c3NHQ%2BAihHX%2FW4WIKdJhdRL1nkyV8CoXsDfysd2vNJR70QejfutF7GnleW6Ics5A2uFOlzev7UUdPp6ae%2F5qwCoZ4o3uyufKaOtE9l82DO2GswBUkyiMymNcTBaQWoIxqQOzhAkdtmgAh2z%2Fo5HLSf5EqJLP0NnuUvbzVTQKi0nK7NlQmn%2FjSNieeYbudxIRmI82uD09ValMPGSoTCNW%2BsNKkK4v9PxHmclePr52WCkJjj9ZVfE%2B1ZdZNV5NCGVvCaEp5ck9LSS2p%2BoAR16lnsmvVCYlWE1KkjI4qMLuA3ckGOqUBMxg2WWKslQOlpBzbSy4329%2BF5QoiuTLWpAXLGtKesM33Q90YfZxPBt%2FS3IMcc4zWNNWxu%2F2ZH1J5OlCW%2Fuji96qT6ZT7Afzq171kqbogsVCzF3Zxn%2FizbEsBtZvLEpGg3hw4TlymUbAczFssPtkxRlVeTT%2FzM9Hu5vhNc1Oee6q5WadN8S3hiLCqWDWX7M%2Bwts90M7JPLiTABB4bED6TiVbjMtP%2B&X-Amz-Signature=fdce8e6b61dc957f0c3f0acebb5a98fab6f6f6827ecbe71fedae9293260ee9b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7VJBC6M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbdzJpUZ0fU84c8IMjC0CHpjpe%2BubB8xd8WgOTCFQ9TAiEAw8EUKMUA1x5HMWYTSrPz8pS2AG9QUMT5NOCeHpObQ%2BIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD0%2BIPaYCM0BBctPSrcA%2Fui0r1W0zcqQclFjoKpX749qgeMR%2BdufpuOm%2Fj5R0ViSUZp%2FD2O9XNoqrqHS7T4E37ddBdZg6qf298vihg1deNQ%2FeKdHIhH3E9gdKpKIpoLqKEY1kpzamXqkyrU7TVekikPn%2FHgldFDUamZZw1Kn5gN0Yy3XdGr5f39zskfhs26hx7xAzzXsc2ubMOaGDtgtMRM86y3yMlDo1KaE%2BtVBXddLmApewzLkTUeE7Rsa94%2B10ieMmeYV5RqlgHwEQ1P3dps4dI6B6dWGdocJg4LEmgq1SHLShpd4cFVDuJGRumBH7CVrp5P2uPzoeVUTE2Ie4dTo%2BYvd0hOLX%2Fc21TruP4c3NHQ%2BAihHX%2FW4WIKdJhdRL1nkyV8CoXsDfysd2vNJR70QejfutF7GnleW6Ics5A2uFOlzev7UUdPp6ae%2F5qwCoZ4o3uyufKaOtE9l82DO2GswBUkyiMymNcTBaQWoIxqQOzhAkdtmgAh2z%2Fo5HLSf5EqJLP0NnuUvbzVTQKi0nK7NlQmn%2FjSNieeYbudxIRmI82uD09ValMPGSoTCNW%2BsNKkK4v9PxHmclePr52WCkJjj9ZVfE%2B1ZdZNV5NCGVvCaEp5ck9LSS2p%2BoAR16lnsmvVCYlWE1KkjI4qMLuA3ckGOqUBMxg2WWKslQOlpBzbSy4329%2BF5QoiuTLWpAXLGtKesM33Q90YfZxPBt%2FS3IMcc4zWNNWxu%2F2ZH1J5OlCW%2Fuji96qT6ZT7Afzq171kqbogsVCzF3Zxn%2FizbEsBtZvLEpGg3hw4TlymUbAczFssPtkxRlVeTT%2FzM9Hu5vhNc1Oee6q5WadN8S3hiLCqWDWX7M%2Bwts90M7JPLiTABB4bED6TiVbjMtP%2B&X-Amz-Signature=4eb9fac91bebec757389a7a93494ebdf25050f4972f15deb03bb655645bf2061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
