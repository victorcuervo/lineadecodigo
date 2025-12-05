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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIW4P23U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAtVAGJWs3%2Bs6QGLPaHHo4XdMaaDGpoPxmR0gqjc15xAIhAPQsCkvqLisB9Dp23j0DyXaA%2BOPjTBgoSckiFjesPWLSKv8DCGYQABoMNjM3NDIzMTgzODA1IgxHdHFAegAaWjcJCEoq3AOEMQvC6wUO%2F94G5PX15BKavitN7cHzSZSHRlRi3I5Li7nDxT5ucZJyHr9oAYoceH1dodmexJHudyYlBgN4IYyEcA4e4bq0yY01BCQFrauCHr%2FFFPkGiMAfhJDtRu7Nf0AgozXHxWfz%2Bg2lH49y%2BRK3ZgNwxcE%2FrBrvHKDkzwqYRJ6q8wmgreqRrKT8JCgxvZP6SlNJKEPuDSSc6zO%2Fp3%2F9%2FaZzuLcci3%2F2kexlPolLzCRVuLSyviMt%2BJaayk673KIhRfgJB86K3ek2pOifOj8%2BTTqfp%2B%2BgZadZPXu7ew3eZCN0JnCYVuVJBUeSCMmk2NVcgpXgK4XX06jzd5jYSMjT7ZtjKqFjDD19jbu%2FtkkUvleocRPtVzqAhNFWyBtEFK6Wlep%2Ff%2FdiEirSIcwHBAtuZETNn8y%2BPz2iBdAu0V2CgbxFvlRc3h23henezAKhFzha7TPsUxQdW8BJK4x8zGT%2BAe7TXSnRNNn9h36TyYDv%2FcbtsHa%2BmECk73RRZ5PR%2BVy0F9cCmLP3mL7BfoU2qIcuBERzRpNemx6JKuRUikxYmKQG1ZJxgel9AGzkxI4gq4P0lrh5pdtTQIAwUXkxGEkcMDBtAEcn0K8kfOee0%2FCpJPWVTm%2F0o7vzrOl6jzCmlc3JBjqkAaMPiAk8DsxfrD%2FizFGtNKuZ14p1szGn5tQ2y355ziNx6%2BIO2k9421g6My1ysAds2HK6nYMiy9Z8WAwgm%2BPUNgeOyel97MkQna0WI3ciiMElvA3L3OXISNbwZFrlM64gXYoSO0ZpqfWWcTE%2FhPHGp%2Frf44yCFFskKofJH7tS15oAh16dlTd8bEoJY%2FKBrZ7fsdma1UYCmyIA1FKMjjesqDOd3QlR&X-Amz-Signature=51035deebb74037b4fe5185da613f9779763c07853e1080f9a765d58ebecbcf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIW4P23U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAtVAGJWs3%2Bs6QGLPaHHo4XdMaaDGpoPxmR0gqjc15xAIhAPQsCkvqLisB9Dp23j0DyXaA%2BOPjTBgoSckiFjesPWLSKv8DCGYQABoMNjM3NDIzMTgzODA1IgxHdHFAegAaWjcJCEoq3AOEMQvC6wUO%2F94G5PX15BKavitN7cHzSZSHRlRi3I5Li7nDxT5ucZJyHr9oAYoceH1dodmexJHudyYlBgN4IYyEcA4e4bq0yY01BCQFrauCHr%2FFFPkGiMAfhJDtRu7Nf0AgozXHxWfz%2Bg2lH49y%2BRK3ZgNwxcE%2FrBrvHKDkzwqYRJ6q8wmgreqRrKT8JCgxvZP6SlNJKEPuDSSc6zO%2Fp3%2F9%2FaZzuLcci3%2F2kexlPolLzCRVuLSyviMt%2BJaayk673KIhRfgJB86K3ek2pOifOj8%2BTTqfp%2B%2BgZadZPXu7ew3eZCN0JnCYVuVJBUeSCMmk2NVcgpXgK4XX06jzd5jYSMjT7ZtjKqFjDD19jbu%2FtkkUvleocRPtVzqAhNFWyBtEFK6Wlep%2Ff%2FdiEirSIcwHBAtuZETNn8y%2BPz2iBdAu0V2CgbxFvlRc3h23henezAKhFzha7TPsUxQdW8BJK4x8zGT%2BAe7TXSnRNNn9h36TyYDv%2FcbtsHa%2BmECk73RRZ5PR%2BVy0F9cCmLP3mL7BfoU2qIcuBERzRpNemx6JKuRUikxYmKQG1ZJxgel9AGzkxI4gq4P0lrh5pdtTQIAwUXkxGEkcMDBtAEcn0K8kfOee0%2FCpJPWVTm%2F0o7vzrOl6jzCmlc3JBjqkAaMPiAk8DsxfrD%2FizFGtNKuZ14p1szGn5tQ2y355ziNx6%2BIO2k9421g6My1ysAds2HK6nYMiy9Z8WAwgm%2BPUNgeOyel97MkQna0WI3ciiMElvA3L3OXISNbwZFrlM64gXYoSO0ZpqfWWcTE%2FhPHGp%2Frf44yCFFskKofJH7tS15oAh16dlTd8bEoJY%2FKBrZ7fsdma1UYCmyIA1FKMjjesqDOd3QlR&X-Amz-Signature=25362d389c601dbf6c8d3344e923cab912c2f086fe2a72b258fa4cd35e6e7aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
