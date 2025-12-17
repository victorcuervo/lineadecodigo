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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WUB3PKY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0GB1atG2vU0uXgoXRXFB6K3SNRPS04e6ziXgu6xyA2AiA%2Bki3jfSYK0AvtwwHaDRbaiPwDjNZWwe50dwuSttMLeCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM7YgmGNCXUL8x7Q3yKtwDJ16750pme1%2BjfwZo7zFud7hlxf5NMxOIQoSBzDuzEgeWK0%2Bfgp%2FViMZtsaTuOBejWQn%2BftjefFCwq4iMG3LoAN16rZtE9DnrYBi2FpxhB3qUyqX%2Fm6%2Bvd1UmsBJB3nXXpghwzuRxrTnFmV3fr%2BTDibqJAPPToaR27WCJVjdMviwbFlGRkw2Kd%2BnZUdvb4Frr9I%2B5nCb2GYIIIUZrWlT5gJqvDSrdIUV9ZYhtHsl56DSVD49zSsddjyi8Qf4tmaOclVQrVvA3qD96lWTUgFsUYIX8uS97u4fbThzSz9FCFb3218kgF%2FDYGzfVFQFOHh8oCdOczECgJKwyYTLLe23opvtvUZ2stCpqzFfJ813kgndIeeY9WgMUPQMRmxNyUYeZZQLgKIL7lJcAlhPck9J0Yj7ajDnZMN1h8UYqGebvIy3SOpMbUXidA8lbclZaeOb96TirRCrMpiJoFfVAGBVQ8bguxdfBCLJ46ziUMNmiQBdgaDCstczxT8dMB65cDD0dTo%2BTBrqeQsk2%2Bh3fq%2F1TiAXQptHRYqc9ONQgw2HE%2F6asPf3T6ehMINW6my4%2BvU%2BR2y%2FeYG3kEfr7tgN7mwUp%2FQ3TyAqWCzOzR0pkNRRERbSt7VR1zjCAo78cpYAwy7GIygY6pgE6MhpN3oMKO3cDm5Bqdzz0ngGXoDnh84o89II6i0hZrRnqWBgQq%2Fi2Gz8w0n%2FCWgFuJFVL%2F2b%2B0TxTb1qVFDt8ArmkgWLFqlrtA%2FRsaaZAWMntvgAHSnGWQ2P7tOJUHJYITKyRysaPV7Sr0mWu78GzZecEVXqrTC1ICav4RfVjGNCOktfjI86ah9FEoEXzoNrI%2FmFAoou5UIzIFN32uNfi9qpWPp1p&X-Amz-Signature=e0d6b25ce0c7b14d95c96c5fb5160da64cd3e055780c7c73a68a6535cdf5a3d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WUB3PKY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0GB1atG2vU0uXgoXRXFB6K3SNRPS04e6ziXgu6xyA2AiA%2Bki3jfSYK0AvtwwHaDRbaiPwDjNZWwe50dwuSttMLeCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM7YgmGNCXUL8x7Q3yKtwDJ16750pme1%2BjfwZo7zFud7hlxf5NMxOIQoSBzDuzEgeWK0%2Bfgp%2FViMZtsaTuOBejWQn%2BftjefFCwq4iMG3LoAN16rZtE9DnrYBi2FpxhB3qUyqX%2Fm6%2Bvd1UmsBJB3nXXpghwzuRxrTnFmV3fr%2BTDibqJAPPToaR27WCJVjdMviwbFlGRkw2Kd%2BnZUdvb4Frr9I%2B5nCb2GYIIIUZrWlT5gJqvDSrdIUV9ZYhtHsl56DSVD49zSsddjyi8Qf4tmaOclVQrVvA3qD96lWTUgFsUYIX8uS97u4fbThzSz9FCFb3218kgF%2FDYGzfVFQFOHh8oCdOczECgJKwyYTLLe23opvtvUZ2stCpqzFfJ813kgndIeeY9WgMUPQMRmxNyUYeZZQLgKIL7lJcAlhPck9J0Yj7ajDnZMN1h8UYqGebvIy3SOpMbUXidA8lbclZaeOb96TirRCrMpiJoFfVAGBVQ8bguxdfBCLJ46ziUMNmiQBdgaDCstczxT8dMB65cDD0dTo%2BTBrqeQsk2%2Bh3fq%2F1TiAXQptHRYqc9ONQgw2HE%2F6asPf3T6ehMINW6my4%2BvU%2BR2y%2FeYG3kEfr7tgN7mwUp%2FQ3TyAqWCzOzR0pkNRRERbSt7VR1zjCAo78cpYAwy7GIygY6pgE6MhpN3oMKO3cDm5Bqdzz0ngGXoDnh84o89II6i0hZrRnqWBgQq%2Fi2Gz8w0n%2FCWgFuJFVL%2F2b%2B0TxTb1qVFDt8ArmkgWLFqlrtA%2FRsaaZAWMntvgAHSnGWQ2P7tOJUHJYITKyRysaPV7Sr0mWu78GzZecEVXqrTC1ICav4RfVjGNCOktfjI86ah9FEoEXzoNrI%2FmFAoou5UIzIFN32uNfi9qpWPp1p&X-Amz-Signature=6b37698cfca8f0275f2040b872b856d6d3685232cb2c5a99f8fa9edcca6e9f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
