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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EUVXYO3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUBTpR60F57EfY6e8N3Z%2FWP%2B63bwOdp2YUl1%2FjU30fVgIgVpVYmJDs2u396mXjPdMpGMGkIq7Yvmi4BO9xhHDCTaYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIFHu30E%2FZcy%2Fzo%2FhSrcA%2BVweI6kjldBZyI7cTOSRQdQQRqY7SbLTD0CGwFg0Ee2kePoZny9ntuwL%2Bvb4YtABqvlr%2BimnAtn2zW1iAsh2Z0j%2BmZs8I1%2FoeCWOmOsp9xiHrUyaq%2B2axXNDJQy7neT3O%2Bd1dyPn00wvKZ%2B%2BCqMl9mK7oYkkrBCHKDygtiniGDv0p1OJv2%2BlCvYFan3nIk52viThHOSrYhjX%2FRpI%2FxNA%2FBIWduTNgPVqLV5X7ReEfvTrVHxWbc6OoDTQJ7jrd50jQ12IHb6AavZWLS8EtCk0kUm51CQI7zJ%2BDzt1PiSDu99UESZHa6muqDnBbreenQhiUnjpf%2BgWT7Z3xefsHwlm%2FhRKZPOWoCRbxeNM1I6nRZtv7erG35icBcKe9rSnkb%2FjajJn26Ulby6FRZSGSuSIVCGPPGxLs4KEcpJwZ12wAR3ePNipTGayjN1QpNcNrkMOfwO9TjNtoW0reisJs1ITKvbip7IVKWQiaZEyQbcNdh8rRKZ9Op1bkYpe0oel%2F1mdO%2BtFx8KRcC55TB4fcoDpVUY4KNisLQ%2FsJwc4FbgkgHbva8anLGWISHV4qeTGrCRHrJKaUp%2Ffzup2F7O6FNIV8k2YQsfklibXhyY8sec43G25biaLUJBCGOh8s5xMOiqisoGOqUB3UKcEeXTC7SnVsFD5MX4fCrOtk0FOjsmt%2FwUg62pmdVFa0jp5lFbGpHsK%2B0Nko9eNTjm2SKmPVB4ELS0e39twLvQD4LGhibq8Cwc7F%2Fo9Q8vw8WRf41G1yilb6VGuoMieLKRcnLxc4wYlXwtadGp37DcsAbBBgjbSIB5uoXv4oiEvbeK%2BltxcXr09R5cMQx3GRjxA6mdNJHUF3miiLq18V8FAb1D&X-Amz-Signature=c85c99f8d4eed3ce082342192517fae58086eb7a866b9a33fb5048e19eba6d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EUVXYO3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUBTpR60F57EfY6e8N3Z%2FWP%2B63bwOdp2YUl1%2FjU30fVgIgVpVYmJDs2u396mXjPdMpGMGkIq7Yvmi4BO9xhHDCTaYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIFHu30E%2FZcy%2Fzo%2FhSrcA%2BVweI6kjldBZyI7cTOSRQdQQRqY7SbLTD0CGwFg0Ee2kePoZny9ntuwL%2Bvb4YtABqvlr%2BimnAtn2zW1iAsh2Z0j%2BmZs8I1%2FoeCWOmOsp9xiHrUyaq%2B2axXNDJQy7neT3O%2Bd1dyPn00wvKZ%2B%2BCqMl9mK7oYkkrBCHKDygtiniGDv0p1OJv2%2BlCvYFan3nIk52viThHOSrYhjX%2FRpI%2FxNA%2FBIWduTNgPVqLV5X7ReEfvTrVHxWbc6OoDTQJ7jrd50jQ12IHb6AavZWLS8EtCk0kUm51CQI7zJ%2BDzt1PiSDu99UESZHa6muqDnBbreenQhiUnjpf%2BgWT7Z3xefsHwlm%2FhRKZPOWoCRbxeNM1I6nRZtv7erG35icBcKe9rSnkb%2FjajJn26Ulby6FRZSGSuSIVCGPPGxLs4KEcpJwZ12wAR3ePNipTGayjN1QpNcNrkMOfwO9TjNtoW0reisJs1ITKvbip7IVKWQiaZEyQbcNdh8rRKZ9Op1bkYpe0oel%2F1mdO%2BtFx8KRcC55TB4fcoDpVUY4KNisLQ%2FsJwc4FbgkgHbva8anLGWISHV4qeTGrCRHrJKaUp%2Ffzup2F7O6FNIV8k2YQsfklibXhyY8sec43G25biaLUJBCGOh8s5xMOiqisoGOqUB3UKcEeXTC7SnVsFD5MX4fCrOtk0FOjsmt%2FwUg62pmdVFa0jp5lFbGpHsK%2B0Nko9eNTjm2SKmPVB4ELS0e39twLvQD4LGhibq8Cwc7F%2Fo9Q8vw8WRf41G1yilb6VGuoMieLKRcnLxc4wYlXwtadGp37DcsAbBBgjbSIB5uoXv4oiEvbeK%2BltxcXr09R5cMQx3GRjxA6mdNJHUF3miiLq18V8FAb1D&X-Amz-Signature=78f0374383d437c5737ee297c9f61cddb290ec4a26c87ae6e1af2fe699dc8be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
