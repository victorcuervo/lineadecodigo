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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBEZMDD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FBvGblYd5OUjU%2FVQtVhKS%2BAoNdh1sN%2BeIgJQTrwbuUAiEAovD%2BRnCqCF0r%2Bw%2Bz7ZW8IJvxw8evqE8CbwaUlCER6B0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuWmVwtO5HLxgcVQyrcA42TbFT%2Fhu6idOHuVOT6hSvriwyh9kSywUUqnguD0UtUHE061W1ZkG2t0%2FXZnyNxMLpOnfT47nwTvaSQmIPlhIR%2F1J0%2BtVVAndQ1xaD3Me4rdaFQ2rtWiOlGuBn2mNY1Oi%2BxPRAuf%2BgWrV9k2Ctw2c24Ep6PSLXPn1Yb7ct5tr9I%2Bn0Bsv259sMYjsBB14UdtDfTn98fLX4TcREW99YY3%2FcYHc2zXtHdh%2FJwxJgsVFBkF9ypQftHpqFsJK2%2BgCMN3L1uIbuX%2FoQ9Yfyu7ntUzozwL5o%2FbBaMQsnz3qNEOfX%2BzuHMkYXgcxzQEtWdJBvr4OEcUy24YqDv8zWtGbjuZPS5BXKTBZ9xpNqdJ%2Bhk8sMZVLvgwh3GsGZuKmLbKyVF%2FVXPe9sDvyHoeZLnoCPvfxy4w5Hpdx%2Fo%2BiuF2beLWa7mbubdsJuFOTNwo4zQyU%2BP41OCOBCKqiAb5ctvitL7hIANuqxxx8Gox%2BJg0Gn8XpOBagSFQ7fiqiKTTJFnmsH0BPs93lOyuAGHjY7SGBZIR4x7VXN78hR0ucYFkWgiMtyEInQAB34uts7m9Kbzcy19rQsEBwJHV2haIl1KXUlqUOTBbU4o6EhNQyYfe%2BkkDpMGAHJ1iHXbzt3lgfN0MIb90skGOqUBXqUI5cMtKIfXPJ2fW4eZb9G%2FTnz%2FRb4FXE5LCkgXF0bS4Xa5o4mr%2FMKeb4t4OrsAmTybLiiZUeSqzn3YF%2Blok%2FQ6IZv2eU%2FxiZ6wF%2BoKNTyFZwAwSh1qazVnCffMlsW3%2B5sXbYfT6VizOQ9TGBvjslUCR6zbkrnWCnm%2B7rFqRrcGRaeDrvoayhKldsCAHgtv7SVplctYo5axNF9invwXAsi53C5d&X-Amz-Signature=3def7f0a1b0ffce144ed96ddb79115e351bc9bdb5102088dd9e4429091133445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

