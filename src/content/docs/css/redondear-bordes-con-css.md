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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3EZ7QUE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXudLU0MOyL3T7%2Fa6I7jeF0a2dCQBHhGNEriQ3dETCmAiA1ck9dywS4LbT8brClltWusUw76jjYWkwMhGcy0CtjTSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7eLk8Q5ncrqyX86IKtwD8cpI4wsahNjRON03L3V%2BieN0k33fsoQMyfStoVe%2FQgDKcdwxcnGC3iZLmyriW4GhZ7hjqESd9T25z2MvRTMN4KXCZLRmqV78AiF5QT34fHjcmu3IoKXueajLFA5utjXArIZMLxD5w55kjL6OsfeatQ8bTJTy2UMBb%2BJy8YChMPmJV%2FYahsHYwi%2FRYFDD3vcmwgBQJHMRmQLLTuXBWiv0hfEnyaGSSXldg1secwYr%2FhD9nfOVftHv0rAigx1HHpDJJTdCvDXul5Rs9nAV6clabdBcpToTDZfCUHB9GbazTADL2W9w97g5s4W9K58EOzfbZJTXyWOpAbblaMjsUuu7oQG6xNkVDB6IVegga%2F8Li6YNjzGv5G5JqA6TQcOvC6zWe6czqTx0LqDe3Dd7YCGDJ%2B%2BODL2EjKWdGA7bnj85IZso%2Fvl17dCQu1N6TFb7L6VuEvAAXYMEdJ6DdT9d5SdLIssczpuUcyPh4Uraq92TrTeHxwaeaT3T0c6etVAQ8DqGmPJSL0emr3xvbX8It7owqUATCmpzFNAMF%2Foiusppan3Qm88BGyasq%2F%2Fs4ofaDEA7BoufukJcjvMjAHdO8sB4%2B4tI%2FZu%2BScfphgtexT%2B0TRnZKuVjLM5FKs%2F%2B1bQwl%2F3SyQY6pgFHdE%2FykM5zuvdlWhk9%2B9%2FKPHeT76fo8yqYm2CLaJaE%2FAmINQTYrx6h3OUy8b%2B6cZb%2B7%2FB%2FlJ4XBzqUmI4m%2FWb6BR9oMizu2q0Xm9XCKSjIUCPDzvRijf1NOwRiaULxHSK3XR1HDApRTLJDEKt1WQhKSH58YabClFnlcnCuSZX3U76QytznoKrjzawEnMMQohf5ax7eDapvsUY2aMgEv7bN5BDtBf16&X-Amz-Signature=3c74002c4e62d7022258f5b84a9f0e80fb8ff24b6bcebb001ce2f40ba50b74f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3EZ7QUE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXudLU0MOyL3T7%2Fa6I7jeF0a2dCQBHhGNEriQ3dETCmAiA1ck9dywS4LbT8brClltWusUw76jjYWkwMhGcy0CtjTSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7eLk8Q5ncrqyX86IKtwD8cpI4wsahNjRON03L3V%2BieN0k33fsoQMyfStoVe%2FQgDKcdwxcnGC3iZLmyriW4GhZ7hjqESd9T25z2MvRTMN4KXCZLRmqV78AiF5QT34fHjcmu3IoKXueajLFA5utjXArIZMLxD5w55kjL6OsfeatQ8bTJTy2UMBb%2BJy8YChMPmJV%2FYahsHYwi%2FRYFDD3vcmwgBQJHMRmQLLTuXBWiv0hfEnyaGSSXldg1secwYr%2FhD9nfOVftHv0rAigx1HHpDJJTdCvDXul5Rs9nAV6clabdBcpToTDZfCUHB9GbazTADL2W9w97g5s4W9K58EOzfbZJTXyWOpAbblaMjsUuu7oQG6xNkVDB6IVegga%2F8Li6YNjzGv5G5JqA6TQcOvC6zWe6czqTx0LqDe3Dd7YCGDJ%2B%2BODL2EjKWdGA7bnj85IZso%2Fvl17dCQu1N6TFb7L6VuEvAAXYMEdJ6DdT9d5SdLIssczpuUcyPh4Uraq92TrTeHxwaeaT3T0c6etVAQ8DqGmPJSL0emr3xvbX8It7owqUATCmpzFNAMF%2Foiusppan3Qm88BGyasq%2F%2Fs4ofaDEA7BoufukJcjvMjAHdO8sB4%2B4tI%2FZu%2BScfphgtexT%2B0TRnZKuVjLM5FKs%2F%2B1bQwl%2F3SyQY6pgFHdE%2FykM5zuvdlWhk9%2B9%2FKPHeT76fo8yqYm2CLaJaE%2FAmINQTYrx6h3OUy8b%2B6cZb%2B7%2FB%2FlJ4XBzqUmI4m%2FWb6BR9oMizu2q0Xm9XCKSjIUCPDzvRijf1NOwRiaULxHSK3XR1HDApRTLJDEKt1WQhKSH58YabClFnlcnCuSZX3U76QytznoKrjzawEnMMQohf5ax7eDapvsUY2aMgEv7bN5BDtBf16&X-Amz-Signature=848736f477103923605d383a96d5619bae05d4cccf07195889ce2ac5aedaf8f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
