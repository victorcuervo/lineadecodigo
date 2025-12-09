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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RSRDWYY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpDGC8PogfviOwL%2Bf48JrWLMV0KJ2MwKPj4SnmJGi29AiEA2WG0h7wgzKDTRoBlDTj4U4iVEQ2XC0QsENPlDRZcd1YqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BWS5VE1rXyHSX1eircA%2FtLAAYXmtCfGpnCcjt9yEqj8qk1I%2FA7WeVfl0NgZF68rw8uw1tBjMVXIOsL5IICz2kPc%2FIzzvohcX40Q1pfs5h3zN4hPsv76bEF2bMAqA7%2BTv3aI6STjuYWgCQH6lgU1wKxgBx2Fyj%2FQj8HTL1UPjvAgA%2BSDq98f4mvv2dXIymR24iDKZfS7LG25z%2FYgW42PKJVPzi%2BdAKgHPb%2F6famztkjxKN5JOZlzQYXKC88sdgH3gUO3N3Zj1%2BWqp%2BdhfOzbgTFrQ0tUCD87YdXXvVV3CYX4TjAEjnu0gKVt71kutn6mES0nU5HMHFwOLYZf0uBTzbG2nusB7sTN%2Fbimzoi6kvNoZ3pFS%2FESO9%2Flnu0sRd6TGEUtW58KjeWs2y%2BH5EPDK116CFDBP9V%2F2efl37wiSKMJ2mGWv6LtgmeCZLTaSVFUWqZz3gF5aBXf%2FI8vBt5VdhszjgdGtABIj1Df99tQf67RKaJ1AGUzqjLyD4MICoNAWXzb5zwgWPicBbNw%2FbNdZdPxGXvPkX599DXR46JUUS8dbIg7I%2F3zxgyhIBqTX1G5U4MPtHSloF0G5xxX3xUTlRlj5X1YoQp8wqBx3J9c72s8U43oGwJZK56j5C%2BsWpuU3ltWd9DrKsG5ecuMJiu3skGOqUBk684%2FFr2GBs3zEMa6Sv5so7xA4aAfNsQWg%2FAkLMBa680B7bHEzZdj2wF6g53vAhz%2FiGpsfbHL33W2WCUAFNtiOmtTF%2BFuh6uEewJlJeql3BYJwNi65XUelDG573KWJsUyzQDP86E%2F7ibzpc50OKVnSnKykYn1TXrVdNk1cjGAC8QXdHhm%2BxZGaNr6G9QQlgeH9Ejg2e0uMIYrxIVOQ6wHcPhZUOV&X-Amz-Signature=0e8dfefd7ebcebc3954c661a79c4827ba9d582be0491d913870799d0de930459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RSRDWYY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpDGC8PogfviOwL%2Bf48JrWLMV0KJ2MwKPj4SnmJGi29AiEA2WG0h7wgzKDTRoBlDTj4U4iVEQ2XC0QsENPlDRZcd1YqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BWS5VE1rXyHSX1eircA%2FtLAAYXmtCfGpnCcjt9yEqj8qk1I%2FA7WeVfl0NgZF68rw8uw1tBjMVXIOsL5IICz2kPc%2FIzzvohcX40Q1pfs5h3zN4hPsv76bEF2bMAqA7%2BTv3aI6STjuYWgCQH6lgU1wKxgBx2Fyj%2FQj8HTL1UPjvAgA%2BSDq98f4mvv2dXIymR24iDKZfS7LG25z%2FYgW42PKJVPzi%2BdAKgHPb%2F6famztkjxKN5JOZlzQYXKC88sdgH3gUO3N3Zj1%2BWqp%2BdhfOzbgTFrQ0tUCD87YdXXvVV3CYX4TjAEjnu0gKVt71kutn6mES0nU5HMHFwOLYZf0uBTzbG2nusB7sTN%2Fbimzoi6kvNoZ3pFS%2FESO9%2Flnu0sRd6TGEUtW58KjeWs2y%2BH5EPDK116CFDBP9V%2F2efl37wiSKMJ2mGWv6LtgmeCZLTaSVFUWqZz3gF5aBXf%2FI8vBt5VdhszjgdGtABIj1Df99tQf67RKaJ1AGUzqjLyD4MICoNAWXzb5zwgWPicBbNw%2FbNdZdPxGXvPkX599DXR46JUUS8dbIg7I%2F3zxgyhIBqTX1G5U4MPtHSloF0G5xxX3xUTlRlj5X1YoQp8wqBx3J9c72s8U43oGwJZK56j5C%2BsWpuU3ltWd9DrKsG5ecuMJiu3skGOqUBk684%2FFr2GBs3zEMa6Sv5so7xA4aAfNsQWg%2FAkLMBa680B7bHEzZdj2wF6g53vAhz%2FiGpsfbHL33W2WCUAFNtiOmtTF%2BFuh6uEewJlJeql3BYJwNi65XUelDG573KWJsUyzQDP86E%2F7ibzpc50OKVnSnKykYn1TXrVdNk1cjGAC8QXdHhm%2BxZGaNr6G9QQlgeH9Ejg2e0uMIYrxIVOQ6wHcPhZUOV&X-Amz-Signature=78ce8ac28015c33feb9cbabd10060836ae96da5ca0c818e3e88245e7b74fbd08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
