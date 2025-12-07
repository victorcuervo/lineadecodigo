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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHDRXZI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEDVJkSiDpP7kCwmgn0a4WmOnn3ZVOqYIQP5%2FxFp5xOAiEA%2BJKSK7SDlK9YPXAol4%2FYyVIZBd56cWmv1gzD%2FJmbM8cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO40%2BkGih2ELAP%2BwyyrcAzjotlJmmAPlVVD3I8zlL4o3z2dNWjhVakeM4dQkxY%2BIcg0sgegtvmc3HdLpOfwx802bhN4ztTYLCpCkWhiLSCbtsyCyb6%2F%2B%2BkY3dy1q100e4WB65XeXwAA%2BrYwTEx4bqU4AMe7ZPU6a2kg7RLVDREtoH0YfQVcn4wl1XNWtwxbwnRBw%2FdM6H%2F9d3O3KWS4zdb%2F1eiZxIzlE5XVpmvbepS4QtFeMLT1GhFgTDAzlstFUPm5mkEnLwMo0BZxmYHXJZtr0AKs4LeSjo43nEAoCnTs%2FV4X1R4F4xl6opkNkxWnVK5%2B3SJfI3uXV6umu18GsfcgZiuPjSYsEp3YwZg2gSRWerxFABixcdcnp48aE37Cp%2B1qhBcAsQ23RBboC0DKxbujk6Kzzg7a%2Bay1SuA%2BrH2pdhTK9FlxT8L8BATLnHYPRavEzOpTnVjdn6DZ%2B730C8MmDKjBBA7WWIA7M54pYwTE%2FuYVwls9CrgSYNU25AbekgIdn04gh%2BG7BnBu2Jn7on7JBBvCj1QYGJrdqdurguxAzvkyf7AymfRA7d7skQAicJZ0NX4GCt09rI8k1FF3FxHUAXR2uHTSd7T1YWve4tjQdGPXC8D59iJmxVqFGagIx2%2FDBN9Luo9KQJjtyMKP90skGOqUBVP8iIpuS60QqCuQYTLxJW1SNyo8uUDrghrG4rGG5yq6BRsQ%2BiOSuXuceLr7iAMWL%2F26epOIljfF8xXxd5ajhFrznVbYlHhRtU6gJz7SG0MvSFUHBqOwaTTPF3Di6SeNujjWwzOCEYsIjasbJL741Muk%2BV%2FouJh%2BuWUVR%2BQkOdkN%2Fyj9DI4xgQbbswLjOqJCuwVuBHaPhcNifn0Aw0FXFrPl74RDD&X-Amz-Signature=5ef6c713b3230e923d2698e2968f88ce31c16b13eabb28c34132cde3374a9a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHDRXZI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEDVJkSiDpP7kCwmgn0a4WmOnn3ZVOqYIQP5%2FxFp5xOAiEA%2BJKSK7SDlK9YPXAol4%2FYyVIZBd56cWmv1gzD%2FJmbM8cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO40%2BkGih2ELAP%2BwyyrcAzjotlJmmAPlVVD3I8zlL4o3z2dNWjhVakeM4dQkxY%2BIcg0sgegtvmc3HdLpOfwx802bhN4ztTYLCpCkWhiLSCbtsyCyb6%2F%2B%2BkY3dy1q100e4WB65XeXwAA%2BrYwTEx4bqU4AMe7ZPU6a2kg7RLVDREtoH0YfQVcn4wl1XNWtwxbwnRBw%2FdM6H%2F9d3O3KWS4zdb%2F1eiZxIzlE5XVpmvbepS4QtFeMLT1GhFgTDAzlstFUPm5mkEnLwMo0BZxmYHXJZtr0AKs4LeSjo43nEAoCnTs%2FV4X1R4F4xl6opkNkxWnVK5%2B3SJfI3uXV6umu18GsfcgZiuPjSYsEp3YwZg2gSRWerxFABixcdcnp48aE37Cp%2B1qhBcAsQ23RBboC0DKxbujk6Kzzg7a%2Bay1SuA%2BrH2pdhTK9FlxT8L8BATLnHYPRavEzOpTnVjdn6DZ%2B730C8MmDKjBBA7WWIA7M54pYwTE%2FuYVwls9CrgSYNU25AbekgIdn04gh%2BG7BnBu2Jn7on7JBBvCj1QYGJrdqdurguxAzvkyf7AymfRA7d7skQAicJZ0NX4GCt09rI8k1FF3FxHUAXR2uHTSd7T1YWve4tjQdGPXC8D59iJmxVqFGagIx2%2FDBN9Luo9KQJjtyMKP90skGOqUBVP8iIpuS60QqCuQYTLxJW1SNyo8uUDrghrG4rGG5yq6BRsQ%2BiOSuXuceLr7iAMWL%2F26epOIljfF8xXxd5ajhFrznVbYlHhRtU6gJz7SG0MvSFUHBqOwaTTPF3Di6SeNujjWwzOCEYsIjasbJL741Muk%2BV%2FouJh%2BuWUVR%2BQkOdkN%2Fyj9DI4xgQbbswLjOqJCuwVuBHaPhcNifn0Aw0FXFrPl74RDD&X-Amz-Signature=be48ff646d8ca7279feee4acb5bdaa17c077d90c973e0319aa7b06ee68f096ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
