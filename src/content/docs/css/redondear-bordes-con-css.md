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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546ZP7AR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCMoDFUoIHcn8T4fDU9FB%2BRbOq2t9pMDU8Z8kJz%2BO2zkAIgXGzcfBAMrMoJVnAeY4Y0Vzibt7bURszK67MdlZZV8A0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAk5O5Mu0HAsk7BKACrcAyl39QvPOfGPANigy0TGwiv0wWJ2Bk%2BpXTUDhVrUZIZ%2F9otW5PNPoEjOKzFI6MSi30dqnDwRyXl1EzQcdzVSEBH8dZdgJNvvB3kRovOeSqzhZhMkLcMeElcioX3yD6hug9KvsAnOrwXkogMmv5ub85Ln3G7lqJOeKSV%2BhRnqyRRw0xOJ%2Bmn%2BPWkl7JrhL%2B5uYOIyIwS7rffaMgYTEsCnFfSBfZ0%2B0RCRR4h5NLepCj85WUKNzaqQWik7wvDbUXINIYagTYTwgga681PyfCNKWeHBYE1zqFDeVO6MXlgxrOLqchosmx930lUgLfpaXOVVvgcTUnoYmHfCTZESvjicVub9NK2bBcDEI32Xtcon7ZDOhHRdXWjnhMb5KLjhKzU%2FgXERyTGzoEHxyGekcZOTitYgR7RuXud5tuAknYqA8KzUTdUdhy9ES08qm5JOMhIGGMZh1b5keoXj%2BYzA9lbgnf6BMaWGn%2B8LtbvHVde7bOzEhXRJcKm5HvJnE1naNfamJvS6YqzlDV2JsBLmU5mcTpQpEYgCFNY3U%2BaKAH3LUAS6h2QZf6YW6GOyU%2Fm%2BikX5kwh%2FaAQUn7EdkHtRCBPESjmmiDEe4Xms1gY0NUAW7BL37B4pb3YXTh3G0OiqMK2uxMkGOqUBD%2FKHCWpL%2FT3O0HxQgBoBeHBpggZKCgQ44if33JnSMIceRcPqnyynWSE17mBYCRlsIOJ%2BM7aL75G1Ju56MWS63dKzJKpftHwwYeY3YIslvWQfGq1Lye1wY%2BKUnLL0czmeK89FAKzDph7Jk2jm1D412HEXqnAVbw837q1nthpYrNdcsHrx0IILOjZ7eBgIq%2F724R6P4cCzueYxcNwcTsxHRHJLyln3&X-Amz-Signature=cd834ad981af4f194f2d6de4688c67752b1583bf5b9f5e0fa2b85c8c2a47346c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546ZP7AR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCMoDFUoIHcn8T4fDU9FB%2BRbOq2t9pMDU8Z8kJz%2BO2zkAIgXGzcfBAMrMoJVnAeY4Y0Vzibt7bURszK67MdlZZV8A0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAk5O5Mu0HAsk7BKACrcAyl39QvPOfGPANigy0TGwiv0wWJ2Bk%2BpXTUDhVrUZIZ%2F9otW5PNPoEjOKzFI6MSi30dqnDwRyXl1EzQcdzVSEBH8dZdgJNvvB3kRovOeSqzhZhMkLcMeElcioX3yD6hug9KvsAnOrwXkogMmv5ub85Ln3G7lqJOeKSV%2BhRnqyRRw0xOJ%2Bmn%2BPWkl7JrhL%2B5uYOIyIwS7rffaMgYTEsCnFfSBfZ0%2B0RCRR4h5NLepCj85WUKNzaqQWik7wvDbUXINIYagTYTwgga681PyfCNKWeHBYE1zqFDeVO6MXlgxrOLqchosmx930lUgLfpaXOVVvgcTUnoYmHfCTZESvjicVub9NK2bBcDEI32Xtcon7ZDOhHRdXWjnhMb5KLjhKzU%2FgXERyTGzoEHxyGekcZOTitYgR7RuXud5tuAknYqA8KzUTdUdhy9ES08qm5JOMhIGGMZh1b5keoXj%2BYzA9lbgnf6BMaWGn%2B8LtbvHVde7bOzEhXRJcKm5HvJnE1naNfamJvS6YqzlDV2JsBLmU5mcTpQpEYgCFNY3U%2BaKAH3LUAS6h2QZf6YW6GOyU%2Fm%2BikX5kwh%2FaAQUn7EdkHtRCBPESjmmiDEe4Xms1gY0NUAW7BL37B4pb3YXTh3G0OiqMK2uxMkGOqUBD%2FKHCWpL%2FT3O0HxQgBoBeHBpggZKCgQ44if33JnSMIceRcPqnyynWSE17mBYCRlsIOJ%2BM7aL75G1Ju56MWS63dKzJKpftHwwYeY3YIslvWQfGq1Lye1wY%2BKUnLL0czmeK89FAKzDph7Jk2jm1D412HEXqnAVbw837q1nthpYrNdcsHrx0IILOjZ7eBgIq%2F724R6P4cCzueYxcNwcTsxHRHJLyln3&X-Amz-Signature=a59a943fc1a0610ce92827e17546ce95e3bf6dda494f3f1e9a1683d89d0b7d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
