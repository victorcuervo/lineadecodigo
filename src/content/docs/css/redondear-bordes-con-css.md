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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ASTJPQV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQfkmB85hSbUlSeUOja4Tcc%2B5cqxJMp%2F9BnoPXELraNgIgXVJGU5Cz8j9c48TQgrufDbidjhDtt%2ByounCqZybN54YqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsdRKA9AL2WJtNc2CrcAyqRFfM4sQUsFXS4itMnfoAUorrgDlzwxk569c4V6Z7iLR0NWsfzoczo6f0WxD%2BqeDaLWvI3Qp1xCQlwlMTEuwMvs8xMFxtbGTNl%2BBp5PWUS%2BalqhkIj7R1AdzNFtEKlLotnpbPFWawCA3EB%2FmnMBeIkgpd9jFgILwkT58DIW%2FFe8Uzq4fVrc%2BU4Fc%2Bw5JD3JOCuwj64tqLcuPldVr5G5iXFhmrYg1Bt5Qmk4Xm32GO8WBvRd84oispvUzGDunDMBflyBLhzpDQdMTN8b1dsRwZ9FFihifA1L6L8ve1fh5i9YU3aCsU6bPGdwyDdp08oJXrog%2F3ih8w%2F9qZgX3pWS5N8Zx%2BE8Y187G3bYW4kW%2F5OOdr0m2fXXVMzpMJ2B75ZPZpL0G%2FIApMqO59Vj%2FLVUubyJqjJzgxc7JX9%2BzHrzJllQExR0UUhSiva81BtNzrkplM8hq%2BwayuooOoHASnGD2UZssQEviVtzwcPGWqDHZrLs6o88aP3DhcXyU5XrirXXd1qAt0KaZdFm5trTcpznLc5B4nnuqW0m8cqvfN4PIX7HlWJqOfGcsMt%2FsKqurVs5TZTgGgr6df%2FRovWIWrfcRLnH3L1z6%2Fdy5JBRJFPQ%2BKqVlJqX0ooTu0IRretMJuZ1ckGOqUB0xY0BRwAxlVp1WYr%2FrNUL7fN8Tfi%2B3T4DQpghuGiY4tbinTIkgtKl7NJvmLe0%2FBc7vplTFVnN5hRre%2F4FbIunmNa74vx4mSdkQv%2FGpeWWchsZJ7dxe9b9Ij6hBWxTn%2BDwmDF2BP9cgJymAXUNU3bnKfSC8ul%2FPnFP%2FRK79GEA3iyYHWMMg%2F0n8OLFDuvEvs89ZSIp3bhsKYwNHbeUMSySli6hSrt&X-Amz-Signature=6188a9457d657023f9688c8bd7ab91b9fcf39870ccbd8247d9e5b6a14f4c78b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ASTJPQV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQfkmB85hSbUlSeUOja4Tcc%2B5cqxJMp%2F9BnoPXELraNgIgXVJGU5Cz8j9c48TQgrufDbidjhDtt%2ByounCqZybN54YqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsdRKA9AL2WJtNc2CrcAyqRFfM4sQUsFXS4itMnfoAUorrgDlzwxk569c4V6Z7iLR0NWsfzoczo6f0WxD%2BqeDaLWvI3Qp1xCQlwlMTEuwMvs8xMFxtbGTNl%2BBp5PWUS%2BalqhkIj7R1AdzNFtEKlLotnpbPFWawCA3EB%2FmnMBeIkgpd9jFgILwkT58DIW%2FFe8Uzq4fVrc%2BU4Fc%2Bw5JD3JOCuwj64tqLcuPldVr5G5iXFhmrYg1Bt5Qmk4Xm32GO8WBvRd84oispvUzGDunDMBflyBLhzpDQdMTN8b1dsRwZ9FFihifA1L6L8ve1fh5i9YU3aCsU6bPGdwyDdp08oJXrog%2F3ih8w%2F9qZgX3pWS5N8Zx%2BE8Y187G3bYW4kW%2F5OOdr0m2fXXVMzpMJ2B75ZPZpL0G%2FIApMqO59Vj%2FLVUubyJqjJzgxc7JX9%2BzHrzJllQExR0UUhSiva81BtNzrkplM8hq%2BwayuooOoHASnGD2UZssQEviVtzwcPGWqDHZrLs6o88aP3DhcXyU5XrirXXd1qAt0KaZdFm5trTcpznLc5B4nnuqW0m8cqvfN4PIX7HlWJqOfGcsMt%2FsKqurVs5TZTgGgr6df%2FRovWIWrfcRLnH3L1z6%2Fdy5JBRJFPQ%2BKqVlJqX0ooTu0IRretMJuZ1ckGOqUB0xY0BRwAxlVp1WYr%2FrNUL7fN8Tfi%2B3T4DQpghuGiY4tbinTIkgtKl7NJvmLe0%2FBc7vplTFVnN5hRre%2F4FbIunmNa74vx4mSdkQv%2FGpeWWchsZJ7dxe9b9Ij6hBWxTn%2BDwmDF2BP9cgJymAXUNU3bnKfSC8ul%2FPnFP%2FRK79GEA3iyYHWMMg%2F0n8OLFDuvEvs89ZSIp3bhsKYwNHbeUMSySli6hSrt&X-Amz-Signature=da2014396fda12df2fbdd3a307b99d8c3267ce7680b087d3a41e326e90108729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
