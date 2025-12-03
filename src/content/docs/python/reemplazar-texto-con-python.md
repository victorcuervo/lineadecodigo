---
title: Reemplazar texto con Python
description: "Uso del método .replace() para reemplazar texto con Pyhton. Ya sea una ocurrencia o todas las ocurrencias que aparezcan en el texto."
lastUpdated: 2023-05-27
author: victor_cuervo
---

En este ejemplo vamos a ver cómo podemos reemplazar texto con [Python](https://www.manualweb.net/python/). La idea es buscar un texto de una frase y sustituirlo por otro. Lo que haremos será decidir cuántas veces podemos reemplazar una subcadena, es decir, si queremos reemplazar solo la primera ocurrencia que aparezca el texto dentro de la frase o si queremos reemplazarlo más veces.


Lo primero será definir una cadena de texto en [Python](https://www.manualweb.net/python/):


```python
cadena = "Hola Víctor, ¿Cómo estás?. Quería comentarte Víctor"
```


Ahora lo que haremos será apoyarnos en el método [`.replace()`](https://www.w3api.com/Python/str/replace/) el cual recibe el texto a buscar para reemplazar y el valor nuevo que queremos asignarle. La sintaxis del método .replace() es la siguiente:


```python
string.replace(valo_antiguo, valor_nuevo, numero_veces)
```


Dónde `valor_antiguo` es el valor el cual queremos reemplazar y `valor_nuevo` el valor nuevo que queremos poner. Además podemos ver que el método se aplica directamente sobre una cadena.


De esa manera, si queremos sustituir todas las veces que aparece el texto _“Víctor”_ dentro de la cadena, ejecutaremos el siguiente código:


```python
cadena.replace("Víctor","Marta")
```


Lo que hemos conseguido mediante este código [Python](https://www.manualweb.net/python/) es que se sustituyan todas las ocurrencias que se hayan encontrado del texto _“Víctor”_ dentro de la cadena por el valor _“Marta”_ obteniendo el siguiente resultado si volcamos la cadena por pantalla.


> 💡 Hola Marta, ¿Cómo estás?. Quería comentarte Marta


Pero si has revisado la sintaxis del método [`.replace()`](https://www.w3api.com/Python/str/replace/) también podemos ver que nos ofrece otras alternativas a la hora de reemplazar cadenas de texto de tal manera que podremos limitar las veces que queremos que se reemplace un texto por otro. Esto lo conseguimos con el atributo numero_veces, el cual es un parámetro opcional. Así, si no indicamos nada se reemplazan todas las ocurrencias que se encuentren y si indicamos un valor podemos limitar el número de reemplazos que ejecute el método [`.replace()`](https://www.w3api.com/Python/str/replace/)


Por lo tanto, si queremos reemplazar solo la primera ocurrencia, escribiremos lo siguiente línea de código en [Python](https://www.manualweb.net/python/):


```python
cadena.replace("Víctor","Marta",1)
```


En este caso, el resultado que obtendremos por consola si volcamos el contenido de la cadena, será:


> 💡 Hola Marta, ¿Cómo estás?. Quería comentarte Víctor


Vemos que solo se ha reemplazado la primera ocurrencia del texto que buscamos reemplazar.


Así que ya sabes como puedes reemplazar texto con [Python](https://www.manualweb.net/python/). ¿Se te ocurre cómo podemos reemplazar la última ocurrencia que aparezca en la cadena? Cuéntanos en los comentarios.

