---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAG3D4N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICOiLceNt1u2Al90p70%2BFttLCxSAqFvUbX7m%2FFqEMRtEAiBJcllCV8tNBDvZ0Tmk6rthWO%2BjzC%2BP5%2BmLF%2FK7W8iXcCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMPMAc1MBCQFUh4HmoKtwDuvvssONB%2Fda4b69eM8p53fVDLIrLO9fD%2FBKWH0ECov7YsChND2xf%2BP8Bvk3g8jNE2gyDmb8X1vB72%2FgvNsZUgiIXWXOle4zbh1ckKV32jmdRaZBo4PxmkvdD5uSxD3W2QaCZtULAAM0pNsMCb0HuFBgbEogMqPBo6D7l%2Bol3uNL0S%2F11ftuWYEWKeMi5L4jSunkErmPlbTTcvG4ZbnkbDnMbJlUegbJ%2Bk0ask%2BTt8djVS64UWkY%2FtMLa1FpDruWYj1EmNYh0o0PPBdQbXVqafQchDpVCRowmGOXBtQoNQtcbMlI%2FQIuoqlWCTRpatTy9%2FG3tI94p6ItXBWSbri65C%2Bvt0Fy6frFUzgmdJay%2FmYjw8CrC3gkdb5ZLqYTlJrIKQfB3I82GP6gSSEgSWTICgfsqtp0lkaXxL%2Fk%2BbNIzIjjmg7tVwm1B0qt7mbKmcNJ%2FyZsRt8Q3zAoC1RWfh2PEG8XQMlYAsJvofQQyWYz%2BbePrgKbMi6A4MtjIaHxlYOUCPzTGMwgPwJQLW9yjHAv8K%2BPzhH%2B%2BMOcOZ6D5Sg3WA2W8rBh4RmvuinDi954zwNKH79t6UmyENvbY6O6%2BB5LnjKOoSI5iSbtuzPNALOaZWyptTj2BCEMnUZr6H%2BQwu73CyQY6pgF%2BAPHLL26khJWES0PZYtgmapWdKvvMs5%2BlYiCymrHIftA7mIv0DkK4xkBV3948OmgDFhms6cqkQ00gNSWkC5%2BhWLc18x0K%2BZyWVEdqr%2FZ1Nn%2BLBqzWqwAzrlX3AbU4s4j0CKXMV6bKdo2bnlxMZY5BXdjkLtYiypUuChDnsacC4oajQZOXEOGewKVx2ocKLmlljeutprQpq9c4dB7Qp3Z%2BB6urQZzc&X-Amz-Signature=14ccc84c06452d692fb4ea9b83e79c3ee91249555aae426482be32a14ec7ffb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAG3D4N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICOiLceNt1u2Al90p70%2BFttLCxSAqFvUbX7m%2FFqEMRtEAiBJcllCV8tNBDvZ0Tmk6rthWO%2BjzC%2BP5%2BmLF%2FK7W8iXcCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMPMAc1MBCQFUh4HmoKtwDuvvssONB%2Fda4b69eM8p53fVDLIrLO9fD%2FBKWH0ECov7YsChND2xf%2BP8Bvk3g8jNE2gyDmb8X1vB72%2FgvNsZUgiIXWXOle4zbh1ckKV32jmdRaZBo4PxmkvdD5uSxD3W2QaCZtULAAM0pNsMCb0HuFBgbEogMqPBo6D7l%2Bol3uNL0S%2F11ftuWYEWKeMi5L4jSunkErmPlbTTcvG4ZbnkbDnMbJlUegbJ%2Bk0ask%2BTt8djVS64UWkY%2FtMLa1FpDruWYj1EmNYh0o0PPBdQbXVqafQchDpVCRowmGOXBtQoNQtcbMlI%2FQIuoqlWCTRpatTy9%2FG3tI94p6ItXBWSbri65C%2Bvt0Fy6frFUzgmdJay%2FmYjw8CrC3gkdb5ZLqYTlJrIKQfB3I82GP6gSSEgSWTICgfsqtp0lkaXxL%2Fk%2BbNIzIjjmg7tVwm1B0qt7mbKmcNJ%2FyZsRt8Q3zAoC1RWfh2PEG8XQMlYAsJvofQQyWYz%2BbePrgKbMi6A4MtjIaHxlYOUCPzTGMwgPwJQLW9yjHAv8K%2BPzhH%2B%2BMOcOZ6D5Sg3WA2W8rBh4RmvuinDi954zwNKH79t6UmyENvbY6O6%2BB5LnjKOoSI5iSbtuzPNALOaZWyptTj2BCEMnUZr6H%2BQwu73CyQY6pgF%2BAPHLL26khJWES0PZYtgmapWdKvvMs5%2BlYiCymrHIftA7mIv0DkK4xkBV3948OmgDFhms6cqkQ00gNSWkC5%2BhWLc18x0K%2BZyWVEdqr%2FZ1Nn%2BLBqzWqwAzrlX3AbU4s4j0CKXMV6bKdo2bnlxMZY5BXdjkLtYiypUuChDnsacC4oajQZOXEOGewKVx2ocKLmlljeutprQpq9c4dB7Qp3Z%2BB6urQZzc&X-Amz-Signature=7aa18445f40ddcba5ec34931cc649ae97ff8db281aefe5521f44a9c7866d85af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
