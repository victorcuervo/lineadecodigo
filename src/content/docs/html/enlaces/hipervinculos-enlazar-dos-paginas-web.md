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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PPYC5SG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7dtcCFhV3XSMKTkt1PALbAVf78ioin8%2BKTUFFnX2bZAiEA6ndAVqYd5V%2FBjdeTsoN2YHj8DbhWITDJokgHKytJV4wqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSpMHdGXO5o2zje4yrcA%2BCkE7VDOmXMA0xDMWZD6ti61Gt3lZ1ujbMp%2BmGg5e24CAAESHa8O8BFPgG9zMDdrQ0SYDE0fVNG02N2wN%2B16xrB%2F70uTRchZdSqsJaCmj%2B8OajiK3wcQWd%2FCouFPMWtwxu9FaLeydw%2FRWsCZuw4fbJRABL8hAsqix0%2BYKc1mpUX4Pk7whK5%2BkNBklFnp1KRE3jP0Zn1I6NabiLKostT7d2oyzGVoZxtYbo9E2dzRO0XCQ2ASH0mG3gaSrMt1XUSYnAg0ptzhVIl4XfZuHS5snTQNHSIcDgurhdYv7y%2FYuuwL2Kzm1kFEqblT8uxPB%2Blx20tJePT%2FgJ%2FhC97cViDb5GWOSX7T5q7Vr0SWPv7a00ryyKkdi3ZHnVtySzcVwhp8m60DEuq3C4TsuB7AYBV4nrkK%2FqxS5sdK3PTKuio6sUCGUk%2FRkSpqOiFkOEV0dfTmaTG38rx3qByhjVogbfg1iYrfrWY27dZadW2S1xxSciQp%2Bet6l%2F2ix7ETCrAUH9I%2BKDJoFbR2l2tvfAO2TWt%2Ft%2FCNNGqyoOCPnNAxZXqdkmVnTdCv5X309lzyZ9kJVH%2FxDhhAZ0GsrQ8ToYRY5dh6RZRUKoFuh4qAo3h%2BV%2F3Ik5iWf%2BxjHVp6CISTt12MOaU2ckGOqUBRMVnc6CY3QOGaU%2B6TKkzGesA8ypmkyGt4dWVlYwyoNMqiAvwkbv0dlKdnAyFgOlv1xYPnKOwOqwPQv8Y%2BREqOnQxBHpZ4dnr2X2USVe9X%2FB5jpt4ZECMyijpolC6mL%2BkB65d7quvOBv%2F1azlQyab38vi8CXHwI%2BB8GeECnfsytH3DJQ28QVPjVkYyihiTs2kIqYkQWWanG0C40QwTsSQwjf6La%2BI&X-Amz-Signature=75eeb8707e968e45316f871c3e64db8aa2b99f816caf3b8e279d9af3a03e181b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

