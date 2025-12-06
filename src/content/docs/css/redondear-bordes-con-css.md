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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OD34Q35%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSr9HpUJArBCA9akE3IMIkz2dMlGO1Kn93ZWX%2FZ7RXEAiBEo1yXJoH5ttQ%2B3gfNQBysTeEHbpd2mTHh7vsxMb9g%2Fir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMDoN9aRcSqjjOCe60KtwDPumQYk30HU9QBXbnv87pEpVITBb4AONG84oSq4RLbMqI4JloAc5YOhxfuVZsTsWoMxY2tJK3CwiH42OZK2dIXeaqQ%2Bnf6nMd3znmTko%2FcNCifYBbXuQ5kwPpnQVP41XaP02smbReMUPzaJq4lhoN1u1099JoBXNX%2B31XHXB9qyQ8HKbXQkGb2sTcbBVTfFzI6oF4YO4q2sfZeEPcr6KRp%2FdYNPxC3nJIxhGRozNDVR1SEYIvPXd8mijPaa9Io%2FSMlN13aOXP1MB6%2BctqmcoVLsgAasax5aMfT5xGGjQPXuvfo7rBTglcqFnImJO24kKWcToKoWnfcEMORZD9xRM8kz%2FkJsRJyT7QgttE5jVSvFJh%2FssHUatTorrfYVR5rwGP5HJd6NahSXXLYgnZWTCn8OYCiEG%2FShJV9VN%2BTtOUM8J%2FA0C%2BcoHFRmmGIfJHsQsiWU9XkEhV7zh65sWq53UsehB743qONmFg3D8ZAtMN8z0hSdMc5qEWYcERUtEmb0cQqXQs1AShVu54EXx2ZlUrgYgTl2xK6DWa%2BQJPwLej3jP5XBK4q2mWdHj0f3CViO8XNLm6F4F%2F3OGlK6lVoAM%2FGj70jWoFZ3xaY85SWOhyvIZeuyszYv5GkrrmiQkwz6bQyQY6pgEW%2FZPNWQxzj4Wopy3CeQH8%2FENQu0RiO7rhVYjz5%2FfyPQ%2BwwwoljPQqA43fB6CyC%2F3gBAgYIyPBgwsE2WJ8gxkdDOpUD3CZwVi%2FkBmYyQDP%2F%2BbIhn290goB6QCkXKNewNfv258XdHRjp%2F7Od7RgDWtP7lSZOXTDf%2Bvx9h5qnI%2B%2B1tSjNlQcEQ2dQoDyen2sG9K7k7JMSbToQjC%2BrwaAqYAI40la9fyY&X-Amz-Signature=da82cd02de7c5aa9c7d76dbfe58f3dd6a60883052d12d0d64bb5710d0edb7921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OD34Q35%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSr9HpUJArBCA9akE3IMIkz2dMlGO1Kn93ZWX%2FZ7RXEAiBEo1yXJoH5ttQ%2B3gfNQBysTeEHbpd2mTHh7vsxMb9g%2Fir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMDoN9aRcSqjjOCe60KtwDPumQYk30HU9QBXbnv87pEpVITBb4AONG84oSq4RLbMqI4JloAc5YOhxfuVZsTsWoMxY2tJK3CwiH42OZK2dIXeaqQ%2Bnf6nMd3znmTko%2FcNCifYBbXuQ5kwPpnQVP41XaP02smbReMUPzaJq4lhoN1u1099JoBXNX%2B31XHXB9qyQ8HKbXQkGb2sTcbBVTfFzI6oF4YO4q2sfZeEPcr6KRp%2FdYNPxC3nJIxhGRozNDVR1SEYIvPXd8mijPaa9Io%2FSMlN13aOXP1MB6%2BctqmcoVLsgAasax5aMfT5xGGjQPXuvfo7rBTglcqFnImJO24kKWcToKoWnfcEMORZD9xRM8kz%2FkJsRJyT7QgttE5jVSvFJh%2FssHUatTorrfYVR5rwGP5HJd6NahSXXLYgnZWTCn8OYCiEG%2FShJV9VN%2BTtOUM8J%2FA0C%2BcoHFRmmGIfJHsQsiWU9XkEhV7zh65sWq53UsehB743qONmFg3D8ZAtMN8z0hSdMc5qEWYcERUtEmb0cQqXQs1AShVu54EXx2ZlUrgYgTl2xK6DWa%2BQJPwLej3jP5XBK4q2mWdHj0f3CViO8XNLm6F4F%2F3OGlK6lVoAM%2FGj70jWoFZ3xaY85SWOhyvIZeuyszYv5GkrrmiQkwz6bQyQY6pgEW%2FZPNWQxzj4Wopy3CeQH8%2FENQu0RiO7rhVYjz5%2FfyPQ%2BwwwoljPQqA43fB6CyC%2F3gBAgYIyPBgwsE2WJ8gxkdDOpUD3CZwVi%2FkBmYyQDP%2F%2BbIhn290goB6QCkXKNewNfv258XdHRjp%2F7Od7RgDWtP7lSZOXTDf%2Bvx9h5qnI%2B%2B1tSjNlQcEQ2dQoDyen2sG9K7k7JMSbToQjC%2BrwaAqYAI40la9fyY&X-Amz-Signature=ba3fbe60e217010f93d43442ea131c0d14a16ea7409b2a1ad778b81cbb910129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
