---
title: "Mapas"
description: "Domina los mapas Groovy: creación, acceso, actualización, recorrido y transformación de pares clave-valor con un ejemplo práctico y ejecutable."
date: 2026-09-28
updatedDate: 2026-09-28
tags: ["groovy","map","closure","collection","hashmap"]
slug: groovy/mapas
type: category
topic: groovy
id: 3e9a9dfb-adca-80e3-8adc-c39defdb8d05
author: victor_cuervo
---

## ¿Qué son los Mapas Groovy?


Los **mapas Groovy** son colecciones de pares **clave-valor** basadas en la interfaz `java.util.Map`. Cada clave identifica un valor y no puede repetirse dentro del mismo mapa. Si se asigna otro valor a una clave existente, el valor anterior se reemplaza.


[Groovy](https://lineadecodigo.com/groovy/) permite crear un mapa con una sintaxis literal compacta:


```groovy
def usuario = [nombre: 'Ana', edad: 31, activo: true]
```


En este literal, `nombre`, `edad` y `activo` se interpretan como claves `String`. La implementación predeterminada es `LinkedHashMap`, que conserva el orden de inserción. Un mapa vacío se escribe como `[:]`; `[]` representa una lista vacía.


Los valores se consultan con corchetes, mediante `get` o con notación de propiedad:


```groovy
assert usuario['nombre'] == 'Ana'
assert usuario.get('edad') == 31
assert usuario.activo == true
```


La notación de propiedad resulta legible para claves conocidas y compatibles con un identificador. Los corchetes son preferibles cuando la clave está guardada en una variable, contiene espacios o se calcula durante la ejecución.


## Características de los Mapas Groovy

- **Claves únicas.** Una clave aparece una sola vez. `mapa[clave] = valor` inserta una entrada o actualiza la existente.
- **Claves y valores de cualquier tipo.** Un mapa puede combinar tipos cuando se usa código dinámico. En código mantenible conviene declarar tipos genéricos, por ejemplo `Map<String, BigDecimal>`.
- **Claves dinámicas en literales.** Para usar el valor de una variable como clave se requieren paréntesis: `[(claveCalculada): valor]`. Sin ellos, Groovy interpretaría el nombre literal como una cadena.
- **Orden de inserción predeterminado.** Los literales producen normalmente un `LinkedHashMap`. Si se necesita orden por clave puede utilizarse un `TreeMap`; para otros comportamientos se puede elegir otra implementación de `Map`.
- **Acceso seguro con valor predeterminado.** `get(clave, valorPredeterminado)` añade el valor si la clave no existe. `withDefault { ... }` crea un mapa que calcula valores ausentes bajo demanda.
- **Recorrido con closures.** `each { clave, valor -> ... }` procesa cada entrada. También se puede recibir un único parámetro de tipo `Map.Entry` y acceder a `entry.key` y `entry.value`.
- **Filtrado y transformación.** `findAll` devuelve las entradas que cumplen una condición. `collectEntries` transforma entradas y construye otro mapa, mientras que `groupBy` organiza los elementos en grupos.
- **Combinación de mapas.** El operador `+` devuelve un mapa nuevo; si hay claves duplicadas, prevalece el valor del mapa situado a la derecha. `putAll` modifica el mapa receptor.
- **Expansión en literales.** El operador `*:` incorpora las entradas de otro mapa: `[*:base, activo: true]`. Es útil para crear configuraciones derivadas sin modificar el original.
- **Búsqueda por igualdad.** Las implementaciones hash utilizan `equals` y `hashCode` de las claves. Una clave mutable puede dejar de encontrarse si cambia el estado utilizado para calcular esos métodos.
- **Interoperabilidad con Java.** Al implementar `java.util.Map`, estos mapas pueden pasarse a métodos Java y utilizar operaciones como `keySet`, `values`, `entrySet`, `containsKey` y `putIfAbsent`.

## ¿Por qué aprender los Mapas Groovy?


Los mapas permiten representar datos que se consultan por un identificador: configuraciones, productos por código, usuarios por nombre, contadores por categoría o propiedades recibidas desde una API. Cuando el problema exige localizar un valor por su clave, un mapa evita recorrer toda una lista en cada consulta.


En [Groovy](https://lineadecodigo.com/groovy/), los literales y la notación de propiedad hacen que estructuras pequeñas sean fáciles de leer. Esta sintaxis aparece con frecuencia en parámetros con nombre, scripts de configuración, datos de pruebas y resultados intermedios.


Los métodos `findAll`, `collectEntries` y `groupBy` conectan los mapas con el uso de closures. Permiten expresar filtrados y transformaciones sin administrar manualmente un mapa acumulador, pero siguen devolviendo colecciones normales compatibles con Java.


Comprender la diferencia entre operaciones que modifican el mapa y operaciones que crean uno nuevo evita efectos secundarios. `put`, `putAll` y la asignación con corchetes cambian el objeto existente; operadores como `+` y métodos como `findAll` producen otro mapa.


También conviene conocer cómo se resuelven las claves. Una clave ausente devuelve normalmente `null`, lo que no permite distinguir por sí solo entre una entrada inexistente y una entrada cuyo valor es `null`. `containsKey` resuelve esa ambigüedad.


## Ejemplo de Mapas Groovy


Este ejemplo crea un inventario, actualiza el stock mediante una clave dinámica, filtra los productos disponibles y calcula el valor almacenado de cada uno:


```groovy
Map<String, Map<String, Object>> inventario = [
    teclado: [precio: 45.00G, stock: 3],
    raton:   [precio: 18.50G, stock: 0],
    monitor: [precio: 210.00G, stock: 2]
]

String codigoVendido = 'teclado'
inventario[codigoVendido].stock -= 1

String nuevoCodigo = 'webcam'
inventario[nuevoCodigo] = [precio: 62.00G, stock: 1]

Map<String, Map<String, Object>> disponibles = inventario.findAll {
    String codigo, Map<String, Object> producto ->
    (producto.stock as int) > 0
}

Map<String, BigDecimal> valorPorProducto = disponibles.collectEntries {
    String codigo, Map<String, Object> producto ->
    BigDecimal valorStock = (producto.precio as BigDecimal) *
        (producto.stock as int)

    [(codigo): valorStock]
}

valorPorProducto.each { String codigo, BigDecimal valor ->
    println "${codigo}: ${valor}"
}
```


El resultado es:


```text
teclado: 90.00
monitor: 420.00
webcam: 62.00
```


La variable `inventario[codigoVendido]` utiliza el contenido de la variable como clave y devuelve el mapa anidado del producto. La asignación de `webcam` muestra que la misma sintaxis sirve para insertar una entrada nueva.


El método `findAll` recibe la clave y el valor de cada entrada, y conserva solo los productos con stock. Después, `collectEntries` genera un mapa nuevo. La expresión `[(codigo): valorStock]` usa paréntesis porque `codigo` es una variable; escribir `[codigo: valorStock]` crearía una clave literal llamada `codigo`.


El último `each` recorre el mapa transformado en orden de inserción. Las variables tipadas documentan la estructura esperada, mientras que `G` crea importes `BigDecimal`, adecuados para conservar precisión decimal.

