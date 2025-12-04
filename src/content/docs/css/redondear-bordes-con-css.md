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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645GZEDH6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDUVEruMhuqUSRFTAnqvO0sRbOI8nv1warfGolfWUlRtwIhAJ4%2BD8MZtE4RLHleQBJkdrTuas13H1en4yxviSrFYeQTKv8DCEYQABoMNjM3NDIzMTgzODA1IgxqV7eGbwGdXBybQEwq3APa%2BWKJeJpMWDAfabEapW6LTZ5RgafEqSy5Cu%2B2sUQJbwzTErJmiDjukncn456iXUQcxggERP3TQfrnvTGCpVpJKxNnD1YUyJUw%2Flv34yivhqNgaUJ79USDIXbspveU%2Bs4XbLrwJzF%2BaowSaFHc11UDA4k%2F7NGpeAhVlPixKIY%2Bd4ivaNIWsLrSC7m%2FbAKBgFbap2Ckj4C7Spp%2F%2FAOqDPMcgky%2BuKkqwA9vm95ktp5kTWh3qaReITbAp9JM6E1FStXRYFC2U5Gytfx5k6WwDqEG3YOQNWDdARhJ8L3vdOw6ToG9%2F7ah%2Fc5jijuakqsMyqya1BGzE4vOZdXxcFZVXJjd0TxKOdBUb%2F7SQbj%2BR3NunDHN00KTtTywTNvCxwOmv5ejskx1nBVWff6E%2Bxso%2BA0au1fkyKHQAhTTd6iwMWckkZbaDfESBzOuElWV2pVk1Us%2FkG4s80JhpAiwvC0xOb0s3f4w3%2BqT6Qk%2BoyRSHGjAuZpTG7TLBdZ3ZKNzl8T%2BbVfFE6GRb5XPUJlrehmwpju4DpcAVHbZnWb6kkn77%2Fc2aSZUKQYKjKyYuoTf799xSfMnFECZqrrK9E7XmzSQuh5HuiJhkCBwDiaOzKLwZWHlCoRtJBJAXGevZ1JDDjCPhMbJBjqkASKT0%2FEwzf2KhVgJmVkmPRC0UvI2qVXwn4NQuI9Vpx6v4mdJePiuQ9o01wjCFtMPtIoySDuCm%2F9x%2FX5ttxUTfDfI942R3IVwfOlelW0BHbOukTcD9sYYr9DrxOTIMueQxLPyNOz5K2Suzrralm%2FP6boXhWjMD5Pos%2FQ9t6e3sm9C4p5qq3jI9FJhHaDe4vfWs%2FY7PQWSNUzm2tDu5%2FHVY7gCiZ7A&X-Amz-Signature=ca12a2a3a2a030a7a8b3266cb04b0f15d52a5f93a1bc7008965146a613ab4d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645GZEDH6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDUVEruMhuqUSRFTAnqvO0sRbOI8nv1warfGolfWUlRtwIhAJ4%2BD8MZtE4RLHleQBJkdrTuas13H1en4yxviSrFYeQTKv8DCEYQABoMNjM3NDIzMTgzODA1IgxqV7eGbwGdXBybQEwq3APa%2BWKJeJpMWDAfabEapW6LTZ5RgafEqSy5Cu%2B2sUQJbwzTErJmiDjukncn456iXUQcxggERP3TQfrnvTGCpVpJKxNnD1YUyJUw%2Flv34yivhqNgaUJ79USDIXbspveU%2Bs4XbLrwJzF%2BaowSaFHc11UDA4k%2F7NGpeAhVlPixKIY%2Bd4ivaNIWsLrSC7m%2FbAKBgFbap2Ckj4C7Spp%2F%2FAOqDPMcgky%2BuKkqwA9vm95ktp5kTWh3qaReITbAp9JM6E1FStXRYFC2U5Gytfx5k6WwDqEG3YOQNWDdARhJ8L3vdOw6ToG9%2F7ah%2Fc5jijuakqsMyqya1BGzE4vOZdXxcFZVXJjd0TxKOdBUb%2F7SQbj%2BR3NunDHN00KTtTywTNvCxwOmv5ejskx1nBVWff6E%2Bxso%2BA0au1fkyKHQAhTTd6iwMWckkZbaDfESBzOuElWV2pVk1Us%2FkG4s80JhpAiwvC0xOb0s3f4w3%2BqT6Qk%2BoyRSHGjAuZpTG7TLBdZ3ZKNzl8T%2BbVfFE6GRb5XPUJlrehmwpju4DpcAVHbZnWb6kkn77%2Fc2aSZUKQYKjKyYuoTf799xSfMnFECZqrrK9E7XmzSQuh5HuiJhkCBwDiaOzKLwZWHlCoRtJBJAXGevZ1JDDjCPhMbJBjqkASKT0%2FEwzf2KhVgJmVkmPRC0UvI2qVXwn4NQuI9Vpx6v4mdJePiuQ9o01wjCFtMPtIoySDuCm%2F9x%2FX5ttxUTfDfI942R3IVwfOlelW0BHbOukTcD9sYYr9DrxOTIMueQxLPyNOz5K2Suzrralm%2FP6boXhWjMD5Pos%2FQ9t6e3sm9C4p5qq3jI9FJhHaDe4vfWs%2FY7PQWSNUzm2tDu5%2FHVY7gCiZ7A&X-Amz-Signature=42c38e3586daf7c323330f809170e4498541ba7e3abf27bcd1818941c5086ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
