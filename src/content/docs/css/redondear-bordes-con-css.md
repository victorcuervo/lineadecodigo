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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK4PAX2S%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJE%2BL%2BEP0kCCXJBLl1%2BytnAbLS48fcF7ZMCbWRtxB71AIhAJZl3EKAXwUkeYv1HkzOC4agcEUTBJJFoCv39uLkdul3KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUDrjsFepi%2BLbjp04q3AMXQKhWSDB2wdyU2ffVUpxF9SnFosMzteO39G6Juh5OwnV%2FcNvF32Xyr589mj3YxCpuSkmWqr%2BfgqtoHFQHvHBpztgJ5R85IRW%2FqJighBi1mrj60QYa9M6PzIzDHG4sHujXx2cy0HsrgxUz70EOTXNQ4FE%2B8k4B4nRS8ruDvUM%2FPcPo%2F4hCMUMwh9T7KS7Sa4AiFDTZcpga0WfXf5zXkOLhXJ0wf7qraBNTXOagwLFXLhTGEBhKmsI1H0JqYSFrlOMlhohh5rU3p3f%2BtcEdm8azs9OJn7GK35RO2qPBDIuicmmjeEQ376b2S8npwY9xCYZGDY97aFkM9ydoL1g%2FlkAG4n6CDLXMGG85Ae6JY8CgE%2Bmzi6duNQQsfAId8XU0qujPjfGPnv6%2FUUCBAnSIYt8kfUtF1koudk4W2tbbUsbLWRBgl74fbNDIUXZ02HU0WxJ7Q5bflG8%2BRMqm%2BzhuORbwzNgVY8Ctn6MZxiHQRzIv237tFS4MEvfWwtGrY771JyRNt%2BzUckhdmGmYwQRfpIcwBZnsOrl%2FR0%2BzHh%2BmIsAcqxKtbQxcOLNn%2B5vva3HPtV%2FMkrQM5r5FAK7Qi8Z01zQKq3Ssxh9j2jCAZ9YkSoAkanif7RGqGSnKE186xTCiyd7JBjqkAVh1VE70ZLjLHeitU7oiGOpMPZp0OhUXboMcqczyIThBDSq%2Bj%2FsSfT1%2FD9vnmeia2BTWqF46GIYU7bI009ckh%2FbrqPEDw%2BK05pM4XkB7vO05vg%2B3N%2FanL5m5OEUmmxK4%2BfJpMgvUNr5mM6p3umTWdSelx3zBFhkXBc%2FAPjtN42%2BM61VcHXz99ppu3kcJ9vwhyT%2BRx6d7WQkUFM1T9L7WcQSnXyJS&X-Amz-Signature=758028dc17adc3119929b8dbd0967de9a8e5cbe5d1a06bbf0a7e9d30dcbbc1ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK4PAX2S%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJE%2BL%2BEP0kCCXJBLl1%2BytnAbLS48fcF7ZMCbWRtxB71AIhAJZl3EKAXwUkeYv1HkzOC4agcEUTBJJFoCv39uLkdul3KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUDrjsFepi%2BLbjp04q3AMXQKhWSDB2wdyU2ffVUpxF9SnFosMzteO39G6Juh5OwnV%2FcNvF32Xyr589mj3YxCpuSkmWqr%2BfgqtoHFQHvHBpztgJ5R85IRW%2FqJighBi1mrj60QYa9M6PzIzDHG4sHujXx2cy0HsrgxUz70EOTXNQ4FE%2B8k4B4nRS8ruDvUM%2FPcPo%2F4hCMUMwh9T7KS7Sa4AiFDTZcpga0WfXf5zXkOLhXJ0wf7qraBNTXOagwLFXLhTGEBhKmsI1H0JqYSFrlOMlhohh5rU3p3f%2BtcEdm8azs9OJn7GK35RO2qPBDIuicmmjeEQ376b2S8npwY9xCYZGDY97aFkM9ydoL1g%2FlkAG4n6CDLXMGG85Ae6JY8CgE%2Bmzi6duNQQsfAId8XU0qujPjfGPnv6%2FUUCBAnSIYt8kfUtF1koudk4W2tbbUsbLWRBgl74fbNDIUXZ02HU0WxJ7Q5bflG8%2BRMqm%2BzhuORbwzNgVY8Ctn6MZxiHQRzIv237tFS4MEvfWwtGrY771JyRNt%2BzUckhdmGmYwQRfpIcwBZnsOrl%2FR0%2BzHh%2BmIsAcqxKtbQxcOLNn%2B5vva3HPtV%2FMkrQM5r5FAK7Qi8Z01zQKq3Ssxh9j2jCAZ9YkSoAkanif7RGqGSnKE186xTCiyd7JBjqkAVh1VE70ZLjLHeitU7oiGOpMPZp0OhUXboMcqczyIThBDSq%2Bj%2FsSfT1%2FD9vnmeia2BTWqF46GIYU7bI009ckh%2FbrqPEDw%2BK05pM4XkB7vO05vg%2B3N%2FanL5m5OEUmmxK4%2BfJpMgvUNr5mM6p3umTWdSelx3zBFhkXBc%2FAPjtN42%2BM61VcHXz99ppu3kcJ9vwhyT%2BRx6d7WQkUFM1T9L7WcQSnXyJS&X-Amz-Signature=a9cbfb44cefee857b984feb1a616af0ba2275df08ef0ae64805a6f9d023ed7e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
