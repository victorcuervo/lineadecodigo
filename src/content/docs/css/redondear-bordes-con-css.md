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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652UNRDPS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BDsoDZJPD%2B0%2FJAPSpzS48H9en1T5%2FcKwu8gETrDlXOAiEAtxw7tYzDRuMsxf1TEbmPZvOYh960Xmk3Lq9V1zZG6koq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPZhsCQrNQaH%2BUhfzircA5ZZAU2lBIyUZL%2FCP5o62qmi5jkptoQiBVQNzf1TE2aBD9fl%2FgOubaX1%2FgaYSTsMIjsGKfq%2B6jEG%2BuoiJEqdAOkwiXW%2FZ8VWHm%2Fks4j7ULnmneTXQwWRo7lo2gruQS1eI0mSr%2Bzfrw9RKCuT5F1CY1KQFF5TFYcZikoemXC%2BZ3JHXCrBFVJQCbGUEXj7OtlA3%2BjfDy8e21MIfWpFdtcY0ZSYCWi50BEYjSm7UbeErtdHGALBpcKvheoYRfx8Q3auPfTMO4CAgw%2BV1%2FNbmgHgrH2SEM0xWiQJur9zUNrdQQuO%2Fvm0c5geuzhyfBPVZbqtgVZQxpSOpDGRgAzxa8tTNgxVv5CFqn%2FueT81SkfPwSAjXhBw%2Flv%2BBAu0V4Ie9SCrPg1WCfE5WmLP38zvtsEUScofgU4wC6SW0PsuY7ysy2g5o1GDVOIONwp7slhoaN8jC1HgIlbiSWBnHKGspwYdKWQI6BWgODHw4nl9BZeQ6EJ1QE1OCAcyclOIXFYsALoHTRRpJdIDwyxpp1vfB7PWuuJx1MHI2%2FUBWhBjPwc9vFcosLZcSKsQIGhm9kiy8QiQocZMP2Vr46SERN5he32HEk3C1pKJ8Dwg3maqp8fJF7CXDf5TPM38V3%2BJ0qSOML6ez8kGOqUBEbffQq202UqRRzwrJXVt9G3wYTdFPh1s5w7kblF3ATi%2Fo0Mf%2BMKCP7hE5%2FPl5Chr2GqNLqFx8L7SDuQMPRpBnNVjWEQe4CPQswVX4cvAePjmAXS%2FXmg5i3znDOiDlT8LruVxhMnfiChFqZ%2B5ZaQlCan%2BXhco7z8RpRDn%2FFE6oDJNbwlYRlZ38o4lYcy%2BVU9EX7u7zkseILFe2aA2Z8ouJSaEbr%2B8&X-Amz-Signature=2c0328ecc09c4856f59627633d3d8c9cde51acb236d87a13a0a715352c245b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652UNRDPS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BDsoDZJPD%2B0%2FJAPSpzS48H9en1T5%2FcKwu8gETrDlXOAiEAtxw7tYzDRuMsxf1TEbmPZvOYh960Xmk3Lq9V1zZG6koq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPZhsCQrNQaH%2BUhfzircA5ZZAU2lBIyUZL%2FCP5o62qmi5jkptoQiBVQNzf1TE2aBD9fl%2FgOubaX1%2FgaYSTsMIjsGKfq%2B6jEG%2BuoiJEqdAOkwiXW%2FZ8VWHm%2Fks4j7ULnmneTXQwWRo7lo2gruQS1eI0mSr%2Bzfrw9RKCuT5F1CY1KQFF5TFYcZikoemXC%2BZ3JHXCrBFVJQCbGUEXj7OtlA3%2BjfDy8e21MIfWpFdtcY0ZSYCWi50BEYjSm7UbeErtdHGALBpcKvheoYRfx8Q3auPfTMO4CAgw%2BV1%2FNbmgHgrH2SEM0xWiQJur9zUNrdQQuO%2Fvm0c5geuzhyfBPVZbqtgVZQxpSOpDGRgAzxa8tTNgxVv5CFqn%2FueT81SkfPwSAjXhBw%2Flv%2BBAu0V4Ie9SCrPg1WCfE5WmLP38zvtsEUScofgU4wC6SW0PsuY7ysy2g5o1GDVOIONwp7slhoaN8jC1HgIlbiSWBnHKGspwYdKWQI6BWgODHw4nl9BZeQ6EJ1QE1OCAcyclOIXFYsALoHTRRpJdIDwyxpp1vfB7PWuuJx1MHI2%2FUBWhBjPwc9vFcosLZcSKsQIGhm9kiy8QiQocZMP2Vr46SERN5he32HEk3C1pKJ8Dwg3maqp8fJF7CXDf5TPM38V3%2BJ0qSOML6ez8kGOqUBEbffQq202UqRRzwrJXVt9G3wYTdFPh1s5w7kblF3ATi%2Fo0Mf%2BMKCP7hE5%2FPl5Chr2GqNLqFx8L7SDuQMPRpBnNVjWEQe4CPQswVX4cvAePjmAXS%2FXmg5i3znDOiDlT8LruVxhMnfiChFqZ%2B5ZaQlCan%2BXhco7z8RpRDn%2FFE6oDJNbwlYRlZ38o4lYcy%2BVU9EX7u7zkseILFe2aA2Z8ouJSaEbr%2B8&X-Amz-Signature=d435bc733d7ca9d76bc6885c7e6b44bd72182bd4f85a40c39e0f984b45073186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
