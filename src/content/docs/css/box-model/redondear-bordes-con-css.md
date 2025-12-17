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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFWRE73%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B8BI2%2BQK4RSywCsAUhyoLqf%2BNQUgbDqNH8%2F96M6ERWAiB4qe7k1IADThVBsnMxOrmRN7pS641ykHbNOIeoeDOxcCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHWdgjq4wGXsec%2By3KtwDkkyfUdwlEanumYiOZGn6NIY8d8tj05rFGTDbg0%2F%2FkL0MXMQu%2F7vypQeSOPvp7wGbdmeJc51bcAYzNkRfzglLDjYCc6EoUt%2FvQMCkZN0gSMQ0PMQnmEtNXgy%2BWTuiYZS41LoVdOuwjTS7DFR3uouYNadc8czrTPxSCHI%2FGjYmZ7kXMZqOwVzNuQ7Ggnt8AbW7Umn0iNoiATswcVNDeqc2ArW1iRQs1o5BsYwN5mrdZ1FigShfgtJg9GdW9Aaizho8YehCKQUzmkcPNyBS8kjm3hjsRbvJOpRJOTQ4rOWkDrkc%2FXMnhf%2B84nJUzuJv8lOAL65%2BKpEc50TavzTreHQ8fZ%2B7YHin9Hfp%2F%2Fz%2F1IkYf4QkaBS%2B95HasAppKcJClpaQ94uorslz5vwoDE6acbR8KmJn3xa9hnYfy3H8FcpdEBi6bPemvQq0pG1%2BmjOLX08TzfTKefJLq1LH4e%2Fhao74UNJwXY2df7CA6tR1wB8IR2pT2zAq%2F2z5ENiw29reRy9acjKU%2BPT5lQZRIV%2Boik81AKlHlhbuSsOoJqMTAg9GMSBuZ5JgZKHmRF5778kkXbjuIYC2F%2Bk7JU0Y58yLEA5BFHPWDcguG1ui7f%2BoCRbjp87y25oTWrEDI653Kt4wjIGLygY6pgEVkp7mb9ECaA8x5YVmp84mzj4QRlV5rhoqbKcGKkn1xSACkhD0CdU4Jh5t2srJ1rL7xxMuCL%2Bdl%2Byv5QGphNnaTH38QRgUz4o977XIfzNbspxjRCshDW1v73tvHUCu9fMEujInmrr%2BS%2BK04pANmDoeCoY3zQznIjCHAqJ3U8mGUDxLcRl56cXK9xGskoqdNF4r56RRfS%2Bxhdh0gIBibXSB1L7MS1vp&X-Amz-Signature=549bac6a940a10d4b0afff6bdd8a3c345e52f9e956891b71744844249b8cd19f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFWRE73%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B8BI2%2BQK4RSywCsAUhyoLqf%2BNQUgbDqNH8%2F96M6ERWAiB4qe7k1IADThVBsnMxOrmRN7pS641ykHbNOIeoeDOxcCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHWdgjq4wGXsec%2By3KtwDkkyfUdwlEanumYiOZGn6NIY8d8tj05rFGTDbg0%2F%2FkL0MXMQu%2F7vypQeSOPvp7wGbdmeJc51bcAYzNkRfzglLDjYCc6EoUt%2FvQMCkZN0gSMQ0PMQnmEtNXgy%2BWTuiYZS41LoVdOuwjTS7DFR3uouYNadc8czrTPxSCHI%2FGjYmZ7kXMZqOwVzNuQ7Ggnt8AbW7Umn0iNoiATswcVNDeqc2ArW1iRQs1o5BsYwN5mrdZ1FigShfgtJg9GdW9Aaizho8YehCKQUzmkcPNyBS8kjm3hjsRbvJOpRJOTQ4rOWkDrkc%2FXMnhf%2B84nJUzuJv8lOAL65%2BKpEc50TavzTreHQ8fZ%2B7YHin9Hfp%2F%2Fz%2F1IkYf4QkaBS%2B95HasAppKcJClpaQ94uorslz5vwoDE6acbR8KmJn3xa9hnYfy3H8FcpdEBi6bPemvQq0pG1%2BmjOLX08TzfTKefJLq1LH4e%2Fhao74UNJwXY2df7CA6tR1wB8IR2pT2zAq%2F2z5ENiw29reRy9acjKU%2BPT5lQZRIV%2Boik81AKlHlhbuSsOoJqMTAg9GMSBuZ5JgZKHmRF5778kkXbjuIYC2F%2Bk7JU0Y58yLEA5BFHPWDcguG1ui7f%2BoCRbjp87y25oTWrEDI653Kt4wjIGLygY6pgEVkp7mb9ECaA8x5YVmp84mzj4QRlV5rhoqbKcGKkn1xSACkhD0CdU4Jh5t2srJ1rL7xxMuCL%2Bdl%2Byv5QGphNnaTH38QRgUz4o977XIfzNbspxjRCshDW1v73tvHUCu9fMEujInmrr%2BS%2BK04pANmDoeCoY3zQznIjCHAqJ3U8mGUDxLcRl56cXK9xGskoqdNF4r56RRfS%2Bxhdh0gIBibXSB1L7MS1vp&X-Amz-Signature=70d16c0bb1f46526815bbbc9478365409d2b6c787b68469681c443bdc62e9e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
