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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4YF7BZ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvYekQlT72aXSTcmJd7aX5cg2351fjTugcx0zJOQeQBAiEAnil5WEuWTlTv4ImIfh7MFusQongheBj5LbfXL2b5nbYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBb47vX7utr7wDakGSrcA31sKKJNSvO46LNz692op0cCV4IK36VQ8SQIC8tpEffBG1v5hi0%2BzHwZlw%2BaDRG1uO9GzNRo8c2bofL82BbtlSG96%2F1l7gT9vXqV3qXPx1AO5UT8Uo7JpjapKvXXdC7JktgH9lpSin%2BMk%2FUoxbyRo1F8h3kb42P1mZ0DZmlmJIEA6V8nGlEjPZPmwgxtrhwnE4yntBHoYS0KXNSRmUyxmG%2FurVU8cETAVMO3QTAu0Lg3Omcx5Y%2BZ4vHsoGl8PpmC1%2FimpOZFPywGIlqBt47ErIHfckXs49TDPL7ircQHzc8IgwwGkGEJnyaEcsaHX7gSlBylw2fGWbl8c%2FJtYMdkJIbS2ZRgpygRrJwP5N8JN5tZjVDQM%2BmeEx%2FogCHX2QfKYjEHf7liMErXV5st3w2uH4gBlG80mQPHwzTsG0RcnGIS6048BwaTeeOZjoBWROkPySqn0O6lLHV4xZEhnDiNpwZeClrrTSp%2BjFariMzbUjh9bDxzGsiMxWr6tlvrJfrjcpBDzszO7rkVxRUJfUX%2FsA0izWcPdKYPdF6IKSprEAvW4g3zAx89UtWebEV2mGXifIex8omYq8CYB1dBpAoOy%2BtKRq8JVkR%2FZIPdmwHw8vX6md%2FH%2Fp%2BGIxGt307YMKC4icoGOqUBiMO4FJs4bBNtDHU6LbMl8ad%2BtP4QvXv8CuMPDf1PsgSrZlRx8plnWFBgYbKnQt4rAFBReO19rpRijNYu5d0CEIYXiidCTGqxBB69uVdi%2B6Wk3%2B%2BRcD74ckJhP%2F40Btqc6uI1N8%2FP%2BT%2F9RUhzbFRPP4wLytHQniv%2FsOg6d4uK44bC1%2FYuM1yPOv0QugkUnd%2FPnOlpKdNO%2B0AqwP75xu%2F06iL%2FRqTF&X-Amz-Signature=3e3d4877e5138e0d31f707f5b1d27810dd5e7d63b9eff52767b0aacf86082624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4YF7BZ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvYekQlT72aXSTcmJd7aX5cg2351fjTugcx0zJOQeQBAiEAnil5WEuWTlTv4ImIfh7MFusQongheBj5LbfXL2b5nbYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBb47vX7utr7wDakGSrcA31sKKJNSvO46LNz692op0cCV4IK36VQ8SQIC8tpEffBG1v5hi0%2BzHwZlw%2BaDRG1uO9GzNRo8c2bofL82BbtlSG96%2F1l7gT9vXqV3qXPx1AO5UT8Uo7JpjapKvXXdC7JktgH9lpSin%2BMk%2FUoxbyRo1F8h3kb42P1mZ0DZmlmJIEA6V8nGlEjPZPmwgxtrhwnE4yntBHoYS0KXNSRmUyxmG%2FurVU8cETAVMO3QTAu0Lg3Omcx5Y%2BZ4vHsoGl8PpmC1%2FimpOZFPywGIlqBt47ErIHfckXs49TDPL7ircQHzc8IgwwGkGEJnyaEcsaHX7gSlBylw2fGWbl8c%2FJtYMdkJIbS2ZRgpygRrJwP5N8JN5tZjVDQM%2BmeEx%2FogCHX2QfKYjEHf7liMErXV5st3w2uH4gBlG80mQPHwzTsG0RcnGIS6048BwaTeeOZjoBWROkPySqn0O6lLHV4xZEhnDiNpwZeClrrTSp%2BjFariMzbUjh9bDxzGsiMxWr6tlvrJfrjcpBDzszO7rkVxRUJfUX%2FsA0izWcPdKYPdF6IKSprEAvW4g3zAx89UtWebEV2mGXifIex8omYq8CYB1dBpAoOy%2BtKRq8JVkR%2FZIPdmwHw8vX6md%2FH%2Fp%2BGIxGt307YMKC4icoGOqUBiMO4FJs4bBNtDHU6LbMl8ad%2BtP4QvXv8CuMPDf1PsgSrZlRx8plnWFBgYbKnQt4rAFBReO19rpRijNYu5d0CEIYXiidCTGqxBB69uVdi%2B6Wk3%2B%2BRcD74ckJhP%2F40Btqc6uI1N8%2FP%2BT%2F9RUhzbFRPP4wLytHQniv%2FsOg6d4uK44bC1%2FYuM1yPOv0QugkUnd%2FPnOlpKdNO%2B0AqwP75xu%2F06iL%2FRqTF&X-Amz-Signature=4875bde6b407b9cf5ebcebb3bef086ff871c61294f3759d2d760bfa4d219ea73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
