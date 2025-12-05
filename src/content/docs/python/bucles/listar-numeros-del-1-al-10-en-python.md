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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NYHSMB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu5UltnI8NFw%2B%2BSww4cOf7ajX6vFibtN%2Bd8wDWUc%2FE5AiASnYCtAfTLlrOyEKaBdLwutbdWpiNO2Pn82WSzJPdlZSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMwD86jLnJCtnfEQsHKtwDVd9km6zJKiY%2B50idJ5lGSvLz3Au74x6vqMDk%2B45Uh9iVNmcFrj4P9ZaOjvEb1Jn%2BTIAkN%2FJNHVgfoZgRzGvABrHI0JnUPAjP%2F7US%2FOiHg%2BSzth25aVbX3VSRG3BaIX3Y9StwwPf6K3CX5K5WwDtV%2FQyvV5NL7xSSEBVsdFdwRhAO8SzGf9Y0wtbe9V6134kcl%2B8c6K9cINmJ%2FFMAHe%2FfSbyn1OYynbUmEfhemk%2BUc8JLZ%2FPfBpdGkImA%2FPA3XXChaBa0Sl%2BZbdRkfjk6A2rXO%2Fzg3IEbdChPrhkmUa5XD%2BVzo7BF%2FAo6C4qxgoFwQUVPGcJLxYQpHiAR%2BiNAC%2Bj8QGcKskILuLKsV%2F%2FAXS1k7VvXxw5r9wz1kxeHP62Gj7rOAj5WLdfspYZ%2FLDQG8Xf0NNGgfLtjwQqXwowVbcS3SRWQ3k6D6jK8X4a4bLct6SR4mKsXwtdSUDf%2BBK%2Bmx3M3D1OrWZpIFV3UBJ1r18FjbOogeJbCsJZa3JzAW4FVRv3LhGK%2FRoVFSepbhk%2FxzmY5qaD9fmZm17841i3KnXerGavqfzwIDFfIC2HdPLplwx55BvcjFUVCxlt7TQCIPFzTCdPAKcz4sy7SM7k8E6lx%2F%2F2hUWnQpIS7T1Q5VpMwwubLyQY6pgHJkd4X8E6vVR1HoCFu2q8Aj1cKLR4IvrWiwaSYWDItKJL88XTlPdDIANolSZ6kzDlq0VHcnKaXUg8JvlrtxHedzFuqGGOso%2BpgXlKPoXghYEMpt0oEDtI3BXboSGvEA9SmsS8Rjl0EB7rIxIOK9oIafwf2GpwLGJrh%2BcGgQhKVB%2Fe2M%2FXXpGD1PgyoIfnBypBI6qcECQ0AyDSAJX0z8z97pSrXUWA2&X-Amz-Signature=2f7fd4697e85bc2bdac2b5b7d1de9c6cbcba12264811e2f154dcad833e90c4a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

