---
title: "Listas"
description: "Domina las listas Groovy: creación, acceso, recorrido, filtrado, transformación, ordenación y agregación mediante un ejemplo práctico y ejecutable."
date: 2026-09-26
updatedDate: 2026-09-26
tags: ["groovy","closure","arraylist","list","collection"]
slug: groovy/listas
type: category
topic: groovy
id: 3e7a9dfb-adca-800a-a5a3-c7eaa5e14e1f
author: victor_cuervo
---

## ¿Qué son las Listas Groovy?


Las listas Groovy son **colecciones ordenadas de elementos** que permiten almacenar valores, acceder a ellos por posición y recorrerlos en el orden en que se encuentran. Una lista puede contener duplicados y su primer elemento ocupa el índice `0`.


En [Groovy](https://lineadecodigo.com/groovy/), una lista se crea normalmente con el literal `[]`:


```groovy
def lenguajes = ['Groovy', 'Java', 'Kotlin']
```


De forma predeterminada, este literal crea una instancia de `java.util.ArrayList`, aunque el código suele trabajar contra la interfaz `java.util.List`. Una interfaz define las operaciones disponibles, mientras que `ArrayList` es una implementación concreta basada en un arreglo dinámico.


El lenguaje permite listas con tipos mezclados, pero en código mantenible suele ser preferible declarar un tipo común cuando los datos son homogéneos, por ejemplo `List<String> nombres`. [Groovy](https://lineadecodigo.com/groovy/) conserva la compatibilidad con las colecciones de [Java](https://lineadecodigo.com/java/) y añade métodos expresivos para filtrarlas, transformarlas y agregarlas.


## Características de Listas Groovy

- **Creación mediante literales.** `[]` representa una lista vacía y `[10, 20, 30]` una lista inicializada. También pueden crearse listas a partir de rangos, como `(1..5).toList()`.
- **Acceso por índice.** `lista[0]` obtiene el primer elemento. Los índices negativos cuentan desde el final: `lista[-1]` devuelve el último.
- **Listas mutables.** `add`, `remove`, `clear` y el operador `<<` modifican la colección existente. En cambio, expresiones como `lista + elemento` devuelven una lista nueva.
- **Recorrido con closures.** `each` procesa cada elemento y `eachWithIndex` proporciona también su posición. Una closure es un bloque de código que puede recibirse como argumento.
- **Filtrado y búsqueda.** `findAll` devuelve todos los elementos que cumplen una condición; `find` devuelve el primero. `any` comprueba si alguno cumple la condición y `every` si la cumplen todos.
- **Transformación.** `collect` aplica una operación a cada elemento y devuelve otra lista. Es el equivalente funcional de recorrer una colección y construir manualmente un resultado.
- **Agregación.** `sum`, `min`, `max` e `inject` combinan los valores para obtener un único resultado. `inject` permite definir de forma explícita un acumulador.
- **Ordenación.** `sort` ordena la lista y puede recibir una closure comparadora. Cuando no se debe alterar la colección original, puede trabajarse sobre una copia o utilizar `toSorted` en versiones compatibles.
- **Operadores útiles.** `in` comprueba pertenencia, `+` combina colecciones, `-` elimina coincidencias y `*.` aplica una propiedad o método a todos los elementos mediante el operador de dispersión.

## ¿Por qué aprender Listas Groovy?


Las listas permiten modelar conjuntos ordenados de datos como productos, resultados de una consulta, líneas de un archivo, tareas o respuestas de un servicio. Sus operaciones ayudan a convertir esos datos en información útil sin escribir bucles auxiliares para cada paso.


Por ejemplo, `findAll` puede seleccionar pedidos pendientes, `collect` extraer sus identificadores y `sum` calcular el importe total. Cada operación expresa una intención concreta y devuelve un resultado que puede encadenarse o almacenarse para continuar el procesamiento.


Comprender qué métodos modifican la lista evita efectos secundarios. `sort` o `remove` pueden alterar una colección compartida por otras partes del programa, mientras que `findAll` y `collect` generan nuevas listas. Esta diferencia resulta relevante al reutilizar datos o pasar colecciones a otros métodos.


La interoperabilidad también permite recibir una `List` desde una biblioteca de [Java](https://lineadecodigo.com/java/) y procesarla con los métodos añadidos por [Groovy](https://lineadecodigo.com/groovy/). Por eso, las mismas técnicas son útiles tanto en scripts como en aplicaciones que integran código de ambos lenguajes.


## Ejemplo de Listas Groovy


El siguiente script filtra productos con existencias, los ordena por precio, obtiene sus nombres y calcula el valor total del inventario disponible:


```groovy
List<Map<String, Object>> productos = [
    [nombre: 'Teclado', precio: 49.90G, stock: 3],
    [nombre: 'Ratón', precio: 24.50G, stock: 0],
    [nombre: 'Monitor', precio: 189.00G, stock: 2],
    [nombre: 'Webcam', precio: 65.00G, stock: 4]
]

List<Map<String, Object>> disponibles = productos.findAll { producto ->
    producto.stock > 0
}

disponibles.sort { productoA, productoB ->
    productoB.precio <=> productoA.precio
}

List<String> nombresDisponibles = disponibles.collect { producto ->
    producto.nombre as String
}

BigDecimal valorInventario = disponibles.sum(0.0G) { producto ->
    (producto.precio as BigDecimal) * (producto.stock as Integer)
}

disponibles.eachWithIndex { producto, indice ->
    println "${indice + 1}. ${producto.nombre}: ${producto.stock} unidades"
}

println "Productos disponibles: ${nombresDisponibles.join(', ')}"
println "Valor del inventario: ${valorInventario}"
```


El método `findAll` crea una lista nueva y excluye el producto sin existencias. Después, `sort` ordena esa lista de mayor a menor precio; el operador `<=>` compara los dos valores y devuelve el resultado que necesita la ordenación.


Con `collect` transformamos cada mapa en su nombre y `sum` usa `0.0G` como valor inicial de tipo `BigDecimal`. Multiplica el precio por las unidades disponibles y acumula el total. Finalmente, `eachWithIndex` recorre los productos junto con su posición.


El orden mostrado será Monitor, Webcam y Teclado. La lista de nombres conservará ese mismo orden y el valor total del inventario será `787.70`.

