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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ALY23Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3D7VsjDJowE91xelvIRYtrSCezHAf%2Bfw0JqdCCFmz7QIhAOV4sHPqc8RfAMay4FnFEVDShqNE6KBkXEAleRh%2BmgwYKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZu51xcfexAEyM0J4q3ANTzyFbQXRHzqCEh1MpZyKxwspvmHTKz8bBdrW3OuwTiPmI24KOedUlHJLBEfWfGXTm5bgN%2FxqpUB8k%2F30I5e5Sx7XPId9BYF%2FFtagoIWczTJVtjjV2jPMxim5FS3ujx827Vp9blXb2tCihy2L5wjO01xp061B678swZdgCZxUvVmT26oiFdeiPaMAgbCnWIi9Dq3tUykRbaCtgODMMtO%2FCF8qDpQP%2FdXzsW%2F5TYPie6MFDgyjyz8ijql77nfXAt33igks6xxIvWWDbTs0K6AeFMtec%2F4qL6I2GzMB7Q4sXxNieeqk%2BzhUWvxoDYyfUbXzpWhuLfvMtlyrwy%2FRr8%2FSJoFVFVeTqggXoPegUIqzxHuq5DO8%2Fbe0ZYW388uE9DaU3vteSRBvjSj8lbxWvFO1o9q8OLKyoBcSTM%2FSvIUARGCnBi6yYAmS4buisUnODfEbW0hIDKWNGr2d9AFWDA3yIXcz3QCs7PsCH2Tc5czDvPwkTeIywFxLKHByxUelgDwDnJ0Pk0ebvA8tNtjiV0W4wSNHj03SCKWLcNPN%2FdhnMJmx%2BfXi3uIHbEmch6F6kfx0sc06o2TfOVKSJ7Hi96a64SuCEpUCKgfXTP9qqWXvm8U0dh6fOaZ%2F%2FI4kdJDCzrozKBjqkATELJVvDCn0nycXW%2F2apPt%2B%2BDlFdl7uXpQmoIkpGTN8o1nzF4NB7DbRmpLOcWBDmZtvItU2yDyxElKuo5zGrCQZpbkzlKzDktuWDCWQDhs2Laxa6HyevaK3dRJBJZZx1VabQf0ScCbrbXH3TGc%2B80LX9VtDHFefcfj4wHEonVYTjMv38GNab85tq0L7VzWCV%2FydpK26KP3Du%2By8R8t6IpJz%2BTUoz&X-Amz-Signature=6ac7a6b872ec03211223e5bff3d35c320ee712954fc35037463956a631d69d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ALY23Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3D7VsjDJowE91xelvIRYtrSCezHAf%2Bfw0JqdCCFmz7QIhAOV4sHPqc8RfAMay4FnFEVDShqNE6KBkXEAleRh%2BmgwYKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZu51xcfexAEyM0J4q3ANTzyFbQXRHzqCEh1MpZyKxwspvmHTKz8bBdrW3OuwTiPmI24KOedUlHJLBEfWfGXTm5bgN%2FxqpUB8k%2F30I5e5Sx7XPId9BYF%2FFtagoIWczTJVtjjV2jPMxim5FS3ujx827Vp9blXb2tCihy2L5wjO01xp061B678swZdgCZxUvVmT26oiFdeiPaMAgbCnWIi9Dq3tUykRbaCtgODMMtO%2FCF8qDpQP%2FdXzsW%2F5TYPie6MFDgyjyz8ijql77nfXAt33igks6xxIvWWDbTs0K6AeFMtec%2F4qL6I2GzMB7Q4sXxNieeqk%2BzhUWvxoDYyfUbXzpWhuLfvMtlyrwy%2FRr8%2FSJoFVFVeTqggXoPegUIqzxHuq5DO8%2Fbe0ZYW388uE9DaU3vteSRBvjSj8lbxWvFO1o9q8OLKyoBcSTM%2FSvIUARGCnBi6yYAmS4buisUnODfEbW0hIDKWNGr2d9AFWDA3yIXcz3QCs7PsCH2Tc5czDvPwkTeIywFxLKHByxUelgDwDnJ0Pk0ebvA8tNtjiV0W4wSNHj03SCKWLcNPN%2FdhnMJmx%2BfXi3uIHbEmch6F6kfx0sc06o2TfOVKSJ7Hi96a64SuCEpUCKgfXTP9qqWXvm8U0dh6fOaZ%2F%2FI4kdJDCzrozKBjqkATELJVvDCn0nycXW%2F2apPt%2B%2BDlFdl7uXpQmoIkpGTN8o1nzF4NB7DbRmpLOcWBDmZtvItU2yDyxElKuo5zGrCQZpbkzlKzDktuWDCWQDhs2Laxa6HyevaK3dRJBJZZx1VabQf0ScCbrbXH3TGc%2B80LX9VtDHFefcfj4wHEonVYTjMv38GNab85tq0L7VzWCV%2FydpK26KP3Du%2By8R8t6IpJz%2BTUoz&X-Amz-Signature=5c932d5bebbc64e6025715775b941719a37c8d5941c7fedd5cdffebb1e86dc26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
