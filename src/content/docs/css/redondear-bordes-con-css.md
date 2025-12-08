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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJ5W4YQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGH7Mvre2f99mIgEhr7%2BeYtUajiMngPrZOrtkuRvhEfAIgA9IhDQRcL%2BJh1ngLcK7%2FlHu36X%2B1wpKqeINp4euXjNYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BiDaOHVX6cWSZnByrcA6AAx0WElo2kOUWsqpeyzfoAiec45gOVrwyU0WOZdguN0gOyJhW0EMhsvmPy9UXoxoljARiwFPcSjgDVn2JH9XFgWX%2Fz61dmbyFimNYCRsFVD%2Bts%2FD1ZF%2BLuNhzMuYMNvsneca0JBiHc%2FkrjtQLsnO8WjFR2%2B7zXMyIgy%2BJpR38Si7u0qUi6ALZ0vTQoqm8cDsl9awyLR1iAk9sy7G7sz4x7HxWCeDXv1DJfxjVO%2B7qi3MwhzxzMcOGt%2FVXpUzFtBCPBdp6MKOrsmql2c4VaNPA1xD8AND1qCuZD1W3%2FtjpoO0Cv2K4CQ1HNYEUv9m4vOnuFhEJG8znshBN255DtfWBLff%2BnHFwH30y4Vy9v3sWyeTKRQ%2BKZ7KE9k3nT9LZK8kCqhqQCgJAtToI6erCHBgw16xM3%2F1A%2BAjZOhX%2FT9IgALUJpNBKHYC8nmnfjNthOWndd4sxAqUPDjKNV87VhwcLGksRuHgsNhsu22%2Fvh4N%2B3wloyx4sI%2B6GPvW8WOv6acHG%2BKC%2BI9M9wBIxVNsdLZlstc%2BUkeLIH3KWD41xz2UhGlp421R4dMdR4mpqknMssG5pwzgmHU2a4Po5v%2Fcn4wBuewG%2BFxJ90zc4qBB7gjipZ%2BNoTUtM3Dz1gvqNBMOjQ2MkGOqUBcAVs62yugElkuJDUWWHXGsEMiij4ObSFTZ1HV5JY9Rx5fv1Y2ZK1RfdhTG5%2F62Q5sGbsbAh4lHinEvnDQr7zGv4xXQ0koYbV1peRl2qnR19g2EjBUDOEQWaD8TGGxVeXC5V8kiMmOzSbYoIzefD5aN785q2BE4%2FZxC1zNcjp0Kqt2f3IHlU8qPdZ6mHX%2BDtq4YZk9aTG7E2%2BV%2BCNHyPzjw1xkgfl&X-Amz-Signature=8375326539230a95820e548f8f9feafb45325fd12abed9e866254239b5386bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJ5W4YQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGH7Mvre2f99mIgEhr7%2BeYtUajiMngPrZOrtkuRvhEfAIgA9IhDQRcL%2BJh1ngLcK7%2FlHu36X%2B1wpKqeINp4euXjNYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BiDaOHVX6cWSZnByrcA6AAx0WElo2kOUWsqpeyzfoAiec45gOVrwyU0WOZdguN0gOyJhW0EMhsvmPy9UXoxoljARiwFPcSjgDVn2JH9XFgWX%2Fz61dmbyFimNYCRsFVD%2Bts%2FD1ZF%2BLuNhzMuYMNvsneca0JBiHc%2FkrjtQLsnO8WjFR2%2B7zXMyIgy%2BJpR38Si7u0qUi6ALZ0vTQoqm8cDsl9awyLR1iAk9sy7G7sz4x7HxWCeDXv1DJfxjVO%2B7qi3MwhzxzMcOGt%2FVXpUzFtBCPBdp6MKOrsmql2c4VaNPA1xD8AND1qCuZD1W3%2FtjpoO0Cv2K4CQ1HNYEUv9m4vOnuFhEJG8znshBN255DtfWBLff%2BnHFwH30y4Vy9v3sWyeTKRQ%2BKZ7KE9k3nT9LZK8kCqhqQCgJAtToI6erCHBgw16xM3%2F1A%2BAjZOhX%2FT9IgALUJpNBKHYC8nmnfjNthOWndd4sxAqUPDjKNV87VhwcLGksRuHgsNhsu22%2Fvh4N%2B3wloyx4sI%2B6GPvW8WOv6acHG%2BKC%2BI9M9wBIxVNsdLZlstc%2BUkeLIH3KWD41xz2UhGlp421R4dMdR4mpqknMssG5pwzgmHU2a4Po5v%2Fcn4wBuewG%2BFxJ90zc4qBB7gjipZ%2BNoTUtM3Dz1gvqNBMOjQ2MkGOqUBcAVs62yugElkuJDUWWHXGsEMiij4ObSFTZ1HV5JY9Rx5fv1Y2ZK1RfdhTG5%2F62Q5sGbsbAh4lHinEvnDQr7zGv4xXQ0koYbV1peRl2qnR19g2EjBUDOEQWaD8TGGxVeXC5V8kiMmOzSbYoIzefD5aN785q2BE4%2FZxC1zNcjp0Kqt2f3IHlU8qPdZ6mHX%2BDtq4YZk9aTG7E2%2BV%2BCNHyPzjw1xkgfl&X-Amz-Signature=d4451e7e32da1dac3504f3951985fc66f27f72a01e1d14cf8c7b423f72f4f476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
