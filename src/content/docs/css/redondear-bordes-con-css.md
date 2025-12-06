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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BUOA6N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7cWqsx8gh8ewW7mv%2BBVsVsNk1JrgRG7Zvi%2FtaBY2AogIhAPMbigCoN8DFYoybj41EEtE%2FCOFicdBd2uJb%2BgcYE0miKv8DCG8QABoMNjM3NDIzMTgzODA1IgwEWf3nAK6x7qFBNjQq3AOY%2FbYejD3UzMvW8G5HpOuC8uoJpwbrUA%2BLFCRKHwRYhcjUcPFGvuvvtKImLn5hedWneEnJ5tf7AH2pRgrsaC6kVgejzjiJ4xEvruoFWY%2B%2Fa3pSLjQze4JdKTU5bNXEZ5WpC7nlDf5jxBCzaBss0WVqbayQGaWaBCSvrpxGtLdhHZRO%2B%2FOqimnKj9%2FNMth9rIHZwlO7%2BEndxZr%2FzGMKAgZdDrUtnJX7NTI3NJZlpO%2FG9hgeQ9eqSz3U23JpxFXxomL8%2FkxhDv7mq%2BdatvfzHYh%2FcCU87o3j46cZb%2BX4lc8ucaxGc60WEpnafgWpU3EFrg0n5HF6jDwxVO9COYyR%2Fy3W6D4yNU59EzDIFc7oCmmv0%2B%2FXKvSHQBz6FmeK5c6gGke9VxB%2F4EpzJZpcIDFXaUcHef4NFsYt4%2FXpL8XfMzdqQG%2FlPAOx79XM8ZVHAnoVGQbNoXkKFkmArvEDoqEUQ2uXAH8h8Bttv3XmQPCFgtVQCSu8wCZsQYfmnA30mMWLFZmO8h3QEZoST3Ylxal9I4PwUf%2BRvjQm29MEQbx5Au0Hd9CFWx83N2WJTE05Xs2EE5XgJ2yx5XfJZ708QeMAAEAE%2FKSeDDSsmJ%2FrTP5Np9Ug7EGn8GkP6NUoWBAjIjDu%2FM7JBjqkAZjG3OBKvr%2FAarsXf2stV7EsMx3MYEP2uNUF4Woyw9a4VveygBr0HGPq3jTSEe51Dn6Gyw5e8wdetILzv7t3y14CvZbmhsiY21F3Z2VD%2F1ksL7una0Cu0E638kqRuGOgU10A%2FR2TVDib8xI151TtJC2i4dMdOzY0Mf9wT91aeB%2Bjwt8OVUqjSYVT%2Bu7hmPvkcO9c8NaMnJs%2BRxJ9IezgAgRo8uvJ&X-Amz-Signature=9b4ba3929eeb6f4dbffd5849107c5ed9145710363394a40720c4aee496483192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BUOA6N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7cWqsx8gh8ewW7mv%2BBVsVsNk1JrgRG7Zvi%2FtaBY2AogIhAPMbigCoN8DFYoybj41EEtE%2FCOFicdBd2uJb%2BgcYE0miKv8DCG8QABoMNjM3NDIzMTgzODA1IgwEWf3nAK6x7qFBNjQq3AOY%2FbYejD3UzMvW8G5HpOuC8uoJpwbrUA%2BLFCRKHwRYhcjUcPFGvuvvtKImLn5hedWneEnJ5tf7AH2pRgrsaC6kVgejzjiJ4xEvruoFWY%2B%2Fa3pSLjQze4JdKTU5bNXEZ5WpC7nlDf5jxBCzaBss0WVqbayQGaWaBCSvrpxGtLdhHZRO%2B%2FOqimnKj9%2FNMth9rIHZwlO7%2BEndxZr%2FzGMKAgZdDrUtnJX7NTI3NJZlpO%2FG9hgeQ9eqSz3U23JpxFXxomL8%2FkxhDv7mq%2BdatvfzHYh%2FcCU87o3j46cZb%2BX4lc8ucaxGc60WEpnafgWpU3EFrg0n5HF6jDwxVO9COYyR%2Fy3W6D4yNU59EzDIFc7oCmmv0%2B%2FXKvSHQBz6FmeK5c6gGke9VxB%2F4EpzJZpcIDFXaUcHef4NFsYt4%2FXpL8XfMzdqQG%2FlPAOx79XM8ZVHAnoVGQbNoXkKFkmArvEDoqEUQ2uXAH8h8Bttv3XmQPCFgtVQCSu8wCZsQYfmnA30mMWLFZmO8h3QEZoST3Ylxal9I4PwUf%2BRvjQm29MEQbx5Au0Hd9CFWx83N2WJTE05Xs2EE5XgJ2yx5XfJZ708QeMAAEAE%2FKSeDDSsmJ%2FrTP5Np9Ug7EGn8GkP6NUoWBAjIjDu%2FM7JBjqkAZjG3OBKvr%2FAarsXf2stV7EsMx3MYEP2uNUF4Woyw9a4VveygBr0HGPq3jTSEe51Dn6Gyw5e8wdetILzv7t3y14CvZbmhsiY21F3Z2VD%2F1ksL7una0Cu0E638kqRuGOgU10A%2FR2TVDib8xI151TtJC2i4dMdOzY0Mf9wT91aeB%2Bjwt8OVUqjSYVT%2Bu7hmPvkcO9c8NaMnJs%2BRxJ9IezgAgRo8uvJ&X-Amz-Signature=4ec96ae25facde4c7ddc5c70a1cdb4a9a61b1df5258f4e2a893fa6bb653626e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
