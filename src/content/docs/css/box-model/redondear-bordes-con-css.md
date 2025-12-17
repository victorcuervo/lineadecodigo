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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUZKIEI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEbKwzjJOE7FLZDcWAkM98Okg%2B9Wz%2FEM8t4qN1uyZm8AIgc%2BTmsgtK4UFbtMbvHJWsIKXobz%2FN1%2FgL9W9jbvga2hkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDpXsnWpboo5uyNSlyrcA8EeDQEpIRVYuuIgJcg0B43Q3gc5R9Q4JXgrMpv0bJM%2F%2Bw2cVd2JOcNG1nfDl3%2Bs3uDn8%2Fg4deUTVR2bWMTP4Ma%2BgCqivgAd6pMdLCKAbvJUGHQBhs%2F65T7XompNQ3%2BKrA79qhUK5vq2NAmTKlYiS6OTtL4zHmf7PYW4VDyQwQgp6JEKSpjOqq7pt4aj09sgXw6pqgL%2FuKij1J%2FJIVq5DQnBqerRpvQUfJZjpN947z09kZmDlmjXIHIWTa4d0wwLxDL4LJOop7S%2Brl79cX5Szak1FgTOfpzkR0fdWUzc%2BrRQCi6k36hfeqD%2B8D8GV2ooDA4VzcZkCtH5WRxJUJ91%2Bqpa%2F1jaY%2BmubaDO8lr%2BEHFQ8v4DdoTJ%2BizKhrlXyIY0Khe%2B7OgISGvqhwMpmw31%2BAVkEuARIZKYnquon4bQM4hw5ZiUjRYKQl1gOabwigWauVXhdy6PEJxr5ViwQs0RSn3qFhi%2FeB9Nu62aKYH7yKGqxYgpW2kvXQ%2BIq%2BsIM55mmSbO3ed0z4UoIG009ARGpVCo6Dl1GuUx1BZAC1GcX7nrCg94GQtffpH0%2FB2Jppcq9ofNrqIiccxR6E4XdxG2PCIjb5I5LVxMSPzm1YAxA%2BqPFhWzLtPnhmKQF7KbMIXSicoGOqUBsIEW9dhEf2YJJJz%2Fm90o5vrhZuIMF4N2mxtslkqt0bmLblF43COgRfaqfpnp2bzzPQVrNdUB4f6v3i8akdxyCg0OyANBl%2BDqInCuzsdH0NyxHuPLO240BUh%2BrRS8LLf2i0Y5LMKlKbeBm85d4nHv3DzpQIXUTNAuKHJOmTYftLj%2FADcn%2Ffe6PX2xaO8k0tXHmdZ4m5C5QVpRORASF0eZ5DKx6l%2Bv&X-Amz-Signature=fda81bcac258ab151e661853df0ccfd7ba972da8ebb1746c93514347a3ca78ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUZKIEI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEbKwzjJOE7FLZDcWAkM98Okg%2B9Wz%2FEM8t4qN1uyZm8AIgc%2BTmsgtK4UFbtMbvHJWsIKXobz%2FN1%2FgL9W9jbvga2hkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDpXsnWpboo5uyNSlyrcA8EeDQEpIRVYuuIgJcg0B43Q3gc5R9Q4JXgrMpv0bJM%2F%2Bw2cVd2JOcNG1nfDl3%2Bs3uDn8%2Fg4deUTVR2bWMTP4Ma%2BgCqivgAd6pMdLCKAbvJUGHQBhs%2F65T7XompNQ3%2BKrA79qhUK5vq2NAmTKlYiS6OTtL4zHmf7PYW4VDyQwQgp6JEKSpjOqq7pt4aj09sgXw6pqgL%2FuKij1J%2FJIVq5DQnBqerRpvQUfJZjpN947z09kZmDlmjXIHIWTa4d0wwLxDL4LJOop7S%2Brl79cX5Szak1FgTOfpzkR0fdWUzc%2BrRQCi6k36hfeqD%2B8D8GV2ooDA4VzcZkCtH5WRxJUJ91%2Bqpa%2F1jaY%2BmubaDO8lr%2BEHFQ8v4DdoTJ%2BizKhrlXyIY0Khe%2B7OgISGvqhwMpmw31%2BAVkEuARIZKYnquon4bQM4hw5ZiUjRYKQl1gOabwigWauVXhdy6PEJxr5ViwQs0RSn3qFhi%2FeB9Nu62aKYH7yKGqxYgpW2kvXQ%2BIq%2BsIM55mmSbO3ed0z4UoIG009ARGpVCo6Dl1GuUx1BZAC1GcX7nrCg94GQtffpH0%2FB2Jppcq9ofNrqIiccxR6E4XdxG2PCIjb5I5LVxMSPzm1YAxA%2BqPFhWzLtPnhmKQF7KbMIXSicoGOqUBsIEW9dhEf2YJJJz%2Fm90o5vrhZuIMF4N2mxtslkqt0bmLblF43COgRfaqfpnp2bzzPQVrNdUB4f6v3i8akdxyCg0OyANBl%2BDqInCuzsdH0NyxHuPLO240BUh%2BrRS8LLf2i0Y5LMKlKbeBm85d4nHv3DzpQIXUTNAuKHJOmTYftLj%2FADcn%2Ffe6PX2xaO8k0tXHmdZ4m5C5QVpRORASF0eZ5DKx6l%2Bv&X-Amz-Signature=5bc71f2ce16472bffb198aca6f800b2883187b990e360b18916a3e7ccd5f7013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
