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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BVSYSQW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzPJo3qF70bbbxCkpId%2Fs9gzZ58fpHbnpdgvLKBP%2FweAiEAibpvpg7sLJU6Ci7J%2FzmsPtVRW3FFZor3HdyMA6lVmtYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8kVSi8OEfrWLdH4ircA7RiSG8wGN6mKT%2FAl6diFdegaPcOhRvc0QSPYJZhVWpcjYWhpzHBoia9HbNt5kT%2FW43R5FO3%2Fs1Ta%2Frk2HlV1WkCTzOGdUG04ROGaBYhhyW8saWQBQ%2FGrUDZ65oc%2BXLhfOrJHqWNIVp%2BsJD9DEhI8zKFXytvjv0%2FuaadY2zcoWP7BZU5%2BqxyCTvADNpFxM2yiIjDCCTb0V6a%2BHxdu1IaRCat0ADBHYYnHMSm2YgEK1SPF097JhCoJ8dc8B7WFVzHriaDSU%2BT1oZGhCBBSyJYacAyilSomgyl4tALvZH3ikdRTg4KZ%2FeLa7Oc%2BmStdHTzVkVsh2aiikPOwD%2F7qTimRpMrLpVYBHjjrEJVphmPNquy589WdQzFMGFKw1TncU5N0fYr8Rgz2VAxlF1ZDGzC9l%2FTYypn4FNGXYNIY3GjGxVSWadrfhsP6mC0slIOF0qSrsmFUTktigB3rnkoELUQc8kSExfev3qxpsHzkbaU1FiJUjL9dove%2BdThHT5Q0%2F%2FmTOexlgNqLXORmiRCkndUtVTakXhGr0Fjq7QgKCnGfub1liWw3RT%2BNqhoBZfxYO4lSUY6NVRnADV8ab9bXHyTRu3PNVLnZp%2B7xVjU%2Bv4iz5k8oa9RyoJVdTkc5kVuMMfH18kGOqUBSJd6nl0%2FV0PZR3%2FzxGpLqcMLOcs2kwJdC%2F9IN63QNCGgn8HguUxQIheH22g4KsQC3NCeKIp4PSfdd5%2BZMdHJUO2Adsd2HLvI2B%2FNxCad5TgNim9Heh4i5ZGD9nxBXW%2FosCSBz%2F%2B7XAoH8TeHjS4vestx98LqfwjqT1yjU2xy0KM0sOyxYjtu6jmD6rHB2eiQLObyuVmQaZX502YtK%2B6oljRgoVjJ&X-Amz-Signature=75e1960c9dc6e4e2f60b46486ab7770b79d1fc805882179cdfbde39ff767ec98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

