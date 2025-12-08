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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRBEPZDB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzxzzzl3J%2B073KsGVBV5oIh26%2F8%2FH0ja4kalRqYS7JtAiEAksPKyCjWesItu%2BMildY7z8PdT5kbKaSJtM70hle5GK0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqXc0xLvdxGO16FByrcA3wgYt9sY9iDn%2BQcPeXFpw8apol6Zx9ZkTVdkc8p2nv5Gq%2FW7BUdPeX2d75e1jgr02zoIIIvqVVfRHuPmyqeTzqV%2BbdpqbUUEAdK%2BfQN1hcwYQbBYeCax8ZY%2BLbQ1hjfZZsZeKFnLpw0E%2BlUREYSjSm004KVxPHfSk7w4GXUuzac%2FUUtRQdNwG7cC68z06nXOKr3qJiR1bJA3F%2F3wEgTadn60sZypOtqz5JVaI0iPY7nyYQ6%2BYH5x9bvBZlFXm6t8fQjcj2EyY0oudJCbBWqoBmwKwNJ%2BB%2BdMfoWToAAARw%2FNAzXOlREVgpp4o9rcvRkLmSGxkrzQEbeDY%2FCEjRnkkOVC%2FkRViPLZlddUrx0VcirjB4QzQGU2lWqDrOufLaxa2eyH1hbzV%2FSIXrMib1N9hflgDNk8PASR7JN3gyJwIlKaAN4m5cLkIRtFtGrdU65C6DGCOv7eVJAmdiKETBnGu2czX%2Bfiue0C7QEcqo99B2q0lTeLS6%2FB%2FNNt%2FwQXRIsryV2yzNjgiiBF9IYzpLFuse1hCLdHLdHbkztzC0YU1zsZXapi3E%2FJ2vd5U6iGoIZ9NC61%2BYCXVyk7K3DgIcH1C6C2pq1BlcXHStSzX8OrTZX67cHGRXekFqXU3ufMIKQ28kGOqUBgrNFON9ZOmsNsNNuFM0igxMWmPx8Y%2BJCPraSN%2Fu9U%2B5m5Qy%2BiTuyuXIED9NMcJf%2FBUA3JglJU805TxpiQ5veeu15d1Amz0Qe4PT95i3A%2B7aKIWf4pH1AOzsBUThGfcQ%2BCpia9uMY0EkFwARKoCq9ddCJ5ir%2FUlDgZlmnxI%2BZCSKc%2FqAPuf5d6cvWpYcxMHsIeFQUSWeuRLE%2FsYBtbHZe9pZ7XyRB&X-Amz-Signature=f99289178ea9c3a3f5c8ecabda4a3efd5a3b32cf2f7791c6c1b566146da33f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRBEPZDB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzxzzzl3J%2B073KsGVBV5oIh26%2F8%2FH0ja4kalRqYS7JtAiEAksPKyCjWesItu%2BMildY7z8PdT5kbKaSJtM70hle5GK0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqXc0xLvdxGO16FByrcA3wgYt9sY9iDn%2BQcPeXFpw8apol6Zx9ZkTVdkc8p2nv5Gq%2FW7BUdPeX2d75e1jgr02zoIIIvqVVfRHuPmyqeTzqV%2BbdpqbUUEAdK%2BfQN1hcwYQbBYeCax8ZY%2BLbQ1hjfZZsZeKFnLpw0E%2BlUREYSjSm004KVxPHfSk7w4GXUuzac%2FUUtRQdNwG7cC68z06nXOKr3qJiR1bJA3F%2F3wEgTadn60sZypOtqz5JVaI0iPY7nyYQ6%2BYH5x9bvBZlFXm6t8fQjcj2EyY0oudJCbBWqoBmwKwNJ%2BB%2BdMfoWToAAARw%2FNAzXOlREVgpp4o9rcvRkLmSGxkrzQEbeDY%2FCEjRnkkOVC%2FkRViPLZlddUrx0VcirjB4QzQGU2lWqDrOufLaxa2eyH1hbzV%2FSIXrMib1N9hflgDNk8PASR7JN3gyJwIlKaAN4m5cLkIRtFtGrdU65C6DGCOv7eVJAmdiKETBnGu2czX%2Bfiue0C7QEcqo99B2q0lTeLS6%2FB%2FNNt%2FwQXRIsryV2yzNjgiiBF9IYzpLFuse1hCLdHLdHbkztzC0YU1zsZXapi3E%2FJ2vd5U6iGoIZ9NC61%2BYCXVyk7K3DgIcH1C6C2pq1BlcXHStSzX8OrTZX67cHGRXekFqXU3ufMIKQ28kGOqUBgrNFON9ZOmsNsNNuFM0igxMWmPx8Y%2BJCPraSN%2Fu9U%2B5m5Qy%2BiTuyuXIED9NMcJf%2FBUA3JglJU805TxpiQ5veeu15d1Amz0Qe4PT95i3A%2B7aKIWf4pH1AOzsBUThGfcQ%2BCpia9uMY0EkFwARKoCq9ddCJ5ir%2FUlDgZlmnxI%2BZCSKc%2FqAPuf5d6cvWpYcxMHsIeFQUSWeuRLE%2FsYBtbHZe9pZ7XyRB&X-Amz-Signature=3b99b82dd4b288bc24f0803dbf24b4a5f60f837e6c860692a44808686b5539dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
