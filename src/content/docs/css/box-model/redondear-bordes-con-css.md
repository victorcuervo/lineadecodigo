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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBT35RCY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsCqfrP4UWlZRBhY4L70d0EtPsa08UzvDpz2pnC9YpvQIhAMc4QqsWHbUTALHBiqn5fVij7HZEc26WH4QfXjEp9UcbKv8DCH4QABoMNjM3NDIzMTgzODA1IgzoHNbgtBUuddHJq%2Fsq3AOSB0hVsuC4R6qNcQEpFKwkP0Qq7fYXopVAT6jxrFXEmETE7cbZKDQ1Q1bMccISUd2euob5jzKc7kEU6%2Be8MnGKaw3POnBoaVbTppi65qGfi40qhaW4KROv0qLl9iBSUGIMUrVAXMHzF71jqvR%2F5RGZselx5DJpRpiSgTvZ0ThJAudcTRQus0w9zO2P%2BScU8wFC06%2B2mDdOsBTQ%2FCy9qjqjSdLsWMrh5bxpXKRtfR3ebvLIzbZTV56N9VwxF0YzedgNwUtWJASmJtzm6ZHIXmlr3zhUfl87z6VkGM24c%2BtSkQ4RU4nwGdQYMmPLjfBng6%2FEr6%2B%2Bn8iQLRDccbRwCFJ%2Bxl2ndwbnCFCrMCVu8mYq6SFIr0kotPL%2BDIj9O1VQg1tVCsf43fi9DA4Szx8kh87V76B6KwJx1B%2F%2BL%2BU2%2Fcw4jMNGqnM1GI4w5p1odkIKUQjYpvNVaSbflDI7is7bKwUKq81a2Oi6vUj3TVMP3Qc8ulbYHg5e3dS4m7BDwLj3mlaz5W48uSbHJlFqgoXQm5WPPSMInyvmepAY09qieqhVwCJHUN%2FHMWjk6%2BuQs3ks%2BdvjvrS9nDBziCE0BDDMByjpNfFyfHGCnXTQCVFlzMdsJzSozxnwf3WwZypxUzDxxYrKBjqkAXk6AUJZQS0nBCbh9J86C654uB0xq9xQsigbuuNF8%2BQUU%2BPYn5U8Arw%2F1GRKNTa2vEKIH4Dlr30T7ZoKdwiY5jSSy6c7uBTZquDgVN68qTAzLK5kW3w2gCyCNR%2Br6t4oQUSO3fOXmChum59qo%2FSMU4uk2Zbp8cUSd7QPuoqzPATRpHyMgx4j5P881T8QK9gtGnAEGHxql8mbFXJXtfWT6wZrveet&X-Amz-Signature=fd397550638bb5ecb26ea4540991eb04b7564742d6c31116ab3992e9f9fe5d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBT35RCY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsCqfrP4UWlZRBhY4L70d0EtPsa08UzvDpz2pnC9YpvQIhAMc4QqsWHbUTALHBiqn5fVij7HZEc26WH4QfXjEp9UcbKv8DCH4QABoMNjM3NDIzMTgzODA1IgzoHNbgtBUuddHJq%2Fsq3AOSB0hVsuC4R6qNcQEpFKwkP0Qq7fYXopVAT6jxrFXEmETE7cbZKDQ1Q1bMccISUd2euob5jzKc7kEU6%2Be8MnGKaw3POnBoaVbTppi65qGfi40qhaW4KROv0qLl9iBSUGIMUrVAXMHzF71jqvR%2F5RGZselx5DJpRpiSgTvZ0ThJAudcTRQus0w9zO2P%2BScU8wFC06%2B2mDdOsBTQ%2FCy9qjqjSdLsWMrh5bxpXKRtfR3ebvLIzbZTV56N9VwxF0YzedgNwUtWJASmJtzm6ZHIXmlr3zhUfl87z6VkGM24c%2BtSkQ4RU4nwGdQYMmPLjfBng6%2FEr6%2B%2Bn8iQLRDccbRwCFJ%2Bxl2ndwbnCFCrMCVu8mYq6SFIr0kotPL%2BDIj9O1VQg1tVCsf43fi9DA4Szx8kh87V76B6KwJx1B%2F%2BL%2BU2%2Fcw4jMNGqnM1GI4w5p1odkIKUQjYpvNVaSbflDI7is7bKwUKq81a2Oi6vUj3TVMP3Qc8ulbYHg5e3dS4m7BDwLj3mlaz5W48uSbHJlFqgoXQm5WPPSMInyvmepAY09qieqhVwCJHUN%2FHMWjk6%2BuQs3ks%2BdvjvrS9nDBziCE0BDDMByjpNfFyfHGCnXTQCVFlzMdsJzSozxnwf3WwZypxUzDxxYrKBjqkAXk6AUJZQS0nBCbh9J86C654uB0xq9xQsigbuuNF8%2BQUU%2BPYn5U8Arw%2F1GRKNTa2vEKIH4Dlr30T7ZoKdwiY5jSSy6c7uBTZquDgVN68qTAzLK5kW3w2gCyCNR%2Br6t4oQUSO3fOXmChum59qo%2FSMU4uk2Zbp8cUSd7QPuoqzPATRpHyMgx4j5P881T8QK9gtGnAEGHxql8mbFXJXtfWT6wZrveet&X-Amz-Signature=6a18fa8cbee5e39193b9470e12f613f932b225ac413b5968a2ad676866e21dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
