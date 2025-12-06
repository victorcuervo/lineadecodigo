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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRX67SXJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpgQHWpJvkBfMA1q5r1q%2B1W%2F%2FGWuXwkMY%2FJd8tXAH%2BXgIgMVSHzoB0HFix%2FC3%2FhuuZZRUUblJFLAxDPhfYKmoMmv8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLYJ%2BxLpWj%2Figp8CCSrcA%2BFlSbjBnzSIID2EynUNtGTPvjfaGOgz3F4fbO7K4iO6N9dJBc01AdpnVFo0cUc6aALlzEm%2BxBgKXdngqPMhFaqGUGskEMLxqg1Arh3UqreoAHLM6d1jgzDJnUAAoZpvNz7vYeAn3r%2Fn7F7jPARPpStWPXGnSjD%2BxhsO4hFWsVYg2TG62TpwJxfnCBA9BZv5x5VxRJ6GByU9N2gwRRpiM0cYWTVFdQPKxeZXkDz41wH%2FFz%2Fg58KHqa9XQcQAR1Q6XAemwi2HYhHsbauQXNm83bg0pxNX9Zm4btYW5LuNE%2FOpSRSyLbea7yq6n0BKO25l9SLeHFSeGbO%2BcpouXHk2qmgt1WNybB2T7J0Nda86gA7rmimrHPpMPJgZuIEATdmdADjbBP2wgGejP%2F61eMkDvpu%2BQ%2FV3VlRnL%2FVKqWWFeFSGR%2FeQN%2FRbADXLgJJF2X5YxD9EM%2FeHQ5ziflFrJ4bh6gp7%2B5SRyuMJMBsnYQUoJTEI%2BFNAIlQUrqAmgRZ1KSqj85dpZ0780VJrhowqNVAr1U4h5%2BUXKQEyY0c7QMbejupqB%2BiwlAytUbZjwE0LaMw5NrkCf%2Fe7IhMgKS4BkVP5f%2FxWIOgAxEuf1M1YE3mzykcUlL9EkiS%2B5heNOVduMKDL0ckGOqUBRS4gppX9RFMSg7Blnw%2FdMvvFXi7GWzrTwmFSE0GUmjeIQmLHtubHVJBOpXRCCtJtSLYbGenlJ0j79JJEByyx209ihhVlhofrR%2FaL0X1FkBq6PVIGt5XHlbJHqNYpDGQEtWceIX3c%2Frdpv7ebjyMfQuQ7O5jzVcqfZuUZEoW0V2E0Hf0VsTK%2BYqlstARbafIhXLri3crqBjQb6UDfUIlXS6DbEWtb&X-Amz-Signature=400232d33a43063f6cd1a6e1e7608a50ec71386aed4486c04b552a5387a60cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRX67SXJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpgQHWpJvkBfMA1q5r1q%2B1W%2F%2FGWuXwkMY%2FJd8tXAH%2BXgIgMVSHzoB0HFix%2FC3%2FhuuZZRUUblJFLAxDPhfYKmoMmv8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLYJ%2BxLpWj%2Figp8CCSrcA%2BFlSbjBnzSIID2EynUNtGTPvjfaGOgz3F4fbO7K4iO6N9dJBc01AdpnVFo0cUc6aALlzEm%2BxBgKXdngqPMhFaqGUGskEMLxqg1Arh3UqreoAHLM6d1jgzDJnUAAoZpvNz7vYeAn3r%2Fn7F7jPARPpStWPXGnSjD%2BxhsO4hFWsVYg2TG62TpwJxfnCBA9BZv5x5VxRJ6GByU9N2gwRRpiM0cYWTVFdQPKxeZXkDz41wH%2FFz%2Fg58KHqa9XQcQAR1Q6XAemwi2HYhHsbauQXNm83bg0pxNX9Zm4btYW5LuNE%2FOpSRSyLbea7yq6n0BKO25l9SLeHFSeGbO%2BcpouXHk2qmgt1WNybB2T7J0Nda86gA7rmimrHPpMPJgZuIEATdmdADjbBP2wgGejP%2F61eMkDvpu%2BQ%2FV3VlRnL%2FVKqWWFeFSGR%2FeQN%2FRbADXLgJJF2X5YxD9EM%2FeHQ5ziflFrJ4bh6gp7%2B5SRyuMJMBsnYQUoJTEI%2BFNAIlQUrqAmgRZ1KSqj85dpZ0780VJrhowqNVAr1U4h5%2BUXKQEyY0c7QMbejupqB%2BiwlAytUbZjwE0LaMw5NrkCf%2Fe7IhMgKS4BkVP5f%2FxWIOgAxEuf1M1YE3mzykcUlL9EkiS%2B5heNOVduMKDL0ckGOqUBRS4gppX9RFMSg7Blnw%2FdMvvFXi7GWzrTwmFSE0GUmjeIQmLHtubHVJBOpXRCCtJtSLYbGenlJ0j79JJEByyx209ihhVlhofrR%2FaL0X1FkBq6PVIGt5XHlbJHqNYpDGQEtWceIX3c%2Frdpv7ebjyMfQuQ7O5jzVcqfZuUZEoW0V2E0Hf0VsTK%2BYqlstARbafIhXLri3crqBjQb6UDfUIlXS6DbEWtb&X-Amz-Signature=75f630045f4d910527328ae6b7f09d983bd15994450524f2010176801f46560e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
