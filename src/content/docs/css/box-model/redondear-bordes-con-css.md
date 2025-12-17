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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDXRS6H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeUr9oySNAjTDVjPUizZGfBoj%2B9dNQJn5zjVQDQ6tlKAIgEwBSXrgj5tQxS3JCx7I9kG4OrYz9B6WKbP%2BTxyXKZygqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA07hBS1O%2BKoxh2XfCrcAzm8nqZgVFrHfWvPrapO7wi3a0VjjyBpv9e3a0ol%2Fy4xVKQm7YkuDoMczh7OPWWq2lM8pDfBAns86tHsOa%2B7IMaFwN8iWwQRCKk1YqSm5eNMtWiviisVN7Ms%2BqThJMVI%2Fay4tHHypS%2BaM2KHRFWW8Yhus8T6lwBCJ0Sj8tQwqEIVN00enMy1nU74gqGVc9MH9QnY7fRCa9IybPEC1w3NCdaIatEC8Dtuvpiqqb2RE%2B%2FaGLC4k2xMUWx6FEtwRHJeIhR7B7xxv%2F4XZ8Uy%2FyfbV0tklw9dZJphz8kcXgQ5RH6kODroamNxSURFtgvndftFirlb2TEL7R7JHgYUdiwmk55bKt%2FuGaF24Px%2BDCGtUaang1zR99yrUYozG9Qztpa0SE5gsd%2FEuvjwKDpfW7MA%2BGJ9YHCg%2BeOnR8hd2%2BqdDFSKVmgD9HCJ0ACgxUIRU2Sp0A%2FgKqBurjd%2BVRiIj8AXxSYVmheiqtxEwFhwNsWfg%2B0YwcXYR6F5%2BRM43DWwtzSldzy5lD%2BN1V0%2FS%2FHrm9yhZFCVTRn5Hcj0Eh8QSWrm7l7mkKMECH1NM1lXxzLkij2DscC3HODZZuT8yXPMwiEIEAm3Ud4ogdJ1srvw8pWgrRW1h1up2uPujNGdy5jvMMifi8oGOqUBFKQUh2DPSPFvNIP%2F1OfqbcNxojgQSOMyPo4qMGbCycbnAkM%2FKNn6vq99zz0JkFL25et6h9p4nO0iQFvWfrRO2Im7avyHjPW9bAXh2Rw2M2JjKpQBcQgbxcnPsLLBVE9QOWxeD%2FocaMiOUSTaUWE90xwJ8JZSVfUyRFWbBXoRhqf95g79R20%2B0983vhtLNFY2EtHrhjXj2v%2FAlR8z1OdZvRbUK%2BlX&X-Amz-Signature=3907e3dee38499fe90db837cb0183bb2b7405a5e6ed9c420c5ec0cf1cdf4deb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDXRS6H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeUr9oySNAjTDVjPUizZGfBoj%2B9dNQJn5zjVQDQ6tlKAIgEwBSXrgj5tQxS3JCx7I9kG4OrYz9B6WKbP%2BTxyXKZygqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA07hBS1O%2BKoxh2XfCrcAzm8nqZgVFrHfWvPrapO7wi3a0VjjyBpv9e3a0ol%2Fy4xVKQm7YkuDoMczh7OPWWq2lM8pDfBAns86tHsOa%2B7IMaFwN8iWwQRCKk1YqSm5eNMtWiviisVN7Ms%2BqThJMVI%2Fay4tHHypS%2BaM2KHRFWW8Yhus8T6lwBCJ0Sj8tQwqEIVN00enMy1nU74gqGVc9MH9QnY7fRCa9IybPEC1w3NCdaIatEC8Dtuvpiqqb2RE%2B%2FaGLC4k2xMUWx6FEtwRHJeIhR7B7xxv%2F4XZ8Uy%2FyfbV0tklw9dZJphz8kcXgQ5RH6kODroamNxSURFtgvndftFirlb2TEL7R7JHgYUdiwmk55bKt%2FuGaF24Px%2BDCGtUaang1zR99yrUYozG9Qztpa0SE5gsd%2FEuvjwKDpfW7MA%2BGJ9YHCg%2BeOnR8hd2%2BqdDFSKVmgD9HCJ0ACgxUIRU2Sp0A%2FgKqBurjd%2BVRiIj8AXxSYVmheiqtxEwFhwNsWfg%2B0YwcXYR6F5%2BRM43DWwtzSldzy5lD%2BN1V0%2FS%2FHrm9yhZFCVTRn5Hcj0Eh8QSWrm7l7mkKMECH1NM1lXxzLkij2DscC3HODZZuT8yXPMwiEIEAm3Ud4ogdJ1srvw8pWgrRW1h1up2uPujNGdy5jvMMifi8oGOqUBFKQUh2DPSPFvNIP%2F1OfqbcNxojgQSOMyPo4qMGbCycbnAkM%2FKNn6vq99zz0JkFL25et6h9p4nO0iQFvWfrRO2Im7avyHjPW9bAXh2Rw2M2JjKpQBcQgbxcnPsLLBVE9QOWxeD%2FocaMiOUSTaUWE90xwJ8JZSVfUyRFWbBXoRhqf95g79R20%2B0983vhtLNFY2EtHrhjXj2v%2FAlR8z1OdZvRbUK%2BlX&X-Amz-Signature=ce97fbbc44de0868b96b7e99739d0ebc8e5538061bcea514955893742b064248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
