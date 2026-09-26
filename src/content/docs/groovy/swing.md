---
title: "Swing"
description: "Aprende Swing Groovy para crear interfaces gráficas de escritorio con ventanas, componentes, layouts y eventos mediante un ejemplo práctico y ejecutable."
date: 2026-09-26
updatedDate: 2026-09-26
tags: ["groovy","closure","swing","jframe","joptionpane"]
slug: groovy/swing
type: category
topic: groovy
id: 3e7a9dfb-adca-80ae-b3aa-f61f7762db1a
author: victor_cuervo
---

## ¿Qué es Swing Groovy?


Swing Groovy es el uso de la biblioteca [Swing](https://lineadecodigo.com/java/swing/) desde [Groovy](https://lineadecodigo.com/groovy/) para **crear interfaces gráficas de escritorio ejecutadas en la JVM**. [Swing](https://lineadecodigo.com/java/swing/) forma parte de las API de [Java](https://lineadecodigo.com/java/) y proporciona ventanas, botones, campos de texto, tablas, menús y otros componentes visuales.


Una interfaz [Swing](https://lineadecodigo.com/java/swing/) se organiza mediante **contenedores**, **componentes** y **gestores de diseño**. Un contenedor, como `JFrame` o `JPanel`, aloja otros elementos. Los componentes, como `JButton` y `JTextField`, muestran información o reciben datos. Un gestor de diseño, como `BorderLayout` o `GridLayout`, calcula la posición y el tamaño de esos componentes.


[Swing](https://lineadecodigo.com/java/swing/) utiliza programación dirigida por eventos. La aplicación registra un listener —un objeto que escucha eventos— para reaccionar a acciones como pulsar un botón, seleccionar una opción o cerrar una ventana. En [Groovy](https://lineadecodigo.com/groovy/), muchas interfaces funcionales pueden implementarse mediante closures, lo que reduce el código necesario para los listeners.


La interfaz debe crearse y actualizarse en el **Event Dispatch Thread** o EDT, el hilo encargado de procesar los eventos y repintar los componentes. Las tareas lentas no deben ejecutarse en ese hilo porque bloquearían la ventana.


## Características de Swing Groovy

- **Interoperabilidad directa.** Un script puede importar y utilizar `JFrame`, `JPanel`, `JButton`, `JLabel`, `JTextField` y el resto de clases [Swing](https://lineadecodigo.com/java/swing/) sin adaptadores.
- **Componentes multiplataforma.** La misma aplicación puede ejecutarse en sistemas compatibles con la JVM, aunque la apariencia y ciertos comportamientos pueden variar según el entorno.
- **Gestores de diseño.** Los layouts organizan la interfaz sin depender de coordenadas absolutas. Esto permite que la ventana se adapte a diferentes tamaños de fuente y dimensiones.
- **Eventos mediante closures.** Una closure puede actuar como listener para eventos sencillos, por ejemplo con `boton.addActionListener { ... }`.
- **Ejecución en el EDT.** `SwingUtilities.invokeLater` programa la creación de la interfaz en el hilo correcto. Los cambios posteriores en componentes también deben realizarse en ese hilo.
- **Tareas en segundo plano.** `SwingWorker` permite ejecutar operaciones lentas fuera del EDT y publicar el resultado de forma segura en la interfaz.
- **Modelos separados.** Componentes como `JTable`, `JList` y `JTree` utilizan modelos para representar sus datos. Esta separación facilita actualizar la información sin reconstruir todo el componente.
- **Diálogos integrados.** `JOptionPane` permite mostrar mensajes, confirmaciones y formularios sencillos sin construir otra ventana completa.
- **Construcción declarativa opcional.** `groovy.swing.SwingBuilder` ofrece una sintaxis jerárquica para crear interfaces. En instalaciones modulares puede ser necesario incluir `org.apache.groovy:groovy-swing` con la misma versión de Groovy utilizada por el proyecto.

## ¿Por qué aprender Swing Groovy?


[Swing](https://lineadecodigo.com/java/swing/) resulta útil para construir herramientas internas, utilidades de administración, visualizadores de datos y aplicaciones de escritorio que deben integrarse con bibliotecas existentes de [Java](https://lineadecodigo.com/java/). También permite añadir una interfaz sencilla a scripts que ya procesan archivos, bases de datos o servicios.


Usar [Groovy](https://lineadecodigo.com/groovy/) reduce el código ceremonial de los listeners y facilita trabajar con colecciones para rellenar componentes. La aplicación continúa usando las clases estándar de [Swing](https://lineadecodigo.com/java/swing/), por lo que puede reutilizar ejemplos, componentes y modelos desarrollados para [Java](https://lineadecodigo.com/java/).


Comprender el EDT evita uno de los errores más comunes en interfaces de escritorio: ejecutar una operación lenta desde el evento de un botón. Si ese trabajo bloquea el hilo de eventos, la ventana deja de responder. Separar la tarea con `SwingWorker` mantiene la interfaz activa y permite actualizarla al terminar.


## Ejemplo de Swing Groovy


El siguiente script crea una ventana con un campo de texto, un botón y una etiqueta. Al pulsar el botón, la etiqueta muestra un saludo con el nombre introducido:


```groovy
import java.awt.BorderLayout
import java.awt.Dimension
import javax.swing.BorderFactory
import javax.swing.JButton
import javax.swing.JFrame
import javax.swing.JLabel
import javax.swing.JPanel
import javax.swing.JTextField
import javax.swing.SwingConstants
import javax.swing.SwingUtilities
import javax.swing.WindowConstants

SwingUtilities.invokeLater {
    JFrame ventana = new JFrame('Saludo con Groovy')
    ventana.defaultCloseOperation = WindowConstants.EXIT_ON_CLOSE

    JTextField campoNombre = new JTextField(20)
    JButton botonSaludar = new JButton('Saludar')
    JLabel etiquetaMensaje = new JLabel(
        'Escribe tu nombre',
        SwingConstants.CENTER
    )

    botonSaludar.addActionListener {
        String nombre = campoNombre.text.trim()
        etiquetaMensaje.text = nombre
            ? "Hola, ${nombre}"
            : 'Escribe un nombre válido'
    }

    JPanel formulario = new JPanel(new BorderLayout(8, 8))
    formulario.border = BorderFactory.createEmptyBorder(12, 12, 12, 12)
    formulario.add(campoNombre, BorderLayout.NORTH)
    formulario.add(botonSaludar, BorderLayout.CENTER)
    formulario.add(etiquetaMensaje, BorderLayout.SOUTH)

    ventana.contentPane.add(formulario)
    ventana.minimumSize = new Dimension(360, 150)
    ventana.pack()
    ventana.setLocationRelativeTo(null)
    ventana.visible = true
}
```


`SwingUtilities.invokeLater` crea todos los componentes dentro del EDT. `JFrame` actúa como ventana principal y `JPanel` utiliza `BorderLayout` para distribuir el campo, el botón y la etiqueta.


La closure registrada con `addActionListener` se ejecuta cuando el usuario pulsa el botón. Lee la propiedad `text` del campo, elimina los espacios exteriores con `trim()` y actualiza la etiqueta. Si el campo está vacío, muestra un mensaje de validación.


El método `pack()` ajusta la ventana al tamaño preferido de sus componentes, mientras que `setLocationRelativeTo(null)` la centra en la pantalla. El ejemplo debe ejecutarse en un entorno gráfico; una JVM configurada en modo _headless_ no puede mostrar ventanas [Swing](https://lineadecodigo.com/java/swing/).

