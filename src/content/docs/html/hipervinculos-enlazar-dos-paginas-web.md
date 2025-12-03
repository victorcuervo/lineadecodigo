---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVCO5RIY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBSBF6Ob%2FkigzUUsECEqYvfSpljXqqPZaz00oc9ICl8IAiEAz5PpzaXEhAN52MaNyqjv4B2ldzd2PNY8TMWcppOmUPcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKsDZG%2Fjf%2F9EtL40kircA%2BqEcwPa7jPfL%2BJJjFE%2BsGqDmLvQhrGNSbzNBZGYHEAYOLz7hyoFwYn2qqxL6pq50Uu1cQimjXdiOGLShA2KOXzlMxEfjYuXGZ8iMrJhDmaNguNXbmCDUEo7Bi9BuYBGYP61cJUUSX0a5HAlV0zhh9MMe48mQJCPaknhMm21h8eRpPFfTkW3aUTKQ%2FqglRyuON34y5x82vy9lx2fSvQ6nu2PFzskTp7oEwdm8O4AW6tru5D3irhtVW2gznFXdsdwhwqbrvHg55bEDjPep430YhDirdnNQH%2FlJnAILBZmaH88ZMmfCz481Cg1%2Bg87ZlPm8HPP9VKykmvpN7jihMu1O2Vas7BUBhlqHoOq7Lzs6boKYVnpM3cTyEVOCcJZfO3If2fNNmcNROHMbU%2Fv1zq73i%2BBFmC12ORqEzFH6%2FoHwePhvsmyzq5XVwkKhQkaeZ6Cvv8ha15qAlPC%2BV5eY8%2BhXFxWvCKTw0N872HoqlwoHUgx%2FavkPGe4sHj2zvkggZQeNzCf75Xb4a%2F8TRPACWutAvoAWmv2y3U69XPx1kWScBZLfRa%2BNfiZ5N%2BQPmHpCfRqAxbwNVhbklILrX6v8R67vXlUPMrebt8IhdZs8lUEXK7xvS7E84DNK%2B9zuDoTMOi9wskGOqUBT1qvDNs3AQFpPaetMLJvQAFxxnxHTX8Fh6ei%2F3gqOSEY3u0JA8TUjAcA9T4wvTk%2FSXQhI7goOzs8IY6vxqK%2BeHKjXDBBfPHX%2Fk4s%2FxhdW3R5Z3MlfN1Fi9sppo9QCSi2ibzYCncVRzEaB1uk4flZDCkw9o39zEWd5IZWw4AJOQJ9thMTzLS78%2FI7oyQWXE0auAEiAS4qdlJrRl6deTLQfh5hNd%2B1&X-Amz-Signature=8d70daeec4e1c2258165e5b338e9d7bf939efe05ccd71a84dd9491c65b0c4be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

