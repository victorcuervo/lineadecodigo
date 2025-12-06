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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63CLDLO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCWT%2FusRhqjXbnPSEuVl5v07Jw4eJDS8Z2L2lwq1gAjAiEApufZHaIyXkInCumkc86QmH2wAuf2xzFtmNOPjgiZeKYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDC5zE2%2FAkRTA7aVNvircA07WG63fs18ZieBDbyvBXy3sxCxccSFQ%2BtCsiFsXkxKACT2a6F2aMfPKwzQfG9CrTIbRX6%2FWYsEbsLKPzf4s5g1mlqOeI29Xv44480MsSAwoB6Dg5tASmuYu8M2uTgWlNJ%2FikgAgn7OiialJ2S8FkTmPoFkPXXcMNdTddDfmsxvqJp5JCFeuBu18GA%2FJZZasgB73sVQaXx1PQs0EMFh8igZA2TzEZMiieg7%2FVElvw6omWdQlamA335uObm8tIgo4VIg8ObNSgmJiMDXtSQjzm5dY%2BmgiFQcAoUgWaQC56E4ZB4CNlFcsFtSYpl4oyg75byeU9SLsIQsoBnZfD0w2IhHnLQqtPZVgLsFGY1hLnwa1ZpWc9SPB85DuDqeCVZM5gUxnevjiV%2BhAXxVOyoOiM4pW09r1VKsI82caDe4KN%2Bus9Jhbh%2Fx3fNRRZGD1Dafev%2BwEePhG7lmdSWMZTp8E15NMh68Jsp2pyA8U2G4B4Bz11%2FMO8Tueur%2BZ%2FkK9zK0lIH1FEuhrbcpoIE5Csg390teD8eybC%2FGYF%2FDGjSlVVMdrrTtWSBcPmGP1CFRIwKfVu%2BbyTbtZx2aTppAzHPZNZgnaeIfqBtz4gA3NxHUWMLVXoSOM04NSXAoENz9yMNHL0ckGOqUBPJtbeOZS8mw5bqDP3bMGVurF5U%2FIp7FUZTLk3h8fokw2wt6UfcINCFcWWjjfj3TSwl4J1oX9tNgs7S6VDUCJqBg1YJ8pjddiPeIKOXjz9mhPYn2n5t7jr4gEW05fKsIiGkymqnlipjUpTjpBx%2BtPjXPBqxRqhubtlioe9ZlJVIL3VE13OVJ5jaad4VBjLOaA8QVhpkjmuvw%2BVdx5XMzLVv9ERrdc&X-Amz-Signature=5cdb1eb13f5a93bd062615db7a4e1c2f5221f0d1d3c36ffd48dbf56242a4c2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63CLDLO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCWT%2FusRhqjXbnPSEuVl5v07Jw4eJDS8Z2L2lwq1gAjAiEApufZHaIyXkInCumkc86QmH2wAuf2xzFtmNOPjgiZeKYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDC5zE2%2FAkRTA7aVNvircA07WG63fs18ZieBDbyvBXy3sxCxccSFQ%2BtCsiFsXkxKACT2a6F2aMfPKwzQfG9CrTIbRX6%2FWYsEbsLKPzf4s5g1mlqOeI29Xv44480MsSAwoB6Dg5tASmuYu8M2uTgWlNJ%2FikgAgn7OiialJ2S8FkTmPoFkPXXcMNdTddDfmsxvqJp5JCFeuBu18GA%2FJZZasgB73sVQaXx1PQs0EMFh8igZA2TzEZMiieg7%2FVElvw6omWdQlamA335uObm8tIgo4VIg8ObNSgmJiMDXtSQjzm5dY%2BmgiFQcAoUgWaQC56E4ZB4CNlFcsFtSYpl4oyg75byeU9SLsIQsoBnZfD0w2IhHnLQqtPZVgLsFGY1hLnwa1ZpWc9SPB85DuDqeCVZM5gUxnevjiV%2BhAXxVOyoOiM4pW09r1VKsI82caDe4KN%2Bus9Jhbh%2Fx3fNRRZGD1Dafev%2BwEePhG7lmdSWMZTp8E15NMh68Jsp2pyA8U2G4B4Bz11%2FMO8Tueur%2BZ%2FkK9zK0lIH1FEuhrbcpoIE5Csg390teD8eybC%2FGYF%2FDGjSlVVMdrrTtWSBcPmGP1CFRIwKfVu%2BbyTbtZx2aTppAzHPZNZgnaeIfqBtz4gA3NxHUWMLVXoSOM04NSXAoENz9yMNHL0ckGOqUBPJtbeOZS8mw5bqDP3bMGVurF5U%2FIp7FUZTLk3h8fokw2wt6UfcINCFcWWjjfj3TSwl4J1oX9tNgs7S6VDUCJqBg1YJ8pjddiPeIKOXjz9mhPYn2n5t7jr4gEW05fKsIiGkymqnlipjUpTjpBx%2BtPjXPBqxRqhubtlioe9ZlJVIL3VE13OVJ5jaad4VBjLOaA8QVhpkjmuvw%2BVdx5XMzLVv9ERrdc&X-Amz-Signature=e8821279ba44b6ffe5f05c5278365a0fdb6d4f846280f26e9ce5d8e1237181e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
