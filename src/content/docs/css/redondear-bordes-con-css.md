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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQ3JB5C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGt6KxZrre6nj4XrKIiTTGGqPn0Ck%2BioTAqJg7sPkDUgIgevD3ilZT%2FAM5NWu422Nbcoxksyiar%2F7ZT7EkvITmYQcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJn1yt3S%2FIVAbuub0ircA3FnMZQnLMSVrrkYt8e9vHu5GrE1TeFQwspdkOzc6jXa2XGMNHPj1I2odwqYaU%2BBYHimbQ4bh3MRG5xUzYo6yILAza%2Fk69QhBrkXF%2Fl%2FsT3vQVIufI62DbHVnbXhtr4VSlmp15Yt%2BPoKWYrdovQA60vkP0azZbC%2FOGyO4giUjOjT5enNKXPeL1sYO9ECRJ6PJOe%2F4n%2FpQsNo%2FiMJXWzWlwUWMf2vn6WXpeg%2FaWAaxTXmiGg7Bn5LsuzTfOQQWMoO4YVehFgMPY4cHN%2BPgRcxboRk2XcQkuTA5XuwQF8bBvcd%2F%2Fw8TFk0A2uaLNPH72QvXt0QRmW0V4386ysOi6hkwme%2Fa%2FFptbD9bZHrXFEDw3gMyV17ZCoHhYDcabIfrmQ5%2BFVxkMyfsASIwDE%2FN8S%2BrQHkVL7Y2QgjLd2Cp4sG29ZNdWQww%2Fg5JVOeEv4vDHX393rXL62yjrL9a9IZ6Yg2Vjd97MOQYx9UA2UrY5JzbIy05bNo3cn%2BWo%2FmQxlc3CHHC1F3Wg5BrRO5n91ERgagi72Fh2YzpASF%2BQRPOhznJOhlOlXNkFrMdjQ4ch9YOgXPOgzPxweoIX4tzQtSWVC%2FG6OT75bSnzdemja9SLQ%2BRGV9l9HIb7jlnq8TdYdzMJzGzckGOqUBwF8s4Chl5kbBKruHA2p%2FaYBp05i8zz%2FxvcL%2FoGL56ihVvIjOnxTHJK672kH2NZfnyCROja004JPYWbaAl7Yiz%2BEa5UNTuJRvIuYpSS58kfui9ebfWD82skSne4fNqHBl2U8ixPA54%2Fn%2FWQeJMMYU9jNM5k428oMO3k7Tqd%2FIIGE4wUieVJacz52K8o3EmsA8yV3ZP%2BznMN3F5NR2QjOFKVKplzPN&X-Amz-Signature=36cade0403d8826da62bd59dd0f8f168e3e72f5e083a26ef195376de3a68ecb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQ3JB5C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGt6KxZrre6nj4XrKIiTTGGqPn0Ck%2BioTAqJg7sPkDUgIgevD3ilZT%2FAM5NWu422Nbcoxksyiar%2F7ZT7EkvITmYQcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJn1yt3S%2FIVAbuub0ircA3FnMZQnLMSVrrkYt8e9vHu5GrE1TeFQwspdkOzc6jXa2XGMNHPj1I2odwqYaU%2BBYHimbQ4bh3MRG5xUzYo6yILAza%2Fk69QhBrkXF%2Fl%2FsT3vQVIufI62DbHVnbXhtr4VSlmp15Yt%2BPoKWYrdovQA60vkP0azZbC%2FOGyO4giUjOjT5enNKXPeL1sYO9ECRJ6PJOe%2F4n%2FpQsNo%2FiMJXWzWlwUWMf2vn6WXpeg%2FaWAaxTXmiGg7Bn5LsuzTfOQQWMoO4YVehFgMPY4cHN%2BPgRcxboRk2XcQkuTA5XuwQF8bBvcd%2F%2Fw8TFk0A2uaLNPH72QvXt0QRmW0V4386ysOi6hkwme%2Fa%2FFptbD9bZHrXFEDw3gMyV17ZCoHhYDcabIfrmQ5%2BFVxkMyfsASIwDE%2FN8S%2BrQHkVL7Y2QgjLd2Cp4sG29ZNdWQww%2Fg5JVOeEv4vDHX393rXL62yjrL9a9IZ6Yg2Vjd97MOQYx9UA2UrY5JzbIy05bNo3cn%2BWo%2FmQxlc3CHHC1F3Wg5BrRO5n91ERgagi72Fh2YzpASF%2BQRPOhznJOhlOlXNkFrMdjQ4ch9YOgXPOgzPxweoIX4tzQtSWVC%2FG6OT75bSnzdemja9SLQ%2BRGV9l9HIb7jlnq8TdYdzMJzGzckGOqUBwF8s4Chl5kbBKruHA2p%2FaYBp05i8zz%2FxvcL%2FoGL56ihVvIjOnxTHJK672kH2NZfnyCROja004JPYWbaAl7Yiz%2BEa5UNTuJRvIuYpSS58kfui9ebfWD82skSne4fNqHBl2U8ixPA54%2Fn%2FWQeJMMYU9jNM5k428oMO3k7Tqd%2FIIGE4wUieVJacz52K8o3EmsA8yV3ZP%2BznMN3F5NR2QjOFKVKplzPN&X-Amz-Signature=cf43a534d21877da63e630d8ba95cade71621fea51c754f8ccd4783d1792b23e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
