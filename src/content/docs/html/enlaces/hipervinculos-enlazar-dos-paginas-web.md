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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PW63HEC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuoEBakltqi76JijdIDl8t%2B2MlzV5PpOOEsa8qvhFBiAiAZt1MpZ5Pv0kRKDeUgf13fC6eXAst%2Fed75meZbDpuf7iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP0d5T3vdFoKiMfi5KtwDfXyjR3yHh7b8EcJSk831gwQJUSrWChiRjXncQNSZEOTLtZzbH1N8KKGV71MG9DCcgOCL0Tfnl9wnJeldQX30hbscwRqG2y4GnuwogY7RatJxrYN45REeWYi6NAOVS5CaiVWy4HCz5lEoiTzRXXx6z5LcqVNuUT6NTgL3RLd7GKSkutHxQINRJdTu81YfaSSwpuelYwo9hs89ySpRaei9Shef7XDF2VAQ9kF6nPnnsJ9g9h5KW4wTbTOya5XAxG8m3vuyOtzyLpp1nB46XM8aFxta2gqh%2BDrJrYfL6efjIHc%2BHZF%2BDg%2BUGa8tqK6%2BjEPIScP7Mv4XmmX4yUDiLwggn4CvjLoCe3F03cozaSU5T7EUl0J36jL6VfjmooUWCMnefqaKNlHsyJjUhQhRoOh1sCiojk1%2Fm%2BsurGkYyhKckaXSyrWJAYxCJEGluDRa1sjMFglQsAq%2BLw%2FilNBgCotyHrFtmYQh%2Fo03Nzq8nCBSUvly4wvwHwNMCVlSAXeplMr%2Bmyrc%2BnUcIndcQyOWjN6NXPojdrhyWWMVqDd4eJ8d0JJu4QLj1LObrpyVN%2Fa8BpTZh3DwTGVjMTbEetiOU2ce4XiD927rBOsK4J6M99ukXh8P3u8y%2BgYxWosP1dUwspnVyQY6pgHTKawWJiqArit9j3%2BM90Fhb5jCUOcM5JeE%2BVm0ZyICSQOv6AmdkaeBzJeFJIgLFW1DCOcBXqzxDk1udFfkr3nR4Sa4mV4ITf1IT8MMANOlMyjiNH%2FbvGCRRFZoD1Mkwpi9zltvYZyPtrLd%2BWo01lzo20u8yH3mVgLiPc4HuDvDQj4GccM9aAEJ1RG%2BrU%2FWYKOwVP%2Fm7QDaNnLS9IG8gPZNXOs4Z2J%2F&X-Amz-Signature=9fb9b4f4b3fda2235be5ad73462c3813da80bb4f68e0f49ab668eac1967508a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

