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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPNTSAKC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5EeMhmZMjhBP7Om79aQ%2B1nLmI8BoI%2BSUaPna4%2BYBMeAIgYRUNJUPQNbCrrihTqah%2BzAu0SGb2HEoae9wFt3IOFOkqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqtWRYL0G6sKyagtircAxwj2qJYYCndOrlalRMrX5e5VhBotAz6TXwUoIQ6PWYfEGJnG7GPDr5rVWFsEj9pOYA%2BlnzHrt0rXyYAhIeT2Bh5kanB98pYXNE48iboWb4tRoxy9rmyOv5Z6KGuL0wHfNALOTK9HLmfDxE1La60orWVusRIjTf4zqL9B2s52i8mIpNiLh7nNhGrVj8BAIJduY7tA8gcnfqxwvo0o1RnfWcq2slQOD%2FeM8ZzXhGxSL%2BDG2LeQoF8mqlR6fjVBw9Nye%2BJA1KUBLcJ0NJY%2BmwVQ7IeB3nMIMvw6veVE57NJlEfL2leNl5%2B18lLCaoPwx%2FvQcRLPX9T%2BJzOZN1ZIAujZS%2BS5ytq2zaEmXC%2Fs2GCEvP4DxFOSUg4XntU8GGqIcN0fJHpKW4V7tZnln4GiBBuydUEPLb3EDCp4URmNkteYjP%2ByXdeI%2FD%2FF7LXLMydS7Mh7Om%2BSxZynA7h7SO1QhYiCC0EFNqKAY7wTIC7MI2a6Z3sdM7gjdeHwhMSszgQR%2BteZex6n2MLEc7hVkCzLCvKrGL3ZG8nG%2Fa4YWIAcIFYwnGn1oHLe7JbX0E8KREFmvH9UF96oedZPzFRcnzsPl%2BnOsYHdSHjd7QYPbQXXBCqnT91zodlLDvK1NMqu685MO7r3ckGOqUBAmQyBP1oWcieNRtnIYkEZj9f4071T7%2BdZJvncaogIdrLqpHo9OtR42uM0D%2FENCyII%2B%2B6nOUlft%2BigGSWgtr6cMCbq%2Fxpd4F%2FKRIBiWg1Ifrje%2B%2FPv3ebI02V56K9Cb24sNNfqNRFWAi6KXZpud%2BWZqucVQQOpabQWtFaZQ1hlUvafLfD8Q7k%2BTK8RP4Rbp7hEqu0HdFOdXuoRCA8u99lCC%2FN0bGM&X-Amz-Signature=5a6240abfea606a35bf96791888a1f470160cceb692375fd1acf78bc49205701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

