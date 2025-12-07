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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQGO4G5H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbL7S9dSqte72so8rjDr6ptVCewkgT34gt85ARyUJ8IAIhAIAtWRXDNfFesl72y3WXHdLHYwes%2F%2BES7dGzbEAjBkrOKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9UJyCiMVZ1h7p6Tkq3ANxmJcPsNiZjnDOi6unVaGvKeyspJqtKy731DSqUEiH7szZa8GmrtTDHr9J6N0Q1%2Bosxyqp6v1sc9UX6fEaXsFlf61fDjvE7Ppn14NhAcNvUpqVlQY9NeEtQyOhvB8F6MNx8iXxXCxcKUFC0tL4cp8%2BQ8MsQCisgd2OU8UiNdLQUKbe%2F%2FYsIVh8GfaH7ySUuAKAAb%2BE0tOq%2FXN0hmvxzwBsrEqlErdK7V8wWuk5RLKJ%2FU%2Ba6W8RS6dXHFNPWLn7N8e%2BYoBGgbfSc%2FPjAW%2FeEGnkcOEgFvj8qMyrMRuY%2FTGSgLav%2FJOPX95XPOq6emwFjCpE7y385GimiAwEn26hirgiuEZa2he9IrBgnrtSFckQEEgv2KgxtBscrmOpC%2B2m6MMDKntT%2FSgn%2FIWzo2QW5LHkqP0I9FkA6YIEM8bO6nMYlWbe%2BUJFKBzWlOwf4PfLwP%2FfeF1%2BxG0W0%2BXdptvRRNnMKKSQEvtC71ONoNiZXjGuUi%2FKEl0e4C9KioQwLQHyN2yx5YEzwazxTwQ9JAicCHpHEEZDfgp3OL%2FelXsGWrl7QuxvtF%2F%2FHsmNwm5UxXmP3CW9fhGt7RoN2kO9ABfFYubTld1zBTbfyTnD%2FdQlUunkp48EzOGP2Z61NrkYXTDJmdXJBjqkAQXFEGPA7hceMhiVTlFPLe%2BBMkpIG5PZRboNlQkt8j%2FT8b2BQ%2FgT0hE0eAvFuKnnS%2FFvOjl0wpSqKdJxLJPvcnR6%2Brwdi7ymvjp%2F504eaHWhhWAV1AA93vRzXoyZXGgIOXbHJl%2FUTfSFZZGeesiouIL%2BfeA0ksxUvzPCTaPGeo9dqycBlWLN7VVQH%2Fc2wklPZgdjoDQgTIumqYS2DAdPj4T8b34S&X-Amz-Signature=c8b3c4e02d4eef06850b7f55f5f8d6c0a6c759355dd4ec5be46408e8db7931bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQGO4G5H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbL7S9dSqte72so8rjDr6ptVCewkgT34gt85ARyUJ8IAIhAIAtWRXDNfFesl72y3WXHdLHYwes%2F%2BES7dGzbEAjBkrOKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9UJyCiMVZ1h7p6Tkq3ANxmJcPsNiZjnDOi6unVaGvKeyspJqtKy731DSqUEiH7szZa8GmrtTDHr9J6N0Q1%2Bosxyqp6v1sc9UX6fEaXsFlf61fDjvE7Ppn14NhAcNvUpqVlQY9NeEtQyOhvB8F6MNx8iXxXCxcKUFC0tL4cp8%2BQ8MsQCisgd2OU8UiNdLQUKbe%2F%2FYsIVh8GfaH7ySUuAKAAb%2BE0tOq%2FXN0hmvxzwBsrEqlErdK7V8wWuk5RLKJ%2FU%2Ba6W8RS6dXHFNPWLn7N8e%2BYoBGgbfSc%2FPjAW%2FeEGnkcOEgFvj8qMyrMRuY%2FTGSgLav%2FJOPX95XPOq6emwFjCpE7y385GimiAwEn26hirgiuEZa2he9IrBgnrtSFckQEEgv2KgxtBscrmOpC%2B2m6MMDKntT%2FSgn%2FIWzo2QW5LHkqP0I9FkA6YIEM8bO6nMYlWbe%2BUJFKBzWlOwf4PfLwP%2FfeF1%2BxG0W0%2BXdptvRRNnMKKSQEvtC71ONoNiZXjGuUi%2FKEl0e4C9KioQwLQHyN2yx5YEzwazxTwQ9JAicCHpHEEZDfgp3OL%2FelXsGWrl7QuxvtF%2F%2FHsmNwm5UxXmP3CW9fhGt7RoN2kO9ABfFYubTld1zBTbfyTnD%2FdQlUunkp48EzOGP2Z61NrkYXTDJmdXJBjqkAQXFEGPA7hceMhiVTlFPLe%2BBMkpIG5PZRboNlQkt8j%2FT8b2BQ%2FgT0hE0eAvFuKnnS%2FFvOjl0wpSqKdJxLJPvcnR6%2Brwdi7ymvjp%2F504eaHWhhWAV1AA93vRzXoyZXGgIOXbHJl%2FUTfSFZZGeesiouIL%2BfeA0ksxUvzPCTaPGeo9dqycBlWLN7VVQH%2Fc2wklPZgdjoDQgTIumqYS2DAdPj4T8b34S&X-Amz-Signature=d827f2b2d71e55a02b42ec49d72e17302c784f104141444f296038033b750da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
