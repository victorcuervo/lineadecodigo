---
title: Enviar whatsapp desde webs
description: "Cómo podemos enviar WhatsApp desde Webs utilizando un API para envío de mensajes. Añade tu enlace para enviar mensajes por WhatsApp."
lastUpdated: 2023-05-29
author: victor_cuervo
---

Uno de los mecanismos de comunicación que más se está utilizando en los últimos años es la **mensajería por WhatsApp**. Es por ello que se convierte en primordial el **poder enviar WhatsApp desde Webs** más aún cuando estas Webs están visualizando en móviles.


Enviar WhatsApp desde Webs es muy sencillo y solo tenemos que conocer dos cosas, por un lado el API de WhatsApp y por otro [cómo crear un enlace](http://lineadecodigo.com/html/hipervinculos-enlazar-dos-paginas-web/).


El API de WhatsApp lo que nos ofrece es una URL para poder enviar mensajes a un número de teléfono concreto. La URL desde la que lo podremos hacer es **https://api.whatsapp.com/send**


> Si nos parece muy grande la URL https://api.whatsapp.com/send podemos utilizar en versión reducida https://wa.me/


Esta URL recibe dos parámetros. El primero es el número al que queremos enviar el mensaje el cual se representa mediante el parámetro `phone`. El formato de este parámetro es el código del país (sin el símbolo), es decir _34 para España, el 52 para México, 57 para Colombia, 51 Perú, 54 Argentina,..._ seguido del número local al que queremos enviar el mensaje.


Por ejemplo, si se lo queremos enviara al teléfono 695685920 de España pondremos lo siguiente como URL.


```text
https://api.whatsapp.com/send?phone=34695685920
```


El siguiente parámetro que tenemos que poner es el mensaje, este parámetro es `text`. Importante es saber que el mensaje de texto tiene que estar escapado para una URL en los espacios. Es decir, que si queremos poner:


```text
Hola, ¿Qué tal estás?
```


Deberemos de escribirlo como:


```text
Hola,%20¿Qué%20tal%20%estás?
```


La URL del API de WhatsApp quedará de la siguiente forma:


```text
https://api.whatsapp.com/send?phone=34695685920&text=Hola,%20¿Qué%20tal%20%estás?
```


Puedes encontrar información sobre en envío de mensajes de WhatsApp desde enlaces desde las [FAQS de WhatsApp](https://faq.whatsapp.com/es/android/26000030/).


Ahora ya solo tendremos que crear nuestro enlace dentro de la página para poder enviar WhatsApp desde Webs.


```html
<a href="https://api.whatsapp.com/send?phone=34695685920&text=hola,%20¿qué%20tal%20estás?">Mensaje</a>
```


Ya puedes empezar a utilizarlo en tus webs. Sobre todo si eres una empresa y utilizas este canal para comunicarte con tus usuarios, te será de una gran ayuda.

