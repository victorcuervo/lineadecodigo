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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624RWN7EE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqyXjKXr0FB3EEaykBqaJB95T4zbbr2fSb75kj%2BrAKgAIgDTZKE7Jf7OCfOpAPmpOWvwSxXt0mMUTLU8UeXMz3l6wq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMlxBFV%2FAcmAbE4sJircAyNT%2B9L8xFOHFx6cBrWrlMsmFHpK7aFcn%2FhbVnfNbej3%2FuW3HWTN%2BKNlOXpFPX9VPtvInBfE6iGe8Upz7lmN0a%2FramnaZqkHRY41umyEnb%2FDmQgktbWTxvzyI2oxYoq0sv8xvgffDlWjy30vWfH6PEdRSNN2Gf4s%2BXeh%2B2rKPNiILIzrYFYonalmBkaftxjO%2BOf1DcEqx8aF7P4kfo5P22o5qENdgjRDbWtraJKw5YSWW4yh4EkO2JZKRfTMg%2BPqhZ4SLUzNAOpq2qSiSeZzc7RLX%2FRa4YBj0XtBlX2Hq7cgpANuccCHhMDO0TQIxP44wZjO8y1owDlCaLdHEKDN74%2BaIEQ1vuPTZvdbbx9uWnyWpiRcarMaLzlc6E6aatKLk8bpswfKOiNCMOklPK0Xcqyqx5oA248jCOpei%2F5dzUaRJBhjuaavsa4anXBhMb8Epcqj64zW1GBjrWvrSrx3%2BUxKqHQAWW39PUPkocB4OoQqJnTrxkcpa8lYYMjF1pun9kIYuQ41mMxPCrI%2BP19XuLdmxGG80%2BRGrR6BCUWyB%2FqBnoAjfIWODpDsoL4LKO91o%2B3Gv3ZkF8t%2B54XOVPX7SymFUoBHTFiLgufi30wj4IumlHiojnov9VC6%2BTflMP6yiMoGOqUBi%2BVdtdPAcgRh59KV4nzJ3K%2BRn74Eq%2FktJDrqQmUm5QvFKlJFuY1SdMU9BG2orKNj54AJpzHd5OPdM2bCwsilrt83zC0jp2SMnVNKA9i2H00nvtMIHsOprcc6W37uqa2%2F1JwDaf6LyODxzhRv3LYedcD5Dd8XtW2dxjCmWC9IMuhr3cJeND9K82il08CYap33Ec0hSzxuLWlCaF3pPvL%2B70XvwEO9&X-Amz-Signature=da19d2f25046e9cff2f84e43ec35a4df3fccaa256a0b728889cad1098d9d08af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624RWN7EE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqyXjKXr0FB3EEaykBqaJB95T4zbbr2fSb75kj%2BrAKgAIgDTZKE7Jf7OCfOpAPmpOWvwSxXt0mMUTLU8UeXMz3l6wq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMlxBFV%2FAcmAbE4sJircAyNT%2B9L8xFOHFx6cBrWrlMsmFHpK7aFcn%2FhbVnfNbej3%2FuW3HWTN%2BKNlOXpFPX9VPtvInBfE6iGe8Upz7lmN0a%2FramnaZqkHRY41umyEnb%2FDmQgktbWTxvzyI2oxYoq0sv8xvgffDlWjy30vWfH6PEdRSNN2Gf4s%2BXeh%2B2rKPNiILIzrYFYonalmBkaftxjO%2BOf1DcEqx8aF7P4kfo5P22o5qENdgjRDbWtraJKw5YSWW4yh4EkO2JZKRfTMg%2BPqhZ4SLUzNAOpq2qSiSeZzc7RLX%2FRa4YBj0XtBlX2Hq7cgpANuccCHhMDO0TQIxP44wZjO8y1owDlCaLdHEKDN74%2BaIEQ1vuPTZvdbbx9uWnyWpiRcarMaLzlc6E6aatKLk8bpswfKOiNCMOklPK0Xcqyqx5oA248jCOpei%2F5dzUaRJBhjuaavsa4anXBhMb8Epcqj64zW1GBjrWvrSrx3%2BUxKqHQAWW39PUPkocB4OoQqJnTrxkcpa8lYYMjF1pun9kIYuQ41mMxPCrI%2BP19XuLdmxGG80%2BRGrR6BCUWyB%2FqBnoAjfIWODpDsoL4LKO91o%2B3Gv3ZkF8t%2B54XOVPX7SymFUoBHTFiLgufi30wj4IumlHiojnov9VC6%2BTflMP6yiMoGOqUBi%2BVdtdPAcgRh59KV4nzJ3K%2BRn74Eq%2FktJDrqQmUm5QvFKlJFuY1SdMU9BG2orKNj54AJpzHd5OPdM2bCwsilrt83zC0jp2SMnVNKA9i2H00nvtMIHsOprcc6W37uqa2%2F1JwDaf6LyODxzhRv3LYedcD5Dd8XtW2dxjCmWC9IMuhr3cJeND9K82il08CYap33Ec0hSzxuLWlCaF3pPvL%2B70XvwEO9&X-Amz-Signature=386fd2968cf7ae7e54a9e90404fb008e1c97a5eba7dca2706ac00a98b76db911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
