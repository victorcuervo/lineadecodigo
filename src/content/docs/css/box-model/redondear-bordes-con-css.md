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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHV5WIRQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0WIzAL8RM1xgoknAuGPR25XHRp9kbUcE9O8sk0IEHhAiEArY147e2ocreCUR%2BnexIWa0Qci3bN%2FAq%2FtmBiYOgn0L8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDD%2BCzm4nD3gonKvY1yrcAyTiFBuYOo3l3qhygDbBsZ5NVHko2qZvR91NfUX%2FeZ%2FKYZhiUiHGG04%2BzHpKKcemEORuAOieFbS2efcoqPc05s9p%2FP3%2FJlHqDsuMdDq5gch4lha9WEu%2F%2BCPVE0qW%2BFm3fWZqTq%2FLjDBKNRweoH1wxUHbTzeOg4jmto4CTbV1uINqQf9vetELS4gxyw0gOWkReHxx2ohNW1SrmUVVYnqkeJ7sZ8rA%2BCzNQEmI748W7VkP7zzlm75n%2BGCmPLwacsiL2r0OSzZ4gizxjNoOsWF5T9sbb7%2FB6OKMvj0Htksd6F5G%2BZ7xE%2B%2FALTCNubimko4LXQPHkHzbSvZz%2BUMujAd1DjiZt%2FmolIJmGDpUOLzUz3DcIyG%2FEiQWa15mLIjmxxLsBhtGSDmsNkA9cA6Fb%2BYXvUUZQjeGbUx4%2FJrIS8%2BnIEZeTl902rMmJBCnTAqyegq2OhJ2TZf4xW%2Fq7ShIA22lXxnexdZnr4H6zIUkhwwb55inySADrI5qMPlx5soKfiCmOoY8x0aVBQGPlBAoCtTjwNHEIwTgHGpJrPaj8bn4KMSq3vxfrVRenznq7SPovrHjJStfJPBhxshZoldumrzlJ1%2F37SBJmSt5uKIbdDAfQhVigw%2BmYRUgKz34zkN2MIbfh8oGOqUB91g9Foha%2F%2F11%2FIeyj9tRIWd4JhF5opiwocDpmLxrO2kAR6wSetoIlwm8Yr%2Bocbo%2Fj2JNXwaTR0aCl5S2FPCkkcrmfzHBOJ%2BH7%2B2w3QntCs39ZLhEkeFwA8aWLaZctxcNq80ptqkhpEDDTbAn1%2BelvDD0UJJRpYPW0foP%2Fm35Ehck%2BKYDPjgJzIfrm84bhr0YJJ0aEWSf4zEAGrPDHeD9p0t3L%2Fku&X-Amz-Signature=6783ab2794cf62ee83572acecfffd9b440677c3ccc19a43c8b5216cf6262cd36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHV5WIRQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0WIzAL8RM1xgoknAuGPR25XHRp9kbUcE9O8sk0IEHhAiEArY147e2ocreCUR%2BnexIWa0Qci3bN%2FAq%2FtmBiYOgn0L8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDD%2BCzm4nD3gonKvY1yrcAyTiFBuYOo3l3qhygDbBsZ5NVHko2qZvR91NfUX%2FeZ%2FKYZhiUiHGG04%2BzHpKKcemEORuAOieFbS2efcoqPc05s9p%2FP3%2FJlHqDsuMdDq5gch4lha9WEu%2F%2BCPVE0qW%2BFm3fWZqTq%2FLjDBKNRweoH1wxUHbTzeOg4jmto4CTbV1uINqQf9vetELS4gxyw0gOWkReHxx2ohNW1SrmUVVYnqkeJ7sZ8rA%2BCzNQEmI748W7VkP7zzlm75n%2BGCmPLwacsiL2r0OSzZ4gizxjNoOsWF5T9sbb7%2FB6OKMvj0Htksd6F5G%2BZ7xE%2B%2FALTCNubimko4LXQPHkHzbSvZz%2BUMujAd1DjiZt%2FmolIJmGDpUOLzUz3DcIyG%2FEiQWa15mLIjmxxLsBhtGSDmsNkA9cA6Fb%2BYXvUUZQjeGbUx4%2FJrIS8%2BnIEZeTl902rMmJBCnTAqyegq2OhJ2TZf4xW%2Fq7ShIA22lXxnexdZnr4H6zIUkhwwb55inySADrI5qMPlx5soKfiCmOoY8x0aVBQGPlBAoCtTjwNHEIwTgHGpJrPaj8bn4KMSq3vxfrVRenznq7SPovrHjJStfJPBhxshZoldumrzlJ1%2F37SBJmSt5uKIbdDAfQhVigw%2BmYRUgKz34zkN2MIbfh8oGOqUB91g9Foha%2F%2F11%2FIeyj9tRIWd4JhF5opiwocDpmLxrO2kAR6wSetoIlwm8Yr%2Bocbo%2Fj2JNXwaTR0aCl5S2FPCkkcrmfzHBOJ%2BH7%2B2w3QntCs39ZLhEkeFwA8aWLaZctxcNq80ptqkhpEDDTbAn1%2BelvDD0UJJRpYPW0foP%2Fm35Ehck%2BKYDPjgJzIfrm84bhr0YJJ0aEWSf4zEAGrPDHeD9p0t3L%2Fku&X-Amz-Signature=02e885b40c9f6cad943bcfdbc90ed9d4cc5c05bcc20750f91d715ab85d8f2fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
