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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFW3RH4K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFV1%2B3mgmJosAzSUNGD10NdALrXSgNmZbx9Gy6MA37dVAiEA8Hqbab3ikH%2BZXVdc0aDa3eAVE%2BElmcgo%2FlNhv7SwZSIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFvKEoTcOWH8w9AT%2FSrcAzdVIZkMixe1VvhPiqJo8ysRTN1E9mP4ZVkOpsrVwbqY29lvpQkbJyWhTgqda6KBdLBkeYmwr4v8JZwuK55NtG7JdlcYcF5013Yo4X1VNEP7zlAdstHf6EnzcLsTlECFog6%2BKyeE6e0UtSUq2yjEUoqZKW3nvRqgxJIoMebrSI%2BFqWOPaRFZqUvMOLfYN%2B7E5J9ZdF2ZGhnpvUmuXHsCDJNBrM%2BSfJjYA3L3imFck1HCZQ8WTezGQgRzpctqF%2F93pEhnCFkseVoZlEaEmn5%2BpO4DIgV3jKZAhjpeUgHN3C2t7YRBCXNlL28E6mw%2BKd7YNa3W%2BH05m7kjcFqm9EOyQNUMVge5UMwNjzptQ0B4deG6FTfEypBeXo4hHxujPCkUiQaTWXISNcqlNFiSeEC5FQtCRVvDhJoj897J%2BCCkNjP1gjdRt2Ba%2FtMihmBJ%2FrI7Y6VcqM%2F0%2FcGWlAnr6r57LRORrcYaQ8stAsJ4RZKS6UAaIgZLHgM6ORVrVz4jSqddN6dgMGID9jMW5sBnNR%2Fy3lH1dFn0OuTXvqxSTFOZDaVPCxXur89hl8LxOpKjkK6B5Xv%2Bm4vdb%2F4loLOkAp24%2FHvp3Kx5cQEuBnaM1uapjznapFr7mTKr6BgG0z73MI6RxMkGOqUB48oRG69bD1Hug3XQk1A6lYh%2FbLOpX4DP4E5J8CR5NjThHVL0yWQ%2BOyUsBZAkfak1P8I4EeCpC44rLTHDkYPe%2FA3ycg3LxfcICv6xci%2BHLIIZYsV7KtG%2BJ3CH3Qzz1mFMg%2Fh1uqF8TM7xxErbtAf1EuE0KbzXKsWcJJjJGoeO8NcGV0h43QIbglJcM7i8bkv8LSFNMMYt7a3LeN7njOGjJjrnouZ3&X-Amz-Signature=3fea7576bd5ee9ad1890985586a27300d5a1f698215ca780c91cec8b16f79a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFW3RH4K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFV1%2B3mgmJosAzSUNGD10NdALrXSgNmZbx9Gy6MA37dVAiEA8Hqbab3ikH%2BZXVdc0aDa3eAVE%2BElmcgo%2FlNhv7SwZSIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFvKEoTcOWH8w9AT%2FSrcAzdVIZkMixe1VvhPiqJo8ysRTN1E9mP4ZVkOpsrVwbqY29lvpQkbJyWhTgqda6KBdLBkeYmwr4v8JZwuK55NtG7JdlcYcF5013Yo4X1VNEP7zlAdstHf6EnzcLsTlECFog6%2BKyeE6e0UtSUq2yjEUoqZKW3nvRqgxJIoMebrSI%2BFqWOPaRFZqUvMOLfYN%2B7E5J9ZdF2ZGhnpvUmuXHsCDJNBrM%2BSfJjYA3L3imFck1HCZQ8WTezGQgRzpctqF%2F93pEhnCFkseVoZlEaEmn5%2BpO4DIgV3jKZAhjpeUgHN3C2t7YRBCXNlL28E6mw%2BKd7YNa3W%2BH05m7kjcFqm9EOyQNUMVge5UMwNjzptQ0B4deG6FTfEypBeXo4hHxujPCkUiQaTWXISNcqlNFiSeEC5FQtCRVvDhJoj897J%2BCCkNjP1gjdRt2Ba%2FtMihmBJ%2FrI7Y6VcqM%2F0%2FcGWlAnr6r57LRORrcYaQ8stAsJ4RZKS6UAaIgZLHgM6ORVrVz4jSqddN6dgMGID9jMW5sBnNR%2Fy3lH1dFn0OuTXvqxSTFOZDaVPCxXur89hl8LxOpKjkK6B5Xv%2Bm4vdb%2F4loLOkAp24%2FHvp3Kx5cQEuBnaM1uapjznapFr7mTKr6BgG0z73MI6RxMkGOqUB48oRG69bD1Hug3XQk1A6lYh%2FbLOpX4DP4E5J8CR5NjThHVL0yWQ%2BOyUsBZAkfak1P8I4EeCpC44rLTHDkYPe%2FA3ycg3LxfcICv6xci%2BHLIIZYsV7KtG%2BJ3CH3Qzz1mFMg%2Fh1uqF8TM7xxErbtAf1EuE0KbzXKsWcJJjJGoeO8NcGV0h43QIbglJcM7i8bkv8LSFNMMYt7a3LeN7njOGjJjrnouZ3&X-Amz-Signature=5e7b5bf63b7306241616b1864840cfd11041bc00bda3a854b204680e12897ef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
