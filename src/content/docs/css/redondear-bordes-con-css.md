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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH25N2FZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUtqG8C7jPs02TofybkaSnL6vdrPf45B7xDBuYCZjhHAiAiNeW6amd4nEDyobxFPEWh%2Btt9z1oJWjLlpj2arKWFGir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMg87sYJNfIE6LLGQBKtwDMslHXNkCGCRG%2BTYGjbuAmAeXaXj4jkIwrxv3nBVGyo6ZNC%2FtdLTEFeUAg%2F%2BS4kL58gRN%2FJvUHXRdgMoyHofC4GnkjwoxoPCHIv%2BCQSqMxdy0tE67h7BW5YUfCohnrKdTP%2FIUVK39tDNt0mi9Voz1ceqqcEF98HJ3NULQB7yWQ%2Bzf%2FN%2BRtysPJr3WtvtHwEBW6F%2Fka%2F60YT%2FcOYsOV%2F%2FlSAlhc%2F2V7DaDktCOrsc0JSfkdh0CR4wH0d9PXGtPT3TwPQDa%2Fvva8Gp3aEALCQ5W9ob7v9klm9oU%2BAKViIR%2FIqtNeHoPjOGqRwfIv%2FGWG%2FL15qM0llwCgAWOMaX37qI%2Fz5t%2FKTuJdYjJ%2FR4T8xj5NgPuThgrf1iBXphNZA5dfndATE0lc25ZDK1y%2BKJYsrEjo0SWFpWIJbIY8fA6bko%2Btco7H4mkt7LFes4fB%2B62KcRsg3Zt7Khnlpu3NGPgMnzZ8Ow15XG3wpipofOv31OaMK1QhxHep7aQwDQdYhoq8N9nZtl0ibp1SN6i5jpuvZ6OXaZM6SeYhCITxz6GFRloxkQwQAaYCtUXXLi8zgnohsFyobhbPyfCnFfcLFGD0VFRanLOJnW6D5klI0OXmKemhLv7WqOjrZ2prwBevPAwpf3OyQY6pgE72YZrfBkJ2%2Bnghcwm1ZziZD613QLt53wapLKosjrHvAuoYpmuYTHcuGSoNmWnDKmavsWRFcmjMidJOJElZ6KYKCkVkX2yJ%2F3rkTDsC1iZCFhNLIRoOLJHMpYiIMiDaB9kIQ9nS0yT%2B%2BcqlmoICurU%2FwtWzwga1iJvS5xHf%2BkdM69wavjO8HSxyEjrIsK4zW%2BG%2B9S%2FOpiDp6LU9LZiXqxCuhn7BWTq&X-Amz-Signature=990a4772a3d5f8599f99b29dcf7037db560803cb842284ae9672c0726b0b40c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH25N2FZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUtqG8C7jPs02TofybkaSnL6vdrPf45B7xDBuYCZjhHAiAiNeW6amd4nEDyobxFPEWh%2Btt9z1oJWjLlpj2arKWFGir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMg87sYJNfIE6LLGQBKtwDMslHXNkCGCRG%2BTYGjbuAmAeXaXj4jkIwrxv3nBVGyo6ZNC%2FtdLTEFeUAg%2F%2BS4kL58gRN%2FJvUHXRdgMoyHofC4GnkjwoxoPCHIv%2BCQSqMxdy0tE67h7BW5YUfCohnrKdTP%2FIUVK39tDNt0mi9Voz1ceqqcEF98HJ3NULQB7yWQ%2Bzf%2FN%2BRtysPJr3WtvtHwEBW6F%2Fka%2F60YT%2FcOYsOV%2F%2FlSAlhc%2F2V7DaDktCOrsc0JSfkdh0CR4wH0d9PXGtPT3TwPQDa%2Fvva8Gp3aEALCQ5W9ob7v9klm9oU%2BAKViIR%2FIqtNeHoPjOGqRwfIv%2FGWG%2FL15qM0llwCgAWOMaX37qI%2Fz5t%2FKTuJdYjJ%2FR4T8xj5NgPuThgrf1iBXphNZA5dfndATE0lc25ZDK1y%2BKJYsrEjo0SWFpWIJbIY8fA6bko%2Btco7H4mkt7LFes4fB%2B62KcRsg3Zt7Khnlpu3NGPgMnzZ8Ow15XG3wpipofOv31OaMK1QhxHep7aQwDQdYhoq8N9nZtl0ibp1SN6i5jpuvZ6OXaZM6SeYhCITxz6GFRloxkQwQAaYCtUXXLi8zgnohsFyobhbPyfCnFfcLFGD0VFRanLOJnW6D5klI0OXmKemhLv7WqOjrZ2prwBevPAwpf3OyQY6pgE72YZrfBkJ2%2Bnghcwm1ZziZD613QLt53wapLKosjrHvAuoYpmuYTHcuGSoNmWnDKmavsWRFcmjMidJOJElZ6KYKCkVkX2yJ%2F3rkTDsC1iZCFhNLIRoOLJHMpYiIMiDaB9kIQ9nS0yT%2B%2BcqlmoICurU%2FwtWzwga1iJvS5xHf%2BkdM69wavjO8HSxyEjrIsK4zW%2BG%2B9S%2FOpiDp6LU9LZiXqxCuhn7BWTq&X-Amz-Signature=bcdaa0e41a7de32d7faa047abba322f7ebffa25c4a0f17ca5d8d13a59263db0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
