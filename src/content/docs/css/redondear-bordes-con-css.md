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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U77KOOM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNQfPEojAOpojMTtyHG91RWYIvEFyx30Byl8m%2BNWyGfAiEAzifUJ2O6c74BBjIcaJFS3WmP%2B8NJ6LWMBmQNPUbV4nIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX6soPsh1aPX6phQircAwopNzwv3zahI3gfiSiQo01rliK%2FxUu%2F5GEihBXGofX%2Fmg5yG8plH95ZQv2HO1u8nUn8uqrVXKxsb05pgmVHtsyS63OoxIVBdOKqZQlp1mBiNDg0Bm8z4sLQE3BwdgNeKRrchMGac3zaV96MeFJE%2BW%2FS%2BlYSMWqimayApVoKqNv09NNxKC%2BiLhMwahCosucHEYkDqgxOTIQoE0dQ3eL9WeHTlRYdIqb%2FwGgOZ662BG5aK3pFVgQ5qaNaUFbgmrusa%2Bm88b6BwsJlAraogyapdvluA3Ql1R3A1zST1lyL1MxoonVLyJ4LVSGU9dF6a1u8%2FAMi7T%2FMYGnYG%2FRDBF41t8F67YUI6OCS88AfDMSXzUq8pBRDR%2FpJyUdUEG6N1XmgDrKUrV6X%2BH9KpB7L4K3zHek4c3IzBxgtczL9iO7pF9eIzlbrw9VgNxznDHxk9nG82D9fiEcdG4pB9DeY%2BX9gjcRB85hXQ7H7wMctnVPsihDd77%2BRooffs9AFaqPDEsrGrk%2F1ZhAlWb0NEPQajSCwb%2Fq0fLJjCL33JR5bC9eFKKh1GDHqEj1yKYqd88oIYovDUXa%2FXTYV7VJuC7J9luTijFpZs4I%2Bkl2yGNOHA3R16b%2F%2FHKy3HlUBCrOdXU%2F5MPL90skGOqUBvcaTHu4w7eNQh0M47O7flmCdX4daM94cFL3qEQFnr2TOaf5VavI5%2F9oKlidmjYTqtjq4WOikw25nuarSzT3b2nPHYQKiOB7UD57jyjF5xKO1MJU4EDnNeylteC6zZjR2YqgpWrg7cxWuWrzdadsyxQPvpohvUOI1X1wXpyTQ2xBFUphYaKTFLEHf725%2FvyRWG%2Bugj67HlXnAFkUeCaXoEwH2eniR&X-Amz-Signature=4761d4cf5b2d2e39292297b0f77dbe930073e274ea5288e7985d48dbfb0ac68b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U77KOOM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNQfPEojAOpojMTtyHG91RWYIvEFyx30Byl8m%2BNWyGfAiEAzifUJ2O6c74BBjIcaJFS3WmP%2B8NJ6LWMBmQNPUbV4nIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX6soPsh1aPX6phQircAwopNzwv3zahI3gfiSiQo01rliK%2FxUu%2F5GEihBXGofX%2Fmg5yG8plH95ZQv2HO1u8nUn8uqrVXKxsb05pgmVHtsyS63OoxIVBdOKqZQlp1mBiNDg0Bm8z4sLQE3BwdgNeKRrchMGac3zaV96MeFJE%2BW%2FS%2BlYSMWqimayApVoKqNv09NNxKC%2BiLhMwahCosucHEYkDqgxOTIQoE0dQ3eL9WeHTlRYdIqb%2FwGgOZ662BG5aK3pFVgQ5qaNaUFbgmrusa%2Bm88b6BwsJlAraogyapdvluA3Ql1R3A1zST1lyL1MxoonVLyJ4LVSGU9dF6a1u8%2FAMi7T%2FMYGnYG%2FRDBF41t8F67YUI6OCS88AfDMSXzUq8pBRDR%2FpJyUdUEG6N1XmgDrKUrV6X%2BH9KpB7L4K3zHek4c3IzBxgtczL9iO7pF9eIzlbrw9VgNxznDHxk9nG82D9fiEcdG4pB9DeY%2BX9gjcRB85hXQ7H7wMctnVPsihDd77%2BRooffs9AFaqPDEsrGrk%2F1ZhAlWb0NEPQajSCwb%2Fq0fLJjCL33JR5bC9eFKKh1GDHqEj1yKYqd88oIYovDUXa%2FXTYV7VJuC7J9luTijFpZs4I%2Bkl2yGNOHA3R16b%2F%2FHKy3HlUBCrOdXU%2F5MPL90skGOqUBvcaTHu4w7eNQh0M47O7flmCdX4daM94cFL3qEQFnr2TOaf5VavI5%2F9oKlidmjYTqtjq4WOikw25nuarSzT3b2nPHYQKiOB7UD57jyjF5xKO1MJU4EDnNeylteC6zZjR2YqgpWrg7cxWuWrzdadsyxQPvpohvUOI1X1wXpyTQ2xBFUphYaKTFLEHf725%2FvyRWG%2Bugj67HlXnAFkUeCaXoEwH2eniR&X-Amz-Signature=252b37d05a00c73d001d8c33d2939cd033b43f0b82356c089ef9af3d09905e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
