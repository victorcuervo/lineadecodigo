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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466555ORMWC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqQ%2BKZ%2BBS6SVjAnd4J2Pf7vmMR2MXYRi1aIgzKQ%2FSfCAiEAw0qr5rNz1YSeMBb9RtQ7nO2P9LWfFvE6%2FxRs%2FKNctsMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBl3B3GOHghUPP1glyrcA2rRJgt%2BCGS5gkAypYsjDXh%2FE3vhOV0P2Px4wiYl5jb%2BgPDElg83sypDI9nyu4QDn%2BsfJ8y4YF05jIGe%2Fp2ky2q8BXGeDtmbrHDeMLgYGg%2BrWESSKjF40XtAXp946l95GSOvQDmaNooU%2Fy29dYIuYwAXLsjNc1n%2BfYDcs2bFWrJDPYNfeN8YiY6%2BplzLSwLa5ntIVO%2FbJFQXTf%2Bw5YieIGagcooo3KZZVvEURevMHwiWaN8xqHKm%2FpbAsyCXYMUqpSvz26Z0YSAtdQTXua7%2F5qU7q17lo%2FPA6MfAYuuiPl1z8m7%2FJpV0DRmpbLo0Z53BJMfdzBtNmio47NsK09sDnVdNk0iaE%2FGU0iHDlJa7m1JRq3oCop2AbtmLYRVtQTpllUypnZ3NDY78vIuhqYV90%2FlsO6gKRZQVoMiQIPnywQ6J70eIQc7Lh8ZYAk%2FQy4k4eqNV3TEY36uTUNeAxPS0Nu7sbzF%2FJbP9DKsn1jPwo0khZUa4PjzboAlT2VfFBBdoM7vzIcnDM5wH6ncno6cAIL61Bp%2F3cQVu%2Bwv4ohrJWc%2FkqwhDUYsuCSB6yd9PCzfspTlKFI7MBaRzph64xO1q3i5ZSwbdACQx%2B6gHt2tSftoG8AJCJwhtwqTRGGk2MInM0ckGOqUBU%2BpCbeC%2BILZ%2F5hI%2FtqVbyP5lRlXu%2F1yno%2Bos6MurcoVVnO8e%2Fx%2BmNha3TcW7OeLra1LdxQQxq%2FF0jOqsut9%2B8UDJQHHtqF3FEFElXOG2ov8Cqzy54wTJiKuga3LkS6prB%2FqwSAf1TezfM12M%2FSSEpod0aXdeEGU2Hgcws581F%2BV8Shq3G4r57hTx%2Bp2CroRxQ%2Fza%2BGZqe8%2B9e6q5HZ9NWXhBs069&X-Amz-Signature=2704cd19bfbd07e90b23bc1a61287762ff5c2350b9b3a69e9b921accccfdc310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466555ORMWC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqQ%2BKZ%2BBS6SVjAnd4J2Pf7vmMR2MXYRi1aIgzKQ%2FSfCAiEAw0qr5rNz1YSeMBb9RtQ7nO2P9LWfFvE6%2FxRs%2FKNctsMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBl3B3GOHghUPP1glyrcA2rRJgt%2BCGS5gkAypYsjDXh%2FE3vhOV0P2Px4wiYl5jb%2BgPDElg83sypDI9nyu4QDn%2BsfJ8y4YF05jIGe%2Fp2ky2q8BXGeDtmbrHDeMLgYGg%2BrWESSKjF40XtAXp946l95GSOvQDmaNooU%2Fy29dYIuYwAXLsjNc1n%2BfYDcs2bFWrJDPYNfeN8YiY6%2BplzLSwLa5ntIVO%2FbJFQXTf%2Bw5YieIGagcooo3KZZVvEURevMHwiWaN8xqHKm%2FpbAsyCXYMUqpSvz26Z0YSAtdQTXua7%2F5qU7q17lo%2FPA6MfAYuuiPl1z8m7%2FJpV0DRmpbLo0Z53BJMfdzBtNmio47NsK09sDnVdNk0iaE%2FGU0iHDlJa7m1JRq3oCop2AbtmLYRVtQTpllUypnZ3NDY78vIuhqYV90%2FlsO6gKRZQVoMiQIPnywQ6J70eIQc7Lh8ZYAk%2FQy4k4eqNV3TEY36uTUNeAxPS0Nu7sbzF%2FJbP9DKsn1jPwo0khZUa4PjzboAlT2VfFBBdoM7vzIcnDM5wH6ncno6cAIL61Bp%2F3cQVu%2Bwv4ohrJWc%2FkqwhDUYsuCSB6yd9PCzfspTlKFI7MBaRzph64xO1q3i5ZSwbdACQx%2B6gHt2tSftoG8AJCJwhtwqTRGGk2MInM0ckGOqUBU%2BpCbeC%2BILZ%2F5hI%2FtqVbyP5lRlXu%2F1yno%2Bos6MurcoVVnO8e%2Fx%2BmNha3TcW7OeLra1LdxQQxq%2FF0jOqsut9%2B8UDJQHHtqF3FEFElXOG2ov8Cqzy54wTJiKuga3LkS6prB%2FqwSAf1TezfM12M%2FSSEpod0aXdeEGU2Hgcws581F%2BV8Shq3G4r57hTx%2Bp2CroRxQ%2Fza%2BGZqe8%2B9e6q5HZ9NWXhBs069&X-Amz-Signature=c73294061158530f1fdaa0e3463320262ebc82593dac7a5532dab30e4c118f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
