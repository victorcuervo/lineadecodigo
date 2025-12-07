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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IOE76NE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJsnoAtQKu5lq6GpWchjd2WiKgZX35SzUr9YzxwlwWWAiAfOAvCgglN%2BJpVESLdCSjVh%2F20BH4iTdMvgcx4623hLSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBjaUn%2FAklIP3R8fzKtwD0bQyx0yrgZRPeHmXnlbe7NwyuiY23zunnFOz0IvKWSxEbMlOrPJdK0ZVxZ7jvKHCQhicLqX7qKS92OVo6AtFa4v3sZD1R9TRec6iVwoYsu70F7IoT4fMSBrAyRIZ%2FdCRZpmMwiyphpl%2BdlLkqvd%2FDLKS1Hz5Ls3szAs4pDJMgTx1RWrBRkX1NxAa%2BKf3E1fuIGNMmylxvzMfGFQUiJiAMy738F%2FuomYOQHCnwqcoqq7H7mxZfquYF3eHyn%2Fjp2wT0N7qPI8Sp9uKPImJHNY%2BPmJt0POe5f8P%2FjsepVqDaeBQ6Yn0uLdxtIBx0H%2F4ALlbZTrUD2NPbiUwcfGR6yR%2FHwZphkESSiim1iwZJQgSpFvFn8%2F3RLn1WHZo0G%2FizEMDpGtJd4UPskoTk6Bv3Tzsgn8TQRTHibEeOpQx4NNflqbRY2a%2FMOcu8EEU8A3b8L3NJ1c42cfq1cv8yto0AyB8S6W1g10YGutCM%2FWY4DxF4hbhwA1DvxF9jiyJ3D%2FMwhcP1ajOU72gF46umgHrRfL2REYQd4UIEgq5n45xrW5sm8OfzbSx8PtYTFFtmhljW0KofSQIy86jZEOKv8F%2BLAogijOnv1uHRpfHIEjd9Wws9JrKj%2BFosT79%2BuEuFWQw%2FcbXyQY6pgEnioQxmqZCFOzR4wwtJg2FHQdN%2FwG1f3kwHH%2BiSQ9qCBWSUFUhHpUlinQ0rXBltI4hVE9%2FhMdixBCzXfdvRT%2FMBleZ4CndAdHhuaFl11cZzR3QG2q0LH24zU7mJ9UXiCHqb0vDcS%2BxwbbO5CSz2lbxlHupLFvWJ%2B8%2BZ%2BOcXxhi6vAKj817f6tg%2FsUvQgTxsWY3WFT7lo6RJ8DymkZLxQQzX%2Bf10SbM&X-Amz-Signature=ea0312dac7c95829af98ef3bc97474d8bd98dcdfff2afc7f02f072e3a8881420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

