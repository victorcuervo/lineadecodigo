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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R6N6TUL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRc7pwrBvrkDbMl7Rme7q6JZpv5zsIhFWw6BYSZVJRfAIhALw%2BJkXsmyIggJvcgIFiV2jD1mhDJbfHv2iNvXgJEOGEKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiB5rTlLPRDgEJR%2Foq3AOtCzVj5aXnpj%2Ba6M1kdoyoSHD1XgoYYWgFikVJo5lMju8EuTARxVPVtutzLoKQzbq9SV6Ts6N7VsNZ9T%2FvXztfRmxhZKIKBwXqzF1jSA74fD4L%2BklKNoR9cyt7NtZwdMWTND3KVgklwu6Q8gx8NEZ%2BZZGtz29xiWAEQ7zJsdpkiCn11Hc4BdNjn6oVf0m35dkbztnciTDtnaRlg9XTVRBCztUzVheAnRAysZTSumnBGApMxOcR3qjfN%2FZ0i0UM5kDxwc9xlpJfadE9CwOhuk7PPgPlVRhhdf3RdT1DGLUzHC0ao%2F40o566CSTqPjhmZiAqxBK1jYDszVAkC4H6ILZu0ymLCrO0x%2BNGv6TkY0OdaE5l756KxlswBg3uQ7rfwKIV%2BNRuz7FwZxx%2F0uMIGFLO3OplkDv42WzJwgad2TqkjpkxWEgO1dzD2Jld2SqCoBVYVBd6f4kGD7rm%2FKtjQKZ7mtPGctFYBYwquW%2FCruj1z335EgheMijC9oaAc2DT5pqMz3L%2B7RpTltr8OrtMW%2B5x1FRaW6rsGH6WhuNYnT3AR40B3kuzJbN4wqOq6BmRJ%2FiBzgVBIWrNExOH8zuZTB7%2FwWaApyApSFRfBFnQXSZYTeFi6M%2B6fHhiW5mvhzC%2BhtzJBjqkAadPmrrqkUOahRYoRbYs7ID5ZnGqkZBOBFfzHw%2FOeelDa8PKXOCZQTnItzYaX2NNS4AZheWHu6wblVro4fZCWPmiNtOCiNDGS3vAtKdQMPaBBC6elsV3ex9oAhclqLvIGnIfRTekaeXIpJBO7DGTUONurAjFTNp6vht3mk5E%2B7QqB43TOASMXitiZ0OLM2HGxNfAMJo5Q01bdpTKHecdF8onGy4x&X-Amz-Signature=d700b3caa1eacf47e2e532240ed0841db13806cacbd9f503e6bc4102804c4df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R6N6TUL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRc7pwrBvrkDbMl7Rme7q6JZpv5zsIhFWw6BYSZVJRfAIhALw%2BJkXsmyIggJvcgIFiV2jD1mhDJbfHv2iNvXgJEOGEKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiB5rTlLPRDgEJR%2Foq3AOtCzVj5aXnpj%2Ba6M1kdoyoSHD1XgoYYWgFikVJo5lMju8EuTARxVPVtutzLoKQzbq9SV6Ts6N7VsNZ9T%2FvXztfRmxhZKIKBwXqzF1jSA74fD4L%2BklKNoR9cyt7NtZwdMWTND3KVgklwu6Q8gx8NEZ%2BZZGtz29xiWAEQ7zJsdpkiCn11Hc4BdNjn6oVf0m35dkbztnciTDtnaRlg9XTVRBCztUzVheAnRAysZTSumnBGApMxOcR3qjfN%2FZ0i0UM5kDxwc9xlpJfadE9CwOhuk7PPgPlVRhhdf3RdT1DGLUzHC0ao%2F40o566CSTqPjhmZiAqxBK1jYDszVAkC4H6ILZu0ymLCrO0x%2BNGv6TkY0OdaE5l756KxlswBg3uQ7rfwKIV%2BNRuz7FwZxx%2F0uMIGFLO3OplkDv42WzJwgad2TqkjpkxWEgO1dzD2Jld2SqCoBVYVBd6f4kGD7rm%2FKtjQKZ7mtPGctFYBYwquW%2FCruj1z335EgheMijC9oaAc2DT5pqMz3L%2B7RpTltr8OrtMW%2B5x1FRaW6rsGH6WhuNYnT3AR40B3kuzJbN4wqOq6BmRJ%2FiBzgVBIWrNExOH8zuZTB7%2FwWaApyApSFRfBFnQXSZYTeFi6M%2B6fHhiW5mvhzC%2BhtzJBjqkAadPmrrqkUOahRYoRbYs7ID5ZnGqkZBOBFfzHw%2FOeelDa8PKXOCZQTnItzYaX2NNS4AZheWHu6wblVro4fZCWPmiNtOCiNDGS3vAtKdQMPaBBC6elsV3ex9oAhclqLvIGnIfRTekaeXIpJBO7DGTUONurAjFTNp6vht3mk5E%2B7QqB43TOASMXitiZ0OLM2HGxNfAMJo5Q01bdpTKHecdF8onGy4x&X-Amz-Signature=93ccc159c6ca479a0846d1edcd45c6a1f3acabab5591c8a61d6ca440afa4031f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
