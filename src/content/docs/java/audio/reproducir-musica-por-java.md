---
title: "Reproducir música por Java"
description: "Artículo que nos explica cómo podemos reproducir música por java."
lastUpdated: 2025-12-20
slug: java/reproducir-musica-por-java
author: Pablo Ruiz
---

Para esto utilizaré las librerías de javazoom. En concreto **basicplayer3.0.jar**. Soy de pocas palabras. Vamos a código: Creamos nuestra honorable clase llamada Reproductor.java


```java
public class Reproductor{...}
```


Añadiremos los imports correspondientes


```java
import javazoom.jlgui.basicplayer.BasicPlayer;
import java.io.File;
```


Creamos el atributo del tipo BasicPlayer


```java
private BasicPlayer player;
```


y luego lo creamos en el constructor


```java
player = new BasicPlayer();
```


Bueno ahora vienen los métodos como el play, stop, pausa, resumen, etc…


```java
public void Play() throws Exception {
  player.play();
}

public void AbrirFichero(String ruta) throws Exception {
  player.open(new File(ruta));
}

public void Pausa() throws Exception {
  player.pause();
}

public void Continuar() throws Exception {
  player.resume();
}

public void Stop() throws Exception {
  player.stop();
}
```


Con éstos métodos tendríamos ya formado nuestro reproductor… Así que ahora a usarlo. No creo que tengan mayor problema con lo siguiente:


```java
public static void main(String args[]){
  try {
    Reproductor mi_reproductor = new Reproductor();
    mi_reproductor.AbrirFichero("c:/mi_archivo_de_musica.mp3");
    mi_reproductor.Play();
  } catch (Exception ex) {
    System.out.println("Error: " + ex.getMessage());
  }
}
```


Como ven es demasiado simple reproducir música en java… pero a la vez éste método quizás no sea tan atractivo, ya que no posee una interfaz bonita ni nada, pero la base es ésta y la interfaz es a gusto de cada uno… Pero mostrándoles un poco lo que se puede hacer, les dejaré adjunto un reproductor que hice hace algún tiempo haber si les agrada MP3seth: [Descargar aquí](http://www.mediafire.com/?n0zmiyogmzy=)


Alguno que se interese en la aplicación gráfica que pida el código y lo envío sin ningún problema.

