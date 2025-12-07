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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELYXZ6X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlnil%2BlX7YhAitN%2BiDw1xcccC1A3JLnRhCsVdWue3gdAiEA7%2B4XmfCitwlTWMG82Io18GeUCM1uUjkqySWt14uGcBcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1gMZ2FrAbOnvvcFircAzKdPbe1VBK67tV1LVprpbiuMPkRMALEJCQJ4zsZdYmP%2F4PbrMYsMnIB44ps529WdAvzg9%2BUgEitQ2bkUt3GO9E6g%2FWZ2sW1vl1AGPiU%2BJ8Hqx6eJh3HjtrY2yi43%2F9%2F1FXgpzVx4HpsfYwMreeSjexRi%2FxZCdxpIZK7cMl5rJay6o41b4MieWKg5pXJgr%2Bdg1Lo5EtE5ZBicaM%2Ff0cBhzfciZJoZj8sZE49fd2upGxs2AjQTVaXiziNrBWsJGXYhHjd2BPj8ROwJmFioIX3DY8BjkV7asz5DeLJJJ2xf9eL5f5RCsi%2BRhdGlS79ZXwCFiEQ5GqPk7qN3xU1KNOPRczKlRl6PGuDkqCj3t3j3L1PnqVH6F1i4vCWlfhOoqWxuA0p5PRbqJgq5pLiwVlPYKFrZBHjxG1VEQ%2BsZB%2F0cVPJl4PU9Kcm2Jutu9En2ue1G8s6x0Ho%2Fv3YwFhR7g7QT2nSCR4ScDAck3oRKzd1%2B88XqVCpISInUAN08TzEqUewuSd0%2BDT3QwvfX%2BkD9ARmhTZtkyL3r4zf4u9UbXDqhCrm98tjLa9afF6%2F4Gt6mXoJ3u5UNwh7CqI07cxi8NEoW7QY9AX3XJFiO%2BjU9VIqoPB71XuWD2FF1C2LmN2vMK7%2B0skGOqUBx9lhTklUmg3E6ctiN6Qri4SrXOzCEAJ5A6BGv5YGBGzirI6WnFp4IPZQoa0tLldb6%2BJHMBr3zDp7eJRpjqnj0W0b3tQDoOrLBatXDtdCdYxpRiNK65%2F2c5BNCNuP8onBrEyF08%2BA1pM9%2FUZHEY6y7VF667hxbjOdaTHj46bBu%2Fc1Ypdir3gJmKfuNOjhv6B60%2FTlK1hMBbJPYBJ6k3eSL93R%2Bmng&X-Amz-Signature=fe9cd0134e188a7200b585ab94473a8c75b6570f345ed2114cd187319f30adbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

