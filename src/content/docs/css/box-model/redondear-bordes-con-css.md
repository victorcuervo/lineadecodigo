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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR7H3YGE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FeqW7asatL1ga8qktA1Vw1pDqv%2B8%2FVKs%2FN1g53lsEpgIhAOLQXMiMlF4Ye8Vphzc1iW1abhpcyrPSYdFHSURKMEwtKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxstaHY0YNhsOrym4q3APPnJUhNAkML7x%2BxHWz4SBiHkRXNngevjn2b%2B%2FhOwv9tx0j%2FNiuWUAtheoSCsQHOiWk4Z2odJwPh0OhTc5hUZmgkUJCact91De4ox%2Bv3ZsA0LtZzHNSxuTuApyFk%2FHe4AyNqFrgM8X6KWuvNl%2BahrrWT5hFNhx1qlDiAoFXbBQS2ULRwFdlLVBTBMWoTsMZX8M4FbeYM7gqAuHu7ydKQelHOAfHPR9b%2BLx%2Bk7pB780HfaSG9Z6wJDHgHREePbArl0lODZ90D3DT%2BxkJWitlwl6W69DhNGpSYwPzkr7hBJdANOxKoqdBsRp2bH0Ilzru1VUGyraVxj8sMyEu5VVs%2FGca3W0Ou%2BqA63oiWU1E9Z8ag49LZf55qZbp7xLoQr57niQRzWJKqVC%2FFZw0IordGaMbfe80JBeasolGTA2%2F1DXWesZKIZNs2cnYWevwn3a%2B2ElwPIDN3heU5w%2F8LW2%2BdqAHr0N47Ji79x%2FgUQL0HbExQBrV1pK8Qky8YitoznHkU6UPuurjIWscfIpw%2F8nEBG1nxQ%2FAF1eZXN29tX%2BLUdRXbsSYoq1zI%2BIAtU0tkNxa5cQHZ0z8TxnjmQ3FrnOQyBoJIHBtc40avFDeG9IAx6YUdxgVuNwDJP1DsBNUWTDf%2F4rKBjqkAezUYLzuQwd%2BaNt1CQiHeb0GGJS6ucY9dB40SAQ7XjurvsY9yUkFFxJtE6jxPZX4Aeo%2FcOjgRTDZ9%2FOLF0AT0Qda%2FBKk23xBgIU0WbxdwTJy%2BWjV5lGJdzSs%2FBosCk%2Bb%2BIsk0oUXI9hmaWGZjsJKCKZXzBJ8tZjvb3zfByKZk%2F9uFSUsSmtAnqQbSP8IC3DwLpYXLQl9Rw4MC%2FCr%2FbqckwjdO0%2BZ&X-Amz-Signature=4e4bdce9e7aab7aa6ad44be787330ff5795bec472cda9da241e91510f5f70811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR7H3YGE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FeqW7asatL1ga8qktA1Vw1pDqv%2B8%2FVKs%2FN1g53lsEpgIhAOLQXMiMlF4Ye8Vphzc1iW1abhpcyrPSYdFHSURKMEwtKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxstaHY0YNhsOrym4q3APPnJUhNAkML7x%2BxHWz4SBiHkRXNngevjn2b%2B%2FhOwv9tx0j%2FNiuWUAtheoSCsQHOiWk4Z2odJwPh0OhTc5hUZmgkUJCact91De4ox%2Bv3ZsA0LtZzHNSxuTuApyFk%2FHe4AyNqFrgM8X6KWuvNl%2BahrrWT5hFNhx1qlDiAoFXbBQS2ULRwFdlLVBTBMWoTsMZX8M4FbeYM7gqAuHu7ydKQelHOAfHPR9b%2BLx%2Bk7pB780HfaSG9Z6wJDHgHREePbArl0lODZ90D3DT%2BxkJWitlwl6W69DhNGpSYwPzkr7hBJdANOxKoqdBsRp2bH0Ilzru1VUGyraVxj8sMyEu5VVs%2FGca3W0Ou%2BqA63oiWU1E9Z8ag49LZf55qZbp7xLoQr57niQRzWJKqVC%2FFZw0IordGaMbfe80JBeasolGTA2%2F1DXWesZKIZNs2cnYWevwn3a%2B2ElwPIDN3heU5w%2F8LW2%2BdqAHr0N47Ji79x%2FgUQL0HbExQBrV1pK8Qky8YitoznHkU6UPuurjIWscfIpw%2F8nEBG1nxQ%2FAF1eZXN29tX%2BLUdRXbsSYoq1zI%2BIAtU0tkNxa5cQHZ0z8TxnjmQ3FrnOQyBoJIHBtc40avFDeG9IAx6YUdxgVuNwDJP1DsBNUWTDf%2F4rKBjqkAezUYLzuQwd%2BaNt1CQiHeb0GGJS6ucY9dB40SAQ7XjurvsY9yUkFFxJtE6jxPZX4Aeo%2FcOjgRTDZ9%2FOLF0AT0Qda%2FBKk23xBgIU0WbxdwTJy%2BWjV5lGJdzSs%2FBosCk%2Bb%2BIsk0oUXI9hmaWGZjsJKCKZXzBJ8tZjvb3zfByKZk%2F9uFSUsSmtAnqQbSP8IC3DwLpYXLQl9Rw4MC%2FCr%2FbqckwjdO0%2BZ&X-Amz-Signature=ce2f8eefeea85cb97428043f92e62bedfafcf88a985d230ef978dd1830752f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
