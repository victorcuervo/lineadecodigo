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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBQQAHSN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmwPZTe7RS5JbYhG1NAvgaqCFNR3sE8efWZwJl04OyPgIhAIAEpYCR8BP5hPFb1%2FDLdtLrWjsNXlLpwCkR8fWbUtr7Kv8DCHgQABoMNjM3NDIzMTgzODA1IgxkBtqqORNfa3F6YfMq3AOxwZgxottYdG%2FgxwmiDM3nSUVDCtm288GVWQOgZRij2bdum5n1gp82d7tlgeT6R%2F9NWN%2Fnpoy7PnJGdHfKpQBqwpiTJ60yv8C9%2B1DUOzBNiLoRFnBvbRJXaYe2k1SjkvtDfEMNjeWzlPVVcbh3cKWBolJ5wIWrNPgT4kd1FuzegTGeGcYv70L1W9JfarC4PkbCrZWZdpmJfa1aZwn67opqC5qrXZ0NSeBJcVWn2OLMBFZLkt6nuA6joR3UdLG6LCGVhfhlkPWuIlu9r1ltFApJJ8TTQ%2BJ5vyhOhjBRlyBtgHdlCzJDj5LiIh3KsAA%2FV0iGNOnu2aLZVoBGO8urHWSbP%2ByUVgJ6TRjdhJvek0HFWyZ1Pj00L1h%2FBf%2BCoweNBmPB5w7bj1U04Eds4Y9pQ0Zq45iBdrRVkggbbRcGVMF6YbAaK%2BU3EUK2G4qoVpPQUlXRipp2saFuxUzSh9K1MpB%2BJZWYvw4Pp1wKNMipLTXOTWFCqdNHfwrKlqIygIJAh9awq%2FFV6PMHYLvzU58FPRzW82j%2BHVZ7%2FwhYUC%2FO7OUlHwZ2yANkpPZx4mn40kqYxAy2C21a8ijFCyDWrdB%2FsdN9rIMkf2N%2BPjIv%2B5mZ52HPkNVHNzSJWpD%2Fca4BJjDTnYnKBjqkAUEeUZyZYrAYtcc7%2Fv%2FRtm2o%2FXMruNCQCwIW1An8jczLW%2F9nhDsNMWTXXK%2FlFvF17PtJGEp4s23EDtEOQ27NSw7QmnbcEWw%2Bqxr9k12jER%2B4HSKMszmnp8rmkWOS8132s78fhmHBzKbTR0o43SXJIm459eV58wW2hQ7B7EZWBhr23s7F1GZ1dJdZ4vpqlFz3C0yWcgPFmjoz55QeDDeau%2Bjm%2BUOp&X-Amz-Signature=8962355eb78128c4ba9387ce3f058bdef402334e6578034a1fc3f2a09b707939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBQQAHSN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmwPZTe7RS5JbYhG1NAvgaqCFNR3sE8efWZwJl04OyPgIhAIAEpYCR8BP5hPFb1%2FDLdtLrWjsNXlLpwCkR8fWbUtr7Kv8DCHgQABoMNjM3NDIzMTgzODA1IgxkBtqqORNfa3F6YfMq3AOxwZgxottYdG%2FgxwmiDM3nSUVDCtm288GVWQOgZRij2bdum5n1gp82d7tlgeT6R%2F9NWN%2Fnpoy7PnJGdHfKpQBqwpiTJ60yv8C9%2B1DUOzBNiLoRFnBvbRJXaYe2k1SjkvtDfEMNjeWzlPVVcbh3cKWBolJ5wIWrNPgT4kd1FuzegTGeGcYv70L1W9JfarC4PkbCrZWZdpmJfa1aZwn67opqC5qrXZ0NSeBJcVWn2OLMBFZLkt6nuA6joR3UdLG6LCGVhfhlkPWuIlu9r1ltFApJJ8TTQ%2BJ5vyhOhjBRlyBtgHdlCzJDj5LiIh3KsAA%2FV0iGNOnu2aLZVoBGO8urHWSbP%2ByUVgJ6TRjdhJvek0HFWyZ1Pj00L1h%2FBf%2BCoweNBmPB5w7bj1U04Eds4Y9pQ0Zq45iBdrRVkggbbRcGVMF6YbAaK%2BU3EUK2G4qoVpPQUlXRipp2saFuxUzSh9K1MpB%2BJZWYvw4Pp1wKNMipLTXOTWFCqdNHfwrKlqIygIJAh9awq%2FFV6PMHYLvzU58FPRzW82j%2BHVZ7%2FwhYUC%2FO7OUlHwZ2yANkpPZx4mn40kqYxAy2C21a8ijFCyDWrdB%2FsdN9rIMkf2N%2BPjIv%2B5mZ52HPkNVHNzSJWpD%2Fca4BJjDTnYnKBjqkAUEeUZyZYrAYtcc7%2Fv%2FRtm2o%2FXMruNCQCwIW1An8jczLW%2F9nhDsNMWTXXK%2FlFvF17PtJGEp4s23EDtEOQ27NSw7QmnbcEWw%2Bqxr9k12jER%2B4HSKMszmnp8rmkWOS8132s78fhmHBzKbTR0o43SXJIm459eV58wW2hQ7B7EZWBhr23s7F1GZ1dJdZ4vpqlFz3C0yWcgPFmjoz55QeDDeau%2Bjm%2BUOp&X-Amz-Signature=a0d67652248813339d83a1584c09412c02e40481783338201371761651f2ed3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
