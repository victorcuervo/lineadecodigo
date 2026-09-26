---
title: "Clases"
description: "Comprende cómo funcionan las clases Groovy, sus propiedades, métodos, objetos y herencia con un ejemplo ejecutable de constructores y sobrescritura."
date: 2026-09-26
updatedDate: 2026-09-26
tags: ["groovy","class","object","extend","metodos"]
slug: groovy/clases
type: category
topic: groovy
id: 3e7a9dfb-adca-80d7-9f9b-da29f8f4b2b6
author: victor_cuervo
---

## ¿Qué son las clases de Groovy?


Las **clases de Groovy** son plantillas que definen el estado y el comportamiento de los objetos de una aplicación. El estado se representa mediante propiedades o campos, mientras que el comportamiento se implementa con métodos.


[Groovy](https://lineadecodigo.com/groovy/) es un lenguaje orientado a objetos para la JVM y utiliza el mismo modelo de clases que [Java](https://lineadecodigo.com/java/). Una clase se declara con `class`, seguida de su nombre y un bloque entre llaves. A partir de ella se crean instancias con `new`; cada instancia es un objeto independiente con sus propios valores.


Una **propiedad** combina un valor con los métodos que permiten leerlo o modificarlo. Cuando se declara `String nombre` sin un modificador de visibilidad, [Groovy ](https://lineadecodigo.com/groovy/)crea una propiedad y proporciona los métodos de acceso correspondientes. Un **campo** es la variable interna que almacena el dato dentro del objeto.


Los constructores son métodos especiales que inicializan una instancia. Tienen el mismo nombre que la clase y no declaran tipo de retorno. Si una clase no define ningún constructor, [Groovy](https://lineadecodigo.com/groovy/) proporciona uno sin argumentos.


## Características de las clases de Groovy

- **Propiedades concisas:** es posible acceder a una propiedad con `persona.nombre`. [Groovy](https://lineadecodigo.com/groovy/) utiliza los métodos `getNombre()` o `setNombre(...)` cuando existen, por lo que la sintaxis abreviada mantiene la encapsulación.
- **Métodos con tipos opcionales:** los parámetros y el valor devuelto pueden declarar un tipo concreto o utilizar `def`. Es recomendable expresar los tipos cuando formen parte del contrato público de la clase.
- **Constructores:** permiten exigir los datos necesarios para crear un objeto válido. Dentro del constructor, `this` hace referencia a la instancia actual.
- **Herencia simple:** una clase puede extender otra mediante `extends`. La subclase hereda propiedades y métodos accesibles de la superclase y puede añadir su propio comportamiento.
- **Sobrescritura de métodos:** una subclase puede proporcionar una implementación distinta de un método heredado. La anotación `@Override` ayuda al compilador a comprobar que el método existe en la superclase.
- **Acceso a la superclase:** `super(...)` invoca su constructor y `super.metodo()` permite reutilizar una implementación heredada.
- **Visibilidad:** `public`, `protected` y `private` controlan desde dónde puede accederse a los miembros. Los métodos son públicos de forma predeterminada si no se indica otro modificador.
- **Compatibilidad con Java:** una clase compilada puede implementar interfaces, extender clases y utilizar anotaciones o bibliotecas de [Java](https://lineadecodigo.com/java/).

## ¿Por qué aprender las clases de Groovy?


Aprender las **clases de Groovy** permite agrupar datos y operaciones relacionadas en una unidad coherente. En lugar de pasar variables independientes entre funciones, un objeto puede mantener su propio estado y garantizar que las operaciones se realizan sobre datos válidos.


Los constructores ayudan a evitar instancias incompletas. La encapsulación permite cambiar la implementación interna sin obligar a modificar todo el código que utiliza la clase. Los métodos expresan las operaciones disponibles y reducen la duplicación cuando varios objetos comparten el mismo comportamiento.


La herencia resulta útil cuando existe una relación real de especialización. Por ejemplo, `Empleado` puede extender `Persona` porque conserva su identidad y comportamiento general, pero añade información laboral. Cuando solo se necesita reutilizar una capacidad, suele ser preferible implementar una interfaz o componer objetos antes que crear una jerarquía extensa.


Estos conceptos también facilitan la integración con frameworks y bibliotecas del ecosistema [Groovy](https://lineadecodigo.com/groovy/) y la JVM, donde las clases, interfaces, anotaciones y objetos forman parte de las APIs públicas.


## Ejemplo de clases de Groovy


El siguiente script define una clase base y una subclase que amplía y sobrescribe su comportamiento:


```groovy
class Persona {
    String nombre
    int edad

    Persona(String nombre, int edad) {
        this.nombre = nombre
        this.edad = edad
    }

    String presentarse() {
        "Soy ${nombre} y tengo ${edad} años"
    }
}

class Empleado extends Persona {
    String departamento
    BigDecimal salario

    Empleado(
        String nombre,
        int edad,
        String departamento,
        BigDecimal salario
    ) {
        super(nombre, edad)
        this.departamento = departamento
        this.salario = salario
    }

    @Override
    String presentarse() {
        "${super.presentarse()}; trabajo en ${departamento}"
    }

    boolean superaSalario(BigDecimal importeMinimo) {
        salario >= importeMinimo
    }
}

def empleados = [
    new Empleado('Ana', 34, 'Desarrollo', 35_000.00),
    new Empleado('Luis', 29, 'Soporte', 28_500.00)
]

def salarioMinimo = 30_000.00

def empleadosSeleccionados = empleados.findAll { empleado ->
    empleado.superaSalario(salarioMinimo)
}

empleadosSeleccionados.each { empleado ->
    println empleado.presentarse()
}
```


El resultado es:


```text
Soy Ana y tengo 34 años; trabajo en Desarrollo
```


La clase `Persona` define las propiedades `nombre` y `edad`, un constructor y el método `presentarse()`. El constructor utiliza `this` para asignar los parámetros a la instancia.


La clase `Empleado` hereda de `Persona` con `extends`. Su constructor llama primero a `super(nombre, edad)` para inicializar la parte heredada y después asigna `departamento` y `salario`. El método `presentarse()` está sobrescrito, pero reutiliza el texto de la superclase mediante `super.presentarse()`.


El método `superaSalario()` mantiene la comparación dentro del objeto. La lista contiene dos instancias y `findAll` selecciona las que cumplen la condición antes de ejecutar `presentarse()`.

