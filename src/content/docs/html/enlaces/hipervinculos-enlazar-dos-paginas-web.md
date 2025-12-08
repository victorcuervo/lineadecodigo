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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYW63374%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Y1P84l1t2MUjUMX%2BDUCkSq%2FRsHXde%2FE6QC%2BktZtOSAIhAMi%2FGNlZLiWysA2X1XIQpjaMupvlxdhFZ85gkLAWppp2KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7o2Re1I02N9uVSN8q3APA%2FZdd2TB4ilhHu9DwpjKXmmpWfMZEYG%2F4KJMA%2FWIF6oyqJZutuAeE%2BMUHcct6vpvr8TeXfWh7WjMf7%2Bijmo0%2FOgxYZBNmE%2BDwqMYiIs8mCRRUqYclXbgGWfmessVOUll6NCn%2FWPULCpZBeiqWLRUm7wwHWBWwFesmoOIREd5Y6LFC8jtD%2Ft67RaKes8R%2FbW8bBF3nxYZcUUjJAFhtUGYoQ1dtNZFReL70C1elcALW3M7KS8Dim3hwtzBtl4dJ09gcJEb2ZnS1WHTDe5LeybUMXTdrBuzOBZgUaXbCJ0zSiR1W6nbK1UTdUtOepUnZv6oTsX0cY1b6R8URoAxaYdGJwrcnyfzqeI54%2FEDYpCs1o4B3UdtztJLIQLy1nm8M1oy5ApbSXFTJu4FCn6U0bWwC%2FSSEyWn6qA3ycvg0L%2FHTzP6FsAN4QZ1CfaCerzpnEpqc6j8ESNWrXazyLpDoy2WvjkDUpSpeOsNudQCHvBQ5iNAmkHLWxUIqoRAbCjK5tosv5AFdfWQv%2BNU3KDygN1BU17ifYcpjFnHJsWZvnD%2Fn7MzNIgiSqo6F%2Fj1LysuIGKXdro4%2Fy0QXqCTnjwCo2w25Nq8JhoSvNz5%2Bfyu6BMlj36bdECsPwnBhOZl8DjCwgN3JBjqkAfQfZmJC6sV2t8MRs9r1wvlU8eUpkwGUV4qdM1%2F2azY3%2F8OkXQ%2Bm07tyLmBFUDQxAKrz0Vo5WKblckuiV99TEAoOFUzrsMGos5YNrh2cc55YOkHvnNZhPUKq2i3UooC82vSTu6xq%2F7IlKiZVGX4EBJtN9m1xPw8BVjEoa1kTBamMo%2BBRqmHEskPPwEfR%2FI4hM8gyxbH6N6vREjF%2F2t%2FKVSqSiyk3&X-Amz-Signature=cdaeeaad327d3353fb5b3df68e36e2bf91f5656efbd90c52ac6c405d1d3f1b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

