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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652UJ5MTL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYwNh5GIta4a%2FNJNBrzK1eS2gZjILNptZ3N9WZf2jv2wIgJoK42DqqB6o%2FQcaYLRXzW4MFLKs%2BRRpi79pmy7AtOksq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIMIHgnQp3lZg81znSrcA0SON8e5KiT8%2F7ZqN0aTnSYIMd3%2FD%2BUoNTLDEKKlqsvShnHuTEsTNoewfMk%2Fk05VhvDj4ov5FUVstcJq3GCCvlQs2Sgr83PSWTm%2BR8TYCiPzmR9ruu5sV%2FDhX5gmn1ChV0K6qCI%2Fh5mKtd96PbW%2FUvC%2Bv%2FyJ1v%2Fu7kvJCNsRL3O3%2BfRondWhVE6F6Y5iDClrxGamRSeXXSX0od%2F8zBmz1aRctkgDfU%2B7YjS2oJDbXQOQ3i%2BC5SzJFwPtfbXD9%2FHMX2fLh5uK4pacHFq9mUmWs8QDXvFNWsy%2FtW32qrVicB37Rd2QPvSJWcvKho4JLCPxlXWedXjjhLxBpSfGpQLRcrkG9ljNICKWPJujC2ZNQF1z5ZIHkfsALfczDRp2BGPiqFgQ78Ab3SG932S%2Fm6hkvahgpVredKrl%2BdQLCSbVXe5lL%2B9XU3q9B0DBZ36FgsqKV1MH2E5q0VdGQ6h9wVa3nruKh%2FhlnON7s0rwCbZKPGeE6%2FfIUMZIx5464F0ha4WPrQVFVE%2Fn5ZutrUyAPtBFdp3BBAs5sDN%2BiVnLSSyFqYFP1jdlzh4DN%2BPu7agcIOvI3c29C5la0ni%2F%2BqHqdZSD3vuo%2FAXclqnGuqXls0q7pyriMXFsuJ3eJrzUb9G0MNOBzMkGOqUBqvInXf%2BcPrf8%2BEHYidS3GvvTfpIx0Sy6gN%2F562Zj7rcOyFIFGzi3OAIXWL4yR2ZjPlXWISYd0Sks%2FqFRmODajaRgeaszqX1HLP1a0DDOYwDaNqdWWIfJ9JoN5pLz7nzYpGxtN2wipsIktnTytBTyTYYqYmYntq7rW7BAeLi71GnOO2a5LGH8VXnsw59HF7UldWub%2Fqy21o33rrO22RlVvu2UavwD&X-Amz-Signature=1e748d3a33195388e804d592a874f27a9a16fbbff35ef40357b0ac6336eef494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652UJ5MTL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYwNh5GIta4a%2FNJNBrzK1eS2gZjILNptZ3N9WZf2jv2wIgJoK42DqqB6o%2FQcaYLRXzW4MFLKs%2BRRpi79pmy7AtOksq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIMIHgnQp3lZg81znSrcA0SON8e5KiT8%2F7ZqN0aTnSYIMd3%2FD%2BUoNTLDEKKlqsvShnHuTEsTNoewfMk%2Fk05VhvDj4ov5FUVstcJq3GCCvlQs2Sgr83PSWTm%2BR8TYCiPzmR9ruu5sV%2FDhX5gmn1ChV0K6qCI%2Fh5mKtd96PbW%2FUvC%2Bv%2FyJ1v%2Fu7kvJCNsRL3O3%2BfRondWhVE6F6Y5iDClrxGamRSeXXSX0od%2F8zBmz1aRctkgDfU%2B7YjS2oJDbXQOQ3i%2BC5SzJFwPtfbXD9%2FHMX2fLh5uK4pacHFq9mUmWs8QDXvFNWsy%2FtW32qrVicB37Rd2QPvSJWcvKho4JLCPxlXWedXjjhLxBpSfGpQLRcrkG9ljNICKWPJujC2ZNQF1z5ZIHkfsALfczDRp2BGPiqFgQ78Ab3SG932S%2Fm6hkvahgpVredKrl%2BdQLCSbVXe5lL%2B9XU3q9B0DBZ36FgsqKV1MH2E5q0VdGQ6h9wVa3nruKh%2FhlnON7s0rwCbZKPGeE6%2FfIUMZIx5464F0ha4WPrQVFVE%2Fn5ZutrUyAPtBFdp3BBAs5sDN%2BiVnLSSyFqYFP1jdlzh4DN%2BPu7agcIOvI3c29C5la0ni%2F%2BqHqdZSD3vuo%2FAXclqnGuqXls0q7pyriMXFsuJ3eJrzUb9G0MNOBzMkGOqUBqvInXf%2BcPrf8%2BEHYidS3GvvTfpIx0Sy6gN%2F562Zj7rcOyFIFGzi3OAIXWL4yR2ZjPlXWISYd0Sks%2FqFRmODajaRgeaszqX1HLP1a0DDOYwDaNqdWWIfJ9JoN5pLz7nzYpGxtN2wipsIktnTytBTyTYYqYmYntq7rW7BAeLi71GnOO2a5LGH8VXnsw59HF7UldWub%2Fqy21o33rrO22RlVvu2UavwD&X-Amz-Signature=13031cc3d4bcd2c85d75da091ca126e7f1091b4cfefca501dcbcee217ace73ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
