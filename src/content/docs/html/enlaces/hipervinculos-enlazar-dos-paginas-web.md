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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVAKQRT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6CDfcEtVX3EzvaEj5jdE64cpplI8bMCOF7GYHV1lCbwIhAJKnA%2Frhrk%2BDiTCarBhZSzpX4VWG20F4gQ6OVmMJf0ZoKv8DCFoQABoMNjM3NDIzMTgzODA1IgyoHg7nBQzTR3jPcTUq3AORigOWZ67fFw8NmKfErbhY6p%2F3b0vikwiCFmRnAwEPwaIE7CKGqKVvvq0yN27364W9knz1KsaevmYolzYFlPokO2S8A3gCVPjB%2B3vzbkYEOUpW2c%2Frjo2k%2FGeCX6XkFDjkpKoHcSvrMRoj9%2FLxbXjr0SbnJONF1po5dsaQ88tC0GYpujD%2Fy5wdkjE9MsFiZEmsB2ZymLMiNmjdiNiEtSbk59OsmlgSpIB%2BZf2Y%2B4YNcpUtM6IPcyadC%2F4i3DogmAWI11fw97C4Mj9B70YyE9mjBHwHmv1FwB8NDqIbaVAvuLUwN85wHGGYrNaChlDFcbalnQCQHEe3RT4Mc4mcQyLkulJWh7QM8EcZjdcSV9W0XWXJako9RPs8QVu4hQwoRcBSOtjs%2BZT07ZF58UwZrHvIcdSLtM%2FHlrhWRNk9LphRCmsl7ZE3%2BUkG6YEbYaS0D%2BeBUC9dxhHChQb1YWjy3QbgrTCZAKNMaRSI%2BbXyVWx%2FzwFy88urFMXfRczdsUam%2FEGom165Csjo%2FljwcNj42B93C3h9ZGkPOhhwJABvOhmZD4tWwaQZ%2BpWZfq0NzSzRmXT%2Fw0TQZLPBmjrKo%2FAOq8LB6himYZLituRvPLxngJZfm5H12L7ke%2BtEWI9xzTDqxsrJBjqkAVWe%2FhA2aEy6HRhAWhxtw%2FRRqQ4TUa0I0MJU4hQ3DXvI8SwykZXuUvy1xnQ6MPueeo%2B%2FkjTwK6qVOKN3EMg4KappebOsxNSyqUY%2F4SiRJn4oP93qhwTpHo5JgbnpJZYXJVDEeHn%2F7a2kryen4qCdxXf2HlI35UpQkLDv0PHGzTXIWKe9QLcCwlv2TLDoYNZefMSVNhHycDaiiLoqBcC%2FcJy%2FrpRm&X-Amz-Signature=2db0af5e946c68e321ca6fd0c342010fd85ad46231c547bcaff9eb39cc797a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

