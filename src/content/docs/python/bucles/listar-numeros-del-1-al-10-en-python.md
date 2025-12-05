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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFYTH5KO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2rk%2Bms6ZnewgAIAfaW2Gd1UUltjJ7ffNzBPvcSI2PUAiEA3RflRJIO%2Bf1m7adjWEa9twmgSflP4e8e3Gvxrp470uQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIf2up9nw3uBgBM1KircA4GkSIC7JikhOZ28ZGYEvNIAztFFmO1EMige%2FS4wIp4DPCbVmEH458BBtbIQo1%2BHiQ%2BlavxxsuAwvAwCGmKcEKI2LbmGYSumaltfh8872xb523a1CKjNcT%2FkLZgaxVN6T0K13HGp%2Bwc9tWTMnovxzpExua153ZVrASnZ8oe9scLzG5V%2Fkbrg1j5H8WMAIc65X87Jjafa3Bf7wAD%2B2NV7ucI2Y706F1Aj7tTlJlfa5ZakzHK3jECset1yUaVBmUWV3F32XXt7%2BXZ1GW%2BktAg7agKFKxYh3sY9DHCOzdOf921UE6aKoGZjrWjA5MtvfIm%2F3QPVSdtfIuK3CPMWfun7n8Rz647sn%2FDTRL4Xa5NUX%2FUA72Eea45CdjLnR07TQvX2BhZwJOm%2FgeJ71HaZL%2BD6yFRijOfvtRqLtkeuWADqX%2FafslqSrcU0yIpCDAYSmfJHKM6YwcH3SsgiPz1q1%2BYdU43SilgMCCLWzHan3Nw%2B6lNiUrOjj%2BNfGGxS9F%2ByWahoZNNcTPtvf5LjxDBmoS4cmnu5mb7lmHlLKW55rlDUyyNnJbBXXfM1QXJkRmxYcUBDLGLezd4TENaF4BP%2FKVpUbPMt9sGeujp0zxQEXbczONpVWklu%2FyzaBDJn8E1CMNDsy8kGOqUB3doUnq%2BtswL%2F4JkwT7Lbjs3BCEB8Wq38QTP8RqzkOv%2BfErV2jPDtN4iqSXyMqBUEDwndMdhg9L2%2BZlrBOBbC0xTluQBuuh6geauGBEFwV4OwLJTG5A0IDceBqLOoZ%2BwzwzQ7cG0SgZcgpq35e%2FFvZJUr6RkGEp2C%2FhPOgVjHeIH5AvtN4EzajrtF4Ifcf6%2FOSu%2FDR2hcbupi5AHLZOpZAv0Ps685&X-Amz-Signature=db76f8d8e8cb354142c109c23f8076df15b5e54b1041fee5341c2dcf4f9acaf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

