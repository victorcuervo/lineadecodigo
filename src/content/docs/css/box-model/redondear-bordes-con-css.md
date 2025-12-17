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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4CJ7PTX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3x7HJ7Xog30y%2B56T03Xajl6QPH6QBw6kXSP2xK8p9%2FAiEA1Qrjr0AGYJnyjTQZwDbHmsnoEr8jNUrldEwxWT%2F%2Bw%2Foq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJhzj6R3Hyr0WMy7hSrcA43CIB3ZNsCSSI1cdqXak7oEtQpBt0796gqz5HkMnauvrWsONFnj5nuWoc0KhKrU2F7%2Bj1AMyh%2BKxayipVgHmFrkkQEBtaoC%2F13lHz9qkpbCEFlf2JCwkm6bOndLhTqcUAFrwn3lRd89amkdT3nYFVJkCivWe%2F5yJHBLXvwJ737bRBAGiPf3ilMFYBPfqliVLXD5dQmVhvrbuSCsETRVNP7SRQHSqK6coc3S8l0ssUBaXsMDnXsrT%2Br2up8aGGz5z3%2BLG0D0shBUbCxvK5lPt890qWp%2F7fhVfAS%2FuloRs2TxyFcSE0l13lVeyI7eTs4hEfiXYvWN0qZKiSx5x%2FseqBAWF7B98YbPPp8DBX3iWOJ2Cne4dTBqDobG0%2BP2LVNByp%2FAg83YBiKN6V3ZuQNxZafWbsk5vKzpLmg6pt7yswgUY4K2qnxk1r0BR8k2pff4pn4ArGmrQ8yEktY2vN2LwEFgobCnATrDvRIQg740kp5dfmqkQi2ah8%2B6OiL66IGqWVmG3Lv8oFN%2FztyiaFbL6W8pMnibNtXApropOWaHGVwEQZP3104Nzw2nIgiMAA%2FxkujwmmaTfsTjPmWQ0XOeeT%2FrW076%2BIGk1HhNncA%2F3zXJO3qddB0g4qVplhs7MPDFisoGOqUBgMMMpQOgHXmyUMwVFBo5vqdxq%2BEV5aJv1gevlNgO90Zsr9%2FEWPJlOd5hJ4EAiK2YCcPBX3RJbc6NGuH29kjFCaVz%2BmXtWFsmKiMskegJ5TxhiAl0FbKuWNZ8MjFoG51J2%2Ffyh%2FCad6mgVKmusPvtJKa6zh4q1i6VyfozdcxlSGntygX%2BAwxb8P%2Frto%2Fp%2FuIKjYNY9Fvv7HgK99ONwokfT%2Fg6N4qX&X-Amz-Signature=86ce413a38f99a4eb2f0646bd7dc3619b7eaf543fc22b523501c0aa99cbd3a43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4CJ7PTX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3x7HJ7Xog30y%2B56T03Xajl6QPH6QBw6kXSP2xK8p9%2FAiEA1Qrjr0AGYJnyjTQZwDbHmsnoEr8jNUrldEwxWT%2F%2Bw%2Foq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJhzj6R3Hyr0WMy7hSrcA43CIB3ZNsCSSI1cdqXak7oEtQpBt0796gqz5HkMnauvrWsONFnj5nuWoc0KhKrU2F7%2Bj1AMyh%2BKxayipVgHmFrkkQEBtaoC%2F13lHz9qkpbCEFlf2JCwkm6bOndLhTqcUAFrwn3lRd89amkdT3nYFVJkCivWe%2F5yJHBLXvwJ737bRBAGiPf3ilMFYBPfqliVLXD5dQmVhvrbuSCsETRVNP7SRQHSqK6coc3S8l0ssUBaXsMDnXsrT%2Br2up8aGGz5z3%2BLG0D0shBUbCxvK5lPt890qWp%2F7fhVfAS%2FuloRs2TxyFcSE0l13lVeyI7eTs4hEfiXYvWN0qZKiSx5x%2FseqBAWF7B98YbPPp8DBX3iWOJ2Cne4dTBqDobG0%2BP2LVNByp%2FAg83YBiKN6V3ZuQNxZafWbsk5vKzpLmg6pt7yswgUY4K2qnxk1r0BR8k2pff4pn4ArGmrQ8yEktY2vN2LwEFgobCnATrDvRIQg740kp5dfmqkQi2ah8%2B6OiL66IGqWVmG3Lv8oFN%2FztyiaFbL6W8pMnibNtXApropOWaHGVwEQZP3104Nzw2nIgiMAA%2FxkujwmmaTfsTjPmWQ0XOeeT%2FrW076%2BIGk1HhNncA%2F3zXJO3qddB0g4qVplhs7MPDFisoGOqUBgMMMpQOgHXmyUMwVFBo5vqdxq%2BEV5aJv1gevlNgO90Zsr9%2FEWPJlOd5hJ4EAiK2YCcPBX3RJbc6NGuH29kjFCaVz%2BmXtWFsmKiMskegJ5TxhiAl0FbKuWNZ8MjFoG51J2%2Ffyh%2FCad6mgVKmusPvtJKa6zh4q1i6VyfozdcxlSGntygX%2BAwxb8P%2Frto%2Fp%2FuIKjYNY9Fvv7HgK99ONwokfT%2Fg6N4qX&X-Amz-Signature=ecef85ead2e4495b814f72081aa99320d96f6111d75ed893ef215a569d199d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
