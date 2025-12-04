---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLAUPZAO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC9bTfxpY792y%2FQiPKSkk%2Bc5tLoAigtYtknQ2LVGcmabgIhAMBQ03581ZfesnpjJlpMnGW2TI7v48Z7DM%2FnCkpK0CkvKv8DCEUQABoMNjM3NDIzMTgzODA1IgywpLvV3quM95D%2Bbgcq3ANm%2B3I1LCvck63g8cNwGs0nJfx76ylsHH0pgSOJkzReXuSJIdif4nhCmFo8WbjCBFeD%2BR6sy2aOMcfsw%2FI17G%2FPbJA795vcsUon73b4EDDoW132PcW6UwIO98SWoPZa4uqLj7iKrn6A6FzYAoBfAgvzSafx8zgABi%2BvYp%2B%2BxNUQrW61a0CkgW3YGqaOLfSA1x0MXgY14ujgFVkCSikbJiTwssLYuDNUaT%2FjE%2FEpI6A2c4nuSwEwTg4CPoa0RjVLQ131zigm5Me15oBBJP%2FHdcZK32dmhcec4JZyQoDc%2F%2FuX1hr3qjzOiK0Fwx4thq3R4ogjlX0xByF9Qzz4dTbYq%2BpTOv5Tln0yJgWYjRg4lXf3YX3rgx9JVf%2FTkK7DnT7tS6UiL1xFGeNx4s16Y2IT8PbHSgUsLWtxMSPutibVFnCzsn2KuALomRxqZrvM172fa9Yf6Oq2srBUqh2XB39AifNFbeFSymBhG2sz3VNDauc4Tf9xd1viOOvHrcG15bcxEY5c84rW225QdO33%2FBvHs4orK8yLiQMPVSZM54wUphK3je19aho7g4EB58wPz7BqudRhu6ZuJFPf8Mv2JrShLMtXGIokD2k0fOg%2B5HsNsaV92GWiSoYPanpOicdmjjCw58XJBjqkAWtb2wNJdL1Qn4UifVG4fL5P09ZipPxpgwf8RoyZkQcDOGrk5p3%2F9vsGAPxkJBgOy9zdDdBhW%2F89xo%2BKOq8ccBMs8jNG1tYVjpwlVU%2BZnGaG0hAIklM88vGicm9By01AskIvVkr1JcRd63svLDFIa3I%2F5b7%2FhDx%2F1MS9Z%2BpMAcU2r%2BTWhgE6ZNOZG7k50NRgccHLr8NY%2FWfPHxWpFNFLjoBTJd2X&X-Amz-Signature=5070f3cbbe28b0ea18876874e4565fa5589ace1a6508afa3dd7983470f256211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLAUPZAO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC9bTfxpY792y%2FQiPKSkk%2Bc5tLoAigtYtknQ2LVGcmabgIhAMBQ03581ZfesnpjJlpMnGW2TI7v48Z7DM%2FnCkpK0CkvKv8DCEUQABoMNjM3NDIzMTgzODA1IgywpLvV3quM95D%2Bbgcq3ANm%2B3I1LCvck63g8cNwGs0nJfx76ylsHH0pgSOJkzReXuSJIdif4nhCmFo8WbjCBFeD%2BR6sy2aOMcfsw%2FI17G%2FPbJA795vcsUon73b4EDDoW132PcW6UwIO98SWoPZa4uqLj7iKrn6A6FzYAoBfAgvzSafx8zgABi%2BvYp%2B%2BxNUQrW61a0CkgW3YGqaOLfSA1x0MXgY14ujgFVkCSikbJiTwssLYuDNUaT%2FjE%2FEpI6A2c4nuSwEwTg4CPoa0RjVLQ131zigm5Me15oBBJP%2FHdcZK32dmhcec4JZyQoDc%2F%2FuX1hr3qjzOiK0Fwx4thq3R4ogjlX0xByF9Qzz4dTbYq%2BpTOv5Tln0yJgWYjRg4lXf3YX3rgx9JVf%2FTkK7DnT7tS6UiL1xFGeNx4s16Y2IT8PbHSgUsLWtxMSPutibVFnCzsn2KuALomRxqZrvM172fa9Yf6Oq2srBUqh2XB39AifNFbeFSymBhG2sz3VNDauc4Tf9xd1viOOvHrcG15bcxEY5c84rW225QdO33%2FBvHs4orK8yLiQMPVSZM54wUphK3je19aho7g4EB58wPz7BqudRhu6ZuJFPf8Mv2JrShLMtXGIokD2k0fOg%2B5HsNsaV92GWiSoYPanpOicdmjjCw58XJBjqkAWtb2wNJdL1Qn4UifVG4fL5P09ZipPxpgwf8RoyZkQcDOGrk5p3%2F9vsGAPxkJBgOy9zdDdBhW%2F89xo%2BKOq8ccBMs8jNG1tYVjpwlVU%2BZnGaG0hAIklM88vGicm9By01AskIvVkr1JcRd63svLDFIa3I%2F5b7%2FhDx%2F1MS9Z%2BpMAcU2r%2BTWhgE6ZNOZG7k50NRgccHLr8NY%2FWfPHxWpFNFLjoBTJd2X&X-Amz-Signature=2fb27a8b1a9bb6484f6ffeccf49c1a914f5f677f5e777d65fae0121fd2a13685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
