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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCS4SPI6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfiQh%2BZjLh6i41B9t66Hs1RDg9o7V2PXRzhz9iOfdTVAiEA1mN%2BqlWoArLW8A%2BBeTi%2F6v8xQesklOThxELlXijHCfUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhoAuEulJyFC8cM6ircA3eVqH7WdKV1knGB0eKqIqOZ5yPnytn%2FG8hD1ToM9Dzr2HolN1K1cqUDIltTesygS98W%2B94elyrGuwGoVQSGdAgxviob0Rncu1s01qPu3JEZ6IGhvKtmAYaBsjLQJi6YDbyGnlQB2XKV5ep%2BmDu1HkNM74g60ETJgqm4Kaz6zk%2F8W3ybPGOF5mOtxUlgAVRAWGT7H3gq5Pw0zeGeuaDAs%2BLVFwx%2FIhZm0aTCI3sd8dsUWLpa7lBCr93mkgZl%2Bx6xQvtYGbiHTl%2BhM4DEZ%2FiV537v6YZJo518BKjEQHcotZrs1G%2F4U0%2FVDzZ%2Bm71v4LZW6rIh0lpVbPGuYq2zwvC5KRnfZDkCYoO%2Fp3x4wcJv19dP9CwIT5872RfBBadenBgorif2JujmOBtIacsPXW5svD2fmbgf2NdwCiBy66e%2Bapu9KkGMmuPGfPlVzIOeh%2B1OlnG85qKP6oEadG823xC%2BkW0p3CROOxzwHHoxFW5WmL9PQK5ZLKPGBuAA0pw09AYF1cjUG0hFfjjpLKrow3mq5XuBmbitS7mMBgaPm8Y9sWKZFKm3z2egNT7bH35qg%2BxkrlpiJEFwFc%2Fc9l4LWNSowsNXgAXNwUkLrtT3RlDn5nngPX5SyDlAUZOasLN6MO6U2ckGOqUBsM2tYI6K25OHFlkIwNTR7bYmvA3pU9GK3JGKkfQDjTMpJqLAr96izyuJ0Z2emhrVUTFNYJWzvnkX9D9%2FF5mphDy%2Fq5AJGQ8FcZ6fK5WcTV1jPSlPO3Xwi7OgIRJuu1doZonNIRtd1qRbbsHolm95fXxdtIRNtqHccJHKBh%2BiJEVQN1JIsR1qBKdK7B6S6vhzQI4R90K0%2BJQsHDYaLTkbhwOW1k0y&X-Amz-Signature=e11ef62718ffe949b0f6e415065d49b916901c846324341f9141886d580a712b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCS4SPI6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfiQh%2BZjLh6i41B9t66Hs1RDg9o7V2PXRzhz9iOfdTVAiEA1mN%2BqlWoArLW8A%2BBeTi%2F6v8xQesklOThxELlXijHCfUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhoAuEulJyFC8cM6ircA3eVqH7WdKV1knGB0eKqIqOZ5yPnytn%2FG8hD1ToM9Dzr2HolN1K1cqUDIltTesygS98W%2B94elyrGuwGoVQSGdAgxviob0Rncu1s01qPu3JEZ6IGhvKtmAYaBsjLQJi6YDbyGnlQB2XKV5ep%2BmDu1HkNM74g60ETJgqm4Kaz6zk%2F8W3ybPGOF5mOtxUlgAVRAWGT7H3gq5Pw0zeGeuaDAs%2BLVFwx%2FIhZm0aTCI3sd8dsUWLpa7lBCr93mkgZl%2Bx6xQvtYGbiHTl%2BhM4DEZ%2FiV537v6YZJo518BKjEQHcotZrs1G%2F4U0%2FVDzZ%2Bm71v4LZW6rIh0lpVbPGuYq2zwvC5KRnfZDkCYoO%2Fp3x4wcJv19dP9CwIT5872RfBBadenBgorif2JujmOBtIacsPXW5svD2fmbgf2NdwCiBy66e%2Bapu9KkGMmuPGfPlVzIOeh%2B1OlnG85qKP6oEadG823xC%2BkW0p3CROOxzwHHoxFW5WmL9PQK5ZLKPGBuAA0pw09AYF1cjUG0hFfjjpLKrow3mq5XuBmbitS7mMBgaPm8Y9sWKZFKm3z2egNT7bH35qg%2BxkrlpiJEFwFc%2Fc9l4LWNSowsNXgAXNwUkLrtT3RlDn5nngPX5SyDlAUZOasLN6MO6U2ckGOqUBsM2tYI6K25OHFlkIwNTR7bYmvA3pU9GK3JGKkfQDjTMpJqLAr96izyuJ0Z2emhrVUTFNYJWzvnkX9D9%2FF5mphDy%2Fq5AJGQ8FcZ6fK5WcTV1jPSlPO3Xwi7OgIRJuu1doZonNIRtd1qRbbsHolm95fXxdtIRNtqHccJHKBh%2BiJEVQN1JIsR1qBKdK7B6S6vhzQI4R90K0%2BJQsHDYaLTkbhwOW1k0y&X-Amz-Signature=0f90e61115cc64febcea36796f07ab636eae74752f924a7ca4280bc32162f28f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
