---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
slug: /python/listar-numeros-del-1-al-10-en-python/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWJBOH73%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsrpbs%2FmMXzt1Zxhv5kmtYkoySgIEvARfqlII11qLn%2FAiBNSLi8b4EVD%2B5l%2FTaUn3RIN%2FF7Ta%2BjzC2%2FEyQtI%2BBSrir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM5frtzeuqj0Sq0HUoKtwD6Udm44s0NDLE1OWct2qU4WH2JNVW5PucENgvJoZWnUmHaSI1Vzu%2B9AiLkKLPHz82ShDhxfdYx3dFBI2CMyNNNHDd0vAFaSBJ7%2Bi6o08TGs2lEjxUPy%2BJbIJDDnWZ0MK7gP0rS423R6MyyH4V9KooT03scZXLYf5%2Bd1HHDXX4f%2Fd%2BGImlzM5gaQ1ReKPlMe4kuCGgHUP2c03Te0fJKDEwIXBG%2BjDn5VS9k%2BRfaGQHO1ek7K%2FUKZVdKp%2F283ra017lv09i4Tfv98oYOtKpPXgTW3Ip%2F42C3cfzk3AP1NsCn46tWt6LKGdpb4eKTV%2BNnxGh441nNBRXIzWCFFckcckCVuAzOLiK9gYOZdGCIaTIkmG3nMAU%2F%2FTLYLfAyP98bxLYLDz2Xz1eAYPbU2%2BZRDWHnRP%2Brt9nI8uXmEks46x467WsWweccV%2FgyyNY3NmxHl6VyRAykFVnoEzW%2F%2FQUnPbW0auvDgNfrqP%2FQUZN1BZiO9pmWIUBvGhdeslogC%2BtwSTJdCWrbahbiSwlZNMLWFzlC5fbntL%2F8CBF93Dsn%2Fueley0GzTAP0cAOy%2F9pURM%2FLmKqRrX%2F8aTi3QOxhxRPUs7CKLn%2FxeqMXuBwrm0RlOJv4Vx8WLb%2Fc4ZR9K7B%2FcwosbRyQY6pgGJGPW8GMm7e3fg98tb84%2FZccTLkwAxiYHWn%2BJaFi%2BgpO0AOxw4YOnlWA9nVw4FLY8cs9%2ByuMJxz%2FZFEmTjntw1m84%2BQw9tcoIYtUwHcpu5CLGwhHEi2hMG94iyky2xxFJZMVwf%2FWxr1pHq1gA6tAANgrK8otdtslsO2ClibV7srjsP0VsHee3V0DvI0I2007%2BBuOjF9QDWbRYKtN4OW0vrtgIoqA8l&X-Amz-Signature=40cfffef76d9ad293f0ed3c75e32f7a104870e355105666184e265dd3e9610a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

