---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DTEXOWB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXZ1IM%2B9%2FRkD0t1MU%2FWdq6SzzykElYR4GgwJSlHn2%2BggIgG6siI002kxaImPNRGC6eUsQRo2UyCxReid6aRzhb4DUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEDlOfLiDXonfB20WyrcAzU8OEQ5k1joBFMTxJc9nQqNKlvIVSWDKzjoa%2BTfRuj67Lw0mUYlBItgEqGQE7NkIOndxT0bCfIhoRiZBjg5xj0Us%2ByKqIU75znYWLWpzJljIbMBaHkyx1ZWGSpMwWODkL9I0kzpEzieVw57jmW3zhTqVO%2FnxWRQZmUAKPgbWspZLMh0X6th8PdzRgNFpQRipdv8%2BJyoAk3Km3xBdnKXOh3GcsBkCOUR5tepLSgGNv58GK2%2F2g8N7XFLGhMkIWdlymnr2rsz8ZuLFf3qYnN%2BreZYTMDBL5NqiImWdV0PlDoTWYCTxklDX7pKkxXB5lSbi7cPAEtqSBqDh7EsP%2FS4x4UT36aSwjX6qIv3OLfrsS6f5aMJREdtyzv2Fkm4%2BQmsgN0Cy5i6XZiY%2B6zpiylIZdXQ9J0GXsuwZYnVQxEBb%2F9ZeLzG1htcCV9RFcJtADj4zYUgwGAB5ugKRfaTfbyG5IqCbfKciZciH99xhXNoKqWMqjMgXXlHXDrfc%2F4L9ofFuC3EBa6SI6zJN%2FQuJS4paqvJgFR5NIzHW2jS39OS1ncSyLcfJ5fD4KrACpk6VenONP1zDKi643ay1ciq%2BDEWPRzNvmttLYMtP4pTHSe9RBMLLS3YxDLz8CQfIKgoMJ2qisoGOqUB%2BtLYVmYATb9kubgvspujdqG6MgjJljMovtqMwtsA06iSQVDjO4K9pwimjgzyi%2FaEY%2F5HN845duw8jVqCputjblENzb8nDn5U2QOUHywuPv0pOLlXy4ahFiLFP59X8WKeTH79W7N%2BVg79QA4%2FOSn5%2FmzVtvTLRsEdTWiF8Yw%2F%2FhGJ05FysIVYQq3pfUCtnesnL9cuZT3nyCZcc34HZu%2FmXE31Adpk&X-Amz-Signature=123a3bda411f024c15f1896ccd7e1370f96bbbf4ed01c61a17e558ccc984b349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DTEXOWB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXZ1IM%2B9%2FRkD0t1MU%2FWdq6SzzykElYR4GgwJSlHn2%2BggIgG6siI002kxaImPNRGC6eUsQRo2UyCxReid6aRzhb4DUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEDlOfLiDXonfB20WyrcAzU8OEQ5k1joBFMTxJc9nQqNKlvIVSWDKzjoa%2BTfRuj67Lw0mUYlBItgEqGQE7NkIOndxT0bCfIhoRiZBjg5xj0Us%2ByKqIU75znYWLWpzJljIbMBaHkyx1ZWGSpMwWODkL9I0kzpEzieVw57jmW3zhTqVO%2FnxWRQZmUAKPgbWspZLMh0X6th8PdzRgNFpQRipdv8%2BJyoAk3Km3xBdnKXOh3GcsBkCOUR5tepLSgGNv58GK2%2F2g8N7XFLGhMkIWdlymnr2rsz8ZuLFf3qYnN%2BreZYTMDBL5NqiImWdV0PlDoTWYCTxklDX7pKkxXB5lSbi7cPAEtqSBqDh7EsP%2FS4x4UT36aSwjX6qIv3OLfrsS6f5aMJREdtyzv2Fkm4%2BQmsgN0Cy5i6XZiY%2B6zpiylIZdXQ9J0GXsuwZYnVQxEBb%2F9ZeLzG1htcCV9RFcJtADj4zYUgwGAB5ugKRfaTfbyG5IqCbfKciZciH99xhXNoKqWMqjMgXXlHXDrfc%2F4L9ofFuC3EBa6SI6zJN%2FQuJS4paqvJgFR5NIzHW2jS39OS1ncSyLcfJ5fD4KrACpk6VenONP1zDKi643ay1ciq%2BDEWPRzNvmttLYMtP4pTHSe9RBMLLS3YxDLz8CQfIKgoMJ2qisoGOqUB%2BtLYVmYATb9kubgvspujdqG6MgjJljMovtqMwtsA06iSQVDjO4K9pwimjgzyi%2FaEY%2F5HN845duw8jVqCputjblENzb8nDn5U2QOUHywuPv0pOLlXy4ahFiLFP59X8WKeTH79W7N%2BVg79QA4%2FOSn5%2FmzVtvTLRsEdTWiF8Yw%2F%2FhGJ05FysIVYQq3pfUCtnesnL9cuZT3nyCZcc34HZu%2FmXE31Adpk&X-Amz-Signature=6aa0b3e4cdb883490ca899cc4e06957d1124ba3ab51adfa88c2b1cdf4ce9e42e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
