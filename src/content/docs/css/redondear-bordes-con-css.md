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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBHM6YC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bsy2QqPUt8PloO4hjOiJAoqhgbtLgSEmqn7a3giGw6QIhAPEyKKGDkJiqow%2Fnfnboiqg3AtZRxSONHSsSFTEb2KYoKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgIUfg621aHYtcZt8q3AOIsNMednM5yLdBBAfPbzLGF%2B61bXAi8nka0t4V5XoPWJFczav5HGTEkbEM%2FGixqvCrn23Tq645X%2FUGhtkxiU8bEGSatEEPAHC1OhFq9eL%2FA5z90L71DhbLemLHXn1kR48%2FTiH8bcc7fz%2FrLT69aWMDWRu%2FKu8HFCQHyI6U3NifZV5Eh1hzeNGhPd1IY3bRc9wiOGW7lDDBGvMpIwjtx6lwPjckPpWLXedSKjVPAnDcXXhutQ31D601%2FT%2FV7qxD8q9IS5RdcDaksvLuv0hYpnqE2mq7twfhzxFdvrUi7kV7xxMSjS1qroYID72T1V4ahMqkoYdq6Y%2FlKcwoztSq5TxE19vUZN1f9zKNYInrYRSbp%2F%2FoDcZq90iJJ39l4A0LLuia2GMxpfUX%2FsrfgCNbwuNtNLm8t1jXA9%2F4pkmOKurC7hWwrLCYA1UOJ%2BaTHhyjk07jGoHQjObu7oMekqbBKxaZ1G1bYE7Z9ugTWP5098QFsWWU0ccAboaFAAo0jyunU2rajqUPql6%2FELn0KH7tDMbeEYB4VRGrZDED0KuQVoj3q5A7raYRvggpIfOFKDLkGjIUooUlku%2FR5GmWR3g7UHAoWsswr4w2wBP1yhSqJTZjcrH71NGJ8%2BMUWamjpzD8lNnJBjqkAfnLJMUeCgmky%2F2zguyuCcMtIXimtiUKUcQ53fk5J1%2Bq3oDtzEy5CKHu%2FZjxYchdSW%2BzwCOfsSdf60Uo6Jn51m%2Fh%2BAcUwttvbW9i2RfRBdchGFy2FFdeIBhveQZ477aJ6hHV8B7w9nvMO9v49H6wcVgi%2FV9V7bm6e%2FdNqFhZGfaYXYoMgdMjY%2F4rQ8U6ceLpzry3X9xE9iKQe2YrKYjDmiym6B7N&X-Amz-Signature=633eb0fee9433a475c990458a319661354be7d7ca70fb0c104d8c2d63f9cfe0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBHM6YC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bsy2QqPUt8PloO4hjOiJAoqhgbtLgSEmqn7a3giGw6QIhAPEyKKGDkJiqow%2Fnfnboiqg3AtZRxSONHSsSFTEb2KYoKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgIUfg621aHYtcZt8q3AOIsNMednM5yLdBBAfPbzLGF%2B61bXAi8nka0t4V5XoPWJFczav5HGTEkbEM%2FGixqvCrn23Tq645X%2FUGhtkxiU8bEGSatEEPAHC1OhFq9eL%2FA5z90L71DhbLemLHXn1kR48%2FTiH8bcc7fz%2FrLT69aWMDWRu%2FKu8HFCQHyI6U3NifZV5Eh1hzeNGhPd1IY3bRc9wiOGW7lDDBGvMpIwjtx6lwPjckPpWLXedSKjVPAnDcXXhutQ31D601%2FT%2FV7qxD8q9IS5RdcDaksvLuv0hYpnqE2mq7twfhzxFdvrUi7kV7xxMSjS1qroYID72T1V4ahMqkoYdq6Y%2FlKcwoztSq5TxE19vUZN1f9zKNYInrYRSbp%2F%2FoDcZq90iJJ39l4A0LLuia2GMxpfUX%2FsrfgCNbwuNtNLm8t1jXA9%2F4pkmOKurC7hWwrLCYA1UOJ%2BaTHhyjk07jGoHQjObu7oMekqbBKxaZ1G1bYE7Z9ugTWP5098QFsWWU0ccAboaFAAo0jyunU2rajqUPql6%2FELn0KH7tDMbeEYB4VRGrZDED0KuQVoj3q5A7raYRvggpIfOFKDLkGjIUooUlku%2FR5GmWR3g7UHAoWsswr4w2wBP1yhSqJTZjcrH71NGJ8%2BMUWamjpzD8lNnJBjqkAfnLJMUeCgmky%2F2zguyuCcMtIXimtiUKUcQ53fk5J1%2Bq3oDtzEy5CKHu%2FZjxYchdSW%2BzwCOfsSdf60Uo6Jn51m%2Fh%2BAcUwttvbW9i2RfRBdchGFy2FFdeIBhveQZ477aJ6hHV8B7w9nvMO9v49H6wcVgi%2FV9V7bm6e%2FdNqFhZGfaYXYoMgdMjY%2F4rQ8U6ceLpzry3X9xE9iKQe2YrKYjDmiym6B7N&X-Amz-Signature=c24ba0ae7b188a8c59344cd6e3a77ef59fb843ce20a5f6de83eff44b94113547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
