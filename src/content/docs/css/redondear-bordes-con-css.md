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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LAMQ2RE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO64eYbNyhrp%2BG2AbXsxLoir7fhsjXwwACdsW9sesxqgIhAMwU5Y1ccI9WnDD0qDtQEZyoZtY%2B4sr6rpLttjyGrNzJKv8DCFUQABoMNjM3NDIzMTgzODA1Igz5v9vCIprAeEyRwbgq3ANkbN3c1qAgMAnDWRG5HoyCdN4Jn8XngXSQ7koktCsTguvcC3ZKZpEqUNj8WK0d4pMiSeKGaOy7AQl796%2FPb2Mo%2BSr6Xni2KkZWapHV00jmj2H5ybnNLRXtM3CGUdtbIN3zUcG0SbPNRyRrb7BcBx4Cmg5mO8Pojqgp1tmyeL7UZXQIs0biaBcEv3et51avY8yR3UsYcoYfkSqUOIK8bAQxjkECmb1hZNr7qWLz237OQesw23J7szL82vRuXfPRnsFQbrUr9EY9iNQBQuHZXE2UsDj98Qr4oQcAZt9YBP4JjWUylzaQkt9X%2FFO1RpDcEsPyX9i6mIC8R0jVEihmckJbSGFNeRGXMHcz3ik%2FxwkyvGwQvFwFz3r3E9q9YmsUHJgoYi%2F91cW05amsLPiPGGSDU3%2FmoMr2t8KnAjsEUHApaFj1eY9P5c2hHGPCvhoULwCxlBxL5iLWVE5uGRpr%2B4k74itaYsYxeUVGGgvUoMn9q4sVvCimZswFbhwpSiFBBZtdW96%2F9HDhYbCBO8nXnspVjS6qvMyKF6UA2O49DM2%2BfePnkCNeP4kfALejOS5XoC60ABYJduw%2FloovRF0bMnsXlo8MSLiRSeSfRhX%2FzVpTU3UMw4eSlK%2F4M8d9tDDmr8nJBjqkAU1RulKmeE9N%2F2ZXETzP8DPkXReElU5bH4rwh%2FbJWVdtDWy9a%2BYw6DocjWkvGEKwMAOgitBbz39IfaI%2FztL3EyFVD%2Fwz4YPacXSBZcCM4YoXxI4Va%2Fg00muWb2TR5hxNjLDfENyrdGLC%2BfZ8gxLu%2BFnYiqbyrfDSRb2A7M%2FWhmp%2FlXDmAObXaWQjJ8V3Z9k3GhEOhABwNs3RYu1tat0Tj%2Fj%2Bqf6s&X-Amz-Signature=fed2bbe7918013b72afdc2a7a1605e0005ecb934d4c4ec15e48f710cbdc12c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LAMQ2RE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO64eYbNyhrp%2BG2AbXsxLoir7fhsjXwwACdsW9sesxqgIhAMwU5Y1ccI9WnDD0qDtQEZyoZtY%2B4sr6rpLttjyGrNzJKv8DCFUQABoMNjM3NDIzMTgzODA1Igz5v9vCIprAeEyRwbgq3ANkbN3c1qAgMAnDWRG5HoyCdN4Jn8XngXSQ7koktCsTguvcC3ZKZpEqUNj8WK0d4pMiSeKGaOy7AQl796%2FPb2Mo%2BSr6Xni2KkZWapHV00jmj2H5ybnNLRXtM3CGUdtbIN3zUcG0SbPNRyRrb7BcBx4Cmg5mO8Pojqgp1tmyeL7UZXQIs0biaBcEv3et51avY8yR3UsYcoYfkSqUOIK8bAQxjkECmb1hZNr7qWLz237OQesw23J7szL82vRuXfPRnsFQbrUr9EY9iNQBQuHZXE2UsDj98Qr4oQcAZt9YBP4JjWUylzaQkt9X%2FFO1RpDcEsPyX9i6mIC8R0jVEihmckJbSGFNeRGXMHcz3ik%2FxwkyvGwQvFwFz3r3E9q9YmsUHJgoYi%2F91cW05amsLPiPGGSDU3%2FmoMr2t8KnAjsEUHApaFj1eY9P5c2hHGPCvhoULwCxlBxL5iLWVE5uGRpr%2B4k74itaYsYxeUVGGgvUoMn9q4sVvCimZswFbhwpSiFBBZtdW96%2F9HDhYbCBO8nXnspVjS6qvMyKF6UA2O49DM2%2BfePnkCNeP4kfALejOS5XoC60ABYJduw%2FloovRF0bMnsXlo8MSLiRSeSfRhX%2FzVpTU3UMw4eSlK%2F4M8d9tDDmr8nJBjqkAU1RulKmeE9N%2F2ZXETzP8DPkXReElU5bH4rwh%2FbJWVdtDWy9a%2BYw6DocjWkvGEKwMAOgitBbz39IfaI%2FztL3EyFVD%2Fwz4YPacXSBZcCM4YoXxI4Va%2Fg00muWb2TR5hxNjLDfENyrdGLC%2BfZ8gxLu%2BFnYiqbyrfDSRb2A7M%2FWhmp%2FlXDmAObXaWQjJ8V3Z9k3GhEOhABwNs3RYu1tat0Tj%2Fj%2Bqf6s&X-Amz-Signature=d43b5e89e107e0a22b3c6c1e69dc66dee3d5d10c10c320e61c4e2a47b1077b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
