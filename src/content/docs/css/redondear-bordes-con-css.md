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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657QX2YYR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyGjMGOEdl4NXjFk49aIGyW1wKDrWDOIm3fkCRlpowwgIgY3hk0U663TDoPNKilOlkzw7%2FiSY8Y1CJ1b92YBfO1TQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmfl15bp5Grc7u1BSrcAz%2BVvONR5SZgqwQe1%2BtHR0v%2B9ZiahBIkTMSM7YS8oGSc5ahjQ0NsMpsqrFx0cSFtCq1s8iBDYW9ber9rkWM6wiKt1JnZnVkdmzHKCqz7%2FBW%2BqftXXZTUnNDzPJdqEv81jeU6UWIubxP8xlJhBFroakgk7ih8AKp3Xb%2FvczJpVvH8ONvCcYxDIqy0g7ue6izIbP475TEb2TDVpzVyMD6%2FBdipgOKxR0cqvAyAy5nt6jG%2BvcXp0QSMMikRkQqGfAYf50eLYDV612M4YtH1Tk7rmQ8c%2Bxo%2BqoJnV0TfHtmQV%2B83Ejx47ochfgGB0GWn2M%2Fa1hMBnfSyJu5nNN6k757SB6ZjeVbcY4NSPYF2x%2BtR01tU0NmSmGPWhrISScVS4mUQ5J8KlXR5DCG9smMPPXWHx6rAXf%2F6fyotP%2BsevnBJkuzEd%2B4U0hsINXoA5Yurk11031mXaKphKKN4Y9pTYftCG%2BN0D%2FKhYn5jV2Tu%2FHpHMu4zJ1vXcpkGY%2BEHS4CqLdCx0ua1xENVN2gFWd%2Bh6Z6h7gkxnjY%2FgzOztoIXVB1uO1LT8%2FkAJkj32Mw7xwzyZWdWNb2f7%2FX5VKXDV92oMdUOvCcnJvja7KGRnihkkzAvlqtjbmzV4itHu0T1JtjbMODT2MkGOqUBOy2ec%2BxXjtrp6y9gVPPA7eR4SBIxjnDZbboEl1Z93a82NceH2p%2FE1XELUEqF4HQipu31EKgfCV4xpuVBIdTGTH1nbZRw8ZmctouMk8X%2Bm8BdgQJ13XXmfkEesysMhRmZM%2BbqMwHouZiFNvtJttJ0sd2U0w24sHr8%2FMh4kg789ynm3iN8kgbUB0JXBSClSw1UN0pyFWpbmbdtucHJacm1FXYaE%2BUc&X-Amz-Signature=fbed91815b30446ea25bf44c5bb59917b0be9bec272e5b613d0b566d253689e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657QX2YYR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyGjMGOEdl4NXjFk49aIGyW1wKDrWDOIm3fkCRlpowwgIgY3hk0U663TDoPNKilOlkzw7%2FiSY8Y1CJ1b92YBfO1TQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmfl15bp5Grc7u1BSrcAz%2BVvONR5SZgqwQe1%2BtHR0v%2B9ZiahBIkTMSM7YS8oGSc5ahjQ0NsMpsqrFx0cSFtCq1s8iBDYW9ber9rkWM6wiKt1JnZnVkdmzHKCqz7%2FBW%2BqftXXZTUnNDzPJdqEv81jeU6UWIubxP8xlJhBFroakgk7ih8AKp3Xb%2FvczJpVvH8ONvCcYxDIqy0g7ue6izIbP475TEb2TDVpzVyMD6%2FBdipgOKxR0cqvAyAy5nt6jG%2BvcXp0QSMMikRkQqGfAYf50eLYDV612M4YtH1Tk7rmQ8c%2Bxo%2BqoJnV0TfHtmQV%2B83Ejx47ochfgGB0GWn2M%2Fa1hMBnfSyJu5nNN6k757SB6ZjeVbcY4NSPYF2x%2BtR01tU0NmSmGPWhrISScVS4mUQ5J8KlXR5DCG9smMPPXWHx6rAXf%2F6fyotP%2BsevnBJkuzEd%2B4U0hsINXoA5Yurk11031mXaKphKKN4Y9pTYftCG%2BN0D%2FKhYn5jV2Tu%2FHpHMu4zJ1vXcpkGY%2BEHS4CqLdCx0ua1xENVN2gFWd%2Bh6Z6h7gkxnjY%2FgzOztoIXVB1uO1LT8%2FkAJkj32Mw7xwzyZWdWNb2f7%2FX5VKXDV92oMdUOvCcnJvja7KGRnihkkzAvlqtjbmzV4itHu0T1JtjbMODT2MkGOqUBOy2ec%2BxXjtrp6y9gVPPA7eR4SBIxjnDZbboEl1Z93a82NceH2p%2FE1XELUEqF4HQipu31EKgfCV4xpuVBIdTGTH1nbZRw8ZmctouMk8X%2Bm8BdgQJ13XXmfkEesysMhRmZM%2BbqMwHouZiFNvtJttJ0sd2U0w24sHr8%2FMh4kg789ynm3iN8kgbUB0JXBSClSw1UN0pyFWpbmbdtucHJacm1FXYaE%2BUc&X-Amz-Signature=0a3c0389749a7ec82e1014ac980d7fb68be2180034571dcc6ac3847830fd9839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
