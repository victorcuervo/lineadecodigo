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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQHLUKAW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1o%2FW0cxVMynobbHviz51%2BXXe6OzVEq%2FAQajC5%2BSEKaAiALKFWAWhy7Gik%2F3p2ck6PNmxhIFnjKFBW5t%2Bb7m6tG%2BCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkVDyQjAbIimNknqnKtwDtg5loZ3dAo8eBvFj3bVFkISF%2Bq2L2bzRU882V6P7P%2FbQ3N5ZYE7TQsIVLjbfgPZJ06R21LMXgaJRRQDDCXq02M9JFh%2FeiDXO8ge7d1bjHfns6akQdMoWiWLd%2FXQLMnm2ouCOiPD08fnGE6aC2MNi5LEXo0E3ZI%2FzefbsuiQp1vLGCF%2BFVuCJuLdmVXGoc2G%2F3i85z4O5zxO%2BSNbA%2Bdx%2FVhQzGLZKu13Tm50vAhmdpnbq1p3YE6DOaJXQkSF%2B5i94bMMYMC%2F2xXx3C77WnZKbRUlkeZ7UQh6zkpONldjMDUFAwVEKtjw6V6uCPwNfc%2Bh3uvyPDr4hJ2s63o%2B3FIErLc9Fll3kDb6d1pNg%2BMgHxgASI74AUVKT5nanfjBaGQOvjaBkzutfwdAW%2BTmmFo89AigPEc6zfSvFmfPD4pSPIIxaVV%2BllMQZBTN9sbIZ%2BWkzno0DpVBPzWxbdkwN7T0DtMm3nBLZ6Nd4Di930vnyLRN79CxHMIDudTribCrKuqpHDX5uUIAFmPJOrTAfQDUqLb7LDnPxBE4llPPTi2rPYcWUm1%2BFogZKY%2BdojpikD78Fs8GMXK8ZEcGbwYCt2kVPlOJ%2BrF2qZksIJfTWFYY5nhcjpnd44dtuuU095HMw79DYyQY6pgH7IDt5QEG1t2mWTyntQfI0IBK%2BVch8O4Fwz0%2F6QXlDFaCQnpdJmTGnAPYS3t%2FaAQg0BRdGZxut2qQxwrlzhm8SjUIM7O2pWuULZDX0eii3rka4%2B07pSNm1%2FPPHvuQnWpNymY0Lhf3urrGwYLtlr%2BmLXKnUOi0yqA60IAAzbZg%2B8XbQt6VhuZgbzjIwvzUskzyEiqqmdur41LBYqhYMcg0HiW271Yk3&X-Amz-Signature=ec3acb941c1f7215e82f5dfa19ce016750ee459fe0fbc1e8eb139c2b6d2e5ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQHLUKAW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1o%2FW0cxVMynobbHviz51%2BXXe6OzVEq%2FAQajC5%2BSEKaAiALKFWAWhy7Gik%2F3p2ck6PNmxhIFnjKFBW5t%2Bb7m6tG%2BCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkVDyQjAbIimNknqnKtwDtg5loZ3dAo8eBvFj3bVFkISF%2Bq2L2bzRU882V6P7P%2FbQ3N5ZYE7TQsIVLjbfgPZJ06R21LMXgaJRRQDDCXq02M9JFh%2FeiDXO8ge7d1bjHfns6akQdMoWiWLd%2FXQLMnm2ouCOiPD08fnGE6aC2MNi5LEXo0E3ZI%2FzefbsuiQp1vLGCF%2BFVuCJuLdmVXGoc2G%2F3i85z4O5zxO%2BSNbA%2Bdx%2FVhQzGLZKu13Tm50vAhmdpnbq1p3YE6DOaJXQkSF%2B5i94bMMYMC%2F2xXx3C77WnZKbRUlkeZ7UQh6zkpONldjMDUFAwVEKtjw6V6uCPwNfc%2Bh3uvyPDr4hJ2s63o%2B3FIErLc9Fll3kDb6d1pNg%2BMgHxgASI74AUVKT5nanfjBaGQOvjaBkzutfwdAW%2BTmmFo89AigPEc6zfSvFmfPD4pSPIIxaVV%2BllMQZBTN9sbIZ%2BWkzno0DpVBPzWxbdkwN7T0DtMm3nBLZ6Nd4Di930vnyLRN79CxHMIDudTribCrKuqpHDX5uUIAFmPJOrTAfQDUqLb7LDnPxBE4llPPTi2rPYcWUm1%2BFogZKY%2BdojpikD78Fs8GMXK8ZEcGbwYCt2kVPlOJ%2BrF2qZksIJfTWFYY5nhcjpnd44dtuuU095HMw79DYyQY6pgH7IDt5QEG1t2mWTyntQfI0IBK%2BVch8O4Fwz0%2F6QXlDFaCQnpdJmTGnAPYS3t%2FaAQg0BRdGZxut2qQxwrlzhm8SjUIM7O2pWuULZDX0eii3rka4%2B07pSNm1%2FPPHvuQnWpNymY0Lhf3urrGwYLtlr%2BmLXKnUOi0yqA60IAAzbZg%2B8XbQt6VhuZgbzjIwvzUskzyEiqqmdur41LBYqhYMcg0HiW271Yk3&X-Amz-Signature=54d12d38c3fcec93710b248d26d0e577bf51f44fe5144a95aee393bd424befc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
