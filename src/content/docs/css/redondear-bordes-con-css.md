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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMUVMAS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDH01HR61%2BcjM3BgMQF5zqa39RkytN6z4s5D61E%2FyKZ4gIgaYJ9d92fiW9BnrQmak%2BAp3a%2F%2BZ%2FJO2%2Fl4zIiyms2CIoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCAzVC36WqIllVGzxCrcA5gdwN8W7OzzLxrEwoO4I7%2BhlRn8ypYrozQrQH7o5eYiebxIrY8SUR%2B61wic%2FaG%2BWtmQTKvY3mx4BiLxYAHlO5xav5HB8AxP0t60N7jNxOhVMSD22QPcRg4ao5%2F77eqogbD%2BnA%2F1G9izG3PAXI%2F6eBnf9CRDKuoDNAk51pTDhzrCJBUl0F6cEzrpHevVPaZYWibQfmIU%2FqaKLnm1nliOXI6oMyNZzsCgPsZCrko2ts%2FMJPSc%2FQAi3sbXshENrPJ1QJFszgypFE18IQLFivNdWN2KuBBRIiL3pFQ%2FasGwKZxUZyjMrfOicMj3ZfLhVEPewHaG3xlzGZ9AbxN%2F2o7gKdIQniXEilaEpHTCs%2BFo8umqV%2FmSMG5kdiykOw0eZMZjVC%2FIYRaH3Qq2xf0NNeEF2tWmfgiBe99E9g7PIILvXoht4owznOhb1LHlVNSsQft4Irq3kpVWl32l2Z%2F5um8bBcQNoVBSWxm4A6BU5gsSWwsxqyE2ly7izKy%2F8GTNC0CiqJgiqH1dPOmMEFc71EJUsIZIQ%2FP8EWnK%2FEu%2BbNwAD4fvgUnSqmUYaJmb8eS21kD%2FMo7G9kfUJtQlvTPKToPZp24b2s95wWjwmsaDss6G9Vygzvdc2vBWE%2FHu2FyVMMKixskGOqUBQWLH5zjUuIeEL30bYPiPTC62unBKX1xAQ6Ophio18Ohfiy3WPMH6u%2FaIsnr6HSWE6ezpltpwrM5u05q7oyExfcU3e3wp7GNpWwCOIEDHzUztq1%2B3YTK3m8EAp6RZnIdp7oayJsJ%2FOv0fGTwA9xxZeeLHw6kjJdMEkymE7ERJcpZnk8ZCNTb5ydp%2BTre0d8TIoTSHmLF7v8AWj7%2Bb8cZ48Jrpy%2Fu6&X-Amz-Signature=d781a8b288dd4302d7846f6829f5080b9e5b3a7749c79f2f20338258b27d52a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMUVMAS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDH01HR61%2BcjM3BgMQF5zqa39RkytN6z4s5D61E%2FyKZ4gIgaYJ9d92fiW9BnrQmak%2BAp3a%2F%2BZ%2FJO2%2Fl4zIiyms2CIoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCAzVC36WqIllVGzxCrcA5gdwN8W7OzzLxrEwoO4I7%2BhlRn8ypYrozQrQH7o5eYiebxIrY8SUR%2B61wic%2FaG%2BWtmQTKvY3mx4BiLxYAHlO5xav5HB8AxP0t60N7jNxOhVMSD22QPcRg4ao5%2F77eqogbD%2BnA%2F1G9izG3PAXI%2F6eBnf9CRDKuoDNAk51pTDhzrCJBUl0F6cEzrpHevVPaZYWibQfmIU%2FqaKLnm1nliOXI6oMyNZzsCgPsZCrko2ts%2FMJPSc%2FQAi3sbXshENrPJ1QJFszgypFE18IQLFivNdWN2KuBBRIiL3pFQ%2FasGwKZxUZyjMrfOicMj3ZfLhVEPewHaG3xlzGZ9AbxN%2F2o7gKdIQniXEilaEpHTCs%2BFo8umqV%2FmSMG5kdiykOw0eZMZjVC%2FIYRaH3Qq2xf0NNeEF2tWmfgiBe99E9g7PIILvXoht4owznOhb1LHlVNSsQft4Irq3kpVWl32l2Z%2F5um8bBcQNoVBSWxm4A6BU5gsSWwsxqyE2ly7izKy%2F8GTNC0CiqJgiqH1dPOmMEFc71EJUsIZIQ%2FP8EWnK%2FEu%2BbNwAD4fvgUnSqmUYaJmb8eS21kD%2FMo7G9kfUJtQlvTPKToPZp24b2s95wWjwmsaDss6G9Vygzvdc2vBWE%2FHu2FyVMMKixskGOqUBQWLH5zjUuIeEL30bYPiPTC62unBKX1xAQ6Ophio18Ohfiy3WPMH6u%2FaIsnr6HSWE6ezpltpwrM5u05q7oyExfcU3e3wp7GNpWwCOIEDHzUztq1%2B3YTK3m8EAp6RZnIdp7oayJsJ%2FOv0fGTwA9xxZeeLHw6kjJdMEkymE7ERJcpZnk8ZCNTb5ydp%2BTre0d8TIoTSHmLF7v8AWj7%2Bb8cZ48Jrpy%2Fu6&X-Amz-Signature=694973405ad09da09072f6f1e4018d7cb592e4fac08be42679af7168a181ff71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
