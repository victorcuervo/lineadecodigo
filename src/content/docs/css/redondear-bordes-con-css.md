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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJOIW52%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fj3cbp5swyn2D%2Fji5Ve7UravPgqvb2z2tVx%2FQRVzw5gIgDDW1awJNJheEpfaHBWagSOWhRrpFWREK6HklreQ903QqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwvoNg716jvDr%2F1QircA2fhY5Ck3%2BQNzz4V%2FBRCbRbvuKyQSqjdT0sIUhvDUpmNb4wvjPcjfMPWQZbXYyk34VHUkfbCOyr1rHqL%2F5zS%2BQurbd3CoTmk%2Bw9k%2BhssP0ihXYhRqH8vZpOLPH9Oqma5Wap6UMZOOzupnCNZgOV3KIgclqQ4bSPv%2FgOZnKzeJJvSnEkq1yWMwloKWu5UoJkjWX4mTNKO1bquK%2Bn5w8wWdkkpRzO5ZapzWdFuncuSaEbLG1EW7es4XPTyY%2BdjEQofHe8lHUOi8JkojFV3Zea3P2l4Lyb8PPIY%2BPhhyHpyoE4KPwGrSE4cjnZKwZ2N4fy1ATOAiizv1XGvzr%2BSzdH3jJ%2Bc9Ma0lGPWSn8LT7bELNFBTxrCbsYMlbP%2BXVsgvB%2BuiQqG94z8HdX7EBjUlnFNVf8rcFNWJ5brc0heMHC32HJH1rCQccTntBmxM0f8sHQoKJotd0KU%2BxWLOXflT%2FFi4Acac2nPPWen%2BcN%2BA2ShW7u8GdVVLw51ItxV%2BrUWaQbK4Jq%2BAecBN7JTcXjkZpBVrELM4V%2BisWzRg1hKiY6wLCTL%2BLgPdIlqufZKH3XJ1MbhLhuxbNKM3g0vu0%2B7RcKnY%2Fp9IyOdKQLyWUnTWxwsI%2FxwDaB%2BEDck2%2B90Ch7OMNOk38kGOqUBL9SOkF6NU2ng6Lq1cjTgKIWXXxLEy8Byma6ga9adBRLJjFIfT7V%2BBX8rgR11cCtzjw3a2YKY7ggT2bt%2FOFe6EEAkc9BjBcxJcIbqWrPAQwOxZ5XbPlvSohoOrST9YbTbhjacQHLM%2FM9ZZLeARRHdTja9%2BI1FOJADWNy%2FfWkgMIjXMWRSx4Jfk0liSNuGW7ykk3J%2B5Xo6S%2FTNQk9NYoH6HstwiPTR&X-Amz-Signature=02aaf532c338e406ecc4beef1745156f223e3ecc9a3b6b2f33f904298d8b2745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJOIW52%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fj3cbp5swyn2D%2Fji5Ve7UravPgqvb2z2tVx%2FQRVzw5gIgDDW1awJNJheEpfaHBWagSOWhRrpFWREK6HklreQ903QqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwvoNg716jvDr%2F1QircA2fhY5Ck3%2BQNzz4V%2FBRCbRbvuKyQSqjdT0sIUhvDUpmNb4wvjPcjfMPWQZbXYyk34VHUkfbCOyr1rHqL%2F5zS%2BQurbd3CoTmk%2Bw9k%2BhssP0ihXYhRqH8vZpOLPH9Oqma5Wap6UMZOOzupnCNZgOV3KIgclqQ4bSPv%2FgOZnKzeJJvSnEkq1yWMwloKWu5UoJkjWX4mTNKO1bquK%2Bn5w8wWdkkpRzO5ZapzWdFuncuSaEbLG1EW7es4XPTyY%2BdjEQofHe8lHUOi8JkojFV3Zea3P2l4Lyb8PPIY%2BPhhyHpyoE4KPwGrSE4cjnZKwZ2N4fy1ATOAiizv1XGvzr%2BSzdH3jJ%2Bc9Ma0lGPWSn8LT7bELNFBTxrCbsYMlbP%2BXVsgvB%2BuiQqG94z8HdX7EBjUlnFNVf8rcFNWJ5brc0heMHC32HJH1rCQccTntBmxM0f8sHQoKJotd0KU%2BxWLOXflT%2FFi4Acac2nPPWen%2BcN%2BA2ShW7u8GdVVLw51ItxV%2BrUWaQbK4Jq%2BAecBN7JTcXjkZpBVrELM4V%2BisWzRg1hKiY6wLCTL%2BLgPdIlqufZKH3XJ1MbhLhuxbNKM3g0vu0%2B7RcKnY%2Fp9IyOdKQLyWUnTWxwsI%2FxwDaB%2BEDck2%2B90Ch7OMNOk38kGOqUBL9SOkF6NU2ng6Lq1cjTgKIWXXxLEy8Byma6ga9adBRLJjFIfT7V%2BBX8rgR11cCtzjw3a2YKY7ggT2bt%2FOFe6EEAkc9BjBcxJcIbqWrPAQwOxZ5XbPlvSohoOrST9YbTbhjacQHLM%2FM9ZZLeARRHdTja9%2BI1FOJADWNy%2FfWkgMIjXMWRSx4Jfk0liSNuGW7ykk3J%2B5Xo6S%2FTNQk9NYoH6HstwiPTR&X-Amz-Signature=b780e9e9754555a07eef9318757fd7edeb43978b0dd442d08aac86e428361038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
