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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOM6UWWR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu6loTinp7s1SxgBSnmBSbHfULZEo7Kx%2FEUViED72etAIhAPGr7jnpowwDyVBvk3eSZ4zdjqcUvDMWORdqzv0ILrrUKv8DCHQQABoMNjM3NDIzMTgzODA1Igyr5%2BpY246eafzLBRQq3AN5%2FKBpqg1q%2BzWnT0FDVv0nreYNRTi1ixTBrUcrjTRfSS5q3Wxn9k1FiC3aA6YyaUNPjxZzYKCOrREY9ntXb6b4wZV9PMZ5Z7XLxPjh18843uN2NXl7NHP54t9IoniU3WYZgcMyhjpg6KsWRbsrBiMbPipiPA5H5ebULCysYQTg0Kql7KpjmpneQgMbDo%2FuUnUSoeovkeIVMkUeZT0htWHranAIcyWB7cvmq2GvTOdbcROZbnbgMtf9yw2juFlUCHxFrPTfBVqDjMP%2FXcY0RiSPmUAxePhPc47Vy%2FhNHDY5l1NqxZlTr%2FlNK3qRrRUiHPSQvFj3RYCkCw5s9wwsFFFA8%2FM%2F4EFkeW52zfU%2FYVB31b9zYnRspH9tBlELMe8EpeiRSqVgLPYYHqUzAqKXcFXYSWrLNrXgk2HTvP00nANc0aEtCdlTx3ajNFYBl7UELzNo29cfp2wvGGnSK3gHF%2BdpfGDcxKea0SVQLIls2kanYw6cguWd5ezVVoj8FCYz187FDFBPTvarCPCOvrxbAOxc%2F%2F%2FGMnvnFq%2FS3FR8SOwN5Iq3MM%2FIK132o9o%2BH1hiFqWe5Ci3G8i3B6EfeQttHfoAeHhYW4TwNTFr1HJUHr%2FpvUJBmFuvvbW7tvd44zDPsojKBjqkAchnVYeQZNqCULmyHQs7St%2FCXuVp32TLrgdeF8Dyl9e3tjmJh4mdlQ65EX2OPmlD7vkj1IFgM5VIMM0vxRUfR97SzGHjXg8V6rh3RhX2H7kgl27OK%2F%2BsE8k5r0iAzQL8mO3OW3m0vnwvH4Jq%2Bb1KY3olfHfa5gv1fczFsKSs6JxQ7sZLvqZxn9Wl1CIrMxMgVI7Eh%2FuVyVU%2Bh7RdAFHmMt8g%2FYR6&X-Amz-Signature=c69cdba72def8e44dddc17fbac7f1429273738b26223deeaaaa400083898e141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOM6UWWR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu6loTinp7s1SxgBSnmBSbHfULZEo7Kx%2FEUViED72etAIhAPGr7jnpowwDyVBvk3eSZ4zdjqcUvDMWORdqzv0ILrrUKv8DCHQQABoMNjM3NDIzMTgzODA1Igyr5%2BpY246eafzLBRQq3AN5%2FKBpqg1q%2BzWnT0FDVv0nreYNRTi1ixTBrUcrjTRfSS5q3Wxn9k1FiC3aA6YyaUNPjxZzYKCOrREY9ntXb6b4wZV9PMZ5Z7XLxPjh18843uN2NXl7NHP54t9IoniU3WYZgcMyhjpg6KsWRbsrBiMbPipiPA5H5ebULCysYQTg0Kql7KpjmpneQgMbDo%2FuUnUSoeovkeIVMkUeZT0htWHranAIcyWB7cvmq2GvTOdbcROZbnbgMtf9yw2juFlUCHxFrPTfBVqDjMP%2FXcY0RiSPmUAxePhPc47Vy%2FhNHDY5l1NqxZlTr%2FlNK3qRrRUiHPSQvFj3RYCkCw5s9wwsFFFA8%2FM%2F4EFkeW52zfU%2FYVB31b9zYnRspH9tBlELMe8EpeiRSqVgLPYYHqUzAqKXcFXYSWrLNrXgk2HTvP00nANc0aEtCdlTx3ajNFYBl7UELzNo29cfp2wvGGnSK3gHF%2BdpfGDcxKea0SVQLIls2kanYw6cguWd5ezVVoj8FCYz187FDFBPTvarCPCOvrxbAOxc%2F%2F%2FGMnvnFq%2FS3FR8SOwN5Iq3MM%2FIK132o9o%2BH1hiFqWe5Ci3G8i3B6EfeQttHfoAeHhYW4TwNTFr1HJUHr%2FpvUJBmFuvvbW7tvd44zDPsojKBjqkAchnVYeQZNqCULmyHQs7St%2FCXuVp32TLrgdeF8Dyl9e3tjmJh4mdlQ65EX2OPmlD7vkj1IFgM5VIMM0vxRUfR97SzGHjXg8V6rh3RhX2H7kgl27OK%2F%2BsE8k5r0iAzQL8mO3OW3m0vnwvH4Jq%2Bb1KY3olfHfa5gv1fczFsKSs6JxQ7sZLvqZxn9Wl1CIrMxMgVI7Eh%2FuVyVU%2Bh7RdAFHmMt8g%2FYR6&X-Amz-Signature=c8f5435855b5430601b1f6f61d4c2306fb299f8ad251092d229f038abac384ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
