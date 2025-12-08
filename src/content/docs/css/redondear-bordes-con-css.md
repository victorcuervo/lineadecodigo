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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GX2MD7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgJvkIoyvyYr0iMvxwhGMlJrZn%2B49F4wc2Rz3tpiRiMQIhAOTkUdZXlqN59HVFjgoEwBNouJkxYJGyOwOSknvTiqwXKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq2LjtLRIuYV8ZWlMq3ANqNk2wrh7P5e32KJF6afHS2ogtrs9%2FaZGuZVR1apJAZ%2FXWsBkv8WPL0ko2ichpbn1yqqYmt4bTPfixNNwbJwAx7JvsuxTiyBQKlEwQOk%2BBKkjvNdh5fOQdvx3rUqYXjagL%2FqmgmsMHg5rpvzabVbaFyBbup%2BsNxEZFtnbEVsrS%2FApbKVV7bX2yzc8mXAlAWNmh5Bs%2F2wUH094KWIBxWrbmuRDRE7r8s3p2EGXJgcOyUFX%2B%2F6TfEaHlp%2BSBLIEhJSwGlZJeNgbgzVCJTrr1UqBhIDe3uGK1q1wV9NCRsn8JajUfaVciQsLQPobrwp%2BrhMBen7Ertuy9us5coiCh%2FgrfnMkWrQF1UM8%2B%2FI4HYMODv2W76RXYk9Mwfvgw2hq5wnbYEPiC4GhU3FJyur1SPMUADub8uh15408nZvsBuAjf%2Fygk3HBUmxq2eAeSd3AsNGAbPMT5gcaWTgnxjvtorJ%2FmNo%2BJhC4eM1GamU5PztQAEYgGKB9kSoIOhz1IeLjIrLOYbhcz%2BwmNpuxcJ2qZsE1yHFXKGj0WjWNPlI54y67L55RDgMhvetA7%2F1GSJqVfwyzSv7P5dNtd6H0hLOYrpwvaHRFmrVkYmiVWuFGEDulh0kyHx2tsuwB%2FZYzRbzDG7dnJBjqkAbLw%2BQRYhbNvB%2FlgPneqok52WufN0CxAyxsufRDY73uMXWhOKJi9o%2FGSoTiK09vkLTg7IoqcgS6eLSjoYwT4t77BcqII9wbofkGrWLuJ9YmvStGD1NgXN2Gisk2vBBa39CTFtflH5VmgX0pwKfXMhC8lVaJUerhoGpbqph%2B4VpA5IVrgI55KjA3bUGwBiIOEtBcjKTmfXzuYsvH%2BqSTVeKiUxp1t&X-Amz-Signature=ea4819a0d5d1229f888b32fe39a443a48ba4a1c6689016b59c409f17277d91ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GX2MD7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgJvkIoyvyYr0iMvxwhGMlJrZn%2B49F4wc2Rz3tpiRiMQIhAOTkUdZXlqN59HVFjgoEwBNouJkxYJGyOwOSknvTiqwXKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq2LjtLRIuYV8ZWlMq3ANqNk2wrh7P5e32KJF6afHS2ogtrs9%2FaZGuZVR1apJAZ%2FXWsBkv8WPL0ko2ichpbn1yqqYmt4bTPfixNNwbJwAx7JvsuxTiyBQKlEwQOk%2BBKkjvNdh5fOQdvx3rUqYXjagL%2FqmgmsMHg5rpvzabVbaFyBbup%2BsNxEZFtnbEVsrS%2FApbKVV7bX2yzc8mXAlAWNmh5Bs%2F2wUH094KWIBxWrbmuRDRE7r8s3p2EGXJgcOyUFX%2B%2F6TfEaHlp%2BSBLIEhJSwGlZJeNgbgzVCJTrr1UqBhIDe3uGK1q1wV9NCRsn8JajUfaVciQsLQPobrwp%2BrhMBen7Ertuy9us5coiCh%2FgrfnMkWrQF1UM8%2B%2FI4HYMODv2W76RXYk9Mwfvgw2hq5wnbYEPiC4GhU3FJyur1SPMUADub8uh15408nZvsBuAjf%2Fygk3HBUmxq2eAeSd3AsNGAbPMT5gcaWTgnxjvtorJ%2FmNo%2BJhC4eM1GamU5PztQAEYgGKB9kSoIOhz1IeLjIrLOYbhcz%2BwmNpuxcJ2qZsE1yHFXKGj0WjWNPlI54y67L55RDgMhvetA7%2F1GSJqVfwyzSv7P5dNtd6H0hLOYrpwvaHRFmrVkYmiVWuFGEDulh0kyHx2tsuwB%2FZYzRbzDG7dnJBjqkAbLw%2BQRYhbNvB%2FlgPneqok52WufN0CxAyxsufRDY73uMXWhOKJi9o%2FGSoTiK09vkLTg7IoqcgS6eLSjoYwT4t77BcqII9wbofkGrWLuJ9YmvStGD1NgXN2Gisk2vBBa39CTFtflH5VmgX0pwKfXMhC8lVaJUerhoGpbqph%2B4VpA5IVrgI55KjA3bUGwBiIOEtBcjKTmfXzuYsvH%2BqSTVeKiUxp1t&X-Amz-Signature=9e1f42940d6605ea2fef0107bc405e87270e3e0ebd08ac5e5e544a706834b8f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
