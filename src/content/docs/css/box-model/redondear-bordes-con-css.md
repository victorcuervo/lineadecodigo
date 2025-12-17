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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY7OQPB7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzHABIQJcXc2%2FTZBZ0lUc3tcNZshls2sx%2Fe5EtbqILGgIgAjccx9zVa5lS1Zc%2BcVcl7Gn7GC1W%2FxnBumZeF5IE3tcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDG3EGB8B0dac%2FP7tySrcA4HjjBHaIqiK4MJrfCQ2LmgyHWb5bZb%2FyRL9xYxEUqsTcA4Tki3UKnDqn21QfAGOqcMe2UmORuDIxWilO5dTKKftjpeROafz4q6NzGs9UU%2Fj2f8%2BDqa6NxTnNfrDCMM6u3YeKVsQ04GJha%2FcKrQ%2BEJrPJlSYdg%2FWDHhths%2B7q07T6ZKNgBAjG038okSr5IpMhS0tejtFvgzVbUblLxMKCFutsItfrWEqlJECWLSpUwcrMFfIVK%2FQpsLRSY3yeYZ%2Fa5d8MfpQeX0CoDyIS3uCnAsuZFJSYEgrDHgTiPwfw%2BG8FYipAklSodG1mvN9EycEUJBlize3gAPFrYMoVQ6g4A3%2Bt%2FWu86iqHriQWbqthWXNM5XQv89VyBcNip%2ByHhvd%2F9MZXnK7p%2BbingDlaeux410I7pV6ySfaLzvczTPRxB%2FIlvAECPOM%2FWpUyLEquZ0O7W6Vvy3QNkNcZuqulsg1etQPSyFklS0ICGOyk9cRLxNbq5y6yIpQxqmfee9EuUlRXfZl35aiEyQ%2BSnQ5bHqu9%2B9jpilF3XeJgRuV57YPDbah%2FaEqCYBG5VOqNiTE1yLExHlRKgJ3Y9zN0vWulDn7TCDlQoYSGdTGyIFSeXLqbSP98E7tFsdf7yfbZ6AkMOvwicoGOqUBYqiXZKIzXHvSgHH%2FjXbnfVtWeGWo1TyasP%2BwMW%2FTowXQ%2Fz5gcMY8sffL%2FScXsx3wB8ytRXZAj2mO7yfvDLVMPF58RnJginoqnFFd6LDQui%2F6hd3l4PruAyH%2FNO%2F4Hn7m4wfTjxxD7fj7Mj1YaTUJ%2FJah61puNtpMOsW9HH5h5QbbyoXGxvO9REZ1fMD8vB6xf9O6LmetkOklUMmi8c%2FcZT2uMwMq&X-Amz-Signature=07cd9fb80816c0746196665c5a15b224bd954c671de339fb9fa0b42318553c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY7OQPB7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzHABIQJcXc2%2FTZBZ0lUc3tcNZshls2sx%2Fe5EtbqILGgIgAjccx9zVa5lS1Zc%2BcVcl7Gn7GC1W%2FxnBumZeF5IE3tcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDG3EGB8B0dac%2FP7tySrcA4HjjBHaIqiK4MJrfCQ2LmgyHWb5bZb%2FyRL9xYxEUqsTcA4Tki3UKnDqn21QfAGOqcMe2UmORuDIxWilO5dTKKftjpeROafz4q6NzGs9UU%2Fj2f8%2BDqa6NxTnNfrDCMM6u3YeKVsQ04GJha%2FcKrQ%2BEJrPJlSYdg%2FWDHhths%2B7q07T6ZKNgBAjG038okSr5IpMhS0tejtFvgzVbUblLxMKCFutsItfrWEqlJECWLSpUwcrMFfIVK%2FQpsLRSY3yeYZ%2Fa5d8MfpQeX0CoDyIS3uCnAsuZFJSYEgrDHgTiPwfw%2BG8FYipAklSodG1mvN9EycEUJBlize3gAPFrYMoVQ6g4A3%2Bt%2FWu86iqHriQWbqthWXNM5XQv89VyBcNip%2ByHhvd%2F9MZXnK7p%2BbingDlaeux410I7pV6ySfaLzvczTPRxB%2FIlvAECPOM%2FWpUyLEquZ0O7W6Vvy3QNkNcZuqulsg1etQPSyFklS0ICGOyk9cRLxNbq5y6yIpQxqmfee9EuUlRXfZl35aiEyQ%2BSnQ5bHqu9%2B9jpilF3XeJgRuV57YPDbah%2FaEqCYBG5VOqNiTE1yLExHlRKgJ3Y9zN0vWulDn7TCDlQoYSGdTGyIFSeXLqbSP98E7tFsdf7yfbZ6AkMOvwicoGOqUBYqiXZKIzXHvSgHH%2FjXbnfVtWeGWo1TyasP%2BwMW%2FTowXQ%2Fz5gcMY8sffL%2FScXsx3wB8ytRXZAj2mO7yfvDLVMPF58RnJginoqnFFd6LDQui%2F6hd3l4PruAyH%2FNO%2F4Hn7m4wfTjxxD7fj7Mj1YaTUJ%2FJah61puNtpMOsW9HH5h5QbbyoXGxvO9REZ1fMD8vB6xf9O6LmetkOklUMmi8c%2FcZT2uMwMq&X-Amz-Signature=128d68a45e568567205e85f188966094409f985942143a38e1e6b81ba8260422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
