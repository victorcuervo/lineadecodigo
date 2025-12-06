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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653VFKPU3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZepLyA3AwlX6EbTztcHPH8t9%2BFFKdrGJbFanNIcM4nAIhALuPuC%2FcoHrS%2FQPQdZwg37t7vfUmbT66QIwNwHusTh3%2FKv8DCHUQABoMNjM3NDIzMTgzODA1IgyVCYjlCNrpqBsANUIq3APT4EXgDGl5bz%2FL2XgRY3SzdVpXX3LGIyPWIM0rhziciXHwwLGvHnga7XAdHCkFRsirHgYkaY31DPqgIeZdTT%2F%2BO82ONNliTrieopD3ym41GnCraYKFYt4BEaIcT6lNAFHk%2Bn6MO8lJFdwThhTSwcR9zg23Rf6fm%2FxS2I8np3cVjymhPy7n6RaxUZjStIRVooVAmYwwXp2g8LC6Lx2VJ6ZvHuANcLPQGLLaGQEQyXhYtdvATLF%2BGr7YOxMUAPMFcQgIboz3fzN42t1RnSw%2B8GCHQTicOss0Fp1pQ6pCeYt66sJrp4ppZn7ag%2Bcv%2Bw0%2Fftmli5V8qFA6SX%2Bjo2OdkFifB1lYkxp6W592k8lYpezn%2FkkS6KI%2FuwDxJ2GkwydWYjedE9nKmKU4bBOP%2B5mWfy8YetNJV2hFJq%2BYctXjnFPH5HAI%2BlYvRJtQrmFEsUpOvparwVRseRl9jx2hzOzVwKKyMHF87Ju5XYQs3qPdkIDMtSGHMWYPzWlJnUB8dCNHd9q5ar8xKD7LjmnrjI8fkrUTgBNMln9AbeTXZkmFm4FE3L%2BRC%2F0B2KeuABj%2FpgijkGT%2F4CzxiUcOr0Vg1o5ktzuWjt6KnINPj%2FmTkwJNh70QRpcGK9wayvnIGXPxDjDuptDJBjqkAa%2BS3%2BYDUTXSlocEuEUkprOnkR2zTZAURG1e0T28JZk7XRovhYrL0d5GX1UwrwPnN0atv%2BQzEGKS9smUktMgfQBRwvvKSmi9F7zHTBMTYCkN3ssJ%2FhtwHXL5F4fo1G9OLjqxzKBXKH%2FtZ6a6cj0sAknQ%2BnIsSSxC0T5Rtnyll%2F4dehPdhCt9I4WUm8qGCJ%2FnFLvJTW9U2Y9ndLr2%2FUm84dooEaqx&X-Amz-Signature=f2d6a8a15a7e57518c6b8b68272d611a6bd084ae6c538c54928f377cb3ffea50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653VFKPU3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZepLyA3AwlX6EbTztcHPH8t9%2BFFKdrGJbFanNIcM4nAIhALuPuC%2FcoHrS%2FQPQdZwg37t7vfUmbT66QIwNwHusTh3%2FKv8DCHUQABoMNjM3NDIzMTgzODA1IgyVCYjlCNrpqBsANUIq3APT4EXgDGl5bz%2FL2XgRY3SzdVpXX3LGIyPWIM0rhziciXHwwLGvHnga7XAdHCkFRsirHgYkaY31DPqgIeZdTT%2F%2BO82ONNliTrieopD3ym41GnCraYKFYt4BEaIcT6lNAFHk%2Bn6MO8lJFdwThhTSwcR9zg23Rf6fm%2FxS2I8np3cVjymhPy7n6RaxUZjStIRVooVAmYwwXp2g8LC6Lx2VJ6ZvHuANcLPQGLLaGQEQyXhYtdvATLF%2BGr7YOxMUAPMFcQgIboz3fzN42t1RnSw%2B8GCHQTicOss0Fp1pQ6pCeYt66sJrp4ppZn7ag%2Bcv%2Bw0%2Fftmli5V8qFA6SX%2Bjo2OdkFifB1lYkxp6W592k8lYpezn%2FkkS6KI%2FuwDxJ2GkwydWYjedE9nKmKU4bBOP%2B5mWfy8YetNJV2hFJq%2BYctXjnFPH5HAI%2BlYvRJtQrmFEsUpOvparwVRseRl9jx2hzOzVwKKyMHF87Ju5XYQs3qPdkIDMtSGHMWYPzWlJnUB8dCNHd9q5ar8xKD7LjmnrjI8fkrUTgBNMln9AbeTXZkmFm4FE3L%2BRC%2F0B2KeuABj%2FpgijkGT%2F4CzxiUcOr0Vg1o5ktzuWjt6KnINPj%2FmTkwJNh70QRpcGK9wayvnIGXPxDjDuptDJBjqkAa%2BS3%2BYDUTXSlocEuEUkprOnkR2zTZAURG1e0T28JZk7XRovhYrL0d5GX1UwrwPnN0atv%2BQzEGKS9smUktMgfQBRwvvKSmi9F7zHTBMTYCkN3ssJ%2FhtwHXL5F4fo1G9OLjqxzKBXKH%2FtZ6a6cj0sAknQ%2BnIsSSxC0T5Rtnyll%2F4dehPdhCt9I4WUm8qGCJ%2FnFLvJTW9U2Y9ndLr2%2FUm84dooEaqx&X-Amz-Signature=efe09c2f9c22cc900fd34244e752523813de5873dd8ae8251e512f792bb3b355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
