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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624Y6PRUP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH4gfsJ22WAvv%2FAFWz00nZa4nqmeTsLbzNKVeEcrg%2FaQIhAP4%2FmCTgUa3kPHAWUwcxP73t1%2Fs60nPRVKoj8cThGAqAKv8DCHIQABoMNjM3NDIzMTgzODA1IgxwzGwNZIw20JKi4qAq3AMn%2Fr1v89k%2FAGRLoObIjfkfBDQFJFpfE16OO%2BjCUAVkoPbP6hYNFsvPcbKFmFhiXkjwQYkEpVXFa2Z7uVmmKgADBw5QItga9woyrkFzuTNei4oINbFkD1%2FizLLOe%2BsQ3gR2EeqAAT%2Fqst%2Fd7ovSmJUsNVExqALATRJBhN%2F08ucy1nCNFGlgfHtu2%2BX8%2FBuI0aDPo0UG3YmboC8vFPQZoP32TGUmrf1Z4nEBf%2BienvgACUf3r%2BhUujt79jyPdKMa085oWVV%2F8aDMPenMvC6v1Uw%2FGzl5RDeD8le2ojQldXLFyKIGpGyyWX%2FIzrtYJhirsD5laCVAve0Qyz14jMzj2RmvXIky3CmlSbRMhyGzhmloaZKuaIF3e8teoB8c9BKyglZlVJ4lVkxcoFCHLQlduOiN2RdW5gHUV6XE5O1SctnCom6vD60TJ6AQOxcJ5jSJvt20CF1Ud2equ0VVgnlesqM0XMcZSD1Sd5T6chjzFZ2eRhfwjAfQ6N9gq3y2rXNvFQw80j9HEHWlAlVMekRndJ4I5IRTkfeG6HN8Xbgv%2FxdnP8y9whTVrwRugJmihJx4j4iBtMPrrp%2Bx1l1uVV3mDCq5R3sU%2BOtQ7IYHEnKL6bymxG4rah5LQNPmNCbr0zDQ%2B4fKBjqkASF0h2oDPHSe2I%2B0y9clsYLWIWImSdy623Q8uq0KzuVLDCHdYcdXX7Vku2Z%2BzdgQhFXqgMFTBLCE54%2F%2F39Rp8sgzMEhLNNB1sDrvCGnaeLCr0EpbZeBBNzm67T%2FdeGlHD0OFHAoAqWY9U40%2FP1lPEC9Mwz6uHPcAZatb3EfFrazI%2FjEkcEe8KRJzRfZxYk7SF0b9Lhkc8EO0NRLSU3lYgFsysdYe&X-Amz-Signature=87e0677641323d5e083a592f409940af557d8772907d9339463578876bac5b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624Y6PRUP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH4gfsJ22WAvv%2FAFWz00nZa4nqmeTsLbzNKVeEcrg%2FaQIhAP4%2FmCTgUa3kPHAWUwcxP73t1%2Fs60nPRVKoj8cThGAqAKv8DCHIQABoMNjM3NDIzMTgzODA1IgxwzGwNZIw20JKi4qAq3AMn%2Fr1v89k%2FAGRLoObIjfkfBDQFJFpfE16OO%2BjCUAVkoPbP6hYNFsvPcbKFmFhiXkjwQYkEpVXFa2Z7uVmmKgADBw5QItga9woyrkFzuTNei4oINbFkD1%2FizLLOe%2BsQ3gR2EeqAAT%2Fqst%2Fd7ovSmJUsNVExqALATRJBhN%2F08ucy1nCNFGlgfHtu2%2BX8%2FBuI0aDPo0UG3YmboC8vFPQZoP32TGUmrf1Z4nEBf%2BienvgACUf3r%2BhUujt79jyPdKMa085oWVV%2F8aDMPenMvC6v1Uw%2FGzl5RDeD8le2ojQldXLFyKIGpGyyWX%2FIzrtYJhirsD5laCVAve0Qyz14jMzj2RmvXIky3CmlSbRMhyGzhmloaZKuaIF3e8teoB8c9BKyglZlVJ4lVkxcoFCHLQlduOiN2RdW5gHUV6XE5O1SctnCom6vD60TJ6AQOxcJ5jSJvt20CF1Ud2equ0VVgnlesqM0XMcZSD1Sd5T6chjzFZ2eRhfwjAfQ6N9gq3y2rXNvFQw80j9HEHWlAlVMekRndJ4I5IRTkfeG6HN8Xbgv%2FxdnP8y9whTVrwRugJmihJx4j4iBtMPrrp%2Bx1l1uVV3mDCq5R3sU%2BOtQ7IYHEnKL6bymxG4rah5LQNPmNCbr0zDQ%2B4fKBjqkASF0h2oDPHSe2I%2B0y9clsYLWIWImSdy623Q8uq0KzuVLDCHdYcdXX7Vku2Z%2BzdgQhFXqgMFTBLCE54%2F%2F39Rp8sgzMEhLNNB1sDrvCGnaeLCr0EpbZeBBNzm67T%2FdeGlHD0OFHAoAqWY9U40%2FP1lPEC9Mwz6uHPcAZatb3EfFrazI%2FjEkcEe8KRJzRfZxYk7SF0b9Lhkc8EO0NRLSU3lYgFsysdYe&X-Amz-Signature=701fe955835ac47955874328c3018f322bfc4d0e26cefe1ce81202f4ca14e8df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
