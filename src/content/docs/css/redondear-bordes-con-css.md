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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TYQTWQX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCbHa5zmg4EkYjYb9rnnSLpVWCwVRVagqXEgwhcR82xcAIhAK6tgREymbaaO96Vs3VSZTQhLNcLIvaTXCVDSTtIhCnTKv8DCD8QABoMNjM3NDIzMTgzODA1Igy6NG2hh31CMFyZ3JYq3ANJc8dpg757T3bhRcs%2BFu9MrbZ3JEFos0CN8gqVwfNCPc7e0dcjeFN8K1fZjxGzdq2P7E5imcR5a80UIjnCt2Iq95eTKXt9Gi%2FJQsyoMf6whn97YV0HIOY86EEzXQ8ht%2BMZvxWNKkeeJLM8ZcN%2BJ%2BHiHja8fhOh8NtXCvPcbGpMSR5n3FMh1hZBE1tk%2BC5IVW%2Fk5zs5O19EYa3rEmChV17qiTVTlFCixSAndAAo%2FHdrWH%2Fb3ak3uPuWkDSoYScOQyfdFzV4iH86p1z8RJrkdtOOFmy63xBMybeeISY%2Fgcko8eTUfTBddIbE91UI8naCdteczfqzAWEkSsq9jHXAqUL82GvqOhV0Q4Tad3GFg6au52gf9y46kaewqTOZIWnAnwdNE2BwgL1CVOHROLYzEs04CiSb2v3xXUSKGDl3gtWbbI1ondifTIiiMTtiPcH8EqAJeEGswTTSW0qo7J1CAs19PTr0MRCd73xuwMbreCovxzYKOdXqoVTAxFCKmH89k9lqKg7%2FG24NVJtGd56N1Zekb95FNu5bHi%2F9hu5pDeSlkNW4Tw0deVYi9ywe18zZXnhvOgcYQ7oD1EkPIfYXkv7ZoIDLNIAiDPZiLpmzOXBiQ3hytdmG%2Bmfe7NNeFTDfzMTJBjqkAWSEMUDTfL1%2Bd%2FBjNv%2BQfDSIhAliXtYi7eIpwGZ9AAvLoxuGegdHmra%2BkJd5K09rrd7gVrtB7JLnF6zuhjLL0yaEdoGXoPri8wBlbYAk07jNebZPXwOavE2dl7Lw8eA8ME5Jw0SGROOyZWi7bhqZpVu8C%2B2%2FmaP7BpyEReJ2zeiQ4UXtE8zvVCCh01QFMJkywwp8ek580nk3L2nYF1fWZC%2BxqNjG&X-Amz-Signature=7257fdc1ba2b15a7f8448ca677ed31601050849e88f3f067d6229cb97cf2e783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TYQTWQX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCbHa5zmg4EkYjYb9rnnSLpVWCwVRVagqXEgwhcR82xcAIhAK6tgREymbaaO96Vs3VSZTQhLNcLIvaTXCVDSTtIhCnTKv8DCD8QABoMNjM3NDIzMTgzODA1Igy6NG2hh31CMFyZ3JYq3ANJc8dpg757T3bhRcs%2BFu9MrbZ3JEFos0CN8gqVwfNCPc7e0dcjeFN8K1fZjxGzdq2P7E5imcR5a80UIjnCt2Iq95eTKXt9Gi%2FJQsyoMf6whn97YV0HIOY86EEzXQ8ht%2BMZvxWNKkeeJLM8ZcN%2BJ%2BHiHja8fhOh8NtXCvPcbGpMSR5n3FMh1hZBE1tk%2BC5IVW%2Fk5zs5O19EYa3rEmChV17qiTVTlFCixSAndAAo%2FHdrWH%2Fb3ak3uPuWkDSoYScOQyfdFzV4iH86p1z8RJrkdtOOFmy63xBMybeeISY%2Fgcko8eTUfTBddIbE91UI8naCdteczfqzAWEkSsq9jHXAqUL82GvqOhV0Q4Tad3GFg6au52gf9y46kaewqTOZIWnAnwdNE2BwgL1CVOHROLYzEs04CiSb2v3xXUSKGDl3gtWbbI1ondifTIiiMTtiPcH8EqAJeEGswTTSW0qo7J1CAs19PTr0MRCd73xuwMbreCovxzYKOdXqoVTAxFCKmH89k9lqKg7%2FG24NVJtGd56N1Zekb95FNu5bHi%2F9hu5pDeSlkNW4Tw0deVYi9ywe18zZXnhvOgcYQ7oD1EkPIfYXkv7ZoIDLNIAiDPZiLpmzOXBiQ3hytdmG%2Bmfe7NNeFTDfzMTJBjqkAWSEMUDTfL1%2Bd%2FBjNv%2BQfDSIhAliXtYi7eIpwGZ9AAvLoxuGegdHmra%2BkJd5K09rrd7gVrtB7JLnF6zuhjLL0yaEdoGXoPri8wBlbYAk07jNebZPXwOavE2dl7Lw8eA8ME5Jw0SGROOyZWi7bhqZpVu8C%2B2%2FmaP7BpyEReJ2zeiQ4UXtE8zvVCCh01QFMJkywwp8ek580nk3L2nYF1fWZC%2BxqNjG&X-Amz-Signature=1f574d24b8962fa192141aec62c4dff317663457c6ea35db06b64b22d05bf056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
