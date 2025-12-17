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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C6PX7JK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B2QISsUCVd%2BR8ZE1xsDFoO%2BJ%2BKoNS8a7N7Aps0Pv2qgIgPgEuUESoMjZ12NESP3eJj2BTW2vOuHZrI81wh1sUFJIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2F7pNMTTf%2FXiHRuKircA59RtxKmlEfCSlr3GCUk9met2Auu7OrQgS8FVBAAYYQuI9%2F3njWs0xHpSJh6h49EuGF%2FSMaN05lTHP05JE5cZXMQsbZschBxDGV90JRD8WZFRjrSrINa1L8FbSfmsKfsdWkhHcsw71Y1%2BzZJw5qppTUrv4jQnN7%2F250NNPggNVgnHGXSb9OzGjSyfOtpSi%2FyOEJc8i9z%2B193DWZD1CZkcjzTtNIXOKE8uLMJPd%2BNZMf4KCnfEvc8XQ9bkqVO0q9urcCAu8lqcZWvv4Wln9Khc3Lhw7YgG2rGVbVNHKpFZLyxktMhQ0AEOA8DMhXIxEq05kk3GipaF5FU4cjIQF9ibA1i0Vx8fe8EK4JX%2BSc7rIAvh9HvQdu3QFnB2nS%2FbYvyvjtrjvRj8qauEYHGptrNm1i3JGVachRNOuPeeYfHwa4FgbcTtwscRrTfmCpAo06H5mwJFKYou0COP2vExBOqq0EOfKI91LbXSRbTTpfxlbLcH4yb7uWlAmFhlvp8nFgFV%2FHypi7N6Tx5uYml9zIC0cCJJ%2FEN9OWp1WxCoZhMTM12OAsqgqFYej5yaB2LMm47wnYPhaP%2BHabTcxBHrZa4pJK5b6xaCsIDtO%2Fr0TWmfYthn1iO%2FwJTCsjlYk%2BpMOWei8oGOqUBPJWoWl8uJK%2FEx6gIyJvRl%2FuUOVQZrOoLfrOG92YeID8UCDPs63%2F9hFz%2FL1QzDXszAB5iyT1nz8%2BtxSi186SDOz8I759TwiHgi8K3ppNukB4Wzz2jxNo1q8Qm3NjdHOmkChvAfYX5ci2RdHXIzP0RVO6sn2DaZS5HDTBTA%2BbQsBjjMDjGrunMR%2B05hJy3j%2F%2BrNqzJUGe%2BKbs5Rj9IP4YBGqIuT3Yr&X-Amz-Signature=4416322aa46030a4f0339496e638bb58d1029dc51c50a5d55a94c5ac0ebe288a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C6PX7JK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B2QISsUCVd%2BR8ZE1xsDFoO%2BJ%2BKoNS8a7N7Aps0Pv2qgIgPgEuUESoMjZ12NESP3eJj2BTW2vOuHZrI81wh1sUFJIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2F7pNMTTf%2FXiHRuKircA59RtxKmlEfCSlr3GCUk9met2Auu7OrQgS8FVBAAYYQuI9%2F3njWs0xHpSJh6h49EuGF%2FSMaN05lTHP05JE5cZXMQsbZschBxDGV90JRD8WZFRjrSrINa1L8FbSfmsKfsdWkhHcsw71Y1%2BzZJw5qppTUrv4jQnN7%2F250NNPggNVgnHGXSb9OzGjSyfOtpSi%2FyOEJc8i9z%2B193DWZD1CZkcjzTtNIXOKE8uLMJPd%2BNZMf4KCnfEvc8XQ9bkqVO0q9urcCAu8lqcZWvv4Wln9Khc3Lhw7YgG2rGVbVNHKpFZLyxktMhQ0AEOA8DMhXIxEq05kk3GipaF5FU4cjIQF9ibA1i0Vx8fe8EK4JX%2BSc7rIAvh9HvQdu3QFnB2nS%2FbYvyvjtrjvRj8qauEYHGptrNm1i3JGVachRNOuPeeYfHwa4FgbcTtwscRrTfmCpAo06H5mwJFKYou0COP2vExBOqq0EOfKI91LbXSRbTTpfxlbLcH4yb7uWlAmFhlvp8nFgFV%2FHypi7N6Tx5uYml9zIC0cCJJ%2FEN9OWp1WxCoZhMTM12OAsqgqFYej5yaB2LMm47wnYPhaP%2BHabTcxBHrZa4pJK5b6xaCsIDtO%2Fr0TWmfYthn1iO%2FwJTCsjlYk%2BpMOWei8oGOqUBPJWoWl8uJK%2FEx6gIyJvRl%2FuUOVQZrOoLfrOG92YeID8UCDPs63%2F9hFz%2FL1QzDXszAB5iyT1nz8%2BtxSi186SDOz8I759TwiHgi8K3ppNukB4Wzz2jxNo1q8Qm3NjdHOmkChvAfYX5ci2RdHXIzP0RVO6sn2DaZS5HDTBTA%2BbQsBjjMDjGrunMR%2B05hJy3j%2F%2BrNqzJUGe%2BKbs5Rj9IP4YBGqIuT3Yr&X-Amz-Signature=3ae1c8734cb91b236e9b8e39de68e87ccc38a0f422942ef04c98e4c18fa197e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
