---
title: "Obtener la fecha en un JSP"
description: "Este artículo explica cómo obtener la fecha en un JSP utilizando la clase Calendar y formateadores de fecha."
date: 2008-01-16
updatedDate: 2026-01-08
tags: ["calendar","gettime","dateformat","println"]
slug: javaee/jsp/obtener-la-fecha-en-un-jsp
type: doc
topic: javaee
id: f1b98195-b9d1-446c-9836-14690f0b4774
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/webapp/obtener-fecha.jsp
---

Una de las cosas más frecuentes de las páginas dinámicas es que te muestren la fecha actual. Algunas incluso te muestran un saludo dependiendo del día de la semana o el mes en el que te encuentres. Todo un derroche de ingenio ;-)


En las primeras versiones el manejo de fechas pasaba exclusivamente por el uso de la clase java.util.Date, pero a partir de la versión JDK 1.1 fueron añadidas nuevas funcionalidades en otras clases de apoyo como Calendar, TimeZone, Locale y DateFormat y descargando de funcionalidad a la clase Date, si bien, sigue siendo la clase base para el uso de fechas.


Para marcar un limite entre las dos clases podríamos decir que Date representa un momento especifico del tiempo en milisegundos, mientras que Calendar nos permite obtener número enteros que especifican el dia, mes, año, hora,... de dicha fecha. Es decir, lo que eran los antiguos metodos de .getDay(), .getMonth(),....


Para llevar a buen puerto nuestro ejemplo, una página JSP que nos muestre la fecha y hora, lo primero que vamos a realizar es obtener una instancia de la clase Calendar mediante el método .getInstance(). Esto nos devolverá un calendario con los valores por defecto establecidos en nuestra maquina en cuanto a hora y formato.


Una vez que tengo la instancia del calendario me bastara con ir obteniendo los valores que me interesen mediante el método get(). Dicho método admite como parámetros una serie de constantes definidas en la clase Calendar que representar el día, mes, año,... Estas constantes son Calendar.DATE, Calendar.MONTH, Calendar.YEAR, ....


Ademas tenemos otra serie de constantes que nos permiten saber si la fecha que manejamos es un día u otro, un mes u otro. Estas constantes son Calendar.FRIDAY,Calendar.MONDAY,... para los días, Calendar.JUNE,Calendar.NOVEMBER,... para los meses,...


```java
java.util.Calendar fecha = java.util.Calendar.getInstance();
out.println(fecha.get(java.util.Calendar.DATE) + "/"
  + fecha.get(java.util.Calendar.MONTH)    + "/"
  + fecha.get(java.util.Calendar.YEAR));
```


Como hemos podido comprobar, mediante la clase Calendar, únicamente podemos mostrar los valores enteros del dia, mes y año. Si queremos mostrar las fechas en otro formato como 18-Nov-2002, 18 de noviembre de 2002,... deberemos de usar un formateador de fechas mediante la clase DateFormat.


A si que los pasos a seguir son: primero obtener una instancia del calendario, como acabamos de ver. Segundo obtener la fecha actual del calendario. Esto lo hacemos mediante el método getTime.


```java
Date fecha = calendario.getTime();
```


Una vez tenemos la fecha actual deberemos de instanciarnos el formateador. La instancia la obtendremos de la misma forma que obtuvimos la instancia del calendario, mediante un método getInstance().


```java
DateFormat formateador = DateFormat.getInstance();
```


Este método nos permite pasarle un estilo de formato. Dentro de los estilos tenemos:

- **SHORT**, totalmente numérico (18/11/02 O 9:01).
- **MEDIUM**, formato largo (18-nov-02 O 9:00:20).
- **LONG**, otro formato largo (18 de noviembre de 2002 O 9:02:12 GMT+01:00).
- **FULL**, con la especificación completa (lunes 18 de noviembre de 2002 O 09H03' GMT+01:00).

Solo nos quedará volcar toda esta información dentro de la JSP. Para ello las páginas JSP nos ofrecen el objeto out, el cual, mediante su método println, nos permite volcar información a la página.


El código sería el siguiente:


```java
out.println(formateadorFecha.format(date));
out.println(formateadorHora.format(date));
```

