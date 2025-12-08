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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTH5ATAK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeIy6MlpHC489zlNZ57PBDCrBf1qC3pym7R9c6nPK4IgIgX3b3FG4GWgSfOX9uBmYuhS6HDF01ha7JGPA6TtTxqkMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDON%2FakTEVq5taj6xqyrcAzE0COqNyrij%2Fy%2Fj2Zt%2FXxgWJnuV7h134OVi%2FFWCYIKLGMK9lTwjeGlEXcE32R6r%2FyDrqCya0uLlDALdeddRLiHEdhVti7kYhdgeY9q2VRUv6X8EhC4Xz0RtYYcGu%2Bel4jdPkQGnfTAvdv0KTbq4%2FoftJDjHq%2BBGxtUqaIoXe2dbau%2BUlLiDBfvu4N80Eoymck9kl8O6PQDf%2BGSAjNAjqy2CfQ%2FZ3iIjdZh0%2BJP%2FMG%2FuRj7cUkSMWF64IOdjs924onT7qb8H7jv22tiwPxFEIVawX7GaiVD6Y7%2Fqzcw9iZATKigI0vCvG8vo7BKSxMGTnqipOVf1tSwHOTPm2FO37N6flWKfyjevVYoTyNjKDFLqMYG3UaoL7DpoEg2G33Ny86QUKVpTHXa%2BW6yMiOw3VoLPtO582qo1d%2FcWakNK7v3TQlDNMwuHOLdtnnO7HAHTdhynLBqf2dugLK0a90JzOgN2zkdUmo8P%2BaqYnUuA0WNYz%2B2fY58m%2F1OZIrNTZOi9uaMuPYHIhMhttS0R4DEJPQpOfaelILYqxnTu3hokwt81iZgdNKz7kFDgmHwkReK7t2Drvocp4r20zuAoOPs2HwgWveORGGRMTqZopllZS5kr2PcysSM1pRtw%2B54lMKOh2MkGOqUBmRAJaTIJPSHH%2FuO7FVs7lF%2F8ot%2F2lZVOBrKY45VjNMoQ%2FxcuODs5B0tN9NNdip%2B2Y7t5LDEyZqeUDknZoNMtoaiXnnk%2FoCxLXNbevKIv9kO9d3Rx3IGydIYKD9kmQsK0z2zAN0G%2FVOhudSH2W3YU9h7d33OZNeZE7IkN24GPk%2FGNf%2FBtawU5WOYioixvLsfRrK8Uyy%2FCz3wMi0kihekM06J%2BYz7i&X-Amz-Signature=e8cd9e7d4f80b2e1aa86b06b95dbfd278f309e1a12217466bbfe456e73881085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTH5ATAK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeIy6MlpHC489zlNZ57PBDCrBf1qC3pym7R9c6nPK4IgIgX3b3FG4GWgSfOX9uBmYuhS6HDF01ha7JGPA6TtTxqkMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDON%2FakTEVq5taj6xqyrcAzE0COqNyrij%2Fy%2Fj2Zt%2FXxgWJnuV7h134OVi%2FFWCYIKLGMK9lTwjeGlEXcE32R6r%2FyDrqCya0uLlDALdeddRLiHEdhVti7kYhdgeY9q2VRUv6X8EhC4Xz0RtYYcGu%2Bel4jdPkQGnfTAvdv0KTbq4%2FoftJDjHq%2BBGxtUqaIoXe2dbau%2BUlLiDBfvu4N80Eoymck9kl8O6PQDf%2BGSAjNAjqy2CfQ%2FZ3iIjdZh0%2BJP%2FMG%2FuRj7cUkSMWF64IOdjs924onT7qb8H7jv22tiwPxFEIVawX7GaiVD6Y7%2Fqzcw9iZATKigI0vCvG8vo7BKSxMGTnqipOVf1tSwHOTPm2FO37N6flWKfyjevVYoTyNjKDFLqMYG3UaoL7DpoEg2G33Ny86QUKVpTHXa%2BW6yMiOw3VoLPtO582qo1d%2FcWakNK7v3TQlDNMwuHOLdtnnO7HAHTdhynLBqf2dugLK0a90JzOgN2zkdUmo8P%2BaqYnUuA0WNYz%2B2fY58m%2F1OZIrNTZOi9uaMuPYHIhMhttS0R4DEJPQpOfaelILYqxnTu3hokwt81iZgdNKz7kFDgmHwkReK7t2Drvocp4r20zuAoOPs2HwgWveORGGRMTqZopllZS5kr2PcysSM1pRtw%2B54lMKOh2MkGOqUBmRAJaTIJPSHH%2FuO7FVs7lF%2F8ot%2F2lZVOBrKY45VjNMoQ%2FxcuODs5B0tN9NNdip%2B2Y7t5LDEyZqeUDknZoNMtoaiXnnk%2FoCxLXNbevKIv9kO9d3Rx3IGydIYKD9kmQsK0z2zAN0G%2FVOhudSH2W3YU9h7d33OZNeZE7IkN24GPk%2FGNf%2FBtawU5WOYioixvLsfRrK8Uyy%2FCz3wMi0kihekM06J%2BYz7i&X-Amz-Signature=01edf9d11a9724e9e9d513311e21eaab36f3613a92d53d9820ac889d6f98f2ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
