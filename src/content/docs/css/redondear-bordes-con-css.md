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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H7LEHRE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6KOD9D56gOEhlMj7tfMMJw%2BL1Bg8OPNJzZ8LgXu5miAIhANdF4sVNYMwYbgcyCyZHOst5x3ejPpVsDJFX47egocTyKv8DCHoQABoMNjM3NDIzMTgzODA1IgzXshgGhIOQHD7eCKQq3AOcaT8k3eP0MevQk2U%2FcWpAYHfPNeRQLGbk2Hn1McdR8EPjYrNX1YMyc1fMKeQlnrunpUyyxx0ux74MUz63BrLOgwOltNf7mjjawPk1nMsBPziIRx1P9B%2FzDqAznh4VTS5Odev%2FMGXrrPGQm6gxH%2BI%2B9D5oIXIIFQege9%2BQF7y2O%2Bn15m%2B9Ecb%2FQkGp4SmnetzvcvJgSBHBza0bWaWvgtXubKgS0e6PcOaXhBU9tgYCrjDU0f3QaI30kUuTh8%2FvzMnr%2Bsn%2FPxIfDTqOhAzRb1aBp%2FuOVE6cH9LC7AvoXNRw6pwVVQzbGf8fmGbPUoR1CR5hRpP1gtIGkJcL5cgCDxCLTTfGAQrJUnyvfzpaGhd5Jgbfxo47cOiHDSyXGnc8OoCTNO6iYT%2FNs3lZIjJDfGPcVue3bSXa%2FdNqCSQPoO%2F%2FFHTCBZC5CHHsMMKGrS75ykARPOdJYGxyMbYkGEjFw82yIpoqKXxQiW%2BvFjKG%2BcPqyaqBJTT4jGz3JMMLEbxzuRXYLpDdxD4pb%2Bt792KxRHXWoryzG1%2BOEHsnJ8fXG8fTxUcvb0kF1VeRiIeoyWHWIX15doLgZAc20E8x5%2BP8Vfxk33UOLCX%2FGienF%2FZxwfDoTGjcvJrVpCJn0YAK8jDhydHJBjqkAc4950SN%2F1VI1JRRGVEbSpFKf4q8a%2FJ1XYApHQFji1svMWau7jaaMsTGxU1xJ1At2gKo23Wp7HKBkLNBRo2x4NKuaiP0MWl7rjFpRZpUzxRvL7oA97RwwMvhjO%2Fb%2F3sWi5u4fk9rb4HoI%2FNzwcImnUkJC9aZQlMEslOFlgk6HIwqEXQJKjmxm73Q90yZDSs50WUy%2FCLEtpYMmMr4CHtiR7sBqBj4&X-Amz-Signature=58933810a15944c82bcfe55fdaa5c48309e2a3ecfd062325e0eaf5aa75172a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H7LEHRE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6KOD9D56gOEhlMj7tfMMJw%2BL1Bg8OPNJzZ8LgXu5miAIhANdF4sVNYMwYbgcyCyZHOst5x3ejPpVsDJFX47egocTyKv8DCHoQABoMNjM3NDIzMTgzODA1IgzXshgGhIOQHD7eCKQq3AOcaT8k3eP0MevQk2U%2FcWpAYHfPNeRQLGbk2Hn1McdR8EPjYrNX1YMyc1fMKeQlnrunpUyyxx0ux74MUz63BrLOgwOltNf7mjjawPk1nMsBPziIRx1P9B%2FzDqAznh4VTS5Odev%2FMGXrrPGQm6gxH%2BI%2B9D5oIXIIFQege9%2BQF7y2O%2Bn15m%2B9Ecb%2FQkGp4SmnetzvcvJgSBHBza0bWaWvgtXubKgS0e6PcOaXhBU9tgYCrjDU0f3QaI30kUuTh8%2FvzMnr%2Bsn%2FPxIfDTqOhAzRb1aBp%2FuOVE6cH9LC7AvoXNRw6pwVVQzbGf8fmGbPUoR1CR5hRpP1gtIGkJcL5cgCDxCLTTfGAQrJUnyvfzpaGhd5Jgbfxo47cOiHDSyXGnc8OoCTNO6iYT%2FNs3lZIjJDfGPcVue3bSXa%2FdNqCSQPoO%2F%2FFHTCBZC5CHHsMMKGrS75ykARPOdJYGxyMbYkGEjFw82yIpoqKXxQiW%2BvFjKG%2BcPqyaqBJTT4jGz3JMMLEbxzuRXYLpDdxD4pb%2Bt792KxRHXWoryzG1%2BOEHsnJ8fXG8fTxUcvb0kF1VeRiIeoyWHWIX15doLgZAc20E8x5%2BP8Vfxk33UOLCX%2FGienF%2FZxwfDoTGjcvJrVpCJn0YAK8jDhydHJBjqkAc4950SN%2F1VI1JRRGVEbSpFKf4q8a%2FJ1XYApHQFji1svMWau7jaaMsTGxU1xJ1At2gKo23Wp7HKBkLNBRo2x4NKuaiP0MWl7rjFpRZpUzxRvL7oA97RwwMvhjO%2Fb%2F3sWi5u4fk9rb4HoI%2FNzwcImnUkJC9aZQlMEslOFlgk6HIwqEXQJKjmxm73Q90yZDSs50WUy%2FCLEtpYMmMr4CHtiR7sBqBj4&X-Amz-Signature=6891efe5775256b04309e414b46d02f30cbaf7b18d8feb070b3e2138c67f124e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
