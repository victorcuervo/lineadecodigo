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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XJT366E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6Ceblk2b5utI6tW0p1Mvj2Yr6zWYUV5iYNR9iCmXCkQIhAOQQhEZKBu8PSgJ4pIRUVRuFRXNgb1SgjDI%2BZk2v7R3xKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2Dzdx%2FcotNTSvQkgq3ANuWlmLyu3QQuKajW2RoVmCLWuzCdvVaNGuySdxT4d3Z02b67vQ%2FXwoxGXTfBrJdZVZiPW8yzUtOgmBMFqmfbD6XwPN5z%2BHU9xpQ657jKje%2Bgzl12vrQMA4qO27dL7Yra88%2BdwD6c8lpSiHHR2neOj2pldfHMK5AUVNLCqW6OsDG9LvIDUP56KpRpQUoZxrrOXnyp5Bd8qFyffFeaCfX0y8KgWgw7F0yoegzyg3cgx2rInW1OWR9XkXllHCsNvmQAJFRU9GLVhIA4R3eNsOWwgQ66agUb5ybgTl27V%2Fb0QtrQk2hkFS4b%2B6uLh2RcqThmLhPfGdzG%2FccSJ2bfnGLemBeXc3GQ5R8Nxx4SzSY3AFN4z564G9UhaPr3hXto11v6I%2BsD8CqcLbgP%2FuVDOoT0iV2bjiCRaNlGicY%2FcI9CwAs5Z3TiqHnJ5CkWXB5ihNG4WzrFQi1wfTqtvPtZ9xR98pXcxCpFcoMsy6Ma1lBajuCOuBFoHVN%2BWJDPNOIeSXtA3jUcPYQLwFPusjaoZOIS%2BCc2zQv9Mk636sw9v9VZbuF4mgeIrzi5%2F%2FvG3Dy4ecW0nWmzC0%2B7lpst%2FFr2pwff8JUEl8gxELdeWyITIKB4z%2FZbpPwsAbkyd91J4gpDC%2FhtzJBjqkARbPCaRoRQlEAmtWBlDL9s5zgQYNfGAGkNYaFFhrPSYkPiRvQDMquGBzt%2BiY6VnSvy0ur9IToXmxc5zB0bUb6j7DJip%2FYSFDA9kpq7N5xVGxht%2Fm4dwOusgJwbmf7p1IshcuqHiQ0RcdCl1b1%2BcIUPNBzM9ZcRoCAdZD9NmnHPgL1DPxngKAHMl5SDkWkW6tt4tA0EOD1hyY4wyJ6Zq0CtQmlam%2F&X-Amz-Signature=06c91154e4a50c51de3a1ce6ee11fa64ccdf644905a93e6be41af5eb9efd3dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XJT366E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6Ceblk2b5utI6tW0p1Mvj2Yr6zWYUV5iYNR9iCmXCkQIhAOQQhEZKBu8PSgJ4pIRUVRuFRXNgb1SgjDI%2BZk2v7R3xKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2Dzdx%2FcotNTSvQkgq3ANuWlmLyu3QQuKajW2RoVmCLWuzCdvVaNGuySdxT4d3Z02b67vQ%2FXwoxGXTfBrJdZVZiPW8yzUtOgmBMFqmfbD6XwPN5z%2BHU9xpQ657jKje%2Bgzl12vrQMA4qO27dL7Yra88%2BdwD6c8lpSiHHR2neOj2pldfHMK5AUVNLCqW6OsDG9LvIDUP56KpRpQUoZxrrOXnyp5Bd8qFyffFeaCfX0y8KgWgw7F0yoegzyg3cgx2rInW1OWR9XkXllHCsNvmQAJFRU9GLVhIA4R3eNsOWwgQ66agUb5ybgTl27V%2Fb0QtrQk2hkFS4b%2B6uLh2RcqThmLhPfGdzG%2FccSJ2bfnGLemBeXc3GQ5R8Nxx4SzSY3AFN4z564G9UhaPr3hXto11v6I%2BsD8CqcLbgP%2FuVDOoT0iV2bjiCRaNlGicY%2FcI9CwAs5Z3TiqHnJ5CkWXB5ihNG4WzrFQi1wfTqtvPtZ9xR98pXcxCpFcoMsy6Ma1lBajuCOuBFoHVN%2BWJDPNOIeSXtA3jUcPYQLwFPusjaoZOIS%2BCc2zQv9Mk636sw9v9VZbuF4mgeIrzi5%2F%2FvG3Dy4ecW0nWmzC0%2B7lpst%2FFr2pwff8JUEl8gxELdeWyITIKB4z%2FZbpPwsAbkyd91J4gpDC%2FhtzJBjqkARbPCaRoRQlEAmtWBlDL9s5zgQYNfGAGkNYaFFhrPSYkPiRvQDMquGBzt%2BiY6VnSvy0ur9IToXmxc5zB0bUb6j7DJip%2FYSFDA9kpq7N5xVGxht%2Fm4dwOusgJwbmf7p1IshcuqHiQ0RcdCl1b1%2BcIUPNBzM9ZcRoCAdZD9NmnHPgL1DPxngKAHMl5SDkWkW6tt4tA0EOD1hyY4wyJ6Zq0CtQmlam%2F&X-Amz-Signature=d8e34ec2d7c016d379b52d5b391fd0549f2ea1627c462ed8dbeebe336c7d22d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
