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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675X7THAE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9UQqBDwuWEOAp%2B5w9T6dj6Y9kE16zUJeFjA1FAlAmsAiEAjm8HAtFCRDHIHu3ZWoAUrOxnjANmJ9bEXcKOSuhhV%2BcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLO%2B7amDLTCGxvZSeyrcA%2Bemx3g21abR2Wj2MSzXGXu9BkAdFU5PcjfCPeqoEtk6fW36yrx6%2Bh7r5Eq2NiNXKgsRfcP0qYMtXv8P%2BbdTt%2FMV213wMQU3FdoPHPW6fUv6L3Vd4%2BgYwfMPlO6JoQU8X6RgdZpqzUkYXIbSj3MTKYJPvY0Kzxm6qY4hb57uNcIEmjiSll2YI6hjMUMuZ2rt4119RXyU2yPZjUBr79SeFUhm%2BmgidttiaBhiTqixlruFfjKf7B0OIKYYV8zTOK3VwnMpuSikOeYpFTFSgVlnSgW8VSp%2BgKtHy0fU1eVZxtg5Fs3f5EKypc5V9Ndd1jsPBLxKEXhaBrkJijjC49EUL2sxWhvA8k1kVicDtSKxroeZSj%2F%2F6Oeadf1aq1iHIqBGpCSUUZxubkRfQjPERxI7nJVFOsEEGDu5OTlpNCkwbMwBVNdiA2YgXUw42NMM9CUJgHWDSoAB3p5G6NSrmUTLA3PFrkGKV8rx58CqIQqcNSOXKHWK5itUTvmMVuFHy8SxXv46JlYM8lio%2FQjZdbiUe2IV2rqFEeMJ5KZWdXjbUPZhkYJ9mxn0pOxel5VG3z6hIqAjeCZ313gHbFiAEgC%2FuTcj2AaorB8UbxbRByOIGPlE7Tm6y2Mll5oS1OY6MKCfi8oGOqUB9upOaAiemuhXQ9Pj810yGQmByoLJBYb%2BBfX3t7dZN3tfpJvB5iepYX1XER3ITWDSsGGHNFNVIVDmxx3oA6JH%2Bvw3MnVpY5l7rwJ81VKehkYHBf7gkPjNV0bmPbojCCjcCtCq5G7%2FulY51fbYuAtVSVOn2ipccKHSeCGKssVL7S%2FEXuqiQScdTo%2BnJA1qba%2BlYpeQ5JbyqfyWRENFD2YLZG4klx3p&X-Amz-Signature=8cc2401e57a01bc775c8c9fa00d65a821cca4032f1fcc889122bb72bd9ab7227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675X7THAE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9UQqBDwuWEOAp%2B5w9T6dj6Y9kE16zUJeFjA1FAlAmsAiEAjm8HAtFCRDHIHu3ZWoAUrOxnjANmJ9bEXcKOSuhhV%2BcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLO%2B7amDLTCGxvZSeyrcA%2Bemx3g21abR2Wj2MSzXGXu9BkAdFU5PcjfCPeqoEtk6fW36yrx6%2Bh7r5Eq2NiNXKgsRfcP0qYMtXv8P%2BbdTt%2FMV213wMQU3FdoPHPW6fUv6L3Vd4%2BgYwfMPlO6JoQU8X6RgdZpqzUkYXIbSj3MTKYJPvY0Kzxm6qY4hb57uNcIEmjiSll2YI6hjMUMuZ2rt4119RXyU2yPZjUBr79SeFUhm%2BmgidttiaBhiTqixlruFfjKf7B0OIKYYV8zTOK3VwnMpuSikOeYpFTFSgVlnSgW8VSp%2BgKtHy0fU1eVZxtg5Fs3f5EKypc5V9Ndd1jsPBLxKEXhaBrkJijjC49EUL2sxWhvA8k1kVicDtSKxroeZSj%2F%2F6Oeadf1aq1iHIqBGpCSUUZxubkRfQjPERxI7nJVFOsEEGDu5OTlpNCkwbMwBVNdiA2YgXUw42NMM9CUJgHWDSoAB3p5G6NSrmUTLA3PFrkGKV8rx58CqIQqcNSOXKHWK5itUTvmMVuFHy8SxXv46JlYM8lio%2FQjZdbiUe2IV2rqFEeMJ5KZWdXjbUPZhkYJ9mxn0pOxel5VG3z6hIqAjeCZ313gHbFiAEgC%2FuTcj2AaorB8UbxbRByOIGPlE7Tm6y2Mll5oS1OY6MKCfi8oGOqUB9upOaAiemuhXQ9Pj810yGQmByoLJBYb%2BBfX3t7dZN3tfpJvB5iepYX1XER3ITWDSsGGHNFNVIVDmxx3oA6JH%2Bvw3MnVpY5l7rwJ81VKehkYHBf7gkPjNV0bmPbojCCjcCtCq5G7%2FulY51fbYuAtVSVOn2ipccKHSeCGKssVL7S%2FEXuqiQScdTo%2BnJA1qba%2BlYpeQ5JbyqfyWRENFD2YLZG4klx3p&X-Amz-Signature=8808aea6d52b5118ca213a820a89ac8e689bd083b47fb022901188b21696fc61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
