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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6XNHW4P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCICjHVa8D%2BvmG41aCPmhA31%2Frj%2B0VFx%2BvrGDOmIMuowFYAiBSo8TG9ZeE3eIrwpE4gJwfnFgAsqIIvsiajNB2Jd2Jbir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMyfnxy4rjKzd%2BUWTxKtwD3q1vu0XYtNcHI%2BopHVpsH6FN3zFvF8%2BGLXTmaURiuJe%2FpptZ6SWLCY%2BKFlOPQOM%2BXRLW%2B3uKO8f%2FnB%2FUH1Xd6Ygsd4R5s0i3AwjXk4Uw5tcoqNWVOKIYlL3f1KKIUyKBiLA1KOtaaqijEpRcWjYGA3lY8Bu2PR8vuDZjFnIDNXErZQEY2SqWMezrA67zecZxZHCBdeBDzibQNjsUXOxKpohaShyd9gk5KH%2FBHImGy6MTMgYg305wMW4yniqwxTsP%2BjWC8Vis%2FP%2F%2BcX1RP%2FOj8bKGy3PUgX%2FxP9maiCTmgWsAnShJkigdZn%2FujX2IODMtmC6hHgwdK6byCnfzEflTZ32ayRxBSnn48uCd4ezTljDRg3u5y%2FSDqeS3dLCjd1Dt%2FIvuiGduLYFeQMUjzReY5VrHu5b3DHvQ1fJbp6f%2FYDvWPkaCdCYzVw3tqRwFzDxmXvrFK%2F4KVQ4jZXFBj3zxRanHugCeQNVY8kM4%2Fsa5lZQc4RGuaqpxozCajrnV9eepHUZClqJ6cVKDZB8B%2F9Ct0o8n%2FMTPACj5ujRUta5caIlXGFz2WDzT0rM2wntz9cX%2B%2BL0%2FVsIJZxsPxoVzpMfkelU8kwbowMeInhETu3ZS8JnEb3AcjJ7f9XlJgIUw6oTFyQY6pgEqTUxNHvcWBmZdRbLwZRB4ca6%2FdQ68u6x4az4IHHpZZAfF%2BBCG3%2FtG0%2BrkFbBUaKo0Y1q6cXhHjNpUYX59rKlkcyXOLNxxjZpJ9cZ4KK28pl33%2BBu6lfkhX69WonV%2Fj4Oocz5dGL1rEF1hbLgN7DTltuqu5ic7teIBvrmUYDYbz5LQlYr6UQsVRflB%2FsqH6CXqWQ6d2Z1Wtgvym%2Bnft6oJRkrNvozQ&X-Amz-Signature=72b43250e2bec23b4839e0f86f429ecf68dfc3ab017d4f056416655cd77ca413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6XNHW4P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCICjHVa8D%2BvmG41aCPmhA31%2Frj%2B0VFx%2BvrGDOmIMuowFYAiBSo8TG9ZeE3eIrwpE4gJwfnFgAsqIIvsiajNB2Jd2Jbir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMyfnxy4rjKzd%2BUWTxKtwD3q1vu0XYtNcHI%2BopHVpsH6FN3zFvF8%2BGLXTmaURiuJe%2FpptZ6SWLCY%2BKFlOPQOM%2BXRLW%2B3uKO8f%2FnB%2FUH1Xd6Ygsd4R5s0i3AwjXk4Uw5tcoqNWVOKIYlL3f1KKIUyKBiLA1KOtaaqijEpRcWjYGA3lY8Bu2PR8vuDZjFnIDNXErZQEY2SqWMezrA67zecZxZHCBdeBDzibQNjsUXOxKpohaShyd9gk5KH%2FBHImGy6MTMgYg305wMW4yniqwxTsP%2BjWC8Vis%2FP%2F%2BcX1RP%2FOj8bKGy3PUgX%2FxP9maiCTmgWsAnShJkigdZn%2FujX2IODMtmC6hHgwdK6byCnfzEflTZ32ayRxBSnn48uCd4ezTljDRg3u5y%2FSDqeS3dLCjd1Dt%2FIvuiGduLYFeQMUjzReY5VrHu5b3DHvQ1fJbp6f%2FYDvWPkaCdCYzVw3tqRwFzDxmXvrFK%2F4KVQ4jZXFBj3zxRanHugCeQNVY8kM4%2Fsa5lZQc4RGuaqpxozCajrnV9eepHUZClqJ6cVKDZB8B%2F9Ct0o8n%2FMTPACj5ujRUta5caIlXGFz2WDzT0rM2wntz9cX%2B%2BL0%2FVsIJZxsPxoVzpMfkelU8kwbowMeInhETu3ZS8JnEb3AcjJ7f9XlJgIUw6oTFyQY6pgEqTUxNHvcWBmZdRbLwZRB4ca6%2FdQ68u6x4az4IHHpZZAfF%2BBCG3%2FtG0%2BrkFbBUaKo0Y1q6cXhHjNpUYX59rKlkcyXOLNxxjZpJ9cZ4KK28pl33%2BBu6lfkhX69WonV%2Fj4Oocz5dGL1rEF1hbLgN7DTltuqu5ic7teIBvrmUYDYbz5LQlYr6UQsVRflB%2FsqH6CXqWQ6d2Z1Wtgvym%2Bnft6oJRkrNvozQ&X-Amz-Signature=8eb6ae3b1746a10c3968a14662da3ceaf63270f6f9115fefd65f7f9f77fedfa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
