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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROOPFTY4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgYUCq8XGLgAcQupUMymvl5Y7iTKv%2Fb0n4vMIbxbV9UAiBMMLRWECLCLk9Xw0Kw2DclGDDliBojrxuEaCdXTkyd1CqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKzdsNuVSJYtceWZ9KtwDly3rYNOeLKelJuH0l30ssklZE5%2Fj6KRm9eI6FbliczTmaT%2F6nFmWZR1OEiEmxateJJqFFW0vhUiBJ6mbMFnXbCdkTnLB8stUSivUen1OVLLnm7UP8rATzURTv3ciF3NnJSRALf%2BTD%2FoUqyrtDEPhihvOSAzpl%2FzfaDFbB511yVP9QoGgc33zgs1tdXhiyRzmLVEmvx8lgiMJXpMBtxEt591v2nkdctroyl3VrjVM2A357iebGopt4JTVQdZ%2FA%2FASdoZg%2BGOp4PGxJ33E%2FUr%2B0FEGWUsDR%2FXfH8Chs%2Buc8En6cvszFUIe4ffnHMwJEaEsFfWcY%2Fec75W6W5PUoIt4ijfu5cu92TbblsPDMUcbWHXJwLRn%2FTjCH5ZcD8UDYcl83G65c%2FrJrfYsI0WacSjt03asUWnVfOEEqAckTuDbUukcCKLi4y659dn4Tl7q5jzfFKQ7W09UfO9vb4%2BNO06sz3Mb3IFYspWr8glY3pZQkoQU4ZpbsJdgYvlh%2B4whxU8Dg2f4WTu1w%2BLNG8ZsDu%2BGwP%2F9NEAm45TpWjZLfgjKiqhr2ik34GiAcMun757aG%2FS0%2BAYtmF8ihErP41gXQ971jNLFzFB3WCg6gbv0oGtR%2BVJwOV14OBYfvP6q4Ssw2K6MygY6pgHdohb8zYESriGKahMMKrWI5RcWqXCsdA13UsZdAk9dky0UKqY%2BZQYjXlXprzRX31wnYu2sd81ftKNn92D45uSodKJ6nBM2qhHA6Z7FHbTFGTaVi6jsFYai1%2FhS3ehZTm6SDlz1OvqX4hTiq8%2FCyIzPb1WLB3y3shu%2Bc30ROQtm%2FS0HrlRvgBt6N1hekD%2FGoCOt4U30YPeKp%2B2djz%2BDt6cR7eAAgfQN&X-Amz-Signature=211353daab8b2131784079f9d09cc251fe49c356b4d91c399e30ca33aad7b15d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROOPFTY4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgYUCq8XGLgAcQupUMymvl5Y7iTKv%2Fb0n4vMIbxbV9UAiBMMLRWECLCLk9Xw0Kw2DclGDDliBojrxuEaCdXTkyd1CqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKzdsNuVSJYtceWZ9KtwDly3rYNOeLKelJuH0l30ssklZE5%2Fj6KRm9eI6FbliczTmaT%2F6nFmWZR1OEiEmxateJJqFFW0vhUiBJ6mbMFnXbCdkTnLB8stUSivUen1OVLLnm7UP8rATzURTv3ciF3NnJSRALf%2BTD%2FoUqyrtDEPhihvOSAzpl%2FzfaDFbB511yVP9QoGgc33zgs1tdXhiyRzmLVEmvx8lgiMJXpMBtxEt591v2nkdctroyl3VrjVM2A357iebGopt4JTVQdZ%2FA%2FASdoZg%2BGOp4PGxJ33E%2FUr%2B0FEGWUsDR%2FXfH8Chs%2Buc8En6cvszFUIe4ffnHMwJEaEsFfWcY%2Fec75W6W5PUoIt4ijfu5cu92TbblsPDMUcbWHXJwLRn%2FTjCH5ZcD8UDYcl83G65c%2FrJrfYsI0WacSjt03asUWnVfOEEqAckTuDbUukcCKLi4y659dn4Tl7q5jzfFKQ7W09UfO9vb4%2BNO06sz3Mb3IFYspWr8glY3pZQkoQU4ZpbsJdgYvlh%2B4whxU8Dg2f4WTu1w%2BLNG8ZsDu%2BGwP%2F9NEAm45TpWjZLfgjKiqhr2ik34GiAcMun757aG%2FS0%2BAYtmF8ihErP41gXQ971jNLFzFB3WCg6gbv0oGtR%2BVJwOV14OBYfvP6q4Ssw2K6MygY6pgHdohb8zYESriGKahMMKrWI5RcWqXCsdA13UsZdAk9dky0UKqY%2BZQYjXlXprzRX31wnYu2sd81ftKNn92D45uSodKJ6nBM2qhHA6Z7FHbTFGTaVi6jsFYai1%2FhS3ehZTm6SDlz1OvqX4hTiq8%2FCyIzPb1WLB3y3shu%2Bc30ROQtm%2FS0HrlRvgBt6N1hekD%2FGoCOt4U30YPeKp%2B2djz%2BDt6cR7eAAgfQN&X-Amz-Signature=1fac2e9295c503a681030c386e94eee1c9f6b04a1d87ff8eced952f13bf1f20a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
