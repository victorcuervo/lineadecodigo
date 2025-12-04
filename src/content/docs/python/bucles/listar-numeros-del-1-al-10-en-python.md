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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TODEQHWQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDp1b6ADIpRrEzGGajjDsXQLt%2BXl6Wed0u9%2BYikAFKX%2FQIgFEET6u3X%2FylkNJcLq6P4qbvBl6ZtAdWGoNKchDdcfxcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDL6rvIR6yCEIEqlFOSrcAw3M%2BIjUEt%2FDd7AAj5pYbNkxm4A3G6Z08EQy2gAe%2BS2EH4udnq2Ovhoh2fZtUH8Ct4sMt%2BYlNsMO8hLXbn16o%2FY0wEbmHJg2a2W%2FZg1BFL6lJs1dsKG7ggBm3aCyzxGS2hDVeUmc59i%2B0N9aeldCQ%2BDQDHRy0%2F8qfGdqs2dytqPLGUo3JdCiBA7dpLbNP9BH4zrvJW0uUjOF67gqSYSYZcgyRxM32ShF2qNEvmZka9uctGfXjqFEhkt7seQh2v9T0%2FoB4Vm1YXaTdjE2D7FhaWv5D88XtxEqMARl0wj4YrRYBAOwu2P6kM7l69uhTSD1Vyw7gX4waNFBXUNsO4O6xx5tGoKFl7sl0HDvIU6LnRXnhht8tf7SFSyxEuLLo7QxChEF%2BtVKv4WLzbFjHAu82PPRrfBO9Gwjv6W9t1wWaIOwuIWpH4lyo%2F23mkLgue59w%2Fgly1jpT4IL17jYKRulRfVznw6MfmvmOcNZtm76yBFtSQdQAA0hh09rgrqscGQcdM9uy3hIBF3EJ%2BIGtZ6QugBwtVDnLwESUNort8vZhxZwcBOJeWXSBS8ptNVIun4oHg69mwKsPjBZELRh8pE%2F%2BnqmSxcASeFEs7AtXo7Lk80CW%2FnmwjMRilhw%2F%2BZxMNDJxckGOqUBGL2M6jzRjHFW7%2B3c5x6iFtoSanz7btgrhV9joGV8MBgHpkKBxCzYXk9Lh43pv%2F%2Fz68jGDyM5Ew%2FWYlSlVF9axE8fzx%2B0uQz9rWsp2PXM0WDmTIQSCK3Fo6r0Kkzg1ikldK7SSW3iRIe0WVZ%2F5sBBvc5U54QM08LS2ybFGe9zUQdpZH22dowr1e2Lw1oeai5lFqTpPyWbC83kOITaI3NyfJ8dhYyt&X-Amz-Signature=642d47c3a9feaa211cbf10eb790333a477ef60a326f3d627e1b74ebfa297c083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

