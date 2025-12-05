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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YCDTFG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSsfYOsI2lOTglMgRClEBekD1BdJDY5A%2BDnLQeUUydVAiBI9%2F0%2BZjgCmI6q5qk0sTeaqUAf3%2BsTVwE3NNi1sN2vdSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMeXCXy7%2Fk8bPnFp%2FMKtwDU2cDZuRRW%2FKeZsnJG36U8PE%2F%2FYzPyt79s7vFTyETQZvCxvtRDnoQ5ViCheJyK8a%2F%2FdLwQJ2ML%2BROE8N8aiE6jc2klPJ%2F8l5K3XSII9crNzIftkFZYsyzkihLlqcPhqhqu6Mc4wEN9UnLeawXFRn%2FA0GjlWfQLCtov4SIkou3weQOzaWNI6lvdHk0hRXJUSrriQ5L2SebpRa%2B05TksLQBkQTViwpBiq8JKLXTrREJWOUeT4%2FnnTiBwOPwP9tHXy5u6bZKpkgmlNeDfJxnlaM6LfqKEtHJpgBuQ%2BJt9lUG0hyxsSV8w2O7ICkXOfyC5olqLjD2vOVq1Q6uKZaXevFyFlfh%2FRT%2FxVlqimk%2FYx8jjy2ZkoOI3mbf2THSeNgOzUHrZZUTxyAYGdH1yZ4htew6lZ64SKzIiDX01hEvpVo1eWU3b9%2Frgc1I3f87P07k4OZncqDQfIjIxzIpVsHQmYAMMHJuR7Ddk6RdnpkdBvAOkK5KtSODd3xlMTvFh4ximXjNY1S3agr9jrKdwsZJqxgOUpPKgMfedzFCFiwdOXzdQCAkSkfhfratEPQbyQ0fMgjh17vfOj%2B3NlLOFzOt8OiYaiDBXRF64X7COtfFp791enOG%2FOGaL3EVbReGVIUwxKzJyQY6pgGTX4IX9iYZ42zKjp6nZ68n6zfId5tn0%2FG6wfDmRXxjYMviQ0K9E6XiDDbAGacQBmRYANThrtM00MzrSgvh%2BkLSrfWHE9LcmxbdZ8auTyR0dN8P5dN22Pq6uiRXygUmURhBUJLB2WDzwLJZtRmPiNJRE7y2bzOeAfikfhvFpUwwoUJt1Ag6oSClhT6vctKPmh7CJ5gNUnOysn3fXdAHvZWIrn9xosvc&X-Amz-Signature=83389c5e98df301081a6b1c7fd2a6df6202aba495aea97f4582ece02daf2ab10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YCDTFG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSsfYOsI2lOTglMgRClEBekD1BdJDY5A%2BDnLQeUUydVAiBI9%2F0%2BZjgCmI6q5qk0sTeaqUAf3%2BsTVwE3NNi1sN2vdSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMeXCXy7%2Fk8bPnFp%2FMKtwDU2cDZuRRW%2FKeZsnJG36U8PE%2F%2FYzPyt79s7vFTyETQZvCxvtRDnoQ5ViCheJyK8a%2F%2FdLwQJ2ML%2BROE8N8aiE6jc2klPJ%2F8l5K3XSII9crNzIftkFZYsyzkihLlqcPhqhqu6Mc4wEN9UnLeawXFRn%2FA0GjlWfQLCtov4SIkou3weQOzaWNI6lvdHk0hRXJUSrriQ5L2SebpRa%2B05TksLQBkQTViwpBiq8JKLXTrREJWOUeT4%2FnnTiBwOPwP9tHXy5u6bZKpkgmlNeDfJxnlaM6LfqKEtHJpgBuQ%2BJt9lUG0hyxsSV8w2O7ICkXOfyC5olqLjD2vOVq1Q6uKZaXevFyFlfh%2FRT%2FxVlqimk%2FYx8jjy2ZkoOI3mbf2THSeNgOzUHrZZUTxyAYGdH1yZ4htew6lZ64SKzIiDX01hEvpVo1eWU3b9%2Frgc1I3f87P07k4OZncqDQfIjIxzIpVsHQmYAMMHJuR7Ddk6RdnpkdBvAOkK5KtSODd3xlMTvFh4ximXjNY1S3agr9jrKdwsZJqxgOUpPKgMfedzFCFiwdOXzdQCAkSkfhfratEPQbyQ0fMgjh17vfOj%2B3NlLOFzOt8OiYaiDBXRF64X7COtfFp791enOG%2FOGaL3EVbReGVIUwxKzJyQY6pgGTX4IX9iYZ42zKjp6nZ68n6zfId5tn0%2FG6wfDmRXxjYMviQ0K9E6XiDDbAGacQBmRYANThrtM00MzrSgvh%2BkLSrfWHE9LcmxbdZ8auTyR0dN8P5dN22Pq6uiRXygUmURhBUJLB2WDzwLJZtRmPiNJRE7y2bzOeAfikfhvFpUwwoUJt1Ag6oSClhT6vctKPmh7CJ5gNUnOysn3fXdAHvZWIrn9xosvc&X-Amz-Signature=be0779e9c07879a0e05b798543db47de14c833c6b76001e2379908661f7a8d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
