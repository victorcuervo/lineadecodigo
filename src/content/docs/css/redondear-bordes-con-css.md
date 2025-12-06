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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R655JJJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCxEmpM3OOuwQ8nbAX5YQtoESRneNZFWQCRF9grN7vBAiEAyXFEM9wyD0%2FgvB9yOtsAjvYmFQAoNMjNQ7x2qFczn2cq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNjGTTx0f%2F0Q2sF8SyrcA0x4n44P3weBh6oJ3%2FkJVsH25WTOzsRW%2FOb%2B7W7uOEdXSRq1NLMs86GerKaJBk63DidzTx5XLO5jWomNZQ2hJVnVLxTcT06V2CSkn6Pga0ff1PBSvQ8vrvcMwvacTJoA%2FfXxZXv4HPLFzZiPDc7WrCCfNbgrPySUjTWl55PD7ZgiIcrDrwOBmv1bpwoUGuBHO1T%2F267jSR5Z%2FxUYiyJPIvRhrctytpwOw%2FIdnf1nuaVwoeAnp8zIWsTZLMhkpTWFoPrAOBlrGa%2Bx%2FHQv1mg7XeM0lorh42FD0Q3C6WnndprFO907oxlMNWIPRB0fG%2Fvi%2BnqbZlfVVeWUsHTHC85yU47VYkJDm9tV96bF06qYt%2FYsew1zTedc%2F%2FZOEYi6gEaMK9t0PQCLxqs%2F0lOlS6y7mPBU4Kl1MKitJPFMK7%2BilnkfaAzJy9x91XcR%2FCziD9wfST92A6Q9dR1pa0wo7Uhhur3lBdTUKe3HdL4aAiYIsPbyOC4eYkdrKz%2Fr021f5HOcm4TE9RmBmfQszLvSas49mKKEVE%2BHoAh2LRG%2F48Z9KyC%2F7Lzou7GlgTHOYnBOBembQRV%2BbhLX4Ha%2FyhfilBtb5ekbHAKY%2BHwSlq184iztRU7fSdyrMvWQ55A%2FCXqXMN%2FD0ckGOqUBzXnWO%2Btd1GkH90N7u9Ws5uiZcGHyZmd5jdOko1R3Z4Rv1og1W%2B4w7ditP0SGS6D2jbUnhFTF6m9BDVVJXNj5wWyt%2FmgOP3iTqJekf76AlKu58RMBypanQ%2BV9gElon%2FPba%2B005yqvdpKMgCkwt0H32dnkgNs1Yt%2FJYZVhtHozKIPgI286i0lyZE8x5Jb36u7ZroZDa54E4mwIqZ7Eg3IkkDSOues8&X-Amz-Signature=1c3b6773ae91dcbc561dd8e0830921ac50af2dc491c8c16be99c9dcec023e0aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R655JJJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCxEmpM3OOuwQ8nbAX5YQtoESRneNZFWQCRF9grN7vBAiEAyXFEM9wyD0%2FgvB9yOtsAjvYmFQAoNMjNQ7x2qFczn2cq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNjGTTx0f%2F0Q2sF8SyrcA0x4n44P3weBh6oJ3%2FkJVsH25WTOzsRW%2FOb%2B7W7uOEdXSRq1NLMs86GerKaJBk63DidzTx5XLO5jWomNZQ2hJVnVLxTcT06V2CSkn6Pga0ff1PBSvQ8vrvcMwvacTJoA%2FfXxZXv4HPLFzZiPDc7WrCCfNbgrPySUjTWl55PD7ZgiIcrDrwOBmv1bpwoUGuBHO1T%2F267jSR5Z%2FxUYiyJPIvRhrctytpwOw%2FIdnf1nuaVwoeAnp8zIWsTZLMhkpTWFoPrAOBlrGa%2Bx%2FHQv1mg7XeM0lorh42FD0Q3C6WnndprFO907oxlMNWIPRB0fG%2Fvi%2BnqbZlfVVeWUsHTHC85yU47VYkJDm9tV96bF06qYt%2FYsew1zTedc%2F%2FZOEYi6gEaMK9t0PQCLxqs%2F0lOlS6y7mPBU4Kl1MKitJPFMK7%2BilnkfaAzJy9x91XcR%2FCziD9wfST92A6Q9dR1pa0wo7Uhhur3lBdTUKe3HdL4aAiYIsPbyOC4eYkdrKz%2Fr021f5HOcm4TE9RmBmfQszLvSas49mKKEVE%2BHoAh2LRG%2F48Z9KyC%2F7Lzou7GlgTHOYnBOBembQRV%2BbhLX4Ha%2FyhfilBtb5ekbHAKY%2BHwSlq184iztRU7fSdyrMvWQ55A%2FCXqXMN%2FD0ckGOqUBzXnWO%2Btd1GkH90N7u9Ws5uiZcGHyZmd5jdOko1R3Z4Rv1og1W%2B4w7ditP0SGS6D2jbUnhFTF6m9BDVVJXNj5wWyt%2FmgOP3iTqJekf76AlKu58RMBypanQ%2BV9gElon%2FPba%2B005yqvdpKMgCkwt0H32dnkgNs1Yt%2FJYZVhtHozKIPgI286i0lyZE8x5Jb36u7ZroZDa54E4mwIqZ7Eg3IkkDSOues8&X-Amz-Signature=59af4aa5238f9bfb396b978c334453d1ac1ee62c12e2a446ab80c10ed2e4a4df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
