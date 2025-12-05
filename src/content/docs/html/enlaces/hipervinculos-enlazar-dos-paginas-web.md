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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZDN7SNB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmbb9g%2Bm62QkDwx8AMTXwwQl9zUll7gOLNjtfoQB%2BVnAiEAgxAB522THshgWFZGv5oFgS1ktzf3TtaFZ97Be2QPl%2FUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFXBmBoUexyM9Zd5fyrcA%2B%2FmDsKA9A%2BPgiI99Ka2NZ9JHQaZpAh6yiZuNb3q5c%2FQ%2F7z0UoFXMybKhzI5RS6Ih8dmHTgxGRNeUKWbRid3vhNecwAeyH2L4S6Om7mi4XK6Rm%2FrDCmQhwzWztI7XS1JPeOHrSJw8N0chaOukrYOQEn2K9MucsUasgZMn8tsAesXxzWDgGAZY1x9qRhKqz51nY8mSI3FsiN1mxZBawaUGCwWdWoH%2FTbOAxKyrQYnVgnh9G2Pc1RQKuMjulP5%2B%2Bzw1vL8RWn929YMUpG716bVbGKibCer5pKRe%2FxPd3GzUBAbvONZI%2FpFuO0Ko5YZwaFjNYSjY9dxUnjfdtyp72ZyknlmO3stIIJpgcSLEpVVNbZNQOG6hGt%2BQpEj878TyYCEy5Om76BGkYef9RC1txG2%2BgZANDcZT3Ae1TnDCmI8ZR0whan2A3hTj6lRv%2B9N9oI2pdbj8w7wxzZiHArRLKHrCTAUW7O2kVvlS93W96RqzOVBLwTxrnxrzZn7QiZETYK7MFUfIuabV0Y7YtsXX1l3Z19e27Twv7E4KGnTfdohWjFeykC3n5s0M5w6SG7uPJEI%2FcYkR8SawA4vKYcEV7qWRyW%2Bvv3YNeK1kFUEI4kBSO0ejLI6p2kcWAqedL30MMDOyskGOqUBDQXaYl05OEuVGSmXGdvTUc3IhGB4QknCql%2FB1VKJOZhzVBJB%2Biu7tGRzFmagu7Z07MqVb8MsHf5gAfFIF1YeDwpxSpGeHx1P3u11ikZOQdpPMe1AbXEOSLEK%2F7iAzFpi5h8zVqMytlhizKcwDLTDVZeP%2F7YbEBdV6J9XQw1tG568ONcYtuyDDnOgTsH9Xag6S%2FkGXvkCZPQiPBj6CCfU6OiacblB&X-Amz-Signature=ee458bcff319e8012b9f77f36a4f038e80e5aa6d919b0d910d7a2cc42f143097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

