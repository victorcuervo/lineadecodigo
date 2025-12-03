---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZX2O2RU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDW4iwGQK9iwmbcX68lRdWBIvSM8wE075Ec4MHCEX6VCgIgFY0v7o0Ob%2B8JGjk4ASVEh25okolReuVgM0GM53ZWAe4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLeoVSQKFqPTk1lrPCrcAzPiq%2Fbi2e%2BXm6aaCdCGyEadh3ywJS02q3lax6x2PsanVLxLa%2B4a8TpKpxSKYmab3lOyMBRTOueQ9yiNqA%2BTO8JneBMX3wKvxW2aRyk9G%2Bjcam1ju9rKZVrUinQSKBv6ENNP%2FFqrW59JmBM%2BGuQF50KKzZbH04TSdCn7lu0%2Br9B66YT2isNZLgk%2FQ8%2BTi23lWyfkn3EqwTZjJi0S8Qp6%2FLAELfCOrsaOyNtvfVqDEje2bjaUozT%2F4r6XjKDbC43L2mYEFroZOEZaIWs3BAdIYApzPIWXDfFb0rKQ9O8sZKlserTIRJ1usRNu6EfKR44OzBE74nDMi7ZKOnaliE4khxgayhTnLM4pDY0mKhf%2BJDScIoUSfVRtkZzDdEoDDfYUlZcd1RBEvbQ%2B%2BzYcYt9aqcgOlysBWl06GYPvKTUlhiOQXlUFlV05SojzHpVqhmjeIXio3mpdu7Ods17uVlqiOjXXx1SElDnuWyyyRUWC95yl%2BSBAuPpRx47Pk5%2BsHdbreNF4QvdV64MO0ltWScJn2j%2FdYmG0Upvjtq%2Bcv%2F%2BsBa2jYp30LOvgbHlFRyZh%2BPDPdCxg407b5lOFbfhHwnkJU4t4MWNffio0p0RXOEyMAvoKMAMXAQVZmAbG1rjZMLz4wskGOqUBU6Xs7U2V0d928CWXlTZLfBgaiVa6c%2B78oYD26b90cAYgFYNpCI3rN2oK3uXpy7TzLorvu%2BHvvhMgHbBZxIduY9Jhh%2Bz6G4RGtAzRu%2BkPZv7Zda3I3ZQnQxu6g%2FmpAfG5UlXDz4NpDp8XVeRDH%2FI49nDDaimwJ%2FAvAWzivFXXFKYfMlFIWDKljbl4GCBiyKGnErn6rwtJDwHcKzW%2Fh40x2sfdiyZA&X-Amz-Signature=977e72470bbca50a4e1ef52c13b41efdda858b0f82680d53d32524e3d3d37b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

