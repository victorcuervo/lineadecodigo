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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XLHUHGG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5lw1tv3y2MmCCmrMRSGkwBEuGe8NlSJWGQxyqTNTDUAiEAwFb8YXmrjZsOsQFHL1ANtCP0pS%2BNeTPTvzy5xmrG4G8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOT7QWSEja2KgD1uGyrcAwjrao6DarPmMoW%2FygXPfVPd9BqE%2BLvQNFFKD%2BcaBSZ58Szz2V2ogfD6IEbQeQqbjchK85DMQYQpz0JRmaO41HEmd579TCJrHyt3bpRrlb7%2FjMFWJOg1GBLBWPO%2ByR4qQ%2BQuvDWytId2diCGCG1mg0xPjstnIoVAhuOvjTZ1cHYRnbnXNQveDcJ50ATZ3NksGcbfaFQPIlgeROo2KY1v1ybYPVVGMd08v%2FivKNtbNBul8j2lXYt9eIPb0cVwQ5%2BjtkseLaFz1hDqm1xkAH0udteLz4%2FwAxHXWSNTxxUA3aSAkrK4fO0z9BQORqHxoW0hT8Lv8Ja3pRu9anJUUxUurkRK44wpZdB69lCJ3nFn8EI7nZxmXqi%2FFpMyZN7VsAsTKUYEYM2RAYnEt0nNc%2FtMHPTXL6ZGa%2FDHhofG0IF0qYi6coWqyZsoXICcq5IfXGpLgeDbrVfBqtSRUisd1ND3D9a%2Bovio6t9ileVokv%2FyAeXgCZuVtizPfPic8XO9t6D9gLNvKc9PiMkkoEOjSmDRXnOk9vEmjtrWxr9HrpV6OjbVs7Swa4nzzqPGMcZI45UEIMoycnUgS1TdpEkQHBr7bOkn1hy7Q%2FQsQvLSUZHk0k6A1FtmmrCV0biERimOMLOxyckGOqUBvAK3xJuOaSTFYBkEIAdiAVCTKa4CLt8SevJBsxG17NTEDHScfb2JENMSdUd0VKM5FmMpPLFuNkHy0s2l5UfcZKcsRmfdBvwhhOlJG8cn5COsIDJlZio8fg%2Fxaz1VDPvBThT64dTnm6NzTNU%2BEYpmVCwNjUXEDd8HtiR5hwIccLNacPlnGxEq69nuos2q3G3JecF6MpMUM9JkJfTOP0Pxk7g80tyD&X-Amz-Signature=35f7fc185e1a12266bc9d866353ea7c1317e75ae95d8cca9e497ed3482484c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

