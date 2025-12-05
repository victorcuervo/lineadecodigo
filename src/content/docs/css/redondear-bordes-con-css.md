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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QI3WIT7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKUIWUZs4pZHbxNbnXa1vBrhm9gn4fdYjUIA08LrTdDAiB1zlRAm%2FFadHt%2F5Fdb9nbRCH66Cvfg34J2ajN9GR%2F0FCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM9WA2Q176MwxrH7j8KtwD%2Bg%2BUt7s3CbI7D%2BHwH%2F1wCO0RGGqYEJQxuXskr1jDuuMudlKktO75jUIHtGU7YJBgWERp4rP%2BqhUWIo4Fb78DKnvDzip7dQZfESeE0rzTIDoFgrVNmw99cw1y%2ByNX3oWe3eDDUbFWM4y%2BIv%2FO%2BTz4iKMO03qVRM6GsQfZucTSGuqOPxGPunidTI%2FgcWgFVA9YI2XlVQpGpCM4MeOMZPE%2FschH1TidGWdnXGS8y28K6w3IIjWA7Y9EPrP3lE%2F1yDFqFDGkiW%2FaD2WMg22ewtjIerTjzuySJlAobgEQoULEDSc5z6QAIdzT1XKG81WVdM8qwmd%2FhzW1VICnszafjYebyKXLT6%2BhFMvXId%2ByDWNlbWnChdI9x4PG1wiZY47p5FnXprRDPMmfBrsXiYb%2BrbFp93PlXAgzGlDUUlh0YRAfyM6SM4AxrIaJQgjgbYnmOxC30kfbnhScm%2FxL0QVcd1FA4TsAr3YJpG2l7VPdK1sUbgeaiT%2BEuNAh9PbGsgkc%2FfJbTXfDmqifB8aw4oL4EbNbI7A9Sr92qsRWy5DzbaEqUjhTBmGx1eVe%2FnI0xsrm%2BOP%2BabJc%2F2j8B8SBUJPLYQjFArO6g0tkLLzBUKvx2lK6SN0yanhhC1vSdCyTWsUwqZTNyQY6pgGo6WsLykr%2FKsXwmsCrJkIYrYO2PcgoPP6lDVUBwWgsP1MESnYOrmehxga7v7NHYziKIBPTi9W8f6or0AH0eW7a61eTvF1NConHxWolVGJGTZVxO8wtY1oEcqTYc8zKIFSSTMuEDxSAx%2F%2Bgn39%2FgRj9vrK%2FWgBzIevirTKR%2Frmhqj60tvT%2Fluve54vqqJxrnavsBQtQ9fM%2B4G7Ag%2FstYPGcLBeEQTXl&X-Amz-Signature=279bc08ac6f21a247f7e4d34a15a0f66104e8ecd1e7398a079cdaa15c25f8faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QI3WIT7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKUIWUZs4pZHbxNbnXa1vBrhm9gn4fdYjUIA08LrTdDAiB1zlRAm%2FFadHt%2F5Fdb9nbRCH66Cvfg34J2ajN9GR%2F0FCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM9WA2Q176MwxrH7j8KtwD%2Bg%2BUt7s3CbI7D%2BHwH%2F1wCO0RGGqYEJQxuXskr1jDuuMudlKktO75jUIHtGU7YJBgWERp4rP%2BqhUWIo4Fb78DKnvDzip7dQZfESeE0rzTIDoFgrVNmw99cw1y%2ByNX3oWe3eDDUbFWM4y%2BIv%2FO%2BTz4iKMO03qVRM6GsQfZucTSGuqOPxGPunidTI%2FgcWgFVA9YI2XlVQpGpCM4MeOMZPE%2FschH1TidGWdnXGS8y28K6w3IIjWA7Y9EPrP3lE%2F1yDFqFDGkiW%2FaD2WMg22ewtjIerTjzuySJlAobgEQoULEDSc5z6QAIdzT1XKG81WVdM8qwmd%2FhzW1VICnszafjYebyKXLT6%2BhFMvXId%2ByDWNlbWnChdI9x4PG1wiZY47p5FnXprRDPMmfBrsXiYb%2BrbFp93PlXAgzGlDUUlh0YRAfyM6SM4AxrIaJQgjgbYnmOxC30kfbnhScm%2FxL0QVcd1FA4TsAr3YJpG2l7VPdK1sUbgeaiT%2BEuNAh9PbGsgkc%2FfJbTXfDmqifB8aw4oL4EbNbI7A9Sr92qsRWy5DzbaEqUjhTBmGx1eVe%2FnI0xsrm%2BOP%2BabJc%2F2j8B8SBUJPLYQjFArO6g0tkLLzBUKvx2lK6SN0yanhhC1vSdCyTWsUwqZTNyQY6pgGo6WsLykr%2FKsXwmsCrJkIYrYO2PcgoPP6lDVUBwWgsP1MESnYOrmehxga7v7NHYziKIBPTi9W8f6or0AH0eW7a61eTvF1NConHxWolVGJGTZVxO8wtY1oEcqTYc8zKIFSSTMuEDxSAx%2F%2Bgn39%2FgRj9vrK%2FWgBzIevirTKR%2Frmhqj60tvT%2Fluve54vqqJxrnavsBQtQ9fM%2B4G7Ag%2FstYPGcLBeEQTXl&X-Amz-Signature=96780ff741682b243bbec7b69c654edb12179ebbbf12a13ad12b30a1cf92fd47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
