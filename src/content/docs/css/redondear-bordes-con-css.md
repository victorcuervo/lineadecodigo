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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THJL5NEB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpT6is0Qhjl4k%2FOhBCnjmXf9auNOt0uLMLAQWiqP15MQIhAI7%2FysxOYXxdL3UNeoXibQuZOGtHG8TMkhK0mlpELhNiKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjO3IhvdugCJE%2BQlwq3ANDlVfcyija6EOOZBW1vvRf3%2B%2FPylABsoP0Yi72g0r4QkSGwN4fRrecf8PvoZhVyDJirhJOcKdHh64ZCt0CGCIoa4Xsbic1Nobv67Up4cqnhEL65QSdwIbrYky7xyShpmHT%2Bctk1LRKthNRClaW6lmxS1zVF84GtqKFanjaweP0PQdAgTph0myYR5K%2FQHnu3lRDTc7Md18%2BOpqkoqVDxaTwnmrfNFBgjbaHKPi1rm%2BLMaMiLtp0MU0I7y74nr6PxFJMI6gZ6PkS1LhcWLaBC93jeG%2BxSAcKAquZO6JzfwGsA7lxLbjY6Uc8CFVn%2Bp2WG%2Ba7o45TiTD7207Lwyl%2BSLlqeceTRyCMC%2BDxLKSMTLoEwV1bRL6Dxfq336n7R1kBFten0%2BRO6zbdw%2BnQSdYlF8O90t99PMWDfGRSlTJySpHk4M0JC1%2B8FLfbWbNmN6%2FxNu5LCmUTXFHsHeiLrFl0aZgRnnvVWD0Dk6pOtA96zaAhrB6kNIzjdyphi8UsYfTKx7tWAZnQaV78Xgt90OLCmjDawL1EjPkVXBebLigkyy8YkbnVHWOOCsjpt6jIaYCqbytlB0k0c6VN8mKYMDspNiQ9HfhXz9ujK34Vio2RotHl2TzsaAfUWOywX2ToATDTmdXJBjqkAROyIjC%2BQredb3CWx%2BVNCGR2if%2F1By9%2BcZpenQdbrBFgC7hlPeuHcZ75JgcEkKQ8e3lVA2gBh%2FIlj66Q3cJKBIoJlduCUF%2FYKo0AQIh9aowaoFRXxB9nIkiAA2ePXvZ86%2FVBFLS4ewVyHGKzwpxCOGZBxrTp5APVdy7BhsanIp7Te63SlXxoyapHhSI9v0Q8JgogdqieASVs7x9ifx5NuzuIjt2S&X-Amz-Signature=1d5cc1ddbb6a9f989bb7bd7fb214f81ec5c3c51805fee25d1c1e60525e0f013a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THJL5NEB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpT6is0Qhjl4k%2FOhBCnjmXf9auNOt0uLMLAQWiqP15MQIhAI7%2FysxOYXxdL3UNeoXibQuZOGtHG8TMkhK0mlpELhNiKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjO3IhvdugCJE%2BQlwq3ANDlVfcyija6EOOZBW1vvRf3%2B%2FPylABsoP0Yi72g0r4QkSGwN4fRrecf8PvoZhVyDJirhJOcKdHh64ZCt0CGCIoa4Xsbic1Nobv67Up4cqnhEL65QSdwIbrYky7xyShpmHT%2Bctk1LRKthNRClaW6lmxS1zVF84GtqKFanjaweP0PQdAgTph0myYR5K%2FQHnu3lRDTc7Md18%2BOpqkoqVDxaTwnmrfNFBgjbaHKPi1rm%2BLMaMiLtp0MU0I7y74nr6PxFJMI6gZ6PkS1LhcWLaBC93jeG%2BxSAcKAquZO6JzfwGsA7lxLbjY6Uc8CFVn%2Bp2WG%2Ba7o45TiTD7207Lwyl%2BSLlqeceTRyCMC%2BDxLKSMTLoEwV1bRL6Dxfq336n7R1kBFten0%2BRO6zbdw%2BnQSdYlF8O90t99PMWDfGRSlTJySpHk4M0JC1%2B8FLfbWbNmN6%2FxNu5LCmUTXFHsHeiLrFl0aZgRnnvVWD0Dk6pOtA96zaAhrB6kNIzjdyphi8UsYfTKx7tWAZnQaV78Xgt90OLCmjDawL1EjPkVXBebLigkyy8YkbnVHWOOCsjpt6jIaYCqbytlB0k0c6VN8mKYMDspNiQ9HfhXz9ujK34Vio2RotHl2TzsaAfUWOywX2ToATDTmdXJBjqkAROyIjC%2BQredb3CWx%2BVNCGR2if%2F1By9%2BcZpenQdbrBFgC7hlPeuHcZ75JgcEkKQ8e3lVA2gBh%2FIlj66Q3cJKBIoJlduCUF%2FYKo0AQIh9aowaoFRXxB9nIkiAA2ePXvZ86%2FVBFLS4ewVyHGKzwpxCOGZBxrTp5APVdy7BhsanIp7Te63SlXxoyapHhSI9v0Q8JgogdqieASVs7x9ifx5NuzuIjt2S&X-Amz-Signature=59a32c0ee17f60b5e0ed1edf4f46a8f0b9f19d17f60579ee113d840f7351fbc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
