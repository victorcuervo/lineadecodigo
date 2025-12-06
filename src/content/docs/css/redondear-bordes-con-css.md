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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O32OICQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEweI%2FVE6gmIWDKN957tOwlKhUTYd3e3hdPm3kOjMyqzAiEAr85eAehijJhv7yBAsb9kcM8PIvpN8o5GTFVLgztYcpgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDM1F6znX8kFvO7TYKyrcA9UPZ7yiRUEOcF82eofvE0s3JhZJ2JWQ1alwU1eFAU6kkE9lBBrj0uYLYFj39YbUhqB8lQFVXurDdctKhuIiKOxhNIzzGYqyvlRWh40CQ9LH7NFNEGMfHW0vP7fl49xf%2BceQrjvsQeHnMHK%2Bv%2F29PHa%2B6vNJTy1LTmA43VE4lJfU7QV4J6wMidmQMi43hm6OT9YNSqnbx3%2FQFA3fycYb9ci0S0T0CB%2BnCaMAw4LeqXHQSUcLVBuuRBgBVoLUpS4gMJWOkCdlqlZEUtEeJ1dCJ3Docl%2B8CaUEt7%2B5vddVuvRxWnvjaXFoCeWISHnb7KKcu7uNfQUVwqhIU9fUhVKknLqb0ynm%2Bc5TvuoyBpJ5vr52Ni0DFFlyIhuDOpyEQQKXEA2Db4c40sbO56qYHKqXSIK05P1KbnXJu4FxK2xKVSmtfm48zMNWxjOtpbRIT2%2Bz9gthp1QtjA%2BkjuOW1%2Fm%2BiUssczZheaGMWbrGu4CTKeHIb1e4e1ISTHKAxcR9p9EfF1EpZ52HqlqWHBHTV6iG3nimxGtCaP0R5ez%2FhZVo6%2FXeAu1uRzKmJPlua1MzAyOhPNLnhqy52sVQnC51ZdjttsDiWH3Zg%2FbCjpEvUyXw9KnsCYTgBfrAvo3r3HCZMJO8z8kGOqUBdeTdoDToR%2F%2FZY0rELaaV6iNo2LvJ8Z7K0Wnig2MvulSTdYPRFi%2FD%2B35S%2B955BCV%2BYebLEhcLe9xriYbq2E%2FJyapng%2FTsNuoQqutibgwnsORgQz9zw7R5LY3pkMlSUaLJSHn7pMkeDyQI43tF8v2TyWBJlSAD7blYDBLbfhdMii9A4m%2FSqCN9APxTRoY8M5CFw8FzBHchK1fFC%2FGiPV%2BBAf2c7Fhz&X-Amz-Signature=7422249458a9b62decfc907afe856b185c7071b0fb9f0c8ce6cfecf56b9a8087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O32OICQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEweI%2FVE6gmIWDKN957tOwlKhUTYd3e3hdPm3kOjMyqzAiEAr85eAehijJhv7yBAsb9kcM8PIvpN8o5GTFVLgztYcpgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDM1F6znX8kFvO7TYKyrcA9UPZ7yiRUEOcF82eofvE0s3JhZJ2JWQ1alwU1eFAU6kkE9lBBrj0uYLYFj39YbUhqB8lQFVXurDdctKhuIiKOxhNIzzGYqyvlRWh40CQ9LH7NFNEGMfHW0vP7fl49xf%2BceQrjvsQeHnMHK%2Bv%2F29PHa%2B6vNJTy1LTmA43VE4lJfU7QV4J6wMidmQMi43hm6OT9YNSqnbx3%2FQFA3fycYb9ci0S0T0CB%2BnCaMAw4LeqXHQSUcLVBuuRBgBVoLUpS4gMJWOkCdlqlZEUtEeJ1dCJ3Docl%2B8CaUEt7%2B5vddVuvRxWnvjaXFoCeWISHnb7KKcu7uNfQUVwqhIU9fUhVKknLqb0ynm%2Bc5TvuoyBpJ5vr52Ni0DFFlyIhuDOpyEQQKXEA2Db4c40sbO56qYHKqXSIK05P1KbnXJu4FxK2xKVSmtfm48zMNWxjOtpbRIT2%2Bz9gthp1QtjA%2BkjuOW1%2Fm%2BiUssczZheaGMWbrGu4CTKeHIb1e4e1ISTHKAxcR9p9EfF1EpZ52HqlqWHBHTV6iG3nimxGtCaP0R5ez%2FhZVo6%2FXeAu1uRzKmJPlua1MzAyOhPNLnhqy52sVQnC51ZdjttsDiWH3Zg%2FbCjpEvUyXw9KnsCYTgBfrAvo3r3HCZMJO8z8kGOqUBdeTdoDToR%2F%2FZY0rELaaV6iNo2LvJ8Z7K0Wnig2MvulSTdYPRFi%2FD%2B35S%2B955BCV%2BYebLEhcLe9xriYbq2E%2FJyapng%2FTsNuoQqutibgwnsORgQz9zw7R5LY3pkMlSUaLJSHn7pMkeDyQI43tF8v2TyWBJlSAD7blYDBLbfhdMii9A4m%2FSqCN9APxTRoY8M5CFw8FzBHchK1fFC%2FGiPV%2BBAf2c7Fhz&X-Amz-Signature=03c61c9850f20d47c07d49e729b6a079942551ef4198e4797f77e2c219423ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
