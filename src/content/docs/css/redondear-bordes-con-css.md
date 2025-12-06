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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652D5WJGZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B5MEweWbjXSqcntrDShNXWWmZv4b9sBqBuJajfpVn4wIhAJCxmmOq%2Bv6UldTLI5Gxfm71q2%2BUt4Ag010macMRKRc1Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxfS9CQMmu0%2BTy%2BnYMq3AOErSWz3lr2RYbwppiArltfT8UtSrekFwuGkUtTohTJ9HbzeHpygOWziIwadt9Dhr3EN7OHYU6yzGA3emj81df%2F%2Fb8lInxt7DZH5YtIOUwTq%2BPEovDbavZ1o5ZRExT%2BAC4f%2FXL7kbolEo%2BUw%2B1Q8tJZVLWpKItxZwxpLIRugKnD3WzjfuQCG6e81UAIkyglCx4N7bvvGeM0cOgR50K8QvxNzcE5kkHUUY60wqaFT95YiisWHrb2YDRaN6BuEVsSnKVb0QVsWCI4LLunghqmk1s1ar%2FF86yES6BSAU1j6LzAk4pC%2FRhhKi39uggal%2BZ0yjlpQumzr%2FVUZ8FGJm1KAW9szpjJclKV%2FKpx6U1LIHyRkzeEgbPn%2BxV5hb3nJjb23mFH9%2F75yDBjFFIhswHPi6%2B%2FGEaiNOAQ3eDaTK2TOJzpTpGZJiVDfiLKCEu8lGF02v7SfBa8vVN1Uyo69IWSccPa0LP2LqDBDvRsSfNU2wVb2ruLyCIOqoiK6%2FIxB5QhrfaNk06CDwOP1mayfQMIuIf8vOYsrRnYsJRBxjJ51mh3BL5HdE39BRa8smr5BAENF523NMJKNx7cwaOsuqoDFGfq1bnQRmlpzxn5NCzEcrsLqPieXdlSE3jNTsskXzDiptDJBjqkAbT8yJEj%2FBpJm6Z%2FLhNwScuNaz4kLxHDuqE%2BG3QDGi6LL9d4BogMfdpkFUi3sPVO0lnTcZT7sW78uGKYCU6J8u7UX5NDrHgDdGPwU4VX0Nf0w2gMXBvQ76MZOfQeZMcQHt81AiHAaLfxat2FcC8wpvTeDtoCg0g48p%2FEmxMNsQFz7bmcNBjYfGo1IO1dp3XCQWFwRCIEAgIw6mYtHTLepzVsHWEU&X-Amz-Signature=b5a672a7d9a9d0ef6479ceebbdd2a3d78723e20dcb339af920c28910b35f2f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652D5WJGZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B5MEweWbjXSqcntrDShNXWWmZv4b9sBqBuJajfpVn4wIhAJCxmmOq%2Bv6UldTLI5Gxfm71q2%2BUt4Ag010macMRKRc1Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxfS9CQMmu0%2BTy%2BnYMq3AOErSWz3lr2RYbwppiArltfT8UtSrekFwuGkUtTohTJ9HbzeHpygOWziIwadt9Dhr3EN7OHYU6yzGA3emj81df%2F%2Fb8lInxt7DZH5YtIOUwTq%2BPEovDbavZ1o5ZRExT%2BAC4f%2FXL7kbolEo%2BUw%2B1Q8tJZVLWpKItxZwxpLIRugKnD3WzjfuQCG6e81UAIkyglCx4N7bvvGeM0cOgR50K8QvxNzcE5kkHUUY60wqaFT95YiisWHrb2YDRaN6BuEVsSnKVb0QVsWCI4LLunghqmk1s1ar%2FF86yES6BSAU1j6LzAk4pC%2FRhhKi39uggal%2BZ0yjlpQumzr%2FVUZ8FGJm1KAW9szpjJclKV%2FKpx6U1LIHyRkzeEgbPn%2BxV5hb3nJjb23mFH9%2F75yDBjFFIhswHPi6%2B%2FGEaiNOAQ3eDaTK2TOJzpTpGZJiVDfiLKCEu8lGF02v7SfBa8vVN1Uyo69IWSccPa0LP2LqDBDvRsSfNU2wVb2ruLyCIOqoiK6%2FIxB5QhrfaNk06CDwOP1mayfQMIuIf8vOYsrRnYsJRBxjJ51mh3BL5HdE39BRa8smr5BAENF523NMJKNx7cwaOsuqoDFGfq1bnQRmlpzxn5NCzEcrsLqPieXdlSE3jNTsskXzDiptDJBjqkAbT8yJEj%2FBpJm6Z%2FLhNwScuNaz4kLxHDuqE%2BG3QDGi6LL9d4BogMfdpkFUi3sPVO0lnTcZT7sW78uGKYCU6J8u7UX5NDrHgDdGPwU4VX0Nf0w2gMXBvQ76MZOfQeZMcQHt81AiHAaLfxat2FcC8wpvTeDtoCg0g48p%2FEmxMNsQFz7bmcNBjYfGo1IO1dp3XCQWFwRCIEAgIw6mYtHTLepzVsHWEU&X-Amz-Signature=748469c3b23a3c5079708fef77a0e2eecbeaef8fa7621aa7eda951cfae60855d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
