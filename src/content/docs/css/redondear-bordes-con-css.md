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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCQRLQBG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEt06tP6baStBe467SnZN1Gq49hV0Nc3nXuZw8bOhgpFAiEA1B2Iq%2Fc7m1dm%2BC%2FDCmJCMpGD6I18i5pO9oUZ6rGZoxQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWOpdjY%2Ftt9xsNlhyrcA5%2FemUE7ktg5m5Lhd10cbnq7vtU3utKiCDJuJd0xS7cotOFiajZBzHx5Crp06yo89ccmoJ3bHUF%2B3keaILw7MIsAUS87rcrRmTaPMN26Zhdy2CmrQXP59wFquPP%2BPIoh6NzcckvHNnmkqWWfecETJzLXroDtA87kF4W0s47mITv54eHTZJ%2B1tNcCNrTjjCrxm9HiY7cpD08RqZLGFJX40RLZOIJjUbRilkEwwu6R8ai%2BsPLixqGAAvFLZDixH7Gf92AZonjPFbKLCkcsX4ebwbHF58ZUMZSKKRwVpQUw2BUi6xlKYRJ04B62rKFetm1FjiGIekjUIomUtTXMfzyaH464XbH%2Fu84eqJyfsLMiWUljWV2wWz9g5xPE4Ze84sTy8d74024iHDz9qkMz93hf%2FPRqEbkGREU3BpbVWypN5ykYxvOZGhoPT9i9ZDStf3JqxrxCbsfU7JhFNL5uHWkkdgeyaz4Cr9kU91DiqOFc%2FMi9S2yBbDSYTPxPnQMgcbEJCXKuoKRLvojGJdNu77rYv%2FEv6YOYsqO7u6tF%2B4jhhazGvu%2BGLg6C%2FUDJSIEvZ0tRnpP0ApOliuW3u2vv%2F2XuqDyQDwixNw3okp0fJ8Shx5UgUCy1pnFd5Oveol68MNX90skGOqUBxmqxLIgQ%2B3djxsGLJtRGBuGexJbrlNjPkagd6Ep8WFk9gqvNFjmRk%2Bjz%2Fs%2B4oaZ5tJ4YBfTZBo77b35lbabmmO7yrZEv0WdLznqpiQUZo82afeqf7TqnDziw6NE13Y8bPgxVN%2BU0s9dMc%2FObzE7TOspdOP7pSAlUvo8U2Hc6Qd3Mf2ummuMI6iCq7AbCRoBmamIoVo7eBwJDX9b3R5IEfgNPw4kR&X-Amz-Signature=0542c9e5a79835c78b3f69b5399dcc4d3b82a10e9b07d6906f81b119c81b6bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCQRLQBG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEt06tP6baStBe467SnZN1Gq49hV0Nc3nXuZw8bOhgpFAiEA1B2Iq%2Fc7m1dm%2BC%2FDCmJCMpGD6I18i5pO9oUZ6rGZoxQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWOpdjY%2Ftt9xsNlhyrcA5%2FemUE7ktg5m5Lhd10cbnq7vtU3utKiCDJuJd0xS7cotOFiajZBzHx5Crp06yo89ccmoJ3bHUF%2B3keaILw7MIsAUS87rcrRmTaPMN26Zhdy2CmrQXP59wFquPP%2BPIoh6NzcckvHNnmkqWWfecETJzLXroDtA87kF4W0s47mITv54eHTZJ%2B1tNcCNrTjjCrxm9HiY7cpD08RqZLGFJX40RLZOIJjUbRilkEwwu6R8ai%2BsPLixqGAAvFLZDixH7Gf92AZonjPFbKLCkcsX4ebwbHF58ZUMZSKKRwVpQUw2BUi6xlKYRJ04B62rKFetm1FjiGIekjUIomUtTXMfzyaH464XbH%2Fu84eqJyfsLMiWUljWV2wWz9g5xPE4Ze84sTy8d74024iHDz9qkMz93hf%2FPRqEbkGREU3BpbVWypN5ykYxvOZGhoPT9i9ZDStf3JqxrxCbsfU7JhFNL5uHWkkdgeyaz4Cr9kU91DiqOFc%2FMi9S2yBbDSYTPxPnQMgcbEJCXKuoKRLvojGJdNu77rYv%2FEv6YOYsqO7u6tF%2B4jhhazGvu%2BGLg6C%2FUDJSIEvZ0tRnpP0ApOliuW3u2vv%2F2XuqDyQDwixNw3okp0fJ8Shx5UgUCy1pnFd5Oveol68MNX90skGOqUBxmqxLIgQ%2B3djxsGLJtRGBuGexJbrlNjPkagd6Ep8WFk9gqvNFjmRk%2Bjz%2Fs%2B4oaZ5tJ4YBfTZBo77b35lbabmmO7yrZEv0WdLznqpiQUZo82afeqf7TqnDziw6NE13Y8bPgxVN%2BU0s9dMc%2FObzE7TOspdOP7pSAlUvo8U2Hc6Qd3Mf2ummuMI6iCq7AbCRoBmamIoVo7eBwJDX9b3R5IEfgNPw4kR&X-Amz-Signature=7a90483e22ae0b869ae01e62e98555dcfc1bbc44f62757fbc3097dfc1e8d67a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
