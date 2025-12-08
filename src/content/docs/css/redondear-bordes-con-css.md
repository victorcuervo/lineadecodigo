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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRB7OY4J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvJjBfAT%2F7kDtHBUpP1R4itOAAYvuB4Gb8zKe8a6e1oAiEAsddyQqL3wbssW%2BSuWQzQeha4ZZt%2BLr64aSLI7JGJfz0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgP0wL%2BhfY9U8VrhyrcA83oI%2FA2f3pAXnhAENRpFn2L2p%2B8oHi2cRXtLowym9ZmMY5JeJMDH%2FgGvJ5ry7Ar19APIOmF%2FclycmIfIPXpLdeFurJyuSkI6tHQmEJOk5FoopMD4aDu3NYYHIMazgYc8TtJd%2F29bY0co35p497eyPI%2BRSy46wJVVO3xVQkA0oVxToYCnqc7cwZcAPWSVfiEG%2BTYHwA0A8xPj4TL9mybkpY%2FtFuikkZQuMo%2Fqc2oLs1utpQkGkaVNfIDK7HWCEckP8EZa8suCmgmIwGTS0xQf9H8nVGOmENkcU2xzu2PH0wCr9VF1pr75j2kbFB3eXSHydjY1KaWKLG4VhNFP%2BOzF6%2B18YgODiLpn%2F2Ur1XTR7m1hEusrXxbUNxSuh%2F9oJ0ljGvyXcz3Vv1hNwcQdf2DgJBsGIGi7feTY8o5StqlBZOn9vtAsKGHoaskVXx5Y%2B9VP%2BKDakvRamcO3A%2FsY3IhNVLWk5Vw%2BvCdvfSiaZ8DHKJcR%2BNG214WrIPhwx3QBZoCnX7eYem4Nc2fKqnautAqhe0MGkyyEwNWRQS2tOhR3g7%2BcS%2FibAgQtWjjL%2FeYzN4AvXIoy5UDVL7DJ2dvd72yTPDZzJwYLAY5KT3H%2BD1YwVOoZ7QDCUl%2FyB26cpaFMN6P28kGOqUBrmvQkU%2BrG11gQIvT%2FSXhBBurH0w40erYlmmHoIaoBqej9nnSHGLf4VZ9htIwZTKmpOBYhiboKLAARvv4q9zgxGtQo3n3%2F6LeyEGzAJ%2BNT7bg7wBqHhjQsI%2FdK%2BlRgCgtDwbE4mI%2FKdfBGpNjZU4avKDeIMog0HuPui8KSZcaSTbZdXYeyyxfESvnfhRPns%2Fak13Z515qmDSk1MmdFhvqx6FgscBT&X-Amz-Signature=d075284e84a9a2464851b219efe9f4dfbf94146539ece4450827c348bc4a8749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRB7OY4J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvJjBfAT%2F7kDtHBUpP1R4itOAAYvuB4Gb8zKe8a6e1oAiEAsddyQqL3wbssW%2BSuWQzQeha4ZZt%2BLr64aSLI7JGJfz0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgP0wL%2BhfY9U8VrhyrcA83oI%2FA2f3pAXnhAENRpFn2L2p%2B8oHi2cRXtLowym9ZmMY5JeJMDH%2FgGvJ5ry7Ar19APIOmF%2FclycmIfIPXpLdeFurJyuSkI6tHQmEJOk5FoopMD4aDu3NYYHIMazgYc8TtJd%2F29bY0co35p497eyPI%2BRSy46wJVVO3xVQkA0oVxToYCnqc7cwZcAPWSVfiEG%2BTYHwA0A8xPj4TL9mybkpY%2FtFuikkZQuMo%2Fqc2oLs1utpQkGkaVNfIDK7HWCEckP8EZa8suCmgmIwGTS0xQf9H8nVGOmENkcU2xzu2PH0wCr9VF1pr75j2kbFB3eXSHydjY1KaWKLG4VhNFP%2BOzF6%2B18YgODiLpn%2F2Ur1XTR7m1hEusrXxbUNxSuh%2F9oJ0ljGvyXcz3Vv1hNwcQdf2DgJBsGIGi7feTY8o5StqlBZOn9vtAsKGHoaskVXx5Y%2B9VP%2BKDakvRamcO3A%2FsY3IhNVLWk5Vw%2BvCdvfSiaZ8DHKJcR%2BNG214WrIPhwx3QBZoCnX7eYem4Nc2fKqnautAqhe0MGkyyEwNWRQS2tOhR3g7%2BcS%2FibAgQtWjjL%2FeYzN4AvXIoy5UDVL7DJ2dvd72yTPDZzJwYLAY5KT3H%2BD1YwVOoZ7QDCUl%2FyB26cpaFMN6P28kGOqUBrmvQkU%2BrG11gQIvT%2FSXhBBurH0w40erYlmmHoIaoBqej9nnSHGLf4VZ9htIwZTKmpOBYhiboKLAARvv4q9zgxGtQo3n3%2F6LeyEGzAJ%2BNT7bg7wBqHhjQsI%2FdK%2BlRgCgtDwbE4mI%2FKdfBGpNjZU4avKDeIMog0HuPui8KSZcaSTbZdXYeyyxfESvnfhRPns%2Fak13Z515qmDSk1MmdFhvqx6FgscBT&X-Amz-Signature=5338f33992280fa3346d6df46459af8fe85155428f3ca8f8fe5dc1545c623cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
