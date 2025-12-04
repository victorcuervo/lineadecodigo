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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4TBXCDR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBVwhYVJrdLYfNhgSLAQkL2GKiMqTsaWSEotubOaoDIhAiEA2jcZkaS7df7CNJsfM0FtyH8S8EBQ1Xgd0h%2F7BMfUkfMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNtcWC2F7ItAIaRsTyrcA9IGAloyhG1vGBar1QySwoTWEaoHArHgr7JgEbTCsaNlm%2F30%2BZ8M%2FiUYUdCmox7vKUVATaeN3sIRRHQwL9NbcdfJjy5FwpFBfhmsfPEXHglNi7y8wGAihZIqV36phFed%2F9N1Kva6Lw5fQxt867UlnnuY0rypBLhxPqSiCnQa9nbiUFjq%2By0%2FFx%2B3Q5Q2R07p8bxPqVHXB%2BBG1%2FX4qPOglBUmQkijvMKlas8AoQ3peENecypucH20YmmCMIcRLtYwhE6zMiZotTsSCkfYw9XVO59SM0gvuzo8TdJgFk8hSYpY6lKJT2tCHFvxHCjre4AYxCiaytOXl9XsCJj7c2BclTvehyHoy0AEMTD1GiNAcZpI2sKPreCvQUMz4EG8F2KIFflM93pXzwEB77vOjRY90WcKJMNrkFT85rxsPl7qYbsCQgKE3Y9r4TwL92l8xSPtOxhSSvnr0iPgWBAhsgur%2FYzkr%2BQE7htFJPOxNGxIGmc53IJyXKKfSGLIans2rGRImTVSncD7hTNUB2rmQ0bJ%2FPJED8XglGd6LashJmp7%2FQHiF%2BRpNg28SJ9sukXDxQpa2KEljyNDiJA%2Bf72iW%2BsVz7KP78J8sseSJVZjHUJrh6kiTZetGZQqTddnH%2Fo%2BMOWhxskGOqUB2uWrRaPYDK5Lb47ZQ8Xha0WsdwYmbLzEEALbIY1wGtNtDgziGtDClg3zu5Mnlc%2F1XXxZejFrzfzlW8MffwP2masCjeax3imsDoBgav0FjYAqGMAJ7W9eyJo3IWh6YSlzp4qQIJ0AJyZ3jLA2D8pax8jv2%2BzOSNmXJDI7R8hLKwDaYmFkcxsCxrp8civNgNI4aJeXWFecMjCfFs%2FQP%2BPGrdlu5Qpf&X-Amz-Signature=96d907c7454b3851ead9897df10a5d1e0e630ea03e8d7e95624e8b59e95cbddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4TBXCDR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBVwhYVJrdLYfNhgSLAQkL2GKiMqTsaWSEotubOaoDIhAiEA2jcZkaS7df7CNJsfM0FtyH8S8EBQ1Xgd0h%2F7BMfUkfMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNtcWC2F7ItAIaRsTyrcA9IGAloyhG1vGBar1QySwoTWEaoHArHgr7JgEbTCsaNlm%2F30%2BZ8M%2FiUYUdCmox7vKUVATaeN3sIRRHQwL9NbcdfJjy5FwpFBfhmsfPEXHglNi7y8wGAihZIqV36phFed%2F9N1Kva6Lw5fQxt867UlnnuY0rypBLhxPqSiCnQa9nbiUFjq%2By0%2FFx%2B3Q5Q2R07p8bxPqVHXB%2BBG1%2FX4qPOglBUmQkijvMKlas8AoQ3peENecypucH20YmmCMIcRLtYwhE6zMiZotTsSCkfYw9XVO59SM0gvuzo8TdJgFk8hSYpY6lKJT2tCHFvxHCjre4AYxCiaytOXl9XsCJj7c2BclTvehyHoy0AEMTD1GiNAcZpI2sKPreCvQUMz4EG8F2KIFflM93pXzwEB77vOjRY90WcKJMNrkFT85rxsPl7qYbsCQgKE3Y9r4TwL92l8xSPtOxhSSvnr0iPgWBAhsgur%2FYzkr%2BQE7htFJPOxNGxIGmc53IJyXKKfSGLIans2rGRImTVSncD7hTNUB2rmQ0bJ%2FPJED8XglGd6LashJmp7%2FQHiF%2BRpNg28SJ9sukXDxQpa2KEljyNDiJA%2Bf72iW%2BsVz7KP78J8sseSJVZjHUJrh6kiTZetGZQqTddnH%2Fo%2BMOWhxskGOqUB2uWrRaPYDK5Lb47ZQ8Xha0WsdwYmbLzEEALbIY1wGtNtDgziGtDClg3zu5Mnlc%2F1XXxZejFrzfzlW8MffwP2masCjeax3imsDoBgav0FjYAqGMAJ7W9eyJo3IWh6YSlzp4qQIJ0AJyZ3jLA2D8pax8jv2%2BzOSNmXJDI7R8hLKwDaYmFkcxsCxrp8civNgNI4aJeXWFecMjCfFs%2FQP%2BPGrdlu5Qpf&X-Amz-Signature=caf418447633154c252507a51c683eae2592374576afbfdfa5eef89cfc240634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
