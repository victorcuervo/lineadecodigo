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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H7SNZSQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgP4j7kUJNm%2BC4ZCa0%2B0yAjzrpjYabyNfs%2Fy6bowRtTAiBieDNmPf5bnk6yjtDv30Mi1iZeTOdw7pWEQNnRvxYYdSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMhfGgCcNgCiRoOo2VKtwDOXVllWHmZFRrzMP1lAKEP55LhHRtgHzb2qbW74BAU1FmwKbNfCH9OOeKlam41nRjX57NxfgJ5JOQB2LlBBvWXNpDjzpdTJK8oEqkP4wMp707ceXZ6zf7GeLjOzW7rc3WevRJBfNuFWwcU8UYS1WsUC3xea3E2NTGWYysdFenvO7fBc%2BGRWXkd3hG0dPHw8pwlqDTQRpZXlmjuRh4ybR3j51gRR39HUGyJ0uVIDSyfw8EPFxBwLPYbiR%2BIuyQfNyE54xT7DVj4cQcHx62yNVCHjR4oy1owIJ6Ui159Eaq39zXHDA1DAiOoXb%2Fcsf07WMKaX4np0cZVcy0pQ9uEqdLiEw26vA6JMi%2B%2B%2BqLD3dhU3s1oFUQFv%2Bii1PmwtrrI%2BUEWPQApW%2BAKw%2FtuHsBTnHBf%2BjmNJIFuVwmnEdmM9EDLhcDtkiJNygy1i0nnA2sDN543Ktxpb%2FoE%2BJmayTve57b6nPWIBYbWUk8Yfpm0NOpG%2FYk%2B2LqncaKxuvwgowjKt7Bmor6qA%2FMkdYSOveylH97IAMDMmlziGob4kpK7H6LND4KQaPqPRBHWC2MgYBWZH4cyzSJSIWH4PI6eiKzpDdTxp3exwIW%2BAut6yS73cI40C21HqmfNGnWnlV%2BJKUwvIzIyQY6pgGAqcgietyfW%2B4iDpToNxJnTVn77EJso%2BS0GVUdmf%2BXV980%2FP6x%2FzlyIU%2BWn2f3evRI2Te7X7z09uWdzcP31Tw0WQshooGq1xuMIUJt8pWti8Qchj%2Bqhj4G5IgloHFCA41zC%2FKXY6Xuirs8SPT0wqXyKwpGiy9Q9lFRlLJ6PPrl%2BkNLcS10Q0Q%2F4VWMpKYymAquV26LMFaPlP2HEbFBlm2tcufsuOmP&X-Amz-Signature=029445c5036726f7c4b9b407aa2d1f7f641b2ffd4377845d3a283557d246eaf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H7SNZSQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgP4j7kUJNm%2BC4ZCa0%2B0yAjzrpjYabyNfs%2Fy6bowRtTAiBieDNmPf5bnk6yjtDv30Mi1iZeTOdw7pWEQNnRvxYYdSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMhfGgCcNgCiRoOo2VKtwDOXVllWHmZFRrzMP1lAKEP55LhHRtgHzb2qbW74BAU1FmwKbNfCH9OOeKlam41nRjX57NxfgJ5JOQB2LlBBvWXNpDjzpdTJK8oEqkP4wMp707ceXZ6zf7GeLjOzW7rc3WevRJBfNuFWwcU8UYS1WsUC3xea3E2NTGWYysdFenvO7fBc%2BGRWXkd3hG0dPHw8pwlqDTQRpZXlmjuRh4ybR3j51gRR39HUGyJ0uVIDSyfw8EPFxBwLPYbiR%2BIuyQfNyE54xT7DVj4cQcHx62yNVCHjR4oy1owIJ6Ui159Eaq39zXHDA1DAiOoXb%2Fcsf07WMKaX4np0cZVcy0pQ9uEqdLiEw26vA6JMi%2B%2B%2BqLD3dhU3s1oFUQFv%2Bii1PmwtrrI%2BUEWPQApW%2BAKw%2FtuHsBTnHBf%2BjmNJIFuVwmnEdmM9EDLhcDtkiJNygy1i0nnA2sDN543Ktxpb%2FoE%2BJmayTve57b6nPWIBYbWUk8Yfpm0NOpG%2FYk%2B2LqncaKxuvwgowjKt7Bmor6qA%2FMkdYSOveylH97IAMDMmlziGob4kpK7H6LND4KQaPqPRBHWC2MgYBWZH4cyzSJSIWH4PI6eiKzpDdTxp3exwIW%2BAut6yS73cI40C21HqmfNGnWnlV%2BJKUwvIzIyQY6pgGAqcgietyfW%2B4iDpToNxJnTVn77EJso%2BS0GVUdmf%2BXV980%2FP6x%2FzlyIU%2BWn2f3evRI2Te7X7z09uWdzcP31Tw0WQshooGq1xuMIUJt8pWti8Qchj%2Bqhj4G5IgloHFCA41zC%2FKXY6Xuirs8SPT0wqXyKwpGiy9Q9lFRlLJ6PPrl%2BkNLcS10Q0Q%2F4VWMpKYymAquV26LMFaPlP2HEbFBlm2tcufsuOmP&X-Amz-Signature=7bdd46aec2efad1dacfc3aea3497f7f55ccb86144034587478c9e7b855c197f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
