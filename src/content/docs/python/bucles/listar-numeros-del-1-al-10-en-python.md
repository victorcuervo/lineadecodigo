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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWYRET5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVMwXs%2F6SB9u%2FB5pQpBqPeUp8NlSjeUmbmbAwmEIQzIAiANaSn9gg1i%2BETd31FhiJ%2BxrSx35fkAj1SOtEVxkTcWSCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMAmVcnbxt%2Fz%2FhtWmNKtwDsbTCZ4Wp8MxDzufmPgjZEJ0QBTf4xdOklv9XocJ4ZgaajcVtmVVg64qNG5Sa7yfU4if%2FbqJ%2BbtUmn5AixPc12LLftX4M4aiTJw3kq10%2BvaqIe1cZ2P0A3Pak9gSPkd6vkyt3LXZj%2FM1yvRlF9hVhRvDG2vQoRSaiqNH5KfvFYU46s0P8Cn5noUJsvdPDTNPOjOCJarGw9f8hk4N%2BRWqB4TIIii2kTHgoQg0puW0n3YQZXUtk57hTX65oQmcSoDdo3UxBKHifZD1no1IFYFxHIGubkmYSmnxlb99SWcCpTrZtGEEgP2XsrvFfNrKWP4IMSCWs0tLhVL%2B%2BFrhljPps5exjojfBgHmcnIPhFtXzC1P0FOF3gFNtMH6pg2j125AS4NQlSUmCQgF7WaqfWMuzXTrNL2lqEVhjnyKng%2FPCXWCQ8jrd03vsTF6ddfiO6WqI1t8oEsguw%2BDeN6oett26Fcf3TJZX8soDZUFkqziIBT8VcW%2FpgHS07x%2FrFXK1fE827VOpGdBQC5yMD7H5busRfa7DWugYPI2rPDSaBlg51hs%2BrwgWsoKfC3JgBP6D%2Ba1U9eo%2F1fgsLtkyQFDZwK7QJ4U%2F%2BBvWz7Jv2UPCKLKRdGJHzm0ogCZ6EJtdOhgwqN7OyQY6pgEoYUy4K7ZqO01OYqVRbcUtKYClMemwA220jIqoBAwcuLszQm6vraJYTw5R8GHZOT7ubQhgRc0oszgN9W9pBqV6zbDsZpeGaulo36AdeOqqXpzDHJr2kqsYoNbWe70JihwjAtcMOEQc1Zu1IAJBn5W9lGUOYfdhePmjMc8AJYRkkLlqd9iV5ydFcOF8Hm0uHk%2FF4bglPdSEtzLHz%2F5QT14d%2BxS%2B59ZZ&X-Amz-Signature=796dd1b260621e2cb20a28f135521a7b31295c77af5012e0516e62419e2c22af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

