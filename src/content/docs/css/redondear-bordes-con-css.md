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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622ECQVZN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErf0%2FUKXCEDjhUylqIgW7nOuj1IFMezSHlbGZUrtBqrAiBnQQJaaHN%2FlfX87WuWi3Pezq1AH8LFYnhxrxVKchROQir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM448d0%2BecjztwGmEaKtwDCv%2BRrpDnR8F2zUZsKXghWduN52%2BFqFiRvVC0GiCBp%2FLMEtTJE2DvlBAqsmmuyruy9GKiTQiZwOVxEDvCn8T77j%2FLFBzupL%2BJ70SUDWpOSmrRRxUQs7O7uaYh8q%2Buku6D2QkG%2BROaHw728fwBNTkffXyQRHVH61%2F4taGR4ocdIXLIZuNLHeEmB%2BFY93E1KmxVADt9%2FEqLY8oDX1xzRidjYrFcdV8kPcCAKjMqvunhRAfEC2XUbwNWD3XhfR%2Bo3RmoKap5L9oOzS2GsIcThwYXtAwD8rQzYXXOQCtxwq64jpheSGcB12govFLYObHQe4dLGIDgrDcfoAArx39Gx7TaZJMQzXFNm7Is5umMUyCGf3qqhuT2FKiDrw1hRP6llsQ9Ry3sbAp54FGRFzA5XRq%2FGfgT2dJK84DK8Xm3kS0tpkmfQ4iqivTdV%2B%2BxLhMikJ3DkWSQMFL9z6BORsrKhMkw%2Fs%2BgAXionzcfyeHb1Tnlije1RKldi3W%2Ftu9Z3KuMMSB%2BW5A8HNcr3OYQlWC1TGgDX5sffgWJ1i4%2BzCuWgV7ADLr0N638kdQHyDMD50oGvEMii7V368opSjiMQpdDyVufVBEk7%2FDnrGjheFTBX0xoNchYKGFvLGMdASf9iOkwufDLyQY6pgEtWgzV5ehhX9gx0IUDCZlz0cjScjJdRLaVT6KDORd7qylfX3S42WtkhLsW0LKCGY5p%2B3GgZeV4AY8HIyXnAfw%2FVDu8WOJdE5junJ2%2B00%2BUKkRlhTyIPFlq7%2BiO%2BSjVO9KMWxOhIFYnTvdPGwO9jKWVDcz2HhJwTEZVeWXjP21g2RvqskMSlAz84vZYUdXOtkDH7Y1hsKWpXg2BxaGLYteAkoDtVQ2Y&X-Amz-Signature=4087a78c341185e189e8f19fb29b6cbe03160878424c34119e60fc22d30aadb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622ECQVZN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErf0%2FUKXCEDjhUylqIgW7nOuj1IFMezSHlbGZUrtBqrAiBnQQJaaHN%2FlfX87WuWi3Pezq1AH8LFYnhxrxVKchROQir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM448d0%2BecjztwGmEaKtwDCv%2BRrpDnR8F2zUZsKXghWduN52%2BFqFiRvVC0GiCBp%2FLMEtTJE2DvlBAqsmmuyruy9GKiTQiZwOVxEDvCn8T77j%2FLFBzupL%2BJ70SUDWpOSmrRRxUQs7O7uaYh8q%2Buku6D2QkG%2BROaHw728fwBNTkffXyQRHVH61%2F4taGR4ocdIXLIZuNLHeEmB%2BFY93E1KmxVADt9%2FEqLY8oDX1xzRidjYrFcdV8kPcCAKjMqvunhRAfEC2XUbwNWD3XhfR%2Bo3RmoKap5L9oOzS2GsIcThwYXtAwD8rQzYXXOQCtxwq64jpheSGcB12govFLYObHQe4dLGIDgrDcfoAArx39Gx7TaZJMQzXFNm7Is5umMUyCGf3qqhuT2FKiDrw1hRP6llsQ9Ry3sbAp54FGRFzA5XRq%2FGfgT2dJK84DK8Xm3kS0tpkmfQ4iqivTdV%2B%2BxLhMikJ3DkWSQMFL9z6BORsrKhMkw%2Fs%2BgAXionzcfyeHb1Tnlije1RKldi3W%2Ftu9Z3KuMMSB%2BW5A8HNcr3OYQlWC1TGgDX5sffgWJ1i4%2BzCuWgV7ADLr0N638kdQHyDMD50oGvEMii7V368opSjiMQpdDyVufVBEk7%2FDnrGjheFTBX0xoNchYKGFvLGMdASf9iOkwufDLyQY6pgEtWgzV5ehhX9gx0IUDCZlz0cjScjJdRLaVT6KDORd7qylfX3S42WtkhLsW0LKCGY5p%2B3GgZeV4AY8HIyXnAfw%2FVDu8WOJdE5junJ2%2B00%2BUKkRlhTyIPFlq7%2BiO%2BSjVO9KMWxOhIFYnTvdPGwO9jKWVDcz2HhJwTEZVeWXjP21g2RvqskMSlAz84vZYUdXOtkDH7Y1hsKWpXg2BxaGLYteAkoDtVQ2Y&X-Amz-Signature=bfdd8f577808f5bd1a1f4d680a628055c4cb3453ce7f39546a46b08811132f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
