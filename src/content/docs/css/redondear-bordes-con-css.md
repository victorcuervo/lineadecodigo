---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVH4FFJ7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFRrcJ9%2Fwhn%2Bcup6%2FPEzKJyxVK%2B6mxiBAGnp4pnbTYU3AiEA5XJauMWe9vqGhoDKQbZQKc6axSy%2BSOvY2AJ0t8m3EBoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOM7KOj8GKplpY0BnyrcAxa6HQfgdI9RVLlk3q3zCwhhMTeIIkCfM38erDwVSN2KF32n35ApdUg3bTMi3eixUFAum4HribVLhJ8E1U8fxwK14Eo11w34K%2B081GFvUBWPGcBYpjU%2BZeWsAZju4UAjnbw7%2BkGOlRfwiuT0rXJftHRQffRCN1LgdH3sLkAmOy7rbi2shVje1GT3kyd79P%2FZnoD%2B53edpfBETuXsDiuaaZcDAZH4Ag%2FNs4KujwWE1Xn4g685b9PLOWAL06rwg2uF5BqNrpJdamNvOKr4Vx7bJXW6x2Bxof4WbUQMYhm3kZCpG%2BSambYmUXnBjoeOZLYoSddb95VzYjTSFDF1Rd8XpLmVfran7B%2FEIeDBRBmYowpa0tw02AWxp8qOGsTLp9zHHTWUZJVAEevGmjqTiga18ACv8fSP7upbwXf1lkUnUgJVoXVnPm1EOlpLHDI%2FKV4Fd6IlHnuPuf04o9tat3E5zpwBBD5yaF2LUimpq5n6xMAeMZe7xhUEfpXX%2ByF3yux8d0ursnbcJiohBS%2FcTgrZXUNqJdUMngzxZdzyBNyUMlLvYXVMsMZxVzmJLKrvf5rfned5tA9jzNDTzsGeMXAQXkFcyOoCJjtJ2saEx7jsWiCKekVezfOESFaHKKYjMNagxskGOqUByGlHkyarUKgpkBgkIj36%2BUfu8tO%2FxggPWEc3H2Anf80HOVB0zVjfPkEbVkEMiaeSVisQH9q5Csrrv3rcIiEXwjfHZVm2naYsN8Gw0ufhaSGHL4PTUAzBuAP%2Bz7CibCnjvwzIWHiWAuLMST9gsl7tEMWwGsXCZ8rjLc7WeO5Ue09ONpmuBG7aKtb1v3bWCqpEozWxhSOa3%2F4YkxGIrgDIQjePX7aj&X-Amz-Signature=054fa2d49101e36a3259fb65e79b60e7404f182d58e35584d2d3a8cd87256b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVH4FFJ7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFRrcJ9%2Fwhn%2Bcup6%2FPEzKJyxVK%2B6mxiBAGnp4pnbTYU3AiEA5XJauMWe9vqGhoDKQbZQKc6axSy%2BSOvY2AJ0t8m3EBoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOM7KOj8GKplpY0BnyrcAxa6HQfgdI9RVLlk3q3zCwhhMTeIIkCfM38erDwVSN2KF32n35ApdUg3bTMi3eixUFAum4HribVLhJ8E1U8fxwK14Eo11w34K%2B081GFvUBWPGcBYpjU%2BZeWsAZju4UAjnbw7%2BkGOlRfwiuT0rXJftHRQffRCN1LgdH3sLkAmOy7rbi2shVje1GT3kyd79P%2FZnoD%2B53edpfBETuXsDiuaaZcDAZH4Ag%2FNs4KujwWE1Xn4g685b9PLOWAL06rwg2uF5BqNrpJdamNvOKr4Vx7bJXW6x2Bxof4WbUQMYhm3kZCpG%2BSambYmUXnBjoeOZLYoSddb95VzYjTSFDF1Rd8XpLmVfran7B%2FEIeDBRBmYowpa0tw02AWxp8qOGsTLp9zHHTWUZJVAEevGmjqTiga18ACv8fSP7upbwXf1lkUnUgJVoXVnPm1EOlpLHDI%2FKV4Fd6IlHnuPuf04o9tat3E5zpwBBD5yaF2LUimpq5n6xMAeMZe7xhUEfpXX%2ByF3yux8d0ursnbcJiohBS%2FcTgrZXUNqJdUMngzxZdzyBNyUMlLvYXVMsMZxVzmJLKrvf5rfned5tA9jzNDTzsGeMXAQXkFcyOoCJjtJ2saEx7jsWiCKekVezfOESFaHKKYjMNagxskGOqUByGlHkyarUKgpkBgkIj36%2BUfu8tO%2FxggPWEc3H2Anf80HOVB0zVjfPkEbVkEMiaeSVisQH9q5Csrrv3rcIiEXwjfHZVm2naYsN8Gw0ufhaSGHL4PTUAzBuAP%2Bz7CibCnjvwzIWHiWAuLMST9gsl7tEMWwGsXCZ8rjLc7WeO5Ue09ONpmuBG7aKtb1v3bWCqpEozWxhSOa3%2F4YkxGIrgDIQjePX7aj&X-Amz-Signature=92712f35bcba614a6c3a491bd1375b7160cb85886b215de137ee6979a1dff961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
