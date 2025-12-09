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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKC4GJCL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T160040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8jrAm4V0QidXYO8U3VygB7eW6eFqobxGbijIQ4g5KeAiAhAyP%2FMSF%2FBn95TJFQKDX3wodhBWqV8d3ChGDvvwJpLyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIG1hWz7XRlGH3%2FgZKtwDvLnvQrZIFQCLIcvfioaU6t6nerR1orCs8r0uHwTU9invj7ne%2FF%2B2D0rxmj0oWdoP9nY4l5%2BQqlfrhymZr3Bo5TTHIUJsOsRDfpCPjHuB%2BvaWeAW%2F6DrlST%2FuIZ1F5yAeE%2F5D%2B69p0ItcrRmjturlBr9rOczxWLLvrFDd%2B4CBPzmvAgSyD29GGTqk9bwe09GB3cFEF90LmO0aOCz8ATmhC5C%2FiYs0ylfeqIkHzMSSM9BQoNQNSOWFb64q2Mrj%2BLM02024M%2BiBR29E%2FfolSJYi%2B8uq%2BXryOO1Asqomz3VtgB3uYcPFT7k70JnXLRZwI6H2EjCg4UWolIoHynwIDem1kWEkQ6ILP0VgQAyoDzV7RDehv2woyQDqM4uQDR6Yk2WIsh%2FaZTN1%2FelgyvZmoJH4%2FZtWefed3rJg7fJgkzmSQ1kOLYQI7s2EsSLpWXVEufd59nzaD75t2ElNX9vO%2Fjevn154AbaNYJSmbuE0SyVNE%2FbY1qNgsTDGCEoPSo8S3lLMJXOObPn%2FNMgy3FAybOPDMPu6tVLkFew3jED%2FO0jDEj0cvLSJBRWP3NVftslBJKNT2VYzh2yNMq2UcqU1I5wRuUWR13uX%2BtHPsqy%2BJh%2FWlLwgTNejaRTFj1PRnfIwxdzgyQY6pgEnX0zJapESu6LQ1ntV%2FEbHX0SQve%2F%2FYVkYZqjhXLrN10Z5TRLrpbpipK5dqGBRvteorBUfPlaud%2FxEpHTRapUQKSTjILkym%2BJwY81WWjKYYm71OtAvZyPPXj6b99qiVsD4nKydjh8vEW6%2FU5s00koKp24mjueCcUdv6Cd72neKoCH9e%2B9afh3o9kJgexLs45vJWJSBcwaMCE71sAxyrJJX7IEYw9bp&X-Amz-Signature=f1c330d493c65c0c57a0e53b8bce16246638c65ec2ca36351873e0ced46288fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

