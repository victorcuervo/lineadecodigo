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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHIPTIA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0Izms294Xq6SAlUxKNgdcMgEYk9AoAGbX%2Fxqo8iZlGAiBaBBLx8aHmB%2B%2BA81EzOXu86GahqO5EzILbAKbrtx10niqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwHPrCoxOREOvDxYgKtwDmxlJnjBPJXc%2FnGmV6yeqHTs9V%2FLm2ZfmJnByLWpR86ExyVjMs7n2rEdfOueaCtSFKEcsSZ2L0%2BNHQcANmZjPfLGIDCrcjfXuEgpOA9RTW6qG%2F2%2BaTfL37njnN9jJIorLFH8KSsBbqC46ek653aKSDru1I%2F9AP3D3XSDjmsa0MBeOT9%2ByszAi73KbBpfS02BKo91%2FXZBK4C%2FpU9qMJ50uDJQ2FWXStWr3bM653XVq94x%2BQ8AJ%2BX10TgOqg8b%2B%2FafO4VHJxvFLaeHRY36KWodd3JHZOGyS072ax7mzTHU%2BPeIxGVXdKsjOkwFqTNSxUUSV11RBMQPDn1GLa1qeuFpTKzk0UZ0sg8E2xTEbirQjsuM09ikUosmX0L%2F8eqFVVOKW3%2Bt2E88TXmIqYGJAdXbck4Aoq95w6nZYStYn7ytO9bzn57AYN9J6MJctgTjjsPuuXebwGP64CKSM332TmeQ5ryFIVcCoifk27S0sGyDP0uYC4XFIlTM1V4vkj7XDAk2lvkfTR1Al5RZtCveMp%2BahLHNGYGzemHEYDpXGH9RNThSg4gQt1UTmMuLZOqQhaXXwiDabFz3mJbb52IDEqk0FpuHI66xQU6TTicZKNu9Z9vQxRl0aTJFAN4x7r6ww6rPcyQY6pgEf5N3WWyAbyqJPafocEq7FczLIz19mDwfroUiO2gFYPT9G%2FOFAJP6zzYbSIQlO%2B5yZQkg8ImPe%2FPQHdgX0fikOfhACzA2lU8Rv%2BV17308NYN6TogFFsfBGvsTrt%2FE0mdwBQlR7hAuLLcmOjCYip73Zi0gyqvkE6jaGKjTGcJoa%2Bd3%2BeetIYqyOOGl5kFDlkGNSdtfIkqutanFH5hHHB4hUiy55jcEo&X-Amz-Signature=c7ca75c735c6e531c9259634f6ee9c9fdf019e9799d365822b80bc8d2682d60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHIPTIA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0Izms294Xq6SAlUxKNgdcMgEYk9AoAGbX%2Fxqo8iZlGAiBaBBLx8aHmB%2B%2BA81EzOXu86GahqO5EzILbAKbrtx10niqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwHPrCoxOREOvDxYgKtwDmxlJnjBPJXc%2FnGmV6yeqHTs9V%2FLm2ZfmJnByLWpR86ExyVjMs7n2rEdfOueaCtSFKEcsSZ2L0%2BNHQcANmZjPfLGIDCrcjfXuEgpOA9RTW6qG%2F2%2BaTfL37njnN9jJIorLFH8KSsBbqC46ek653aKSDru1I%2F9AP3D3XSDjmsa0MBeOT9%2ByszAi73KbBpfS02BKo91%2FXZBK4C%2FpU9qMJ50uDJQ2FWXStWr3bM653XVq94x%2BQ8AJ%2BX10TgOqg8b%2B%2FafO4VHJxvFLaeHRY36KWodd3JHZOGyS072ax7mzTHU%2BPeIxGVXdKsjOkwFqTNSxUUSV11RBMQPDn1GLa1qeuFpTKzk0UZ0sg8E2xTEbirQjsuM09ikUosmX0L%2F8eqFVVOKW3%2Bt2E88TXmIqYGJAdXbck4Aoq95w6nZYStYn7ytO9bzn57AYN9J6MJctgTjjsPuuXebwGP64CKSM332TmeQ5ryFIVcCoifk27S0sGyDP0uYC4XFIlTM1V4vkj7XDAk2lvkfTR1Al5RZtCveMp%2BahLHNGYGzemHEYDpXGH9RNThSg4gQt1UTmMuLZOqQhaXXwiDabFz3mJbb52IDEqk0FpuHI66xQU6TTicZKNu9Z9vQxRl0aTJFAN4x7r6ww6rPcyQY6pgEf5N3WWyAbyqJPafocEq7FczLIz19mDwfroUiO2gFYPT9G%2FOFAJP6zzYbSIQlO%2B5yZQkg8ImPe%2FPQHdgX0fikOfhACzA2lU8Rv%2BV17308NYN6TogFFsfBGvsTrt%2FE0mdwBQlR7hAuLLcmOjCYip73Zi0gyqvkE6jaGKjTGcJoa%2Bd3%2BeetIYqyOOGl5kFDlkGNSdtfIkqutanFH5hHHB4hUiy55jcEo&X-Amz-Signature=4cc14ed9bc0a8f4b20995abcb327491f834e0be74e221d8df00fcac858a19124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
