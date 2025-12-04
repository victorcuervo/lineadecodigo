---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFKYDUB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCWFHbZhQRajjMb%2F9Y5Me6UCMSuvih1oM2mvBvIQQa8aAIhAJgIUnLIu96vhOk6XnJ4Iufa%2ByaY1CiKlrVs0t8M4s8TKv8DCEEQABoMNjM3NDIzMTgzODA1IgyWbiwm9HwlVVmyWXkq3AMgbZn5%2B2QghRFJiTDYi9%2FzXvyTg8A9GUEvOlTTE90eamZk9GtZtYBk%2B1dF203%2FQHiKpP4dd1P4Hm1STbNQrzRbsa9H1cH6VOlromlgRGSsehGW7AuoDItwHjBX3Ja1ZnRvvAgV20%2Bp8YOdq1yDNxKQ40xzzCZqmfFH99Fc23hl3JWGRR0tbcXphxx6d6q5w7vG3NxNPO7yHfc9jDVjLv8%2BF%2BJD%2FUDLBo2uAFiknyysRctwjwa4z3q9vcc5iDuTyDKF8XxuUMafxUBY095UzC4P3%2B3MEl5bJf%2BMkoCFsYtUrYDXxqdGHF5hhShnmZjTG%2FgXOBGxwlCt%2FVHgsOypJqYCn7OjGzOCjEC8vi%2FdPLPMcLrBaMIgUnwAGzH8eP7pmbYSeo1EkrJDFG7XiP0jxeK1jKr%2Bkl22uEhHihziyEvthbmgRifm9ZYf8VVavqkLv910VJUaPqb5g1ZaydWc2hv%2FZhAyTsbD6OY%2BBMLhq5UGbAUZGBpML0PfZcEygVlvT52Q4OXRR9b%2Bymb6O2z1qFm57l35EPOCYnV00LQvN%2FAttw4qCOdQ4DfaS%2Feau3BoFKU4b0nPsdPa3AQZml4Iim9Kaqfqw74DO9kyqhhyHddOkaWHUH3KwlhMqjIQjzCIhsXJBjqkAWV0Tphiv%2BiI2Pv5f8hxjvld0%2B6J9zpLGwvPu6knBBlgmpNkFdunG3yDW9m4CUfmmrpl4zFOQyRH8W9J8ptNidEaYZQN%2FGty%2FoQtIxok0KELBtdfhbL54hptyiPFqSQMS6dQ5Lof%2FGtSHYRZdtaDdm8GFTRUipPdJD0SzQX0zCACGtXtCDzr2cz9eBXTCd17oQNuAAPb2b1JK%2BSGCQa17F%2BnCRgm&X-Amz-Signature=b68dff3bcdd4603397490994efbdf8201d03d8ebfba088335a3e20c8a1920d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

