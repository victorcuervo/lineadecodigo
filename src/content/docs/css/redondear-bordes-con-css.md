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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMPK6H3J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtL4rrTwqTDCKbAHgHMTxu8afsKYccKTnNoX%2FxRfEWtgIhANVSSk9GxKUbUaJLJcNS1tFuB0hPKF63yc%2FWzKxWHDQoKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ9Dq6cchl8rgNWBMq3AOaH7M6E%2BCw5Yh6JWa99zdYQA9ARcM1ojuBm8NEZFa9IkRgPy3DPBumxA9ncAMG728vwyDV%2BJAwkVtNqJM3Xruu2yspKbZysmQ3sz8JlXvtCn2Rq15Y9eWKCrx0CA1L1bCAmlDo6TalaiHjKg%2FnZRmSWj%2BYvqQ1fSQhIgDgG2TEKUSqtAFvNLJZ%2FY2hHCLABCDa%2BcuuDwpK%2BAKZ7C60bIHTTe3s0QRscXImNJ9KqKY47rH7l5gIcGptnkXRojnw9mp6Su5%2FGPkCMNUOGYEO1fwT1%2FprwMDuXTfhLzcgRh2p5UrLBoiiGo6lzcOCAPr40%2F9w%2FhcZncXisrM7WqJmaQFLUuTjm0i5VlqEdrR5MSYrH38lpBLWMyPfdjOCKlqIKHkKXyyeJ6henJqwPUEgyJ3VYuqKYmFgWUY%2Fj3aHz9MVotjyAWnQPbF%2FQ32vM21M7%2BIcWEdBHUQmls8zyjiiUUaFgYLV%2FZChoTydIf0DgW2LLLkNXxi9NpidQa8yWcnHD6V30egyZxxG0x7Eeinj8DNN157Gw8xhfePiyYarmwCmFKBDwWZXKGjmfRgJdhOyKIvJCgTIFJMxgs6rqDnf3rgEZyN4JonEIlXRT18D4OYGtUXCbjXlT1b%2BwloI2TDrodjJBjqkAcZJRDu6DMn6Kf4H5XwFs%2Bn%2Fpv%2BVa6LCcCK9Q0SYu1E2m0ve3PkNctMh2Yj2tz0IjNkP1Ya9rznHlQapvJtcrRRU0JtzotQzi4%2Bq%2FH6MOLZNArZwSIG%2By48E%2FYtWPhWpf7srCqw8h9gcBCNaRx4nide78yDBp4WMcm3jf8zxJPMPdlUmuBX3P8VEpPIrSmwgaTXahxaw4i5dbWOvjr7oQJigUu5h&X-Amz-Signature=48b6f46df027c2923ba9e3ee13a79852a4e1072fd02292faef11b2038b8bf439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMPK6H3J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtL4rrTwqTDCKbAHgHMTxu8afsKYccKTnNoX%2FxRfEWtgIhANVSSk9GxKUbUaJLJcNS1tFuB0hPKF63yc%2FWzKxWHDQoKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ9Dq6cchl8rgNWBMq3AOaH7M6E%2BCw5Yh6JWa99zdYQA9ARcM1ojuBm8NEZFa9IkRgPy3DPBumxA9ncAMG728vwyDV%2BJAwkVtNqJM3Xruu2yspKbZysmQ3sz8JlXvtCn2Rq15Y9eWKCrx0CA1L1bCAmlDo6TalaiHjKg%2FnZRmSWj%2BYvqQ1fSQhIgDgG2TEKUSqtAFvNLJZ%2FY2hHCLABCDa%2BcuuDwpK%2BAKZ7C60bIHTTe3s0QRscXImNJ9KqKY47rH7l5gIcGptnkXRojnw9mp6Su5%2FGPkCMNUOGYEO1fwT1%2FprwMDuXTfhLzcgRh2p5UrLBoiiGo6lzcOCAPr40%2F9w%2FhcZncXisrM7WqJmaQFLUuTjm0i5VlqEdrR5MSYrH38lpBLWMyPfdjOCKlqIKHkKXyyeJ6henJqwPUEgyJ3VYuqKYmFgWUY%2Fj3aHz9MVotjyAWnQPbF%2FQ32vM21M7%2BIcWEdBHUQmls8zyjiiUUaFgYLV%2FZChoTydIf0DgW2LLLkNXxi9NpidQa8yWcnHD6V30egyZxxG0x7Eeinj8DNN157Gw8xhfePiyYarmwCmFKBDwWZXKGjmfRgJdhOyKIvJCgTIFJMxgs6rqDnf3rgEZyN4JonEIlXRT18D4OYGtUXCbjXlT1b%2BwloI2TDrodjJBjqkAcZJRDu6DMn6Kf4H5XwFs%2Bn%2Fpv%2BVa6LCcCK9Q0SYu1E2m0ve3PkNctMh2Yj2tz0IjNkP1Ya9rznHlQapvJtcrRRU0JtzotQzi4%2Bq%2FH6MOLZNArZwSIG%2By48E%2FYtWPhWpf7srCqw8h9gcBCNaRx4nide78yDBp4WMcm3jf8zxJPMPdlUmuBX3P8VEpPIrSmwgaTXahxaw4i5dbWOvjr7oQJigUu5h&X-Amz-Signature=2919910f5ffc3f0a7b955465507b3384fa4dfee271c8be99425f257c90f17da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
