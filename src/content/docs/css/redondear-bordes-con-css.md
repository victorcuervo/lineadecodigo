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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ6A4TLT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBx8UdIqxFxAFqVjrgaYj96H%2B05cLCgJUEiff3eSwV8ZAiEAzGxfUj%2F6q6qFVgjjdzZp0LKVwE%2BbBhsZuqqPV6FN5s0qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyhfJAcAyQTHATQvircA8L%2FFmtOAaNCM2oDkuLkJGYD76ufQfMn4IDezZm9DcZTucZoW2%2F8rL4dv%2F2kJuY%2FM05dinhx1GedwVuP9fTspclNIJbVZYkoLQowMWJrEk19q9pLL4MfjuYaP2gF2IgbCF%2BTwvwtE7yTOXzzwXiK7DTe14Zg%2BHZbPh7UNkz%2BHOjAUH6CPMliYWvn3G6fTHPi8OctU1fO9pX7TFC51ANc0To%2BpIF3U%2B2GEBJsagCPwnTLH%2BeU58wRVNnHYwJqLcrUlC1Jiyaj9K9Ce1RiJgCEWkE%2Bc9EzOXYwJGq8xWd%2FcL069vTIuew0UcEEq1HXEN32wvG8HyHM024ALCRxLrP20%2FgYCqU0SiWXCH%2Ftyqyt%2F%2BqhDU2HIUyfSzMcuIsyxwm6fwju4vVZRqMtEbDQw3LuIjvpORI51NKsoTJKR16qShVWcL%2FHuOxV78tNefJ9%2FpLpihv9FUO144%2BK2x0Uk1RYjYVoSlLeCd6hMas0G%2FmiqrAKaWH7Zp32QYTrFmFm5hYlYIg4ltSrDUOvoMo9B5oFf%2FlkfD28LQC9mhAtK0ULoKviGbmBE569h4xT3hVkfIUA%2B%2BJgAFEhbx4ilfWYg3xwMV%2FDaS1EVQOFijcJ4dp0J2J5T5xE33SytmZyYJ4RMIC%2F1skGOqUBIUgouU%2FUIqrQibuQGzr77kdvp%2Bu%2BTiUjUTCYPsC8pNj8p2qeItoiZQN4C6MgbvVeghsS%2B27WBWe0Njy38SDKQobzHoCox6qV3qP7g%2B%2FmQIobhFwfuwTJQqVEW6VKgAQlNQqcDovT5aAN6No2w4Au4%2B7YNgGlqY0CztSOoMaqLySw5WF4xi4ZvIQj8Kmu0FbpA0F6ww4CgkpsdCZt193DP53rVbuL&X-Amz-Signature=218f9a284636dd3c894954b0f0ca1582c172797db9489e3dea4f34a6a6c6a4e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ6A4TLT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBx8UdIqxFxAFqVjrgaYj96H%2B05cLCgJUEiff3eSwV8ZAiEAzGxfUj%2F6q6qFVgjjdzZp0LKVwE%2BbBhsZuqqPV6FN5s0qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyhfJAcAyQTHATQvircA8L%2FFmtOAaNCM2oDkuLkJGYD76ufQfMn4IDezZm9DcZTucZoW2%2F8rL4dv%2F2kJuY%2FM05dinhx1GedwVuP9fTspclNIJbVZYkoLQowMWJrEk19q9pLL4MfjuYaP2gF2IgbCF%2BTwvwtE7yTOXzzwXiK7DTe14Zg%2BHZbPh7UNkz%2BHOjAUH6CPMliYWvn3G6fTHPi8OctU1fO9pX7TFC51ANc0To%2BpIF3U%2B2GEBJsagCPwnTLH%2BeU58wRVNnHYwJqLcrUlC1Jiyaj9K9Ce1RiJgCEWkE%2Bc9EzOXYwJGq8xWd%2FcL069vTIuew0UcEEq1HXEN32wvG8HyHM024ALCRxLrP20%2FgYCqU0SiWXCH%2Ftyqyt%2F%2BqhDU2HIUyfSzMcuIsyxwm6fwju4vVZRqMtEbDQw3LuIjvpORI51NKsoTJKR16qShVWcL%2FHuOxV78tNefJ9%2FpLpihv9FUO144%2BK2x0Uk1RYjYVoSlLeCd6hMas0G%2FmiqrAKaWH7Zp32QYTrFmFm5hYlYIg4ltSrDUOvoMo9B5oFf%2FlkfD28LQC9mhAtK0ULoKviGbmBE569h4xT3hVkfIUA%2B%2BJgAFEhbx4ilfWYg3xwMV%2FDaS1EVQOFijcJ4dp0J2J5T5xE33SytmZyYJ4RMIC%2F1skGOqUBIUgouU%2FUIqrQibuQGzr77kdvp%2Bu%2BTiUjUTCYPsC8pNj8p2qeItoiZQN4C6MgbvVeghsS%2B27WBWe0Njy38SDKQobzHoCox6qV3qP7g%2B%2FmQIobhFwfuwTJQqVEW6VKgAQlNQqcDovT5aAN6No2w4Au4%2B7YNgGlqY0CztSOoMaqLySw5WF4xi4ZvIQj8Kmu0FbpA0F6ww4CgkpsdCZt193DP53rVbuL&X-Amz-Signature=c44af112bb668bbb65766091bb2a5d69ae69e56e0e773e29ae457879c357508b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
