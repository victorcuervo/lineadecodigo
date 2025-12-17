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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQNDXKBO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy1x2%2F5ttO9p6ufzoV4f7DtcYeDZmmbgsG0q%2FJACVMawIgdKJu09zqVg%2BlKA9l2rVHiT5SYoHBEsBQq9J0EqNm%2FYsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGP3iyfmWbWR7Lo0ZSrcA9y5D16QE8QQTidks6IzIJbkLBZjkkcV%2Fk1mJvNA6wRCDUdPkL5aUE%2BRCzP%2BrwP0RrssTar9Qk3rRx35RbtyLLhmlBwbn32DqsEsI%2FZIuHsRI67RW2MUl2WLwLR6LdDxHiOwGKewe1USkaRjO1PrI82b%2F5fQEufPSg4cejQfDRWq3xJQlM4Ie5ySWVc3klNW8ffcXosf9O0WezS59C1tCSTREessJwxJsNeoQ5krc6nP4GrsG7y8F38qOY39%2Br2ftFrl90kccRXO54qpTi%2FYUZla5pvuhVPBo%2FULu8RKGqtCrTcQegYz7zELb%2BOyFfTDTiLkoFHKQBQ%2BvROcIClLsmNQ5%2FOuOOU5t05yqVFt7O1j7Z4o3MVhLzNP1GzRf9cPbGcusTUD7ORaUE2VKp5nI%2B7tIkGP1w1J5nLV0Qvc29FogG1ctzz%2BShu6MHXeyPtIJj0AMPvi1iQKVqvXnjG1F5H%2BnqmYSOXbuMCIYrYwIge4Wopq2XLCurx7MWvIxYn2JVXYBzGTyPLUZBNtL1Iv1yNkKmXlcPwoKJ9Uepr6H5mWh9aAKG5mfyroKfETcj6U840dZYqPeu7BOAq1OkqAVbXebkJaStddyYlReqzv%2F7X%2BN0zUQngchxJC4bAGMOGAi8oGOqUBAuKgC%2Fld3rEMGvIg3L%2FQQz8ovJMg3FO27cuBrSY1fh%2FuT4IXwTaBoGFY1BUyrfyMqBdO3egbRBXSQVZAJW5YqcmPmx%2F6qsP7XIgwsUsDTM6PENVHqWrK4bZJynE1XgOkFRf26HH%2FRP21psl394cCQH8Fm7oEGTPv%2Baz3ayqRazEIWGELN55Ydk2wyviaaHkhpfVcOZ3KJWEr21Qdg7a7PpaGqARb&X-Amz-Signature=acf850103d1374f2121d4064d1edbd756e07f8d1bcd9f94f9bc8ea2a4b72f398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQNDXKBO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy1x2%2F5ttO9p6ufzoV4f7DtcYeDZmmbgsG0q%2FJACVMawIgdKJu09zqVg%2BlKA9l2rVHiT5SYoHBEsBQq9J0EqNm%2FYsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGP3iyfmWbWR7Lo0ZSrcA9y5D16QE8QQTidks6IzIJbkLBZjkkcV%2Fk1mJvNA6wRCDUdPkL5aUE%2BRCzP%2BrwP0RrssTar9Qk3rRx35RbtyLLhmlBwbn32DqsEsI%2FZIuHsRI67RW2MUl2WLwLR6LdDxHiOwGKewe1USkaRjO1PrI82b%2F5fQEufPSg4cejQfDRWq3xJQlM4Ie5ySWVc3klNW8ffcXosf9O0WezS59C1tCSTREessJwxJsNeoQ5krc6nP4GrsG7y8F38qOY39%2Br2ftFrl90kccRXO54qpTi%2FYUZla5pvuhVPBo%2FULu8RKGqtCrTcQegYz7zELb%2BOyFfTDTiLkoFHKQBQ%2BvROcIClLsmNQ5%2FOuOOU5t05yqVFt7O1j7Z4o3MVhLzNP1GzRf9cPbGcusTUD7ORaUE2VKp5nI%2B7tIkGP1w1J5nLV0Qvc29FogG1ctzz%2BShu6MHXeyPtIJj0AMPvi1iQKVqvXnjG1F5H%2BnqmYSOXbuMCIYrYwIge4Wopq2XLCurx7MWvIxYn2JVXYBzGTyPLUZBNtL1Iv1yNkKmXlcPwoKJ9Uepr6H5mWh9aAKG5mfyroKfETcj6U840dZYqPeu7BOAq1OkqAVbXebkJaStddyYlReqzv%2F7X%2BN0zUQngchxJC4bAGMOGAi8oGOqUBAuKgC%2Fld3rEMGvIg3L%2FQQz8ovJMg3FO27cuBrSY1fh%2FuT4IXwTaBoGFY1BUyrfyMqBdO3egbRBXSQVZAJW5YqcmPmx%2F6qsP7XIgwsUsDTM6PENVHqWrK4bZJynE1XgOkFRf26HH%2FRP21psl394cCQH8Fm7oEGTPv%2Baz3ayqRazEIWGELN55Ydk2wyviaaHkhpfVcOZ3KJWEr21Qdg7a7PpaGqARb&X-Amz-Signature=3ad4ccd091c2d38b46f7341e0aa6c98d407081227e4c4148aa7d7245367529a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
