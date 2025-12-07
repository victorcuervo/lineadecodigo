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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3R6W75%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm56Ns%2F7NJBhxovgBudM%2B2AhkKA0lPhsJrnq%2BuNql1wwIga0Yj3s7cMoP8ssFUuxTtFQcObtBaPZr%2BNTV2uf57ws0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLSO37L7wkvTjBMmyrcA62XgZ2gF4XeODiwIq5r4HNteWqKBbi4c2L4ucJcVutAdut1gkNg9BOSxMwYCM4qsz%2BFKW5fsbHe%2FYSvOmAPKWG3XqADcx%2FgDS7jmWL%2BLeZb0oKx6hL6q1SCiNIp92CBwXztydNf4R6VQ2ZRB%2B7cKTbLePVM%2BEyIryO2cve2gROQDzf3IiVaVtlvE0qr9WAKp3mLmHtNHrZjGsLuofy6zPiejnJhkYHYjeOI7Jzd68Uhp7Dpfmz339JAZF2Jh6%2BQXo8m%2FpjL2%2Fvl5sZDNy0kbX%2F89cHpw1miGcqpGN6ECMXteg7Kj2cssX2Cv5fPfU5ho2gSxd%2F6AI%2FrTiBKcYAWT9NR5XeqySO6IidsJFexs3Y%2BnxRJmNDKLun4vUKtfSMG8%2FbvV6%2BG%2BHaCMl5quGS3aMhiUXJNrnsBwU0DB3PCQZvqSGMdz0knnDf%2FXPyPEaHH3cYJWOmY%2FAfOMbgYQkbLr5OObb5uTV0DBMP0Hm3mcljXHINzqs2LSsgZt3QrNXuRdSn9tm33a8mM5AnHJDOmbJfXNZMsTBw4Qbre0%2BbC4iyHdtyp2o9jJZhdXFlpZtnfvQJ7EOfBHkE7vD83DedXHZBsRfNO66aiWMdtufSFtq6lfJhTBVTc%2FX7pHzfmMMua1ckGOqUBHmRClG%2FkHrnwAAWeZTeAwrkvA9WSjPWMIs5aDMxdXN4Fq4PvpcxMaEfpz2BGtDHM%2BICd49y9%2Fna3ifQmBfWDoCbG90QAjeOdduYeYMzEs7U6TblP%2FLjm%2BOg3Fs0XrvUu3Uhs3PCi3gqEy5NxCzcvR%2BKP0WjRS%2FoBSa4cC3spmzi%2Fh9eQd6aGuIio8Xzz9ZBqgYY7A0SjxJDjBd7kRUJ6z2D%2BeBSJ&X-Amz-Signature=25d4b47a52e04cd075973fbe46a8abf05ee69d9b7d0873c873d04b90327f26b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3R6W75%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm56Ns%2F7NJBhxovgBudM%2B2AhkKA0lPhsJrnq%2BuNql1wwIga0Yj3s7cMoP8ssFUuxTtFQcObtBaPZr%2BNTV2uf57ws0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLSO37L7wkvTjBMmyrcA62XgZ2gF4XeODiwIq5r4HNteWqKBbi4c2L4ucJcVutAdut1gkNg9BOSxMwYCM4qsz%2BFKW5fsbHe%2FYSvOmAPKWG3XqADcx%2FgDS7jmWL%2BLeZb0oKx6hL6q1SCiNIp92CBwXztydNf4R6VQ2ZRB%2B7cKTbLePVM%2BEyIryO2cve2gROQDzf3IiVaVtlvE0qr9WAKp3mLmHtNHrZjGsLuofy6zPiejnJhkYHYjeOI7Jzd68Uhp7Dpfmz339JAZF2Jh6%2BQXo8m%2FpjL2%2Fvl5sZDNy0kbX%2F89cHpw1miGcqpGN6ECMXteg7Kj2cssX2Cv5fPfU5ho2gSxd%2F6AI%2FrTiBKcYAWT9NR5XeqySO6IidsJFexs3Y%2BnxRJmNDKLun4vUKtfSMG8%2FbvV6%2BG%2BHaCMl5quGS3aMhiUXJNrnsBwU0DB3PCQZvqSGMdz0knnDf%2FXPyPEaHH3cYJWOmY%2FAfOMbgYQkbLr5OObb5uTV0DBMP0Hm3mcljXHINzqs2LSsgZt3QrNXuRdSn9tm33a8mM5AnHJDOmbJfXNZMsTBw4Qbre0%2BbC4iyHdtyp2o9jJZhdXFlpZtnfvQJ7EOfBHkE7vD83DedXHZBsRfNO66aiWMdtufSFtq6lfJhTBVTc%2FX7pHzfmMMua1ckGOqUBHmRClG%2FkHrnwAAWeZTeAwrkvA9WSjPWMIs5aDMxdXN4Fq4PvpcxMaEfpz2BGtDHM%2BICd49y9%2Fna3ifQmBfWDoCbG90QAjeOdduYeYMzEs7U6TblP%2FLjm%2BOg3Fs0XrvUu3Uhs3PCi3gqEy5NxCzcvR%2BKP0WjRS%2FoBSa4cC3spmzi%2Fh9eQd6aGuIio8Xzz9ZBqgYY7A0SjxJDjBd7kRUJ6z2D%2BeBSJ&X-Amz-Signature=08157e9913e3796e2473adf971e6e1208ff22c56a082fd9555c9766b4c61db35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
