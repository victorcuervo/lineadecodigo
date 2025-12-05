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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RLQ4AOM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpAy%2F%2Fv1XgJ0%2BSkIXDnLqftKamaZRgqWybf%2BsIgf0unQIgTtgN2TDDas3xP2etEXqqwD4E%2BHc%2F%2BTF9aXooyDRhaRgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLfqcXnlS7jdI9GvlircA7iQtWglE7U4%2Fh3meQ2dZ1kzyiBW9%2BDDdjG4HiThwFoEeOKcfceB6qGoglmzOWm%2BzFgy3HzMtphRIdga6d9ssZGLB5QCpl4wzefTltWmTnNN5NNXHrPNqyKYwJWIiFoJ2gr6DOtUWB9Fbr2JyKW53k0ca9%2B1StGkTRshyIuaKhnCX5yfzz0igp1l846F%2BJV60uz89KCZ%2FTpKbsMIvHPWScZIumw1OkehcaBuRmrfoiZ4pK6ldLAsCQNubhFplInD19lOjJ%2Fn1Jwrbz0IzxW9I7cpIAqMs0%2FOadUdX4gDdlZzTaKwOoslMRoZnB0kbR3t3vtS3gxqQBgVgowZak7XP5a0BpUOfgkx8ZWKt5XsjxCKZdhSlVKJmFgGpGNiNnb1cb7kvlvML0MtICWJ4vbN3naM%2BRbg5Qss8wms%2B5vON4uITwxvV3H%2FTd1pzUXACm7YY9IlVdtUPH%2F%2BtgQ%2FSFpR6wbRdYZaLLrhZYP5J8k4sHvCnUkO1x66l0OneOaYVjDp9gIoxMb1xx27gMKcN7NzQJx6F8fpIjXC9ci2Bnb%2BQUDrKx8sqRmPpLjAC54eO77ABQ%2FPIwlnxn0zfgXcrV7z4F52fGvEqwpKSsWYVG0lIOGOElmXMz5SEYLs%2FRzYMO%2BLyMkGOqUBIxb8odJm72z9lQprVKhkTy1kG3bXzE36qXgX4BUxbARYiFcVAxf9uo9i7Qkn16yxn2Q1p3stfJJolBtaqRSegN3cVRYXqf1cmookHfQbLsPXg%2B8V4ZdD9MBnPq1Gl8eGcGsjDKCq7fy7110jjgFwPOoOiKmadkrF7d1Je0y8zxFq9D03CDHr%2F7meq0jS1wSZoEhTIwSlYD%2BYfWO6yEqp%2BtdrQcXA&X-Amz-Signature=5d3aa5c8ba5210e6aedf1af17dc4db5ca98e6cc668de094be80dab4d68ac0f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RLQ4AOM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpAy%2F%2Fv1XgJ0%2BSkIXDnLqftKamaZRgqWybf%2BsIgf0unQIgTtgN2TDDas3xP2etEXqqwD4E%2BHc%2F%2BTF9aXooyDRhaRgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLfqcXnlS7jdI9GvlircA7iQtWglE7U4%2Fh3meQ2dZ1kzyiBW9%2BDDdjG4HiThwFoEeOKcfceB6qGoglmzOWm%2BzFgy3HzMtphRIdga6d9ssZGLB5QCpl4wzefTltWmTnNN5NNXHrPNqyKYwJWIiFoJ2gr6DOtUWB9Fbr2JyKW53k0ca9%2B1StGkTRshyIuaKhnCX5yfzz0igp1l846F%2BJV60uz89KCZ%2FTpKbsMIvHPWScZIumw1OkehcaBuRmrfoiZ4pK6ldLAsCQNubhFplInD19lOjJ%2Fn1Jwrbz0IzxW9I7cpIAqMs0%2FOadUdX4gDdlZzTaKwOoslMRoZnB0kbR3t3vtS3gxqQBgVgowZak7XP5a0BpUOfgkx8ZWKt5XsjxCKZdhSlVKJmFgGpGNiNnb1cb7kvlvML0MtICWJ4vbN3naM%2BRbg5Qss8wms%2B5vON4uITwxvV3H%2FTd1pzUXACm7YY9IlVdtUPH%2F%2BtgQ%2FSFpR6wbRdYZaLLrhZYP5J8k4sHvCnUkO1x66l0OneOaYVjDp9gIoxMb1xx27gMKcN7NzQJx6F8fpIjXC9ci2Bnb%2BQUDrKx8sqRmPpLjAC54eO77ABQ%2FPIwlnxn0zfgXcrV7z4F52fGvEqwpKSsWYVG0lIOGOElmXMz5SEYLs%2FRzYMO%2BLyMkGOqUBIxb8odJm72z9lQprVKhkTy1kG3bXzE36qXgX4BUxbARYiFcVAxf9uo9i7Qkn16yxn2Q1p3stfJJolBtaqRSegN3cVRYXqf1cmookHfQbLsPXg%2B8V4ZdD9MBnPq1Gl8eGcGsjDKCq7fy7110jjgFwPOoOiKmadkrF7d1Je0y8zxFq9D03CDHr%2F7meq0jS1wSZoEhTIwSlYD%2BYfWO6yEqp%2BtdrQcXA&X-Amz-Signature=0046a0ccf5d83176f1194668eab14961d65674fdc362517f3e0a02d5e7194346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
