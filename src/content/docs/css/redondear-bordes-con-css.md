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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZX6NIG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHj7MTSjnJ3QZu%2BnZ42qjmCl5TBRTAFDgCJclSFSZEFxAiEA0Ra0cnMziVi26eJV1LKhqrCVAXu8x4JTCamC5S6EgSMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIVPJXg18uNRGijidyrcA6wME4CzhTO%2Bdur0%2FMM2kaT2c2qJZ%2B4Xn5b%2FwHQJnCVXto0pAcEItU77Xy43%2Bknp9eA0ElPLMVwvi%2Fxx5ZPNSleBzSdTGPKqaGtshdbxx6ap4ODdHPCkkjgXrsmJQEOThu%2FdcZvUw6G%2BzCLdQ1wTJxMZoe7%2FxDtJjjuSkJbcbJwkIimQcUW560JmXY3cfdf9SUHAilYTQcCSjBKCxjPiTfXZNqv%2BH3l2z4YxA07ym2%2Bxppf7GTrEAhgLQ4mn%2F14Zl4Ki4hVLBeeq%2BB77o3yM2zEhGPfQET2Ctk%2BLbJS%2FDBphnFgcHeXViIofXfUEaxBPa5uW5gK89x4gYaiXWIrZHpmCYoS32EUMdMDAcCFV0YHQEgP3L%2F4ZZDpcXcZPyzZ3BhzqRpmnPcy3%2FK8EugyfPs6t0SVECuNnmcgTo23yRvOw4moHzkhpDagHrXRd5vyKkiMuUuCcvTgqbA2cL3SlBYpIq29Zxy%2BPr5u95rdEoIDQKyKlIbGxdeJszYoY1iFYHx0yU5JMDrlDlB7EVxb2PUFpMZKwa%2FkHCCwPbRQpZCjabKYd80%2BYQG2L760DNR9l5EhfVrRaFY1K7%2Ft4PR%2BQn%2FSiAWksExw9nSWliPM7Tp1hM3%2F%2Bte6cbObzOMokMKG8z8kGOqUBzZqdHSXyr5AtQu7svI2tolWnKfvb0rXhtMnJB%2F%2FGstMQlDRbFIJd7BexNNVEMxjaWCMBRE9O4jxAZBLXIykm7SRqy7Yjx6qPzWpAwqbRgWpdsyGQV1zeTkiLEclpC7l7O6%2FZ4%2FABp1L%2FGxetUloG1sm%2Bu25D4tf70Xat%2BwuJwQHCvWMUjSj2YPinAOKdYAyNiRVEB3GigY%2BHnOkNsfMPwLP07ISa&X-Amz-Signature=cb804b45869c8e3a8aaea3c8fbf74538530c3d488550b553b9417e674ba80710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZX6NIG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHj7MTSjnJ3QZu%2BnZ42qjmCl5TBRTAFDgCJclSFSZEFxAiEA0Ra0cnMziVi26eJV1LKhqrCVAXu8x4JTCamC5S6EgSMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIVPJXg18uNRGijidyrcA6wME4CzhTO%2Bdur0%2FMM2kaT2c2qJZ%2B4Xn5b%2FwHQJnCVXto0pAcEItU77Xy43%2Bknp9eA0ElPLMVwvi%2Fxx5ZPNSleBzSdTGPKqaGtshdbxx6ap4ODdHPCkkjgXrsmJQEOThu%2FdcZvUw6G%2BzCLdQ1wTJxMZoe7%2FxDtJjjuSkJbcbJwkIimQcUW560JmXY3cfdf9SUHAilYTQcCSjBKCxjPiTfXZNqv%2BH3l2z4YxA07ym2%2Bxppf7GTrEAhgLQ4mn%2F14Zl4Ki4hVLBeeq%2BB77o3yM2zEhGPfQET2Ctk%2BLbJS%2FDBphnFgcHeXViIofXfUEaxBPa5uW5gK89x4gYaiXWIrZHpmCYoS32EUMdMDAcCFV0YHQEgP3L%2F4ZZDpcXcZPyzZ3BhzqRpmnPcy3%2FK8EugyfPs6t0SVECuNnmcgTo23yRvOw4moHzkhpDagHrXRd5vyKkiMuUuCcvTgqbA2cL3SlBYpIq29Zxy%2BPr5u95rdEoIDQKyKlIbGxdeJszYoY1iFYHx0yU5JMDrlDlB7EVxb2PUFpMZKwa%2FkHCCwPbRQpZCjabKYd80%2BYQG2L760DNR9l5EhfVrRaFY1K7%2Ft4PR%2BQn%2FSiAWksExw9nSWliPM7Tp1hM3%2F%2Bte6cbObzOMokMKG8z8kGOqUBzZqdHSXyr5AtQu7svI2tolWnKfvb0rXhtMnJB%2F%2FGstMQlDRbFIJd7BexNNVEMxjaWCMBRE9O4jxAZBLXIykm7SRqy7Yjx6qPzWpAwqbRgWpdsyGQV1zeTkiLEclpC7l7O6%2FZ4%2FABp1L%2FGxetUloG1sm%2Bu25D4tf70Xat%2BwuJwQHCvWMUjSj2YPinAOKdYAyNiRVEB3GigY%2BHnOkNsfMPwLP07ISa&X-Amz-Signature=d53ee7f97222bdc50d173d682c962f949cd296335cf463e2afffe23447479c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
