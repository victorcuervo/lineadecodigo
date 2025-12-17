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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWYOR5RA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDws8%2B02TXWM4XYYSDTRspCDQDVYJeKA%2B3K1G0Rg%2BUQywIhAJCH5jVnE4cOrYHqhL4J8h617%2BCcQMrx%2BzI7VwOKcjB7Kv8DCH4QABoMNjM3NDIzMTgzODA1Igx8%2BPz8qJ3fdKsW66cq3AMAnbkGHt7kIpj23CU%2BcMkU2N3lhD9slupbz8W0WaFg517zGPRkiHFcfnEDfPS42UmepUSpzCohSb2dtXYAYLSvAL9S3Ak8ZRVcIEW70hOwRzCl99bXrm55vReE9JceL3UTjlWl5HJI%2FXmYswkkdIohuhj8X9mv7AZ1ks%2BMKYsF8Z6uzhHpqC5pSEOGQtpAJ3F4gk4i0yflwqpvrDzxQmJ6n5QA5ORJinpMrYBTMpnmKjPpBows42jMi1r2HlFBRJtWYqzVoxSf2ajJrW73fD2dKDAi%2BW8bt5A6HMvhEwrHJpdDOlswqoiDzOLBhk%2BKR8iboIwnxirwVnoGdM5L0YlGKEDH3JxvLT7Qs1E7I%2BAMeSdnOepHgLiwLFBFEqmOX9pjTAu2Rc2S0JU6y219WbmoL%2BRKFUCKxduu0jzjign2WhkvYt3OT%2BOwyzvYtax7Y1t8Fx5oppTyAZu5TiswmGHfVef%2Fqubl%2Bdb9CCS%2BSwCfPwv9cpAPZaJsCIoBuMsMR1zGF6dwJ07R9IpeSK1DBuhDIbCIe6zPZyuE5FJG3ksd4SQrK0jz0YvfdCLHbEei%2B6mvSNYStSE1ArVD6BCPZbM4X4bIRKKEwByXukgIk9miuaKzTdR8RL8v4Nui6TDNxYrKBjqkAazompgY6HrSp5h13pcs63lRZZ9OsF%2FpYMpWYjCoslbVryXPzVFgVcv6U7ANCN%2BNUtvXVx%2B84%2BqmFChm2Jj%2BSOGRBUMOHsjDDQaTcWQgfbj%2F7mpWJgILzh1bU4PqCz6n53m2VMs%2BrR%2BaMK%2BgVrt%2BwV8wg23IqVV%2BWedGC3M3Mnru4zrdW7bTGWdQQs1F%2BeJTj255k7UqjL3EbQ9nBGPApo3%2BA4no&X-Amz-Signature=872a7c0f45a2bfd6fe99cc7a89feb6aac419bb2953ca2f34182c22e976e43d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWYOR5RA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDws8%2B02TXWM4XYYSDTRspCDQDVYJeKA%2B3K1G0Rg%2BUQywIhAJCH5jVnE4cOrYHqhL4J8h617%2BCcQMrx%2BzI7VwOKcjB7Kv8DCH4QABoMNjM3NDIzMTgzODA1Igx8%2BPz8qJ3fdKsW66cq3AMAnbkGHt7kIpj23CU%2BcMkU2N3lhD9slupbz8W0WaFg517zGPRkiHFcfnEDfPS42UmepUSpzCohSb2dtXYAYLSvAL9S3Ak8ZRVcIEW70hOwRzCl99bXrm55vReE9JceL3UTjlWl5HJI%2FXmYswkkdIohuhj8X9mv7AZ1ks%2BMKYsF8Z6uzhHpqC5pSEOGQtpAJ3F4gk4i0yflwqpvrDzxQmJ6n5QA5ORJinpMrYBTMpnmKjPpBows42jMi1r2HlFBRJtWYqzVoxSf2ajJrW73fD2dKDAi%2BW8bt5A6HMvhEwrHJpdDOlswqoiDzOLBhk%2BKR8iboIwnxirwVnoGdM5L0YlGKEDH3JxvLT7Qs1E7I%2BAMeSdnOepHgLiwLFBFEqmOX9pjTAu2Rc2S0JU6y219WbmoL%2BRKFUCKxduu0jzjign2WhkvYt3OT%2BOwyzvYtax7Y1t8Fx5oppTyAZu5TiswmGHfVef%2Fqubl%2Bdb9CCS%2BSwCfPwv9cpAPZaJsCIoBuMsMR1zGF6dwJ07R9IpeSK1DBuhDIbCIe6zPZyuE5FJG3ksd4SQrK0jz0YvfdCLHbEei%2B6mvSNYStSE1ArVD6BCPZbM4X4bIRKKEwByXukgIk9miuaKzTdR8RL8v4Nui6TDNxYrKBjqkAazompgY6HrSp5h13pcs63lRZZ9OsF%2FpYMpWYjCoslbVryXPzVFgVcv6U7ANCN%2BNUtvXVx%2B84%2BqmFChm2Jj%2BSOGRBUMOHsjDDQaTcWQgfbj%2F7mpWJgILzh1bU4PqCz6n53m2VMs%2BrR%2BaMK%2BgVrt%2BwV8wg23IqVV%2BWedGC3M3Mnru4zrdW7bTGWdQQs1F%2BeJTj255k7UqjL3EbQ9nBGPApo3%2BA4no&X-Amz-Signature=fbe978d966ea1333d8575d8de71bac379f287575a5a932d2b785ab3399c8a709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
