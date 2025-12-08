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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQLX2YXZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjhSg9mAbmrM%2Ffxo0et3aLNGy%2BU0V8HJOp2GNUwmfEeAiEAmJ26JnlUrj9semAai4laz4%2BlxzKpmG%2FkaK4UC24uduYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIshJHNpnbsPqgFYcSrcAzKfDeuA7dqzMeR1xathco1dev7ncnqoL2ljBHEddQZWPD2jZDOuFQzeyBRkMAWYkW9tABI82Fm1NBgCv0vZ52SjboufqzOvy1c%2BToxNeOSp%2BrfAXuYjXjMVtCbO89zwMlbKhSfy7rU4kBrbQEtq%2FoVlTVJz7aXcuGkTb6QVFBHdiMQ4%2B2hKbmfuHDfv058eCUg5EXZU4P%2BXE2vOCkYxeXr%2BLi5FItbRr4e5ZNIUJknn4ppRqgo04adv56OCHJiJ%2B2%2FUpQABVqbAqXl2GJQnQhCBU%2B6a0CCRvZQFQ9otieZuRKK7%2F%2FIL%2BAXTNqjy90bWiEhOoZfJeR2jv8E4%2B9TG8ehK%2BaNhA0vz%2Ba8x5DUiHBa6qqw4QocdFa2h3uNlagcIXo7EvsVrUb4lo1CBXUolAx%2BQpQVEETE9N5mQBOhFeXj5VzhcSJdruy6jUtYDrIlE2NO4HcUWy7Gcss8nA7LV2Fu%2B79o%2F4V7QjGdDB55K3DJErD5FcPHRi0IGn%2F0eOnx1O1rCSiqlBDJ0yDM46qh9ScVDAomqjDFTGvez%2FWPC5HMcEuIViU9fPGMuONVCN3k47pUwYmoPLVIN2p8u3ec1lJ7RAeZKq9wl2BZ0SIkmELEh8sUpgcLimU5xVAA7MKbt2ckGOqUBnPQbUqaEPHYhln9Ppo1L3O%2F1AX95lu%2FbcpCiY7QaE%2BMgDyFk8ZSq%2B7BVlVANAEuEvNnDdyXU2D%2F27wnnaDvmfjVuJTKJ0aL0d9Dl0AOYjlmVACuhULhno6ItM5QT1HaKID3AGofn4jn%2Bb55eBu1a7%2BxZcxFkEUtY1j%2Fjz%2FWj9eelzcujJUI3x9sUrVhv%2FmR%2FoAVDPMT1j8Cn4gJM6TEBSHl7AgDr&X-Amz-Signature=2293e9d0d56f5e53465ecdf274f8b16f221b937d15beb95e811f62c0cd8709b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQLX2YXZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjhSg9mAbmrM%2Ffxo0et3aLNGy%2BU0V8HJOp2GNUwmfEeAiEAmJ26JnlUrj9semAai4laz4%2BlxzKpmG%2FkaK4UC24uduYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIshJHNpnbsPqgFYcSrcAzKfDeuA7dqzMeR1xathco1dev7ncnqoL2ljBHEddQZWPD2jZDOuFQzeyBRkMAWYkW9tABI82Fm1NBgCv0vZ52SjboufqzOvy1c%2BToxNeOSp%2BrfAXuYjXjMVtCbO89zwMlbKhSfy7rU4kBrbQEtq%2FoVlTVJz7aXcuGkTb6QVFBHdiMQ4%2B2hKbmfuHDfv058eCUg5EXZU4P%2BXE2vOCkYxeXr%2BLi5FItbRr4e5ZNIUJknn4ppRqgo04adv56OCHJiJ%2B2%2FUpQABVqbAqXl2GJQnQhCBU%2B6a0CCRvZQFQ9otieZuRKK7%2F%2FIL%2BAXTNqjy90bWiEhOoZfJeR2jv8E4%2B9TG8ehK%2BaNhA0vz%2Ba8x5DUiHBa6qqw4QocdFa2h3uNlagcIXo7EvsVrUb4lo1CBXUolAx%2BQpQVEETE9N5mQBOhFeXj5VzhcSJdruy6jUtYDrIlE2NO4HcUWy7Gcss8nA7LV2Fu%2B79o%2F4V7QjGdDB55K3DJErD5FcPHRi0IGn%2F0eOnx1O1rCSiqlBDJ0yDM46qh9ScVDAomqjDFTGvez%2FWPC5HMcEuIViU9fPGMuONVCN3k47pUwYmoPLVIN2p8u3ec1lJ7RAeZKq9wl2BZ0SIkmELEh8sUpgcLimU5xVAA7MKbt2ckGOqUBnPQbUqaEPHYhln9Ppo1L3O%2F1AX95lu%2FbcpCiY7QaE%2BMgDyFk8ZSq%2B7BVlVANAEuEvNnDdyXU2D%2F27wnnaDvmfjVuJTKJ0aL0d9Dl0AOYjlmVACuhULhno6ItM5QT1HaKID3AGofn4jn%2Bb55eBu1a7%2BxZcxFkEUtY1j%2Fjz%2FWj9eelzcujJUI3x9sUrVhv%2FmR%2FoAVDPMT1j8Cn4gJM6TEBSHl7AgDr&X-Amz-Signature=951deaebeda5b8be523a45a882bfad2f5be634fd3d07ac010ba87351fc1f3e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
