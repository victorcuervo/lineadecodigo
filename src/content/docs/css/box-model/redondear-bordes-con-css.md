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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BICTEQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsAa7HrQSoDEy5jEY4wMbV5WWvw%2BsO%2Flyz%2BQQcSYIiaAiEAydnDFsUGCwF6TSC0l8speiopPguM4cfgkio%2B8JsmL94q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDF5ZIm5eFSKzY6DmNCrcA8C1udFvh%2FzUCiwbcJhraY1NtsYwtHFw3J733oUx%2F7qWHuG3WzL2gc2w4O0FUlPI02Hni98JmtBTHC50J4lBBcpjJAkVPw%2BmzyeyJnZ1Pq0OonkC%2BVdpfbL2Lr%2B4FYV%2Bb%2F8ithDYei0BLWCTUCLv4nHdBx4Xr8XUItJg%2FlQRJ5Ck0%2B1y4Dy9xcItThMEeULGwWwznfYpEAs9dZzYe1R1xWvQZ11B%2Bc0%2FFrRrrLWzBXzVJl4zWTNeRT%2FB0IG%2FTGysGVuzmaC1lN2MREMjDzBTMLZ9XDuXwytUhq5UZ%2FRmPHLVI26fM163LuSQVvciPWH1FTlipOF7a2guVsFdw5jMFHONadDnmpmC%2BEqhOlbMpSdwQnELaEhtdXdUNZtzTW2kzXxa40nymaSQ5A3LDp1lzsI7afksN03KuZ63bl8PWPO6q512JWdt8nW4xAcB2%2Fvh99XyPylsJ9aVo4n2%2BsJT%2BiVuBKD3rWFqeBanM2N0qzsPztN6mbzHkA3gVrSJcbO%2B0BdHRczKyzF3L6Rn2Z%2B7NtkPkUW9wYncj4IBYyzZFXHtCxo5b1EvEbBbQ4DAxiVfFXDLs1t80wWr0WgIYDiUTKszpm4u9UjEGI2F67V%2F0ySZCtA1pDe%2FAjsNzqXhMN%2FwicoGOqUBuffFwS96OgY2hTl5wsObH6%2FKoGQboToz2oaVfeZZ1fTvcUL8EI9jWfKSO%2BH3VyRi0wmXQKAHmUq4CX9X9VR5kCBufiIDHPdD2nSfYGTyrnBtuyPerTLi6rSookylZkOCMIcgRSo61sKMS0WfnFArqTFgHxVF6ggiob5QROc52om61VEHN%2FJEBUbHqxbkHViGb%2FBCNZO3dtEEAiTbpP3xpItb7MhU&X-Amz-Signature=8a3ffd9dc7f79fb0f972a3824bf00dee240725f501008409d195afc8d32e8036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BICTEQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsAa7HrQSoDEy5jEY4wMbV5WWvw%2BsO%2Flyz%2BQQcSYIiaAiEAydnDFsUGCwF6TSC0l8speiopPguM4cfgkio%2B8JsmL94q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDF5ZIm5eFSKzY6DmNCrcA8C1udFvh%2FzUCiwbcJhraY1NtsYwtHFw3J733oUx%2F7qWHuG3WzL2gc2w4O0FUlPI02Hni98JmtBTHC50J4lBBcpjJAkVPw%2BmzyeyJnZ1Pq0OonkC%2BVdpfbL2Lr%2B4FYV%2Bb%2F8ithDYei0BLWCTUCLv4nHdBx4Xr8XUItJg%2FlQRJ5Ck0%2B1y4Dy9xcItThMEeULGwWwznfYpEAs9dZzYe1R1xWvQZ11B%2Bc0%2FFrRrrLWzBXzVJl4zWTNeRT%2FB0IG%2FTGysGVuzmaC1lN2MREMjDzBTMLZ9XDuXwytUhq5UZ%2FRmPHLVI26fM163LuSQVvciPWH1FTlipOF7a2guVsFdw5jMFHONadDnmpmC%2BEqhOlbMpSdwQnELaEhtdXdUNZtzTW2kzXxa40nymaSQ5A3LDp1lzsI7afksN03KuZ63bl8PWPO6q512JWdt8nW4xAcB2%2Fvh99XyPylsJ9aVo4n2%2BsJT%2BiVuBKD3rWFqeBanM2N0qzsPztN6mbzHkA3gVrSJcbO%2B0BdHRczKyzF3L6Rn2Z%2B7NtkPkUW9wYncj4IBYyzZFXHtCxo5b1EvEbBbQ4DAxiVfFXDLs1t80wWr0WgIYDiUTKszpm4u9UjEGI2F67V%2F0ySZCtA1pDe%2FAjsNzqXhMN%2FwicoGOqUBuffFwS96OgY2hTl5wsObH6%2FKoGQboToz2oaVfeZZ1fTvcUL8EI9jWfKSO%2BH3VyRi0wmXQKAHmUq4CX9X9VR5kCBufiIDHPdD2nSfYGTyrnBtuyPerTLi6rSookylZkOCMIcgRSo61sKMS0WfnFArqTFgHxVF6ggiob5QROc52om61VEHN%2FJEBUbHqxbkHViGb%2FBCNZO3dtEEAiTbpP3xpItb7MhU&X-Amz-Signature=8c36e96a799f004940bad85f45a6db21b377680f583f6c2d727341483d93fb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
