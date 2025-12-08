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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFYQCLU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5WSugMyHawhwiDFQWJnkoI%2FEy9cX1QYQhyKtqjU0JjAiB%2FZ511%2BUVAFJftirZ0jkBijmqqXVFmY68q%2FwcpMEbo1CqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVrlVins4RVRSX6KjKtwDEi2RrJx0te8mQkx%2BXvod%2Fb5Q%2B%2F4p%2BO58fxTCVe2ynXPXdHkvKhrWzto7Ye0f7HyW5QAaZhg1gNVkICfzChUyLZaGNhuACC%2Fe7ydtHc%2BCSnbOeytBvIr9D%2FhhzSrLzgf%2F1pG40quZTJNq67HkOOgIGyctfVciarl9GZ82RCBJzzaPwLepKezr9aj%2BviF7K6Rr0rQWNh397kc5gYrgkISBjDbTveUhH4ar8Z1M4zo09WY2LAq5uPEEQaFWLcVabA6QwuPxypU6dtF%2FQtVzG%2FfRFaoevh7W6HvRzXhokmiZGRGWq4McvShwxgyoOTd0PLc4CPCR78RbhFQ8bJ0MGZnecXngIp9VTWMaHkJeGknPF2pMmXqEwtPM60%2FXr54HwQIuWDzPEmvlpO913sh6B2bgZdIp1TAIwxwDuhybt%2FvAcH45eImMydIE%2FhNVXbTIqyqHJHOLd40IY2RbKtjesYbDZHclcWhc9op698CxWz0ILA0jFV9dsTkcgGVp5VmZ8dwXScgsROywCiRM29Ovgu8c0FN%2FaAU%2B%2F4XwX51HAzOSLdZz%2BzyE17WG2rpKDy0Ny34FGXwzT1KHeN2aFrDvFHdq%2BHlhy48CCiQkFlRK4Fx6GhFhi6sGe9gndTTC6RUw9%2FLayQY6pgGAyb%2Fh9e3DVl2qdXRRlrGOSLIhSTvQTW9l%2FO4wI%2FlGSzpWXk3YteqrDD2x6rv%2B%2FN%2FOTMCst5pRl7OVQ8MVB8qjN%2FZKTQaZqRjDUJw9Uv2OXjYsaNFkvPHi8jeNDE4lEOQyOp%2Bh4EzIoyA5CiNFmBosTo16Y5sITcHw1pha%2BYpCx3Gh4OsFHW3L%2FE9dKkDCE%2FcgSkVp%2BSfcTpTRSlP6t5DNSbry7nMH&X-Amz-Signature=06a213835e2dea7a60ab1ea0e3c4f281d20b22fe6ed65a2cd59ba683e6852976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFYQCLU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5WSugMyHawhwiDFQWJnkoI%2FEy9cX1QYQhyKtqjU0JjAiB%2FZ511%2BUVAFJftirZ0jkBijmqqXVFmY68q%2FwcpMEbo1CqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVrlVins4RVRSX6KjKtwDEi2RrJx0te8mQkx%2BXvod%2Fb5Q%2B%2F4p%2BO58fxTCVe2ynXPXdHkvKhrWzto7Ye0f7HyW5QAaZhg1gNVkICfzChUyLZaGNhuACC%2Fe7ydtHc%2BCSnbOeytBvIr9D%2FhhzSrLzgf%2F1pG40quZTJNq67HkOOgIGyctfVciarl9GZ82RCBJzzaPwLepKezr9aj%2BviF7K6Rr0rQWNh397kc5gYrgkISBjDbTveUhH4ar8Z1M4zo09WY2LAq5uPEEQaFWLcVabA6QwuPxypU6dtF%2FQtVzG%2FfRFaoevh7W6HvRzXhokmiZGRGWq4McvShwxgyoOTd0PLc4CPCR78RbhFQ8bJ0MGZnecXngIp9VTWMaHkJeGknPF2pMmXqEwtPM60%2FXr54HwQIuWDzPEmvlpO913sh6B2bgZdIp1TAIwxwDuhybt%2FvAcH45eImMydIE%2FhNVXbTIqyqHJHOLd40IY2RbKtjesYbDZHclcWhc9op698CxWz0ILA0jFV9dsTkcgGVp5VmZ8dwXScgsROywCiRM29Ovgu8c0FN%2FaAU%2B%2F4XwX51HAzOSLdZz%2BzyE17WG2rpKDy0Ny34FGXwzT1KHeN2aFrDvFHdq%2BHlhy48CCiQkFlRK4Fx6GhFhi6sGe9gndTTC6RUw9%2FLayQY6pgGAyb%2Fh9e3DVl2qdXRRlrGOSLIhSTvQTW9l%2FO4wI%2FlGSzpWXk3YteqrDD2x6rv%2B%2FN%2FOTMCst5pRl7OVQ8MVB8qjN%2FZKTQaZqRjDUJw9Uv2OXjYsaNFkvPHi8jeNDE4lEOQyOp%2Bh4EzIoyA5CiNFmBosTo16Y5sITcHw1pha%2BYpCx3Gh4OsFHW3L%2FE9dKkDCE%2FcgSkVp%2BSfcTpTRSlP6t5DNSbry7nMH&X-Amz-Signature=7c643473a04029027a719d0b333a27744a376ec4142bf014c4185f49bb3d56d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
