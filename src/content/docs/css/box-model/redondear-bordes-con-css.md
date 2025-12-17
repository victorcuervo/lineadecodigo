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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF42AASZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo3ZZq0nm1Aq1Nc0AQ9YBDbqL1i6BSlF1MdRaoreOR0AIgeLicI0lIcLi7cmP%2BmVhDeCMeJ2erTVQ%2FOgXrisA8zQ8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKhN3mrJwudHkra9KyrcA3pfyoWJLmr0vKq2kM%2FOTUOIbaOcqjsiO610avR4M2Ex2OhWzLp3H%2BbWREQgEUJbj4NBsW9PJFGLJNBalV2DBYZDXPmqpB5qGhYYcatAKHdRgIdI0f5HNaNrWp4%2BBWxowm96ZpSgKgjYaKAx%2B15JApwupdMT8eBdumsVVhV%2BZZOHt0ukraRWTVbCo85aNoJC2dsEoZLX4kxRKDfrOZjKW899PVH0xKc6GogvCzgoA5OsQrABaGOWjfq1PX1%2F53Z9d2IDLwtddwsBla40pjI26CtJv9TswOnwbkppwXnKKq7vt5gXsExBx9Iyj5RstN937j3l3EU00UTeWAvDmfGa6Cu3xyPWTYAqdeuYYb4IdJM3ABbSyOoMno7XisuVme%2F%2FjR7QweNyYiiTC1c30tux1fspZpGEquEGZrzZ0daoqOdi5xH%2F0%2B7ynZ9S8YCjLofDBf3fUSlni5aPfqRsQp3251fMf7woPDYx5A5fl%2BIWCYJHfsZdkDpvo2oVueNxGty8WJQxQBc7vdohcIegivHJNsRAlNzuteeV%2BzgiWz158kQGe63X%2FrtpCSJdpDOd9HK6no8eU3xlMJ3o4jB2RgTyuP5XmHtaZu1aB0fVUCmfHGvt7mYHSgr3%2B6Ibd0YiMPPeh8oGOqUB8rESqzXkt8u8EHWyociG0C%2FhG9TJPqI8Q9yRtaCSCbVVNgOIQwBB9X%2BoBuOpu1rk8DpKKBwQoGO0DIEQ94A9OGnbzrMc6MrhSEzhNlYsfAPgBSQ08d0v084%2Bu36%2BIH39NSF6z5swf%2BkH%2Btsvkk6R3R7GOKyVuTiGY58PJt4pZmyOw3EnvbYjIX01ghUxlNIXF%2Fz%2F97PSgTgkTad5Tauh%2Fnh%2BY0Jm&X-Amz-Signature=99c17a027bdc10c6ebe2ace1893b9e701f62f9c47e09a491094c15d1ce8e4b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF42AASZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo3ZZq0nm1Aq1Nc0AQ9YBDbqL1i6BSlF1MdRaoreOR0AIgeLicI0lIcLi7cmP%2BmVhDeCMeJ2erTVQ%2FOgXrisA8zQ8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKhN3mrJwudHkra9KyrcA3pfyoWJLmr0vKq2kM%2FOTUOIbaOcqjsiO610avR4M2Ex2OhWzLp3H%2BbWREQgEUJbj4NBsW9PJFGLJNBalV2DBYZDXPmqpB5qGhYYcatAKHdRgIdI0f5HNaNrWp4%2BBWxowm96ZpSgKgjYaKAx%2B15JApwupdMT8eBdumsVVhV%2BZZOHt0ukraRWTVbCo85aNoJC2dsEoZLX4kxRKDfrOZjKW899PVH0xKc6GogvCzgoA5OsQrABaGOWjfq1PX1%2F53Z9d2IDLwtddwsBla40pjI26CtJv9TswOnwbkppwXnKKq7vt5gXsExBx9Iyj5RstN937j3l3EU00UTeWAvDmfGa6Cu3xyPWTYAqdeuYYb4IdJM3ABbSyOoMno7XisuVme%2F%2FjR7QweNyYiiTC1c30tux1fspZpGEquEGZrzZ0daoqOdi5xH%2F0%2B7ynZ9S8YCjLofDBf3fUSlni5aPfqRsQp3251fMf7woPDYx5A5fl%2BIWCYJHfsZdkDpvo2oVueNxGty8WJQxQBc7vdohcIegivHJNsRAlNzuteeV%2BzgiWz158kQGe63X%2FrtpCSJdpDOd9HK6no8eU3xlMJ3o4jB2RgTyuP5XmHtaZu1aB0fVUCmfHGvt7mYHSgr3%2B6Ibd0YiMPPeh8oGOqUB8rESqzXkt8u8EHWyociG0C%2FhG9TJPqI8Q9yRtaCSCbVVNgOIQwBB9X%2BoBuOpu1rk8DpKKBwQoGO0DIEQ94A9OGnbzrMc6MrhSEzhNlYsfAPgBSQ08d0v084%2Bu36%2BIH39NSF6z5swf%2BkH%2Btsvkk6R3R7GOKyVuTiGY58PJt4pZmyOw3EnvbYjIX01ghUxlNIXF%2Fz%2F97PSgTgkTad5Tauh%2Fnh%2BY0Jm&X-Amz-Signature=b6f2bc1c1b6f68363784969fc305c3ad8b90027f4fab7f21b4f6e1e3ea3c2346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
