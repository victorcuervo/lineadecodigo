---
title: "Contar palabras en Java"
description: "Uso de la clase StringTokenizer para contar palabras en Java."
lastUpdated: 2025-12-19
slug: java/contar-palabras-en-java
author: Víctor Cuervo
---

La idea del ejemplo es ver como podemos contar las palabras de un texto en [Java](https://www.manualweb.net/java/). Podríamos hacerlo de diferentes formas, pero vamos a utilizar [la clase StringTokenizer](https://www.w3api.com/Java/StringTokenizer/) para solucionar nuestro problema. Lo primero que tenemos que hacer es definir una frase dentro de una cadena de texto:


```text
String sTexto = "En un lugar de la mancha";
```


[La clase StringTokenizer](https://www.w3api.com/Java/StringTokenizer/) trocea una cadena a partir de un deliminator dado. En el caso de que no le indiquemos el indicador a usar utilizará el espacio en blanco. Veamos como se utilizaría con la frase anterior:


```text
StringTokenizer st = new StringTokenizer(sTexto);
```


Una vez creado el [StringTokenizer](https://www.w3api.com/Java/StringTokenizer/) (es como un Enumerado) podremos recorrerle para ver en cuantas palabras ha troceado nuestro texto o bien invocar al [método .countTokens()](https://www.w3api.com/Java/StringTokenizer/.countTokens()) que devuelve el número de elementos que contiene el [StringTokenizer](https://www.w3api.com/Java/StringTokenizer/). Y simplemente nos quedará volcarlo por pantalla:


```text
System.out.println (st.countTokens());
```

