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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJPESBDT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdQfrC4Nihp4Y5cPWu6wQ2lRDGnRoRtVSE3m9mzc0vuAiB8Fv3V%2BytpA2E5yn4OHx5lsHine9IqKsYkQggkuzZKFCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMgovRfecrQcT4YUqNKtwDWnHOzO9kJAGvsKCAjN7xuysJWzi2By4oBMHLCn7qj17gdPtsd4AkQfVuxZnU0T%2BLf5w2qWw%2B6tiQmG1ksJcAbVdyYE8%2BBXcX%2BHJz3WyVfAcCbVvCnd68MugPO3SB1MBlZ3X%2BiZDyqC6YjVtyk1rlH%2BcX9u%2BRiv86%2BXkNhEXoPAD75Lx%2F%2FvnMYd%2BDzBmqkboY6NNys4eE%2BIQdwQTUXrqYXjWPkXuoWAHoCJttWMwytmTqGMn31F%2BKLw53nLa0R63Rze5pJcSEuftbt2UtNzNYjXeb6v5v0z2vs6ph3pzaQXfZbORzPI8RxG%2FcpvA29BgFESP9zJzNDc9%2BGclsXusxQCeJ6jl5euHGUXyhZXwxFgXd3k2TFUlQu5pE%2FKr7x1fuJ1C2NPa4bmBjrZJOzxJsNWB0cINXyZT9xQZCWqiUy%2FqCcZQ7ru8TFKJbNwGeZdtWfBOZ%2FNgZv9caLSwP%2F6t8O3WWVjUsCIwhLO2amD0J3pmeSMDi0x91UMTNnPnc%2F%2FpkP%2FNu1OxGs8q79X81XVCb3ueBjDLVo87gqtGOgkZRLB9Ed2oc%2F5cKoK1gLcl4ucK9LatP%2Bk8epqnKsx57mMe1Dv3BZv0hrnXSyXgrMS45G%2BmFkw2TfaFw85D2BzcwtdPKyQY6pgES6YrrdkyOzkyVbbZsrH2ji5SXGV%2BiF40DPzu9D9jVUNPiWxpUOZQmM5pdUB7i%2FsEuHmPdB%2B2tKAfQmPF3S4WtfpdIDuCa0pd4k4uMzrUtaeDt%2FzKuWDtwIbkoSH1E%2F3z5YBQqUzK67%2BTNc2gg%2FZ8Oh%2Bfd5J8%2FPGaeWTZe4bXgGwLBSVe53gOQCzkvRpoA3IT0mDdK%2BbnUAzEuMCiohv0Sc1un15Fj&X-Amz-Signature=41acf336e82de5ccf7997fe7388a4a41d5092cd47862863e9dc298412d917664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJPESBDT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdQfrC4Nihp4Y5cPWu6wQ2lRDGnRoRtVSE3m9mzc0vuAiB8Fv3V%2BytpA2E5yn4OHx5lsHine9IqKsYkQggkuzZKFCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMgovRfecrQcT4YUqNKtwDWnHOzO9kJAGvsKCAjN7xuysJWzi2By4oBMHLCn7qj17gdPtsd4AkQfVuxZnU0T%2BLf5w2qWw%2B6tiQmG1ksJcAbVdyYE8%2BBXcX%2BHJz3WyVfAcCbVvCnd68MugPO3SB1MBlZ3X%2BiZDyqC6YjVtyk1rlH%2BcX9u%2BRiv86%2BXkNhEXoPAD75Lx%2F%2FvnMYd%2BDzBmqkboY6NNys4eE%2BIQdwQTUXrqYXjWPkXuoWAHoCJttWMwytmTqGMn31F%2BKLw53nLa0R63Rze5pJcSEuftbt2UtNzNYjXeb6v5v0z2vs6ph3pzaQXfZbORzPI8RxG%2FcpvA29BgFESP9zJzNDc9%2BGclsXusxQCeJ6jl5euHGUXyhZXwxFgXd3k2TFUlQu5pE%2FKr7x1fuJ1C2NPa4bmBjrZJOzxJsNWB0cINXyZT9xQZCWqiUy%2FqCcZQ7ru8TFKJbNwGeZdtWfBOZ%2FNgZv9caLSwP%2F6t8O3WWVjUsCIwhLO2amD0J3pmeSMDi0x91UMTNnPnc%2F%2FpkP%2FNu1OxGs8q79X81XVCb3ueBjDLVo87gqtGOgkZRLB9Ed2oc%2F5cKoK1gLcl4ucK9LatP%2Bk8epqnKsx57mMe1Dv3BZv0hrnXSyXgrMS45G%2BmFkw2TfaFw85D2BzcwtdPKyQY6pgES6YrrdkyOzkyVbbZsrH2ji5SXGV%2BiF40DPzu9D9jVUNPiWxpUOZQmM5pdUB7i%2FsEuHmPdB%2B2tKAfQmPF3S4WtfpdIDuCa0pd4k4uMzrUtaeDt%2FzKuWDtwIbkoSH1E%2F3z5YBQqUzK67%2BTNc2gg%2FZ8Oh%2Bfd5J8%2FPGaeWTZe4bXgGwLBSVe53gOQCzkvRpoA3IT0mDdK%2BbnUAzEuMCiohv0Sc1un15Fj&X-Amz-Signature=d2d187eeb452f953093d5fc586506d4ebde09c6f7e00897de94d10e04db39003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
