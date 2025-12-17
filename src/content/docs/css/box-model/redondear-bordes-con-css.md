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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRYTP4H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLQOgLyrsSs0ORuP22j6w5P0lzMay1jO5XFFj8w1ieNwIgNiwU4p4Byrikh6Kw5xZhHWjFPEY07tw69iqukZF6CCAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDP6E0MaZlELb51qMvSrcA1hOrmL6Y95s%2FxNZC6STDbwMGrTYhiGRvgX6BQmi9VENDTOj%2Fe60IG%2BB5LYxM9Cfj5Wz%2F6fDvSduZRDzlzobEN%2Bo2uGfHUtQsu3NQpWVoxWho9%2F2shtqdKU%2BIRF8z7BmIOBF7en7APTxS8dYWnoRLrzehk%2F8FhzUEuTy8eTevvQYHmMYVvueVgd%2FeBw6QMvyNhWRsXJXI8BjKnj9YwVflM3ETy20mWduIeLaljs5rFyFslZC21B2HvN9%2BoZTPECctJu8jV1ECDUwV9JWDJyWhnlcyAX2qNpwJGBLSeO368d8g%2Bq%2FdM4G6U%2FXqBS%2FczoPxZwQbEjyRwj2BeQg7cHS9FaK6Se%2BuxtLNUqXFscQfxd8BTwq6MI0hHEX2xCKZRTqsNWNY1H089qMelxpIsAw1i4MsWK0aMo32u37zBDMidfgtKgrmpDOW6%2FiRfaD9bGRpojHH3LmUdFFJDHnbUtq3NcQQlJZOi5ZrJnti%2BeoKy71UZDTdylCibyjZ9SWqCpOk3i3IoIbojUSm9FUZ3RwFRuCkrldwRfTvSBFsn0lwy3A0w0D%2B8qvBpbqVGNTHaIf97s%2BHQXuL8zAu8Os5rRIIVhkVghBuCyVOxL2pgkSnKBex4OK9553WO14RwEmMPiqisoGOqUBDIiThXT03j9dUSLy2y8hYsQvfOYCYQYt25RX8uEa%2BaRzIQjjE8YE4lcIW8ziV6wsEZgnGQMvlPQu%2Bw0uCS1ufcTnncU5PCB%2Bmg3BvIXKS3KEXtsUXKGOnSQZknt3NKGJRA%2B5d0ZcjwllrImWGOGX%2FjpjKaPkGbhKv%2Fn%2BY2caC%2F5ghsesU%2FJDwF2qVlq3z1Z3MjQJKyrFjsmPoWKii%2BeENbeQ5Xmg&X-Amz-Signature=1b37ba3362aefb13c627f3e28e7328620b510474bc8ff2312a46c4ddb52ec2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRYTP4H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLQOgLyrsSs0ORuP22j6w5P0lzMay1jO5XFFj8w1ieNwIgNiwU4p4Byrikh6Kw5xZhHWjFPEY07tw69iqukZF6CCAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDP6E0MaZlELb51qMvSrcA1hOrmL6Y95s%2FxNZC6STDbwMGrTYhiGRvgX6BQmi9VENDTOj%2Fe60IG%2BB5LYxM9Cfj5Wz%2F6fDvSduZRDzlzobEN%2Bo2uGfHUtQsu3NQpWVoxWho9%2F2shtqdKU%2BIRF8z7BmIOBF7en7APTxS8dYWnoRLrzehk%2F8FhzUEuTy8eTevvQYHmMYVvueVgd%2FeBw6QMvyNhWRsXJXI8BjKnj9YwVflM3ETy20mWduIeLaljs5rFyFslZC21B2HvN9%2BoZTPECctJu8jV1ECDUwV9JWDJyWhnlcyAX2qNpwJGBLSeO368d8g%2Bq%2FdM4G6U%2FXqBS%2FczoPxZwQbEjyRwj2BeQg7cHS9FaK6Se%2BuxtLNUqXFscQfxd8BTwq6MI0hHEX2xCKZRTqsNWNY1H089qMelxpIsAw1i4MsWK0aMo32u37zBDMidfgtKgrmpDOW6%2FiRfaD9bGRpojHH3LmUdFFJDHnbUtq3NcQQlJZOi5ZrJnti%2BeoKy71UZDTdylCibyjZ9SWqCpOk3i3IoIbojUSm9FUZ3RwFRuCkrldwRfTvSBFsn0lwy3A0w0D%2B8qvBpbqVGNTHaIf97s%2BHQXuL8zAu8Os5rRIIVhkVghBuCyVOxL2pgkSnKBex4OK9553WO14RwEmMPiqisoGOqUBDIiThXT03j9dUSLy2y8hYsQvfOYCYQYt25RX8uEa%2BaRzIQjjE8YE4lcIW8ziV6wsEZgnGQMvlPQu%2Bw0uCS1ufcTnncU5PCB%2Bmg3BvIXKS3KEXtsUXKGOnSQZknt3NKGJRA%2B5d0ZcjwllrImWGOGX%2FjpjKaPkGbhKv%2Fn%2BY2caC%2F5ghsesU%2FJDwF2qVlq3z1Z3MjQJKyrFjsmPoWKii%2BeENbeQ5Xmg&X-Amz-Signature=786f8a8436142e55d77a661e663f87c05869f5663bbef56599e2616392749461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
