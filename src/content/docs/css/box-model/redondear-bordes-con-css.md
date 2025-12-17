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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653TDDNMK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENn73jTyJwLI27LGgf0tM5JBVsdOIZBKMRQwNmVjB20AiB3x5C073J60ENA348x82CXgKjRfS8Lw%2F5qBHQwKlhL%2Bir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM1skVDhEXtugyWV3hKtwDjmEnuT37gLvv3JtkG%2B4%2BDU0XBw4s7j%2Bq737lFZrxZKanEvrBvxRmFXUyLC5W1F44RVQYgm2UnA%2F2XdgyTgLYjlywOh90N2bC4rMz%2F6Jemsr7tN2cCpj0LkVtAjttjnTM%2FgcIPL3FxUMJxh6QF0xfoUoGf5CzFKMOZCoMgKT2oer0Ql%2Fi%2BSMU7yEOLboGhxmZJcqHwH17UUG2tRvKokxABu6c%2BALujh86wAD2a2IaVliWgcUR1KNseCIhTpoP4ZiWnvRW17q0pYYkSKUWE4BbNoYqnrLb%2F2lyVwCqoFa6gk4nrsaFefddlJsIlZ6uQoQI01LJ5xx%2Br%2FX5wwJSGW3JMm88UYiRzaFageZFNS6A6NXG1tYyO8HCr1zgK1HXhZ8YaXflZL7sZXP7%2BLsLROlM6fGHkOul5UY0zzX10fPf4fZvIf1K13GAjr6Er%2BmyzDmrvTCSzVoNCJqxVayIKHlQALuP6Hy9cZkDsHJeNDilqpE4Vcgm4CqOov5e8Cwdd3Q9Vokvcq5pUmAShIUTdbNbhBaMmTM2zEKgPIGApd%2F2BrvifFVyUUzQhrM1BpPFap6mcgAp9BOqBszGCBCQOgQDcM5bS5awlbinn0c7j5u2eMuR6%2Bg8tn8PiKD%2B9cww0YOJygY6pgEs6FfPyffGDBWtPzlWVSidfFHyaMw7yCqarqA%2FsWafYHI3tsCI%2BKfT2QmF4nJA12X1vp%2FYrt4Z69nwm9vJQt9cJmsxcqnJ4VhcerZC%2Fv1rd%2B%2FG2EYz0Lk9LsYuSkEbl%2FsiwW4Cc0a2jVU3J1JMuM5wH91BqCMfdlgNSZSZF%2FCJVJsvO6PgeGHPOUXBNE9qcsNECWzzD5AUuPhqoqGKZkRNLM64EpXx&X-Amz-Signature=e760fd3007e419871e1502411061072e4250cf54d63b97fca4035c9c53dfd82a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653TDDNMK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENn73jTyJwLI27LGgf0tM5JBVsdOIZBKMRQwNmVjB20AiB3x5C073J60ENA348x82CXgKjRfS8Lw%2F5qBHQwKlhL%2Bir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM1skVDhEXtugyWV3hKtwDjmEnuT37gLvv3JtkG%2B4%2BDU0XBw4s7j%2Bq737lFZrxZKanEvrBvxRmFXUyLC5W1F44RVQYgm2UnA%2F2XdgyTgLYjlywOh90N2bC4rMz%2F6Jemsr7tN2cCpj0LkVtAjttjnTM%2FgcIPL3FxUMJxh6QF0xfoUoGf5CzFKMOZCoMgKT2oer0Ql%2Fi%2BSMU7yEOLboGhxmZJcqHwH17UUG2tRvKokxABu6c%2BALujh86wAD2a2IaVliWgcUR1KNseCIhTpoP4ZiWnvRW17q0pYYkSKUWE4BbNoYqnrLb%2F2lyVwCqoFa6gk4nrsaFefddlJsIlZ6uQoQI01LJ5xx%2Br%2FX5wwJSGW3JMm88UYiRzaFageZFNS6A6NXG1tYyO8HCr1zgK1HXhZ8YaXflZL7sZXP7%2BLsLROlM6fGHkOul5UY0zzX10fPf4fZvIf1K13GAjr6Er%2BmyzDmrvTCSzVoNCJqxVayIKHlQALuP6Hy9cZkDsHJeNDilqpE4Vcgm4CqOov5e8Cwdd3Q9Vokvcq5pUmAShIUTdbNbhBaMmTM2zEKgPIGApd%2F2BrvifFVyUUzQhrM1BpPFap6mcgAp9BOqBszGCBCQOgQDcM5bS5awlbinn0c7j5u2eMuR6%2Bg8tn8PiKD%2B9cww0YOJygY6pgEs6FfPyffGDBWtPzlWVSidfFHyaMw7yCqarqA%2FsWafYHI3tsCI%2BKfT2QmF4nJA12X1vp%2FYrt4Z69nwm9vJQt9cJmsxcqnJ4VhcerZC%2Fv1rd%2B%2FG2EYz0Lk9LsYuSkEbl%2FsiwW4Cc0a2jVU3J1JMuM5wH91BqCMfdlgNSZSZF%2FCJVJsvO6PgeGHPOUXBNE9qcsNECWzzD5AUuPhqoqGKZkRNLM64EpXx&X-Amz-Signature=dafd1c0a58d9d50937731e079a05f95fec9c7ab35d59cdb567bd753a30695392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
