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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGKVM53K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJI8TnORE7zsqNiVRfQgZxAkKUMor1lLAu%2FEfnsHR3xAIgOY%2B3QUjkVG7ubiOD0%2FkkPwqBSt1%2Bf5%2FZceWI11LgGlwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDNE8pfDmf3zlZdQ7fyrcA9wLN58B1hOI3Q8fqUuhkPdG7uyACM%2F5OgLG05Sw1TPrHfGqal4gP6SaEgV9FCHOqwOziEs9JaPelX4zOiWgrYP9qDRred8zRwj0gGuMpjrMEJx7TVJVFRWUy7k31FQukap%2BiE7yejnoiH2hc4E5PHGRpPptPX6KcfzN32fY725wozmf%2FwlEoQMf%2BO%2BQy4YN7b3A%2FfheMjKaj5IiNzESEUAFUf95hAwMA2557%2BKA8HZ%2FqR7UWk%2Fa0blcWC%2BVqEkEU9rOeZBsDUNDJTMpj1QkZDb05dXSsd%2FerIBkFtBZz6SOr4%2FyXfI4Xi1A6MxxtB%2BElYSYu6hi8QeT96s8gJoESZMXpv8gkUIMYVM7ztTlntFy1AbxDVSuZrk5uw0qF5AP9Ay9LG3Q1UbDF4dhmnczMdwoQuSsmQcwOap4FQ%2FXUUQlyUapUvV1F8GgZz5Nf8w9%2BOVhrTX3ejzZf9r%2BxLoS95Kb68%2BAFyIcAyLb71YUsuICGq1MGbroHRarR%2B0ak1ahQeAHc4T7IMWJBsvfBNCemcjNRdvUMDCwprjTgcgi4CUIs9f1oXWF%2B4Mx8LzpClszuYzsK9AGOZ0GrY381pRBxrXIt1Y8Zo46NyKpz2qvaHaHBtCXhKCrcmIkL%2B2DMNb9zskGOqUBH6WLU3jelKU6dalg6a6xQGHrAxg1%2Fjzg5KVXyL%2FrxyqFMzTkgQrXOdLRMBoQrIfTIWjF7SeDaZb0DmEAGQNNYmxF0x%2B3rh%2BtrrDe6puNrfZimTd8UhrrP8vzUQrcfU2LvtqOc5P95QejR51asQT%2BldvKSf0mIvOtJi3t3g%2FYHg4pEN2ao67TWVN4N6bSGu2OfCNmTDHFiAwvZ4boZpUlHnqw8dUM&X-Amz-Signature=6f9ac07b4edffe1143a97e2eb7a159e5603e751aad1d36bfd18b669a1dc0b694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

