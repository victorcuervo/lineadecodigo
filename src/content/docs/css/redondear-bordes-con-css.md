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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHNUFMAC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaGZGjdC0UMCz4N8DvvCbujorj067XYydUkf8QeUkozwIhAKa2wbL1YDtTOUdT%2FQV8h2Q6yI3R4r8EgYH3CBl2KsAUKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPaw0EjC2q4WU6T7Yq3APG9InUMX6ArM3Ih%2BNZa5sFZg3wnpkgnu3OJNZPVxwwL4b7PjNrfNjQKQm1%2FTLalSTh7gTAEs%2FUbF9ASaSGxj1o8i2pFsylOj4GhM%2BJj5A0%2BmjRu4kw3Ohu3pnjDj4dnzgFRBp4ubiIE9aGNT5YA9e0%2FLDEEM2Kqcwxrj21SUcYTXGNmUQ8zRDCqJhZvhiQIfPtfCbALqQhuwESkZRA8TLzPwC1zyXuyZwCRa3uj4yZIILnEjRnju60I3ndjCsHQJGEYdgx09SKv9j8AnO2BYD1Ym%2BXG83JywHegVXyTxoHO7Vf6d%2F4AgvW5hNQ%2Bri0mxSrVgGCQhuokxGL1P7JO15Jhi7%2BFlPWl3xVj0A7TNUan%2BhHFzNWNyXKoQv7v8ewj%2BoztY0KM7qsR7XuRXZUUzMlF%2BRKRagqYd%2BAlcAtSjXyuWCb4RYdH%2F%2BXFOI2eSAmvSGEgC5GVsJ1v1MNft496uC5kcnjGef5rW90KTL%2F8t9q8c46saRPNTuQN0frngd%2FuIJrEZztVsX0gEhpxHv0Bkbsg7NOvZIIGTgW20%2Bg0oS%2BVP2sdgUM3dp46%2FuUNY5LJB7HhUTkRFSY2PRLDXZLjKuSRv2JarNImQdnm1dxv1NRzZ5b5Ev7acgtxT5S1DDmodjJBjqkARXPW2njxxaVIUzPWZft0MuqCpCnpTLnWZfENcxT9PF6mbdTtKsBsSBouSfJD%2BIFOK2FLx1Ztdx4CclFKXbL9ONVGeO2cKKT5zusJYLm%2Bp5PMAo2ulrIsjiato0fCQp19ytEsScwqn9PeTGn1zdQP8Es0KVHaqA66eNNe24CaHv01RETwaVE5uD6my3MDHYnBsF2RkUZJ%2FsyZVGRCw3BMo9dap2k&X-Amz-Signature=cc2eb1871e3bedc3d737adbb949f94617e0e132562ecd473a20c9372327cdabc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHNUFMAC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaGZGjdC0UMCz4N8DvvCbujorj067XYydUkf8QeUkozwIhAKa2wbL1YDtTOUdT%2FQV8h2Q6yI3R4r8EgYH3CBl2KsAUKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPaw0EjC2q4WU6T7Yq3APG9InUMX6ArM3Ih%2BNZa5sFZg3wnpkgnu3OJNZPVxwwL4b7PjNrfNjQKQm1%2FTLalSTh7gTAEs%2FUbF9ASaSGxj1o8i2pFsylOj4GhM%2BJj5A0%2BmjRu4kw3Ohu3pnjDj4dnzgFRBp4ubiIE9aGNT5YA9e0%2FLDEEM2Kqcwxrj21SUcYTXGNmUQ8zRDCqJhZvhiQIfPtfCbALqQhuwESkZRA8TLzPwC1zyXuyZwCRa3uj4yZIILnEjRnju60I3ndjCsHQJGEYdgx09SKv9j8AnO2BYD1Ym%2BXG83JywHegVXyTxoHO7Vf6d%2F4AgvW5hNQ%2Bri0mxSrVgGCQhuokxGL1P7JO15Jhi7%2BFlPWl3xVj0A7TNUan%2BhHFzNWNyXKoQv7v8ewj%2BoztY0KM7qsR7XuRXZUUzMlF%2BRKRagqYd%2BAlcAtSjXyuWCb4RYdH%2F%2BXFOI2eSAmvSGEgC5GVsJ1v1MNft496uC5kcnjGef5rW90KTL%2F8t9q8c46saRPNTuQN0frngd%2FuIJrEZztVsX0gEhpxHv0Bkbsg7NOvZIIGTgW20%2Bg0oS%2BVP2sdgUM3dp46%2FuUNY5LJB7HhUTkRFSY2PRLDXZLjKuSRv2JarNImQdnm1dxv1NRzZ5b5Ev7acgtxT5S1DDmodjJBjqkARXPW2njxxaVIUzPWZft0MuqCpCnpTLnWZfENcxT9PF6mbdTtKsBsSBouSfJD%2BIFOK2FLx1Ztdx4CclFKXbL9ONVGeO2cKKT5zusJYLm%2Bp5PMAo2ulrIsjiato0fCQp19ytEsScwqn9PeTGn1zdQP8Es0KVHaqA66eNNe24CaHv01RETwaVE5uD6my3MDHYnBsF2RkUZJ%2FsyZVGRCw3BMo9dap2k&X-Amz-Signature=4498d248c7fc826af1498ff98385651916f96afd7dcfa968112c28ecae62f961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
