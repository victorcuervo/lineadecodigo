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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y22NCUZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdiHbnTT8ABlqd6816uNC%2BOSbDQLg8VrF%2F5sh8EpMJaAiBeAhG%2FJnFncLvnw3B98LTq%2F5wzbTjHHsSNB%2BFwwUCL4Sr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMF%2B5L6%2FpTPRVIeRwmKtwDpVWoq6bA2B0DF4lNJVefuu%2B2bn7RnFazChr1jX2CgFRer1OwVLJq1Lbl0ATRM%2BFswPNGbUbicW%2F6YO04a6dOll%2FNXJZ2v6RnGMofcXU3BzM0PPuiGO2Atf86VdhNlG9eFS57EilXhLNVLljcqELYujipxz3%2FTCIPjRJMJ1rs55%2F96WN0noi9hEiVXXDxs5POCREuCyV0CfckXz5ST1Aw%2BzFcDbBETqYpTBT%2BC5tq9XOshFKoCrpkIT4r98zq5hTZdqIJuY9ijGCrHGh2T6vxvoeB2HtpsdCNQORr93F4dQZg4SQIykNnHZM4%2FsVSuUaO3nLNNk6hIwvD0JrhueFpQXNvd3BuJMNDdo1ppbY41S%2Bf24dtAv9UiV8Pb%2FBCPmGeR63iW%2FemJv5TKR%2FgPVm7jePjFin5eDBI7v9jhdXBxDlQAcWG8G2iyc49CvlmmxFLcNmJlwqqn0vU2vrWNsmUlR6xZWj%2BB6o0efTYvWgd4hwGQO8jm9%2FFPIDCsR%2F2jE9MXybzaXsa3WgolMMqZFCRqoyPaNENejHDeOsnR%2B1mo72ATgFnhbLrLI54UFATEMhKyj27PsmxNiJmSAbR9nX7K0i980hZAOyznkw9Ugux184B3l%2B9ZDd3D88B1rgwi7zPyQY6pgHoWbIFfmhmMcSmglzPTBvf%2FePAMrhOw0Ln23efhDjJy%2Ba7sZ2mBBGoCA4kn9tPfWuotZuZt%2F7OKyEB4A4q6rTMyiAqirgUdSReWeirJeMpTWHBaW%2BCsD0mHX2Px6j3ImyogvYSIPvwPKSPV%2BSnaJIBYfvkL5r4lYA3M1xU2rhTpGjgwTsCN2PbrEj4jyW4hdOPHVJUt6LjLwO4kcxm2gKhHEMKuvKp&X-Amz-Signature=034c222da6c0797672cd77c4299d1ffe2060d71cd720ad8da6688200185a1414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

