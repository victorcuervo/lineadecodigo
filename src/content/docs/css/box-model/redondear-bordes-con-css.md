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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LKIEBZS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8jWo0VRKpguMF0L%2FGgZegHZZyYmcJykuiLqJbSMVnZAiAx4KqhPFLynC8twiTyv60u4T24xAG9FcZ4gaOT%2Fp0CBCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMiRmggZouAMAQsE7LKtwDPEipGFfrYHb7uk3p5Hr%2B%2Bh93tSzfWI8Bbb1UzCioH5yWXvEBtnzJ1KEEFAT8292fQTe82QBgWRunx3KrHOpLSBXkFeVkMOMmu1vWMQlBEhbuu2M0o0IexYtBB%2B7af8yL00CgsTLer7O%2FaWZs%2BIhhWt7DgQNIyYByvWeySSHgPZAZbl9NywieuEptDuSgwDPkM7o2Xp2pC5hjiNdWT8jo6K2J9lWE4JWK7cKoldBtnAp8d%2BKySld%2F5dmqHvz5gLSg%2FoW2t1I1HhOCxdgK25KJ7BpEvoouBW1hazMOLQO1OJ5%2BZl5ca8F%2F274UE43xzRu4VxJ4BGF4vdLMddlPbSMpxkZYS2M6L0O6QYzeIaJ2WPffQ%2Fb6rdlOmTc4sSpm%2F7At7ZhF1K61Hcsbmue3n99MdzZyVjeLLj%2FBkwiRZBaA6VCzk4o75j8zDknM0sRIys1v3kJJjgxKWK7SM3nTj7VW01hoVIY7SGZioK%2BxRw0mNEvbaEi3AUX8SNTO3n5%2BOwfXd%2FIDvQ7nWmEmLQkY5HBKVcoYruyHE3Z1i3p5AknLbdZ%2B3eVgmO%2F33iysEANasSeIdlRKve2ZIcbkgJuUBWutcQv5TdUbCi00%2B7oZFl4T2vhk3yjLspe5Sq2dS0sww6qKygY6pgGkGo9fgmLjbRiwnXrBCpEi%2FEpAnV3MPleObbRi%2Bmta1QyBDznUqnP2SUei0BrFL1xhSZF%2BUhYACMdPGaiYVt8O0XTKwUkcuFpu%2B5UZY9M5ZfOsv6Pj8VwP4GiJHsrjrrJi22xWlV0ryX3ovoO96f7iRbLZTlA9lc%2FDU55aVqlQWodhUKcinB811g5wd33dGmL7rZe8mEsrfgfSK%2Byxq8tRJ82j84%2Fz&X-Amz-Signature=d3c582e46cf8a9c334d69ff08528855f8aa0c0012c2e7315b7f134ae603e1500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LKIEBZS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8jWo0VRKpguMF0L%2FGgZegHZZyYmcJykuiLqJbSMVnZAiAx4KqhPFLynC8twiTyv60u4T24xAG9FcZ4gaOT%2Fp0CBCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMiRmggZouAMAQsE7LKtwDPEipGFfrYHb7uk3p5Hr%2B%2Bh93tSzfWI8Bbb1UzCioH5yWXvEBtnzJ1KEEFAT8292fQTe82QBgWRunx3KrHOpLSBXkFeVkMOMmu1vWMQlBEhbuu2M0o0IexYtBB%2B7af8yL00CgsTLer7O%2FaWZs%2BIhhWt7DgQNIyYByvWeySSHgPZAZbl9NywieuEptDuSgwDPkM7o2Xp2pC5hjiNdWT8jo6K2J9lWE4JWK7cKoldBtnAp8d%2BKySld%2F5dmqHvz5gLSg%2FoW2t1I1HhOCxdgK25KJ7BpEvoouBW1hazMOLQO1OJ5%2BZl5ca8F%2F274UE43xzRu4VxJ4BGF4vdLMddlPbSMpxkZYS2M6L0O6QYzeIaJ2WPffQ%2Fb6rdlOmTc4sSpm%2F7At7ZhF1K61Hcsbmue3n99MdzZyVjeLLj%2FBkwiRZBaA6VCzk4o75j8zDknM0sRIys1v3kJJjgxKWK7SM3nTj7VW01hoVIY7SGZioK%2BxRw0mNEvbaEi3AUX8SNTO3n5%2BOwfXd%2FIDvQ7nWmEmLQkY5HBKVcoYruyHE3Z1i3p5AknLbdZ%2B3eVgmO%2F33iysEANasSeIdlRKve2ZIcbkgJuUBWutcQv5TdUbCi00%2B7oZFl4T2vhk3yjLspe5Sq2dS0sww6qKygY6pgGkGo9fgmLjbRiwnXrBCpEi%2FEpAnV3MPleObbRi%2Bmta1QyBDznUqnP2SUei0BrFL1xhSZF%2BUhYACMdPGaiYVt8O0XTKwUkcuFpu%2B5UZY9M5ZfOsv6Pj8VwP4GiJHsrjrrJi22xWlV0ryX3ovoO96f7iRbLZTlA9lc%2FDU55aVqlQWodhUKcinB811g5wd33dGmL7rZe8mEsrfgfSK%2Byxq8tRJ82j84%2Fz&X-Amz-Signature=3ff163117cc99e436fa5e6ed26636ec2466e50f66b705e0e9305f9aa157351f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
