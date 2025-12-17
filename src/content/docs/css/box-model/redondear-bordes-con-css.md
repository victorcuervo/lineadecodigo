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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK4R7RAE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FOHqka0uUYLsaI%2BbGdImWj9AtmJvy25VpPTBXBZ2hRgIhAKAFZUPoej4Tcgmm4NmNBDya4wJtqZrf8GHDOlj5Ti2XKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRCjtDb3LWMV1EHt8q3AMp8Q7H68EF%2FSFZ2A%2FVPJAKsI%2BGslz%2Bieh8A2VNSg6MJWwds1uVcA%2BMxyjHs8dQl2PB466ehjfYR%2B%2FzEFDQOhmwm3lpOMTi%2F8R%2FzPKS3RNMKmOqWbWXbAebBNFYt3uix%2B7GIOazA%2FrQ7CvSNJKlLumHvRtcEDhlqt42hXXwLJFKcR2IG4soEX3hHtUHfhTW%2BtYRw%2F9I6Qf1m45s9SgIhlFkWazjqMulY9A6U8KOawSr2oRqRaoxCVSXwWHO9c9tgVBpAGFAa%2FRd1H4g2xNW2SnF3jiJ45ZfiFqx4NiBSVjuxq6T4Ctb%2BDyiY8oak0piXzCkJq220g6fYni1NnN2buLeJ0%2BvB%2Bu0SnvdhgnXJkhrJmPVL5iPb6xas0TzAwSQn1N28xD7DX5WQ9M9mdcAS2XWuVXK3kCvS5upC%2Bz1wgxcXE%2FfKEnZQ4eOFgqC9fDRugu3%2B6ao6RGzEvlvpUxGPoeTaHpT038goNdE5jcULRfk8EN7rparSLOsNnusMmTgMhbdXyy7Kz0tgENEjW%2B7bTrS2r86M9ZYAGImP6N6StEDUcVbYrQyqbFT7%2BA5VJ3twFE1G07SqHNsVJhkrlvQ7guqcCuDCN58A63oOMoYX8PJhy3KIVTAaGYGAv%2FnhTDCn4vKBjqkAd8iAxTZR7c3USahUO36iP3EI1%2F5Hzuy2AjJBYnovmqjSRFI8OVk0aWSJPkG%2B8FOawQXHnexatBuIGaZWVBIEspY5TuQ1tzzeXXECCaw%2BuHW4wQp7KNbIfnb3MnqI5sMXL%2FwL62cy8kFACIQGA%2FZooDUmPkLDstbR5O7L9FbEGXbD8wBIwFRVL5AoC1UGz%2BTLXUbTujiLUFxPIEtKYI7JdmR5e6W&X-Amz-Signature=8185746b7c23ee998477e5db5d0c0826bfd6c79ec00a54ac5345e74bbce23fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK4R7RAE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FOHqka0uUYLsaI%2BbGdImWj9AtmJvy25VpPTBXBZ2hRgIhAKAFZUPoej4Tcgmm4NmNBDya4wJtqZrf8GHDOlj5Ti2XKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRCjtDb3LWMV1EHt8q3AMp8Q7H68EF%2FSFZ2A%2FVPJAKsI%2BGslz%2Bieh8A2VNSg6MJWwds1uVcA%2BMxyjHs8dQl2PB466ehjfYR%2B%2FzEFDQOhmwm3lpOMTi%2F8R%2FzPKS3RNMKmOqWbWXbAebBNFYt3uix%2B7GIOazA%2FrQ7CvSNJKlLumHvRtcEDhlqt42hXXwLJFKcR2IG4soEX3hHtUHfhTW%2BtYRw%2F9I6Qf1m45s9SgIhlFkWazjqMulY9A6U8KOawSr2oRqRaoxCVSXwWHO9c9tgVBpAGFAa%2FRd1H4g2xNW2SnF3jiJ45ZfiFqx4NiBSVjuxq6T4Ctb%2BDyiY8oak0piXzCkJq220g6fYni1NnN2buLeJ0%2BvB%2Bu0SnvdhgnXJkhrJmPVL5iPb6xas0TzAwSQn1N28xD7DX5WQ9M9mdcAS2XWuVXK3kCvS5upC%2Bz1wgxcXE%2FfKEnZQ4eOFgqC9fDRugu3%2B6ao6RGzEvlvpUxGPoeTaHpT038goNdE5jcULRfk8EN7rparSLOsNnusMmTgMhbdXyy7Kz0tgENEjW%2B7bTrS2r86M9ZYAGImP6N6StEDUcVbYrQyqbFT7%2BA5VJ3twFE1G07SqHNsVJhkrlvQ7guqcCuDCN58A63oOMoYX8PJhy3KIVTAaGYGAv%2FnhTDCn4vKBjqkAd8iAxTZR7c3USahUO36iP3EI1%2F5Hzuy2AjJBYnovmqjSRFI8OVk0aWSJPkG%2B8FOawQXHnexatBuIGaZWVBIEspY5TuQ1tzzeXXECCaw%2BuHW4wQp7KNbIfnb3MnqI5sMXL%2FwL62cy8kFACIQGA%2FZooDUmPkLDstbR5O7L9FbEGXbD8wBIwFRVL5AoC1UGz%2BTLXUbTujiLUFxPIEtKYI7JdmR5e6W&X-Amz-Signature=0c431de1e775b90ed9e9bb51ebd3f0a368837a390f8a12921b8c5ae335017263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
