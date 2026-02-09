---
title: "Simple navegador web en C# Framework 2.0"
description: "Aprende a crear un navegador web simple en C# con .NET Framework 2.0. Descubre cómo usar el control WebBrowser para navegar, actualizar y gestionar páginas."
date: 2010-05-05
updatedDate: 2026-02-09
tags: ["form","button"]
slug: dotnet/csharp/simple-navegador-web-en-c-framework-20
type: doc
topic: dotnet
id: 2b8de30e-e050-45a4-98cf-8ff71d6cc8b6
author: Pablo Ruiz
---

Los pasos a seguir para crear un simple navegador web en C# y usando un framework 2.0 son los siguientes:


## Crear el proyecto


Lo que Primero hacemos es Crear un Proyecto Nuevo (Visual Studio 2005), lenguaje C# y das un nombre a elección.


Luego tenemos nuestro Form que se verá algo así.


## Añadir el control WebBrowser


Luego lo que hacemos es añadir un Control de ToolBox llamado WebBrowser. Por defecto al arrastrar el WebBrowser ocupa el form completo pero como necesitamos solo mostrar la página web en éste desbloqueamos el control WebBrowser para poder elegir la posición a gusto de donde se mostrará la web.


Después de elegir la posición del Web Browser vamos a las propiedades de éste para configurar la acción de cuando se maximiza la ventana automáticamente se maximice el WebBrowser.


## Añadir controles de navegación


Ahora nos queda ingresar los botones comunes en un navegador como lo es el "Ir a", "Atrás", "Adelante", "Parar", "Actualizar" y "Barra de Direcciones". Para ésto poner los controles a gusto debería quedar algo así.


## Implementar los eventos


Ahora ya tenemos los controles ingresados sobre nuestro Form, ahora lo que hacemos es añadir los Eventos a cada uno.


Empezaremos con Botón Atrás "btAtras"


```c#
private void btAtras_Click(object sender, EventArgs e){
  webBrowser1.GoBack();
}
```


Ahora Botón Adelante "btAdelante"


```c#
private void btAdelante_Click(object sender, EventArgs e)  {
  webBrowser1.GoForward();
}
```


Ahora Botón Parar "btParar"


```c#
private void btParar_Click(object sender, EventArgs e) {
  webBrowser1.Stop();
}
```


Ahora Botón Actualizar "btActualizar"


```c#
private void btActualizar_Click(object sender, EventArgs e) {
  webBrowser1.Update();
}
```


Ahora Botón Inicio "btInicio"


```c#
private void btInicio_Click(object sender, EventArgs e){
  webBrowser1.GoHome();
}
```


Ahora Botón Ir A "btIrA"


```c#
private void btIrA_Click(object sender, EventArgs e){
  webBrowser1.Navigate(tbDireccionWeb.Text);
}
```


## Código completo


Ahora os dejo el código completo que deberían tener en Form1.cs


```c#
using System;
using System.Collections.Generic; 
using System.ComponentModel;
using System.Data; 
using System.Drawing;
using System.Text; 
using System.Windows.Forms;   

namespace SethBrowser{ 

 public partial class Form1 : Form { 

  public Form1(){
    InitializeComponent();
  } 

  private void btAtras_Click(object sender, EventArgs e)  {
    webBrowser1.GoBack();
  } 

  private void btAdelante_Click(object sender, EventArgs e){
    webBrowser1.GoForward();
  } 

  private void btParar_Click(object sender, EventArgs e){
    webBrowser1.Stop();
  } 

  private void btActualizar_Click(object sender, EventArgs e) {
    webBrowser1.Update();
  } 

  private void btInicio_Click(object sender, EventArgs e){
    webBrowser1.GoHome();
  } 

  private void btIrA_Click(object sender, EventArgs e) {
    webBrowser1.Navigate(tbDireccionWeb.Text);
  }
 }
}
```


Ya tenemos todos nuestros controles con sus respectivas acciones. Veamos como queda [Línea de Código](https://lineadecodigo.com/) en nuestro navegador.


Les dejo un proyecto Visual Studio 2005 con el navegador (tiene algunas funcionalidades más, cómo capturar tecla enter, buscador para google, etc).

