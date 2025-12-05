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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZG3ECBN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T113029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOh4y4IC7LFDMI5LdWhoNQWfFO%2FLlLt6qWnhoivA6sGAiBpzUvaBKMGcdx%2FFyORhvZ3xwKhEejf5D9tfZX5f6Tumyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMEwUk1NCmZQlI%2FY%2BSKtwDLFaFqDcevFCG7jOfLlIWXwmQppyFbqOSwKHB%2FkrKmG4VOYaBUFJkeQxvxNZ03R7bN32h5JWW%2FlM0H%2F9pqfHGckeUaBdfmsXE0Vm0n9WJYFdUxKmkOqgv%2FGdaqbQlS9lKdg3c8CRmwOHcEV5kQu60FuvJ92Lqu%2Btz0JknTTMz93JV76oJ8GmebFrzRwzE77Yqb0NzjJ5VhISm91b%2FRA%2Bx%2FHN3OtLWDRhZ9svyoKBpb4ziaRH4%2FjzUGxmX6AN22DsToTn%2Fxza3Dt66ulvfppKqbubYLeXiEpt4Ljoee5xpsafZZHyuG8SeWN2AuxQb845J5lFC0uvsEMeEs64EBTolSJelC4fqiShAKqP2TN%2FS23rVyx9T4fzOOjHhOdiMYMYzvL77Mu%2FibZhYPL1BFaQSXfBR8NMKeRKRqh%2FpXnKhQaJmF%2ByiqzDUZP6R6nPgVaEMLHvCi9WwXGTbsWc6xi%2B2UeKQ9yaztLr9eH816Qga%2FIc58AnUv8ukj7ODLyiYFFKf86Duyns9ArdD9l%2FGXg%2BlbSCzZeoZbk%2F8K3yiMzaZNpIskj1FxRE3wDWb298HG5WVbVzq6ohAF6ZLHd6Bcl%2B2f5c1PAk%2FHYSTEIDGlMCxhYa9aXbKPTt%2F85%2F86H4wn9DKyQY6pgExId%2F4Ipq8rTXzSQ67dcaW%2FEEM7dXyiCFJNtPkFoNZLuCzuLFydETkmDXz2h93cqFZ57aozw5K4GC5PvPP6z9ZW%2Bt4CriR5tB3Hctc3k8LnaMYuB5CEamB5NwX7zMfvyrjn4uR%2FStVMNtL5hqgNGuAPuQ%2B8JY6eEv%2BJhmdfhjLrOllTlY8IxpJlhLA1mYOR%2FV4ZZt47ZkfbuWsxvaUXH%2BeggrTvqr3&X-Amz-Signature=9c54d9f34edce3ef81704004aec8af4b750c58e727a8841e15e2c5d4b3645dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

