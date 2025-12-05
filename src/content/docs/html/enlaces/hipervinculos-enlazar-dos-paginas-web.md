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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVO3FZIR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2lefUSq04U05mgXLKFhMfbKnw%2FhxMr0CEsSI9VLzaiQIhAM9G%2BC40yhMpdqsYP7NqkPJsmANFV4%2FzwVXxKFiGqZdTKv8DCFsQABoMNjM3NDIzMTgzODA1IgzhVpcivAtdZ2PK5kcq3APhwZDCxnaO2F%2FS%2B%2F9j3HIsfud8zByZEpjTH3euO2Wwl0FQgf4wNfnZesEcSG%2Fah5Z78IeDu2PCGRuYoXJURzGJ4TCE6uHolWs%2B0NM%2BtuKVC9bKfHlO2Fh5SM7iiGSTeKK6yMRyoQisBkRaZXPYt53T2%2BWgmcMUfgNPY3xvR%2F7dmSLENvB66qcTKILz%2Fy%2F1vqzMeK0l%2F2CF%2BQskN4L28CiZxzOJQFg%2FyaqNbGpnhOB2D%2BFreBQBUp5tRrws81y8qofiBmpgzt5QqdQfYfNJJI4vO5oBFtZHWax07W38Cekcl5pQeHtnvDusUoow1nMppAbCMH%2F52p9en9j%2BJkCiSSbscyvYB2QniuKtN8T7N%2FQu%2BPCDBPsPny%2FTWzcky7yT4sSDw0pxv%2BlbM0NN0U4PAt%2BJJpxP3RB3bk9D8yZ2XUBwLZ%2BwkMjqZV3pcBkkV%2BqMZof3wWaamYSVJTqir8fnU4sxu3mCP0XktIzAsoKDfX%2FGfAcipYH%2F4LuDi0ObYj6OX2lNTEwIkuaDsRCqUtEVoB010fFxdSjQ2x6YGk8fUs%2BOpAVJcv%2FAJhChMLniTbzTz%2B7CDlIFoOMZNKfvkYwCCW%2BM5oTnUpAT0G7HLa4TtcGK%2B2VbRk3Lu%2FUdczH0jDCx0MrJBjqkAbBRdpBGkQNivPHyUEAWZg841Ddp30MYgXHpDaVO1prpB0uI2R%2Baeg%2BE%2FWOibl1bZFh3SiTIdqvlv4pxBSmNfjHtS139otBnP0Cq2QYqiXkpZ%2F0dSV6%2BC5Vm8cz%2BDiIHIQL2MZKeQIo3PGTzOYG5R3Lx6FRK5LcdD0j%2Bu5BxL8LTkjoqWpSsWfWzPehrnEg4YfByiY1kNQ%2FoGebfjQDCmJHS80PG&X-Amz-Signature=cada77a2431ff1014faecf359bc4cef962eceb35757b3951347ce0a0f753bac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

