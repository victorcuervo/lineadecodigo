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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6TDCJJA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmkX2bkWc%2BGqYJ2UGXFOeDsiTJbhWj0NE5SHRWRK%2BbXwIgTBzpLNVkxD4AUaTkQA4IWMpV%2FxYq%2B%2BkB5JQcYkKBbEgqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcTWICMqMtMdqWh%2FircA1zkD06vXTM%2FKL0ED6jds8egHB%2BVMl5VHbj0ECF9z6wHYay%2F%2BQJyL1cs6EfvxPdlTpLKn%2Fm%2BfS95PpW8EEF63iMoNe%2Fm4vNAK%2FumDCeejY9X7wqD%2B6f%2B5FTCNyjb4DeIxjOia4kqJRgnPw7of2KjRiAPojkOh6UtpWJ0tOkxr%2FQHGMAaC6GYqmjBFwVw1Pp3H%2BsLy0PkZjQostKA8JUOAloiE6%2BW6cOVcdaP9KIT0dMgxhle%2FeI8%2BStf9mUtjr1IwI%2B41K02aTe2fgdPhlDtzKJMYCd4Bd4oErxqqCg%2BqyAHRFegJRgAokfR5MLor8obEX%2Fw7%2FiYP%2BVRx3mnvSi2cui8CjrSvRWyn%2Fu4KF2eQeG3S3I%2B1yI0MU8oLP%2FA6t9X8vdJXOa0zU3zeyg3jmK%2BLSvJMY6jVyISRyqsk9vDRtFPrSeh%2FLEptfpVoancmaTEbEa40XGmQ1sMMi2FVKESs%2BNiS6gpe6Ezdahgxh12adPlhrGKgBXH3cJAVuV6TExDfjf%2Fiqqev%2BKWWb1C%2FwCxYTdBQBLxWgkRNFoFDeemvnvxEXv7cLIY3jOGxLDPwqYVTr%2FpIXrBb280b8z%2FO6caPBLeST0G%2BqZ9O8JlNjIYIM0D2yXhk5WVK%2B28R0hCMJKA3ckGOqUBXFoleA5hli7PuO9DDl%2FDGBiSYcrWOWi%2BQo21Oj8b0QhA%2FhbObZMF%2FZxvMUqDlKVYADGmC8RF%2B1jp3Lb4vQF8oR%2BfDCMOEuCqJXMirkg2gJ5XgL1fJqQyYyn4mIRwSjfOiK8ltlgZ2znL%2F%2FYLRfi4GYSTFi%2B5tEuPDFmmXcAS0wsmkrN%2FBeDiQrPA8AXQgZvk6kKYtdI%2F1yE0V7ghXN%2BCkSxQnFTe&X-Amz-Signature=c658e9151c4c70b9d12aa82c3ab27f2697c9aae13810e448bf43c56446fb4b2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6TDCJJA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmkX2bkWc%2BGqYJ2UGXFOeDsiTJbhWj0NE5SHRWRK%2BbXwIgTBzpLNVkxD4AUaTkQA4IWMpV%2FxYq%2B%2BkB5JQcYkKBbEgqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcTWICMqMtMdqWh%2FircA1zkD06vXTM%2FKL0ED6jds8egHB%2BVMl5VHbj0ECF9z6wHYay%2F%2BQJyL1cs6EfvxPdlTpLKn%2Fm%2BfS95PpW8EEF63iMoNe%2Fm4vNAK%2FumDCeejY9X7wqD%2B6f%2B5FTCNyjb4DeIxjOia4kqJRgnPw7of2KjRiAPojkOh6UtpWJ0tOkxr%2FQHGMAaC6GYqmjBFwVw1Pp3H%2BsLy0PkZjQostKA8JUOAloiE6%2BW6cOVcdaP9KIT0dMgxhle%2FeI8%2BStf9mUtjr1IwI%2B41K02aTe2fgdPhlDtzKJMYCd4Bd4oErxqqCg%2BqyAHRFegJRgAokfR5MLor8obEX%2Fw7%2FiYP%2BVRx3mnvSi2cui8CjrSvRWyn%2Fu4KF2eQeG3S3I%2B1yI0MU8oLP%2FA6t9X8vdJXOa0zU3zeyg3jmK%2BLSvJMY6jVyISRyqsk9vDRtFPrSeh%2FLEptfpVoancmaTEbEa40XGmQ1sMMi2FVKESs%2BNiS6gpe6Ezdahgxh12adPlhrGKgBXH3cJAVuV6TExDfjf%2Fiqqev%2BKWWb1C%2FwCxYTdBQBLxWgkRNFoFDeemvnvxEXv7cLIY3jOGxLDPwqYVTr%2FpIXrBb280b8z%2FO6caPBLeST0G%2BqZ9O8JlNjIYIM0D2yXhk5WVK%2B28R0hCMJKA3ckGOqUBXFoleA5hli7PuO9DDl%2FDGBiSYcrWOWi%2BQo21Oj8b0QhA%2FhbObZMF%2FZxvMUqDlKVYADGmC8RF%2B1jp3Lb4vQF8oR%2BfDCMOEuCqJXMirkg2gJ5XgL1fJqQyYyn4mIRwSjfOiK8ltlgZ2znL%2F%2FYLRfi4GYSTFi%2B5tEuPDFmmXcAS0wsmkrN%2FBeDiQrPA8AXQgZvk6kKYtdI%2F1yE0V7ghXN%2BCkSxQnFTe&X-Amz-Signature=334d439fcb05fd323bd4b0c014445d8a207eeb14cf59027e88853827d3bd3d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
