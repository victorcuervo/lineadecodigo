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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2NYMQY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjDR3TG9xOdydNw8%2FJAX8zFs1q3o2rrm3hJLaUVQXbAAiBzfNlJpD9t9%2BQYsbx0mf%2BxKhuqQgV8Prcv3BZu%2FwdUgir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMKObhYguzsBwxBhixKtwDTIA5SxzSuwgUgq6S6WqfZYPqS%2FOMHgfpiPr%2F6IeNsV6JED3DojQW5Low4pqlxvyufjkvoIp1AJOgPRN8gDhV6Uh%2BQFLOyn%2BURzqcR9cQ7kfMJSb5HuJCg7HCjU6FWma90VyNZehGNdZSUSFr%2BBZpG%2FD3WhZcYXzTMYdWwE%2F0a3ivKWl1lFsCxGgcOPzYh7zri8NsZVDv8vYP%2FTaiskRC1kFKMwVdskt4cjAZ0KlwN5TUrENj7desFcaeASZZ%2FbPkChXjBiwQSBg0e4b30QhRigQlAzbbyWyHkfDeCHQ3D%2F4EJmoeNJFZoNch8WW6h9tedVI4g27wkNhAglSwJSSNQypL1k7uXgVEhqPsFUgFEuyiURHU8fGaF%2F559%2BliY3sVaECyUwD6zb%2B6Zc9ImWIqruloaoIFwx%2F%2BsI9tMU04VWK%2FsNrCN4xxeuzYoVyxa1FTP1b2%2Bqbr5ja3iG1I3D1zE5CidtiS9NMy%2FlwilUDXNXsKZ4R2eL0gc8gsR309a5Pi59%2F6o2hH5sSxumc4AM3qD3VLGfblKTfxyqbkGQnLaEyFoVBMDKlsqFYps8RG2wx4mgpx8Q25WbnhEZt%2FPKMXNO1hPSZ6Lcq5PIlRUveccHs9mzRJeiGWyCV%2Fe98wpevPyQY6pgH5mtLBO%2Bn1CR0%2BKuFfUrg8PRGvRoLO4IJ%2FZTcIWSA9N6OSS4eRbPt65iWRklMlCiZ8UkaFeNL4SGMyqoDIHLMkegJVQmO2SbrlMjO9T0iBXvSWemXK9g53AobToTleF%2FjambsILooc4oD4ASXAqpZaX0re2yYqxc3r73Ejqf82fZMKeItEZvNW%2B1FkDMit9uDJoG6lz3CKgA5wwQxJd0lxonS5pu5t&X-Amz-Signature=73bd9a328a2f74020645351ae8084699628671cb46c4911a3bd8afe7f17da684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2NYMQY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjDR3TG9xOdydNw8%2FJAX8zFs1q3o2rrm3hJLaUVQXbAAiBzfNlJpD9t9%2BQYsbx0mf%2BxKhuqQgV8Prcv3BZu%2FwdUgir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMKObhYguzsBwxBhixKtwDTIA5SxzSuwgUgq6S6WqfZYPqS%2FOMHgfpiPr%2F6IeNsV6JED3DojQW5Low4pqlxvyufjkvoIp1AJOgPRN8gDhV6Uh%2BQFLOyn%2BURzqcR9cQ7kfMJSb5HuJCg7HCjU6FWma90VyNZehGNdZSUSFr%2BBZpG%2FD3WhZcYXzTMYdWwE%2F0a3ivKWl1lFsCxGgcOPzYh7zri8NsZVDv8vYP%2FTaiskRC1kFKMwVdskt4cjAZ0KlwN5TUrENj7desFcaeASZZ%2FbPkChXjBiwQSBg0e4b30QhRigQlAzbbyWyHkfDeCHQ3D%2F4EJmoeNJFZoNch8WW6h9tedVI4g27wkNhAglSwJSSNQypL1k7uXgVEhqPsFUgFEuyiURHU8fGaF%2F559%2BliY3sVaECyUwD6zb%2B6Zc9ImWIqruloaoIFwx%2F%2BsI9tMU04VWK%2FsNrCN4xxeuzYoVyxa1FTP1b2%2Bqbr5ja3iG1I3D1zE5CidtiS9NMy%2FlwilUDXNXsKZ4R2eL0gc8gsR309a5Pi59%2F6o2hH5sSxumc4AM3qD3VLGfblKTfxyqbkGQnLaEyFoVBMDKlsqFYps8RG2wx4mgpx8Q25WbnhEZt%2FPKMXNO1hPSZ6Lcq5PIlRUveccHs9mzRJeiGWyCV%2Fe98wpevPyQY6pgH5mtLBO%2Bn1CR0%2BKuFfUrg8PRGvRoLO4IJ%2FZTcIWSA9N6OSS4eRbPt65iWRklMlCiZ8UkaFeNL4SGMyqoDIHLMkegJVQmO2SbrlMjO9T0iBXvSWemXK9g53AobToTleF%2FjambsILooc4oD4ASXAqpZaX0re2yYqxc3r73Ejqf82fZMKeItEZvNW%2B1FkDMit9uDJoG6lz3CKgA5wwQxJd0lxonS5pu5t&X-Amz-Signature=da22cdd48f6639fae37bcffccd668f568908913e11d7c2986bc25529e2b7285e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
