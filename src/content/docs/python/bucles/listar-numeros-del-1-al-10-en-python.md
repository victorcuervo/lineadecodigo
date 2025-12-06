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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWTIATGQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD35bwts52dvQmi%2FDMlXtIsJ7nMNV%2FOlnOX%2FTFUdHRS6AIgBuU%2FmjfczSQrV9xKrBeBEoVMVJkMa99yAeCi7xQcIwcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDG1tz6CUi2nAOIGKqyrcAw6YQHaz%2FGLg7igH1od9W705tHIw9WSFDvwfJQReTJcTENgl0NGdUmGChjm%2BoabrO2lXOCIKP8pS15n6iXPIZPv86yc%2B0i8pP7OtWDQiL9gBnQQzzYSsg9v30uoIAUfHshvhp1zb8QhDDAXsoexaZB6ALY8mqgkmkwy%2FKtzM9U%2FXDSHx3Qo%2FIay3kegkq09C37uzWQBk%2B864tPW8wUHYeRlGmnCFE%2BsdY%2Fcd7%2BCsNWXiXQ%2FuKDULUJ76GIhE2Irg%2Fos7pUrjk7gucMwNSgUinEeUDsWXYtqmMZLzvNG8COgvP%2FpTGI8ScypWEDuJb2rtbd0u7nIZ5R56e5I0GaZTX7XkSG4IRwVAvt6XggCgUTHHkFc4qIENsLEI%2F3VSCrktZc01G%2BIZREC0o7GDtPm9hMSdZcq0XMCxZvt93B6a5VJlAE8HuNZkq%2BhmKF2Os%2FmlQvg%2FI7GdDNkovrbHOSgp9yaiAnHcraiVaG0cXRwWFKHYmrRxHuEn7TH1ci5pwwbsQKM%2B8OQyuD6WROE1GnxtdSmJ4mM1tGc6Rt67e0KxZkYe5ca1bivq%2BQ%2BT5glgXzI4AhV5w2Z7KLgye47oVo3TYNznOAq0401vTVifqMnFVKQ%2BYNnSEgUcnkaZ9MP2MNeez8kGOqUBwc%2FNVCkCVyUUJ89hj5Ib8x4LdSkcIJBEVja52kUHwX%2ButXZ%2FVFHbMf29Am8RLVjrruRTCGCX5iitnD5vtWiQnnuTDqGUKHTUxhu%2BrQts9fBr9DyigmUSq%2Fujei3gA5X14JYqnFbto0gmPOyuqwY2QzpZjKrij9Lm9YgvBM9%2BTAJ05pYE1OXr5xJ8LzRQ%2FHzf%2FIg9JCHcA6csgGX0SnyIl8m2%2Fv0G&X-Amz-Signature=ed3e2e159bd6293b5faa0aeda99617600083225dd33d88ea570524a3674dd39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

