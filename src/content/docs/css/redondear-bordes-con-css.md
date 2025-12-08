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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROMMWY5D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6J00cIr%2BzqowAmD11j7G1TOFYL6D894Fug12NoiT%2BjAiEAysKPa933pMloxgIBdNIX%2FyeomMU5L0%2Bpgcnnl9KCkXcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0x%2FXib3SajDNmxjyrcA7ugIdoedZgk%2F%2BHUnvRjy%2BDU%2BvehFrUsT37NMMhyqIG5uDHBlKD9D5%2FoYkM19relgn4kmyy9vmRFdCz0XPlKA6fJuR7wmF9Tkawe%2Bb27unLqZDB2sSKb0x9q%2BvoLpiTaSW9lZCpcadqPHiIsyetFDjdxoJGcr5w7AbOzE2fIN5hVQYUDZjrZDxy4QTZQruUyVvOymGv7dxMxGnHmcRF%2BUx59UeO35tkeglCvhPvuheOVTX4dKc7QYlcu%2F34iefqtZ7h2f3EcOCaWvST4FOTAkwpq%2BsW2p%2FK9ElpdwEGml4CjNIKr1pvIFbVeifaXW0jLIex7EK4Ox%2B0q2sbkemJTVBFijpcZm9llptfTqqVGDEJYpMxo6T%2BK7y4gaRRlTLo09FZ6w%2BREDLPksnEEGxONHOEZmWt%2FvsoD7wjvuDFbi6QrDCbq%2FK8Yh%2F0ifSJpGMS1fLItbW8ohOZQSA4pc%2BTds24DDSQCNx583tYCMa5NZUX2xvDkXFz23uawt32jLSUZgMUE6JTysrQXZCTd6H5yMWo%2Bi3vkyJ5%2B6E6FWpnqCkLXbgONUJBKN4NsD1Q%2F02xmMq5mKnRezL3XCyk2lI%2FjHFdK4z4Ivw1cyPuQfXpjuAMjYuC1vTukZMH3pvIfMKjt2ckGOqUBFN1rfycTLOTl92YQpIb2LJKdqHvndWzO4g3MO4e8n1dLLh9chzUJxI9PKqjmwmPi88Jxj2GrV2kOxOIo3YQChW5QPMObXpb8BorUdKZ%2FmAbRWwS3OeqlgUIfO8ti1gmmonH2UqecLGSE7Re9Il0Tev8XSEt%2BrucYXf8wLIdFsmwbdU3dC0kt37rwE5FZzSMHwjiqfSpZ05W%2Fz%2B42WZdTPCtVJe1y&X-Amz-Signature=a431588d985102aa8a28e29707c25fe7304aeb957836ab55714ab62b224c205f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROMMWY5D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6J00cIr%2BzqowAmD11j7G1TOFYL6D894Fug12NoiT%2BjAiEAysKPa933pMloxgIBdNIX%2FyeomMU5L0%2Bpgcnnl9KCkXcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0x%2FXib3SajDNmxjyrcA7ugIdoedZgk%2F%2BHUnvRjy%2BDU%2BvehFrUsT37NMMhyqIG5uDHBlKD9D5%2FoYkM19relgn4kmyy9vmRFdCz0XPlKA6fJuR7wmF9Tkawe%2Bb27unLqZDB2sSKb0x9q%2BvoLpiTaSW9lZCpcadqPHiIsyetFDjdxoJGcr5w7AbOzE2fIN5hVQYUDZjrZDxy4QTZQruUyVvOymGv7dxMxGnHmcRF%2BUx59UeO35tkeglCvhPvuheOVTX4dKc7QYlcu%2F34iefqtZ7h2f3EcOCaWvST4FOTAkwpq%2BsW2p%2FK9ElpdwEGml4CjNIKr1pvIFbVeifaXW0jLIex7EK4Ox%2B0q2sbkemJTVBFijpcZm9llptfTqqVGDEJYpMxo6T%2BK7y4gaRRlTLo09FZ6w%2BREDLPksnEEGxONHOEZmWt%2FvsoD7wjvuDFbi6QrDCbq%2FK8Yh%2F0ifSJpGMS1fLItbW8ohOZQSA4pc%2BTds24DDSQCNx583tYCMa5NZUX2xvDkXFz23uawt32jLSUZgMUE6JTysrQXZCTd6H5yMWo%2Bi3vkyJ5%2B6E6FWpnqCkLXbgONUJBKN4NsD1Q%2F02xmMq5mKnRezL3XCyk2lI%2FjHFdK4z4Ivw1cyPuQfXpjuAMjYuC1vTukZMH3pvIfMKjt2ckGOqUBFN1rfycTLOTl92YQpIb2LJKdqHvndWzO4g3MO4e8n1dLLh9chzUJxI9PKqjmwmPi88Jxj2GrV2kOxOIo3YQChW5QPMObXpb8BorUdKZ%2FmAbRWwS3OeqlgUIfO8ti1gmmonH2UqecLGSE7Re9Il0Tev8XSEt%2BrucYXf8wLIdFsmwbdU3dC0kt37rwE5FZzSMHwjiqfSpZ05W%2Fz%2B42WZdTPCtVJe1y&X-Amz-Signature=d067c5a1013c202bb8b544316111e52d308eee44b703df42538fd4310bc35e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
