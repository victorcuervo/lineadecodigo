---
title: "Ejemplo BatchUpdateException"
description: "Ejemplo BatchUpdateException que muestra cómo manejar errores al insertar números repetidos en una tabla SQL."
date: 2016-10-28
updatedDate: 2026-01-09
tags: ["preparedstatement","addbatch","executebatch","insert","create","jdbc","Java Exception","exception","sqlexception","batchupdateexception","getupdatecounts","setint"]
slug: java/jdbc/ejemplo-batchupdateexception
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/ErrorBatchUpdate.java
topic: java

---

Ya hemos visto como podemos [insertar registros en una tabla mediante un BatchUpdate](http://lineadecodigo.com/java/jdbc-batch-update/). Pero cual sería un ejemplo BatchUpdateException cuando ejecutemos estas sentencias. Veamos como simularlo.


## Preparar una tabla


Lo primero que haremos será crear una tabla que permita insertar números del 0 al 9. Además sobre esta tabla crearemos un índice para que no se puedan repetir los números. De esta forma cuando intentemos insertar un número repetido generará un error, error que controlaremos mediante la BatchUpdateException. 


La tabla la creamos mediante una sentencia SQL `CREATE TABLE`.


```sql
CREATE TABLE temporal (
    numero INT
);
```


Y su respectivo índice con la sentencia SQL `CREATE UNIQUE INDEX`.


```sql
CREATE UNIQUE INDEX idx_temporal ON temporal(numero);
```


## Insertar una lista de números


Ahora vamos a realizar una inserción en batch de números. En esta lista de números habrá números repetidos para que falle la inserción y se genere la BatchUpdateException.


```java
int[] valores = {1,2,2,3,1,4,1,2};

PreparedStatement carga = con.prepareStatement("INSERT INTO temporal VALUES (?)");

for (int x=0; x<valores.length; x++) {
    carga.setInt(1, valores[x]);
    carga.addBatch();
}

carga.executeBatch();
```


## Controlar BatchUpdateException


Cuando lanzamos el método `.executeBatch()` se lanzarán todas las inserciones, cuando se llegue a los números repetidos se irá lanzando la `BatchUpdateException`, si bien, el resto de números serán insertados.


Para controlar la `BatchUpdateException` utilizamos el siguiente código:


```java
} catch (BatchUpdateException bue) {
    int[] errores = bue.getUpdateCounts();
    System.out.println("--Errores en el Batch--\n");
    
    for (int x=0; x<errores.length; x++) {
        if (errores[x] < 0) {
            System.out.print("Error insertando el valor " + valores[x] + 
                           " de la posición " + x + "\n");
        }
    }
}
```


Vemos que el método `.getUpdateCounts()` nos devuelve un array de enteros que representan cada uno de los `INSERT` que se han ejecutado. Los valores mayores de 0 representarán aquellos que se han insertado correctamente, y los que tengan un valor menor de 0 serán aquellos que hayan fallado.


Es por ello que recorriendo el array podemos listar aquellas sentencias que fallaron. Obteniendo por consola la siguiente salida:


```shell
Error insertando el valor 2 de la posición 2
Error insertando el valor 1 de la posición 4
Error insertando el valor 1 de la posición 6
Error insertando el valor 2 de la posición 7
```


Espero que este ejemplo BatchUpdateException haya servido para ver como se maneja dicha excepción.

