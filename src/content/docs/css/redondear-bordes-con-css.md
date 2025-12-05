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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4D6BDTW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIfJacFav2Bg6IyRxvcYyjfwR93dFGdQLGzMOXY3meWAiEAomRevz6DmtA76rMyTDanjTbNbAxhTK9Oy1MNl4GVO9Qq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDK2foCpqT7%2FeoeLIQCrcA%2FYH16UbkxSew63hxKnUpWUgUap04oRbUlUYFtdMHdUuCa3y3xpBsRUcpT%2F%2FW0bOzR9NWETUEDA8IqykwWZ2SiDj2zqP5lP1wCD2%2BDin%2BDjvhL5UgqMNQmz%2F34c9SrfFs0seLtZe3DosWiNeyT%2BXGrYeInuRsqshDfSSTEW8HjvHmv8bgYsm2eMmQ9jwzuzVCQMZOyy906TLlWYibQDwi6W15wM8dNIRWy%2B66et5oVi16AABEd%2Fxd%2FHEL%2F%2BUMvrhuHLvB%2FKefJRLxHmajsYE%2FKR0D0T40J7AGd0tUzLKGvr%2FKx2kkIMeN4E8yxDxiKv29LIc6E8y3%2FZTcRMqE0BJ2LryxMHVKRbiYvi%2BI8yc8koxhXPha0INSRPFcio3ysRPyvf%2FxiWda5a2zQLe2gbgBjBcHIS33aZmigAZYX0L%2F6%2FwwNUAiLDzGqOG%2FU0yI5C8eciIi7HppybQVUBtkPVimHphlsY9Qqa4XT9d29mAjP76dnlAllcS1oIYq6%2F%2FteZ6TqXvLBaNqeGW2YIekpBDsG3Tqyzkw98wm0F8biRhGKrfvp8sTuSIO0r82j%2BX1SpuD3waHCuzV%2FnoKcHKwmWWY0LH7R8Hczo859Rq%2FksMXBv9%2FfUpsvs%2BvIyI1WvtMKfeyskGOqUBYYLeSxKz0NlJ6Twmaom28Kalz1CXZ176jNP%2F6IalcnwVM95KqTsw%2BsY7V9EeD1oAZhqwsdBqcIMEuhBG4IkQ0%2FKriNyK1FdKypMkOxJIJ9CdM4Qd%2BFjze%2FxvzIJ7PmkkMbN6Y9SJz8tiBdt8R6ZD7cdCcjuVhZNY4d6bpQvC8kaMYA94tt3DIhgEhIt%2FybbZo4NtrDCwKBufeft4HH6%2BH%2BXLHV05&X-Amz-Signature=e654a379319b900d1d3feb89a171be90d1bfd3b6b6e427500dd5e762ba9e4d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4D6BDTW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIfJacFav2Bg6IyRxvcYyjfwR93dFGdQLGzMOXY3meWAiEAomRevz6DmtA76rMyTDanjTbNbAxhTK9Oy1MNl4GVO9Qq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDK2foCpqT7%2FeoeLIQCrcA%2FYH16UbkxSew63hxKnUpWUgUap04oRbUlUYFtdMHdUuCa3y3xpBsRUcpT%2F%2FW0bOzR9NWETUEDA8IqykwWZ2SiDj2zqP5lP1wCD2%2BDin%2BDjvhL5UgqMNQmz%2F34c9SrfFs0seLtZe3DosWiNeyT%2BXGrYeInuRsqshDfSSTEW8HjvHmv8bgYsm2eMmQ9jwzuzVCQMZOyy906TLlWYibQDwi6W15wM8dNIRWy%2B66et5oVi16AABEd%2Fxd%2FHEL%2F%2BUMvrhuHLvB%2FKefJRLxHmajsYE%2FKR0D0T40J7AGd0tUzLKGvr%2FKx2kkIMeN4E8yxDxiKv29LIc6E8y3%2FZTcRMqE0BJ2LryxMHVKRbiYvi%2BI8yc8koxhXPha0INSRPFcio3ysRPyvf%2FxiWda5a2zQLe2gbgBjBcHIS33aZmigAZYX0L%2F6%2FwwNUAiLDzGqOG%2FU0yI5C8eciIi7HppybQVUBtkPVimHphlsY9Qqa4XT9d29mAjP76dnlAllcS1oIYq6%2F%2FteZ6TqXvLBaNqeGW2YIekpBDsG3Tqyzkw98wm0F8biRhGKrfvp8sTuSIO0r82j%2BX1SpuD3waHCuzV%2FnoKcHKwmWWY0LH7R8Hczo859Rq%2FksMXBv9%2FfUpsvs%2BvIyI1WvtMKfeyskGOqUBYYLeSxKz0NlJ6Twmaom28Kalz1CXZ176jNP%2F6IalcnwVM95KqTsw%2BsY7V9EeD1oAZhqwsdBqcIMEuhBG4IkQ0%2FKriNyK1FdKypMkOxJIJ9CdM4Qd%2BFjze%2FxvzIJ7PmkkMbN6Y9SJz8tiBdt8R6ZD7cdCcjuVhZNY4d6bpQvC8kaMYA94tt3DIhgEhIt%2FybbZo4NtrDCwKBufeft4HH6%2BH%2BXLHV05&X-Amz-Signature=5e9f55bbdf0cf8b13a53d1bc6ac514abf495bf7c89e44f9da9d4091b637523e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
