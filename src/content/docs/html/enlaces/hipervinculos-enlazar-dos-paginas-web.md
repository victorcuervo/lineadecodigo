---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDBFS3C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjU54eiKqpfE9st%2BBY31RBn7pW1JElnq%2BoiSEJyk6eIgIgVIu4JtIQDRALWr54Qt%2FaGkHiTXBB40DktBVSXIpYi4Aq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLibG7Pa7Qi0SP2lkSrcA8G%2Bxylj35lOtqeqF%2FsNOhL2ZazCucnqqL%2FPevVT6FBPGPAh39RizUZwIvA4nrYg49NtUcEwEZKxjZ2%2FPyR8OC8KfhDUvUgxGldiye2YL3r%2FUl5aRcd9MBZYon0AaGxAoVIbVj0RwqpZ5SRjGja3agbGVwkGfB%2BSI9dNdfy30VJ7yOSw0xiRhJvokGsjhFzJdu7C61qNCsss2xcHWMomDEu6szGM%2BHIRJROkp6Sn2cl%2FK%2BMH5H8Kc0Nv4dX4dCHsd9Q5LOzZTRiUfMr4SG1iaTSLEN%2BgAfMmn9Hirg3xNnwcKi8q%2BQeedk9zgJoQ2JaIeBp%2BZgHrDBlrOzELUz1nSP5xhkrR9ripQwgzD6y4XLDOc61L636GUCxj82Lm9XhCYeQSgLWLw1QNTONoK6alW1OW1%2F7RCnPE%2FAo5cqlBAt6ujtQkQQeqUYVmcNuuKvqt7%2FNaj0l%2B4GevfEUBV6%2BHVlaK3LRZjMig%2FMD%2BhKOUgcgC%2FK2KrZshF5zJvIdMTtbyDIbJcCBwmapCV7sOK%2FxeM7OP4DntNpt%2BRJQqTB%2BHSbIzByslM7X0Ie990tZjNOS9%2BJ2LF97IyxScRE%2FxV6%2BbfXb2W73hSL4kbZTriPNzk%2Fs7mhlw3qlBOXv1zuElMJvK0ckGOqUBhjSB5nlPLNgOw%2BDAbkVN1YU9CIy5lbi0rauDTThXnxehyGuMg4lT1Zb7gFWxqsfcG%2BRjhJLf5dUNj6c8%2FRjO3eFNATQD1Wxs93UlDlEqD9AJmqw6PBg%2B0z9mjgFKH%2FwDHLkNdMTPDLawPAYqQCaUs%2FF5eXLjlrIqD79JJAc%2FroPrNZPsfqVAVMQ12uQXY54MdRNKWzp5hBXjDMZ4okZR9tU7M2F9&X-Amz-Signature=27b5658a48ebcd83eda491d77f55e250cfa5c4fdb0429c7e01a1e85125e3cfa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

