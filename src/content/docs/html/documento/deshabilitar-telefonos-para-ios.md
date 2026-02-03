---
title: "Deshabilitar teléfonos para iOS"
description: "Uso de la meta-tag \"format-detection\" para poder deshabilitar teléfonos para iOS y que los dispositivos Apple no conviertan el texto en enlaces a teléfonos."
date: 2019-01-20
updatedDate: 2026-01-21
tags: ["meta","format-detection"]
slug: html/documento/deshabilitar-telefonos-para-ios
author: victor_cuervo
type: doc
id: 1725ebce-0e5d-4f34-8310-2d850a628369
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/enlaces/deshabilitar-telefono-ios.html
---

Una de las características del sistema operativo iOS para los dispositivos móviles (iPhone e iPad) es que tienen la capacidad de convertir cualquier texto que tenga formato de teléfono es un [enlace para poder realizar una llamada de teléfono](http://lineadecodigo.com/html/enlaces-a-telefonos/). De esta manera facilita la usabilidad del usuario y la integración de las navegaciones con el dispositivo.


Pero, ¿podemos deshabilitar teléfonos para iOS? Es decir, que por mucho que el navegador identifique que es un teléfono, no mostrar este como enlace a un teléfono. Ahora veremos cómo hacerlo con el [lenguaje HTML](http://www.manualweb.net/html/).


## El problema: detección automática de teléfonos


Lo primero es ver el código que ponemos en nuestra página:


```html
<p>Puede llamarnos al 91 123 45 67</p>
<p>Nuestro teléfono es +34 91 123 45 67</p>
<p>Contacta con nosotros: 911234567</p>
```


Vemos que la estructura son simples frases de texto con números de teléfono separadas por párrafos mediante un elemento `p`. Ya sea un número separado por espacios, si separamos el prefijo internacional o si lo ponemos todo junto, el sistema operativo iOS los detecta todos.


Pues bien, si lo visualizamos en un Safari dentro de un iPhone o iOS veremos que iOS convierte automáticamente estos números en enlaces clicables.


## La solución: meta-tag format-detection


Si no queremos que se visualice de esta forma podemos pasar a deshabilitar teléfonos para iOS. Para ello necesitamos gestionar una meta-tag mediante el elemento `meta`.


El valor de la `meta` será **"format-detection"** y su valor será **"telephone=no"**. El código que tenemos que añadir en la cabecera será el siguiente:


```html
<head>
  <meta name="format-detection" content="telephone=no">
</head>
```


## Compatibilidad con otros navegadores


De momento parece que otros navegadores no tienen implantada esta funcionalidad y por lo tanto esta meta-tag no es necesaria si estamos trabajando con otros navegadores, o, al menos, no de momento.


Ya sabes de qué sencilla forma puedes deshabilitar teléfonos para iOS. Y si quieres más información al respecto puedes consultar la [documentación de Apple sobre enlaces a teléfonos](https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/PhoneLinks/PhoneLinks.html).

