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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL2WM7WL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAHI7ewlnz3jqJvXj%2FKpPM3QsAg2HZ8PCOnKjSdetLjAiEAutUJxkg1nXGpvjlT4J3Z1WCwT90PBetahNqZ7M%2FgEs8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMdtkvNUsFP4hy9fpSrcAwQHMQW0pGgtKGtqhVHGZZ%2F9NuGyg%2Fd9KpbYBXkK61fWEJdbo9CG%2BF0YuS%2F1MxeqAzvKK%2FXYNtJkZbuzHXgBncEZ7Afmo%2FyUBcvPGNGiY7LM%2FXD67YuULsYwz0Tp87noK%2BkZit27xzaemvfiuIq10JN60fZFiJosnUelW%2BYzBPrK6HcuqPb2EjUkdQQ323he1KSOpppTXp8iDz5SQAjUv4pFr9Be3Pwngk0LcKpdw2nv5pkpUlIWWzCUziY14mre4nd6%2BSHfJEmlDvoszCJXSmro9OKu%2FeumUeaRDx8N8MSfOLYgdSD7sVnZDB8tM655bk1vxs9Hb7EPMYyPrShTgaDuBYTsBApoBDzhxjCSu5KVd%2Bxb%2FK9peJUxTvAty3Y%2B%2B3dGtQGUWXtPmnWpxIBVXd9Mfmtuat9GqJmEcuAscTEGARWvaPD6Ww0XAQLdCaSbJJtYHkT15mvtu1KPxmQB4Zmxq%2FXp5QDcA5RkY6HtZ%2Fa8ZH6QZDC%2Fx7iCRRf5VbHeaxId4hZW7Z89pebTJytsj%2BMTa6Y%2BMwaWBdS5WOTmrdZOlJnpqK5AhcxAAZkwrnxjGS0WHxkbrbkZAioe2ZCyxCmJ9DNZkPMkW7WkCyHMsWdp3JKaClfCc%2FUo5IoPMOuez8kGOqUBj67GrNcHLD9raN6ie8GSFma10Ukn80Ksxl3XUsHerZCpgdf5YZpw3b0hyf4OK%2FYTzJ%2Fd%2BG9ZIcHEK10BnM0DNXre0I4FpVtRNtW7WkAq%2Bsn5TO%2FPfdUSEzsAu9aTalA21Iwwh6jcrRewNBrzYBPXGR%2FFwdTZ1nxOTkKEdVSpc0K3T0bOCEYCRvaHzL0L4NykAACfnWqLpbKv7HI0jGGgVap0fHQA&X-Amz-Signature=d844eff452843f2e7a3d2e5ab58e81cb748497c0528f0c3b8ca0300fc2a0d971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

