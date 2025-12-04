---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
author: victor_cuervo
---

Hoy vamos a revisar un ejemplo sencillo a dar cuando empecemos a [aprender a desarrollar en Python](https://lineadecodigo.com/categoria/python/) y es cómo listar números del 1 al 10 en [Python](https://www.manualweb.net/python/).


Para ello vamos a revisar qué tipos de bucles tenemos en [Python](https://www.manualweb.net/python/) y cómo utilizaremos el bucle for para poder generar la lista de números. Además, aprenderemos un poco más sobre la clase [`range()`](https://www.w3api.com/Python/range/) y qué papel juega dentro del uso del bucle.


### Bucles en Python


Lo primero que tenemos que saber para poder listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) es que tenemos que utilizar un bucle en [Python](https://www.manualweb.net/python/) que nos permita recorrer los números. Dentro de los bucles en [Python](https://www.manualweb.net/python/) encontramos de dos tipos:

- **Bucle while** - Es un bucle que se ejecuta mientras se cumpla una condición
- **Bucle for** - Es un bucle que nos permite iterar sobre una secuencia de elementos

En nuestro caso vamos a utilizar el bucle for ya que es el más adecuado para recorrer una secuencia de números.


Así que miraremos la sintaxis de los bucles for en [Python](https://www.manualweb.net/python/):


```python
for variable in secuencia:
    # código a ejecutar
```


Dónde la variable irá tomando cada uno de los valores de la secuencia en cada iteración del bucle.


Si vienes de[ otros lenguajes de programación](https://manualweb.net/tutoriales/) quizás eches en falta el control de límite de bucle for o el incremento de variables. Y esto se parece más, por ejemplo, a un [bucle for-each de Java](https://lineadecodigo.com/java/bucle-for-each-en-java/).


De esta forma, si queremos listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) tendremos que tener una secuencia con los 10 números. Y si queremos representar una secuencia, lo que tendremos que representar será una lista de números.


Por lo tanto podríamos decir que para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) podemos utilizar el siguiente código:


```javascript
lista = [1,2,3,4,5,6,7,8,9,10]
for numero in lista:
  print(numero)
```


Podemos observar que hemos creado una lista del 1 al 10 con los números y mediante nuestro bucle for recorremos dicha lista para acabar mostrándolos por pantalla mediante la función [`print()`](https://www.w3api.com/Python/print/).


### Elemento range


Pero la verdad que es un poco tedioso crear la lista de números, y quizás sea algo realmente complicado si en vez de querer listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos proponemos listar, ¿2000 números? En este caso generar una lista sería algo poco viable.


Es por ello que vamos a acudir a la clase [`range()`](https://www.w3api.com/Python/range/). La clase [`range()`](https://www.w3api.com/Python/range/) nos permite generar una lista con una secuencia inmutable de números. Por lo que si vemos la sintaxis de su constructor podemos observar lo siguiente:


```javascript
class range(stop)
class range(start, stop[, step])
```


Mediante el valor `start` y `stop` podemos indicar desde qué número queremos empezar hasta cual queremos terminar. Ojo, que la parte de `stop` no incluye el número que indiquemos como parámetro.


Además podemos conseguir que sean incrementales de más de un valor a la vez mediante el atributo `step`.


Por lo tanto, si queremos generar una lista de 10 elementos deberemos de utilizar la clase [`range()`](https://www.w3api.com/Python/range/) de la siguiente forma.


```python
range(1,11)
```


### Bucle para poder listar números del 1 al 10 en Python.


Ya solo nos quedará utilizar la estructura [`range()`](https://www.w3api.com/Python/range/) dentro de nuestro bucle for en [Python](https://www.manualweb.net/python/). En este caso la secuencia es la clase [`range()`](https://www.w3api.com/Python/range/) con los valores del 1 al 11.


El código definitivo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos quedará de la siguiente manera:


```python
for numero in range(1,11):
  print(numero)
```


La estructura de nuestro código quedará tal y como muestra la imagen:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBEFQAQF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBUgpYNmwWsMsImIFNSWkUcH5aIeXGBtkWGOrObw1zShAiEAjp1xlt%2BEHsrGAls%2FNLsgiQjvPSW77%2FLk%2BUeHMjq1UWQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDG61LIT1rLVaJmxV8CrcA88eeELx2C%2B4fQcvQt1vYHrmsGLvOAgR8eWCp8DK5wEeKq%2F9b4nitkSsRDX6jZ9IXi4LYAZaVbtqNyKnKKw3v0x62ZTr15YqnoKaIA%2B6jsN%2BvwELS4i9yQBDJhk95qAdbG9JPiBVytNXtVOfsUvMXVb%2FYJ%2Fbma51kM7GkpuDwe0Xtv097JEL411ET1WTDjzb993MS97WZti6kxAl4hCExm%2Bck5xULiFMJYdpGoFehygAxX9DUMExKFIhXPyVm%2FVeLw1MVjrA8EdWbZgM8unnTALeZGgohDSKbSiBC9G2JYN3PaxfavcaEjqp3cRfjtzKFGhkuaqhoXXdp2x2XzD5BkBJW%2Fcklgk%2BGjyl7ESOqNbXrKeB6Dlua8z9aiTcCZMbOLGpRe1D4YpYbAfA16fy9BdxTWmcklICcIHgaft%2BaKQy4oHCgHSyNqr4hXML2E5DXiThUZaPLYUD501fbhmGXsKtcHBWiSt5sTEsqO32IuaSmRMgeLF%2FlgGVIGQL7ssJIfZbf3%2FlzjQrxBRkeZE8s2rFIvZe4giQdBnVKMzLHw%2BPu2RJAh3hKhKq3kvKG%2FbXknHAmFY2ibsMWewTVX46hwhRGTPilNb638AliYd3xcNnVUYwnYXRL6JFzuvpMOCExckGOqUBMaQcrApDaf5BV0Su5WWw8DdLTeadhqZ4KcIr%2BdrasnCHBWkxBsjO0c8L4d4Pb8vv%2FvRBFZMnP4hX6o4rJ8YxM8jxPFR6V3BG1z%2Fs0Y5GqutZCNCay2A3u5w4AYKmE3NuFoOnD9JZNcCTt25EobOcQN5N0b7LE%2Bwk0rd9PPGOYGGy1eRyojqrLW4Y2ZMc39ukdhhe4zhmYOqIqH3nQqYU2Po0OPzL&X-Amz-Signature=274f51feb20b54bd1990da157193cd71898e78decabfc50cbb3472688b9039df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

