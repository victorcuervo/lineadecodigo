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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6U3O6R5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOUcvwr2v9uvhw3eZO2HNVP7PwMH7i9FcwJy3Sx%2Fqu9AiEArWJeN1%2Ff3SReXWe6WWOPA230kqLCDEhrv%2FEYTu%2FWRyQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNJ8YIDdlOnr0Jv5yrcA1PsWbJpjKUPB2RC6XzBfy91fz8lA%2FZ2l%2Ffknwgzs9JMUdfBVGRQsvphDxxjUQ9%2Bkt4iUXK5QX1VaMjSMATjXNJ5Bko9fCr4u6t5oVm0QEqWJCE6zbCrAjS0C76Mw4d8%2BmP4f%2Fzxkly1sEzNHMLmYQlFfjrwbaFkvdi9unRsBVdKrMT49MmN%2BHtNg3GvXWFFFFx%2BjIjELwwkerbrsVGCPf7IJggXFTNpkoSkuaRCk3%2Bt6S1cbA43BYhqntMuMF7w1MP0XAo6IiYxMVeX%2BTynQZ5lYv3UXoCMqZJdXv9ge%2B96t%2FjHjORaFtXwoPz9Igfnd6udfIfrlRWTTTYLp53H9YIqlouDyKdGR0idkB%2Bq1SfcG2TXTxL1HbpIiY6NmEuid%2BiJZEwd7UV78IltsG2cB5oQGXaEZQUZMXexsq3dLLke7mpHpsPHo1bbp1RT87rafRvn%2FrlX81Zn8Sjr%2FbmoF%2FwTVMb2h1jXbuLlEKeCYpdXM720oD%2FFW4eOIN7bZET1A%2Balf1C%2FK3QFGdggWyEMw%2FGakIaMcz%2FTy%2B7aKwpCX0NElD8WrTY3wpFG6BiSknlF7JtD3bUZovsakIDBlAhtRNNdM3exmjPB6JpKrURxgDqukHliN52HS2G%2F9ZzLMKmQ28kGOqUBuPsI%2BhB9QFh1emFlgtMHderHrLpYDS9x2CACGv8z8rz%2BcIJAqw%2FtvJZm3kWUW2PWqydqDtvInx5iAdVmTFFW7AoFHl6SLsL0cb%2F4WJgXKyF5RybDuaLdTWQtjg8XZKWOvpIFOhFxDp3sYMOtQ%2Fhou6SwpQaagG5on53n4VBAeBAlwKvNOUzWdAUjwrtR%2FglzrknYvd2gedvZKXqV3ncGf0I%2FafiZ&X-Amz-Signature=ca709e5c5090b51bc4325a0e9e8906bc58d6eaacbe03ee7af02b721bf3fde833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

