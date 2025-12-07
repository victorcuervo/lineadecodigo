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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM34PR4S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE5WaV5OQxxfOCrft4%2F5B3WDew3fEMkJyvElCcBZ2QmAiAap7JAB3%2B2kRohDYXZG%2FCYRn8s0RwqH%2BTatVc%2BTTOnKiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOoYmlBb%2BOhmaW5sKKtwD%2BVc0GAqP6GoV29CPMBnjuNo0s%2FSquwFi9mzyWyT4X8wkiMiV3vSfuwBhcS0AmKh8vjyI6MFOKpkoNQOG5DeBggh8CpvyZt2t6ADNSKWhd5GfkYWDIgMmoeS%2FUohNyseR1RpoblpkHAwLsZz2%2F2bzfQQgmo9x6kx6UpulVYRvLG1TVe41HJ7PaqcGaRk7N2qvXe3bYecPc9HTxZaa%2FELRFzrY4EiZS2zIojImoQUj%2FqPfeh3BebQELVo%2BS%2FoE6qwYDnQvB7a91vWBsUiwCMYPa9x%2BdkDBnRZdHsrgTrvkPHzZ7nJSH4llOF92CBBx1Zq7l1XcOeMcuRM53UQ036%2Fy0mG22spQS2tGhyVls%2FCOWxUEaxxwxDO7b06wD4V9r6QQK7QBVszet4xH1O2zODaDW2%2BFWq3Oho2d5vrl%2BiU0kCULYizNlTK5Qcs4fREwV%2BPbe2m60rNUxYQnTQNd%2FuS6bBQETKa79oEejmkfqH%2FCkYLbRr6141QWX%2By6I24U9TdQ175gW3C7rSvHgLKFOKCc2BwpZk%2FpL0410PYqKsEpQgebYq9xX9KA1jqpJ4ioSqIdjZaqN7ZRJXIBlNJD4W0zciKv5cjSLj%2Bqh1e0yu0OeM2ENY%2BxgablhKiikFAwnpnVyQY6pgElIGYslTgz7DgTQHAdAtZlh%2FB8G8wWmqPCmTQy%2FmW7reVgTSSba7zM1oBykg3C0cRSBZgC46%2BaYW9vLThEY19pCGXgadbVUfZrH6VTnCYaIlME6wOCeUwmqqxZ%2BJbiuPiHn5bzYilUSLIT0PAqrhi3dUHf5NmzwntZLPcF5pDMmAvd%2FLYi%2BCSb%2BJ9jMgrSXUiRN7zFFC3Ko3RY8DD%2FkfPpJc311nTd&X-Amz-Signature=9d4eb5ac57a53f08d68d2b64e955db3f8a1819fcdfda61b378cbecdecc4a05ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM34PR4S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE5WaV5OQxxfOCrft4%2F5B3WDew3fEMkJyvElCcBZ2QmAiAap7JAB3%2B2kRohDYXZG%2FCYRn8s0RwqH%2BTatVc%2BTTOnKiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOoYmlBb%2BOhmaW5sKKtwD%2BVc0GAqP6GoV29CPMBnjuNo0s%2FSquwFi9mzyWyT4X8wkiMiV3vSfuwBhcS0AmKh8vjyI6MFOKpkoNQOG5DeBggh8CpvyZt2t6ADNSKWhd5GfkYWDIgMmoeS%2FUohNyseR1RpoblpkHAwLsZz2%2F2bzfQQgmo9x6kx6UpulVYRvLG1TVe41HJ7PaqcGaRk7N2qvXe3bYecPc9HTxZaa%2FELRFzrY4EiZS2zIojImoQUj%2FqPfeh3BebQELVo%2BS%2FoE6qwYDnQvB7a91vWBsUiwCMYPa9x%2BdkDBnRZdHsrgTrvkPHzZ7nJSH4llOF92CBBx1Zq7l1XcOeMcuRM53UQ036%2Fy0mG22spQS2tGhyVls%2FCOWxUEaxxwxDO7b06wD4V9r6QQK7QBVszet4xH1O2zODaDW2%2BFWq3Oho2d5vrl%2BiU0kCULYizNlTK5Qcs4fREwV%2BPbe2m60rNUxYQnTQNd%2FuS6bBQETKa79oEejmkfqH%2FCkYLbRr6141QWX%2By6I24U9TdQ175gW3C7rSvHgLKFOKCc2BwpZk%2FpL0410PYqKsEpQgebYq9xX9KA1jqpJ4ioSqIdjZaqN7ZRJXIBlNJD4W0zciKv5cjSLj%2Bqh1e0yu0OeM2ENY%2BxgablhKiikFAwnpnVyQY6pgElIGYslTgz7DgTQHAdAtZlh%2FB8G8wWmqPCmTQy%2FmW7reVgTSSba7zM1oBykg3C0cRSBZgC46%2BaYW9vLThEY19pCGXgadbVUfZrH6VTnCYaIlME6wOCeUwmqqxZ%2BJbiuPiHn5bzYilUSLIT0PAqrhi3dUHf5NmzwntZLPcF5pDMmAvd%2FLYi%2BCSb%2BJ9jMgrSXUiRN7zFFC3Ko3RY8DD%2FkfPpJc311nTd&X-Amz-Signature=f2bec6e8352d06d2c6c3c0c3f762ccf561728fc4e48e4f522fd8bacf72192458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
