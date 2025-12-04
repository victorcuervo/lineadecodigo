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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VWJNWM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCTtgx7LUcPEe2Rq%2BnXwhki%2Bw%2FsvrWQLkI%2BobUcCjfYzwIhAJZnzmmlnXJ%2FBwIFIhlt1vhfJRPiZdX7UEipK40MLoB%2FKv8DCD4QABoMNjM3NDIzMTgzODA1Igy0%2BU3I8jBo8OSocWgq3ANbcpXuBkzLFr8064VL7R6hzPUvme0jaBVHKf%2BXTKPt0isZVEbtQFPlamGCkKpuNyo9BpFWSVgMbxHn%2Fl8cfGCG5MYaggEKwLiX96GWOeMkCbM626gFWk4qa6xWcvejY9nhb%2BaHV0q0fJ0DLmbxNLn3zCMwTSsT%2FjzfYdCSNiXwi1ZLIulbDL67UOEZkiZnqB5wGs4J0EzkWhSobR7C0X%2FfS1JGTvJ3%2B%2BP%2FTvZIV%2FGGTOsIZxwlpDqP%2Bn0DHIDNkeyyiNIlqhvpwevT1q%2B3GmD2xU6r82%2FiGogIIekBZD8MtaiNR%2BaOtImM3w4YLmo%2BN%2FwXtL77OwTL8rXykdgc6hGRNQ8KG07OAeeZputyzWtojUphGLk%2BBCnTYeont1cIoZMXtyhdCtPvB7SwJa7VdYCCN53WZTyCpsKFVo4ZMXnA7MrmupMIl9J8WK%2F77kPI3Om2wlxNxTz604ckxN0Cq1EzwXv4SUvMtzSlsOBGkzqQ4v%2FDymQqDF7OVKOhkRBET8e3Gn5YlLPAZUrqn2hsm7S%2BKY8iLgYuDigRet0DK6OxP9qN7SYEnE9enT7rIYQjBdYCv8ZvSehnWFmGg6P3jIgLrFghlYiv%2B7ZLWVtgvfwGDLDRnyL7LEsyMFInMDC7rcTJBjqkAfbflaZ%2Bj%2FhVgN9%2FLs7uiv4Z2bY7rG4Ep3mMbXZKydYAukrA%2Bf%2F2kMv%2B%2FOQEjQGM8uYApcojmn%2F5AjRrvmiCy9QuTNywnN5TxUQyEzcC8nrQPkks7El7QmORNQoDYsKCq7ewL4NPU8OaLGlBJs5StY91IkG0mK8z2cGYEUyJNeV2aRfEqTYYCyw52bfPrpV%2BHMlr0L01PxoTWJ6lC6iJ%2BnN8hdGz&X-Amz-Signature=a452a673c4acfe08a511acfbbd9901fd3732aa94eec2fa4032709ed7d249c2e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VWJNWM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCTtgx7LUcPEe2Rq%2BnXwhki%2Bw%2FsvrWQLkI%2BobUcCjfYzwIhAJZnzmmlnXJ%2FBwIFIhlt1vhfJRPiZdX7UEipK40MLoB%2FKv8DCD4QABoMNjM3NDIzMTgzODA1Igy0%2BU3I8jBo8OSocWgq3ANbcpXuBkzLFr8064VL7R6hzPUvme0jaBVHKf%2BXTKPt0isZVEbtQFPlamGCkKpuNyo9BpFWSVgMbxHn%2Fl8cfGCG5MYaggEKwLiX96GWOeMkCbM626gFWk4qa6xWcvejY9nhb%2BaHV0q0fJ0DLmbxNLn3zCMwTSsT%2FjzfYdCSNiXwi1ZLIulbDL67UOEZkiZnqB5wGs4J0EzkWhSobR7C0X%2FfS1JGTvJ3%2B%2BP%2FTvZIV%2FGGTOsIZxwlpDqP%2Bn0DHIDNkeyyiNIlqhvpwevT1q%2B3GmD2xU6r82%2FiGogIIekBZD8MtaiNR%2BaOtImM3w4YLmo%2BN%2FwXtL77OwTL8rXykdgc6hGRNQ8KG07OAeeZputyzWtojUphGLk%2BBCnTYeont1cIoZMXtyhdCtPvB7SwJa7VdYCCN53WZTyCpsKFVo4ZMXnA7MrmupMIl9J8WK%2F77kPI3Om2wlxNxTz604ckxN0Cq1EzwXv4SUvMtzSlsOBGkzqQ4v%2FDymQqDF7OVKOhkRBET8e3Gn5YlLPAZUrqn2hsm7S%2BKY8iLgYuDigRet0DK6OxP9qN7SYEnE9enT7rIYQjBdYCv8ZvSehnWFmGg6P3jIgLrFghlYiv%2B7ZLWVtgvfwGDLDRnyL7LEsyMFInMDC7rcTJBjqkAfbflaZ%2Bj%2FhVgN9%2FLs7uiv4Z2bY7rG4Ep3mMbXZKydYAukrA%2Bf%2F2kMv%2B%2FOQEjQGM8uYApcojmn%2F5AjRrvmiCy9QuTNywnN5TxUQyEzcC8nrQPkks7El7QmORNQoDYsKCq7ewL4NPU8OaLGlBJs5StY91IkG0mK8z2cGYEUyJNeV2aRfEqTYYCyw52bfPrpV%2BHMlr0L01PxoTWJ6lC6iJ%2BnN8hdGz&X-Amz-Signature=7ae0329d8870966afa060203ffabb771fec0cf5eced432059ddacce38ac632eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
