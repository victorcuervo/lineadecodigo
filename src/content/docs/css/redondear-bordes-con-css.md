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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRGTNCH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVk4E2ma5ij6NgSWtaU5jtUVTDw3OibZEZ6F6UgNTF1wIhANFRAScCLajK7fQ9S7RsFapp%2ByXHCmCSRF8phWyXtvoxKv8DCE8QABoMNjM3NDIzMTgzODA1IgzhmJFl2fHVizn7Itoq3AMXd1c%2FVCATS8hEQKJXvzMdjWlL0CJb9ztYnowMmbY25x6ZnTqbBr0QZ%2Fil1rKhdgtavJonNfmldiaah1pztqic0%2BzceY2eMRjh1Jn36ujLRpBB0fJthCHlrlnjnZsBR1zsJ1X%2BeD8iab3ehGUWbL6A3GjEWC%2FcHkI51%2BZPBsGnY1iwNQf9XYopv1tgNbmc7scYCB%2FcObJSa78tdh2482daQUd3ZWUZ1EnznTyMyRdPhdJ9FnAD8c1fiudyqQSMcGKJUcZnnfPAsmwBa7fXKgFR9T6E8HheI9nSK%2BTh4jgnhc2JoX0BSz%2FWBIOHfZ5ruysPWULZO9GyWo1BfiwjVVvULmYetAy1UdFW4HkNfCF8HfuDevFfsrcvxwZfrOXVjzd7F%2BvM359poh%2FGO1uCS8LAKaU6qQx3TCvhq%2FtmCWPwh8lBlGl%2BmZaCn7gPcAaW9QSeeZ%2F5GXd8oH2CJsMTFtmq0KU7LWxtXF3idbfR0vK60SgnThXYJj30s5ko7h4WG3qLgty94hmgK8GarEVZnd6D%2F69C4tvmVxvhcutkSVQPtFfZb4fLri9xdg73LhqXfYjCnPPYnpLkHgh7FCBUmTl9OTqFI6MOWkfB2OUVPwskCJtzcyN277boobzcrDDIjMjJBjqkAcWMUVkipnM8ft1cNyP%2FfnIcy9abJeQpEj9CzVU5v3NV%2B%2F1IvR8fcURF%2BOjBns21ZgAgABC88Oi3NpIDwTVB%2B0iakzxO5VE0xJ8P18Tk%2Bk0lAwntiwkOc56FwXs%2BiHCsv5xeKyPg%2FHP03o5JLnfPVuR2vvxzPhloG8YrTodwr6xxZXBS5aEA0GeAeFjy5YTqZB%2BT3ieuolKP0UnZ4iRbI2hrmr%2Bi&X-Amz-Signature=3600f0ef7a2de237874fb7d974722540dbeb9deb09d480512623afba790fe75f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRGTNCH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVk4E2ma5ij6NgSWtaU5jtUVTDw3OibZEZ6F6UgNTF1wIhANFRAScCLajK7fQ9S7RsFapp%2ByXHCmCSRF8phWyXtvoxKv8DCE8QABoMNjM3NDIzMTgzODA1IgzhmJFl2fHVizn7Itoq3AMXd1c%2FVCATS8hEQKJXvzMdjWlL0CJb9ztYnowMmbY25x6ZnTqbBr0QZ%2Fil1rKhdgtavJonNfmldiaah1pztqic0%2BzceY2eMRjh1Jn36ujLRpBB0fJthCHlrlnjnZsBR1zsJ1X%2BeD8iab3ehGUWbL6A3GjEWC%2FcHkI51%2BZPBsGnY1iwNQf9XYopv1tgNbmc7scYCB%2FcObJSa78tdh2482daQUd3ZWUZ1EnznTyMyRdPhdJ9FnAD8c1fiudyqQSMcGKJUcZnnfPAsmwBa7fXKgFR9T6E8HheI9nSK%2BTh4jgnhc2JoX0BSz%2FWBIOHfZ5ruysPWULZO9GyWo1BfiwjVVvULmYetAy1UdFW4HkNfCF8HfuDevFfsrcvxwZfrOXVjzd7F%2BvM359poh%2FGO1uCS8LAKaU6qQx3TCvhq%2FtmCWPwh8lBlGl%2BmZaCn7gPcAaW9QSeeZ%2F5GXd8oH2CJsMTFtmq0KU7LWxtXF3idbfR0vK60SgnThXYJj30s5ko7h4WG3qLgty94hmgK8GarEVZnd6D%2F69C4tvmVxvhcutkSVQPtFfZb4fLri9xdg73LhqXfYjCnPPYnpLkHgh7FCBUmTl9OTqFI6MOWkfB2OUVPwskCJtzcyN277boobzcrDDIjMjJBjqkAcWMUVkipnM8ft1cNyP%2FfnIcy9abJeQpEj9CzVU5v3NV%2B%2F1IvR8fcURF%2BOjBns21ZgAgABC88Oi3NpIDwTVB%2B0iakzxO5VE0xJ8P18Tk%2Bk0lAwntiwkOc56FwXs%2BiHCsv5xeKyPg%2FHP03o5JLnfPVuR2vvxzPhloG8YrTodwr6xxZXBS5aEA0GeAeFjy5YTqZB%2BT3ieuolKP0UnZ4iRbI2hrmr%2Bi&X-Amz-Signature=4959ccf9da5091260663cb494bf5cc9471cf58e9998a030543252793d4791864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
