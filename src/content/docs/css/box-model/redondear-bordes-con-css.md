---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOEBWY3V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5sjWjP%2Fasw1QQ2GziCvro%2BWq0NUlBl3Bq2WnCH5G%2B%2FwIgbFuAzN83QyIqUJwMGhhOQlwoqDyPgWxecZZG8CyU8uMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHPej20DuYMJ%2BfVoYyrcA5QHNrDozCvDsAWZlt8FGsaoL%2BrHMYibqHVDUFAKy7h9TVwRiZamHPpZwHTR2Ghgh1BI9Pq9qgoamacE%2BK%2FYFmcF5x9auxNaSwmk7wLwz%2BaanNdZczq7FDctHg7D2tMBTPIJU2WIMyvbOeDGZQHEN8aj9Tu3vpvJoyJ7xRmi2jY%2FjWjae%2FSTHd%2FF1O%2FnkBYWQR5mdJfFumTRzhrx5LjGFNsNs11HtmxN1CIExttDgBrb%2Fe2Mq5MsaveobjZBvHnMOuttU2esr1vGDvsxZxd7zn6zo5GJJIIoZxq%2BlQgrEgcT5fiPFQeb6xPuYpmRjj5wBHxDkM9DHeHFq1snxUSt6M%2BfAYRh5t6GyJVoe9To6DpSxfjUuc%2F%2Bju%2BIPZmKRcgafnhaqhiiffD0exlS%2BoDEl1fTa4aQXYBzm74vBbEoVMmuC5eLH%2BPlHAijJINl5UMoEvpcbHmn69CZMfsiy%2BRKH%2FdksoPi3hRcOAWffLQqImL761DbUpKNEPsmbnjefgfSF9dL3qjV%2FDzncaSNvyQn4syRZDbNQxCnwAtSKVnwcOYznDaWBNxAr0XJnAz5SKYHSNxbxcGc0uwkVn9NVL%2BJ4c1vkyvPCnTPq73XVx4tRYoXxxXgi%2Bwta8NZzK9AMODpiMoGOqUBzn4NplDMOJkL5ibVxJ5iRheY0uybb3WNqBfNTyn7PAk3VUdZl5eP5szJItO9orXhSA5oaq60KKPA8xJlBhRqfWryzNHNM86oj%2BT1BElcnD7UBO6WOzSybB71tvuavfSDfJJkqw9VZ4LqKfoLdtiUkSWIDLLIR6tqIZoy6vVPRZW4wuwZjo4QIRziS%2BTEAQAP9E2mdhM%2BBp5dOODwo4hgmBM4lNFA&X-Amz-Signature=8a514a23ade562e261565560b370fdcb9d23ccd72fed17245f52c7b205defa1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOEBWY3V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5sjWjP%2Fasw1QQ2GziCvro%2BWq0NUlBl3Bq2WnCH5G%2B%2FwIgbFuAzN83QyIqUJwMGhhOQlwoqDyPgWxecZZG8CyU8uMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHPej20DuYMJ%2BfVoYyrcA5QHNrDozCvDsAWZlt8FGsaoL%2BrHMYibqHVDUFAKy7h9TVwRiZamHPpZwHTR2Ghgh1BI9Pq9qgoamacE%2BK%2FYFmcF5x9auxNaSwmk7wLwz%2BaanNdZczq7FDctHg7D2tMBTPIJU2WIMyvbOeDGZQHEN8aj9Tu3vpvJoyJ7xRmi2jY%2FjWjae%2FSTHd%2FF1O%2FnkBYWQR5mdJfFumTRzhrx5LjGFNsNs11HtmxN1CIExttDgBrb%2Fe2Mq5MsaveobjZBvHnMOuttU2esr1vGDvsxZxd7zn6zo5GJJIIoZxq%2BlQgrEgcT5fiPFQeb6xPuYpmRjj5wBHxDkM9DHeHFq1snxUSt6M%2BfAYRh5t6GyJVoe9To6DpSxfjUuc%2F%2Bju%2BIPZmKRcgafnhaqhiiffD0exlS%2BoDEl1fTa4aQXYBzm74vBbEoVMmuC5eLH%2BPlHAijJINl5UMoEvpcbHmn69CZMfsiy%2BRKH%2FdksoPi3hRcOAWffLQqImL761DbUpKNEPsmbnjefgfSF9dL3qjV%2FDzncaSNvyQn4syRZDbNQxCnwAtSKVnwcOYznDaWBNxAr0XJnAz5SKYHSNxbxcGc0uwkVn9NVL%2BJ4c1vkyvPCnTPq73XVx4tRYoXxxXgi%2Bwta8NZzK9AMODpiMoGOqUBzn4NplDMOJkL5ibVxJ5iRheY0uybb3WNqBfNTyn7PAk3VUdZl5eP5szJItO9orXhSA5oaq60KKPA8xJlBhRqfWryzNHNM86oj%2BT1BElcnD7UBO6WOzSybB71tvuavfSDfJJkqw9VZ4LqKfoLdtiUkSWIDLLIR6tqIZoy6vVPRZW4wuwZjo4QIRziS%2BTEAQAP9E2mdhM%2BBp5dOODwo4hgmBM4lNFA&X-Amz-Signature=41d840a2e71f9a92209012e05ac28008764cd090e2db0c7548490a1e2a7628b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
