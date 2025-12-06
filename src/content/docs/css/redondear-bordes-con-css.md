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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG5T5HZD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk9n72UnXLAwMj7Bs4ElvROWO9MpdpH%2FZ6o5OKUDA4sgIgaVc9uZYAfj8Rt7KpVWc4Av3tkazzmSDKfDoL4ZWteKMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIZdz4Q3EqVD95JmeCrcA%2B4403fFgTxhSnP5nTzh6yBXiTxNZREjh4d5bLDUBrCRRiGFMxUHSe6VxfpsGB%2FRW2dsMOQMFO19bXRS0XUCOhGFE3tUZ%2BamfaJCsGEW%2FS2Qua%2BImCteo8KFw4V1BeucR%2BdhVmv68D719ZIF2wuV41UMxbDVJDfKJNmKY%2BIRc%2BiPxoeaA9YUYaQiDtKV0wR%2BmSU0ZPofQKvoG%2BL%2BwmFgrGFCRQ%2BI9OYyw5xBkHezc4JF%2FU8KLLd3QisBEHKbnb9n9sTPmEmJPIKVx6c9jsEnZ4iHApJAnG%2FK%2Brx%2B%2FqmdwNH2VjJQQ8%2FsAeA37YsocYtbqubmoXxJroZIOFhBWzIDHTBhRkmmasDJaZdYkimhz0dReitwAUvTQRayXR%2BS8hxMuYv9rgIVTuCrMBUmYxq3VQPxhRwGoY%2BzsaGLkwDEwzE6BaSYc3FhACxH8Ym7xVDHQvIlt0QUqdvhMNR8mEDMa8nutXCT7H53bWy4hltvbYX6IpzScbAZf0CgAEGS4HuUyRThta9Cp9PL4PCaHECkuCxVREn48bX1jx%2BAO23p5Vl%2Bz3tfnnjC1uKqNE6woT7dbVuyF2FJloR%2FRSRulvu0dn10P2Ffl41F5RKaSDb4lOjWABE%2FTpKkg3TilaBIMMP9zskGOqUB7YWPU6Abom00JalT5t%2Bfc7MLfUPLkftoKAt7dtcbN6mRGW4zwIoHC15Ca9XdmS5beuwcMaJlSOpPWPbDx7nXSG32M%2F%2BI91DAOkTxGDzDxUXlY7fuQC4kTAR%2BRDzOYH1k8piZhHGlV3lNx08k%2BzczAv2wMRNrTWWjXE8tKH1LGR68n%2BvEw9X8wzGki9poRbW4rjsmM%2BwXxXZqKuMhbxOFLV5EGeyY&X-Amz-Signature=cebc4d8f89d5d69046fff26fb9ef0213f09596de7049de76aca869d483e5a03f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG5T5HZD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk9n72UnXLAwMj7Bs4ElvROWO9MpdpH%2FZ6o5OKUDA4sgIgaVc9uZYAfj8Rt7KpVWc4Av3tkazzmSDKfDoL4ZWteKMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIZdz4Q3EqVD95JmeCrcA%2B4403fFgTxhSnP5nTzh6yBXiTxNZREjh4d5bLDUBrCRRiGFMxUHSe6VxfpsGB%2FRW2dsMOQMFO19bXRS0XUCOhGFE3tUZ%2BamfaJCsGEW%2FS2Qua%2BImCteo8KFw4V1BeucR%2BdhVmv68D719ZIF2wuV41UMxbDVJDfKJNmKY%2BIRc%2BiPxoeaA9YUYaQiDtKV0wR%2BmSU0ZPofQKvoG%2BL%2BwmFgrGFCRQ%2BI9OYyw5xBkHezc4JF%2FU8KLLd3QisBEHKbnb9n9sTPmEmJPIKVx6c9jsEnZ4iHApJAnG%2FK%2Brx%2B%2FqmdwNH2VjJQQ8%2FsAeA37YsocYtbqubmoXxJroZIOFhBWzIDHTBhRkmmasDJaZdYkimhz0dReitwAUvTQRayXR%2BS8hxMuYv9rgIVTuCrMBUmYxq3VQPxhRwGoY%2BzsaGLkwDEwzE6BaSYc3FhACxH8Ym7xVDHQvIlt0QUqdvhMNR8mEDMa8nutXCT7H53bWy4hltvbYX6IpzScbAZf0CgAEGS4HuUyRThta9Cp9PL4PCaHECkuCxVREn48bX1jx%2BAO23p5Vl%2Bz3tfnnjC1uKqNE6woT7dbVuyF2FJloR%2FRSRulvu0dn10P2Ffl41F5RKaSDb4lOjWABE%2FTpKkg3TilaBIMMP9zskGOqUB7YWPU6Abom00JalT5t%2Bfc7MLfUPLkftoKAt7dtcbN6mRGW4zwIoHC15Ca9XdmS5beuwcMaJlSOpPWPbDx7nXSG32M%2F%2BI91DAOkTxGDzDxUXlY7fuQC4kTAR%2BRDzOYH1k8piZhHGlV3lNx08k%2BzczAv2wMRNrTWWjXE8tKH1LGR68n%2BvEw9X8wzGki9poRbW4rjsmM%2BwXxXZqKuMhbxOFLV5EGeyY&X-Amz-Signature=cfb1798ca8a904fdfb792ed3714a2bf053519842bdf7b43aa8bb0a9b2a1c8a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
