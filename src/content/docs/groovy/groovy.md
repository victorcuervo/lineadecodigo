---
title: "Groovy"
description: "Conoce qué es Groovy, cómo funciona sobre la JVM, sus características, ventajas e interoperabilidad con Java mediante un ejemplo práctico y ejecutable."
date: 2026-02-10
updatedDate: 2026-09-26
tags: ["groovy","java","script","closure","lista"]
slug: groovy
type: category
topic: groovy
id: 302a9dfb-adca-80ec-a589-d806bcb8b483
author: victor_cuervo
---

## ¿Qué es Groovy?


Groovy es un lenguaje de programación orientado a objetos que se ejecuta sobre la **Máquina Virtual de** [**Java**](https://lineadecodigo.com/java/) **(JVM)**. La JVM es el entorno que ejecuta el bytecode generado por lenguajes como [Java](https://lineadecodigo.com/java/) y permite que Groovy utilice sus clases, bibliotecas y herramientas.


Su sintaxis parte de [Java](https://lineadecodigo.com/java/), pero elimina parte del código repetitivo y añade construcciones más expresivas. Puede compilarse en clases para la JVM o ejecutarse como un script. Un script es un archivo con instrucciones que no necesita declarar explícitamente una clase ni un método `main` para comenzar a ejecutarse.


Groovy admite tipado dinámico y estático. Con tipado dinámico, el tipo de una variable puede inferirse durante la ejecución mediante `def`. Con tipado estático, se declaran tipos concretos y el compilador puede detectar más errores antes de ejecutar el programa. Ambos estilos pueden convivir en un mismo proyecto.


## Características de Groovy

- **Interoperabilidad con** [**Java**](https://lineadecodigo.com/java/)**:** puede crear objetos [Java](https://lineadecodigo.com/java/), implementar interfaces, heredar clases y llamar a bibliotecas existentes sin una capa de adaptación. También es posible invocar código Groovy desde [Java](https://lineadecodigo.com/java/).
- **Sintaxis concisa:** permite omitir elementos como puntos y comas, paréntesis en ciertas llamadas y tipos explícitos cuando el contexto resulta claro.
- **Closures:** una closure es un bloque de código que puede guardarse en una variable, pasarse como argumento y ejecutarse posteriormente. Se utiliza con frecuencia para filtrar, transformar o recorrer colecciones.
- **Colecciones expresivas:** listas y mapas cuentan con métodos como `each`, `findAll`, `collect` y `groupBy`, que facilitan el procesamiento de datos sin escribir bucles extensos.
- **Cadenas con interpolación:** las cadenas delimitadas por comillas dobles pueden insertar expresiones con `${...}`. Groovy las representa mediante `GString` cuando contienen valores interpolados.
- **Propiedades simplificadas:** al acceder a `objeto.nombre`, Groovy puede utilizar automáticamente los métodos `getNombre()` y `setNombre(...)`, lo que reduce el código ceremonial.
- **Uso como script o aplicación:** sirve para automatización, herramientas de línea de comandos, pruebas y aplicaciones completas. También se utiliza en tecnologías del ecosistema JVM, como Gradle y el framework web Grails.

## ¿Por qué aprender Groovy?


Groovy permite reutilizar conocimientos y bibliotecas de [Java](https://lineadecodigo.com/java/) con una sintaxis más compacta. Esto resulta útil cuando un proyecto ya depende de la JVM, pero necesita scripts, automatizaciones o procesamiento de datos que puedan escribirse y mantenerse con menos código.


Su interoperabilidad facilita una adopción gradual: una aplicación [Java](https://lineadecodigo.com/java/) puede incorporar una clase o un script Groovy sin reescribir el resto del sistema. También permite explorar APIs [Java](https://lineadecodigo.com/java/) de forma interactiva y crear prototipos antes de trasladar una solución a una estructura más rígida.


Las closures y las operaciones sobre colecciones ayudan a expresar transformaciones de datos de manera directa. Comprenderlas prepara además para trabajar con Gradle, cuyas configuraciones tradicionales usan una DSL basada en Groovy. Una **DSL** o lenguaje específico de dominio ofrece una sintaxis adaptada a una tarea concreta, como describir la compilación y las dependencias de un proyecto.


## Ejemplo de Groovy


El siguiente script calcula el importe de los productos que superan un precio mínimo:


```groovy
class Producto {
    String nombre
    BigDecimal precio
}

def productos = [
    new Producto(nombre: 'Teclado', precio: 45.90),
    new Producto(nombre: 'Ratón', precio: 24.50),
    new Producto(nombre: 'Monitor', precio: 189.00)
]

def precioMinimo = 40.00

def productosSeleccionados = productos.findAll { producto ->
    producto.precio >= precioMinimo
}

def nombres = productosSeleccionados.collect { producto ->
    producto.nombre
}

def importeTotal = productosSeleccionados.sum { producto ->
    producto.precio
}

println "Productos: ${nombres.join(', ')}"
println "Importe total: ${importeTotal}"
```


El resultado es:


```text
Productos: Teclado, Monitor
Importe total: 234.90
```


La clase `Producto` declara dos propiedades. Groovy genera el acceso habitual a esas propiedades y permite inicializarlas con argumentos nombrados como `nombre:` y `precio:`.


La variable `productos` contiene una lista de objetos. `findAll` recibe una closure y conserva los productos que cumplen la condición. `collect` transforma cada objeto en su nombre, mientras que `sum` acumula los precios seleccionados. Las expresiones entre `${...}` insertan los valores calculados en las cadenas de salida.


Este ejemplo combina clases compatibles con la JVM, tipado dinámico mediante `def`, closures y operaciones sobre colecciones. El mismo enfoque puede integrarse con clases [Java](https://lineadecodigo.com/java/) porque Groovy trabaja sobre el mismo modelo de objetos de la JVM.

