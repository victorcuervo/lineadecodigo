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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7ECZU7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T174606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS%2B99jtdDOXvV8PmN73Gz13A57cdYoeDUMPUbxMSb7cgIgUUvpLOyWvDv7rWxXevFaVEVm4ndn%2BDQPzwTQx%2FPUhK0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNb%2FmUoNnn2dle3gbSrcA6VyeUzY5Iu91SzMSHjuMNF1sZNUxTixQU3lO8SaHXcPbYR66oLC9MUJSkituFPWQMhrR8WgOAumL9gr9roU9JlO59yXbniFxzTj58O4UqA5CBPI6%2FbOxN67BCAU4gZyyRLt6kBeuJovb%2FbkqDqX%2F0YzaZWRPYBLGU%2BUHt%2BzrPAvpU7hcu0au2oJgc2xl2M0xmrJzuS%2ByzFBj0n95YEg025ZKwX%2Boftrjn3XiSqV2q0%2F%2BTneVnB3v%2FYd8YKyGfDHL%2BKDFFivUN7XweMvC5eMs4K2u0tq8dnhNXHputmSW6BXqloex%2Bncpth%2BRMIs%2F9HKlqgv%2FNL%2BEOzcHdgKsiBbykBmtz4BQu18mL9UOYrr27yvYPl%2FxkIrM%2Fi%2BlLML3RrG8Y4vfD%2BO12wVMtlvldzsCnILPSWQIkpuLMzl8OUJ1P6Ou0rckGmCEsAOlK%2Bfmn%2ByQ%2BYRpVDSNgjFHpvAxMcJN3kaB3ex66vKFlz1IgasH9HXlOzUAgkaHtiOoSYv4YH9GAMQl34XofEXyWetenJGf9hJ74s72gkMh7otElGLJEA9yMKSvmFTLzgNn6XgSyfHa3dDu0HuiZF8K0ZQmucuvxJ7S8zccnfo1BhuqpD%2Bi0yax6hkrejkuLJ2R%2FFnML294ckGOqUB%2FfOyzWgC0eN3GUIF1PYtfsajA7Z3hyqYFamr0FsreZE2gHfcMjusxASpFu0rxH8WbIdlbhTEc78vq5Y1B%2F3vVj%2BezE0lA%2B%2BFmHhAjb%2F1JPc2lt1spgBnf0wOuJY1blWf24kBaKrv1%2FknR2TApJytXyUhxbDf4ahqi6P27YqkNC42RHxFvOX0ImBUL%2BCo6lyF%2FjI46I%2FFWwWBWYMqV8HYNgz%2F37w%2F&X-Amz-Signature=bd55353e56a3e7bda51748ea0a1b6ad64df32336d38feb97e16bce4340efa3d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

