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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CPZB42Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBbqJo6FrZREIKN2AhvkKrdRA6ynV3kyPpHx0Uoc%2B7VAiAnHohlqqEclKM5hRGE7Vnt6wP2JWvMvACCJcW6crRvdCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjeCxWCHtZSaz83wQKtwDHETgOONaX52JCH8Ea5cWsesU1B01AIOb%2BMwCubbT0CqIudkVk9sDR%2BAO1Y6bUQsI8e5%2BiG%2BwBXqRGLVWmbg7W1RIYcWm1Mp%2BakNCyVLZrshU375C%2FM2oyOxkE6D%2F3jB5lTzYvcM4cwGVzDusWVqEiyf3M0Gef4ZROW6SRc6Ewb8fVVHS1zdoBbUMGbM8Qtk1V67cWt6ZwwHmnsZUkmlzje93lQxpsfZj39Z1%2FE6gjyS6maGNHGPX8XfgG1Qf52UD0xAPg3sjcRpT3kInOKzMlr%2FbA8ScWSURLIGJCG3citEQxirXzJn8ZtqIx3J3fpF%2BFZ858pDJHdswyfqHETPLuqCtokOPx2MnNK64HPq7a27%2FP8haFKUSR%2F4xBZ807tPdh42p5LfmeTdjRDUbVA0bVnALFATlR4l%2ByN%2FLXuU9B%2FiqxN7mjpZ5lmH%2FcweonKNX2%2FFkXVFUZP6q77RIfzPVFuxiC%2FLbHM1xBFbyCMJCRZ2yVIF3uzdA%2B2GW8%2FzE820Gf7O688ZM%2FhXtvCejuKb8yComN%2BFKsu%2BqZYIbR0E2Yy5sX4F4Wq8myotEWSaLwl1Bjw8Nc5mBUC%2BPnEydpjY0f4rhf0iQ6qHf1auaMBU%2F7we5buYC%2FVSqt%2FCAvKcwktHZyQY6pgH2aCytn%2FDq0Mtu%2FZCICGuvYKesz4vtlnW8n8yNFgDFWJ9MCJg5gAKU0HIfhQxrJQA%2Fal46QwfxUrfv4twb5y20E5CL6tV0HXGJnLRFyrBsvOovCD9etNTFg%2B8xeLzdlxRxJFnlMSiBkZ3sp9DxMVne%2FFAYQUEc6yvMHWnZNK9F81UZOzAk3jICGuT%2BbRRSgvpakLzCf2t3fvrSVw5pE%2B%2F68nk2yJh4&X-Amz-Signature=70a4f74efb81d4a9a625c94477b063954c755a1eab667d0735194e1aaf22a8a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CPZB42Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBbqJo6FrZREIKN2AhvkKrdRA6ynV3kyPpHx0Uoc%2B7VAiAnHohlqqEclKM5hRGE7Vnt6wP2JWvMvACCJcW6crRvdCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjeCxWCHtZSaz83wQKtwDHETgOONaX52JCH8Ea5cWsesU1B01AIOb%2BMwCubbT0CqIudkVk9sDR%2BAO1Y6bUQsI8e5%2BiG%2BwBXqRGLVWmbg7W1RIYcWm1Mp%2BakNCyVLZrshU375C%2FM2oyOxkE6D%2F3jB5lTzYvcM4cwGVzDusWVqEiyf3M0Gef4ZROW6SRc6Ewb8fVVHS1zdoBbUMGbM8Qtk1V67cWt6ZwwHmnsZUkmlzje93lQxpsfZj39Z1%2FE6gjyS6maGNHGPX8XfgG1Qf52UD0xAPg3sjcRpT3kInOKzMlr%2FbA8ScWSURLIGJCG3citEQxirXzJn8ZtqIx3J3fpF%2BFZ858pDJHdswyfqHETPLuqCtokOPx2MnNK64HPq7a27%2FP8haFKUSR%2F4xBZ807tPdh42p5LfmeTdjRDUbVA0bVnALFATlR4l%2ByN%2FLXuU9B%2FiqxN7mjpZ5lmH%2FcweonKNX2%2FFkXVFUZP6q77RIfzPVFuxiC%2FLbHM1xBFbyCMJCRZ2yVIF3uzdA%2B2GW8%2FzE820Gf7O688ZM%2FhXtvCejuKb8yComN%2BFKsu%2BqZYIbR0E2Yy5sX4F4Wq8myotEWSaLwl1Bjw8Nc5mBUC%2BPnEydpjY0f4rhf0iQ6qHf1auaMBU%2F7we5buYC%2FVSqt%2FCAvKcwktHZyQY6pgH2aCytn%2FDq0Mtu%2FZCICGuvYKesz4vtlnW8n8yNFgDFWJ9MCJg5gAKU0HIfhQxrJQA%2Fal46QwfxUrfv4twb5y20E5CL6tV0HXGJnLRFyrBsvOovCD9etNTFg%2B8xeLzdlxRxJFnlMSiBkZ3sp9DxMVne%2FFAYQUEc6yvMHWnZNK9F81UZOzAk3jICGuT%2BbRRSgvpakLzCf2t3fvrSVw5pE%2B%2F68nk2yJh4&X-Amz-Signature=eda19b4f07874f18967337e238affa01e7c0c0faae0425f887ef8902c718c3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
