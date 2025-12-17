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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJJALHB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvvL%2Fv1Pqt0InTfE8Iog%2BXLbbQlx%2By2jOn6FOehm4lOwIhAMuP1iipzoXHatytKfT9QieOs3yIJb%2BSW6zldhkSN4OQKv8DCHcQABoMNjM3NDIzMTgzODA1IgzaHj%2BX4twygZIKIBAq3AP2yMox6jTE56usOTqhrXffWHjg%2BCXO5HaTkKqXxD5C%2BgWiRfZwIC9iRhK4PunaOe5GGqFuZHjhDNQi4u6ORekTQk4yiFbgZfcJbcnBmy8%2BvC%2BIwRBSh0R%2FMM1q%2F00mpFnpfkKgsEqr2BvSjlxqjKSoNsI%2BvfL2hHRJmdL0WAUrCDn1djCmRXuJTu4UHej%2FmRg0u5gYMHQT5ZKlEL3J4v7e4m10fFEo8DU%2FURRZ2lv2cn0KEen3tkTuXwLfRpqY%2B0KuXtuil67HYX%2Bul8a4MQk%2BLTgTxTaKUYlOF%2FHTVxidVg0SnQ9SvA6%2FdTkTjWH5%2Fp5GBXyZqshDB790m1WzdI1gGoFxGAQsHkanm4Fdr29Et5BiLrXE90Kh0Y%2Fyc4HyJfPj4yco2ikTgb2oXkzq13FN8bZlzrAuzOSLveel0upllAheG%2BBktU7cxE7qYtcY8IW5gnJjWQCN9UeeH4hdGaUJorIBCFRP1j2LwpwqTaKONHmajAgUqtNNepqxzKMT7j7VpQCqDh40JK0AhMCsdiGerhuAJSuHggnLo63XMJZKDWsL91J6ECdM11RAoSvNEYlQFqEwzpTXKB7IOQE%2BLx4AjGj5VTGD9yDjpErQen4gB4Di%2BL6ElmUni2dXTDCDg4nKBjqkAdl1yGD808XJ0YNIxE9iwENrMAuIgWRp8V%2BoRdpnS4HAxXzfHnMIPAYyuWbEOGHMSOvoWjGGLG0GDlfNRKzUWXr0eNFAFFsU4PqJha%2FB2Fm0nc6PXiHeRkwi1mzI633tNCBI7mJ5No6FhN97DNpA%2F9nXOauI%2B96XzjX%2BKwrFH1%2B187MgaZ9nre8s5KE5%2BdJuaLBLE1am0BpvFAnE5Esq8G5n9bH7&X-Amz-Signature=89b1fd6158d104b39b32f96596e379e7d8f10ebcd2b5443c008b7847e57b45e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJJALHB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvvL%2Fv1Pqt0InTfE8Iog%2BXLbbQlx%2By2jOn6FOehm4lOwIhAMuP1iipzoXHatytKfT9QieOs3yIJb%2BSW6zldhkSN4OQKv8DCHcQABoMNjM3NDIzMTgzODA1IgzaHj%2BX4twygZIKIBAq3AP2yMox6jTE56usOTqhrXffWHjg%2BCXO5HaTkKqXxD5C%2BgWiRfZwIC9iRhK4PunaOe5GGqFuZHjhDNQi4u6ORekTQk4yiFbgZfcJbcnBmy8%2BvC%2BIwRBSh0R%2FMM1q%2F00mpFnpfkKgsEqr2BvSjlxqjKSoNsI%2BvfL2hHRJmdL0WAUrCDn1djCmRXuJTu4UHej%2FmRg0u5gYMHQT5ZKlEL3J4v7e4m10fFEo8DU%2FURRZ2lv2cn0KEen3tkTuXwLfRpqY%2B0KuXtuil67HYX%2Bul8a4MQk%2BLTgTxTaKUYlOF%2FHTVxidVg0SnQ9SvA6%2FdTkTjWH5%2Fp5GBXyZqshDB790m1WzdI1gGoFxGAQsHkanm4Fdr29Et5BiLrXE90Kh0Y%2Fyc4HyJfPj4yco2ikTgb2oXkzq13FN8bZlzrAuzOSLveel0upllAheG%2BBktU7cxE7qYtcY8IW5gnJjWQCN9UeeH4hdGaUJorIBCFRP1j2LwpwqTaKONHmajAgUqtNNepqxzKMT7j7VpQCqDh40JK0AhMCsdiGerhuAJSuHggnLo63XMJZKDWsL91J6ECdM11RAoSvNEYlQFqEwzpTXKB7IOQE%2BLx4AjGj5VTGD9yDjpErQen4gB4Di%2BL6ElmUni2dXTDCDg4nKBjqkAdl1yGD808XJ0YNIxE9iwENrMAuIgWRp8V%2BoRdpnS4HAxXzfHnMIPAYyuWbEOGHMSOvoWjGGLG0GDlfNRKzUWXr0eNFAFFsU4PqJha%2FB2Fm0nc6PXiHeRkwi1mzI633tNCBI7mJ5No6FhN97DNpA%2F9nXOauI%2B96XzjX%2BKwrFH1%2B187MgaZ9nre8s5KE5%2BdJuaLBLE1am0BpvFAnE5Esq8G5n9bH7&X-Amz-Signature=050f795bdf13385e7beee3548f776e92226892e5a8d9b8ec2bb987705416c3d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
