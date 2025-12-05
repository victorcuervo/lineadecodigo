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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TUBBMCI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLIB1wknMl8LNZ0ae5fw7TSygE1eR37kYadPNAOW6uIAiAWgcbVKHJ8f7pmfRSvaCkkodgmDwu8vkD2YeThc1zi8Cr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMYLG5lOvuv%2BWffQdhKtwDIT718YdskB2N58FPkMtIZxH8Ni5iMn3K3SEJXmCken0vS%2BeXpwFD%2BGZt9%2FvZuZF7NGfBBlrMATuNJVtj7zSbvYHI681j2Np6Dl0tTvvblSvLrtncEy%2BkrsRyzUUV08xdUAN1bnsBxajatVfivHEX%2FrvtO9RFtlTjgdFK4j2Xn8eMg1KegH%2BWjNZMbKNCrjSeZOAJR6TVqaz2d%2FYYt7mlJ46sfR24gC8IVvK%2BKw8kMGvEFcfRYdMkIwu811Bb%2FOF5bsHnIujK4fOKdZcRAi2l1561RTnWQvcrzCl4J5ZbW6HEhQDGv8VzIetmzjgqAqCYzpkkgo7rcGBELXmV0XhuzJOn%2BzHx9zbTul7JjG62AeldPH0laaVN%2BFlISHwE2kkyUwTD%2B99D0XiJfnoVqXEajTkbGXSQrWtwLZXy4BCLCAZANbjx9OsrQo77wUvGCAizp%2FErT92EAMDNYLUwsmxAszv4IGyvE5OggF28ZAkgtea2cT%2FjX9fktYaKwMcm5QEhM2nMaPWIGqJ5Jny6Y5nxsHhfg8X13%2F7YnJY%2F5PQUGPerFosznkpFJNnLqcJIFZoSTLYKJXPUyWYRjvGNMCnv4EIj%2BHsK4xOp4OXB8CVDrL%2FIw0Hzi5VbF%2B7tPcwwg4vIyQY6pgF%2FpcJ20M7x3SajgzqUKY7qwO53pvJHmyUTBLhZ6KGycSeI0my9r89WBYDnuzOmyKjjmtC0ZDjAXSnzIaWxZ318VtF5k1x3powYFhv%2BaMvBoifKUvX%2F%2Bjr2jGDRWPo998jbVg3to3A9eEp73FM4Ts1L2V1l9Fma5o1gNLmoeloZgGN8aGTNHbj9UqYTCIuirJAktNOk2FGMEzcttzDeAQLxQ3GVtXhA&X-Amz-Signature=77a782c70f08c88959227752f3af0e0758dbbe57b877bcc8f09d084cf01bee29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TUBBMCI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLIB1wknMl8LNZ0ae5fw7TSygE1eR37kYadPNAOW6uIAiAWgcbVKHJ8f7pmfRSvaCkkodgmDwu8vkD2YeThc1zi8Cr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMYLG5lOvuv%2BWffQdhKtwDIT718YdskB2N58FPkMtIZxH8Ni5iMn3K3SEJXmCken0vS%2BeXpwFD%2BGZt9%2FvZuZF7NGfBBlrMATuNJVtj7zSbvYHI681j2Np6Dl0tTvvblSvLrtncEy%2BkrsRyzUUV08xdUAN1bnsBxajatVfivHEX%2FrvtO9RFtlTjgdFK4j2Xn8eMg1KegH%2BWjNZMbKNCrjSeZOAJR6TVqaz2d%2FYYt7mlJ46sfR24gC8IVvK%2BKw8kMGvEFcfRYdMkIwu811Bb%2FOF5bsHnIujK4fOKdZcRAi2l1561RTnWQvcrzCl4J5ZbW6HEhQDGv8VzIetmzjgqAqCYzpkkgo7rcGBELXmV0XhuzJOn%2BzHx9zbTul7JjG62AeldPH0laaVN%2BFlISHwE2kkyUwTD%2B99D0XiJfnoVqXEajTkbGXSQrWtwLZXy4BCLCAZANbjx9OsrQo77wUvGCAizp%2FErT92EAMDNYLUwsmxAszv4IGyvE5OggF28ZAkgtea2cT%2FjX9fktYaKwMcm5QEhM2nMaPWIGqJ5Jny6Y5nxsHhfg8X13%2F7YnJY%2F5PQUGPerFosznkpFJNnLqcJIFZoSTLYKJXPUyWYRjvGNMCnv4EIj%2BHsK4xOp4OXB8CVDrL%2FIw0Hzi5VbF%2B7tPcwwg4vIyQY6pgF%2FpcJ20M7x3SajgzqUKY7qwO53pvJHmyUTBLhZ6KGycSeI0my9r89WBYDnuzOmyKjjmtC0ZDjAXSnzIaWxZ318VtF5k1x3powYFhv%2BaMvBoifKUvX%2F%2Bjr2jGDRWPo998jbVg3to3A9eEp73FM4Ts1L2V1l9Fma5o1gNLmoeloZgGN8aGTNHbj9UqYTCIuirJAktNOk2FGMEzcttzDeAQLxQ3GVtXhA&X-Amz-Signature=6e525b9b9a6a254e1df99a2fbf82a782af2ff6b3eb32e054382fe2a1499c0c28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
