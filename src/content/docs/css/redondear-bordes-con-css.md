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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2SS2UY4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2RqEwU%2FjY4EtCfZ3%2BO7o89F15PoYle1tvItuZTRrpFAiBZW217bupGd5FV%2FfnlxBVN3qEPMEOQ1z86sjuVVW8rLSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsloOB5LGk84rukf0KtwDKlFiEJlhN5%2FoeQMr9u9ZuSOhExU2YWRMjLrZUwJV4DHiD6APcgCAJfuqFJGMo%2B6t1sJQ5Js%2Bo2QiMoeHUG1YuXHa8TNErtAavKzy%2Fna3mlKyK9z4WNpWce4SyWDNyBju7vmv0sM9ALSiM8a%2FMOr0AqbwRaVheDID7JPgXdMZUvnpdzslwYp86Dqe8tigM8fOm0OWPg%2BK%2BMrsiIUROymXBhwoIBh%2BF2dZRDsji7zXqPVJkGuSWZZLJ9a8XkOWK1335x%2B317OM%2BRsQMN2wKD0aVr7oRAbdAix2FgECBzvmn7uqYb%2BPtemttKuE83gH6lpyFTxjqV4HKmD67UDzjpn8eruPKdQnuWhkNwb2eVYX5AQxsQATly4%2F4GDC2X5FDO6BBgnvNLEPRlZIRKAT0%2BCWAfkMinUqkZKLdbkd6Y7m1OENG23Ka0zXeIHs4%2Ftkn3eQM6uDM3m3t6viatd3JXLyB42nt5aySxIPVkxhnv0Q1snJDSszbleotRLyNEHZUKE5FrHGF4vP1c4VhSBwbQZ3l%2BWLVO5FiWVm13RRCk529QX1RlvIf4CgD0oaGJ5%2FH9xvM9VqlgxXDRhjloOTm4In332Lub%2FUore2Imcv29O80%2FsJpqUtaj3dGvEcAIIws6bQyQY6pgHW6IseG7CQ6oeoAAAC%2BIK%2BLt%2FNSWmks%2Fc3mIA3DGjhOK%2FauTl6nr7%2Bg%2FJiLQNG6gHS3UYw0VC2vXY1nd%2FebAgQozP1qYHdNmO5M31VS%2F59N3FOvQ%2BICeIRtUKqKSKo7oSiLz5F0uIxRZnWjpWs1qfXJMZRtZusI2r%2FmKznkkJd8qhKJ8meAQzI5fIp6PcXFP2rFd2kM8mDT3nnUxQ2NKyJs%2Fg%2FaGjL&X-Amz-Signature=56ccca58ccb9ffdbcfb5b7b86d1a8b4773f7bc64e7de2ac9f64813e40ef4f92d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2SS2UY4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2RqEwU%2FjY4EtCfZ3%2BO7o89F15PoYle1tvItuZTRrpFAiBZW217bupGd5FV%2FfnlxBVN3qEPMEOQ1z86sjuVVW8rLSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsloOB5LGk84rukf0KtwDKlFiEJlhN5%2FoeQMr9u9ZuSOhExU2YWRMjLrZUwJV4DHiD6APcgCAJfuqFJGMo%2B6t1sJQ5Js%2Bo2QiMoeHUG1YuXHa8TNErtAavKzy%2Fna3mlKyK9z4WNpWce4SyWDNyBju7vmv0sM9ALSiM8a%2FMOr0AqbwRaVheDID7JPgXdMZUvnpdzslwYp86Dqe8tigM8fOm0OWPg%2BK%2BMrsiIUROymXBhwoIBh%2BF2dZRDsji7zXqPVJkGuSWZZLJ9a8XkOWK1335x%2B317OM%2BRsQMN2wKD0aVr7oRAbdAix2FgECBzvmn7uqYb%2BPtemttKuE83gH6lpyFTxjqV4HKmD67UDzjpn8eruPKdQnuWhkNwb2eVYX5AQxsQATly4%2F4GDC2X5FDO6BBgnvNLEPRlZIRKAT0%2BCWAfkMinUqkZKLdbkd6Y7m1OENG23Ka0zXeIHs4%2Ftkn3eQM6uDM3m3t6viatd3JXLyB42nt5aySxIPVkxhnv0Q1snJDSszbleotRLyNEHZUKE5FrHGF4vP1c4VhSBwbQZ3l%2BWLVO5FiWVm13RRCk529QX1RlvIf4CgD0oaGJ5%2FH9xvM9VqlgxXDRhjloOTm4In332Lub%2FUore2Imcv29O80%2FsJpqUtaj3dGvEcAIIws6bQyQY6pgHW6IseG7CQ6oeoAAAC%2BIK%2BLt%2FNSWmks%2Fc3mIA3DGjhOK%2FauTl6nr7%2Bg%2FJiLQNG6gHS3UYw0VC2vXY1nd%2FebAgQozP1qYHdNmO5M31VS%2F59N3FOvQ%2BICeIRtUKqKSKo7oSiLz5F0uIxRZnWjpWs1qfXJMZRtZusI2r%2FmKznkkJd8qhKJ8meAQzI5fIp6PcXFP2rFd2kM8mDT3nnUxQ2NKyJs%2Fg%2FaGjL&X-Amz-Signature=7c4d2481d32e243aec7e063e3ee70b80f432429916c0ea4144343cd25c8d6ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
