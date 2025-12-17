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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBKIGG2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDZJbmrUBNLOBSW5%2FAXAeidE3ZAojXWuLTaeT0%2B6jZOAiBtiTBoZaRRTpmngaPEALXB9srjHoRs%2FCcci%2BosxsdXbir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMe7lT0pX%2FAJ9HqPRbKtwDMqpj2xhZnPNMI85LD8EgLRDk%2BYbGjj61GqTXlUWsIyDj2SkBNjJiRMCXAHKNuOILRc%2B8RCpRixcSmr1v%2FrntN9VBmXYwHD5TsR2go6iZfayj2p7tWouN0bsH0Bqg9Bc5m27bIDZJuwiLI%2Fx1kpxVKN3ZPgngxFQQx98D8Nf%2FFjGUmnuFqkS8GfRbr5MSS5tnj%2BKP4125bkCjWWpOEDgpXAdFpLUB5LrgyLrdhRL6yqfCjXx8ddrvRHsUxlxO6K7T8HA8YValDP42kglgIIxCsxVysfrVrzwb0M9OzYiIWyJbWZiUGJXEz9ONRLJJE1UGeOCjufkbckfZxyXv4fdDsaUovUk4qPCRSA8vkgxrh%2B8Phz1RE1h8QTiIjSbrF1oWugE7BfiWfqT0XRIZj0oMWinc5CoKR3Pq7oI8oioA%2BdHYJ%2BBmUWJotcTh4somlI1IJeMgYbFpNx2VJhK%2Fcm3R9JBAayA5oTHZ%2BJ8R0vdW%2FCh24nJHJv7sw%2FYd4zCiZq6Bb8rtUBr146IdRWwjEwvvthI7%2FLqEcH8uRrejM09LHg7uoEWgZROnwqGsTUWkaEGQo9tu0WMT2X8hdSVxvDciaLMIswgpgnIDdswUUFwiVOtx7MsA6phUxMQKXTowyZ2JygY6pgFeJgKOsHHzG9r6N8YsFecJVUSDJ4Re4ugVsKxRb7b%2BiPQCsWpREaSIOwH2NMVftMh%2Fhn0u7mS6CXvyIOkQSo3E4w5lEFWTpeM7MAc5nRNFxvyMdh6BpIO1h1EvBWLPwBK5a0LQcJPknAbWqAWqfjLf3OF%2F2whDIlCLopNIEzfi%2BresaSZi72V2R%2BzkvyF%2Fzs7Embdi%2BFmhtZL%2F77jlKQfa35Jx%2BYCV&X-Amz-Signature=53f5a1940935003f0666fe7a422f109b8f5c0501b95e9cea57691dfcc3574b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBKIGG2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDZJbmrUBNLOBSW5%2FAXAeidE3ZAojXWuLTaeT0%2B6jZOAiBtiTBoZaRRTpmngaPEALXB9srjHoRs%2FCcci%2BosxsdXbir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMe7lT0pX%2FAJ9HqPRbKtwDMqpj2xhZnPNMI85LD8EgLRDk%2BYbGjj61GqTXlUWsIyDj2SkBNjJiRMCXAHKNuOILRc%2B8RCpRixcSmr1v%2FrntN9VBmXYwHD5TsR2go6iZfayj2p7tWouN0bsH0Bqg9Bc5m27bIDZJuwiLI%2Fx1kpxVKN3ZPgngxFQQx98D8Nf%2FFjGUmnuFqkS8GfRbr5MSS5tnj%2BKP4125bkCjWWpOEDgpXAdFpLUB5LrgyLrdhRL6yqfCjXx8ddrvRHsUxlxO6K7T8HA8YValDP42kglgIIxCsxVysfrVrzwb0M9OzYiIWyJbWZiUGJXEz9ONRLJJE1UGeOCjufkbckfZxyXv4fdDsaUovUk4qPCRSA8vkgxrh%2B8Phz1RE1h8QTiIjSbrF1oWugE7BfiWfqT0XRIZj0oMWinc5CoKR3Pq7oI8oioA%2BdHYJ%2BBmUWJotcTh4somlI1IJeMgYbFpNx2VJhK%2Fcm3R9JBAayA5oTHZ%2BJ8R0vdW%2FCh24nJHJv7sw%2FYd4zCiZq6Bb8rtUBr146IdRWwjEwvvthI7%2FLqEcH8uRrejM09LHg7uoEWgZROnwqGsTUWkaEGQo9tu0WMT2X8hdSVxvDciaLMIswgpgnIDdswUUFwiVOtx7MsA6phUxMQKXTowyZ2JygY6pgFeJgKOsHHzG9r6N8YsFecJVUSDJ4Re4ugVsKxRb7b%2BiPQCsWpREaSIOwH2NMVftMh%2Fhn0u7mS6CXvyIOkQSo3E4w5lEFWTpeM7MAc5nRNFxvyMdh6BpIO1h1EvBWLPwBK5a0LQcJPknAbWqAWqfjLf3OF%2F2whDIlCLopNIEzfi%2BresaSZi72V2R%2BzkvyF%2Fzs7Embdi%2BFmhtZL%2F77jlKQfa35Jx%2BYCV&X-Amz-Signature=8de74ff3ec240fc58766a7e9bf1a5318c04f4a51c0e71fa7cd37da88a7968520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
