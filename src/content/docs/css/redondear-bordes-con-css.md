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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7IF6GH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8CI7Y2LKUP9TSg%2Fzw8PZqULYPB7phzJ8H8viZ50A6uAiEAkbaesayuxU7JpCoYrB7j2lLOpx%2F5ByTjCLcsJU4LAZUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOMu6T5S3Fz1wb54ircA3C4A9U7jf1Vz1y51wzqPnIi6EqA3rbTyGiQp6pGqDokBScxNVmsGLKTteclOT9zZNgi4zTqz8uug6Xc1tpEiPeWgfVIlpHeVSpoFIPCR9lWQ7t6s1kL9HJ%2BLfVsRZQM9vZYXAE8mv27FXzdRpjY5FngUMlnDKiXTmky4XLyVG5sn9X7E%2BMK5GBmbRluWeC3QSpFbeyB1Yhc94ouci%2BjNGnSIp6Ppug9X1OB3oduh6XoAadrJ5FscI2qSmxzTMS8MQ5ank7UVq9305ii1VFUsHYq0VrIu6vwvn8p3vRp3apPhfO9%2BE2R1XrhO589kE61scBD%2BXra8UiWuZN2le%2BwXrOT6sULijE5V3l7YFmGAMXV%2FUzhiMcsoEZfpQwLd5K6Nfg12O7e7uONKAyYrBsiSieAWksz6YDQYRx9mym4999EbEom453Vk%2BJ6TJ8EGZ38WthjOe6b7C8TWgNOKKpiURY6JFIBpax7x124z%2BuTWp6wg0xNdFdS7WTQubGasPtEg%2FrsGRoYT069uD4RPmJCcI2psKzP4ESSaA4N1hs0VhvN71wCNatXeTh5Oqm%2BgRuasPnRnYhatDSM7oOoeByx6EyFgfsrnQp7m8VwZivvVhygWbsVBALmHwIH%2FJHjMO%2Fl3skGOqUBKtZqFAL8YEb6sM7qa2xVHAfGtycXwXFF7BqyEvycv7z9p425jabLxD11DqXywPXncDU1cHjXmXzg0Z5Hl85lU4QbaBnAnAoQogvfAQZWJWWnuV4TbjbEu%2BXxFq%2BksjmBrMJtqZcLUeHcQgRG%2BD%2BSSuya2zN2Dwxt9HBgfcVlqNRs705amHrLQcmhz9rJZVnW8fToPFWvK0unCzfwDemTZIV45BGc&X-Amz-Signature=26aba4e69896d298ff669190372629d14a4b7ec311d8b5e3e5a6fc6b909e3339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7IF6GH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8CI7Y2LKUP9TSg%2Fzw8PZqULYPB7phzJ8H8viZ50A6uAiEAkbaesayuxU7JpCoYrB7j2lLOpx%2F5ByTjCLcsJU4LAZUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOMu6T5S3Fz1wb54ircA3C4A9U7jf1Vz1y51wzqPnIi6EqA3rbTyGiQp6pGqDokBScxNVmsGLKTteclOT9zZNgi4zTqz8uug6Xc1tpEiPeWgfVIlpHeVSpoFIPCR9lWQ7t6s1kL9HJ%2BLfVsRZQM9vZYXAE8mv27FXzdRpjY5FngUMlnDKiXTmky4XLyVG5sn9X7E%2BMK5GBmbRluWeC3QSpFbeyB1Yhc94ouci%2BjNGnSIp6Ppug9X1OB3oduh6XoAadrJ5FscI2qSmxzTMS8MQ5ank7UVq9305ii1VFUsHYq0VrIu6vwvn8p3vRp3apPhfO9%2BE2R1XrhO589kE61scBD%2BXra8UiWuZN2le%2BwXrOT6sULijE5V3l7YFmGAMXV%2FUzhiMcsoEZfpQwLd5K6Nfg12O7e7uONKAyYrBsiSieAWksz6YDQYRx9mym4999EbEom453Vk%2BJ6TJ8EGZ38WthjOe6b7C8TWgNOKKpiURY6JFIBpax7x124z%2BuTWp6wg0xNdFdS7WTQubGasPtEg%2FrsGRoYT069uD4RPmJCcI2psKzP4ESSaA4N1hs0VhvN71wCNatXeTh5Oqm%2BgRuasPnRnYhatDSM7oOoeByx6EyFgfsrnQp7m8VwZivvVhygWbsVBALmHwIH%2FJHjMO%2Fl3skGOqUBKtZqFAL8YEb6sM7qa2xVHAfGtycXwXFF7BqyEvycv7z9p425jabLxD11DqXywPXncDU1cHjXmXzg0Z5Hl85lU4QbaBnAnAoQogvfAQZWJWWnuV4TbjbEu%2BXxFq%2BksjmBrMJtqZcLUeHcQgRG%2BD%2BSSuya2zN2Dwxt9HBgfcVlqNRs705amHrLQcmhz9rJZVnW8fToPFWvK0unCzfwDemTZIV45BGc&X-Amz-Signature=13a71a1a353750faba5b14be303fc41f2863104b02673aaf911dea7708176313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
