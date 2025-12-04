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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZDP2ZVS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDnCiAlZbeGzD9PI1pjd5zTvXeSJk7FiulPPzeKMglODgIhAM9Xp6Bagv7yi92m0oFbI%2FRPYQ2fWjlzF3DAT1wH9UIYKv8DCEQQABoMNjM3NDIzMTgzODA1IgwruFI4FA8U1yXcrYoq3AOJfmjElbhgyWPg3dN1m83aBgtIykw9QYBtmwkD%2Bzgu7GF8%2FR2MZKvCs1XqfQPSylUqWMAxgl3oBpHUqQrNURQnwP%2BSD8XrmGJSIeHR0QRPRJuPCGFXV%2BImSBcSWpiJWECuzCMkvZhepe5TLR4ZhlBoXPzNhjY6jOY3CWRNhjllbzI1IDLW3UmSceR0EOzq%2Bov1mMzCRV9TOhtcNYiQD2Y%2FQIwVq%2Bv3Cg%2F9TW8uytF5DvC4DJPSdAdMTpW3bZpsZejWTb%2B1NFm7RapyBGD476jO97WJfjHuzrjPaITjyCEW89OfkJwwbyMSyKL916EQ%2FNtPzMs11WMF%2F1K%2Fx2UYSljRLahBWXQ61J93mZ829fLK7CktsUSrdm5ZvWfuJKcuIVghwRmkd6bJbrF%2BD%2BYBmzeHpFFgEfqrVLYwOnvcolPu8CJwVcIBwtd1Ce6ySvMYLoVPDyvv%2Bpn8z9PzMdSW8dW3dtaJJxE1gPI0nVqKo2YKvcOUlvSlt%2BjQtycB1C1koJUUZQUWt4bxen2wRwp6AehaWacggjUfQJFbqZnrLW7C76PkUjxPvVI3S4bH4EiNFOLOtoRAF5YBI54VWyUIlqxOiqZ51EX%2BXzbtKc7tg4yok4cs6YjURjPszS57VDDRycXJBjqkAafbRygzA8xlbouWPS2lhsJhB61pzt3IxBKE7S%2FY%2FLJjC85PcbeFCHUjw0x%2F8ttJINbxARwUiiOd2CIKjcxt6RhOHhnZiPsmt%2BNxpnjUAD6yI4iDg3auxKA7Dwo3cXeCnWxu%2FcMMN5zVEn2P%2Bfs%2FqbF6uNxjyW2CKPDU%2BvllI5OPbwT9XvHkB6DYvTyULvbE2%2FWT46CkqBBKkIIG5XYogA50Cha%2F&X-Amz-Signature=1b909f09f39d775e4cb412cd2a1e5707f47cdbd0815143ba69219218192dc045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZDP2ZVS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDnCiAlZbeGzD9PI1pjd5zTvXeSJk7FiulPPzeKMglODgIhAM9Xp6Bagv7yi92m0oFbI%2FRPYQ2fWjlzF3DAT1wH9UIYKv8DCEQQABoMNjM3NDIzMTgzODA1IgwruFI4FA8U1yXcrYoq3AOJfmjElbhgyWPg3dN1m83aBgtIykw9QYBtmwkD%2Bzgu7GF8%2FR2MZKvCs1XqfQPSylUqWMAxgl3oBpHUqQrNURQnwP%2BSD8XrmGJSIeHR0QRPRJuPCGFXV%2BImSBcSWpiJWECuzCMkvZhepe5TLR4ZhlBoXPzNhjY6jOY3CWRNhjllbzI1IDLW3UmSceR0EOzq%2Bov1mMzCRV9TOhtcNYiQD2Y%2FQIwVq%2Bv3Cg%2F9TW8uytF5DvC4DJPSdAdMTpW3bZpsZejWTb%2B1NFm7RapyBGD476jO97WJfjHuzrjPaITjyCEW89OfkJwwbyMSyKL916EQ%2FNtPzMs11WMF%2F1K%2Fx2UYSljRLahBWXQ61J93mZ829fLK7CktsUSrdm5ZvWfuJKcuIVghwRmkd6bJbrF%2BD%2BYBmzeHpFFgEfqrVLYwOnvcolPu8CJwVcIBwtd1Ce6ySvMYLoVPDyvv%2Bpn8z9PzMdSW8dW3dtaJJxE1gPI0nVqKo2YKvcOUlvSlt%2BjQtycB1C1koJUUZQUWt4bxen2wRwp6AehaWacggjUfQJFbqZnrLW7C76PkUjxPvVI3S4bH4EiNFOLOtoRAF5YBI54VWyUIlqxOiqZ51EX%2BXzbtKc7tg4yok4cs6YjURjPszS57VDDRycXJBjqkAafbRygzA8xlbouWPS2lhsJhB61pzt3IxBKE7S%2FY%2FLJjC85PcbeFCHUjw0x%2F8ttJINbxARwUiiOd2CIKjcxt6RhOHhnZiPsmt%2BNxpnjUAD6yI4iDg3auxKA7Dwo3cXeCnWxu%2FcMMN5zVEn2P%2Bfs%2FqbF6uNxjyW2CKPDU%2BvllI5OPbwT9XvHkB6DYvTyULvbE2%2FWT46CkqBBKkIIG5XYogA50Cha%2F&X-Amz-Signature=8cbceb46690619188d47f6008608d563d3379ed707ba2df9c1fe29ceea5796e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
