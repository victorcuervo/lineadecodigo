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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMPZFRR5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3UN5qtfllqwFG4RDpIe9M%2FQ%2FIGeST%2FHacIleGqwVKWwIhAPEiVpMgORxh1uMJjzubHnjyLFEEL6oewk2Q663m9xICKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxFT%2F2r%2B8XkI58%2BOcq3APMTY6GobsDK558h2RSuf8GAuo1TKyWWmA2BCarIOrAtwvPj19XmLvjs2HXekvzGoTj6fK9A9CsykHFoTUVsr%2FbTU12k34UX%2BcMQWJNXgFt5wnq5ahcFmcXZwpr3Hbowkcp1qCL1qbwlMTnbh4kauxCTJJrXvpyq9mt0XkTNOuo8MDe4o0jw3K8GwKrBb4AYi0SfBMOLSejH0ldU0lhTzOsiRIXJdpX1ihlPb0%2BdDv4yXz9WqujO4Hv42NakVUJHqZYeipg9MXvmKGU8Uf2IBUmPvR9B8a7dmkl%2FskS78K7YokHEjAkj7FlJQqJHGuv94eH60ss%2F1RbrP%2Fgwu7QxsK7jFvPKm6JnMw09WqlCF0jRpMn8grbU5BKvOjXEvUFmNxbjB1i5e%2FWMzTujDityuz4dBr1u%2FOdVr7VDrjLSVdtq9hLOLKYS8MQJDmXLU26y649NO41qXABwJpSn1E2TQRglBDvZQ6Z%2FyVft%2BYs8rg0z5hvdrmI1u86Dhu1tM31Fr8FAsdzsZJd0%2BK20trelA7IH%2Bca9wfpk01xOxnTkPqIoliI8By70UX4vSDUjwxjhpx%2FUdUwgBMOwL282Qo1%2B0gdsG20XQrLlN4n8uQGyDddw01NbaH9SeB7FGXS6zCdh9zJBjqkAZLW7mjJyQmmuRM6eBq7pXofPHgeVaaho9lplhXh%2FD9aRv1Es0moaz6iusW%2FpnPUePEu1xzjes5bIk%2F9CbrKFZMcbc%2BBWOvsHXJaKA%2FiFyGNcUNE1lWo2beJay%2B5l7x2l7Hs66z9R3C8OGShF%2BqPC1OATk5Kk90IRqKIU45Udz2v7fz5rEfoDe0pEjaDGJFqaVyFS9GRw%2FSCdxGbR5M9JWeZaDnM&X-Amz-Signature=17b3940e33f3e41c2c0372184353200683c35974f6724b2c93d16a967b0499b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMPZFRR5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3UN5qtfllqwFG4RDpIe9M%2FQ%2FIGeST%2FHacIleGqwVKWwIhAPEiVpMgORxh1uMJjzubHnjyLFEEL6oewk2Q663m9xICKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxFT%2F2r%2B8XkI58%2BOcq3APMTY6GobsDK558h2RSuf8GAuo1TKyWWmA2BCarIOrAtwvPj19XmLvjs2HXekvzGoTj6fK9A9CsykHFoTUVsr%2FbTU12k34UX%2BcMQWJNXgFt5wnq5ahcFmcXZwpr3Hbowkcp1qCL1qbwlMTnbh4kauxCTJJrXvpyq9mt0XkTNOuo8MDe4o0jw3K8GwKrBb4AYi0SfBMOLSejH0ldU0lhTzOsiRIXJdpX1ihlPb0%2BdDv4yXz9WqujO4Hv42NakVUJHqZYeipg9MXvmKGU8Uf2IBUmPvR9B8a7dmkl%2FskS78K7YokHEjAkj7FlJQqJHGuv94eH60ss%2F1RbrP%2Fgwu7QxsK7jFvPKm6JnMw09WqlCF0jRpMn8grbU5BKvOjXEvUFmNxbjB1i5e%2FWMzTujDityuz4dBr1u%2FOdVr7VDrjLSVdtq9hLOLKYS8MQJDmXLU26y649NO41qXABwJpSn1E2TQRglBDvZQ6Z%2FyVft%2BYs8rg0z5hvdrmI1u86Dhu1tM31Fr8FAsdzsZJd0%2BK20trelA7IH%2Bca9wfpk01xOxnTkPqIoliI8By70UX4vSDUjwxjhpx%2FUdUwgBMOwL282Qo1%2B0gdsG20XQrLlN4n8uQGyDddw01NbaH9SeB7FGXS6zCdh9zJBjqkAZLW7mjJyQmmuRM6eBq7pXofPHgeVaaho9lplhXh%2FD9aRv1Es0moaz6iusW%2FpnPUePEu1xzjes5bIk%2F9CbrKFZMcbc%2BBWOvsHXJaKA%2FiFyGNcUNE1lWo2beJay%2B5l7x2l7Hs66z9R3C8OGShF%2BqPC1OATk5Kk90IRqKIU45Udz2v7fz5rEfoDe0pEjaDGJFqaVyFS9GRw%2FSCdxGbR5M9JWeZaDnM&X-Amz-Signature=b75f8f4f36be43e132a5c81ba0e67699793192c2ece5ccbe149fdd1ac66aa4fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
