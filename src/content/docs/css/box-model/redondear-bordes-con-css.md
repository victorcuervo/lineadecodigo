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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA76YZV2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3MQ9a2%2FTUBg6O3OIkyNXqr6MQD%2FXX2BPky8z1H7%2BTmQIgFy8whZ62kQz18HImCgfIaXTu39LVBu9grzqVOpVg0Noq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDOaS5W59pLACPoR8DCrcA4%2B%2Bg1v7r%2F041ltiSxqJzg3SV7kTpyI9kmNPjZrwUBs6LxMu9hJeWqUfZe%2F4TQu%2FCjkBNw7W7HCV7tVe4g1VajDI7emmCYNr5TAx6LLWCoRNJrftxMhRsh74ilfXuliTHyrGjd0l1Sq8SVHMuxRXQ3zyfX7wV%2BmC%2Bu%2FeEal6yWkT6WJG%2FQTWa0kFuKDb4RIxhZ3oG8Je1fKR33fNJ1kJ6EVWtEHcwSYnrkmRNVcJdyaX%2FYNx1%2Fm%2FuXmNrBtgbSUaeL0YNJeecBQb8cYBAOXc4CuaR7hsURKFjCQ0GyKQ8OOvVfQXNKKMedHUW1kgr2IaC2JEVd2CXGfjLDx4D6lexDdqxEMpfJSiFCvUL2rGGieNAHW8n3qyY7nEAM9BhyDF%2BHqwq%2Bp5ieVWhk8ldgRuukYBzGpneNxc2jUNniPtxnKMhPjkIkBRphty%2B%2B5wPt8isF2IEw3%2BMm5bVBoItXsWl3uEqGOfN78mcLn%2FofhM749Q%2BG0bZDIr%2FQKPb0DjF%2BJbzpQvJJ%2F45FRi9%2Fo7Nu6f77Fe3QgbQ5ZAjxoF4IU0xbg1QDqIipaGgQWSGygHE3Gei5m5lFxZLa0aIyVO4TT7KhKAt6Bdl%2BMHklVXmUoPAv2hLltLZLtoOhkq2zBLMPOdicoGOqUBgdqcykVlNsW2DFMMo%2BZvSvpUP81LDyM%2By7xtXt9D2%2BsdUBAAMdbqNGmEHkktKqw87I58VSdsD14xrfc1EVHgzqz8MbrW91xoBplbNZJ%2F2cyq23s2NwgEtwuFgOIwKKsqnAhT3QBbRBtY6eGG3oCVgUyvolgFZX3e3oxG5fAtHpDOpenUEapO5rvl1j9we0mqz8odSqS9MCFvOBP4k2OLLu%2B95CPm&X-Amz-Signature=5261094677590ae6850daf1be698068f5065f613bd56e6edd41f606f198d33e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA76YZV2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3MQ9a2%2FTUBg6O3OIkyNXqr6MQD%2FXX2BPky8z1H7%2BTmQIgFy8whZ62kQz18HImCgfIaXTu39LVBu9grzqVOpVg0Noq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDOaS5W59pLACPoR8DCrcA4%2B%2Bg1v7r%2F041ltiSxqJzg3SV7kTpyI9kmNPjZrwUBs6LxMu9hJeWqUfZe%2F4TQu%2FCjkBNw7W7HCV7tVe4g1VajDI7emmCYNr5TAx6LLWCoRNJrftxMhRsh74ilfXuliTHyrGjd0l1Sq8SVHMuxRXQ3zyfX7wV%2BmC%2Bu%2FeEal6yWkT6WJG%2FQTWa0kFuKDb4RIxhZ3oG8Je1fKR33fNJ1kJ6EVWtEHcwSYnrkmRNVcJdyaX%2FYNx1%2Fm%2FuXmNrBtgbSUaeL0YNJeecBQb8cYBAOXc4CuaR7hsURKFjCQ0GyKQ8OOvVfQXNKKMedHUW1kgr2IaC2JEVd2CXGfjLDx4D6lexDdqxEMpfJSiFCvUL2rGGieNAHW8n3qyY7nEAM9BhyDF%2BHqwq%2Bp5ieVWhk8ldgRuukYBzGpneNxc2jUNniPtxnKMhPjkIkBRphty%2B%2B5wPt8isF2IEw3%2BMm5bVBoItXsWl3uEqGOfN78mcLn%2FofhM749Q%2BG0bZDIr%2FQKPb0DjF%2BJbzpQvJJ%2F45FRi9%2Fo7Nu6f77Fe3QgbQ5ZAjxoF4IU0xbg1QDqIipaGgQWSGygHE3Gei5m5lFxZLa0aIyVO4TT7KhKAt6Bdl%2BMHklVXmUoPAv2hLltLZLtoOhkq2zBLMPOdicoGOqUBgdqcykVlNsW2DFMMo%2BZvSvpUP81LDyM%2By7xtXt9D2%2BsdUBAAMdbqNGmEHkktKqw87I58VSdsD14xrfc1EVHgzqz8MbrW91xoBplbNZJ%2F2cyq23s2NwgEtwuFgOIwKKsqnAhT3QBbRBtY6eGG3oCVgUyvolgFZX3e3oxG5fAtHpDOpenUEapO5rvl1j9we0mqz8odSqS9MCFvOBP4k2OLLu%2B95CPm&X-Amz-Signature=25337cb93d3407b97a3e752a9f70b26e91691f42a92c4c76caaa06752a2cde42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
