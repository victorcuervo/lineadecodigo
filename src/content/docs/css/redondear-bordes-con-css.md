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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODZJHAN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpT01%2BfU9JqogEA25%2BeuGAXKwKwJZKE2Yxu7l0dGWxVAiB9f5kuH3a4HxWwoCJyqip4WcGphYTwmD5US0SrZUra3yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMQPZe61RF0Bzz0wJiKtwDw6GEZsaB%2F0Eog0PUM7xLQ0dCF%2BR1KFYCJfda0zmXwlHqdbP3bmtNRZDlTRbRCyXfFyklnTKII8jDwf2h982Y%2BQdJWQfVzgVTqYJZ0ThG8UTBvSei1Bf7LMVXK8DLFkvuN20tKecYVL3ZYQuJ7ktr0Hu59lpWTz4usTUaAameTFo5svntfJefYRwoTfqLggl0hR%2FRPKBJrc7Gk7iTWC7Cu9liWC8ORUXojACHdfcuu7FryH1%2F3MrAYpHyjV2xgTI7T3vyCOQAIbhxVvgAWN7bF5T%2B45isVk4xyUJRSv5eykJFuwNOUWWjtCXAmTifBrMKYCFGscPYWMAWS559C9y%2FvHrcKpa8D9HaEvKlSsXkuDrHxY3RUc07kZcwS0ibGh0g7SNzvSvqa%2B9znvpXWDGQMTniEYKoj5OeKQ8nOWwyfdw2%2BtBozRzM2kzmPZOixT%2B2AJ2MoS08nKNcfuMBz0iKahuMTSFNooU1EqqA332G9U45qhw39zbrbjK11bFKlb%2FdaFQ7JXntRymAEdlTjOw2r%2FD7d%2F9fG8CQm9q3178LUci6htVKv05MGf3ivfeZddOuu99N34iwAa99y0orNoTKimcvxu80jxF7Z0s40Y190dl07Z29ED8rfYvfn0YwraXJyQY6pgH5rBFH7Gwi87uOd8f3Mj7ZcAjE%2FKLvQrK9eUEbX%2BTzHiBEi%2FcPbuqw1%2FFAv%2BeaI8hCQlHC9lfDTSYpLCk1jDHeN3U5mqxryrswoqg4BLkOw%2B4ipVsrK8aBce4NJ0V5aTVolb%2FkVL8KOH%2FuCq%2F%2FSuLZe9gJocy%2Fnodc1PGxwCoDQSvGauFCriC3KtH0rwYqIDL5fQb6rB6SRcVwt9Ba5w1fzpNuDyMO&X-Amz-Signature=f1dc18cff424fca25d6bb93ae06cef05514d35def85db9f31385be927170ba72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODZJHAN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpT01%2BfU9JqogEA25%2BeuGAXKwKwJZKE2Yxu7l0dGWxVAiB9f5kuH3a4HxWwoCJyqip4WcGphYTwmD5US0SrZUra3yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMQPZe61RF0Bzz0wJiKtwDw6GEZsaB%2F0Eog0PUM7xLQ0dCF%2BR1KFYCJfda0zmXwlHqdbP3bmtNRZDlTRbRCyXfFyklnTKII8jDwf2h982Y%2BQdJWQfVzgVTqYJZ0ThG8UTBvSei1Bf7LMVXK8DLFkvuN20tKecYVL3ZYQuJ7ktr0Hu59lpWTz4usTUaAameTFo5svntfJefYRwoTfqLggl0hR%2FRPKBJrc7Gk7iTWC7Cu9liWC8ORUXojACHdfcuu7FryH1%2F3MrAYpHyjV2xgTI7T3vyCOQAIbhxVvgAWN7bF5T%2B45isVk4xyUJRSv5eykJFuwNOUWWjtCXAmTifBrMKYCFGscPYWMAWS559C9y%2FvHrcKpa8D9HaEvKlSsXkuDrHxY3RUc07kZcwS0ibGh0g7SNzvSvqa%2B9znvpXWDGQMTniEYKoj5OeKQ8nOWwyfdw2%2BtBozRzM2kzmPZOixT%2B2AJ2MoS08nKNcfuMBz0iKahuMTSFNooU1EqqA332G9U45qhw39zbrbjK11bFKlb%2FdaFQ7JXntRymAEdlTjOw2r%2FD7d%2F9fG8CQm9q3178LUci6htVKv05MGf3ivfeZddOuu99N34iwAa99y0orNoTKimcvxu80jxF7Z0s40Y190dl07Z29ED8rfYvfn0YwraXJyQY6pgH5rBFH7Gwi87uOd8f3Mj7ZcAjE%2FKLvQrK9eUEbX%2BTzHiBEi%2FcPbuqw1%2FFAv%2BeaI8hCQlHC9lfDTSYpLCk1jDHeN3U5mqxryrswoqg4BLkOw%2B4ipVsrK8aBce4NJ0V5aTVolb%2FkVL8KOH%2FuCq%2F%2FSuLZe9gJocy%2Fnodc1PGxwCoDQSvGauFCriC3KtH0rwYqIDL5fQb6rB6SRcVwt9Ba5w1fzpNuDyMO&X-Amz-Signature=b64d6b86a4765d3cd92aac1e5cbaa015c15e40151743889efec315fb65419bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
