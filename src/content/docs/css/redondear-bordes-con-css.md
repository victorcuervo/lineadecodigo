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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U6HUCWY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBf70YlplaM8zGFPo9qY815dEOIHk8dbocpvDDNwhU6UAiEAvYx3zvruwVdF%2Bcbj6MP%2FbfuopyVUaUuGnpOGFp1M0eIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjivqnkxa4hTE9vKCrcA9pMf9YAAYbNJrs1aOrLcHplURNCLu5aU9GMlPVj%2BYTc9sf7866HohpPUUyFDOtYr7nDknvWc03Kq%2FTGZRbjpX%2BdurKa5r2DxA8Wdn0KIYBTnnukoOLRNpaTQy2qHo9p4nD6CuEFit9PZ9ZA%2BcYlJlPlrXIMzN7mT9xn1qXUlZfunQ1efyYR5gcyVvZNScMHVC7WV4maFOw88FJW9bnUrhSv0uu0U16pTtpvHY%2FLhL3oiBzHhV9NomfWH9KVSi2kMhurtKlduAxu1NWmFaPoY2%2FHreN2V86tre56BecbBun%2Fw6EVPrK9kRfOJ6MYASSdz4Ivgi41CgIJiC3jjjrpZ3mKKqMACoThbE9dPNw2jLgUrI7FsjNH94ZRxlP%2B0T5qaRh04H6iKaJpV0iC8vzORBy9rBf8%2BQrMrtOG7%2Bo2ZK9cd%2FYaB%2FHx95tR6FXcoTh%2B8OUS7W22Gk0FBEcA4d9ji7%2BQB%2FhHEIv2adVVETdrO%2F%2BS7R2H2jSboEeqqeD1UbutcLC8MzT3JZ35qkF0QuFG2Mo1l1jw2d3Et7VN5k6xsdDH2For%2FOh9OMkJ1rR37bEQR5N98yoKE9sXDnAPecF%2FNyEk7Wm8U3UcxOoWy4x7fChd%2BB9kjyj34AcohSQ1MPej1MkGOqUBJrUadoHDDJm3lAgM3yZBVbHs2%2BL9CntJQQyozCy%2BPAy5GQMBfZNY0tGCdQWF0wVG26uRAL%2Fb9dxNo0MjZNhf05FNjmh073p8wl%2BCenoLS8gjMHXaq%2F2wL959A4Duax%2BtMzMSF89Ym3DpR912hutnP4jbJE0qFe4iqEiU2DLjwcoRV1EIfBsY3XlTgRSRoD0JX3Ntg6fmA0VB%2B2ulGppE2OHhiQCf&X-Amz-Signature=ff1fccf02e2c7316eacbc8e6c1ae7ab01235c44379b610b1bd8d1e9bb27ddee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U6HUCWY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBf70YlplaM8zGFPo9qY815dEOIHk8dbocpvDDNwhU6UAiEAvYx3zvruwVdF%2Bcbj6MP%2FbfuopyVUaUuGnpOGFp1M0eIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjivqnkxa4hTE9vKCrcA9pMf9YAAYbNJrs1aOrLcHplURNCLu5aU9GMlPVj%2BYTc9sf7866HohpPUUyFDOtYr7nDknvWc03Kq%2FTGZRbjpX%2BdurKa5r2DxA8Wdn0KIYBTnnukoOLRNpaTQy2qHo9p4nD6CuEFit9PZ9ZA%2BcYlJlPlrXIMzN7mT9xn1qXUlZfunQ1efyYR5gcyVvZNScMHVC7WV4maFOw88FJW9bnUrhSv0uu0U16pTtpvHY%2FLhL3oiBzHhV9NomfWH9KVSi2kMhurtKlduAxu1NWmFaPoY2%2FHreN2V86tre56BecbBun%2Fw6EVPrK9kRfOJ6MYASSdz4Ivgi41CgIJiC3jjjrpZ3mKKqMACoThbE9dPNw2jLgUrI7FsjNH94ZRxlP%2B0T5qaRh04H6iKaJpV0iC8vzORBy9rBf8%2BQrMrtOG7%2Bo2ZK9cd%2FYaB%2FHx95tR6FXcoTh%2B8OUS7W22Gk0FBEcA4d9ji7%2BQB%2FhHEIv2adVVETdrO%2F%2BS7R2H2jSboEeqqeD1UbutcLC8MzT3JZ35qkF0QuFG2Mo1l1jw2d3Et7VN5k6xsdDH2For%2FOh9OMkJ1rR37bEQR5N98yoKE9sXDnAPecF%2FNyEk7Wm8U3UcxOoWy4x7fChd%2BB9kjyj34AcohSQ1MPej1MkGOqUBJrUadoHDDJm3lAgM3yZBVbHs2%2BL9CntJQQyozCy%2BPAy5GQMBfZNY0tGCdQWF0wVG26uRAL%2Fb9dxNo0MjZNhf05FNjmh073p8wl%2BCenoLS8gjMHXaq%2F2wL959A4Duax%2BtMzMSF89Ym3DpR912hutnP4jbJE0qFe4iqEiU2DLjwcoRV1EIfBsY3XlTgRSRoD0JX3Ntg6fmA0VB%2B2ulGppE2OHhiQCf&X-Amz-Signature=a3a18aab9fdd080765d7f35b5bf44b46a96a543937f8d275da8d404b79f7a670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
