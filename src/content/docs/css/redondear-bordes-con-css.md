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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EYPCJLE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAL9zAa7VwShjMqvH9S9PO3boFrNonnbUmOIMeW0BQXAiAvCMNenkJpRosZbbU7xp6U9JXpJL7ktJF%2FAMGQ4PFGHSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP2bJPTISUbsJLiLgKtwDTav%2FVws8RqTxQM2zwPdEb9NIcFUvZIPvo956rHl8SatpQws%2FRo9pP6qmKNrsiumZax%2B8sfLAHxn7dUA%2B3RQ3yKYe%2FzMAtv159yi%2Bi9xoLmvffHQmd7JoH%2B0ULafJsECYho8NeAS0jcmay3L02Bhsq1E6V9t1TOf5VSYadTF4BYvLsg1EyalD%2BkmzEcDK7JlneXtSXtgYe0K61N7rFTnqMXyub%2BWWPO3hlB3COXjj%2BjC44Pi2xD%2BjT%2B2ul3rOcu9j9DCXxPO%2BInUZCCo8HgkOGRBSNfpJTO%2FuoPcJW9s8VED6xLdCfuuEuy9eB%2BxWgYlbVG0dlph4yrKR4c6ro%2F1GLIuIAWSPHRuaI5gR9iiV3xbfToYaMALW%2BSL6IO4RwnotFjtUj00TySCRfHhKfYVOvVrDbVlhzsKHWv9cD2jufdCL9tu8OuEyg4goeM84uHApnr3%2B2zdM5jZZDStuPAcxRjY51haCvogbYceeZWzIHuBgEWmpIODnGlwCUCPRDlQ66re3ou%2F%2F%2Fq9o%2BXFSscOpWAhZQgAV7NMYdHYaExOShp02CoPwJpByFj7doCKX7LBDt92SLqRV%2BhBknIms6s7kj9LSNulXjli52fYWXN7rQdO06jaCdzKEsHWf92QwsIffyQY6pgEPwQ4iEqP1KdIGSD%2FtcHMtVHee3S925QaMEiMZWYSfOBrVcZtXjrrGk07uzhHDqqcRULod3ug%2Bx87P4jCiYASGwPl6FtN2Gh8LNDFkd%2BD5BC%2Bl82QWGt4nyrj3ZMX0vRuyCE6iqjqbotioVpuS9%2F9DmfcoNqpsuKCtt7PyZHzsPJJ8wt5EIG8u0DkfjHTY%2FLIuakRX3h1wJYj9VziDOQw3ybtIYlJe&X-Amz-Signature=d13826571239d3474fe0a892ddd55da0d1cf6f70903407ab7b1e70b94676725c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EYPCJLE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAL9zAa7VwShjMqvH9S9PO3boFrNonnbUmOIMeW0BQXAiAvCMNenkJpRosZbbU7xp6U9JXpJL7ktJF%2FAMGQ4PFGHSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP2bJPTISUbsJLiLgKtwDTav%2FVws8RqTxQM2zwPdEb9NIcFUvZIPvo956rHl8SatpQws%2FRo9pP6qmKNrsiumZax%2B8sfLAHxn7dUA%2B3RQ3yKYe%2FzMAtv159yi%2Bi9xoLmvffHQmd7JoH%2B0ULafJsECYho8NeAS0jcmay3L02Bhsq1E6V9t1TOf5VSYadTF4BYvLsg1EyalD%2BkmzEcDK7JlneXtSXtgYe0K61N7rFTnqMXyub%2BWWPO3hlB3COXjj%2BjC44Pi2xD%2BjT%2B2ul3rOcu9j9DCXxPO%2BInUZCCo8HgkOGRBSNfpJTO%2FuoPcJW9s8VED6xLdCfuuEuy9eB%2BxWgYlbVG0dlph4yrKR4c6ro%2F1GLIuIAWSPHRuaI5gR9iiV3xbfToYaMALW%2BSL6IO4RwnotFjtUj00TySCRfHhKfYVOvVrDbVlhzsKHWv9cD2jufdCL9tu8OuEyg4goeM84uHApnr3%2B2zdM5jZZDStuPAcxRjY51haCvogbYceeZWzIHuBgEWmpIODnGlwCUCPRDlQ66re3ou%2F%2F%2Fq9o%2BXFSscOpWAhZQgAV7NMYdHYaExOShp02CoPwJpByFj7doCKX7LBDt92SLqRV%2BhBknIms6s7kj9LSNulXjli52fYWXN7rQdO06jaCdzKEsHWf92QwsIffyQY6pgEPwQ4iEqP1KdIGSD%2FtcHMtVHee3S925QaMEiMZWYSfOBrVcZtXjrrGk07uzhHDqqcRULod3ug%2Bx87P4jCiYASGwPl6FtN2Gh8LNDFkd%2BD5BC%2Bl82QWGt4nyrj3ZMX0vRuyCE6iqjqbotioVpuS9%2F9DmfcoNqpsuKCtt7PyZHzsPJJ8wt5EIG8u0DkfjHTY%2FLIuakRX3h1wJYj9VziDOQw3ybtIYlJe&X-Amz-Signature=1bf9f08cbe6c23dd5d7eae9cc629b8e23a3c0d50930b96d218787bcf4c0d46a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
