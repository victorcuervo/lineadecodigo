---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCXT3WJT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIB0vRFah%2BZMsXAEU4x%2BDFkMjQBxE7Hu2%2FE5XvhRWxEzPAiEA9h7ZAFXRT22FeELhJE6GHUcKhqrEN70VoYBUojfdObAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBx1qBqMzcT96xkdVircA2%2BT2wHyapBmjGQMKsrS4iwVRFAHtrM1LsFL52IHCWnirJwsEsgYMfbB7gCcHjdqLiipqa4iL7sb4AKWeOy8a8oiItzBfWp8E0I2WASDiIN5BnCVZY8peZaXlVy1CagvirP8V2SttPisbNhAh7PYWvxlg%2BIVRgYiEfe%2FUsklS%2F%2FwrAxuE18tfKAJet9vlGpOHzxy%2BS728suBSb%2BBuAmhUcXS1CDBP4pF%2F1YnuUnlLd4ePrJUSB7DuJuI5Vti6NdEZDwL0tijjgmCw6GPfq2oWY%2BNoYkTNK7c62ZTQnACNHxJgKEu%2B1MMslufeHw9S%2FCO4N86lO2U5DyzFcT2%2FVFVpnHu7AHrk%2FJObx6ZW5JM%2FN1%2FL1fYysw0i1m4S2gACv7lPTYnxOqwu4ws1IFFxUjzczEuadbSmYe0w5hHXv16KtNsMjefNTul6PElxGFLoB5K5gZLfLg%2BGCDr5bFAvYpXAYVVlUqGTajn0obC5%2BY7z3dKEXC6SPc2UA43ZpxtskUmdgoe6YZdbVNgkqvMF2qga8Ppjtp2G0pyEwNRFkwLLIUwiVl1i0%2BZSy4HiMCrPnTB2NcnXQJ8Y0lhI1LMN1NMgAzIjlqy478N8tAiJbTGaaeD33YgrY5yPxJqvGpBMPG0w8kGOqUBQhSmJUUY2kTb8XeuM42bTxH%2BXPJHibyqZvVliOynNog7qbrtj9v2I9L13b32Lz2%2F8RLrc%2BbIO4NE4XODXdD%2FVAyhFcHp9ZG1EhK4OZGX65peLq%2F14n7fwH2%2Bgdk3%2FSu8aQ%2B%2FxHXJMJmk1Ybz7v%2BEkcv6Lue3G5o1JVQhJGXYkfHsB1KOsS819T9bN%2FVYZ%2Fb4umHLKZ4ivpPlZT386QT7B03Xk8E8&X-Amz-Signature=72a0497a49391c70e89bbc6157fb812e10de76cd47f40ab8309332a82ab050d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCXT3WJT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIB0vRFah%2BZMsXAEU4x%2BDFkMjQBxE7Hu2%2FE5XvhRWxEzPAiEA9h7ZAFXRT22FeELhJE6GHUcKhqrEN70VoYBUojfdObAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBx1qBqMzcT96xkdVircA2%2BT2wHyapBmjGQMKsrS4iwVRFAHtrM1LsFL52IHCWnirJwsEsgYMfbB7gCcHjdqLiipqa4iL7sb4AKWeOy8a8oiItzBfWp8E0I2WASDiIN5BnCVZY8peZaXlVy1CagvirP8V2SttPisbNhAh7PYWvxlg%2BIVRgYiEfe%2FUsklS%2F%2FwrAxuE18tfKAJet9vlGpOHzxy%2BS728suBSb%2BBuAmhUcXS1CDBP4pF%2F1YnuUnlLd4ePrJUSB7DuJuI5Vti6NdEZDwL0tijjgmCw6GPfq2oWY%2BNoYkTNK7c62ZTQnACNHxJgKEu%2B1MMslufeHw9S%2FCO4N86lO2U5DyzFcT2%2FVFVpnHu7AHrk%2FJObx6ZW5JM%2FN1%2FL1fYysw0i1m4S2gACv7lPTYnxOqwu4ws1IFFxUjzczEuadbSmYe0w5hHXv16KtNsMjefNTul6PElxGFLoB5K5gZLfLg%2BGCDr5bFAvYpXAYVVlUqGTajn0obC5%2BY7z3dKEXC6SPc2UA43ZpxtskUmdgoe6YZdbVNgkqvMF2qga8Ppjtp2G0pyEwNRFkwLLIUwiVl1i0%2BZSy4HiMCrPnTB2NcnXQJ8Y0lhI1LMN1NMgAzIjlqy478N8tAiJbTGaaeD33YgrY5yPxJqvGpBMPG0w8kGOqUBQhSmJUUY2kTb8XeuM42bTxH%2BXPJHibyqZvVliOynNog7qbrtj9v2I9L13b32Lz2%2F8RLrc%2BbIO4NE4XODXdD%2FVAyhFcHp9ZG1EhK4OZGX65peLq%2F14n7fwH2%2Bgdk3%2FSu8aQ%2B%2FxHXJMJmk1Ybz7v%2BEkcv6Lue3G5o1JVQhJGXYkfHsB1KOsS819T9bN%2FVYZ%2Fb4umHLKZ4ivpPlZT386QT7B03Xk8E8&X-Amz-Signature=e939601928a7560f46d83acf8811e7e5ac5dfa48243eac8f49c95bb2b8b28fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
