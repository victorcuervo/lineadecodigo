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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GALXN43%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsorBOhvBp63kAYS7x%2FoRZJDBnkC2Cp47%2B1xRC2iK0BAiBQ4M3KTA4JYJO0anxBZ7cwLjsmko4Yp9ekTuZHcQDh4Sr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM8n5EivEGgYQS%2BRazKtwDN7oQZmjFcpBFPksQRJpeVF6Ij9pZYsDJqKJXs2Z9Nf23NNukdMEv9MyTuWy2Kq0e6qMxjQQXKd9ECNnp%2FaK6thtyFlrQ2Q52ekzE7cfyhUJYv%2F8pZJLRVdwL%2FUfJSNDf2Ha8Qt0qU9dCaa33%2FxYsWQsDIyS%2F8C1ZB6p1y8tZIIlUVEcvFGa%2Fgb6q4uFxo%2FYHWftrxW5tC4aKHkBuEeC5Ju0Z6jkmlqqnt%2BiLK8oRuhPGncYX83DDk4SKoJmvW0koE6WKDNySSEeRydeL83Z5%2B9a%2Bm5Y0uDMgYhYRZ80%2FIQt0ZGiXN7%2BS7Xl9%2F8CjMDZ23ua12f8y3YIrq5TTkXed5y35WUScyrRLmoCnqr5idTpqkMsm0FEhztiGQOwoFdLL5N1ji8wHE%2Bc0b9DPMN%2Fo8D9PAa4NOWq0eyMKYWVr5huKXreX3xtqG%2Bclt3iDft854irXIg1GtnUqFEdTkxPeTpZM4aW35aE6AuOGsvEBSBeJ24TlMejpAIW4nxBxLQSc4%2FJOquTItQ%2BGVO68pycQ0ZVHUQWdAb91Q2HQ1I4v5ECgzfyBOwnQldBfRWpHLFFUfZEi5HENdN3XYavkjIpDtFlzteUWoyrwo2k1xi0LG0YbAkGd6KoVR57gMTUwmKqKygY6pgGZHUjwEwNNHm7m%2BZkZPHFUQJjJ3itkdpZS5VU7ZoKfQ%2BlG4Rd6EQaMFGp0TTdcCY%2FKEZ3yUdTWpEQlykm2saVInFQMPZP0eCoEjT66qM9hqooJuZSi3rVZMqOrec4WtYCVv4SY3HAfGAUYcKQKWbYupo1juZmN9aqJIa9mXDiYgkRw6v1dwNHzd4lzHre9k%2B7rzKtAEUr59NIiON5NK3cEtDPpRf%2FK&X-Amz-Signature=91dce923c85ea3ded6180285bd0ebcf68bff5e3ba613cfbbf15157bdeb06be61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GALXN43%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsorBOhvBp63kAYS7x%2FoRZJDBnkC2Cp47%2B1xRC2iK0BAiBQ4M3KTA4JYJO0anxBZ7cwLjsmko4Yp9ekTuZHcQDh4Sr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM8n5EivEGgYQS%2BRazKtwDN7oQZmjFcpBFPksQRJpeVF6Ij9pZYsDJqKJXs2Z9Nf23NNukdMEv9MyTuWy2Kq0e6qMxjQQXKd9ECNnp%2FaK6thtyFlrQ2Q52ekzE7cfyhUJYv%2F8pZJLRVdwL%2FUfJSNDf2Ha8Qt0qU9dCaa33%2FxYsWQsDIyS%2F8C1ZB6p1y8tZIIlUVEcvFGa%2Fgb6q4uFxo%2FYHWftrxW5tC4aKHkBuEeC5Ju0Z6jkmlqqnt%2BiLK8oRuhPGncYX83DDk4SKoJmvW0koE6WKDNySSEeRydeL83Z5%2B9a%2Bm5Y0uDMgYhYRZ80%2FIQt0ZGiXN7%2BS7Xl9%2F8CjMDZ23ua12f8y3YIrq5TTkXed5y35WUScyrRLmoCnqr5idTpqkMsm0FEhztiGQOwoFdLL5N1ji8wHE%2Bc0b9DPMN%2Fo8D9PAa4NOWq0eyMKYWVr5huKXreX3xtqG%2Bclt3iDft854irXIg1GtnUqFEdTkxPeTpZM4aW35aE6AuOGsvEBSBeJ24TlMejpAIW4nxBxLQSc4%2FJOquTItQ%2BGVO68pycQ0ZVHUQWdAb91Q2HQ1I4v5ECgzfyBOwnQldBfRWpHLFFUfZEi5HENdN3XYavkjIpDtFlzteUWoyrwo2k1xi0LG0YbAkGd6KoVR57gMTUwmKqKygY6pgGZHUjwEwNNHm7m%2BZkZPHFUQJjJ3itkdpZS5VU7ZoKfQ%2BlG4Rd6EQaMFGp0TTdcCY%2FKEZ3yUdTWpEQlykm2saVInFQMPZP0eCoEjT66qM9hqooJuZSi3rVZMqOrec4WtYCVv4SY3HAfGAUYcKQKWbYupo1juZmN9aqJIa9mXDiYgkRw6v1dwNHzd4lzHre9k%2B7rzKtAEUr59NIiON5NK3cEtDPpRf%2FK&X-Amz-Signature=dc8125735ecabf58ccfff01a9aaada8bd2df204a49e85a1036b540c378915a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
