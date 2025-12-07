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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULUMQBXP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICz3U8GNmyucqtwwOFekA10P%2Fe%2F%2FRpRAY8%2F%2B7Ny3HIk2AiBAVsTUquaUcgGTkTHmOPHaQrp1khE9HuiJFQGF12kYMyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM67xm8I0rNJOvp%2ByFKtwDMqZJKjNB34yJsfpx4BUtPzW1aOeQdH8WhQlRfdiAEf42T9NwkVAZFXpBK0f1Y50so82gKCN002nbzU7y1%2FeP0gfQt7Nc6xKAHCZ2hRPgovQkpwnJAYcRjY3EF5fvti2mt1%2Bpugpqjfi7MmxD0yD0pPPfbMUx07%2FCiulsfIoGMRZ4d56VB0ZnnTYpiNAoMrmy7QO%2FJubXdwiMogbz2SSiOwAQKPtcsXAgKEUQkQJF6WO8kAb%2Bo%2FJIWnpA2LR%2FoTkvcuPwQcekDIY90qt9Y%2BRap8Wwd08yl7dtub8EERI%2Fy4IL6MJPNLqM%2FN1gfheEsGJadYd1roj16ZUt780xvZuxQXrkHVCoIOn5dJTWIbC05rGGegQ7BEoHnGRvR3e7PBGVLTdq1mx%2FjSQeuPlqXivTXOqX0zD2EuX82HjyXXJdwVbecjcdKF8MxEY1DkDwAHTiBb28bU7NjZBXmsszuYgBHg5AVqndRHM103JkWzqXwppHFzw%2Bg%2Bc%2Fwha7Bsj14GaMqz%2F1uPa4WQ9YRaOkaShf7d6YjRbeFiQDXMX2cEfnq6d4FLGHxwiT1u0t7t8lJpbT%2FhDJekzWguiakadcSWL3yOLORvg9gobACLfEgVWoP%2F%2BRLN8gBamGUgtXQR8wvprVyQY6pgEh4Xt9zD06NHFSAvNpML2wF3KMKrfHSX31jndffvkEkt2k8BDOCgJvsRg5krwQL7OkizvhlZogy3u5tG7h%2FDqCd%2FPExx8i9b0Vuewq4I4%2BZzZk%2B1OEGomP5SQgQGU8zEyVAZU8YwFbncxjIFpHXcBvljCey%2FjjEzBeEhPMBs%2Btf3FsplM7KFvPY214CRZrl3YZzCSEWuyxd2ovPWRX%2Fu%2FgBjrYFgVl&X-Amz-Signature=61b8546cac47b854eda564205b693d45c33cbcc2e9ff1be17a8590056a51ea60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

