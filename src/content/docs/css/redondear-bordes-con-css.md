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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWDFQTS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1iCcRPj8PJE4ElTqxMmCC91csleom9cPAO9A%2BjCbbxQIhAL9HcnwO%2BYLukpnnYzTfgB%2FGko4v98qBjVzFpg0xRrhBKv8DCG0QABoMNjM3NDIzMTgzODA1IgyafEsK4KotxBl1mtMq3AO4azSFTsfHbY5afwFjt2s3eAMHlvmhsoj08dABHrsuFAHPRkV4qMH5ugZrmwQv23AK1l1%2FChd3KC9Ng%2Bx50FwvJh4gU2P2NxjDV9h3vEBPMx80aDa5%2BELo9%2BVPMgrezhu8whYscxjVbFRt4I%2FdrophDKgcUvS9ZltTXwBKr7%2BHjLgToG1gPPylC7MDFlkYxujkz%2FbLaFoLfS1TBg6iXP8tQm7EfO%2FjQkCgZ3ztsgy%2BYBXz%2B2aYeiVqKJbMjS58PcPRmCYHQ87tCHqQA2dh9TyOnx6ftUYmm8OzA2JSR1wVOPj6vEjG3kXnXhbNlsyq0PlvLr7TAkh89XWXcNUa23kT1k0uEDXi7US4QJl7Olf9FwO8b7Y9Rd%2Fq6WzZwxeKMPTMGh%2FueIjZcRx%2BHJQW8aejGp%2FEe5QvGdFsokh2SGMGePdrIkb9V8hPdtaGHV8LDuwSiNVep7vBDnUNOSj3kR2JXCVb6Zx6YQkdX%2BlXlzO6IiaIQMMPGk6Bfvl6DKLJdpDJ2SjeHQg0vZnvDbbE3licxTc%2BamW7Ejid06oV88%2FEZ0xhd1aLYS6HTwcbHApLRkel9GVNEdiP2VghsWewHEwXGuBE5fanFtvoidnNT18QZIs0cJVxCZU%2Fic3BrjCzw87JBjqkAbPLJjngyGrgKo5hXzARulIamAC2kGcXDikthS0JrJ5GgFIQAT0ROFrpYnq%2FRpop01OGjetgdx1Fz%2FdFQiBay4VENMz9zlYE0WRBQt%2B0sBLyWBk8zmu7u%2FIL3GvUsiVFq5PZKGaKTKBRPxn1zD1Zm0mRHjlRgp0%2F8Up%2F84bUlbN6nbE6lOg0COtffJbsYQeEAsIRn7EnYKzgZDISgri%2B%2FCWEVMKK&X-Amz-Signature=30f5ad65a88d6901093433b46028928f83a34f43281c7cb4536a3fe4677c4544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWDFQTS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1iCcRPj8PJE4ElTqxMmCC91csleom9cPAO9A%2BjCbbxQIhAL9HcnwO%2BYLukpnnYzTfgB%2FGko4v98qBjVzFpg0xRrhBKv8DCG0QABoMNjM3NDIzMTgzODA1IgyafEsK4KotxBl1mtMq3AO4azSFTsfHbY5afwFjt2s3eAMHlvmhsoj08dABHrsuFAHPRkV4qMH5ugZrmwQv23AK1l1%2FChd3KC9Ng%2Bx50FwvJh4gU2P2NxjDV9h3vEBPMx80aDa5%2BELo9%2BVPMgrezhu8whYscxjVbFRt4I%2FdrophDKgcUvS9ZltTXwBKr7%2BHjLgToG1gPPylC7MDFlkYxujkz%2FbLaFoLfS1TBg6iXP8tQm7EfO%2FjQkCgZ3ztsgy%2BYBXz%2B2aYeiVqKJbMjS58PcPRmCYHQ87tCHqQA2dh9TyOnx6ftUYmm8OzA2JSR1wVOPj6vEjG3kXnXhbNlsyq0PlvLr7TAkh89XWXcNUa23kT1k0uEDXi7US4QJl7Olf9FwO8b7Y9Rd%2Fq6WzZwxeKMPTMGh%2FueIjZcRx%2BHJQW8aejGp%2FEe5QvGdFsokh2SGMGePdrIkb9V8hPdtaGHV8LDuwSiNVep7vBDnUNOSj3kR2JXCVb6Zx6YQkdX%2BlXlzO6IiaIQMMPGk6Bfvl6DKLJdpDJ2SjeHQg0vZnvDbbE3licxTc%2BamW7Ejid06oV88%2FEZ0xhd1aLYS6HTwcbHApLRkel9GVNEdiP2VghsWewHEwXGuBE5fanFtvoidnNT18QZIs0cJVxCZU%2Fic3BrjCzw87JBjqkAbPLJjngyGrgKo5hXzARulIamAC2kGcXDikthS0JrJ5GgFIQAT0ROFrpYnq%2FRpop01OGjetgdx1Fz%2FdFQiBay4VENMz9zlYE0WRBQt%2B0sBLyWBk8zmu7u%2FIL3GvUsiVFq5PZKGaKTKBRPxn1zD1Zm0mRHjlRgp0%2F8Up%2F84bUlbN6nbE6lOg0COtffJbsYQeEAsIRn7EnYKzgZDISgri%2B%2FCWEVMKK&X-Amz-Signature=9213c0fcfecbc85b7f94c1c2affbb605a9e04200c67fe25929d075c54a6ce980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
