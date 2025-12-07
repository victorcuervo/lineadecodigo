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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRPWMND%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQQcRlAQMeY9vE3ib8tQaF9pqXa7FhWX8VG744WbrNpAiAO%2Bz%2FNrcVomBuHmk5zEHcmvHxJjfDeXoWe2lhuhWQeAyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkzGHQ%2BWfJkwMz2P2KtwDo8BRYpc4ftVd3sRqeZ9nPOhUKLgo9hKbXSx1tiUPcQJUjJ2UPfkb10a9rSeVZQExXyfnC03Vf6OVFUBJa08Y7yptnKgaEs%2BO2%2FgL9P40o34%2B6yEGdMt3VO4F4AoxUT0lG8XdzaCVN9Jy8D2w8UAY7zfL8i1LSPABkO0%2FQJZ7m9gacOAUk71M1QXWHOaFRI7Wq3CAKP4feSNEr1ppG0n%2BdCZq8CB9kcaeuZRHEMTgOlItqZVwAI5TlDccxKSCD9pBtjZnXdlmLR6NvU%2B%2FlNwymW9e3PjWJF9RukG2ZBu7QLGGyGu37tk7YCkHDGG%2BJPc5wodJQ3MH7DtbmgbMuG8Vg8TFao6zMTs5qN8fGhh%2BA53QjjCGYZrp7MtWGuP%2BZomAh0vOM%2FhFVGCOllt51D4jY%2FduHchHe1AuslwaV%2Bnn3PUU1z7saOmg5GJSKMK8m0LTLPqHQbWUFfdfLZIfUXIujfKvY%2FStICPWdoFoFWyu%2FSUTkw%2BARE48f0ICe12g6t%2BQwCeJTZzb7KxajxsAUypPtd1UBRBJmzJtFssM6O3d4wMGAf88FbcH8k%2FKNMtpTKB880tZ%2BqEF927OXRWSI0LsOCcQYcgkisDco1QUoGQYuHEJJq7PEk953uyKLYgwkJrVyQY6pgF%2FF99Urmf30wwcQOcSoSiuR5Y9xc0xo%2BLHzBqRayT1fNzXAohbRh978lsZvI6ma8BSnFse38avlLVSZ0f64vCqk%2ByMrOxcgSTzJrK2g7r21JMCqW7YGXGrthZG1yuVuurA72trddwWacHcwemJ6%2FDiba2zHBIcs7V3w8C6QL0CPu0cnD4TSCeOTLJTOCuRtFgskcCMv6nhoCb0KR8HYg2zH5SvSaak&X-Amz-Signature=6fb3a559d504c923a5c25f33ddfd5bcc5a5c33e799e02d736d3f2759c52aa433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRPWMND%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQQcRlAQMeY9vE3ib8tQaF9pqXa7FhWX8VG744WbrNpAiAO%2Bz%2FNrcVomBuHmk5zEHcmvHxJjfDeXoWe2lhuhWQeAyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkzGHQ%2BWfJkwMz2P2KtwDo8BRYpc4ftVd3sRqeZ9nPOhUKLgo9hKbXSx1tiUPcQJUjJ2UPfkb10a9rSeVZQExXyfnC03Vf6OVFUBJa08Y7yptnKgaEs%2BO2%2FgL9P40o34%2B6yEGdMt3VO4F4AoxUT0lG8XdzaCVN9Jy8D2w8UAY7zfL8i1LSPABkO0%2FQJZ7m9gacOAUk71M1QXWHOaFRI7Wq3CAKP4feSNEr1ppG0n%2BdCZq8CB9kcaeuZRHEMTgOlItqZVwAI5TlDccxKSCD9pBtjZnXdlmLR6NvU%2B%2FlNwymW9e3PjWJF9RukG2ZBu7QLGGyGu37tk7YCkHDGG%2BJPc5wodJQ3MH7DtbmgbMuG8Vg8TFao6zMTs5qN8fGhh%2BA53QjjCGYZrp7MtWGuP%2BZomAh0vOM%2FhFVGCOllt51D4jY%2FduHchHe1AuslwaV%2Bnn3PUU1z7saOmg5GJSKMK8m0LTLPqHQbWUFfdfLZIfUXIujfKvY%2FStICPWdoFoFWyu%2FSUTkw%2BARE48f0ICe12g6t%2BQwCeJTZzb7KxajxsAUypPtd1UBRBJmzJtFssM6O3d4wMGAf88FbcH8k%2FKNMtpTKB880tZ%2BqEF927OXRWSI0LsOCcQYcgkisDco1QUoGQYuHEJJq7PEk953uyKLYgwkJrVyQY6pgF%2FF99Urmf30wwcQOcSoSiuR5Y9xc0xo%2BLHzBqRayT1fNzXAohbRh978lsZvI6ma8BSnFse38avlLVSZ0f64vCqk%2ByMrOxcgSTzJrK2g7r21JMCqW7YGXGrthZG1yuVuurA72trddwWacHcwemJ6%2FDiba2zHBIcs7V3w8C6QL0CPu0cnD4TSCeOTLJTOCuRtFgskcCMv6nhoCb0KR8HYg2zH5SvSaak&X-Amz-Signature=cc127e44bf21cc903490c2d1eb32687d88f4f6a5ed952517091d47566742c108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
