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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRWQTUNW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6iB%2BdkD2M7OwFX6M5%2F0FOxg8OwFpT%2B8GcybTyYrgX4AiEAsvWC0P5MbSkGsD1HQCPpekfRQisXl5UQllfzE9hDL8Eq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJuPqSRNheWMLiUjPyrcA3Oi%2BP0T5%2FvP8BHfDg6j7F9OmQGjVHqAVvw3Wt%2BEORzDCTtRUT5cysR2xhMqkCRA7HCB5gxuOOTKTNBO5xhpojQFOPmsmNQgZ5Xzb%2FEw3Z%2F3XLJuJO07JYAfkpdcf9LaYYoHHcTgEE84ltQHWt%2FHCsZcAW2ozbTflNOuCoXVs2k53a0H4TAxp5JABHpK%2BOabdpZj%2Fsdl7%2FZox0xoVSt82NiyF6JUEZ9u3luh2rOwxd9PPoSEXleDh0DEhkZlvbGYfSJi0MuVAkfz%2BCiODhf2NLuq8YXUeS6LjMhCV5w9cmrCiD7Gj9PAnx5jzJptzuVVNsIkt2f2VggnE4iBMgcS9WIPdIAcS%2BbJ%2FhRM1gxgO%2FhyA1ZZ0hLTMPt2hmdPT56V8R2X4AwvNl7En0qVeu3x8BZAWThclytR0FOs82Y7gtju3%2BSp630np154YnO4keJl3uhTNymBy7guWl2yNr4zY6L5h4K40C5P%2B530xtZgInFTeZwO89DrIpJ5R%2BhJD81P7RSpLFZPSIu5y2oix6yAdTtfjFb0%2FmZcwsx9mTdeP6K5qiLygrMdMulzhG71A%2Fxl1HEGWSTTHbgQhP7dDwDfipNmyUxD0qwbyUz17a%2Bce0jX45s9uLWpmwJHj%2FZmML7wy8kGOqUBRhUwasBhJpJGMGs67Gq7gDWcM2%2BlYdwXwUyFCa1%2BUuOK6p6m8ncBtRGJodGVKUD8DE5yZesc4rRO540%2BalvKgfToGHhunNi2gksnKUkVpKD0g0bNnUrtAjF1Rm8s5oIfZCyjU5w0NgAdo4Lk0sQwL%2Fgfq%2FYaa%2F6KoiZJDBduvXgGwfdyjTnkcEuYbt3scKCxg6o5xUhld%2FbXmSd641Hq99ZBIWpz&X-Amz-Signature=375ccc6b5cb2c9bad4e7ab10b9c52e35f21c715368415818c05657e321c4b18c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRWQTUNW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6iB%2BdkD2M7OwFX6M5%2F0FOxg8OwFpT%2B8GcybTyYrgX4AiEAsvWC0P5MbSkGsD1HQCPpekfRQisXl5UQllfzE9hDL8Eq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJuPqSRNheWMLiUjPyrcA3Oi%2BP0T5%2FvP8BHfDg6j7F9OmQGjVHqAVvw3Wt%2BEORzDCTtRUT5cysR2xhMqkCRA7HCB5gxuOOTKTNBO5xhpojQFOPmsmNQgZ5Xzb%2FEw3Z%2F3XLJuJO07JYAfkpdcf9LaYYoHHcTgEE84ltQHWt%2FHCsZcAW2ozbTflNOuCoXVs2k53a0H4TAxp5JABHpK%2BOabdpZj%2Fsdl7%2FZox0xoVSt82NiyF6JUEZ9u3luh2rOwxd9PPoSEXleDh0DEhkZlvbGYfSJi0MuVAkfz%2BCiODhf2NLuq8YXUeS6LjMhCV5w9cmrCiD7Gj9PAnx5jzJptzuVVNsIkt2f2VggnE4iBMgcS9WIPdIAcS%2BbJ%2FhRM1gxgO%2FhyA1ZZ0hLTMPt2hmdPT56V8R2X4AwvNl7En0qVeu3x8BZAWThclytR0FOs82Y7gtju3%2BSp630np154YnO4keJl3uhTNymBy7guWl2yNr4zY6L5h4K40C5P%2B530xtZgInFTeZwO89DrIpJ5R%2BhJD81P7RSpLFZPSIu5y2oix6yAdTtfjFb0%2FmZcwsx9mTdeP6K5qiLygrMdMulzhG71A%2Fxl1HEGWSTTHbgQhP7dDwDfipNmyUxD0qwbyUz17a%2Bce0jX45s9uLWpmwJHj%2FZmML7wy8kGOqUBRhUwasBhJpJGMGs67Gq7gDWcM2%2BlYdwXwUyFCa1%2BUuOK6p6m8ncBtRGJodGVKUD8DE5yZesc4rRO540%2BalvKgfToGHhunNi2gksnKUkVpKD0g0bNnUrtAjF1Rm8s5oIfZCyjU5w0NgAdo4Lk0sQwL%2Fgfq%2FYaa%2F6KoiZJDBduvXgGwfdyjTnkcEuYbt3scKCxg6o5xUhld%2FbXmSd641Hq99ZBIWpz&X-Amz-Signature=aafbf5f9e1b119bff91a1c05751a73ed0bed5e82289a9fcef24fce593abb90d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
