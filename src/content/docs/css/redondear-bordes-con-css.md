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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K3VBHLH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaHwYo1DukMuH2hd3Z8hJUCoS3crSpe0QAsvKtMiYvrgIhAIwrevswvVW%2FjfbBlt8f%2FIGfuwPccbDw5%2BCPVCGB9ZOBKv8DCHEQABoMNjM3NDIzMTgzODA1IgxgKbuzmOwfCr2QmFYq3AOARW4RHWu7Z9TsV47vyJBpkFRw1F2QcsZwEEDdD3gWRy9YFVcO%2FfvcnSIa6aN7iQgtLvZfonovrdB2FhsBf9sEFMEk47Crj%2Fi5I0PlwDQE9VMEDROspF8nBpDIzCFMc5DLvHERIIkmmyhGmQ6D%2FICWJ5mXEB8oq8OjMCwnBcBp25SiuXn8x6DqaunsLwa6WyX4%2B5YlGd401xi9YpG7OZg0R422cTVuS4JNBS%2BXeFPE9NPYAty3zpMEBk%2FFNo69HMDffEzzx8k9CbtN6kPxHD8eluTdRUQ8nDk8RbwIpCDS2SiFSBMMdmGUCZQdkqD7UftX71C%2FW3FRjEv4Ru2DDF5uMfiY8eRSGCnxLz%2BRmVlDtf4muhvIt0QXZF42mRfJ0boPM5VyAPwq2Au7ciKy1Kk%2F4cQkMW5zHG1N6mHoN%2B%2BLa%2FeAk0xlNZtHui6Yd%2B3Pn4f%2BWkk%2F1N81dvVzOlFDKWCV55PJMT%2BCCKEW2u6t9IO%2FCZ7iDJsXfJru1OUxvu6RrX3qTzujcWm8Zbae9vx7ExQrtBwZ%2Frnz1NHmhzZfGTeVi2JXuXwfWh%2FgY%2FXJ%2FWV56lRrlLPKYJ9RLhl5t54LSKTU1DX4OYf%2BIIIcIK00GJtHhTdKOYnVoLtSF7F3eDCzvM%2FJBjqkAYAqVnUhPwwnJdgvao8T%2Bpf6Rf8hI6i0obGmnv639M0DYgg1AgF2Wncsosp87QUvm7qnjLN8uDKb%2B%2BFMg7YoDkDgm7hvzieoye1AtGKdgB%2FKJxaVLtqYdwdv16YVH0GQAssRL5%2BkPgQIdAMePCxZfS0x3bJKcqa367DLv%2BDHGHpxahgysMxgUFBXlAAqc8jAQ41Q6UZb%2BJtSzJKIvKYnrcRpqG5H&X-Amz-Signature=446a6bf3b9c6f0047ebb16a0d0c40837d7e9baf6c3ffb4d2a2c4534941928a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K3VBHLH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaHwYo1DukMuH2hd3Z8hJUCoS3crSpe0QAsvKtMiYvrgIhAIwrevswvVW%2FjfbBlt8f%2FIGfuwPccbDw5%2BCPVCGB9ZOBKv8DCHEQABoMNjM3NDIzMTgzODA1IgxgKbuzmOwfCr2QmFYq3AOARW4RHWu7Z9TsV47vyJBpkFRw1F2QcsZwEEDdD3gWRy9YFVcO%2FfvcnSIa6aN7iQgtLvZfonovrdB2FhsBf9sEFMEk47Crj%2Fi5I0PlwDQE9VMEDROspF8nBpDIzCFMc5DLvHERIIkmmyhGmQ6D%2FICWJ5mXEB8oq8OjMCwnBcBp25SiuXn8x6DqaunsLwa6WyX4%2B5YlGd401xi9YpG7OZg0R422cTVuS4JNBS%2BXeFPE9NPYAty3zpMEBk%2FFNo69HMDffEzzx8k9CbtN6kPxHD8eluTdRUQ8nDk8RbwIpCDS2SiFSBMMdmGUCZQdkqD7UftX71C%2FW3FRjEv4Ru2DDF5uMfiY8eRSGCnxLz%2BRmVlDtf4muhvIt0QXZF42mRfJ0boPM5VyAPwq2Au7ciKy1Kk%2F4cQkMW5zHG1N6mHoN%2B%2BLa%2FeAk0xlNZtHui6Yd%2B3Pn4f%2BWkk%2F1N81dvVzOlFDKWCV55PJMT%2BCCKEW2u6t9IO%2FCZ7iDJsXfJru1OUxvu6RrX3qTzujcWm8Zbae9vx7ExQrtBwZ%2Frnz1NHmhzZfGTeVi2JXuXwfWh%2FgY%2FXJ%2FWV56lRrlLPKYJ9RLhl5t54LSKTU1DX4OYf%2BIIIcIK00GJtHhTdKOYnVoLtSF7F3eDCzvM%2FJBjqkAYAqVnUhPwwnJdgvao8T%2Bpf6Rf8hI6i0obGmnv639M0DYgg1AgF2Wncsosp87QUvm7qnjLN8uDKb%2B%2BFMg7YoDkDgm7hvzieoye1AtGKdgB%2FKJxaVLtqYdwdv16YVH0GQAssRL5%2BkPgQIdAMePCxZfS0x3bJKcqa367DLv%2BDHGHpxahgysMxgUFBXlAAqc8jAQ41Q6UZb%2BJtSzJKIvKYnrcRpqG5H&X-Amz-Signature=7c4e558e18ac4c0063008f68254a742602bfb8b85db1fdd56115ec62d6aca0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
