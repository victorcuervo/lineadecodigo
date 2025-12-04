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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HJJZ5UB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDeqiZ2%2FDl%2FQVpIesh4n8gI%2FJW%2Fh8h5ds4lBHfEpSWWaAiAfLtSiIw%2B3G5ywBra80ssJyJBmVGRC%2BdZaKzEMXFuStCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMgiWKJx0K6nPGzQU6KtwDBkkQkzx6kEdC5CC%2BsA3LC89zaQdWeEXMZG0uOxj%2BsU3C18jmHkLyAXdoymzgcp0w4uSEqS1qZsjCV0ryi3cW0hLzbOWONo0%2FQU94ZuRpUz2dRBz1tdEsp3BL0h1HfHLWHgq4CKy3RcILNgj0JG6br5ZwRz4087ji%2B9UBv9Xey0kz5GFaDF%2Blm0PxANfwJgYvNjRWq8wWu8KAlji3pUh0Ye%2FcAS0QIRnWKNPK6n4gEkpCtZ%2BC%2FbLvKERsv6OWhzsnwdVzJ4doxaepmcafU%2FlG6xxB0uJ65VxjRb2QWSfCuaCed1PU7kfGxmVZ8M44K0fDSCZFxud8Xa3d4Epy%2F7FSD%2B%2FoiOYmUTs1nYMwYYLLKUwDEx%2B%2BWBdEh3G%2FQM9kwfywuNKuoZ1SxeE3MO3X7zY5cv9jNa6ejCmIUd2V9E71bFut4r2LTCbjaQ7%2ByNWBkCJD02E4x6wGdF5tIIbPKORIX2NbmxsslAJw6hGqOP5Cohvznhxhsxq0X9%2F8%2BbpV8tjmbOJgRa4g3zFsLjRgkOeOQRG20EwHOXy79RBl14ER5n4%2B4EGhbxR92ZngOX3acWsxFWxSgYyvttZntzXXq3WG6a%2Fa53oH200qUHRUE3quDhKflebCO%2B%2FewQ8KNvowlqzFyQY6pgFqOs9Fjgn4x4n6JMc7klqj1FZ9g2YP02oMMBU2FPQOSK0FnWcP3VcTJlR4%2BD0rbQBZfNgn%2B3G3v4FRPbi1IWCNxDBl4%2FJxhbaA8FQ0w4u7x%2BIpQCkDITYlctjSJjGIdxUoCllFu%2FX%2Bh2l6w4AG1OzG%2FkPqyz0bbwVEA92GWVKrn45trqA3FKHpMG1H%2BxJ6q5pwuKLlCRA9THNYWrSk2UyF1UB%2FcdxT&X-Amz-Signature=74837894ffd47c7c7e5f0b8d4544f642f8e633ffe0f38ebb39db0f7cae179632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HJJZ5UB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDeqiZ2%2FDl%2FQVpIesh4n8gI%2FJW%2Fh8h5ds4lBHfEpSWWaAiAfLtSiIw%2B3G5ywBra80ssJyJBmVGRC%2BdZaKzEMXFuStCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMgiWKJx0K6nPGzQU6KtwDBkkQkzx6kEdC5CC%2BsA3LC89zaQdWeEXMZG0uOxj%2BsU3C18jmHkLyAXdoymzgcp0w4uSEqS1qZsjCV0ryi3cW0hLzbOWONo0%2FQU94ZuRpUz2dRBz1tdEsp3BL0h1HfHLWHgq4CKy3RcILNgj0JG6br5ZwRz4087ji%2B9UBv9Xey0kz5GFaDF%2Blm0PxANfwJgYvNjRWq8wWu8KAlji3pUh0Ye%2FcAS0QIRnWKNPK6n4gEkpCtZ%2BC%2FbLvKERsv6OWhzsnwdVzJ4doxaepmcafU%2FlG6xxB0uJ65VxjRb2QWSfCuaCed1PU7kfGxmVZ8M44K0fDSCZFxud8Xa3d4Epy%2F7FSD%2B%2FoiOYmUTs1nYMwYYLLKUwDEx%2B%2BWBdEh3G%2FQM9kwfywuNKuoZ1SxeE3MO3X7zY5cv9jNa6ejCmIUd2V9E71bFut4r2LTCbjaQ7%2ByNWBkCJD02E4x6wGdF5tIIbPKORIX2NbmxsslAJw6hGqOP5Cohvznhxhsxq0X9%2F8%2BbpV8tjmbOJgRa4g3zFsLjRgkOeOQRG20EwHOXy79RBl14ER5n4%2B4EGhbxR92ZngOX3acWsxFWxSgYyvttZntzXXq3WG6a%2Fa53oH200qUHRUE3quDhKflebCO%2B%2FewQ8KNvowlqzFyQY6pgFqOs9Fjgn4x4n6JMc7klqj1FZ9g2YP02oMMBU2FPQOSK0FnWcP3VcTJlR4%2BD0rbQBZfNgn%2B3G3v4FRPbi1IWCNxDBl4%2FJxhbaA8FQ0w4u7x%2BIpQCkDITYlctjSJjGIdxUoCllFu%2FX%2Bh2l6w4AG1OzG%2FkPqyz0bbwVEA92GWVKrn45trqA3FKHpMG1H%2BxJ6q5pwuKLlCRA9THNYWrSk2UyF1UB%2FcdxT&X-Amz-Signature=070063c43e70347ea227b2c1060a0365e643589ddee239f4737f61170a1b1b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
