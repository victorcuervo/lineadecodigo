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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK4UBBJK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9HqV%2FGLKzmWOtBmmIqxpxdnsbksPoD4icE18X4ZznkAiAdwJ%2FQRNTFKSEk%2B%2BHmWPJ6TXDB8OWALqijnYkEeOLKWSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMG3Hvu8o21%2F6d4bUfKtwDCI9uaqghIDa45RGaM4mNZhVaeYkfFLT2LmM6JhpNkAo82lAMvj7GpX5TVGdlRuzFUdAREXZTh6Rp7wQmivC77hGUeHXmWLQEMQaDdwOCernRhd2k3Mpp8hO%2Bt9gmDgGN7%2F4Qhex2d7oBah3xWSYVEkC0dmYq%2BEIEumIRQ0EnGQ6x3OGvGVPb5IeC1jd%2Fr9KwOso4aTfKxgYN3Itc6Kdi6R%2BW%2FHmAlCg3OQk8zUugrHi6zli8QUO2fxKKnLRJn3gGy0gtYpKRZQaIUH5tzkL3RdBLtw814XGQ5Nnet%2FCXvHHUa37C0moFEDAntKDCH9TojydHyvAMW1DRsOvzMOatdAHXHqlK3%2FoH0O6fHbexCSEGgRoU%2FZpJrjvwWthFeffi3zbtVDwe8mrlrOBIiZUYlECyMwMhzRvCRw9A2uQVdvsN28CqEq8223N6Uv3kHAgy5oJPWG5JScsfbAIXux4C%2Fuu2mhHIRBniPu%2BLvIMEVW6pIfh%2BYxrdcEeee%2FRseXtXGubI0FeFPsZ3NDLue8ge0VbKxsluZMHLJw1jLGjA47ypX8QXUR2skar9ZkWVnSXMyekiCmB4MDx5jlTiLNRf%2BSmMi3kXQ2nWrieqJlVb8b%2FwsR2dUQw97bqOCiQwx6fOyQY6pgGkD%2Bddf9TVr7hN8EtzHlElPLm%2BAP3rKQo2BZPvPIS94I%2BdAcV0mZ4rEZs4aPVJaXa9LdwOkK2%2B14mvOZVKIMYECMCi0RK397cGtEAiGbq1cMe8zpBbAcfNZHRq%2FRTr3yn9tEb8kCzFNrsM3lncMNBOqKcZdSRT1yN6x0Qez7u%2FvE4PJjC%2Fv5wGPHGrrFDFb6lJgIqFDMaXYpYpTNvE71MntdnLOcqT&X-Amz-Signature=15a8a4f7cb282a2f3da856fb7f6d99e22157654c702e34071033b794f530f53d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

