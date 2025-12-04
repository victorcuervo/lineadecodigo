---
title: Hipervinculos - enlazar dos páginas web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW4UL4GC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCvZqNuecxs9ZElkkYHc03Pc4EUWa%2BAVlrlztUpD50tGQIgO%2Fk9HQ6lpH5ij%2Fza%2FHDBg%2BGdotCxXIJ2yTsrvlqfMdAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMOVHGpm77RB5W3qZSrcA3jgBBW%2BMlXA4MKLbv7fm8124uNAtQ5xht26Gyv9eUIjytmXFk8Ud6ULjLZfuOrGzVqkgGJ3re1ocGDTWs6bKafXVticV2WUrF1Nig%2FNTuLb3rst6ZeNdINSdHj3VvC1Ns3xqAsxvzAj%2BgSJu1f5%2FDU5%2FzxIi%2B2T3j9oCTgnu8cRMTixNXq2fS9yZyDNvLtCm3jrr03QsO3d%2FPuxjDtx4qTx1LuqC8LTV42h%2FwD7SwRXz3IaMHWEwigQ9B4nngRUpsfbD%2B8DUE53v1lopP14LLWZBdM0L83vPqAUrYx%2FUWLDfedM0ojmB3SJAVDOYBA68cLr%2BAkaJma4zeffLXnExGg%2BE0l6MR0MCjpvNilYXaQG%2Bf619mtnLdHDvMb3R5Qzk3HHdi6gniz1XvE3CvnR%2FN7%2BtFqw2w%2FMOsnqdabWpUizFWN0%2BJ%2FLYQ0W0E1HsiQ77yx%2FgA2uVzfr4ZRnf6piyvK%2FDZQ4GCj7w1mp7y3gYKQXHknAmJqys513JzAC%2FZVwDfb2bImPWQof8fDe87BrILqHJa6hh4yB%2FuGAeCvmVsrrIpbyGXiFdTsZ2u%2B5jq14x%2Bk31x6gUdLa4ruM96uvGEMejRXmWCNR29Og3deV%2FVbO1%2FFRzs2VLVyk7yU%2FMIyGxckGOqUB794Ic8W7ScBWUETgD4KexDG7axpS5yELfdMN603z%2BkDsSalv1mqGrkJ4pnmh2aPCWcOWV5LdmwDmcq7Lhavjuzfe5K31ot2vhA5RmMeX75tGg%2FG273uqd%2BF4TnMBQFL6%2Bkh1OcBqAyL7cIFEZRzkSPzIKOtMttpaVyhR1ZfxcML5vHcAR8lj0q7EMwHxkFtZzjf9q0PZzk543qGvMFA8tpcQwzpB&X-Amz-Signature=e45d6137729c62d07dc4d7613cc900808dff4de285ab0f17c593c599e1efb1f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

