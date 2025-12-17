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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVB44BG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOrF7CgaVciEFsfe%2BpB4EiHmwT1rmdeWn6zopGup54gAiEA%2B4U8M3Z5U6KiX540HHj5hxv8csLSUfzeN2G12IXcuR0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOjR2%2BPGYBCWyoDl6yrcA6jaCulFqW9bW7ffRGrmhDoMF1ofBGqwEZuMiP9YrgpZzPmWTsr1P4frrStd4P7Nzh1SNAal2YpGomDVNo16Geytx7URAkpfQBk%2BWBh6wtmmjedoAWZ%2FiWO7CoD8IBMbD1OpHun5Fve9wKe%2F3R3jQNYWOSWVjUdoSmgO4RMhPWL8Li8RjWl%2FIY45U08Ej%2FS4Nfm1RAvTx5KZguijtZodkZpN%2B6Kmj%2FWsccSKiokbuN%2FUsY1VSbty01CPC6HgkOnPyYnUhP03mp%2FglFblHbMPLL%2BuGLrh9L8hZSTUrtf0dJTYy3MU2vFwUWj%2BcMDDVtdPI2tzIM2a%2FZq4EgBCvw9f4k391z63KsqQUkz0caZY2fWPtwc0uryCQ4o6Itert51Vn0oUQHbsKVzPVbh1Vxtpi9AYoa7PQS12YXIvB%2BvdUJLEpsjng6KZEFLZjPMNuOMWbn6YyoxtZFF00%2BlErQE%2F%2Btp7HnYVSzRLh0BoGeV8enr673Sy5ehQAjurV%2B5c6NkmII5SHTnU%2Fw5BZN9DvLkivsS%2Fvb06omqxsifemGLjRE%2BF7uMYPl3qO4211eUB1EO%2FxY3gW2VtZlnz9T%2F8c8JzLaRaY3yKYoe64MMzCw8Ogy9cK9OKkpjPvYWeObTZMPyXiMoGOqUBJPFXjy5x9W7SDYNRpdZ%2FuF%2BcRfKSqewOseLeHj2QwzinTpcuMzfd%2BW2Ju8vMNKoVBm1INcK0wTNLTg3k2zlxeu%2Bfb87ApXFubqoe7QFJutVaxKr41%2Fk9sRwXQxhjn65xB7zjauIq67W%2BFt01rHjhad2aCwYyGj4acyntEUTQZwIX79VA4htJp%2BHWHSLJ%2FxU%2Bd5RScyKh9qNEK4Mytv8eRo0kkUmk&X-Amz-Signature=3fc7e000e38fde7b91e5254ee170bf86f7125c0b08f52b5b27ca00064c8cdbac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVB44BG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOrF7CgaVciEFsfe%2BpB4EiHmwT1rmdeWn6zopGup54gAiEA%2B4U8M3Z5U6KiX540HHj5hxv8csLSUfzeN2G12IXcuR0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOjR2%2BPGYBCWyoDl6yrcA6jaCulFqW9bW7ffRGrmhDoMF1ofBGqwEZuMiP9YrgpZzPmWTsr1P4frrStd4P7Nzh1SNAal2YpGomDVNo16Geytx7URAkpfQBk%2BWBh6wtmmjedoAWZ%2FiWO7CoD8IBMbD1OpHun5Fve9wKe%2F3R3jQNYWOSWVjUdoSmgO4RMhPWL8Li8RjWl%2FIY45U08Ej%2FS4Nfm1RAvTx5KZguijtZodkZpN%2B6Kmj%2FWsccSKiokbuN%2FUsY1VSbty01CPC6HgkOnPyYnUhP03mp%2FglFblHbMPLL%2BuGLrh9L8hZSTUrtf0dJTYy3MU2vFwUWj%2BcMDDVtdPI2tzIM2a%2FZq4EgBCvw9f4k391z63KsqQUkz0caZY2fWPtwc0uryCQ4o6Itert51Vn0oUQHbsKVzPVbh1Vxtpi9AYoa7PQS12YXIvB%2BvdUJLEpsjng6KZEFLZjPMNuOMWbn6YyoxtZFF00%2BlErQE%2F%2Btp7HnYVSzRLh0BoGeV8enr673Sy5ehQAjurV%2B5c6NkmII5SHTnU%2Fw5BZN9DvLkivsS%2Fvb06omqxsifemGLjRE%2BF7uMYPl3qO4211eUB1EO%2FxY3gW2VtZlnz9T%2F8c8JzLaRaY3yKYoe64MMzCw8Ogy9cK9OKkpjPvYWeObTZMPyXiMoGOqUBJPFXjy5x9W7SDYNRpdZ%2FuF%2BcRfKSqewOseLeHj2QwzinTpcuMzfd%2BW2Ju8vMNKoVBm1INcK0wTNLTg3k2zlxeu%2Bfb87ApXFubqoe7QFJutVaxKr41%2Fk9sRwXQxhjn65xB7zjauIq67W%2BFt01rHjhad2aCwYyGj4acyntEUTQZwIX79VA4htJp%2BHWHSLJ%2FxU%2Bd5RScyKh9qNEK4Mytv8eRo0kkUmk&X-Amz-Signature=98a32230a1f3cb986786c5ee24c3e91263ae15e5948c7d79c03ad20c29f56c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
