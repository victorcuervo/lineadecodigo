---
title: "Crear una ventana Swing en Groovy"
description: "Crea una ventana Swing en Groovy de forma sencilla y rápida. Aprende a usar componentes y eventos para desarrollar aplicaciones con estilo y funcionalidad."
date: 2013-11-19
updatedDate: 2026-02-07
tags: ["swing","jframe","jbutton","show"]
slug: groovy/swing/crear-una-ventana-swing-en-groovy
type: doc
topic: groovy
id: 2c8a9dfb-adca-812e-8ab5-dd1aabcc76a2
author: ariel
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/swing/ventana.groovy
---

En este ejemplo se usarán las librerías **javax.swing** y **java.awt** para crear una ventana Swing en [Groovy](http://www.manualweb.net/groovy/). El archivo se llamara **Ventana.groovy**.


> Una de las ventajas de usar [Groovy](http://www.manualweb.net/groovy/) es que puedes utilizar las librerías de [Java](https://www.manualweb.net/java/) para crear aplicaciones de una manera más sencilla.


## Importar librerías


Es importante importar estas librerías para Crear una ventana Swing en [Groovy](http://www.manualweb.net/groovy/).


```groovy
import javax.swing.JFrame
import javax.swing.JOptionPane
import javax.swing.ImageIcon
import javax.swing.*
import java.awt.event.*
import java.awt.*
```


## Crear función principal


Creamos una función principal llamada **ventana**.


```groovy
def ventana(){
  // aquí el código
}
```


Para invocarla solo es necesario poner el nombre:


```groovy
//invocamos el método
ventana()
```


## Definir componentes


Dentro de la función ventana se va definir tres componentes:

- Un [JFrame](https://www.w3api.com/Java/JFrame/setLayout/), que servirá para contener los botones
- Dos [JButton](https://www.w3api.com/Java/JButton/), uno para mostrar un mensaje y otro para salir

## Cómo funciona crear una ventana Swing en Groovy


Crea una ventana con dos botones, el botón "Activa" solicita el nombre de una persona y lo muestra en una ventanita (**JOptionPane**). El botón "Salir" finaliza la aplicación. Eso es todo, solo es un ejemplo de uso de Swing en [Groovy](http://www.manualweb.net/groovy/).


Crear el [JFrame](https://www.w3api.com/Java/JFrame/setLayout/), definimos su tamaño, título e indicamos que se puede cerrar.


```groovy
frame=new JFrame(title: '::Ventana en Groovy::',size: [270,300],layout: new FlowLayout(),defaultCloseOperation: javax.swing.WindowConstants.EXIT_ON_CLOSE)
```


## Botón Activa


El botón que muestra un mensaje. Podemos asignarle un título, un tooltip, un estilo (color) y una imagen.


```groovy
btnActiva=new JButton("<font color="white">Activa</font>",new ImageIcon("pet01.png"))
  btnActiva.setBackground(Color.blue)
  btnActiva.setToolTipText("activar...")
  //...
```


Además definimos un evento con la interface **ActionListener**.


```groovy
btnActiva.addActionListener({
    def cad=JOptionPane.showInputDialog("Tu nombre:")
    JOptionPane.showMessageDialog(null,"Hola "+cad,"Aviso del sistema",JOptionPane.PLAIN_MESSAGE,new ImageIcon("pet01.png"))

   } as ActionListener)
```


## Botón Salir


El botón para salir. El método **exit** finalizará el programita.


```groovy
btnSalir=new JButton("<font color="white">Salir</font>",new ImageIcon("pet01.png"))
  btnSalir.setBackground(Color.orange)
  btnSalir.setToolTipText("quitar...")
  btnSalir.addActionListener({
    System.exit(0)
  } as ActionListener)
```


## Agregar botones y mostrar ventana


Finalmente agregamos esos dos botones al [JFrame](https://www.w3api.com/Java/JFrame/setLayout/). Además indicamos que el [JFrame](https://www.w3api.com/Java/JFrame/setLayout/) es visible (show).


```groovy
frame.add btnActiva
frame.add btnSalir
frame.show()
```


## Compilar y ejecutar


Listo, compilamos


```bash
groovyc Ventana.groovy
```


y ejecutamos


```bash
groovy Ventana.groovy
```


Así se verá la ventana.


> Existe un framework llamado **Griffon** que permite crear aplicaciones Swing usando el lenguaje [Groovy](http://www.manualweb.net/groovy/).


Espero les sirva de algo.

