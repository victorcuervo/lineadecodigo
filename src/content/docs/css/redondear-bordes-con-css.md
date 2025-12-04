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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RTXKVAG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDzE2c%2F7mrht98%2FtQk75HMU2dwaNEbkhVYFBl5mTFBXjwIhAM4fUO%2FPVNy2Ymv0KiIzVsVpvM3YSyGTFyMHRdMqErW6Kv8DCEYQABoMNjM3NDIzMTgzODA1IgzWTyKawqoyNS9G9Bsq3ANab6RRja47BrM1y4KdS3B%2BA0v%2B1YaVr0h1yOIR74VxIxlMKOkbjA0qzHJInslNR%2Fg4hfimguWcTd0Aa4lJt4ObvUzjcEKsjRGbd6cC685KTbG09wk0H0BViYiA9g4QWi5LMI50LULpsFOdFEQvQNW5%2BLIoiGCQOusg%2FRJ0uu8bFUuci%2B84hWdwAdvHKN1Tycu0ifilF1aoOC7R3I6VwSzk5zCLbdptuZayyvwc9Xz%2FuXSJ85Cr1hpLd98igbeZYgdxt9K%2BQ1GDwJPhhhM2FiGpo%2BUo0nyJOW7ASkdofqaM%2BD%2F24Od3wgySoYU5k1s%2BHpZp6lx2wiu2vbqG33fY5lBPkPccaNQfQrdncKz3UaCGqy%2B5kmX84R7MUba%2B0FFLLkPsToOeKA3Ep9NLhUFT43KqZXDaPTdR4mPZiC6sXPpq8JYYDk2G7QjwiY0p98mhGU%2FB6glIlfemu6Aaa50PqVH3dYNNoFOsi7%2F7kz49AfVyWYz%2BUS73zLfsGbvyeLiZ4jIBe1fm3isLButagu9NtOYd9ffecizj0V8iCQl68y0pYxnKScsaQTukj2hMDZz2U8QnnIcTGf4mIMvvGIkfdFC2mqkXFfZGBa4iBFAFRjK%2FzzY2chQCj2LobMwJnjDqg8bJBjqkATyQBxSXppOGlC48nnc6DnChz67Lj9%2B9dLfdc%2Fr43xd%2FC5EQpsFylKe%2FM5tiBMf9QNlrVj8Ar6L7Njble67VpRoom7tR1eylWmui0QmI3tX7kZs1Cgr9GEi9uKx6rA2OeISt0SEXWkyu2oTM6TYwdUdv2AjWwlp5iTXbPb%2BWQi1bF00McW8xv4o70ZtGNVlgJuBvrK904jyOL3BF4%2FZcV%2FUewzYE&X-Amz-Signature=a8f7e98adf66e4fb20bbca75e53281b21f1900add6bea0feecb14b1fabba203e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RTXKVAG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDzE2c%2F7mrht98%2FtQk75HMU2dwaNEbkhVYFBl5mTFBXjwIhAM4fUO%2FPVNy2Ymv0KiIzVsVpvM3YSyGTFyMHRdMqErW6Kv8DCEYQABoMNjM3NDIzMTgzODA1IgzWTyKawqoyNS9G9Bsq3ANab6RRja47BrM1y4KdS3B%2BA0v%2B1YaVr0h1yOIR74VxIxlMKOkbjA0qzHJInslNR%2Fg4hfimguWcTd0Aa4lJt4ObvUzjcEKsjRGbd6cC685KTbG09wk0H0BViYiA9g4QWi5LMI50LULpsFOdFEQvQNW5%2BLIoiGCQOusg%2FRJ0uu8bFUuci%2B84hWdwAdvHKN1Tycu0ifilF1aoOC7R3I6VwSzk5zCLbdptuZayyvwc9Xz%2FuXSJ85Cr1hpLd98igbeZYgdxt9K%2BQ1GDwJPhhhM2FiGpo%2BUo0nyJOW7ASkdofqaM%2BD%2F24Od3wgySoYU5k1s%2BHpZp6lx2wiu2vbqG33fY5lBPkPccaNQfQrdncKz3UaCGqy%2B5kmX84R7MUba%2B0FFLLkPsToOeKA3Ep9NLhUFT43KqZXDaPTdR4mPZiC6sXPpq8JYYDk2G7QjwiY0p98mhGU%2FB6glIlfemu6Aaa50PqVH3dYNNoFOsi7%2F7kz49AfVyWYz%2BUS73zLfsGbvyeLiZ4jIBe1fm3isLButagu9NtOYd9ffecizj0V8iCQl68y0pYxnKScsaQTukj2hMDZz2U8QnnIcTGf4mIMvvGIkfdFC2mqkXFfZGBa4iBFAFRjK%2FzzY2chQCj2LobMwJnjDqg8bJBjqkATyQBxSXppOGlC48nnc6DnChz67Lj9%2B9dLfdc%2Fr43xd%2FC5EQpsFylKe%2FM5tiBMf9QNlrVj8Ar6L7Njble67VpRoom7tR1eylWmui0QmI3tX7kZs1Cgr9GEi9uKx6rA2OeISt0SEXWkyu2oTM6TYwdUdv2AjWwlp5iTXbPb%2BWQi1bF00McW8xv4o70ZtGNVlgJuBvrK904jyOL3BF4%2FZcV%2FUewzYE&X-Amz-Signature=ca69e7b29adb9d235197154f381bed736b129db4086a852f7f221ead58b623e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
