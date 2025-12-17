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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3GK3CXX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDihilxeQttJbA3VWjFG17fr0Ah3lggtD9KGocsOibuOAIgEy5IFEnnh7Bhs%2BrHiyAcu2m%2B9QDPTuQ1w0a6Xn6Ru%2FIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNTSHaumcGC9e9J0VCrcAw%2BboD2rDUopF3ZPQhbFPKNqn4svMn5IAbwsF7Pntjzujwm5v2d6l3q4MmkxOa2HLobAUoMnBk%2BPJKAAXMhw%2BHDnFPa1SQtG31etQclbDfqpiXySrXKXY1nXfQPBjzNEkpV1VwGl1%2BsvxhzNsbppv57IhS2OV%2BOz6G9vqs%2BKwG9rPrSwpx0yR3RMk8NCy7yrdZODs3C1deB4vLNKbIc8VSYnxzTmUJj0m3VulSER9ffOaw8frhvyNFLmfrAxdSoE3pG7DEymNQJFlMPxJVwouIKFkBR1B9JDuKSRA0QcbQ2IjKspVpnelJzcqacmKFH8EDlp4hU%2BMujkyQ7fdQ7Lm1ZABxJgiuU3FKQ6DWyhTjttETEys2SQxBFGwK0nCgGNZNyXEMBjIdThSESNQDx2ItOQL4021zCfU3ahW6u04XDOPP5j7OvwaXjc54TdGW33jeFwypjvF9pyKKdxKy3WEYKBxLtyz3%2FoxuBN4lbXufOAE56aub2e1ohN2GCObsSEKjoJXNRLjXTmi8BRXLoM3250uOVX3eeELYahWzYihsECKbEqsR7uvdGhbtXgKu6ftTI68PSQeyE%2FdCwpNcJJOEK%2F27fceyJxTqabI2AohvWhr4Uvq4KwpQn2GqUTMPveh8oGOqUBWahHpC1JL0kg7N8tpgyklbWdxv3RcOsitrP2DoyPPypNuRqJLuw41%2FpfjQeoQOPWkNd%2Bj%2F78gD0JfWXbRRmuwiHQMyaaDuYoPgOO5oDDKFY0K2Dy8Fznu57yGGwUgB0WylWdanNZMvFf1DzXZm7oWY%2BWU%2BynqOKJDY1p4GH5Af4oThjRP84Sgf8LjuYLBTberpR73e4iq0DteHTGThCzV9H4zlQv&X-Amz-Signature=e33bb2851dd475d5ef1b0b9350eb2ea79396be8bcc12f67ca8e9ed77fbc173f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3GK3CXX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDihilxeQttJbA3VWjFG17fr0Ah3lggtD9KGocsOibuOAIgEy5IFEnnh7Bhs%2BrHiyAcu2m%2B9QDPTuQ1w0a6Xn6Ru%2FIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNTSHaumcGC9e9J0VCrcAw%2BboD2rDUopF3ZPQhbFPKNqn4svMn5IAbwsF7Pntjzujwm5v2d6l3q4MmkxOa2HLobAUoMnBk%2BPJKAAXMhw%2BHDnFPa1SQtG31etQclbDfqpiXySrXKXY1nXfQPBjzNEkpV1VwGl1%2BsvxhzNsbppv57IhS2OV%2BOz6G9vqs%2BKwG9rPrSwpx0yR3RMk8NCy7yrdZODs3C1deB4vLNKbIc8VSYnxzTmUJj0m3VulSER9ffOaw8frhvyNFLmfrAxdSoE3pG7DEymNQJFlMPxJVwouIKFkBR1B9JDuKSRA0QcbQ2IjKspVpnelJzcqacmKFH8EDlp4hU%2BMujkyQ7fdQ7Lm1ZABxJgiuU3FKQ6DWyhTjttETEys2SQxBFGwK0nCgGNZNyXEMBjIdThSESNQDx2ItOQL4021zCfU3ahW6u04XDOPP5j7OvwaXjc54TdGW33jeFwypjvF9pyKKdxKy3WEYKBxLtyz3%2FoxuBN4lbXufOAE56aub2e1ohN2GCObsSEKjoJXNRLjXTmi8BRXLoM3250uOVX3eeELYahWzYihsECKbEqsR7uvdGhbtXgKu6ftTI68PSQeyE%2FdCwpNcJJOEK%2F27fceyJxTqabI2AohvWhr4Uvq4KwpQn2GqUTMPveh8oGOqUBWahHpC1JL0kg7N8tpgyklbWdxv3RcOsitrP2DoyPPypNuRqJLuw41%2FpfjQeoQOPWkNd%2Bj%2F78gD0JfWXbRRmuwiHQMyaaDuYoPgOO5oDDKFY0K2Dy8Fznu57yGGwUgB0WylWdanNZMvFf1DzXZm7oWY%2BWU%2BynqOKJDY1p4GH5Af4oThjRP84Sgf8LjuYLBTberpR73e4iq0DteHTGThCzV9H4zlQv&X-Amz-Signature=d2323c5ff0f7dba595c0e3f0af448d313a3875715f3c95c6b79f6c5855e915b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
