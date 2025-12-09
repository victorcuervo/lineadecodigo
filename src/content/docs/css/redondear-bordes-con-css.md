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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYFKSB7B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjPxN8RPHKUFpu4LLXpnBis9dGPg3jhF3q5stR0epHlAiAyDsAh8C7%2BSSEH0M3t0jtCWukFSMh%2FCNAOCghQof9NTSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMay1oD%2F6CIMUr8iGLKtwDv%2FB7WcyjOGE5Rm8fcIrP4dlp1tRCwy7gxbQx%2BVRfYigJmCEM3R8j%2BnVSdhbdQwOHrsrwTby%2Fyxomd5xzvcZPOcdngxq9QHIOHuD3%2B698KyqN2AqducszZ5IIps9WrV2H1uQNQaeqWdXRdAKxOWCkBwmuzyAtnjd6TLm1b%2BHkqIsfq8oH6AofRYmb3vJNZLzCkW0XOY6kSLhsUX0hhpw3YKoKaxnm3CPwTFQeYapC8Gwe5TSczRoI65wUPiQylPou3DjQpQW95JvN1vHIItdJ6D2MfrCGkg6kBnukd3uDX6vsSTPOxbFeS1vSKvTfYnKVTpme8Vt%2B5AUZiL0%2B0VK4vqC%2Fi%2B%2Fm3mbY98sGQe1RvWmHXft%2F07K9JgJXpPmIO2cLMey0shi8kQDxFkYRenSVUT0Mg0j4u1OUNnxPpzrR5FmdP1%2BlScNMP1MHindW5IZRlHYEW27VVD0TD6sGwweo3am06O%2BjQj1ADBZxYkxHXhVS3TK6oM76GctHexWLWbLmNXShHzCP%2BZUQu4iDRHdm%2F%2B0h7ZWWRNIPFrcVOym69Inb9ZvxcFdsnnYnimFOk8iBU5yvUTpFiqWYdf0jLY9UVPf5rs0HrB3sQ%2BEfjMPZsHDFnFJ8BKsyvkFUL5gw%2B%2BndyQY6pgFAueB0%2FJtfzTvlfWM5hDRuLCn%2FpAs6sDpjq3epX2tY5LFlSZdg6DOqz66yRLfl89xdjFjWRSiqSvqir9Sc%2BwyTZRXAM05jUFS%2FzuLm2URFrpU59pMF9Bd5QfkguJDQScGH9cl%2BSa0iN0cnbK944ZYldiT98DiC1S3h5YuJdRp7QBHc5c2yJVhTL3cAbECDMs6C8ia7yku5kk%2Ftbr3Bp5w7wQFLT0re&X-Amz-Signature=16cded9bd167468e90437dfb6e249bbdeebc20384be1f85f466dbaa34c4d1c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYFKSB7B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjPxN8RPHKUFpu4LLXpnBis9dGPg3jhF3q5stR0epHlAiAyDsAh8C7%2BSSEH0M3t0jtCWukFSMh%2FCNAOCghQof9NTSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMay1oD%2F6CIMUr8iGLKtwDv%2FB7WcyjOGE5Rm8fcIrP4dlp1tRCwy7gxbQx%2BVRfYigJmCEM3R8j%2BnVSdhbdQwOHrsrwTby%2Fyxomd5xzvcZPOcdngxq9QHIOHuD3%2B698KyqN2AqducszZ5IIps9WrV2H1uQNQaeqWdXRdAKxOWCkBwmuzyAtnjd6TLm1b%2BHkqIsfq8oH6AofRYmb3vJNZLzCkW0XOY6kSLhsUX0hhpw3YKoKaxnm3CPwTFQeYapC8Gwe5TSczRoI65wUPiQylPou3DjQpQW95JvN1vHIItdJ6D2MfrCGkg6kBnukd3uDX6vsSTPOxbFeS1vSKvTfYnKVTpme8Vt%2B5AUZiL0%2B0VK4vqC%2Fi%2B%2Fm3mbY98sGQe1RvWmHXft%2F07K9JgJXpPmIO2cLMey0shi8kQDxFkYRenSVUT0Mg0j4u1OUNnxPpzrR5FmdP1%2BlScNMP1MHindW5IZRlHYEW27VVD0TD6sGwweo3am06O%2BjQj1ADBZxYkxHXhVS3TK6oM76GctHexWLWbLmNXShHzCP%2BZUQu4iDRHdm%2F%2B0h7ZWWRNIPFrcVOym69Inb9ZvxcFdsnnYnimFOk8iBU5yvUTpFiqWYdf0jLY9UVPf5rs0HrB3sQ%2BEfjMPZsHDFnFJ8BKsyvkFUL5gw%2B%2BndyQY6pgFAueB0%2FJtfzTvlfWM5hDRuLCn%2FpAs6sDpjq3epX2tY5LFlSZdg6DOqz66yRLfl89xdjFjWRSiqSvqir9Sc%2BwyTZRXAM05jUFS%2FzuLm2URFrpU59pMF9Bd5QfkguJDQScGH9cl%2BSa0iN0cnbK944ZYldiT98DiC1S3h5YuJdRp7QBHc5c2yJVhTL3cAbECDMs6C8ia7yku5kk%2Ftbr3Bp5w7wQFLT0re&X-Amz-Signature=12b416bc923ca62ab83202a5eacf395d300329cd0ec962a9473839157da53e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
