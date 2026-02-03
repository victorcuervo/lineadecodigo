---
title: "Número PI en Java"
description: "Cómo utilizar la clase Math de la librería java.lang para poder utilizar el número PI en Java, dentro de nuestras formulas, de una forma sencilla."
date: 2007-07-15
updatedDate: 2026-01-07
tags: ["math","pi","println"]
slug: java/math/numero-pi-en-java
author: victor_cuervo
type: doc
topic: java
id: b14831fb-d406-48c2-8b6e-c557a23da61e
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/math/NumeroPI.java
---

Antes de saber cómo podemos utilizar el número PI en [Java](https://www.manualweb.net/java/) tendremos que saber qué significa este número. Y es que si preguntas a mucha gente sobre qué es el número PI, te dirán que es el 3,1416. Pero no muchos te sabrán explicar cuál es su origen o significado. En este artículo vamos a profundizar un poco en este número y veremos cómo se puede utilizar el número PI en [Java](https://www.manualweb.net/java/).


### ¿Qué es el número PI?


El número PI viene a ser una constante que refleja la relación que hay entre el perímetro de la circunferencia y la longitud de su diámetro. Algo que podemos ver de una forma más sencilla en el siguiente gráfico.


![Número PI explicado en la Wikipedia](../../../../assets/java/images/numero_pi.gif)


Múltiples proyectos computacionales han tratado de ir sacando el mayor número de decimales. Así, en 1949 un ENIAC fue capaz de obtener 2037 cifras en solo 70 horas. Posteriormente vendrían supercomputadoras de IBM, Hitachi,… que fueron obteniendo más decimales del número PI.


Si pasamos a la actualidad, en 2021 un equipo de científicos de la [Universidad de Ciencias Aplicadas de los Grisones](https://www.fhgr.ch/fachgebiete/angewandte-zukunftstechnologien/davis-zentrum/pi-challenge/) (FHGR) en Suiza [consiguió calcular 62,8 billones de decimales](https://www.nationalgeographic.com.es/ciencia/628-billones-es-nuevo-record-decimales-numero-pi_17227) del número PI. Aunque, actualmente, el récord lo tiene Google, que en 2022 fue [capaz de calcular 200 billones de decimales](https://www.elperiodico.com/es/sociedad/20220608/google-logra-record-calculo-decimales-numero-pi-13808488) del número PI.


Pero quizás, más asombrosa parece la hazaña del j[aponés Akira Haraguchi que en 2006 consiguió recitar de forma mental nada más y nada menos que 100.000 decimales](https://www.elmundo.es/elmundo/2006/10/05/ciencia/1160047374.html). Esto sí que es una proeza.


### Utilizar el número PI en Java


Cuando estés trabajando en en nuestros [programas de desarrollo en Java](https://lineadecodigo.com/categoria/java/) no vamos a necesitar tal nivel de precisión en las operaciones. Pero si bien hay que acostumbrarse a usar el número PI en [Java](https://www.manualweb.net/java/) como una constante en vez de como un valor establecido por nosotros.


Es por ello que [Java](https://www.manualweb.net/java/) nos proporciona en su clase [`Math`](https://www.w3api.com/Java/Math/) dentro del paquete [`java.lang`](https://www.w3api.com/Java/tag/java.lang/) una constante [`PI`](https://www.w3api.com/Java/Math/PI) con el valor ajustado al sistema en el que trabajemos. Para utilizarla, bastará con hacer referencia a ella, ya que la clase es estática.


```java
Math.PI;
```


Esta variable podemos utilizarla bien en un cálculo de una fórmula. Por ejemplo para calcular el área de un círculo, dónde la fórmula es PI * r²;


```java
double radio = 5.0;
double area = Math.PI * Math.pow(radio, 2);
System.out.println("El área del círculo con radio " + radio + " es: " + area);
```


O bien, simplemente, para mostrarla por pantalla mediante una clase [`System.out`](https://www.w3api.com/Java/System/out/).


```java
System.out.println(Math.PI);
```


Si queréis saber más sobre el número PI no dejéis de leer este artículo sobre el [número PI de la Wikipedia](http://es.wikipedia.org/wiki/N%C3%BAmero_%CF%80).


Esperamos que os haya quedado un poco más claro qué es el número PI y sobre todo como la clase [`Math`](https://www.w3api.com/Java/Math/) nos ayuda para poder utilizar el número PI en [Java](https://www.manualweb.net/java/) dentro de nuestros desarrollos de software.

