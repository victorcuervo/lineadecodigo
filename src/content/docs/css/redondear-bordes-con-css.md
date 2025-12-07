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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQKWBSA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRwvtk9jmyWz0eVKKlpt4V4VpZWizBSl%2Bez8XCg%2BngZAiEAvbVRSVroCEoldovxFhr7kHF%2BvQ%2BX9RnOZ9dV9YTa7p4qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRoXwhdlUlIf7CZeCrcA8No8yRrrH0GDeu2bY1fP39kRb6t%2F4haSrBUbEnHoWg0HGike88YnyHqefJPlJTG5QMjs%2BgO1jTrB6Q%2FgKqTt1wawW1iLykvPmmqEbxRoSJ2b38wu5LgdTT7YJErJW1iBjCuZG2YJ0XMKnwUXZp4pu1hvWCTioSp4gZZn5ib9Vs8y%2BSkcBPxB2TKX8y3DPJy9UdC8BuzQs2HF0KOgYOhfaktC1f5BBBuRWj7EpNr7l507FWZDJ93Kvg9u%2B%2Fw6s09TCwNjrUa9KMX4AsAf97YktXzbpvluu1I3xyC26NLfInzYtpAub53r6IzyxvRHw4R9sGVinouD3mlEy7Aw4RPrurQ6DhhxjAwCmOspYuznOYFRzi2I4YNiOMwKrcQVAjo9znsyCIWZl6%2B%2BxsfnHf4UWXyrxGsgfvqhYKY5ms0ixkQHg%2Fmy3D0rybNv8jqD54Ymo3xq3kMP9wdFr6ldJUcQ4HTkbsnD7LhWAyS5ekJZXDh0vfEgSeHrVrXpDuokNqrOTEa16QuS%2FmplugsmsqdjgoKsFwRcFs%2Bm0mkohN6gTFJLAVqKRhqwv4iFJ89HY81KzadCjdFZCFExpOHIF0PKN75YD2fAT5U9XE53MZVCVupoTaJ7%2BBOPPXsJvzjMOLH18kGOqUBc%2FQD%2FCyjU97jDYat33T18wsAHACgpv4Jl6t%2Bppes1%2BiITYyD9KEFTZH2cl113NNi%2BahfWFH6J1UpO6zJ1eRKIbI7YzIKsqOvpqauezJmcKYV3Jy0NVxTUR5L8CXIcC7jdqMNXgW3xTOqjVnli7deOf6xIBIPGztfH8fTP0G%2BSSaBl8GFIBljcybrC%2BazSN1P%2BxMA7OSznx%2F0n2AFiI%2FAv5nkX9nM&X-Amz-Signature=b6144322b7b155ba233f3bf5c3c41cacec7ecfd31edeb15bc3ad602fd30aac29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQKWBSA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRwvtk9jmyWz0eVKKlpt4V4VpZWizBSl%2Bez8XCg%2BngZAiEAvbVRSVroCEoldovxFhr7kHF%2BvQ%2BX9RnOZ9dV9YTa7p4qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRoXwhdlUlIf7CZeCrcA8No8yRrrH0GDeu2bY1fP39kRb6t%2F4haSrBUbEnHoWg0HGike88YnyHqefJPlJTG5QMjs%2BgO1jTrB6Q%2FgKqTt1wawW1iLykvPmmqEbxRoSJ2b38wu5LgdTT7YJErJW1iBjCuZG2YJ0XMKnwUXZp4pu1hvWCTioSp4gZZn5ib9Vs8y%2BSkcBPxB2TKX8y3DPJy9UdC8BuzQs2HF0KOgYOhfaktC1f5BBBuRWj7EpNr7l507FWZDJ93Kvg9u%2B%2Fw6s09TCwNjrUa9KMX4AsAf97YktXzbpvluu1I3xyC26NLfInzYtpAub53r6IzyxvRHw4R9sGVinouD3mlEy7Aw4RPrurQ6DhhxjAwCmOspYuznOYFRzi2I4YNiOMwKrcQVAjo9znsyCIWZl6%2B%2BxsfnHf4UWXyrxGsgfvqhYKY5ms0ixkQHg%2Fmy3D0rybNv8jqD54Ymo3xq3kMP9wdFr6ldJUcQ4HTkbsnD7LhWAyS5ekJZXDh0vfEgSeHrVrXpDuokNqrOTEa16QuS%2FmplugsmsqdjgoKsFwRcFs%2Bm0mkohN6gTFJLAVqKRhqwv4iFJ89HY81KzadCjdFZCFExpOHIF0PKN75YD2fAT5U9XE53MZVCVupoTaJ7%2BBOPPXsJvzjMOLH18kGOqUBc%2FQD%2FCyjU97jDYat33T18wsAHACgpv4Jl6t%2Bppes1%2BiITYyD9KEFTZH2cl113NNi%2BahfWFH6J1UpO6zJ1eRKIbI7YzIKsqOvpqauezJmcKYV3Jy0NVxTUR5L8CXIcC7jdqMNXgW3xTOqjVnli7deOf6xIBIPGztfH8fTP0G%2BSSaBl8GFIBljcybrC%2BazSN1P%2BxMA7OSznx%2F0n2AFiI%2FAv5nkX9nM&X-Amz-Signature=be25b7aa9e0c804b39af5956a9487986e686a2a5f02a4e0b26939a499ca6ed1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
