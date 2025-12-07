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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624GZIAYC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLawOpWJMqtjHaNnkQ9K42F1RzVaQdV8pfkuvA6Nmo6AIgFl1ooJLlpXlEdB6TH3tO8U7087dsYlR2IilEvGTNjvEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRYO6yNjULZI%2B0TZyrcAz85GCiBZrcapOhAAhU7%2Bmi6iwExrioEPjbTszZgAnXMczWHklJvxvYpzd1vdLl6E3jqT5UJhk0BtP10eLkKFqWIoXqprzoNJANuiS2On6ugPjIoEt1PLbKXm%2BdhdsoCfdYm3x9BrvqGy8ZELJFN263KBJJ%2BLQqYbjcAlwxCQkMndceDIXSJXqYV9KbtdzBC1XCq4BNPPRhd1sSQTN%2F5vfdcWc%2B1GQtX4vGDZ8OCqxZaKNm9iKzQ5JyhayYwDlN6E%2FnZIgwOM07UhRdAqmYPNhfj8ZIytEjAlinNKHsjNA9xWvedCXXhXdsAvlqYcjCY8LNSG29Hj4CjbeStTj%2Fs%2BlIDE1wuuO59Mhmj5%2Bjhk9drNXD5P2lQb9T9SIYYVwhKuW7GUrcChUFAlwDEvgz44DGDq7cDqh%2BKpFiGZhx6EuFgcegA13tvSY0OSKv4OjeLVd%2BAMAkzOBY7QXlphwW4kwU%2FuRbTxCSpeB1zVrzonYEhBX8OmKVvzSdJsyibZtsVsE57QdkOeIPCaJzvtLs%2FOfK0dXHhmgU8FjLe0wYxcTwDT6E66KQj4WXGoNcp17a5AGACZk%2FZZIsOs%2FJ3FBPIZVNJlrUF8sYt8OXnoSezUHIVWGfMO%2B4E40mzH%2FNAMMj90skGOqUB4QFCY1ZuT6fB2ZV7pMKRNn3k%2FTSIEShfLjQhUgLSAuShHv0xobCIynssEpiSJl3AlY2n1k4Ea%2FKaR8VL1OLCiSrST9VryMChrX7B3qcfLRytr1Z8lMR5U3zXoHvzA5B0YS32rhAMNo13SW9h%2FMilloku%2FddPbgzKgCX8l6fKtfX%2Bn%2FFdWC550suSX0%2F1ntLDHxgbQ%2B%2BXunVlMtuBZZQroco2Svqg&X-Amz-Signature=8bdc4ae4d4bb1f40d303acf56df58d30aaefea1c15421436b8892b78c5a7f072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624GZIAYC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLawOpWJMqtjHaNnkQ9K42F1RzVaQdV8pfkuvA6Nmo6AIgFl1ooJLlpXlEdB6TH3tO8U7087dsYlR2IilEvGTNjvEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRYO6yNjULZI%2B0TZyrcAz85GCiBZrcapOhAAhU7%2Bmi6iwExrioEPjbTszZgAnXMczWHklJvxvYpzd1vdLl6E3jqT5UJhk0BtP10eLkKFqWIoXqprzoNJANuiS2On6ugPjIoEt1PLbKXm%2BdhdsoCfdYm3x9BrvqGy8ZELJFN263KBJJ%2BLQqYbjcAlwxCQkMndceDIXSJXqYV9KbtdzBC1XCq4BNPPRhd1sSQTN%2F5vfdcWc%2B1GQtX4vGDZ8OCqxZaKNm9iKzQ5JyhayYwDlN6E%2FnZIgwOM07UhRdAqmYPNhfj8ZIytEjAlinNKHsjNA9xWvedCXXhXdsAvlqYcjCY8LNSG29Hj4CjbeStTj%2Fs%2BlIDE1wuuO59Mhmj5%2Bjhk9drNXD5P2lQb9T9SIYYVwhKuW7GUrcChUFAlwDEvgz44DGDq7cDqh%2BKpFiGZhx6EuFgcegA13tvSY0OSKv4OjeLVd%2BAMAkzOBY7QXlphwW4kwU%2FuRbTxCSpeB1zVrzonYEhBX8OmKVvzSdJsyibZtsVsE57QdkOeIPCaJzvtLs%2FOfK0dXHhmgU8FjLe0wYxcTwDT6E66KQj4WXGoNcp17a5AGACZk%2FZZIsOs%2FJ3FBPIZVNJlrUF8sYt8OXnoSezUHIVWGfMO%2B4E40mzH%2FNAMMj90skGOqUB4QFCY1ZuT6fB2ZV7pMKRNn3k%2FTSIEShfLjQhUgLSAuShHv0xobCIynssEpiSJl3AlY2n1k4Ea%2FKaR8VL1OLCiSrST9VryMChrX7B3qcfLRytr1Z8lMR5U3zXoHvzA5B0YS32rhAMNo13SW9h%2FMilloku%2FddPbgzKgCX8l6fKtfX%2Bn%2FFdWC550suSX0%2F1ntLDHxgbQ%2B%2BXunVlMtuBZZQroco2Svqg&X-Amz-Signature=2b1d72d911b8245cf2ebd63d29e4ed3047c8d6e53e9e2708bb90009ae11cd53a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
