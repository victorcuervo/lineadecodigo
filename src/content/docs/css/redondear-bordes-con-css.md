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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQWKEZB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG99R2WH9BawNxuX6LW%2FUmkA8ZhuR4VDHwZxyfa4wqbMAiEA3PJzDCUL7NUKqpE%2BsBbrj43Sfxav9ZjjePsTZBG0qvAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPS5ztiTpk0R5xnVTircA%2FwQE%2BlG%2F42RwYq%2FT5f71L6FNc1CtmqfAlp1FqiR6WWFGfbiNHw3wm2Wj%2BRdE2WFWDLtcdOer9QRkCiFLTS9l8UyQT4uSjBqh1hmGf4LOfjMpnUrRO4JV0uPgNNUaDp7HSqH4nVEGT6FHOH%2BqGzqFk7bfXDAmtsdW7%2BLsJqxN21xa5s%2BpvQ2atvGGvqA1qyK17b2JNyWPe5WkIGvstWiuOSBy5EK4nx2BAIzS%2F8Em9BR%2BmnDIjW4%2BnRXfZ3zmbxibjdKhEmYPRoy0DyvPtIiLIPLSWIxBLHkUkyixtjwrtJ5ik6UYPxvjR0d0J8F%2Bc2KteU4ifrXnOja%2F%2BNl5wtHQVvRb2t%2BTlM8py%2Fgrvz2UelVGZxNQCALGC3gQmm3hkKm7nX4Rdw2u97sMwXJqgV1JVZAyOsKK7jlPoOMYDucmW8zL5Ci4QjiNZjRiEf%2F85yEabbL866DV3eEO320h9aNFMEWiIfos6XCR00YKngKYXzYMV896qqXTfFCGttOXJyE00dRvXjwOv2iKXRkXfqNKlpnJkcULS%2FGrex7wQmoY2i3CsCdp5cWioZSM9FFn038Y6y%2B%2FNmXLuj1NlwvksZxU%2BptX5TbhOVpzLUjyc3feq5HBVmTHgBGeFaQbkGGMPzWyskGOqUBxKG8LtaSnPPSrp%2BESTiAZ0zKPiSeY14lPhii6ne%2FCjqhdiXvKg69xQ31bL6cJsdtqedeJSkXudSbQj5Apu5KbmVSzYdE2QpqpPPbtHHaH6nlRGYsPQR%2FEh9XmEEb5BptziOt%2BBkWCtkxNCqV9Tv%2FvP%2BDr%2BsE271Pfuu%2Fk64lwpPD0u%2BgYCVrDgtAk9qMacLHFU2eDMPYsRgwtRQSSziSq4TzkAsk&X-Amz-Signature=bc0e34b699c46e5133d447afbd215c29890e8b61382f33a26f1c465083332579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQWKEZB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG99R2WH9BawNxuX6LW%2FUmkA8ZhuR4VDHwZxyfa4wqbMAiEA3PJzDCUL7NUKqpE%2BsBbrj43Sfxav9ZjjePsTZBG0qvAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPS5ztiTpk0R5xnVTircA%2FwQE%2BlG%2F42RwYq%2FT5f71L6FNc1CtmqfAlp1FqiR6WWFGfbiNHw3wm2Wj%2BRdE2WFWDLtcdOer9QRkCiFLTS9l8UyQT4uSjBqh1hmGf4LOfjMpnUrRO4JV0uPgNNUaDp7HSqH4nVEGT6FHOH%2BqGzqFk7bfXDAmtsdW7%2BLsJqxN21xa5s%2BpvQ2atvGGvqA1qyK17b2JNyWPe5WkIGvstWiuOSBy5EK4nx2BAIzS%2F8Em9BR%2BmnDIjW4%2BnRXfZ3zmbxibjdKhEmYPRoy0DyvPtIiLIPLSWIxBLHkUkyixtjwrtJ5ik6UYPxvjR0d0J8F%2Bc2KteU4ifrXnOja%2F%2BNl5wtHQVvRb2t%2BTlM8py%2Fgrvz2UelVGZxNQCALGC3gQmm3hkKm7nX4Rdw2u97sMwXJqgV1JVZAyOsKK7jlPoOMYDucmW8zL5Ci4QjiNZjRiEf%2F85yEabbL866DV3eEO320h9aNFMEWiIfos6XCR00YKngKYXzYMV896qqXTfFCGttOXJyE00dRvXjwOv2iKXRkXfqNKlpnJkcULS%2FGrex7wQmoY2i3CsCdp5cWioZSM9FFn038Y6y%2B%2FNmXLuj1NlwvksZxU%2BptX5TbhOVpzLUjyc3feq5HBVmTHgBGeFaQbkGGMPzWyskGOqUBxKG8LtaSnPPSrp%2BESTiAZ0zKPiSeY14lPhii6ne%2FCjqhdiXvKg69xQ31bL6cJsdtqedeJSkXudSbQj5Apu5KbmVSzYdE2QpqpPPbtHHaH6nlRGYsPQR%2FEh9XmEEb5BptziOt%2BBkWCtkxNCqV9Tv%2FvP%2BDr%2BsE271Pfuu%2Fk64lwpPD0u%2BgYCVrDgtAk9qMacLHFU2eDMPYsRgwtRQSSziSq4TzkAsk&X-Amz-Signature=2138a0e903f799c1cec3132eea2728ec0d3522533dbea3d2b79877c6b96b3d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
