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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MNFTAHE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjJID6%2BgqyIe2A2snX8W6lTT2HRZHtdGkbVaiZtrLnTgIhAMoj9lG5DseP6MmeVhayDSJhoOVSrekxv%2BLz6bK98wlQKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK7eKqObsYhar8kSUq3AOhse3cmrqy2rj7mCnR8ve27N8iwrIZ91Q%2Fz6gIXCP4dsWpHgJocEKBarQmh4bE31lvoQb91UeQF27kVTkKcrO8WYz1Zum5WwQmJiPWvBAOT%2BY9zah%2BnsB0oHyjzwtoI%2FcmHoSC%2F6LosD%2FZlwdd9spOFTlFcx89P%2BHpH5Jy0ruHv3z4HTKXqGv%2FOn4PBJ1D%2FDxBXMZTEPEwfCNS4KnonqMprudbjucpOYpQcCjJnGMXcHTx%2B5pkMQd74hCCuFCwT%2BKMrwxR5gbiA8325mwuShoI9sVQzTaGbyxmwXjt62qTAAX30shK%2B5mVpOzgdp6ipr5lTBLbn9omLikjFdTcyCe2jrugEtmOoYq6DLGGB3AhW7cF9IYyRlJT3aXrkwnnPrYqrgbLSwRzuPjHRbBccBHlxlutaGQQflGjm6t8C0papNMsy9SzRRVhKUnwTvxQIDZLCd0E0z6N3k5musemZOrP9pwdMNOtIf3n643arR%2FW%2FijTJrTQhjvHXJpy14BDyo7opsCoiEEcb452dTKEednJSEdn5Vu1w1LR%2BWfUrJfMpNFuKZWXYho%2BzBhZVQDzQj1qPsd9%2BvsqgYhGwGtOI3HcvoRHEF0n0n4C1ghUksQi9JW1IpCCf5PQjh70hzCmh9zJBjqkAZHlNlKodja9Yug0Y9J78qzJPMnvmt0DzW04J2uF0PBAJ5bSWKAzIN6LGWFf1qXlLDaTZMeWvSvo%2B4n9GE%2BlOQ7hvbPeXPfCy%2BAuRhMh25r3nYMd5kSGfc7jGIR5pFCgexxDHdfPQWOiTaLrqu1dhY8kYCuyoT4RuFNP3KMHeAOj67Q8plKkHAV1Q6cXtkDQAtt50FEnRwSDZzd9hj0dLOix8hhJ&X-Amz-Signature=0660233205c50cb9970950e202eb915a70a1cd5fd2833546879119dd4f359708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MNFTAHE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjJID6%2BgqyIe2A2snX8W6lTT2HRZHtdGkbVaiZtrLnTgIhAMoj9lG5DseP6MmeVhayDSJhoOVSrekxv%2BLz6bK98wlQKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK7eKqObsYhar8kSUq3AOhse3cmrqy2rj7mCnR8ve27N8iwrIZ91Q%2Fz6gIXCP4dsWpHgJocEKBarQmh4bE31lvoQb91UeQF27kVTkKcrO8WYz1Zum5WwQmJiPWvBAOT%2BY9zah%2BnsB0oHyjzwtoI%2FcmHoSC%2F6LosD%2FZlwdd9spOFTlFcx89P%2BHpH5Jy0ruHv3z4HTKXqGv%2FOn4PBJ1D%2FDxBXMZTEPEwfCNS4KnonqMprudbjucpOYpQcCjJnGMXcHTx%2B5pkMQd74hCCuFCwT%2BKMrwxR5gbiA8325mwuShoI9sVQzTaGbyxmwXjt62qTAAX30shK%2B5mVpOzgdp6ipr5lTBLbn9omLikjFdTcyCe2jrugEtmOoYq6DLGGB3AhW7cF9IYyRlJT3aXrkwnnPrYqrgbLSwRzuPjHRbBccBHlxlutaGQQflGjm6t8C0papNMsy9SzRRVhKUnwTvxQIDZLCd0E0z6N3k5musemZOrP9pwdMNOtIf3n643arR%2FW%2FijTJrTQhjvHXJpy14BDyo7opsCoiEEcb452dTKEednJSEdn5Vu1w1LR%2BWfUrJfMpNFuKZWXYho%2BzBhZVQDzQj1qPsd9%2BvsqgYhGwGtOI3HcvoRHEF0n0n4C1ghUksQi9JW1IpCCf5PQjh70hzCmh9zJBjqkAZHlNlKodja9Yug0Y9J78qzJPMnvmt0DzW04J2uF0PBAJ5bSWKAzIN6LGWFf1qXlLDaTZMeWvSvo%2B4n9GE%2BlOQ7hvbPeXPfCy%2BAuRhMh25r3nYMd5kSGfc7jGIR5pFCgexxDHdfPQWOiTaLrqu1dhY8kYCuyoT4RuFNP3KMHeAOj67Q8plKkHAV1Q6cXtkDQAtt50FEnRwSDZzd9hj0dLOix8hhJ&X-Amz-Signature=559c54aa72ff24e5f25cef055cc511d3f79671cc9cfdbb64b52944af3d36ff18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
