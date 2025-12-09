---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W3X43QG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T160303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FaFQQ594UE3J2Q%2F8kkUMqGhrM8ZQz0N7MuEsdn4FE1AiBUr7WpTt3KHhpUiM6nV%2BneojT6AVwbPBfmgW11XlmkXiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJac%2BylNSCGhgdLKVKtwD02z3p8ojhWMTCv1UIpdbnqmOJnjxv7%2FFmnSefsZVIgbxi4eov%2FFCFwyFvfv3gT1%2FBYEjHFqm%2BUvNOjL1iRBZNs4NK5ciOadnoeRT8qWHbe%2BfkyaAG62O%2BlGyy5IEmLEJTs4d%2BB5nB%2Bju8fSjrDpqc%2BHn4Y%2FNGm5%2BXXCBFVeIjkMjlv8h7lpuZe%2Bxh9e5pKdw0WdBgGwFskLCbKn7jU9%2FyFa9VVAjOFt%2BLn8YR9Z%2BYiz85YYOBsGNyJxsGQ9mH8GCgIE4X9N%2B%2B%2BoLwer8hcPX3FnBvUXZQ7k86K7P4H3OvVbqRmZoi6Nn2OxFvbQXJmpbmv0VYzejy2XuaxNW6N2CoKeuVAg0ZX3Ij6uS4ELUDbbezopCOP%2Frq5gAfyL%2Bgqf0UxzvMC5PUg7CwGNh4jhMx6u7D0NbETqYN6ioT1zz7s2LMoIIBrOtJemC623PvMauGf0RmROoz9OuN9xfTSxCcOzjDKBleVQFuoGFGBWUWoRzWvIp8PEilP250Q5dGPVgPPjaWZLi9djuOmEHp%2BSe8jM3ta7H42GqKmLne1BXQnVqhnuhiivNsgE4HXf7IKZX%2FztF8epcyHPj2KG46WfEJI60FnuOFgCfkiopfX4NYxQytcJKg%2B4n95%2Bfg3IwxdzgyQY6pgE8KtJWT21cdVTcgypnI04HMNIH7ZE%2F4r5h52xBWHtx6AvaxAg9FE4MKPIb7ZwFGfaL6z2YfTsyWQeDcFz5I8ZMAgN39s39SbNavpa8r%2Bj2ARAnfCEd%2FV2byZUCp8kN%2BBJcsl4kYsnL7yBLOHCL9sjk8RHoTL3zsnUbxXw58dY4%2FL7JoxL2WnTtMxtuCCnLoEaxL8jzAcLdeP6fzZNHuhMsQRlIeymh&X-Amz-Signature=6d82eea583c9c9a548c7bb8e866eca71e21e709e30f54929923002dad6c258a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

