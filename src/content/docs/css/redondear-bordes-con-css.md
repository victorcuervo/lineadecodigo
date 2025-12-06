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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y4TPYWR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BPBh03wxdPe%2FmU750UWj%2BGljdSrbQ2bhsejx7KUP71AiBGfppqdtFu9XAJr%2FXeC4y7zAcEExi5NX8kISlheRBqiir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMNqDfmnOPX05htyHQKtwD2KvuAACVjIhRf1J3DHpLAoNmWPXBa9llcvfoCHy1Zt3N4LYukQvX0Vg10xUm0%2B6V0M9oSUjsNxi0krBpHTnlOdVc09FdIXpevse44EGRgZdMSj5gLO2Ko9Z%2BgmmYje2qKuloFDq76V69c2Omee9npVxnBati2lGobyt4vlJtiGA%2F1yXyPTdJFOIHpJKGxZ8%2F7RMMzT%2FRHFlVCoJ%2B6NplfHiKvuXVwthCU8OXEuq8Pcoim5ASEwzLEEICvN2C164ZcHr2EIU2BYKEkXSO5GdxsTVN596rWgl0GUHhlpAzf1nJ2xkD2cdipjt6kG5x2nsG%2BPKhlbb%2B0hmr8pOjeoOJBi07gie02%2BTrg2klMef6IZBiSZUYudzdYer4S7hyl07gBjZOFW32qWaT0RPlb4ov4FUTcHqiyORzJk8xrn8bR2HFZHrjw1MBI8GTE2eQQ%2FkjENceo0PB1G5wsIDmOBJLy9H6Mlmq9fwHTUS97h3q7G7VYKpPrEnkM53x34rG5FzjF57xtGpewsbpRCClU7bCVLMuprqaX%2FcMv%2BFkx5gSHaq05DUCAT2uOnQoY6%2FrAThC3Dw27mDkpQYTvFuvS74%2BBNRIwChKqrVpUfjuV1t2raaMoZU%2FiSpo4imPexcwhonQyQY6pgFWiZvv1exgxX5HqjQqGPWMqfql5XxcuhVaaRINu5Hz7bm%2BWlV733%2FJlvJg%2Bm67Tr8L8m0%2FXOfltI4oL6wpljbpqzRL%2FkF93w5lI63aY7qMwoyv1EqIF6IqC9FTi7DIONiSWTd30FmLdNUv14agfYaUDOYfcF4I%2Bj%2FNTCE9c9EqpXZHZ6CifoqtPhqnM2%2FvoKZDkdmmdA%2F%2B5YYh9lIOPZ98OvnnM7Os&X-Amz-Signature=6871c93dceac7d2c5e548107d2c7e8e924bd4d1b9777fc57d214579ae7f7a2b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y4TPYWR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BPBh03wxdPe%2FmU750UWj%2BGljdSrbQ2bhsejx7KUP71AiBGfppqdtFu9XAJr%2FXeC4y7zAcEExi5NX8kISlheRBqiir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMNqDfmnOPX05htyHQKtwD2KvuAACVjIhRf1J3DHpLAoNmWPXBa9llcvfoCHy1Zt3N4LYukQvX0Vg10xUm0%2B6V0M9oSUjsNxi0krBpHTnlOdVc09FdIXpevse44EGRgZdMSj5gLO2Ko9Z%2BgmmYje2qKuloFDq76V69c2Omee9npVxnBati2lGobyt4vlJtiGA%2F1yXyPTdJFOIHpJKGxZ8%2F7RMMzT%2FRHFlVCoJ%2B6NplfHiKvuXVwthCU8OXEuq8Pcoim5ASEwzLEEICvN2C164ZcHr2EIU2BYKEkXSO5GdxsTVN596rWgl0GUHhlpAzf1nJ2xkD2cdipjt6kG5x2nsG%2BPKhlbb%2B0hmr8pOjeoOJBi07gie02%2BTrg2klMef6IZBiSZUYudzdYer4S7hyl07gBjZOFW32qWaT0RPlb4ov4FUTcHqiyORzJk8xrn8bR2HFZHrjw1MBI8GTE2eQQ%2FkjENceo0PB1G5wsIDmOBJLy9H6Mlmq9fwHTUS97h3q7G7VYKpPrEnkM53x34rG5FzjF57xtGpewsbpRCClU7bCVLMuprqaX%2FcMv%2BFkx5gSHaq05DUCAT2uOnQoY6%2FrAThC3Dw27mDkpQYTvFuvS74%2BBNRIwChKqrVpUfjuV1t2raaMoZU%2FiSpo4imPexcwhonQyQY6pgFWiZvv1exgxX5HqjQqGPWMqfql5XxcuhVaaRINu5Hz7bm%2BWlV733%2FJlvJg%2Bm67Tr8L8m0%2FXOfltI4oL6wpljbpqzRL%2FkF93w5lI63aY7qMwoyv1EqIF6IqC9FTi7DIONiSWTd30FmLdNUv14agfYaUDOYfcF4I%2Bj%2FNTCE9c9EqpXZHZ6CifoqtPhqnM2%2FvoKZDkdmmdA%2F%2B5YYh9lIOPZ98OvnnM7Os&X-Amz-Signature=ca2fd7f6059c04d3105a1733ff068a49a76a8890ea04065e48396723675ba04c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
