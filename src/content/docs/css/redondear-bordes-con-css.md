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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGI5MEU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpvGRIp%2FzrfOl%2B21pF3f8tuyJsgM7vu1Zy05mrQyIA9AIgNjgFnPg0L6unvh%2FrCuFRWqOrgS0WYnNapSbXjjvrvkoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ92v0MdNHF6CL%2FUSrcA3nd4rGdVUjvAmhP1LF4D6UNWWfVuh1nqrdEPRBPdyeQOB0UpVflBi0j5d6%2FK7xESur3nm6Ed%2FFhc%2Bk9Wrb5HWFpHxP10%2BVMebQUORGCEV3bywcMcSqAyvvhFrU3TtIijWQhDLgrCQhLt9Cxbvt%2BumrSjVuCiZNP8sbDZyetRbwdaOvNzc1kwJ2%2BQMzvOblDbfWsDuz%2FRVBwgbDUn8smn5Eu79r2r6hSYBwcdAb3kNR7pthuryEwHF7yyxxdldHGQtkvHJPEK%2F3VLQAZA%2BHE%2BL6v3bbk25RlhbUgg0imI1OwgME2MBKtAGvFiqt0TTjyLobYPR%2BhLOalKQsO684vJDa21%2FS5NlkfsIiXoG87z2%2BvIXu2cYCPACORk1q0jcjz6pxof%2FaTw5Q8cUR%2BYJWWzT9iWE6VFedeQpnQZj4WtIkCrQSzXTXlwMLqSUFdgEOV8zTj7wEWv2uL5aWpvX1s9NmJM%2BpKDkFcwhJqgz0qgI4VYKwwtw1opcfOslZlt%2B%2FNay6A0fGh3patPRkYMkKA226RS1ad6n2HqW9v7l1Zqqbi8mdprookbLBGnFlIyMj1Xcr1sfun%2FLIF9onfG73TjD0pq0kb8bDCy4aADlvKQCpOruvjUecd0X0n%2FBOGMJ%2BQ28kGOqUBQjWGNASwbJeWFmrO%2FIypirXWXsCmTBNTjGBgMDUxXnLAXMZSrH%2BEt7T%2BWQL8Y6Mr4oMZqUREqeLqGhD%2FqG5ph4ZG0CnnjY5clDI86DepBYiC%2BU%2BGzfHnz%2BrsGBHdMRE1DMiqSDg59ObcYCRbkB967gLueHvb%2FWOq%2F3I5KPdJoeADat4s1W5S1YOc82UjHjedpDQROKtntzQjrdQc2T0ODJptXKkk&X-Amz-Signature=5de379b0f0a4cb5eb8d1da0bc5ce784102f48e1ac049aeeb66e2d5cbb4086d15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGI5MEU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpvGRIp%2FzrfOl%2B21pF3f8tuyJsgM7vu1Zy05mrQyIA9AIgNjgFnPg0L6unvh%2FrCuFRWqOrgS0WYnNapSbXjjvrvkoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ92v0MdNHF6CL%2FUSrcA3nd4rGdVUjvAmhP1LF4D6UNWWfVuh1nqrdEPRBPdyeQOB0UpVflBi0j5d6%2FK7xESur3nm6Ed%2FFhc%2Bk9Wrb5HWFpHxP10%2BVMebQUORGCEV3bywcMcSqAyvvhFrU3TtIijWQhDLgrCQhLt9Cxbvt%2BumrSjVuCiZNP8sbDZyetRbwdaOvNzc1kwJ2%2BQMzvOblDbfWsDuz%2FRVBwgbDUn8smn5Eu79r2r6hSYBwcdAb3kNR7pthuryEwHF7yyxxdldHGQtkvHJPEK%2F3VLQAZA%2BHE%2BL6v3bbk25RlhbUgg0imI1OwgME2MBKtAGvFiqt0TTjyLobYPR%2BhLOalKQsO684vJDa21%2FS5NlkfsIiXoG87z2%2BvIXu2cYCPACORk1q0jcjz6pxof%2FaTw5Q8cUR%2BYJWWzT9iWE6VFedeQpnQZj4WtIkCrQSzXTXlwMLqSUFdgEOV8zTj7wEWv2uL5aWpvX1s9NmJM%2BpKDkFcwhJqgz0qgI4VYKwwtw1opcfOslZlt%2B%2FNay6A0fGh3patPRkYMkKA226RS1ad6n2HqW9v7l1Zqqbi8mdprookbLBGnFlIyMj1Xcr1sfun%2FLIF9onfG73TjD0pq0kb8bDCy4aADlvKQCpOruvjUecd0X0n%2FBOGMJ%2BQ28kGOqUBQjWGNASwbJeWFmrO%2FIypirXWXsCmTBNTjGBgMDUxXnLAXMZSrH%2BEt7T%2BWQL8Y6Mr4oMZqUREqeLqGhD%2FqG5ph4ZG0CnnjY5clDI86DepBYiC%2BU%2BGzfHnz%2BrsGBHdMRE1DMiqSDg59ObcYCRbkB967gLueHvb%2FWOq%2F3I5KPdJoeADat4s1W5S1YOc82UjHjedpDQROKtntzQjrdQc2T0ODJptXKkk&X-Amz-Signature=a2a8cd290dcbf9ad41e25bbb0ff64c6976c45026b33fa52f7f212a407b62d062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
