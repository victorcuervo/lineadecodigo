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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKIJH3FL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMvNzbkNBgjsDpTY3PKnZguxJvumvWRHIBnleKBVcZCAiEArSv4bg09hFbazjiEnJss7rQPu%2B%2FmRoyiI4k7lMEtllQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJnbisAYgWE%2BAbczQSrcA21SRD75N8wmfaQhjaRu%2BoY50VIdQ0kHztzXKYzGEj09p9TUBpC6ZTcyh3LQKE9ZCmQ71uPCxCX%2FkmcfMObLdISnJqKgCk2%2FCIn4ALw5OizetTAA3ibX1bggZ7D36zLQuel09VPnfn5bVwFwTlAvtW%2BBfaL4Qlm0hrLtqlXd9V%2F3p3wbbhztmr7DThO%2FLMC7uuHwYrZ%2FsP6txbWrqPW2UtIZl8gt26NjuboNp1u23GHPZhBNvrxvoI%2BeIr%2FWKzFfbtx5lFK8VgWzNTj1ppij35%2Fl7GVYSanFPJEo4dDICTJq9GZOq8ttS110mFRuJjHUiUb5HjFDwpaWiKnLjb3JEbblOIEscQuiQNV1VJRtZSjtB2iXaGKqB0xubdckdG2FDmt9MbGCbSrnEfG%2F2TN4l4S0W86D5SxgnWLW2xPTrdpcDBpEzofrCc5TevSRFarBXRHXL6kVslhlKiaiA1DpnJ8xtS44XaEPxGx2qzSZ3IPUDvoZsnDRLpFisLyRIS%2BurimyHbexPK7jUj6Qd2cN25mYKzN2E%2BXoDA%2B1qIrUNqKY6IF29FvHNiijL8E2gDcb0wYyOtbdZtGrJ53m1o7krB%2F2cWFdqj2%2FUmjxoTxsmAeHMw6WGUaxa%2B%2BSh125MJLSicoGOqUBbWSSlKfQ6uR0KLA9c3cCcAmBb9OLeX0CG2ZRqfxIMvr1UGEAAxe1rMz4RgCHYNi3NeVVIFa4N35HVaz2i%2BZAd0K9ljAd0FmISthMK0pOMsScH7S2gfuf4pSF10cqsOttw2AsYBUrMZUvjjFkn4Y9AQfx44O9KPaX6WRdCo79FZ7%2F%2FixasynmWpLEDp51Fpk4OgSVzFmDSLW2b9lCOncVtCWm3NGp&X-Amz-Signature=b44ed2e54fa9296939a41984c7319d2ad2fc9d251c97f25997802ee5abb42e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKIJH3FL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMvNzbkNBgjsDpTY3PKnZguxJvumvWRHIBnleKBVcZCAiEArSv4bg09hFbazjiEnJss7rQPu%2B%2FmRoyiI4k7lMEtllQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJnbisAYgWE%2BAbczQSrcA21SRD75N8wmfaQhjaRu%2BoY50VIdQ0kHztzXKYzGEj09p9TUBpC6ZTcyh3LQKE9ZCmQ71uPCxCX%2FkmcfMObLdISnJqKgCk2%2FCIn4ALw5OizetTAA3ibX1bggZ7D36zLQuel09VPnfn5bVwFwTlAvtW%2BBfaL4Qlm0hrLtqlXd9V%2F3p3wbbhztmr7DThO%2FLMC7uuHwYrZ%2FsP6txbWrqPW2UtIZl8gt26NjuboNp1u23GHPZhBNvrxvoI%2BeIr%2FWKzFfbtx5lFK8VgWzNTj1ppij35%2Fl7GVYSanFPJEo4dDICTJq9GZOq8ttS110mFRuJjHUiUb5HjFDwpaWiKnLjb3JEbblOIEscQuiQNV1VJRtZSjtB2iXaGKqB0xubdckdG2FDmt9MbGCbSrnEfG%2F2TN4l4S0W86D5SxgnWLW2xPTrdpcDBpEzofrCc5TevSRFarBXRHXL6kVslhlKiaiA1DpnJ8xtS44XaEPxGx2qzSZ3IPUDvoZsnDRLpFisLyRIS%2BurimyHbexPK7jUj6Qd2cN25mYKzN2E%2BXoDA%2B1qIrUNqKY6IF29FvHNiijL8E2gDcb0wYyOtbdZtGrJ53m1o7krB%2F2cWFdqj2%2FUmjxoTxsmAeHMw6WGUaxa%2B%2BSh125MJLSicoGOqUBbWSSlKfQ6uR0KLA9c3cCcAmBb9OLeX0CG2ZRqfxIMvr1UGEAAxe1rMz4RgCHYNi3NeVVIFa4N35HVaz2i%2BZAd0K9ljAd0FmISthMK0pOMsScH7S2gfuf4pSF10cqsOttw2AsYBUrMZUvjjFkn4Y9AQfx44O9KPaX6WRdCo79FZ7%2F%2FixasynmWpLEDp51Fpk4OgSVzFmDSLW2b9lCOncVtCWm3NGp&X-Amz-Signature=8baaa5a77d77f94aa85d894045b650376e997d8c43c2214bb979d8e93b848313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
