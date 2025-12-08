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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVUL5NR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOpNosDXI7HTE4YSXjqem6DiDUqxsey9kTyFnLiIwq3AiBlgATRopVyDrQ3smh7%2Bzh6gTMFQwLMWotNcHWz1sx3ESqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdgi%2FeFA%2BBEgb4FVIKtwD%2F%2BkBYHs4ySeSzsugZtL8Iq%2F2aR9fEWLryzXq%2B4PQKlDL8aVcD1Ff4Vmy8Y7bI0tNkkvEjYrkn0lf6jNO9Wvc92bVXoExs32ODBAphsigOYbXSpqM%2FLwcsLIfoE%2FN9d29s6aEnJf2g6Pk6ufArEUQsrRXJQORck6nFWQ2Pz7TDAgib67C3sdLB2QdPgSe9QnEymkgJOfKZYKhVwLOnkQS9ok5Z5%2Bq%2B1O3xN5Enf5fSypEKCBA7QHmJ0YQocEMjn1dJkXQoTJvSFtsdvquWiLoJzeU9tsrrepHogq39FEtrQ1qxTMj%2Bsa%2BxxQgUC%2BN8Ze7qTm4zP5xYa%2BLeNaXG2K7t56FRJxKTpq03uFZcqM%2Fci9g15M899YB7e06VWLGCIaIUl626WYGHE8ztkAH9I8cxQCWshvrZp5UlMG8Nrx5sIVWKk%2Blz1BE3BbY%2BxmA28we0dA87YX%2Fdm4iimAloj5QzCovWf9VuiHxPqj6zw99YSCMmajClfj8DIeFD88l2XVqZBIS2YI%2FHQcq09PLpjWscWShSZJTy7ZOIfdstcNGpRTJhyUtGw%2B6WGjk6y2RBad7nuI5RwS2rMAVyc72LzanXvurXJcEs6Cdl1aZtsDHuY4%2BqsSmtJtc%2B8FDg9Yw2pTZyQY6pgHmxw7a4CZS%2Ftuc0oQlVcKhcCSa%2Ftf81e0sx1IHkrVvYalC5CJtPrROtn9HPUAN9omcf5FkNi4ocJmEnXASIhRP%2FmyfQM8Oe0pFjNyO%2Bar1vz0ADmxrNcRY61eD6%2FmmzsL4rmkyEq1Zx5GPs%2BiuGKnGi57DhqPL%2F%2F3cl0yw%2Br0CgvBeR4xnVV6u85zNy%2FtJjgJFV0rLj5j72FEcGbMA7f4cxn%2FfCeTg&X-Amz-Signature=de17326737b1ee18e31ac17a75b9dd77e770eb419621c2264f81b1cea0ec5a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVUL5NR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOpNosDXI7HTE4YSXjqem6DiDUqxsey9kTyFnLiIwq3AiBlgATRopVyDrQ3smh7%2Bzh6gTMFQwLMWotNcHWz1sx3ESqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdgi%2FeFA%2BBEgb4FVIKtwD%2F%2BkBYHs4ySeSzsugZtL8Iq%2F2aR9fEWLryzXq%2B4PQKlDL8aVcD1Ff4Vmy8Y7bI0tNkkvEjYrkn0lf6jNO9Wvc92bVXoExs32ODBAphsigOYbXSpqM%2FLwcsLIfoE%2FN9d29s6aEnJf2g6Pk6ufArEUQsrRXJQORck6nFWQ2Pz7TDAgib67C3sdLB2QdPgSe9QnEymkgJOfKZYKhVwLOnkQS9ok5Z5%2Bq%2B1O3xN5Enf5fSypEKCBA7QHmJ0YQocEMjn1dJkXQoTJvSFtsdvquWiLoJzeU9tsrrepHogq39FEtrQ1qxTMj%2Bsa%2BxxQgUC%2BN8Ze7qTm4zP5xYa%2BLeNaXG2K7t56FRJxKTpq03uFZcqM%2Fci9g15M899YB7e06VWLGCIaIUl626WYGHE8ztkAH9I8cxQCWshvrZp5UlMG8Nrx5sIVWKk%2Blz1BE3BbY%2BxmA28we0dA87YX%2Fdm4iimAloj5QzCovWf9VuiHxPqj6zw99YSCMmajClfj8DIeFD88l2XVqZBIS2YI%2FHQcq09PLpjWscWShSZJTy7ZOIfdstcNGpRTJhyUtGw%2B6WGjk6y2RBad7nuI5RwS2rMAVyc72LzanXvurXJcEs6Cdl1aZtsDHuY4%2BqsSmtJtc%2B8FDg9Yw2pTZyQY6pgHmxw7a4CZS%2Ftuc0oQlVcKhcCSa%2Ftf81e0sx1IHkrVvYalC5CJtPrROtn9HPUAN9omcf5FkNi4ocJmEnXASIhRP%2FmyfQM8Oe0pFjNyO%2Bar1vz0ADmxrNcRY61eD6%2FmmzsL4rmkyEq1Zx5GPs%2BiuGKnGi57DhqPL%2F%2F3cl0yw%2Br0CgvBeR4xnVV6u85zNy%2FtJjgJFV0rLj5j72FEcGbMA7f4cxn%2FfCeTg&X-Amz-Signature=88e4786cd29478d24effa44bd176211618f56aeb44310399db394b0018457fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
