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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I62PVWT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQChb2jVkQyKYrVzmYtP3H4h47bg6RJxcIiginpZth2phwIhANYaYET%2FeJC0sZKrXEkZbaFxkXac0j5fjOIAIgVeeYxwKv8DCEgQABoMNjM3NDIzMTgzODA1Igz4tT7nQG1dixCxSXoq3APTGXbOO%2BidQelgzFVjOUAQugRBgHBF0Ds5qewpiML9ulQFRGPBZ%2Fpdgap%2Bqka0kPQvTU3Mf2l23J8fv2YzW%2BSVOl31UPgort8gPNXWLiq4kbrKcgOvGV3rNG1l%2FGf7kwSaTjC4prGwZQKlsJhGM0SmsLO9KIAV0yCMYrUShmT4GA%2F4IDMqh9HUzHcoUnzCtkXM1huTNSfZZPLg1AUtNILU7qWT4%2FLpSwzgGKgQLK6POQH9ksU3AMDt%2F0LskhBABKT1x%2FglZNDvpt9wTa8%2B18vlBsdMaKNaawQndGZeiaLb66S8iMY8syVG1Kri5aoNWEnk%2FJr7tmh9qa2mbZIwhyrYr1dmzy3B2orhgQ068s0zyH5oIV35EL5jnFC6RpOEGAkEMDzp81LAJBaRvPtQpI7XjMc8jPwhyMHAN9LCpbkddP%2FfaQddahJFmTXp5CZFxshxUrbBvk4YaH4eFPcI68A51VNZ5LnZTPEcVJugbebt04HS7vrFK6puJDCEx0Ydcupb126uKREpA4iRRHgal64H%2F7fxgpIe0byHzSvK7nVZRsIGiGXcSQ4fY7Ojem%2F484M9lo3%2B7iK1GTmnbV87njbB4Z2uXIiR42VhcWwwdPAQupLYHX9PDqoNDCLKEDCYv8bJBjqkAZErXCTCzkAqnCcg5gXLI7uICgOFkCJw9ybn%2BXGvY7EBEz9INdPyY3gd7YR%2F%2FCKWcEPcmwnsCfRBzwM3wetvfn3I0ENlVTDWH2SP0RvUN27%2BytTifyTXlgSwif64Nl37obZpK3W38%2BrtZ%2FYEX%2BQyFZtlQVrCSHVQ8xCd2Uy%2BOxu4A31vR%2FwmSCHRYZ8yLx8K4uaCz%2F3pPjep07nvpygZN0D1yeYm&X-Amz-Signature=eaae28eebe711a9962a55126668a6583651ee01fcf4680dfd29fdcded2ed154b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I62PVWT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQChb2jVkQyKYrVzmYtP3H4h47bg6RJxcIiginpZth2phwIhANYaYET%2FeJC0sZKrXEkZbaFxkXac0j5fjOIAIgVeeYxwKv8DCEgQABoMNjM3NDIzMTgzODA1Igz4tT7nQG1dixCxSXoq3APTGXbOO%2BidQelgzFVjOUAQugRBgHBF0Ds5qewpiML9ulQFRGPBZ%2Fpdgap%2Bqka0kPQvTU3Mf2l23J8fv2YzW%2BSVOl31UPgort8gPNXWLiq4kbrKcgOvGV3rNG1l%2FGf7kwSaTjC4prGwZQKlsJhGM0SmsLO9KIAV0yCMYrUShmT4GA%2F4IDMqh9HUzHcoUnzCtkXM1huTNSfZZPLg1AUtNILU7qWT4%2FLpSwzgGKgQLK6POQH9ksU3AMDt%2F0LskhBABKT1x%2FglZNDvpt9wTa8%2B18vlBsdMaKNaawQndGZeiaLb66S8iMY8syVG1Kri5aoNWEnk%2FJr7tmh9qa2mbZIwhyrYr1dmzy3B2orhgQ068s0zyH5oIV35EL5jnFC6RpOEGAkEMDzp81LAJBaRvPtQpI7XjMc8jPwhyMHAN9LCpbkddP%2FfaQddahJFmTXp5CZFxshxUrbBvk4YaH4eFPcI68A51VNZ5LnZTPEcVJugbebt04HS7vrFK6puJDCEx0Ydcupb126uKREpA4iRRHgal64H%2F7fxgpIe0byHzSvK7nVZRsIGiGXcSQ4fY7Ojem%2F484M9lo3%2B7iK1GTmnbV87njbB4Z2uXIiR42VhcWwwdPAQupLYHX9PDqoNDCLKEDCYv8bJBjqkAZErXCTCzkAqnCcg5gXLI7uICgOFkCJw9ybn%2BXGvY7EBEz9INdPyY3gd7YR%2F%2FCKWcEPcmwnsCfRBzwM3wetvfn3I0ENlVTDWH2SP0RvUN27%2BytTifyTXlgSwif64Nl37obZpK3W38%2BrtZ%2FYEX%2BQyFZtlQVrCSHVQ8xCd2Uy%2BOxu4A31vR%2FwmSCHRYZ8yLx8K4uaCz%2F3pPjep07nvpygZN0D1yeYm&X-Amz-Signature=1d72c6bd30e1ce27899ddcdf8e201a107e94f90b44764284ebaec160471a7d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
