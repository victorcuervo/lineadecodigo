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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQNIAWN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxYJtbpaYkzr869zWjFAbqE558KaBjpwVFJ%2BA5bfq8lQIgdc84BbfDTUFppwOtSjqIcS%2FxZsoiOV1iaaCS%2B4P6dOsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDECBBlxKabh4ZxvnHCrcA26MW7Lq%2BrypsHZ%2Fhe7nRYWPFNn5RT603QHjW8HeDs%2FQuC37bGoyFETn4P9Rpa5%2BZwpF5gu3J9vkTjK1ERDwh4R0D%2FKRgt8LMEnvNWU5IK%2BKbe6qyxhuAe2hnPT6bV4tDSthDboplbZU%2By2Q7vgMsVh5WLoqZqpTAtsTLcngADWbd6eFLB1HDe5XcAGmXXDMNjGGfDxnjl3VwKlmveC3DppmuSfJk1vMs5r9BwOX%2FETCjYgh1gQzdvix8uOR1boC3kbSutO8YYwx2L7CZEX7dJOIXUAZ2E0Q%2BY7TlAec1SUHDX2fcHcrbP%2BU7CLUKfzGSut3VT9Mg%2BeGgyU41yW92PHs9VPxPHKiGZwuGR6udx%2FFFS6KB6Cl4LTeoIoG6u%2F%2B37ZQIPqWFrLcF8awGtP7nDCJtF82Ukk7pq9OZozsE9qmj76vU2JxaIuq9Sr0qMiJFZDwQpbonX3Xoeg%2FH5t6E6zMvj1kkoi7sZXbMBZMvw%2FP8lfdrHgdT9z9ipB1iTGxEZcHj9rTGDIfWudFDbaAoljai33y8GSXxboDwCDUcfuzY1ecdHNw1zjOZu93%2BsQlMck5dN1%2FX8hFiXFcA%2Fs4fwxb965s%2Fgd09S8%2BnrcT48%2FesxnmKlL6VVfMrIPNMJ6MyMkGOqUBdkcSitS0Gx3GhzYc40HDbvoa5jksuAs1PsxoT4za46l34j55Ic234KRHMumeecH8fwuyd7YrQT7BZvsVfvfinKMC42VuZjm5JSFbSGPPf1X%2F4RdOS9UgxFVtuuhbBRlLaxZWh6Qekxz8pBkkPrJu%2BHjFHZiX%2BM4CXnDb4glFVySNK7ahYS%2BS%2FGXQguOZbu5MlUQxfgnX%2BAh51htodHPyzyCVb905&X-Amz-Signature=db01b3ac9e113d6dd95e6343ef5035f37a0dca3ff8c0b5c6c66c76273d9fdac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQNIAWN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxYJtbpaYkzr869zWjFAbqE558KaBjpwVFJ%2BA5bfq8lQIgdc84BbfDTUFppwOtSjqIcS%2FxZsoiOV1iaaCS%2B4P6dOsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDECBBlxKabh4ZxvnHCrcA26MW7Lq%2BrypsHZ%2Fhe7nRYWPFNn5RT603QHjW8HeDs%2FQuC37bGoyFETn4P9Rpa5%2BZwpF5gu3J9vkTjK1ERDwh4R0D%2FKRgt8LMEnvNWU5IK%2BKbe6qyxhuAe2hnPT6bV4tDSthDboplbZU%2By2Q7vgMsVh5WLoqZqpTAtsTLcngADWbd6eFLB1HDe5XcAGmXXDMNjGGfDxnjl3VwKlmveC3DppmuSfJk1vMs5r9BwOX%2FETCjYgh1gQzdvix8uOR1boC3kbSutO8YYwx2L7CZEX7dJOIXUAZ2E0Q%2BY7TlAec1SUHDX2fcHcrbP%2BU7CLUKfzGSut3VT9Mg%2BeGgyU41yW92PHs9VPxPHKiGZwuGR6udx%2FFFS6KB6Cl4LTeoIoG6u%2F%2B37ZQIPqWFrLcF8awGtP7nDCJtF82Ukk7pq9OZozsE9qmj76vU2JxaIuq9Sr0qMiJFZDwQpbonX3Xoeg%2FH5t6E6zMvj1kkoi7sZXbMBZMvw%2FP8lfdrHgdT9z9ipB1iTGxEZcHj9rTGDIfWudFDbaAoljai33y8GSXxboDwCDUcfuzY1ecdHNw1zjOZu93%2BsQlMck5dN1%2FX8hFiXFcA%2Fs4fwxb965s%2Fgd09S8%2BnrcT48%2FesxnmKlL6VVfMrIPNMJ6MyMkGOqUBdkcSitS0Gx3GhzYc40HDbvoa5jksuAs1PsxoT4za46l34j55Ic234KRHMumeecH8fwuyd7YrQT7BZvsVfvfinKMC42VuZjm5JSFbSGPPf1X%2F4RdOS9UgxFVtuuhbBRlLaxZWh6Qekxz8pBkkPrJu%2BHjFHZiX%2BM4CXnDb4glFVySNK7ahYS%2BS%2FGXQguOZbu5MlUQxfgnX%2BAh51htodHPyzyCVb905&X-Amz-Signature=252bd9b3fff614a6000989c4414031d5a97ca67086cc6a5f38a21eac9351ea39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
