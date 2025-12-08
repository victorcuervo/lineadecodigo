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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMOERJZS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm5tCWqrT%2FJqvO8f5ww5aQ4bhrvg%2BqL%2B%2B2P4PdB1CJNAiATsjwThHXk4%2FbAzv200h2X8ESoMbZozOoxg5bMUeTlFiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQbnd%2BKtLJzuULVuCKtwDMw9CJDIV%2BuwtZt3UgAN1CIwO3FrqgMVyz96ICIwapTBlInCLDqSz2DW8HeJYKJ83d0XAnidKMxrDuu5AxH7Z3Dd7wjmbid6VLZ8DzSQCJ0j3BTm8hBUHTwkaWtfxltd4Oan2lZ3qm6mFfulMdw5UCWmkpXRQ7adOgHKeUDepo%2BnHpPxLQvEM7AYcF4tE9lI2IXXJVg%2Bid%2FwUV1Df4OumplG5ApgU5E66rbRVMtp4Co0CVXtf8j6eWtJEGd5ArPYA3byjKkhGqooUlVu%2BZdWjlLUqJion97AzTN8yH6pp1odjLskI2sDowMuHEVKX1Ud97Cz5cvG1Ow6vZCBwBn2m5FCST50LXBaLqVMQl9zxe5XUdiYhrIsPkaio6%2B3BsyGWxMB%2BR%2BHWU2CvBO9ocaFaYWSURbW1jDJgyJnqtlvRJGfxKnCAB9hp%2FcY%2BF40RG4BxFNg3pCWcBfwqqYjJ4bDCoJrgqEnRrTVI%2FddxKMRyMQa%2BNmMJB%2BfCDIUazy6GiRz6TMmzk4GgsgBmsifyWF8McQwy9m2Fr8q3I833lLxs7ChDJi9zNdgIu5%2BO4%2FpKl%2B7b1pwErLpLxtGPPTuU7iO1eZokzSlUWryZ5I7vKmmjXISfzFy%2BssI9yo5%2F5mkw8c%2FZyQY6pgGBuYPG3m2oXWAtU4sEMTy5F2Dpm%2Bhx5jSbtbl1Yu303RzuN%2FkLQTVbK53A7j5hcKTdg1nW7jlC8FpsaON9iEztyOJp8qSsyAno7ks0uE22%2B7Hq739W6zPzXHFIawUUC30xWDEQSzJ0Tzr%2BpYl4e6C8j%2BGP1y0aThO027mCnmr7DRSBO0FS4NNY%2BdIaUHTbnyP8HZVSuJWWWMmk8iCETJ8XCeuRs1xD&X-Amz-Signature=b072c23798a21ef089d0e4e4d7e437d57aafa102faba48ce8650f67572e8683a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

