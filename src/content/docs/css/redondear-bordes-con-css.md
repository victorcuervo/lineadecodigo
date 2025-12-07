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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7D6ES%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx4Hl%2F045iduAGu9ooMgBBz1BIdlmqQ1O230EjDmUQfwIhALzHA2TCqdT5pa1SqIP7dHki9oWzb%2BS%2B9mipGroZnWbNKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwclu7C2qNal7mQdcgq3APtbCk4Zg3XpFenJhNoD3phqqFopi6hDDV1lXACsaDEneQCCvy22A8D42jyK570%2BBWC3jDYGES%2FXNUKb3RVJDiz7lvzv9PSB7ssm9IKLlGOAEoeF%2FV1RJdN%2F4xCdyj2O0RaBPm5su%2F7euxLtw5yT%2B3V5E9ffO%2Bxcz3iz60dNDBifMMMCPWrXNlzChq7f%2B%2B1P9eUUdXU%2FdtP8GHs3W55pm8JFS0JwtodIzB7th4TTeVqupgmvUhICRjhTagYI1I8%2BXEPnnKZA4UH%2FpEEGMgr3o3hUXS3qh0vinLdPsKGSiWKIygum5dpOt6lN8xf3WgzUHA0Es2kTsMZYf%2FrQhkbY%2FvDV%2BakGM6LUqmVFQTmzTJWHEk23VPZDPm1Q1%2Ftotyu5sRoJleAiJKa%2Bb%2F5CsJcaQUm0fMSV1Ea8vwFjtSvFwgARJ9p%2FFNNO%2BF5QCYvcWeo6Alpzq9Nehqv1EEZ8X%2BvemIV7FwGtzgGmziMII9oSVAOKuIflwjFAIO87fd3QZdJnp5wD3jA3m3LcIF2%2FcfpTsbPnmzUHP%2F8XTdLqDYzOuu98v3paorL6V%2BGC4ETua0IrZCNEb7ySDt8brlY29L7TY1DZleT%2Bap003wotSwXKuAEtmI1I917bt9L%2BV66ZDD2oNTJBjqkAe6IQ1EcfDjBrpxIXMg6ipK6SekNYziEeU%2Bvs3iWS%2FpjvQ1jOvfeSnhJLmqIkw38LzV9u5rOZJO22o5y8o1m%2Fp6wR%2BZ3NtrdRFhq8onooJWM9EKTer2trLMycXbL9F892PaLrLZM1TSZxzBvAbMBxWCl8pVP8Gk35rO9sxeO9SjCXoFisYeQaAV0uYDfmUoZSqjhBLsWv%2BhDYCXgRK1hvi9jNI3g&X-Amz-Signature=daad06439ff2b5dbd2b2842e705eb0d9b3178c7271229a5909550fe07040bd55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7D6ES%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx4Hl%2F045iduAGu9ooMgBBz1BIdlmqQ1O230EjDmUQfwIhALzHA2TCqdT5pa1SqIP7dHki9oWzb%2BS%2B9mipGroZnWbNKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwclu7C2qNal7mQdcgq3APtbCk4Zg3XpFenJhNoD3phqqFopi6hDDV1lXACsaDEneQCCvy22A8D42jyK570%2BBWC3jDYGES%2FXNUKb3RVJDiz7lvzv9PSB7ssm9IKLlGOAEoeF%2FV1RJdN%2F4xCdyj2O0RaBPm5su%2F7euxLtw5yT%2B3V5E9ffO%2Bxcz3iz60dNDBifMMMCPWrXNlzChq7f%2B%2B1P9eUUdXU%2FdtP8GHs3W55pm8JFS0JwtodIzB7th4TTeVqupgmvUhICRjhTagYI1I8%2BXEPnnKZA4UH%2FpEEGMgr3o3hUXS3qh0vinLdPsKGSiWKIygum5dpOt6lN8xf3WgzUHA0Es2kTsMZYf%2FrQhkbY%2FvDV%2BakGM6LUqmVFQTmzTJWHEk23VPZDPm1Q1%2Ftotyu5sRoJleAiJKa%2Bb%2F5CsJcaQUm0fMSV1Ea8vwFjtSvFwgARJ9p%2FFNNO%2BF5QCYvcWeo6Alpzq9Nehqv1EEZ8X%2BvemIV7FwGtzgGmziMII9oSVAOKuIflwjFAIO87fd3QZdJnp5wD3jA3m3LcIF2%2FcfpTsbPnmzUHP%2F8XTdLqDYzOuu98v3paorL6V%2BGC4ETua0IrZCNEb7ySDt8brlY29L7TY1DZleT%2Bap003wotSwXKuAEtmI1I917bt9L%2BV66ZDD2oNTJBjqkAe6IQ1EcfDjBrpxIXMg6ipK6SekNYziEeU%2Bvs3iWS%2FpjvQ1jOvfeSnhJLmqIkw38LzV9u5rOZJO22o5y8o1m%2Fp6wR%2BZ3NtrdRFhq8onooJWM9EKTer2trLMycXbL9F892PaLrLZM1TSZxzBvAbMBxWCl8pVP8Gk35rO9sxeO9SjCXoFisYeQaAV0uYDfmUoZSqjhBLsWv%2BhDYCXgRK1hvi9jNI3g&X-Amz-Signature=c0599679d46bd38c8303c42b8bd5ae85ba3d0177fd266b91efb93ebe6d578937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
