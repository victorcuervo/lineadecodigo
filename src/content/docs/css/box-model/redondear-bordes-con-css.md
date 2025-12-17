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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L65AW3L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHwe55aY5n0TR8KfZl3ZNIRnQpE50KsXXnTi9n9u6nQQIhAMzn94Z8JxQ4N8MfcJK76ghajzZB1jwtlfx24zN8L8TMKv8DCH8QABoMNjM3NDIzMTgzODA1IgzkpGFqQuSYl%2Bo8Yrsq3AOrieeNwJyHNymVPU%2Ft59VUl%2BdNUsB79Xx2Lt5jgmwlIqa6BGpOHXAnMFp%2FYhS81XjfLjIM%2F3kXTtz2rnAxq694MgxEeULO401148qxzY5n4MX60eH%2FdwcpbnI2P5RpselTku8yOY0MEwjML3QVlAut%2FV1wBYatID4erDTDPX%2FZyj8rAgAu1v3oCDuuhj%2BCUsBhagtMcWo5oxP8JCPAkfwW29kw5SouDOGhztNXs1Sn3%2FP6qaYIW7CtF44r6tZ%2BN6zJu5nOz4CHF1YxY9neRxYYq8ICT2kUqwGiBYv9OXna9nWRJPC9v1D29nYbXmMvPfvnCqPv%2FePbyR4bmc%2FWOKeqEZlsqVlxyrPsljOMx3%2FWXkXkVLY%2FHiAydTai%2B7dpwLhskXVpF0PZ4abr9Gu8WMnltP3hRWwWn7Koucb7syQSTu%2FGjpGo2ubtcLvbde02CWVZvyr3wXHUVyUmoM0mEOYAgaK%2B2HnWUDs1agQ%2Fevlu05bkIaj%2BzoXxMZMrZwSInazm%2FvVW0suH5LLbBsaAgHDtcx9dMcZa%2FTtF12ZRuQ%2FIvLUMnyfSeg3PX355b%2FC2%2BhLluWDbxS4JVfDrA%2FSHUIwOj5gJpXX7Ck8JLx2aBwAuxqS%2BPT5wvGCzrw7sIDCX44rKBjqkAUVgQkjptHEItI6kKRw3Po6bo5xykHTIdKOBkwgk48XJZYJ7j%2BTWh3cp9VOMiDualrvLgCZtUZegSdnv4W1mE%2FNkEgi21%2BK1%2FDvsTgR99TgMK4OYeF1byAYqxkTxUwxc7NoIwTUoUWIX4dtr9JB1dwHzuilLEBt9OLmrrxKYpV4TjQjh4gDeD3KwapmBt%2BLisW%2FsW%2BPyxtxf9w3ZP4YD4%2FO4rFBg&X-Amz-Signature=bababc542645f370231141f3917504f3b8fcfde5c0c2333516d1f29863c4a87c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L65AW3L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHwe55aY5n0TR8KfZl3ZNIRnQpE50KsXXnTi9n9u6nQQIhAMzn94Z8JxQ4N8MfcJK76ghajzZB1jwtlfx24zN8L8TMKv8DCH8QABoMNjM3NDIzMTgzODA1IgzkpGFqQuSYl%2Bo8Yrsq3AOrieeNwJyHNymVPU%2Ft59VUl%2BdNUsB79Xx2Lt5jgmwlIqa6BGpOHXAnMFp%2FYhS81XjfLjIM%2F3kXTtz2rnAxq694MgxEeULO401148qxzY5n4MX60eH%2FdwcpbnI2P5RpselTku8yOY0MEwjML3QVlAut%2FV1wBYatID4erDTDPX%2FZyj8rAgAu1v3oCDuuhj%2BCUsBhagtMcWo5oxP8JCPAkfwW29kw5SouDOGhztNXs1Sn3%2FP6qaYIW7CtF44r6tZ%2BN6zJu5nOz4CHF1YxY9neRxYYq8ICT2kUqwGiBYv9OXna9nWRJPC9v1D29nYbXmMvPfvnCqPv%2FePbyR4bmc%2FWOKeqEZlsqVlxyrPsljOMx3%2FWXkXkVLY%2FHiAydTai%2B7dpwLhskXVpF0PZ4abr9Gu8WMnltP3hRWwWn7Koucb7syQSTu%2FGjpGo2ubtcLvbde02CWVZvyr3wXHUVyUmoM0mEOYAgaK%2B2HnWUDs1agQ%2Fevlu05bkIaj%2BzoXxMZMrZwSInazm%2FvVW0suH5LLbBsaAgHDtcx9dMcZa%2FTtF12ZRuQ%2FIvLUMnyfSeg3PX355b%2FC2%2BhLluWDbxS4JVfDrA%2FSHUIwOj5gJpXX7Ck8JLx2aBwAuxqS%2BPT5wvGCzrw7sIDCX44rKBjqkAUVgQkjptHEItI6kKRw3Po6bo5xykHTIdKOBkwgk48XJZYJ7j%2BTWh3cp9VOMiDualrvLgCZtUZegSdnv4W1mE%2FNkEgi21%2BK1%2FDvsTgR99TgMK4OYeF1byAYqxkTxUwxc7NoIwTUoUWIX4dtr9JB1dwHzuilLEBt9OLmrrxKYpV4TjQjh4gDeD3KwapmBt%2BLisW%2FsW%2BPyxtxf9w3ZP4YD4%2FO4rFBg&X-Amz-Signature=9831bc82cbd10a385ab964c1df7d0f4ce254b6eda7b85f84acd6a89410dae3e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
