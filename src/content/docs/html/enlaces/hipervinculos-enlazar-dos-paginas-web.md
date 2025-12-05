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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T3UJT2P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdRYstVMw61%2Bs8xyEhu%2BFDlBZLQBRJWd77%2BMMMeaP15AiBo6XScTugIl8V%2Fd9A8icUguVBWmopuaYjQOZJ2ADSPECr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMjgtCutIRCCxSpw%2FFKtwDuUtuM%2B3MeWHTOjxLGfKnnDp9SArMTQX0TWLA5FWdoR0fUK4e980oEK5eOlWNTMEUXQi2ZSoK7flfkKFbqYSBbE8ET6Qhep%2FwE1PFJPVrescr1pXLANnMyMp93ko%2B6o5e2K8%2BZ7glmVldtSoyG7yziW3TehQ5h2t%2BiuoNYxJP6L%2FDZem8jrSQUmpXIjjIs%2Badv%2BgHdufRK8UUIHGMspiViBwN9TWhQ8c6xpm0c%2FOQ47O4y0%2FSGSNz6PiCpFlnl0TtIVKONcSgXlOUNzNiAUrGBgnbrBdKgM87BOzEc2jYVoruTsvULC2cg0R%2F%2BSgwkKNgROr%2FtljjIwvn7pGoCjLit1ziQG%2BxHX1RaK6irXuHop66Y%2BO%2BB8dPfzwVVX6A5um%2F3aRhCTKrX55kDJumaxfxB2i2KDLqYSMZ0r3o9uJ66wxcsL64WpEjHz2vQy3YnZXWGYs%2FGFcnJFD0Ih%2F%2FulVQYQcmV5nRiUbGAQYs8J8tKsLIqoxgyyIOshfXgDjXurNAdEGv3VUVlM%2B%2BdflV4pHXTIQaM83CrGfqrHvms1z4V%2Bf9XUZbjk%2Fd27AgEss%2B8JOlWMhRPofiBf%2BnQPrAtNKbb%2F0pll0JvxY1QtEyRTexaGuKkFQ3BClBfONjcekwv9DKyQY6pgHZIYcVcwPP88DmGEIzQ5LjVzSxJ%2BOnGtJpwhEcIOr%2FYsuVTR7FMbsvkqyL5S556n9N%2B7s9pQDJMITdvjmpNplGXlhwIbIqUF0JJ8vzG%2BRtp5sbsT%2FnfqVgvboC1e%2F2aO8DYSFlloIIfakbCSOrb7P4ebJy3CDOUD3wcnheZf9fvu%2F5UK2CP8o7zM%2Bd1z%2BUkSFyiiWgFWXfbnQ7XoAu2Geem8GgIer9&X-Amz-Signature=7a6cefb6e8ef2981fb59ffe588d842db43d6dcd58ebf14810def614b5169494f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

