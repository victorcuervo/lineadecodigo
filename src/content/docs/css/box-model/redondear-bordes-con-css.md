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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL5KMT5A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FOBb7MqfHc%2FCA9C3nVIwYRbgIpnRqpbIlziAiwSQD0QIgMuS%2FBa%2Feao4RR3yaaj%2BT3qO7S0PtJTqOkR6HV1VyPUoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBXoG79gziLoNlxcUyrcA3awJ0sZvVAwN1e67KvX2IyCvAb8yMacwked1fgO8Kd93%2FYYwDBSaC8CSDeP1CV6jbaPiYmRD7ADOmlJu3sC4VoygcXCsnGq809W6xhs4K1cmwONKmUA9Q7jWaAtKlfq6ds4Qoah6TR7LhyS7ID0DcZNust3Ea36qwKOwkreRkEnmUKAcgxbE17lDHsu64b8wKw2AnOspsJRgG0F1TrwkMtb1vpXFNrX08KFjFBh9219jj5kSwj6%2BBt7y2cqLpfH9LbP2SKhqY2qKhYY%2FtXdYge9UKESSI4NwLq%2F%2Ftk%2BTpTcLA4SG96OaSDHt6M65sM%2FXZ%2BYBOlgsEZ1GpGL7pHBIgRsYWJzkntRlCM4rFNmOsUhNNGBHOYvkkaP3WPjAqoLPK2PCNo04Cwa9OFiBid2K%2FT%2FC9CnhFzGME4WaJDrUs58V0Z06uBWZAZ0fidnWhlmgSpF%2F3e2uu%2BAUTMuk%2BAR8lzzywZ%2B0dpZLMjWH6nlfsxWbfqaVuMC1ByQw7WxrkaAoX0BsZXTWz1IifAQ4gLDz5H7ftChUJQIfb3fovwaekaXO6svAFUSnFrRgA%2For1R0Sj8s49PilwhNZ%2FdQNbc7iqJUIdK4LlDGVX75OkKlxxD%2FRsuK62pQ1bHHiYNrMKbSicoGOqUBoMX%2BECj0QOHTmCXDksf0nFBNmMj3cR9yj4tg0%2FWVdsN%2FcnfB%2BmjNutUxCS1m9ttA%2BWINvNUpryOlz59mgTdeFEm9o8VlGYGqjhPbClHG5dWgQ2YwPyGKHWe246cPGEJWda7IN4KhRzuxCx1RNio97KvAmkDmxAVn9CD9qn0idG0LXdtY%2FNTTVfo7RaDawp4yBhge%2FRCdyimtF4831y0wBNRqFZUt&X-Amz-Signature=303203875e7d021539a2344a48ef4dc7dcc9e834c039e63490d393ad32b30bbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL5KMT5A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FOBb7MqfHc%2FCA9C3nVIwYRbgIpnRqpbIlziAiwSQD0QIgMuS%2FBa%2Feao4RR3yaaj%2BT3qO7S0PtJTqOkR6HV1VyPUoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBXoG79gziLoNlxcUyrcA3awJ0sZvVAwN1e67KvX2IyCvAb8yMacwked1fgO8Kd93%2FYYwDBSaC8CSDeP1CV6jbaPiYmRD7ADOmlJu3sC4VoygcXCsnGq809W6xhs4K1cmwONKmUA9Q7jWaAtKlfq6ds4Qoah6TR7LhyS7ID0DcZNust3Ea36qwKOwkreRkEnmUKAcgxbE17lDHsu64b8wKw2AnOspsJRgG0F1TrwkMtb1vpXFNrX08KFjFBh9219jj5kSwj6%2BBt7y2cqLpfH9LbP2SKhqY2qKhYY%2FtXdYge9UKESSI4NwLq%2F%2Ftk%2BTpTcLA4SG96OaSDHt6M65sM%2FXZ%2BYBOlgsEZ1GpGL7pHBIgRsYWJzkntRlCM4rFNmOsUhNNGBHOYvkkaP3WPjAqoLPK2PCNo04Cwa9OFiBid2K%2FT%2FC9CnhFzGME4WaJDrUs58V0Z06uBWZAZ0fidnWhlmgSpF%2F3e2uu%2BAUTMuk%2BAR8lzzywZ%2B0dpZLMjWH6nlfsxWbfqaVuMC1ByQw7WxrkaAoX0BsZXTWz1IifAQ4gLDz5H7ftChUJQIfb3fovwaekaXO6svAFUSnFrRgA%2For1R0Sj8s49PilwhNZ%2FdQNbc7iqJUIdK4LlDGVX75OkKlxxD%2FRsuK62pQ1bHHiYNrMKbSicoGOqUBoMX%2BECj0QOHTmCXDksf0nFBNmMj3cR9yj4tg0%2FWVdsN%2FcnfB%2BmjNutUxCS1m9ttA%2BWINvNUpryOlz59mgTdeFEm9o8VlGYGqjhPbClHG5dWgQ2YwPyGKHWe246cPGEJWda7IN4KhRzuxCx1RNio97KvAmkDmxAVn9CD9qn0idG0LXdtY%2FNTTVfo7RaDawp4yBhge%2FRCdyimtF4831y0wBNRqFZUt&X-Amz-Signature=e51a2eeec6eea88982393dd04c514e3f840b5de9481b05c5a24c7c13421b169f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
