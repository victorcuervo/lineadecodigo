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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VO7GRZ4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQSj3bIERf5cxVFLna6Sw80CGQBQrjPFwI%2FEkeaLlGTgIgeiQgTW137AGyKhSNswmcYstlnAyQjRPXLD%2F1JFAyp0Mq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGsIQS%2FCl4xbEwXf5ircA%2B%2BDBRIN50OX1YLZ0sQQJuvzuMxWJr54saBuJgAhBPWQ2PMHjTLIlT3bJJbw3jSOpIKnVqBM4i7ZMuEvflnwBnLLy9LdrKccXlUdIs16LttE%2F0toYxfN8FuKnTd%2F0vAqnOhdmHilH44liHKpf7nCPWrYygP2gaBwFYiQXMqyxt1CV8aOC22GEGnPsvLd7ZKOIdpJ7thJE%2Be3uO5aRB2b98sqG5PBWhqw4xQaKfW6d3JtPa%2BamzA1IHRUGiIJL3qflEiqHqneF4NmX6olvlWOEONjbWe7Y305Kx%2FMb5mRz5%2FI%2FZXow%2FnJJ%2BJBceDEFsk%2FF4Zgve5LuVQro5dvY3o6LfEJwq7%2BF2YQ3fSkpgZSbrvuHTSHNF6sf0tWb0QtJ76JEcbNyepTi8yVcBEPQmkjXwbq%2Fio3NdVsfEmCKvW%2FzHyHvE%2B8%2FGXIr2TfY%2FUinbwGUHmBSJ7lOgsZ3XeKTXr4PKOFZTwcmzK5SbfJMd87dBCcCthrRq%2F7sXhCP%2Fp4FfmRmzlncVbM8Jgmi2YapwXISccVSlMULTYVFnQn7i35GxxIbtRjhFWAteKTUQ168bmt0uVwitzF6wo3Wu7PZ7AynkCRdPgidVoIeg62aoe8esuXwzOimB888sF2OujZMMjty8kGOqUByZhH1cB4hOYFJ%2BgOhegsw5pS16x4%2B12aBCiUmzq4rjkDHY8SSKxT4X6a1XbyZatr540VP1xcDS%2BYUMSQlnXhxw7noojB3KHfcyISkhiS9L6uO6E9KqYPVDqzZLx2k2cOXDO8N7e2O07OG5BWScTw94uNZW%2Fqhb7zvKKOtVir9rmfP%2BA3i6fnO2xSGbXM8HCuXgeVRPOtubzMYxtYlTAqz8aSdaRd&X-Amz-Signature=53046b496b814b266be5f03e531c74a59e20ef4ece30175e2eebdc110493bbbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

