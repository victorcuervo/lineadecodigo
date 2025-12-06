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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NVR7VZK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPgRq6QRsB4kM2SzJCwWpnJsD6e8Hb0T9U8BmhResaRAiBXva4qUsi5UWW%2BjMWq8CgzqZagym0jCa73v0jNwdah8Cr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMTEOAOo4dCYNCS6sCKtwDHJBJy%2F0vkoSPm2psrlkiS%2BGdXNVZHwLBQSLl8ojxr67kQifKW6AUS4q%2FyChRfB2ufRaNM24uQPF9KZcXM4u2Sq1NU6slkvdEgCtgTqyN4C1Yq2vHVJ9yLXTH9JOdRHsW4J%2Fo6SZfGFA3UsL4v53BXEWNeBmLpxeJp3IbbUBNTevIKx%2BjwClLIu%2FnCz9ho29%2FsJp6bj6%2BHGXcSIoHElViJLIndMeoCySCMfT6W91%2BgnbQUDTSapmraQIbyG8P40wJmqNtLhugOVNggEfAjRACyjCQekppYbSMAAi3MrAMPpiCekq1SgNQ87vkxUaFUp2hQOjUY1MD%2BfASeS4XGPrauf5n4npC7SAtZJCs3GoTz5YBZxgj36oLxbH%2BFZBae6P9nf9fXFsIxoxs6oHfTClVQyCkGuT1fJwiSsbpKZzb2B0TZYV%2BQD0av9LshClN68KzHp2ZK%2BdqxQpe%2BfzJ7IeKpUkOIGMMyUMwbhdmIY%2B9qD3XbxG2UUIikfc61QUr2rT1wu4xnbUCiuQze%2BtCq6FL3rjHuFTyvY7zw2PczioO4lPdX6tChNGXaVpyzfy7OFT7NQz%2FwE7wVS%2Fe8s%2B5CJ3D530kdYTpr8pSvhZN7vj7Dbhsyh1Lcj%2Bvkg8jJzow7sXRyQY6pgHna5leZb%2Fc3XIcISxY2ETnE4zM%2FCeSHINgPlADxQNaMldVIs7UQl1CCW7pkrRRbEvKpdEh9GIvMX6aH%2FJlXzaRE8H4F%2B6QdxDH2D2ppe68Rp5to8efh8IE83dC%2BVdC7ts4nM9Ot9qf%2B%2FEgTexS26UNGymvsxItG0%2B3G8%2BegPvJUcjgXoDQSbvE%2BHUitNSvpTSSvuanWjUYi1YB5xJ5JyQb2EKFMcoA&X-Amz-Signature=9c7a0b43bfbaf522edd51165f0cd0f7accb9ea0bb27af9a5fd27dd79071bf295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NVR7VZK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPgRq6QRsB4kM2SzJCwWpnJsD6e8Hb0T9U8BmhResaRAiBXva4qUsi5UWW%2BjMWq8CgzqZagym0jCa73v0jNwdah8Cr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMTEOAOo4dCYNCS6sCKtwDHJBJy%2F0vkoSPm2psrlkiS%2BGdXNVZHwLBQSLl8ojxr67kQifKW6AUS4q%2FyChRfB2ufRaNM24uQPF9KZcXM4u2Sq1NU6slkvdEgCtgTqyN4C1Yq2vHVJ9yLXTH9JOdRHsW4J%2Fo6SZfGFA3UsL4v53BXEWNeBmLpxeJp3IbbUBNTevIKx%2BjwClLIu%2FnCz9ho29%2FsJp6bj6%2BHGXcSIoHElViJLIndMeoCySCMfT6W91%2BgnbQUDTSapmraQIbyG8P40wJmqNtLhugOVNggEfAjRACyjCQekppYbSMAAi3MrAMPpiCekq1SgNQ87vkxUaFUp2hQOjUY1MD%2BfASeS4XGPrauf5n4npC7SAtZJCs3GoTz5YBZxgj36oLxbH%2BFZBae6P9nf9fXFsIxoxs6oHfTClVQyCkGuT1fJwiSsbpKZzb2B0TZYV%2BQD0av9LshClN68KzHp2ZK%2BdqxQpe%2BfzJ7IeKpUkOIGMMyUMwbhdmIY%2B9qD3XbxG2UUIikfc61QUr2rT1wu4xnbUCiuQze%2BtCq6FL3rjHuFTyvY7zw2PczioO4lPdX6tChNGXaVpyzfy7OFT7NQz%2FwE7wVS%2Fe8s%2B5CJ3D530kdYTpr8pSvhZN7vj7Dbhsyh1Lcj%2Bvkg8jJzow7sXRyQY6pgHna5leZb%2Fc3XIcISxY2ETnE4zM%2FCeSHINgPlADxQNaMldVIs7UQl1CCW7pkrRRbEvKpdEh9GIvMX6aH%2FJlXzaRE8H4F%2B6QdxDH2D2ppe68Rp5to8efh8IE83dC%2BVdC7ts4nM9Ot9qf%2B%2FEgTexS26UNGymvsxItG0%2B3G8%2BegPvJUcjgXoDQSbvE%2BHUitNSvpTSSvuanWjUYi1YB5xJ5JyQb2EKFMcoA&X-Amz-Signature=069d7feb376cf2cb9b0cb7dee33f008974ca39ea1489ad7cd33bb1cad4bf94f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
