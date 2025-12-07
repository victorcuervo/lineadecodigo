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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AB437KN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtJmX0xpZRuzhdji9lflxF66fkO5dRInIjtwn7Np7N7QIgDAQBNdqVsF7pVfxKRGop%2BTzCYs4Wu7x1COcjlY9RYXAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxXXzEy5XgxhcsXeCrcA43hln5o0VgIF5gbe%2FnXAjXZ1IyRvYNNeOwPJcdhidwyn3Z%2Bn5IZGiNSBna9eyIfctRk7HI5i8ScsoGFClc7Vdz9NJb3WVgYk3UFEUaBYAZauaS7BPBf%2Fe5fuCcGztLEDTFuy52Rawdt3glb0bEflBlOCyMb%2Bm90vj7k2wTymFUb4bzV%2FVsmZSZ2aMV%2FBprj%2Ft1CAlYB5P%2BSq5rgrZp%2BVjizPimQ58OwKP5%2FncMltMy1avsPE8%2B%2F0mGI8xiibH9oXNeMdtXbJ%2F%2FdZSsZNQOQ1e8sqwMzt5QgjjWQxpiwJPh3VoONgG1PWT3FuNRxKYuRReWnMVbN7L6criUibzrHlTNWzUfFE7Wpm%2B9gzRwSFTsZ95RozDPlDcnZmVcRYy3IdfpEtTsvj4mVspWlUMvpJt7Q8bPwPelq5oV5Vxs6xBC3yMCyOhmrp%2BEcCOE0nqzrhsEmOqY6IgUb4msYrIieBebYfsRb5JsDUgC%2F7zSvz%2BEEUAqsO92dTqZvf4OQg%2FsPNfqISc8CKcGF5HWCyhqy32E8cpvY0OliZlD9Psuv9Z1lXmFqg5MAD8QkP6Sa7C76AWSnuyi3SPIqIp3z8bd0EJwMFL9p%2BM9JtGBZeGFezToiboDK38MbTaHb4iD7MKWZ1MkGOqUBVMPSa1lTT99KXA%2FvC5IU7v7QLj9mys2P1vO4gdlpT6i%2FNNMzm7Mdw1D7ErtCt4yNWX7ZAQ9BbGdoq23P6hHyLbk6XyLRYR6LPvqwhmARbwTZmZjL8oVKupmZpi6MN4zPVTzoslWyC8Nhat4%2BO9Xz2kD9vHk1Fs2oX20UtmzK09vBJqwEIkq1Nn%2Fu2orAm3MY8jn2dHnb8M988XkZc1AKCfznqamz&X-Amz-Signature=0901a2ecc3ff0a622c6444610843f771e9ce89ffac1cd084076c73ccf096a158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

