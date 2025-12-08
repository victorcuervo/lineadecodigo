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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUCYQ5I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe5iz4%2FfFm7T5MJm0dWFSbIA1MdurhRHUBsuUpON7MwAIhAKCPnNoNJeD5IW%2F55yg0zldlr1offmUV7zqtcgEFVI2tKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNOWXJxeFRcsl6P7Yq3AM4jh6ZB1kw%2B2VZgJZ3HbLV2AAZZyq2ttDGgOOyZOnKzsIOAPknz%2F96%2Fcmz%2Fdc1w2XmdDo8akgadGp%2F%2Bguviv40wNqWVDyAVKTag7%2BLrXP8FaDKBYBEdtcAdQe7hK4K%2B3sDLJjim2DtCmtwJ8UsUA1YVlwPTJAlMKyDi37o8EN5raeh%2Bz9D1a7X7g1CArDwUnwKzzG7U7FvNE3ewStQBGRb3hKOqRzdBBbj2AzZAm03TIHMNFJoA56eUxE9bvIVoYglXqPH9NsdgHtEqI5TCZGRRl%2FyzcZs1Bx8UrriuziqDyg%2Brb7d32mgQuOPhA%2FaJ0j%2B5Lvaa0xivamx1H7L8ulNUH1PPn7hIiNvNjA2kpFUe1vOxMk%2ByuPw4E7%2BTTg5LPEXTZdJvQTXJ5dLa%2BvlHxqrU07cFp%2BM5Vuf3b1Jx5CZ%2F%2FtVPx42VOJq%2BmlcvwPFwDQKY0KTRIJVFT3xVv3Ikpna3rwAZtPZK%2FvpWJv%2F4yTQvxkESDGAA2WqdR5Hir81Lwd1uR2f20vxCc4j9OZYmZIg1a3q%2FmhL7Ve4UbR%2FNoVVfwMkmCaG9lp9YrAT79SluL%2BoErSYc3iVboH14IQ7hDuX8fwacSeWSFCByGexnHqy1IXo0z9BXtI%2BnwtwIzChldnJBjqkAb5qzxGDWx3mye3KJ2q04c2B07A1lZd3qDew4orRmY1eXSAMHZT25fJfwcEN2H9ZnBSMGSApjXLtr7WTkv%2BYcRV842nTptRSKlUWPh32SEFLYFPoFGhdRMViuaDzU7ENEcWyY1d3vWdrDrZZZu3YXrpGuMjtE7vVTiQ9p84hagfcV2haKyp9XMdH4SmmDoEfTpGxvdWZhqW5rZgZsjOKUdPCVfur&X-Amz-Signature=9ed83755c0c6ca051a928c9687aab621524802004467581b38225c3fa1a3b229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

