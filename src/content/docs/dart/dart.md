---
title: "Dart"
description: "Conoce Dart, su tipado seguro, compilación, asincronía y relación con Flutter, con un ejemplo práctico para crear aplicaciones multiplataforma."
date: 2026-02-10
updatedDate: 2026-09-23
tags: ["tipado","clases","null","asincrono"]
slug: dart
type: category
topic: dart
id: 302a9dfb-adca-806d-a5f0-c5cf86f40af6
author: victor_cuervo
---

## ¿Qué es Dart?


**Dart es un lenguaje de programación de propósito general, de código abierto y desarrollado por Google**, orientado a crear aplicaciones rápidas en distintas plataformas. Es el lenguaje utilizado por Flutter, aunque también permite desarrollar programas de consola, servicios de servidor y aplicaciones web sin depender de ese framework.


Su sintaxis resulta familiar para quienes conocen lenguajes como [Java](https://lineadecodigo.com/java/), C# o [JavaScript](https://lineadecodigo.com/javascript/). Utiliza funciones, clases, objetos, colecciones y excepciones, pero incorpora un sistema de tipos estático: el analizador conoce el tipo de cada expresión antes de ejecutar el programa. La inferencia de tipos permite escribir `final nombre = 'Ana'` sin declarar `String` de forma explícita cuando puede deducirse con seguridad.


Dart puede ejecutar código mediante compilación **JIT** y **AOT**. JIT, o compilación justo a tiempo, facilita ciclos rápidos durante el desarrollo. AOT, o compilación anticipada, genera código nativo optimizado para producción. En la web, el código puede compilarse a [JavaScript](https://lineadecodigo.com/javascript/) o WebAssembly según el entorno y las herramientas utilizadas.


## Características de Dart

- **Tipado estático con inferencia:** detecta numerosas incompatibilidades antes de ejecutar el programa, pero evita repetir tipos cuando el compilador puede inferirlos.
- **Null safety:** los tipos no admiten `null` de forma predeterminada. Un tipo anulable se marca con `?`, como `String?`, lo que obliga a tratar explícitamente la ausencia de valor.
- **Orientación a objetos:** admite clases, interfaces implícitas, clases abstractas, herencia simple, mixins y métodos de extensión. Todos los valores, incluidas las funciones, son objetos.
- **Inmutabilidad expresiva:** `final` permite asignar una variable una sola vez y `const` crea valores constantes en tiempo de compilación. No son equivalentes: un valor `final` puede calcularse durante la ejecución.
- **Funciones de primera clase:** una función puede almacenarse en una variable, enviarse como argumento o devolverse desde otra función. Las funciones flecha simplifican expresiones cortas.
- **Colecciones y genéricos:** `List`, `Set` y `Map` pueden declarar el tipo de sus elementos. Los genéricos permiten reutilizar estructuras sin perder comprobaciones de tipo.
- **Programación asíncrona:** `Future`, `Stream`, `async` y `await` permiten trabajar con operaciones que terminan más tarde, como solicitudes de red o lectura de archivos, sin bloquear el flujo principal.
- **Concurrencia mediante isolates:** cada isolate dispone de su propia memoria y se comunica mediante mensajes. Este modelo evita compartir estado mutable directamente entre tareas concurrentes.
- **Herramientas integradas:** el SDK incluye analizador estático, formateador, compilador, ejecutor de pruebas y el gestor de paquetes `pub`. El archivo `pubspec.yaml` describe dependencias y configuración del proyecto.
- **Integración con Flutter:** Flutter utiliza Dart para compartir lógica e interfaz entre Android, iOS, web y escritorio. Su recarga en caliente aprovecha la ejecución JIT durante el desarrollo.

## ¿Por qué aprender Dart?


Dart resulta especialmente útil cuando se quiere desarrollar con Flutter. Una sola base de código puede concentrar gran parte de la lógica y de la interfaz de una aplicación multiplataforma, mientras que las integraciones específicas se mantienen separadas cuando cada sistema operativo lo exige.


El sistema de tipos y la null safety ayudan a localizar errores antes de publicar. Por ejemplo, el analizador impide asignar un valor potencialmente nulo a una variable no anulable sin comprobarlo primero. Esta restricción reduce fallos frecuentes y hace más explícitos los contratos entre funciones y clases.


También permite practicar conceptos transferibles a otros lenguajes: modelado con objetos, genéricos, transformaciones de colecciones, asincronía y gestión de dependencias. Fuera de Flutter, puede emplearse en herramientas de línea de comandos, automatizaciones, servidores y aplicaciones web cuando su ecosistema encaja con los requisitos del proyecto.


Su combinación de JIT y AOT resuelve necesidades distintas. Durante el desarrollo favorece iteraciones rápidas; en producción puede generar ejecutables nativos optimizados. Conocer esta diferencia ayuda a entender por qué el comportamiento y el rendimiento del modo de desarrollo no siempre representan la versión publicada.


## Ejemplo de Dart


```dart
class Producto {
  final String nombre;
  final double precio;
  final double? descuento;

  const Producto({
    required this.nombre,
    required this.precio,
    this.descuento,
  });

  double get precioFinal => precio * (1 - (descuento ?? 0));
}

void main() {
  final productos = <Producto>[
    const Producto(nombre: 'Teclado', precio: 85.0, descuento: 0.10),
    const Producto(nombre: 'Ratón', precio: 35.0),
    const Producto(nombre: 'Monitor', precio: 220.0, descuento: 0.15),
  ];

  final productosAsequibles = productos
      .where((producto) => producto.precioFinal < 100)
      .toList()
    ..sort((a, b) => a.precioFinal.compareTo(b.precioFinal));

  for (final producto in productosAsequibles) {
    final precio = producto.precioFinal.toStringAsFixed(2);
    print('${producto.nombre}: $precio €');
  }
}
```


La clase `Producto` define tres propiedades inmutables. `descuento` tiene el tipo `double?`, por lo que puede contener un número o `null`. El operador `??` utiliza `0` cuando no existe descuento y permite que `precioFinal` siempre devuelva un `double` válido.


El constructor usa parámetros con nombre. `required` obliga a proporcionar `nombre` y `precio`, mientras que `descuento` es opcional. Como los objetos del ejemplo se conocen por completo en tiempo de compilación, se crean con `const`.


La colección declara que solo admite objetos `Producto`. `where()` conserva los que cuestan menos de 100 euros después del descuento; `toList()` materializa el resultado y `sort()` lo ordena por precio. El operador de cascada `..` ejecuta `sort()` sobre esa misma lista sin crear una variable intermedia.


La salida esperada es:


```text
Ratón: 35.00 €
Teclado: 76.50 €
```

