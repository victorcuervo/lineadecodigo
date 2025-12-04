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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJQSB76%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDZ94fITJabDoZlxc5%2Ffk%2FN7f8yoj92JNz3Lz%2Fct%2FviWAiEAhAD8QQ33tHHYMS7wcpORD4aqQYL1JCCiGQFRd2VFTxAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDM%2Bt8iz7ITybY%2FqQ%2BCrcAyoEFSFemj10dg6YZQuxhpItZm5NnYKrAoHsjNrTKa%2FKkaiwfmD%2Fzhe4WeCxXkZ9pjhFthPMQ5Br5xa9fgCh6V9LgfnECa9Vcx%2FgHtOqZqlWSXcTkzd7GUZZxQSgcDfVTQGo4u3BANoMGlxptKRHe9mmbQY6GOFeLly5gUQMfQhmvS0769413JDoCO2mShip5HP9JZ050yv4NmXApAo05x06pQ5wRWTR%2FhIMxpBfzXRPS6jfsYKGBIGwK0vmM2t4vbQC0UXQ%2BfSqFUbJTxcs1u7Nrqp83HcIkDt5B%2B6MK%2Bztg46e5mUGe7ydbcBqH%2FoaYhzk8r4GH5%2Fj1SA2K0KfN%2FSAqxl0b7ALE4zdwb8JhBAgFlXccheprbDwj1X9pjBx6g%2BwMP3ji%2FalFDyRGEQn%2BdhXTePN%2FmJKFDI5ff9qRf9DwlU%2FE06K68xnyk8qPDJuw3p%2Fk3a0oCj156bl9cAbMJ2SUVc5YK37tGYa5rli8l2FLM%2FfXUv%2FsFnHA8rbnJskFcBf1jKC2cSKOJoZc4rxECFHi78bsZhS1C29YIXIGyX1qEQx77U5N6DazDZwjw%2Br3DyjI8YOm7axkBnvKdFoaE0d95aIeYOvbNW6bGT%2BwCVpsT4zOduZXsur9Qm4MIm1w8kGOqUBQNj84slw9iBeDy4TQC6OEDulb%2FZm2nPy3mHjAG2qJS6kMl7BpQ5RkfeMY8i82VQxjqxiGh5XrU%2B4vU1akEUWK4aQwETMg%2FiNDn9La6g5wgyJGbnwvJ1Vg61D9ipXJ%2BhLYdUzW8mdbPvfSFBvjynqGIzbk%2F89w69TiCdu3shi5TimltbjOQ0n1qI8TX716Cn7xOA1QmoaMvOQlKoDTS%2FjW%2Fto%2BwXZ&X-Amz-Signature=554b24190f55ef472ea24ef9af17bfa36f559fa804aa0cac45988402c44be033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

