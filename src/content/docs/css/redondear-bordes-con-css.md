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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPUZDZI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B7gHGuIR3xQXMwhqSPisApsLLR7FCpS%2FxsZa3XiwabwIhAKpXsFQY43dziJGSAzo65eZXrp82jdn7%2B0KxQYhhXAeHKv8DCGwQABoMNjM3NDIzMTgzODA1Igy4lGk6Cc5z5tUt5icq3AMl3bfj4%2BW7fxxjqK1Ck%2Bm5%2BW3rm7lULEzX%2BTRW0aUX%2FecGfVhPeNweXK4b1qduApLqm1iMEAmMCW0rM%2FEGKy69XEBrkOKlppweeJPEZPIm1Zu%2BQNyq%2FlT%2F%2BfJLtLmHFmIb0n1yVKQx9o7YkPJRlTcT%2FlYoqJbqCmbOCXh8UTOOJ6BziD%2FLqsIBH6mPrK4hVvSVwggV3DNbq0fKhVuB09BMZr5iPI%2FFjA2BJIqEBly9bwmOdv%2BZVWr6F6LSyuhpm5ZFf4ctncJe0tluYYYTzLpxF8mu9I7JcPBScH%2FeywYFT4qmcTm%2Fx2bs%2FD7EMacMdzgsJZZRx6Jy1YxbESuwPEEKaIHxZDAAijiQE1Eh71K2ExFUN8nPUINE5Zfteb8sz6gmK02Hf92wqPtCK2SXCFUROpqk6IZ0Gm2UagWY5ya5nyV0n0SEEyWhUNPVhaLwQdhbMKsprXcD0678R4W%2F%2B%2BNP7L%2F008WwKNa6Pj0ZMIvO2VX7rM9NMKgTVEXGQlXcZHDiYmpg2gIBIdt%2B%2FGDIZqcCiBiTpaEAxxs2b2M%2FNLFPj4rTFjDxZKve%2FGtBzHPsWWSZjRdjFahpCQY4MRIYk9O%2Bh6t4S0SvO7DjKLCGLuiOgZenwRNm9aPo8id6kjDBp87JBjqkAdm5exZm8gApU7Isnw4gwrzVlHAEkB%2FdM43P7uAbdQyoGEmch1zoMGR9Rf4upuc3%2F8glqKiE012SDAO7S0yIE2eK4GfV6wJCZEgluKXjGFrynhc%2FpjHvww%2B3kTbGB8fop%2F7lTIUptRUm1pk6c%2FzEm2mcJ60lj%2Fj3Me8P2TMj1i1K0It82X5NYQ6j6u8lrnmW%2FPSBk%2FhMETMsSjpUoZDh9I7vzcep&X-Amz-Signature=e234f9a501e71cd65b355b1e2af5e2734b9e6ebb001e35d791045f437df5301b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPUZDZI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B7gHGuIR3xQXMwhqSPisApsLLR7FCpS%2FxsZa3XiwabwIhAKpXsFQY43dziJGSAzo65eZXrp82jdn7%2B0KxQYhhXAeHKv8DCGwQABoMNjM3NDIzMTgzODA1Igy4lGk6Cc5z5tUt5icq3AMl3bfj4%2BW7fxxjqK1Ck%2Bm5%2BW3rm7lULEzX%2BTRW0aUX%2FecGfVhPeNweXK4b1qduApLqm1iMEAmMCW0rM%2FEGKy69XEBrkOKlppweeJPEZPIm1Zu%2BQNyq%2FlT%2F%2BfJLtLmHFmIb0n1yVKQx9o7YkPJRlTcT%2FlYoqJbqCmbOCXh8UTOOJ6BziD%2FLqsIBH6mPrK4hVvSVwggV3DNbq0fKhVuB09BMZr5iPI%2FFjA2BJIqEBly9bwmOdv%2BZVWr6F6LSyuhpm5ZFf4ctncJe0tluYYYTzLpxF8mu9I7JcPBScH%2FeywYFT4qmcTm%2Fx2bs%2FD7EMacMdzgsJZZRx6Jy1YxbESuwPEEKaIHxZDAAijiQE1Eh71K2ExFUN8nPUINE5Zfteb8sz6gmK02Hf92wqPtCK2SXCFUROpqk6IZ0Gm2UagWY5ya5nyV0n0SEEyWhUNPVhaLwQdhbMKsprXcD0678R4W%2F%2B%2BNP7L%2F008WwKNa6Pj0ZMIvO2VX7rM9NMKgTVEXGQlXcZHDiYmpg2gIBIdt%2B%2FGDIZqcCiBiTpaEAxxs2b2M%2FNLFPj4rTFjDxZKve%2FGtBzHPsWWSZjRdjFahpCQY4MRIYk9O%2Bh6t4S0SvO7DjKLCGLuiOgZenwRNm9aPo8id6kjDBp87JBjqkAdm5exZm8gApU7Isnw4gwrzVlHAEkB%2FdM43P7uAbdQyoGEmch1zoMGR9Rf4upuc3%2F8glqKiE012SDAO7S0yIE2eK4GfV6wJCZEgluKXjGFrynhc%2FpjHvww%2B3kTbGB8fop%2F7lTIUptRUm1pk6c%2FzEm2mcJ60lj%2Fj3Me8P2TMj1i1K0It82X5NYQ6j6u8lrnmW%2FPSBk%2FhMETMsSjpUoZDh9I7vzcep&X-Amz-Signature=6ce7ae61c66302c5cc6ea2cc4e816213a8a7286450f3cfb60bbac215f7103677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
