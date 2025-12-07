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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y547TAAR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYw%2Fhk5vhQXZ5Ez%2F%2Bc6xpHEHs3eSrYgHnQa1ZYfEZaxwIhAKGhg6E2%2B4CeTuQNIXpWr88CIhXAPdHBVY0Xn7SVpt7NKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr4Nf3E4Aj7TD1qDoq3AOX1N%2Fo%2F0rAO00JbGMxG8rox0meVe%2FCCVCNMfM%2BHshJdA%2BPLf3s27xwoQNS%2F2GRR51cK1sK%2FErJ6UiLdBgK3BF9gFHKiPmwqldwE4ObxrWyNq5jnUcBVlZoTuYxLuBowIGHn34YapBhOC0J58xWq4BLeGgG4mrrUJV0eTS%2BCH9z7AfJX4EqVknWq5gz%2FIOn62lNY%2BlXRU0LLCQnyuvXcOEiGvW2RVx5wRleoDSLbkWkQLHYaS4kYIQ5eGmluT2bLj2Jo7fH1rfkWjDP54YwOvtTYVdbQ2QEmB05vEHXbomOPyxMFYVNSkX6y59SS3mUYFI6hnzs2CXuzl7LyC0Txt8O0kdyP%2FJSAFyZUDIZ0sfEaMUlpt1VKiEjaENUdwWQlMlyPpIhBoUHMzert9kW%2Fv4vFaLNBvI1T5X16KQjGl1iam44XMZGKdKGxuyaCbZUgOHof7jVVRc82q8I%2FxFHJkINPErYHu6%2FZcmUX6RoeuHECnhkVdoJVuN9ava%2BeGo7m%2FRiO5MG%2F9tCyhztj3eijqtGl22crGjBAOO%2FAKMm9O%2F2Rg%2BLc4%2FdFwcVzXC8doSpK0AskWjzOfsU6on6IEdcwXE9DClj1h%2F86PZCEwyZDkXFxdD0Ql8sG12cI%2F5TtDD3odjJBjqkAdHE%2Bj%2FX%2Fa8fiYzSoHA2CorQhNClehoPorJMszDYiuinTcUSl4Q9tu4CKdKK5T2R0DcNi3wGa22yk%2FpT5dZn5WrsfGeYCZF5k09IfSpvJks%2FbWtxSH%2BPFGghepMMVsnf20XxVgtGa9wtqt1MA7iCAAYnaPPqV24kyFCIbgxpSqB7TuvhcPW%2BGM5tzMgw3lJciaZ6zis9EiACDuNj1feomz8FTOFV&X-Amz-Signature=235a6c73ba91aabafc7aac9c1c303287ecc726b28ef0e47f61d3acd9175885a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y547TAAR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYw%2Fhk5vhQXZ5Ez%2F%2Bc6xpHEHs3eSrYgHnQa1ZYfEZaxwIhAKGhg6E2%2B4CeTuQNIXpWr88CIhXAPdHBVY0Xn7SVpt7NKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr4Nf3E4Aj7TD1qDoq3AOX1N%2Fo%2F0rAO00JbGMxG8rox0meVe%2FCCVCNMfM%2BHshJdA%2BPLf3s27xwoQNS%2F2GRR51cK1sK%2FErJ6UiLdBgK3BF9gFHKiPmwqldwE4ObxrWyNq5jnUcBVlZoTuYxLuBowIGHn34YapBhOC0J58xWq4BLeGgG4mrrUJV0eTS%2BCH9z7AfJX4EqVknWq5gz%2FIOn62lNY%2BlXRU0LLCQnyuvXcOEiGvW2RVx5wRleoDSLbkWkQLHYaS4kYIQ5eGmluT2bLj2Jo7fH1rfkWjDP54YwOvtTYVdbQ2QEmB05vEHXbomOPyxMFYVNSkX6y59SS3mUYFI6hnzs2CXuzl7LyC0Txt8O0kdyP%2FJSAFyZUDIZ0sfEaMUlpt1VKiEjaENUdwWQlMlyPpIhBoUHMzert9kW%2Fv4vFaLNBvI1T5X16KQjGl1iam44XMZGKdKGxuyaCbZUgOHof7jVVRc82q8I%2FxFHJkINPErYHu6%2FZcmUX6RoeuHECnhkVdoJVuN9ava%2BeGo7m%2FRiO5MG%2F9tCyhztj3eijqtGl22crGjBAOO%2FAKMm9O%2F2Rg%2BLc4%2FdFwcVzXC8doSpK0AskWjzOfsU6on6IEdcwXE9DClj1h%2F86PZCEwyZDkXFxdD0Ql8sG12cI%2F5TtDD3odjJBjqkAdHE%2Bj%2FX%2Fa8fiYzSoHA2CorQhNClehoPorJMszDYiuinTcUSl4Q9tu4CKdKK5T2R0DcNi3wGa22yk%2FpT5dZn5WrsfGeYCZF5k09IfSpvJks%2FbWtxSH%2BPFGghepMMVsnf20XxVgtGa9wtqt1MA7iCAAYnaPPqV24kyFCIbgxpSqB7TuvhcPW%2BGM5tzMgw3lJciaZ6zis9EiACDuNj1feomz8FTOFV&X-Amz-Signature=abea1a6af19f2ac51755122c45d6b55dff4063ca6deb391435e3222ef1e781eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
