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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XPLUO7L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCGPVWjoatMYICH%2FgHO0d2V%2FXXbSMTNCqqc%2BaibK9r1hQIhAJY957xbPw26VRS8N237lyUzJ2ZiXTMEnBN7MLc8CuFCKv8DCD0QABoMNjM3NDIzMTgzODA1IgybWbelbWDBMDwaQPEq3AOFX5RpZ4SMfpZp6Iw0z4VGPKWl%2BpUVhAkWinIlRrSQUPoemy208PDFSguht%2Fhyks6gN8tb9aLBMLL3ZQk1F%2BuWqGibl48%2Bf8k8A7qC%2BQWrjJy6%2BPXjqf89bOuTuGE40P7El%2FvgVzIYDWTSwZW28zrtNPABE6JjDUc8bywxMb6hjTz1aC85sxJIaSc%2BqS7J%2F0Ao7PA7d9SaQmSmg4Syf6HVT7uzow3whGPyliT6%2F5MY9z2ch0oTbRgWNojxKMSFAvmHKOkP7Uxm9qNvThyFIbAJnZ4YZY%2F0EsMwR2sptGZfuqAxSFiuf9%2BUxgepE0nXkMwscmtj%2FdW5y7A%2B5xwRrldNNLri7k9UViRbsAb2m8H1Fwa32rywiS7py%2BCCLiOocjUHQhZ1n8lShgIBdjtfVXRuet3f%2FIPNtqlCX2cpB%2BJCaf9as9%2FDZ8v8G%2BsKdPiW0JwPQiPwQrc7zFWU%2BVP8YpFnhi4%2FIAKaipO3N7Js1oLZ2IUoR4jotXMAq%2FuFU14PU6blOAj23Ntz9DxpVn9RzbvqO7q2hJ3ydWYlbO0omUPJyFi%2BeULWa9qVGpvYBolxQA%2FTwtV5uPzwQ%2BTRJR6ZZ5S3K1vcuGK3Y8zQyfQwcHdZMMZZ84Xhu11zssSYADDykMTJBjqkAfUYB7wD95HBE5%2BS9yuBUh4E5%2BMyvAvKUiOv8tEa0OzALQQPMImewvaw%2FMmXo2rYxqr2OfY08Kz9gaCQUGQsl9aiNB%2BKnw4KM4ILWvFOmthOTYSHQA0QWQpAM%2BwlFbjgu0yo4CAxso0qv52GsWcoFAfLTaH1dQc0HNOnszu6vxf%2FWjGNd3CteQbf5ORLj8U1jvK32yFNB2pe2AbdHh2rNakH3Qbr&X-Amz-Signature=a337f725cff345c4bcc8c05c8f45e2202d2fae6e58fe4bef566162bdd6ae3010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XPLUO7L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCGPVWjoatMYICH%2FgHO0d2V%2FXXbSMTNCqqc%2BaibK9r1hQIhAJY957xbPw26VRS8N237lyUzJ2ZiXTMEnBN7MLc8CuFCKv8DCD0QABoMNjM3NDIzMTgzODA1IgybWbelbWDBMDwaQPEq3AOFX5RpZ4SMfpZp6Iw0z4VGPKWl%2BpUVhAkWinIlRrSQUPoemy208PDFSguht%2Fhyks6gN8tb9aLBMLL3ZQk1F%2BuWqGibl48%2Bf8k8A7qC%2BQWrjJy6%2BPXjqf89bOuTuGE40P7El%2FvgVzIYDWTSwZW28zrtNPABE6JjDUc8bywxMb6hjTz1aC85sxJIaSc%2BqS7J%2F0Ao7PA7d9SaQmSmg4Syf6HVT7uzow3whGPyliT6%2F5MY9z2ch0oTbRgWNojxKMSFAvmHKOkP7Uxm9qNvThyFIbAJnZ4YZY%2F0EsMwR2sptGZfuqAxSFiuf9%2BUxgepE0nXkMwscmtj%2FdW5y7A%2B5xwRrldNNLri7k9UViRbsAb2m8H1Fwa32rywiS7py%2BCCLiOocjUHQhZ1n8lShgIBdjtfVXRuet3f%2FIPNtqlCX2cpB%2BJCaf9as9%2FDZ8v8G%2BsKdPiW0JwPQiPwQrc7zFWU%2BVP8YpFnhi4%2FIAKaipO3N7Js1oLZ2IUoR4jotXMAq%2FuFU14PU6blOAj23Ntz9DxpVn9RzbvqO7q2hJ3ydWYlbO0omUPJyFi%2BeULWa9qVGpvYBolxQA%2FTwtV5uPzwQ%2BTRJR6ZZ5S3K1vcuGK3Y8zQyfQwcHdZMMZZ84Xhu11zssSYADDykMTJBjqkAfUYB7wD95HBE5%2BS9yuBUh4E5%2BMyvAvKUiOv8tEa0OzALQQPMImewvaw%2FMmXo2rYxqr2OfY08Kz9gaCQUGQsl9aiNB%2BKnw4KM4ILWvFOmthOTYSHQA0QWQpAM%2BwlFbjgu0yo4CAxso0qv52GsWcoFAfLTaH1dQc0HNOnszu6vxf%2FWjGNd3CteQbf5ORLj8U1jvK32yFNB2pe2AbdHh2rNakH3Qbr&X-Amz-Signature=221342cf5dbfd8143936428e75aeaa7c8820eff432e0333af6228a7e87fe3aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
