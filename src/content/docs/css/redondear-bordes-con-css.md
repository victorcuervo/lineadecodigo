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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PFZ2GX3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIEB9otPF5cTPLeYvtocnEdJMGAbEPYYZn0eJGGXyIqpDAiBOAMO1D5AD38S5P9tsMlAOMfA3USpor2FYEX%2Bm28c4jCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMaV4D3Wlapk9d5nr4KtwDNR6DVkYYKMXpjf2po%2FhGo7jP6Vfj9u4w3B1efcZkc8YsWIJpuZtea3D605IeqcCM2FXmu8JL7YD%2FxPGpRmaOtTiqEHDLC5d6pQepEcoqvTMhCKQYamNq35XTaWVClxwNChli7VOY4UbJAnZ1tNdiPmSfgdBykR%2BWBFxKJ3fzDhw2njHUVAyEup0HrzfGjl9%2Bnw%2BRQUEIMsVVCXtDga4sZsDkNDmwy%2F%2FYDG%2B8ieG5RJDut5yVOgivOG0N7I5lLVURpF9j6HfVpeKa0RttcIGOjCSwBYePcP3DVVKCsHu%2FvhIzSWTHxcFhAbsbcx%2FwuGku6yQz%2F%2FjXW4Cbux%2F8Fgs%2F%2BnRlON%2FQbix9FymgWjA6l0LYdPyFhc8Qs1KPEo500VW%2B8Dxx77bD5X0DHYjvauPy1nsc%2B2ZSxdfYFDVNpny6cy0SV6qi%2Fej0mBm6a%2BaGBZQm0qDP%2B5%2Fi8Blx%2B1Bzl5yo6jw6DWA84cRKJo7cKjnh8CAxoxN1LiCT5GBDI9KttEK5s6Kq6XhRoEo9WlnQtwJPZybSQDuwzXLknKa2lKjUe7UyQt3GZbq0DIDBcAyc5hvq%2FTPVaaK7X8Z3jKAbfupHQnPmF3e%2FqGyM6d20TtyGY8TkMqSssp5ES3692IUw6fPDyQY6pgGnCkTdjixz7DxxnIMXT6JwopthoUgpopM9O%2BHs7JsUF5jjxHYyOfmJIM7fYWGGC4z4V2pcX9wn3F98lunPSqD%2Bn4ZUgNkkoj%2F6TeqMQtNMu5e9WQqpNUcgh71ffyM4KG56XB19ky0rwjRQHaNMLYr%2BYn4ctGmdHT7607IZ3NN%2Fyfz1JLUws3%2Bkg26cyOTNuB85YY4FvhGGYpj0vPs6Z8fj770pSoRv&X-Amz-Signature=ef5a4533c832c5f7371b72172309881a7c963eb19527f56b0550c825f2773afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PFZ2GX3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIEB9otPF5cTPLeYvtocnEdJMGAbEPYYZn0eJGGXyIqpDAiBOAMO1D5AD38S5P9tsMlAOMfA3USpor2FYEX%2Bm28c4jCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMaV4D3Wlapk9d5nr4KtwDNR6DVkYYKMXpjf2po%2FhGo7jP6Vfj9u4w3B1efcZkc8YsWIJpuZtea3D605IeqcCM2FXmu8JL7YD%2FxPGpRmaOtTiqEHDLC5d6pQepEcoqvTMhCKQYamNq35XTaWVClxwNChli7VOY4UbJAnZ1tNdiPmSfgdBykR%2BWBFxKJ3fzDhw2njHUVAyEup0HrzfGjl9%2Bnw%2BRQUEIMsVVCXtDga4sZsDkNDmwy%2F%2FYDG%2B8ieG5RJDut5yVOgivOG0N7I5lLVURpF9j6HfVpeKa0RttcIGOjCSwBYePcP3DVVKCsHu%2FvhIzSWTHxcFhAbsbcx%2FwuGku6yQz%2F%2FjXW4Cbux%2F8Fgs%2F%2BnRlON%2FQbix9FymgWjA6l0LYdPyFhc8Qs1KPEo500VW%2B8Dxx77bD5X0DHYjvauPy1nsc%2B2ZSxdfYFDVNpny6cy0SV6qi%2Fej0mBm6a%2BaGBZQm0qDP%2B5%2Fi8Blx%2B1Bzl5yo6jw6DWA84cRKJo7cKjnh8CAxoxN1LiCT5GBDI9KttEK5s6Kq6XhRoEo9WlnQtwJPZybSQDuwzXLknKa2lKjUe7UyQt3GZbq0DIDBcAyc5hvq%2FTPVaaK7X8Z3jKAbfupHQnPmF3e%2FqGyM6d20TtyGY8TkMqSssp5ES3692IUw6fPDyQY6pgGnCkTdjixz7DxxnIMXT6JwopthoUgpopM9O%2BHs7JsUF5jjxHYyOfmJIM7fYWGGC4z4V2pcX9wn3F98lunPSqD%2Bn4ZUgNkkoj%2F6TeqMQtNMu5e9WQqpNUcgh71ffyM4KG56XB19ky0rwjRQHaNMLYr%2BYn4ctGmdHT7607IZ3NN%2Fyfz1JLUws3%2Bkg26cyOTNuB85YY4FvhGGYpj0vPs6Z8fj770pSoRv&X-Amz-Signature=37689eca604c4dca3e00185254084e9abec17c3f0102e1d06591f65d6328496b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
