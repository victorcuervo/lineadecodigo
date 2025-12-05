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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XDY7HC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoNgAQBPp5c3QlFFzLInSAaKXF6wlVPAcIEJRhAAQoWAIhAMi4EyU%2Fqs9WBVvRx6icUPh4wbRcC8AwE3MTxgiy7Yv7Kv8DCGYQABoMNjM3NDIzMTgzODA1IgwNJhXwm8L8KXuasSQq3AMnQBEocP5x9PDWVdMdfZLYcacRRA8hdvh8jp4TlveG%2F0Z62PjwA%2BWaxIsGKa%2BN4I868FsINCNMFBcnznAJqAMnpY2gb%2Fh1J1ozvHgigQ0iOnUaJZp7UBwg%2F%2Be2I4E36vFXFyJ6WVKTEwpZuTHV1Rw3QIQut1cSUq%2B7CQVWn6kWOwBsqNxYPxvf3iUajwS36tLIyFIb6LH%2BkPNizAenq2xKVRW1g6os8DdDtZJIfblSAycEsAOFcyWjSfmSYvMjaktjBx9YOUNMK5ZN7Fl%2BJMz90UB1w8Jl8yFusDwB%2FbIA%2BXnKXMH%2B56q459yrCdPdw%2FyFI40pvyFV7ngqRHWzYxSPMhI%2B5qjkgAyGkvMWCG5BLEqQ2qMf%2F9KsV1atHpufgyqHj1u8DPloBecCO167H8SU9yXxNoPr%2FbsVjDX2QglDsmduVeQw2qxBpKPua5cwMu4%2F2GO7i9hGD%2F2HIoJ%2F2ZahnPXhtDPE%2F5fI%2BFj7hVE04nAO5t2iM192lkrdtH%2BEuPGIwiVOoYgKPgjUfCK%2Fw4P28iiw2fNp0VeNUQFeRGjGonU8P6X8G8S6JNka0akUQsnb0rrMOgtELSTCfwyVOcfDuxc6XrUQgKxBTqPQp41JFc2nlr88OnU8iuOuejCBls3JBjqkAXEs6mVaTEfS4ipq%2F22tUH%2FP7Uan6nir%2BAJHMpttIl67O6sHjYRB0xlJAO1O9mcQpsWEpCm2RhvnXn%2BRtD4vpKSpEyKbX8jQ%2FcXViIZ4ygiRNEJqxYNCcVotSMJO5r38fAydP%2BnBbk3WDbPmdEc4bDw0hZo5tLi6afTyF71s2J0iTosTDlpnvLXC9GJMxp5UC4dicmKwHOQ8wiD48KUdTeKiGuqr&X-Amz-Signature=a7a0b91b41e3f628463593930c4084b4be4d60480521f5efca6dc78845b9c7cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XDY7HC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoNgAQBPp5c3QlFFzLInSAaKXF6wlVPAcIEJRhAAQoWAIhAMi4EyU%2Fqs9WBVvRx6icUPh4wbRcC8AwE3MTxgiy7Yv7Kv8DCGYQABoMNjM3NDIzMTgzODA1IgwNJhXwm8L8KXuasSQq3AMnQBEocP5x9PDWVdMdfZLYcacRRA8hdvh8jp4TlveG%2F0Z62PjwA%2BWaxIsGKa%2BN4I868FsINCNMFBcnznAJqAMnpY2gb%2Fh1J1ozvHgigQ0iOnUaJZp7UBwg%2F%2Be2I4E36vFXFyJ6WVKTEwpZuTHV1Rw3QIQut1cSUq%2B7CQVWn6kWOwBsqNxYPxvf3iUajwS36tLIyFIb6LH%2BkPNizAenq2xKVRW1g6os8DdDtZJIfblSAycEsAOFcyWjSfmSYvMjaktjBx9YOUNMK5ZN7Fl%2BJMz90UB1w8Jl8yFusDwB%2FbIA%2BXnKXMH%2B56q459yrCdPdw%2FyFI40pvyFV7ngqRHWzYxSPMhI%2B5qjkgAyGkvMWCG5BLEqQ2qMf%2F9KsV1atHpufgyqHj1u8DPloBecCO167H8SU9yXxNoPr%2FbsVjDX2QglDsmduVeQw2qxBpKPua5cwMu4%2F2GO7i9hGD%2F2HIoJ%2F2ZahnPXhtDPE%2F5fI%2BFj7hVE04nAO5t2iM192lkrdtH%2BEuPGIwiVOoYgKPgjUfCK%2Fw4P28iiw2fNp0VeNUQFeRGjGonU8P6X8G8S6JNka0akUQsnb0rrMOgtELSTCfwyVOcfDuxc6XrUQgKxBTqPQp41JFc2nlr88OnU8iuOuejCBls3JBjqkAXEs6mVaTEfS4ipq%2F22tUH%2FP7Uan6nir%2BAJHMpttIl67O6sHjYRB0xlJAO1O9mcQpsWEpCm2RhvnXn%2BRtD4vpKSpEyKbX8jQ%2FcXViIZ4ygiRNEJqxYNCcVotSMJO5r38fAydP%2BnBbk3WDbPmdEc4bDw0hZo5tLi6afTyF71s2J0iTosTDlpnvLXC9GJMxp5UC4dicmKwHOQ8wiD48KUdTeKiGuqr&X-Amz-Signature=c2c797c67546c4cf47a1d91c8a0104eee0b6ac4e71fac6bb85ab2f1077b2c35c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
