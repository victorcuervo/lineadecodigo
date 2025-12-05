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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQMJZED%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB0YJEngRGdSwEeBvjHUyQCOOjZWPg9zo6EnT28sMKBAiEA443MsiVQLpgxjGk2g3%2FCBXOiwnz3oNRUMMN0FkWLOzYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGzRrHPv6KA9HPi2nCrcA1NCaLWyWGRu2nT7iI80qeeQJ6w7dMziqQOTDw90fPSPpcdkKlwj0lE6r3uR7Gt369v862dU3DUeo2EH3xIyozUqyR1cHsJVQY4MQc3iDzYP%2Brgc53aMLmxhbg5cYznUWffZXiRjnTMZubj3igTZt70oXZpX4yt%2BXSS19yviQbEdbB%2B7T0cmflL%2Bdm8LQOMSJakiHQDfijzF%2FtYHMuvRgxqGQPBeYKVGlNVlr6qz6Gu7U2y1bADo56IFmhImPsF6Lncd6yAg8NkljOxxM2SggAoPWcKH4MBHrH8PgvIOTiW2fik%2F9gMRUYYcIrigp2nX9dB972Ni5fj%2BN94B38T118r6P9MjyWMi1ncUbWDima83QQ0SqE5TXaR8nkY%2F7rw74lYl2VmEhJL0az41vyzrYgF8YVr%2BhftGhlGgNQTTQMcjqnYlUc16j0MTVS2W7kZxs9ZU%2FZKnDlFMHbFDIpYh%2BWKUMC2q2gw%2F4q6ao838GUYXSqRYPFWMQ5FrMtaPF%2BG%2FZ0QPvESdUsJKvAZcZK9QzinPmuknz%2BUvYFgHHZVSDYzKWA4qTKUaxmlxOS%2FbfHnK0WDuUXkXAL1zvECgthPMomoflH%2F6gnZt5%2BBh0xzU0gxS0u8G7TaKd4CZnYl%2FMNjmy8kGOqUB4FnGey%2BKatCYYQjixO0pgTutFSUIct%2ByXM3FajO1plEkHQo8xKnT7i4pfUogMjUHHMMh1oPDqNwEuyJUan4wxKVMa%2BGz6IPj6JPP6uL93tp51v%2BnSkCIAzNsvkUc%2FsU79aXfYHoAkFNJrFq59B2hMj0hvspeR7QPk6GmqSTn%2BMbPCwgLa19LWc3vtUKtAyCpzmgJ7EcR3ZsjpGP%2BAsrrYBCrgLRx&X-Amz-Signature=6bb178a8c7a44bef47172523486edab69534acd0002a1e33fa74caa7285e8f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQMJZED%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB0YJEngRGdSwEeBvjHUyQCOOjZWPg9zo6EnT28sMKBAiEA443MsiVQLpgxjGk2g3%2FCBXOiwnz3oNRUMMN0FkWLOzYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGzRrHPv6KA9HPi2nCrcA1NCaLWyWGRu2nT7iI80qeeQJ6w7dMziqQOTDw90fPSPpcdkKlwj0lE6r3uR7Gt369v862dU3DUeo2EH3xIyozUqyR1cHsJVQY4MQc3iDzYP%2Brgc53aMLmxhbg5cYznUWffZXiRjnTMZubj3igTZt70oXZpX4yt%2BXSS19yviQbEdbB%2B7T0cmflL%2Bdm8LQOMSJakiHQDfijzF%2FtYHMuvRgxqGQPBeYKVGlNVlr6qz6Gu7U2y1bADo56IFmhImPsF6Lncd6yAg8NkljOxxM2SggAoPWcKH4MBHrH8PgvIOTiW2fik%2F9gMRUYYcIrigp2nX9dB972Ni5fj%2BN94B38T118r6P9MjyWMi1ncUbWDima83QQ0SqE5TXaR8nkY%2F7rw74lYl2VmEhJL0az41vyzrYgF8YVr%2BhftGhlGgNQTTQMcjqnYlUc16j0MTVS2W7kZxs9ZU%2FZKnDlFMHbFDIpYh%2BWKUMC2q2gw%2F4q6ao838GUYXSqRYPFWMQ5FrMtaPF%2BG%2FZ0QPvESdUsJKvAZcZK9QzinPmuknz%2BUvYFgHHZVSDYzKWA4qTKUaxmlxOS%2FbfHnK0WDuUXkXAL1zvECgthPMomoflH%2F6gnZt5%2BBh0xzU0gxS0u8G7TaKd4CZnYl%2FMNjmy8kGOqUB4FnGey%2BKatCYYQjixO0pgTutFSUIct%2ByXM3FajO1plEkHQo8xKnT7i4pfUogMjUHHMMh1oPDqNwEuyJUan4wxKVMa%2BGz6IPj6JPP6uL93tp51v%2BnSkCIAzNsvkUc%2FsU79aXfYHoAkFNJrFq59B2hMj0hvspeR7QPk6GmqSTn%2BMbPCwgLa19LWc3vtUKtAyCpzmgJ7EcR3ZsjpGP%2BAsrrYBCrgLRx&X-Amz-Signature=e939bf51d89f9c01b1d344bf3f2eb5472741d1590b74cd7d494ae9bdfd0b845b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
