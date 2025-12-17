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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSVL4WVA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3zWEJKvkquwuHjLbhEhLW2mj58BFvy3q%2BifXrif2z8QIgeSDEyf%2Fv4Ff1W6nImcZj2Uub0LZw5sGDzmgobDy41rwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDINXXEq5lxAZZ7dk%2BSrcA%2FJ31LM4gBDV5rs%2BZNp8rq%2B7rQEseVskJiBZ5bALJ5iE4z4fguFS92RJl%2BOB06y44RIAAheJqBYQv05F2ws5mCZrmL8OEERzaBJIY1m6d%2B3oHtISHQRH%2BF3d2kAICNBs3ITSh1Qr0o8eVpGddBD3dmcicUUWqMQMkEQwqidKQfFuUksTo3BqsqCQb4yB%2Beq9NWfE0%2BzM2%2BgMeB%2B6lusz%2ByVpKXQCmmJd3YZCrCzZIDBNuIeWxezqLO2CGhuQSjAIgs1ecRyl0VnnWSHY6kgOS7GHGT2BML8%2Fd2X2I2SNCTk%2FbQrKiB%2F1cIINImGQqlnKayyq5YiW8Ji49SJgULSBaxWnaQm5gq7ZhArTX9wslLcpNPzvaZpXJax%2F7kuIp5QOa8JS7UuuQVpgwHCC3wBXRu%2BVhaGcLTIuZdGRbvxl0iOtQEO3DcZEArGFa63dCYQPOdzfzRNG2Dye4vhJ9ejotB%2BBsWfGyhi676Qusf3gtrc3Yx3wB%2FpSamypBFWfERVu%2BBPVWQL0DQpwRqkzP9PSEvg051rCdNQuk%2BlWZKpzZHmyb6wOcxH2IgDgGE7epoyh%2Fk84xmRQcv0ddQeU8wDkl7E3%2Bow3rLGBKf2K%2FvPHQ%2FNheEq15Gld6f%2FzaGY1MO%2B3icoGOqUBSscqBFnvv7K74j6mTH8c80cXAE4Xxe0g8fbWtWsAzFIlfIP%2FLW%2BLwWRDGMiR%2FBHvvXOor%2BNc3JRy20s2K6s8U9ijrpqiflALfcILVIiNF%2BABavyfQH2HJlSAsFpPTO0GDZhAhQqJ%2Bj58Y38EJFHQ96nHJwggpJHfPX233zMJEUPdWEs%2BvjlSp1bMPbnerCKaPugpllD9%2F%2BH3xzs6ux7g3d%2Bkrewz&X-Amz-Signature=3a113e7ae523154f9a6247f55cb09152b6033100ae9e5ed8fd841ccc1ec180ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSVL4WVA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3zWEJKvkquwuHjLbhEhLW2mj58BFvy3q%2BifXrif2z8QIgeSDEyf%2Fv4Ff1W6nImcZj2Uub0LZw5sGDzmgobDy41rwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDINXXEq5lxAZZ7dk%2BSrcA%2FJ31LM4gBDV5rs%2BZNp8rq%2B7rQEseVskJiBZ5bALJ5iE4z4fguFS92RJl%2BOB06y44RIAAheJqBYQv05F2ws5mCZrmL8OEERzaBJIY1m6d%2B3oHtISHQRH%2BF3d2kAICNBs3ITSh1Qr0o8eVpGddBD3dmcicUUWqMQMkEQwqidKQfFuUksTo3BqsqCQb4yB%2Beq9NWfE0%2BzM2%2BgMeB%2B6lusz%2ByVpKXQCmmJd3YZCrCzZIDBNuIeWxezqLO2CGhuQSjAIgs1ecRyl0VnnWSHY6kgOS7GHGT2BML8%2Fd2X2I2SNCTk%2FbQrKiB%2F1cIINImGQqlnKayyq5YiW8Ji49SJgULSBaxWnaQm5gq7ZhArTX9wslLcpNPzvaZpXJax%2F7kuIp5QOa8JS7UuuQVpgwHCC3wBXRu%2BVhaGcLTIuZdGRbvxl0iOtQEO3DcZEArGFa63dCYQPOdzfzRNG2Dye4vhJ9ejotB%2BBsWfGyhi676Qusf3gtrc3Yx3wB%2FpSamypBFWfERVu%2BBPVWQL0DQpwRqkzP9PSEvg051rCdNQuk%2BlWZKpzZHmyb6wOcxH2IgDgGE7epoyh%2Fk84xmRQcv0ddQeU8wDkl7E3%2Bow3rLGBKf2K%2FvPHQ%2FNheEq15Gld6f%2FzaGY1MO%2B3icoGOqUBSscqBFnvv7K74j6mTH8c80cXAE4Xxe0g8fbWtWsAzFIlfIP%2FLW%2BLwWRDGMiR%2FBHvvXOor%2BNc3JRy20s2K6s8U9ijrpqiflALfcILVIiNF%2BABavyfQH2HJlSAsFpPTO0GDZhAhQqJ%2Bj58Y38EJFHQ96nHJwggpJHfPX233zMJEUPdWEs%2BvjlSp1bMPbnerCKaPugpllD9%2F%2BH3xzs6ux7g3d%2Bkrewz&X-Amz-Signature=de70e802f90495f71f2de1153ca8ce73ca7cf5625e849c4d6a5fbb74111a65c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
