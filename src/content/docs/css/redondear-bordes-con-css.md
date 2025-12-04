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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPPODREV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBEYk7mgYRoYAPCuvUx%2BO0r3kwprIhgHrRZAbwckjvS9AiEA34mvaAd6zQZDIwnMQDyy3aGYjuRF5BXhRxEYJ0BkP4gq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGheT0%2Fuh37CpJhL2yrcA%2FalKXXQslqYPAP%2F7pYqOIJsp8NW8e1fCQmCoxte%2BIOs9q5jH6VG0e%2FYQMtqcASG1npcUJbaQHWdggZh6PF4KMX3M87vk%2BFs44nfHGXkH68KHPECPMkoPtWJC7CTuavwpKIiMnEkGrObos4veAEbLqulZw%2FhZ3IANHzR54t1LOZYCCAYbDqobyuYIV1r7UCILl77dGtzi9ZKrbMmFDsMArRIoNrYJ6C7APrJsvM8NBITWUIZ1z0bD4X1rShr4pgTL9FpIWOJShXqBeYfibaRdlOJLuUND3wPRv23PdJNhyAn7PDFIuO%2BW98zB4tRg7faxa%2FAafb5YAxftioudEWDmfBDoxxJ1yE8R93k%2Fh8yGpH%2F%2B0%2Fd8OPqf0FES%2FTqMsHjLmI2qsLt%2Bn0pH%2Bx0I2WQvTsc5scVR%2Bb9A%2B4N9NN3tyH2dqd6Nwz%2FZHZWQMun6%2BiPtzy%2FfzDbp0YFuhYcuzvEWajfjzV0Vpv6yLvD7YnS8bRJX63sySrX1YMkG%2BfFhsObm0Dp4yfqcuE9n3igrLIzKIFdQ%2BiFSoP5mPxEs4kC%2FqoRUrATxUkhHDRLXNUAMP1rccK95aB8ZX%2FHgH2eLyEmAd8LFA1v%2F7WnIn5FnSPGxWi49ZQiRu5x2R8p2wYDMMHnxckGOqUBbU2V2OhCLcguo4X0kNWZ%2Ba%2F5XmW9hN7uBe8g2J43%2Ff4E5sUlwZJohfCcQ%2FTMeWAErq9E49JXBeJdRy08%2Buwk2qAsutKJMiUceS2dXlhVJW7Jwr3PfwiQaUaFd53gSv4AVt5BsT8q06THRtih%2FVFO7SkhKqTmd6wJrgi0W4ovoC%2FMXakFFNCQ11gfTITeF2tVM9q6g%2B1ogbpJDHicNEWy9BFZOhg2&X-Amz-Signature=659a69b0211f7a58a76bb85a3b23f9fa84bfe2473b907c75261c88877eef9cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPPODREV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBEYk7mgYRoYAPCuvUx%2BO0r3kwprIhgHrRZAbwckjvS9AiEA34mvaAd6zQZDIwnMQDyy3aGYjuRF5BXhRxEYJ0BkP4gq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGheT0%2Fuh37CpJhL2yrcA%2FalKXXQslqYPAP%2F7pYqOIJsp8NW8e1fCQmCoxte%2BIOs9q5jH6VG0e%2FYQMtqcASG1npcUJbaQHWdggZh6PF4KMX3M87vk%2BFs44nfHGXkH68KHPECPMkoPtWJC7CTuavwpKIiMnEkGrObos4veAEbLqulZw%2FhZ3IANHzR54t1LOZYCCAYbDqobyuYIV1r7UCILl77dGtzi9ZKrbMmFDsMArRIoNrYJ6C7APrJsvM8NBITWUIZ1z0bD4X1rShr4pgTL9FpIWOJShXqBeYfibaRdlOJLuUND3wPRv23PdJNhyAn7PDFIuO%2BW98zB4tRg7faxa%2FAafb5YAxftioudEWDmfBDoxxJ1yE8R93k%2Fh8yGpH%2F%2B0%2Fd8OPqf0FES%2FTqMsHjLmI2qsLt%2Bn0pH%2Bx0I2WQvTsc5scVR%2Bb9A%2B4N9NN3tyH2dqd6Nwz%2FZHZWQMun6%2BiPtzy%2FfzDbp0YFuhYcuzvEWajfjzV0Vpv6yLvD7YnS8bRJX63sySrX1YMkG%2BfFhsObm0Dp4yfqcuE9n3igrLIzKIFdQ%2BiFSoP5mPxEs4kC%2FqoRUrATxUkhHDRLXNUAMP1rccK95aB8ZX%2FHgH2eLyEmAd8LFA1v%2F7WnIn5FnSPGxWi49ZQiRu5x2R8p2wYDMMHnxckGOqUBbU2V2OhCLcguo4X0kNWZ%2Ba%2F5XmW9hN7uBe8g2J43%2Ff4E5sUlwZJohfCcQ%2FTMeWAErq9E49JXBeJdRy08%2Buwk2qAsutKJMiUceS2dXlhVJW7Jwr3PfwiQaUaFd53gSv4AVt5BsT8q06THRtih%2FVFO7SkhKqTmd6wJrgi0W4ovoC%2FMXakFFNCQ11gfTITeF2tVM9q6g%2B1ogbpJDHicNEWy9BFZOhg2&X-Amz-Signature=8d2274318b3c7c84554caa466e34fe638f60f249899a3e61b35d26508990244f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
