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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3F4ILTC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnTvju3zs6g%2BiesvUvY%2ByJeTGsqcaXvGT47fPGAmtmDAiB8Zobh4VwnYO9NeKxZD1e4fAB52igd3Wri489nhDC4GiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe7OOySWUrNB72ZlcKtwDRxdiDICHYuX%2FQj%2BybabAca342cPRSgJJEvw%2F7pa4tnWl7zfOjaER9STcuU3he%2Flu3jRdtc2ZZSs%2F0JsXk30H7RFsNn789%2FYsVtACsMRctqmArCRXsUVn62oe3I5Lt3s0u0F3Qlyp6lUp9Cjbsg2IFPb%2BiL10E%2BENFftZD%2FVldKAXWYaMWn8PcXelIFo92b6qhj1%2B8NBmqQtevZdP1DAYjYU8dqBkBu05HPURDKW9ugRPXJeG3mq4Qg5kLpNRJE76s%2BE9JQ5ol3BHG%2B72liMwRdMJxrM8HeAyC8geXDVS1xDgP8srFMPEV84qi5BSgMwa5hd%2Fr7RXZtK38bsegTx6jSlTj7LafhjCqUzFHN3EKufBXuO4ObvBPs9qbx9a%2BQWaAYhr2IncPQDuE2vxrf5Xy7UZY%2FAq%2FfSADh3OoU%2BxwbPSGDQkj6rQ4diAwxUSQdad%2B9IGxIlCFKWr5EDYyz9NbS%2Bl2IZYpOUvbeffW94Ho0A4Yq6DoC16G4v7atiA80Cy%2BRfP9aV1bi8A4Nx%2B5L%2FsV4oF9Cp7wBWHFXfo8ZZpwji4NGkduBgmb2pMquc%2BzBMn6WOd8EWTS%2BgxzmsrgyZUuGRYHfs3IHB6zuHbf2YkGN9yAbLX45JSzUjP6r8wqcPfyQY6pgHzjjyFf1qgmAz7JVsLQ81crYJg%2F24jBSx79AnyE5wr91p5RRmvSj4h5a8e%2Fts%2FYIZ7WDAN4dDSef0%2FkQde7FGpaLiVOY133JU7e%2FWhZuwHhoskatDR3J2cNoy0dKzd%2BHtUDPczFPyRbpD3yddgN799CjyX3dLww6nJ53rH6%2BgvGqGRy3r%2BpftzcrXuKVHkkyh2J%2BwKqxIuUyMUl26ei0KXU8OTq%2Ft4&X-Amz-Signature=d13f0c1d16509af049ed588e0ab5702a08b6fcf1a45bd2efb80de5279860ce8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3F4ILTC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnTvju3zs6g%2BiesvUvY%2ByJeTGsqcaXvGT47fPGAmtmDAiB8Zobh4VwnYO9NeKxZD1e4fAB52igd3Wri489nhDC4GiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe7OOySWUrNB72ZlcKtwDRxdiDICHYuX%2FQj%2BybabAca342cPRSgJJEvw%2F7pa4tnWl7zfOjaER9STcuU3he%2Flu3jRdtc2ZZSs%2F0JsXk30H7RFsNn789%2FYsVtACsMRctqmArCRXsUVn62oe3I5Lt3s0u0F3Qlyp6lUp9Cjbsg2IFPb%2BiL10E%2BENFftZD%2FVldKAXWYaMWn8PcXelIFo92b6qhj1%2B8NBmqQtevZdP1DAYjYU8dqBkBu05HPURDKW9ugRPXJeG3mq4Qg5kLpNRJE76s%2BE9JQ5ol3BHG%2B72liMwRdMJxrM8HeAyC8geXDVS1xDgP8srFMPEV84qi5BSgMwa5hd%2Fr7RXZtK38bsegTx6jSlTj7LafhjCqUzFHN3EKufBXuO4ObvBPs9qbx9a%2BQWaAYhr2IncPQDuE2vxrf5Xy7UZY%2FAq%2FfSADh3OoU%2BxwbPSGDQkj6rQ4diAwxUSQdad%2B9IGxIlCFKWr5EDYyz9NbS%2Bl2IZYpOUvbeffW94Ho0A4Yq6DoC16G4v7atiA80Cy%2BRfP9aV1bi8A4Nx%2B5L%2FsV4oF9Cp7wBWHFXfo8ZZpwji4NGkduBgmb2pMquc%2BzBMn6WOd8EWTS%2BgxzmsrgyZUuGRYHfs3IHB6zuHbf2YkGN9yAbLX45JSzUjP6r8wqcPfyQY6pgHzjjyFf1qgmAz7JVsLQ81crYJg%2F24jBSx79AnyE5wr91p5RRmvSj4h5a8e%2Fts%2FYIZ7WDAN4dDSef0%2FkQde7FGpaLiVOY133JU7e%2FWhZuwHhoskatDR3J2cNoy0dKzd%2BHtUDPczFPyRbpD3yddgN799CjyX3dLww6nJ53rH6%2BgvGqGRy3r%2BpftzcrXuKVHkkyh2J%2BwKqxIuUyMUl26ei0KXU8OTq%2Ft4&X-Amz-Signature=3496b8a977bd1815b9de8c37abbc6bc10d955ab04973a9f5c02dff4d758abaa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
