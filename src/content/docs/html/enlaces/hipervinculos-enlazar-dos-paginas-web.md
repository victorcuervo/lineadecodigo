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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F5WQWFJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCGACdHTQUnVGFI00N0De3thvJQM99VMKCDniFNxqpeQIhAPFo5e8q9HfysWhtX%2FhiO%2Fws5K7EYSlBx8a0SwoxwnNTKv8DCHUQABoMNjM3NDIzMTgzODA1IgyoE1RwsZEixXN5Tcoq3ANeW0TpSSqsTkULuhdLQXQGLtWcWZ8TXvihfgfS5BYoryGX9fniPOqPuhLZ6FnFYYiDYxk2odFvwdDfgbDousKbCSu%2BHx6%2FluiMNVf3puwqL57Zbu%2FZpAelM9dKRfCiCaBUG8UTQRrWVUsRXulEdHItZfNBtu%2BKdNjQ5PAFaxkZDeYYuWaPr6bptLP%2BnoaEP9QuKwiJGaxtBHBARh%2BucUCIOqcuYEsdmAZ2asdO5SdAQneT%2FgL3r%2BM6jhbLQ70iunpEcT4mwgphfGdi5B9D%2FWIz3XpPq6hdlEWU057QzE%2BQS%2BHgUFK6gcAnqg3TWYx0i6NeFSjoQAuTvKkgGeT7D2yh2RfVj%2FnTHi6rV8UW3ZUMp0Yqzb7%2BK3lF05nYWrqEDR6O6H16ggSly%2FCnYGxjTwlZvXfc2M5N8Z%2Fd7uYBVacPzZWCkU%2F6%2BYqM8pc3Q3qE3UcBmnCFhZcW%2BXokeylUmWjwqYzTDjIo8D%2FaVaMw22wizECOxnSKHNLLC0r%2FQYBZfXur%2BL87nE48E4%2Fe4zP9tLx9U8OopKOXcChevSTQ1ktjCJLx10rIQfIC6bamVVLXqSnMPQDlyvvf%2BgLzVikicfL3HOYJyMBJ2zmmEed1J6l2XMZNms8B1k7r1aIkjjDsptDJBjqkASIAGFbxym4xBkj%2BWrpatmInAv19BQt8kammTNKwUxYCD3%2Fdv7n%2FxrsdTVWScIsgxxHkn0uVlwiNY5GP94jGXETLK6xk2p45M0A6g%2BjWi3IfDTBCI2VNlL8g%2FJ9AOEy8GcO%2Fs4y4%2FwXXcPSqlDXihiovynqdzI1%2FSKrMdjek3lG5V4dmXL3b8peoB4ZQnmfUJ%2FB62cPhtPSSKxGJZjAw1qQxXZ0D&X-Amz-Signature=12cc72acabf95de434239239fd695144aed5e54c013d89c8d00be0d53be14f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

