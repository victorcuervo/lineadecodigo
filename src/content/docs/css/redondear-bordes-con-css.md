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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYYRHECE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFA7muu6pQmYJkyrsBM0oY4r6TdjS3A7NWpjDIJeDK9JAiA%2BYvuqwgcemEKiNvYgbidocFGwo5BoQ7trDE8JRt0a2yr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMvvg6hiI0hzrkO%2FW6KtwDB7BJkPB%2Fcong6uZWbTBM638N4mrc4vOMMB3uodpVi%2BCxla5FYEbc%2FNkCR1G2wTS15b6RyrputhmGMvaXdaUKbpppKIaDmwZVWGk05NNbiqfM0YbyrcP7vrtNnC%2BeSO7dLzxDdtXdHnWF8BnyMuAHHeNoS5PtzkFh6uGjVCpZJNRcyTk34NYmDO7L%2B8HMSboCXE6sc2TqMcVoj9TrvYtJfYJolZNeiSEWChMmYCWB%2F3GZvgHlNQ7ryN30VD4eljAn05D9ffi7Zx7RBVyt44VBuCcjyH1PVZmj5DnUJ4THae8t3D6qDVEzgt8nCub%2FqqEtxbF9XOLRScOU9ecJzhDxRbm4tSlUeEI4u0CN7prAEUukYCZoeWwVejZ6CVsEDcKgBGSa9tvRx%2BiO889otKmJRUpoHIwGc9CVsvIZaNPn1EMJx%2BwfOM9DZ6ONTllA1c%2Bljg2ETlzpMRpP9yb8MFovJ9DZu%2BJFI%2BqUnCFDxxc6Hcgqeu%2BPVaKsK2ASh1gMxJ6cyMQjAkcOs9Z8zg%2BzpIWY9J%2FnOl9iJ53dF8MpXLlD5YXkUuI3EGsEB0hOi%2BBKY0J2StbQTZ3XCazyxnGdDbZT4buQrsyp%2BaCsOzXXPPuqpHxCOjind5lUFFYqGpAwiYbFyQY6pgEneNqYR1CPrGLJQCYt5ElGsIC04Y0L8oLks6EJ11fGeEZRW0DX9XdoY9eOjIBp6ioCeA67%2BMceuvHojKCBJ%2F6qV68u7JVvCFJtxclTCAUykXsz1XJ6WFM6TlhDc5kxf3MZIMby0XeU8joL0kuCodKCEkpuLb5qnRN9Jg5ytDK2NBDkFWn9ET5NDogdxFJeTpDY6j6BU3ilE5PztF3eqnV71LZbuqtj&X-Amz-Signature=f6f676a1fb30266e6f08b0ca510d75a378f5079db8bcf61561abfaebf9247ea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYYRHECE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFA7muu6pQmYJkyrsBM0oY4r6TdjS3A7NWpjDIJeDK9JAiA%2BYvuqwgcemEKiNvYgbidocFGwo5BoQ7trDE8JRt0a2yr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMvvg6hiI0hzrkO%2FW6KtwDB7BJkPB%2Fcong6uZWbTBM638N4mrc4vOMMB3uodpVi%2BCxla5FYEbc%2FNkCR1G2wTS15b6RyrputhmGMvaXdaUKbpppKIaDmwZVWGk05NNbiqfM0YbyrcP7vrtNnC%2BeSO7dLzxDdtXdHnWF8BnyMuAHHeNoS5PtzkFh6uGjVCpZJNRcyTk34NYmDO7L%2B8HMSboCXE6sc2TqMcVoj9TrvYtJfYJolZNeiSEWChMmYCWB%2F3GZvgHlNQ7ryN30VD4eljAn05D9ffi7Zx7RBVyt44VBuCcjyH1PVZmj5DnUJ4THae8t3D6qDVEzgt8nCub%2FqqEtxbF9XOLRScOU9ecJzhDxRbm4tSlUeEI4u0CN7prAEUukYCZoeWwVejZ6CVsEDcKgBGSa9tvRx%2BiO889otKmJRUpoHIwGc9CVsvIZaNPn1EMJx%2BwfOM9DZ6ONTllA1c%2Bljg2ETlzpMRpP9yb8MFovJ9DZu%2BJFI%2BqUnCFDxxc6Hcgqeu%2BPVaKsK2ASh1gMxJ6cyMQjAkcOs9Z8zg%2BzpIWY9J%2FnOl9iJ53dF8MpXLlD5YXkUuI3EGsEB0hOi%2BBKY0J2StbQTZ3XCazyxnGdDbZT4buQrsyp%2BaCsOzXXPPuqpHxCOjind5lUFFYqGpAwiYbFyQY6pgEneNqYR1CPrGLJQCYt5ElGsIC04Y0L8oLks6EJ11fGeEZRW0DX9XdoY9eOjIBp6ioCeA67%2BMceuvHojKCBJ%2F6qV68u7JVvCFJtxclTCAUykXsz1XJ6WFM6TlhDc5kxf3MZIMby0XeU8joL0kuCodKCEkpuLb5qnRN9Jg5ytDK2NBDkFWn9ET5NDogdxFJeTpDY6j6BU3ilE5PztF3eqnV71LZbuqtj&X-Amz-Signature=f8853fe2f3a78b09a3304765c589edf549c4a171233e3def21bfdb049d350cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
