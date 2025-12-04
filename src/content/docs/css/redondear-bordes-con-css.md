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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3X7643Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCVahQzh3HVR5I%2FvoLHtlnGuQ7QJIr01ZDuAoUp16BHdwIhANZ7BlxMecDdpGYsCJtK%2BAoI2tN5UYXyq8sLJDC4Un8LKv8DCEcQABoMNjM3NDIzMTgzODA1IgzJb4LG2f5je2iP6q4q3APjpw66HVc7UqAxdJ0a9hw0OAIWN09qb9jGG7z8FlG6nFGomieJduTUzzIMcwY6fsWyL121RoC6pp3GVWCNQArvroOcXKio6YlSfpsp3Ccm4Y5sHp4ZEefDagp7o4mkKyuEbB8GrVbhm4iEdrLKjowNV4Ktp0X7lu0PHbm6h8lWf%2BEeZp43KuXnMeLjT%2FRyz1ZcCjTX%2BXvMbjk9d9jXZD5c21wRwLT6tBczWw%2BxFPBowSSTUlMNHEtXEwTCugPrhIF3YXZzbxYWXUab%2F8vR6Ar3wnmFZzR3p3JZHWGjHemb%2B2bpnpEc7ZG7rkwdUbqPReLU8mD0rmNEjtNTekwEgW5R41y5wu913LlBrHAxX6uEMCbbigfXhlafXdk9XJ%2BjfBC0lxoy2pPz1ZnV%2FXMYGaBkwPUF%2Frpp5smF3vJtRTJSjfZiDBjvZNbvwtg0GeaNzfM2b%2Fe4t%2BNZ7OW%2FHC%2B1%2BuXhDgeZDWKTz8hqtohOZ5dza6rHdtwo7W%2F0392%2BmZsYAMsxEGTad5Tfqt7i%2F0pRCBMQKgYF5Pegc9LF1EJ4Igd14oCk9AjIgCkYrhF0%2BGmv3uFSz%2FJU5wEY0YOHrpwZPpgR4UpFQ0%2FfTamWPJHlrC6YbgkPLiOpc8zTFpERGTD8ocbJBjqkAYHHsBqkSdgq%2FcKjzo2Kk2boJWlkVafFgdQJStuwpinIjWCDgQUqPPeUr9NnGCppUpefKHG7%2BCsahvyhEJVM9jHJAa919KspKGxRJGI3E%2BgeJJttSeq0ktS35j%2F2wgQPjyZzBo0mYeXR1fBZOujOCs1ccGWati3T7JSA9xg%2F%2BcFrHV%2B0OcorAoo8VOPP4fz4e3RH7uKmfRyNIeE6HfY2QR1rKUte&X-Amz-Signature=597f3c1cc4ef6cb90a8afa04630940bfbe5e1ad722543830d58e48d0d8cb0c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3X7643Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCVahQzh3HVR5I%2FvoLHtlnGuQ7QJIr01ZDuAoUp16BHdwIhANZ7BlxMecDdpGYsCJtK%2BAoI2tN5UYXyq8sLJDC4Un8LKv8DCEcQABoMNjM3NDIzMTgzODA1IgzJb4LG2f5je2iP6q4q3APjpw66HVc7UqAxdJ0a9hw0OAIWN09qb9jGG7z8FlG6nFGomieJduTUzzIMcwY6fsWyL121RoC6pp3GVWCNQArvroOcXKio6YlSfpsp3Ccm4Y5sHp4ZEefDagp7o4mkKyuEbB8GrVbhm4iEdrLKjowNV4Ktp0X7lu0PHbm6h8lWf%2BEeZp43KuXnMeLjT%2FRyz1ZcCjTX%2BXvMbjk9d9jXZD5c21wRwLT6tBczWw%2BxFPBowSSTUlMNHEtXEwTCugPrhIF3YXZzbxYWXUab%2F8vR6Ar3wnmFZzR3p3JZHWGjHemb%2B2bpnpEc7ZG7rkwdUbqPReLU8mD0rmNEjtNTekwEgW5R41y5wu913LlBrHAxX6uEMCbbigfXhlafXdk9XJ%2BjfBC0lxoy2pPz1ZnV%2FXMYGaBkwPUF%2Frpp5smF3vJtRTJSjfZiDBjvZNbvwtg0GeaNzfM2b%2Fe4t%2BNZ7OW%2FHC%2B1%2BuXhDgeZDWKTz8hqtohOZ5dza6rHdtwo7W%2F0392%2BmZsYAMsxEGTad5Tfqt7i%2F0pRCBMQKgYF5Pegc9LF1EJ4Igd14oCk9AjIgCkYrhF0%2BGmv3uFSz%2FJU5wEY0YOHrpwZPpgR4UpFQ0%2FfTamWPJHlrC6YbgkPLiOpc8zTFpERGTD8ocbJBjqkAYHHsBqkSdgq%2FcKjzo2Kk2boJWlkVafFgdQJStuwpinIjWCDgQUqPPeUr9NnGCppUpefKHG7%2BCsahvyhEJVM9jHJAa919KspKGxRJGI3E%2BgeJJttSeq0ktS35j%2F2wgQPjyZzBo0mYeXR1fBZOujOCs1ccGWati3T7JSA9xg%2F%2BcFrHV%2B0OcorAoo8VOPP4fz4e3RH7uKmfRyNIeE6HfY2QR1rKUte&X-Amz-Signature=df30a067742a720992006ab9812b5d2f20707454f80b012c7aa40a44669814cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
