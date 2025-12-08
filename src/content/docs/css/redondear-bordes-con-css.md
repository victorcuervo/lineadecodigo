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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTF4VMC2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0a19L1%2Bl%2BkKPgIKad%2FihevWa8uMsfLvbh5RV5YMm9hAiBQdpjhiRO4DbB4JPLZ%2F1E%2F7Kl90y7QAv9uW%2F3SKAAS%2BCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp%2FtOrsuYdiWVSn2zKtwDq4u2N1aeDALMVD4b%2BHdWuYAPsR6b2Ub%2BvR2bqFKPce8aQNAZj36e3c7aVyXp02l1jfuw1gC%2FyhLEysByZsdGM2NQjdA3vEjPGQ6nTNoZU0NWAjnU9lMHkGqlbjL%2FtADRFjFWpqknta2uCe4xdlcVsWs9G3zvsiO%2BgDhXrNDLYt9Av4U8X6hpDsgFcYqFt7wU1pNJQQZEhaG6%2BJJYtltjgxMldFFJUWrj1FNcv%2BXSobFRD6bIM1IvlvRCsFMobyoRuKV52aXGSJwW%2B9DwTRFOJV6vZJV3X82S%2BFQTfshvZtlVCgpsAE8WcNCKCerFxhQdvOcgZSDYpBwe2dGvRvj3bRkWQBCFf%2FDdIXfbpOZA0I908NxawV9i95onQtbyQJ5cuyJMmABrgoeJ9fhM6%2F%2B6fLj2vN85ckNtwNDW7WHgUJcBYV0GYwh9%2FI4xcN0NIviCYeGXOhyrvc8HZE3VljnBCaOz97xpTH1peHZ%2FzIVSvrUJTCu3FERaaVeIw878hiJT4l5%2FWBo75xn%2BHTfwurDRGlJ8G89NCMI8BS%2FzuRzM3NqicenvlDPa7uW0xFk7JmOoZ6sH9xMvDbvr%2FBmaTzv6u1pEsM7eiMOPtcZYoIJb1x7knZ84ack2sp3QqLgw%2F%2B3ZyQY6pgEJGnk3ACUvodZ1SP8L%2FlO7OUalWdJLDtcYxCcn8zzZp3srYq5dDmm0EE5ZwFmp6S%2F9xKZZmsq0pTuM7PZ3oM8Hx%2FcX86FkStLswfaKZhpWOyy%2F1wgEX2EimBuVE%2FHjx2uX9LNzqIp0wyhs9u7DHRlW53hZEXaKssDDe9oxUelikWfFUg9ITCmeQXttAEzs6JkxglrjWN%2FcgX2vkET82YOXVj0iEArw&X-Amz-Signature=c562db329982d1492a9e1a6d0481dfd14b6b47c39f83e4e8874ce8f3a736fad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTF4VMC2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0a19L1%2Bl%2BkKPgIKad%2FihevWa8uMsfLvbh5RV5YMm9hAiBQdpjhiRO4DbB4JPLZ%2F1E%2F7Kl90y7QAv9uW%2F3SKAAS%2BCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp%2FtOrsuYdiWVSn2zKtwDq4u2N1aeDALMVD4b%2BHdWuYAPsR6b2Ub%2BvR2bqFKPce8aQNAZj36e3c7aVyXp02l1jfuw1gC%2FyhLEysByZsdGM2NQjdA3vEjPGQ6nTNoZU0NWAjnU9lMHkGqlbjL%2FtADRFjFWpqknta2uCe4xdlcVsWs9G3zvsiO%2BgDhXrNDLYt9Av4U8X6hpDsgFcYqFt7wU1pNJQQZEhaG6%2BJJYtltjgxMldFFJUWrj1FNcv%2BXSobFRD6bIM1IvlvRCsFMobyoRuKV52aXGSJwW%2B9DwTRFOJV6vZJV3X82S%2BFQTfshvZtlVCgpsAE8WcNCKCerFxhQdvOcgZSDYpBwe2dGvRvj3bRkWQBCFf%2FDdIXfbpOZA0I908NxawV9i95onQtbyQJ5cuyJMmABrgoeJ9fhM6%2F%2B6fLj2vN85ckNtwNDW7WHgUJcBYV0GYwh9%2FI4xcN0NIviCYeGXOhyrvc8HZE3VljnBCaOz97xpTH1peHZ%2FzIVSvrUJTCu3FERaaVeIw878hiJT4l5%2FWBo75xn%2BHTfwurDRGlJ8G89NCMI8BS%2FzuRzM3NqicenvlDPa7uW0xFk7JmOoZ6sH9xMvDbvr%2FBmaTzv6u1pEsM7eiMOPtcZYoIJb1x7knZ84ack2sp3QqLgw%2F%2B3ZyQY6pgEJGnk3ACUvodZ1SP8L%2FlO7OUalWdJLDtcYxCcn8zzZp3srYq5dDmm0EE5ZwFmp6S%2F9xKZZmsq0pTuM7PZ3oM8Hx%2FcX86FkStLswfaKZhpWOyy%2F1wgEX2EimBuVE%2FHjx2uX9LNzqIp0wyhs9u7DHRlW53hZEXaKssDDe9oxUelikWfFUg9ITCmeQXttAEzs6JkxglrjWN%2FcgX2vkET82YOXVj0iEArw&X-Amz-Signature=65658ff9a64cfdae570c1dd9e9573bf76067876dc20d76b6420bfbc6ce104750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
