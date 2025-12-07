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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SNY32FJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcoCkrkBk3gAGOxZZhcYfRj2bFJzEug78RQC9g4evABAiEApHQEW9SlEjuJviS8nVW3soTrX74yAarP7ZJwPdw8SfoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhGKHRkLggG%2FM7a6ircA2z4bJQ3OUNco3Iz9U0vbnXEwMboSTp71OoKmEi1PPijLLzXXPoAg4qMoCAOZCMTva7%2FK3ARSi2IAOh11D62ClCvoGsifQOh3lGHUY1vnULDXOppVc6sO56xQs3eRNRXJ1W%2BiwhJKkY0VoY2aTpgCbDO7LOwPuHJCC7SS8QdbQEiRYDK9weOP8HOrHXKbNWRnagZQM9KOlbAH7up3dASnX14JCGyDFLIw6Vf9ULOaeqTrdHawai1ahEZh%2B5J1WS6d36Yd6wZoyfZsih4QLxTNbQ4NP2gNz2ZiJ3ormwRMwwXHLtqzjv3SUga4DzkPWPzNfYFrUrPWT510poKH8vSb80uLWrkfQz7DvEq9Uiy%2B%2BnWvNTovioKizcGZ9nC2uqQz5PH0bBORNsi805jPxIZFZh3garXnRTp3zdEcn2lh7Gp6ugJj1uUMcGlNa3My2trU8mAKsYnMOv7wcTvApRuA%2FL7OfLvOcrmyL7LTt5mLSUMzgIPr8SMTx0sjBtu01eo8rgajgQoYX67cWRLtm9ZDKTXue%2FWD2HL4pAwymZ%2F4i81dvoJK%2FHtjaDh87Twqk7joiKYh8LJOf%2BMcDOUWnVOCkx9KGifdlSybHLV%2BDtp4C8plLdp20s2m0DjT%2FF6MJr90skGOqUBmSfoedHywTa%2Fz3a3mI5Dzh%2BJ5PXmjqQZr3nt5eTnBm1QORzSj3glT5pTa0lv74tsUOhr8YZaNiyRRSgQz3fd12C63cjt9sVvFP0xqOgNMmo2xyNyvwrqty6ljdz%2FuJb8vf4RC8wTWvQ7d%2F6YyYPUDU0sn7xlhkJxICvr%2BRm%2BXuYJ4nu%2FL3EK5ZUAoIQ5GWAQLCQzV1HiQ6xpGM8uYH8FjeJA64lE&X-Amz-Signature=068133b4992b882e1583c9209fb9997364aeb580100c1b47013358a0a4abf05f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SNY32FJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcoCkrkBk3gAGOxZZhcYfRj2bFJzEug78RQC9g4evABAiEApHQEW9SlEjuJviS8nVW3soTrX74yAarP7ZJwPdw8SfoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhGKHRkLggG%2FM7a6ircA2z4bJQ3OUNco3Iz9U0vbnXEwMboSTp71OoKmEi1PPijLLzXXPoAg4qMoCAOZCMTva7%2FK3ARSi2IAOh11D62ClCvoGsifQOh3lGHUY1vnULDXOppVc6sO56xQs3eRNRXJ1W%2BiwhJKkY0VoY2aTpgCbDO7LOwPuHJCC7SS8QdbQEiRYDK9weOP8HOrHXKbNWRnagZQM9KOlbAH7up3dASnX14JCGyDFLIw6Vf9ULOaeqTrdHawai1ahEZh%2B5J1WS6d36Yd6wZoyfZsih4QLxTNbQ4NP2gNz2ZiJ3ormwRMwwXHLtqzjv3SUga4DzkPWPzNfYFrUrPWT510poKH8vSb80uLWrkfQz7DvEq9Uiy%2B%2BnWvNTovioKizcGZ9nC2uqQz5PH0bBORNsi805jPxIZFZh3garXnRTp3zdEcn2lh7Gp6ugJj1uUMcGlNa3My2trU8mAKsYnMOv7wcTvApRuA%2FL7OfLvOcrmyL7LTt5mLSUMzgIPr8SMTx0sjBtu01eo8rgajgQoYX67cWRLtm9ZDKTXue%2FWD2HL4pAwymZ%2F4i81dvoJK%2FHtjaDh87Twqk7joiKYh8LJOf%2BMcDOUWnVOCkx9KGifdlSybHLV%2BDtp4C8plLdp20s2m0DjT%2FF6MJr90skGOqUBmSfoedHywTa%2Fz3a3mI5Dzh%2BJ5PXmjqQZr3nt5eTnBm1QORzSj3glT5pTa0lv74tsUOhr8YZaNiyRRSgQz3fd12C63cjt9sVvFP0xqOgNMmo2xyNyvwrqty6ljdz%2FuJb8vf4RC8wTWvQ7d%2F6YyYPUDU0sn7xlhkJxICvr%2BRm%2BXuYJ4nu%2FL3EK5ZUAoIQ5GWAQLCQzV1HiQ6xpGM8uYH8FjeJA64lE&X-Amz-Signature=ba4a7ca56cd72b60f4e7b564a725698e053cfa39ad5a640216bde8652fb94ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
