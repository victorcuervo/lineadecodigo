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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWV4BDGL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu772Y3z3%2FsoOVgX20VCKSa932Ho9EsKf75d4jXrKZGgIgbrqlGup%2FWCzducYE3cetco1ffJV0CxDXtg8%2BEoBDSyIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdO172nlN1YQOCZhSrcA%2FktakDShDf1vxXN8EuHseuWdWGJG52W4ChvMkMDRxGx0ZJqZY3YSQYh76NLvnF2o7olws2T0CP4UajyRd0f6D84fUHRopcEshTJT42tytgXhJnzJIGlmGdSCJ4YQtXJNyoK7K4goYHiBxF814VdG8483QN95Bu5V7nhJp4b7%2F3vEJHDVBVZc9blc3Fsvu%2FkO2Woc4H3%2Fmp4DrfXS59ouutvQitFHEIFz%2BAfPc8Pv%2BEy1MBkdmbx6wR3auKsYVvI1HR4n3wbp%2Bl0isO93mrAteVyfVArZwf8hqHOnUA5UJYLXPmAnSBjR9BycopH5ddu68HTpsSjx1bIxzKPqwX1rw%2BwnSM25qKkfHErKx1EJX3Q8nwDjKDy09Wp5mkskOim4wnR7KaZzqxLqZNV2o6MQ%2Fuh%2FMvWaAqu03APF3jfA3tUIsEkGir32TA9UE5HlflTrMvq%2FhuPz3vlVF7MnYMkNt0AWxrdmOzsM0gEpr4E9oJ2%2FNKQJwSKir3peT5MTyUAzDQX986bKWlVzWTKZuFLVtNf2iwa7mFO%2BzqeaIZ%2BpTTNxj3qZebFFhsEluMQBLtM8wKpfW9tMyAeqzMF76dC6i6PsxjSoS0puWDGQ5acawLtisrijedltQGO7a7BMPWtjMoGOqUB4Bl5rZXhMYsFs%2Bs1ad1wCmK%2BCX1diZgTQJsQBKka9zaYd0Kn7nXZMza0G2Dw2OkGKKLlh1ViXqwX5HghQSJlcvGyK4FwiNH3VPaBgZnT%2BUO4lemXqfnC4HXMZ%2FAfLH0%2BK2nzTEdRnhPaWJAFOGNV9rkYhTcTxr5Bu8zd0o%2FAdd3oqHAvWM8j2bFOPP%2Ff3HMSiCK25Lv1ZIbKH8tu8QlLdn8Bs%2FWL&X-Amz-Signature=5b0a3d67d98cca26ae36fe1306221f8a55a8a33ad8c3edb75aa1aea1f9f52447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWV4BDGL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu772Y3z3%2FsoOVgX20VCKSa932Ho9EsKf75d4jXrKZGgIgbrqlGup%2FWCzducYE3cetco1ffJV0CxDXtg8%2BEoBDSyIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdO172nlN1YQOCZhSrcA%2FktakDShDf1vxXN8EuHseuWdWGJG52W4ChvMkMDRxGx0ZJqZY3YSQYh76NLvnF2o7olws2T0CP4UajyRd0f6D84fUHRopcEshTJT42tytgXhJnzJIGlmGdSCJ4YQtXJNyoK7K4goYHiBxF814VdG8483QN95Bu5V7nhJp4b7%2F3vEJHDVBVZc9blc3Fsvu%2FkO2Woc4H3%2Fmp4DrfXS59ouutvQitFHEIFz%2BAfPc8Pv%2BEy1MBkdmbx6wR3auKsYVvI1HR4n3wbp%2Bl0isO93mrAteVyfVArZwf8hqHOnUA5UJYLXPmAnSBjR9BycopH5ddu68HTpsSjx1bIxzKPqwX1rw%2BwnSM25qKkfHErKx1EJX3Q8nwDjKDy09Wp5mkskOim4wnR7KaZzqxLqZNV2o6MQ%2Fuh%2FMvWaAqu03APF3jfA3tUIsEkGir32TA9UE5HlflTrMvq%2FhuPz3vlVF7MnYMkNt0AWxrdmOzsM0gEpr4E9oJ2%2FNKQJwSKir3peT5MTyUAzDQX986bKWlVzWTKZuFLVtNf2iwa7mFO%2BzqeaIZ%2BpTTNxj3qZebFFhsEluMQBLtM8wKpfW9tMyAeqzMF76dC6i6PsxjSoS0puWDGQ5acawLtisrijedltQGO7a7BMPWtjMoGOqUB4Bl5rZXhMYsFs%2Bs1ad1wCmK%2BCX1diZgTQJsQBKka9zaYd0Kn7nXZMza0G2Dw2OkGKKLlh1ViXqwX5HghQSJlcvGyK4FwiNH3VPaBgZnT%2BUO4lemXqfnC4HXMZ%2FAfLH0%2BK2nzTEdRnhPaWJAFOGNV9rkYhTcTxr5Bu8zd0o%2FAdd3oqHAvWM8j2bFOPP%2Ff3HMSiCK25Lv1ZIbKH8tu8QlLdn8Bs%2FWL&X-Amz-Signature=41e86dc7782691af807bbe8625967a72caa6ba68dea738769c86d41303799e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
