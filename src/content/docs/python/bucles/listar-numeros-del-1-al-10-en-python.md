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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LNJXZIW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq6Wb2nACfg5V%2Bl2FG6Bx010Q%2FL6jZ28diuA7xAKwuYAIgd2SpRFy0eRRf5GuebLzWr9DylwFe8IJJX8dAKgRnjawqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6zfrTS9Je9mrLlFircAzkCDzHnXEYF1yhbyy1u0hTIrUgYjSd2ZcS8eWAu9%2FrknqLCrSwGk81Mw7VCdTtFUje7zqgnua5lGh25Zn5FL9EWNKjvaoHRN6LKDebY4k%2BG%2B2CR%2FlNpmhWP5KUGIKSGV0%2FxdjX0RwzJ8asf7xi%2B%2Ftt2R%2BZkc%2BzuIZsm2oJ%2BvnqyBNZvIRfSXhGFVkz61sWc9EQMwtcslqkw2pwliNtKVEfJ1d2PH6xPoveuScUfxbHdMRGVZ0TsZN2Rx2g6Ru3AB9eBHuF7DP%2BpY1iffR9KF6KHI4QuIr78HyQkBY4ZUDDRmn5NqDb85X8HQ8LClZnK43IQlMkLFWgaoTajZNvr6MHCtGxBYfzRK5jkeA%2BPN9UwTsv9Bs7R67C6I%2BWlZ4gdS3z9ePR2HLJBUD42ooAKm9WhhMKxDcEvo%2BeNyIzMX3cTNgFJDRyRp9TSwC4b2PWpGfhZfw462B5xsxoJ1DR63uvS%2B77U85CZTyZU6DYpZHW35tUSWEka9xbcerqJ8W0HPsrHcQHmF5I%2F94NKW5PEyPz634ph9C2TPuhsJTx1hxiSeSY5m%2BHwRdow4%2BnvlE%2F%2FhMsmfTapa%2FJKzbdaf%2BLRtkqdgpvN4ouWb6l4zd07dJwut7ygsFfsi9p6Is6zMJfl3skGOqUBnyDNmnKb2HQa3jt1F723eLmpiIW8M1vdSjY%2BAkv8ngccwWij3KGjEO0j%2FOyJQBTmQ4rn0Dd4NjmcPl3i1BUetaC5YDEEVqIoSXU2nd6tueJCR4KuOlYzZ%2F3sUpzWWQA8y6%2FeJ8p7Wmsp3n2pL53lCDaOaaft8j1RqnQpXbOM6Jugi1pZPAlDC0BUE8jm4cvoop%2BsrdrT695SWkfbDQCgpkg4xFlY&X-Amz-Signature=6bcfd482695077ef6d7895ff746c9e8b92a50c9ca8534ea09a8e4893b85871f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

