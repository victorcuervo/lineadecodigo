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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UH2ADEN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC16S38OkAPKLhx4lSHZcww3cp6DpOKEIMkzqdk54W0yAIgRhlHg8ZsfDExmp8dsumEwvBylX%2FCOFeRkz2c17ZFjO4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIgzaN45y%2FRuOdlkZircAwsOdwtwCvxlPh%2BIdahkntdYhS8FWz3nRI3LB0%2BWKhgtfdJ%2BY%2F9P%2BvbqYmUw0QGfK%2Fvd85IIp5voQrPZBJNnwDxocS%2BWL7RzQEniwYpgYo5I3IN%2Bu1BtFVs9NuEP7MM5LXK1MOhTyV7iqJD8LmH5GD7N5pJ81PazFqXOc%2F01vi7TLDDiOD7Hczpvs2ZcGdMNOtv7LJL3J7UgHKa8vaYBct5rrgua%2BcpQmDbtw9upiIdtYNbyY9B2SMjr3dvHAI6ruKGlK4eKIPLBuZ5Z%2B3fQDe0KAJ6cUZB27GXSN3OuvotUhVg2qLeHJqak52mgr9OKTHNqAhunlUhcuFfkXs9uA5kAjbwMXtBWgTRqHDzQrl4fUT%2B3eWCbf9WhaI1ueZw9J%2BUCpGvrZHO2da9qFoAKgP4Sf52kAS6vZFDuZAGutMrMNWLFcI9antw4nuE4WAnWiTkLh82cEX8Z%2FGnOL4LNSc7R5WaqRlijJDk7NdTpZegbwiVGNj02Q77HGQ%2BH4uuRH4bzghUwtBP6SeqxGmmvlObwf3YZQO%2FjGRhDlq9vh8QpXMC%2FN0fzDIgVgldA2HSVasnZ0D33OpCNVpmMBbCDffq7Y%2B56BfxcqtTbBE5XCYaxPLsG%2FPDrzhUyh6jiMJuCicoGOqUBmjiug%2FhxEWFtZUN%2FFZkdgmFpmjHLDxhr9kDF5%2FD40%2F41ZUuJCdPsWwiTQl4bYG0lxa021AeG%2BoZx4nkwH%2F7OxiKB72tPz3RzykgHQzivwr09qGQwGlgNrA4CiBqsGyzMDJ06V9SGkpoV0RO5pczJ0F43OoxYVX%2BRDs8BZydNxyjKmc9MqHB1l2jrDUQH4C%2BJDBHZuOVSw%2B0XlPFDZGYbIKXkwiuP&X-Amz-Signature=995f0ecc62cda5fca55c5d08ae5c36fe8a78a9e32440f9a156ca72fd7b19c677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UH2ADEN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC16S38OkAPKLhx4lSHZcww3cp6DpOKEIMkzqdk54W0yAIgRhlHg8ZsfDExmp8dsumEwvBylX%2FCOFeRkz2c17ZFjO4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIgzaN45y%2FRuOdlkZircAwsOdwtwCvxlPh%2BIdahkntdYhS8FWz3nRI3LB0%2BWKhgtfdJ%2BY%2F9P%2BvbqYmUw0QGfK%2Fvd85IIp5voQrPZBJNnwDxocS%2BWL7RzQEniwYpgYo5I3IN%2Bu1BtFVs9NuEP7MM5LXK1MOhTyV7iqJD8LmH5GD7N5pJ81PazFqXOc%2F01vi7TLDDiOD7Hczpvs2ZcGdMNOtv7LJL3J7UgHKa8vaYBct5rrgua%2BcpQmDbtw9upiIdtYNbyY9B2SMjr3dvHAI6ruKGlK4eKIPLBuZ5Z%2B3fQDe0KAJ6cUZB27GXSN3OuvotUhVg2qLeHJqak52mgr9OKTHNqAhunlUhcuFfkXs9uA5kAjbwMXtBWgTRqHDzQrl4fUT%2B3eWCbf9WhaI1ueZw9J%2BUCpGvrZHO2da9qFoAKgP4Sf52kAS6vZFDuZAGutMrMNWLFcI9antw4nuE4WAnWiTkLh82cEX8Z%2FGnOL4LNSc7R5WaqRlijJDk7NdTpZegbwiVGNj02Q77HGQ%2BH4uuRH4bzghUwtBP6SeqxGmmvlObwf3YZQO%2FjGRhDlq9vh8QpXMC%2FN0fzDIgVgldA2HSVasnZ0D33OpCNVpmMBbCDffq7Y%2B56BfxcqtTbBE5XCYaxPLsG%2FPDrzhUyh6jiMJuCicoGOqUBmjiug%2FhxEWFtZUN%2FFZkdgmFpmjHLDxhr9kDF5%2FD40%2F41ZUuJCdPsWwiTQl4bYG0lxa021AeG%2BoZx4nkwH%2F7OxiKB72tPz3RzykgHQzivwr09qGQwGlgNrA4CiBqsGyzMDJ06V9SGkpoV0RO5pczJ0F43OoxYVX%2BRDs8BZydNxyjKmc9MqHB1l2jrDUQH4C%2BJDBHZuOVSw%2B0XlPFDZGYbIKXkwiuP&X-Amz-Signature=2acafdd3996d09bca78554d28eec509246e2b6eaceecaa8dc1ee1d1468f781ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
