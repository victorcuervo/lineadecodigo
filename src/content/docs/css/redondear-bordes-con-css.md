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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627A5PL5E%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCIKNJs4cXsPiobJ4u1ec4m4B5xjjbRqvhdMVKMuoAurgIhAImF3UY71odHRzxspnzffvqPrQS6XeWKeUZzsiGBkHghKv8DCDgQABoMNjM3NDIzMTgzODA1IgxbbRfXbY8kniO48foq3AMgmSAeL2%2B0Skgi0FngXexyoDy5M4zN%2BNSkrmEpyAGLY%2BXptQGehx8%2FtZEgvk80Gp%2F2im6l%2FyvGCL92aqVIIfwlHMylImDLkqS39%2FKJVjQBich4wpFl4qDQzi%2B3r0xsDSOaad8sjst0UG1VnuWok0bA%2BgPWX7Vb47lIcmurf1f024CnUVoHBSjeLpC%2Bqh7uGJ2ZhwjV1zmXxzfmfh23L9zv33vB9rVFcYrEdi%2FLJAuiRgs21huOCY4tketosCwAFQh5jb46bjGdRFwizDaEFbAcU%2BhYwaONjnZKaEnl%2FK3EJ8Fjzb70utY5Rr9lI04v%2B4j2CMgk9I28SR0wMpNcAmOmhb%2FMkR4e8mamJ%2BOTZXc0bN0uuCnZBUpvGOEFSaZFqiBNLEhAj1q9N%2B3ben80XFDevHSQ3gLrwM8htdd%2FkvOWt03NrRd1lBXktdILKKQ8sEsgYFRovD33CIUE8mjMpAIVM3V5wkTsyEWQEluujDufEZe4zGt6LCuOeBqe183XMvaL7MBKasV3I7E2lyVUW2VAOAau3vVyDIPeqwg1MiWlFJzycer7JAyDNcyStDEn6pkwwDa1%2FIZKc7YSG%2FAY28JxZy%2F1kkDcMnEbZPQLGEI9vOXLx5fD2418FVKNyjDV98LJBjqkAasFMlnffbMmy6nmXyaA6DsHMzAl5Ivgh3Y7oOVDQ7FIqz84v0sloL3YNB%2BZ7QMma8BsF2xeCNc44l6Ry5rO3bntMDRURE1O28e0FzF97LXGomk5ZZkVPLmQfTgSx9g7ULPSqoie32tDdK%2FXd%2B2UUWf9%2BNo7nFwySPsmE1J4YDq%2B1cNr3IG9JWIicG9CC0OKOEQr12h2VNfvtqbwKwvDpwqYPqNy&X-Amz-Signature=b99ec17635373b895a2cb79b32aff727c30de0ede2c665e43b59540d5f5e9fe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627A5PL5E%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCIKNJs4cXsPiobJ4u1ec4m4B5xjjbRqvhdMVKMuoAurgIhAImF3UY71odHRzxspnzffvqPrQS6XeWKeUZzsiGBkHghKv8DCDgQABoMNjM3NDIzMTgzODA1IgxbbRfXbY8kniO48foq3AMgmSAeL2%2B0Skgi0FngXexyoDy5M4zN%2BNSkrmEpyAGLY%2BXptQGehx8%2FtZEgvk80Gp%2F2im6l%2FyvGCL92aqVIIfwlHMylImDLkqS39%2FKJVjQBich4wpFl4qDQzi%2B3r0xsDSOaad8sjst0UG1VnuWok0bA%2BgPWX7Vb47lIcmurf1f024CnUVoHBSjeLpC%2Bqh7uGJ2ZhwjV1zmXxzfmfh23L9zv33vB9rVFcYrEdi%2FLJAuiRgs21huOCY4tketosCwAFQh5jb46bjGdRFwizDaEFbAcU%2BhYwaONjnZKaEnl%2FK3EJ8Fjzb70utY5Rr9lI04v%2B4j2CMgk9I28SR0wMpNcAmOmhb%2FMkR4e8mamJ%2BOTZXc0bN0uuCnZBUpvGOEFSaZFqiBNLEhAj1q9N%2B3ben80XFDevHSQ3gLrwM8htdd%2FkvOWt03NrRd1lBXktdILKKQ8sEsgYFRovD33CIUE8mjMpAIVM3V5wkTsyEWQEluujDufEZe4zGt6LCuOeBqe183XMvaL7MBKasV3I7E2lyVUW2VAOAau3vVyDIPeqwg1MiWlFJzycer7JAyDNcyStDEn6pkwwDa1%2FIZKc7YSG%2FAY28JxZy%2F1kkDcMnEbZPQLGEI9vOXLx5fD2418FVKNyjDV98LJBjqkAasFMlnffbMmy6nmXyaA6DsHMzAl5Ivgh3Y7oOVDQ7FIqz84v0sloL3YNB%2BZ7QMma8BsF2xeCNc44l6Ry5rO3bntMDRURE1O28e0FzF97LXGomk5ZZkVPLmQfTgSx9g7ULPSqoie32tDdK%2FXd%2B2UUWf9%2BNo7nFwySPsmE1J4YDq%2B1cNr3IG9JWIicG9CC0OKOEQr12h2VNfvtqbwKwvDpwqYPqNy&X-Amz-Signature=6844ae152bc16f150d054c3149ac68e2471c4c459e128a34c567595352e4da24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
