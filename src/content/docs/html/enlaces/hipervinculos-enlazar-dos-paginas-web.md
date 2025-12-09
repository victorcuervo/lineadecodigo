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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW664MAA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmCufRkwAlffJp2bEnr7BOrh85YGAoAPkDdz3HEMZX2AIgTQuCS8QG%2Bh2q31Y35IaMrm3iHK8thcivCHRwRLOioTcqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2zLn4q32dbRY6hQCrcAyX33qzz%2Bbw7W3Jroym55vffnwP8vvmrZa%2Bg2Zvna15QD3146rT99luDUwFv8k7mOYXgRrSPLp3%2BPbG5Df5p%2FTuYmUvdAgpzEhAGptILGhEva1M1Ud8itZDxpTB9q6SWbWcYqWlt6c50Dv1OrPb4TklJ1t8J9sBZOtPwTkdT0JBxrPN25Q8cEUbsRmCAMqf0KRjf2BRHTA9xehLiusafJlRs8aGbrHMR11pgPYiTCaFklYw2%2BjW6qH0iNePlCkULQzUePapk8e5sJN7jwlcSfCGsVqw8wE7yWj99ZVjsnGFJp3cXYRHwMSGieNRoLZhpqsbEQJZq7ZAwXz75UMYlDWJA%2B50LqbKyvVJVBqwBODMxhftID%2BGE8wofiSiqgjOuCw8SGHOoDruz09wKM5uGlqmEPDk4zW%2B4usztDtI3JyI8G0ARETpYriBS2XM1zkA5e92bbuoxzhnJknwfbKFQz64nMRG7czwJ%2FeZoBPyv%2Fu87JZPDNDvyDG1eb3VO7Z7ERBYKcjDvUuLgHawurPUwrc4ZlCNh%2BcUa9vVkyCMLRAoWabVb5%2FBA3dUps2OHI0j8hC605BNgqnl9q6Yam9WHdeIEZR8q3zi%2B%2F0V8E8zPLYuw4CrwWbXbnWMdo3yqMJOH38kGOqUBR9%2F%2FnhRSd%2BpUjHkPqU4M%2BCv55kg%2Bd6N2pJEbZfXiTuqA%2FRbFBhXFQuVidISSscp6brCTs74cIZ8jCDBUfS2ZXk6AVzEU1cPukhGme3DSRUrAJtekr6HEy5xDiBKHGzT73RRbDShpo7AOh2EpRNvbK9rSQlwITjrs7BfOLe5PolAR4Yf%2F6i5MEk%2FpPj99EC6smHfeH%2BG6oWYtY3oXMdrFKDjqL8aw&X-Amz-Signature=601073adeb4d9a249a8dbda77e557d131054a982ff8834f44cbbfe578821415e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

