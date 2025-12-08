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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26VAV46%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDfAPbWhtnEyOSzBAJgyH4d7bE2Sfh0yyzI3g9dBRSoAiEA0MLG8Y1QuoD%2B574bmKeWmD5rwAaaAz7Z9pjcUvzsFTcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBplQwaL767Q%2FdF9RCrcA5Ykn3nThfm4vgEoNu7dIbOEcJ%2B5%2FOFi0wgImCc%2FgQDV29MsBkFFO8nFCvXSy%2Bq4fQfXwkvKAat2OrPD7l1YPlxWLdo1eepupuR2ALJN5iJYDt26xYk21kCZj829abDzI8ppo523P83I1P1t72YSkTMO3wuCEQmFla182fMHvIRuBLvyhpsbZFzVTayHLupdJqq7v02jmyiJERNFF5AN%2BmGjSsKQXc534wGSKfdhQs%2BUKgK7o%2Bu2CIcCX3zhOCtfuvjMF4MCg3p8Gz92W05usm%2B6yVo4zv4dLI89Z%2FgEpNrh%2F3OnT5t%2BP9ujLbuswJmP4AEC9sC99C7f6WTApk5bBoRviQ2uJfKgekHvub6tqbO6dOSwmpuI6E57i72VSxqJsN9oyEEG%2Bt27RxJifBLOCd%2FbpoW%2ButkY04zVcrMzOKtY%2FF5KuqutL0BTgaPDIsxrw3u3WlidodVGtamUbWdiK36khcqzk3wmY%2FvWY0YTLmgLyRS3PzLFiPouTCZ0XsSu7SxEYBzJRmuNCBVzzvWLZeaNK2j5EHXH%2FA5xyNVT%2Bl70HAItyunSimSFKvbT7m%2BdjMmBD4oqLkQ06KtEG%2FX4iCm0dBCKpATdoqg1Hbd3O1FE%2B3BEj%2F8nTQLdIwtFMIeH3MkGOqUBUAA%2FmF4UDcZ5xXYNnRFobj6K2ppU4HwEZkFGRV%2BF6GdVYYD3eh4%2Fte8HV0qF5oqLnaX3kulPgvLZwFEUCwhmBmw1IMFlUxVHCVarr3w9y%2B1mCR0Cr9G%2FgbPsptn5yAM5PGpo%2Fzm%2BJqMZ42kzyp8UiBwGMvcRE0GR9LoGWnDWWFR%2BaqMx4qrI7NuXqDjRu2HP8Dxn2X%2Bmpoizr25fdqTV8FdZAcjY&X-Amz-Signature=d03007e6244ceb7b478914d0208ccdd5bd8c8533905b0190cf6c89e94fc9db6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26VAV46%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDfAPbWhtnEyOSzBAJgyH4d7bE2Sfh0yyzI3g9dBRSoAiEA0MLG8Y1QuoD%2B574bmKeWmD5rwAaaAz7Z9pjcUvzsFTcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBplQwaL767Q%2FdF9RCrcA5Ykn3nThfm4vgEoNu7dIbOEcJ%2B5%2FOFi0wgImCc%2FgQDV29MsBkFFO8nFCvXSy%2Bq4fQfXwkvKAat2OrPD7l1YPlxWLdo1eepupuR2ALJN5iJYDt26xYk21kCZj829abDzI8ppo523P83I1P1t72YSkTMO3wuCEQmFla182fMHvIRuBLvyhpsbZFzVTayHLupdJqq7v02jmyiJERNFF5AN%2BmGjSsKQXc534wGSKfdhQs%2BUKgK7o%2Bu2CIcCX3zhOCtfuvjMF4MCg3p8Gz92W05usm%2B6yVo4zv4dLI89Z%2FgEpNrh%2F3OnT5t%2BP9ujLbuswJmP4AEC9sC99C7f6WTApk5bBoRviQ2uJfKgekHvub6tqbO6dOSwmpuI6E57i72VSxqJsN9oyEEG%2Bt27RxJifBLOCd%2FbpoW%2ButkY04zVcrMzOKtY%2FF5KuqutL0BTgaPDIsxrw3u3WlidodVGtamUbWdiK36khcqzk3wmY%2FvWY0YTLmgLyRS3PzLFiPouTCZ0XsSu7SxEYBzJRmuNCBVzzvWLZeaNK2j5EHXH%2FA5xyNVT%2Bl70HAItyunSimSFKvbT7m%2BdjMmBD4oqLkQ06KtEG%2FX4iCm0dBCKpATdoqg1Hbd3O1FE%2B3BEj%2F8nTQLdIwtFMIeH3MkGOqUBUAA%2FmF4UDcZ5xXYNnRFobj6K2ppU4HwEZkFGRV%2BF6GdVYYD3eh4%2Fte8HV0qF5oqLnaX3kulPgvLZwFEUCwhmBmw1IMFlUxVHCVarr3w9y%2B1mCR0Cr9G%2FgbPsptn5yAM5PGpo%2Fzm%2BJqMZ42kzyp8UiBwGMvcRE0GR9LoGWnDWWFR%2BaqMx4qrI7NuXqDjRu2HP8Dxn2X%2Bmpoizr25fdqTV8FdZAcjY&X-Amz-Signature=23eeed5920b0e5a4c210d367bdfc9450472985fa8f5974bdbf74fe6fdcef5488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
