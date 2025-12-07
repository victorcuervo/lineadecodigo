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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZS6FO6E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADPyzQZgyfGQs%2B4WXoCBKzzfGq5%2Bj6VbYqH985fA5qpAiBeX4lk75rcdXSM%2FPZQbQZ5v6ljtO3qYgQH3cBFq2c5MyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkzSUfOfWzLzeSuJaKtwDN8acq4w1Yr96E49a9kiU2UNjWli1AEKCqv5Bf5GNQAk2VAxPkTD%2FVkLquK4Pcy6FDJAn1WLbrhdViAjPnrOkS5es5MvStNARPsC5EMnTCAnOUiQQmuIW4Gxj%2FIZu2NXclWLEWPGrRslzWEdJBjrZj6k7ZutBZ%2BtXPQuthya1SUAMw3PtV4cP%2Bd1poNLi%2FLmQBJBWEyI%2BFf8R98%2FwVLe3ixbZyL2zWD1JV9nTt5z8a09%2FYeccsC5HjrIvq%2B8WvIRg9xSBaFJkQQSzTbQ4lw8OgytCpcGkxGsloCX%2FgtUhD6nB3BkeMxDJwyRk2760Rzzjpqdzb%2BfhYUgwkmMyswnOOQdXrwRG67ny7kOYlmrFTER4FQVEftXF%2Fj729kmWeL9HFY9rxngbjERBFUO4dr0gSlYjaw%2Fp7lruFy13u4luntdS0w68xZrg0oqkmGL4qwm70ZivEJ38yACppT7ylllciAhOVNP61D%2FkTCLQ%2BDUzjvaH1rZ2sJrjgpWU37Z73a55izy9HxUNTlZ4hhS0EfK5N2CGZpZiaxp9rJpkoSW6gHwj5aIYNLQmkkZepn0a43LVOmenZa5OhMYr0lTv0H29DC%2F1aEaQoXizpL8vhRpmcD1lofunBqhH3nHkCjsw7qjXyQY6pgFDQSyra2iqK8YRL1%2FwsYXWRDUQjfOojPl5LIBIuF32l3MfoYvbc7BUC1BEsmhSipO4%2Fw50AY5niZLKoMr%2BPVwIqBZLcTCfb%2B%2FJZQcD1FxhNC%2FXShaEK87DloA7jgJBHRkcxl1zIOkl91FY0Uyg0jJBopscgGgs%2Fya7n%2FKSO2k8o%2BKv8cEOiwRLhOrgW9%2BnPxGKIpVkOefEF01csIneiEF6KFJQK7X%2F&X-Amz-Signature=fc6f4912f11e675245eb6085e9a95ff73b7a18a23da8ecd8f3338cb11420a90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZS6FO6E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADPyzQZgyfGQs%2B4WXoCBKzzfGq5%2Bj6VbYqH985fA5qpAiBeX4lk75rcdXSM%2FPZQbQZ5v6ljtO3qYgQH3cBFq2c5MyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkzSUfOfWzLzeSuJaKtwDN8acq4w1Yr96E49a9kiU2UNjWli1AEKCqv5Bf5GNQAk2VAxPkTD%2FVkLquK4Pcy6FDJAn1WLbrhdViAjPnrOkS5es5MvStNARPsC5EMnTCAnOUiQQmuIW4Gxj%2FIZu2NXclWLEWPGrRslzWEdJBjrZj6k7ZutBZ%2BtXPQuthya1SUAMw3PtV4cP%2Bd1poNLi%2FLmQBJBWEyI%2BFf8R98%2FwVLe3ixbZyL2zWD1JV9nTt5z8a09%2FYeccsC5HjrIvq%2B8WvIRg9xSBaFJkQQSzTbQ4lw8OgytCpcGkxGsloCX%2FgtUhD6nB3BkeMxDJwyRk2760Rzzjpqdzb%2BfhYUgwkmMyswnOOQdXrwRG67ny7kOYlmrFTER4FQVEftXF%2Fj729kmWeL9HFY9rxngbjERBFUO4dr0gSlYjaw%2Fp7lruFy13u4luntdS0w68xZrg0oqkmGL4qwm70ZivEJ38yACppT7ylllciAhOVNP61D%2FkTCLQ%2BDUzjvaH1rZ2sJrjgpWU37Z73a55izy9HxUNTlZ4hhS0EfK5N2CGZpZiaxp9rJpkoSW6gHwj5aIYNLQmkkZepn0a43LVOmenZa5OhMYr0lTv0H29DC%2F1aEaQoXizpL8vhRpmcD1lofunBqhH3nHkCjsw7qjXyQY6pgFDQSyra2iqK8YRL1%2FwsYXWRDUQjfOojPl5LIBIuF32l3MfoYvbc7BUC1BEsmhSipO4%2Fw50AY5niZLKoMr%2BPVwIqBZLcTCfb%2B%2FJZQcD1FxhNC%2FXShaEK87DloA7jgJBHRkcxl1zIOkl91FY0Uyg0jJBopscgGgs%2Fya7n%2FKSO2k8o%2BKv8cEOiwRLhOrgW9%2BnPxGKIpVkOefEF01csIneiEF6KFJQK7X%2F&X-Amz-Signature=984645bb578d64a9958b30fb9d3fb8038dba2666ff25bfc97e6bb25b1e306033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
