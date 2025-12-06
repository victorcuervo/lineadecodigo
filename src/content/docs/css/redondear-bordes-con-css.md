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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBJMIERJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbZXurbEcug4t615%2Byopwy3%2BgDOOxOmHm2ZFlMKtUE3wIgNHBQb6yWA37dv8mKOciYzzlpnzACGf7VCaaK2ttZIdkq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDENJbrsvMmw55V0NFSrcA%2FEBkglPjym7x%2BC3HhHLsBMOl%2Fexgw778D%2FcBuac%2B4K4LiBgVw7zWgoESYoafIUTKs1uDsLRUg9l3O6euQwY2vzBjDPDoAtQ5gWTc7iIO2bRA29wNLbkAElhewIQqkRAW7xmRZbvpTsaphMbxxU8KiWH%2FNi%2B8skLTuYAAs0O7ISq1E4BKLtbzEZV3nYWqy54BcxCDznMDudiKKdc2JPeW5D%2FLNeQX3HJ7FZTaDkE%2Bp8m5wYwfyRXKb%2BAOdoZ4GzWhs46WpTtCM0UT3w0hoRJzHN%2FkTicOZrleldyRnm8257YeT8Qb8eLtSmDUYngLSRC04P6yb8nnQkv%2BjRVda%2BfRvGxXM2Ykx6UER2Zeh9hNu9BuKY%2B8LsDXDqSaT%2FECSk2WTTp%2BOcP2FQ6Nkadt8UX4zNVolXUq3mun2VdqA2HqJT%2Ba49Ftp0o9%2B0fXbnH0firDsoreJ2D2cfZLTljfDOQNvahaHZVoja%2BAj03CTTHO7dqVAYo2Hk7x9%2FXQ5LjptKmREr%2F0LgQbQ%2Fc4TI8OXkigBqf2nY5OPIiaCV8VCFe2vLUrXBVglzgbr1rpA2ThxLbPHgDWGNRjt74QjgqANIhEUFT%2BcQAKNyOCdHnphuZXLdVsl53LDoGzPfRnv7tMLenzskGOqUBFLc3Q46Mg2p6oM%2FyVDuDDQJeg7CcC6k7LLf708BMdjW4s29bSjHzQaiBFoKd8YcYPmvFBXMgIGqXafYq4nMVmLnxOENgt%2BxNKd1Lr6lzLIIo0RLuQMa0qCpZsthQgx6QzpJ4ZQ79HvnBoN6P96MziySUIvHh%2F3A1XU9EEg2Fo2cSzoEGE4Zaf9ddtaWi0MA%2BgNKCXZsqpH3vHqTfT2qgJqDrHj8U&X-Amz-Signature=488bb713ae73b3c73e7b66141335bccaeba00f58ac9b9cfe9374bffdb4dc20d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBJMIERJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbZXurbEcug4t615%2Byopwy3%2BgDOOxOmHm2ZFlMKtUE3wIgNHBQb6yWA37dv8mKOciYzzlpnzACGf7VCaaK2ttZIdkq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDENJbrsvMmw55V0NFSrcA%2FEBkglPjym7x%2BC3HhHLsBMOl%2Fexgw778D%2FcBuac%2B4K4LiBgVw7zWgoESYoafIUTKs1uDsLRUg9l3O6euQwY2vzBjDPDoAtQ5gWTc7iIO2bRA29wNLbkAElhewIQqkRAW7xmRZbvpTsaphMbxxU8KiWH%2FNi%2B8skLTuYAAs0O7ISq1E4BKLtbzEZV3nYWqy54BcxCDznMDudiKKdc2JPeW5D%2FLNeQX3HJ7FZTaDkE%2Bp8m5wYwfyRXKb%2BAOdoZ4GzWhs46WpTtCM0UT3w0hoRJzHN%2FkTicOZrleldyRnm8257YeT8Qb8eLtSmDUYngLSRC04P6yb8nnQkv%2BjRVda%2BfRvGxXM2Ykx6UER2Zeh9hNu9BuKY%2B8LsDXDqSaT%2FECSk2WTTp%2BOcP2FQ6Nkadt8UX4zNVolXUq3mun2VdqA2HqJT%2Ba49Ftp0o9%2B0fXbnH0firDsoreJ2D2cfZLTljfDOQNvahaHZVoja%2BAj03CTTHO7dqVAYo2Hk7x9%2FXQ5LjptKmREr%2F0LgQbQ%2Fc4TI8OXkigBqf2nY5OPIiaCV8VCFe2vLUrXBVglzgbr1rpA2ThxLbPHgDWGNRjt74QjgqANIhEUFT%2BcQAKNyOCdHnphuZXLdVsl53LDoGzPfRnv7tMLenzskGOqUBFLc3Q46Mg2p6oM%2FyVDuDDQJeg7CcC6k7LLf708BMdjW4s29bSjHzQaiBFoKd8YcYPmvFBXMgIGqXafYq4nMVmLnxOENgt%2BxNKd1Lr6lzLIIo0RLuQMa0qCpZsthQgx6QzpJ4ZQ79HvnBoN6P96MziySUIvHh%2F3A1XU9EEg2Fo2cSzoEGE4Zaf9ddtaWi0MA%2BgNKCXZsqpH3vHqTfT2qgJqDrHj8U&X-Amz-Signature=e06bafdcf33266060811f6a81ed66231e2a8fa9ea31997dc4f2c948595ed36a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
