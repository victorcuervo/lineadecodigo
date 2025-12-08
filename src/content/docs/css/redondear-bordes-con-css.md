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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TIV4B7J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FKwx76Igtb0U%2FZCswtSQSXtM%2BVdnDgymE6nP8mFiBjAIhAPk1sZzODg%2FdimiQb0yArlG226E6eCl8YAP9C8eRW5cIKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3OYl6TG0Ell2sYu0q3ANLSIQJG6ujSWGllf7J5N6zTtkE0yEPBPvgreZ5jeDa4IU1%2Fk%2FvnTbXrbAtcv%2Fr6P7vYoZgoR0Sk7h2PMMLKyy6x6Bk8dBpoCswYIGwHjD0L%2BmnhYmUktVEddWzyMrvDd6z2GxvRPepbaYG6lCTflOvkPDsuVQZ6ycDoYonb4jevj4N5mbgqSpjaNhyt4Vz5Yr20b%2BKF8KcYMIr635D1aGBVGnzMU8krXGeuC1HdGWn%2Fd9wkdMkhJN0Lt3y30ISSGkT2u59WU0YLl8%2FPs6tR0oza594W88ARWBJqdcWjutTfsNkKsOz61VTBJ4GXaB8B3vdXRPrrDtyc%2BA8CSHIoo6KzZFrJV4IHS4ASnDNu5nrDP6SMvziGyF4VS3bcLyCwcUjLj0%2FNo2%2B4m%2FANHmG219j4L71W6ddVPE5cxIXGQV44wuez1PNiLwqThy6PLUBpKhK%2BmqI3qcHt0nfn%2BLC1j4dZw4nwyz%2BtTO5iwGFNziB7jOkHu4reQ0b0A05rS91507QAnYhg4FZ%2FkRnbbbjUv6CqIe7zfX%2FU7aImTpGtAVqOy2a%2F%2B4aC3HQlKpLvkpF5c1cWXva5ORsiA4PLjp6YHgLM5pkePH4pVwqRaYlbAB97LC4F0HDXiPlJK1G4TCH0NnJBjqkAX6MrgEhmyeOVOqcmSbmy2TME76aEwYfURTbzzTsN6iN%2BXVYYprMuesQoUYt7GuvfBXIyGwNozKFWKdn3aLuM11yKvNG7sf61E075Qi75o9ZSoofzp2ReEWf%2FWFVWjq0Vahn2FD9cmX0RAUO2oA4f0I6W7uzQkLyiv0vzKJf9xNMoeBtWfEyv8I3O5C%2BOnxq6uZUDOiWZkQnCBXANfJBqDQ5Gy7g&X-Amz-Signature=14e2ebb1d6526c1efd5fd3072a236dd66bdee33c11fc531dd18d22ea97c9475b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TIV4B7J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FKwx76Igtb0U%2FZCswtSQSXtM%2BVdnDgymE6nP8mFiBjAIhAPk1sZzODg%2FdimiQb0yArlG226E6eCl8YAP9C8eRW5cIKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3OYl6TG0Ell2sYu0q3ANLSIQJG6ujSWGllf7J5N6zTtkE0yEPBPvgreZ5jeDa4IU1%2Fk%2FvnTbXrbAtcv%2Fr6P7vYoZgoR0Sk7h2PMMLKyy6x6Bk8dBpoCswYIGwHjD0L%2BmnhYmUktVEddWzyMrvDd6z2GxvRPepbaYG6lCTflOvkPDsuVQZ6ycDoYonb4jevj4N5mbgqSpjaNhyt4Vz5Yr20b%2BKF8KcYMIr635D1aGBVGnzMU8krXGeuC1HdGWn%2Fd9wkdMkhJN0Lt3y30ISSGkT2u59WU0YLl8%2FPs6tR0oza594W88ARWBJqdcWjutTfsNkKsOz61VTBJ4GXaB8B3vdXRPrrDtyc%2BA8CSHIoo6KzZFrJV4IHS4ASnDNu5nrDP6SMvziGyF4VS3bcLyCwcUjLj0%2FNo2%2B4m%2FANHmG219j4L71W6ddVPE5cxIXGQV44wuez1PNiLwqThy6PLUBpKhK%2BmqI3qcHt0nfn%2BLC1j4dZw4nwyz%2BtTO5iwGFNziB7jOkHu4reQ0b0A05rS91507QAnYhg4FZ%2FkRnbbbjUv6CqIe7zfX%2FU7aImTpGtAVqOy2a%2F%2B4aC3HQlKpLvkpF5c1cWXva5ORsiA4PLjp6YHgLM5pkePH4pVwqRaYlbAB97LC4F0HDXiPlJK1G4TCH0NnJBjqkAX6MrgEhmyeOVOqcmSbmy2TME76aEwYfURTbzzTsN6iN%2BXVYYprMuesQoUYt7GuvfBXIyGwNozKFWKdn3aLuM11yKvNG7sf61E075Qi75o9ZSoofzp2ReEWf%2FWFVWjq0Vahn2FD9cmX0RAUO2oA4f0I6W7uzQkLyiv0vzKJf9xNMoeBtWfEyv8I3O5C%2BOnxq6uZUDOiWZkQnCBXANfJBqDQ5Gy7g&X-Amz-Signature=1deeb6326673851168683422b4361ebb9871da35e5421cf0d32f7b2aa8c4abe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
