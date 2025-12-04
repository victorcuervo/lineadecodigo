---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIRAK2HW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCERzvVpLBoFYpP30%2F%2F%2FMpWDX41iYYL1bOfjEaJS8qK6wIgTnhvaxeC2dMvUvxcMEzDk8p%2FnpbPdwb4gWJsalqrxIsq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDJNQ2KkdIHAeyn4qJSrcA8oUdI1F%2BBz2sTH9BKXUACfelj9u2uqrW3ah%2BdXcbcajbb26PbH04LbXbLkRCvJ6jOg%2FnR6%2Bx0BdQNt%2FpYHRuV0c4tcphOYHDzBbK5GqLAkanB2rBhJOEWm5sszcMvKMpzOWr50lvHQ2O%2BjXVgk8giezcmtAlA%2BKDxDKcGs9TUWseyP7esAz3CuB0hkbtQwiQkuaOJ8ehUytiHkYKsH2yWV5Z2Pij5wAlDEgVzfzAqoYviO16pW%2F7IDFrOcavGUYh%2BMCEUHOW7yjyv1BXPDYxHoyPneoLgtgpbqebKvfZFiIlDaHUj2KbVG%2F4B9U%2BQeHSVttWE%2F9KXAnmwJa1XsHc9O%2BH7sOZDjWk9svJG77KU%2Bdm0PAKVap%2BXo3cuGT0%2F%2FC448WXqXIkU%2BydXcitEAnynUjoRK1eJaKbi1Kc7ikajWBEHQmrkgOJXdWwx9S19oLMyfVNx4RESNPRfNorSmWdXcyVOKvfOMy23WpJR4qVYEtsnK0UPe%2FSfTqiagV7Q6s%2FfOgM7uY5rIRIqaJqS2t8Uk%2FXPWJv17JROyIQU7CN3rSgwPzK5BHIbkXnaqFrIBIS2%2FHDEByCIoPybqn62MjsWPSveEsxrAXHs76eKwux7eLpi5Gwqv3oR30FxdmMJS1w8kGOqUBr9y0%2FJoJUGccYiewQRbqsCqyqKn905kL5ydE%2FvD%2FgzTv1H%2FOiFV3TrPb6na9ykl4VzqXJvozcVQv0zg5d5wgt9dWC%2BhBka%2FLLYvUZw7W7AHRTWFjWDWMxyaF6YnuQlhUTPloRrh2ePnIbF3f4idQH8t%2BzIJmOmy13cJ4PoYHR2OYAqrgWx%2Fu3Vv%2BMojbYw90XE%2FpTOLyY%2BmKTprT%2Bew77%2FHKBX0z&X-Amz-Signature=9b5959cc33155a0d3d93665585a70d8d533b71f05a3e18a5412f53560f6e1f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

