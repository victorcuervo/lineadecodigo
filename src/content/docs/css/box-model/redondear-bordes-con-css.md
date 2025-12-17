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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYFGNMHE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLj2%2FabD2tT%2FW1tJ3g0LQf9iqEmJgXFj3drUTjcurF%2FQIhAIKSUchC9QKiWo54s%2FCw4jhIjftdg3%2BuIcZWjCnv5uYJKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1559T%2FLigPzgfJTAq3ANA3%2FoY8BV9bgQLfRaNKIMnH%2Bh7cp7OATW%2B8wnuJBqGUh9rL6Vd4iOGHtuIbkQOYTNt4btD6L5rUZM7R9kA7N9AxndiJftccZofp32w%2FolpPgZnSSy9T3q1Pn4gdfaUme2Yf%2Bs6nhlxS%2FBX%2F4MAeaA%2BwQtGCANwURZs1wI4%2FWHaDEtORCgcrO2rdhV0tVa7p67wGPAXdY04ovSQRf%2Fs6bf5wpvOrhy5o7lJcP7C2apESsfWu5hljSNwVkk%2Bjy6bs5TGoeLBtzNuDuEKx5e49iVmXE6QLLZb5hlFjC9hdP%2BATTL%2F61sYIHsktQsqdbYmZ1lp70xxAECe73SnmgnVrdOmG2maTGVi1fjl5l9yynWG%2BjNj0I88S4rWZUXK1imAu4eirF7wmlJrUr9dVAs2yLj5ExfKgzMxVHtDiIsHu2jZr6DnleTaaGeSFFecX%2FHJ5ooSGL3K1kKXojsJc%2FdDfVZGisukyhD%2FYns7treKvnrOq%2BvAAWcW5z89FzGe%2B2%2FtvmcVKRbD%2FB7xyrozVwQhrN913EWc6MHkZpBf%2B4xwHVsVyaqlY8n1%2Fsi%2FdJhbD5RgKfCbv%2BuLJaNngWhvj%2Bq74H%2BMqaF3%2Bgf6Ax%2FtNqVyn%2FljpvbVhHn0QmrAejsbrTDMn4vKBjqkAX8rm47waA78ehlTNd2OyO5IrBO%2BtqqXWCPJl2U1F3Jr86oblYFUC7fskwyUy018cmlnQOjNfPoji%2BJRQ0nnXxsZEly2JFwQsfoIkRZLEDIAhJ8NJXmRLjEC%2FZRCExstY8tqVs4XNMtZzfK598rno%2Fuh7Otlk%2FTms63qo5HWdOg2s0%2Bw2m%2Beei21H6aZFpn0EBoq14GWHuPZXQVmTPR5H%2Bwww%2BMR&X-Amz-Signature=4e07e54792680654179d3a7e536487abad427f6005549e16e0c6e1261f06d62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYFGNMHE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLj2%2FabD2tT%2FW1tJ3g0LQf9iqEmJgXFj3drUTjcurF%2FQIhAIKSUchC9QKiWo54s%2FCw4jhIjftdg3%2BuIcZWjCnv5uYJKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1559T%2FLigPzgfJTAq3ANA3%2FoY8BV9bgQLfRaNKIMnH%2Bh7cp7OATW%2B8wnuJBqGUh9rL6Vd4iOGHtuIbkQOYTNt4btD6L5rUZM7R9kA7N9AxndiJftccZofp32w%2FolpPgZnSSy9T3q1Pn4gdfaUme2Yf%2Bs6nhlxS%2FBX%2F4MAeaA%2BwQtGCANwURZs1wI4%2FWHaDEtORCgcrO2rdhV0tVa7p67wGPAXdY04ovSQRf%2Fs6bf5wpvOrhy5o7lJcP7C2apESsfWu5hljSNwVkk%2Bjy6bs5TGoeLBtzNuDuEKx5e49iVmXE6QLLZb5hlFjC9hdP%2BATTL%2F61sYIHsktQsqdbYmZ1lp70xxAECe73SnmgnVrdOmG2maTGVi1fjl5l9yynWG%2BjNj0I88S4rWZUXK1imAu4eirF7wmlJrUr9dVAs2yLj5ExfKgzMxVHtDiIsHu2jZr6DnleTaaGeSFFecX%2FHJ5ooSGL3K1kKXojsJc%2FdDfVZGisukyhD%2FYns7treKvnrOq%2BvAAWcW5z89FzGe%2B2%2FtvmcVKRbD%2FB7xyrozVwQhrN913EWc6MHkZpBf%2B4xwHVsVyaqlY8n1%2Fsi%2FdJhbD5RgKfCbv%2BuLJaNngWhvj%2Bq74H%2BMqaF3%2Bgf6Ax%2FtNqVyn%2FljpvbVhHn0QmrAejsbrTDMn4vKBjqkAX8rm47waA78ehlTNd2OyO5IrBO%2BtqqXWCPJl2U1F3Jr86oblYFUC7fskwyUy018cmlnQOjNfPoji%2BJRQ0nnXxsZEly2JFwQsfoIkRZLEDIAhJ8NJXmRLjEC%2FZRCExstY8tqVs4XNMtZzfK598rno%2Fuh7Otlk%2FTms63qo5HWdOg2s0%2Bw2m%2Beei21H6aZFpn0EBoq14GWHuPZXQVmTPR5H%2Bwww%2BMR&X-Amz-Signature=5bb8f9587554719625a95103a42d1df64f47216e1d60c57716bfe1cdbb5889a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
