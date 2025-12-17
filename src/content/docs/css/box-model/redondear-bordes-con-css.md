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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKGWX5TT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXjUhJwzV8ykXjzvyHN68PFrSdxLvXOVO%2BQQVrcghOhAIhAN0defnDqZ3WWQ9xwOPJjUxHbTFcfdLemfGKMYosxuH%2FKv8DCHwQABoMNjM3NDIzMTgzODA1Igxp43mQcz%2FM9W4jHi4q3AOkYuDTVwcA95%2BkSecjtSCy8HuYzFd9YkMfMCYsVDTAceBYmIMMo0UDGl6vYklUIEwRIyNtxs1wBtVwIFtAChTxSn9dWyj3sUMM40LF4ay%2BSqvZ8SXQlBZttePTajo2TwkoiCXBsoDZprWoJcb17luzxXCE1tOFM9OTEMOShedA2BxA%2FZFcn%2BeKPvyBCIyr8N8Pbl8XtFEr1ZyoX49LhPikwm3ZyDYlSHlBPGvYBNeCjXPfYlJ%2FDkya3BnRQSCsnq5bOqcMGwCrxihd67%2BZFc4e01gOqAo%2B37swIJ3I5p%2FO598Hk8sj3GcnmGvlOTZe1ev%2B%2FnvOvIdGmGLbC0ajLfwOP9NNPqfTjj6q1vzCyAZU%2Bh2H8r69P8cHORs0xVNdVUZtDzw7GLT%2BKvGZudpcihiW4HQo6sf%2BqSvk%2BtZ8P4iQdMk5EZMt205aR9RxhQHsBL4M7FQmBlE3CrguWgjY4geWhDIsZQgb%2Fdm%2BYpsqiX7%2B49vttUBtrprWGEX6oURncC6NMRlWcm7t7PYI7Uy9zAkxugURaEj%2FSZX4q6kGY%2FzrQt5KLjUf8jaXvQIJyPfh8Z44OljHrb%2FurQvUxW3kPYqYWKX0GLjI5QNmYDl1rfvEFF1xYMe%2FdJVt2e2CejDHjorKBjqkAUJCHayu7s%2BVGB93vPM5PiOXzvkLKMyNsaLN6Vl8GmE9Ui2mPSLm%2FGxdYytwcfAia0PCVkpOmfDkMnfO273kTDu9j3xN6JE8gegaVS0Tl5H3lVzMsBC5dTxz0XVajrhx%2FapaFl7ojFaayrNa4NN6NPN7Ip6CXzGttskDhJaUgT68Rh9uY2zzemYtIPuEu2KdQmyaUbXCOVnAY2cqf%2Fei3uSLjInu&X-Amz-Signature=32b75e0c08e5065c28819e37b6a8e340ebd630eaa84b8186c0b78516d35cc56b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKGWX5TT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXjUhJwzV8ykXjzvyHN68PFrSdxLvXOVO%2BQQVrcghOhAIhAN0defnDqZ3WWQ9xwOPJjUxHbTFcfdLemfGKMYosxuH%2FKv8DCHwQABoMNjM3NDIzMTgzODA1Igxp43mQcz%2FM9W4jHi4q3AOkYuDTVwcA95%2BkSecjtSCy8HuYzFd9YkMfMCYsVDTAceBYmIMMo0UDGl6vYklUIEwRIyNtxs1wBtVwIFtAChTxSn9dWyj3sUMM40LF4ay%2BSqvZ8SXQlBZttePTajo2TwkoiCXBsoDZprWoJcb17luzxXCE1tOFM9OTEMOShedA2BxA%2FZFcn%2BeKPvyBCIyr8N8Pbl8XtFEr1ZyoX49LhPikwm3ZyDYlSHlBPGvYBNeCjXPfYlJ%2FDkya3BnRQSCsnq5bOqcMGwCrxihd67%2BZFc4e01gOqAo%2B37swIJ3I5p%2FO598Hk8sj3GcnmGvlOTZe1ev%2B%2FnvOvIdGmGLbC0ajLfwOP9NNPqfTjj6q1vzCyAZU%2Bh2H8r69P8cHORs0xVNdVUZtDzw7GLT%2BKvGZudpcihiW4HQo6sf%2BqSvk%2BtZ8P4iQdMk5EZMt205aR9RxhQHsBL4M7FQmBlE3CrguWgjY4geWhDIsZQgb%2Fdm%2BYpsqiX7%2B49vttUBtrprWGEX6oURncC6NMRlWcm7t7PYI7Uy9zAkxugURaEj%2FSZX4q6kGY%2FzrQt5KLjUf8jaXvQIJyPfh8Z44OljHrb%2FurQvUxW3kPYqYWKX0GLjI5QNmYDl1rfvEFF1xYMe%2FdJVt2e2CejDHjorKBjqkAUJCHayu7s%2BVGB93vPM5PiOXzvkLKMyNsaLN6Vl8GmE9Ui2mPSLm%2FGxdYytwcfAia0PCVkpOmfDkMnfO273kTDu9j3xN6JE8gegaVS0Tl5H3lVzMsBC5dTxz0XVajrhx%2FapaFl7ojFaayrNa4NN6NPN7Ip6CXzGttskDhJaUgT68Rh9uY2zzemYtIPuEu2KdQmyaUbXCOVnAY2cqf%2Fei3uSLjInu&X-Amz-Signature=b600b344fa19a808cb6df624d89b05f6a5717526dd174cb1c1e55fd919c55ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
