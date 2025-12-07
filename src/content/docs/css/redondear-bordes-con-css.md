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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WIXCPI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrrKxhy9BhYxe5xFB43EN%2BE2%2B0MQiJLk82KQdxUAlVnAiAsAgYGarUtAN8LzTpINup9%2BEdxSiO4%2B68hbiUOGvYcaCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz1Jsu1uo6sQc8YRQKtwDTWFOOT8DyhjwAuixGWpNemWt2%2BHc7E6xG4JJ9zUwYlqM8E4jQk3JsO5Z4WuVShdUox6gpHdcAMreHPSxM%2F5kiXtwpory7ow4H05ON%2BGPsF4ALOSUKtCQs7dx7q5eR2TgwIhnO1BgspLBz9RWMe1oGdC1amrbAaVqEuNFdgIjAm31BrrUuKrFs3cIo%2FpdmAqTtZqMpQ%2BJXoRDbYMEGmxjeXGMyY2wM6kbXDWCr3Zkl7VisQgbZEtpcPPLWA8A3zBCBP1aQO8tB%2FI%2B7GmXsuHRgLB3uyNLmK5HMysl0Ockw4hDYtZDP2CA%2FhNMlmy3kDlCwFOFWC3esDDYh%2BJwBuEyvcFkLUmoomnQh4M3krmaDwVmSeioT11Z%2BjtZ4knRMqB04aMCCi%2Ftvzb%2BjFQVIOoZYiCqYGoqZN48oLhGnmb6SXMJ43j3fOHxoMw0bkDhVWgV1C8j7mjvVW5k%2BFvaHWjzGm0Qa4FacNOx0Qkmsa8fBw9S4r2OyB0TYOfpQl2VBMrJMhOlOryYb%2BqcudBaxUnCTpD2uvbLjKj2gJfIkb8lEv5gnk%2BNQWQk7LMVt1dOUVKTQlzhnP%2FMjm4LvNlDN7Wp0O01F8VWkZ3dwTU1xTlq0pvROx31L2BOa49AQnkwpprUyQY6pgG5h20waMJxZMS69FB7JzMKqox8VPoEUiVEHg9JAAUda%2FTwa4CCYg0zpfnSnAPDjgqnGh2KxxB0WTc9s9EL8bRXDyaV8xhdp8AP0GF%2FIGKnE%2Fk8%2BunL5IK15xfFuHa3AIhehr8CKvl2M%2FWNBvg%2B17Ja13upUckBC2x%2FeiBf6W7%2F5JXpXHQTp3r4%2FLzdoo%2B6bOeYHORjE3iuB1oiCQuRq507QPnSgqh6&X-Amz-Signature=f0477f1a56efa46bb2867db19f0ad13562bc560f1f59bb24486719c22bed37fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WIXCPI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrrKxhy9BhYxe5xFB43EN%2BE2%2B0MQiJLk82KQdxUAlVnAiAsAgYGarUtAN8LzTpINup9%2BEdxSiO4%2B68hbiUOGvYcaCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz1Jsu1uo6sQc8YRQKtwDTWFOOT8DyhjwAuixGWpNemWt2%2BHc7E6xG4JJ9zUwYlqM8E4jQk3JsO5Z4WuVShdUox6gpHdcAMreHPSxM%2F5kiXtwpory7ow4H05ON%2BGPsF4ALOSUKtCQs7dx7q5eR2TgwIhnO1BgspLBz9RWMe1oGdC1amrbAaVqEuNFdgIjAm31BrrUuKrFs3cIo%2FpdmAqTtZqMpQ%2BJXoRDbYMEGmxjeXGMyY2wM6kbXDWCr3Zkl7VisQgbZEtpcPPLWA8A3zBCBP1aQO8tB%2FI%2B7GmXsuHRgLB3uyNLmK5HMysl0Ockw4hDYtZDP2CA%2FhNMlmy3kDlCwFOFWC3esDDYh%2BJwBuEyvcFkLUmoomnQh4M3krmaDwVmSeioT11Z%2BjtZ4knRMqB04aMCCi%2Ftvzb%2BjFQVIOoZYiCqYGoqZN48oLhGnmb6SXMJ43j3fOHxoMw0bkDhVWgV1C8j7mjvVW5k%2BFvaHWjzGm0Qa4FacNOx0Qkmsa8fBw9S4r2OyB0TYOfpQl2VBMrJMhOlOryYb%2BqcudBaxUnCTpD2uvbLjKj2gJfIkb8lEv5gnk%2BNQWQk7LMVt1dOUVKTQlzhnP%2FMjm4LvNlDN7Wp0O01F8VWkZ3dwTU1xTlq0pvROx31L2BOa49AQnkwpprUyQY6pgG5h20waMJxZMS69FB7JzMKqox8VPoEUiVEHg9JAAUda%2FTwa4CCYg0zpfnSnAPDjgqnGh2KxxB0WTc9s9EL8bRXDyaV8xhdp8AP0GF%2FIGKnE%2Fk8%2BunL5IK15xfFuHa3AIhehr8CKvl2M%2FWNBvg%2B17Ja13upUckBC2x%2FeiBf6W7%2F5JXpXHQTp3r4%2FLzdoo%2B6bOeYHORjE3iuB1oiCQuRq507QPnSgqh6&X-Amz-Signature=da302a67e064a07a411f221dfe8ff37ee4593b39292a40aaa4e75ae9daf02569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
