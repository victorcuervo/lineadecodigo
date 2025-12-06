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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y3FSUAN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdXnaZduG2XuX6YlxR5mA83BPBtRp%2Bw2qLUdf1WDqKSAiEAuY5TdpVfkwQVQYBmDSwvSnxQg2zeaUE37PK1HiA9ngsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDM3BJe89jmVrChSKASrcA12AzWNGPB6MqaUAk1jXwQh2scdEMlX93poVYCqpsRsXard4nPuP8cMg7cFT85k5XFX9V9Lok2Vo58WCfvIK40%2B1YmJRZAlBzJb350a0tsc%2FaGI16zvCk9No9y5AgMixMxT0dVhr3Kxm6iepFHbkAWRRMrUxCxNVJz6rknYU18YbXG18ybHCWR7kV4ON7dqLeMy%2Bf7HdbhEho1eNBDVsCAIH9DS56C9MWay%2Bt9XPseK2HVAyUa%2FzbfkYDeMMnrwhYQn0f1O9h9p3Kt2kGHkNUGTU9RFlTss0ONRhppLVg7UtPm2ZddP0fJszfK0FTa9vsZ4TDJh0V3FuMjM87%2BeQw%2BDjC5Uzgpq5rnLTUSKoGZGhuNa6TwM3Nc83dlYvAMweDVJDeIDJeEcy3d%2BmDBMbdaBWN740ZUE0fVpqRVXfUdoQ8UgcYUA5ncDa%2FRuM3r1e0pp%2F7gIpZvx8Mt9T01WiNXSdy4sQ5NgZcqS7Alsb9coachoBqv8Ux1FpNrxie9UEbveN2EVngLkUD29fHJuUz9TjvMP94sdjapZM2AbAjdSIXJzEGQutW5jJrvgkDRnwcnhwxpwlQRJCjqOvn3R2fG6j5SVCQcI289qgLFowt8Dg6O9whhLZqW9ihFkNMPWm0MkGOqUBHqkaQ1XiqqZSghAfRr9iyofBwlprQNZ5It9RysPvSSCvtTDqjJJDk%2FgsNbZBl0dtdoYkVkBFIvYHJGZA0R5nF1M68T0wcedA613fU%2FeLjKj1%2BNkb1doYeBJ9bMM4btvkSc1jgm2Nw%2BaIHWDgnjs0%2FU9z071wLwepJzS6RhtIcqn5eKzdDkNc98GaiG7lmlIy8eNV4Ome1FtAsnW1U5dM15ylONg0&X-Amz-Signature=4a2ac83ace8cec8fb7b70a2650d33870b08194771cba1d69e62fcd962d1d61d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y3FSUAN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdXnaZduG2XuX6YlxR5mA83BPBtRp%2Bw2qLUdf1WDqKSAiEAuY5TdpVfkwQVQYBmDSwvSnxQg2zeaUE37PK1HiA9ngsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDM3BJe89jmVrChSKASrcA12AzWNGPB6MqaUAk1jXwQh2scdEMlX93poVYCqpsRsXard4nPuP8cMg7cFT85k5XFX9V9Lok2Vo58WCfvIK40%2B1YmJRZAlBzJb350a0tsc%2FaGI16zvCk9No9y5AgMixMxT0dVhr3Kxm6iepFHbkAWRRMrUxCxNVJz6rknYU18YbXG18ybHCWR7kV4ON7dqLeMy%2Bf7HdbhEho1eNBDVsCAIH9DS56C9MWay%2Bt9XPseK2HVAyUa%2FzbfkYDeMMnrwhYQn0f1O9h9p3Kt2kGHkNUGTU9RFlTss0ONRhppLVg7UtPm2ZddP0fJszfK0FTa9vsZ4TDJh0V3FuMjM87%2BeQw%2BDjC5Uzgpq5rnLTUSKoGZGhuNa6TwM3Nc83dlYvAMweDVJDeIDJeEcy3d%2BmDBMbdaBWN740ZUE0fVpqRVXfUdoQ8UgcYUA5ncDa%2FRuM3r1e0pp%2F7gIpZvx8Mt9T01WiNXSdy4sQ5NgZcqS7Alsb9coachoBqv8Ux1FpNrxie9UEbveN2EVngLkUD29fHJuUz9TjvMP94sdjapZM2AbAjdSIXJzEGQutW5jJrvgkDRnwcnhwxpwlQRJCjqOvn3R2fG6j5SVCQcI289qgLFowt8Dg6O9whhLZqW9ihFkNMPWm0MkGOqUBHqkaQ1XiqqZSghAfRr9iyofBwlprQNZ5It9RysPvSSCvtTDqjJJDk%2FgsNbZBl0dtdoYkVkBFIvYHJGZA0R5nF1M68T0wcedA613fU%2FeLjKj1%2BNkb1doYeBJ9bMM4btvkSc1jgm2Nw%2BaIHWDgnjs0%2FU9z071wLwepJzS6RhtIcqn5eKzdDkNc98GaiG7lmlIy8eNV4Ome1FtAsnW1U5dM15ylONg0&X-Amz-Signature=89d8f663a26dbb0964d0d7f73b883ef90ed6b3212be55395ca9da2d5c21f66ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
