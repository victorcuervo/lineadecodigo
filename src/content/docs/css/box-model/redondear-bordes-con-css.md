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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S7V2Z5J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsHqN1kcw6sgEImaWyQgi7BwJtXIZBb6i4b9S31JD0VgIhAPj9Ifnr66xI6IUKAhz%2F1yej4HNgX34OCFkUVY5nOnJ%2BKv8DCHkQABoMNjM3NDIzMTgzODA1IgwEp2O1op26vLsZjacq3AMpo6878Icf%2BG9F7oLA5J1%2BdDSgF19%2F8Gq%2FRRIuIWg5yK4XuGYSLP8l%2F4ivTbKmbl3bmz1TYEm4gfmHcx3R50LwZKP7C8v6fKMAuaFerAhxtcqCv8Lc7UZDljgyoIAozTu7IYtBPUen8hSmze9XtMNiQoicTyHOijm0vd6XjVWtK%2BSdfPndQUBm95I8il%2FU%2FY7ta6WjWAUA5cuE5tE3jAuM7sCSmBz3MQgNpUKO8pIT5GoKj7qnlUTERjNKL%2B2vczXyE4q9jlu4wLA9IZoTRwf7ju3v1cdqUD3%2FeH49G0hLKkqK%2FIagDB745zkojo5ia%2FzqWiQHiw3qyzt8cugNP4bgcwgvAjiFBEUrDWV%2FdA8kJiuCO7jFp1Argsp4G5x5dZ94FUy0ylJh%2B7h55l6YqEe3FMHloktqi%2F8HjQGmKg5pfXj8g%2FZF%2B2brVZptUdWkG9cMFBq0dtLhxio8JAOd9mzThljhNYG%2BkakazokTMCCCEEDao99ob5QaLf6%2FZccyJvIB868gQAIPtFthGS2ZZ3s0tssI5vgTDcvnClHMal%2F2b1aqQ98WLr3z8%2B5F6e9HBiQrOaf3BgHxo%2BLJUXyc32HIVxVKHhRiFNkASLGkjgZ20OjnK52L3NYtKnc%2BgzDo0YnKBjqkAXKIBkP9tr5UM5IxGyDM%2F2PK3%2BUtYw70uXZn3xhiI%2FgCx4ZKSHxAIhvRcF1Ccg9eFL1qIMzgwhCqprFzLKdLjBvIzXEDNUzuzJikW0HHshS6g44mm%2BQ7mM2jMqjuRlwcVaQE%2BIyQFsDC4QEWrefRnw0iWMl4gnosxbSzc%2BhQVEynB2WL8EagiR4VevQGC1S0abmhQ%2BHX5yyDEHkAf5XP2fCwvCXn&X-Amz-Signature=e20349f8cdee537b149e26fbe3777941bcd25b94416c5458a68ba0558fa03904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S7V2Z5J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsHqN1kcw6sgEImaWyQgi7BwJtXIZBb6i4b9S31JD0VgIhAPj9Ifnr66xI6IUKAhz%2F1yej4HNgX34OCFkUVY5nOnJ%2BKv8DCHkQABoMNjM3NDIzMTgzODA1IgwEp2O1op26vLsZjacq3AMpo6878Icf%2BG9F7oLA5J1%2BdDSgF19%2F8Gq%2FRRIuIWg5yK4XuGYSLP8l%2F4ivTbKmbl3bmz1TYEm4gfmHcx3R50LwZKP7C8v6fKMAuaFerAhxtcqCv8Lc7UZDljgyoIAozTu7IYtBPUen8hSmze9XtMNiQoicTyHOijm0vd6XjVWtK%2BSdfPndQUBm95I8il%2FU%2FY7ta6WjWAUA5cuE5tE3jAuM7sCSmBz3MQgNpUKO8pIT5GoKj7qnlUTERjNKL%2B2vczXyE4q9jlu4wLA9IZoTRwf7ju3v1cdqUD3%2FeH49G0hLKkqK%2FIagDB745zkojo5ia%2FzqWiQHiw3qyzt8cugNP4bgcwgvAjiFBEUrDWV%2FdA8kJiuCO7jFp1Argsp4G5x5dZ94FUy0ylJh%2B7h55l6YqEe3FMHloktqi%2F8HjQGmKg5pfXj8g%2FZF%2B2brVZptUdWkG9cMFBq0dtLhxio8JAOd9mzThljhNYG%2BkakazokTMCCCEEDao99ob5QaLf6%2FZccyJvIB868gQAIPtFthGS2ZZ3s0tssI5vgTDcvnClHMal%2F2b1aqQ98WLr3z8%2B5F6e9HBiQrOaf3BgHxo%2BLJUXyc32HIVxVKHhRiFNkASLGkjgZ20OjnK52L3NYtKnc%2BgzDo0YnKBjqkAXKIBkP9tr5UM5IxGyDM%2F2PK3%2BUtYw70uXZn3xhiI%2FgCx4ZKSHxAIhvRcF1Ccg9eFL1qIMzgwhCqprFzLKdLjBvIzXEDNUzuzJikW0HHshS6g44mm%2BQ7mM2jMqjuRlwcVaQE%2BIyQFsDC4QEWrefRnw0iWMl4gnosxbSzc%2BhQVEynB2WL8EagiR4VevQGC1S0abmhQ%2BHX5yyDEHkAf5XP2fCwvCXn&X-Amz-Signature=df130e882dbee939bf62b3591cfd31f2c98d9ab268e84f4d729956476a328c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
