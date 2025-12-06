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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U5L4WM2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUj4GOE4CiLF8mORWKTj0foX8Ajpyamcj%2FMzVsryuqEAIhAIq9xvwsdYqZlZU5FRljwQ7orXYnpv5j4OWWmztlvN4kKv8DCGwQABoMNjM3NDIzMTgzODA1IgwFzrl6ewpJBQ5uPgEq3AOqU8RoFW%2Fv1lS4B2CadW%2B3hITtynNDiCZ11Yj4%2BdCbtWlvxm8I%2FrZOlwZvvxuz5xnUkvCZgMTMuOVSoCXNzFtJsO0n3RMGALlBQ%2FQBG3hHAPFbgyY6q2qyZ4RsyHupzHkqSydwe41vPn9HQHcL%2BiAFuZ6MJtf4WsHcbgMaBkXnZBU4geQqBdXoxTaT6MKUhU99%2F62aJ4Xo%2FrzG17yRhoN7DhvJ18clZxFg7Ws8ODhSScwzXqi1dftkYIc23SKeUfwZDbtIeH8FYlZrbrWIJ2yESIjNP2T41RAZtGWoEiId35RvOO5muVURYSa%2FNtdHrc99QwLYyrnLR3trFXlnZPVv5VJLfxVTzMQzYIWiUVD3QibywnUnx%2F21sNC3zl4D4K0BEk7C2Ai42iMemB1Vf0S3%2BTgNMgw1VTS6Ljqd7gDsxQaUbxDjbXFsICCMrXTjIx9rw8Kz9SHtlv3w%2BsHyyVWn6OdQ6TnvztvXRlxeKSOEeEhm2s1q8QrNMQRc%2B0UOHi6%2BJSEr0HNwGvh1X2%2BBkFAytmA8La56o5q1%2FwjxS7SaBqSMStJqqlIAxJ%2Bd2FKEHV9OLa527vbF7E6JIVnWtZSW7JJoppw%2F02TkwdC1teUJTimIk1Gn7qMBSmE63zCUw87JBjqkAb8LFXYUfJ2HV4pnaNI72Rwr0iIvtDKqH6dQf02jb%2BZwQtwOtgHn%2BF6rtbXCOBpr0jlj8F%2B5X2Aqd2z4LjA4xBMpKsKgK3vxbP8ajiCrg9qL5OqsaOsa2HRADQvWilm82u%2Fdo8nbayhYpBdX9ukwewgcjvbM8hIzh%2FF5KBv9mo%2BDvsw6HnZApmBimf5L804%2B7NfVjKC2Ahz5hUjdhvT1MTnatkSb&X-Amz-Signature=11b9140626446a333428199ce31eef280429812575000213d536c47a431a2911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U5L4WM2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUj4GOE4CiLF8mORWKTj0foX8Ajpyamcj%2FMzVsryuqEAIhAIq9xvwsdYqZlZU5FRljwQ7orXYnpv5j4OWWmztlvN4kKv8DCGwQABoMNjM3NDIzMTgzODA1IgwFzrl6ewpJBQ5uPgEq3AOqU8RoFW%2Fv1lS4B2CadW%2B3hITtynNDiCZ11Yj4%2BdCbtWlvxm8I%2FrZOlwZvvxuz5xnUkvCZgMTMuOVSoCXNzFtJsO0n3RMGALlBQ%2FQBG3hHAPFbgyY6q2qyZ4RsyHupzHkqSydwe41vPn9HQHcL%2BiAFuZ6MJtf4WsHcbgMaBkXnZBU4geQqBdXoxTaT6MKUhU99%2F62aJ4Xo%2FrzG17yRhoN7DhvJ18clZxFg7Ws8ODhSScwzXqi1dftkYIc23SKeUfwZDbtIeH8FYlZrbrWIJ2yESIjNP2T41RAZtGWoEiId35RvOO5muVURYSa%2FNtdHrc99QwLYyrnLR3trFXlnZPVv5VJLfxVTzMQzYIWiUVD3QibywnUnx%2F21sNC3zl4D4K0BEk7C2Ai42iMemB1Vf0S3%2BTgNMgw1VTS6Ljqd7gDsxQaUbxDjbXFsICCMrXTjIx9rw8Kz9SHtlv3w%2BsHyyVWn6OdQ6TnvztvXRlxeKSOEeEhm2s1q8QrNMQRc%2B0UOHi6%2BJSEr0HNwGvh1X2%2BBkFAytmA8La56o5q1%2FwjxS7SaBqSMStJqqlIAxJ%2Bd2FKEHV9OLa527vbF7E6JIVnWtZSW7JJoppw%2F02TkwdC1teUJTimIk1Gn7qMBSmE63zCUw87JBjqkAb8LFXYUfJ2HV4pnaNI72Rwr0iIvtDKqH6dQf02jb%2BZwQtwOtgHn%2BF6rtbXCOBpr0jlj8F%2B5X2Aqd2z4LjA4xBMpKsKgK3vxbP8ajiCrg9qL5OqsaOsa2HRADQvWilm82u%2Fdo8nbayhYpBdX9ukwewgcjvbM8hIzh%2FF5KBv9mo%2BDvsw6HnZApmBimf5L804%2B7NfVjKC2Ahz5hUjdhvT1MTnatkSb&X-Amz-Signature=c2347a71ad25a084de37519228b2cb3ee3ae1f18b4de5588fe5f5927430d3f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
