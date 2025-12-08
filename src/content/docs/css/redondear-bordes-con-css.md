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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2S7Y4II%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELyfiNWgfgdfdKGuWUOHtEvFfYzV9NXBkKPA7P1OJveAiEA8VPjmxshjEoTLWAQ2pAT2ciMFZkFZMtEjapXZzTP0LEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKTpY1%2Ba1WulaDp0CrcA9UjXAfyW%2F1LdmlOwIgNGqiJJSyirg13k88NO8e%2FmpjNor07AZQrjl%2BAEQVo45RqKPt4wTbDvBzKdBY09GBZbYmi9CyXp871MHp5VzoZfnosAHbi%2BiUa5RPRKYHUn8TkCnKZLckzxyTFXOKGJ8XFXHxjU5mZnnmFaAllRwVHXT7hPHpB87HNK4D4Vk%2B21ky1gek7p5syvm9Ieax4qbRVnVf8h6suPuMP48pDTARAH%2Fy3oop2HhWyKn%2Fjg7gPOqxDVEMENDul8WcHndbrp1haTp8NAPuEt4XuboiQ%2BSW3cVGNiSUueBSkW8MhuLxAe44I1aWhyVz%2BjeukVJ4ncXTvClDNL602zF3TAIFaUyMkM2kMAyMDdasWb2QRcp49%2FhoJP5wv5S00WLK8RYf0OZThFnBW1UsKApgelk%2FS%2FVXYHGxxrOk92uMdZJ51nS3LNiV%2FZDVkSrHWJmKD%2FSnG9pleKtycZB3DmCORhdjc90N9wAjusuftdNx2UBGV4gzbOVEfoPPKJ9yDmtjeLuuRsRjXDOwGZDILymjws8DqPHpzZ8o0zazWqjyJnI%2Ba7CprnK2QFD7m8Q2EdSDo9U8iAqRJh3oCPg605kHWBkQzES3JNA%2Fz0T1LhqsDPBMBkQGcMJCQ28kGOqUBkny0stpr7dvu12rSHNatKT7lgCxCreQ1KGZofKqVtDFnj6FjvKJI%2BjPk6hXRsY8YIWyTMe4VNrIThL6Vxi4B363dMQOPg1GvV8k60%2FFVvbdFa%2FnMWsT4DFVl9LVPfgCGHg9gXbztF0TWit5jmgH%2FkQVFr44jPxQl%2BXkH1wY3OKI4%2FyGakzZr9ZLmPZAkllaVPvc1PXmCvPkvvZ%2BVeVK8N2qfxxR7&X-Amz-Signature=8a01b0ed9115f2ca992ba769576fb45d3636184a9c83a7e446052659e8575ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2S7Y4II%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELyfiNWgfgdfdKGuWUOHtEvFfYzV9NXBkKPA7P1OJveAiEA8VPjmxshjEoTLWAQ2pAT2ciMFZkFZMtEjapXZzTP0LEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKTpY1%2Ba1WulaDp0CrcA9UjXAfyW%2F1LdmlOwIgNGqiJJSyirg13k88NO8e%2FmpjNor07AZQrjl%2BAEQVo45RqKPt4wTbDvBzKdBY09GBZbYmi9CyXp871MHp5VzoZfnosAHbi%2BiUa5RPRKYHUn8TkCnKZLckzxyTFXOKGJ8XFXHxjU5mZnnmFaAllRwVHXT7hPHpB87HNK4D4Vk%2B21ky1gek7p5syvm9Ieax4qbRVnVf8h6suPuMP48pDTARAH%2Fy3oop2HhWyKn%2Fjg7gPOqxDVEMENDul8WcHndbrp1haTp8NAPuEt4XuboiQ%2BSW3cVGNiSUueBSkW8MhuLxAe44I1aWhyVz%2BjeukVJ4ncXTvClDNL602zF3TAIFaUyMkM2kMAyMDdasWb2QRcp49%2FhoJP5wv5S00WLK8RYf0OZThFnBW1UsKApgelk%2FS%2FVXYHGxxrOk92uMdZJ51nS3LNiV%2FZDVkSrHWJmKD%2FSnG9pleKtycZB3DmCORhdjc90N9wAjusuftdNx2UBGV4gzbOVEfoPPKJ9yDmtjeLuuRsRjXDOwGZDILymjws8DqPHpzZ8o0zazWqjyJnI%2Ba7CprnK2QFD7m8Q2EdSDo9U8iAqRJh3oCPg605kHWBkQzES3JNA%2Fz0T1LhqsDPBMBkQGcMJCQ28kGOqUBkny0stpr7dvu12rSHNatKT7lgCxCreQ1KGZofKqVtDFnj6FjvKJI%2BjPk6hXRsY8YIWyTMe4VNrIThL6Vxi4B363dMQOPg1GvV8k60%2FFVvbdFa%2FnMWsT4DFVl9LVPfgCGHg9gXbztF0TWit5jmgH%2FkQVFr44jPxQl%2BXkH1wY3OKI4%2FyGakzZr9ZLmPZAkllaVPvc1PXmCvPkvvZ%2BVeVK8N2qfxxR7&X-Amz-Signature=e6353f9848e91c2661eb42c73371061c397dcfb8dccf1cff5f2218515443af84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
