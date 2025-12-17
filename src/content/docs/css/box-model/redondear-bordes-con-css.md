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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTPGLZPF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoxPh6LXYIvtJ2zaO5oHVY%2BF5FLeZeSshqs0SWhNa4aAiBRFNJ22oEqWgejPofr5FOiuOooEVCAOSVKBnRnxdeT6Sr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMSDCmJz5BlNVTSmOYKtwDfZIIMCQSZgNZcM2menX2A5fvC6DyL%2BA5le%2B7%2B%2FAtP9A%2FWOHPOc3rirvUWC3ZVV%2Ff8pi7LjwKQQi%2FgWrhsAdGgj0EtBHHHzcrBJDSVbpggu6CoQxTeNyJbRV18LAYyHJN%2BuXcWfojGj%2B7FaxGnNfPgFxmYSZ2iHxiIehTVOAcmVb9am%2Fom9PEcHg%2FrWGA4zr5w5Tpcf%2B7%2FIC8CMnNPhFvEmwZco9%2BrdGijsgEAG7lOiFpiAxiAfxJgfWXNIH5Td2nd2cON6bRmlq0ue4k5cjca7%2Fggn6XVV0j5GLhtEYmaiDJAcPYJGsLy1b2HwuQMGkoJAO3pBZMP%2BPxodGBrO2DcclL0Cu1jzjvzKkyE4vRb9CyKuZtp2L1hhY0SgdFyIBFf9LHPGZ%2FIh4%2FUL83Q5BcUDnurFc6YZQ2idQeBOpvZ%2FVwx4My2FLd5qUV4vyX7UbxxygGqN6o9PuY1Wh%2BCsb57o%2Frrae82rjCeVlRPPrKWfykNGVGZaNmtMXvOHnyjYuLF7dhLWfEQHMwvticJ60wSOCHTdLQMIZ8js7bqb%2FjPjuzrDn5T8HycFfo30p4rQv6XPYgIB62%2FiLX3E4ap%2Fh40gN2YSOCDKe%2FlhzChVfrxSbI4wkzAtAvMC7ugpgw6eGKygY6pgHRtmL9F9eZXYWkMPLPhusiuTCeoaoEbSH9jamvpl0wrxr3cBQPXw5KPuq7f7NpQcmwvxZWzEXiNB81mWjV%2B2xeL27Hl9sLNiYoKIHtqVBneHhylLuEeCDTRnwZi0xqQt2aFHeWX5p%2FBdmS8brJ1dfiNsIS6WkjRIyL7Qx1M2ejM5wTTFKVEpgjgbxlRRPIjG3tQXujOuMW30jqCUmIkuaftiNYf1jp&X-Amz-Signature=b23d1849367036611b92da370a83444182a95398c9b44b243598f058dd097487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTPGLZPF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoxPh6LXYIvtJ2zaO5oHVY%2BF5FLeZeSshqs0SWhNa4aAiBRFNJ22oEqWgejPofr5FOiuOooEVCAOSVKBnRnxdeT6Sr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMSDCmJz5BlNVTSmOYKtwDfZIIMCQSZgNZcM2menX2A5fvC6DyL%2BA5le%2B7%2B%2FAtP9A%2FWOHPOc3rirvUWC3ZVV%2Ff8pi7LjwKQQi%2FgWrhsAdGgj0EtBHHHzcrBJDSVbpggu6CoQxTeNyJbRV18LAYyHJN%2BuXcWfojGj%2B7FaxGnNfPgFxmYSZ2iHxiIehTVOAcmVb9am%2Fom9PEcHg%2FrWGA4zr5w5Tpcf%2B7%2FIC8CMnNPhFvEmwZco9%2BrdGijsgEAG7lOiFpiAxiAfxJgfWXNIH5Td2nd2cON6bRmlq0ue4k5cjca7%2Fggn6XVV0j5GLhtEYmaiDJAcPYJGsLy1b2HwuQMGkoJAO3pBZMP%2BPxodGBrO2DcclL0Cu1jzjvzKkyE4vRb9CyKuZtp2L1hhY0SgdFyIBFf9LHPGZ%2FIh4%2FUL83Q5BcUDnurFc6YZQ2idQeBOpvZ%2FVwx4My2FLd5qUV4vyX7UbxxygGqN6o9PuY1Wh%2BCsb57o%2Frrae82rjCeVlRPPrKWfykNGVGZaNmtMXvOHnyjYuLF7dhLWfEQHMwvticJ60wSOCHTdLQMIZ8js7bqb%2FjPjuzrDn5T8HycFfo30p4rQv6XPYgIB62%2FiLX3E4ap%2Fh40gN2YSOCDKe%2FlhzChVfrxSbI4wkzAtAvMC7ugpgw6eGKygY6pgHRtmL9F9eZXYWkMPLPhusiuTCeoaoEbSH9jamvpl0wrxr3cBQPXw5KPuq7f7NpQcmwvxZWzEXiNB81mWjV%2B2xeL27Hl9sLNiYoKIHtqVBneHhylLuEeCDTRnwZi0xqQt2aFHeWX5p%2FBdmS8brJ1dfiNsIS6WkjRIyL7Qx1M2ejM5wTTFKVEpgjgbxlRRPIjG3tQXujOuMW30jqCUmIkuaftiNYf1jp&X-Amz-Signature=40e3bece341387511ae50b543ced8c983e9aa7bab345438736cc1d4f08c23353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
