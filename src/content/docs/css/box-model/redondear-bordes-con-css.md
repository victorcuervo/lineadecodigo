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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBSNFYN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz4ImrVjjtENXqQOSDVKNlH5Lglb9F7gvWJ5hHLrIZBwIgAaZvSiT2TJEbtj6jKH9ADxG1OISQIi2%2B77dZVNfTy4cqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbgCig%2BnSA6UnjQgCrcAzR0Y9iFmc%2BJTsHEkqrwjB7JrgnIGCCxaXU3WjI0g9YkVpYnrfkh6A1%2FbGwtfVEaU1FR1LW0Pqzy%2BmvjBRqwgRYFOGArzsoNt19IE6dtiaZeBLDd7Jk4Wx5TBsvO%2BqpQKJZsaN6e17XAgIMMW%2FTnZGeSl6XHeAVvl%2FD2bX1qbQHvzPsACVj4rHr%2FfLofF88S78HXj1ywx8ThGtBL%2BOToM99BM04unXkRukL4gAnr1omsY1IR2YreB37UeQmg5MxT2%2Fs%2Fmn3djkIVH%2BFrJj%2B7ya%2FlqWW1HLMVcvcD9%2FK0s15q%2BGmmnNnDM3hhvIOVOK4GPAnveO%2Fqt2FdssANOrulGe96NK9nYZexkhYgFsdyCry4ar%2B%2BTxdWDs41BPNrxgED6q67Faxqx10wx09Aatfzsa5BMKUyjPsO3LCHCxiOaAC8%2BfL9jd4wTjxjf1jWtBWo0HCPRwGgILS8%2FMEu7xpymKCnOIuTagcGuJ3Fv%2BMY1tS9UBDbRh2k6CcMh%2BZEslJckyMcInkhw01LM7B8%2BrCMgSv8Lh7J55KmlNm%2BpC8ExaJVNKiPrGZYXQQG4j%2BJpypQUDK1VrUk6gMNZCUQhRGyd9FI81VvpWeHKlh9%2FIotsOkQV0reGU2w0W9QB2F1MPitjMoGOqUBifdVSAsY7%2Fh6NtCQy92F%2B78To8%2FIOFNyZ3YsLRhDJtO%2FXbnrNh4n95c%2FsI84nrB1QvaxwfQeopQANOz83578tg2gJIlJuED6whG8lx9Mniw6Wf%2BYviRKWzx3N04hkv1F%2FN6gkVWC2m946tV1GeHfwhPmva80aRpNFiVohyQnQYnqCYMj17kivj4pm9I7A6B40kXA4MGfnq%2BXuMjlrjR%2BDfv4cd%2FS&X-Amz-Signature=31f01eebfaa37a4ab80d3f066300b392ff307bea7d9c041cf78c64067324e86f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBSNFYN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz4ImrVjjtENXqQOSDVKNlH5Lglb9F7gvWJ5hHLrIZBwIgAaZvSiT2TJEbtj6jKH9ADxG1OISQIi2%2B77dZVNfTy4cqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbgCig%2BnSA6UnjQgCrcAzR0Y9iFmc%2BJTsHEkqrwjB7JrgnIGCCxaXU3WjI0g9YkVpYnrfkh6A1%2FbGwtfVEaU1FR1LW0Pqzy%2BmvjBRqwgRYFOGArzsoNt19IE6dtiaZeBLDd7Jk4Wx5TBsvO%2BqpQKJZsaN6e17XAgIMMW%2FTnZGeSl6XHeAVvl%2FD2bX1qbQHvzPsACVj4rHr%2FfLofF88S78HXj1ywx8ThGtBL%2BOToM99BM04unXkRukL4gAnr1omsY1IR2YreB37UeQmg5MxT2%2Fs%2Fmn3djkIVH%2BFrJj%2B7ya%2FlqWW1HLMVcvcD9%2FK0s15q%2BGmmnNnDM3hhvIOVOK4GPAnveO%2Fqt2FdssANOrulGe96NK9nYZexkhYgFsdyCry4ar%2B%2BTxdWDs41BPNrxgED6q67Faxqx10wx09Aatfzsa5BMKUyjPsO3LCHCxiOaAC8%2BfL9jd4wTjxjf1jWtBWo0HCPRwGgILS8%2FMEu7xpymKCnOIuTagcGuJ3Fv%2BMY1tS9UBDbRh2k6CcMh%2BZEslJckyMcInkhw01LM7B8%2BrCMgSv8Lh7J55KmlNm%2BpC8ExaJVNKiPrGZYXQQG4j%2BJpypQUDK1VrUk6gMNZCUQhRGyd9FI81VvpWeHKlh9%2FIotsOkQV0reGU2w0W9QB2F1MPitjMoGOqUBifdVSAsY7%2Fh6NtCQy92F%2B78To8%2FIOFNyZ3YsLRhDJtO%2FXbnrNh4n95c%2FsI84nrB1QvaxwfQeopQANOz83578tg2gJIlJuED6whG8lx9Mniw6Wf%2BYviRKWzx3N04hkv1F%2FN6gkVWC2m946tV1GeHfwhPmva80aRpNFiVohyQnQYnqCYMj17kivj4pm9I7A6B40kXA4MGfnq%2BXuMjlrjR%2BDfv4cd%2FS&X-Amz-Signature=f2007589beb8fec59cfcfcccbe02a726f117acc95448081b5682d659e4061372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
