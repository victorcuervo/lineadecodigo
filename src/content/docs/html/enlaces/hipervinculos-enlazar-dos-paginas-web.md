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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GXXB4Y7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1Pn4CRel90DDiAkdsxyzm%2B%2B93Ce0%2F781NIIIHM%2BwoNwIhAMQb8KbSLttJfDihHgbfoyU9EsscZ9cx6saoX5y1a61iKv8DCGgQABoMNjM3NDIzMTgzODA1IgzwGpn%2F91jhBsln%2B6Uq3AN18hgJAVnQYoZvwjsNKsHpYC0FP16%2Bew3qU4vg9qoUMIkvPU09R74rfsUAeEvzoiux5tCaC%2BaPHSPVt5KHBwDsctYWCAD0gDVH%2Fci%2B%2BF9GfcGeXU5awEPtykAmR5hSom%2Fjv1%2BmrHYqm8%2BzcU9%2FQZVNDdI4R8wu0IsU10nRJKjC6%2BnLgGcpR6y2QEgKosNA2lX10Wk%2FZHpipVSI38h9gC6fM2rZm68XahQInfias8hbMXSL8z%2BOVghetDs5FimEUobSeljAxmJ0iyCt%2FXVuUkDu%2BXJlQlifaNAV1uiybZo387cNDuZjSm42OUKERYT%2Fct5r9c9asbg%2B7xGq7t37OWGgpg52H6bOcezxu1KxhGEc8rqq6TMQ577TsIDXKplCagX9QMniAdKJrNpSvanWBo87iB9XZb8KFzKxufjgQHQ3LFgHQkpVeZG2ILuEOVPcdwja2keSnNybFWMAyNBFYR4z7HWnlHjiiZGfpmJArSTKP%2B38fU0GmQrpQLFy9YwKRwRieN%2Bdz%2BE3h4olIc%2BDgC4sPrqEdGZrQyFCXChVAXYTnCdygEVYDdMiJH9m25yL3kWZVAAmftuUie0W4m1vYZMU01H67S0lQThUYS679sAgDpLF7sf3v8o5WDqJdDCoxs3JBjqkAa3CdX%2BnZtX2K84nuu0WUyqxbHtH8NW0CryLbBJt1HUZiKxOiSYZ8Dm0f0kEZG6toWQCAEevyr%2BHTpMSDGNuEyoSu%2FcYXJgZs1M3XQGpGrIH6F8nZrCwAGiRWk1%2FLBAwlfe33pcvkwGsnnF8JxaRFW9IyVTNEeRaweZbVH4it5%2BsycsxLwnwA5Rw0kwCmu3rbfIYjwPjV5W09ymf60RdAZHvW6Vy&X-Amz-Signature=9bd62802b66abed517b438ae4641972f8ddc721e6ca5df256924c1fc800de3ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

