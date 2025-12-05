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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LIFVSS3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3HdU9L5eAOO2mS0P0wBuLillIXreKLge8eUK26MtJ5gIgTUkwffFIkJ0ngtdKuicf7%2FHhoJuy9cjz%2BjMqMrEGB8Aq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGVnpek98sKGyE8pRSrcA%2BJFBZD2Wix%2FyK1zy8kJTsAXvjLX13zVqgHTQ7VEMM0Asd8sGBYLvqjXkTKLnTSQuEw1DyNJ7dEsMMcH%2BONJ%2BDcar91rSqFf6ufwwzYHUvtUKHj%2BrY72UgkK6svRRfq1ofFhfDDll1%2BeEnfYjuYbFu%2Fu4H%2FlK8cqCmJEK3j2QxP3O6zgmnHCEtJCKJ5XNPpC21ot6r8XpkRfD3F%2BTx8KCYZYusogTQAn%2FRyNeeYLLdGgpi354f%2B970hsfj2Txcs%2BxyTAAJq%2Frg4mrA4mnxuHvohbqUk5igZ3O0Zi0v8N6DFDxtx5ZFNTFImDLwzwaNPHD00IkLqnnQCR5MEIoapZ%2FU%2FyZsaDDyUMcS9ToVfbcuWuS6eobr6bbOgKaMk02a7sL0rErt5AqtivtZc%2FAdGrYcC2sff30hGyHtYkXC2XZWus6MLA%2FExoSIsRU7Kvj%2BYa2C71pPNdl5U%2F86ITBqbIKrfc%2BiSTXBpa0QrVre3iTJvXoe%2BEoJ1NUpHnWRdebELPe2uj9j20ZrGzpC6npMmgCscAxQPN0otxhXtSNtnB%2BTQLBCcfzYOgGaQrPhqf19qKOrrvRRZIxTm3rgpvg3RuMI%2F5Au5%2FCzm0Yh8QPMQkM4eIy87MRS2Vd451CxksMNCryckGOqUB1H5fmt1QQ4zmDrnu55NaQkAqX7qb0dMSo9IHWNfdNkmXnXCcGWn66QukqNwndRwkIXf%2B9E1ZoSYYbWmLxVY1slImmwWi9Vq8hwa0gpWajH7u6cuEVANQiNh8DOWi8VSnZkzIrCVADiX57DjV%2FBlEZz92yMNIIWs%2FJK0%2FLQUGSHhSAzTc88aNslr88E%2FVe7Wwh3CrdCVQjoUadV8Gps6z2KXu1Bxi&X-Amz-Signature=568b0e35d0fd4f5633228484e362ac99eb0e262d6825d174efed1e97562f6541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

