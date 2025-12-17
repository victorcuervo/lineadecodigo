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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH2DQ4DL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCubYsVdmKpmaHPjXESlwFhNG5ieuTSQFgK0AO2UH3brQIgBj4Ul%2FTZa6AZ65uUP9oGniRitqjACD58fWlp%2FrHg6poq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCEL8f67fOdVKSu92CrcA6xiTSln%2BTBWtwnHCICHAWfmLiDFctFULvLcHX6owTWYNqRPGcjJlqty5cypesZegraRCyvL20jlQBzcxUJ30GPTDkJPl9dSa4wM1sBsyZY5pMNUFi0x5y9gM%2FKhijYjQo3dFC7HE2nOuzShO8xbfYNvxdjfeb5FMQ2wqRlAWtVbOA7fcORwQCr2XzpTaxeh0ths8t6SwRJym5t3hv8RNSiF1r%2FocwvJvBvBdhJqRic%2FhSBK9lF7xnb8yzzj9NWyBFeLEN32VJ5WLoM2hZIg1oCSLSNBQmV1TGtHe%2FCl2U1%2B7fid%2Fc0m0ZbduOvtgFZE6Kay1f3hTzV%2FYyPdvQF%2B178EUjA8W7BcpbwFyusk8vkZQCSt1T7Wrw8P6XeSRpE4meir%2FGRqBDY9%2BhaKKFhU4phNkDo3%2B6bqiJuYycyt%2FKckSJMrpaW%2Br2%2BIFVVxHolbepG9wE6hZVJC0EsiRLGghFsuyUWCkQco67xn8aHnKEBUV48H1vhiYhsMnW6zxkCJcW%2B8G6l6TAPN8UUhFN7POAuKcKhFD6GxyUK4PnSYMLjdkBq%2BDAOMs4XoVOc0IJyC7n4bGJDNzJdYnkv9wzbANdjgvyGrEMsKHlttXt7V%2FhIaIvmF8XpG7gS3E6dMMPyyiMoGOqUBobvSwGkRG17mSuqBjrGmObyRFr8IPGzWUc2xHzZp8%2BD0fybIqMJJQ%2FRgbbSy4MzgXKhcoIt8SdyWZfFgSJj3z%2BoNwsvJUdbWbLURWWERE%2BEutHKA9Cs84%2BCqy1ICosff%2FbauvzWT5hy3rT6ISvPpRc32TnDKFd21ICpkR87KGkM3iHfPWMAoykzv8fCR6yxPCI5oJOSzO2JKmgRkqgR221ey8tUF&X-Amz-Signature=96b77a9554fc7fb09d2e586bcf0b4643c9ec0c29d7cfbfbb334beef18ec1b94c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH2DQ4DL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCubYsVdmKpmaHPjXESlwFhNG5ieuTSQFgK0AO2UH3brQIgBj4Ul%2FTZa6AZ65uUP9oGniRitqjACD58fWlp%2FrHg6poq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCEL8f67fOdVKSu92CrcA6xiTSln%2BTBWtwnHCICHAWfmLiDFctFULvLcHX6owTWYNqRPGcjJlqty5cypesZegraRCyvL20jlQBzcxUJ30GPTDkJPl9dSa4wM1sBsyZY5pMNUFi0x5y9gM%2FKhijYjQo3dFC7HE2nOuzShO8xbfYNvxdjfeb5FMQ2wqRlAWtVbOA7fcORwQCr2XzpTaxeh0ths8t6SwRJym5t3hv8RNSiF1r%2FocwvJvBvBdhJqRic%2FhSBK9lF7xnb8yzzj9NWyBFeLEN32VJ5WLoM2hZIg1oCSLSNBQmV1TGtHe%2FCl2U1%2B7fid%2Fc0m0ZbduOvtgFZE6Kay1f3hTzV%2FYyPdvQF%2B178EUjA8W7BcpbwFyusk8vkZQCSt1T7Wrw8P6XeSRpE4meir%2FGRqBDY9%2BhaKKFhU4phNkDo3%2B6bqiJuYycyt%2FKckSJMrpaW%2Br2%2BIFVVxHolbepG9wE6hZVJC0EsiRLGghFsuyUWCkQco67xn8aHnKEBUV48H1vhiYhsMnW6zxkCJcW%2B8G6l6TAPN8UUhFN7POAuKcKhFD6GxyUK4PnSYMLjdkBq%2BDAOMs4XoVOc0IJyC7n4bGJDNzJdYnkv9wzbANdjgvyGrEMsKHlttXt7V%2FhIaIvmF8XpG7gS3E6dMMPyyiMoGOqUBobvSwGkRG17mSuqBjrGmObyRFr8IPGzWUc2xHzZp8%2BD0fybIqMJJQ%2FRgbbSy4MzgXKhcoIt8SdyWZfFgSJj3z%2BoNwsvJUdbWbLURWWERE%2BEutHKA9Cs84%2BCqy1ICosff%2FbauvzWT5hy3rT6ISvPpRc32TnDKFd21ICpkR87KGkM3iHfPWMAoykzv8fCR6yxPCI5oJOSzO2JKmgRkqgR221ey8tUF&X-Amz-Signature=6c6d1116fadc8a4da11c9933de5a705212200ad2e3428029a06d46e2fda0f3d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
