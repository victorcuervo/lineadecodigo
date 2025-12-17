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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOLWUP7B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAetZgvQapvbuNeBbUAYfh0t2y4cBaVw%2BYJy5WTGMQ92AiARNAww7dCzCZEohbz64NCfxVAFx1HxW0mjfyPRLkjRxCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp%2F038R5H5iAuCPuOKtwDlRtsC5UvvFbRgsQJFilpRxY%2BIrubFPrg8IM89HsACdDIrHghxrooS4JK1elzexmGUS01fozU2HCg2BTxQkoUzrJH2XiTZTVUt7thMRcLQGN97K93ScxBXkfDY7rfiiDVWWyOtVtOnxqvcyj1APXU%2BnFxAF7Q56XoXj%2BnijatnGixGIaBp9BQk2Qcbx6xx06sgnQUbrd%2BoL0X75IkMHXHlEGsff8NolQ1jLapQHNBqhSEv0LsSuma%2ByMQ8MCb1HJTheF01pOgH7f3YqRjKmjN7CL%2FiqL1xShrPKdzf3J62sQArpI1XmcXZugNeTtZJpi8pqsXtdBbeTcdB9r2tGGMlX1U2267SbtV%2BJvQzd2bM36oIoLuouo7MkofyfTXvkxcnP4dCBzvHlj1BIAvHQtqQwT4%2FpzrrbVHyx1%2BTr%2B7CcZnBUI%2FyLM5SKfon0knWBfhydleei%2F5M5%2FyC%2B5QORln5Gk1R4Uhwy%2F7K6oxJxC4noCYXz786mBhsWqAknHOjLV%2BTwOTs7vVJBFFsBNSjYIqimnBmxPKUQPZLloY79OC7pSx9TkR6BRIeJnrloHpIvYY%2B%2BDPegOWd4mD5mHIJ8LSbbo8f0U9kIqVkOq7aDgdCo581sOpNcynNu%2BseRww0a2MygY6pgGJM1u9y7QWoRhMQ%2B%2F9AnOVglUzuLTD%2FOXdiR%2BMCrIprjHm3f9dMEBUTvpHvS3tDOhD1mqVcftpFxKIvVJiQrO0NAzv5C2AS30cC5AQto2C6ODKu4MEHujpz6LFmp%2BZYcRVuIrjtrx48ICZm00I9PgoTa6NPcPoFK7rwdtIRII1m1r4v8F7BBlNWfEWubrzhLxAJuVlefXDskcjrfDpdbVCPyzeREyS&X-Amz-Signature=eebfe381d6cad795e9a9a3b63dd97abf5b998dcd1ee60566ec32604347dae69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOLWUP7B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAetZgvQapvbuNeBbUAYfh0t2y4cBaVw%2BYJy5WTGMQ92AiARNAww7dCzCZEohbz64NCfxVAFx1HxW0mjfyPRLkjRxCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp%2F038R5H5iAuCPuOKtwDlRtsC5UvvFbRgsQJFilpRxY%2BIrubFPrg8IM89HsACdDIrHghxrooS4JK1elzexmGUS01fozU2HCg2BTxQkoUzrJH2XiTZTVUt7thMRcLQGN97K93ScxBXkfDY7rfiiDVWWyOtVtOnxqvcyj1APXU%2BnFxAF7Q56XoXj%2BnijatnGixGIaBp9BQk2Qcbx6xx06sgnQUbrd%2BoL0X75IkMHXHlEGsff8NolQ1jLapQHNBqhSEv0LsSuma%2ByMQ8MCb1HJTheF01pOgH7f3YqRjKmjN7CL%2FiqL1xShrPKdzf3J62sQArpI1XmcXZugNeTtZJpi8pqsXtdBbeTcdB9r2tGGMlX1U2267SbtV%2BJvQzd2bM36oIoLuouo7MkofyfTXvkxcnP4dCBzvHlj1BIAvHQtqQwT4%2FpzrrbVHyx1%2BTr%2B7CcZnBUI%2FyLM5SKfon0knWBfhydleei%2F5M5%2FyC%2B5QORln5Gk1R4Uhwy%2F7K6oxJxC4noCYXz786mBhsWqAknHOjLV%2BTwOTs7vVJBFFsBNSjYIqimnBmxPKUQPZLloY79OC7pSx9TkR6BRIeJnrloHpIvYY%2B%2BDPegOWd4mD5mHIJ8LSbbo8f0U9kIqVkOq7aDgdCo581sOpNcynNu%2BseRww0a2MygY6pgGJM1u9y7QWoRhMQ%2B%2F9AnOVglUzuLTD%2FOXdiR%2BMCrIprjHm3f9dMEBUTvpHvS3tDOhD1mqVcftpFxKIvVJiQrO0NAzv5C2AS30cC5AQto2C6ODKu4MEHujpz6LFmp%2BZYcRVuIrjtrx48ICZm00I9PgoTa6NPcPoFK7rwdtIRII1m1r4v8F7BBlNWfEWubrzhLxAJuVlefXDskcjrfDpdbVCPyzeREyS&X-Amz-Signature=9f8c7ad86e5cf8f9ed1d2b9773451dfc268e418c91c4cbe0b30d19426dc89b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
