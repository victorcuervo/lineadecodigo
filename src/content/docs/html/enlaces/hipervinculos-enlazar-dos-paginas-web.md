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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEHKCJN7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T192314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCalrzw8yHxjULRJwhY4wDUjhMMuM7fVppPgzNUXW6%2BVwIhAMJD4SpRT3suzBYixrkYq%2FofWfPJyhfj8DlyYE%2Fq7N%2F%2BKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEwGBbKASKmJdHbVYq3AMkLRADEsNQMQpuiLHKVsnzg3QidGRERUuPk2eUxsL7MnyWUoOaZgrbtlqInPrRfQ85ltqkMG%2FfXGKg5FNGqxPWcTWj11DZ%2Fu7%2FDgY6MDIRrFcPe%2BisYpYNt5sqKsZhbCnDrE1xtK5w3fsugYQwLe4dOi11BdmY5JVCVGkU0tLSam06GSGC%2BcE9%2BEQ%2FQCL9hQSFqWY7h0U1NIHgsDLD59lHmOjHZWSbMBGZQkUB528Poto22lzEv0YCYuP61q1JZuqPgW7dnKHMLURcmx2jKYpNH%2FJd0kxtllhiiy2iWOVkhotMPjjtKigKSexnlDRNNv3ptCEDQ1zL9m%2BmqG1gYx8E1Vku41dNIbF%2FTWHzzWn2jKJtWq9ep6THfBNf%2BMgAvfemkR%2BIBNSO%2FTxO%2BaUyTvhkyOTUsfEQhPPwIH2LkPRJep5tGwuPfD2Z8eHZ8oIi6iB%2BdCBJi3eOcPtv5ENh0kc%2FDtogyO%2Fcu5Vm49Id4ZpmasQdCChLvqgDjOPNtzAG4o0f6ODZ8KrhgE6ziyPtLOCkBz0E%2BVUfnHBZqLQyWsAO2Kub6nVEHtm0JyqStWIk3lFvOcORBmxhXuDvDXm2OI6wgc12zQK321iKxaqCKkdkdWl2e9BH3ziSzvrCjDDD3uHJBjqkAdldd%2FSki%2F8Crv0a1kErALCRB0vSrhgNzIXP3J55My7x7MqZCYQpQ5cOXNxtyESp6RbY7sbvAMHseExRptNLEywf0ZdNlH5JD4at4%2BP2FUvcbEruW3mKiwNlQjPa47xm6Jns0TZXybjmGLwR%2BgHBMKgownuunL6ur31aOtVGucLhufofqMT5oNDWe5LIA4q2j1fyvyV%2FWyuW%2FhIFroePzSW378HX&X-Amz-Signature=2f30cf4514c1ed8cb1b0218da3d9f4de04e9913f2c83f44f58b0a5a41d4179ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

