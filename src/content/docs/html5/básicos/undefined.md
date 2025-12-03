---
title: HTML5 doctype
description: "Explicación para saber un poco más sobre qué es el HTML5 Doctype, para qué sirve, la historia de los doctypes y que pasa si no lo usamos."
lastupdates: 2023-12-07
author: victor_cuervo
---

Una de las preguntas que me hace la gente cuando realiza desarrollo web es relativa al HTML5 doctype y los doctypes existentes. Preguntas, por ejemplo, sobre ¿cuál es el doctype en [HTML5](https://www.manualweb.net/html5/)? ¿Para qué sirve el doctype? ¿qué usos se hace el [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) sobre el doctype?


### ¿Para qué sirve el doctype?


Lo primero, antes de entrar en el detalle del [HTML5](https://www.manualweb.net/html5/) doctype es saber para qué sirve el doctype dentro de un [documento HTML](https://manualweb.net/html5/documento-html5/).


El doctype es una declaración que **se coloca al inicio de un documento** [**HTML**](https://www.manualweb.net/html/) y tiene como función principal **indicar al** [**navegador web**](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) **qué versión de** [**HTML**](https://www.manualweb.net/html/) **se está utilizando**. Esto permite que el [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) sepa cómo debe interpretar y renderizar el [código HTML](https://lineadecodigo.com/categoria/html/) que contiene el documento.


### “Modo quirks” en los navegadores


Sin esta declaración, los [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) podrían entrar en **"modo quirks"** o **modo de compatibilidad**, lo que podría causar **inconsistencias en la visualización de la página web**.


El "modo quirks" (también conocido como "modo de compatibilidad") es un modo de renderizado especial que utilizan los [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) para mantener la compatibilidad con páginas web antiguas. Cuando un [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) entra en “modo quirks”, emula el comportamiento de [navegadores web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) antiguos, específicamente aquellos anteriores al año 2000 entre los que nos encontrábamos el mítico [Internet Explorer 5](https://www.ayudaenlaweb.com/navegadores/que-es-internet-explorer/).


Este “modo quirks” afecta principalmente a:

- El modelo de caja [CSS](https://www.manualweb.net/css/) (box model)
- El manejo de dimensiones en elementos en línea
- La interpretación de ciertas [propiedades CSS](https://w3api.com/CSS/tag/propiedad-css/)
- El procesamiento de algunos [elementos HTML](https://w3api.com/HTML/tag/elemento-html/)

Por esta razón, **es crucial incluir siempre el doctype correcto** al inicio de nuestros [documentos HTML](https://manualweb.net/html5/documento-html5/) para asegurar que el [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) opere en "modo estándar" y renderice la página de manera consistente según las [especificaciones actuales de HTML](https://manualweb.net/html/historia-html-estandar/) y [CSS](https://www.manualweb.net/css/).


### De dónde venimos en la definición de doctypes


Antes de entrar a revisar cual es la definición formal del [HTML5](https://www.manualweb.net/html5/) vamos echar la vista atrás y ver de dónde venimos en la definición de doctypes. Hasta la versión de HTML5 teníamos diferentes doctypes para [definir los tipos de documentos en HTML](https://manualweb.net/html/tipos-documentos-html/). Así nos podíamos encontrar:

- **HTML 4.01 transitorio**, que permitía el uso de elementos y atributos obsoletos para mantener la compatibilidad con versiones anteriores
- **HTML 4.01 frameset**, diseñado específicamente para documentos que utilizaban marcos (frames) para dividir la ventana del navegador en múltiples secciones
- **HTML Estricto**, que exigía el cumplimiento riguroso de las [especificaciones HTML 4.01](https://manualweb.net/html/historia-html-estandar/) y eliminaba todos los elementos y atributos obsoletos

Así nos podíamos encontrar las siguientes definiciones en los documentos. Para los estrictos:


```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Strict//EN" "http://www.w3.org/TR/html4/strict.dtd">
```


Para los transitorios:


```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```


Y para aquellos que tienen frames:


```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN""http://www.w3.org/TR/html4/frameset.dtd">
```


### HTML5 Doctype


Pero al final [llegó la especificación actual que es HTML5](https://manualweb.net/html/historia-html-estandar/#html5) simplificando la especificación del [documento HTML](https://manualweb.net/html5/documento-html5/) dejando una sencilla definición en su cabecera en la que simplemente ponemos el elemento `doctype` con una exclamación delante, seguido de la palabra html. Todo ello dentro de los típicos símbolos menor y mayor de HTML que nos sirven para definir elementos.


Por lo tanto, el inicio de nuestros documentos web tendrán el html5 doctype definido de la siguiente manera:


```html
<!doctype html>
```


Si nos fijamos en las anteriores definiciones se especificaba el **DTD (Document Type Definition)**, que es un archivo que define la estructura y las reglas del [documento HTML](https://manualweb.net/html5/documento-html5/). Si bien, [HTML5](https://www.manualweb.net/html5/) ya se ha eliminado esa referencia.


### Futuro del Doctype en HTML


Ya que sabemos todo lo relativo al [HTML5](https://www.manualweb.net/html5/) doctype vamos a hablar un poco sobre su futuro. El doctype **es un elemento que seguirá siendo fundamental en las futuras versiones de HTML**. Si bien su sintaxis se ha simplificado ya tanto que no tiene pinta que vaya a cambiar en el futuro. Si bien seguirá siendo fundamental para poder indicar al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) que lo que se encuentra para poder renderizarlo es un documento [HTML](https://www.manualweb.net/html/). Los grupos de trabajo de [W3C](https://www.w3.org/) y [WHATWG](https://whatwg.org/) mantienen el compromiso de conservar esta declaración como parte esencial del [estándar HTML](https://manualweb.net/html/historia-html-estandar/).

