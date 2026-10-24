---
title: "Calcular la moda de una distribución con Java"
description: "Aprende a calcular la moda de una distribución con Java usando HashMap y ArrayList: cuenta frecuencias, detecta empates y corrige casos sin moda."
date: 2010-11-09
updatedDate: 2026-10-24
tags: ["arraylist","array","foreach","collection"]
slug: java/colecciones/calcular-la-moda-de-una-distribucion-con-java
type: doc
topic: java
id: cba35a96-e337-4c21-ae38-e82b633d5d3e
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/CalcularModa.java
---

**La moda de una distribución es el valor, o los valores, con mayor frecuencia.** Si dos valores de la distribución tienen la misma frecuencia máxima, la distribución es bimodal. Si hay tres valores empatados, es trimodal. En general, se puede hablar de una distribución multimodal. Cuando todos los valores aparecen una sola vez, no existe una moda diferenciada. En cambio, si todos los elementos son iguales, ese valor sí es la moda porque aparece más veces que cualquier otro.


## Definir la distribución


Lo primero será definir nuestra distribución:


```java
int[] elementos = {1,3,4,5,3,2,1,2,2,1,5,5,8,9,6,6,3,4,3,1,3,5,3};
```


La distribución se representa mediante un array de enteros. El algoritmo también se puede aplicar a otros tipos de datos si se cambia el tipo de las colecciones y del mapa.


## Contar la frecuencia de cada elemento


Lo siguiente que vamos a hacer es recorrer la distribución e ir insertando en un [Map](http://w3api.com/wiki/Java:Map) con clave/valor el número de veces que aparece un valor en la distribución. La clave será el elemento de la distribución y el valor el número de veces que aparece.


Hay que tener en cuenta que si es la primera vez que aparece el número, habrá que inicializar dicha clave del [Map](http://w3api.com/wiki/Java:Map) con el valor de 1.


```java
Map<Integer,Integer> m = new HashMap<Integer,Integer>();

for (int elemento: elementos){
  if (m.containsKey(elemento))
    m.put(elemento,m.get(elemento)+1);
  else
    m.put(elemento,1);
}
```


Como podemos ver en el código nos apoyamos en los métodos [.put()](http://w3api.com/wiki/Java:Map.put()) y [.get()](http://w3api.com/wiki/Java:Map.get()) del [Map](http://w3api.com/wiki/Java:Map) para añadir y consultar elementos, así como en el método [.containsKey()](http://w3api.com/wiki/Java:Map.containsKey()) para saber si el elemento está inicializado o no.


Cada entrada del mapa representa un valor distinto de la distribución y su frecuencia. En este ejemplo, el valor `3` aparece seis veces, por lo que puede convertirse en la moda.


## Encontrar los elementos más frecuentes


Una vez que tenemos nuestro [Map](http://w3api.com/wiki/Java:Map) cargado, vamos a recorrerlo para consultar cuál es el elemento con mayor frecuencia. Como dijimos que podíamos tener varias modas utilizaremos un elemento [List](http://w3api.com/wiki/Java:List) para ir guardando dichos valores y una variable `repeticiones` para saber cuál es el valor de mayor frecuencia.


```java
int repeticiones = 0;
List<Integer> moda = new ArrayList<Integer>();
```


Pasamos a recorrer el [Map](http://w3api.com/wiki/Java:Map) utilizando una clase [Entry](http://w3api.com/wiki/Java:Map.Entry) que representa una dupla clave/valor.


```java
Iterator<Entry<Integer, Integer>> iter = m.entrySet().iterator();
```


## Determinar la moda


Si la frecuencia del elemento del mapa es mayor que la actual, vaciamos la lista -[.clear()](http://w3api.com/wiki/Java:List.clear())-, insertamos el valor del elemento -[.add()](http://w3api.com/wiki/Java:List.add())- e indicamos que esa frecuencia es la mayor. Si la frecuencia es igual, añadimos el elemento a la lista y si es menor, simplemente se descarta.


```java
while (iter.hasNext()) {
  Entry<Integer,Integer> e = iter.next();

  if (e.getValue() > repeticiones) {
    moda.clear();
    moda.add(e.getKey());
    repeticiones = e.getValue();
  } else if (e.getValue() == repeticiones)
    moda.add(e.getKey());
}
```


El uso de `clear()` es importante: cuando aparece una frecuencia mayor, los valores que tenían la frecuencia máxima anterior dejan de ser modas. Si otro valor alcanza la nueva frecuencia máxima, se añade a la lista y se conserva el empate.


## Mostrar el resultado


Ya solo nos quedará comprobar si la distribución está vacía o si todos sus elementos aparecen una sola vez. En ese último caso, la frecuencia máxima es `1` y no existe una moda diferenciada. No debemos comparar el tamaño de `moda` con `elementos.length`, porque el array puede contener valores repetidos; tampoco conviene usar únicamente el número de modas, ya que una distribución con todos sus elementos iguales sí tiene una moda válida.


```java
if (elementos.length == 0 || repeticiones == 1)
  System.out.println("No hay moda");
else
  System.out.println("La moda de la distribución es " + moda);
```


Con la distribución del ejemplo, el resultado esperado es:


```text
La moda de la distribución es [3]
```


El orden de los valores empatados puede variar porque `HashMap` no garantiza un orden de iteración. Si el orden de salida es importante, hay que ordenar la lista `moda` antes de mostrarla.


## Ejemplo completo


El siguiente programa reúne los fragmentos anteriores en un ejemplo ejecutable. Mantiene el uso de `HashMap`, `ArrayList`, `Iterator` y `Entry` para que se pueda ver cómo colaboran las distintas clases:


```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

public class CalcularModa {

  public static void main(String[] args) {
    int[] elementos = {1,3,4,5,3,2,1,2,2,1,5,5,8,9,6,6,3,4,3,1,3,5,3};

    Map<Integer,Integer> m = new HashMap<Integer,Integer>();

    for (int elemento: elementos) {
      if (m.containsKey(elemento))
        m.put(elemento, m.get(elemento) + 1);
      else
        m.put(elemento, 1);
    }

    int repeticiones = 0;
    List<Integer> moda = new ArrayList<Integer>();
    Iterator<Entry<Integer, Integer>> iter = m.entrySet().iterator();

    while (iter.hasNext()) {
      Entry<Integer,Integer> e = iter.next();

      if (e.getValue() > repeticiones) {
        moda.clear();
        moda.add(e.getKey());
        repeticiones = e.getValue();
      } else if (e.getValue() == repeticiones) {
        moda.add(e.getKey());
      }
    }

    if (elementos.length == 0 || repeticiones == 1)
      System.out.println("No hay moda");
    else
      System.out.println("La moda de la distribución es " + moda);
  }
}
```


## Complejidad y buenas prácticas


El recorrido del array para construir el mapa y el recorrido de sus entradas tienen un coste temporal conjunto de `O(n + k)`, donde `n` es el número de elementos de la distribución y `k` es el número de valores distintos. El mapa necesita `O(k)` memoria adicional.


Para este ejemplo se usan tipos genéricos como `Map<Integer, Integer>` y `List<Integer>`, que evitan conversiones manuales y permiten que el compilador compruebe los tipos. Java convierte automáticamente los `int` en `Integer` al trabajar con las colecciones mediante autoboxing.


`HashMap` es adecuado cuando solo interesa contar frecuencias. Si también se necesita conservar el orden de inserción, se puede utilizar `LinkedHashMap`; si se necesita mantener las claves ordenadas, se puede valorar `TreeMap`. Estas alternativas cambian el orden de recorrido, pero no la lógica para calcular la frecuencia máxima.

