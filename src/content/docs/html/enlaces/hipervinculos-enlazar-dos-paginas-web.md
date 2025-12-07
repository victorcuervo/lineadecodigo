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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJKWVZB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIQFS3zFfP8h9eaIr2PKaBHH6IEILsnRuzASSHKzg%2FFAiAl%2BY%2B5Ty%2Bc1Fq5JnLTB%2F1YBtM413hhHBM%2B3e7qsGuGiiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlmkYl%2F73B%2FwDnq0LKtwDhcBrtmhvdxEkIWwWtA71ER1JLE%2FOCapCYK1wgoKHcPPu1UyrOOlklG2i3W5XNYX5US%2BwFehiuEr0uTP6bEOd2elNgvM9T6mhEFcuQVMKoX9e8QoQ8kOwpBnx7h4fNqqkN6WTKsLy5H0zyZ8lp8LS7%2FMGXFB7bNStqTf2S2vzkza50qUbM2TVoPUSo7KW2gUxctzf2L0fA7WIntAn0P8oj2BPUCp7f6oLmiUTxLOMkVRg%2B2HN9PBqUflOMvTzjT1U6MwsCiYGK01lEi8bCA7cW8uPy1oY9FY%2FlRquOUCd9OdxKHcPHxo3HlVtSoDPhT7mA8%2F8BzepVXZiAeYsZ6%2B1gRewYF%2BGZC0RLKs9BJycJoGVfxQ51C65dIPKEcbzSLEyYFMNRfk4LhDjaB0L4cOyLeUdchOCYlydYGFJW2G4CtLakU0XBta2zmqS99hZ93DZQNXCEvSIHe9LEKm%2FcY8h9gk6Htm%2BbvuawliBgLeI%2BW2oIc2%2Bgwwv4ftUs49hS%2FhKzoqq2j2YwkYTouEX7PrUJ%2FOcmgp09mnEcx1FXkK979WGmqGk8aD7wiGLnO2RqPHwTxqpJIILpFpxHCTQStk1BjxnSPsfbUTYhISKfkPxjUeObYvjGOOCghUt%2F3Mwsf7SyQY6pgGvxDC279Dlm%2FmFN3MO3YLpjT4TM9wVuBwH1qTyIoLn8TygYXKyuGm21d023Fg5CFyiBzg5mdHacprhfOGazMpNwjDrxX3Xbj394Yf8JhvI0YtVdvfR4brGEbt%2B4%2FwYGCTTPudbXraBG6qDed0p5uCSHvuFm37WKcc%2Ff7%2BAtjnzHCcWW5zRCpqL%2BbbNP7%2FtcBTaBMuHw05uICBk55cePmhGg%2FhhzGB2&X-Amz-Signature=5dad9df1439e0c0ec87dd28f5d88300de262216b54aaa54a664b5e963f8c25bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

