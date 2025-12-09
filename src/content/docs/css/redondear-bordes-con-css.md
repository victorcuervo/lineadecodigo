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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HL2QO5Y%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu2dlZp1sQgNj048oQvGEpjSk2NHrLwTOoFa95m2LbbAiAwREYDiloU3wa%2FFJyrFAWSCitgTIBFmbAsHjcXPij2ICqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxjyWpjIUVeVb79ENKtwDikOuXaZU7kL0BNMcsYFaO5bCO7SqtQB9aORf2htEaomlSxzshg1Zd35GBvr1%2BxpDZTav2ZNzwGGO2N1%2F3c7sGdxX0BVAjk3Max7tlX3cE24gVfSaOVGci5z1%2BJfcNefe4rXIMQXBTpDsQehMYL2yF2KPUdCA5CXoPi8cXmkYuC4TIOFhCmqQv5APEbzU51JiiFWlzKilcUwNLWfvzWRseEtmOO3cxt9GHmtnVDjg8VVUypLz7TemMABSjGhO6rgqI2xirTf9Do9lom6nxnUPCDPxCpwE%2BxEw%2B1WrIC08%2B%2F9r%2FwBJd1nwc2dvuEYJn0eXTMMFqS%2FzZl8p53aYqAu5S3sT8cJ4%2F8JNltIqH0JA%2B5%2B4s%2Bsh7v80%2FVyuGcInivYj8V7ziy2n1%2B2LyvH604mtDN0jzZlRAxorcInzjoF%2FCMllE6a2kvqdvzzmpDCJsRH2eN3AEnEkQXDLosKtHCM3FGrf6erfsF8R9l3wb0fIcCfG53evFyfyH4CUaLp3gjRPykRaKvwa6xhIl8FdTzkkULZ1tE%2BmHOASyzs8asiSCxXJfD3NSDQyk09SmVr6LjvnWLo2adJhEgCiCDCd35%2F3AnMT7UltUJplhNpZNdgbUOYqLSlud2ChW2KucXUw2cneyQY6pgFUNv9fBIcfG2if8cvb7CaaLlZt1b3IadAeruJxwf9kyeTivACanh%2Bt%2BHt6QyAsQsrzPtb8cvFObe71PYz4hEaY%2FGEXHV%2FauklN9LBM62X6HKVeclebknFcCbkGrM0euROpKwnldrCyN4urBDaqgZ9AIrhCP8mI0YGiZEl4GVnqvdFEYHiD%2B9cehLZYdQnVI%2BDvzKMcvfCpsUZ6t3XGgxquB21rsSul&X-Amz-Signature=d82a8f4a06ba9f81e1806af03f5705b69973fce1f74e03b65a02b9d1a85d5ccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HL2QO5Y%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu2dlZp1sQgNj048oQvGEpjSk2NHrLwTOoFa95m2LbbAiAwREYDiloU3wa%2FFJyrFAWSCitgTIBFmbAsHjcXPij2ICqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxjyWpjIUVeVb79ENKtwDikOuXaZU7kL0BNMcsYFaO5bCO7SqtQB9aORf2htEaomlSxzshg1Zd35GBvr1%2BxpDZTav2ZNzwGGO2N1%2F3c7sGdxX0BVAjk3Max7tlX3cE24gVfSaOVGci5z1%2BJfcNefe4rXIMQXBTpDsQehMYL2yF2KPUdCA5CXoPi8cXmkYuC4TIOFhCmqQv5APEbzU51JiiFWlzKilcUwNLWfvzWRseEtmOO3cxt9GHmtnVDjg8VVUypLz7TemMABSjGhO6rgqI2xirTf9Do9lom6nxnUPCDPxCpwE%2BxEw%2B1WrIC08%2B%2F9r%2FwBJd1nwc2dvuEYJn0eXTMMFqS%2FzZl8p53aYqAu5S3sT8cJ4%2F8JNltIqH0JA%2B5%2B4s%2Bsh7v80%2FVyuGcInivYj8V7ziy2n1%2B2LyvH604mtDN0jzZlRAxorcInzjoF%2FCMllE6a2kvqdvzzmpDCJsRH2eN3AEnEkQXDLosKtHCM3FGrf6erfsF8R9l3wb0fIcCfG53evFyfyH4CUaLp3gjRPykRaKvwa6xhIl8FdTzkkULZ1tE%2BmHOASyzs8asiSCxXJfD3NSDQyk09SmVr6LjvnWLo2adJhEgCiCDCd35%2F3AnMT7UltUJplhNpZNdgbUOYqLSlud2ChW2KucXUw2cneyQY6pgFUNv9fBIcfG2if8cvb7CaaLlZt1b3IadAeruJxwf9kyeTivACanh%2Bt%2BHt6QyAsQsrzPtb8cvFObe71PYz4hEaY%2FGEXHV%2FauklN9LBM62X6HKVeclebknFcCbkGrM0euROpKwnldrCyN4urBDaqgZ9AIrhCP8mI0YGiZEl4GVnqvdFEYHiD%2B9cehLZYdQnVI%2BDvzKMcvfCpsUZ6t3XGgxquB21rsSul&X-Amz-Signature=eb3dfd4c21cace4324e0ff4cafcf0e47a7f202e65fa239877d4a5d0b8423f3d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
