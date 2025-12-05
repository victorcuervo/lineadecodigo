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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z65RZYTY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZkOQJyP6AJNiY3TXXEqsKmTNXIZKaIvf8MwF6Kg4qQAIgPEr%2ByWiJHpre2oRuqFa6umBRi9NROSJ90iSUFuwYIcgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBgkF0ifqKz8qU4%2F%2BCrcA2wMU%2Bm8Z8xbuyy3SjdmIIIOQEfm%2Fk2gznWqr846Gxt1ceJU%2FNjwT%2BWA4jhQVE8phAU5IVfHgE%2BHuF6AyyD0AihSuiYY8Cf66N2DKjfQwZfgXKG3M2AjA2hdXcKHmPnYQQ7BRNrLqc8Jpa0rPnS1HPywQgNTTk9ELzTNoK2KAnTClpo30ComLTOue4qp783fDYsq24viWw%2BN5Edp5AqynU7yR0FUn1r1lLI4sB8pBir1i6MtnaBUZepezXh9GVgabiezVl6Auj%2Fy6H99hXRq7TYLGD0V0k68Y0gmZRjrTRZ79FZ53ug20DkwL0nudARmfXc34JRMAgIZ%2FkJfj%2BxG7OEtTQ2pwF%2FWYzF9f1%2FeEiApSvigwY0fbEdw59LUhpEvnQr8HXYe%2BZdh4grfRBJs8JlaN%2FSDVe6jldtxcYbaiNehStdtyUsGjpMFDlJGT3ThBcSsd895DWHMKRCcjY1P0fk23vyTmMU%2FeyUULakTIO7AM6ZnV0SV0H6w2IgfNOy1P8PdebcN%2Fs1MXpmAIBO2mICcXnhnjfxq0k75zLs9lWDG%2FKCAg%2BbySO0tJp8MFDqdjXFNeO9aXKGy4Fa%2B3w2B%2B1odXNibKhtF9XhHdQz56R23CMQzprbKsF47nWXhMI7YyskGOqUBe2%2FweO%2FVwY8Ul5P%2BYg%2Fs1nqcTuPxL4vt7MDisb%2FoqmUN0JJdWmtnIoCuDXIB2DEr7QI98Hm9dMMjLcub%2FreTY0mue%2FLXbWTJgV25Js%2BBGZgYj%2Fammx7a4YEOYqWfKRSBtCshdrVO2nBxtEup8VXig7UqCMrbNlD1d1357Y2WvSE%2FF4ghO9uMABBlY3ntbzKH%2BjMRrsuBLwk277mahNMI%2BrpBqeal&X-Amz-Signature=c998c63586dfb4959e6e21239e74961e0df27e90a973411f12e89475cf2ef662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z65RZYTY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZkOQJyP6AJNiY3TXXEqsKmTNXIZKaIvf8MwF6Kg4qQAIgPEr%2ByWiJHpre2oRuqFa6umBRi9NROSJ90iSUFuwYIcgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBgkF0ifqKz8qU4%2F%2BCrcA2wMU%2Bm8Z8xbuyy3SjdmIIIOQEfm%2Fk2gznWqr846Gxt1ceJU%2FNjwT%2BWA4jhQVE8phAU5IVfHgE%2BHuF6AyyD0AihSuiYY8Cf66N2DKjfQwZfgXKG3M2AjA2hdXcKHmPnYQQ7BRNrLqc8Jpa0rPnS1HPywQgNTTk9ELzTNoK2KAnTClpo30ComLTOue4qp783fDYsq24viWw%2BN5Edp5AqynU7yR0FUn1r1lLI4sB8pBir1i6MtnaBUZepezXh9GVgabiezVl6Auj%2Fy6H99hXRq7TYLGD0V0k68Y0gmZRjrTRZ79FZ53ug20DkwL0nudARmfXc34JRMAgIZ%2FkJfj%2BxG7OEtTQ2pwF%2FWYzF9f1%2FeEiApSvigwY0fbEdw59LUhpEvnQr8HXYe%2BZdh4grfRBJs8JlaN%2FSDVe6jldtxcYbaiNehStdtyUsGjpMFDlJGT3ThBcSsd895DWHMKRCcjY1P0fk23vyTmMU%2FeyUULakTIO7AM6ZnV0SV0H6w2IgfNOy1P8PdebcN%2Fs1MXpmAIBO2mICcXnhnjfxq0k75zLs9lWDG%2FKCAg%2BbySO0tJp8MFDqdjXFNeO9aXKGy4Fa%2B3w2B%2B1odXNibKhtF9XhHdQz56R23CMQzprbKsF47nWXhMI7YyskGOqUBe2%2FweO%2FVwY8Ul5P%2BYg%2Fs1nqcTuPxL4vt7MDisb%2FoqmUN0JJdWmtnIoCuDXIB2DEr7QI98Hm9dMMjLcub%2FreTY0mue%2FLXbWTJgV25Js%2BBGZgYj%2Fammx7a4YEOYqWfKRSBtCshdrVO2nBxtEup8VXig7UqCMrbNlD1d1357Y2WvSE%2FF4ghO9uMABBlY3ntbzKH%2BjMRrsuBLwk277mahNMI%2BrpBqeal&X-Amz-Signature=fa97a9ba1406a1ab84248246d67605a3b51378f5d71502a34b864d53d405a128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
