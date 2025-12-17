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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJP3Z6RE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHxlvNRZ8wMgL%2F9cLTCX168THZBQHFEEtcaZK4FwCzzwIhAKxeHexnhX1raPT%2FJxqyVhwbJ5jEa%2BdBmXtdsNsM27K5Kv8DCH8QABoMNjM3NDIzMTgzODA1IgwOFMwUrqxv1CsGLQYq3AMejjEsvgh1u9I%2Fg%2B4uDtCNv%2Fdw0iQxrifrrNLMhxrb357T2BqMBCc9yqRYYo6x5iAy%2FwtPEyvwChN%2BY8Q5KwUdd21aR3S9vljp31jDauHQrxyiK7Y%2FELMHpvg4s%2B3W20c3eIM2M3zlMkUZKKDsG4p2FoRmZaLB1C%2Fr%2FEc0BFEsy%2Fk9HPQtgEFzUpadGjkmDE8nk55YsrOWdMFLlHO6RvYOBhThCGKsbLy%2BNV%2B41XBiqNYmunHaCn7V%2FO93z%2FhoSrJ2IZuBhHeYd710aaylQAdOnCbXWvvuF4QGl%2BPVKpeTaJmiwpbD0nzntLucKkhEpKYDRWCUQYzcSORU6Zw4ilOULzdCAn16Dw%2BGDJDEevp2z1Q6Z8nzPf%2B5EvN7MWgIb20Xbf3RuONuRN%2FhqnCqCq3EfMq8QBfblYoNMat0eW%2BLL3FF6gC2ZoNMPb5xBzIJS2HAZlMPokuO7MnWVY4GNrNazXt65Np71RWHjPhVj0KwfMto1lZrVqhsdsS%2B73fvoNfoRijv1X5Z86gkD7UIwGuZPOdWpZE6eYMab8rae1EHo1Q0GEwLQ8emhgD2lvxq9zRsTueibDrVm5hTW96mvoBGHnKB%2B5N5z3yGtX8LWAeotKmoQxMg08iB%2BJTV%2BDD34YrKBjqkAc998vnKgvnBJ38ydzdUbG47lZhwym4UdUW4LX7jTArcV0dBhrd9ecdmOOTpU23HA93sFcgMyi3jEitpKX97KEJMNX4Ct8Q4E%2Bnfek7VVPn3wxlIvza9HK2EDIH4dHtQ9iOyG%2BmcUIikcihL3KeVWOPPGLPy9HBdyjWIKHxr0tHq%2BtGCWpaxrAZB7NsmaBTkMRViudy7h7uUHFpkt1VWR93Sgjhr&X-Amz-Signature=396036d0e9d7561957c9f0879fb9822cf0acd573ee26c58ea7d9cc1149955333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJP3Z6RE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHxlvNRZ8wMgL%2F9cLTCX168THZBQHFEEtcaZK4FwCzzwIhAKxeHexnhX1raPT%2FJxqyVhwbJ5jEa%2BdBmXtdsNsM27K5Kv8DCH8QABoMNjM3NDIzMTgzODA1IgwOFMwUrqxv1CsGLQYq3AMejjEsvgh1u9I%2Fg%2B4uDtCNv%2Fdw0iQxrifrrNLMhxrb357T2BqMBCc9yqRYYo6x5iAy%2FwtPEyvwChN%2BY8Q5KwUdd21aR3S9vljp31jDauHQrxyiK7Y%2FELMHpvg4s%2B3W20c3eIM2M3zlMkUZKKDsG4p2FoRmZaLB1C%2Fr%2FEc0BFEsy%2Fk9HPQtgEFzUpadGjkmDE8nk55YsrOWdMFLlHO6RvYOBhThCGKsbLy%2BNV%2B41XBiqNYmunHaCn7V%2FO93z%2FhoSrJ2IZuBhHeYd710aaylQAdOnCbXWvvuF4QGl%2BPVKpeTaJmiwpbD0nzntLucKkhEpKYDRWCUQYzcSORU6Zw4ilOULzdCAn16Dw%2BGDJDEevp2z1Q6Z8nzPf%2B5EvN7MWgIb20Xbf3RuONuRN%2FhqnCqCq3EfMq8QBfblYoNMat0eW%2BLL3FF6gC2ZoNMPb5xBzIJS2HAZlMPokuO7MnWVY4GNrNazXt65Np71RWHjPhVj0KwfMto1lZrVqhsdsS%2B73fvoNfoRijv1X5Z86gkD7UIwGuZPOdWpZE6eYMab8rae1EHo1Q0GEwLQ8emhgD2lvxq9zRsTueibDrVm5hTW96mvoBGHnKB%2B5N5z3yGtX8LWAeotKmoQxMg08iB%2BJTV%2BDD34YrKBjqkAc998vnKgvnBJ38ydzdUbG47lZhwym4UdUW4LX7jTArcV0dBhrd9ecdmOOTpU23HA93sFcgMyi3jEitpKX97KEJMNX4Ct8Q4E%2Bnfek7VVPn3wxlIvza9HK2EDIH4dHtQ9iOyG%2BmcUIikcihL3KeVWOPPGLPy9HBdyjWIKHxr0tHq%2BtGCWpaxrAZB7NsmaBTkMRViudy7h7uUHFpkt1VWR93Sgjhr&X-Amz-Signature=a8dd887903a36fb80ec42bc0ae74f4e2035387cdca8cf1085f440fd111a77f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
