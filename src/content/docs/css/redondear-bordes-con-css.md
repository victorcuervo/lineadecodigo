---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSKBORVS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKk2Z7vjV7dBZG71%2FJO%2F2Drzq51RECKptf8AszzAvidAiAzbGtSmQKgwuTR9X4bNEqWDld2OzemP25hGowDByWUmir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMRhwrsSOWBRjaZeL5KtwDinLIp1ofe2Wl4prYVSPzMm92zBw40n%2Bo%2Fc86xYsPUKy9zYyS0dEMERsZrclK9tuDXlt%2FvghbLSWOdUuycgJccAqC7PeVVmtjLzUZpsw57tBY%2F60Brt8iMtt%2Fe69bLy2UT2kIAelusLH%2Bn4ZAWZh7dWtWVX2iAV4Vwva0Apa5FmsPGhAXzuuAJZ1dk6P%2FOUPw0OyCMq95wJ1NLZFzjNddIrYndCF60VQUgZCGueqgXwaZbphYelh%2BkNs6lB9y5CeBNnGWPpLM4qnnv7DRPYHDZuMrhrVMeoVjJqMV5TiuvXFuQg%2FCKfh85vVjxjFXVm3TUCYFNJRrTUzfGMpoMQrQhPW7IpcBWYGuo7kRvtX%2BRp8ifw4z93p1b9lFAxBlWucXUhpHghxmHAiLXxNXfwZR6nRfm6IB3AiNl7Q17ZNYc3yKoyzn%2B0YLE%2FFP4l30WIDJ3xRs8maxNyDnghwDp%2Ff2qTJlOUdgV5hkoECENenmgr3UBHgZ5S9V%2BkOQEURE0yarJRCnpUJDnS9wzHCbzfQk60vvbWcKE%2B8wE82i3Mx%2Bs05aRzrTvcn8KGYruF4JQwTRuXvPIh1dx%2Fx027i7B89nbktWXtZg7WY9wjUry1%2F71tqFAfpA47CwKCdh8iMw2PrGyQY6pgEekuuEogyqExYgZ1%2FXOhHL%2Fs9o9dqYiMLv2TrMbyJJCWm9K1Tz30a2c%2FunLsrScSkU8OfqMH4BZ257o%2BZlUXXW2zD5W6LOyx5BleOZCSVEpBeugpPrgJO3GlX%2FZX67JHJZ1Fn%2F6N6wiPvzmLtpx%2BWRbXt05bP6LRw2hnvTgFVYl7Xf7GU4MlypB%2Bnlfojcs61ozzTEkItA26aNfz8ajac%2BNvCJmSAX&X-Amz-Signature=159474db4cc66ce9ac5dfca5c8a58023bfe27d9325d1e64584063d01df04391d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSKBORVS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKk2Z7vjV7dBZG71%2FJO%2F2Drzq51RECKptf8AszzAvidAiAzbGtSmQKgwuTR9X4bNEqWDld2OzemP25hGowDByWUmir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMRhwrsSOWBRjaZeL5KtwDinLIp1ofe2Wl4prYVSPzMm92zBw40n%2Bo%2Fc86xYsPUKy9zYyS0dEMERsZrclK9tuDXlt%2FvghbLSWOdUuycgJccAqC7PeVVmtjLzUZpsw57tBY%2F60Brt8iMtt%2Fe69bLy2UT2kIAelusLH%2Bn4ZAWZh7dWtWVX2iAV4Vwva0Apa5FmsPGhAXzuuAJZ1dk6P%2FOUPw0OyCMq95wJ1NLZFzjNddIrYndCF60VQUgZCGueqgXwaZbphYelh%2BkNs6lB9y5CeBNnGWPpLM4qnnv7DRPYHDZuMrhrVMeoVjJqMV5TiuvXFuQg%2FCKfh85vVjxjFXVm3TUCYFNJRrTUzfGMpoMQrQhPW7IpcBWYGuo7kRvtX%2BRp8ifw4z93p1b9lFAxBlWucXUhpHghxmHAiLXxNXfwZR6nRfm6IB3AiNl7Q17ZNYc3yKoyzn%2B0YLE%2FFP4l30WIDJ3xRs8maxNyDnghwDp%2Ff2qTJlOUdgV5hkoECENenmgr3UBHgZ5S9V%2BkOQEURE0yarJRCnpUJDnS9wzHCbzfQk60vvbWcKE%2B8wE82i3Mx%2Bs05aRzrTvcn8KGYruF4JQwTRuXvPIh1dx%2Fx027i7B89nbktWXtZg7WY9wjUry1%2F71tqFAfpA47CwKCdh8iMw2PrGyQY6pgEekuuEogyqExYgZ1%2FXOhHL%2Fs9o9dqYiMLv2TrMbyJJCWm9K1Tz30a2c%2FunLsrScSkU8OfqMH4BZ257o%2BZlUXXW2zD5W6LOyx5BleOZCSVEpBeugpPrgJO3GlX%2FZX67JHJZ1Fn%2F6N6wiPvzmLtpx%2BWRbXt05bP6LRw2hnvTgFVYl7Xf7GU4MlypB%2Bnlfojcs61ozzTEkItA26aNfz8ajac%2BNvCJmSAX&X-Amz-Signature=d1438e1c3e5cd8adfbd478023b4c128d9833bef125b96bd7de59319101066afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
