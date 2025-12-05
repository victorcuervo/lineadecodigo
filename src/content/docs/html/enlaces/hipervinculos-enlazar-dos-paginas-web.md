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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466557NUR2G%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk9K5a5jWRvbeshPrzE67%2BL1UnMG76093u3t2yaTJecwIhAN4Iz14yENBPDdFyT%2BrzlIrUsmq%2F7HzjrYpbQ95f8QfFKv8DCFsQABoMNjM3NDIzMTgzODA1IgyyKuryv2eDpEJ8d7gq3AMRGJC1kyG0HDJKya6pgD8NdjFJuAaItjsunHXMTTBeUaMtBoBsa00CTPjXKgci5o%2BLhB3to%2FS%2FX1QpfsvWRVRY11pe%2B0xmPJ%2BoOzkVuzydA6JCHKy5kD735w9eqmPlA1QUtjUGU%2F%2FyDoqjiOMde1j16lVwDesbHNQKebdHXx%2BUQbhx6dx1h%2F5J8lZsH4wQFeqkVCtEHgO04ocwtLK1p1%2FDjr4SwqTN4KrBDp%2BKe5hXTU3lCmU13ckR2hfjOf%2F1p0Cdu%2BjFSjfuQ6A4UFlN2agzZ9CRWGEGondexPFKenYamx12jEnr6x11nZiu26PVcolyDm9H23srBwttsLmOxH1lnHHyqW32d%2BBEDC2wc3YrGY4TSHbg%2FMWFKjSnL0k4%2Foovt5rRd62awRfrmgHcMqPDzFwsS2ocJqqQkYEhUhep7UySpCaSYF%2FrPX9DfWU5WPaHDiCCoq7gdTTguFdgb3Ty53LudDOaPLr5WGHZc9dy9k2Zyk0XwBMc8Gl%2FumCCA%2F%2FgRp7OT0nMG4iEDyMs%2BQprobVWCCmhZUxM7lbdtxdQz8YhPMKepHEjijlCl605LLmwq%2B9bMMorjbaHfz3W3rzWUInWW6GYcy1z4a1vR%2Fw2WeaKCrvZJVZlBXJF0TCL1MrJBjqkARhDCyu9Hp7HqF9IwFP38a5rq55Cth%2FnQwjvZz03hIoLUjgaWnL33wRE72SPxOoo2brasIneao0%2FSofaIekx6Q2sBLCZaC4I%2Bh2QgCkrMNYmOI%2BetHp1t61TZ28hPc3SKh%2FPdacM31ehLDbOk16s9By7pmUxIOI5WjWp0z0DKa6tIq6kfGQXP5hKk9kbhySFxuLvwYbQrvqKSCssN0befhkGdNDr&X-Amz-Signature=04ae2b8699c9d57c0a6ef41689e10f463e0145fd41dd21e05f955f2805fe53c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

