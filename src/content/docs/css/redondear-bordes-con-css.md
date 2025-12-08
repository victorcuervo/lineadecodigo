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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NES6LVI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe9ELMmCF2mUZSUSEEzA3dPRFmm0O70UE3psAyHjUE%2BQIgG%2FOp2lRzzjxbf80hGaROrLrmaOso2P8wZP9D9QexTYwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkGquVmcbm9mdGQ4SrcA%2Fq3wpcQ0Re2Thh7SWTlMXPEPdV8V71ECywuPsmlac42zt%2BS2xDGzN9MaZuMOegNk9IYRswnMDrF5jNmTjl%2FqnZtEeXuspUIyrRK7CIqEdp3PA8p1sVjC9jXD5W%2FbcO5%2BcJMQPz%2FFHbqyU%2FFQ%2Bi5gBGfsm3fOyFfLO5%2Bgf5OV7vWVur3dWDe0f4j3CjKvt2cauMzx2aXduWRl0pxqvZmGCPEkV1Rz2bgxEEBVLzVB91yPHNBp3wnAKLWLUXCVy2O8BWJMATz8Rk7r3MQjJINj84%2FQCd2Emm7lRpEBMi4fTbIq%2B708jDViBbDpVE32Tv4MOSfsguaqvFfW97YuuzaZg%2Fbk6q4SYQX88bvDpLmZNho826%2Bg%2BZQVsiZQI7oes9c%2F9LwwFjpFHU81pGqMlm%2FtD5mLQqqB%2BUjtyBRU7WTU0qA77FIz5WYJS82fLc4JyfBUyHM4FnNYvXGnb6YNj269XTuULzXEz%2FGE2GM6YL39eqaEGXrTAbl2y678crEKymVkVefDTKflbqZasXc2QnpoH4LNk1N2SyXboe7KxPIlWtOX4%2BZ0dxdZn9am9XoXFEL8GgTYKa9peTB4ZukQ9PpwHAPt11t0zV3pFeqk8KYXUalNxfvoFcFC8JGA4JYMNK03MkGOqUBVJtg22yRgF1AR5MFTYWS9aEEngIj%2FHWvUQGkm%2B0c6sKQTUPTMdQaXaf%2BtnFRXMuDjMW3qn32%2FDrofrJ5f3l41aCGKV%2BTkn5YR9oAMKX0lJcIJBHWuW4xM42GctEZE3hxuNX2pbhw7o1tvNSd6YZ6ZtUYgwxokcqZ013zIDeEmZpr6RzZm%2Bfc29LS2khMO6PSvTuepmmgSdPfAJ0uzqqOcAJp3Jg%2F&X-Amz-Signature=c4a030319e43222db5b1a5052df3d6cb194ea1980d992acfe5d9d6070cb20836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NES6LVI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe9ELMmCF2mUZSUSEEzA3dPRFmm0O70UE3psAyHjUE%2BQIgG%2FOp2lRzzjxbf80hGaROrLrmaOso2P8wZP9D9QexTYwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkGquVmcbm9mdGQ4SrcA%2Fq3wpcQ0Re2Thh7SWTlMXPEPdV8V71ECywuPsmlac42zt%2BS2xDGzN9MaZuMOegNk9IYRswnMDrF5jNmTjl%2FqnZtEeXuspUIyrRK7CIqEdp3PA8p1sVjC9jXD5W%2FbcO5%2BcJMQPz%2FFHbqyU%2FFQ%2Bi5gBGfsm3fOyFfLO5%2Bgf5OV7vWVur3dWDe0f4j3CjKvt2cauMzx2aXduWRl0pxqvZmGCPEkV1Rz2bgxEEBVLzVB91yPHNBp3wnAKLWLUXCVy2O8BWJMATz8Rk7r3MQjJINj84%2FQCd2Emm7lRpEBMi4fTbIq%2B708jDViBbDpVE32Tv4MOSfsguaqvFfW97YuuzaZg%2Fbk6q4SYQX88bvDpLmZNho826%2Bg%2BZQVsiZQI7oes9c%2F9LwwFjpFHU81pGqMlm%2FtD5mLQqqB%2BUjtyBRU7WTU0qA77FIz5WYJS82fLc4JyfBUyHM4FnNYvXGnb6YNj269XTuULzXEz%2FGE2GM6YL39eqaEGXrTAbl2y678crEKymVkVefDTKflbqZasXc2QnpoH4LNk1N2SyXboe7KxPIlWtOX4%2BZ0dxdZn9am9XoXFEL8GgTYKa9peTB4ZukQ9PpwHAPt11t0zV3pFeqk8KYXUalNxfvoFcFC8JGA4JYMNK03MkGOqUBVJtg22yRgF1AR5MFTYWS9aEEngIj%2FHWvUQGkm%2B0c6sKQTUPTMdQaXaf%2BtnFRXMuDjMW3qn32%2FDrofrJ5f3l41aCGKV%2BTkn5YR9oAMKX0lJcIJBHWuW4xM42GctEZE3hxuNX2pbhw7o1tvNSd6YZ6ZtUYgwxokcqZ013zIDeEmZpr6RzZm%2Bfc29LS2khMO6PSvTuepmmgSdPfAJ0uzqqOcAJp3Jg%2F&X-Amz-Signature=6914b989bddbd35dd4dfb2c04dd7d3d4c289c9b3d6b1a8cbd81abaab7247290a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
