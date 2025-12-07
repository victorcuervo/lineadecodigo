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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DWLKW3Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0P20a%2B5JSL8pARfbsEUtetLgl1RSfIMZ8Q6rc121Y%2FgIhAICLhJ7LPBLqPr9BOPX3f4sG5QiswYxeOPfUSZPW%2B6SUKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz07TowciXk0UVw2GUq3AM0qu94r0GjH8bLI7p4uckI51VhWLcr7nPWqfoq72UwtW%2B7MFlKjEf%2BFd3Ct8MFO6bShuvvOKsLeJndHTt8gT5t4bMF7TjqEtgOG%2FnmiiIAzS76K%2FNBC6hENrTEhPK2dOnO2lyidTRxGfRvbmJKBieP91nVbJB6W3wuiy7oVCuurGq%2BVokxteWSNo1m0p4DVj7%2Ba2c0VMIrwzuCNPd8XDzzQn4a4nCidRkezgbBZJWPz0L15CQ%2FIZkpLGaFP8CG%2BemVhj2oFcoOCaUlmB4o2k9vkzvKAZnMONIJlI1eLUoJupye%2BTJQ7LlM7RhpQeCUfspOtaTeIasOuqH7Fk2MPORTeI39mubbMkrmURomzHw6t%2BYcwccZ%2Fbwi1%2B%2BiyTT9MKOEyrR95hdo2IfDdkR73RLjSkKCh451Z3pMOJx8bqODeqOOeZxsZCYYJLrwZ9bSEHzjky3d%2BuXvPDY3PPfh3Yt72vL7OYHBIBl8LRUrVjhpqvRfaCOcQ1Ml9aciz6JkrlRmFtM7sCiZ1VhtGDCcGVV5RtLnaZC%2BeGxNePcDoWaCUoqjJdMpypsD5c0WTQ9XfG5W1pxl%2BMP5BkCUJEB%2FhyrMdncZWSmo1J6WTY5S13AvDaI4Y6%2FC1tuHhgm4NTDxqNfJBjqkAcwEXath%2F%2FHQJYcProvR4%2FXPelaRQLXcMgjcCYVJ%2FqqQ0JM6RI47OxJ%2B702msTAfZRUuav2sEVY6umjwuNcVXuE8Skzdtvt5Q%2BL7yaVbHEshLdjqEAi7jOH5sVubzKMr%2BwmWrD1sL1MKeh%2ByBCVEIHGlyodlSMaSuOdaGhCiab5ftlw6S1L79tc0Cq3Q5FCTNgRxAB245Aju3RDzk6H9LvS%2BVQZw&X-Amz-Signature=6551b4845f831cb75d06c1ac61e93e9ec7b594f3fc5164ab1d00996a17763bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DWLKW3Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0P20a%2B5JSL8pARfbsEUtetLgl1RSfIMZ8Q6rc121Y%2FgIhAICLhJ7LPBLqPr9BOPX3f4sG5QiswYxeOPfUSZPW%2B6SUKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz07TowciXk0UVw2GUq3AM0qu94r0GjH8bLI7p4uckI51VhWLcr7nPWqfoq72UwtW%2B7MFlKjEf%2BFd3Ct8MFO6bShuvvOKsLeJndHTt8gT5t4bMF7TjqEtgOG%2FnmiiIAzS76K%2FNBC6hENrTEhPK2dOnO2lyidTRxGfRvbmJKBieP91nVbJB6W3wuiy7oVCuurGq%2BVokxteWSNo1m0p4DVj7%2Ba2c0VMIrwzuCNPd8XDzzQn4a4nCidRkezgbBZJWPz0L15CQ%2FIZkpLGaFP8CG%2BemVhj2oFcoOCaUlmB4o2k9vkzvKAZnMONIJlI1eLUoJupye%2BTJQ7LlM7RhpQeCUfspOtaTeIasOuqH7Fk2MPORTeI39mubbMkrmURomzHw6t%2BYcwccZ%2Fbwi1%2B%2BiyTT9MKOEyrR95hdo2IfDdkR73RLjSkKCh451Z3pMOJx8bqODeqOOeZxsZCYYJLrwZ9bSEHzjky3d%2BuXvPDY3PPfh3Yt72vL7OYHBIBl8LRUrVjhpqvRfaCOcQ1Ml9aciz6JkrlRmFtM7sCiZ1VhtGDCcGVV5RtLnaZC%2BeGxNePcDoWaCUoqjJdMpypsD5c0WTQ9XfG5W1pxl%2BMP5BkCUJEB%2FhyrMdncZWSmo1J6WTY5S13AvDaI4Y6%2FC1tuHhgm4NTDxqNfJBjqkAcwEXath%2F%2FHQJYcProvR4%2FXPelaRQLXcMgjcCYVJ%2FqqQ0JM6RI47OxJ%2B702msTAfZRUuav2sEVY6umjwuNcVXuE8Skzdtvt5Q%2BL7yaVbHEshLdjqEAi7jOH5sVubzKMr%2BwmWrD1sL1MKeh%2ByBCVEIHGlyodlSMaSuOdaGhCiab5ftlw6S1L79tc0Cq3Q5FCTNgRxAB245Aju3RDzk6H9LvS%2BVQZw&X-Amz-Signature=64f22e474f37d6f50230167901f65f1dc955e51098b3e41854b13154568e7d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
