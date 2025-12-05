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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZNNQ7WI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7vxGg77pkt9jBp9KOxLD7bTOJdHJ9ehoGu8GsuxwvoAiAfQFB0HeGjthZCADx%2BubGH5i%2BOjGBR1yRjYjmLhb8KKSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMiQz9%2F9eDF%2BdBkDD4KtwDoXDzsgq%2FxYvfmiJKmrqaaFAqPAxnRvlAkqciz6g31DgZtl9aRqMl8V6JqyFIN0Hn9EfRkVTANAenQLNs1%2BB7L3YvoJOVT7GDFCasd9uVSWznQwK2WCaXm8gg6S3ZofDGA6xmvxZAHKBm9EG%2BTqU64iVLM6Us8EivCKkKkbp4GQD3ELSZTQ8lEGyltta9VnffBKTNUB79Wce1iDPKVwM9sfZ5SEKkaMNxDSNIgHxxaX%2F%2BAwOCoiPwcTeb0Z5h5InM8kiAGFsw6uzeFUTzGm9wKDW8sFAwbEEKNK9rgZT6rgLRCwSvEFO7l2Vtu%2FGEEt8S11F6GY3rNGwurJQFVzS3BS42U0%2FpCL41nMdwV2NzC9u1Pv1uL1kS7MWpkqSw265O6UF0XgxrP7xlv9869qAfR66hEKmjOr3uiQwKktVenVk%2Bxm92%2BdUIaFVo%2FcHaxbCBWcICGskU3BkqxZ1yL5V9z9BUmWGngBQ52YMw6y56slM4wPmh%2BsyRegQcHyTghx3FUMSQs512pzrW18IsXzC6iaH3x2e7dXL37lJUTXFOTfer9979FjTEj8vvwMNDrMCz5Xvci5jx2rBX%2BKdyf%2FtGrW9DXzlPPSlSw%2Fkbl1e9qaOAS77i7G7uQhpg5mUwk8bNyQY6pgHwGC6O8u8frdq0jXETDdmSYNQQKn8jkPV78B1Ws8ehq5cxaJoo8s9%2BikqChcrxzm%2BEMNefghJmdbBeYJ2bfMo1ZOp%2BKmi2o%2BSkfAr%2Fl2AwkskrdsFGs5BCS%2BBsJEjU5qT8rMJFZiOFW7m5tO5RHTAezrthbEOq6x%2F12lX0l0ubqTvqOUGm4ZxsttDAOf9h5hLQTLxW5hcI%2Bknqn4%2FU3I0LdN2XBWYA&X-Amz-Signature=ca7ba4d9cf77095944e5cfb65a4fd12af0928cf6cb40b100659f3aa10dd21d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZNNQ7WI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7vxGg77pkt9jBp9KOxLD7bTOJdHJ9ehoGu8GsuxwvoAiAfQFB0HeGjthZCADx%2BubGH5i%2BOjGBR1yRjYjmLhb8KKSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMiQz9%2F9eDF%2BdBkDD4KtwDoXDzsgq%2FxYvfmiJKmrqaaFAqPAxnRvlAkqciz6g31DgZtl9aRqMl8V6JqyFIN0Hn9EfRkVTANAenQLNs1%2BB7L3YvoJOVT7GDFCasd9uVSWznQwK2WCaXm8gg6S3ZofDGA6xmvxZAHKBm9EG%2BTqU64iVLM6Us8EivCKkKkbp4GQD3ELSZTQ8lEGyltta9VnffBKTNUB79Wce1iDPKVwM9sfZ5SEKkaMNxDSNIgHxxaX%2F%2BAwOCoiPwcTeb0Z5h5InM8kiAGFsw6uzeFUTzGm9wKDW8sFAwbEEKNK9rgZT6rgLRCwSvEFO7l2Vtu%2FGEEt8S11F6GY3rNGwurJQFVzS3BS42U0%2FpCL41nMdwV2NzC9u1Pv1uL1kS7MWpkqSw265O6UF0XgxrP7xlv9869qAfR66hEKmjOr3uiQwKktVenVk%2Bxm92%2BdUIaFVo%2FcHaxbCBWcICGskU3BkqxZ1yL5V9z9BUmWGngBQ52YMw6y56slM4wPmh%2BsyRegQcHyTghx3FUMSQs512pzrW18IsXzC6iaH3x2e7dXL37lJUTXFOTfer9979FjTEj8vvwMNDrMCz5Xvci5jx2rBX%2BKdyf%2FtGrW9DXzlPPSlSw%2Fkbl1e9qaOAS77i7G7uQhpg5mUwk8bNyQY6pgHwGC6O8u8frdq0jXETDdmSYNQQKn8jkPV78B1Ws8ehq5cxaJoo8s9%2BikqChcrxzm%2BEMNefghJmdbBeYJ2bfMo1ZOp%2BKmi2o%2BSkfAr%2Fl2AwkskrdsFGs5BCS%2BBsJEjU5qT8rMJFZiOFW7m5tO5RHTAezrthbEOq6x%2F12lX0l0ubqTvqOUGm4ZxsttDAOf9h5hLQTLxW5hcI%2Bknqn4%2FU3I0LdN2XBWYA&X-Amz-Signature=bb7096bd10983d8a84c1f9ac93bd471cc1bd74155112b4be27bf2303ee9124c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
