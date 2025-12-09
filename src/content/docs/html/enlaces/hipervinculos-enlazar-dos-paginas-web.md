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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642OVEHBM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T175720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTL2%2FrEB0PdwEttEgFKHeL35j7%2BgTcDKjzJynLtsgSjAiAWxfm2ZekAXuvnaW8wKY6LsWveMiBSRWtMXsWa8kNCcyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMebKbK2TPztpJbFFpKtwDiJ31MS5icSOGmfY3CJlmaFaXhpVfsnWRHEuN3U%2F%2BOKMFzkWztJ2KAZnfFCsLdED%2FWfLtWB9B%2F1UHeqlOLGuBa968Chmm7ad%2FUvuFtpNU%2Frq1BVL62b6Eo8wk%2FCGKAa27hg8wJ0%2Bipm%2BHrKpTOecduMJQfEhx6JuMzE3kci%2FupkanXZOnArG9krUgbCVi51jklBiOZf8y%2BDMIDBBoeEb0fmGO6Tq2RBy1vNFzhm4%2FkSk9k7Uve%2F2zG8y5W3y9rsGruhmJGtVQlD3wUrImvSRjWm7IQ5MWUG6jUPx3dOVmLcwQxvA0RgBgdAUfgm%2FfK12OjgS8w49VXQ8gT6oGhgGs2s%2BUKoeg4MbtVF0OwgXGI0JJPbY0fs%2BQ3w19Wc8jksCuEFV5l67rPJNLU3zAtG71CpzHDy3kYFXSRC5r6YdFInuKIndPrKtw3J423MHWMPS4awKOi3V%2ByCfZH98U1wIpXW4zR7JpgVjEzTaloxlaGxOPvA5DsgWenwRQCM0d4fORgJfTIjzV2ejY8D0jqwHCeTg76MBvwg9NXAxpg91KBeMNhwMzM0ZHkiETdHnP1aQLO7FHopST5AYbwVzHVjooKBSRC2tYBiuHif%2B0WY5asWZWA%2FfZR1OJeZHkeLMwkL3hyQY6pgG7THEUJSdQWbehb7lTECquHvN5%2BAbYKQ59xKVW0swE2VODZ%2FbE8a7FM%2BEQYvKFtzNc8LMhEWd7aPMvXPUEODxEHVwA108pxoL3mb6Fr8Vsi0D%2Bxl3B1fTEJ%2FUYbVoELfNwrqscu4A7aHKBaI2V59Ut%2BOLeQWVczPHjF6j3SSz6z%2BI4aZ6QTSaFWKql3fEuGvW6hkdjkvXm%2BT8wlSYJHy0F%2BMkBigyF&X-Amz-Signature=57b0cc403a1265bf377775e57075fdc8c10a2c751ba0b2e56187e2c101643796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

