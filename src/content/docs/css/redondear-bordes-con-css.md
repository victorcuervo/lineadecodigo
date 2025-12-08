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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDKTFVZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW4RLHd5vJ3gJ6UZXuTRDOGOgjMCis5fFd2BsEuO7pJAIhAKM14J1n1Ygeza0n%2FjoPdQiy0c6EIS31i83fRGK9eLAFKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPo%2BdZAeM%2FpoqPyhIq3AMl40zwJR3mejUrOSJUFIs6oLt4il9Ms6F3XZ%2F8FPjhI9w5kx9kMV9Ey%2F8qergE1X0kwWAQ0tdOj5qS33YHtnd800GwJlMF2EfWjtvjFjp1BtGQzwoqByN7CYk1GBcionDzOFLtNEMe29p%2F3sda5h%2BAqfgFoLRUG5VBvE1jU6oSLnGOhM4BoslatvKnvj06Zlqqg9vXjn8oxpm7hvMoO3kLiTlBDRJoQSKViwhWfnnCeu58aeF9NalpPhnXBIStBEHpoK9cfgtyx5Un8IM9c4N8iKcYHhCT9MYxz54c%2F0Y75nDlGwmqDehtTtRwF%2Fz9VwOk3DkL1qbaXhbXccAJaAsab1RngByLYhKdjy%2Fc9jpX1wT14S%2Bh3O%2Bj3kOsR212TY4UY%2Bd6V%2B9OP9lOtDUN8NFHLUyli5sx4oSwuGBt6esQZ8uRCoYDd4krzslspF1Hsjm9S9%2BfNEc0AQl8jVCsc1kl2lhXAMMBJfDLFbGHz3RQ7iaVgyZgQvyoOEkeU3wzecYng0X226vyupLhO4hNrUiwAvjVGpjNJ5P8nzLM5n8kTkvcZJ%2F5hEuL2jFUw6r%2FR6sttq4novInWO8%2FKVAOkOja0405ZIuVPFJnk1UF%2FmcoDOL2zBVWT39LDmGg3zDf7dnJBjqkAb9mnWinSDA%2FBSlHBppdxSErdHt0b6OrcZRtovtA%2BkKD4%2BtRNZRYa8%2BKDerP%2B1jxBGZHQR9SL7%2Ffaf4lEdirO5w9%2BWrawy9hlfmdQInsuLTzccZuZzmkKf1sVyNqDZVW5726p6oQIPGm0rhD0zkmIouAKBx8lbbuuUx5Pc91mc%2F3W3Jkyyi1CJlAq9r95VVK0%2FzUQErwCnhEdFUMuwc46TZ1lHjR&X-Amz-Signature=f7a14729534cbbefb462ff5af54e814cd3735ac8be9e3357a1d2c5bc109f4c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDKTFVZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW4RLHd5vJ3gJ6UZXuTRDOGOgjMCis5fFd2BsEuO7pJAIhAKM14J1n1Ygeza0n%2FjoPdQiy0c6EIS31i83fRGK9eLAFKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPo%2BdZAeM%2FpoqPyhIq3AMl40zwJR3mejUrOSJUFIs6oLt4il9Ms6F3XZ%2F8FPjhI9w5kx9kMV9Ey%2F8qergE1X0kwWAQ0tdOj5qS33YHtnd800GwJlMF2EfWjtvjFjp1BtGQzwoqByN7CYk1GBcionDzOFLtNEMe29p%2F3sda5h%2BAqfgFoLRUG5VBvE1jU6oSLnGOhM4BoslatvKnvj06Zlqqg9vXjn8oxpm7hvMoO3kLiTlBDRJoQSKViwhWfnnCeu58aeF9NalpPhnXBIStBEHpoK9cfgtyx5Un8IM9c4N8iKcYHhCT9MYxz54c%2F0Y75nDlGwmqDehtTtRwF%2Fz9VwOk3DkL1qbaXhbXccAJaAsab1RngByLYhKdjy%2Fc9jpX1wT14S%2Bh3O%2Bj3kOsR212TY4UY%2Bd6V%2B9OP9lOtDUN8NFHLUyli5sx4oSwuGBt6esQZ8uRCoYDd4krzslspF1Hsjm9S9%2BfNEc0AQl8jVCsc1kl2lhXAMMBJfDLFbGHz3RQ7iaVgyZgQvyoOEkeU3wzecYng0X226vyupLhO4hNrUiwAvjVGpjNJ5P8nzLM5n8kTkvcZJ%2F5hEuL2jFUw6r%2FR6sttq4novInWO8%2FKVAOkOja0405ZIuVPFJnk1UF%2FmcoDOL2zBVWT39LDmGg3zDf7dnJBjqkAb9mnWinSDA%2FBSlHBppdxSErdHt0b6OrcZRtovtA%2BkKD4%2BtRNZRYa8%2BKDerP%2B1jxBGZHQR9SL7%2Ffaf4lEdirO5w9%2BWrawy9hlfmdQInsuLTzccZuZzmkKf1sVyNqDZVW5726p6oQIPGm0rhD0zkmIouAKBx8lbbuuUx5Pc91mc%2F3W3Jkyyi1CJlAq9r95VVK0%2FzUQErwCnhEdFUMuwc46TZ1lHjR&X-Amz-Signature=aa6d2cf04541b8d4e43a170782c5089d344b66e13bf20fa44a487fe9d56acf45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
