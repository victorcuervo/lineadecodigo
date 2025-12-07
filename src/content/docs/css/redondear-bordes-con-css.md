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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QHO6VYR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6okQsH12An3JpSBacK2dehP%2BOt5K%2Fi7%2Fnzr21DGYDsAIhAItTL668KHBFY1PniN542Aibmq%2FmTWH9VgY6pUDOUpJdKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B%2FoFLqhPdnQV23gsq3APULUeg6RPaF7dxFPB4wX18L74avlI9iDStTMxtei%2BXcQq0GXCU8cK4eKTPfgxWNWtpmajNLDN7g21p9f5cnub5TXViPj5ZYtncgVWq8cbrb8pMgAivJEl7V2Wdnxho2FSRYZrHR8gSqGYIgU4N2XxoGE0AJ8rFuyrbYe85AoF25MF7LtO0G5qSXUwJqwxxJ2egVHuN1ubIhsKWw9sw5X5QT%2BIVwAqNXk0dUs80JsA82WyNVmQma8xpjWv%2FzviZbPLqF4745fUU%2FjZPJFcqOCWkdn1Fc6oPo%2FEZPJt%2B76%2FMnA2VvZ55AV5J6ThHfh8Vs2EbmgFMuHgAI%2Fd%2FeqnELO5SB7a7EzOwF%2BV6YKCGUxQ9BVZO6inYcWeFyOY%2FQEc0Ch2fi9l7jKa0%2FrM33803fMSPA17CvZ5Prv0OjWuUeWzKMQbSPJqm%2FqcEHoOvfGCbemNo6XMbvptv6QoplKFTU9La%2FrVvediBjI2wwSg0JhVJhhJUQ6lNYqT%2BpdpIeHdD9XUREPH0SZRnBjdsKFpCSsKxueXGu9Ncv5Wo0Wy%2B5FWQnEvIAqQdcKlct723Y1bPygWXXwweM7T7CqeHf%2F3loGOd7aRPNu891%2Bl4FnI4SX0uAMh2ANZuxgvlJlgr5TCEndTJBjqkAf7G0Oz4vfmlbEUT6ZWRSnSi69iESUZVdWibo%2BjOINUjtLSd1TQCBWL%2FigfjHj0Jomys0p34RSsJIDIIgxrZcNdyDS9Ypvu9TGLFT%2FRuyszVISBxPCFmAZwdgwkyYLOcbJy6PPO4LPucQZuNyHuH7kIQ7YIriCnnYu4yfFaP8oTqPgzgQTO6WENk5ThYQA%2BOwIjCup4W4Bb8paxGJ6xSvMda3Op9&X-Amz-Signature=01297a0ebe7ded13c5d92b826d3ae5f88d5a9b736de32a631e9b7fb25f365beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QHO6VYR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6okQsH12An3JpSBacK2dehP%2BOt5K%2Fi7%2Fnzr21DGYDsAIhAItTL668KHBFY1PniN542Aibmq%2FmTWH9VgY6pUDOUpJdKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B%2FoFLqhPdnQV23gsq3APULUeg6RPaF7dxFPB4wX18L74avlI9iDStTMxtei%2BXcQq0GXCU8cK4eKTPfgxWNWtpmajNLDN7g21p9f5cnub5TXViPj5ZYtncgVWq8cbrb8pMgAivJEl7V2Wdnxho2FSRYZrHR8gSqGYIgU4N2XxoGE0AJ8rFuyrbYe85AoF25MF7LtO0G5qSXUwJqwxxJ2egVHuN1ubIhsKWw9sw5X5QT%2BIVwAqNXk0dUs80JsA82WyNVmQma8xpjWv%2FzviZbPLqF4745fUU%2FjZPJFcqOCWkdn1Fc6oPo%2FEZPJt%2B76%2FMnA2VvZ55AV5J6ThHfh8Vs2EbmgFMuHgAI%2Fd%2FeqnELO5SB7a7EzOwF%2BV6YKCGUxQ9BVZO6inYcWeFyOY%2FQEc0Ch2fi9l7jKa0%2FrM33803fMSPA17CvZ5Prv0OjWuUeWzKMQbSPJqm%2FqcEHoOvfGCbemNo6XMbvptv6QoplKFTU9La%2FrVvediBjI2wwSg0JhVJhhJUQ6lNYqT%2BpdpIeHdD9XUREPH0SZRnBjdsKFpCSsKxueXGu9Ncv5Wo0Wy%2B5FWQnEvIAqQdcKlct723Y1bPygWXXwweM7T7CqeHf%2F3loGOd7aRPNu891%2Bl4FnI4SX0uAMh2ANZuxgvlJlgr5TCEndTJBjqkAf7G0Oz4vfmlbEUT6ZWRSnSi69iESUZVdWibo%2BjOINUjtLSd1TQCBWL%2FigfjHj0Jomys0p34RSsJIDIIgxrZcNdyDS9Ypvu9TGLFT%2FRuyszVISBxPCFmAZwdgwkyYLOcbJy6PPO4LPucQZuNyHuH7kIQ7YIriCnnYu4yfFaP8oTqPgzgQTO6WENk5ThYQA%2BOwIjCup4W4Bb8paxGJ6xSvMda3Op9&X-Amz-Signature=9637cbe2d6b6d28dd2fb9079d8868b23cc1cedf6a4fabbb837be8bd0253922c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
