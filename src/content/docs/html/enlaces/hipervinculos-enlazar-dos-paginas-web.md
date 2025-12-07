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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC2G35ZI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7sqzxpE5HcAT8%2BYeoh9iH%2Bf%2FC41ajNe06DFLlSBRT2AiAoI4PwGf%2F6g%2FTiZAj6PaPSt3yMNqjeBNzTF12Gjo8ruyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Q%2F746DUUCMIIC%2FZKtwD%2BiMUeWQAAxoXk4SJEKxtGSuZGoJKh8pmJlFHzUxYgD%2F769KDpX88%2FrWabXlqdcU4JgVk6Sw05WOf4gFcaGYxAdsPXLhNsTUwFM4woQtb3LdKRrJ9Y55k%2FtJoYoRaEWvX%2F7YTrUGlWJNmWXf3DDOf3gkcQVJZpSyy7v1ZelN7QuIGZpQ0Pi8dWMjMG0Rp%2FhMsRPPqEU43M6Z3dEJB22yoxBnQuUWgGNWJ5dGuPhIQLHpotYlU7Gj%2FPd%2BCfgC5%2FK3B9cdRvhFmJyKD1wgeusDUR645kb84IXbmT%2FIoqVgH5%2B%2B1a4K1QHfH8rTMKN4JpDc1Zt8S55dnCt%2BXp98ljQUfmiO%2Bw1ayY33QDimoT%2BcgI4ofrf2S0TCeAPYNGwg%2FNkwDOQEN2XcIGDbjUmfPxNLm4rXsQ6oWK8jQ%2FT0WRBdv87ZqDjXVKCIo%2FhauoKG86ACSgtMgdyzBIRTqjchFu7%2FCX8TXkfP%2F0tGbddR7tPrdq1RMxchZFF%2BCto51CREI3DjjOMUlwT1XzltpvO%2FjpJaB8Q%2F%2FTUHsjiYbvIojvw%2FqHpOhKo9hTG4RHivBjHOgXUGqm2%2FJnvTr7WrP5xCI%2FpjcL6CJKzMWOFlPy2tjCIM3pnFqkcq5TNhrim8QxTkwn5nVyQY6pgEJ6i79GEqD2hfaUYtBlDsdcfFBxRKcBAeEp9%2B4s5IzX7wOLTIJFYKIqpALP8%2BzLhDxQKrs9PCZObFdzolgEcz1dDayWYe5R%2FGxZOKx%2BxtQeEFDDT9Tkw99dzSXgfiUkr6NPGKBSkexflb%2FwZNEYyJJxwU24KlQic3xnbQkyM0Ku6MQ%2F4Y8BN5DFlN8D3YFVuvGKjBzK0LiHKWc8w3BDT2%2BxAje%2FeB%2B&X-Amz-Signature=2f8faf6bd6c94fabba405cd544a71213e8170fc801e0d2cfd921fef5ca53c367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

