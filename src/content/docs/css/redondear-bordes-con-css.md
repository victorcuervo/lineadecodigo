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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5ULMWZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIPlpUdTjjsGfhSl3YpvEe5I8Ecf0u3s0axoA55fI85QIhALe2O%2FwCOWLhFQAdRotNF3gXm%2FTT%2BynnOYNW%2FDb8haOAKv8DCEoQABoMNjM3NDIzMTgzODA1IgwCsC2w%2Bab8T8gZMtkq3AO5er%2Bbz9MVcpVqszVgBA2GVWAk2RkLFWepe%2F4e5TM%2Bv2U%2F4b%2FRg%2BImOCewdeyYdVAtKF1SWqkBMD9%2Bu9bMMhpBhhuNHzc3abcSuMimTsiCoTETbc6aQ16UKHNIsQJa14zXUxZoT0%2F7Y%2FHVA0FHkOqBmHRjsL4IdiJS1XO%2BD%2FHJj6YqxKgkpZnpgc8hJuu%2B2PYYl4giIJqxMKpCnpT30ng9Ii41iFn6Qx4QtYn36oKZGaAbjZaxK4mjJz9I%2Bwblwp4MpreCF8%2Fn4UBqc%2B9aoWnlAkv3yZn0VNY%2FkVG0OqlLoh1Mfxc8cqg0mGGwoWoQ4t9Tmf9D6PeGzlpVuKABPbwWwDXWdWmNfzDNYwbXdgaGBLu83OmtF73AFd9Q4Y0Q%2BY2p%2FpagoXRgTQs3TWM2r5OPX%2B5dQ%2F2qPlWXu35M%2FyuN7hCx%2FoLlnq3M7OF1JhUUo5s3Mq3Z6TwELiK14Ljq1DnOnounpdJgwMnv4IlejjuSYNHRKXmAmY%2BdLBow69VBiaftWFrAc2VBYohUDuerdD5P%2F8SRJi%2BKRti8rjGMYJRAUBbYiFfvDQbXLX8c7ZF%2FP0KvpJyTQSO6vXUSaPI5Rn5GzduIpPJBKMp4MgwGsOhhWaB%2FZLCzW8s3n%2BAJajCa%2BsbJBjqkAfrDqz8FiONhj%2Fu2ZGD988HN3JqCpNFMzuddyUtS%2Fqdttb1m1PpV0rLatPNqcRC2xeeNLwGD2CnwO3p31wYJpCKyEhDr9iQCDQsHjsZMf5y24ah%2BFn%2F%2Fs2EsH2P8xlvhmhTDVeawPgKYDrOzQpwrpTBrlq6kN3%2B3f8qa%2Fkk5iGRURstKCB0Gzx%2FNKKinO%2F6PJdRp0S7x6vx5%2Fb65SMEJr7M0c6bz&X-Amz-Signature=550f64f91b21afeda2264ecba2e403d50b41ec9445edf221849fe999e4bcc630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5ULMWZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIPlpUdTjjsGfhSl3YpvEe5I8Ecf0u3s0axoA55fI85QIhALe2O%2FwCOWLhFQAdRotNF3gXm%2FTT%2BynnOYNW%2FDb8haOAKv8DCEoQABoMNjM3NDIzMTgzODA1IgwCsC2w%2Bab8T8gZMtkq3AO5er%2Bbz9MVcpVqszVgBA2GVWAk2RkLFWepe%2F4e5TM%2Bv2U%2F4b%2FRg%2BImOCewdeyYdVAtKF1SWqkBMD9%2Bu9bMMhpBhhuNHzc3abcSuMimTsiCoTETbc6aQ16UKHNIsQJa14zXUxZoT0%2F7Y%2FHVA0FHkOqBmHRjsL4IdiJS1XO%2BD%2FHJj6YqxKgkpZnpgc8hJuu%2B2PYYl4giIJqxMKpCnpT30ng9Ii41iFn6Qx4QtYn36oKZGaAbjZaxK4mjJz9I%2Bwblwp4MpreCF8%2Fn4UBqc%2B9aoWnlAkv3yZn0VNY%2FkVG0OqlLoh1Mfxc8cqg0mGGwoWoQ4t9Tmf9D6PeGzlpVuKABPbwWwDXWdWmNfzDNYwbXdgaGBLu83OmtF73AFd9Q4Y0Q%2BY2p%2FpagoXRgTQs3TWM2r5OPX%2B5dQ%2F2qPlWXu35M%2FyuN7hCx%2FoLlnq3M7OF1JhUUo5s3Mq3Z6TwELiK14Ljq1DnOnounpdJgwMnv4IlejjuSYNHRKXmAmY%2BdLBow69VBiaftWFrAc2VBYohUDuerdD5P%2F8SRJi%2BKRti8rjGMYJRAUBbYiFfvDQbXLX8c7ZF%2FP0KvpJyTQSO6vXUSaPI5Rn5GzduIpPJBKMp4MgwGsOhhWaB%2FZLCzW8s3n%2BAJajCa%2BsbJBjqkAfrDqz8FiONhj%2Fu2ZGD988HN3JqCpNFMzuddyUtS%2Fqdttb1m1PpV0rLatPNqcRC2xeeNLwGD2CnwO3p31wYJpCKyEhDr9iQCDQsHjsZMf5y24ah%2BFn%2F%2Fs2EsH2P8xlvhmhTDVeawPgKYDrOzQpwrpTBrlq6kN3%2B3f8qa%2Fkk5iGRURstKCB0Gzx%2FNKKinO%2F6PJdRp0S7x6vx5%2Fb65SMEJr7M0c6bz&X-Amz-Signature=dac5418d46a160b341b4eeb3ebfcaffbfd41ad368d238194792d74eb693ef727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
