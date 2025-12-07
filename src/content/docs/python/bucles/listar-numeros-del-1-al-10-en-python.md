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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWPF62J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjpoTs0itcz69AkMQ1G51SSwmukVRnP8QGDPEv0s%2BUdAiEAkpwVz8%2FMzpAtINjDXvvfq6gnTSk%2B0efCdxeUDhDQXPIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgvl6V6BoTZPtt0tircA3ktnSmQM2BFf4we6imzWokHLh%2FVqCrWZwu0Jpf43rWNWKLTFPQInUGSONYVL91GdHP7iEBDadVi0m2Fk5ZmARAQIhjqArO1SFb%2FA1GsPeebe3qqADkDm5uB81h6Is70pr%2FsjQj5WQ69M61jKl1yFSz2TTLvNpPXIeSl9n6E4DyV6%2FATlxl7hM1tfcddEwLwZwjypHrhdDa4TDsUHE0GQeew5ejWrU242Hsm%2FwZpNmM%2FSRYm5lHhYdrriQs23nH5ITuQHS6xtDimR6vSjYibEv08it92WmsQrCm2XHWCf3bTgo7VS3kBzfU7VbZKzvV35av%2FdmdtoVi6EtXdQ%2BE8VXb7BU%2FLGC1SjWnrbyjDp7QzyqV3sHvBO%2B1%2BoHoHn6KVXcxkFlziLXjiwsNogUBG%2F2WykoLpDM67SB%2BptB887K%2F9MaDwtLp4Dh938pMfi2hox5Qg%2BgzMCuNmEoH6SxlEoQr0%2FBfWHcpP0zneaypX8tLoliU7pZj8Rt8Vhr4GiK2tbgJ0C5yNpw%2Fx%2BEODyytffjI%2FpgpJEHdQQa8AfB5OE%2FKMpQRQmbEEmy%2FkAf%2BHqG%2BX7FdzwRUXETaK6mZFdzo%2FBqiAIf8VE1y4VtxVoW5R4D2%2F2ved2h2nbDjE2b3mMIPI18kGOqUBhSSTgt57PXbbznYj8t24mCc3J8RJ%2BrhjPbbvWqz%2FYd1%2BfFlhsseZqJLV9hZxdJ7gDuFs4Qr3q0ofTXR7fegEXcQq7JvnY2zjbwalBUi%2B2SsmnUDS3xWjk1pUj8YA20sFnNUp8CzMRBbqXGYAdRIdsCNv%2B2Wlw043GIYlC57nGSGDQyIwK1VU5DkeDt4tGsOqzLFWFDtCkBT949D0jGfH3YY7jyPw&X-Amz-Signature=60282d57e3f6783265e1fa8f02af21d37739e7f5449514e68fd78ba019e2b6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

