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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DRULFJS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVrY69NYmHDtqJzQ1KLjK33dGYnOBA2RM23Ggu9prlAQIgGOfrjuEaw8Vm5YLdAPNDT0j0%2BUqVUyZUFdJRVy3os%2BYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAt700AHJI9ULrDB1ircA%2FdmGMl%2FcOu%2FHe8Pm90EKv%2Ftb8db2XJXMTjYIz3hHAxVa%2FxMszQruogPsK%2FiyyBs8y4TCAV82VW%2FMXcHwIBaisQFfxF4L79qWIAiIsOUeDol5thpaxC9lT0wyBiULp7DFqs5tBYBvKKzd5EwrqqGj%2FvMVvlTF%2BvhNAl1jE7YElP8n7Bxu%2FpZysQwZt5XN8tgtwxSlhMs8BflnKaVUM9Bl8LgLbELL%2FJvaP5SZDVmiyaS4rG2u7oFHP2bPYXhjDqOnssvEK9xvCRQI3JFZOOImE2OSIDy18ARmsqAtFj5nvvbMiNugfKiyKRibwBuSfLwTyTUvJmpCHEk5qQBYjApY8pwULjmkiAvVQQErBXWwDCdfqRvQfQvpa2MCY5f%2BhlMEDKu%2FoNkEaPedZFbqrbP3Yvfgxhb89L6%2FoXUOMgbD%2Bvk84%2FDimtGvmo0XoU%2BXjnz8vCFm2X7FSbf0%2FTy%2F%2BDUuX5Ljc5mLT4XuLs8dexpOjeaoVnxClu8dzN8pEVq30nXgSqqce09JSNErGzIQvgqp07QhYovybXpNeTFMJgF1Rb422uXri03sAeD06JNmzHu3do%2FN9y3bL7B4LpRrIgHfwzMDx73LS42AintNYA4M3gDV%2FKVr29qe%2F5w4v8dMOaJ0MkGOqUBO5f5sQvOPNIqwjC4%2F1A98ihoLPAZirdPhx0OPFKXwXzUvvobRXaVYJcNjHivmY0iqi8CpTvRQU0HG0MA90jqZa4AG9DNrm%2BKrUkGtJGQDEguEqKv9eyDe8Ybcsxkz6mswNqKAHS7Bq3YM2IoMf%2BPy%2BBiWaSXC3p1V0EIK3EZ1nZspd4sllQD0r2bhrX0d3%2FzkMK3V3enGCsDaw7cHbPfB69kTHNn&X-Amz-Signature=238020f8a4c7ddcf4439fa81d8153a784cedbbf6fd983c7c4a7b28330aff9f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

