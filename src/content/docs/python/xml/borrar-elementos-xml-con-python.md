---
title: "Borrar elementos XML con Python"
description: "Cómo utilizar el módulo xml.etree.ElementTree para cargar un fichero y poder borrar elementos XML con Python, generando un nuevo fichero."
date: 2024-02-18
updatedDate: 2026-01-05
tags: ["elementtree","parse","getroot","write"]
slug: python/xml/borrar-elementos-xml-con-python
author: victor_cuervo
type: doc
topic: python
id: ac5a0959-d880-4dd0-b0ef-a74f3e42d30f
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/xml/borrar-elementos-xml.py
---

En este ejemplo vamos a ver como utilizar el módulo [`xml.etree.ElementTree`](https://www.w3api.com/Python/xml-etree-ElementTree/) para poder borrar elementos [XML](https://www.manualweb.net/xml/) con [Python](https://www.manualweb.net/python/) de un fichero con el contenido.


De esta manera, lo primero que haremos será el cargar el documento [XML](https://www.manualweb.net/xml/) para poder operarlo en memoria. Para ello utilizamos la función [`.parse()`](https://www.w3api.com/Python/xml-etree-ElementTree/parse/) que nos ofrece el módulo [`xml.etree.ElementTree`](https://www.w3api.com/Python/xml-etree-ElementTree/). 


```python
tree = ET.parse("data.xml")
```


Una vez que hemos cargado el documento [XML](https://www.manualweb.net/xml/), lo siguiente que vamos a hacer es obtener acceso al elemento raíz del fichero [XML](https://www.manualweb.net/xml/). Pero, ¿cómo es nuestro fichero [XML](https://www.manualweb.net/xml/)? Pues el fichero [XML](https://www.manualweb.net/xml/) que estamos cargando tiene la siguiente estructura:


```xml
<?xml version="1.0"?>
<nombres>
    <nombre>Luis</nombre>
    <nombre>Curro</nombre>
    <nombre>Javier</nombre>
    <nombre>Marta</nombre>
    <nombre>Virginia</nombre>
    <nombre>José</nombre>
    <nombre>Sonsoles</nombre>
    <nombre>Isabel</nombre>
    <nombre>Quino</nombre>
</nombres>
```


Como podemos observar es una lista de elemento `nombre` que están definidos dentro de un elemento `nombres`, que en este caso es el elemento raíz. Por lo que el acceso al elemento raíz nos dará un acceso a dicho elemento `nombres`. La función [`.getRoot()`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/getroot/) de la clase [`ElementTree`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/) es quien nos permite hacer esto.


```python
root = tree.getroot()
```


Para demostrar el ejemplo de borrar elementos [XML](https://www.manualweb.net/xml/) con [Python](https://www.manualweb.net/python/) lo que vamos a hacer es borrar todos aquellos nombres que acaben en “s”. Por lo que necesitaremos recorrer todos los elementos del árbol [XML](https://www.manualweb.net/xml/). Esto lo llevamos a cabo utilizando un bucle for:


```python
for elemento in root:
  # Operaciones sobre el elemento del árbol
```


Por cada elemento vamos a ver si este termina en “s”, para ello lo que hacemos es buscar su última posición mediante técnicas de slicing de Python, es decir, recortando la cadena. En este caso, la última posición en el slicing es la que se representa mediante el valor -1.


Pero, ¿cómo obtengo el texto del elemento? En este caso será el atributo [`.text`](https://www.w3api.com/Python/xml-etree-ElementTree/Element/text/) del elemento dónde encontremos esto. El código se habrá evolucionado de la siguiente forma:


```python
for elemento in root:
  if (elemento.text[-1] == "s"):
    # Borrar el elemento
```


Ahora pasaremos a eliminar el elemento del árbol [XML](https://www.manualweb.net/xml/). Esto lo llevamos a cabo utilizando el método [`.remove()`](https://www.w3api.com/Python/xml-etree-ElementTree/Element/remove/) de la clase Element. El método [`.remove()`](https://www.w3api.com/Python/xml-etree-ElementTree/Element/remove/) lo invocamos directamente sobre el elemento.


```python
for elemento in root:
    if (elemento.text[-1] == "s"):
        root.remove(elemento)
```


Ya solo nos quedará volcar el contenido del árbol [XML](https://www.manualweb.net/xml/) directamente sobre un nuevo fichero. Para ello tenemos el método [`.write()`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/write/) sobre el árbol que es una clase [`ElementTree`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/).


```python
tree.write("data4.xml",encoding='utf-8',xml_declaration=True)
```


Es importante indicar el encoding del fichero y si queremos incluir la declaración de definición de fichero [XML](https://www.manualweb.net/xml/). Con esto ya tendremos todo el código necesario para poder borrar elementos [XML](https://www.manualweb.net/xml/) con [Python](https://www.manualweb.net/python/).

