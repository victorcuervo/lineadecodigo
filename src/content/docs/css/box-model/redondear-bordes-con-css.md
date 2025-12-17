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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPF5RHE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR6fV56leJ%2BXFuKMXoDjZezPQHGcucaTrlLcgNFZ4i2wIgFKq41tqpd6yVpr0uQvejd7gu9sd%2Fr5UlyR9z0CMyLfAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDI83MSUENdQmDYSl6CrcA%2FMfDE8pxBeLrJfhymmvBIsq9RCNbHKPl8shZMZPY3jr4uLQwLkCmkNHqEOatQ08iid9MPAKn4jKDPKnI9C6xu9uyIgDGjtUb9CDb%2FUe%2BoYqKj9RDiN2cB4SEie6tljmWQfBUA6gxZ8BTMwygKgRI4zusc%2FI2L7ITIVIOparX%2B3YFkHFUJBskjbg%2BsEFArZ0mMYdrqmrutbIsZAhS%2FitlOks8UJRX9miQOTdkeDDFz7%2FqOQlQBevYt1kO%2BVkuGzW461TdCsLF4hYiyAGupCdcSrCbBlbbQWF2pwWsozN1vik7aEdMb6xZjiMNNwYMCcB5T1ELLA%2Blx7aSR%2Bpjkffb%2BEoNBvGOVMZ654pZvpK%2BYep5TMk%2FzRlJBzZD8gw9w2YXWaTHt1MASfo3rR4SyLegJWrdLtHn5jLx0nIjUgF3YB1ojBU%2BXVVOLlPrewAyFcc1f7b%2FGnCcTPvlLmRXTcSvXlOFBQaRcvTJC1FKzUt8WDVuxAa4SsmZBC4enA64MNsJyoh1jKh7NaygyH%2Bz1Q1FGOl5fYWWyCICW62d1%2BPzgkRAnRiTWFxV%2BXZ3TqvKYuK0W0A6vyumpIajlplDOc0nc4Uxuzu7n9Q%2Bo3i9l63TK%2FI3fkMevH9CE1XrozCMPSdicoGOqUBBfXEYN4VGWSRVesLxTK8ru92ljjRY8BIqRRVtRPaOGYfGaw4tNBZAu7Kf3qLv7wg3cxKAc9sKFKLkxXVAMcscV3Zg5DWilc8M%2Bkdlo0sLy8oIckNmSmocKKVbAgkWHcB%2FD%2BXK%2Bv7bNVInjxUx%2Bg6IUa%2FCHk09%2FT3aMK93zZsuJ7A0tRU3eBSh3b16c2IFi1%2FPlsWnqQnMssje2gsGjO9juy3AQ%2Fj&X-Amz-Signature=c221e7c3928e7258580ae2a4ef4ef81b39f500d477c6027fdf8306c0ce177d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPF5RHE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR6fV56leJ%2BXFuKMXoDjZezPQHGcucaTrlLcgNFZ4i2wIgFKq41tqpd6yVpr0uQvejd7gu9sd%2Fr5UlyR9z0CMyLfAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDI83MSUENdQmDYSl6CrcA%2FMfDE8pxBeLrJfhymmvBIsq9RCNbHKPl8shZMZPY3jr4uLQwLkCmkNHqEOatQ08iid9MPAKn4jKDPKnI9C6xu9uyIgDGjtUb9CDb%2FUe%2BoYqKj9RDiN2cB4SEie6tljmWQfBUA6gxZ8BTMwygKgRI4zusc%2FI2L7ITIVIOparX%2B3YFkHFUJBskjbg%2BsEFArZ0mMYdrqmrutbIsZAhS%2FitlOks8UJRX9miQOTdkeDDFz7%2FqOQlQBevYt1kO%2BVkuGzW461TdCsLF4hYiyAGupCdcSrCbBlbbQWF2pwWsozN1vik7aEdMb6xZjiMNNwYMCcB5T1ELLA%2Blx7aSR%2Bpjkffb%2BEoNBvGOVMZ654pZvpK%2BYep5TMk%2FzRlJBzZD8gw9w2YXWaTHt1MASfo3rR4SyLegJWrdLtHn5jLx0nIjUgF3YB1ojBU%2BXVVOLlPrewAyFcc1f7b%2FGnCcTPvlLmRXTcSvXlOFBQaRcvTJC1FKzUt8WDVuxAa4SsmZBC4enA64MNsJyoh1jKh7NaygyH%2Bz1Q1FGOl5fYWWyCICW62d1%2BPzgkRAnRiTWFxV%2BXZ3TqvKYuK0W0A6vyumpIajlplDOc0nc4Uxuzu7n9Q%2Bo3i9l63TK%2FI3fkMevH9CE1XrozCMPSdicoGOqUBBfXEYN4VGWSRVesLxTK8ru92ljjRY8BIqRRVtRPaOGYfGaw4tNBZAu7Kf3qLv7wg3cxKAc9sKFKLkxXVAMcscV3Zg5DWilc8M%2Bkdlo0sLy8oIckNmSmocKKVbAgkWHcB%2FD%2BXK%2Bv7bNVInjxUx%2Bg6IUa%2FCHk09%2FT3aMK93zZsuJ7A0tRU3eBSh3b16c2IFi1%2FPlsWnqQnMssje2gsGjO9juy3AQ%2Fj&X-Amz-Signature=21f4379584f951963fe4a13b3200eac202c2708c9f8e75bd4b7cdb92ad9b552e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
