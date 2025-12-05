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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGYVDLIZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS9TxBJlifjB6gZlwSQYR5bMnLlx8xUeCOMU9w2r%2BlLQIgFwP90K2mj%2BtnpEem4ld63fEuOLW%2Fq4I2PyQAFsnZYAgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKd7NOBigVth%2BCGKWCrcA5LF6aAopNcZ%2Fb%2FbZi26ahW2WHsuzItK8JEzU8yo2JIYRUbxDzs7Hi8CCkpX7zaZX%2FT5cGIvrzi8%2BBCuZ%2By3r6dZ6e5YScsSrbty4Gj%2FOeVfGHd1gqIOMT5i%2F4VLQWH443mLgDOfG2BjTtO7eM9eLaszTGPKq8FgyMO%2FZP2XPtGZt2afjo9eU1rI8%2BH3tGFg0qMTfP7rDCv7h6mAmV6FxkoVoZO0ADkM4PMK%2FZmQ3yJyEeKRie3Zsll%2F6oIz3xKSboRs%2FQgoEuaxbDzLune5PkbLXkU8ZARPaM7l8RMtOCbUrg%2F0sZ2HcCD3vZYaTYRG2tFemxvZuKwtdvM5gTaZhGt2GWYQMOH2f517tFZOfC3wFcu1Y%2FQSagQGd%2BkN%2Fo4T25VzxLG20dfJM8I%2FxR%2FEdqih55io5AMzvrHGMMBfmvobKvhydzaGUzndjZraK2lWfxNPauvLuTH4Pm7lyPfHpvLRuJ1dz3QzZ4VR4POOOi2B5Bsrt8msv%2BHSlqcQhofdXMDX9wI3ybLUGg4ZgxJ05xCAIqZMXg23hZRazSDKYz0Iid2gGe3dWhabqHa1EKFPLjktRCs95TWpjjXX2tyCe2QUYLZa5I6MIRwapLIhv2taHdZFJO3UybRLw6GXMJOMyMkGOqUBoTB13tvTMZP8tP7Z2ExHKjfM3HhkZ2oui2MX28JkAzhx5u3KCw%2FRwe%2B9D%2BZKe06SLlcV%2B00t1nAXBJZ5yi0muDeJ8EmnyDy3P2CfyStwwrhgtkR49OlUQIg9syZKtEWD6Roo4SlZsVkBKl4mEBn9R7dH%2FLCSwoe40QKwRByuVapiLCiZ5YAd9ZSPa5re4MkehGnKMFy8ICpsraJcRApF%2BUJ6lNry&X-Amz-Signature=8b6e19c7a4c822d672b768b02359fea378656d52c2d4415ae1f64e3b5e0d2b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

