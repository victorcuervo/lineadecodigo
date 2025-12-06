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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIXXXR25%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGuxkmtfZN8fpEQjyMcNQKPqv2rWqlLpg2B4cEt1tzdAiEA%2FyRJ6R5TTXPDtVxu4qtdEMPhJO6Ju6zbbf2WTNvXr2Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHyZG9j8XOzhMxsQ3CrcA4OL6VTNJFARxvfiPw70zIfpsfPdtTPywDSAY8Ueo%2BuU%2F4%2FQ1XZih6azq%2Fpxv%2F9RF92rwjZbxrnEWUuM3RCYg33bpVV%2FBerdOlgaaK%2FzaNOY9TUwqOR2NY5LMM60%2BT2NXiYr4z2FZA%2F28KFTbu9XnRjX%2BDhsqF4sUuYZE6qSJNeVsRdBeD8DbStWtmIN7lr5LC7Olf2bIg3MT6k0PsI23qbEoVMdYJ%2BePlY24zhPbGd7%2FxePLxmfiMrxydjHmfWCJ6kQ%2FtCYbAT4ZwQKz%2FaDG7Uv6bw0lJGrudl7bzYq9xR1djHkzpi4rps7B%2BqQ2HA%2FNSgg85qVVPbJJpeodEPxw8yb3d4NLRQ3Zsji17MI3%2BTp9s%2FgTZdECSosN7IYTpwV3mGD3N7%2FLkSEbWm7olOm2hUGZPBuUQtTmRij17W3UHT2sh%2BvYUVQI9VZfF0XhWvXNMa%2BakjvPe7w9wM%2FitV6yoeJbAD6QfnyMd%2BEnn%2BWt1DZLuQFE8SsII92ma%2B3pUknxJ4tffsse9JvLLbnbK7Q%2F8qVSwR4jvD2%2BbfyJe28bmvC0J2J9InqUOMR1Miatlsjb5p0Cyv8PIOMXjq17UQgqTLJu5h9CyoesymNQcVyiLPvaLNFfvCqZycvVcBqMPDG0ckGOqUB3PjAOIPmR2nm%2F3JxihP0GkEVlAyWkwm6sg6%2BhItvzLgRSyFwqaxakhc8V1NRLNF6TmE2mvbv3w4BQh3exJNX0wBVnM0JLIzKrvmzyAvEQRiEenm3BaFAKVcQs40rFwIouJ96joZmZN93bPXjlpiggdP9NYfUnM%2BXIrwLR7KYDy12N6dqjj%2Bevu%2FWkRdlkm9B%2BePPwkQZuOOpL6lrJ7KqugPO6qcG&X-Amz-Signature=5078f3007f0d81ade205500292645d5c71771125c08eea67f912da7883c5982d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIXXXR25%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGuxkmtfZN8fpEQjyMcNQKPqv2rWqlLpg2B4cEt1tzdAiEA%2FyRJ6R5TTXPDtVxu4qtdEMPhJO6Ju6zbbf2WTNvXr2Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHyZG9j8XOzhMxsQ3CrcA4OL6VTNJFARxvfiPw70zIfpsfPdtTPywDSAY8Ueo%2BuU%2F4%2FQ1XZih6azq%2Fpxv%2F9RF92rwjZbxrnEWUuM3RCYg33bpVV%2FBerdOlgaaK%2FzaNOY9TUwqOR2NY5LMM60%2BT2NXiYr4z2FZA%2F28KFTbu9XnRjX%2BDhsqF4sUuYZE6qSJNeVsRdBeD8DbStWtmIN7lr5LC7Olf2bIg3MT6k0PsI23qbEoVMdYJ%2BePlY24zhPbGd7%2FxePLxmfiMrxydjHmfWCJ6kQ%2FtCYbAT4ZwQKz%2FaDG7Uv6bw0lJGrudl7bzYq9xR1djHkzpi4rps7B%2BqQ2HA%2FNSgg85qVVPbJJpeodEPxw8yb3d4NLRQ3Zsji17MI3%2BTp9s%2FgTZdECSosN7IYTpwV3mGD3N7%2FLkSEbWm7olOm2hUGZPBuUQtTmRij17W3UHT2sh%2BvYUVQI9VZfF0XhWvXNMa%2BakjvPe7w9wM%2FitV6yoeJbAD6QfnyMd%2BEnn%2BWt1DZLuQFE8SsII92ma%2B3pUknxJ4tffsse9JvLLbnbK7Q%2F8qVSwR4jvD2%2BbfyJe28bmvC0J2J9InqUOMR1Miatlsjb5p0Cyv8PIOMXjq17UQgqTLJu5h9CyoesymNQcVyiLPvaLNFfvCqZycvVcBqMPDG0ckGOqUB3PjAOIPmR2nm%2F3JxihP0GkEVlAyWkwm6sg6%2BhItvzLgRSyFwqaxakhc8V1NRLNF6TmE2mvbv3w4BQh3exJNX0wBVnM0JLIzKrvmzyAvEQRiEenm3BaFAKVcQs40rFwIouJ96joZmZN93bPXjlpiggdP9NYfUnM%2BXIrwLR7KYDy12N6dqjj%2Bevu%2FWkRdlkm9B%2BePPwkQZuOOpL6lrJ7KqugPO6qcG&X-Amz-Signature=3a85b6c7e6c2c8dc3b283ed579c38bb0910b3f245f7860edbd98bbc13840c6e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
