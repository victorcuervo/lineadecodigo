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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFGT23EO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDw3VJLrgR8JJfRfz%2B5v8Kuc5kEeUx8spTK7HZDcZX0gwIhAMeaG1mepfv%2Bp1Ujl59HaaOnd%2FjjfiBgmEUbW%2BPFwYm5Kv8DCDgQABoMNjM3NDIzMTgzODA1Igwzug%2Fw0MplMEqiLJUq3AN83OrshLYaJi2zqUfC3Ei6Ky63YpZcwQgY7BSJrHi8CjElRCdjhOnDXm3kK573hbXP6v8VST4AUvALQHdafD2pB1HXpoInOvS5uIkH2%2FeD3UJKWyo0XbyeJPpgLdrswc%2BaEsjHQBncexDXOiaFFy3%2BT0TxGxgKJR4BG5%2FZnAE7w2fequ%2BsuOySs8rUicsmxc2r%2BDp1YOSFI5gNKPspUiwUFB9Fe%2F5a%2BRMVOmQX%2BsGrm%2BbWBDgJKcD%2FMgmaDQWD1aiYvIfthxeTyPgModOBYTfud7ENz2b5hJyNzaiXo%2F2vHy6Jc%2F2E4boGZzf%2BvZVLNh%2Bsil0TyvyQMqCm0oMu%2BDdy1PY9%2Bv4KAlytdXmztIT4o2N8X%2FKeqwF6b4pL2RbqPx6XALx%2FzDq8hL57P9OycG%2BbP9EIHaBKsru0h5iTVKEC257J5GeDK2ClkYCuno2mNv59WjFBR9HnagVoGXjx8oaqz1x%2BxapGIatm3NN7kvgUiS1kRB3k9HJM59SZedXWtDWc1qnlAiMGXHdgeChSq22zzax6JYzmTW58EKCh5nrkfDd6ypxO9NVno2dm0r34G0dOssJEmGUfc6MpwMEvKaY9QXXoJUmcctD%2F4rANqbYXfX8iBYLxHLHp7QzADDDV%2BMLJBjqkAZdDpyMPOmEyrdy1v2sFd2eP5cVFujtaSsK5u%2FeanSlXsCRbNIdGFsmBZrNhyYkYxvc%2BGhk5W%2BweYXukUzeV1Pb5KTjvj2pDCJIDOdpiei1XBMpBRoieNswC4BwWyiIaQ1V5HvPG%2FPNlBwhiyBeUSDNm7vLTy3f78bg3rKIh8z6Ij1tNhIVNBUR%2BUZctRQWszI96OWQzpU%2Bp4KKHGC7%2F0hW7ZjIj&X-Amz-Signature=86649907c2bc503b814c994fd19460ce5f9de2d45ff8d349abb3326884e6cb80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFGT23EO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDw3VJLrgR8JJfRfz%2B5v8Kuc5kEeUx8spTK7HZDcZX0gwIhAMeaG1mepfv%2Bp1Ujl59HaaOnd%2FjjfiBgmEUbW%2BPFwYm5Kv8DCDgQABoMNjM3NDIzMTgzODA1Igwzug%2Fw0MplMEqiLJUq3AN83OrshLYaJi2zqUfC3Ei6Ky63YpZcwQgY7BSJrHi8CjElRCdjhOnDXm3kK573hbXP6v8VST4AUvALQHdafD2pB1HXpoInOvS5uIkH2%2FeD3UJKWyo0XbyeJPpgLdrswc%2BaEsjHQBncexDXOiaFFy3%2BT0TxGxgKJR4BG5%2FZnAE7w2fequ%2BsuOySs8rUicsmxc2r%2BDp1YOSFI5gNKPspUiwUFB9Fe%2F5a%2BRMVOmQX%2BsGrm%2BbWBDgJKcD%2FMgmaDQWD1aiYvIfthxeTyPgModOBYTfud7ENz2b5hJyNzaiXo%2F2vHy6Jc%2F2E4boGZzf%2BvZVLNh%2Bsil0TyvyQMqCm0oMu%2BDdy1PY9%2Bv4KAlytdXmztIT4o2N8X%2FKeqwF6b4pL2RbqPx6XALx%2FzDq8hL57P9OycG%2BbP9EIHaBKsru0h5iTVKEC257J5GeDK2ClkYCuno2mNv59WjFBR9HnagVoGXjx8oaqz1x%2BxapGIatm3NN7kvgUiS1kRB3k9HJM59SZedXWtDWc1qnlAiMGXHdgeChSq22zzax6JYzmTW58EKCh5nrkfDd6ypxO9NVno2dm0r34G0dOssJEmGUfc6MpwMEvKaY9QXXoJUmcctD%2F4rANqbYXfX8iBYLxHLHp7QzADDDV%2BMLJBjqkAZdDpyMPOmEyrdy1v2sFd2eP5cVFujtaSsK5u%2FeanSlXsCRbNIdGFsmBZrNhyYkYxvc%2BGhk5W%2BweYXukUzeV1Pb5KTjvj2pDCJIDOdpiei1XBMpBRoieNswC4BwWyiIaQ1V5HvPG%2FPNlBwhiyBeUSDNm7vLTy3f78bg3rKIh8z6Ij1tNhIVNBUR%2BUZctRQWszI96OWQzpU%2Bp4KKHGC7%2F0hW7ZjIj&X-Amz-Signature=7636cd8c1ca7b05581c8934169c51b1530bbdc02b0fe62e6800ad09c804b6d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
