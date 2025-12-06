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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGCJC5W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHzy1HMTzMDznGuhso4waCdLca1PaLj8rPJIqo%2BEE9SAiEA0LR6UKLTvCqlStYqNjr4owuyTv0UcFSb8B7mQ%2Flad%2F0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDD0YTzmRqkeCsWB%2FTyrcAzeeBd7xNZeTQPB4jwDVVWSvV2KHDg0Al%2FwJWXRB297L0xgnU%2FMrjCt78rifNJ6as28Q6Nn9q5g5pJ%2BNDmAy%2B3gQbPCiZS52Byg3yL7ESp%2F02xCXv9J%2BXWg327Z3%2FwpTSU7k%2Bq7kQ8VFqXXNT6HZBPmHD8nf1BrM9qI1v1YUi6l2zZOZ%2BLbeoXHTJBuWJj5%2BhQdP0CdI7wVZaMJpyC3X3taTOwoHdMAyPAF7Uj3iHjMxxy934umEH5QMY4Xzejk2yRyvrmygQCmHx5BhLzYNTHPvift1sEoWY%2FSykSFGih3uoF18OQp4SOuvFSOjKmZcp%2BOE6SiLizDhWDx%2BU7jqbAWKsQkJ5z5ACHvw0LWNApab4UnCYxaOXDkewxfFKwr%2FnPqRCGVs9sTfrQsxB%2F6%2FGUoxhrW4cG8AMyUURDfivYqflRUhNWWE0fkmQqRZhqt6eV1jjLtDr%2Fd%2BybxY5gX9%2BnKHFUc%2FoUJ8fO9VdhoAjUikjZchvS%2FPaA0uhQdxAfl%2BgsieebWETPyQqUr0rNZwiIJIW9oaBVinx%2B2NU5iuvIBWJgrphM0WffjydIdjUeD0aQPnGkGR19CsgeZm9I%2FZ8oVkQxvuua2t1h2aSurWvOP%2BsujwRX4rgaU1NVLEMLSnzskGOqUBtvXdUmEj8ACHFX7JR3os6zPFZVCglWgxFvky8zXk3lnDT4gay%2BDjQvrEanIgwV3Mmi4RjhoWEqhwR4nXvrJEs%2FvqHB1kym6vUVUh3ECV1BYyvxmEVgZ5j0%2B42nEn3cucoCQz5oSfdUckvoPECyIXm5NnlIvTugja21nHr%2BMtT5Slq%2BOOc45FqZAUxP6e5pUiy0QmV%2BmkYRDdZzGQEL%2FhjLfhhfCg&X-Amz-Signature=603e6518cd7fcf45d02d33b80316056832877806a1658537c20b8982a582f052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGCJC5W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHzy1HMTzMDznGuhso4waCdLca1PaLj8rPJIqo%2BEE9SAiEA0LR6UKLTvCqlStYqNjr4owuyTv0UcFSb8B7mQ%2Flad%2F0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDD0YTzmRqkeCsWB%2FTyrcAzeeBd7xNZeTQPB4jwDVVWSvV2KHDg0Al%2FwJWXRB297L0xgnU%2FMrjCt78rifNJ6as28Q6Nn9q5g5pJ%2BNDmAy%2B3gQbPCiZS52Byg3yL7ESp%2F02xCXv9J%2BXWg327Z3%2FwpTSU7k%2Bq7kQ8VFqXXNT6HZBPmHD8nf1BrM9qI1v1YUi6l2zZOZ%2BLbeoXHTJBuWJj5%2BhQdP0CdI7wVZaMJpyC3X3taTOwoHdMAyPAF7Uj3iHjMxxy934umEH5QMY4Xzejk2yRyvrmygQCmHx5BhLzYNTHPvift1sEoWY%2FSykSFGih3uoF18OQp4SOuvFSOjKmZcp%2BOE6SiLizDhWDx%2BU7jqbAWKsQkJ5z5ACHvw0LWNApab4UnCYxaOXDkewxfFKwr%2FnPqRCGVs9sTfrQsxB%2F6%2FGUoxhrW4cG8AMyUURDfivYqflRUhNWWE0fkmQqRZhqt6eV1jjLtDr%2Fd%2BybxY5gX9%2BnKHFUc%2FoUJ8fO9VdhoAjUikjZchvS%2FPaA0uhQdxAfl%2BgsieebWETPyQqUr0rNZwiIJIW9oaBVinx%2B2NU5iuvIBWJgrphM0WffjydIdjUeD0aQPnGkGR19CsgeZm9I%2FZ8oVkQxvuua2t1h2aSurWvOP%2BsujwRX4rgaU1NVLEMLSnzskGOqUBtvXdUmEj8ACHFX7JR3os6zPFZVCglWgxFvky8zXk3lnDT4gay%2BDjQvrEanIgwV3Mmi4RjhoWEqhwR4nXvrJEs%2FvqHB1kym6vUVUh3ECV1BYyvxmEVgZ5j0%2B42nEn3cucoCQz5oSfdUckvoPECyIXm5NnlIvTugja21nHr%2BMtT5Slq%2BOOc45FqZAUxP6e5pUiy0QmV%2BmkYRDdZzGQEL%2FhjLfhhfCg&X-Amz-Signature=5366419d57357cb7096ffa69ad09e9c33c4d8403a305d0508b01305d3b5b5383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
