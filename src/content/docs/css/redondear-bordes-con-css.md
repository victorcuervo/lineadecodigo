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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BTNBOVI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCShTxRQK0cG%2FCRfNgAoYwZT1HJu%2B1Pu71d50TkDZ2wpQIhAKpCQRTc0meYBvO7x9yKHzDrVWOziM2VpZ1uuAc4gA%2FSKv8DCFUQABoMNjM3NDIzMTgzODA1Igzvwi5hM6a3Gvsb1R4q3AM5tK%2BkTRCL%2BqLzCXA%2FokPej%2BOkD8V6LYgqy%2Frj0Qq%2BKIb5xCGJt73X8zNc7LFIvxZWqgZD8kH8e%2BE6JN1zaVWKvkb2GyDai%2BLnt97SPdR4KXXcN1m0aYff6UrH29JYH5qLmW7xqRn72sFE5sjLBM%2By19rsKpevI7J5WitN5eGlFJWfY6TEZzfEO1WsghwJFHYMgQVm3CtCJKNqgyEMMxShpO138fInAdj0CbppctzGpOJ%2BRItkwoxhumK8JzqyAQERDtRZa5Ou%2Bn8Nkuqc6ieFJuBhaAuV3RVFVthr%2BDMgtgmi6ZmUrEkreK47jFZh9jeeGpF6W5FuQRyGUWucDMIcxdTeqap93qt%2BfWR%2BMR7Rd1SeA2DwOwg90oPqY5vow2l13QPU46bEYJzIaRyK0Dyf1OaJNxjmSkqBOFBU8pJUyyq0enOlglh4rYMX7Ayb%2BlQtxK06ozWIP64GWKq5ZHiiHJTp4vNpVBF8%2F6ne2tAilomAhogPF1SVfyMXCHvnpmgiO9X5gnPJGxeK9HL%2BFFkl%2Fp%2B7PPVpgWEsOZiBJv%2FVFov6iB%2FJZxwnalcgwBc6BLVfp2YGqv0MQztoHCwca6GQ4o%2Fg0QAlrHOTOZQEjDoFgbOMVMkC%2BWyo57O%2FNDDKssnJBjqkARbqXmbrdt%2FBdHCamfm3DaMqD1dl0b7XP5j5w3dtMjMP4sA7A1KYxuuSBku6qrNJGK6UTXEFUkZ03FHY6vCW8%2Fvv72PIFhc1kYDxEH%2FShB6DOZFRbrxAhw0tOVISCn7Mv5FSf4Wd853tDhRG0Eeeun1gE8ZL72hE%2Fk8TaJ56AB6HCe7Guco%2FISOO3aEqJz14l3Cl2eIHDddKjTnXnFlqjvZRQq4N&X-Amz-Signature=fdc39e4b528e66d2d05ac1bf53f29204232d9a239ffdd34efc6922809487e997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BTNBOVI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCShTxRQK0cG%2FCRfNgAoYwZT1HJu%2B1Pu71d50TkDZ2wpQIhAKpCQRTc0meYBvO7x9yKHzDrVWOziM2VpZ1uuAc4gA%2FSKv8DCFUQABoMNjM3NDIzMTgzODA1Igzvwi5hM6a3Gvsb1R4q3AM5tK%2BkTRCL%2BqLzCXA%2FokPej%2BOkD8V6LYgqy%2Frj0Qq%2BKIb5xCGJt73X8zNc7LFIvxZWqgZD8kH8e%2BE6JN1zaVWKvkb2GyDai%2BLnt97SPdR4KXXcN1m0aYff6UrH29JYH5qLmW7xqRn72sFE5sjLBM%2By19rsKpevI7J5WitN5eGlFJWfY6TEZzfEO1WsghwJFHYMgQVm3CtCJKNqgyEMMxShpO138fInAdj0CbppctzGpOJ%2BRItkwoxhumK8JzqyAQERDtRZa5Ou%2Bn8Nkuqc6ieFJuBhaAuV3RVFVthr%2BDMgtgmi6ZmUrEkreK47jFZh9jeeGpF6W5FuQRyGUWucDMIcxdTeqap93qt%2BfWR%2BMR7Rd1SeA2DwOwg90oPqY5vow2l13QPU46bEYJzIaRyK0Dyf1OaJNxjmSkqBOFBU8pJUyyq0enOlglh4rYMX7Ayb%2BlQtxK06ozWIP64GWKq5ZHiiHJTp4vNpVBF8%2F6ne2tAilomAhogPF1SVfyMXCHvnpmgiO9X5gnPJGxeK9HL%2BFFkl%2Fp%2B7PPVpgWEsOZiBJv%2FVFov6iB%2FJZxwnalcgwBc6BLVfp2YGqv0MQztoHCwca6GQ4o%2Fg0QAlrHOTOZQEjDoFgbOMVMkC%2BWyo57O%2FNDDKssnJBjqkARbqXmbrdt%2FBdHCamfm3DaMqD1dl0b7XP5j5w3dtMjMP4sA7A1KYxuuSBku6qrNJGK6UTXEFUkZ03FHY6vCW8%2Fvv72PIFhc1kYDxEH%2FShB6DOZFRbrxAhw0tOVISCn7Mv5FSf4Wd853tDhRG0Eeeun1gE8ZL72hE%2Fk8TaJ56AB6HCe7Guco%2FISOO3aEqJz14l3Cl2eIHDddKjTnXnFlqjvZRQq4N&X-Amz-Signature=3b07625395918b65103719c3f4a974be5aa364e56cd83fb39cb871a3bfcfcbee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
