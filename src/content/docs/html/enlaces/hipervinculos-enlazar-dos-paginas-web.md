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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVIS6RP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvO2fhi9Nnym9JXV1lqlZ98ZFdjlVaKVGvYCFEa0P%2FnAiAYpTeAFRGFSNK7YLGKYHjH5Gi8PrFy5WPG5PSjUpmtTiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxwQurer52jG9IHFZKtwDxTR10zEu0qhvUqm1kvtU03RGcfPAvwVho3jZR%2F76zAwgieU7OUI2wsBUeK%2Bp2DDgM8ic3HcZrG94ykeoWk%2BvLB7zZNgVBd%2BEwz%2BgSNYFBw0cO6f32IsT3AQLX%2FNbemgHViC%2B1C0s36yJWOHgSVxkHAh4hutCHZayS%2Bmu4XWeHgJCnpKsW9LtN%2FfRpqWci3ju%2FZHf1Jlaefj1xkC5WYF4FlYfgjCmDjy1YFjlFcD%2FWj7tNGRnJcpb1hDaojivpHpZl2esdY3I2j0TripLoX%2FTpCAjahFQeGsY8Jl8sQPsL5D1bf%2FiZPfzALzKctmNRfHPR0tPoLE95XcwmOYVlvawd5rBWfhiZNTe2zKCkReMfkZUAPn2JATPTK2Arwt83DoyB81t4CdFBtLCKAj0xO%2Ft%2FzIk00GKetRj0LMwwZp5Jd6iNHdKftqO2JRFJmgGBEBjn8sOKS7QFhg0GuxdpLlAyZKlBf83D6xRaIo2tAH6gVbhQjVZLb9yMxJd9useV8Q0qwdVPzIPnn1DOVQkt2%2B5h3x6d27DIFlkQsw8dySbNfl6Rpgi%2FuUXa%2FSDcDhCvx3pI7LnTm4hB1YPSoeIL5yelNkV0oXOeLOZY6T1cjB73VyHhAGBI9LJZVDlccswvKTfyQY6pgEWnopcTt6f0eY1lMnckdClvSw12XI%2BU9ol7NjtxGlqYzSoMfjrn2wZZ4OECfcK0k0yiqyyt%2FZPMUgBgJeZeYc2q5CPnVYMv1nCh4f9sAQ6%2B9UGZt3FUBkGAdDl4vYWq0SiWQHUAQ75Enl6%2FhgP6SVEaLxAm%2F0Wlc4ujepblL2L57OSalNPNbwsmHjAsifOeYwX142yMNSZbNoQJI6ME5EWjG4pXgup&X-Amz-Signature=ce824e130f1455d94189c139dbe2d52f221036cdcf90c650f4591b5967030e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

