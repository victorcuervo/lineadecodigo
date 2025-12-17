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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFMAKPQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9JDk2upLZVgKGfJx9mrSwY3QPWaII9xGeAaYOvsY6HAIhAJuyk40zRuuSkQs9oAwPncuO%2FG%2Fkxdda8Zamk2Szyr%2BMKv8DCHIQABoMNjM3NDIzMTgzODA1IgwFc%2F8sHZgP21g6rtIq3APkI1%2FMDc%2FEz9xBtqatKtFVE0Rl%2BpT5UBQepVbJf5bc3tnW3uLUMach3AK0Z8LqvfOSO3%2FDfk9XbC0pFsmHQuZ%2FVaYfHFb4SBLuvL9xVbj5bllasIAgqgJFHidd%2FhPh63S1FNJRlUsxQYeQst0jk%2Bdf2bfxZeEd7isDiomB9vOSCnJyyKZ8V8SDn1OkSta%2F1Lo%2B%2FVzdxW98BEDTFcW0XWdrfkkfnbWhsgU5PvHbEMHHGgKTlV0uA3YCaR9SB%2FHBIyuKgnajSxMr%2BGVuxfzvW8a62mhuvCVMtNhnIH8jrJDGIvMqyuF7MMWDwZOjif1ijiPjuyJM3O78lXr2TCCEvs7Udot42bKE85Sw%2BOSyhzimyh1Qyji0O4fkaOZtKWn8Vzgjq9RdEtxLHJ7is8LQaE2PbpDLGmxR4BzMAcWUb1v2kc8jXWjP7QsBx0tRw5biPtfD9Es2ok7k0QN62PPEyH6gaZv3Ii37vABSzjS7STJpKZEUw6wHBYFU7QNt77GGfZ1V1wF6R7IexGUog54q%2FzBte7p6oyi%2BykKB2pZ86lbyPOSM36kDf%2B5sExKytRxm3IFr7gULgMaWi5RrLtZdqgVwdRJkFQCwwcaVS8tcMFuaTr2Wf18Ya64v6bMchDDb%2BofKBjqkATWUyjX97WE%2B1KPj%2FMdz1lEB5x%2B%2BraSu2Fz8NOi%2FZnSAP2Xwapgci2%2BdnsX5AinnEdgZU8mlU9dJ7J9y4R5Pkhku51uzdIovvZlwDZgxh1SVnV3duft54KSmdeYU6LYAkfRusPBSUVGqKFh8xW9Tj5UrAfNYHh2XkQzjrjhT6JNOPoV4EJcwavK66To00iY41pcT90qvH%2Bvf18cgexNitkpY7Jrq&X-Amz-Signature=37e839b64ad4d84dc32e3e4f3d84cac4de42d2e8472125e245da0c097d7c25d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFMAKPQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9JDk2upLZVgKGfJx9mrSwY3QPWaII9xGeAaYOvsY6HAIhAJuyk40zRuuSkQs9oAwPncuO%2FG%2Fkxdda8Zamk2Szyr%2BMKv8DCHIQABoMNjM3NDIzMTgzODA1IgwFc%2F8sHZgP21g6rtIq3APkI1%2FMDc%2FEz9xBtqatKtFVE0Rl%2BpT5UBQepVbJf5bc3tnW3uLUMach3AK0Z8LqvfOSO3%2FDfk9XbC0pFsmHQuZ%2FVaYfHFb4SBLuvL9xVbj5bllasIAgqgJFHidd%2FhPh63S1FNJRlUsxQYeQst0jk%2Bdf2bfxZeEd7isDiomB9vOSCnJyyKZ8V8SDn1OkSta%2F1Lo%2B%2FVzdxW98BEDTFcW0XWdrfkkfnbWhsgU5PvHbEMHHGgKTlV0uA3YCaR9SB%2FHBIyuKgnajSxMr%2BGVuxfzvW8a62mhuvCVMtNhnIH8jrJDGIvMqyuF7MMWDwZOjif1ijiPjuyJM3O78lXr2TCCEvs7Udot42bKE85Sw%2BOSyhzimyh1Qyji0O4fkaOZtKWn8Vzgjq9RdEtxLHJ7is8LQaE2PbpDLGmxR4BzMAcWUb1v2kc8jXWjP7QsBx0tRw5biPtfD9Es2ok7k0QN62PPEyH6gaZv3Ii37vABSzjS7STJpKZEUw6wHBYFU7QNt77GGfZ1V1wF6R7IexGUog54q%2FzBte7p6oyi%2BykKB2pZ86lbyPOSM36kDf%2B5sExKytRxm3IFr7gULgMaWi5RrLtZdqgVwdRJkFQCwwcaVS8tcMFuaTr2Wf18Ya64v6bMchDDb%2BofKBjqkATWUyjX97WE%2B1KPj%2FMdz1lEB5x%2B%2BraSu2Fz8NOi%2FZnSAP2Xwapgci2%2BdnsX5AinnEdgZU8mlU9dJ7J9y4R5Pkhku51uzdIovvZlwDZgxh1SVnV3duft54KSmdeYU6LYAkfRusPBSUVGqKFh8xW9Tj5UrAfNYHh2XkQzjrjhT6JNOPoV4EJcwavK66To00iY41pcT90qvH%2Bvf18cgexNitkpY7Jrq&X-Amz-Signature=d9f42a0d02eae2aee3b758bf160e425c5b4f7f0abed0b5d0cee8ac550dddc801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
