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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUB3ZNUJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQC17uonxezN%2BhV0vRMBgaG0ToOhxGXzUPq03IYykpcH6AIhAI75pOcpya1r%2BKE4sYcmeXUFTpyBiXbaPrEozLEnpkUuKv8DCEgQABoMNjM3NDIzMTgzODA1Igz%2B%2F4wjanXvgT3L8esq3APTzO%2B8vBxwHKfMF6vIJP8Wa7KCvDH5l4pWG2WFRetV1w%2BR4OqUukNtjYCBpu1LAzRc1TsBZuq%2FvCO8EtAi74JpYYTzgzFcgv3rgEu2U%2FR1keGHJLX10SNu1ZLHs4qTifqIdFDD%2B4J%2B5kYNdGMyHg%2FkRTbr%2B0j%2FGEj3WDMoyC5VhjugS0vuEGpnPpjIfLnzB2WdQdnSDjRy9TfgymnnUArNp%2FbtI2QHBVyTXe8nAiiWkQjxRJWuqV9tXiKT73cXpz7J39z8WaokTn9%2BZwse6x0xmQKCqjqjHsbWcgohpz0%2FPTRV5beUamI1ESQX04aZn4LxYqcinQibbzDjZGLjzjoLeHN87IKuRmBdGVJfizQfJuRFW7PkuGNV4B4bkJEH%2BKgwyovpTOnpzfaa%2FOpX0gcZkyWybOu58zFDNz427IHeI%2FdYlCFnBxfMQTsquDs5gZcf79PZE82%2B7r5VDTfnIb5%2FBGINkqitplxl9OljL9FnV2QH6PBjMU9zqqYVNqwLjAE1XiG89fotxsFrpmEs1rO6bLZNqnSYSg6ajNEldp8hM%2FGDP3DHwoOFPGzpghDdl0HrkdRlHnB07nDJwLYkBp4Ksts3VO%2B%2FBdGTeFtyvTiyJLAaQYpeHmY3M5x1qTD3vsbJBjqkAXfvrDUmf3uf5BEKHfPlxOdjRXDFRn%2FPUyqBNS%2Fb%2ByLBFBhOu%2F0OIwNHsZmVE9PAVjnNsBj2Y66L5arL7mtpdxVUxzArRqmhysiaTO7roQ7E3C0oppJ3ciFKc6fagvBbBNj8l%2BTdkUwn9%2FyBf3hY%2FGnv8KUOYILPgVXliRUDDDzQqZZ%2FJquOxQiWKNBJ%2FUmgYbmcf6yATazDzuYcAxl2ffdNyVRm&X-Amz-Signature=3ee36737540c6dec184f10d2181e9fc2b9c21056b3adff7e483a77fcfd2bd3e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUB3ZNUJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQC17uonxezN%2BhV0vRMBgaG0ToOhxGXzUPq03IYykpcH6AIhAI75pOcpya1r%2BKE4sYcmeXUFTpyBiXbaPrEozLEnpkUuKv8DCEgQABoMNjM3NDIzMTgzODA1Igz%2B%2F4wjanXvgT3L8esq3APTzO%2B8vBxwHKfMF6vIJP8Wa7KCvDH5l4pWG2WFRetV1w%2BR4OqUukNtjYCBpu1LAzRc1TsBZuq%2FvCO8EtAi74JpYYTzgzFcgv3rgEu2U%2FR1keGHJLX10SNu1ZLHs4qTifqIdFDD%2B4J%2B5kYNdGMyHg%2FkRTbr%2B0j%2FGEj3WDMoyC5VhjugS0vuEGpnPpjIfLnzB2WdQdnSDjRy9TfgymnnUArNp%2FbtI2QHBVyTXe8nAiiWkQjxRJWuqV9tXiKT73cXpz7J39z8WaokTn9%2BZwse6x0xmQKCqjqjHsbWcgohpz0%2FPTRV5beUamI1ESQX04aZn4LxYqcinQibbzDjZGLjzjoLeHN87IKuRmBdGVJfizQfJuRFW7PkuGNV4B4bkJEH%2BKgwyovpTOnpzfaa%2FOpX0gcZkyWybOu58zFDNz427IHeI%2FdYlCFnBxfMQTsquDs5gZcf79PZE82%2B7r5VDTfnIb5%2FBGINkqitplxl9OljL9FnV2QH6PBjMU9zqqYVNqwLjAE1XiG89fotxsFrpmEs1rO6bLZNqnSYSg6ajNEldp8hM%2FGDP3DHwoOFPGzpghDdl0HrkdRlHnB07nDJwLYkBp4Ksts3VO%2B%2FBdGTeFtyvTiyJLAaQYpeHmY3M5x1qTD3vsbJBjqkAXfvrDUmf3uf5BEKHfPlxOdjRXDFRn%2FPUyqBNS%2Fb%2ByLBFBhOu%2F0OIwNHsZmVE9PAVjnNsBj2Y66L5arL7mtpdxVUxzArRqmhysiaTO7roQ7E3C0oppJ3ciFKc6fagvBbBNj8l%2BTdkUwn9%2FyBf3hY%2FGnv8KUOYILPgVXliRUDDDzQqZZ%2FJquOxQiWKNBJ%2FUmgYbmcf6yATazDzuYcAxl2ffdNyVRm&X-Amz-Signature=3eee2c556ade5904bd986645f728ed115e6b8505a2693a22578739d51f50d0b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
