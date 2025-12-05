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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SY44X5J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKa6JxIk9aFE7HI6oajqTY0V1%2BhJA6eo8JwTbsf5raXQIhANXBY1YLLhBPPps2htFXblYaiSy%2Be074Ke5VSnQ%2FFDRNKv8DCGAQABoMNjM3NDIzMTgzODA1IgwZyI5SCWK1S8uynLgq3AN53mzhdHHY3285cNan68OsIShksOEhhVSpbWlkFD0HLyFKFbD0mp8RS%2BtvlzU4eHwRx%2BGtl%2F1jbBc03LJvNMrk0%2B2bn%2BLCFkpkRxUyQUSccZS0OwluQqketTYJ3du9p%2BiQD7TPGI%2BfQkNXxmTSBxh5tI17Tw%2BDkHaX8hXrBsGfnCoVIllBRs0ppf%2BiZy6s2PBbNInIVAMazoLtMmn%2Fjq0iCMfGnjmMtyUrkGzSrbaLxTtS3BsTSbXnSYhRUO66SsmGSbRVNYoY1Q42%2Fm67C4xZDS01dPgr2HS8WgfU3UcBPHbUXmc5octHMWMGdlGRNs%2BMqxmewMr09RPj7V7BSBKvq%2FS0H7LWbwHXoU7xpf%2BkCslVp69muzF%2FU5TFRBb1hZVHjKdBTZNNf6zWjMVgR5l4uoXnpp38I%2Fe4LTEzqQhSLKDMZU%2FsCcaDSYz0iFzLioA88r0Fr17qiSYzgvI%2FaD9iHziIKYxlt7mMFHIo6zngnfrh0W1DtUC9K1vVNMcsMcr1qIPIBaWln8B6jnsyLdNtrhIfr0iWpfAscxASivmWcM5T%2FArQSmLl5qSWBmNXZJoLKQLKKv0zNKAYpRMDGGHg0mVaK2c9YqOBxYjpsIsHJ6EotKt3HvA4l5SyHjCM8MvJBjqkARjjH456k1xDszg%2Bu465TO7ItF1mpVSogrxHeoznTUodcjKz9hhDzAQqkReL93oq3FeUQFgTYm0wlqXPQxHzwJRxM9yADb%2BdSJ5PxNaqEUo53fXEiaL1jFmVXr8NjNxactMt2YvG5ey6aSKUXLZcTqtTItBnD9YNaBcgSOaAJZkglTDUaEb4JdC5LCO6rHABvxy%2B9tVtK%2BSr%2FznapbvtdlvAHmKL&X-Amz-Signature=5385419e06af809ee1f4d2e92970c24d05a53471b602990447e86d237ac08ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SY44X5J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKa6JxIk9aFE7HI6oajqTY0V1%2BhJA6eo8JwTbsf5raXQIhANXBY1YLLhBPPps2htFXblYaiSy%2Be074Ke5VSnQ%2FFDRNKv8DCGAQABoMNjM3NDIzMTgzODA1IgwZyI5SCWK1S8uynLgq3AN53mzhdHHY3285cNan68OsIShksOEhhVSpbWlkFD0HLyFKFbD0mp8RS%2BtvlzU4eHwRx%2BGtl%2F1jbBc03LJvNMrk0%2B2bn%2BLCFkpkRxUyQUSccZS0OwluQqketTYJ3du9p%2BiQD7TPGI%2BfQkNXxmTSBxh5tI17Tw%2BDkHaX8hXrBsGfnCoVIllBRs0ppf%2BiZy6s2PBbNInIVAMazoLtMmn%2Fjq0iCMfGnjmMtyUrkGzSrbaLxTtS3BsTSbXnSYhRUO66SsmGSbRVNYoY1Q42%2Fm67C4xZDS01dPgr2HS8WgfU3UcBPHbUXmc5octHMWMGdlGRNs%2BMqxmewMr09RPj7V7BSBKvq%2FS0H7LWbwHXoU7xpf%2BkCslVp69muzF%2FU5TFRBb1hZVHjKdBTZNNf6zWjMVgR5l4uoXnpp38I%2Fe4LTEzqQhSLKDMZU%2FsCcaDSYz0iFzLioA88r0Fr17qiSYzgvI%2FaD9iHziIKYxlt7mMFHIo6zngnfrh0W1DtUC9K1vVNMcsMcr1qIPIBaWln8B6jnsyLdNtrhIfr0iWpfAscxASivmWcM5T%2FArQSmLl5qSWBmNXZJoLKQLKKv0zNKAYpRMDGGHg0mVaK2c9YqOBxYjpsIsHJ6EotKt3HvA4l5SyHjCM8MvJBjqkARjjH456k1xDszg%2Bu465TO7ItF1mpVSogrxHeoznTUodcjKz9hhDzAQqkReL93oq3FeUQFgTYm0wlqXPQxHzwJRxM9yADb%2BdSJ5PxNaqEUo53fXEiaL1jFmVXr8NjNxactMt2YvG5ey6aSKUXLZcTqtTItBnD9YNaBcgSOaAJZkglTDUaEb4JdC5LCO6rHABvxy%2B9tVtK%2BSr%2FznapbvtdlvAHmKL&X-Amz-Signature=b7b0b60e300c3509edc8e21d065735fad861839c08b888905f5e542b5a1ee3c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
