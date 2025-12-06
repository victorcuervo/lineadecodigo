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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7Q476W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BCUCFR1N9KKtU4XRwMRBA5WKHlGIqyQH%2B%2F%2BYHoVieTAiEAmR2sTsad%2FtVjxFamwStNpeNobRPHCy9I%2BpRSDskrm3sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDB263vYCcg1Rgoqt2SrcA0XMhl89BBVhhKfQCEJnRtSt2tTO%2BeUKo2BGIoONSHOiGORfN8KmS0IbO%2BiHnZFmjtxhYruTXET%2FNV%2Bs2nCQvixf8Edmr8sOhfh1lwG0Vn5mzMcH0XIyjLOmghHsno2PkO2A1vaiJKaVyon1S3SOUTgxEKiuk047s7nBI4GnRpsULDFE95s25perrpRrDQBY31ZEpFpBlxjve5KsIBosPFC9z9ydYj7ubSGfFDgBXmhu8RhDH3GZU739W57tug7KMOyRco%2FHcKjQ2SDPzgu0nVvc%2Ba3OZuq1mNGcPr4%2F%2BD%2BlTXqJ1Rd%2BOGAHQ3r56J5W%2B2lha4AMIW360IcWiyhekd5HJatJGqc9HQPmFFB9JvlQVVK%2BU%2BTHyVq%2FitQT%2F3%2Fp7WimpPdM5Ux7v8N%2FvrHV%2FgvgGmngUXBtULjAq4Xf6HbGpclI4qppz4B0hWfCuEP2VdZg0OiBsGoL1AC3viGgV9WDsonjhYoF6IA7%2BZNdYPKAL8mVioyqlmRCPb9y7UujpY5exLgJ%2Bbsc%2FgKAPQjRR%2B%2FzGrte5UjJyUL4Tg3IFR9EQr3CunMEkFchsXgiNUo%2BB2bF7SPeHS4Zz8HRWNSO5pfCcOluv%2B7lfYebrea%2Ful6SJ3PMHHCVkaOdngfGMJym0MkGOqUBCacjGMSxX5A0TIfS7HYfiD4ycTfBdPWBckYh8XLGH17v82jhcEkZ4WZBxSbMzV3Dq679Z9RLh0ctxrmWusBtxDOW48QPWjS%2Fh0KDJLr0KYfiUXxSNB5P92xYn%2BT%2FDY%2FNl0cIyzuHnqxf%2B%2F38n4WJmG9%2F%2BLT8nsn69xrkXSjaR1ll7uBTH%2BJW0PmGZB2HPQEZuXpY1c8OTfBNJAhsuUc%2B9WbPh6SZ&X-Amz-Signature=ee6ff10d4f1b976badf7248d27344ae6b94a3ea03b977385a73a3d63b4d99ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7Q476W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BCUCFR1N9KKtU4XRwMRBA5WKHlGIqyQH%2B%2F%2BYHoVieTAiEAmR2sTsad%2FtVjxFamwStNpeNobRPHCy9I%2BpRSDskrm3sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDB263vYCcg1Rgoqt2SrcA0XMhl89BBVhhKfQCEJnRtSt2tTO%2BeUKo2BGIoONSHOiGORfN8KmS0IbO%2BiHnZFmjtxhYruTXET%2FNV%2Bs2nCQvixf8Edmr8sOhfh1lwG0Vn5mzMcH0XIyjLOmghHsno2PkO2A1vaiJKaVyon1S3SOUTgxEKiuk047s7nBI4GnRpsULDFE95s25perrpRrDQBY31ZEpFpBlxjve5KsIBosPFC9z9ydYj7ubSGfFDgBXmhu8RhDH3GZU739W57tug7KMOyRco%2FHcKjQ2SDPzgu0nVvc%2Ba3OZuq1mNGcPr4%2F%2BD%2BlTXqJ1Rd%2BOGAHQ3r56J5W%2B2lha4AMIW360IcWiyhekd5HJatJGqc9HQPmFFB9JvlQVVK%2BU%2BTHyVq%2FitQT%2F3%2Fp7WimpPdM5Ux7v8N%2FvrHV%2FgvgGmngUXBtULjAq4Xf6HbGpclI4qppz4B0hWfCuEP2VdZg0OiBsGoL1AC3viGgV9WDsonjhYoF6IA7%2BZNdYPKAL8mVioyqlmRCPb9y7UujpY5exLgJ%2Bbsc%2FgKAPQjRR%2B%2FzGrte5UjJyUL4Tg3IFR9EQr3CunMEkFchsXgiNUo%2BB2bF7SPeHS4Zz8HRWNSO5pfCcOluv%2B7lfYebrea%2Ful6SJ3PMHHCVkaOdngfGMJym0MkGOqUBCacjGMSxX5A0TIfS7HYfiD4ycTfBdPWBckYh8XLGH17v82jhcEkZ4WZBxSbMzV3Dq679Z9RLh0ctxrmWusBtxDOW48QPWjS%2Fh0KDJLr0KYfiUXxSNB5P92xYn%2BT%2FDY%2FNl0cIyzuHnqxf%2B%2F38n4WJmG9%2F%2BLT8nsn69xrkXSjaR1ll7uBTH%2BJW0PmGZB2HPQEZuXpY1c8OTfBNJAhsuUc%2B9WbPh6SZ&X-Amz-Signature=8ebfc6c1968096cfd38ba68b3d03f559761090ddffac8f230fc71eef7277dc0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
