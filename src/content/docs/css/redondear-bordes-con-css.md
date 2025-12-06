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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAIWINTG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuFRiD5j4WxYzw%2FpCNwp2xG0wUgzPt9w1OFjruuxkFBgIgKSm1fSvlM09DRzQVCr4iALYEN0Rm8El8I35RCMOx8Z4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAFzMWLnqCBcpcTUbSrcA5HXkSQoP1DmmudnY0T3eePliBMFb01imHmYKno883u0RFSZ1aYSxra9cg9nc3%2B55GYRo3WNZO1QfSQQTSvz7MgauDWat2UP9itME20KVYLQPrcjuP80HjwFZU23qCXI9RnuX2vHfhNXwKPk3aGW4rU8cwCCExOUdK1luRNeWDg42wVu4ijIYeLMeVtUG2YBQMTpafXqzhagCZFNwzCr3yVznwFoX1VCjiVHnBdTmjh0wMbmDsw9QICLzq9T5ZA6gYc6%2BDON6hJQ0XPDLpGDJHw64TS%2FsEAlEznIZDLuwgudDkolEKaac4W62p75pio59svxOsd2mM4LeBt1dz1inRhRYJdivqtWmRIJhbEM8omqOyuJ%2FYBt1SVq3Q0JqAUjIGDqYj8%2BFyPPdKoqrrr8%2FyfsP2081whpGxi%2F7RnwaFOQWeU0Ix2G02sTsGagcZKi%2F3wGEFGSOBL5gSKQvU%2FkLRoY33o7t%2BGCL8iSOteKhOxMoncWqken4smVJ6I%2FBfHkRtJSl%2Bz7GHS5PPVWnN8gN9w64muLoT8JsI72ev6Vxj9m3c3VHOaUv9R3QgyvvhTroaFp41%2Bu%2FhIszYCYx%2FCIpM0lvfbjXtr%2FmR79VxBrrnh9Nppguorg9fLiU00%2FMJXM0ckGOqUBlIOH4A%2B6Lj83wi4V7IfG%2BMASqVEL7jlQWRX%2FTRoDU1ESxlI1NMJ%2FdBF6rfT80Msa61fKrlMlmRK%2BoDwDkwAWPSFlwPF8FGCTbkD3gK%2BtIzkAWFECdellOhj2BuHJTQXZmIkgCHadWXk2xmO5HNZsNiTRsFIA9pV%2B4mts5CV3YqHFedGPkDhjQumBE%2BHygU89r6yymCEN7obw8pWvjILtyXZiF56u&X-Amz-Signature=6d1763363ca3e61c8d7dce846e90125d2390259621cf8e37fd2637b4938c2e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAIWINTG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuFRiD5j4WxYzw%2FpCNwp2xG0wUgzPt9w1OFjruuxkFBgIgKSm1fSvlM09DRzQVCr4iALYEN0Rm8El8I35RCMOx8Z4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAFzMWLnqCBcpcTUbSrcA5HXkSQoP1DmmudnY0T3eePliBMFb01imHmYKno883u0RFSZ1aYSxra9cg9nc3%2B55GYRo3WNZO1QfSQQTSvz7MgauDWat2UP9itME20KVYLQPrcjuP80HjwFZU23qCXI9RnuX2vHfhNXwKPk3aGW4rU8cwCCExOUdK1luRNeWDg42wVu4ijIYeLMeVtUG2YBQMTpafXqzhagCZFNwzCr3yVznwFoX1VCjiVHnBdTmjh0wMbmDsw9QICLzq9T5ZA6gYc6%2BDON6hJQ0XPDLpGDJHw64TS%2FsEAlEznIZDLuwgudDkolEKaac4W62p75pio59svxOsd2mM4LeBt1dz1inRhRYJdivqtWmRIJhbEM8omqOyuJ%2FYBt1SVq3Q0JqAUjIGDqYj8%2BFyPPdKoqrrr8%2FyfsP2081whpGxi%2F7RnwaFOQWeU0Ix2G02sTsGagcZKi%2F3wGEFGSOBL5gSKQvU%2FkLRoY33o7t%2BGCL8iSOteKhOxMoncWqken4smVJ6I%2FBfHkRtJSl%2Bz7GHS5PPVWnN8gN9w64muLoT8JsI72ev6Vxj9m3c3VHOaUv9R3QgyvvhTroaFp41%2Bu%2FhIszYCYx%2FCIpM0lvfbjXtr%2FmR79VxBrrnh9Nppguorg9fLiU00%2FMJXM0ckGOqUBlIOH4A%2B6Lj83wi4V7IfG%2BMASqVEL7jlQWRX%2FTRoDU1ESxlI1NMJ%2FdBF6rfT80Msa61fKrlMlmRK%2BoDwDkwAWPSFlwPF8FGCTbkD3gK%2BtIzkAWFECdellOhj2BuHJTQXZmIkgCHadWXk2xmO5HNZsNiTRsFIA9pV%2B4mts5CV3YqHFedGPkDhjQumBE%2BHygU89r6yymCEN7obw8pWvjILtyXZiF56u&X-Amz-Signature=f4cc6b2fbcd936d826fd281605fa6571aa5f30e273a3d3a9f3c78a813eae987d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
