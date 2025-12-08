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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACBO4LL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMgxf5oLLj1qVFJf7OdICiGD6KCED%2FsIB1EN7AWL0SpAiEA26uK3Q5wHICYlz1TqkKlXkUSnQD1HQUsmpf0ZYWSFfoqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLQVXGmYXnEXOCFGSrcA3wX%2B1R3gahACkh9PXxhTdE0h%2FlIVTqFkxy%2BpCEaTJbr3ECdznZlRwbxcxaFrXzGSdcGZkzGzA%2FSOaOCS1zlqHyC%2BzaKQTmdRhPbeATDpUbXH69M9z9FqQ9wJ0wFFq1CA1sOXWn5AsUd4%2FtGAm2IQIz%2BKuufXXUIEAJhHjHcRbfI91Chb7V2eN34R1oA0To66nj1y38zImRhfs8fwJbrXDNJPicklQyJYBofALQwC5M1aZnsken%2Fwn8cYnBBH2d6dvLBcvk25Nj4abmI0e0Me09WokKbvI%2B%2B4WA4mDLryWOkp4ZKyRcOw8%2BS5vuzXbXmpYLzUIPMX6tVsvoJifkFUSmNm5k%2BS%2Frqz1CLaB6e8Zjo5POGulDHty0XmLZ%2FycTa2Hr4xNF1dPCoeBfFfP6kG1ZUemI4ktANU87AzjrbXR7QKqCLFavkmQlm1XNYYgFNz0xqU7JjnRPK%2BrGXPufAPSVAbcL99l7O%2BW3vWCjZj6mevH713bLR1P2U6Qlb0EPHmWJUKlz3A4Hc4EaGvGWQ%2FUwC9pWaILdH8D6o5kuoGijwCX%2FXsGQjo7jwZPR3uPdN%2F1ljbgRB8pgQhGLKzESrZskSWYxYfd2mbnOhYRq%2B8BYTovc1lZqvwtd3tNQyMJTv2MkGOqUB5F2pbLIusmBiAWM2b5uW4EtDpBU%2BFxzVm9E2QfcW7PrqzrJEdZuK3uSK7XPs0FTU7it3JVr9b4WUgEyHPbGtOgQaOb3RzQuV%2F4umdU3n3kaoJz7Lrj%2BpuvlM1nwM2fwZqrX4ahedxbQn0gm6likTYzcPdAxaF%2Fh0JGjC55YndOr98RnsNPTQjW64RZWCLHnS20jkWZigbfC1OakYt5VmmSCF3ppz&X-Amz-Signature=17bdf4c81a6106208bf219ff012d759f32e67c6320c453d96907f9c468125a7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

