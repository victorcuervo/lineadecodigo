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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V7LJ2PI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4A5U2vBSFC306L0KNLuJqVukjMQOXzkjNcxvL6%2BQTwAiEA2VuZ1sfp9%2BwgwB24rIgcz7doqkRWP4p1qVpiIba%2FxKUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLjfQrYw%2Fk6xmATD%2ByrcA1fw%2FaonkmpEPzI279UbisDOACqYs8DbqJO1VJkEgCtPcFdgfhed3wiJG3a26ppbEwz8lxB4D46SiyfFvciqCOEfryAKxcE%2FDgyETDbsVFy%2BNYS%2FFnhe%2BZGIX0llFIShpZ4nrzIiFWTX4DDydKqDVe%2Bhm3i75vZJ2JEUyOZtUulwSPvud2xQNsAiR%2B0k91rjU6WNLhvf%2BVgW5qSg2wsQRMlRLn4GyHUKqa17knNObgY8t71llOrnGY8%2BjDFkOQvZqEuTVWd2VmJS%2BYthSW5%2BjBlVBC9n4268h8qnCya1wIslj0ZtV2pLmutfSfgecT8xmg1HYsgVCGFhn6WjqoL9LHdJOUk%2Fkd6uqsFsWzHfGtKze5O0HRSoVbTrI0rEX0OVyAbKWXOkvaRL7mRnhdn4PxNUv55OX1GVPq54StRlc5ZhYKJZpe5WpyJkZS1IoYpjYsJ9E3mYqLmEETtuti2Vre7bncFXi9ZPW1wBvNTq4b%2FSwq%2FLmPD31roltJs25Uc%2F9shnmrwj8QQdYchGLWjR8vCD2Va1BJwjwA2xfOumJzQkjz7bFx5kBQCXQ2kO4XJPfQKwwzQq32KamVrQqWEYq9I%2BY%2FTDDNi3wiYEUgchR2c8BLLBu2oA3MbnTwUJMIzGzckGOqUBS%2FLQtkgeJPN9FWw09%2FPP1jeOdjLs8buwX4pocXc5dN%2F%2BagJuJTo%2BWrXkFG6gR%2BGvzrzjAPLtyysNQsOjyNBmrVT4BpBr1UDwaL5bLCsFT5tW5sWILFq0nqtNaCyGkdcXulOJzQb3nZjr5KytRoyvA%2Fa0dupFKpIy%2FLXv3kIgNwsr0B%2FN0LWWlny0POoqrHz9Csdri%2BGvCoBpRJxZJK%2F14k%2BLRIHQ&X-Amz-Signature=e14e1aec9b619604194d7381b7249fdf0a36d4b64eb5adb81cde149a0183405f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V7LJ2PI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4A5U2vBSFC306L0KNLuJqVukjMQOXzkjNcxvL6%2BQTwAiEA2VuZ1sfp9%2BwgwB24rIgcz7doqkRWP4p1qVpiIba%2FxKUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLjfQrYw%2Fk6xmATD%2ByrcA1fw%2FaonkmpEPzI279UbisDOACqYs8DbqJO1VJkEgCtPcFdgfhed3wiJG3a26ppbEwz8lxB4D46SiyfFvciqCOEfryAKxcE%2FDgyETDbsVFy%2BNYS%2FFnhe%2BZGIX0llFIShpZ4nrzIiFWTX4DDydKqDVe%2Bhm3i75vZJ2JEUyOZtUulwSPvud2xQNsAiR%2B0k91rjU6WNLhvf%2BVgW5qSg2wsQRMlRLn4GyHUKqa17knNObgY8t71llOrnGY8%2BjDFkOQvZqEuTVWd2VmJS%2BYthSW5%2BjBlVBC9n4268h8qnCya1wIslj0ZtV2pLmutfSfgecT8xmg1HYsgVCGFhn6WjqoL9LHdJOUk%2Fkd6uqsFsWzHfGtKze5O0HRSoVbTrI0rEX0OVyAbKWXOkvaRL7mRnhdn4PxNUv55OX1GVPq54StRlc5ZhYKJZpe5WpyJkZS1IoYpjYsJ9E3mYqLmEETtuti2Vre7bncFXi9ZPW1wBvNTq4b%2FSwq%2FLmPD31roltJs25Uc%2F9shnmrwj8QQdYchGLWjR8vCD2Va1BJwjwA2xfOumJzQkjz7bFx5kBQCXQ2kO4XJPfQKwwzQq32KamVrQqWEYq9I%2BY%2FTDDNi3wiYEUgchR2c8BLLBu2oA3MbnTwUJMIzGzckGOqUBS%2FLQtkgeJPN9FWw09%2FPP1jeOdjLs8buwX4pocXc5dN%2F%2BagJuJTo%2BWrXkFG6gR%2BGvzrzjAPLtyysNQsOjyNBmrVT4BpBr1UDwaL5bLCsFT5tW5sWILFq0nqtNaCyGkdcXulOJzQb3nZjr5KytRoyvA%2Fa0dupFKpIy%2FLXv3kIgNwsr0B%2FN0LWWlny0POoqrHz9Csdri%2BGvCoBpRJxZJK%2F14k%2BLRIHQ&X-Amz-Signature=893f2f820cf1a3b64ced8102ba20c1510a165bd623852b2b67f304d4ec5c8d23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
