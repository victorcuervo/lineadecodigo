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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV6UCMU3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtN02df%2BztRGk8k2lPb7F5IVLa%2FqMkaCK2YU8fL6EZ0AiEAg1845TclxcHqxJ1Vqqs%2FynWTBFFOfkj55pKr4F36yXwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvJpSvpIc0Nduy3%2FyrcAwU9%2BToGxIcYtrofLhpKlvt3QiUR48chIxJ5sur5PvM%2FmG%2FWF9emlgAMhMg0LjiGSmh%2B4xWwKapqWgpKf%2FZFUgb%2FByc9fhkKipTcnpYVeRRUXoQNB%2BS1nDKEqgsxIQB5KCCYgkCTf5lbjh2X%2B0PvmV%2FxipOxQ%2Fhehad8nfu4GSEtYsDZN5FGcDUB94BLGR4dpvTz88NxI5MPYWNMibjgW2sDaGCJDQR3TScegB%2BPYqpCExkGm6WetqtDppt2%2BqLdqco3VR3HidLyJ8hzRxLaOvB9gZCzmkDDafChycuYq8sFPQnayQ4qeg55LsGzcM9SRIen00I0xpdRTwxdK5hskE%2Ffc%2FgQuRBMjYBM1xvfKsKhV5SgQThULRjso%2FEnMjGl4l80NLpfdGRY1swaSHge9mav1%2BLVL3UwgiDdzaJUj491ongJI3ARG%2BxS14sm32C%2Fw2gm4JBTWA8XKdrEXe059BOk1rkP2zTET6CdvLF6gZXXOcg0dll5CaA%2FpjIx1DZo9p%2Bo90pXEfgNP%2FxXqaPaXvxgbFC%2FHzGJMv6zz0yRdXB%2B2nvdWNvfTsdbDQdgarrUfDOeVsIP97TifzGKf3b5m116qnMUqeui1UI4KHxj6RcdPZqBvUETTlR6eP7xMIOgi8oGOqUB8CeZggoUvlE%2BMXp9KcoIRTJdmKUVDFCVrnzJJ1fPZzeIvZE%2FQWl01oTVi%2BbX1Z96VpnD7FjqReXqUxaOGyBjaSEmU0WmavPREnI6CFm9FSFDn%2B%2BCKx6YzdZLiwEkdGfhaZh0YSqb5bxZtIAwRtDaPFdM5sBzoxFF563w%2F%2B3%2BMJc2uQjj9mmO4sIiMn5aqcWQs6d6tXMnhMUPgjuagiie8uvEDSTF&X-Amz-Signature=99883ec55e4f9f66401505833b2bbae194dde9fc5839779a5c9c76a7f7fd48ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV6UCMU3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtN02df%2BztRGk8k2lPb7F5IVLa%2FqMkaCK2YU8fL6EZ0AiEAg1845TclxcHqxJ1Vqqs%2FynWTBFFOfkj55pKr4F36yXwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvJpSvpIc0Nduy3%2FyrcAwU9%2BToGxIcYtrofLhpKlvt3QiUR48chIxJ5sur5PvM%2FmG%2FWF9emlgAMhMg0LjiGSmh%2B4xWwKapqWgpKf%2FZFUgb%2FByc9fhkKipTcnpYVeRRUXoQNB%2BS1nDKEqgsxIQB5KCCYgkCTf5lbjh2X%2B0PvmV%2FxipOxQ%2Fhehad8nfu4GSEtYsDZN5FGcDUB94BLGR4dpvTz88NxI5MPYWNMibjgW2sDaGCJDQR3TScegB%2BPYqpCExkGm6WetqtDppt2%2BqLdqco3VR3HidLyJ8hzRxLaOvB9gZCzmkDDafChycuYq8sFPQnayQ4qeg55LsGzcM9SRIen00I0xpdRTwxdK5hskE%2Ffc%2FgQuRBMjYBM1xvfKsKhV5SgQThULRjso%2FEnMjGl4l80NLpfdGRY1swaSHge9mav1%2BLVL3UwgiDdzaJUj491ongJI3ARG%2BxS14sm32C%2Fw2gm4JBTWA8XKdrEXe059BOk1rkP2zTET6CdvLF6gZXXOcg0dll5CaA%2FpjIx1DZo9p%2Bo90pXEfgNP%2FxXqaPaXvxgbFC%2FHzGJMv6zz0yRdXB%2B2nvdWNvfTsdbDQdgarrUfDOeVsIP97TifzGKf3b5m116qnMUqeui1UI4KHxj6RcdPZqBvUETTlR6eP7xMIOgi8oGOqUB8CeZggoUvlE%2BMXp9KcoIRTJdmKUVDFCVrnzJJ1fPZzeIvZE%2FQWl01oTVi%2BbX1Z96VpnD7FjqReXqUxaOGyBjaSEmU0WmavPREnI6CFm9FSFDn%2B%2BCKx6YzdZLiwEkdGfhaZh0YSqb5bxZtIAwRtDaPFdM5sBzoxFF563w%2F%2B3%2BMJc2uQjj9mmO4sIiMn5aqcWQs6d6tXMnhMUPgjuagiie8uvEDSTF&X-Amz-Signature=7374d359128547b6299ded7fb97b5420635aadd454a83331ae85189b9a5fca4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
