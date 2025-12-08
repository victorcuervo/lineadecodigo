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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSOGMATY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv%2BzL20g%2FUDO077lDQRRXBFNlLSNmj9%2B045f4cprPaBwIhAMJKn%2BmA0noUdhru2DQXR1h5Ni%2FdbJq6HuobB6FHAt9cKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLzA1VBusIzAKi3woq3APQLSl087Sw8dNZjYVzlFkpfg02qHC%2F5%2FFtWT6IGpzj8gVZrZ%2Br80bRUfvZD%2FepAZmCceEkqvNB1euRJZbcP%2BXdRihD0q0uGJKbBctQN17Sh4JYoi7yoWWmjVFvCUC4LRTa876unXDiWQtw0nzfNZKz1SIonC2bb4WQHqa%2F4tq3WE5CQbIHAuRCeGyic0oVAhaSTU7fWZb0KmU07goanrCoe0tw8phJ6w1QdMEqGzkDuuX%2BZvXgWTbBJpeMUBIzC9idISCYbq0%2BuF0LZAB7Udfw6xBrNFYSd8V5T3AuqH8d6z3TRH7zb2WUxnik5tcBxFTFbEJ8XhonjURrVmxJziiSMbMdx5XKydJJ4QUdwsBF8MoPQ45jlwjaY9at1bN%2Bc2J3S1kvrO4QhjwwXDyjZzJTkpahIBCEdKAea1N1uOQtYEZhvKTCbIIQVJ6RqrcWQRD%2BcOnXkOxkWVBz4%2BhkYAbFGXqFtFn2%2BYlu%2F0Eu1kciCRYMtS%2BUwXYfr2GMBXwasVIi466CzrQeulcKSpXU0FjjiCtiYFgARzc6ur10CEKnzCfZ8SbJd6PFNvgDXBi6A%2F8%2BJVA4uHhHTVgrxOvyaSqzCEhZft8zruR6VNy1VwAtN7K5nhGB1GU%2BjCt9pTDy5NvJBjqkAZ0a%2FuDr%2BYA6poK5MIxYWuN3GwvSrTwP5wIErkd7%2FS0%2BNlyXA9waQe5ZNDifQgjy1%2BRqqRNyEc%2FWBu7s%2BuLPNUsL8k0l212SRPkVEuiC8uAYzx1Yd3M4upO1Qfrp8pjzFmLHkt7%2FxNrDkl77TIAPjGc8CRyu6wZwX0%2FP%2F43sIb0%2FFVX9nzKa3Xm0WnqY2wht2oggwVO0OmjjEKt61RSh%2FKWZTun8&X-Amz-Signature=20eb4bdbef1f0d8fae89836859d551b4dac26708d66590aeb0ad785bdf7d7ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSOGMATY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv%2BzL20g%2FUDO077lDQRRXBFNlLSNmj9%2B045f4cprPaBwIhAMJKn%2BmA0noUdhru2DQXR1h5Ni%2FdbJq6HuobB6FHAt9cKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLzA1VBusIzAKi3woq3APQLSl087Sw8dNZjYVzlFkpfg02qHC%2F5%2FFtWT6IGpzj8gVZrZ%2Br80bRUfvZD%2FepAZmCceEkqvNB1euRJZbcP%2BXdRihD0q0uGJKbBctQN17Sh4JYoi7yoWWmjVFvCUC4LRTa876unXDiWQtw0nzfNZKz1SIonC2bb4WQHqa%2F4tq3WE5CQbIHAuRCeGyic0oVAhaSTU7fWZb0KmU07goanrCoe0tw8phJ6w1QdMEqGzkDuuX%2BZvXgWTbBJpeMUBIzC9idISCYbq0%2BuF0LZAB7Udfw6xBrNFYSd8V5T3AuqH8d6z3TRH7zb2WUxnik5tcBxFTFbEJ8XhonjURrVmxJziiSMbMdx5XKydJJ4QUdwsBF8MoPQ45jlwjaY9at1bN%2Bc2J3S1kvrO4QhjwwXDyjZzJTkpahIBCEdKAea1N1uOQtYEZhvKTCbIIQVJ6RqrcWQRD%2BcOnXkOxkWVBz4%2BhkYAbFGXqFtFn2%2BYlu%2F0Eu1kciCRYMtS%2BUwXYfr2GMBXwasVIi466CzrQeulcKSpXU0FjjiCtiYFgARzc6ur10CEKnzCfZ8SbJd6PFNvgDXBi6A%2F8%2BJVA4uHhHTVgrxOvyaSqzCEhZft8zruR6VNy1VwAtN7K5nhGB1GU%2BjCt9pTDy5NvJBjqkAZ0a%2FuDr%2BYA6poK5MIxYWuN3GwvSrTwP5wIErkd7%2FS0%2BNlyXA9waQe5ZNDifQgjy1%2BRqqRNyEc%2FWBu7s%2BuLPNUsL8k0l212SRPkVEuiC8uAYzx1Yd3M4upO1Qfrp8pjzFmLHkt7%2FxNrDkl77TIAPjGc8CRyu6wZwX0%2FP%2F43sIb0%2FFVX9nzKa3Xm0WnqY2wht2oggwVO0OmjjEKt61RSh%2FKWZTun8&X-Amz-Signature=3d262a87e46d519c63e8f78f2edd970f5f16421bba7d347667e3666744d1040e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
