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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAVBQJKY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeWE46ijfIU0eTbKJer4kn%2Fpf4WwgN%2FFFmWn0UvHXqwwIgQk1vTAEQxHX%2FJTiXqI%2BapQgWpLNGQ6gUZCNiPGxQYokqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4fU1cGDa8wO8D61SrcAyXngKOfqnF6mi21%2FOM77tKd6tSnggxGuwX2nXOnD5vQ%2FHjV5m3D8qNSIJFwhCDtMSBmXmpBTSMxlCTkxi4jggCLYvstHF1VVD1iO0iklzuaq%2F8gt96UOAJS3Q2rx2clL0v28mKEFlDQwRwzSW7gs%2BZoPNSZHV35fqfTUgLegLTnGucQ1XcTki5f0LSh2Kd1HZ2eILy0IuKiEcoQgVQK7DyHfMhBxlYttAiPVVHLM1%2BJskZeI2dIYBsi1MhpOuu7avGwLwrP%2FhioPUt4%2Fu70Kavc7Gn6da3rw8LcGz8k3ebEjlRg6DkGkefuQfUzv0JXIGhmO96XlOE2bpGB4Dmpsa7u9dEuwXRYBwko46PeUx7eEp0B1wTsS5F%2FSM7hh6LtqoErGhE1w%2Fa7PszGwATqWdpBJxuFlYixrF4sPQ6guqC5aPEZ7R2EUJNE2rAAD4TYghktWsdr%2Fk586Bf%2B3TQ1r5FF1fUMGkguDQy%2Fu9Xdh2ClBCtfp1pojrTZc2DBR0zQmdSyL5SYDDpzH8AtWvWRPRj29QoCNxAPrgU1MLCNqeTjiI4u%2FrhDPz%2FvM0xWBFYtnM%2F8KUnUUyt6YJSoMvS%2BLffIb60SCh48DSxwT3EKdpZ6le72WIoiTCA2ImPqMIHq3ckGOqUBBi8ZiIRJFK9dXo%2FesdPNTiiPTOLV%2FseCOjjTA80sY4boxDojpGel2265NvaH5FPn7ukn%2Fm48%2FbBthloZBYKwYgC0ozaS87l6N2eGWW2jfaZO7nE8RAd6TNmIj%2BQ6FqK57LhjOfMiskPE%2BIarduga5c6f438GrfQ8HMXC7hFo7ZAswm2w%2Fb8WdYSvxG0rLV20p5wDGmU%2Fouh4EYBWLmQ3sOAyIfyT&X-Amz-Signature=e217d1932ec825ad2c444914d8c704c0bafb7543582e7f40cb998e3ed2bfd547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAVBQJKY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeWE46ijfIU0eTbKJer4kn%2Fpf4WwgN%2FFFmWn0UvHXqwwIgQk1vTAEQxHX%2FJTiXqI%2BapQgWpLNGQ6gUZCNiPGxQYokqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4fU1cGDa8wO8D61SrcAyXngKOfqnF6mi21%2FOM77tKd6tSnggxGuwX2nXOnD5vQ%2FHjV5m3D8qNSIJFwhCDtMSBmXmpBTSMxlCTkxi4jggCLYvstHF1VVD1iO0iklzuaq%2F8gt96UOAJS3Q2rx2clL0v28mKEFlDQwRwzSW7gs%2BZoPNSZHV35fqfTUgLegLTnGucQ1XcTki5f0LSh2Kd1HZ2eILy0IuKiEcoQgVQK7DyHfMhBxlYttAiPVVHLM1%2BJskZeI2dIYBsi1MhpOuu7avGwLwrP%2FhioPUt4%2Fu70Kavc7Gn6da3rw8LcGz8k3ebEjlRg6DkGkefuQfUzv0JXIGhmO96XlOE2bpGB4Dmpsa7u9dEuwXRYBwko46PeUx7eEp0B1wTsS5F%2FSM7hh6LtqoErGhE1w%2Fa7PszGwATqWdpBJxuFlYixrF4sPQ6guqC5aPEZ7R2EUJNE2rAAD4TYghktWsdr%2Fk586Bf%2B3TQ1r5FF1fUMGkguDQy%2Fu9Xdh2ClBCtfp1pojrTZc2DBR0zQmdSyL5SYDDpzH8AtWvWRPRj29QoCNxAPrgU1MLCNqeTjiI4u%2FrhDPz%2FvM0xWBFYtnM%2F8KUnUUyt6YJSoMvS%2BLffIb60SCh48DSxwT3EKdpZ6le72WIoiTCA2ImPqMIHq3ckGOqUBBi8ZiIRJFK9dXo%2FesdPNTiiPTOLV%2FseCOjjTA80sY4boxDojpGel2265NvaH5FPn7ukn%2Fm48%2FbBthloZBYKwYgC0ozaS87l6N2eGWW2jfaZO7nE8RAd6TNmIj%2BQ6FqK57LhjOfMiskPE%2BIarduga5c6f438GrfQ8HMXC7hFo7ZAswm2w%2Fb8WdYSvxG0rLV20p5wDGmU%2Fouh4EYBWLmQ3sOAyIfyT&X-Amz-Signature=89ee679ec83a66a8f2b2f9ba13a08603dd65a7a575b0b0be9b3ac9bb10646392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
