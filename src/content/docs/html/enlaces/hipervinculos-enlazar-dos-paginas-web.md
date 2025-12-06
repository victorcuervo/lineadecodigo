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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMTV2DYV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoLzz%2Fb4tDt2QjcShSPVT8GDmdL5P6pHmjShfTmH2HMAiEAsmdhYyT0W11Fm%2FL8Bp9S14TBjlm75gT%2BEtsxzi1e2Qgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOrOTtl0wC9IP8l5zSrcA7XbtSgEJNf3prbcE2bXVZMQFS2%2FhVWPhlFr24CAC3T%2Bxj9D92mIadfj5UA%2BkeDcOP5VVpclGQ05YcrXU%2B62Wc7Tmo7MUWajlXe1YmpgxXMLPXNpHbzHPps15nMhlTksudqSCHlgkeGUO24Yu4yaSDjJApOWXYe17pXIWDmt%2BXU5QEgkXuUcNTYybRV%2BDKceIL7Grt7XibacpcdYrDvG4r6SFwFSi3nOFsEBsp4JjRbE%2B6l99OMUK5o%2FhoZPJGjT8FfBt66J0JBHMR9JTgE%2FozVPyqNrB2%2FPq4VK7IqLzC1k2VIaPZPkeH9M9JDdVfffLXryF77OK6fk8RoTHyVu8%2F3a%2FLd2IsCW9gxDA%2Bce7ksDXGCAW85t4r7SdHSEBIhOPuaU%2FQRCaMbUyLKmnsQp92i4nLYQifPL7G%2FqPpis0FEY%2F0W%2BikGVI3TC1HFK2A2a5KltbBrsAMhZ0HWxbp7XSjpvkMPlnNXqPZlgzLZD8dvROdTP23B%2B%2FW1aVjvzp2gCerUOn%2B2sTWvKfCGjOUTK6OZFT8iyV81J8BkpH%2B0JD2G9FmsAoYdQJYyj1DvwY4TkA2S6WTL%2FOJsxjWqlPsBu8tz7H8EZN29XsdDXL5fuWvI5k1pYe%2BYiQZnBcYSvMMjK0ckGOqUBDZbrxkghVqsXbfDdvzsAf%2FZGmMdfVw%2FORVt3PgJ%2FAZ6wKe%2BnnL%2FV4p%2Fl06N6P3aftbQTFyUvSK4JWsrrwGYOLlTh5P7ar8a%2FOtO8EH5KLm4AvVxLD9wdyDqLEHfVjEABVJy7ZuFs787VIQWc%2FKFxaAQ5sGO5bGy5RnrPblSEEgv3P35x2iwy7SLacWKG3cY99mnSCMnXCbxF4CAKzAJgamDA1Wny&X-Amz-Signature=4ed38b1e4f171fc02f2774d2b3045f7aeceffd292d0eb5b9004f137088586f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

