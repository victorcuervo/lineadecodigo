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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KY6XLCD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BPRMPdfYl6TXTMqDgCughTMy4BGTB%2F1fZwDWi7H2wagIhAOTdHxJJ2KpFDEjmWRqdHEzafMiQAT87MoBEtcrl%2Fqp7KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGW0I9NAvkMQHUvX0q3AMhaDBuMGL0BFkIwXoEuweN8T%2BsdRq%2FZa6Orp1eCEO5XCreEbtvGSFKt87R9IwnMNiCgeKfXoX5brzrpr3ry%2BNfcKe1k17MjEfqJILZ4FgOcz5MwwyvJnRAtfZ%2BdDOlFdVospUlWg9BlJZaYmjaKBY1kTJFCf%2Biihx%2BhMLJ8sgWoJZvPQpxRmR1ePE1MQv9Aej8xga10VFMgsCSFH41WthaVHSVA%2Bhzv3KdwqtXt%2FR3nJ8g75PMkvqemTLCaxnDTZBTHcK%2BuTAT8K%2FGfZLweag%2FXqhow8%2BQ543yEZdvSkh3Ghe3TzD6AFPRT%2BLM3JAgq%2F2%2BEmHebk7K%2FTETGxgn0Dgdo8VNz9393%2F63jFBLyNeqaYZvKNc8kfaz4MM4A65hlSKhbyp4Av%2FYrkvgbIQEeJ5mPH3%2BnRt1xnvH8cQb%2F9uEwcL1vif77M5gGE5CBQ063Js9vYs2gUIKPT11WeC0tC%2FDiNiX3xd3Hefpcm3pD7KS4Oe6lF1Ps7xIvC372xypJkONFFGovlxM%2FXL3eBTsXi99Gkng6%2BsfBUojwvBBdOkM19t%2B%2BkK1L%2FJ%2FQ%2FvlNjae035iTnhzKxE%2Brwg5GTzjn3rrkUpCPJFecGTKEhoYGv%2BDJbtzG4URKoS8XhUd3DCs0dnJBjqkAWXDtbvVPzGh97nYSvt8ORjadZydPkSj9BYkHa3hZuJB1ExCw7cpYGKG9UmG7YhujC84ZPChwLS5jl9zUO1pMSDgjq08YwPgHUt2nKQG%2Bu6q9CsQCqk4N9YAl4YXgvOs7z3U5nEofA5qq6VnsPfVchncJYQKjqt2w6uZu%2Bgd8nN%2BzVt%2BG2eccrp65rNKTK9q8gCITHeqKIARbIYRfTkvQ9%2FIQ7gL&X-Amz-Signature=181bef7c9294ed25bbf33a63e80188ef3e6a2df2652f0151bc38b98be8db9d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KY6XLCD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BPRMPdfYl6TXTMqDgCughTMy4BGTB%2F1fZwDWi7H2wagIhAOTdHxJJ2KpFDEjmWRqdHEzafMiQAT87MoBEtcrl%2Fqp7KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGW0I9NAvkMQHUvX0q3AMhaDBuMGL0BFkIwXoEuweN8T%2BsdRq%2FZa6Orp1eCEO5XCreEbtvGSFKt87R9IwnMNiCgeKfXoX5brzrpr3ry%2BNfcKe1k17MjEfqJILZ4FgOcz5MwwyvJnRAtfZ%2BdDOlFdVospUlWg9BlJZaYmjaKBY1kTJFCf%2Biihx%2BhMLJ8sgWoJZvPQpxRmR1ePE1MQv9Aej8xga10VFMgsCSFH41WthaVHSVA%2Bhzv3KdwqtXt%2FR3nJ8g75PMkvqemTLCaxnDTZBTHcK%2BuTAT8K%2FGfZLweag%2FXqhow8%2BQ543yEZdvSkh3Ghe3TzD6AFPRT%2BLM3JAgq%2F2%2BEmHebk7K%2FTETGxgn0Dgdo8VNz9393%2F63jFBLyNeqaYZvKNc8kfaz4MM4A65hlSKhbyp4Av%2FYrkvgbIQEeJ5mPH3%2BnRt1xnvH8cQb%2F9uEwcL1vif77M5gGE5CBQ063Js9vYs2gUIKPT11WeC0tC%2FDiNiX3xd3Hefpcm3pD7KS4Oe6lF1Ps7xIvC372xypJkONFFGovlxM%2FXL3eBTsXi99Gkng6%2BsfBUojwvBBdOkM19t%2B%2BkK1L%2FJ%2FQ%2FvlNjae035iTnhzKxE%2Brwg5GTzjn3rrkUpCPJFecGTKEhoYGv%2BDJbtzG4URKoS8XhUd3DCs0dnJBjqkAWXDtbvVPzGh97nYSvt8ORjadZydPkSj9BYkHa3hZuJB1ExCw7cpYGKG9UmG7YhujC84ZPChwLS5jl9zUO1pMSDgjq08YwPgHUt2nKQG%2Bu6q9CsQCqk4N9YAl4YXgvOs7z3U5nEofA5qq6VnsPfVchncJYQKjqt2w6uZu%2Bgd8nN%2BzVt%2BG2eccrp65rNKTK9q8gCITHeqKIARbIYRfTkvQ9%2FIQ7gL&X-Amz-Signature=f5e274909f022a78b8c6e5cc2dd9c54889bdbb304358eaf2eb94095a1b3694de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
