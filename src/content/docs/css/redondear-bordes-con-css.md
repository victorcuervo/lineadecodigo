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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRNZSWXA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4BX%2F1zSM%2FkjJL2SN5Bdh%2FRSBDJ4m0jN%2F5BLzYiJo89gIhAOlCshQJL5JxbcEUuz9zIdDp76JZdwrnNOkh2zG6PHp2KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh3Q1wmC1BDe6BbgMq3AMmc9a6ho2kFOXEiX%2BwChae98ou9l3vZdSv7YBAc%2BQ448wLttAPKORPbETb97gSX78kmDfULNOVgrJqJM5Iw88LCo4sLaeeJ048xsfm%2BmF%2FJuxn4MvdsCjI2pe6zh1ykq77w9uGzaObLncebJuQt1e6qTNOWUlImzl5mwf6kgxcXhycVTGqrKOPV0a5oHTxW37sJVwVjaa1gplgHpH%2F82gLMPDcZjufQVWj5sRt3bZGlvABrtnJd1BTeibIB8QdWh6KU0Zo0uq%2F%2BFJf6oT%2FFbFgut%2BFP1K056FA%2FirXPxSITU0gten6G%2BtyWls3wSo843Gxnl95N4bcmBeaJeyB7yJyR9mXDIHJy8WmfXXVEZL%2FcHlKyQuT9NF1fodNOU6jp%2FnBeWksZo2psd9X%2B%2B2GLEGqNdfB5Y36r9wQhm%2BcJ4yxkzhvk19VpX%2BjIbkcRTMCl2BrIrZHz4%2FbpzHbFNYDUzEAU652CRBuBcsoIs1JNzcQOxxV32hOaXtyNycpllTwmJXKAJQOw9QjnQFLMme%2F9OBESmSnNLpO7YQNQ4CjWrRMyR7bkr5PP%2BQJj4MNlaAawFtt1ghE3k%2B5oHW%2FtAizQY8zxF5QbHlGhDdUe00R%2FEDSX2vxpEIbZjjuhKTwPTCv%2FtLJBjqkATHG34vGh4oHbKG3V5YD9yqmTx4kwV3tcyJQ7OBDQTBHiwbGJI4dIZgOLjJNBtdbcbfWdUvWfRCdIBcmd2JkPdZdTaQbFwS7YW5JNICdvIMGVjDtmLqZF7b5yE0QTLM7LN8%2Bs3QRlthKdnHQcSz0p5fmWj9cy9CTCiBmxBNHTiXix9oRX7ICHwFwcTZ0wtBzXAtARncjfG3qlFOdTMy7slrTC6Fn&X-Amz-Signature=c9a62087b49a58f85d9db12d409b1d1daf824a7b3ebf026603d21cc1f9966b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRNZSWXA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4BX%2F1zSM%2FkjJL2SN5Bdh%2FRSBDJ4m0jN%2F5BLzYiJo89gIhAOlCshQJL5JxbcEUuz9zIdDp76JZdwrnNOkh2zG6PHp2KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh3Q1wmC1BDe6BbgMq3AMmc9a6ho2kFOXEiX%2BwChae98ou9l3vZdSv7YBAc%2BQ448wLttAPKORPbETb97gSX78kmDfULNOVgrJqJM5Iw88LCo4sLaeeJ048xsfm%2BmF%2FJuxn4MvdsCjI2pe6zh1ykq77w9uGzaObLncebJuQt1e6qTNOWUlImzl5mwf6kgxcXhycVTGqrKOPV0a5oHTxW37sJVwVjaa1gplgHpH%2F82gLMPDcZjufQVWj5sRt3bZGlvABrtnJd1BTeibIB8QdWh6KU0Zo0uq%2F%2BFJf6oT%2FFbFgut%2BFP1K056FA%2FirXPxSITU0gten6G%2BtyWls3wSo843Gxnl95N4bcmBeaJeyB7yJyR9mXDIHJy8WmfXXVEZL%2FcHlKyQuT9NF1fodNOU6jp%2FnBeWksZo2psd9X%2B%2B2GLEGqNdfB5Y36r9wQhm%2BcJ4yxkzhvk19VpX%2BjIbkcRTMCl2BrIrZHz4%2FbpzHbFNYDUzEAU652CRBuBcsoIs1JNzcQOxxV32hOaXtyNycpllTwmJXKAJQOw9QjnQFLMme%2F9OBESmSnNLpO7YQNQ4CjWrRMyR7bkr5PP%2BQJj4MNlaAawFtt1ghE3k%2B5oHW%2FtAizQY8zxF5QbHlGhDdUe00R%2FEDSX2vxpEIbZjjuhKTwPTCv%2FtLJBjqkATHG34vGh4oHbKG3V5YD9yqmTx4kwV3tcyJQ7OBDQTBHiwbGJI4dIZgOLjJNBtdbcbfWdUvWfRCdIBcmd2JkPdZdTaQbFwS7YW5JNICdvIMGVjDtmLqZF7b5yE0QTLM7LN8%2Bs3QRlthKdnHQcSz0p5fmWj9cy9CTCiBmxBNHTiXix9oRX7ICHwFwcTZ0wtBzXAtARncjfG3qlFOdTMy7slrTC6Fn&X-Amz-Signature=41ebe34d22185993170b133b4a12f3cec25f299cf470c418c4753b290601466e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
