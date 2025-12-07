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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVKOKNFX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRBHprglf5pGkR9TqOUrTRSKcqzgbOIWGL0ounakcUCAiAy%2F8bJAXtH0t4VXiLnNR%2BU3RtMqRRp2SSqZYMdSilrKSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkh93s4oKe5AAH6KhKtwDT%2F2KVrdIuTJWAg3yrJywrmcsYItN9eySoCTBF%2FcBT1tC%2FC3PBq9IITfVbYKxn%2BeV9C%2FWjD7iDRM6z6TdBIOkSHdTIU8WFimt9SA11%2FqbHgGR5i8XPLriZND4iLPZN8fLXyb76nCpmctYsCzBeb%2F9Oa3xFkWi1GwJR9n5ojbI2AogRt5nCwBug4AHlXB9aM9SH7D4x2g8iaQ3s60hphxF8fB6pwn0FxxNCKnyahbjNY7xiSYbX1kNPuwrb8RSwuxqKiX5L0yQTQ5efwHt1ZKm1D8C4tbJSHvtiyaJGbQY24PeoVOi%2FSC4eA%2Bn7TTpx%2BCtxkRp6dEULlMRFZ6s4pTe27IUBkunLt%2FnQh0P%2BjNReXTnf53X5y1GF7T3yq3OtdoTQKNLI3Gv9Vcdr%2BK8I2XGEmk5U%2Fr0VxUoGxSSdtJin9ddKPG9lADP7OTMO02sV2rzpstRwOjtViVwe7bfFCL5f%2Be4LLqm57D7lKsidcwYMoMnEslvzXrmEjgWcJn%2B83JxDnXHvaduiu%2BW6YLL0%2FMSySwOqc%2Fbq2gAotZ6gJWyjtYg66RWyT8YlK8dMxEBfN4eZ%2BRelbt8tl4DjdQoYHnJVSWlO6b%2B3UvliaVjdrWFHP45fu%2BluBgzsfx3mT8w6sfXyQY6pgENajucXbSyt3FMJ0AKfS%2FE1XaOeyVdkEkclng8eIVL7oUuQr4TtXPu1yWWM3KYIwUDP6QksD5MgeOiVtEDq1BFophsenAWh87Dj%2BqMTU2lxRXan8Fj%2F4wKajw4OCQ3DbZCQoPbEvAfij8MhORxCyzrncJ4ClM24som6lkH0lDbFVF8bHfQJJh6GRY%2FCJOt%2BTP%2FSMt%2FsiLhvlJ6SI8mPowQ7o55svg5&X-Amz-Signature=56f91692537a18a3ad4003d3bbb7b60d43513cf39857c6700bc7c4806feca9d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

