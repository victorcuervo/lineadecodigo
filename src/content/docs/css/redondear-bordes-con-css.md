---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU6FAFI6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFU7SIWcspfybc7HNqe0chdMIoHuMtLNcV2t7rD%2F45RYAiEAgsUH1p9PqmEQ3Qdd16en8HIMyXvh7gQyZxxOxOhOxhYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDNNplAtOX0SgZmyPCSrcAxXIMfPbPKUd3cFvZJWiJxqAu8IcP%2Fs51hj1P7dZuqi9g7BST2ye%2FMuh704MynoMmBnv8FhenffBLeU%2F0RPTXzijgpgTgry67hiMuJrJKhVm8yDSCkoP%2Bm3ZDsdhX3emkGe8%2BpxP4izQ4naZeh7gqgw0ZZzJZFqpYkh8zzlNBl0Pw9vQBIwIufNOPbcivnWTcr4AvsUCiF6BS2QHinYYcuLPNFidTyHc7L9BtQXtgIxlgFE4ie3yfN95mC5BzE1oqDnXSkVqsshRC%2F5UvJnRdKpxQMQmO%2BTaipO1kM1uADvandJHN6gjOCxV%2BkpHjtdOikIVqCpmtqJGvwZeWH5HTESgB5Xe37Ou0kCV2zbbwIgkp%2F4CV15RraEn8uCzeSU654yOxcHpoKqQdJeAOAjEPv%2FV4C45wtPZ9YNh%2BLlOYa0rKfhZwEEeiJUvsFXxT%2FrxX5bwFHTqCB%2BUdniCVaiyPPWTWqIw0yCSlCQE9JK64gBKKpp%2BtQpgKw%2F8MY4nMKXFgrFuNFVZOqixHIxcplBux%2Bb6RMkHy1VIUn8JoFztQrn3f4g22VZ6%2FhxBbJlJBN9KyafxyQoM9gw%2BPf8prMaJjcNl1sOrJIfv6xaLVdMRBeyPR%2Bc60Wnxmo%2BXranCMKfzw8kGOqUBwqhBzQ1KNUrsvukeWtfXpZL60AjhNRoKzMi1AI7Tqajhtu8juhAloMSNUUsR3vff9WOIooJ71iWLt0NZuOVg%2F0UJ2ZkN%2BrnEapKXxORy8UNeyYhddzdjV%2BmZDmULaHpIlpAWC3t%2BTA8uEDR8riDfQJNEhTnkbO3BmLRSPRRbbO5NG9uHNN7jgRU4eONwzgEbgQVQupYEfUiGzxinUjIjthgxXMH0&X-Amz-Signature=e2642d4e58506dc725c3c5d80d9b0e8935ca62d92bed9f357a7c3b478339a850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU6FAFI6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFU7SIWcspfybc7HNqe0chdMIoHuMtLNcV2t7rD%2F45RYAiEAgsUH1p9PqmEQ3Qdd16en8HIMyXvh7gQyZxxOxOhOxhYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDNNplAtOX0SgZmyPCSrcAxXIMfPbPKUd3cFvZJWiJxqAu8IcP%2Fs51hj1P7dZuqi9g7BST2ye%2FMuh704MynoMmBnv8FhenffBLeU%2F0RPTXzijgpgTgry67hiMuJrJKhVm8yDSCkoP%2Bm3ZDsdhX3emkGe8%2BpxP4izQ4naZeh7gqgw0ZZzJZFqpYkh8zzlNBl0Pw9vQBIwIufNOPbcivnWTcr4AvsUCiF6BS2QHinYYcuLPNFidTyHc7L9BtQXtgIxlgFE4ie3yfN95mC5BzE1oqDnXSkVqsshRC%2F5UvJnRdKpxQMQmO%2BTaipO1kM1uADvandJHN6gjOCxV%2BkpHjtdOikIVqCpmtqJGvwZeWH5HTESgB5Xe37Ou0kCV2zbbwIgkp%2F4CV15RraEn8uCzeSU654yOxcHpoKqQdJeAOAjEPv%2FV4C45wtPZ9YNh%2BLlOYa0rKfhZwEEeiJUvsFXxT%2FrxX5bwFHTqCB%2BUdniCVaiyPPWTWqIw0yCSlCQE9JK64gBKKpp%2BtQpgKw%2F8MY4nMKXFgrFuNFVZOqixHIxcplBux%2Bb6RMkHy1VIUn8JoFztQrn3f4g22VZ6%2FhxBbJlJBN9KyafxyQoM9gw%2BPf8prMaJjcNl1sOrJIfv6xaLVdMRBeyPR%2Bc60Wnxmo%2BXranCMKfzw8kGOqUBwqhBzQ1KNUrsvukeWtfXpZL60AjhNRoKzMi1AI7Tqajhtu8juhAloMSNUUsR3vff9WOIooJ71iWLt0NZuOVg%2F0UJ2ZkN%2BrnEapKXxORy8UNeyYhddzdjV%2BmZDmULaHpIlpAWC3t%2BTA8uEDR8riDfQJNEhTnkbO3BmLRSPRRbbO5NG9uHNN7jgRU4eONwzgEbgQVQupYEfUiGzxinUjIjthgxXMH0&X-Amz-Signature=8f4546d4914e36531f6946c2bef855b91cf910e7c976efa567ac3c8dbf1070d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
