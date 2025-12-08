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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHK6SJX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpRzLMi46FRywBOXrIKeynYQVQEryl4QX7r81sfmhqqQIhAL1g0bgnZLQIhic15R6wucKxHFNloiIAMHo69Xn7%2FosvKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOWNIUzDRt2hn4ppAq3AOk4%2Fytxc%2FsfxH2imENGwT3RIsFaISYVbbOu10RjCpma7zmBlwTFzcwyCNgSGAPoggomiCXeulVUqj%2Bsz4PnMUVlyJFkgZZeaKymTiVr8%2FvVQpA5qeXu2tZRequ9TpIjc1LIb%2FMFy1e4qGs14C114GBTqh2T9fkOusTa5%2FtHJWnHN0nZw1IPcs0AbyR8ySoLB1VpdlJXcLuTTG%2B1Za6KiVn6K%2F0VfXc8CLNO5MMzHNZp%2FCZx7en%2BwFJFTGTJnotwp8KBf5Q2kc87enteZnWlI%2Bu4gz8Dc1xiFWPmWraONUWt%2B4BXikuuZsQcSS5ck%2Bki%2BPY%2Fjrow1iAF79HJg4ns4wzjoRY5xyrdBm7y75W%2FTnrAbfRusPbZlSE4CktIdu0TjSYaPeR%2FMJXIhvf7nsO4igT%2BcOst2wzpwHKCLOA9DPUs2PbBYmtdQ1QNv6B%2BSJqLyGUbikksCIqUGH%2BhXmxhR0W1D7YcBYMDjQJigg%2BJuWrxesQsoOGK2bd0f1bbUbRWw7vn9fflSY7vraZC0BdyZKswlbMaM9iJEJvYbC%2BoNjfg8cIayjfi9rR6DCiL1un88FK%2F1hVcAQgXO2VGeajI6QWT42ZTNkkcRN2QQOB2kmUGgdMTE812v3jESmtlTCY7dnJBjqkAV4qwKRvP8xy13EMD7uvPHitLT7Z%2FW7uKjVH0tKQ1gdZJOIXbIQtOXWgc6LIU7xz2dWCarhIR1Ifra1%2BtHF16GNNYORbw1g24iQWi%2BWs13hmDZWYdoU6Ng7dKynIacg3hztbxttRC3RniU0q0ndrYbGy5Ej%2BccHDyGXqWAj9zPeZ3x%2FnyAaB3khJEP1r81k6z3lL3jaGbDXfZrgBYRq85Ah9qhme&X-Amz-Signature=62f49bf4ea9ec0eb546a672be42bc890d97b815c1bf7a4df0e7ba4f48f3181fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHK6SJX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpRzLMi46FRywBOXrIKeynYQVQEryl4QX7r81sfmhqqQIhAL1g0bgnZLQIhic15R6wucKxHFNloiIAMHo69Xn7%2FosvKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOWNIUzDRt2hn4ppAq3AOk4%2Fytxc%2FsfxH2imENGwT3RIsFaISYVbbOu10RjCpma7zmBlwTFzcwyCNgSGAPoggomiCXeulVUqj%2Bsz4PnMUVlyJFkgZZeaKymTiVr8%2FvVQpA5qeXu2tZRequ9TpIjc1LIb%2FMFy1e4qGs14C114GBTqh2T9fkOusTa5%2FtHJWnHN0nZw1IPcs0AbyR8ySoLB1VpdlJXcLuTTG%2B1Za6KiVn6K%2F0VfXc8CLNO5MMzHNZp%2FCZx7en%2BwFJFTGTJnotwp8KBf5Q2kc87enteZnWlI%2Bu4gz8Dc1xiFWPmWraONUWt%2B4BXikuuZsQcSS5ck%2Bki%2BPY%2Fjrow1iAF79HJg4ns4wzjoRY5xyrdBm7y75W%2FTnrAbfRusPbZlSE4CktIdu0TjSYaPeR%2FMJXIhvf7nsO4igT%2BcOst2wzpwHKCLOA9DPUs2PbBYmtdQ1QNv6B%2BSJqLyGUbikksCIqUGH%2BhXmxhR0W1D7YcBYMDjQJigg%2BJuWrxesQsoOGK2bd0f1bbUbRWw7vn9fflSY7vraZC0BdyZKswlbMaM9iJEJvYbC%2BoNjfg8cIayjfi9rR6DCiL1un88FK%2F1hVcAQgXO2VGeajI6QWT42ZTNkkcRN2QQOB2kmUGgdMTE812v3jESmtlTCY7dnJBjqkAV4qwKRvP8xy13EMD7uvPHitLT7Z%2FW7uKjVH0tKQ1gdZJOIXbIQtOXWgc6LIU7xz2dWCarhIR1Ifra1%2BtHF16GNNYORbw1g24iQWi%2BWs13hmDZWYdoU6Ng7dKynIacg3hztbxttRC3RniU0q0ndrYbGy5Ej%2BccHDyGXqWAj9zPeZ3x%2FnyAaB3khJEP1r81k6z3lL3jaGbDXfZrgBYRq85Ah9qhme&X-Amz-Signature=a932e45e4fc9a8b8912139d9e817384f3d863685bd98dc17026e58bcbfcd7837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
