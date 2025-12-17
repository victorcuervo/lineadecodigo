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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ5S3UVE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvh0hI7MNBosCqq%2BiBczmWukf3Y3Dg3MriVE%2BWNAMewgIhAJ3Fj%2FrD9Ut4kRjBpsIVzhKvvCtHP%2BruhFutgyLCYJTEKv8DCHUQABoMNjM3NDIzMTgzODA1IgzGpWMcQ0eVGer8gxwq3AP8qKapVFjyAJMEa8jKQh41lA9YpeeecIsLzxJ7lPT3z7%2BJ2He2M8IL%2FHBhv8zISkZfGNU0c2tarkOjWPG8032NfbZRqjOsxYQE36mxEQ3ZGN8OMvOCGhcw7GZHBnA55RLLNhm0CokMpJMMY3QgqRUHs4N%2FnQ8e31psXt2HZVd3rmLBxpCngomhf%2B%2FwxloVc17%2Bl2zkyqlegJhTimAQ%2B4GoezeCpvo2fp7kRrY7zBdEnWu4DjoYYvQQn9UwqLYFMnSwgS2l1XqjiyqJoJY5pBHQ%2FolFR2UPwUFYoxg90ONKOWe9ukwhwMEKa2QwYatQz6Jwv687VdxngdC9CBkk3UuUn8g1zWdc0%2BJPS53fzqHQ%2FKaqeMd0UHbv6uldUUE%2B7Ud73OKKd4CKRNjRqMvB%2BssUn3%2B88gJYLF0YC2MAIXPnnE0q1xOIJv9DodKGqf42C0tW2Pnwlip7m2Z9kQpRU6hMaOal026K8Yv2%2BsvdAq4KiKZe0fOeBeHMdwyYVPlfRWOUzeV43MOD7RKwamT6zQ4w%2FppiXD8Y2VOuh%2F0EiMCTfeXO3%2BD6JAWarR0V0891%2FBShzY2jyt57tZEJjNvngqqbK9Nj3ksYAve73dfW7VOd1STlYqltOVHy2wMyADD8zojKBjqkAejwKR64AFkJNjRYBtNJc3MpnhyT34Ba%2BNyVM7ESYOBKNbIoE1HMq2vhgf8%2BR4w3l0gWtDspYCLQavWCvwnuSNWC5y0%2BJWvBO44z1S6fqMu%2BXfrtf4akC0PsUw2R4t7%2BbiMFyPVUzEW%2FJbyj%2FAxocv50pKsgGscpQM%2BnSrYBq3DBqVTAnVMG6mRVFshGZ3w3%2B8nmufuqQPEq%2FzQVevwf3aHtpyTz&X-Amz-Signature=f47cd82811c3624caa88d5e802f7032f86e7903e1ba026b405dca7c94a09bf11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ5S3UVE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvh0hI7MNBosCqq%2BiBczmWukf3Y3Dg3MriVE%2BWNAMewgIhAJ3Fj%2FrD9Ut4kRjBpsIVzhKvvCtHP%2BruhFutgyLCYJTEKv8DCHUQABoMNjM3NDIzMTgzODA1IgzGpWMcQ0eVGer8gxwq3AP8qKapVFjyAJMEa8jKQh41lA9YpeeecIsLzxJ7lPT3z7%2BJ2He2M8IL%2FHBhv8zISkZfGNU0c2tarkOjWPG8032NfbZRqjOsxYQE36mxEQ3ZGN8OMvOCGhcw7GZHBnA55RLLNhm0CokMpJMMY3QgqRUHs4N%2FnQ8e31psXt2HZVd3rmLBxpCngomhf%2B%2FwxloVc17%2Bl2zkyqlegJhTimAQ%2B4GoezeCpvo2fp7kRrY7zBdEnWu4DjoYYvQQn9UwqLYFMnSwgS2l1XqjiyqJoJY5pBHQ%2FolFR2UPwUFYoxg90ONKOWe9ukwhwMEKa2QwYatQz6Jwv687VdxngdC9CBkk3UuUn8g1zWdc0%2BJPS53fzqHQ%2FKaqeMd0UHbv6uldUUE%2B7Ud73OKKd4CKRNjRqMvB%2BssUn3%2B88gJYLF0YC2MAIXPnnE0q1xOIJv9DodKGqf42C0tW2Pnwlip7m2Z9kQpRU6hMaOal026K8Yv2%2BsvdAq4KiKZe0fOeBeHMdwyYVPlfRWOUzeV43MOD7RKwamT6zQ4w%2FppiXD8Y2VOuh%2F0EiMCTfeXO3%2BD6JAWarR0V0891%2FBShzY2jyt57tZEJjNvngqqbK9Nj3ksYAve73dfW7VOd1STlYqltOVHy2wMyADD8zojKBjqkAejwKR64AFkJNjRYBtNJc3MpnhyT34Ba%2BNyVM7ESYOBKNbIoE1HMq2vhgf8%2BR4w3l0gWtDspYCLQavWCvwnuSNWC5y0%2BJWvBO44z1S6fqMu%2BXfrtf4akC0PsUw2R4t7%2BbiMFyPVUzEW%2FJbyj%2FAxocv50pKsgGscpQM%2BnSrYBq3DBqVTAnVMG6mRVFshGZ3w3%2B8nmufuqQPEq%2FzQVevwf3aHtpyTz&X-Amz-Signature=a54fc4d0aa6e3c9f10828871408fb38d3600d9d7aeec40c52f6b808c10125081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
