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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUSGT7A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIA0VGTCfwpahZVTyRr%2BsXlRTdi2WijJuS2ozljQiVxEMAiEA0hmM33hxPYX29hC3b58QiQgL1MgzvWPrC1vak5hne5wq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBM9UMxhRYIVQSdA%2ByrcA0WABeGzyLUBfTsF4zX5bXf%2Bh2WnDi7A9DMTqkClu1cng0j1QREHfCD9lyQpEDKfjSyxGSU1iCNChy2CLrcOuKou9mRhOK7uGrmzQCzbhaCGUdW9XvQuV6hQNvKz4QVwOLITt9LyaKTCnf%2F%2FualyjVxazp3r8zZUDDZ%2BccGdfH%2Br1PFD%2Bmfie20Af%2BXFfyfxNq1O85fhAE%2B4YNSOTHvc%2BPCXTUEQvyJHzovpDbV35qrHo0RARCOuYsXKGqPPixzMxUi9MddVmrNk%2FEIUsSTaLmZK%2FRaJST8LRQYAntxLfvvHYtNaiB8ADNX5RRIbJRmmUBB7sp9X7PMKFmE6Hgsp6otj4QLqxwYajNip8fBdc6pZMIv3bk14HKV8k1sYBYqVuedTjtApiJSptc130paVvnYiqcN7nIJI800JxV5kKwqZVkNxnMT6E%2BdLoEQ6I8%2Bfe%2B1Q%2FdaPKCUcuhBTURqUK25Jy2XfqrQ15O2FS2rqX%2BJ%2FCnptC%2B1pdQuUBCqezDQdFRFqxkjHkBW9aj2N1BCqMS2Y84lFH%2F7dIuPlNHkvPSPNMuuLTb6a1r0dMWls35yvy0ue9iXjqLk0t0L6sAF9QLWLVm%2FXWGyRPwsxieADmbYm6UytiGzxo5sV5DXUMOKExckGOqUBIKOS1qVoPUCMXswrya%2FJpk8DGHE0YKjMkCq3xO14Z3bAnGgYGx2vEjiCgvPLH33gGecJZMj45a94D9%2FeKwdPeE3mV2h9KE%2BVSCwjxlEurJrRg29P32sb2VQJUfUXSuWxSpMBvSK%2FJy8SVGBGniD9WsCJoED4sLqcicNBZAnZMLUX2bACHfdCOwOLjXOH5e6WOysiS6BouPqK0ACJ6BoXmNtM7L95&X-Amz-Signature=015d3e080cacdbba836c7443d246cf269597ed000e5146ecfc5a2cfef3150af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUSGT7A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIA0VGTCfwpahZVTyRr%2BsXlRTdi2WijJuS2ozljQiVxEMAiEA0hmM33hxPYX29hC3b58QiQgL1MgzvWPrC1vak5hne5wq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBM9UMxhRYIVQSdA%2ByrcA0WABeGzyLUBfTsF4zX5bXf%2Bh2WnDi7A9DMTqkClu1cng0j1QREHfCD9lyQpEDKfjSyxGSU1iCNChy2CLrcOuKou9mRhOK7uGrmzQCzbhaCGUdW9XvQuV6hQNvKz4QVwOLITt9LyaKTCnf%2F%2FualyjVxazp3r8zZUDDZ%2BccGdfH%2Br1PFD%2Bmfie20Af%2BXFfyfxNq1O85fhAE%2B4YNSOTHvc%2BPCXTUEQvyJHzovpDbV35qrHo0RARCOuYsXKGqPPixzMxUi9MddVmrNk%2FEIUsSTaLmZK%2FRaJST8LRQYAntxLfvvHYtNaiB8ADNX5RRIbJRmmUBB7sp9X7PMKFmE6Hgsp6otj4QLqxwYajNip8fBdc6pZMIv3bk14HKV8k1sYBYqVuedTjtApiJSptc130paVvnYiqcN7nIJI800JxV5kKwqZVkNxnMT6E%2BdLoEQ6I8%2Bfe%2B1Q%2FdaPKCUcuhBTURqUK25Jy2XfqrQ15O2FS2rqX%2BJ%2FCnptC%2B1pdQuUBCqezDQdFRFqxkjHkBW9aj2N1BCqMS2Y84lFH%2F7dIuPlNHkvPSPNMuuLTb6a1r0dMWls35yvy0ue9iXjqLk0t0L6sAF9QLWLVm%2FXWGyRPwsxieADmbYm6UytiGzxo5sV5DXUMOKExckGOqUBIKOS1qVoPUCMXswrya%2FJpk8DGHE0YKjMkCq3xO14Z3bAnGgYGx2vEjiCgvPLH33gGecJZMj45a94D9%2FeKwdPeE3mV2h9KE%2BVSCwjxlEurJrRg29P32sb2VQJUfUXSuWxSpMBvSK%2FJy8SVGBGniD9WsCJoED4sLqcicNBZAnZMLUX2bACHfdCOwOLjXOH5e6WOysiS6BouPqK0ACJ6BoXmNtM7L95&X-Amz-Signature=c150bb92357316e148363cd5b96d18821a008bc341795f0d0a6e1a293d86d09e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
