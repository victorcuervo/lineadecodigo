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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFGPHK6N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC6aIJaU%2BbALze3d9bnccbufAn3hxHpJwaw%2FpGCW99UYwIgcqe12y%2B8QJ5oy%2BBNmPdQz5LIuO2VMvBVPFqHI6LlLJ4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNl8GYTbm26INyaLsircAxRvpNA3sLE9NQqUP%2Bo%2Fwpze6BemElzed625G4soFbkCxLgrWh5zRFYfLFpcTM29cs0Zaw33JZWXIlBWgT3oGG2CHslnNPF5tW67CHu87tBx%2B1rhb4V7t%2FmDpEObpEVUilNu8xWHxXghe%2FJXrlYLA0dBWZKJWpzUtWlM0z0DZHCV9sJE5XZXvo%2B4u0XNve1L2W51n%2FA%2FzVScUeqx%2By3l5z7lCqHK5hX%2FbXrMuO5pLfQHhUx9WUO0wtlEnj9TB1Oah8hacluHljCBLPdOMA%2FP5Ye6OB7NlCALkR6omZwenfDsCWRvt0W9oBWW2w30kMPGPt2qxwiZjZKCFLHAk%2F%2BU9TXjOQ3wc0oUJ5CZqNSBtOtb6XIoVfiZEHmMpHTYN31wxLDtSXo3ntBNdSPBC4pWXazBX%2FEHk1O3%2FKyTzaceJ%2B41TseFZcx6GXE52MC%2Fx56gN5uHQkHSDg%2BZMvB6ru9Ly2FfdEEdHBK2eHn4lcLqV6B8iKwn7ZCPDQLFL448HGaROMvlwkm8dYIEPpwkQi62VwxSaY%2FTK5Eil7q56CXYDyBHAUFUCtfOHbfzgPBjcQi%2BCjp%2BN%2FEwW13w%2FLy8ie2u%2BXIPxqSRSD0DxNKziih0v%2FV5XPaKKjm7MBYIQzxFMPGQxMkGOqUBbPUmsH8KUJY1fnlXveq0pUNx52YJlFwSQwxSvkeKdbj6wyVvLORW8dHWgHF5X92RKcQKK4OYn2itVeMJf2NbLHXOO8M0X%2Faf9EyAHTBGnqz0J9U%2Bl3PSIMDxNPLlbN%2FNngmPufcofuib1Pa4NYatwHWW9Sx%2FOXqNQW6uKPZIe0V%2BXGTV3i84T1RHBMSCp%2Bkm72Q5j8Y1GOXiege%2F14Q67KEL%2Bs1n&X-Amz-Signature=0b8bd667c4cdc1ab328b430049d9652610b1631ada47a9b89d314fd416f2c324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFGPHK6N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC6aIJaU%2BbALze3d9bnccbufAn3hxHpJwaw%2FpGCW99UYwIgcqe12y%2B8QJ5oy%2BBNmPdQz5LIuO2VMvBVPFqHI6LlLJ4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNl8GYTbm26INyaLsircAxRvpNA3sLE9NQqUP%2Bo%2Fwpze6BemElzed625G4soFbkCxLgrWh5zRFYfLFpcTM29cs0Zaw33JZWXIlBWgT3oGG2CHslnNPF5tW67CHu87tBx%2B1rhb4V7t%2FmDpEObpEVUilNu8xWHxXghe%2FJXrlYLA0dBWZKJWpzUtWlM0z0DZHCV9sJE5XZXvo%2B4u0XNve1L2W51n%2FA%2FzVScUeqx%2By3l5z7lCqHK5hX%2FbXrMuO5pLfQHhUx9WUO0wtlEnj9TB1Oah8hacluHljCBLPdOMA%2FP5Ye6OB7NlCALkR6omZwenfDsCWRvt0W9oBWW2w30kMPGPt2qxwiZjZKCFLHAk%2F%2BU9TXjOQ3wc0oUJ5CZqNSBtOtb6XIoVfiZEHmMpHTYN31wxLDtSXo3ntBNdSPBC4pWXazBX%2FEHk1O3%2FKyTzaceJ%2B41TseFZcx6GXE52MC%2Fx56gN5uHQkHSDg%2BZMvB6ru9Ly2FfdEEdHBK2eHn4lcLqV6B8iKwn7ZCPDQLFL448HGaROMvlwkm8dYIEPpwkQi62VwxSaY%2FTK5Eil7q56CXYDyBHAUFUCtfOHbfzgPBjcQi%2BCjp%2BN%2FEwW13w%2FLy8ie2u%2BXIPxqSRSD0DxNKziih0v%2FV5XPaKKjm7MBYIQzxFMPGQxMkGOqUBbPUmsH8KUJY1fnlXveq0pUNx52YJlFwSQwxSvkeKdbj6wyVvLORW8dHWgHF5X92RKcQKK4OYn2itVeMJf2NbLHXOO8M0X%2Faf9EyAHTBGnqz0J9U%2Bl3PSIMDxNPLlbN%2FNngmPufcofuib1Pa4NYatwHWW9Sx%2FOXqNQW6uKPZIe0V%2BXGTV3i84T1RHBMSCp%2Bkm72Q5j8Y1GOXiege%2F14Q67KEL%2Bs1n&X-Amz-Signature=74a19ac167c7e82b8dded403ce02643e520914c70fe6987da8207cbf0bbd25e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
