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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWG2MB7R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBmPOpj8p2H2FrwEYCFfV8L3MUsTlpbBtfLL0jpCYHdAiBMKJ8XRyIwWc8c1M%2BoGcNDwqYXXBrdBob0TKvPn%2FELDCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMXEBfKEQeNFc89oBeKtwDTkc0rgBlHeZehIGsgZjBy0UVtGJo%2BT4nQQq%2B0Ww7JhsrpE%2BSdYBZpdV0ZUvgceAilgrS6cDpxuko9ZJoiQ9p9PHXNSpLqCdqL0SGuQh9WKQPxXkN52ykaH414N74p90dDA4u36Q4gDtS09tjGkXtM2wqIs7S%2BSZRrLGcOQjqtKtYQunD0JQ1l6FpvfcNaXkSwKIHkoKkUb65KsaatRtfqIxlSVRKjtMvvM9A%2FXm15Crs5I%2BeWLDKudE%2BfbyYzzL8mDL9EKS64EQ9t9tN7ss8SYRPKmdlNhu9EsaQ7GAVCYXxqQ1tJow%2FlAy5m2aA3oOrGfi3Ui%2Bn5qexV0npD4dMS4L0%2F22eI3SWlNwRr%2BWclA6eP%2BleN9opFfNo9mU9otLGAVyDLV67RzZKEBUHUhToK3pLnxmAMVidVPF8mHriP4PkZcELgl3Z6k7JQrjF3E%2Bh4vPpWwANTMxqGdfCHfRmKMzElumcN5TV5vfxmBNjZ9P%2BDHXERFwKtY4eTaARtVgLtLXHZiyHVQ1JLIvNRWGgeD5Pgyk2mteH8Nysv2ub%2BR0E7XxTKGsfUEJFJ%2F0WYrku1CZy3Sk%2FeWS%2BtbYuO%2FMZ4InBZpDUM5FUeNN3p8yr6XH7COXSoLH7L0rRlBkw0t6HygY6pgFvGQ%2BIwO91K0TxhcHizshiIO2sDKlP78xzWn6e%2F454DnuW6IszXYeMaAjq0VjbjLETsddSkOk3b8F8t54%2BWDCL%2BwnLIX%2Bczgz9CWKRIYEKN3GOjlmltnioPE7Fixs%2FBBBZ%2FE89gPjnZlxgKVrJWZjDC1e2wGno9xR7Sj0t1OFSy%2BusmqoeU8%2FEN5DTCXWT8pswhADuD1KO%2FG2wnJU%2BfEE8UFvvVvZ8&X-Amz-Signature=6cc507a3a29016153b36c6ec2de9aa981eda423108ce9c7ae294c88776169cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWG2MB7R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBmPOpj8p2H2FrwEYCFfV8L3MUsTlpbBtfLL0jpCYHdAiBMKJ8XRyIwWc8c1M%2BoGcNDwqYXXBrdBob0TKvPn%2FELDCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMXEBfKEQeNFc89oBeKtwDTkc0rgBlHeZehIGsgZjBy0UVtGJo%2BT4nQQq%2B0Ww7JhsrpE%2BSdYBZpdV0ZUvgceAilgrS6cDpxuko9ZJoiQ9p9PHXNSpLqCdqL0SGuQh9WKQPxXkN52ykaH414N74p90dDA4u36Q4gDtS09tjGkXtM2wqIs7S%2BSZRrLGcOQjqtKtYQunD0JQ1l6FpvfcNaXkSwKIHkoKkUb65KsaatRtfqIxlSVRKjtMvvM9A%2FXm15Crs5I%2BeWLDKudE%2BfbyYzzL8mDL9EKS64EQ9t9tN7ss8SYRPKmdlNhu9EsaQ7GAVCYXxqQ1tJow%2FlAy5m2aA3oOrGfi3Ui%2Bn5qexV0npD4dMS4L0%2F22eI3SWlNwRr%2BWclA6eP%2BleN9opFfNo9mU9otLGAVyDLV67RzZKEBUHUhToK3pLnxmAMVidVPF8mHriP4PkZcELgl3Z6k7JQrjF3E%2Bh4vPpWwANTMxqGdfCHfRmKMzElumcN5TV5vfxmBNjZ9P%2BDHXERFwKtY4eTaARtVgLtLXHZiyHVQ1JLIvNRWGgeD5Pgyk2mteH8Nysv2ub%2BR0E7XxTKGsfUEJFJ%2F0WYrku1CZy3Sk%2FeWS%2BtbYuO%2FMZ4InBZpDUM5FUeNN3p8yr6XH7COXSoLH7L0rRlBkw0t6HygY6pgFvGQ%2BIwO91K0TxhcHizshiIO2sDKlP78xzWn6e%2F454DnuW6IszXYeMaAjq0VjbjLETsddSkOk3b8F8t54%2BWDCL%2BwnLIX%2Bczgz9CWKRIYEKN3GOjlmltnioPE7Fixs%2FBBBZ%2FE89gPjnZlxgKVrJWZjDC1e2wGno9xR7Sj0t1OFSy%2BusmqoeU8%2FEN5DTCXWT8pswhADuD1KO%2FG2wnJU%2BfEE8UFvvVvZ8&X-Amz-Signature=356bba996a90756ff5ae408df7940d2bb04fba4bea47a9b9b58232019d276671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
