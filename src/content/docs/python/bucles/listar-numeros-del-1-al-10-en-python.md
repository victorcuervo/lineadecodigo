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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PP5KI6S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICOEmvYBP4IXoxPG8mGjW%2Fp3NJ3EeSWipdXkBK%2B8Pvh1AiBqZMsT3PLlrN%2F99kK%2BXfnACYN7aF%2FmMzBSCwiEQOxn8Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM8SHPwu07U1679N4oKtwD2%2FfxBy2CFkhWRloSwkWqtE0i31HUvuin4HTJssVVML6wOcWycnSaPPnvp8H3beyfghK3A%2BSdUmaVhEQqP9I7di4HH1%2B0d0s2AaHZdCADoTABa71YIgPSoAjp3JtiWm8Xh5u4UkG6BoZscVg0EwF4NKUmAlv7Cs0o%2F4u0vkDmbR1ipeDwr668YJRyPxw2IxnD7Y7Y1T7MelzO9A4lRJ9yv1pv7bJxmsXaKTAmcyWH0l5CMKVCZE3oj51SPRjLznlCh4%2FmPgLPgycSfAu%2F96KnKlmxmRDU2YJLgSNqwSCnWpZS0zc3dV9BCeIqqkkaAcUt%2BKmVnrdVKwxbkL1pdX%2Fx%2FqpJvj4lw0ZtabGf%2FTvdosp5CkgARaGWn4UYvwAc7DIepG0yZKRpUaFkYbp1Y%2F9ZwZI7wQQFfKOMVXPnUm4sM5E60%2FOjiOFIAoayk4bf45m2VplU0pg2jHNYInWmr6B%2BG8f9NMJbP4uhdI6fQkgEsyGlHw7XhXc%2FqqEiBgC0z725OTVFrGPvOgAbKHgfVHTqcCcXLZRNW6OI6OKlr42pqFQOuQCLdljI8neID0lVNfLVX6w6SbnoMTslIADfdRpm3SgI9h0T7hbJmFbm%2FkCgOqFqNusf6QmsUBAHypww9ebFyQY6pgEPTa%2BctNhRMMXTquXTORa7cgvKxm0x%2B4A5zl9%2BExoc9DUILU7jGHuichJuV%2F70l7soBodo2xRgjvgwOmZ2uSuk%2FgNNwOFwo%2F6Wo6uYd4PskAgOATRiJ98o0gGXyApirwlpqFEqxNKnCuigA5smNV1m7gJrXMQwt7zIgg%2FJg%2BYxa214UwIzjypQ2CzQAHgc5%2BiZvoAMAjzYPagJVx3f6LV6AH%2BQyPc9&X-Amz-Signature=5c8970ec296f2d1eef38af32a3bf00af37555084bf89df4097ff951549ebbbf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

