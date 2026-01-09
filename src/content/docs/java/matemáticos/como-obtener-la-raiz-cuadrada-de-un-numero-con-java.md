---
title: "Como obtener la raíz cuadrada de un número con Java"
description: "Aunque Java nos permite calcular la raíz cuadrad de un número con Java, en este código explicaremos como hacerlo programáticamente."
date: 2013-02-10
updatedDate: 2026-01-09
tags: ["java-collection","hashmap","list","sqrt"]
slug: java/matematicos/como-obtener-la-raiz-cuadrada-de-un-numero-con-java
author: xhrist14n
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/math/RaizCuadrada.java
topic: java

---

Primeramente como se procede a hacer la raíz cuadrada de un numero con [Java](https://www.manualweb.net/java/) tenemos que tener en consideración como es el proceso, y este proceso es bastante sencillo aritméticamente hablando. Para proceder a hacer la raíz cuadrada de un numero con [Java](https://www.manualweb.net/java/) debemos proceder a tomar el numero en pares de dígitos numéricos, luego procesar esos pares para obtener uno por uno un dígito de resultado para la raíz del numero. No debemos olvidar que debemos considerar el resto de las operaciones para obtener la raíz cuadrada de un numero. Entonces procedemos a ver en código como funcionaria esta idea, primero creamos los métodos que nos serán útiles para esto:

- Necesitaremos un método de parseo de tuplas para obtener los pares de dígitos a usarse en el proceso de extracción de la raíz cuadrada.
- Se usara también un método de obtención de mínimo numero positivo, puesto que esto nos ayudara a encontrar el resto mínimo para obtención del numero correcto para la mantisa de la raíz cuadrada.
- Otro método utilitario para este caso seria, un método de procesado de radicación por tuplas.
- Y finalmente el método de raíz cuadrada que hará uso de todos y cada uno de los métodos utilitarios señalados anteriormente.

### Método de parseo de tuplas


Para este método tendremos que recibir como parámetro el numero como string y lo convertimos en char [] de ahi solo tendremos que recorrer el array de chars y de dos en dos ponerlos en la lista de tuplas.


El método quedaría así:


```java
public static List<Integer> parseNumber(String n){
    List<Integer>  result=new ArrayList<Integer>();
    String number=n.trim();        
    char [] numberChars=number.toCharArray();
    int length=numberChars.length;
    int i=0;
    if(length%2!=0){
        // si hay un numero impar de digitos se toma el primer digito
        result.add(new Integer(new Character(numberChars[0]).toString()));
        i=1;
    }
    for(;i<length;i+=2){
        //se toma los dígitos por pares
        try{
            result.add(new Integer(new Character(numberChars[i]).toString()+
                        new Character(numberChars[i+1]).toString()));                
        }catch(Exception ex){}
    }
    return result;
}
```


## Obtener mínimo número positivo


Ahora el método de obtención de mínimo numero positivo seria como sigue; se evalúa cada elemento contra el mínimo y luego solo el numero menor y positivo es devuelto como resultado en el HashMap.


```java
public static HashMap minimoPositivo(List<HashMap> lista){
    Integer minimo=Integer.MAX_VALUE;
    int indice=0;
    HashMap result=new HashMap();
    for(HashMap elem:lista){// se recorre toda la lista
        Integer elemento=Integer.parseInt(elem.get("resto").toString());
        if(minimo>elemento && elemento>=0){// se obtiene el minimo positivo
            minimo=elemento;
            indice=Integer.parseInt(elem.get("indice").toString());
        }
    }
    result.put("indice",indice);
    result.put("resto",minimo);
    return result;
}
```


## Procesado de las raíces en función de cada tupla


El otro método es hacer el procesado de las raíces en función de cada tupla, para esto procesamos todos los restos posibles de evaluar todas las posibles raíces y los almacenamos en una lista.

A ese resultado le aplicamos la función minimoPositivo para obtener el indice correcto para la raíz, y también con el resto calculado devolvemos esto como respuesta en el HashMap.


```java
public static HashMap procesarRadicacion(Integer tupla,Integer raiz, Integer resto){
    HashMap result=new HashMap();
    List<HashMap> lista=new ArrayList<HashMap>();
    result.put("raiz",0);
    result.put("resto",0);
    Integer radical=raiz*2;
    Integer nuevoresto;        
    Integer numero=0;
    try{
        numero=new Integer(resto.toString()+tupla.toString());
    }catch(Exception ex){
        System.err.println("El numero es demasiado grande no se puede procesar ...");
    }
    Integer nuevaraiz;
    Integer operando;
    for(Integer i=0;i<=9;i++){// se calcula los restos posibles
        operando=raiz*2;
        operando=Integer.parseInt(operando.toString()+i.toString());              
        nuevoresto=numero-(operando*i);
        HashMap hash=new HashMap();
        hash.put("resto",nuevoresto);
        hash.put("indice",i);
        lista.add(hash);
    }
    HashMap Minimo=minimoPositivo(lista);//se obtiene el minimo
    nuevaraiz=new Integer(raiz.toString()+Minimo.get("indice").toString());                                
    result.put("raiz",nuevaraiz.toString());
    result.put("resto",Minimo.get("resto").toString());
    return result;
}
```


## Método para la Raíz Cuadrada


Finalmente el metodo de raizCuadrada, este metodo tiene que aplicar el parseo de tuplas luego de eso recorriendo cada tupla aplica el metodo procesarRadicacion de cada tupla, para de esta forma obtener la raiz del numero procesado y su resto.


```java
public static HashMap raizCuadrada(String number){
    HashMap result=new HashMap();
    List<Integer> tuplas=parseNumber(number);// se procesa el numero
    Integer raiz=0;
    Integer resto=0;
    for(Integer tupla:tuplas){//se procesan las tuplas de digitos
        HashMap process=procesarRadicacion(tupla, raiz, resto);
        try{raiz=Integer.parseInt(process.get("raiz").toString());}catch(Exception ex){}
        try{resto=Integer.parseInt(process.get("resto").toString());}catch(Exception ex){}
    }
    result.put("raiz", raiz.toString());
    result.put("resto", resto.toString());
    return result;
}
```


Y ahora la forma de comprobar el funcionamiento de todo esto es mediante el siguiente código:


```java
String num="";
BufferedReader buffer = new BufferedReader(new InputStreamReader(System.in));
System.out.println("Ingrese un numero : ");
try{num = buffer.readLine();}catch(Exception ex){}

HashMap raiz=raizCuadrada(num);
System.out.println("numero: "+num);
System.out.println("raiz: "+raiz.get("raiz").toString());
System.out.println("resto: "+raiz.get("resto").toString());
```


> No olviden que el uso de este método de raíz cuadrada esta limitado por las capacidades del lenguaje de programación y por tanto fallara esta implementación si usamos un numero no soportado por la arquitectura de procesamiento de la maquina en uso para la ejecución de este programa.

