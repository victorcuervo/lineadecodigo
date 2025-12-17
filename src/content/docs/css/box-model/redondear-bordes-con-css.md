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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZH3CY27%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC57ksCwlzmvEW8q0Lygmi%2Bf9drLf9i9ykg0Opqv%2BWQHwIgetWyx7S2X2Cryde8TQnNx5ozDWwWK18I%2FGDKdQpg%2F2Mq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIxFSa79Zp96V0TiiyrcA0R8qEhjMpLgbjxd9b2vvnWqAwUab8ra4484YQePMYC3ouuWEgliCLkHhw7NRJyTHXnAgBCXxntoBL6OWNAu5bniTsrYeIWsqN3sz1YJq1Uu4dO%2FwR98Fr0MAEkzMhJtFPemaySD4XQ4pfE8x%2BB7rSd5hhTcLKERJD6wNjF8DegrBi8HlN1BF2OWAX3MpRVTkGnGh6TSwYnoyKY5GXYC8e%2FU3WLIfVyXyyp3cdyQOyhSPI438Sk5to%2FV1rylf%2B5dIQdpcMdCbt4qP22%2BSNvp5npm1guh3rq%2F9qC9XNLaQPA6ttcWlZzH3qfrhvrl07jMWJxUEhzbzh7YDltqMqiUvgQO2ZWiz4QeN4mvNAkC4nNxNnqUSbJlnGWCTZ%2BLvvulPccb%2FxO97qAIdnkX%2FrmWKoaFWE3kOF9xvipHX31IHyx39INkazHZoYes53f9qWCmjFGxTxVWzMAXnK7VqKfTlbUOvoqKSovB%2FJOEmAjZKjpqICtptASQ6YaeTta6B%2FveUMSWNKJEu7bCSFgO38xsrD09P967XqrHrvuVZRnwtgTYjKlwAOD%2BnoLfHaGJd5csPKp6B6z2%2BZd1ou8aKchwl8VE76g0efh8E9O5SNdqBUKBVD%2B0d7fJArJv%2BP6OMO6XiMoGOqUBomU%2F%2B50FbvU6Zbup2cBLsZdfC%2BwAK5b%2BdC2Y%2FBU9zRFxMSNFdsYh7gKbuR%2Bsl0Nja20INuluvzx6i3nmmUaWip3K514li8jQcNn2fZ8sEgHDOkHNP%2FHuGzQ12VM%2F8Jiibn5YgO9lU%2BSyOubkr9aKZfckhS%2B86XL82qS4ZM%2BNDlQlBomNONCXeJEiNysqm7Epra9oAp2OHr9ZCucgS3hn%2FR4%2B%2Ff0E&X-Amz-Signature=c56898567bba3dd94da8dbe354de18bbd374dc7289fbb52f62495c38cb43365c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZH3CY27%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC57ksCwlzmvEW8q0Lygmi%2Bf9drLf9i9ykg0Opqv%2BWQHwIgetWyx7S2X2Cryde8TQnNx5ozDWwWK18I%2FGDKdQpg%2F2Mq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIxFSa79Zp96V0TiiyrcA0R8qEhjMpLgbjxd9b2vvnWqAwUab8ra4484YQePMYC3ouuWEgliCLkHhw7NRJyTHXnAgBCXxntoBL6OWNAu5bniTsrYeIWsqN3sz1YJq1Uu4dO%2FwR98Fr0MAEkzMhJtFPemaySD4XQ4pfE8x%2BB7rSd5hhTcLKERJD6wNjF8DegrBi8HlN1BF2OWAX3MpRVTkGnGh6TSwYnoyKY5GXYC8e%2FU3WLIfVyXyyp3cdyQOyhSPI438Sk5to%2FV1rylf%2B5dIQdpcMdCbt4qP22%2BSNvp5npm1guh3rq%2F9qC9XNLaQPA6ttcWlZzH3qfrhvrl07jMWJxUEhzbzh7YDltqMqiUvgQO2ZWiz4QeN4mvNAkC4nNxNnqUSbJlnGWCTZ%2BLvvulPccb%2FxO97qAIdnkX%2FrmWKoaFWE3kOF9xvipHX31IHyx39INkazHZoYes53f9qWCmjFGxTxVWzMAXnK7VqKfTlbUOvoqKSovB%2FJOEmAjZKjpqICtptASQ6YaeTta6B%2FveUMSWNKJEu7bCSFgO38xsrD09P967XqrHrvuVZRnwtgTYjKlwAOD%2BnoLfHaGJd5csPKp6B6z2%2BZd1ou8aKchwl8VE76g0efh8E9O5SNdqBUKBVD%2B0d7fJArJv%2BP6OMO6XiMoGOqUBomU%2F%2B50FbvU6Zbup2cBLsZdfC%2BwAK5b%2BdC2Y%2FBU9zRFxMSNFdsYh7gKbuR%2Bsl0Nja20INuluvzx6i3nmmUaWip3K514li8jQcNn2fZ8sEgHDOkHNP%2FHuGzQ12VM%2F8Jiibn5YgO9lU%2BSyOubkr9aKZfckhS%2B86XL82qS4ZM%2BNDlQlBomNONCXeJEiNysqm7Epra9oAp2OHr9ZCucgS3hn%2FR4%2B%2Ff0E&X-Amz-Signature=37469b4c6e3ba2362738b0cdf283beb74984a217c7eb96e3154fe9939f30157d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
