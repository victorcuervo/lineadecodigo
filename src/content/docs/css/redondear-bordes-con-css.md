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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ETDWCN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGt23M2ZMB%2BY7UGIA6atrKdrNuLBRUWkPjL9HOx5EgyNAiA9nQX3tRxcRabh%2B5yENLuPdv9JKEVZb2d6sFXZdYy0iCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv8%2Bmt5J141AOJeqxKtwDaHqv%2FjipSLgBzADLw542Q9u%2BpugxbYBPYQycrkhBD9oYmAYVprP9th8jq3MZsbRfT1ndMMmVgJ50w6dWcgF2pWiH%2FfKPqWccEDvdpG4gVJqvFE1ALW7kYPs6HD4Pz4p%2BEB3e5IB1Gf0ockL9Nq0dlnbO51HENXfkbemhK8FCP051SFXym2aQHkk88WGgM%2BCr6cfZiaXvHTLtpCi0LKKqNuYgfQAmIZZ9QxbXg4C6TN36RB0izZPuVzeAZRxyhWY0Bt8brFV%2FPtU2uakJHuU%2FBngkTiO6a%2Fow2LMS488Ano5V80JaAMMjK0%2FkPvQ%2BYuY0p5IYApbdAEHmgA%2Bz81GMMeZNGf2%2B65Qe12PcL114I3JJryx3a3TMa7gADYqJ027zewJuwI%2BS20R2JcE7vPliXoF69qLLUM78qjORM64DnfazPjIgiLw9Dgt2RzIxmDSeZ4D523HIeK7SJAfKNmBYwV2OVEIO%2BjIyWnwT3j647HqrHU71I2QrivqawRnKShKrW9WkI6RBnvV%2BinQh0YIl8D%2FGJjNNQZVKCah1eRpX6ico1n8VRNrtlYXa4qBVr3OIauTBIndeNLergA6%2FXt8AD3sYI54R1EV%2BPVfs8XsgP2TSbE%2FU9tq87uoQf0Qwm%2B7ZyQY6pgERa4G7Vo9LK90Ku4e3ETDRNY9hm0YGOXf%2FvDNWZ4Hcdp7Bh7gzjyL69WsVj4c%2FZVpWTrV3ePYfOJ%2BeB9YK0agCwERYE1vdmvQ%2FMxdm8xcxV1oo78zivHUZpM50ou8yEfHkiQaBL2RvpV9iDlatPAK9P6BmNtZXvhZDZ3Vg3H%2B0Lggcr%2Fk09zt9ba5SMMZpPY25Qx6a2V%2BWOpDZ6BIk2QGUhz21KC2B&X-Amz-Signature=31adffc74afc3d3beb89567c40a8a9f566f152464828cc4166186940a32cd426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ETDWCN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGt23M2ZMB%2BY7UGIA6atrKdrNuLBRUWkPjL9HOx5EgyNAiA9nQX3tRxcRabh%2B5yENLuPdv9JKEVZb2d6sFXZdYy0iCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv8%2Bmt5J141AOJeqxKtwDaHqv%2FjipSLgBzADLw542Q9u%2BpugxbYBPYQycrkhBD9oYmAYVprP9th8jq3MZsbRfT1ndMMmVgJ50w6dWcgF2pWiH%2FfKPqWccEDvdpG4gVJqvFE1ALW7kYPs6HD4Pz4p%2BEB3e5IB1Gf0ockL9Nq0dlnbO51HENXfkbemhK8FCP051SFXym2aQHkk88WGgM%2BCr6cfZiaXvHTLtpCi0LKKqNuYgfQAmIZZ9QxbXg4C6TN36RB0izZPuVzeAZRxyhWY0Bt8brFV%2FPtU2uakJHuU%2FBngkTiO6a%2Fow2LMS488Ano5V80JaAMMjK0%2FkPvQ%2BYuY0p5IYApbdAEHmgA%2Bz81GMMeZNGf2%2B65Qe12PcL114I3JJryx3a3TMa7gADYqJ027zewJuwI%2BS20R2JcE7vPliXoF69qLLUM78qjORM64DnfazPjIgiLw9Dgt2RzIxmDSeZ4D523HIeK7SJAfKNmBYwV2OVEIO%2BjIyWnwT3j647HqrHU71I2QrivqawRnKShKrW9WkI6RBnvV%2BinQh0YIl8D%2FGJjNNQZVKCah1eRpX6ico1n8VRNrtlYXa4qBVr3OIauTBIndeNLergA6%2FXt8AD3sYI54R1EV%2BPVfs8XsgP2TSbE%2FU9tq87uoQf0Qwm%2B7ZyQY6pgERa4G7Vo9LK90Ku4e3ETDRNY9hm0YGOXf%2FvDNWZ4Hcdp7Bh7gzjyL69WsVj4c%2FZVpWTrV3ePYfOJ%2BeB9YK0agCwERYE1vdmvQ%2FMxdm8xcxV1oo78zivHUZpM50ou8yEfHkiQaBL2RvpV9iDlatPAK9P6BmNtZXvhZDZ3Vg3H%2B0Lggcr%2Fk09zt9ba5SMMZpPY25Qx6a2V%2BWOpDZ6BIk2QGUhz21KC2B&X-Amz-Signature=67894e8a8cd174c43b8d03e1b04148ecb08cec0c36b48db34aec5ebbcf4471ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
