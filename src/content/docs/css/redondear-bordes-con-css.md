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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXBK2FL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FoPtDImAKas7bbQGwqxBluiLmLvPK1c8NPfzsd6oRpQIgdSF3lqR8%2FPbr3LBDnqy%2BP%2F0xztBw3%2BOAvAdjVDoW5oQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDskC5I7JGoRx5FZircA5fJjnXo3qlRfAFM%2Bosp%2F1qU9UJTMRa1pk5QQJJF5%2Byp2mt4boPicyfDJNLWSoS%2B72tXFWxCC4VAH4sYhdYuHm1Sd3%2FNuSBHK8qTmUlTxUb126qhNjYf5LqUVaQC85CVAI0pDawReOB3DfsncIE%2BuNrdk862l95NzMOCam72Fgpd4ekStqwNqufqic6bk1lJf5%2BUKV1Azgqz3a0D3PSBL%2F9yHnH511VkLEX4oKSORZzt5UGQMS1%2FE0zZcNWqZa3iu1WZbpcXAnbl37J48P4dkgITGS1%2BFaP9znKIImV%2B%2BcMvzn0iENG7jIwzigpEpKTzby10ZtSdBPe4QN%2BALQkVwLbdtrOFvRPDFHdEj7T6skO4kCiQzVwbd1mgrmIYLvPNTLhj1aODTBoIbNPzudD872bLpSqpwovYfL%2FqCCTDCjjxLdU%2FDNnfNrJFtx%2BwRJxAJDfgkutZiWWbaT2ncoVTDcEVlO0D7N%2FJKrQWz1OyI%2B1dfZFjCbVhLePkgprHeTS%2FfjbJ%2FxdpMDIKvJ43lSQPzMQ0SPYP6BB%2B4UZNc2tui%2Bssheb11Eb%2FuWxxIAquS32%2FQwHKZn3nzlFHaBPuBiNuV8Ghk0bBj8cUE6%2Fw%2FqXhgmGicLezxUPhQFyCTZNEMIiI38kGOqUBRLsrO%2BjRe9mTBt6W%2Fb4yjV%2BDKLktOU8X7BkiEfKk7tlvQAJig%2FB6M%2BTbJoUsTV4mT%2Beqjk8AFPW1fpDkC1aTIWqD5u%2Fx24DXGDkmUwWOgXCTBCb%2FMbWzRDBVhq8jz9svWcafbQ17dZ3bz7aDyRoN9Gg1Lp5gLr427k69KeDuNqEsaNJV%2FJi5h4jB64u35kpcAoTEZVuHWcfVEvTSHG1xy%2FFEBDDr&X-Amz-Signature=99eab7747527f353e1a1332ef931b8f0e4f5b231ca90865eb76db208f3d3485e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXBK2FL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FoPtDImAKas7bbQGwqxBluiLmLvPK1c8NPfzsd6oRpQIgdSF3lqR8%2FPbr3LBDnqy%2BP%2F0xztBw3%2BOAvAdjVDoW5oQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDskC5I7JGoRx5FZircA5fJjnXo3qlRfAFM%2Bosp%2F1qU9UJTMRa1pk5QQJJF5%2Byp2mt4boPicyfDJNLWSoS%2B72tXFWxCC4VAH4sYhdYuHm1Sd3%2FNuSBHK8qTmUlTxUb126qhNjYf5LqUVaQC85CVAI0pDawReOB3DfsncIE%2BuNrdk862l95NzMOCam72Fgpd4ekStqwNqufqic6bk1lJf5%2BUKV1Azgqz3a0D3PSBL%2F9yHnH511VkLEX4oKSORZzt5UGQMS1%2FE0zZcNWqZa3iu1WZbpcXAnbl37J48P4dkgITGS1%2BFaP9znKIImV%2B%2BcMvzn0iENG7jIwzigpEpKTzby10ZtSdBPe4QN%2BALQkVwLbdtrOFvRPDFHdEj7T6skO4kCiQzVwbd1mgrmIYLvPNTLhj1aODTBoIbNPzudD872bLpSqpwovYfL%2FqCCTDCjjxLdU%2FDNnfNrJFtx%2BwRJxAJDfgkutZiWWbaT2ncoVTDcEVlO0D7N%2FJKrQWz1OyI%2B1dfZFjCbVhLePkgprHeTS%2FfjbJ%2FxdpMDIKvJ43lSQPzMQ0SPYP6BB%2B4UZNc2tui%2Bssheb11Eb%2FuWxxIAquS32%2FQwHKZn3nzlFHaBPuBiNuV8Ghk0bBj8cUE6%2Fw%2FqXhgmGicLezxUPhQFyCTZNEMIiI38kGOqUBRLsrO%2BjRe9mTBt6W%2Fb4yjV%2BDKLktOU8X7BkiEfKk7tlvQAJig%2FB6M%2BTbJoUsTV4mT%2Beqjk8AFPW1fpDkC1aTIWqD5u%2Fx24DXGDkmUwWOgXCTBCb%2FMbWzRDBVhq8jz9svWcafbQ17dZ3bz7aDyRoN9Gg1Lp5gLr427k69KeDuNqEsaNJV%2FJi5h4jB64u35kpcAoTEZVuHWcfVEvTSHG1xy%2FFEBDDr&X-Amz-Signature=ff73216072957ff8f1001aceb1a135b493748c4c865a60675d135860256bdc50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
