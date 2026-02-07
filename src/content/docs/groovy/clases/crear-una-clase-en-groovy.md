---
title: "Crear una clase en Groovy"
description: "Aprende a crear una clase en Groovy y descubre cómo definir atributos, constructores y métodos para desarrollar aplicaciones efectivas y elegantes."
date: 2014-02-10
updatedDate: 2026-02-07
tags: ["class","extend","main"]
slug: groovy/clases/crear-una-clase-en-groovy
type: doc
topic: groovy
id: 5f095193-4ce9-4160-8e2a-be6b5ce81841
author: ariel
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/basicos/CrearClase.groovy
---

En esta ocasión crearemos una clase en [Groovy](http://www.manualweb.net/groovy/), al igual que en [Java](https://www.manualweb.net/java/) se debe usar la palabra **class**. 


## Clase en Groovy


```text
class Computadora{
...
...
}
```


Nuestra clase en [Groovy](http://www.manualweb.net/groovy/) tendrá dos atributos:


```text
String marca
String modelo
```


Por defecto estos atributos serán accesibles desde cualquier otra clase en [Groovy](http://www.manualweb.net/groovy/). Si quiero crear otra clase en [Groovy](http://www.manualweb.net/groovy/) que acceda a esos atributos tengo que usar la palabra **extends**.


```text
class Computadora_Portatil extends Computadora{
...
...
}
```


A esta nueva clase en [Groovy](http://www.manualweb.net/groovy/) le coloco otros dos atributos:


```text
String memoria
String procesador
```


El código de ambas clases en [Groovy](http://www.manualweb.net/groovy/) quedaría de la siguiente forma:


```text
//clase base
class Computadora{
	String marca
	String modelo
}

//clase hija
class Computadora_Portatil extends Computadora{
	String memoria
	String procesador
}
```


### Constructor de una clase en Groovy


Podemos crear un constructor para cada clase en [Groovy](http://www.manualweb.net/groovy/):


```text
//clase base
class Computadora{
  //constructor
  Computadora(){}
}

//clase hija
class Computadora_Portatil extends Computadora{
  //constructor
  Computadora_Portatil(){}
}
```


### Método main de una clase en Groovy


Ahora escribimos el "main" de nuestra clase en [Groovy](http://www.manualweb.net/groovy/):


```text
static main(args){
  //nota: no es necesario
}
```


### Instancia de una clase en Groovy


```text
static main(args){
  	def miPC=new Computadora() 
}
```


También podemos hacerlo de esta forma:


```text
static main(args){
   def miPC= new Computadora(marca:"DELL",modelo:"1501")

  //mostramos los valores
  println "Mi PC:"
  println "marca >> ${miPC.marca} , modelo >> ${miPC.modelo}"

}
```


Existe también la alternativa de usar la palabra **with** para llenar los atributos de la clase en [Groovy](http://www.manualweb.net/groovy/):


```text
static main(args){
//en este caso usamos la clase hija
def miPortatil=new Computadora_Portatil()
miPortatil.with{
	memoria="1.7GiB"
	procesador="AMD V120 Processor"
}

//mostramos los valores
println "Mi PC portatil:"
println "memoria >> ${miPortatil.memoria} , procesador >> ${miPortatil.procesador}"

}
```


Espero que os haya gustado el artículo sobre **cómo crear una clase en** [**Groovy**](http://www.manualweb.net/groovy/)**.**

