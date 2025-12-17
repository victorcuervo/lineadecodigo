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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKHQRRQD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICq6Zpau4ecVTldhjvWXJYdxg4%2BITdtczW1UfJDAXnmZAiEAwVxjVu33fywq5xKOb52SeH0J%2Fj9N41G72jLdNrEr62sq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIztkBRrWoyZv6pDDircAxhNNA8vv0ZO%2FEZg3gBm73HNFKuNtVYw2n4KU3UMMcibZDEdUaV5V0rF%2FDdn98%2BkPUIKrwE0q8goZGHkp2GMDcwmd2AwzzOGjGOKL4jcjOOEUZO2SgU%2FVGW%2FCFqxoVHe%2BaCvhM0qYqp880vS3eyQggjdaThHNKPvn7aCPt1MEBgUHFYaiNyMvngJcGCGJX28%2FfneyEFvdqH8UcOgUXq2%2BZJuPgNmdf8GRJzjAQG4%2B6OHVkABJLXnWkoqRtpL5Gplrahe9WLX7keTswoixyWY9Qxe8sYlSvZ%2BTlPhrrj%2FHRvKjX%2BN4OKiVMl5wtg2TepXVmdnfmzQAeHKQpBO%2FJ9CnASWFbTMhcJksEuyOiviozzJA2ozIASK4XE8CdLpH3xJeJ%2BhW75XCjCuTX9P0ctuYtsVEHDXGsU5fpCuUIAWoQvqh5vr1uEhDzY3dbtz8b0vDX8uI8zTftLsM%2FSyRJ5BkXQcHiHMhDbLlR6xCOmDw0Dqj7wY%2FSgQpkah%2Fey6rAePg4J4NNuWKLV5TNotea0GQibJczw1Fd8RHkNpe9%2Fug%2BgaJe2E0yRcXxcrc1ac5%2F1j8Iu%2BRrkrNm%2F9Q3Nw7EDpP7M3vtV76b1%2FXucTytLBIcrdEtfrI8tof%2F9fo8gcMOydicoGOqUBpi5FHa%2Be70KovCj21nDYOn20yN2DxIFNbrtl0hcdgnX1w5ST0uGnY7FDUeqyNKXIePbrLg%2FVgTxlrfjCcmNo0Bc5gAHflxeYtVc1549OZu4WydKc9feVROyL8T4xnTGAggGeUuiO1Dd%2FUjFrkuQijYVxp2tKN0ZOIntPXH18DR9D3Fygh80a2hvQyXP%2FAZ%2FzZKiJ5xF25NFfN0rZl55hHNvz%2B4In&X-Amz-Signature=f2210db9336c2035cecfed98687f8b1f10374136ea773822ce4ab7dbb6dbd8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKHQRRQD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICq6Zpau4ecVTldhjvWXJYdxg4%2BITdtczW1UfJDAXnmZAiEAwVxjVu33fywq5xKOb52SeH0J%2Fj9N41G72jLdNrEr62sq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIztkBRrWoyZv6pDDircAxhNNA8vv0ZO%2FEZg3gBm73HNFKuNtVYw2n4KU3UMMcibZDEdUaV5V0rF%2FDdn98%2BkPUIKrwE0q8goZGHkp2GMDcwmd2AwzzOGjGOKL4jcjOOEUZO2SgU%2FVGW%2FCFqxoVHe%2BaCvhM0qYqp880vS3eyQggjdaThHNKPvn7aCPt1MEBgUHFYaiNyMvngJcGCGJX28%2FfneyEFvdqH8UcOgUXq2%2BZJuPgNmdf8GRJzjAQG4%2B6OHVkABJLXnWkoqRtpL5Gplrahe9WLX7keTswoixyWY9Qxe8sYlSvZ%2BTlPhrrj%2FHRvKjX%2BN4OKiVMl5wtg2TepXVmdnfmzQAeHKQpBO%2FJ9CnASWFbTMhcJksEuyOiviozzJA2ozIASK4XE8CdLpH3xJeJ%2BhW75XCjCuTX9P0ctuYtsVEHDXGsU5fpCuUIAWoQvqh5vr1uEhDzY3dbtz8b0vDX8uI8zTftLsM%2FSyRJ5BkXQcHiHMhDbLlR6xCOmDw0Dqj7wY%2FSgQpkah%2Fey6rAePg4J4NNuWKLV5TNotea0GQibJczw1Fd8RHkNpe9%2Fug%2BgaJe2E0yRcXxcrc1ac5%2F1j8Iu%2BRrkrNm%2F9Q3Nw7EDpP7M3vtV76b1%2FXucTytLBIcrdEtfrI8tof%2F9fo8gcMOydicoGOqUBpi5FHa%2Be70KovCj21nDYOn20yN2DxIFNbrtl0hcdgnX1w5ST0uGnY7FDUeqyNKXIePbrLg%2FVgTxlrfjCcmNo0Bc5gAHflxeYtVc1549OZu4WydKc9feVROyL8T4xnTGAggGeUuiO1Dd%2FUjFrkuQijYVxp2tKN0ZOIntPXH18DR9D3Fygh80a2hvQyXP%2FAZ%2FzZKiJ5xF25NFfN0rZl55hHNvz%2B4In&X-Amz-Signature=bcdf5b232de4a5a7a0c5efa02be03dc3d8f066739dafb7d61921372995d53599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
