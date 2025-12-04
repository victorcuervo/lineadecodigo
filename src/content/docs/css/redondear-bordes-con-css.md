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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEGAAEH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICV9nF%2B7wayJzKC3o49MLjQ2dNVptL4aMpoz3CgCecBgAiEA26kp9KoBadTvBGIa%2BwSUmvNjcX%2BODIhYWgZoDB2Zx%2F4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFQPGYXZ5fxRv2128CrcA4d4B4XADqexM7CbhHbvLX1DpzW%2FwJcB5yj5pdDeKClYx%2BT1E09Pt6jvSDDaAgsbbhztoIh73oUNr9y86dAoQ9iyj01yuN8iZ%2FQTsoTdzhBvpD4OhuwVMgvT1YYMnFD2BJomdtg3LJGKqsl%2B2Zbt%2F3OQ%2BUlocw5Dik6iC5ogtW%2F42GvAEp%2FBuNQTlnQNIQBg6aWqB0H2K%2BZjSh5exj3eVB7muFDlA%2BhMYL%2BReFs%2B6ZacVAKfE%2Bsngf%2FuAYX1R2qcki%2FQv1JNEyoUxFGvsCUD05wTeSEaX82iemm3R1Wj0bqEEIWulvoIguTnvBjDPe93U%2BScKxadqXGYXPS2yhJLP3SmvN336n8tQ8utZiGVLG%2BiNFLAWWHmUnYbaX8u7xkmkGeJFQ1bBJIca7SLxyPoDqXkcbi6ss0AqfPCi%2F3NiUEohB5cOypgE2Gc%2F0oeX%2By3D4AZdUgCUbkorQlXeOjcLJlJ%2BQ0eljgifDGHXv5qShNzjOXSRul5GiczPX2ajmWuVZb1qZuP8%2Bfc612acgMgOZerUd0cglZObg7nX0vNqnuptDdTLn4QYWZhif%2BQL8AbhfGIkvs1Bz0r0h8k2HMGFWggfrQSo57ZzPWdmcoh1fyyf9cjaCRWoD6Ky6DAMMqqxckGOqUBhkXm3P%2FUBkT19Q8jZOQ1tdjjfzJz5IAO10jpSvytu8io%2BY%2FgWeQFGzA9d5ae5PFRMJd9C7b1PU%2BsfK5dxOXsIcjf3J8GRGT0BVOqeGS6%2F%2FlIadwzY2HMaTJiSROK5WTdgYVJnPD2KtSj%2Fug%2B9JjP6pO1wMqqAmeW%2F3pPG6lwNsTSc4tP06afTiyIcHd%2FPHuklSza%2Bo3ZTLM24pcA3eiXe%2BxnOZlD&X-Amz-Signature=fb49084b3bb4e2f002777a20b85d40937d5154d6d7b0b1de7ef128280566c4c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEGAAEH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICV9nF%2B7wayJzKC3o49MLjQ2dNVptL4aMpoz3CgCecBgAiEA26kp9KoBadTvBGIa%2BwSUmvNjcX%2BODIhYWgZoDB2Zx%2F4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFQPGYXZ5fxRv2128CrcA4d4B4XADqexM7CbhHbvLX1DpzW%2FwJcB5yj5pdDeKClYx%2BT1E09Pt6jvSDDaAgsbbhztoIh73oUNr9y86dAoQ9iyj01yuN8iZ%2FQTsoTdzhBvpD4OhuwVMgvT1YYMnFD2BJomdtg3LJGKqsl%2B2Zbt%2F3OQ%2BUlocw5Dik6iC5ogtW%2F42GvAEp%2FBuNQTlnQNIQBg6aWqB0H2K%2BZjSh5exj3eVB7muFDlA%2BhMYL%2BReFs%2B6ZacVAKfE%2Bsngf%2FuAYX1R2qcki%2FQv1JNEyoUxFGvsCUD05wTeSEaX82iemm3R1Wj0bqEEIWulvoIguTnvBjDPe93U%2BScKxadqXGYXPS2yhJLP3SmvN336n8tQ8utZiGVLG%2BiNFLAWWHmUnYbaX8u7xkmkGeJFQ1bBJIca7SLxyPoDqXkcbi6ss0AqfPCi%2F3NiUEohB5cOypgE2Gc%2F0oeX%2By3D4AZdUgCUbkorQlXeOjcLJlJ%2BQ0eljgifDGHXv5qShNzjOXSRul5GiczPX2ajmWuVZb1qZuP8%2Bfc612acgMgOZerUd0cglZObg7nX0vNqnuptDdTLn4QYWZhif%2BQL8AbhfGIkvs1Bz0r0h8k2HMGFWggfrQSo57ZzPWdmcoh1fyyf9cjaCRWoD6Ky6DAMMqqxckGOqUBhkXm3P%2FUBkT19Q8jZOQ1tdjjfzJz5IAO10jpSvytu8io%2BY%2FgWeQFGzA9d5ae5PFRMJd9C7b1PU%2BsfK5dxOXsIcjf3J8GRGT0BVOqeGS6%2F%2FlIadwzY2HMaTJiSROK5WTdgYVJnPD2KtSj%2Fug%2B9JjP6pO1wMqqAmeW%2F3pPG6lwNsTSc4tP06afTiyIcHd%2FPHuklSza%2Bo3ZTLM24pcA3eiXe%2BxnOZlD&X-Amz-Signature=fa9e84e169f9e4b475e4e0051e25b045545d846ceb19359512540586601fbba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
