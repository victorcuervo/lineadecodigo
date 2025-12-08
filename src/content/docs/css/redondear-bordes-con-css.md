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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQZNUZQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlrOEQUZ9eP3OXhtUOyCmf%2Fbo9oalXU%2BVnS%2Bn1cbtgsQIgaKNbVl57ENh%2BnTnGF90mfu%2Fv9xcVEpSgHuKJ8%2BjcekEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGs8blagtrh2k9EeIyrcAywGTMMyOrh7XShRyFgxjgLu48YghwrzvajIQv6ovIFlIRYqGtlpeAcXlM%2F54wuzobbwvKMQmAXX2xFN9bG5L6wKJb7r2dOJr41nnpW0onHhEctfvzqNtR9eNJ8pIHno2bfLGZJ8cxy60F8z%2BUlfsoXhuYMmb9LTkfs4qu1z7yh4r4OCG5cId%2BgtMhfQxkWkBdJqRlbhqrbxZhfbfrob0ZTCnl0P0GsVbsggmOxKBhUIBR5FROe8ZtcwnXPvCxWxmFCcQhx9b2QpJr7nl1LuqOkBK4mWOAVRyBVpqTgLwveyTOOpPoQ9DE8XCnoIwOoN9Q8F%2BktAuPMwotPSE0A4SCv%2Flla%2BfNQFyA1Rsb13JFPa8v6QJ73yjuWtLECpQE19hbpDWRiiy3fO3nvfN64l6oBCW956NtTyIqwj3T68BxnWS2Y5cPS9TGz04WtEtNrsXECLoGSHSjehpdcwzReb1dIXf5eOgzzbBBDPj9bOUpkYccU809ADY0Djujin0x5vw4P9SfAk91z4A5y6BBDTWS4B1u5VZr7REFZXHJmhr4zedmlL66WL2NeXbbdTybieIu5XzYS1Z4nKMYc%2FEBz2w9%2FlIDu6sySQKVUuTtvnf0oZ4uyVqbB38HXdY7CdMKrD3ckGOqUB8PreN28GR%2BI7nyBZoXfEliuuKFTyIX%2FGjM%2Fp9trEDVH5klrPA1t%2FjXkHgq7CS3thHzJnofHKqiFMNlsIeAxIHKZbaWiXNFOTa6tdVUgpvWSrpJqC6kHx3LghgRl%2FsuEvYz1YlJotEZPS9CzMj%2BR%2BY5%2B9u9GXwT9JgeNnnqZN%2FhbAzoVFIYh%2FqU2GrvYO2wMEEyuWBoXVHBzhSVwkgJ4Lt7Q6TpQL&X-Amz-Signature=2171e823dccc98a0651655b2f2514f61697952f83709a8057e1b84eab8e99404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQZNUZQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlrOEQUZ9eP3OXhtUOyCmf%2Fbo9oalXU%2BVnS%2Bn1cbtgsQIgaKNbVl57ENh%2BnTnGF90mfu%2Fv9xcVEpSgHuKJ8%2BjcekEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGs8blagtrh2k9EeIyrcAywGTMMyOrh7XShRyFgxjgLu48YghwrzvajIQv6ovIFlIRYqGtlpeAcXlM%2F54wuzobbwvKMQmAXX2xFN9bG5L6wKJb7r2dOJr41nnpW0onHhEctfvzqNtR9eNJ8pIHno2bfLGZJ8cxy60F8z%2BUlfsoXhuYMmb9LTkfs4qu1z7yh4r4OCG5cId%2BgtMhfQxkWkBdJqRlbhqrbxZhfbfrob0ZTCnl0P0GsVbsggmOxKBhUIBR5FROe8ZtcwnXPvCxWxmFCcQhx9b2QpJr7nl1LuqOkBK4mWOAVRyBVpqTgLwveyTOOpPoQ9DE8XCnoIwOoN9Q8F%2BktAuPMwotPSE0A4SCv%2Flla%2BfNQFyA1Rsb13JFPa8v6QJ73yjuWtLECpQE19hbpDWRiiy3fO3nvfN64l6oBCW956NtTyIqwj3T68BxnWS2Y5cPS9TGz04WtEtNrsXECLoGSHSjehpdcwzReb1dIXf5eOgzzbBBDPj9bOUpkYccU809ADY0Djujin0x5vw4P9SfAk91z4A5y6BBDTWS4B1u5VZr7REFZXHJmhr4zedmlL66WL2NeXbbdTybieIu5XzYS1Z4nKMYc%2FEBz2w9%2FlIDu6sySQKVUuTtvnf0oZ4uyVqbB38HXdY7CdMKrD3ckGOqUB8PreN28GR%2BI7nyBZoXfEliuuKFTyIX%2FGjM%2Fp9trEDVH5klrPA1t%2FjXkHgq7CS3thHzJnofHKqiFMNlsIeAxIHKZbaWiXNFOTa6tdVUgpvWSrpJqC6kHx3LghgRl%2FsuEvYz1YlJotEZPS9CzMj%2BR%2BY5%2B9u9GXwT9JgeNnnqZN%2FhbAzoVFIYh%2FqU2GrvYO2wMEEyuWBoXVHBzhSVwkgJ4Lt7Q6TpQL&X-Amz-Signature=c4bb90a1a8b778361ad07a595f9974aad10cc5b35357b749561f6d2b1668eb71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
