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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJFH4TFJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T110951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCpn%2F6V9W%2FM5Tny2TushvhLxv6Q2yrDRFcQAdNDKGMutwIhANkPywBnMvN6qitj5TksCD%2FLksWJkLBa4%2FmUlimOEHWQKv8DCEQQABoMNjM3NDIzMTgzODA1IgyJPg7C0NL5d%2FoL5bkq3AN6lUi7eJCCnRlICZfhn5On5pVZ4UhRYhExCvAcF3Urdd305AhYdWSpzRyF12GH3bF2OaNyUDyHvf9trrRSfO%2BTJpAmz7ZkAyB2dKq9X4WTetkY1MajE7NGiwd%2Fzs5Sx8Xs5N7570jztwKp%2F3aFiOQmRZK0UgOFCSdScKEbzzaAMCdJtAn7EWiRKcWhxLRyNJz5ftxhJkZSXyEwGbCt5ggNNwHM9%2F0bJkWkagf8wwJfqRbdgKLX8VH9cy8U59BBwVkGYWjcR%2BtcgKkalU%2FC9Derst1gdt%2Bh1FCL9gXB4TURCeFgZQHANB4Dt8qYdbA2V%2Fs%2B%2BHkIx%2FRZ6GKizgYlKsWZYZ6LKRdyuZ93uG0%2BF6Evm4gie6hvAdjnNh7mYleP0sOviGWB%2F76ZV%2BCX92PqDV2RFVBafvlfVjntle4xPY5lluS3XwckbGUWmJtbQ4ujOcognIiw04wKSoMGGh5ZXL9JXa0xycB9fAoxoq7nYeNczKHwK5Qw4ciVGQPuUmd6GMCgxcKEN1RXFU5k%2BVmw1NZGPBWsmOfLei98ChG%2B7aUnp4ewes67ya8%2B9PtV69TrHNNzKo2POv%2FpTIHyeKirUvkXp3Id4DluiXKqc5xBMufJ7691J9qgf90ec3eP5TDHysXJBjqkAWOODvUe16jIin1gn0f%2B%2BzN%2BqLec6hYLpaDnKQttHCGhqEL6cSOyAsSDZFP9eMMIDoUICWMMhs0ri3UvAyQ3L82JqXoUUBcmst9Rb646S6N%2FLLrJSaoeOjxTKuwVdWHOlTj73x95mHZNwQGaLaBj0dACv1QP8yexV%2BWnKkT4CqgF0QhOtoH4DWGtQKXYEtl138hgOsYndYIBd1cWMlE4MbnfA0fC&X-Amz-Signature=e2433d8824fc45b89385cc9d973b1be00900eeb54ee814a01e6f4e1c5ee1cd47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJFH4TFJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T110951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCpn%2F6V9W%2FM5Tny2TushvhLxv6Q2yrDRFcQAdNDKGMutwIhANkPywBnMvN6qitj5TksCD%2FLksWJkLBa4%2FmUlimOEHWQKv8DCEQQABoMNjM3NDIzMTgzODA1IgyJPg7C0NL5d%2FoL5bkq3AN6lUi7eJCCnRlICZfhn5On5pVZ4UhRYhExCvAcF3Urdd305AhYdWSpzRyF12GH3bF2OaNyUDyHvf9trrRSfO%2BTJpAmz7ZkAyB2dKq9X4WTetkY1MajE7NGiwd%2Fzs5Sx8Xs5N7570jztwKp%2F3aFiOQmRZK0UgOFCSdScKEbzzaAMCdJtAn7EWiRKcWhxLRyNJz5ftxhJkZSXyEwGbCt5ggNNwHM9%2F0bJkWkagf8wwJfqRbdgKLX8VH9cy8U59BBwVkGYWjcR%2BtcgKkalU%2FC9Derst1gdt%2Bh1FCL9gXB4TURCeFgZQHANB4Dt8qYdbA2V%2Fs%2B%2BHkIx%2FRZ6GKizgYlKsWZYZ6LKRdyuZ93uG0%2BF6Evm4gie6hvAdjnNh7mYleP0sOviGWB%2F76ZV%2BCX92PqDV2RFVBafvlfVjntle4xPY5lluS3XwckbGUWmJtbQ4ujOcognIiw04wKSoMGGh5ZXL9JXa0xycB9fAoxoq7nYeNczKHwK5Qw4ciVGQPuUmd6GMCgxcKEN1RXFU5k%2BVmw1NZGPBWsmOfLei98ChG%2B7aUnp4ewes67ya8%2B9PtV69TrHNNzKo2POv%2FpTIHyeKirUvkXp3Id4DluiXKqc5xBMufJ7691J9qgf90ec3eP5TDHysXJBjqkAWOODvUe16jIin1gn0f%2B%2BzN%2BqLec6hYLpaDnKQttHCGhqEL6cSOyAsSDZFP9eMMIDoUICWMMhs0ri3UvAyQ3L82JqXoUUBcmst9Rb646S6N%2FLLrJSaoeOjxTKuwVdWHOlTj73x95mHZNwQGaLaBj0dACv1QP8yexV%2BWnKkT4CqgF0QhOtoH4DWGtQKXYEtl138hgOsYndYIBd1cWMlE4MbnfA0fC&X-Amz-Signature=64faf15b69a1b01974044b22f1cb4fb01d6937225cf62878b8c747f1fe8da48b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
