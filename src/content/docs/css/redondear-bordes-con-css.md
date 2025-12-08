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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZAP3OQ7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZPHBnF5oE%2FbqQN0MLVMk01cciOya%2B5h%2Bu6xh7BW1J5AIhAOSQYwfH994XQqmTDpMLxx41%2FNEE5WnInod5v7m1tw69KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH3HSOqwiAYXvovAQq3AOMfEbMCFehNTViaDTCiug9%2BiaZaY021KTrHhEJRKWuIRkwFr4qCn290HoKYNXyP81HwgVytMWdEGwiFDaCR43GfE6FcpeDYrJCQj%2BbiyBaN%2BIbYfxXV%2BsdMeS%2Bzq6dbJ1RLFYCp29B3NVUgGqf6jogSDg4fa5IkTuWe66KYWoZn1eskxzxQx04oYMwSbeChVPjLMzaLvq%2FKjW4WEGN801ApR%2Fk3Xw1fypLVtiXEsnygR0TSEUGwdEjEV1VLHRd56ZPgK5%2F9rz8Tc0Slf5Y4h5SszRdbAkJMN9U3dYg9Gu5tSShYw5mJFDSrGIR51j1KHA3xAlGJgd5mP7%2FWr9ET3ow5CfG6Pv%2BAfW%2B3IYGeT9J%2ByORSlm9ZSfHplS45D3AHbgaNN5qRuaAJf8ZgNwLnKS46fJmrDhuSmniBFTOVTCdeyRr%2FJmM75cs35SodTsGPYrB1RD6%2FTIwtaOJ81%2BoJxrhIheGs7CFKbCI3PBBE%2FDof0pxJcuOdZ40pAsoiBcnPeoC86DbOOo8PNkuqcza8XwMfGA1tw7e8F3zu%2BiMmz6Y9DGbeMdRZnRecl6b23GinjhYirA1DyauQ5sYXcbZ5dkNrXGJ80JB32yj6DMM3UVtgZ2Iz3JLhE1PX1wwrzDd0djJBjqkAZMuRDHeOQysZ5lqSDsDFpTiJMdCfZfMoPGnVz62VvQXeaPOy10MEZWkCEGOIsBWq%2BYAnD56Rk9sip1RZ0jXrz5VkShCuIyghlLVvhkFWVvmSfbZl9qOsrBhl8mQoS2AOypp619nXWyfbvfciRjj00eYVtWfYRXoTbbLthVYqxwVyEZu%2FC8%2BwXHi7uKn7UsbLtC0R%2Bq4vxXSDurD2TqAeU4zDYAD&X-Amz-Signature=2f582a8544c5f8509bee451e44becda6ef4653eef1cd22c926de333f71c1736a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZAP3OQ7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZPHBnF5oE%2FbqQN0MLVMk01cciOya%2B5h%2Bu6xh7BW1J5AIhAOSQYwfH994XQqmTDpMLxx41%2FNEE5WnInod5v7m1tw69KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH3HSOqwiAYXvovAQq3AOMfEbMCFehNTViaDTCiug9%2BiaZaY021KTrHhEJRKWuIRkwFr4qCn290HoKYNXyP81HwgVytMWdEGwiFDaCR43GfE6FcpeDYrJCQj%2BbiyBaN%2BIbYfxXV%2BsdMeS%2Bzq6dbJ1RLFYCp29B3NVUgGqf6jogSDg4fa5IkTuWe66KYWoZn1eskxzxQx04oYMwSbeChVPjLMzaLvq%2FKjW4WEGN801ApR%2Fk3Xw1fypLVtiXEsnygR0TSEUGwdEjEV1VLHRd56ZPgK5%2F9rz8Tc0Slf5Y4h5SszRdbAkJMN9U3dYg9Gu5tSShYw5mJFDSrGIR51j1KHA3xAlGJgd5mP7%2FWr9ET3ow5CfG6Pv%2BAfW%2B3IYGeT9J%2ByORSlm9ZSfHplS45D3AHbgaNN5qRuaAJf8ZgNwLnKS46fJmrDhuSmniBFTOVTCdeyRr%2FJmM75cs35SodTsGPYrB1RD6%2FTIwtaOJ81%2BoJxrhIheGs7CFKbCI3PBBE%2FDof0pxJcuOdZ40pAsoiBcnPeoC86DbOOo8PNkuqcza8XwMfGA1tw7e8F3zu%2BiMmz6Y9DGbeMdRZnRecl6b23GinjhYirA1DyauQ5sYXcbZ5dkNrXGJ80JB32yj6DMM3UVtgZ2Iz3JLhE1PX1wwrzDd0djJBjqkAZMuRDHeOQysZ5lqSDsDFpTiJMdCfZfMoPGnVz62VvQXeaPOy10MEZWkCEGOIsBWq%2BYAnD56Rk9sip1RZ0jXrz5VkShCuIyghlLVvhkFWVvmSfbZl9qOsrBhl8mQoS2AOypp619nXWyfbvfciRjj00eYVtWfYRXoTbbLthVYqxwVyEZu%2FC8%2BwXHi7uKn7UsbLtC0R%2Bq4vxXSDurD2TqAeU4zDYAD&X-Amz-Signature=70cdefd892cc6f08168332974ed54633bba4d3cc78570c30ab20dd93e6995164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
