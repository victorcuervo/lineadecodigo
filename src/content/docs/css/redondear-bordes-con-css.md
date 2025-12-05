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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRHJ7X7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID181WRuk%2FcDUarzEo%2BDTey74x5El2Z8c9BFEKBe5lmqAiEAskJxbvFiglXBibO0IvTWCCD%2FJdNj3rBghbxFTz2J9z4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLiZDp8WRAnq%2BmcIzircAywHsIzBjVeIRwcb88InpyrhptzQOTip6za%2B7yNqRt8cMM7UhJbVwRH2yYwoehaFNd7ib7P%2FvUXuiBVc2Q%2F4Cz9X%2FsUJLl6rU4jnyycQBpr3qCujIi3SIqUhulGx5DcZRNi29uRVghMEHpBo4FTq0MTFBEUNpJvf0k4Zu4qjoP82F%2BgWWhzSxin0rjGO9jPRxmDZm5MTfxclw%2B8xpKKobkQhYBsED1wAb4DnmI603VuGwtlEO%2BMQam2%2F8C0dc%2FwXoyqwFVL4kzyBy7a4f0yO3gZiJkPx4pGOoyeG1dx1jGtcDRgNG%2BcJ1GTNnL%2Fzq%2BHaxHnp2gk1SwRd1%2FrvHdOa3lbGf%2Fa8XBswu5mtNiTKgPSTt4ioZoSLB8HysjrE1zU9hcBQBgzrnOmWiKXRR9GqrMOfoLaBHH612t18J0FLc2YDF2WOruzHoJhqwELBszm9fyzmjGSmoDx2VhulPMIqihvz6m9LCkrQsIf%2FQYalFNBr6h4qUIy8OsZNQZo%2BLm9Fl6YIku8LmpDiBd5qqCqfQpKaWdxL48xTbZmdAGoS2G%2BDv%2Bar4RWxV8VvgATQ1nMwo9o2QLXT%2BxbXukmj7PvWBR7Gwtko9s6%2BnLbR6qDbjQ4HDNFagkIz0zjof1S5MPKLyMkGOqUBNbgbto%2FqST8aRr%2B2g3yE3r8mIMw1S%2BFpprT9ZdCUYGyiIAHrPB721M1Y56QF73L%2FFeIvyIpOwlminAs9XUT%2BOjz6%2FFe%2BHeH2j3fx8mTu46eYxBOjPnPV2vfqBma%2FDZicMUWLmdjAzSN2rCmeVuyK2ts9tMfpVh11ZUxgsPFkYa%2BfqNOQsmBugVOsu82902ghgMhlonwXOC%2B5qZx2DPp1MtSBxidk&X-Amz-Signature=436b585ae3e068f1862e6cb921e41885f91a4622b75b2a4aff4d91a983d5f054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRHJ7X7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID181WRuk%2FcDUarzEo%2BDTey74x5El2Z8c9BFEKBe5lmqAiEAskJxbvFiglXBibO0IvTWCCD%2FJdNj3rBghbxFTz2J9z4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLiZDp8WRAnq%2BmcIzircAywHsIzBjVeIRwcb88InpyrhptzQOTip6za%2B7yNqRt8cMM7UhJbVwRH2yYwoehaFNd7ib7P%2FvUXuiBVc2Q%2F4Cz9X%2FsUJLl6rU4jnyycQBpr3qCujIi3SIqUhulGx5DcZRNi29uRVghMEHpBo4FTq0MTFBEUNpJvf0k4Zu4qjoP82F%2BgWWhzSxin0rjGO9jPRxmDZm5MTfxclw%2B8xpKKobkQhYBsED1wAb4DnmI603VuGwtlEO%2BMQam2%2F8C0dc%2FwXoyqwFVL4kzyBy7a4f0yO3gZiJkPx4pGOoyeG1dx1jGtcDRgNG%2BcJ1GTNnL%2Fzq%2BHaxHnp2gk1SwRd1%2FrvHdOa3lbGf%2Fa8XBswu5mtNiTKgPSTt4ioZoSLB8HysjrE1zU9hcBQBgzrnOmWiKXRR9GqrMOfoLaBHH612t18J0FLc2YDF2WOruzHoJhqwELBszm9fyzmjGSmoDx2VhulPMIqihvz6m9LCkrQsIf%2FQYalFNBr6h4qUIy8OsZNQZo%2BLm9Fl6YIku8LmpDiBd5qqCqfQpKaWdxL48xTbZmdAGoS2G%2BDv%2Bar4RWxV8VvgATQ1nMwo9o2QLXT%2BxbXukmj7PvWBR7Gwtko9s6%2BnLbR6qDbjQ4HDNFagkIz0zjof1S5MPKLyMkGOqUBNbgbto%2FqST8aRr%2B2g3yE3r8mIMw1S%2BFpprT9ZdCUYGyiIAHrPB721M1Y56QF73L%2FFeIvyIpOwlminAs9XUT%2BOjz6%2FFe%2BHeH2j3fx8mTu46eYxBOjPnPV2vfqBma%2FDZicMUWLmdjAzSN2rCmeVuyK2ts9tMfpVh11ZUxgsPFkYa%2BfqNOQsmBugVOsu82902ghgMhlonwXOC%2B5qZx2DPp1MtSBxidk&X-Amz-Signature=48f2db4ee625ea6ee374cd21f4d94aaff39e196ce4b29d0e4e62fde38da95db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
