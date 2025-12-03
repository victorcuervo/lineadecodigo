---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QECKUF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDZXVFvyzoSkEp8oOBz%2F6S3KK3433dILiKjTPbs5VlDbAiAmA6mJBKGIQ1Gwaj%2BNVS%2BZ8WHe8QVLBnsBYj8BWIM%2B0yr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMFVafo2EsGPk%2FKLMmKtwD%2BeLYw8PlRLaNz%2FEUXWFZUAQHqiXXeQtlT8BGCyldwo2UF7LA8j7RqiV5u1owrfCiEyBpfEHYQHTY8v64gQ4CdJJm4zxlNgS5ze9Y31XmLnoYwt1jWH5Ue%2B2pD6feT4QwrLpteFlRAJ6QWcirfLqCX1riMt%2Bmkeokyy93xD9fuidMHTxCsHGAA%2F4RoYlCdZPeRSs6SNgGpmyDGYwJ172%2FAji8hzfFVRJ72%2FLr2qhwuWm8477r22rsptsDigMXKxnF6dVvxAaQQ%2FyTfVVjovOKnYBmX5k4hm%2BSSgZFBVeZlXavHOG4PiitYI6zJyXVS04wh0%2B9kcIX5a4xWPp08307gK3VW0H2OCovcHxnW90B7d6eM1yiIULsy60kT6MaI0txEas6%2B2ODTxJauTgwUMS%2FRf7QwHJKnVsS%2BGZqP07xgFDuGYwcAuMBhcQG2dNOaLIxsWp3%2B5r7hf4bzm4%2FxmSZxhlEnoUKbGHUhLf6T6t7PVZ20ZE9RRXqIE12aFOLfkSBLdSj2%2FU4hiTTJ1ljqsqx02Tbz6M%2B9PldUbGFuJ5f1xRIzTvyrrlnFetFKRzbMrHEiuDE0aO88zaXELxJMVhdZziEuTauQm6FPF14tRNS0aaGRG9U%2Ffvf2aEahJwwpr3CyQY6pgFEOvV0d%2FIvinKw%2FdmRrCghYhiVilNQrU5gAmIHcyFZSQgOegopMIN4wGuGGJ3ITDVnxH5y52x%2BUyEpSvs1%2BXvlEDTH3ocJYF4S4JdCxsVu%2Bp%2FMcm69%2FHkBsjNweYwkVhxCubMnGCDa2lcmMputhdoZ2iSvNQKj%2BPJNDHDB7RWkBwp4X%2FxowJj9gqYa5hE6%2FfvuZglfey1YDWh9qyXpYOszdiOWPvGb&X-Amz-Signature=2436d4e14cb48122f5cc5738ebd539b2372bf120e8ad9cfb752927a78ae4211f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QECKUF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDZXVFvyzoSkEp8oOBz%2F6S3KK3433dILiKjTPbs5VlDbAiAmA6mJBKGIQ1Gwaj%2BNVS%2BZ8WHe8QVLBnsBYj8BWIM%2B0yr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMFVafo2EsGPk%2FKLMmKtwD%2BeLYw8PlRLaNz%2FEUXWFZUAQHqiXXeQtlT8BGCyldwo2UF7LA8j7RqiV5u1owrfCiEyBpfEHYQHTY8v64gQ4CdJJm4zxlNgS5ze9Y31XmLnoYwt1jWH5Ue%2B2pD6feT4QwrLpteFlRAJ6QWcirfLqCX1riMt%2Bmkeokyy93xD9fuidMHTxCsHGAA%2F4RoYlCdZPeRSs6SNgGpmyDGYwJ172%2FAji8hzfFVRJ72%2FLr2qhwuWm8477r22rsptsDigMXKxnF6dVvxAaQQ%2FyTfVVjovOKnYBmX5k4hm%2BSSgZFBVeZlXavHOG4PiitYI6zJyXVS04wh0%2B9kcIX5a4xWPp08307gK3VW0H2OCovcHxnW90B7d6eM1yiIULsy60kT6MaI0txEas6%2B2ODTxJauTgwUMS%2FRf7QwHJKnVsS%2BGZqP07xgFDuGYwcAuMBhcQG2dNOaLIxsWp3%2B5r7hf4bzm4%2FxmSZxhlEnoUKbGHUhLf6T6t7PVZ20ZE9RRXqIE12aFOLfkSBLdSj2%2FU4hiTTJ1ljqsqx02Tbz6M%2B9PldUbGFuJ5f1xRIzTvyrrlnFetFKRzbMrHEiuDE0aO88zaXELxJMVhdZziEuTauQm6FPF14tRNS0aaGRG9U%2Ffvf2aEahJwwpr3CyQY6pgFEOvV0d%2FIvinKw%2FdmRrCghYhiVilNQrU5gAmIHcyFZSQgOegopMIN4wGuGGJ3ITDVnxH5y52x%2BUyEpSvs1%2BXvlEDTH3ocJYF4S4JdCxsVu%2Bp%2FMcm69%2FHkBsjNweYwkVhxCubMnGCDa2lcmMputhdoZ2iSvNQKj%2BPJNDHDB7RWkBwp4X%2FxowJj9gqYa5hE6%2FfvuZglfey1YDWh9qyXpYOszdiOWPvGb&X-Amz-Signature=edd9615628c2aef85a881f3a403a8d79ed7ac0080b0441bfbca68273e175502f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
