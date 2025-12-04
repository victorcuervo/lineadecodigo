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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSOAFK5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIEnOmQIyPb4%2FCB50KJEBIUcqprgY5NbS2n8A0CGzBzvhAiEA9YfOojWAcErS%2FSJU%2FGlj6w4bFNnG6W0nQ7%2FcvZGY3Pkq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDHe%2BWr0gEcJZC10NfSrcAweQLM2ZltZpHGbghTKTPN%2FnpPGMukYuX14xSAPiEa1qdhiK3uU89c%2B01tr%2FizJe%2BEdL8SdUek9zX%2FfU2W0YBp4Pevw3T1v4W6qa8Cw2PrNfVXdRHT9BnMVeJwfRvCu%2BFBuA%2Fn1lmdstyHg9C2LTCexNiwALWnvXqxjnJI0YotxExKBYaXdEiAoHmMNZwuaxbkb5biw4chsgjOP16mk7QkyD53denHK3bEj95dw9boMyJ2YUr6ZHeirDLiijrGmsYZWYm0jhYqKtGqOBiFtWHrc7s0HYQPzVFTYdo%2BOzohbQaM4WFtzewo1KMCdBTwSr7bmLrLPFeUQBKN77FbujFXz0lP5F4g1Qh8lGm%2FKJTJjrZFhDiQHXgnQbilOpiOBnPrcpgwxMlVBNk3itakWv1wIo31xN9kcEwk2%2BhxkzjonLiOAkESBwu%2Bm0LEqsoYcYGJ7kO4O1LVDJ%2Bg9jEiHbqM90uIH3e%2Fi%2F75c6EH5BoxQ%2F0elnvjo77OycGLdYiJwPPgtmqM%2Bd0%2F9BgElF1jxFlo%2FinDPv9CDknRAIFK6N83F0xgS7OuwHYcLHosbEsdurThn7ahfCAE%2B8eHTKFI30HbzrgZv1RlGeUED8e3396U5HiLxQxiim8gt7lB7cMJS0w8kGOqUB6e%2B0hZiY%2BkMo7Lh5QNKHxqASmfhS5RvI3eemwQXxw9BMwGIH0qqNqhI7iv2VGQFysQttIMp5UmEcv0GJMSjRaxhTpAk9yyS9FuNMMepIzNxVjJcNcFWJ4y6%2F2FtuebUh3QFGnqkyB%2FWb9VG1vLiHYqSSMXaE4hD1Hm7D0cDUliPbSHg6s3KUdc69v1mHGIU3WIDuStPTBOCpdpmGzltiLuXvEOw7&X-Amz-Signature=1caa9b79a40f6575973eb39e51574b36259d7c787833b07ce28d2f38c422e643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSOAFK5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIEnOmQIyPb4%2FCB50KJEBIUcqprgY5NbS2n8A0CGzBzvhAiEA9YfOojWAcErS%2FSJU%2FGlj6w4bFNnG6W0nQ7%2FcvZGY3Pkq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDHe%2BWr0gEcJZC10NfSrcAweQLM2ZltZpHGbghTKTPN%2FnpPGMukYuX14xSAPiEa1qdhiK3uU89c%2B01tr%2FizJe%2BEdL8SdUek9zX%2FfU2W0YBp4Pevw3T1v4W6qa8Cw2PrNfVXdRHT9BnMVeJwfRvCu%2BFBuA%2Fn1lmdstyHg9C2LTCexNiwALWnvXqxjnJI0YotxExKBYaXdEiAoHmMNZwuaxbkb5biw4chsgjOP16mk7QkyD53denHK3bEj95dw9boMyJ2YUr6ZHeirDLiijrGmsYZWYm0jhYqKtGqOBiFtWHrc7s0HYQPzVFTYdo%2BOzohbQaM4WFtzewo1KMCdBTwSr7bmLrLPFeUQBKN77FbujFXz0lP5F4g1Qh8lGm%2FKJTJjrZFhDiQHXgnQbilOpiOBnPrcpgwxMlVBNk3itakWv1wIo31xN9kcEwk2%2BhxkzjonLiOAkESBwu%2Bm0LEqsoYcYGJ7kO4O1LVDJ%2Bg9jEiHbqM90uIH3e%2Fi%2F75c6EH5BoxQ%2F0elnvjo77OycGLdYiJwPPgtmqM%2Bd0%2F9BgElF1jxFlo%2FinDPv9CDknRAIFK6N83F0xgS7OuwHYcLHosbEsdurThn7ahfCAE%2B8eHTKFI30HbzrgZv1RlGeUED8e3396U5HiLxQxiim8gt7lB7cMJS0w8kGOqUB6e%2B0hZiY%2BkMo7Lh5QNKHxqASmfhS5RvI3eemwQXxw9BMwGIH0qqNqhI7iv2VGQFysQttIMp5UmEcv0GJMSjRaxhTpAk9yyS9FuNMMepIzNxVjJcNcFWJ4y6%2F2FtuebUh3QFGnqkyB%2FWb9VG1vLiHYqSSMXaE4hD1Hm7D0cDUliPbSHg6s3KUdc69v1mHGIU3WIDuStPTBOCpdpmGzltiLuXvEOw7&X-Amz-Signature=68ade74b487862f2857eff1e2d78418d8f2e8106f7952aed20a94a65b32759c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
