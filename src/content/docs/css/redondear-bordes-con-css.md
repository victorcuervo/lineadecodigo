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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLRCGWM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqmeAaqbKhvQISosITRmBUGpiwP9ienr89e07IBCzI7AiALuv1aUd9VZwiMKvSn2Pb4qlgmcsT4hpGj85YjJhgOBSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMb31fhLj0jaJ2SbJ7KtwDqaCsOp7nUP6Wfbgsd7RxX1ThI%2BJaiaG5oyAWvx8nF7E72IIvaQnbL3cdg27k1GetZHbh9rJCvya%2BjvLRMAqNZFoDlpqrWD7vW9OxwwnEKYqD5vzrKtTpP4vs3YUovmyDeyqMeDJuUFrya%2BvKhKsnTAHDmO4v3AmnRNYbE6i9VzxWm43tAxyWWv1eJmuZYPNG1R9Hh%2BMg%2F8A1aRkhsotV7Ak%2BPObgqgFLsLEFicvkUqT0dfjXNAZwPJGMgOJrFz1b6YfnLW6QIeosG%2F4MM6VFARyBE%2FKJI3Cti0PGirNF4TdFJUacUGUZbEAh6cdkW24oN%2BxqnTEfQHoXUdKx0dpFUqmBv%2BkmWoZga8K%2FmXN9yBYgTK%2F%2BVSKz2ZjAut%2Bp2M0Bx43mjztSpZKkiDLusFWdGTyQ8qNsCb9AyEEqMSYicFz8bS%2FWVL3cJWOzzosRF6Tn0cDldUPYVqx3D5IxqkmfgIzXyLzqqnJ06tW1fL18%2B1utx8%2FdjnUxovWcJTL2chYARBZfY9eAln53l1JcR54x%2F7KJHro4fvYEBwhep63YND3zdViLdj3gOm%2Fl45p223bPoKYkUtdi2DWBdbsQ0C%2FQGaSiutOlLMWtgbvE%2B%2Bk4UGw45QfWC0uDPhaL3cMwvqzJyQY6pgERFrrSssr1LjL3NyhmcUsoinP3%2BLrm6mQyj4NxBS%2F%2Frz7Z8AIA8Lhj09xk9olZ15x43D3TX%2FoyNHgiWb86gkX62vzq0G%2BTLyVk0gG4bLI01oyweK2bRK3LIiPZrLoDS7BK1EmKwLhvYFIsvs0Om%2FS0Rb2Sa2I1uUi%2Fe4hBovTx%2F0PwK4o0ZqFdXZniFn%2FclxaOX%2FFN0ZgYrCv3Zrt056jlEyenXbPk&X-Amz-Signature=ff7ad4f83cc2f21f2e8d61e19f4a89700ceef2e279bfea55449422d0dd7e8a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLRCGWM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqmeAaqbKhvQISosITRmBUGpiwP9ienr89e07IBCzI7AiALuv1aUd9VZwiMKvSn2Pb4qlgmcsT4hpGj85YjJhgOBSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMb31fhLj0jaJ2SbJ7KtwDqaCsOp7nUP6Wfbgsd7RxX1ThI%2BJaiaG5oyAWvx8nF7E72IIvaQnbL3cdg27k1GetZHbh9rJCvya%2BjvLRMAqNZFoDlpqrWD7vW9OxwwnEKYqD5vzrKtTpP4vs3YUovmyDeyqMeDJuUFrya%2BvKhKsnTAHDmO4v3AmnRNYbE6i9VzxWm43tAxyWWv1eJmuZYPNG1R9Hh%2BMg%2F8A1aRkhsotV7Ak%2BPObgqgFLsLEFicvkUqT0dfjXNAZwPJGMgOJrFz1b6YfnLW6QIeosG%2F4MM6VFARyBE%2FKJI3Cti0PGirNF4TdFJUacUGUZbEAh6cdkW24oN%2BxqnTEfQHoXUdKx0dpFUqmBv%2BkmWoZga8K%2FmXN9yBYgTK%2F%2BVSKz2ZjAut%2Bp2M0Bx43mjztSpZKkiDLusFWdGTyQ8qNsCb9AyEEqMSYicFz8bS%2FWVL3cJWOzzosRF6Tn0cDldUPYVqx3D5IxqkmfgIzXyLzqqnJ06tW1fL18%2B1utx8%2FdjnUxovWcJTL2chYARBZfY9eAln53l1JcR54x%2F7KJHro4fvYEBwhep63YND3zdViLdj3gOm%2Fl45p223bPoKYkUtdi2DWBdbsQ0C%2FQGaSiutOlLMWtgbvE%2B%2Bk4UGw45QfWC0uDPhaL3cMwvqzJyQY6pgERFrrSssr1LjL3NyhmcUsoinP3%2BLrm6mQyj4NxBS%2F%2Frz7Z8AIA8Lhj09xk9olZ15x43D3TX%2FoyNHgiWb86gkX62vzq0G%2BTLyVk0gG4bLI01oyweK2bRK3LIiPZrLoDS7BK1EmKwLhvYFIsvs0Om%2FS0Rb2Sa2I1uUi%2Fe4hBovTx%2F0PwK4o0ZqFdXZniFn%2FclxaOX%2FFN0ZgYrCv3Zrt056jlEyenXbPk&X-Amz-Signature=81aa1007df165fa25643c2284990b0bb78477e0713c6f57597e9673c90973161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
