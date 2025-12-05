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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ72YUHF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDthCABHGHONPmTH3TDVVuQFmU1k6kZjAmCJSXPbLlN1AIgVo0DsL%2BpM1HfsJj8FAPi%2Frdgqzyzil6L7JpbknVjW1kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCcabj744rdGHUN7bSrcA7aCg8PCRkuaO%2BGmUfcAitfey8IvrPOwTAKMbcYT4UoExWEDkGPbH1CDt3wE8pgM2Ax7GaBhDBSEvMp7JRMaYZrRzhRHMCTt53wwfchCiAjCg1U92UvERAvfjXlpE707qCm7Co3ZGHLjGRf0716Vhx5Nll%2FMMHMCX%2BcvwOo6fMnbBd2RcmqLjozJ%2Bpe%2F0umg7F5fG1watf5uRlhjdnWIol60Z%2BvdWFj9fh%2FEsb2M3tN3bGUmEJEMmAp4aC5KzANDSZq0KHM4nrhhn2za0cTqzTdZWdbYaMn5V%2FAKPtM3vvAMTsMDK%2BzlgZDuDx3QwP%2FRTN%2FDeHQNkYyLwE42G3MLaSQjm8NyDWjiUTvB9kDhCX2OLSFZPfoo5VL2abyaWJFJVFtXOPcGC0ki5F6gJKg7EwAebO55ZPOH%2F0lROD6bQaUwW0wJlTAuZNLW86PrS8Em%2BY3%2FDnQYYRxHCvFwZ1vUscAzpYtJ%2B%2BUzk4Gra4f7hfSni%2F%2FTEklDAXay7yLE4Q9VVZrNFGehuuvpP1aoobyhhyPy1zCRLJNGVPVUTeSwUIWxXNPcxmOW0dpMRKk9dtk0hW6Xm1v3qvVOuAPvfAaTCEfDxjBKdppODkoQaZfDIRbJxW43qtRebQtSP8WrMIDJyskGOqUBiPVBgg6i3KXQNyDwbNuuBmfS0XZG5wsGfxh5Jk6Etg494go0MNqhK5bGaNDfhzp4fKk2s2zO6tXmnh8xdCz9Qqfa7flVjGR8rmmZBNCI1iCnC2OKsX4RsDXAquaUgQLl0rQ3eKUpP%2ByLJR0xQrZ5H8%2Fs27uPxvKTox1fvJoszT91%2Bid4JKmFt46hbPLwXysNfjdC5PiQbEwGj0MX814guJ%2Bv%2BV0f&X-Amz-Signature=e62023fccca3cb351c273bf09778c9f4634dfab3360af25d80f4ab86714052b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ72YUHF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDthCABHGHONPmTH3TDVVuQFmU1k6kZjAmCJSXPbLlN1AIgVo0DsL%2BpM1HfsJj8FAPi%2Frdgqzyzil6L7JpbknVjW1kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCcabj744rdGHUN7bSrcA7aCg8PCRkuaO%2BGmUfcAitfey8IvrPOwTAKMbcYT4UoExWEDkGPbH1CDt3wE8pgM2Ax7GaBhDBSEvMp7JRMaYZrRzhRHMCTt53wwfchCiAjCg1U92UvERAvfjXlpE707qCm7Co3ZGHLjGRf0716Vhx5Nll%2FMMHMCX%2BcvwOo6fMnbBd2RcmqLjozJ%2Bpe%2F0umg7F5fG1watf5uRlhjdnWIol60Z%2BvdWFj9fh%2FEsb2M3tN3bGUmEJEMmAp4aC5KzANDSZq0KHM4nrhhn2za0cTqzTdZWdbYaMn5V%2FAKPtM3vvAMTsMDK%2BzlgZDuDx3QwP%2FRTN%2FDeHQNkYyLwE42G3MLaSQjm8NyDWjiUTvB9kDhCX2OLSFZPfoo5VL2abyaWJFJVFtXOPcGC0ki5F6gJKg7EwAebO55ZPOH%2F0lROD6bQaUwW0wJlTAuZNLW86PrS8Em%2BY3%2FDnQYYRxHCvFwZ1vUscAzpYtJ%2B%2BUzk4Gra4f7hfSni%2F%2FTEklDAXay7yLE4Q9VVZrNFGehuuvpP1aoobyhhyPy1zCRLJNGVPVUTeSwUIWxXNPcxmOW0dpMRKk9dtk0hW6Xm1v3qvVOuAPvfAaTCEfDxjBKdppODkoQaZfDIRbJxW43qtRebQtSP8WrMIDJyskGOqUBiPVBgg6i3KXQNyDwbNuuBmfS0XZG5wsGfxh5Jk6Etg494go0MNqhK5bGaNDfhzp4fKk2s2zO6tXmnh8xdCz9Qqfa7flVjGR8rmmZBNCI1iCnC2OKsX4RsDXAquaUgQLl0rQ3eKUpP%2ByLJR0xQrZ5H8%2Fs27uPxvKTox1fvJoszT91%2Bid4JKmFt46hbPLwXysNfjdC5PiQbEwGj0MX814guJ%2Bv%2BV0f&X-Amz-Signature=37ae78e90ca097d11e0514f7373bc0d8eb1d642adeb7fc168a35fe73aece357f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
