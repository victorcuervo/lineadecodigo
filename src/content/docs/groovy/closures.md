---
title: "Closures"
description: "Comprende las closures Groovy: sintaxis, parámetros, alcance, delegación y uso con colecciones mediante un ejemplo práctico, correcto y ejecutable."
date: 2026-09-28
updatedDate: 2026-09-28
tags: ["groovy","closure","closures","metodos","lambda"]
slug: groovy/closures
type: category
topic: groovy
id: 3e9a9dfb-adca-8055-a416-d62386c2a1b7
author: victor_cuervo
---

## ¿Qué son las Closures Groovy?


Las **closures Groovy** son bloques de código representados por objetos de tipo `groovy.lang.Closure`. Se pueden asignar a variables, recibir como argumentos, devolver desde métodos y ejecutar más tarde. Esta capacidad permite tratar un comportamiento como un dato.


Una closure se escribe entre llaves. Los parámetros aparecen antes de `->` y el valor de la última expresión se devuelve de forma implícita:


```groovy
def sumar = { int primerNumero, int segundoNumero ->
    primerNumero + segundoNumero
}

assert sumar(4, 3) == 7
```


A diferencia de un método, una closure puede **capturar variables de su contexto léxico**. Esto significa que puede leer o modificar variables visibles en el lugar donde fue declarada, incluso cuando se ejecuta desde otro bloque. Además, al ser un objeto, puede almacenarse en una colección o configurarse antes de usarla.


Las closures se relacionan con la programación funcional porque facilitan operaciones de orden superior: métodos que reciben otro comportamiento como argumento. Sin embargo, también forman parte del modelo orientado a objetos de [Groovy](https://lineadecodigo.com/groovy/), ya que poseen métodos, propiedades y un contexto de resolución.


## Características de las Closures Groovy

- **Invocación flexible.** Una closure puede ejecutarse con `closure(argumentos)` o con `closure.call(argumentos)`. Ambas formas producen el mismo resultado.
- **Parámetro implícito.** Si se declara un único parámetro sin escribir una lista explícita, Groovy lo expone como `it`: `{ it * 2 }`. Conviene nombrarlo cuando el bloque no sea trivial para que el propósito quede claro.
- **Parámetros tipados u opcionales.** Es posible indicar tipos, valores predeterminados y parámetros variables. El tipado ayuda a documentar el contrato y permite una mejor comprobación cuando se usa compilación estática.
- **Retorno implícito.** El resultado de la última expresión se devuelve automáticamente. También se puede utilizar `return`, aunque suele ser innecesario en closures breves.
- **Captura del contexto.** Una closure puede acceder a variables locales externas. La captura conserva la referencia a la variable, no una copia fija de su valor, por lo que los cambios posteriores pueden ser visibles.
- **Contexto con** **`this`****,** **`owner`** **y** **`delegate`****.** `this` apunta a la instancia que contiene el código; `owner`, al objeto o closure donde se declaró; y `delegate`, a un objeto alternativo usado para resolver propiedades y métodos. Esta delegación es la base de muchos DSL de Groovy.
- **Estrategia de resolución.** La propiedad `resolveStrategy` controla si un nombre se busca primero en `owner` o en `delegate`. El valor habitual es `Closure.OWNER_FIRST`; cambiarlo requiere cuidado para evitar que un nombre se resuelva en un objeto inesperado.
- **Integración con colecciones.** Métodos como `each`, `collect`, `find`, `findAll`, `any`, `every`, `groupBy` e `inject` reciben closures para recorrer, transformar, filtrar o acumular datos.
- **Aplicación parcial.** Métodos como `curry`, `rcurry` y `ncurry` crean otra closure con algunos argumentos ya fijados. Esto permite especializar una operación general sin duplicar código.
- **Conversión a interfaces SAM.** Una closure compatible puede convertirse en una interfaz con un único método abstracto, conocida como _Single Abstract Method_. Esto facilita utilizar API de Java que esperan comparadores, listeners o tareas ejecutables.

## ¿Por qué aprender las Closures Groovy?


Gran parte de la expresividad de [Groovy](https://lineadecodigo.com/groogy/) depende de las closures. Las operaciones sobre listas y mapas las utilizan para describir qué debe hacerse con cada elemento, mientras el método de colección controla el recorrido. Esto evita bucles auxiliares y concentra la lógica en la transformación o condición relevante.


También permiten separar una operación de la decisión sobre cuándo ejecutarla. Un método puede recibir una closure para validar datos, aplicar una regla de negocio, manejar un evento o configurar un recurso. El mismo flujo puede reutilizarse con comportamientos distintos sin crear una clase para cada variante.


La captura de variables resulta útil para crear funciones configuradas. Por ejemplo, una closure de cálculo puede utilizar un porcentaje definido en el contexto. La aplicación parcial ofrece una alternativa explícita: fija uno o varios argumentos y devuelve una nueva operación especializada.


Comprender `owner`, `delegate` y `resolveStrategy` ayuda a leer DSL utilizados en herramientas del ecosistema, como scripts de construcción o bloques de configuración. También evita errores en bloques anidados, donde una propiedad podría pertenecer al propietario de la closure o al objeto delegado.


Frente a las lambdas de Java, las closures ofrecen un objeto con contexto de delegación y métodos adicionales. Conocer esa diferencia permite interoperar con API Java sin asumir que ambos mecanismos tienen exactamente el mismo comportamiento.


## Ejemplo de Closures Groovy


El siguiente ejemplo filtra productos activos y calcula su total con descuento. La closure `calcularTotal` declara parámetros, captura una variable externa y se utiliza dentro de una operación de colección:


```groovy
import java.math.RoundingMode

List<Map<String, Object>> productos = [
    [nombre: 'Teclado', precio: 45.00G, cantidad: 2, activo: true],
    [nombre: 'Ratón', precio: 18.50G, cantidad: 1, activo: false],
    [nombre: 'Monitor', precio: 210.00G, cantidad: 1, activo: true]
]

BigDecimal porcentajeDescuento = 0.10G

Closure<BigDecimal> calcularTotal = {
    BigDecimal precio, int cantidad ->
    BigDecimal subtotal = precio * cantidad
    subtotal * (1 - porcentajeDescuento)
}

Map<String, BigDecimal> totalesPorProducto = productos
    .findAll { Map<String, Object> producto -> producto.activo }
    .collectEntries { Map<String, Object> producto ->
        BigDecimal total = calcularTotal(
            producto.precio as BigDecimal,
            producto.cantidad as int
        ).setScale(2, RoundingMode.HALF_UP)

        [(producto.nombre as String): total]
    }

println totalesPorProducto
```


El resultado es:


```text
[Teclado:81.00, Monitor:189.00]
```


La variable `calcularTotal` recibe el precio y la cantidad, pero obtiene `porcentajeDescuento` del contexto donde fue declarada. Esa captura permite cambiar el porcentaje en un solo lugar sin añadirlo a cada llamada.


Por otro lado, el método `findAll` recibe una closure que conserva únicamente los productos activos. Después, `collectEntries` recibe otra closure y construye un mapa con el nombre como clave y el total como valor. Cada closure expresa una responsabilidad distinta: filtrar, calcular y transformar.


Los tipos de los parámetros hacen explícitos los datos esperados. El sufijo `G` crea valores `BigDecimal`, adecuados para este cálculo decimal, y `setScale` redondea el resultado a dos posiciones. El ejemplo muestra cómo combinar closures con métodos de colección sin ocultar las reglas del cálculo.

