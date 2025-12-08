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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JIY6V6F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCZs%2BS%2Fv4zh4lcHXRoJ%2F9siGhXfTEHDb7KR9gE7P9BAAIgdwWHTzppA%2BC5mpn%2BXI%2FDXKgWcGVHwc%2Bm4PfDVBgpcJYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWt4fJ59aK4AZp2LCrcA9RIiGvOQVYym2QcJyEcYEXZL4ybUw2JepoGXH6YP8sUqMVhxu%2BCpG5W4rWy4JTZHRp4jhDHOd16NTP5aT%2BhNN9MCRzm0Nv4AAH83lgSnq%2Fj5d9xkLT52dXdjLnhvph5Whn1IY8K%2FnqFvn2jlsKz2vQoL%2Btlo9kejWn7X%2BKnG5pUWhn8rVzqIvR9tOQe4d4xHCorfrqKqqcom94QzevKmFWHQdJ3wJyNWjsayW%2FRjtTG70mktpLjnJgTf6Kap0g5nS24EY%2FraT661pfHqE0eR1EC6rMVWhJEMytJR7OB6TtdV0c%2BubtM%2BzkdAr1AGjGxJVJhVEGCohvlMukpXoIQUZUJ7NDJZDp3Z2N3wicGTwjkX6z2xLBu%2F4AThv8cHthM17ylpo6RiCRNTT4YhgFsu%2FESYU6XUPWg3EDq%2FHGXAfVKubejYiAU%2BuxKvney2bgqGOIjdRMIEzj3%2BNvlfyRnU0ZullP5ld1KmYx2oRqvDueYT6KRlwApJMw49%2Fq34ZI31ZGiGZTj5wZUXJV8o4hUd21UZBo8pILEDuCi8UIR5Cs6KWdxvr6iNuR4M9maGR43YkU4CGpu7AU1MIAyK5XSD2Jwi7JRoVUQXFvf7kZCXbzQidihU0Yelh7g7BuUMKDk28kGOqUB9rlDLmlplLNx9kuRXCMrcMOqtQ2CA0Icr5xu9lqBLRjKn%2BOqeWgseCct6INhk57fSSOcnYdmtdM56fhTvHvZTZjSwYLCqNJJpLbcWT6QjF0EraWSxRHiT3g%2F2CW83K%2BnFMoUK1Al9q5uG2uxPHgPpluvY5olRVtV9xk7rCnvo8NLCQqTMBYV3miRF21546WV2caonrXuwolGktfvIo1NjedMErP2&X-Amz-Signature=9d7267eec454c12986fdd5c395699cc505f3262fff935254d48a2f7382600e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JIY6V6F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCZs%2BS%2Fv4zh4lcHXRoJ%2F9siGhXfTEHDb7KR9gE7P9BAAIgdwWHTzppA%2BC5mpn%2BXI%2FDXKgWcGVHwc%2Bm4PfDVBgpcJYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWt4fJ59aK4AZp2LCrcA9RIiGvOQVYym2QcJyEcYEXZL4ybUw2JepoGXH6YP8sUqMVhxu%2BCpG5W4rWy4JTZHRp4jhDHOd16NTP5aT%2BhNN9MCRzm0Nv4AAH83lgSnq%2Fj5d9xkLT52dXdjLnhvph5Whn1IY8K%2FnqFvn2jlsKz2vQoL%2Btlo9kejWn7X%2BKnG5pUWhn8rVzqIvR9tOQe4d4xHCorfrqKqqcom94QzevKmFWHQdJ3wJyNWjsayW%2FRjtTG70mktpLjnJgTf6Kap0g5nS24EY%2FraT661pfHqE0eR1EC6rMVWhJEMytJR7OB6TtdV0c%2BubtM%2BzkdAr1AGjGxJVJhVEGCohvlMukpXoIQUZUJ7NDJZDp3Z2N3wicGTwjkX6z2xLBu%2F4AThv8cHthM17ylpo6RiCRNTT4YhgFsu%2FESYU6XUPWg3EDq%2FHGXAfVKubejYiAU%2BuxKvney2bgqGOIjdRMIEzj3%2BNvlfyRnU0ZullP5ld1KmYx2oRqvDueYT6KRlwApJMw49%2Fq34ZI31ZGiGZTj5wZUXJV8o4hUd21UZBo8pILEDuCi8UIR5Cs6KWdxvr6iNuR4M9maGR43YkU4CGpu7AU1MIAyK5XSD2Jwi7JRoVUQXFvf7kZCXbzQidihU0Yelh7g7BuUMKDk28kGOqUB9rlDLmlplLNx9kuRXCMrcMOqtQ2CA0Icr5xu9lqBLRjKn%2BOqeWgseCct6INhk57fSSOcnYdmtdM56fhTvHvZTZjSwYLCqNJJpLbcWT6QjF0EraWSxRHiT3g%2F2CW83K%2BnFMoUK1Al9q5uG2uxPHgPpluvY5olRVtV9xk7rCnvo8NLCQqTMBYV3miRF21546WV2caonrXuwolGktfvIo1NjedMErP2&X-Amz-Signature=931e792f48378a00a2551bf62df45f7b7c72506e3325a44e6a82466068799963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
