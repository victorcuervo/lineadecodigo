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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UROGAX4U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4vb0MaMy0y3r%2B%2FBUsRkTs9W27RGikyO6rB1wK6RLVPAIgf%2BhkF1Y3KuP9sBAGoankzhuE5g4Xz6k2vLo4pIkbYZUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDO9PdvAHXEKeRdZWkCrcA0ByU3q9JW0g0YIMhCLnHEJfK0OoBIvGBLarMSDRvIqzL6MLV1KW3RSl%2BstAAARlyXLGaG6AOdK9pmvrHbuAbAjZaEyaW5LvMKUBpG3TVFeaOZANolQpLs0Um9NjKuSp78odhlMoPP7JHIokVkLYCnW%2B%2FGsDSD9uZZMtwxOpJEWy0gB%2Fa%2B2q7oW8mjCWEywFcVYkRVaJCWHWx6AaislH6JbFRV9YHFoMtu17kv5s4R5K1yagDA00D%2FlL0kcNo3wkc8jrg8%2FJjW3mo0aytXSgF3EubfUJQqWTUVZFXpdQpuEUgd%2Bgdx3dTHxfXT3z%2BvH%2BRoHN5EwOsRUY6FQQ5XQMLu72dJ%2FwSZJKQBszskkzbqwTYv3JyFgqTxB5ftuQS3zawJVvAqMIly1LpNdJ847FAkcNe8ROhIUzSvr%2B1skJJSW20FzDhHkbZ79c6%2BRxJnxj78kSr%2FUxz7byE%2B8SCEP0kJMbFqROu3y0llNxD4cgb6zDdzwBuOUgGVOLWOHT%2BVlKkEfGXpDLikdYwrp6ZTaMAdLi3cMW%2Bpllg9WLXOAstbbGVzvRNrjVZm4ZOXGAu%2Bb4qg%2Bhen8X%2FWkBTm2IiIUkT44CQxeFMT1YXjHc%2BFZDNKGwiOTocAil3rB8DbLMMIew0ckGOqUBZc4aj4ft1VE5b0PKmjd3Kfr7ugw85N6rKKhRPrY%2BYBhmLv80pYHpzyq38ru5k3y3OwSPWFITWOVvejMLYXJwtF5Ygu%2FkKGt0HRDaP%2BcdvYFAX0mH%2BNPk%2F813Vcs%2FnKIVLxS5h62Ix5XR79IoZcsN8WBCj3zpfbPbYHDZWs9dF3l0BaVCt%2FfDUp1GnfugTIy83iIeG%2B21FHSCafNc%2BEQP61xrGJ2T&X-Amz-Signature=4099017bb0172a3b0d9e40a3120b4ea48bda17861d8e502f73d3c5feb38e11a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

