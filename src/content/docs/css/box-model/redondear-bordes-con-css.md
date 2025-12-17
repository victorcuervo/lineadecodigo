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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KTVPA3V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAjjTytgeTc38C%2BZTxMXGXbALQSg2xldRwruXs%2BsxCdwIhAMyhEn6C6uEzOhD%2FCIYdS%2FazI%2BKXIc1BycTNP78pYd27Kv8DCH4QABoMNjM3NDIzMTgzODA1Igwg9jyzUAIK1Kw4P%2Bcq3ANmKdWIqViW8cmGSh91L3V%2Bvo8pCD3nthjWO4fpJJFS%2BbkHjfSri65YA%2Fx%2F12wAzqtTRuIMKyRII4hi9q6REcZsjHu7my9%2BG5l8hRUkqJNI5%2FHbdI9JaXLw453eNrHtb%2BcnZ5dP73JAcY0TYO3wDJ%2BiTXNGjeVTgkqZIXSmygqcYuw28J0wPu8%2BhSlBUN0H2P90Fc7kIN472TA0pFsQ01816JAZZc1hJyYjKtpqaUzHwS%2Fl1Jd%2FZLn7k090FChNcyR5QxCc2UrXlSa2zw6A4eLhD%2FBx5x7aSDSgaqqwLEwiiQaYVvAvGkW0hsp5ANQhxA8eLvdSYM5VzCKGbd27WlE0A%2BXtJ%2FnzyptMP5AkkO6m2NvqMSmj%2BJfhlPulIYOPqEEbz6jga9pbR3WJ9zr%2FHAO%2F33ENISFAVKJQa9EAEE45IhgSs2ogQlU78w9qcnzQ2GQIMfGe4rkaNnz5oEwQnOub0uhbaXHiLsWUnmbDeciBXCaA2VOt5WPUm8WBhi9VE7r%2FuMvLQGqMILj4NaQLisKUQfJ21NU4CquzE%2BlU1yYzf3jUCFFmppwYunJQhodTiK7y%2BiRcUzyu%2FZ9GlgmRYyz%2FqZ907s8UuhFfNHlOGVh7kgfblN6zR820B%2FdPZTDrxYrKBjqkAYN5zMDGQiJWQrQ39YssuS8nv0m3b0n1RktAwmR2j7XccL%2BXZfjhEGrwhIeTZSEXGemmYNVaWS28aOEpfeH7kSH2kA5RsKKnZQONckALC2tRDAsIxruVOcWMQWlu%2By1ZLDvm8KDjLgAS2OVlK5w00m5xMNd5wcPgGsRm4zANiZS9607lys4wLsYV4Qe4p4ehpaswXVfq%2BnFhZQYyUkY0rQaDP9q7&X-Amz-Signature=443c8f953263d15690e41292fab475ee012293bf059575b4501de6f55a67d228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KTVPA3V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAjjTytgeTc38C%2BZTxMXGXbALQSg2xldRwruXs%2BsxCdwIhAMyhEn6C6uEzOhD%2FCIYdS%2FazI%2BKXIc1BycTNP78pYd27Kv8DCH4QABoMNjM3NDIzMTgzODA1Igwg9jyzUAIK1Kw4P%2Bcq3ANmKdWIqViW8cmGSh91L3V%2Bvo8pCD3nthjWO4fpJJFS%2BbkHjfSri65YA%2Fx%2F12wAzqtTRuIMKyRII4hi9q6REcZsjHu7my9%2BG5l8hRUkqJNI5%2FHbdI9JaXLw453eNrHtb%2BcnZ5dP73JAcY0TYO3wDJ%2BiTXNGjeVTgkqZIXSmygqcYuw28J0wPu8%2BhSlBUN0H2P90Fc7kIN472TA0pFsQ01816JAZZc1hJyYjKtpqaUzHwS%2Fl1Jd%2FZLn7k090FChNcyR5QxCc2UrXlSa2zw6A4eLhD%2FBx5x7aSDSgaqqwLEwiiQaYVvAvGkW0hsp5ANQhxA8eLvdSYM5VzCKGbd27WlE0A%2BXtJ%2FnzyptMP5AkkO6m2NvqMSmj%2BJfhlPulIYOPqEEbz6jga9pbR3WJ9zr%2FHAO%2F33ENISFAVKJQa9EAEE45IhgSs2ogQlU78w9qcnzQ2GQIMfGe4rkaNnz5oEwQnOub0uhbaXHiLsWUnmbDeciBXCaA2VOt5WPUm8WBhi9VE7r%2FuMvLQGqMILj4NaQLisKUQfJ21NU4CquzE%2BlU1yYzf3jUCFFmppwYunJQhodTiK7y%2BiRcUzyu%2FZ9GlgmRYyz%2FqZ907s8UuhFfNHlOGVh7kgfblN6zR820B%2FdPZTDrxYrKBjqkAYN5zMDGQiJWQrQ39YssuS8nv0m3b0n1RktAwmR2j7XccL%2BXZfjhEGrwhIeTZSEXGemmYNVaWS28aOEpfeH7kSH2kA5RsKKnZQONckALC2tRDAsIxruVOcWMQWlu%2By1ZLDvm8KDjLgAS2OVlK5w00m5xMNd5wcPgGsRm4zANiZS9607lys4wLsYV4Qe4p4ehpaswXVfq%2BnFhZQYyUkY0rQaDP9q7&X-Amz-Signature=bcc89cb6dddbb193f2234f18e2edbe5e8d10180afe94290e7f6101fcf63001ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
