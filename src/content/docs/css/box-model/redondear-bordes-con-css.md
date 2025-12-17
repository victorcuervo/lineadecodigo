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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DTWAA7V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6rSVGSpoKnVVabb5n2glAjhaip5E4Su5Lf011qZHxmAiEAh9%2BFuZZEBVpzbDmTbN3AK2qc%2Bj%2BIwMBb2G%2FE30ekgVsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJFMV91Plo9LUM5wbircA2HqbWmn6XFkU5Ll31NSb3KRiq2A0AgJ54K1HHYCJK50Z5l99f8nSUD6pl%2F%2BiRUo3d2x9nnUE%2F9NDOBDmUzfKAhcxGvTloPe8HDW%2BpFMYmCfq9wZWWENnb062BdZwe96QX8Xkl6MGBBfi2DQ9ISdXBnXsiWg88KCXEcmUBT9b3iFTY5f7cu1ZVm0OmYKkQd8JTQUifnCA0DZB8I5JKsbQTSO8AW6UPZ5M6jF0Dusnqig3sBKQdQ1xwi11O1n6mNuAcSWKQlmst%2Br30AlfxZo7I1DY9Hb3XDljZ74o1Ran6nt5LYEPp7m1J8MF8%2BD1Y1fWyDaGOxYWvtDmmAldF5wczHx4WGu%2B%2F3UsOWXueJwa3O1jLBNRT28bMtmGBigj2knVg%2Fqe2LwI1zUR9ZjWYTs6%2BoqfUoWmaJN4pjVSm02dObcDVK4wgi1qWKWgQ9PmP%2FBBU9jAnffDfdSVweFzK2tKFkLXtHVlysN9AkjhbhXVHstemIrv3OUu0dxV3vZzohQucQrNY4yeFXEwJ5LcmyalOUb9W%2BGWUx8UG5WjzyHJ7oxBdC2RpXwarjWeU1JNFI0iqr0U8Utk316iW9w%2BS1DDoYXLVd4eycL0sYpB%2FLXyWQXld0JSGpwVjMoD3%2BCMJCPisoGOqUBrpOPktCMWs%2BPjpvJ55LUbNzVqjEL8cWFdvV0pHbc06k%2Frmbh9Orbzutyrnums%2BmpAxNWUBM7HrJxDhi4qIgZXB%2FcF0GbuLFSwxgiSOtbSqMz%2B6ldmFz5dmemWQR1CMxSwhueBEuMpmqSyOGN2BYJv%2Ba9FNBq%2FOUX6IzvNkHMCl7ZAPy0j9DLgVisfaMp8PRCo4p6t5eOUUKS5LKTIHPq53VDKetw&X-Amz-Signature=a069fffaeba45a2606eed5ee9306a6109dc3e4b383474aad957e8189772adb28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DTWAA7V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6rSVGSpoKnVVabb5n2glAjhaip5E4Su5Lf011qZHxmAiEAh9%2BFuZZEBVpzbDmTbN3AK2qc%2Bj%2BIwMBb2G%2FE30ekgVsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJFMV91Plo9LUM5wbircA2HqbWmn6XFkU5Ll31NSb3KRiq2A0AgJ54K1HHYCJK50Z5l99f8nSUD6pl%2F%2BiRUo3d2x9nnUE%2F9NDOBDmUzfKAhcxGvTloPe8HDW%2BpFMYmCfq9wZWWENnb062BdZwe96QX8Xkl6MGBBfi2DQ9ISdXBnXsiWg88KCXEcmUBT9b3iFTY5f7cu1ZVm0OmYKkQd8JTQUifnCA0DZB8I5JKsbQTSO8AW6UPZ5M6jF0Dusnqig3sBKQdQ1xwi11O1n6mNuAcSWKQlmst%2Br30AlfxZo7I1DY9Hb3XDljZ74o1Ran6nt5LYEPp7m1J8MF8%2BD1Y1fWyDaGOxYWvtDmmAldF5wczHx4WGu%2B%2F3UsOWXueJwa3O1jLBNRT28bMtmGBigj2knVg%2Fqe2LwI1zUR9ZjWYTs6%2BoqfUoWmaJN4pjVSm02dObcDVK4wgi1qWKWgQ9PmP%2FBBU9jAnffDfdSVweFzK2tKFkLXtHVlysN9AkjhbhXVHstemIrv3OUu0dxV3vZzohQucQrNY4yeFXEwJ5LcmyalOUb9W%2BGWUx8UG5WjzyHJ7oxBdC2RpXwarjWeU1JNFI0iqr0U8Utk316iW9w%2BS1DDoYXLVd4eycL0sYpB%2FLXyWQXld0JSGpwVjMoD3%2BCMJCPisoGOqUBrpOPktCMWs%2BPjpvJ55LUbNzVqjEL8cWFdvV0pHbc06k%2Frmbh9Orbzutyrnums%2BmpAxNWUBM7HrJxDhi4qIgZXB%2FcF0GbuLFSwxgiSOtbSqMz%2B6ldmFz5dmemWQR1CMxSwhueBEuMpmqSyOGN2BYJv%2Ba9FNBq%2FOUX6IzvNkHMCl7ZAPy0j9DLgVisfaMp8PRCo4p6t5eOUUKS5LKTIHPq53VDKetw&X-Amz-Signature=ba09e12fef8391410bf987b2d40a63e3af03f2fcf1af66c84bc4e443dbd1f060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
