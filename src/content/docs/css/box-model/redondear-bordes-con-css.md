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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ABKSDZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhMa1sPvNPi13eYwG2TmkP1HWqq2sW%2FiBmp4Sxmkje%2FAiEApK6CasHoR5QykTtlpV%2BR0wLxOszdRb%2BthIntb6iN8x0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPhl69MFrAghqpF%2BvCrcA8Eu52b7X46tzkhf756%2BHAkkqt6kOcZu6fdJDXjV89BPs85WsBZHAkrGbJTRXtvlItO9UUJROg1gPabDLqNZ%2FgEyzyt1zpuD%2FadzTHZZA%2FioxhV2ATD8CGcwh4vdt6cnpUcYY9AwMB2aEp%2BeqKe2C2r2Kz7Nc8iUd1THzInZCLQYiZHOmMe3iDJ94WFLg8VWEJn0ZzorqURj%2BewbeqVTGhTZsm6ZFeOFZhzxxngBu%2BbKjaAFS9SvEehiAS%2Bi5q5PrOMIuYdI5M8rRuLIqm8sT2MVcQdyOdZPqtMpH5FEtpNmbTK9Y6WQxKYe8TqZUaRsBVYENn%2F46AHPhqKCjDRGGtMyc4if7fXi3b%2B5nmx6%2BNzDPQKYatnH%2BH9zFpD0ZLme%2F8Tq%2Fk6yc0wqWn67l9Z67FkNO9kRDgqeOjTWWaXzCMPhgxX8ap%2FAk6wuUL%2FJ1XGtpmJ5JPWtDD023mZ52B1q5Hk0mLPJMIiHxMJM5Tl5w%2Bj3xDof2u0Z3Gv3NSBUdrl5%2B09isfKSXGmwK0BylY87kIqjU8c4%2BY7FMJRq%2FzbClKpLsJw4mG98w4Wtfqdd8yAUjmdP2xKChRc%2BRyrVM2T1qma2UhJxEc1VCunMwAalG%2Frzi0HNdFib7eFVkfUDMLCPisoGOqUBsSbNWeQTDOP4yqES%2BD6fBxCThX6FjJ3oiiEfz6ZFdam6YBACuVhF81tOWH9dpFzquaY1ZKU409ojmR5M%2BXrkmwjAcCNCC7BRR0hbk2L%2F6EL8R8mqOZ745PTnf12A0dnc9wljnf0TsfZzUoBU3plky0UMo3I8Vl548lPC7XoyMubVjssPOvHhnQfr8XTi4TpD44%2FrArb2qFVKlVYa%2BZIpkoRlUhCJ&X-Amz-Signature=4af68b8ddd7722a32b3be11c028b8f3b93bc522791719cb78d31930a872cd7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ABKSDZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhMa1sPvNPi13eYwG2TmkP1HWqq2sW%2FiBmp4Sxmkje%2FAiEApK6CasHoR5QykTtlpV%2BR0wLxOszdRb%2BthIntb6iN8x0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPhl69MFrAghqpF%2BvCrcA8Eu52b7X46tzkhf756%2BHAkkqt6kOcZu6fdJDXjV89BPs85WsBZHAkrGbJTRXtvlItO9UUJROg1gPabDLqNZ%2FgEyzyt1zpuD%2FadzTHZZA%2FioxhV2ATD8CGcwh4vdt6cnpUcYY9AwMB2aEp%2BeqKe2C2r2Kz7Nc8iUd1THzInZCLQYiZHOmMe3iDJ94WFLg8VWEJn0ZzorqURj%2BewbeqVTGhTZsm6ZFeOFZhzxxngBu%2BbKjaAFS9SvEehiAS%2Bi5q5PrOMIuYdI5M8rRuLIqm8sT2MVcQdyOdZPqtMpH5FEtpNmbTK9Y6WQxKYe8TqZUaRsBVYENn%2F46AHPhqKCjDRGGtMyc4if7fXi3b%2B5nmx6%2BNzDPQKYatnH%2BH9zFpD0ZLme%2F8Tq%2Fk6yc0wqWn67l9Z67FkNO9kRDgqeOjTWWaXzCMPhgxX8ap%2FAk6wuUL%2FJ1XGtpmJ5JPWtDD023mZ52B1q5Hk0mLPJMIiHxMJM5Tl5w%2Bj3xDof2u0Z3Gv3NSBUdrl5%2B09isfKSXGmwK0BylY87kIqjU8c4%2BY7FMJRq%2FzbClKpLsJw4mG98w4Wtfqdd8yAUjmdP2xKChRc%2BRyrVM2T1qma2UhJxEc1VCunMwAalG%2Frzi0HNdFib7eFVkfUDMLCPisoGOqUBsSbNWeQTDOP4yqES%2BD6fBxCThX6FjJ3oiiEfz6ZFdam6YBACuVhF81tOWH9dpFzquaY1ZKU409ojmR5M%2BXrkmwjAcCNCC7BRR0hbk2L%2F6EL8R8mqOZ745PTnf12A0dnc9wljnf0TsfZzUoBU3plky0UMo3I8Vl548lPC7XoyMubVjssPOvHhnQfr8XTi4TpD44%2FrArb2qFVKlVYa%2BZIpkoRlUhCJ&X-Amz-Signature=f616ca4f745f70a74d1ae1b71a45b4dbd600c9446c7ef5b311726441714de24d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
