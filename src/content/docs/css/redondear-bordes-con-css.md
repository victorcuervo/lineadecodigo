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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QDMMMDN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhfGYDPt0qE64uw%2B5CDP7%2B35d%2F0qILXmkSjj%2BGWm4NUAiAG1Ujsfs28vxkvkCkcgMM%2FsIPYQf%2BEcfyNlAyJ6BcQgyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz43d2VaoCDR%2FgYw2KtwDmvHhRisNu3NYbWsaRJ%2BOdHfayeAytZ66h%2FrUmIdLHYMYZ6uQnc%2FYWNuOC%2BP465XkwcWuH4hnBIdbqKtiJxikuyPpiCzd9NjrherpiicijZ2QnnYiXNg3SnMr3kHC%2BrwjKd8BRkdSwUJzRiv2bP13rF452tTKXJ6%2BNfADyCWxTqcOKX%2F%2FbISAOhb7uzVsewiySnJHwnqjSO%2FXrzm0FQcdxD238Np7piJD7BoxP1ZSo6gVWZZuD%2FOrPrxgn8ukD1GTiJoWvCQCc5sZwjNUjkuMw6TnqUFrRpAGpAhRTF8huG7xNIjRfbVd4WBfb4K1YGkrhobm2zGGMaCwbuuPTjVP9bMnBsoQpNxYXE2%2BQXGgyqMbeMDSfr4ZaTdXjQ2cn8caoo1wNMvwteRFZwZjniAsi%2Fe6WvRPoZqC4KnT9C5oQb6iZjRIzUlG3TtTtUWA%2B9otMzpeiVbXyJRrbDdI%2BwOEE41sWeRWvZ1MojqItcTTejDEbY%2B%2FtalDkEYfgh2JDAC7zMglK6Ih0smeoQeQDosyDkEEmKOYRG%2FPANEPfx2%2FPaBRC6rCAz5YJOdXZ8pDKkiLfgz9ZF9jnjbaX5sQuM5n6lyYX6vquPSuFEYyCcEsOXfLZP35xcx25PUlLfkwkajXyQY6pgGRn6D97Q8%2B%2BT3EWYrFYdgSXZHekG6dcFJbebzqxTmQJ4JkTUvyhV2ErpqNVqfPjDvEna8vUtizB%2BzWlVOsy6HlxdSuvGpbrabY0l%2FiwO0UMwTXHp6jj8bG3e6SnyudK5N8RQRdATd9fc0wVrtgY7gpXMPMykQJkpCIUkitbTEyf76hWzsPzdsGS%2FyizZ4gmMHbXB6aH0g7g1tABT7mxJqsW1iTxKt4&X-Amz-Signature=f168a0ff96e7de5fcbf0bbb1a86bb53d6a460ffb08d7df4b26eddc9dbd1d3d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QDMMMDN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhfGYDPt0qE64uw%2B5CDP7%2B35d%2F0qILXmkSjj%2BGWm4NUAiAG1Ujsfs28vxkvkCkcgMM%2FsIPYQf%2BEcfyNlAyJ6BcQgyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz43d2VaoCDR%2FgYw2KtwDmvHhRisNu3NYbWsaRJ%2BOdHfayeAytZ66h%2FrUmIdLHYMYZ6uQnc%2FYWNuOC%2BP465XkwcWuH4hnBIdbqKtiJxikuyPpiCzd9NjrherpiicijZ2QnnYiXNg3SnMr3kHC%2BrwjKd8BRkdSwUJzRiv2bP13rF452tTKXJ6%2BNfADyCWxTqcOKX%2F%2FbISAOhb7uzVsewiySnJHwnqjSO%2FXrzm0FQcdxD238Np7piJD7BoxP1ZSo6gVWZZuD%2FOrPrxgn8ukD1GTiJoWvCQCc5sZwjNUjkuMw6TnqUFrRpAGpAhRTF8huG7xNIjRfbVd4WBfb4K1YGkrhobm2zGGMaCwbuuPTjVP9bMnBsoQpNxYXE2%2BQXGgyqMbeMDSfr4ZaTdXjQ2cn8caoo1wNMvwteRFZwZjniAsi%2Fe6WvRPoZqC4KnT9C5oQb6iZjRIzUlG3TtTtUWA%2B9otMzpeiVbXyJRrbDdI%2BwOEE41sWeRWvZ1MojqItcTTejDEbY%2B%2FtalDkEYfgh2JDAC7zMglK6Ih0smeoQeQDosyDkEEmKOYRG%2FPANEPfx2%2FPaBRC6rCAz5YJOdXZ8pDKkiLfgz9ZF9jnjbaX5sQuM5n6lyYX6vquPSuFEYyCcEsOXfLZP35xcx25PUlLfkwkajXyQY6pgGRn6D97Q8%2B%2BT3EWYrFYdgSXZHekG6dcFJbebzqxTmQJ4JkTUvyhV2ErpqNVqfPjDvEna8vUtizB%2BzWlVOsy6HlxdSuvGpbrabY0l%2FiwO0UMwTXHp6jj8bG3e6SnyudK5N8RQRdATd9fc0wVrtgY7gpXMPMykQJkpCIUkitbTEyf76hWzsPzdsGS%2FyizZ4gmMHbXB6aH0g7g1tABT7mxJqsW1iTxKt4&X-Amz-Signature=0617b5ed7a13b9dca5bab6ffd04911f4992aab2049b0853143d79edd661dc782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
