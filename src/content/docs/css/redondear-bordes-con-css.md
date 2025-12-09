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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOPC2VL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHrUWYQYhHCQ0mgOwxY%2BdjaFjbkw9LssCVr2munPeg9AiEAuJwIuz96lSwk5TTs6IV98F12U36KXqScMA6wL862NJYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZv%2FtBGrIJBTBRunyrcA1rFEqiXO5cyBgmQWAwwywjCkZFqD5hjtkphwg97DtcD9FURnV5%2BcfQGite1O7g1V2drnnmg3fnMQMIANz%2FDtf3596v8rXKifO86G7tg251lUEebxNo3d0vOBGHsBgrvW1NMl5uWtzWxVGj2cKrOUKC1jXsD4m27LOV9%2FKqzxXQe5NMgMUFAHWu8mmzU9t1AnGQouV2eRj3LhXnG2iCgRRiIxlNL5fNdN1%2FmFEfQfoZ2zH5I%2BQ%2Bg3uITVZdIVQJ4TX7NhohzDXLFghRnWyi9MN0qRUSLZCC4AoDe8DK%2FNlYQdlyHSHZAVnr6NebuEbwUa5WMiTTc9Xz1OtPF6rpB6ObJ9ICv6BDH7N%2BoyFnIJIq7NU3sKrmu6kLgAcVYaIUfnn9YcO8Egb7VqWXWX%2BsEz5%2FgzUM5k62xNYtSrsyUZOtCBN8wAR%2BlNfuC5XTK7pacHyXCgYSoWGIZdtE8EGcCjL6Mx3HV98FDtGnHbUv1xXQvWzz8b%2F0wUErSQjZdI%2FPxqhMS%2FrzNNJ5UQ%2FPllKV69q4gDci6vRTNumy8By7SF7gUCXSqZk05Ahm2GFD56vBUisz77nU5DSWMSQ%2FPOdtMlIAM1vXCyiVgZgPuUspIN4lt01ZyFTsbsNpldhdgMPCH38kGOqUBnhDx6mOLOO14%2B%2Btbpg19ns5YGlf53ShM4IMyc5muqWTKEZbK%2Bx36Zp00UWoE4BlMFrlJYp4DwngblyoLERGMebqIOzoMBer6YkeIsy8JILgML2TlruOLodFW48dY5Y0dbGPnX3fngdlwtFEv3wFFlQFGnEO0utbGA5CELd%2F6SqKtj%2B54SI1bN5zU9%2BYdDToi3uD2FTBJWxbINVJpyf%2B0ksKFCvpc&X-Amz-Signature=edf718d3b748946b744c1a9fc72f9e63a305150f562fe65388162622ab560e4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOPC2VL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHrUWYQYhHCQ0mgOwxY%2BdjaFjbkw9LssCVr2munPeg9AiEAuJwIuz96lSwk5TTs6IV98F12U36KXqScMA6wL862NJYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZv%2FtBGrIJBTBRunyrcA1rFEqiXO5cyBgmQWAwwywjCkZFqD5hjtkphwg97DtcD9FURnV5%2BcfQGite1O7g1V2drnnmg3fnMQMIANz%2FDtf3596v8rXKifO86G7tg251lUEebxNo3d0vOBGHsBgrvW1NMl5uWtzWxVGj2cKrOUKC1jXsD4m27LOV9%2FKqzxXQe5NMgMUFAHWu8mmzU9t1AnGQouV2eRj3LhXnG2iCgRRiIxlNL5fNdN1%2FmFEfQfoZ2zH5I%2BQ%2Bg3uITVZdIVQJ4TX7NhohzDXLFghRnWyi9MN0qRUSLZCC4AoDe8DK%2FNlYQdlyHSHZAVnr6NebuEbwUa5WMiTTc9Xz1OtPF6rpB6ObJ9ICv6BDH7N%2BoyFnIJIq7NU3sKrmu6kLgAcVYaIUfnn9YcO8Egb7VqWXWX%2BsEz5%2FgzUM5k62xNYtSrsyUZOtCBN8wAR%2BlNfuC5XTK7pacHyXCgYSoWGIZdtE8EGcCjL6Mx3HV98FDtGnHbUv1xXQvWzz8b%2F0wUErSQjZdI%2FPxqhMS%2FrzNNJ5UQ%2FPllKV69q4gDci6vRTNumy8By7SF7gUCXSqZk05Ahm2GFD56vBUisz77nU5DSWMSQ%2FPOdtMlIAM1vXCyiVgZgPuUspIN4lt01ZyFTsbsNpldhdgMPCH38kGOqUBnhDx6mOLOO14%2B%2Btbpg19ns5YGlf53ShM4IMyc5muqWTKEZbK%2Bx36Zp00UWoE4BlMFrlJYp4DwngblyoLERGMebqIOzoMBer6YkeIsy8JILgML2TlruOLodFW48dY5Y0dbGPnX3fngdlwtFEv3wFFlQFGnEO0utbGA5CELd%2F6SqKtj%2B54SI1bN5zU9%2BYdDToi3uD2FTBJWxbINVJpyf%2B0ksKFCvpc&X-Amz-Signature=7596e5098dfbb09b32d78bae3b742451595046446cbaa9c39cb5f7cdc72ae170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
