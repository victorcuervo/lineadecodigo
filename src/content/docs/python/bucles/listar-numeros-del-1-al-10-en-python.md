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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM3C26MJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFZLX46wF50pCGxqhsithVqFgSqQXA%2FOmsmY2m9R4fnAIgWQyipl3PgR3W0SihynSkVBihEditjUm4D9r3MaEp3dwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCH5WXBW7N8vUy5eyrcA5TK%2BcTY6zpo2peR6vI1da1jSos1qdxH9R1XoVU%2ByHgUIoAY8tAI0O2JSln8QEuLIo2ItOqPiXH9NkMhg%2Fw52EFNEwGxWu%2BM0xhtfYKQrX4G7UMEsxZ21qm2pwJjKu%2BAchfT1czuA5%2FvzEMRkhASM1E8iwmNMVCiOmjSAjBoh%2FP5gcPBr5cKvgQ5lzwgxSn3ClLGS23teruNahGn2ifrikRD1%2BkT88UMhUIEtOk5HCxqGZdr%2BF4VxYHOT1OYA%2BuS9L01XWfpCiKON6WNyp%2FLE9SniuTx2mkRKVjdIsag5r%2BeAGBTVgRxPkkWsri1O5JVvxoAPWu75CVtwBhsDGvimnI4mpMsGD9dXujaXoZb8NMheWP%2BNHsoXZ7JUV7x2O88yoe6%2B0EpPTFSkrmoEkvYgiU2Usy%2FCFNJTBcdjK2QyA2YUqrpMCrQ%2FWnUYoZ%2FfMtVxOtJ%2Fh9Y%2FqRcwl6QhlJ7BtShghZw2fnpUSVWkNbsKaeDuLYlaeVJUokwBVuBYuC0NT4Pt2EtKIbk%2F8tn%2BMH0gEvFrYfSBkQZ4w2mn9Qv694RQIoWsabrJGZ2H9hUbqIAHM4CNv0efKs%2F4EyTTb7raVLQkBr1P5xBJViCfHtWtnW2GDg9aM3S2zpOu3D2MJrt2ckGOqUBkTMjaDXHv4EFVaZZJp1vgzMi8FCFwguPHY5JDp1QMjtFnpIyeg4l7cxrTiUi2BRCZW7uHdv6nQX0Eg%2BARRUmsk425bIoyZXE78XwFm1PRBWOqMRKBj1GYoCjGflVfVx2TttOUe%2B6JkzNDUlFtPelCTAmsQw8l5PBBJTqftm%2Bv7nJXc5K%2FZ2KJEjKETFtM6z9atS4HGE0toiFuud%2BDQ0Ecx%2FKK0Is&X-Amz-Signature=b1d2e0d0cc5bfa25fb005dd2e7c33b0dcaaaaee7e29853cf9148a8992dd770ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

