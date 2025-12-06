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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVI3KIG7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRKuNSLdlOXOH2ZOJjiVH2F0rcLFJflqUO8q9RgIfnIAiBgTV7ZaF1dEPN5ksjR4cDpqqw2TR2kJbQR9312GlWOBCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMcAku4klP6aaPOa2cKtwDb5X2oHm%2FX4ZOBzZ%2FPuNh%2BeE7QgC3eNYmOoAj%2BA6u9UW544ek2MqwPGvkwC3l2WOLpaM7BNet6KJrG1Q00Ov%2FjEr%2BmqDG3p95QpCjDtUBg4234n11K8hLG8XF3PMvklOOJd7XI0F0hfQ%2B1YHom6%2FYezTzLFtPdQYOM7AebfpajBaEcJwxFNvAp2898bbyH4FzXXh8SZXzaOhfbx6Bu1JcUjqyE%2F4gHhi6pt14BC%2F47WN4os5cPdeHkSnb4nQiCGpETwgg%2BPjTunArQ%2FxxEchq%2BFfgOvRu%2FLzcet5hBvrZfE2JR9Q3ie8bdAUOJYz6y90kI%2FrieGhgVF8bgCCQc%2FFfwRpnZr7VVhakWQalgCdd1SyNN9KHM%2BaAxzUbYFVUGGC4OQeierc2bhEyBt8hJKtvRTxvzKnkB%2BSJHiAsmBebiApWPie6HTEjKigjNqGnKoOwFOJdHVYSY29HEIursOndYvuzsLGIM1cVCOEx6E6zfml3dJKV8FSb7z%2F8NfPe%2FoMsPQ1BtFN2HlqRNxQw81PjDlfIrCDWnCRZjVS50bmB1g1sRNLRr115l54Kf32IdT5TxSAakwjeww8lkMXCto95FaBvKaa7hP5%2BjhwXANGtlz2uEXv7qiKbC3yW6IgwgJ7PyQY6pgGQZ7THEAo5JgcyRvV4RUlEEbF6lt%2BUHA3FPS1tayssGEFWzAr2m3FMbfn167H4Nus6GXF9J%2FWdOonGnw%2BrPYkKAqdB56Rz5WdyuIDUqzEGS1j1snoVDMQZP9H7ER9oEITXm4M4H2eLg1%2BAYyhYofJSijwBtUUUuqaRKwerg4Vw1KT2ellaG3qwGmh5dpdH7ajdfDj2fTHou4gz9V5V1LHrlQGY9tZ%2B&X-Amz-Signature=e3de99e2725b27440b6fbdf68df256f99f2432544f16e93b803ed87513d6b1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

