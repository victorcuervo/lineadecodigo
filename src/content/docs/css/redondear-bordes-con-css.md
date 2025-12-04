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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IBS7673%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCooILRFDC8AvYezpzp8MdCT6%2B%2Fb5tlraUH5ptdlgVAiAIgE7leCv16TWe6y6fdFjfslcM1UcqVrjFwGkbkyIw%2BOtMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOVkuUWdoWHMd%2BQ%2BFSrcA1sHm8mpZ9Ue5UsoNo1JupdfjZ8On3gQOdbpLdYoGcujwGt6PIoIzQUFpXBLZt4Rml1seyUWhi1b2jlEvd0cSl8%2BLVHmg%2BjWc76b2NobgzlQ1nMUUcKVK%2F%2BIwyxvkpxChwcTgubpDBd7oMG5OnUFpCJE6W28EZHcsayraXJYXmSsdhH51DRIbHutpW9lFstbi15FK8CuaGgsCuj29HqlVkyN48C5P6T6yvpi25B%2Bu%2FopLy%2BOhpMPCRnhmlfj%2B%2FTbirVmP1SwX6B5gThTbHDmLUachBUpYaOnJltHUUE9ouGQzk10CVBGVcFsVM%2ByGIz%2FyTGHdVqxqmGdDFyB3f31EX5pMh%2Bwbw5qpph7wHjyfAW1ebmWbXoSDx9nbLUlM7BpAjQ5FR%2Fdgy%2B2DdUv9mmJE%2FUTLC0AdjSLP7PolI24Sh%2BYziUiiSXFinqEp%2BA8G4ssDlD6Yh1BwVu36%2F4BNBLBdN9e2u7RuKvqhsGLG7Adpmvs3XttjzBpFxUHmKyGAqhaP%2FB2W4WXmhLJ788%2BSkYmJ5%2FLGbpm1vF7b%2BGGVbgNcECWArMz97ALmor1b%2BqM8uHhm2Cj3dUUZifHUQBSDdO3T2j5xzrWunUeKt3i0nb2Dga2%2BKDRPLnI4QGkDolGMJeGxckGOqUB8Yb8WHFjwmdNdT%2ByZ3HNCeefwGzTAj34Ysw%2BkVHQcj9T7Cf7x5k2CqJ7coKnEfK7CO4Uwn0UaJNoP5QbxmEC03y%2FLTVoLGd646fIFaAXDhswM7%2Fdl%2Fm8anO0WrW5mijpWlSLdoFBOfLKbyGnIDNEepd05UK8NhQhjsj4xKYpPqaoapqWF8yaRvX550%2F7L5V%2BD9ETl759L9VMxmo80ccJCw%2Fk1v5K&X-Amz-Signature=7577eb896c5589eacfdfacd40dbeebb3d81b2371114c94418f018f7fa0ad4e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IBS7673%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCooILRFDC8AvYezpzp8MdCT6%2B%2Fb5tlraUH5ptdlgVAiAIgE7leCv16TWe6y6fdFjfslcM1UcqVrjFwGkbkyIw%2BOtMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOVkuUWdoWHMd%2BQ%2BFSrcA1sHm8mpZ9Ue5UsoNo1JupdfjZ8On3gQOdbpLdYoGcujwGt6PIoIzQUFpXBLZt4Rml1seyUWhi1b2jlEvd0cSl8%2BLVHmg%2BjWc76b2NobgzlQ1nMUUcKVK%2F%2BIwyxvkpxChwcTgubpDBd7oMG5OnUFpCJE6W28EZHcsayraXJYXmSsdhH51DRIbHutpW9lFstbi15FK8CuaGgsCuj29HqlVkyN48C5P6T6yvpi25B%2Bu%2FopLy%2BOhpMPCRnhmlfj%2B%2FTbirVmP1SwX6B5gThTbHDmLUachBUpYaOnJltHUUE9ouGQzk10CVBGVcFsVM%2ByGIz%2FyTGHdVqxqmGdDFyB3f31EX5pMh%2Bwbw5qpph7wHjyfAW1ebmWbXoSDx9nbLUlM7BpAjQ5FR%2Fdgy%2B2DdUv9mmJE%2FUTLC0AdjSLP7PolI24Sh%2BYziUiiSXFinqEp%2BA8G4ssDlD6Yh1BwVu36%2F4BNBLBdN9e2u7RuKvqhsGLG7Adpmvs3XttjzBpFxUHmKyGAqhaP%2FB2W4WXmhLJ788%2BSkYmJ5%2FLGbpm1vF7b%2BGGVbgNcECWArMz97ALmor1b%2BqM8uHhm2Cj3dUUZifHUQBSDdO3T2j5xzrWunUeKt3i0nb2Dga2%2BKDRPLnI4QGkDolGMJeGxckGOqUB8Yb8WHFjwmdNdT%2ByZ3HNCeefwGzTAj34Ysw%2BkVHQcj9T7Cf7x5k2CqJ7coKnEfK7CO4Uwn0UaJNoP5QbxmEC03y%2FLTVoLGd646fIFaAXDhswM7%2Fdl%2Fm8anO0WrW5mijpWlSLdoFBOfLKbyGnIDNEepd05UK8NhQhjsj4xKYpPqaoapqWF8yaRvX550%2F7L5V%2BD9ETl759L9VMxmo80ccJCw%2Fk1v5K&X-Amz-Signature=74c9ee787b968ee506991fc08b4a8496f9b21970ed247af29ac273ac0d000050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
