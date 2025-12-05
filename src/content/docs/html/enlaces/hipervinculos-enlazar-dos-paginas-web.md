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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GCI6YT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSnOxEZmLTCRpSjnrgxeL%2F901jZYwixYefBh57MvTLNwIgbHKjxdhSuj2qAo0LV4Z9HSG4Mbls%2BFwuZ68wLo%2BzUqUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDN5OU8ti0Vzyi%2BUEvCrcA2LUdaHoZMWfLLe6dOl5esXmKaD9pvI88GwMOCCaZytClBdVmLdftTrskwnBiF6aX8K8bwbhrhKi5gCxAkUJMhktyFoGpXkXasqOz2Gj5RsZQSCWOp2Ew0DUbu0uVLKFYh%2BravMIvXn%2Fw7MInOSr3SHPwiTd13p5k7j5%2BLJElkUHoic7Dcw6h8ilPbLn43HnmxJcBkWU09RNE3oXuKikYbQG0XjueJfm06uOIDpU3oYIqjtzFfxtwtaYOFhRIKQdhJrHqRz%2BNCzltG7djfx%2FIrXFRBmVZCD4oiiTMrCvJsxN3x5nV1VwKr0RRdXHemlyM%2F8bQkFFde2sU85%2Bb5TOe38P8xlFum%2BYqwNwrQm9VtMpvhfV9AvYCDG9Iynl2ArNE8JAyMRQA5bpAd4egqKrkpFd8fulQnvXhzl4nr9Cy8tqMk6lcCxQ9yl5FgTuYAsH%2BGqtB6gyp9Yuqday1Z1gT9NV15HztvjMXoADfmBMZ4ql431Ygh1l6eGa%2FfxZv6ojeFK56wmAKfXIsr2FqEV95V94wJLy9oN4aC%2FIwAYvwex8XnEtSzA6XQCz8CJ38gvCu1FiAsjgfS1fHpzGuTvTdr4koMtj3TcwXYXtk8QWFlpwQdz3%2FWHFPFvJLEQrMKbHyskGOqUB1apGDM%2Fv9fNdvjkFZDrSvr%2F539dU%2BEteDxAQOY98jOxXnPycMDGm30nhNduEmMT0QY8q45QzDvWDsaU%2FNi0tbomVNAgF%2BecIlfRVy2JXV6Gwtl7IM3Uc3ONM%2BA2n5MgzjKMX3uUn%2FJy%2BdcGKr7aw5frUNgrg%2BFxkl7nX0G4qQitbLAikaKENhqFHPYYrxDz1ZLP%2Bivc3H3AO2yk2Ebg3%2B7k7aTcB&X-Amz-Signature=0393fb86726b412c83a02421716da2fdd85788b7654c0b4e3eeef17dc4e2dc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

