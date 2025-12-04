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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3WDMOX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCfKRFD9Hw9T24DWi6DjCCEuq3G0CUpQATsGPr%2BolEYHQIhAI2QHdiwnIGAqdh7iZBdi84HWJ8RJuI8QdnBzx849Pa7Kv8DCDkQABoMNjM3NDIzMTgzODA1Igxp0wT5UjWUXO4vJxIq3AOcegpiUuAAC4kV4dIYECZWruv5dXT%2BkZFRZUu8nve2aDQ3%2F9CjDJdPIvScob%2F3xTBoVNZBquP%2BKgooYjVkgf7PzyAsaGlNwTOHRSLAiA4MX9vArShDCwzkHBLGH05SrrFYaiI0FCvTj25F%2FZnv07Nugxl5F8qxy71Vmgzd8v3zaAZSy039gTJTEp8EM26iIe5dZZpkb5EPt3b8159o7o5SaejKps9pidrSNlsbVnZihPCUTgtrpaaTDlqAqXY%2BGZ%2BQvpCwfRsJ2ibwrnNgS1VZCjawVEOv1JkEI187HSbzS03TENbtOIuQSkgUJeRKfL%2BbHKBUgUiADqCAUds8j%2BA7TLtAbQCOqEiwj%2Fp%2Bf3DZ8zREYthjgRS7JZ4WgMcJirbBk6aTMrfvILeLV2P2GFtkRZ57ZLWZQPRnFygmYhCGmqRNwywvvGPgIzFmHFF%2F%2BYfrRbi%2Fl7oQWxPRP221MBrYvVDC5M3tXxR1IOxfXR3vX%2BjJbSjwrwaIMERoODqGWoX7%2BTJFMM%2B8XVpwcpVYHI7lFv2fSXZxZR%2F2UX06LpSsx%2FqLfesxsBi6usUulPZ92kBTi0L193a4bH7a%2FCj9aw2HlgxeiT3VYXZatW%2Ba%2Bvf%2BidhKplHEjSBpPBwxfjCAlcPJBjqkARGtOnpqPtMPusiqvxtJuEtLNSk3hJ4s3NGXwXsxZw%2Fxqm2GGsqgv5966GvGhTLHTImcojlzG4x96CwQqjoHkHgfkGWStdmGxTE3mwoANj%2B1LoxSy%2F%2B9HuUpvtaQDtH8KLg%2FMdGFmmME1qxtP7WwGcbvj441lCqZN34I71fLPP3E3alBFVQIFbtklvJvWCM25WPMhgABWxlpi6DHRct7KnqKhvxv&X-Amz-Signature=440273883ab60a5d2a1d2f3c8fcd1fe81fca3960d6c7b5cc78ff502844786f2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

