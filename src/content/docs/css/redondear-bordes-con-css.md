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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF6LTHE5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHctFSMRzfygaAjCqeBx9qAywXLkxa508IgHEJ8zUPvnAiEA03YAfubXHoBjPBoD2Pi3sxaASSsY9nqxWO3BQCzaNkwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLqWj9If%2BywZXyM%2FwyrcA%2BnvgRlp4ieyiaTOzr2CUvYjP2US4v52muyYJSTqQ%2BhsEbbiDGu5x3mZj9DX6TPBtjLyhYX9040rlhIWtMmHve49aFmtEWNKOjZXtXydh6GPi9jtQWICJHNSK2UhHx7QS55UvhXY32nmtotnJNPqJxeyUwX1WmRAdvRujq9toesEFFVkVEVG%2BlWZIj19UBowCWsBZ4zi86x1X4tiY5f%2FJMi3K19XlAoOJAiF87hRmAjGeAKq7Sa4YP7mqetJCMEl5Xf7ST8Po60CF%2FsOQCAU1fNo398XE637yUZWKptkzf2lzP61sYwgzWYTJpTudOpY0zADxkYDfnQLxr7U4Esvt0AFrPdPaW7ist7KBPAvhOgt%2BMYexnqe6Ij6je96pO9yYyFG3SDoYzcC2ivPoeBTTCO5nJSAq2fMN2W%2FQoQdhVFB4cBvmTvzkhEmWntn9ZuD8VfQWuMcLO9Sm0WOxnkQaoo01vy1c5hrAuDfAVdC%2BgrnRqI32fl6h%2BRPC81rnsYFMOTg2iSwLVE7mWhQIkLbbaJmbCrKK2XV2t%2BlEP6yyWh1EsAtqQBmnpRJzoMJp4Hx4zaAP9kTxLvfzIZ4%2FwNXXq4dHDWoSUhYb0Da2%2FgV0jhRQb%2BDNTyt0llMM06%2BMOjdzskGOqUBqlg4Vm5p%2BDTU8zkAmubhq9F6jgjZYQF60sDDZTbL83mF%2F%2FXHOwypxsZz5CtOvdovvSuvlA877oJV%2BjRUFAUFDCUZYsbDUa1wishu%2BHsKsysym4A61fEoISkcOGafkU0GGbMqm2je3XGMfeuaiqaJPQRir%2FCggJCvBRdfOlH1XVp6Tu8mOdFT3jYwG%2BGGlLvf0QnjH1O1TJo6BiG0JcuC5M5O3HOg&X-Amz-Signature=a17740bfe5666ba8b272c1a052618d83826f547e1b1667d84ca09047bfd98b8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF6LTHE5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHctFSMRzfygaAjCqeBx9qAywXLkxa508IgHEJ8zUPvnAiEA03YAfubXHoBjPBoD2Pi3sxaASSsY9nqxWO3BQCzaNkwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLqWj9If%2BywZXyM%2FwyrcA%2BnvgRlp4ieyiaTOzr2CUvYjP2US4v52muyYJSTqQ%2BhsEbbiDGu5x3mZj9DX6TPBtjLyhYX9040rlhIWtMmHve49aFmtEWNKOjZXtXydh6GPi9jtQWICJHNSK2UhHx7QS55UvhXY32nmtotnJNPqJxeyUwX1WmRAdvRujq9toesEFFVkVEVG%2BlWZIj19UBowCWsBZ4zi86x1X4tiY5f%2FJMi3K19XlAoOJAiF87hRmAjGeAKq7Sa4YP7mqetJCMEl5Xf7ST8Po60CF%2FsOQCAU1fNo398XE637yUZWKptkzf2lzP61sYwgzWYTJpTudOpY0zADxkYDfnQLxr7U4Esvt0AFrPdPaW7ist7KBPAvhOgt%2BMYexnqe6Ij6je96pO9yYyFG3SDoYzcC2ivPoeBTTCO5nJSAq2fMN2W%2FQoQdhVFB4cBvmTvzkhEmWntn9ZuD8VfQWuMcLO9Sm0WOxnkQaoo01vy1c5hrAuDfAVdC%2BgrnRqI32fl6h%2BRPC81rnsYFMOTg2iSwLVE7mWhQIkLbbaJmbCrKK2XV2t%2BlEP6yyWh1EsAtqQBmnpRJzoMJp4Hx4zaAP9kTxLvfzIZ4%2FwNXXq4dHDWoSUhYb0Da2%2FgV0jhRQb%2BDNTyt0llMM06%2BMOjdzskGOqUBqlg4Vm5p%2BDTU8zkAmubhq9F6jgjZYQF60sDDZTbL83mF%2F%2FXHOwypxsZz5CtOvdovvSuvlA877oJV%2BjRUFAUFDCUZYsbDUa1wishu%2BHsKsysym4A61fEoISkcOGafkU0GGbMqm2je3XGMfeuaiqaJPQRir%2FCggJCvBRdfOlH1XVp6Tu8mOdFT3jYwG%2BGGlLvf0QnjH1O1TJo6BiG0JcuC5M5O3HOg&X-Amz-Signature=5db5f8b3af1525938f4afd536612b0dcf8f6603bb58e1f65156d861811ed0c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
