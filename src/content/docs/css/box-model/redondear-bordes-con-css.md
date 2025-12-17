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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WGWWHNL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcmnxqK71iCyAApFeIPx71lHFsCDSqpQz0NEEen7EgJAiBWIm9x2xcrMRHBcd3IUkXgC%2BlajeK%2FtgEZryr7gJOL3yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMTjYSnLDkLc2c85xxKtwDxYc8vC5EGMnnZCxnBBmpsNgV7IiJLBmHUlq8I2Mi1XwaLpMAmmPF%2B37bL8JjJL8wI1DRCSAkFeLoWjBSme%2FV12PI3%2BOt1og61C9iTzXoJICY3cgvMspq6pArdBJWuINXtkoRGUC%2B5z17WzpJRCx4FCarNO3UpRt3lI8rFxfhJxh%2BpeEAkGl0qrko8pv3HhgiaQwkYtdJce%2FwbHof2Xs7ao1rMqA1IQB5imd%2B5x8gMzV7LrJBu1cLGRx4RlWZWRkXOrJwkf8iLbxx43VbJdgdu4tlYIEEcQQmHpOcSIX0DgZTOumrbNFZbPCXyUcFnZ%2BMkaLsOLrX3zPuUJ7c1jOQQVO507%2B5FeqWiSM2zljOr6DuSftylYrv0SdlWY1NEcejVesQJfKZW79Xi3M6TRgdO9FcTkkQ%2BBDSNnqCMr8f0XcOfTOeLyVcgSTE1aKxFVK0e%2FKlyM2kjoNFhv85ckP3NNaSiyz7omTciMsw%2FyYRP8p90YFgPeSKxtc2p5kIjFsoZ4c%2F9FkqX%2FZ8pKftjaMBa4NnWStEWMi72fStrdE1In8UPv6IJWwPvvD%2FTv0SURiupfAvKa12fu%2BmyYp31s6H1wItcgaop3yfG47y6z7N7MCq6WMD%2FY55%2BjEBN4wwx8WKygY6pgFzJ5Z8hdOlSzpPfg7%2BsYieUoZp16saICz1IRSRktkL0jeNTuD2IRNyWklzURHGd6cjxBpZghxB7w9IsrAYfU8Row0ETey3PLXgM1Kr5HxoUezZ%2FCGP2Kbx%2Bsi24lRoUz%2BINBhVSCtkrq8wT5SAE6F8qMPga3%2FHOFetev09NuvEIrmBNqbj4WiiqSiNdx02rjmnXUJ%2BS%2B18Oc65hu9K%2BPXERTaP2HRF&X-Amz-Signature=7cc17daee41933bc5f9d6bf90a23551d7b3655f7e76fdcfdc5c04171343e1a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WGWWHNL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcmnxqK71iCyAApFeIPx71lHFsCDSqpQz0NEEen7EgJAiBWIm9x2xcrMRHBcd3IUkXgC%2BlajeK%2FtgEZryr7gJOL3yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMTjYSnLDkLc2c85xxKtwDxYc8vC5EGMnnZCxnBBmpsNgV7IiJLBmHUlq8I2Mi1XwaLpMAmmPF%2B37bL8JjJL8wI1DRCSAkFeLoWjBSme%2FV12PI3%2BOt1og61C9iTzXoJICY3cgvMspq6pArdBJWuINXtkoRGUC%2B5z17WzpJRCx4FCarNO3UpRt3lI8rFxfhJxh%2BpeEAkGl0qrko8pv3HhgiaQwkYtdJce%2FwbHof2Xs7ao1rMqA1IQB5imd%2B5x8gMzV7LrJBu1cLGRx4RlWZWRkXOrJwkf8iLbxx43VbJdgdu4tlYIEEcQQmHpOcSIX0DgZTOumrbNFZbPCXyUcFnZ%2BMkaLsOLrX3zPuUJ7c1jOQQVO507%2B5FeqWiSM2zljOr6DuSftylYrv0SdlWY1NEcejVesQJfKZW79Xi3M6TRgdO9FcTkkQ%2BBDSNnqCMr8f0XcOfTOeLyVcgSTE1aKxFVK0e%2FKlyM2kjoNFhv85ckP3NNaSiyz7omTciMsw%2FyYRP8p90YFgPeSKxtc2p5kIjFsoZ4c%2F9FkqX%2FZ8pKftjaMBa4NnWStEWMi72fStrdE1In8UPv6IJWwPvvD%2FTv0SURiupfAvKa12fu%2BmyYp31s6H1wItcgaop3yfG47y6z7N7MCq6WMD%2FY55%2BjEBN4wwx8WKygY6pgFzJ5Z8hdOlSzpPfg7%2BsYieUoZp16saICz1IRSRktkL0jeNTuD2IRNyWklzURHGd6cjxBpZghxB7w9IsrAYfU8Row0ETey3PLXgM1Kr5HxoUezZ%2FCGP2Kbx%2Bsi24lRoUz%2BINBhVSCtkrq8wT5SAE6F8qMPga3%2FHOFetev09NuvEIrmBNqbj4WiiqSiNdx02rjmnXUJ%2BS%2B18Oc65hu9K%2BPXERTaP2HRF&X-Amz-Signature=cc981fbe948ef891470a678056a7e4aa3bf884dc106bb0a7ae836aad1b9ead2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
