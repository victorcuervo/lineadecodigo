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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AEIPRHK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOgNmigj8huATuVOTUDwZM4J8SHp0CWKfkqwb%2F46m92AiAqRQ9iU%2F5Sza85czp2jyjtTCHCDH5COLJP%2Fr%2BfCcpMqyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMn5TdVHgNMmJ%2Bc4TdKtwDmOXk4pQldVTg044Ob7S0nxgG788ry7hfRR1pgqOoKmIuspsf9f5QJ26SQ5xInFHDTkDnPGPsVT9IwAzrJNJ2sNIVhQC%2FWjr0T20cx8SXCUvzQ0tdsDnFzgxCAlgZCKq%2Ft4U%2B4kNWQMnVvK9%2F67Wmeh%2FZnuJlfWhIfv2CfElKiIep7w4OHryB8WVoMgvv8U%2FKNibNHh05pqr9kkK6M9jyX7b%2Fbl8AAh98nNSjoqtJAPhlLM0y1wAsvAeyWH8vnUMWKsN9rSOe4mza%2FHkrkqhLMrzHaJq2KJWWzdV0lwmnysvx56kf%2Fm2RPo0cz5YE4RGtNM9ratEUU1pPIyoRUt0E9N%2FscQoRZMQFexTDvC23RK%2BOeGBB52tUsyVvCOqKfDO8wzUl%2FUWL%2FmjSkJu8rrtAjeX7MM5K7mrsjNSMRFzqglJcfvJONyCAkuzSn3Aft6bj9BzBJif8%2FdJlyZLIRSurTrX5CWMARfmJWHDmHApwAUa0zskgizxisj47fvdd%2BtsuetdW1WndNOtuFU993RBuigb%2FUXqIwGABlrq%2FXdMXe%2BPzvGzKMWp4SeGsj1kQELxiJWNxZlfCD7RteJrkqV%2BhfPQGXYJfvM5%2BTeevZt7KUtfBSrEZsYgsrcwcvl0wwvuHygY6pgGyngOrvBZT02jDJm0N2X47IjQWkt7AhFnwyJGsH5HwTmUKM73C5RXaeteEFg%2BsAB9xw1wc1qHQz3C6MHytITQ9lzXvL%2BzTdaWdzr3L36Cg%2FUpRFN5z3qyQ%2B1M404b6nGTx4v4VSIpqalIXXos%2BGXKYph%2B%2FREpTnwHoNEkz4YKCkdSKK6j3f9W6plKRpNg5LDtdAK%2Fkc6ibtr7twTlWUIuxRL3wODZw&X-Amz-Signature=bb18d4455c6574a8b15fe10eb2fa5dcd123b2a9b5bd7b272266cc878d3aeb6e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AEIPRHK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOgNmigj8huATuVOTUDwZM4J8SHp0CWKfkqwb%2F46m92AiAqRQ9iU%2F5Sza85czp2jyjtTCHCDH5COLJP%2Fr%2BfCcpMqyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMn5TdVHgNMmJ%2Bc4TdKtwDmOXk4pQldVTg044Ob7S0nxgG788ry7hfRR1pgqOoKmIuspsf9f5QJ26SQ5xInFHDTkDnPGPsVT9IwAzrJNJ2sNIVhQC%2FWjr0T20cx8SXCUvzQ0tdsDnFzgxCAlgZCKq%2Ft4U%2B4kNWQMnVvK9%2F67Wmeh%2FZnuJlfWhIfv2CfElKiIep7w4OHryB8WVoMgvv8U%2FKNibNHh05pqr9kkK6M9jyX7b%2Fbl8AAh98nNSjoqtJAPhlLM0y1wAsvAeyWH8vnUMWKsN9rSOe4mza%2FHkrkqhLMrzHaJq2KJWWzdV0lwmnysvx56kf%2Fm2RPo0cz5YE4RGtNM9ratEUU1pPIyoRUt0E9N%2FscQoRZMQFexTDvC23RK%2BOeGBB52tUsyVvCOqKfDO8wzUl%2FUWL%2FmjSkJu8rrtAjeX7MM5K7mrsjNSMRFzqglJcfvJONyCAkuzSn3Aft6bj9BzBJif8%2FdJlyZLIRSurTrX5CWMARfmJWHDmHApwAUa0zskgizxisj47fvdd%2BtsuetdW1WndNOtuFU993RBuigb%2FUXqIwGABlrq%2FXdMXe%2BPzvGzKMWp4SeGsj1kQELxiJWNxZlfCD7RteJrkqV%2BhfPQGXYJfvM5%2BTeevZt7KUtfBSrEZsYgsrcwcvl0wwvuHygY6pgGyngOrvBZT02jDJm0N2X47IjQWkt7AhFnwyJGsH5HwTmUKM73C5RXaeteEFg%2BsAB9xw1wc1qHQz3C6MHytITQ9lzXvL%2BzTdaWdzr3L36Cg%2FUpRFN5z3qyQ%2B1M404b6nGTx4v4VSIpqalIXXos%2BGXKYph%2B%2FREpTnwHoNEkz4YKCkdSKK6j3f9W6plKRpNg5LDtdAK%2Fkc6ibtr7twTlWUIuxRL3wODZw&X-Amz-Signature=54576df83b48775bca62786ebebc324ca95c089f0b0dabf1a2d26cd85fc053b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
