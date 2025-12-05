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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MVUSMXH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1C5%2B%2BB%2FdFhZZaPXgmhuSq3bqu66ks9RVNrVtH%2BcGUcAIgOtfKEU0yky8B11pe23%2BKcf92Sfr5hRGBgkUH3lPpUg4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOkw9o%2Bp7Y5%2FGRlqACrcAwlWDqYZ4hXt9dQWaNsTbB%2F2U5KKARsxK4PEpA1f3OuxCsaeHGOdWlUwM3ohJ1WbZn4LXyrDLIqwL0juFNy%2BQAR0qgInsOjQ9aRwUoprHNUIY1XI07WBci71bZ1ftWXO8AFOySKK%2F3HJhR%2FnFrPkCBP1DncV9rFNXhGh7C0ZGiL6YgVbZO5VWL%2BBjDHZngcU0F%2BW3vH%2BLs4HCMbgtOwH%2BS6S3I1kaoAEWFK8P182F9%2BhT0LQ%2FytUpMWJgi2xBs%2F%2Fay5R9sdqCnYLt9cOHA28%2B42YsH4QEUAyvKb6syW6%2FJRg4OLHPtqQrXw5d0hqJsrbFUejh6BUqA4uqIAx1b6GXkKIfcW9Rnieo7IIpmQwIlEstUJTm%2BQKm6dkoovDbetpx3vDX1lexygDfR6VrjFWp0JufqZJnLoPPn9ljQSiABF3VSB91cAwdy7IMhHcp0CAArDNd3rZkMnk2%2BMggBTYe5%2BINnBFW6J%2FNaK8l24noYDn%2FUyKxU8g5Rv5AnXW7xf59e29UFy5hIR32BAMBdLdkW0jkwLgcjJ6rI64m9cfQFE31VTSBNjgkCdI1j8jVklGW0ZWOU%2FCRdN%2BxHQv%2FI3GgRdO5%2FDj17%2BVWIJRJ91d%2FPmwrbFIe1GgIph1Hm6JMJf4y8kGOqUB34XM7SXYc6v0gPA0cotHpqFgjyrvL%2BAcbqmAnompFXnO1KYu0QBja7kIODLrkcePXQDBN%2FBZS7wjcGoXJvshnv4hbV1vedcC1SdWqxRE5FStHPH015EBXFz9D2E%2F7FUrIj82u3MaIqJFv6UGmGUE5ECrQzj2NfKVuGYe5TBbjpF%2Fjq90MM%2F93rxvo%2BZ1m%2FU%2Ba%2FSwObfD5HjbSn%2BkF0LtrNv7KfHg&X-Amz-Signature=09455828a4812a12daef2e352c93f38bb2c7484dbef5a378354a4e0d4e15bd15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MVUSMXH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1C5%2B%2BB%2FdFhZZaPXgmhuSq3bqu66ks9RVNrVtH%2BcGUcAIgOtfKEU0yky8B11pe23%2BKcf92Sfr5hRGBgkUH3lPpUg4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOkw9o%2Bp7Y5%2FGRlqACrcAwlWDqYZ4hXt9dQWaNsTbB%2F2U5KKARsxK4PEpA1f3OuxCsaeHGOdWlUwM3ohJ1WbZn4LXyrDLIqwL0juFNy%2BQAR0qgInsOjQ9aRwUoprHNUIY1XI07WBci71bZ1ftWXO8AFOySKK%2F3HJhR%2FnFrPkCBP1DncV9rFNXhGh7C0ZGiL6YgVbZO5VWL%2BBjDHZngcU0F%2BW3vH%2BLs4HCMbgtOwH%2BS6S3I1kaoAEWFK8P182F9%2BhT0LQ%2FytUpMWJgi2xBs%2F%2Fay5R9sdqCnYLt9cOHA28%2B42YsH4QEUAyvKb6syW6%2FJRg4OLHPtqQrXw5d0hqJsrbFUejh6BUqA4uqIAx1b6GXkKIfcW9Rnieo7IIpmQwIlEstUJTm%2BQKm6dkoovDbetpx3vDX1lexygDfR6VrjFWp0JufqZJnLoPPn9ljQSiABF3VSB91cAwdy7IMhHcp0CAArDNd3rZkMnk2%2BMggBTYe5%2BINnBFW6J%2FNaK8l24noYDn%2FUyKxU8g5Rv5AnXW7xf59e29UFy5hIR32BAMBdLdkW0jkwLgcjJ6rI64m9cfQFE31VTSBNjgkCdI1j8jVklGW0ZWOU%2FCRdN%2BxHQv%2FI3GgRdO5%2FDj17%2BVWIJRJ91d%2FPmwrbFIe1GgIph1Hm6JMJf4y8kGOqUB34XM7SXYc6v0gPA0cotHpqFgjyrvL%2BAcbqmAnompFXnO1KYu0QBja7kIODLrkcePXQDBN%2FBZS7wjcGoXJvshnv4hbV1vedcC1SdWqxRE5FStHPH015EBXFz9D2E%2F7FUrIj82u3MaIqJFv6UGmGUE5ECrQzj2NfKVuGYe5TBbjpF%2Fjq90MM%2F93rxvo%2BZ1m%2FU%2Ba%2FSwObfD5HjbSn%2BkF0LtrNv7KfHg&X-Amz-Signature=c499b15e0193017d9c92790d259887fbdabb31815da10eb7e43893f4c56a5fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
