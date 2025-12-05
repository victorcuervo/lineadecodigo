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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ4OCMRO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSyh6Db5ejTRsADyTgTtQVc0U2JpggFuSpV41qvQDBPAiEAqbmM7Cu5xJpF0fBrnmsEflucgiZjIGlEGzkHlc3Xefkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEhSFF5UAEkTkOK5sSrcA%2BYOK%2BGbZO1sOPoiUmeDKyQL4xJetDGxCRAKQBCf%2F7mPB1Hv3YOHAwE0y5fQYbjGBQtSjr%2B1Omm5dA61P%2Bm65CPpr65d4FvpqyrBOhoCT087sENj21ZA2hP%2FoU3FIK%2FK0CfjfS5X9pNTV1jruLEyFqzhd0enRjjA%2F%2Bf3uQlitzqkCN%2F23n1B5s3K3yal6gqhtLeHuyHOCFKVW6LkAUFF3KQ9EpFTsfiZOwalN4CgPi6pEekVSLbX%2BuIeGqdo5kVVaEtBTIDFfZM990DiZMd%2BuJbUDrpwV13k9yL2vOyHFg0grrNDkBfHxINl49AsFgsB9dFFZvds0FeBqIXxtLeQigA6kY2aeo8OXdq2hUXMqMdYoHGxO76uc0KtwrmON8ja6ZCq2JR8oBLhK6fPh8cLDBSYX%2BcMUdZzzE9bwQT7aXWY0PlReKgd82JJbCHzU6h%2FqKNGL2Udu8E4NDAZVxTHZRRTm9ArsQIcUE3%2F7TZ9hiWbhetrMDycSp13gn070A1MSnA874oDsD34O3%2Blhxx65gwCLt6a0Wb9Q1BzpruObZHiPhG3DOewnAyhkK4i%2BKtCos6ZUwpwF20wHiJFs1ooeBQMXaIs02jd5P2GAliT%2Bc4hYi0KXhBCQszNDLt%2FMNWMyMkGOqUBRZ8huEmEinYhSNTmH6Bs4dO%2BM%2FznA0Pa4bNxNhBAnGWBzkVBr%2BU66sf1xg%2FTZxFxmuWaQgq0JrgD%2FNH8QjdnsrwZi4zFQ2LEZNuRDG2qFLMv4LbIXBnN%2F1I%2BFtRPtLDuzALwdRHiUd3XMsXA4sSENuhqghgkwuXg%2FslXm0W%2FO%2B88kOyx5bnR5UM9uVXST4iagspK9k9sSv5pVBYKIgjNcd%2BRkil5&X-Amz-Signature=d7e09c212d03c6bf025a0c0b3e372e2eee7e3ed7d0bf2eff1fdfe65bfebf236f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ4OCMRO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSyh6Db5ejTRsADyTgTtQVc0U2JpggFuSpV41qvQDBPAiEAqbmM7Cu5xJpF0fBrnmsEflucgiZjIGlEGzkHlc3Xefkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEhSFF5UAEkTkOK5sSrcA%2BYOK%2BGbZO1sOPoiUmeDKyQL4xJetDGxCRAKQBCf%2F7mPB1Hv3YOHAwE0y5fQYbjGBQtSjr%2B1Omm5dA61P%2Bm65CPpr65d4FvpqyrBOhoCT087sENj21ZA2hP%2FoU3FIK%2FK0CfjfS5X9pNTV1jruLEyFqzhd0enRjjA%2F%2Bf3uQlitzqkCN%2F23n1B5s3K3yal6gqhtLeHuyHOCFKVW6LkAUFF3KQ9EpFTsfiZOwalN4CgPi6pEekVSLbX%2BuIeGqdo5kVVaEtBTIDFfZM990DiZMd%2BuJbUDrpwV13k9yL2vOyHFg0grrNDkBfHxINl49AsFgsB9dFFZvds0FeBqIXxtLeQigA6kY2aeo8OXdq2hUXMqMdYoHGxO76uc0KtwrmON8ja6ZCq2JR8oBLhK6fPh8cLDBSYX%2BcMUdZzzE9bwQT7aXWY0PlReKgd82JJbCHzU6h%2FqKNGL2Udu8E4NDAZVxTHZRRTm9ArsQIcUE3%2F7TZ9hiWbhetrMDycSp13gn070A1MSnA874oDsD34O3%2Blhxx65gwCLt6a0Wb9Q1BzpruObZHiPhG3DOewnAyhkK4i%2BKtCos6ZUwpwF20wHiJFs1ooeBQMXaIs02jd5P2GAliT%2Bc4hYi0KXhBCQszNDLt%2FMNWMyMkGOqUBRZ8huEmEinYhSNTmH6Bs4dO%2BM%2FznA0Pa4bNxNhBAnGWBzkVBr%2BU66sf1xg%2FTZxFxmuWaQgq0JrgD%2FNH8QjdnsrwZi4zFQ2LEZNuRDG2qFLMv4LbIXBnN%2F1I%2BFtRPtLDuzALwdRHiUd3XMsXA4sSENuhqghgkwuXg%2FslXm0W%2FO%2B88kOyx5bnR5UM9uVXST4iagspK9k9sSv5pVBYKIgjNcd%2BRkil5&X-Amz-Signature=4c14777616ab7622d71dd3fccdfc10c56015bc9166e1b6ebcfaf7b5054a20174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
