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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG5LDOE6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeqmEivadt4hOTUHgwqcgw7HPGYbZMMyqT5CXwEIm%2BAgIgY86MWY5ldUX7FB%2FaI%2F9iDj8HIME%2FOmnxY1o4prygLpUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDE1AuOrwQr1uB56ONyrcAzVXm2zOcZCpxrlPupp6Wn1LTNYHiU1TXAJBHLyiJRorkm5SsxeFjAzkw22nMkOaAR4YoFope%2BDMoffCoj4UFVhh9YnOPHgx52KMyQxWOa5kDNnNLb31OLHZUP7qS%2FehcwB94PMJ%2FSDu1swGAWpXbXBsSADR0mYZKQQsBCYnYgZqtNdQ1KobvwCWFEPvhgPh1thFw1HtAjoRYNlxztIefC2%2BN%2F1qVM2FyYSPzCXT%2BknK3BHAvh4ipqGsfaL0wKoeADi5MKiXkI5d93rVhSwm%2FdPL1zjghJdFunQlLrRWasGFWcUoCSfEmd2oqEzp7QWvh6lIL67u8Gon6fnSvRqhfeom1w0GO8hZFbJi9p3H42y%2Bsy4oz68t8xyzsmUfTkHtmaU1InAxkWP0ADBOQVYlgqUIgaDi9oaU%2BJIG7qKmj%2FES6bJwdat6R%2FFDKFCNuLnvcEhghrCTxjz2kPXTOA9wmaq%2FF184kRPGwybRLNbFQSQvczdYLA8Z55PIf%2FHCYsbpDodl2JmDmr9LmQ8LYGKVk8GJFEVBKqlAAb3LZk%2FanyPczs%2FwOMUZpxg0WRSbUH1%2BFmuFZa%2F04qwoPRbwJu3n%2F9Kl7wxACL35GdzD6Wi%2FWny%2FWCogLIqpAIpwCG4KMJ7iy8kGOqUBsqK1ulm33Lr1jtSWw4VPRvwhP4E4y7uYZazHAHFaCFz8DpNiEDqRRE%2Bu2ZO%2BpAMj%2FcB91sykRAhx5LzChouaz%2FAdcEdfUTLZQ%2BtEGrYn2N418ZwR0KjkhKDs5KeePOo8ksEOZ7gQ1T5t%2FC%2FEUciM8pCu83psoVlyDYksvtmhYB1Q5%2BpwUYQcNlOddmA6m7daVc4tYSpOi6ZSeLm2X%2BTSRL3yBp3B&X-Amz-Signature=587495b1558d758f03724f939f487de946ea1486faa7c0891b4402927104a544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG5LDOE6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeqmEivadt4hOTUHgwqcgw7HPGYbZMMyqT5CXwEIm%2BAgIgY86MWY5ldUX7FB%2FaI%2F9iDj8HIME%2FOmnxY1o4prygLpUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDE1AuOrwQr1uB56ONyrcAzVXm2zOcZCpxrlPupp6Wn1LTNYHiU1TXAJBHLyiJRorkm5SsxeFjAzkw22nMkOaAR4YoFope%2BDMoffCoj4UFVhh9YnOPHgx52KMyQxWOa5kDNnNLb31OLHZUP7qS%2FehcwB94PMJ%2FSDu1swGAWpXbXBsSADR0mYZKQQsBCYnYgZqtNdQ1KobvwCWFEPvhgPh1thFw1HtAjoRYNlxztIefC2%2BN%2F1qVM2FyYSPzCXT%2BknK3BHAvh4ipqGsfaL0wKoeADi5MKiXkI5d93rVhSwm%2FdPL1zjghJdFunQlLrRWasGFWcUoCSfEmd2oqEzp7QWvh6lIL67u8Gon6fnSvRqhfeom1w0GO8hZFbJi9p3H42y%2Bsy4oz68t8xyzsmUfTkHtmaU1InAxkWP0ADBOQVYlgqUIgaDi9oaU%2BJIG7qKmj%2FES6bJwdat6R%2FFDKFCNuLnvcEhghrCTxjz2kPXTOA9wmaq%2FF184kRPGwybRLNbFQSQvczdYLA8Z55PIf%2FHCYsbpDodl2JmDmr9LmQ8LYGKVk8GJFEVBKqlAAb3LZk%2FanyPczs%2FwOMUZpxg0WRSbUH1%2BFmuFZa%2F04qwoPRbwJu3n%2F9Kl7wxACL35GdzD6Wi%2FWny%2FWCogLIqpAIpwCG4KMJ7iy8kGOqUBsqK1ulm33Lr1jtSWw4VPRvwhP4E4y7uYZazHAHFaCFz8DpNiEDqRRE%2Bu2ZO%2BpAMj%2FcB91sykRAhx5LzChouaz%2FAdcEdfUTLZQ%2BtEGrYn2N418ZwR0KjkhKDs5KeePOo8ksEOZ7gQ1T5t%2FC%2FEUciM8pCu83psoVlyDYksvtmhYB1Q5%2BpwUYQcNlOddmA6m7daVc4tYSpOi6ZSeLm2X%2BTSRL3yBp3B&X-Amz-Signature=d2d596f8ce1941da580a8946cb1c6ab04bbd0fca93282e339dd7583a24c87fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
