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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EMUXOO5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEvYaNmgOXpWdtKRWEBhojzTNjyLgAPzcec2%2BnOn3I%2FAIhAO3Wpxj%2Foip%2FVGGp6JiBFXf8gqtowc9ni1ts%2Fnc0aRgcKv8DCHsQABoMNjM3NDIzMTgzODA1IgzzocJ0TXclW95FZwwq3ANI1Wy2sw5bX6ArgJz26J00MnzqRZoefQLScyT3LkkG6wyYI9aMwD3ZGd%2B8CDRNTdypdeAN%2FtmpbuUWL6cDoJbrmOLWOie4M52eDJ2ladenEHJm7lfsNJfzAq9ZXmRjlr3kfug7a1nmcRo2FwXbcKlapdybbhaQy72QDX%2FmgepxUUVp9OhufIjT623eXFFpY2cHTOG9pUDOqgN0NE3LgRQcPJTD6Xn%2F%2B74i9vz9ULshBpyBFwmcV1eyMsBY5iuTn8WNVM6i%2B9B9Li1ylLb7vG7ZFdSDJkGVRVVXBsikVWOxOQV%2FkJCDu5nQk6DvPubowYeb3FhBORB0EOCh94wjbxa0Zv8hlHKomyHlc%2BQlG1Vc1%2BUYDlfV9UDf17Thu%2B2w2SiQ45QjMPl6Q%2BrMPj9RqgMyjE%2B9CEJ9TXSHf%2BSfeCvGRo1Ycn5etiOOg%2BaM8Gc9oFSAtkd0ZI3q%2FPhvWuwngQE1C%2Bw3wu5SuCzdBO%2BxCescehS9czhs89jfMwWH6qOHr5UN4hMkRiUXRtqlCbLjxXurnBkf9xtp21y4RoVahkELwq18U8LnEvoZHWW0OqvFV1YsqOY6nFB8mT049IfOEvVYW1UPdkE%2FTyuP7DZ9AdLkAjn7Ukgxd4P1NikfDDDd8InKBjqkAa4BR6e7UsrVY0rOeEBKvNRPHD70uxOGcu90npUQsYgiOmPkIQlWyukXFttralgReXkHlp%2BrmgncB5Uxw5Xl9ozImeJ6f20VpAEkGAQfnqpTO3P4I2hnlAwmTqi72jnbTNG8ZkL49%2BeyA5u8PHZtkrH6twCE8JvxOtLWYFzvuzZ0X2gW5%2FsICOLzQ1puApczVepq1YwqB1v%2FuzneOvPwgo9SgUo1&X-Amz-Signature=1b6d14d8be5607a81b80517d69402b3eabdb81a17e9b62d5fda53027699753d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EMUXOO5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEvYaNmgOXpWdtKRWEBhojzTNjyLgAPzcec2%2BnOn3I%2FAIhAO3Wpxj%2Foip%2FVGGp6JiBFXf8gqtowc9ni1ts%2Fnc0aRgcKv8DCHsQABoMNjM3NDIzMTgzODA1IgzzocJ0TXclW95FZwwq3ANI1Wy2sw5bX6ArgJz26J00MnzqRZoefQLScyT3LkkG6wyYI9aMwD3ZGd%2B8CDRNTdypdeAN%2FtmpbuUWL6cDoJbrmOLWOie4M52eDJ2ladenEHJm7lfsNJfzAq9ZXmRjlr3kfug7a1nmcRo2FwXbcKlapdybbhaQy72QDX%2FmgepxUUVp9OhufIjT623eXFFpY2cHTOG9pUDOqgN0NE3LgRQcPJTD6Xn%2F%2B74i9vz9ULshBpyBFwmcV1eyMsBY5iuTn8WNVM6i%2B9B9Li1ylLb7vG7ZFdSDJkGVRVVXBsikVWOxOQV%2FkJCDu5nQk6DvPubowYeb3FhBORB0EOCh94wjbxa0Zv8hlHKomyHlc%2BQlG1Vc1%2BUYDlfV9UDf17Thu%2B2w2SiQ45QjMPl6Q%2BrMPj9RqgMyjE%2B9CEJ9TXSHf%2BSfeCvGRo1Ycn5etiOOg%2BaM8Gc9oFSAtkd0ZI3q%2FPhvWuwngQE1C%2Bw3wu5SuCzdBO%2BxCescehS9czhs89jfMwWH6qOHr5UN4hMkRiUXRtqlCbLjxXurnBkf9xtp21y4RoVahkELwq18U8LnEvoZHWW0OqvFV1YsqOY6nFB8mT049IfOEvVYW1UPdkE%2FTyuP7DZ9AdLkAjn7Ukgxd4P1NikfDDDd8InKBjqkAa4BR6e7UsrVY0rOeEBKvNRPHD70uxOGcu90npUQsYgiOmPkIQlWyukXFttralgReXkHlp%2BrmgncB5Uxw5Xl9ozImeJ6f20VpAEkGAQfnqpTO3P4I2hnlAwmTqi72jnbTNG8ZkL49%2BeyA5u8PHZtkrH6twCE8JvxOtLWYFzvuzZ0X2gW5%2FsICOLzQ1puApczVepq1YwqB1v%2FuzneOvPwgo9SgUo1&X-Amz-Signature=c6d5ba20c4ce78d49000c03c74f9df8168f9ad89615de084ddd962aadd0fd947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
