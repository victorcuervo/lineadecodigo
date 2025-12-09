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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWUGSIK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T212455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7wJEvDAvV9Spt7YVIlk3uonlqkMBZ90sroJi0eb0tEAiBCrTIv%2F8FquY4KqSwcomkiBbWo6eYOzVdXeBwvsiFMaCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5YKRWAyjZh2nWFZKKtwDbYbnsOSOkyaCjoZH6mLphEjw3rRhszBUpXjIK8HQKG4qhdiz54OEBNLIh9jF5j13vwaQBfH1QvAycPlkBb5NIlrhmAeFE9rk8TOKXR1J1REBegF7A4j38Aq9q93EIlti%2B588Ltpj2rUbFxgTAEmpY25bL10L8qHVnWKZgx9WVdB9XI3RjML0aA%2B2MNmhHfhzEi8GuuKhUDlNgPF1nZHoIKB7JTAzXStlLisu5cgiTJuQZ0i9IVHF5f1h2tTc2PDZibwC8jvuGG1GPRwMnLWyUwL%2BqsDUSG%2F9fLcZUG0FK5zf94DbrxLDqHOvhZhlwthfYCWoadtZG8YDqR3RNuT9wUVUN4CsNrXVjyvh9PaXoXOVOxSzLxM8MWoRxCWsdXiQdSyi96XfvDPXXujU5%2Bd7AiE0HqmQ9w7iY6Re%2B4NrYeAAVISA%2BsXcQ5UfAzGIhMHYn3R1%2F8RCWzKGaf%2FZItfEXEbwgWwMLpxNF666%2FoYYypwZHT2x0zxTFOF0NXVNRfUulwWgheYTbBMMiMndjgUchixG%2Faz31xAxbVp5fU%2F6t9g7oK4Ea7aWI61KqA7Ilfayw21WRWZBPk87uvZy33Ik0rqcSSafPOuMWS5CdvmqYTKy2dt5SUyN8wbzDxgwmp%2FiyQY6pgEKWGua10MCSqPWk0jMuWfPVTUcqF%2FazlWEVkQnXirsfKfzi6Vnaw6DrDEkhxdVifnkWaknTNLp%2BSVtNl%2FIpxSsUUwaCepW74EAh%2FvTJ2mgMEACukbinVSM0hZeHMtrkOcwIrgCVOClwN0qknE0VlDgrNNl3WqMfSErLQYRO3gRJTTtL3IPVqtdMdLxTaf1dWa8t6afwGISaXXpuxJe9eMLUZc1pFP6&X-Amz-Signature=ea50392b074cc885fe66918270c6dfb63ff4b5f349d918faa9b4aef0afb83190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

