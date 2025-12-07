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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFN2BTBM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3G1qjZG9840j29OEaLGf6P9xQInBzg1Vu6vVYgzgYLwIgKqfu9Cu9RHKPsu6Us9fh7TOE0j8FlvnlXTmFPSntLMYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWIsQIZW9PXNZKyASrcA5Vyj5uHj%2F8wlMC9FNXVOlVv%2BcJ8SprY6lk%2Bei3g8k5o%2BOlCOZwEcv2CmOd%2FPwwwo1UeLwOSQzIxOk%2BSI8glknTR1kfh5owKHqOsVddeMbI%2FpGcre1nT%2F%2B6jyhsQ9EN6AY4%2B4wRmEIinRzoa9zqYb4WeWkDIg3Um2JXB9YqWMEK%2FNrZqrCPpcmPGGPnzLu1koe5gPu9rr7OwQ21H%2B%2BhKfjjFYZYTcaphn6KsjAXyVeIB1fcZ9hBTZ7Oq90txJm81mR%2BmoYij4ko4s6YAQynRL7wanpcP%2BklDmcaZ9OcZM55%2BOGVoM2KMsNlkQe6pEu3ZazstHrtfKYFkG8wSVSytMvyg32f1AWBF3eh3Uhb%2BXrcKRvIf6NuxD%2FkeKO6fUiQQYuuCqtCAOM2fXePBwXok9g%2FP4UMkv5LoFSCGNKHl8UQ2xAeO6rYa%2FbqTTNDYK4KSHFj0ALwxAGYVtQAzkSRRv0QV8sL9Vt50bU1NQ6Szpj1lLQEpiylokRnal46jWSXt6qIvFPoEEUmV9MlxdpSMZ2MITd7dHdQOWTfs4qie8z9hlQ6k6duEA06xk4Xg3hikIl245uzNR4I%2F0IV%2Fpl%2Btd148%2BZf8fwoUiA9iBUF3iKLNWdXbVZwSsy0rRFJ4MP3G18kGOqUBOiGEnXrfRrrOqsJEKYyap6XBBT58Ie8MMgA1UTGTzyuBPtrMNsIYZ5p2A8J9Ms%2BKoNAoK42wJhsCY8MVDFYZEsZTqKC8HAP8aahMlDL%2Ba7aeIwkJV0slpXsRoStaF4%2FcahkIdzDYVzxyWzRRyRYQivKkETGMOYudOWxRp0lUhekc4POqsKBic8dBh9I4JOwbO2ksSu63%2BLQqbF6BGd7hiGvoO8D5&X-Amz-Signature=8340294a54397b1ebffaf45983459d370f1c88451af418ee5d50e47906145678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFN2BTBM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3G1qjZG9840j29OEaLGf6P9xQInBzg1Vu6vVYgzgYLwIgKqfu9Cu9RHKPsu6Us9fh7TOE0j8FlvnlXTmFPSntLMYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWIsQIZW9PXNZKyASrcA5Vyj5uHj%2F8wlMC9FNXVOlVv%2BcJ8SprY6lk%2Bei3g8k5o%2BOlCOZwEcv2CmOd%2FPwwwo1UeLwOSQzIxOk%2BSI8glknTR1kfh5owKHqOsVddeMbI%2FpGcre1nT%2F%2B6jyhsQ9EN6AY4%2B4wRmEIinRzoa9zqYb4WeWkDIg3Um2JXB9YqWMEK%2FNrZqrCPpcmPGGPnzLu1koe5gPu9rr7OwQ21H%2B%2BhKfjjFYZYTcaphn6KsjAXyVeIB1fcZ9hBTZ7Oq90txJm81mR%2BmoYij4ko4s6YAQynRL7wanpcP%2BklDmcaZ9OcZM55%2BOGVoM2KMsNlkQe6pEu3ZazstHrtfKYFkG8wSVSytMvyg32f1AWBF3eh3Uhb%2BXrcKRvIf6NuxD%2FkeKO6fUiQQYuuCqtCAOM2fXePBwXok9g%2FP4UMkv5LoFSCGNKHl8UQ2xAeO6rYa%2FbqTTNDYK4KSHFj0ALwxAGYVtQAzkSRRv0QV8sL9Vt50bU1NQ6Szpj1lLQEpiylokRnal46jWSXt6qIvFPoEEUmV9MlxdpSMZ2MITd7dHdQOWTfs4qie8z9hlQ6k6duEA06xk4Xg3hikIl245uzNR4I%2F0IV%2Fpl%2Btd148%2BZf8fwoUiA9iBUF3iKLNWdXbVZwSsy0rRFJ4MP3G18kGOqUBOiGEnXrfRrrOqsJEKYyap6XBBT58Ie8MMgA1UTGTzyuBPtrMNsIYZ5p2A8J9Ms%2BKoNAoK42wJhsCY8MVDFYZEsZTqKC8HAP8aahMlDL%2Ba7aeIwkJV0slpXsRoStaF4%2FcahkIdzDYVzxyWzRRyRYQivKkETGMOYudOWxRp0lUhekc4POqsKBic8dBh9I4JOwbO2ksSu63%2BLQqbF6BGd7hiGvoO8D5&X-Amz-Signature=b0aa83e2c2a02dd10ee952f383204c037d931df780589a1fa47d505fddb899c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
