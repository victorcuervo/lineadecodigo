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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZP7U2NJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWlQKi2Jiw8tlIgsa0AWVoYQmWdbe%2BvqkqE7SuGeaqtAiAm%2FDDOi6ikH8Y1z22Pwjuw2PedG87I5GtXkBlGPp9zKyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwm54UYLSE5m9NNE1KtwDmKMeI41ii11XQ%2F1f2Zn000qmo%2BBqvmC8yBsE6bmp1XCAe8oaxAkFPgAPN7vW4G9KARBhwRUxbG5z7pQMFxVh82WClc1D7OQ5%2FAwkd7Ar9qUW8cSVSAxQfzZW1B1QB%2Fu58%2Fcv0bpp%2FBrJdr017Qy%2F4Csl0zmb6LMcUYRLMFic2uwswUBoLbYbj34xuzuS41c%2FnKAqEiCOrXbwkVRvRLSDSNBvOAmvsdABFt4VAiok%2Bfhfr3ZFcWHl%2FMwWBZ7wKGM%2BpRZVd2kkidxs%2BSEJHn533jSv77HQphp18A0a83E0tdiEjuh10YKUAqwO0RXzEFAPrSq%2FHBGm%2FnGwEU1ogH58hDFkhGRaVLuD2mPEgGIc93KzJit32GpGu8AQlHAcHTCKXchkHeytlm5B%2BFSyc4Q0kcGtulJQ8qoHzXuB6i9sVm7tYu6VeSHbklbPkklwI9nKa2%2B2SFhkkTQQeFtgcvjZ6cZ1lf3dRQyM2cQwKNBDacXr6Td7o5ypA7E4TiNyiRULSQfDQK0ppc5JudtFSP%2BPPyW%2FCtwD%2F%2FrE18qEiruX6qclRzQquxhLePwmiBbbB8K%2FvuFB8TLxj%2F8yu52vw2emkQiyt1ADxw4Q3wjyBecFMN5WtV1K3iAD5%2FqBxL8w2p%2BLygY6pgHLKEWlDbeHAeh0grabrmSCbvueg2NLTM4lodW5FI6zV4oEztPwg9kNFVbon5S5CeIntCcXvPTrWcdc77us7lWSJhNeYRUuKzh5XP0nPH4FjJpA4bZ1b8fp%2Fa7QUGsxbGrh81iEEq4gsL8cPl%2F6m4vYejl5WDi7p5sO7AKWNOTKN%2Fh8hKbwSwnG01562edzx5COaYbTFAKiSax%2FAT1Ztxt%2F6J86qozh&X-Amz-Signature=5a0a39564b2227515bc05d03d8cbcb09ab3b99760c0528558e02b3e7435cca6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZP7U2NJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWlQKi2Jiw8tlIgsa0AWVoYQmWdbe%2BvqkqE7SuGeaqtAiAm%2FDDOi6ikH8Y1z22Pwjuw2PedG87I5GtXkBlGPp9zKyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwm54UYLSE5m9NNE1KtwDmKMeI41ii11XQ%2F1f2Zn000qmo%2BBqvmC8yBsE6bmp1XCAe8oaxAkFPgAPN7vW4G9KARBhwRUxbG5z7pQMFxVh82WClc1D7OQ5%2FAwkd7Ar9qUW8cSVSAxQfzZW1B1QB%2Fu58%2Fcv0bpp%2FBrJdr017Qy%2F4Csl0zmb6LMcUYRLMFic2uwswUBoLbYbj34xuzuS41c%2FnKAqEiCOrXbwkVRvRLSDSNBvOAmvsdABFt4VAiok%2Bfhfr3ZFcWHl%2FMwWBZ7wKGM%2BpRZVd2kkidxs%2BSEJHn533jSv77HQphp18A0a83E0tdiEjuh10YKUAqwO0RXzEFAPrSq%2FHBGm%2FnGwEU1ogH58hDFkhGRaVLuD2mPEgGIc93KzJit32GpGu8AQlHAcHTCKXchkHeytlm5B%2BFSyc4Q0kcGtulJQ8qoHzXuB6i9sVm7tYu6VeSHbklbPkklwI9nKa2%2B2SFhkkTQQeFtgcvjZ6cZ1lf3dRQyM2cQwKNBDacXr6Td7o5ypA7E4TiNyiRULSQfDQK0ppc5JudtFSP%2BPPyW%2FCtwD%2F%2FrE18qEiruX6qclRzQquxhLePwmiBbbB8K%2FvuFB8TLxj%2F8yu52vw2emkQiyt1ADxw4Q3wjyBecFMN5WtV1K3iAD5%2FqBxL8w2p%2BLygY6pgHLKEWlDbeHAeh0grabrmSCbvueg2NLTM4lodW5FI6zV4oEztPwg9kNFVbon5S5CeIntCcXvPTrWcdc77us7lWSJhNeYRUuKzh5XP0nPH4FjJpA4bZ1b8fp%2Fa7QUGsxbGrh81iEEq4gsL8cPl%2F6m4vYejl5WDi7p5sO7AKWNOTKN%2Fh8hKbwSwnG01562edzx5COaYbTFAKiSax%2FAT1Ztxt%2F6J86qozh&X-Amz-Signature=4b66408fdf4d02b3a3d26e346c8d656376ead01c7469ac695950f199cd88705b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
