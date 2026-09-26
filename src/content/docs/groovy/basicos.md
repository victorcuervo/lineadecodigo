---
title: "Básicos"
description: "Domina los conceptos básicos de Groovy: sintaxis, variables, operadores, colecciones y control de flujo con un script práctico y ejecutable."
date: 2026-09-26
updatedDate: 2026-09-26
tags: ["def","operadores","script","lista","básicos"]
slug: groovy/basicos
type: category
topic: groovy
id: 3e7a9dfb-adca-80bf-bb46-ca9d2b1bf662
author: victor_cuervo
---

## ¿Qué son los conceptos básicos de Groovy?


Los conceptos básicos de Groovy son las reglas y construcciones necesarias para escribir scripts y programas: declaración de variables, tipos de datos, operadores, cadenas, colecciones y estructuras de control.


[Groovy](https://lineadecodigo.com/groovy/) se ejecuta sobre la **Máquina Virtual de Java (JVM)** y utiliza un modelo de objetos compatible con [Java](https://lineadecodigo.com/java/). Su sintaxis resulta familiar para quien conoce ese lenguaje, aunque permite expresar muchas operaciones con menos código.


Un archivo [Groovy](https://lineadecodigo.com/groovy/) puede ejecutarse como un script sin declarar una clase ni un método `main`. Las instrucciones se procesan en orden, de arriba abajo. Cuando la aplicación necesita una estructura mayor, también es posible definir clases, métodos e interfaces.


Las variables pueden declarar un tipo, como `String nombre`, o usar `def` para que [Groovy](https://lineadecodigo.com/groovy/) determine el tipo a partir del valor asignado. `def` no significa que la variable carezca de tipo: el objeto mantiene su tipo real durante la ejecución.


## Características de los conceptos básicos de Groovy

- **Sintaxis flexible:** el punto y coma es opcional al final de una instrucción y los paréntesis pueden omitirse en algunas llamadas a métodos. Conviene mantenerlos cuando mejoren la claridad.
- **Variables con tipos explícitos o inferidos:** `int cantidad = 3` documenta el tipo esperado, mientras que `def cantidad = 3` permite inferirlo.
- **Todo valor es un objeto:** incluso los valores numéricos ofrecen métodos. [Groovy](https://lineadecodigo.com/groovy/) utiliza las clases envoltorio de la JVM cuando necesita tratar un valor primitivo como objeto.
- **Cadenas interpoladas:** una cadena con comillas dobles puede insertar variables o expresiones mediante `$variable` y `${expresion}`. Las comillas simples crean cadenas literales sin interpolación.
- **Operadores habituales:** incluye operadores aritméticos (`+`, `-`, `*`, `/`), comparaciones (`==`, `!=`, `>`, `>=`) y operadores lógicos (`&&`, `||`, `!`). En [Groovy](https://lineadecodigo.com/groovy/), `==` compara los valores mediante `equals` cuando corresponde.
- **Valores verdaderos y falsos contextuales:** una condición puede evaluar directamente números, cadenas y colecciones. Por ejemplo, una lista vacía se considera falsa y una lista con elementos, verdadera.
- **Colecciones literales:** `[1, 2, 3]` crea una lista y `[nombre: 'Ana', edad: 30]` crea un mapa. Sus métodos permiten filtrar, transformar y recorrer datos.
- **Closures:** una closure es un bloque de código que puede recibirse como argumento. Métodos como `each`, `findAll` y `collect` las utilizan para procesar colecciones.

## ¿Por qué aprender los conceptos básicos de Groovy?


Conocer la sintaxis de [Groovy](https://lineadecodigo.com/groovy/) permite crear scripts para automatizar tareas, procesar archivos, transformar datos o ejecutar utilidades de línea de comandos sin construir la estructura completa de una aplicación.


Las variables, operadores y estructuras de control forman la base para comprender código existente y detectar errores. Por ejemplo, distinguir entre una asignación con `=` y una comparación con `==` evita modificar un valor cuando solo se pretendía comprobarlo.


Las listas, los mapas y las closures aparecen con frecuencia en APIs y herramientas del ecosistema [Groovy](https://lineadecodigo.com/groovy/). También son habituales en scripts de Gradle escritos con su DSL de [Groovy](https://lineadecodigo.com/groovy/). Una **DSL** es un lenguaje específico de dominio: en este caso, una sintaxis diseñada para describir tareas, dependencias y opciones de compilación.


La compatibilidad con [Java](https://lineadecodigo.com/java/) permite aplicar estos fundamentos junto con clases de la biblioteca estándar de la JVM. No es necesario aprender un conjunto aislado de APIs para empezar a resolver problemas prácticos.


## Ejemplo de conceptos básicos de Groovy


Este script representa varias ventas, selecciona las que alcanzan un importe mínimo y calcula el total:


```groovy
def ventas = [
    [producto: 'Teclado', importe: 45.90],
    [producto: 'Ratón', importe: 24.50],
    [producto: 'Monitor', importe: 189.00]
]

BigDecimal importeMinimo = 40.00

def ventasSeleccionadas = ventas.findAll { venta ->
    venta.importe >= importeMinimo
}

def importeTotal = ventasSeleccionadas.sum { venta ->
    venta.importe
}

if (ventasSeleccionadas) {
    println "Ventas seleccionadas:"

    ventasSeleccionadas.each { venta ->
        println "- ${venta.producto}: ${venta.importe}"
    }

    println "Total: ${importeTotal}"
} else {
    println 'No hay ventas que cumplan el importe mínimo.'
}
```


El resultado es:


```text
Ventas seleccionadas:
- Teclado: 45.90
- Monitor: 189.00
Total: 234.90
```


Con la variable `ventas` creamos una lista de mapas. Cada mapa contiene las claves `producto` e `importe`, accesibles mediante expresiones como `venta.producto`. La variable `importeMinimo` declara el tipo `BigDecimal`, mientras que las variables precedidas por `def` utilizan inferencia de tipos.


El método `findAll` recibe una [closure](https://lineadecodigo.com/closure/) que compara cada importe con `>=`. `sum` utiliza otra closure para acumular los importes. La condición `if (ventasSeleccionadas)` aprovecha el valor booleano contextual de la lista: se ejecuta cuando contiene al menos un elemento.


El bloque `each` recorre las ventas filtradas y la cadena con comillas dobles inserta sus valores mediante `${...}`. El mensaje del bloque `else` usa comillas simples porque no necesita interpolación.

