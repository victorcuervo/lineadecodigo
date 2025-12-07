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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C6YADLH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAi88rK%2Btvmzyph4fwEeUZNfKsNrxO%2B8N6xXR9k6VPwAiEAjMUeHpjoGN9sApE1ktGdxKUvK01Hk9n1KeA7F2rfqYEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDHVpoPd7fYW0szPircA9sP80jSu2Crd%2BvJzO9WpSQ3IRXykyCPD4S0XvKuSzhZMT90Hym8osUH%2FsYC3lhmdSy4C9VPXudevG1FaIty8XLDxcTg59JZj3Oc3h031BKPyKLCqs4fHq%2FfrHprYjLeOF6b%2FlQ2d5qRrSoP0fVH8XbWO7GMv%2FcjRB3eHF4cXWgODlA8YHaBFv1l5EG3TKlZjsdHNx6USgE151JnUX1gKTNIFmbLO5l2lCKkfSbeW4yxbux%2FN%2Bl1DQgJaruqBkziRQ0UNvPZpJBu6wVJ39yABn4Z8BQSGyKWa10%2FoP001zM3nVvS2hvsJvKy5NlIu74uFpOQLJ9Yj8%2BZUGOtAnA7DExTi8jo6sGewnDUkDIwHBjIheAiwrTgG9IgDXiwG6jTH%2Bj64dOvTCoyp%2BZYDn%2BT5S8JyLf%2F2aN8mI%2FFh35qhfYDmCXrCgaL8lbpOcl519cv6kqXfTQJV8Z2VHh51MSQbyNmnytguD35huupnmcyBn%2FgU4%2FEExSJ4j4lBvf4lG0RQRystw4kHHv21BQ7hTiE8TgFg6v1IINVLCXBZm9y4SudOaTd2qMEA5pH4ZNCk%2F9YOUfD04kh5RkxoGCE2%2FORx86R%2BgzFbEhe86yFTEpo%2BdxkcizN0jsMy4k%2FRASZMNSZ1ckGOqUBj9mIaYdEckuXYhCB2bjXvfi1mCD0UpGiZKYEDp8vy%2F%2BpoMLNfVu5XUAvyEC0L7tOHdxgvm3%2F347PP4TTsysc35p0Kvbd8SylB%2FH9vg%2FGR6jtdYMofzZAIxUlRmd1bZ0AIkXUgGYsCgZ1uoJZnyNASxvXYe86afs7YAcyu7AqZh14teIl8PhERUu6YMtsNTAjAx%2FqOMXeA9lggG2DXj1LjR8a1PLA&X-Amz-Signature=d2e87a59cd40a06558d7d4c5a2ecbd1f3a0cb2f5715f3326b4a2e3209239d609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C6YADLH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAi88rK%2Btvmzyph4fwEeUZNfKsNrxO%2B8N6xXR9k6VPwAiEAjMUeHpjoGN9sApE1ktGdxKUvK01Hk9n1KeA7F2rfqYEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDHVpoPd7fYW0szPircA9sP80jSu2Crd%2BvJzO9WpSQ3IRXykyCPD4S0XvKuSzhZMT90Hym8osUH%2FsYC3lhmdSy4C9VPXudevG1FaIty8XLDxcTg59JZj3Oc3h031BKPyKLCqs4fHq%2FfrHprYjLeOF6b%2FlQ2d5qRrSoP0fVH8XbWO7GMv%2FcjRB3eHF4cXWgODlA8YHaBFv1l5EG3TKlZjsdHNx6USgE151JnUX1gKTNIFmbLO5l2lCKkfSbeW4yxbux%2FN%2Bl1DQgJaruqBkziRQ0UNvPZpJBu6wVJ39yABn4Z8BQSGyKWa10%2FoP001zM3nVvS2hvsJvKy5NlIu74uFpOQLJ9Yj8%2BZUGOtAnA7DExTi8jo6sGewnDUkDIwHBjIheAiwrTgG9IgDXiwG6jTH%2Bj64dOvTCoyp%2BZYDn%2BT5S8JyLf%2F2aN8mI%2FFh35qhfYDmCXrCgaL8lbpOcl519cv6kqXfTQJV8Z2VHh51MSQbyNmnytguD35huupnmcyBn%2FgU4%2FEExSJ4j4lBvf4lG0RQRystw4kHHv21BQ7hTiE8TgFg6v1IINVLCXBZm9y4SudOaTd2qMEA5pH4ZNCk%2F9YOUfD04kh5RkxoGCE2%2FORx86R%2BgzFbEhe86yFTEpo%2BdxkcizN0jsMy4k%2FRASZMNSZ1ckGOqUBj9mIaYdEckuXYhCB2bjXvfi1mCD0UpGiZKYEDp8vy%2F%2BpoMLNfVu5XUAvyEC0L7tOHdxgvm3%2F347PP4TTsysc35p0Kvbd8SylB%2FH9vg%2FGR6jtdYMofzZAIxUlRmd1bZ0AIkXUgGYsCgZ1uoJZnyNASxvXYe86afs7YAcyu7AqZh14teIl8PhERUu6YMtsNTAjAx%2FqOMXeA9lggG2DXj1LjR8a1PLA&X-Amz-Signature=9194bcf256f741962590cc72914da798875b5579e1756e7d8a76b6bbb63eb6dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
