---
title: "Contar las vocales de un fichero en Java"
description: "Código fuente que nos sirve para contar las vocales de un fichero en Java."
date: 2013-01-15
updatedDate: 2026-01-10
tags: ["java-io","bufferedreader","file","filereader","system","garbage-collector"]
slug: java/ficheros/contar-las-vocales-de-un-fichero-en-java
author: xhrist14n
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/io/ContarVocalesFichero.java
topic: java

---

Para poder proceder a contar las vocales de un fichero en [Java](https://www.manualweb.net/java/) debemos ser capaces de leer el fichero y luego proceder a hacer el conteo de vocales. Por tanto para hacer la lectura de un archivo en [Java](https://www.manualweb.net/java/) necesitamos lo siguiente:


```java
private String Filename="";
private File file = null;
private FileReader fr = null;
private BufferedReader br = null;
private List lines = new ArrayList();
```


Como se puede ver se hará uso de un nombre de archivo, un descriptor de archivo llamado file y de clase [File](https://www.w3api.com/Java/File/exists/), luego un [FileReader](https://www.w3api.com/Java/File/exists/Reader) llamado fr, y el [BufferedReader](https://www.w3api.com/Java/BufferedReader/readLine/) denominado br. Y ademas de todo lo anterior debemos hacer uso de una lista de las lineas de texto a leer del fichero en [Java](https://www.manualweb.net/java/). Luego de tener todo esto a detalle debemos tener las funciones de apertura de archivo tanto como cerrado de archivo (util para no dejar el descriptor del archivo abierto pues consume recursos). La primera será un método para abrir el archivo. La cual instanciará el [File](https://www.w3api.com/Java/File/exists/), [FileReader](https://www.w3api.com/Java/File/exists/Reader) y [BufferedReader](https://www.w3api.com/Java/BufferedReader/readLine/).


```java
public void openFile() {
  try {
    file = new File(Filename);
    fr = new FileReader(file);
    br = new BufferedReader(fr);
  } catch (Exception ex) { }
  return;
}
```


Y otra para cerrar el archivo, la cual ejecutará el método .close del fichero y pondrá las variables a null para que estén a disposición del garbage collector que llamaremos mediante System.gc()


```java
public void closeFile(){
  try {
    if(fr!=null) fr.close();
    br = null;
    file=null;
    System.gc();//llamada a garbage collector
  } catch (Exception ex) {}
}
```


Otra cosa que necesitamos para contar las vocales de un fichero en [Java](https://www.manualweb.net/java/) es el método de lectura de archivo el cual lo implementamos con el uso del [BufferedReader](https://www.w3api.com/Java/BufferedReader/readLine/). En el método de lectura tenemos que agregar cada una de las lineas leidas a la lista de lineas. Las líneas las leemos utilizando el método [.readLine()](https://www.w3api.com/Java/BufferedReader/readLine/.readLine())


```java
//lectura de archivo
public void readFile(){
  String line="";
  try {
    if(br==null){
      openFile();
    }
    if(br!=null){
      while((line=br.readLine())!=null) {
        lines.add(line);//agregamos las lineas de texto en la lista de lineas
      }
    }
  } catch (Exception e) {
    e.printStackTrace();
  } finally {            
    closeFile();//cerrar archivo
  }
}
```


Y procedemos a la implementación de un método de conteo de vocales en strings, el cual debe recorrer los chars contenidos dentro del string para poder compararlos versus todas y cada una de las vocales.


```java
public int counterVowelsPerLine(String line){
  int counter=0;
  char [] vowels={'a','e','i','o','u','A','E','I','O','U'};//vocales a usar en la comparacion
  char [] charsLine=line.toCharArray();
  for(int i=0;i<charsLine.length;i++){
    for(int j=0;j<vowels.length;j++){
      if(charsLine[i]==vowels[j]){//comparacion
        counter++;
      }
    }            
  }
  return counter;
}
```


Lo que nos falta es solo crear una función [Java](https://www.manualweb.net/java/) que recorra las lineas de texto y proceda al conteo.


```java
public int countVowels(String filename) {
  int counter = 0;        
  try{
    setFilename(filename);
    openFile();//abrir archivo
    readFile();//leer datos
  }catch(Exception ex){}

  for(String charline:lines){
    counter+=counterVowelsPerLine(charline);//aplicamos conteo a cada una de las lineas leidas
  }
  return counter;
}
```


El modo de probar nuestro código [Java](https://www.manualweb.net/java/) es el siguiente:


```java
ContarVocalesFichero contador=new ContarVocalesFichero();
int counter=contador.countVowels("holamundo.txt");
System.out.println("El fichero tiene "+counter+" vocales");
```


Espero que os haya servido el ejemplo para contar las vocales de un fichero en [Java](https://www.manualweb.net/java/).

