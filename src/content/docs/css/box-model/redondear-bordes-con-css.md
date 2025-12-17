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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY7NBMU6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDi8muoyYO2aB7ajN%2F1HGfJm%2F%2F2lp3alfduPXUQmHHmbAiEAlkJeCS4AXqXOXzNjPU8DqMZgsdoHEH63Y40gfspKpPAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDKyfGWUCtati8K9pSrcA4VklDE1Yo4pATIEY%2BFISLUlZZemHWxoHKHeR46gzmkunnZlycetutDaNb95s9q81T66UjjR639LRpe9GHapaTlolPRuGWbIIJbzaQkeiBNZNlTOEVHN%2BPSCYljoUGzJH0NY%2BojOgtvz9nh0%2F%2FiWBey54GPJDxTcjQi83ubqnEoltEsg6n6VSKsXT7dJHROjggnrzaLJ5o8k3ytnti94PUTPv5pzZ%2BRY%2BMKohtoj6LzZTgBjb7m1BZ7wD5GeTRrhBt5FfQqMANQnWu6JvYwxqEl22ikEH0LRWeIoabzR0bJNJ1xgL9vMqn%2B0hjLW6gQLEs%2FnNrxXP%2B2DrMiN9nOx3MKkr0LAgTqa3O6XFDP9XBOhtuAuq0fsA%2BvLJjwQ38oIVtY%2FlprdwusMaQyG64K0%2BC2z2lef2BusVYFGC16BJRIqaZNwmcEeHoaaAObjx4vtbWS%2FzC%2Fd7b9PvyOUbqXubqCgLW365TiUlkckOGbSdMMgwFg8%2Frp58pEvpo0j4b8qwDo3cQfuzKV6A%2FQBUuqmQ9%2FrC0ifdgIjXpezyNfiNSacChVd%2BfgThxPYpsZVtdpPJbIWNmDDOXw1UjyngTIq%2BrqugKL09AN3KjeOzsj9tOCT0YOuq4dlzDAhYJe1MO7FisoGOqUBS7%2BHRvoZaT20ly4Uj9srRY%2FpPLmwySSxsnr1Uil7Zlt1NRSC2hCkrn8OSxroBit7PH6lvn1ABeuDn8knRx4Pqm%2Fhn8YAvYl8%2BR5rRq57c3TsZRKga85NksCO8KyTBaxmhF4p1D%2FPLKcLnR2QS7KUhz0R3jYviM8UXvOxZ%2BUe7YFlh26fQ3IFFWEdNMl6DOdlcFQ%2Fkm4l7wTSdLTua5R%2BTdyQ5pJc&X-Amz-Signature=f7afd93115d1d0d6a3a4f3ae409b3616b9b9ad0f5d27b984e0f66bdb57f0a4e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY7NBMU6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDi8muoyYO2aB7ajN%2F1HGfJm%2F%2F2lp3alfduPXUQmHHmbAiEAlkJeCS4AXqXOXzNjPU8DqMZgsdoHEH63Y40gfspKpPAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDKyfGWUCtati8K9pSrcA4VklDE1Yo4pATIEY%2BFISLUlZZemHWxoHKHeR46gzmkunnZlycetutDaNb95s9q81T66UjjR639LRpe9GHapaTlolPRuGWbIIJbzaQkeiBNZNlTOEVHN%2BPSCYljoUGzJH0NY%2BojOgtvz9nh0%2F%2FiWBey54GPJDxTcjQi83ubqnEoltEsg6n6VSKsXT7dJHROjggnrzaLJ5o8k3ytnti94PUTPv5pzZ%2BRY%2BMKohtoj6LzZTgBjb7m1BZ7wD5GeTRrhBt5FfQqMANQnWu6JvYwxqEl22ikEH0LRWeIoabzR0bJNJ1xgL9vMqn%2B0hjLW6gQLEs%2FnNrxXP%2B2DrMiN9nOx3MKkr0LAgTqa3O6XFDP9XBOhtuAuq0fsA%2BvLJjwQ38oIVtY%2FlprdwusMaQyG64K0%2BC2z2lef2BusVYFGC16BJRIqaZNwmcEeHoaaAObjx4vtbWS%2FzC%2Fd7b9PvyOUbqXubqCgLW365TiUlkckOGbSdMMgwFg8%2Frp58pEvpo0j4b8qwDo3cQfuzKV6A%2FQBUuqmQ9%2FrC0ifdgIjXpezyNfiNSacChVd%2BfgThxPYpsZVtdpPJbIWNmDDOXw1UjyngTIq%2BrqugKL09AN3KjeOzsj9tOCT0YOuq4dlzDAhYJe1MO7FisoGOqUBS7%2BHRvoZaT20ly4Uj9srRY%2FpPLmwySSxsnr1Uil7Zlt1NRSC2hCkrn8OSxroBit7PH6lvn1ABeuDn8knRx4Pqm%2Fhn8YAvYl8%2BR5rRq57c3TsZRKga85NksCO8KyTBaxmhF4p1D%2FPLKcLnR2QS7KUhz0R3jYviM8UXvOxZ%2BUe7YFlh26fQ3IFFWEdNMl6DOdlcFQ%2Fkm4l7wTSdLTua5R%2BTdyQ5pJc&X-Amz-Signature=814b851402bce38750f7e6754150a18f7ae4e199dfbb1083161b6694208ad92a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
