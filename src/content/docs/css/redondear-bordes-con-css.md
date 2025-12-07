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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZPTAVD5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2FYkCUw%2BQOc8VKZXbTZLkqGK3sj1EAg2lG5QOwRbc4AIgJY4%2BD%2BjiAHOP8zsm%2FY6qqbbwBn5TW%2F3CCIQ1RtmZwIgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP2U7i%2BUDS%2FGrwwbyrcAzylF26f6tDyzaq6hoDjhT8qkymFevmx0ZmM3amy4%2FOLoMYooq%2BkBSjlYWt%2B1t0JYABSoiqh0P6Rh%2FWhJ9ZvzxyfrpMx6KQ8EeBqlvvJrE%2FZZ0JM10SLjdvBTebbaBauIG%2FUIbcoYAXW2rvpp9aoGIvA4uOJabRo2%2BdYr%2FXo4E7H1Dn7YD52prI4ZtthB%2Ba7mAk4X2Whw4mjZti%2BMBYQ55VaAHYdOTZGL%2FZBCTLGP5P37CyMZmgjjGR%2FHP0R6mPL3qhW4Fr22EUtFUrpLBwkHZWL9eohWeEQrwDiT5AeXmyKpc%2F268mHqtMjO24tLB48FsdqWqQpLo2mXxTcOco7Vgtw9vIttUAw2hbykKmATHKETeB9Fp9RA34CKV7rTXkdlX58APLL8VfZAU3BOsuYbjqDp05kkzwfVioM33TknwuW6sbdUNcPTlFb%2FxJDBcOVgIpiqhq110KTnJhCEPZUsCCIxaiXhcFEjFAPtEltj5pMrPd%2BerUMO3oVb13OodY7GiRGSFBAcT9jX14WIYgwOiD6vLRUalfPlPPw4CdiXI6AeUaHIs5rpdPSVYQ5eqQTZI89roCtFcDTyHbCjeX3y%2FQLy%2Fdi0bGKj99inVM%2Bc%2BHXOcYrH3QUHcRx6dioMNKd1MkGOqUBIJBb8T3wnJU2rB5lRLPQc88vVYfsdlyRMhZ1qb4UVGgeXgtOvEf6B5q8ix6RhySPRCAjX7JDdUJu0UxR5J95PLEtxWkJ5hk46Q3VbmR%2ForeiTT%2FhzrBnja4iNiSqxo3GgC2v3S84gPdWctdaP0NoHlmH9PNo1X08%2BvBaCiZ3V9JWy17l1oNq0xjFjCetRDNyUn22mhdNZRPkJAgM28D2ADZOHnPS&X-Amz-Signature=6c9071ae7897cd2592d402fbe22adff767826cefcf1fd4500d42aea33dcd4fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZPTAVD5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2FYkCUw%2BQOc8VKZXbTZLkqGK3sj1EAg2lG5QOwRbc4AIgJY4%2BD%2BjiAHOP8zsm%2FY6qqbbwBn5TW%2F3CCIQ1RtmZwIgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP2U7i%2BUDS%2FGrwwbyrcAzylF26f6tDyzaq6hoDjhT8qkymFevmx0ZmM3amy4%2FOLoMYooq%2BkBSjlYWt%2B1t0JYABSoiqh0P6Rh%2FWhJ9ZvzxyfrpMx6KQ8EeBqlvvJrE%2FZZ0JM10SLjdvBTebbaBauIG%2FUIbcoYAXW2rvpp9aoGIvA4uOJabRo2%2BdYr%2FXo4E7H1Dn7YD52prI4ZtthB%2Ba7mAk4X2Whw4mjZti%2BMBYQ55VaAHYdOTZGL%2FZBCTLGP5P37CyMZmgjjGR%2FHP0R6mPL3qhW4Fr22EUtFUrpLBwkHZWL9eohWeEQrwDiT5AeXmyKpc%2F268mHqtMjO24tLB48FsdqWqQpLo2mXxTcOco7Vgtw9vIttUAw2hbykKmATHKETeB9Fp9RA34CKV7rTXkdlX58APLL8VfZAU3BOsuYbjqDp05kkzwfVioM33TknwuW6sbdUNcPTlFb%2FxJDBcOVgIpiqhq110KTnJhCEPZUsCCIxaiXhcFEjFAPtEltj5pMrPd%2BerUMO3oVb13OodY7GiRGSFBAcT9jX14WIYgwOiD6vLRUalfPlPPw4CdiXI6AeUaHIs5rpdPSVYQ5eqQTZI89roCtFcDTyHbCjeX3y%2FQLy%2Fdi0bGKj99inVM%2Bc%2BHXOcYrH3QUHcRx6dioMNKd1MkGOqUBIJBb8T3wnJU2rB5lRLPQc88vVYfsdlyRMhZ1qb4UVGgeXgtOvEf6B5q8ix6RhySPRCAjX7JDdUJu0UxR5J95PLEtxWkJ5hk46Q3VbmR%2ForeiTT%2FhzrBnja4iNiSqxo3GgC2v3S84gPdWctdaP0NoHlmH9PNo1X08%2BvBaCiZ3V9JWy17l1oNq0xjFjCetRDNyUn22mhdNZRPkJAgM28D2ADZOHnPS&X-Amz-Signature=48db42d4d0f4ae52c0d16beca09ce7ce37bd6c730918ad9a19d3e379c2f12eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
