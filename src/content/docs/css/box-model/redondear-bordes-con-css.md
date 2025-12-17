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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667YLHXRR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqTyp8Zf3MoI3idThCg8b1on7qSfKgjKnTXuBBBgBvNAiEA6zmneBOH4kusV3YQ43I8BzUtl8U2Up4%2BHKze6r2ip00q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDGjIqy15Txx0Hb6KGSrcA8cXpz%2FWlSFZeYYunAGA6uReYIbAYHzIj%2FFrxspyA57%2FxckLl%2B1n08mmGm3a5CVO8h5e589OxuiPkpUfk%2BbgX%2FccdcpxUKsaKZUzFpaxdwC%2F8iwWSCJhq0hzNytjVEyYf6kqu6UbJ4Vbp3ZzHeVYUU%2BAKroVmztHJhwP7sumkqX%2B%2BoJi4eZ4mD%2FW1jtUKWH9eW%2FbRPEgPoHG4VvzoGXzFNXOJLxEppmdwyoNwa7bDiTNmrm%2FC1ik7L0AL9JJNVxrr5ImaSSVrHmhcvkCqlyucPJycgemBZOz9IrrCzHucQ0g48c5STd4Brdhi3DfRCxdV4gia4l8A%2FLZWt6kL5Ln3z8vbwlePapU4RBhr7qmhV16FwpfRkmiHG%2B64wVY%2BtiYnXNV8JCLyDJ7FKn1x2cmPC6Ga3jJTNFFCH9DWg5qXnuc%2FhtFzJuTQQA4uWZTAXTXDbx5LXDsIrhDg4wQAd0maJ%2FedPbUEQBBTtY7mVmg10EyaVnY2vWmsZgiSMkIuTKEHQbGbQos5%2BNImvt1r4e2KYIvbalDEIMycWTmapXRqRDl4P5xegayoJGuwf9Wi37Ta%2BBZSx%2BpkkOd7iWmEU1ropUaoThjpfZJa%2FhRIua6bAY7C3eTcdwUbrV5%2B2e%2BMNjpiMoGOqUBkcm%2B1oozde5XmENiKisGCWZuk7LeJnMWuDz%2F075o9PRY8dHHermTlJoijKiQwqdtXBSI1nenB%2Fce1hxy0LhUK1npsPRlFIpCknVm%2Bs%2F5XiwJuCgXDeFh9WP%2Fbd9H6YFqONEg%2Bp3WHy51KA2sZ53UHEbILZriyntlKtb%2BvF9Q0m1Iqcblzn6%2FyIECFI6k3fAxaK6N6wriCkXNUOOB2xhByKv%2FBlMG&X-Amz-Signature=beb6ca6d9aa8f29eb0a3054f9806d6fb068ee991a43bb0277ea74ba9ffaf2b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667YLHXRR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqTyp8Zf3MoI3idThCg8b1on7qSfKgjKnTXuBBBgBvNAiEA6zmneBOH4kusV3YQ43I8BzUtl8U2Up4%2BHKze6r2ip00q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDGjIqy15Txx0Hb6KGSrcA8cXpz%2FWlSFZeYYunAGA6uReYIbAYHzIj%2FFrxspyA57%2FxckLl%2B1n08mmGm3a5CVO8h5e589OxuiPkpUfk%2BbgX%2FccdcpxUKsaKZUzFpaxdwC%2F8iwWSCJhq0hzNytjVEyYf6kqu6UbJ4Vbp3ZzHeVYUU%2BAKroVmztHJhwP7sumkqX%2B%2BoJi4eZ4mD%2FW1jtUKWH9eW%2FbRPEgPoHG4VvzoGXzFNXOJLxEppmdwyoNwa7bDiTNmrm%2FC1ik7L0AL9JJNVxrr5ImaSSVrHmhcvkCqlyucPJycgemBZOz9IrrCzHucQ0g48c5STd4Brdhi3DfRCxdV4gia4l8A%2FLZWt6kL5Ln3z8vbwlePapU4RBhr7qmhV16FwpfRkmiHG%2B64wVY%2BtiYnXNV8JCLyDJ7FKn1x2cmPC6Ga3jJTNFFCH9DWg5qXnuc%2FhtFzJuTQQA4uWZTAXTXDbx5LXDsIrhDg4wQAd0maJ%2FedPbUEQBBTtY7mVmg10EyaVnY2vWmsZgiSMkIuTKEHQbGbQos5%2BNImvt1r4e2KYIvbalDEIMycWTmapXRqRDl4P5xegayoJGuwf9Wi37Ta%2BBZSx%2BpkkOd7iWmEU1ropUaoThjpfZJa%2FhRIua6bAY7C3eTcdwUbrV5%2B2e%2BMNjpiMoGOqUBkcm%2B1oozde5XmENiKisGCWZuk7LeJnMWuDz%2F075o9PRY8dHHermTlJoijKiQwqdtXBSI1nenB%2Fce1hxy0LhUK1npsPRlFIpCknVm%2Bs%2F5XiwJuCgXDeFh9WP%2Fbd9H6YFqONEg%2Bp3WHy51KA2sZ53UHEbILZriyntlKtb%2BvF9Q0m1Iqcblzn6%2FyIECFI6k3fAxaK6N6wriCkXNUOOB2xhByKv%2FBlMG&X-Amz-Signature=743288d6307e012597628c831060240514612d6d390f06ec16e5865036e62b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
