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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABHHBVZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsrv4xgKlRJKb%2BTlw7%2FjAjvRolcgDEMnnOebElK352QAIgILiDzOUUpd%2BUhTCFmtQluRF6SonVuBUmkGVLI6ZjkKQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLASs5UdGVVs8dXQqSrcA62Xmjn7tOuCLrzsVwD4e92V4rhL0jUfJFZS9KS%2B0gGfmUhbCZVX0YYXCG0eMcGs1D1hHUxyE4HgMItEHjOyAWuEP7swOFJFq3ALSP5BKIHB9KiONM50%2B6cMpa3NUGL8BUbceRZ14ehPmLks1o4yWqaUz6R84fyEfsBgIqWtoKVao4ywWb0WnDnD%2FXkVh7xcsuqXoO%2Bu0bG%2BEnDMdAKqVh6n2Q8UGMlJbu8ZaHaJcVq0bTJ5cTiSdSaxViRJkhE6%2FAUX9cPljDN6JMD1RgopPAOKxk9YyG2Khqn963udE%2FRjXeo4rAV38zJ%2BTLLLrD808oN7yuCAo13UOECKjC5EzG4ZicLdGNxIUpzuzU1Mlz71NxTrIh32UBrNnGt4t242wXugFbgaRjyfPOGLoKkNDUOiyiWkdjloh0iOqG22jO3ooXz4AjGgDLU%2FyIikHvBizzQA28UNau%2Biy2imnoV6GGUnqoKTj4h82IAu7UEdd6l2qCvTjbfw%2FdJh%2FOsx3CK1vt9ZUIyEIuIEMgLbGefT%2BZjGFuCmtm%2FQIS9DVJ8%2BKdSUGOtkIFda9CYiVXVxPSnFu86UWrRNTvw%2B0WaDujxm8Ly1qiSqDgEXZGJj31ukjWyRg1XKMnH%2BtZtl373mMO%2F8y8kGOqUBwFURQv9wxviqig5caEC3HZ2keQxefsmZwXG4%2FmmYFvq9hZHf2CSKpIfhlPDJM6R%2FBI6e7w%2FY%2BYX%2B5ikzhCQ8PIZ5lrw2ta4iM4we8z8mB0CzQi5NpFf8KWWijO7Wdv86FZYKmMle12aK5o%2FNxJGlkbZpNxjmm6hY2kdM69KqDZ0h%2FHy0b9DMfSy09RRx2kbisZ5MXN5xY%2BTX3AetqkFY0THSVjAi&X-Amz-Signature=a8a53b30cd93bcdfe5a73e359d882e12b926616210ae685374c5d58f150d0f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABHHBVZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsrv4xgKlRJKb%2BTlw7%2FjAjvRolcgDEMnnOebElK352QAIgILiDzOUUpd%2BUhTCFmtQluRF6SonVuBUmkGVLI6ZjkKQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLASs5UdGVVs8dXQqSrcA62Xmjn7tOuCLrzsVwD4e92V4rhL0jUfJFZS9KS%2B0gGfmUhbCZVX0YYXCG0eMcGs1D1hHUxyE4HgMItEHjOyAWuEP7swOFJFq3ALSP5BKIHB9KiONM50%2B6cMpa3NUGL8BUbceRZ14ehPmLks1o4yWqaUz6R84fyEfsBgIqWtoKVao4ywWb0WnDnD%2FXkVh7xcsuqXoO%2Bu0bG%2BEnDMdAKqVh6n2Q8UGMlJbu8ZaHaJcVq0bTJ5cTiSdSaxViRJkhE6%2FAUX9cPljDN6JMD1RgopPAOKxk9YyG2Khqn963udE%2FRjXeo4rAV38zJ%2BTLLLrD808oN7yuCAo13UOECKjC5EzG4ZicLdGNxIUpzuzU1Mlz71NxTrIh32UBrNnGt4t242wXugFbgaRjyfPOGLoKkNDUOiyiWkdjloh0iOqG22jO3ooXz4AjGgDLU%2FyIikHvBizzQA28UNau%2Biy2imnoV6GGUnqoKTj4h82IAu7UEdd6l2qCvTjbfw%2FdJh%2FOsx3CK1vt9ZUIyEIuIEMgLbGefT%2BZjGFuCmtm%2FQIS9DVJ8%2BKdSUGOtkIFda9CYiVXVxPSnFu86UWrRNTvw%2B0WaDujxm8Ly1qiSqDgEXZGJj31ukjWyRg1XKMnH%2BtZtl373mMO%2F8y8kGOqUBwFURQv9wxviqig5caEC3HZ2keQxefsmZwXG4%2FmmYFvq9hZHf2CSKpIfhlPDJM6R%2FBI6e7w%2FY%2BYX%2B5ikzhCQ8PIZ5lrw2ta4iM4we8z8mB0CzQi5NpFf8KWWijO7Wdv86FZYKmMle12aK5o%2FNxJGlkbZpNxjmm6hY2kdM69KqDZ0h%2FHy0b9DMfSy09RRx2kbisZ5MXN5xY%2BTX3AetqkFY0THSVjAi&X-Amz-Signature=10bf73e0224622ca6b948ca17bf5bfb4505b41dbb5abf931b475e0502a8192fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
