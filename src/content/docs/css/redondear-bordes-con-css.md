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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMV4BWDQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCedFv7VSG9wcKsbYVz8XaaWR7Coxi2QgZ9fSZpFRoBMwIhAOailsa3rO2D9pSTyVp4AS58TvQFOH08A3pIJ%2FhJc6QEKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykE23%2BP5oY7MmbSncq3AM6cUlzMvX8FqAZmL2G%2FqP47FgU4GoxNyKox%2BphZofNXBpjovtsauVg3c48LWeMz%2FmE77ZgvqU5rCqHHFfrqCnyM3NGhAGRg4RlEdqfcUxoetVvvfvqeiRF1m9TBRlHYLkdy2D5JZAjGK4mQUv%2FZ5fCXhsSbfyFn3fMI5PVkzVhcUQVOtI7axYZYUMaj3PXhUHWJ3%2BSofwL5xJDCIwdVknrRoEXLz3SS7NEkGrMzRvOCPJN0EfFLuLx5CNBi98GtZMKNWiiA7EWk3%2Bj1a7LAqO5EkKddJITAgBRSIly7x2RDOxIGvkT2eIgHKpCcOddkOHlUIj3nZ8TMWurG5l0BSvWRSbAaXTPrhosr6oFaAiHrjd4g%2FHkiQAV9%2BHpA2HGb5BpenOV4ISu4xAc51awi159d023Djs26ecuKeSJhAcq6etR0xTvTPT6K%2Fur4WJ2nM72siCwbLLZRsgcs7OwAInppTFXGVkrTAA%2BhSSWRq%2BBhnTuUE8Pz6H2YTZEIpqMxSorZYQ6IDkSIoqaIXZ1ZPZ%2F1vn5B%2Fgacth4GvSdxmzsn%2Fl%2BROeILLerj3rIfXEVF1a9FGlwRCWVjxZTz3H2zD1mwBdPKQoV%2B3s5WYLoOHO8VHbVuEPuQ7rBV6Ti4DCIh9%2FJBjqkAYZHGEi8obE3l%2Fe03Jzt197nSXeWlt8g%2FpD9uJqLpXGxm2Eoh%2FOVQrUlW6UUnzldx5gpn5wrs9scNOlGF%2B3zl15qyTup4ikwhPJ5b7%2BKtyzJz0RIBvhZPx3sCiTdzfLKVTqI8JKax%2F%2BEj6oc0cSfUFvGlveBBOx8ZfKa558Er33gmOAc5bwN29axYikYwZpA9%2FGTj1BzpgACoW0ZAGOpjRMx%2BOkB&X-Amz-Signature=a8bdb198f96b578d597d01b5cdf8cfcbd1b6f4e95e20f23436733b9fd02ea9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMV4BWDQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCedFv7VSG9wcKsbYVz8XaaWR7Coxi2QgZ9fSZpFRoBMwIhAOailsa3rO2D9pSTyVp4AS58TvQFOH08A3pIJ%2FhJc6QEKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykE23%2BP5oY7MmbSncq3AM6cUlzMvX8FqAZmL2G%2FqP47FgU4GoxNyKox%2BphZofNXBpjovtsauVg3c48LWeMz%2FmE77ZgvqU5rCqHHFfrqCnyM3NGhAGRg4RlEdqfcUxoetVvvfvqeiRF1m9TBRlHYLkdy2D5JZAjGK4mQUv%2FZ5fCXhsSbfyFn3fMI5PVkzVhcUQVOtI7axYZYUMaj3PXhUHWJ3%2BSofwL5xJDCIwdVknrRoEXLz3SS7NEkGrMzRvOCPJN0EfFLuLx5CNBi98GtZMKNWiiA7EWk3%2Bj1a7LAqO5EkKddJITAgBRSIly7x2RDOxIGvkT2eIgHKpCcOddkOHlUIj3nZ8TMWurG5l0BSvWRSbAaXTPrhosr6oFaAiHrjd4g%2FHkiQAV9%2BHpA2HGb5BpenOV4ISu4xAc51awi159d023Djs26ecuKeSJhAcq6etR0xTvTPT6K%2Fur4WJ2nM72siCwbLLZRsgcs7OwAInppTFXGVkrTAA%2BhSSWRq%2BBhnTuUE8Pz6H2YTZEIpqMxSorZYQ6IDkSIoqaIXZ1ZPZ%2F1vn5B%2Fgacth4GvSdxmzsn%2Fl%2BROeILLerj3rIfXEVF1a9FGlwRCWVjxZTz3H2zD1mwBdPKQoV%2B3s5WYLoOHO8VHbVuEPuQ7rBV6Ti4DCIh9%2FJBjqkAYZHGEi8obE3l%2Fe03Jzt197nSXeWlt8g%2FpD9uJqLpXGxm2Eoh%2FOVQrUlW6UUnzldx5gpn5wrs9scNOlGF%2B3zl15qyTup4ikwhPJ5b7%2BKtyzJz0RIBvhZPx3sCiTdzfLKVTqI8JKax%2F%2BEj6oc0cSfUFvGlveBBOx8ZfKa558Er33gmOAc5bwN29axYikYwZpA9%2FGTj1BzpgACoW0ZAGOpjRMx%2BOkB&X-Amz-Signature=55b89dd20dd670fb9ea904d0877047c928c5833af71d31255c33ea5f15b0d77b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
