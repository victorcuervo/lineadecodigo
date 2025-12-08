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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCU73ZT3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyp4uPQVUcnDOUUFOwY%2FveyaetYvXb08h9SYZYBXGuEAiEA0jsnU%2B4fPtoTOsp%2FywrpxySjotySf%2BJcOnSrOTzo2sIqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjo1CZXzyya3nO16CrcA6calYAoHAjq08lH1zI4oGZIgyPxqWK%2B5cp9HwWnD9oPnUZ6bIkTo29BS9HJfHFq3ThFgbRA%2F3428ZGUeR2gH2XJr32MMup3jXihrm4h2WXew0%2BXjxRennj1ECvdjQYCTS68Y1mto19NIVGZouMrfTIAqEiDdDdDOiSEZJ%2F36jm%2FDakZRhHrxwP7sabUJ1FDCp6YA8%2F8M9GNMu9Bc9%2F0zuqrBfOT4TiahAEUDaRRWFVNIVZ%2Fjb1%2FhcJRHcbjviQXsvq316zEyw3XwAHzhN8VWTFYaBey5bumS%2Fd4fajwXrqvJbH7ioG6dex%2BiuXKa3xMkkqPIraH0KhmBywV62biHXlAq%2FpyLCHteVcgAibN10Zl%2Bf9xc9inAs9XmC0kcKfh%2Bo1pgJXKt34K7fGuN1PgIPD87lkrb0rR1nLgsndCx32dnYjfITXwW13fmI%2B1c1BdW5EBrVTRNKQB4lw6B1sYPUUu10NTqlOF17TMeTOEvkqNOvn%2BkAAYgdCN4BGw2KjkhSUOURFcvXldQvVjS16WVwNao7goB1XK8gLdhuEmHYaySy%2FCKMaqhwz%2B1KNwWoQiLHdcL%2BL5m6P9dwATvSlbZD9hd17MlafjCFQyDe4HICeU6DL0jyUgcKve8FsNML%2Fk28kGOqUBGDk3pCGDSCCXi9z9JIgxkH%2BjN%2B0QtL8jDeoLUUoh3h39p7rUcnZugp4%2FkHloHyKaozPvJ1wPDRJ9bmk%2FX5vOJc7pgfP8DaI7ePhKTJlhBD5FYoPMztm6xSh6zf1D%2FPmh327mj3ypGAZcJ6pQg2OLx26oxukl5V7TcbTMqG2qWsZZwJzyi3N4QUB%2Bnf0D6J94XvaLue7yzYFW5bseyHnE6cPEVogN&X-Amz-Signature=a530519c80517a65c2bc07f086d23d9ba94546d0889f6d20b7e071ed4865b1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

