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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XEOCN2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKyfSECuLjjruPw%2FBoku39dmCiaBqtKs59I5mye4gmRAiBIyJhuppoWXv856MYE8HwLT9KcuzTT4opXB5O7UXlT9Sr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMnr8UgWDgqBo69mqzKtwDYAaoL7Uv3Le3T3eko%2BqnRmoGoBZxhzT8kuoOYSfgFB5XhJMZ3mHvWbijUY%2B4fU9%2Fjgk1IhTEOU8uXuu1Mn8M9qhA%2FgpDxFY7lSB6997Rut0nCj8ZyDoGFI1F45xtp%2B60QPM%2FuEM2Aeorl%2BTloOhysZj3w2bXkGZ3AfK6u984cRXJRrNKNj1r24shueaRc8kuL%2F2BE2CFYNBUPaVSLxbpUumVS20l0KToE71ArBKbJU6xePB%2F%2BeSt40T2XTRYz16aZbgPgLXKsY1eOIpaH1Y1vI1tAR2C61ITX6wNMLSQD7LHDI9xagF3TeO0JvXMmwuOjLVPd1AYTlTwHDeS4%2BZCZNWO3twt%2FG4NOi58w%2FTyt8ENgJRbB%2F1lENzP0LyW2TLo081mNyr650%2FkpQxRU0STB%2FjCPLTOzu2jxnFEqR%2BBh52TeOHJv3%2B2jcyo4yTOu7N7BGSjb%2FN1SUIBxqtIcXSBzmQuVBRQ3Mf%2Fr8AqeBl7cOK9pmKiOlX%2BuhwJY4BKXQPs4nxrLg7VwwN8u39cMG7Y0URZNTM1C4Traj%2FiHeaVW5MJu2DKCQWtL3Ycc50zUEIpubbxfiRte7%2FLMgWbIK17yorEYEt%2FnjcT%2BunqN7Oe%2B3%2BnAKYfFMWjs90%2BkYgwwYzIyQY6pgFRPM8pN%2B8IzolsEXYFSV6jvgseE0tGCC4hS8NEy0qWeD4cWuJ11LEB6WJTv1SmQtHXlq4HwOjrXzqZLbvBi%2BTSArXFrVip2uRhIbc6T2%2B%2FAVBSqHq3eXZL%2FNIIY%2Fs39Ot36QssAMvDgWovreKAgQoI%2Bl1uqnNdZj5DYSfYfRSUHMT9zugj3GrveZdJng8kdM6kRQtReG%2FncT%2Bf9zaPDrqxlvoj74oT&X-Amz-Signature=603a62eef160a0e6704483bab983e26c7cf6e40fbdb39bddd9503582acaf8bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

