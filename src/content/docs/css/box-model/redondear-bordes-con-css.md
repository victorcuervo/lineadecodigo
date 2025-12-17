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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLP4SCB7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOGKOTICIAIBIiyNin5sdwe3UpDAXYHyMo4JFj1SbK4gIhALrn6sMpX1PSeKVQq8wipizg7FY7RKkiyluytW76gAJdKv8DCHcQABoMNjM3NDIzMTgzODA1Igx%2Bvy1mTtGYFjqoauIq3AN6bQBshRDr%2FFv0NB0KuMeJLutX37H2FGJavxeCS%2FqMwuGHT%2BYlzK50Dn9p9NGYRk4bXVDiIEVSk%2FBRFxSlpwV4D03ZRGzigbumK8ANjjXGfgB%2FXCHCzcvlPzr6S83enUk5tiANsZ3UuEHwQF20l9O6eaV%2FXBB6EFar7hbApPVCdht%2F55CYRtHCbxDEcrSTwmmwsC1ymR9koI9ObVFExt0eYV%2BTB0OZr6g0xVhTXJwAhCQOzzHUuqoAxjUulCYbSwcCIZ2kPdzaS8OHs1X2rccRzanlG9Mgd70HrH18Ho53LQrjPaS22NX4cxq%2F4aUdLMmK1nto7y1OGvNJP3vg3kaOBNC4gtEs1WNw8pq31MMWqfmkTvM205k70Bu3uIGtRzXFSJBaO9szzfJvsr1jJ5V8JnJbFxTXJqKopcuqATccUl9K5UtU5D%2Bl%2BT9T4qLv%2BsN6JcLR%2F1UtT%2FO1bgR8alggNjnAiPVr4NK%2Fjt9cxJGVKuO5DVO0i%2FBXim0BBeXZbWVsoLHqh50PEcFxVetLkR5B5OJe56sMwhyjfue7KlgMiArv0%2F64jGrf1hOHr48dVssA80OgZooDjoaKtF4WDXDt8T%2B2sf7BzrYahkgTrfmZUU%2F13flNgKkoVPPd%2FDDcg4nKBjqkAS1MHtvkDa6RX%2F%2Bbr4BJtmtyUkuM3d8KG%2Fze45p%2FNVBz%2FSVkCvfTGKcCEUD3yBq25JSerrpBrTIHS59Guvsjx4ZJf9YZUI%2B8hc%2BPhS269OgUjreWRraaoCD6yPGuPVk5JzHArlaX2kz%2FHWFn4qR3MiFg17rXSBqMVOvhhSxvCkzuLE%2BgsgBpTlR5C0MEzKrjuvXTxw3dCiD%2BmtGVg4jqFcvg9wyz&X-Amz-Signature=07ff86ceebd614885cdc39db0000a607c99ffbbe77e8da0806bd78059a074fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLP4SCB7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOGKOTICIAIBIiyNin5sdwe3UpDAXYHyMo4JFj1SbK4gIhALrn6sMpX1PSeKVQq8wipizg7FY7RKkiyluytW76gAJdKv8DCHcQABoMNjM3NDIzMTgzODA1Igx%2Bvy1mTtGYFjqoauIq3AN6bQBshRDr%2FFv0NB0KuMeJLutX37H2FGJavxeCS%2FqMwuGHT%2BYlzK50Dn9p9NGYRk4bXVDiIEVSk%2FBRFxSlpwV4D03ZRGzigbumK8ANjjXGfgB%2FXCHCzcvlPzr6S83enUk5tiANsZ3UuEHwQF20l9O6eaV%2FXBB6EFar7hbApPVCdht%2F55CYRtHCbxDEcrSTwmmwsC1ymR9koI9ObVFExt0eYV%2BTB0OZr6g0xVhTXJwAhCQOzzHUuqoAxjUulCYbSwcCIZ2kPdzaS8OHs1X2rccRzanlG9Mgd70HrH18Ho53LQrjPaS22NX4cxq%2F4aUdLMmK1nto7y1OGvNJP3vg3kaOBNC4gtEs1WNw8pq31MMWqfmkTvM205k70Bu3uIGtRzXFSJBaO9szzfJvsr1jJ5V8JnJbFxTXJqKopcuqATccUl9K5UtU5D%2Bl%2BT9T4qLv%2BsN6JcLR%2F1UtT%2FO1bgR8alggNjnAiPVr4NK%2Fjt9cxJGVKuO5DVO0i%2FBXim0BBeXZbWVsoLHqh50PEcFxVetLkR5B5OJe56sMwhyjfue7KlgMiArv0%2F64jGrf1hOHr48dVssA80OgZooDjoaKtF4WDXDt8T%2B2sf7BzrYahkgTrfmZUU%2F13flNgKkoVPPd%2FDDcg4nKBjqkAS1MHtvkDa6RX%2F%2Bbr4BJtmtyUkuM3d8KG%2Fze45p%2FNVBz%2FSVkCvfTGKcCEUD3yBq25JSerrpBrTIHS59Guvsjx4ZJf9YZUI%2B8hc%2BPhS269OgUjreWRraaoCD6yPGuPVk5JzHArlaX2kz%2FHWFn4qR3MiFg17rXSBqMVOvhhSxvCkzuLE%2BgsgBpTlR5C0MEzKrjuvXTxw3dCiD%2BmtGVg4jqFcvg9wyz&X-Amz-Signature=950cd5b86c08ea707121c7f8e629ebb53a3dec1e2bf7030861fdcbc6d20adc1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
