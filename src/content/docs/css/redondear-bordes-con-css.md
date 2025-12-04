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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VC7JANA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCQCatSGccviM2OO3XY%2BvMQOM2DmzRj9GzYbpWoZqilJgIgPvmVD1ayNI7zqY7uaPUADozEyJWHZONjEo3Cm%2FVEKaQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDGmjyIAcS1ii9gfyGyrcA5Fs02c91cSlVNFrBJky8qmNG57vfU9DBwNBMAW0Nat29oMchZl0PRxdo6PPeClah9Ye9JT16jwTZ%2BYP4L%2FiUdbex3T%2FZs9ZYbgCNnChTaQ7LkZcg%2BlpUkgX4lYBVPdAjj4pTcXi6LepqJDqPFaWmXj3URsRTAGJAqiNvHRW3vwMrgoy2jGZSAEKRI5Zhhi%2FgcefVgyX9we%2FAEiadJNkfmy2dDpQb3el9YVGfHJOUEblZK305DbZy3qff54oDWfiPG9mq0Wd1boKHsYw76yAQHNMBRGbALUvGWk3keWS7BEowZOcm0YSi64xflcciDBOuz7OK4Lm1n%2FLXVGpTEq5fS3%2BKnPfqyVzLQPl2c9huTAdocThqwKnq3T1ZXq5LKTvm79qIQ7nYll3b6IoJQjChtYQgO28VZgEcPzivxdxajl4cgvJjb%2FcH098KQBq7oKS%2Bm16aldLx9ZYUSTS7rnBwHTgJ2yZHIA0Z9%2B7HIu5Q7JJzoN5tTTGWl6Hp5zNSZ9p1LATNLcYht2nqYtrgCGxRb9VxHtx3gYB5ueZMn5pfr0Uqtzwu%2B4O%2BZ7q0XT3f002fCwcKKZmKVQIjTdCVwGpvrq6naKFAQRfsOwrzry7sgxHs4wAHi2COhij4pu8MMHyw8kGOqUBjjsbDqGoWicq4xmywJ0MQ4aZRB2B6hMhaaQHyd6VsWI%2F6IOFvXmrh1apP%2Fvq1Sg8ohd5tq3ey3GT%2F7tju1UbF%2BlxG6TIpN26bqc0gb049bhwTBhLaFoeHTFbgBhvZoZ9hC225NkQ%2FUw1gWRLZUSsnV3SuMAavYREagR1JGwyOMrPLTfWMiEIVX2RVte23H5u999NXzkmF6YoLKYnzF2ZVan6oAmo&X-Amz-Signature=ded48123cd375c20bcd6ce5a2edda593c666601366768d57e6e618bfbd430580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VC7JANA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCQCatSGccviM2OO3XY%2BvMQOM2DmzRj9GzYbpWoZqilJgIgPvmVD1ayNI7zqY7uaPUADozEyJWHZONjEo3Cm%2FVEKaQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDGmjyIAcS1ii9gfyGyrcA5Fs02c91cSlVNFrBJky8qmNG57vfU9DBwNBMAW0Nat29oMchZl0PRxdo6PPeClah9Ye9JT16jwTZ%2BYP4L%2FiUdbex3T%2FZs9ZYbgCNnChTaQ7LkZcg%2BlpUkgX4lYBVPdAjj4pTcXi6LepqJDqPFaWmXj3URsRTAGJAqiNvHRW3vwMrgoy2jGZSAEKRI5Zhhi%2FgcefVgyX9we%2FAEiadJNkfmy2dDpQb3el9YVGfHJOUEblZK305DbZy3qff54oDWfiPG9mq0Wd1boKHsYw76yAQHNMBRGbALUvGWk3keWS7BEowZOcm0YSi64xflcciDBOuz7OK4Lm1n%2FLXVGpTEq5fS3%2BKnPfqyVzLQPl2c9huTAdocThqwKnq3T1ZXq5LKTvm79qIQ7nYll3b6IoJQjChtYQgO28VZgEcPzivxdxajl4cgvJjb%2FcH098KQBq7oKS%2Bm16aldLx9ZYUSTS7rnBwHTgJ2yZHIA0Z9%2B7HIu5Q7JJzoN5tTTGWl6Hp5zNSZ9p1LATNLcYht2nqYtrgCGxRb9VxHtx3gYB5ueZMn5pfr0Uqtzwu%2B4O%2BZ7q0XT3f002fCwcKKZmKVQIjTdCVwGpvrq6naKFAQRfsOwrzry7sgxHs4wAHi2COhij4pu8MMHyw8kGOqUBjjsbDqGoWicq4xmywJ0MQ4aZRB2B6hMhaaQHyd6VsWI%2F6IOFvXmrh1apP%2Fvq1Sg8ohd5tq3ey3GT%2F7tju1UbF%2BlxG6TIpN26bqc0gb049bhwTBhLaFoeHTFbgBhvZoZ9hC225NkQ%2FUw1gWRLZUSsnV3SuMAavYREagR1JGwyOMrPLTfWMiEIVX2RVte23H5u999NXzkmF6YoLKYnzF2ZVan6oAmo&X-Amz-Signature=99f531fd2769df152a9811b9f4f6271d1083cb6a24bbe6ab5fd8410310c405ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
