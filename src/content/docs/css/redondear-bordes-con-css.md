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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZNDLDBJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFpym4efBrtyTvkd6%2FL1yZapmo1mgRi0dwsU%2BJ%2BUMRhgAiBBeFy%2BCYHXnmyUMJ8E%2Bzw97Rcn41DCiVDaqP73JBLOeyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMLDCa%2BQB31p1wD%2B56KtwDpfhcs1XhNQoRchNl0eLswXnRImiHq1XvD4l7XE936zMKeMOa%2B2F2ijD6dl8pEo783zBoSzpPDi6nzq%2Fi%2B8C%2B1iVsoWj5AjZY60%2FmeELTH8BCAs6Z3huj0gClu7xCSBlkTSuTYUn6%2FQGFEs8bo3lp4cePj0QZBHFewdUPPP1lc7VTbF%2BujwcLfVdfKMCwnrSQ0c8lGRBX3ZAS3NjycWeK%2BQEvxMns3c2NA7eDfLJKr0fwbPo4MELdpVKsOZkAml2Me4S2sxCrGITwjDabFgMRYTXz%2FchdKqnIoE8w7TtVaxaKXSpvnJ%2FcxUKZlFYAy9BHRlFGgoq6nfvAVdM7E35lp0k5B6X274V1CekNGLpivwl%2Fhsmp0ErDx9mJ0euxSb%2BXLtNVy1WaSUkBouqy0GEYoRlwo2Vhd0cwoQ%2BJ3xly1G9S459tfFIu36LA9UsCOtfcA%2FS1lgw6o6x%2FURYxW5TBT%2FmHB9oXEiD%2Fk8L2wUul6R1XYhTfuEI6fJVkN8kQIhyX57k70q2k%2F9214%2BUpDczmgdaHnvq3HlORqVIeSSQn%2BXVnI6kI3B9XmXmgJM%2Bf0X%2FwGokSNOwoCFWKmDGCW8clcJTWUfl%2B%2BLx1s%2ByE8BRoansLuxeZPJOM%2FWB%2BSKswvvjCyQY6pgGnUQqLEShrRs9j9G0WpIun2f9g%2FNnAU0W8SvbKQHpV%2FY0g%2FktNBY1dRmKA0i0GoYSj5IsP3Ne9E7p5EVHxzbHthlUFVoDuE21HTT2vnTrMcVueT6gSo4rTmv1pFltYtjoiMhV94pyHWg4isAETvayZ5UZwLlPcrjGP4B7lRLjXEOYguFC%2Be3ug8XOAF4AfsboH4b1ecL4sGv7bTM3%2BXcKJGZaulgsb&X-Amz-Signature=c9825172e041f30a8abddce3e89895e859c25c46270f5c8550cf08b34a3635fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZNDLDBJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFpym4efBrtyTvkd6%2FL1yZapmo1mgRi0dwsU%2BJ%2BUMRhgAiBBeFy%2BCYHXnmyUMJ8E%2Bzw97Rcn41DCiVDaqP73JBLOeyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMLDCa%2BQB31p1wD%2B56KtwDpfhcs1XhNQoRchNl0eLswXnRImiHq1XvD4l7XE936zMKeMOa%2B2F2ijD6dl8pEo783zBoSzpPDi6nzq%2Fi%2B8C%2B1iVsoWj5AjZY60%2FmeELTH8BCAs6Z3huj0gClu7xCSBlkTSuTYUn6%2FQGFEs8bo3lp4cePj0QZBHFewdUPPP1lc7VTbF%2BujwcLfVdfKMCwnrSQ0c8lGRBX3ZAS3NjycWeK%2BQEvxMns3c2NA7eDfLJKr0fwbPo4MELdpVKsOZkAml2Me4S2sxCrGITwjDabFgMRYTXz%2FchdKqnIoE8w7TtVaxaKXSpvnJ%2FcxUKZlFYAy9BHRlFGgoq6nfvAVdM7E35lp0k5B6X274V1CekNGLpivwl%2Fhsmp0ErDx9mJ0euxSb%2BXLtNVy1WaSUkBouqy0GEYoRlwo2Vhd0cwoQ%2BJ3xly1G9S459tfFIu36LA9UsCOtfcA%2FS1lgw6o6x%2FURYxW5TBT%2FmHB9oXEiD%2Fk8L2wUul6R1XYhTfuEI6fJVkN8kQIhyX57k70q2k%2F9214%2BUpDczmgdaHnvq3HlORqVIeSSQn%2BXVnI6kI3B9XmXmgJM%2Bf0X%2FwGokSNOwoCFWKmDGCW8clcJTWUfl%2B%2BLx1s%2ByE8BRoansLuxeZPJOM%2FWB%2BSKswvvjCyQY6pgGnUQqLEShrRs9j9G0WpIun2f9g%2FNnAU0W8SvbKQHpV%2FY0g%2FktNBY1dRmKA0i0GoYSj5IsP3Ne9E7p5EVHxzbHthlUFVoDuE21HTT2vnTrMcVueT6gSo4rTmv1pFltYtjoiMhV94pyHWg4isAETvayZ5UZwLlPcrjGP4B7lRLjXEOYguFC%2Be3ug8XOAF4AfsboH4b1ecL4sGv7bTM3%2BXcKJGZaulgsb&X-Amz-Signature=6f1521dd0d375652cc82dbdaf76ae0d87f36488aabb7f0a43a5fe392229c3f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
