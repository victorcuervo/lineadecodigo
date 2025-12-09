---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPZFA24O%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T201104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFuQr4oXvEHou12LKAv6KB8kqzYL4JKbKSwVchH7s8OwIhAJMmywM7WvQFvr3ptZeo1FJJjudKhk1TuQ6K08D12LP%2BKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0DOy68XdHLvGqsWsq3APfgXWn21uQ71I4cpVOtj%2FWtal%2B0IY1KAZd%2BD5uFohh%2F4L3%2BpglRrvmnw8XdzI6wTPS42gfIXTNAfZA1%2FxvRDcQG%2Fm%2Bzg%2FXI5fdD5lGoLYreg8vJJTzlzo8Zdzbxcz6wkpU3gMRr1n6vUo5wy%2B1MR5rk%2B55zkAbejUtuCwJID%2B0kmYXRo9zLDc3frVqwPe5x8ieFEMHB29YSpyFxaG5n6GhRD%2FZ321xAk5ysFGG7fLYG66hGfctwTXnDEF5vWQZF7jUcR6qAFP8FqmWK6IspHiMoJojllytOwV7aeiHxsLwdd5kaMiUUkv6hSOgvlCf9ylMOP9wQdwSwa2OZW8IC1QDGpncV53b4vxNGBHi9i5BtbN76DYzwspY0BG8dSMziLzo2db44QXWoakX%2FZ2ZEMqRVowG1%2F9l%2BmPIE%2B%2BddOu4YtIiOVGPfHalsg8rRMya8Nv%2F7x%2BX6aoUahzlUg7mto5%2FOkz%2FSBLf2V%2BoVgve9MDM9CcM0D7m06EyjNgxRumdxC2PaMEfjTLPX0HU4eV53QUIkx8s07qjfhlHmJwVootXLnSPJ1C7yFXfutigONBKvjGqyhTXy6rVej0uNS5MIz%2BbvVDjAFBUZKTj3oxTtKCjiiGa7dGj343PhqJekzCa%2FuHJBjqkAfg%2BfsG29y9Lw8unFClsNQb9c2b%2BE%2BX7LQ1sg1eRULO64tHH50517JzJlyUGRyHyGt3N1Lr5FbZMvEt%2B8kLi%2FsGbJGNKYlQIHJKguOQRrjJgDEr1564%2FqIVo6N5qmgrGrpV4HoAqPoRxADDO1tL43LmEmhGqvY046Py5hFPYUjSIPNN2rgM3Rdy%2Bimkq0GT7LGVQvfc6PYDPKSrgFG9d3GR8k661&X-Amz-Signature=bf7b8bbfedb98b7e3d7e894dc9e35f1354f6ff228e23ff9d621bb91d9d58c098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

