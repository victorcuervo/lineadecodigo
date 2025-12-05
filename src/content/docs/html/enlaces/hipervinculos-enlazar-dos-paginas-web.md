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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISIEZ2U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNto9bJMBbLu35R1%2BL0ItvvS71nf7eHsLFnsXqg53K9AiAWKb1PXqVwQxtEbTiO%2FHCOeWTkCv5X0UmOvWJC9YDEXir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMFYpRNDrZkGgiaZIsKtwDJtLWh%2B23Uaapc02c7wtoH%2B8JsTfCMWgs6NXE43qfVAiR0YNpxaRxZfuh2ykr6O04cXGANyB8k6RgQFkATbljKYNRnSAIw2y9wRCr1kWxMd591op2wbiM0ftPm3DMV74W4Nc0pk0rOuJ6mYAeOSE3BX7Kc6BB48f8lxd9c92JUXzR25knt6RU%2BUcCV5XE2lrI%2FGa2wt3bsp8YDIPhxPrSrX6KWRt4vnLNUOoKznb3i5myK54N0B8Ff9JNfG%2B5LaWDjOyw8OE7Fs88i6BpC%2BDeqnYRYHCI%2F18c2ihDkXepitvZfqf5mwdBiU9Scfmmy%2FuxKNP%2BYwFNxZoV%2FFHiuRRm4IUGjRh7RNb%2B3Aw96mHK%2BtAvuvToHsz74QtOl3LBE8M7b%2FiO5GE8t4JweRd7JY0A%2BdJQpL8eb%2FSwvj69fUY3TamCII5uPUlKbtZ1NM243JIp3i5jT8xsrbBNJm%2F%2FmPjZiTewgEaXRy%2FtqTIVCth6DzWDTZXH24mvem7FRT9lKgMaLoJ3PksKrxZazTRlIWjXVKBKdznw8fxjve83m81Z8hg%2BDahrEmezIzXUkd4BF%2FZgRndI8VUK2lJc4qCjXgS9PqNCv4l4J2U6Q%2FRVxaln3P%2FyCavL7uFGay0aOUcwnYzIyQY6pgF0gzizs08%2BxwYJgqxV2IG5D2LjgVtLKkagyuEonXy5fXbhMyZv%2B1q57M7yJZt%2FSAQNX6BuNW8AMRtNDnXGi8DZ1a0BC5Lry05DleFnIO383TnMCvUVCBkfWmkQkraw4i8YNUMDN0YnXOzudhyiDWpuWN%2F8Wy%2BZtiI%2FZgu0bRpRgDjU%2BHipqbk6eTfr%2FdALAP4t43fjusAor9LoXl7wvf3FFPYuXMk%2F&X-Amz-Signature=513f62e011d2ea3bcb7c2e2960a56f0b673755dd61fc3622df1031345269aa1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

