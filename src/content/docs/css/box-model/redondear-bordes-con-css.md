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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKZXUZE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOQUtbEmqHdqS34T4DvkHdq6veIW9bbv6LXmLX2Yy12QIgL9fYwLfGvYWx4MrBNfDXEqn60Hzmf6yxkp%2FQguWDFHkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDH3BP3FTRxAkkPH60yrcA0kg5PPMSQ1hiZD%2B%2BKj3omdZmvzP%2BiU77lg8FetNhDRFBFUUrYjpLuHJxBvx%2BiJ7Y%2FRNiBHTJoKpYGgKpaKOx3gt5N%2FC3YicwRFOHMBCYT6lsmFxrb02jPOdo2HNTg16kHW%2FprXh60lZzv5dL27kgUi38x1os81FKsAoTFYX9V%2BRI4rbkWrLJ0fvGv42hXnYtlUAGmnDnT45oeTmHy1sJyoHfCY5yhlKR5yO4wBR9BaPkl8cxg7L7Gqk9hhEeUwpYPrVSJ3%2BltBmdM2LAkcvkZNKtixSa9FpFOvH%2BiGrUOM8Zr03JQbAS6%2BpmlYPMiirOsoG2cldiraI%2F9IWem8SYYeSgx5Cm0mBLzR1vVg2G%2BfoY3izvkmwYP%2FLUSW%2FIcSkMnE21u0re9iGgBBM%2FgKhAxdjxf7%2B28W9H85A%2FzJAcjGApFrxdFdaHHTeF4v%2BZYE2ELjCCsfkX7pk3F%2BdzJDmsfixbzkLouE5Fq0KxE819IEfvMrzVE48az6S3wWmIx4PMMRuFyJ4z7mXZtombACyT%2B%2BGUCoGE0fIqaW47Wak7O39ziCEgg26%2BgcQxsPzyj2AZ3A%2B%2BltCXyMog4ZLDb%2FPwNtQeqd%2B7GWT4yx%2FfHNLy%2FgIwXKqvmUAVRQfAcSXMJmrisoGOqUBx%2BCzTkOi7iJIgbKpazCHOEBAAB6wh%2BLSkqA0Xjgt%2BpXWUkaodTJGJZsif1fXvUJiVDVB5eJWgwgr5RODwSukDuFk83FBorQK0WLVnyg5QdyUdnMUmfXuJbY%2BSxigk9GyuQn%2B%2FLighx9389QVJZ3w2g%2FhBDLBwRrGoQTAh%2FMGQ0AI4KBoXmgyY1fAp4F9oOoJEW6qjcnbvtIBZlBk5j3pnBpZQoh9&X-Amz-Signature=7547835902cdfdc08bee1eb9da9a761ac5f60a5bdb8810b7dae818685be5c600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKZXUZE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOQUtbEmqHdqS34T4DvkHdq6veIW9bbv6LXmLX2Yy12QIgL9fYwLfGvYWx4MrBNfDXEqn60Hzmf6yxkp%2FQguWDFHkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDH3BP3FTRxAkkPH60yrcA0kg5PPMSQ1hiZD%2B%2BKj3omdZmvzP%2BiU77lg8FetNhDRFBFUUrYjpLuHJxBvx%2BiJ7Y%2FRNiBHTJoKpYGgKpaKOx3gt5N%2FC3YicwRFOHMBCYT6lsmFxrb02jPOdo2HNTg16kHW%2FprXh60lZzv5dL27kgUi38x1os81FKsAoTFYX9V%2BRI4rbkWrLJ0fvGv42hXnYtlUAGmnDnT45oeTmHy1sJyoHfCY5yhlKR5yO4wBR9BaPkl8cxg7L7Gqk9hhEeUwpYPrVSJ3%2BltBmdM2LAkcvkZNKtixSa9FpFOvH%2BiGrUOM8Zr03JQbAS6%2BpmlYPMiirOsoG2cldiraI%2F9IWem8SYYeSgx5Cm0mBLzR1vVg2G%2BfoY3izvkmwYP%2FLUSW%2FIcSkMnE21u0re9iGgBBM%2FgKhAxdjxf7%2B28W9H85A%2FzJAcjGApFrxdFdaHHTeF4v%2BZYE2ELjCCsfkX7pk3F%2BdzJDmsfixbzkLouE5Fq0KxE819IEfvMrzVE48az6S3wWmIx4PMMRuFyJ4z7mXZtombACyT%2B%2BGUCoGE0fIqaW47Wak7O39ziCEgg26%2BgcQxsPzyj2AZ3A%2B%2BltCXyMog4ZLDb%2FPwNtQeqd%2B7GWT4yx%2FfHNLy%2FgIwXKqvmUAVRQfAcSXMJmrisoGOqUBx%2BCzTkOi7iJIgbKpazCHOEBAAB6wh%2BLSkqA0Xjgt%2BpXWUkaodTJGJZsif1fXvUJiVDVB5eJWgwgr5RODwSukDuFk83FBorQK0WLVnyg5QdyUdnMUmfXuJbY%2BSxigk9GyuQn%2B%2FLighx9389QVJZ3w2g%2FhBDLBwRrGoQTAh%2FMGQ0AI4KBoXmgyY1fAp4F9oOoJEW6qjcnbvtIBZlBk5j3pnBpZQoh9&X-Amz-Signature=68b56baa186bc1ce3cca4a81ba74dc82fb7848ac50f31ebed3ef42579bfd072c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
