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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKXUWWSF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGVtcZ%2FOEujdrBkCuu7Imlq6tMly3tSZVb6zK960TOJAIhAKdcJSpZiQ179UtH%2BVUry48ROIJkE7ggT7Ic6%2BhbxHNpKv8DCHIQABoMNjM3NDIzMTgzODA1Igwqk5ht0EC9kzV%2Ba%2BUq3APRKe2tsynRbBjkeRr2AGeiWKzY3l2f8bxXJGHliCsxCMOJFbDOdCQN%2BEzdcLmicsioje9ZFRSkhh0eaPxiXsxP3XiNZApZjo7VweVRszMFL8pRr9q%2FS05Q0VWBt0zv%2FgtgOOT2UX85BvgEbg6yCkfmVuCykzORr9yR09DKF%2B6e%2B5IrwhlPoRSVYFfTIxqru%2F8sU4m1DpL2U8AsBgy83XEsgNc6ZQjGTSWHoRfr0sgilbJSrbrjyDyj7CRRq05bgPG3Et%2BiHaFPPYy0i6fVYd22utzCl74ujgYtAqVDGYG75YutlKx08mutkhSTNsslLwqLpHFZdkaMXbhK%2BmjiAeSX09aMLVELb5M8LyCcVJiW8sMj4Cd%2F1Ft4RP3FQcl07qRSa%2BcgoDVulOUFIhcxZ9%2BLSAn%2F5A30%2FRxd5SpW56lZB6CPE%2BB1Df0NlemCmQuQINJxohfjU92g45bbdn1uBq61JF8OvK%2BBgZOUirGnTiPDKGtA5rMiIRXaZW1dLoivEwKLYgIvEzK2RR9%2BOAf2UpKqEtZpRPhTPT%2Bb3TTy%2Bs5Gty5pbucfvDSheUllhhDbjQRPeentMXH5xjHbS6lkxzibIaPU8Zj2VYd5UG9VmL2OLNVlpaXVu2QVqt56QjCo%2B4fKBjqkARcYvh5y6bF08jgGL1XEHD7BOx45hH%2BByI2GV1A46YeOBq03%2FtbMklqLJ%2B1G%2FVbvApewRYGPQqMf1t8RBhBfZXBAABC5ZkiFT0k20dVJ%2BnZ1vG7TRj4MZwpmrnPSxWK3WHROYW9Fcjr%2FI4e%2FjhJJU%2B3%2BciiSyloOe5w8XfkgnpDmLVQ1rB4kAyJLGGEEhaKZTXsVa%2FQhcmPRt1ljy1erdh%2FJ%2BXxs&X-Amz-Signature=baceafa67595b572d2cc834bebac71f0e634ee03fd3b4626e562bfed166b5ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKXUWWSF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGVtcZ%2FOEujdrBkCuu7Imlq6tMly3tSZVb6zK960TOJAIhAKdcJSpZiQ179UtH%2BVUry48ROIJkE7ggT7Ic6%2BhbxHNpKv8DCHIQABoMNjM3NDIzMTgzODA1Igwqk5ht0EC9kzV%2Ba%2BUq3APRKe2tsynRbBjkeRr2AGeiWKzY3l2f8bxXJGHliCsxCMOJFbDOdCQN%2BEzdcLmicsioje9ZFRSkhh0eaPxiXsxP3XiNZApZjo7VweVRszMFL8pRr9q%2FS05Q0VWBt0zv%2FgtgOOT2UX85BvgEbg6yCkfmVuCykzORr9yR09DKF%2B6e%2B5IrwhlPoRSVYFfTIxqru%2F8sU4m1DpL2U8AsBgy83XEsgNc6ZQjGTSWHoRfr0sgilbJSrbrjyDyj7CRRq05bgPG3Et%2BiHaFPPYy0i6fVYd22utzCl74ujgYtAqVDGYG75YutlKx08mutkhSTNsslLwqLpHFZdkaMXbhK%2BmjiAeSX09aMLVELb5M8LyCcVJiW8sMj4Cd%2F1Ft4RP3FQcl07qRSa%2BcgoDVulOUFIhcxZ9%2BLSAn%2F5A30%2FRxd5SpW56lZB6CPE%2BB1Df0NlemCmQuQINJxohfjU92g45bbdn1uBq61JF8OvK%2BBgZOUirGnTiPDKGtA5rMiIRXaZW1dLoivEwKLYgIvEzK2RR9%2BOAf2UpKqEtZpRPhTPT%2Bb3TTy%2Bs5Gty5pbucfvDSheUllhhDbjQRPeentMXH5xjHbS6lkxzibIaPU8Zj2VYd5UG9VmL2OLNVlpaXVu2QVqt56QjCo%2B4fKBjqkARcYvh5y6bF08jgGL1XEHD7BOx45hH%2BByI2GV1A46YeOBq03%2FtbMklqLJ%2B1G%2FVbvApewRYGPQqMf1t8RBhBfZXBAABC5ZkiFT0k20dVJ%2BnZ1vG7TRj4MZwpmrnPSxWK3WHROYW9Fcjr%2FI4e%2FjhJJU%2B3%2BciiSyloOe5w8XfkgnpDmLVQ1rB4kAyJLGGEEhaKZTXsVa%2FQhcmPRt1ljy1erdh%2FJ%2BXxs&X-Amz-Signature=f2dd33c61a2e479e0f0e2c490574b101a2ae4ffa13d4a0c55b1983b191dc5071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
