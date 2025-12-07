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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2BFQEJS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDN4klYlmjlg1FB2D%2Be3DZ%2FgISTSHHEk3sDSUHuzeutUAiAX4HCSW3%2Bj%2Fswwi0fS7uhqZ2PC1oZwY7ER6LJ3lU1omiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBvY6%2BdTLtmASctMTKtwDimoiRVu%2BWMePQrNtmwodjobGFWxDpfWBHRM9ZgDsAVJE%2B6yD0VoBjodG0%2BDgSxIKwIQ5RFBl7OtKU35yAiHRbgIyjBK2sKQFuAfDVwPrsNjxtWtu3hiCobEvV2wNNSoDi4DmtMomUpMfltDNXyU09dcxPp57YdpqwbukGkFd7321UxIkDsbbzq%2Bx7cOJ3yMX%2BlqXzylzQoFdolDA7LYi8pz8WpE81ziKOxKx7Mr9heZMhRZqeJTWbgtZQG5jUUTnQ7HYzMasWIpScFy%2FnikfaSq41gTZJMm5PrfWPLgdyj9mrN6kr5Z3j33zScWZckJ3N%2B6dxRAriXAsn1PzX0e1aWP5URGwelie8YMaeFrhj%2B%2FNjg0Vp32jGDnQgbSJAQnyccNjKS8Bfz8Giq%2BY9QGaljPJ2OVxkNykWJXjDUT4qsaARACPx%2FHWTS1OsVm6iIUnglU9aEHw1dk4SiIlctRjvCSc4VvoNQwDDO8jy6%2FQRjAQf6kDJFdCmpYr%2BxCEpchmdbi%2FWU3KCxJi6nUZh9Ig92S19fd3wIc%2B0zV4EWK5DjG%2Fed%2B47qR1uEZ3DS4JNXapchGWwX4jhE4YIL7EeSdBC19jQ2vS7HAo7M8kI01r%2BNdgZlVkQc95kiAcEXowmpnVyQY6pgFZ0sJBjp1rOv8EILsBxCQoxGi%2F8uEW%2BshMJ1W3kVMXLj9rn9lKaaMPa69B84le53Lxa0moUE7hvvu%2BpWzzfjjaMyZo8MnueSDOVi9UgcgurDzzcR5X7SJjJwpzRUmuzn9DXR42dAi%2B3TxeMl4mTqoLhzUl1hiazvfw6rOkUFAcrgsXCM9eg15PtFk1CSEQxZzMitC1%2BDtoHjHiVj1Vr1dDQebooWNV&X-Amz-Signature=97199887f57bde77cbd9db2791e017980242e447febc7d927b1e327118b95245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

