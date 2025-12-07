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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZUONRFI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFa7DjGg0VehV8QFOBxCIut4lz7hZSi1AEtL7tvjYcG3AiAoDSvx52XMwYYIH692YqmKnhXZbVIXC8uRyhJdvcJFXCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFCnN1QbudsoeW4okKtwD4tl80Sc4Id7a%2FdwiwdlohKb6ppEpr0%2FxWaNhb3oXeWJqQoXhRvRVGybzRNjUx70Tdhzq%2BMZrELWT2jpLwm%2BU6LN9FtSEwKYtuYPCcOxda5D4Tnc2l0Ztz%2F9e2bCxVrSBWPIVs2wey%2Fg2jtA09KR9rvYJIbWVInb8NRf8qkMHuruXwm0DHethRfrQ85Vt4XJ6sNKVVC2W%2BF5AmTWkeg27A96LLHHwCKnc2c1%2FVCWiNUjER8OfJdcUsCz8%2BBRNsGhqwOKaKfLQ9Yp7uEHoZUAVSrPvfTqqCwJyixzVGghMgwJldeEJ2TPbF019Q%2BBNFtyUeRjnZzc9fsaNJKkzhr%2FYnhILMCTBy0%2BGZsw%2B4FTmyof26bIV7vAEdhdaoyG1bJbK6SUI9%2BdWQqGml%2FKXdGqpig3g9OUKqTsOTgkkfoMFOTt9sPFd1JYGFyERe%2FTcJp3bfUsqm8vorGaDmQeK7pP3P83wAnAg41wfyhBl4TaOaLU9o7JsHIroHBE7pyOAkrt2VCaZuxH58pSOmdHMQlMhuiktPpJyZgLg8YLg4HAjuBurwZqYl1DFyUb%2BqtLlSncPSHqltgy0O9J4qlrbVFwtvh%2FO2bdS96wtJccRs9D07G6rqbfB33%2FF16eQClowhMjXyQY6pgHG5xqB%2BDJqkVoKZq22aCMarOYv%2FaYAjqLbhcZhR54fjepU9qz%2BhOFCH1PtJRlWaXceGJp%2B202PA%2BZA9EniAWahgiZCws8XIyqV18htqrdO%2FkhN4FajCD1L%2BuJwpx9qpdELsf%2FltAyrogW0vIr907eZKeQt4Tbvsi4XlLn279BpYh56%2FaoBVT9xmby55zkwahSD6ES5n9O6l07QBSn0wIGJK4Zh%2FuOO&X-Amz-Signature=e84e69c9c549067c76b45fd09d57b1f1cc30c048b8b936c5bf0c75f0934ec9a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

