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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TO4EEG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdIWmj1UC6ARO0CbdlWlCr1HifZccCSWk6D8HU6u7JyAIhAO6xRphQT3AjKxctDa15pFjTLbWFmtqopWBMZPGh3447Kv8DCGEQABoMNjM3NDIzMTgzODA1IgwJRyAfPimCSSsEeLEq3APZIvV0nuyqok8nZrnc63rwrlyWNp%2FMqUeT%2Ff%2FU94HDA1aLmXmyqd66XM1rJI4CIwl9rixD54O5deLjNwAx0JTUy58ayz70lheBAJWfLJH%2BSWt58krYBcXYJMtivSNXzpqVbDqyZIIHD3pY7lH%2B0b9bjrL77kmVdcvhLpM6mOsM9UKQczbe1zi1tJjF18BiMfk3ulnkIsqVYs5gBQvxfjzo%2BteScBn5pmJphtjF6sR9M0QnW0m%2BLu3LtKRXgGoJfpV8vdnlMV9PQsJ6svCeyRZmCcLjk4WfYnvcqKGHYeEWdvmzlWmILxEoLnKCAvp3Ag9HgTjz%2BdGmYlPAfsl%2B1hp%2FW3whnQqFq94%2B0GgSDbFVrkpw4Ip95wWbHLfNJea8gYIoKM4AEDnmNzKjCLRTyKx0BxFOzaYNOr12OgXJ70c5GMoVV9NT%2FC2raH0RjsaLXShusLIhKm89babvOWbeuJjD6%2Fruje5n%2BO%2BrnisdZWwserV4dkRti7LdFn7LfIqk2b6qSv06tHF3kodWGjxVX1TfhhfflQXbop4jkXdIvfZlYO0uiPxe7GgN1wjHCnxw4EhrgzJSVvFAOZAjMM7WmHDv9V9Uv4E1VXKNeuZWaqKJfGK3FyBeTV0f4iRVzTD19MvJBjqkAXofBfoHZM6jiMqvJU%2BG2S90VHZLeA278%2FcNRpf0NhobqpZDZEFbGY5RA6Ls9QQqdG2wlgqShu7HPCXZokUlok5E1IGpFORbj7WaobtQ%2FXdwl0P0ozdYANjiv3i87b5bkgWgYcUJEoIEUMVBOHnWGMNgU9VMp5n5rhgliq%2FnzNDTCP5V9h0axT0tbDb3kigyq9tVStxSvHz5o2j6bxo5zyr%2FuQdq&X-Amz-Signature=d6ab06c22cd45f3ca25ff05153a84eaa9f47ca6ada2d250a3b9deb000f255d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

