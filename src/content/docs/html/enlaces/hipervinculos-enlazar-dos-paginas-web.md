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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U2EF2H6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGvkOOXsr8nTS0PId1iLuhzfa5a2sJuOIni9G5oCyYgAiAdQGNKgotW3kb2bfRLOLxEv17KywcD3rco2xHQijlaTyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqBS4%2FRGt%2FtzGEUWnKtwD2TB6s48%2FwYKgS9Fjs%2FgLhH0P%2FJ62rHZE76SGWWz4tOtHPxqiavkaAuieozYG0zVT%2BJg1B%2BSXjIfAaQ5RaHHZfbuwUSCPX0yIqB%2F3k%2F%2BP2F90ufnlPA4KpXaBKUWHUZYkdZwAYFfOAKrh3T9xcQGWnNI4WOMuaDtZSCKRwQnud%2B9BIsHLGMkGIPYOpridRVfKtKfC2hq56D1qJaxkif9lkTnkFFgeHS%2Foah9Mdj8cQTy9%2FBG%2Biegnvkq56c%2BjE71rP91c6kPJ7kGWR1SE0yRGLwrA7Edq3%2BQAhUImFkbvciDHj5xENQUgiKNuNqveThU%2FNsBoU2fct3Dyiiupya4J%2BRuYInN83ZXerMJVSGuyhdrsF%2BezG7WlnwQ4jVIGTZP%2Fkju7SYMU6EVQc6QT576OPhUiZv8FFvz3wz6LgsMRVF0YFCalWlewvMehuPvbbj28mSnwD9veJYh3xTPHfTXuKF3yJ9oKXSOvA9hQhtg8SXht81FkOzikhv5JsbeWv9qXR%2Ffnltuhla2pTCU%2BTwWklVqrJBoXboCsDcSWkCoHp%2BRekiXGbUJKGXVAlOHZkKAoArdFumCNAferJCLKUGpevvcRif7nKcszH20VlVw22B4lZEGxWnwovlHjKNgwsaLYyQY6pgGvhTB4E81nul5JE91Kr3WScy2bO%2F3xEkO3a9Pei14zHUD14PnanOk04HzT%2FiFz7fhRUI9ryuWfw9cIf12LMjaJuQ7FiTHKWA6NeT8VvAbZBrVn0xWeD4c%2FE4AazfG%2BP7uPyEiZQPs3R3DZMwTzCGgIDvPfoMQC1TUVn9%2FfPDFcc8GOcVXA%2F8CTpP1vUB5KOSyh5gkZmperTaF8tsWVoBpqGGKmsGC2&X-Amz-Signature=59ab6543e9a7c394f72850afb37d64b0f889104b1c4d5f82dac142ad42bae2ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

