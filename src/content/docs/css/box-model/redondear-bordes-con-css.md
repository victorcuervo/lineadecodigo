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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQY25DJL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiafQTEgSfVhsZnK4AGuRAOIryhrbfgY8qqMhMKIaXLQIhAKY3djuQzjcqaW%2B911dc2P1sRm%2BHh8hGlZ6O%2F3eZoOdvKv8DCHQQABoMNjM3NDIzMTgzODA1IgxJnBgzBTVlEJGCaKMq3AOaIqdWuOa3neUsIvSau72wQ89Eu%2F7X0M6qMfXPzZIifQkxbQYC88APVODp7Bh1EzV7swJHOIhI5s94HREEW31KQw63UwmFwmFjYrVtsWM%2F50E%2BVZn0V%2BFX5SqByUg5qJnua85gb%2FVTsKpcVHFN98wDpXqGVOPw2m%2Fr3wtnzSfHY9C6cHRFQesn367tziEuYXsjCXT1YrFG6Wnh0BiV82E82V%2F7ks492DfYkYkW3j9IjmcDrPZX%2FfJLoJNPDkXxmyFvB8v%2B30c1hMYKlA2j1UIz%2BIGUtGirykuaSlsxjJsvk5q0VV2OkkyQLYy3bPJOfmuMe3AeuE2f82JDMTbHhZFwxF28Q4Gz4uz%2BAvbmePXzhqozKpJyDakE4LUjZg9Q6FCCSC8BK%2BLDGSKwz5lbx96zj8J%2BUDtTl9rG7dkP1o9dtbWdv1g4HpuQKkO4hQ468NVynrJ42DMqt8XA8Nzye9EpIvYIniNg7mEkrU6wDa7w3BXnL3%2FluXVwwmzATevVP%2Fy5ijsL7eDVY2uN30eT0rZSRDdEWN5vUpE0wbVZNKHF3JgiXPlsA4mMMvnNSpP4dg0LkYyGyzNokY%2BHbiaP14rljFxzw2OLRwEQsW78iC7rvSi%2FERN%2FASiT17%2FR9zCNs4jKBjqkAfWFH7cSm9mGmDVv38fMYObC4zlodYblEqP6xEX115U8vxjUsY5P%2FdR%2FtGURklW%2BliQC6GSMoSBxHFkAPt3W98qcdQN59IgMp%2BFCp%2FNZMlzLexZtpqyQRatr1VEf%2FdYaK5Qwkj%2FMU%2B9NHmlB9IccXhx2bqh4yQf5tpDRbHFFbO5AB3%2BE%2F8WBJjrNfss8M5yCqxpxWvvVUHbcBJk9kZQaYU60wyqA&X-Amz-Signature=af191939ca282b4d9704a9c404581a89f8d0ac31c6d252d6ac23bb1f8847ff6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQY25DJL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiafQTEgSfVhsZnK4AGuRAOIryhrbfgY8qqMhMKIaXLQIhAKY3djuQzjcqaW%2B911dc2P1sRm%2BHh8hGlZ6O%2F3eZoOdvKv8DCHQQABoMNjM3NDIzMTgzODA1IgxJnBgzBTVlEJGCaKMq3AOaIqdWuOa3neUsIvSau72wQ89Eu%2F7X0M6qMfXPzZIifQkxbQYC88APVODp7Bh1EzV7swJHOIhI5s94HREEW31KQw63UwmFwmFjYrVtsWM%2F50E%2BVZn0V%2BFX5SqByUg5qJnua85gb%2FVTsKpcVHFN98wDpXqGVOPw2m%2Fr3wtnzSfHY9C6cHRFQesn367tziEuYXsjCXT1YrFG6Wnh0BiV82E82V%2F7ks492DfYkYkW3j9IjmcDrPZX%2FfJLoJNPDkXxmyFvB8v%2B30c1hMYKlA2j1UIz%2BIGUtGirykuaSlsxjJsvk5q0VV2OkkyQLYy3bPJOfmuMe3AeuE2f82JDMTbHhZFwxF28Q4Gz4uz%2BAvbmePXzhqozKpJyDakE4LUjZg9Q6FCCSC8BK%2BLDGSKwz5lbx96zj8J%2BUDtTl9rG7dkP1o9dtbWdv1g4HpuQKkO4hQ468NVynrJ42DMqt8XA8Nzye9EpIvYIniNg7mEkrU6wDa7w3BXnL3%2FluXVwwmzATevVP%2Fy5ijsL7eDVY2uN30eT0rZSRDdEWN5vUpE0wbVZNKHF3JgiXPlsA4mMMvnNSpP4dg0LkYyGyzNokY%2BHbiaP14rljFxzw2OLRwEQsW78iC7rvSi%2FERN%2FASiT17%2FR9zCNs4jKBjqkAfWFH7cSm9mGmDVv38fMYObC4zlodYblEqP6xEX115U8vxjUsY5P%2FdR%2FtGURklW%2BliQC6GSMoSBxHFkAPt3W98qcdQN59IgMp%2BFCp%2FNZMlzLexZtpqyQRatr1VEf%2FdYaK5Qwkj%2FMU%2B9NHmlB9IccXhx2bqh4yQf5tpDRbHFFbO5AB3%2BE%2F8WBJjrNfss8M5yCqxpxWvvVUHbcBJk9kZQaYU60wyqA&X-Amz-Signature=ce1bd1aa6a92bcfeaabb5d8074c599f1459d5e2f37ee4a7c453b055e2741994e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
