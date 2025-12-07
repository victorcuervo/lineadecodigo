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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRVQMVXY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwZQ1yYS22%2BkpIO0ElZ1%2BNkwTlj7oPL6ZBdWuYMrPtEAiEAjELGbVQ%2BC1xiV8jecuNeQc4Ugi8i9e9poSFA1XIlfkQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOHjBW4roAzuJ%2FA4XyrcA15WOG%2B9FGSi0TInU6%2FwQU2eH9C90RHxWsvEAXE5aTYtyrg7U0hZsc6W0e4TlqcVU5lo6JJiV5qtxRMYiMkamyYzjLRnnMeG14ZYULXd7b7rkuHg3ou7mpXJlLwSPr%2FjbOdlmgj%2B8R%2FW8BpclCQStLUonI1nbaSguh31RdJ1nlL7OA7qja8r3eOfnx3D35b7n1cfm6f9yHoU6LAPSS2K1nCC4gA6H%2Bw5%2B%2Ffxe5TC5KGMKA3zkh7rRe75eGWBoH4LEUfjwI9zyFQRwIys%2FwYM1OBeKn40AdBQYAUgij8mceal8FCfUwyoB%2Fd1Sjp%2BmGNs%2FkOy71MxZb0NSh%2Fl35V%2BcDTKKe86CzbS0OBNAh1ucLu03LocoBx6woK8VP2ocMwEVYRuyE8YAkm1QYsw5TAFPuA4d4AxOvavnuHjemW9tj0aPktCj2S2N7fbyrXhdf7kGt6DvknCKLKgFHO4BXdTOKbeNWYqquz56UKzuUXLfbvMU0kPoXZ3ed5YREPo2oij0gdcrXy5OXsdIyZyfNvGMezGtimhXWty4rLPuEg6eRacQwdxEnqt5lWM3nLjFCN1WCpo%2BXkN4%2F9UN03bueHpiAp%2B6FQLoEX5Urba076anoRcDhnvCoFtDW5rSdX6MOzG18kGOqUBPMuC2E%2Bq9OPy0JLUhFkSVve9gGx8YReEfJEimmGHK2EKuxduJkr1hXMj5QbijO1gEKrBDVVphKon8zdBPwSK7J%2B7%2Fch%2FnfbvL%2BEbatw8XCkU0AOL0QmVB%2FArc3Ui34bUyaSKAiCynLFHY4tkqyWc6nj6YGL2%2F8A4Z6XQlzGOBmjs%2FvYc8PwN%2Fk%2FQ8QosvBMW01qqy9fFo4T%2FOY9N%2BemPV6EVlQfo&X-Amz-Signature=e114c441dc5e431d7290cbd1fb15d5a389d7d1468b37f8998816bfce5dfe0e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

