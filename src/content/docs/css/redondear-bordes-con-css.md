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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666QTICU5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBWJnXTI1UcuhkttZ0%2FhlrhRHWtSVR5pyW98Vj6Z2GLwIhAN2WySIjL4eOr%2FWVXTkq%2BaEP8BumzkMaddGlqFCDMipoKv8DCFUQABoMNjM3NDIzMTgzODA1Igy6UXVJqg4WjJg9TXEq3AON5d0zGKIH8grt%2BHPjsmh3nffIA3IWK5hb1BwhqPZUHL7MeATUhlmOzo3iFWM2lpGKq66UV2UVyqV7%2B44RRBuoZyBqQkldzDfzVSW%2BD6VdQAg%2FRyhHSYmhzd83vR1wmvTpQGX9tVhXFfJ77Ms03go2QM6tvfV1lt0Oiz5WpFEGTzj0RtK4M47HGTPhl2uJnRCq8U0VWQs%2BCBylC6S87Cy2MIsBbm3fRK0NxNgCLqGN2Sldr7PyK6kF9A9IwSMgo5SYoM%2F%2Fwtdp40sOLrYxNUxW9VOBC%2B6nrNJzGFaZsxVnVRluYhB%2BE0WicWlDkwEZr1Am90Cv4Dri9ycxP2%2FWXOMWjELfn%2BF83a5DfuqnvToQX3eMbgkFTtw7%2BhgDjqem0B0vRPSgILdWD7ZQd1jpU4%2FPGWxtXYyHZ9%2BaLK844O13McQeFA0qNDOl9iWxz2fCuRptIZwFuSG5ypAoCOrOcZfGmhXxXcAU4FYA3Jb52AWLpruHGV%2BAJFqhyN%2FLig4DhlK1LvjOYvLWxi0KbYSHNAxfvqhasp6CXg58YqiHDmzXWMvJ%2FJGVVGGglByvhSvCi9K1zt7RiHGcvgU4%2B1rCLd%2BtgSp%2B2Lij4L0BwU44mX9LqSkOWMbGbKsVa6dbcDCJr8nJBjqkAeABo372RmzEVWrxHoaIXVz9RPrNvudsM2PcQdE7lb7XlKYGmY78vYPdz4BYZ6nGsUnAReMXAEloCsqSH8bb634SMPhF2YNr0bdIane06wF47mP8bSs6V3eEjgesQfP9hp14BzvMT33S22xn%2B47PkD9b%2Fs8v2d%2BVBb7CwKpcTtvJH749jiXT%2BwmJ%2B%2Bp%2Fyuf%2B1JyQ%2BnoL9tbgQfcsRfxtkrvWtEnp&X-Amz-Signature=fcf79d58e4ae18ed1ca59b671223008733c59a2a1ac492065f0f375937ab27fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666QTICU5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBWJnXTI1UcuhkttZ0%2FhlrhRHWtSVR5pyW98Vj6Z2GLwIhAN2WySIjL4eOr%2FWVXTkq%2BaEP8BumzkMaddGlqFCDMipoKv8DCFUQABoMNjM3NDIzMTgzODA1Igy6UXVJqg4WjJg9TXEq3AON5d0zGKIH8grt%2BHPjsmh3nffIA3IWK5hb1BwhqPZUHL7MeATUhlmOzo3iFWM2lpGKq66UV2UVyqV7%2B44RRBuoZyBqQkldzDfzVSW%2BD6VdQAg%2FRyhHSYmhzd83vR1wmvTpQGX9tVhXFfJ77Ms03go2QM6tvfV1lt0Oiz5WpFEGTzj0RtK4M47HGTPhl2uJnRCq8U0VWQs%2BCBylC6S87Cy2MIsBbm3fRK0NxNgCLqGN2Sldr7PyK6kF9A9IwSMgo5SYoM%2F%2Fwtdp40sOLrYxNUxW9VOBC%2B6nrNJzGFaZsxVnVRluYhB%2BE0WicWlDkwEZr1Am90Cv4Dri9ycxP2%2FWXOMWjELfn%2BF83a5DfuqnvToQX3eMbgkFTtw7%2BhgDjqem0B0vRPSgILdWD7ZQd1jpU4%2FPGWxtXYyHZ9%2BaLK844O13McQeFA0qNDOl9iWxz2fCuRptIZwFuSG5ypAoCOrOcZfGmhXxXcAU4FYA3Jb52AWLpruHGV%2BAJFqhyN%2FLig4DhlK1LvjOYvLWxi0KbYSHNAxfvqhasp6CXg58YqiHDmzXWMvJ%2FJGVVGGglByvhSvCi9K1zt7RiHGcvgU4%2B1rCLd%2BtgSp%2B2Lij4L0BwU44mX9LqSkOWMbGbKsVa6dbcDCJr8nJBjqkAeABo372RmzEVWrxHoaIXVz9RPrNvudsM2PcQdE7lb7XlKYGmY78vYPdz4BYZ6nGsUnAReMXAEloCsqSH8bb634SMPhF2YNr0bdIane06wF47mP8bSs6V3eEjgesQfP9hp14BzvMT33S22xn%2B47PkD9b%2Fs8v2d%2BVBb7CwKpcTtvJH749jiXT%2BwmJ%2B%2Bp%2Fyuf%2B1JyQ%2BnoL9tbgQfcsRfxtkrvWtEnp&X-Amz-Signature=a99ff5c6c6d31e244f96533585d569a9db6f631565695b8d46f2421cc515f71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
