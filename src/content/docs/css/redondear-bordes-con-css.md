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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q3I4KB2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6i%2FVHZehxomWEEMT4bjkhXdpDcFqfkyT9MFEzMkYnKAIhAPMRjFkJsUrxE1B6Yvpd4oqiKlYEo%2FIJAwDpRWl9CGYhKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX4L38zILJpjG513Uq3AOGyqAMd9cxMqfaXMwUO42ILY5eMs3Hoffh6bOqaP3w%2Fb3zZjOzlNb1h%2Fs6NpjCINF8%2FnPrxyk5D3lbjnVjnxVSbkicfk%2BeDfMZoOMz3cQWpAkzdblGDJeImEXPp61Y4ovzvKlTZBC9nivzAb%2BvmfXb4kunOMpqqs%2BK%2FLtiqQYAONqXVLnvg%2BwP53AQhxTJYryONZr6%2BxwALpmswVlVJ4nO0FU0tl%2FUCfiL32cIOqpVBmxE%2Bdhib6oXbKAGABwmrQ%2Bo%2B%2FEj5YiRWMtuD6UyGTfIKiiQMoI%2FsSt3sOmigRqo5oN6mqiK4mof6LpqTTlPCcZxZFDlxF4umE8CdX%2F8fTJ3M4WtMtJGTKOt5ERTa%2BoIaN5yeR%2BVwwbYqYnpHugYZzIIwSozebkCmKp9iDFYbj3MMjMUK%2F1zmT%2BQWmbygt%2Bz5td46tOX%2BzfS0rRSVybCGxQoT2NrTWpVc60EvW2K8NiCTbD%2Bj6dKzz%2FACcbwmjyYYx3InrO2%2BHpNurTFkepzI3eBztvfm9yOl9gXOVNCIo0QXtnS0j%2B5ic2XWszW6S4fCJGofdYLs77qGL%2FzXi1ZBGrtd%2BA8O5kBE%2BPOIkQvmxhaSS1mCLfWh8577v7oXx1Ol02P0821AQfnfthjTjDGgN3JBjqkAdaJwZZPmCrdZwRX1wL7Yob9OW%2BEJVKrd31TKObJtq%2BoP4ZBgnhyGTgP%2Bw52bJgimRfgi5sRisziKPuVlnVAwSoyB%2F1O58FHLC6IWqJJWdoW%2FaWGqaVmr20n3tgdUrFTDZWbW6clH6nMBIXu50fOn%2FgBbA0x3gJ7MK%2BO5%2BARP1noLWUKbUhVvA9HUlus2tVpp6H6ii2dydVtwPWGjhaGTL5iM9ky&X-Amz-Signature=9bca16a74447a521d7522026d0b47378e35f0f996593700de384eaf795d98f10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q3I4KB2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6i%2FVHZehxomWEEMT4bjkhXdpDcFqfkyT9MFEzMkYnKAIhAPMRjFkJsUrxE1B6Yvpd4oqiKlYEo%2FIJAwDpRWl9CGYhKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX4L38zILJpjG513Uq3AOGyqAMd9cxMqfaXMwUO42ILY5eMs3Hoffh6bOqaP3w%2Fb3zZjOzlNb1h%2Fs6NpjCINF8%2FnPrxyk5D3lbjnVjnxVSbkicfk%2BeDfMZoOMz3cQWpAkzdblGDJeImEXPp61Y4ovzvKlTZBC9nivzAb%2BvmfXb4kunOMpqqs%2BK%2FLtiqQYAONqXVLnvg%2BwP53AQhxTJYryONZr6%2BxwALpmswVlVJ4nO0FU0tl%2FUCfiL32cIOqpVBmxE%2Bdhib6oXbKAGABwmrQ%2Bo%2B%2FEj5YiRWMtuD6UyGTfIKiiQMoI%2FsSt3sOmigRqo5oN6mqiK4mof6LpqTTlPCcZxZFDlxF4umE8CdX%2F8fTJ3M4WtMtJGTKOt5ERTa%2BoIaN5yeR%2BVwwbYqYnpHugYZzIIwSozebkCmKp9iDFYbj3MMjMUK%2F1zmT%2BQWmbygt%2Bz5td46tOX%2BzfS0rRSVybCGxQoT2NrTWpVc60EvW2K8NiCTbD%2Bj6dKzz%2FACcbwmjyYYx3InrO2%2BHpNurTFkepzI3eBztvfm9yOl9gXOVNCIo0QXtnS0j%2B5ic2XWszW6S4fCJGofdYLs77qGL%2FzXi1ZBGrtd%2BA8O5kBE%2BPOIkQvmxhaSS1mCLfWh8577v7oXx1Ol02P0821AQfnfthjTjDGgN3JBjqkAdaJwZZPmCrdZwRX1wL7Yob9OW%2BEJVKrd31TKObJtq%2BoP4ZBgnhyGTgP%2Bw52bJgimRfgi5sRisziKPuVlnVAwSoyB%2F1O58FHLC6IWqJJWdoW%2FaWGqaVmr20n3tgdUrFTDZWbW6clH6nMBIXu50fOn%2FgBbA0x3gJ7MK%2BO5%2BARP1noLWUKbUhVvA9HUlus2tVpp6H6ii2dydVtwPWGjhaGTL5iM9ky&X-Amz-Signature=ae7907ea6f041c56afb4960849fe6f86ec6b2d7b768255bc7594ccceec1a38d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
