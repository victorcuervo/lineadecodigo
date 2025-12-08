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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DOETX2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGH9QPQ8DCjCJupDYmzq%2FMCe2GrstLza43RrfKBDxNd1AiA%2BuWUVt%2BbBTdgjmq20LW9R5eehu6RFn7P%2Fpq3seA4zKiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwoEzN%2BxvYC6DcjvKtwDVwvGKiJrbgKoy2A8zXJrQSY9uefG9HdpfIg0D%2BTrkUdSY11NAiSMhW%2B3g9MDP3wd6ZMjYqHdfXwQ8p4r%2B%2Fkl9IH%2BUQdZgO9xh%2FhLBz4EYtFATIqb%2FNpsaBoccANrKz5s%2BZOP0q9JtJpkNQaqfdk2zEs4RaVCqS3NvD%2Bku2CqDoxGqN8RBmjiWmyTjQjqx7QIxtSBKXxVC6Jp7xfU1EPxwgtmzd%2B%2FCIMQlucuLmAr145FdxwlgiO0UutWGGXu2HNRw3yCtiC3VIyjDG9YIS5rFrDO9y1IbRQpcfu1katvwCTCDRMKcsiYvs%2FJMmbohzrxQTXpGuS4qXR2BIyTb6OmQlmshqG2XH0ueLseAs4Ql4DwsCzDjwV4l6fwo8DNeAJoA9q5u3jQXqKTI7I6ywJPjvGBiku1BSUlX%2FkdgjTd05CNkE2Om1Pswh%2BZHUYAKn2QQLSQq%2FqaD9nEnsmgOXdooAWoF2MLuJQXp40A3TCqKrK5Obifa4kaWKKOrDiRubQqUGCFK7%2B9ASG2TFElEOQEMuD3d1Ui9oFrVeNbgGdecXGRLrIha%2FmFGxPC4EY6jky5VW1PlssfE5Wek29hIJeMyfu6kzdnSZqS6jskhWFoienXpwgic%2Bx9ANSEKaAwqPPayQY6pgGp1R3Lm6%2FY0BB4A7EgNc%2FJSQBUVzB6ra8zSdZ%2BK%2BufAwd4%2Fkg4876gpoPBToT3%2BpCdDmCXl8v692iNXkWVVECo%2FII3sfSRpvGAeH3xYkwMtgYVqWlReOw6csuMtEPnpMKuOLNCcHhbsQBrdv4AQOT9onCu2OMLY1EnsBl8T978bAgc2kGlmt6onYK2%2BqI5WJVC%2BQOh7Z9LvgZD1k4z0%2Fp2Q%2FX3w8Hd&X-Amz-Signature=a74754c07a84694d2519f205c0542fcc01932b8d194c8272201b634166ff17e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DOETX2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGH9QPQ8DCjCJupDYmzq%2FMCe2GrstLza43RrfKBDxNd1AiA%2BuWUVt%2BbBTdgjmq20LW9R5eehu6RFn7P%2Fpq3seA4zKiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwoEzN%2BxvYC6DcjvKtwDVwvGKiJrbgKoy2A8zXJrQSY9uefG9HdpfIg0D%2BTrkUdSY11NAiSMhW%2B3g9MDP3wd6ZMjYqHdfXwQ8p4r%2B%2Fkl9IH%2BUQdZgO9xh%2FhLBz4EYtFATIqb%2FNpsaBoccANrKz5s%2BZOP0q9JtJpkNQaqfdk2zEs4RaVCqS3NvD%2Bku2CqDoxGqN8RBmjiWmyTjQjqx7QIxtSBKXxVC6Jp7xfU1EPxwgtmzd%2B%2FCIMQlucuLmAr145FdxwlgiO0UutWGGXu2HNRw3yCtiC3VIyjDG9YIS5rFrDO9y1IbRQpcfu1katvwCTCDRMKcsiYvs%2FJMmbohzrxQTXpGuS4qXR2BIyTb6OmQlmshqG2XH0ueLseAs4Ql4DwsCzDjwV4l6fwo8DNeAJoA9q5u3jQXqKTI7I6ywJPjvGBiku1BSUlX%2FkdgjTd05CNkE2Om1Pswh%2BZHUYAKn2QQLSQq%2FqaD9nEnsmgOXdooAWoF2MLuJQXp40A3TCqKrK5Obifa4kaWKKOrDiRubQqUGCFK7%2B9ASG2TFElEOQEMuD3d1Ui9oFrVeNbgGdecXGRLrIha%2FmFGxPC4EY6jky5VW1PlssfE5Wek29hIJeMyfu6kzdnSZqS6jskhWFoienXpwgic%2Bx9ANSEKaAwqPPayQY6pgGp1R3Lm6%2FY0BB4A7EgNc%2FJSQBUVzB6ra8zSdZ%2BK%2BufAwd4%2Fkg4876gpoPBToT3%2BpCdDmCXl8v692iNXkWVVECo%2FII3sfSRpvGAeH3xYkwMtgYVqWlReOw6csuMtEPnpMKuOLNCcHhbsQBrdv4AQOT9onCu2OMLY1EnsBl8T978bAgc2kGlmt6onYK2%2BqI5WJVC%2BQOh7Z9LvgZD1k4z0%2Fp2Q%2FX3w8Hd&X-Amz-Signature=fa388d2faa72d4a994cdb1566c0712a017aa5ad291d67b019585bc80fd2a6bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
