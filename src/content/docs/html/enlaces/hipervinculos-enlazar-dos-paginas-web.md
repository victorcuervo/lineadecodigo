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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KVBDF6R%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9pE2d8JpQ3l7Ui6mi7AdE4TsBpzaMB%2Be4PmWdB%2FqzLAiEAzb40UqUEHniZf73hildnsWQG7lN3B8KwtUmU42utZ50qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmFqDlmvaMmmbJYdSrcA1oN5Ndm82%2FPIiIIoAhn8wcUrWNRy6n4lc0hPTcXRrWbfX5a8%2FDOWtHEpivKaS0tdQ%2BYukpW0JoEC8eFAFF7OtUZFXeifGaRgCJm1CNaR0gOOxax1IhYAVTdhq5JhYQKvXdYVT8dLJv9yM5sF7Z4W3eBEgHL3XE%2FolXTyPGGC7scytZx%2FOr3aGxnlTUkbp%2Fz29IYjujmCmhs%2F7JBteJucc3wSTewih1F4BS0DBUVmmHxjILn6KzpmXO0enUru4%2BEgs9EhgZv5YtDLWLt8nARIIkupW62AJfSedhFa5rxGq6Cl4%2FWqUcJBXY5umiGlCpb7l4qr0yG%2B96FKhhBmzIT%2Ffl%2Bv%2Bga5ytYJ525jJ8JA8K%2Ffmrw0BH9xPAGxs4tGHpE4oqan7GG4AmT4ofIc7L%2F7uoqgfxAAwViLK5PvR5rgYYbNgiMKlM%2BqT0DS9upPMUTKO3%2B4QuFbjhrsoT6Ka2zFps3NZfZJJVJcXYORSv9SohJNN0kKX3FoN6uQ3Sjia74M%2BQCXLGQN7uGJ%2Bhkikps%2B28o0Qu5btEzqxt04%2FX22NgSNSNrvcPNAkogYqIyh8wzBB0zPJGMfWQ6kU6xg2eCLefK9b671HhKK%2FNMu2axpd7FyB7nO82sBUPcxM8zMMiF2MkGOqUBe52i9YQbrdO1ixfRYrgZEzxemmLKtWjjGE%2BdDKdS8r9%2Fk8Yd%2FtA5kMoBMHAnUpv%2FvwndltiaL2P6Va1N2QJH4wiFpBcBATqahxFE285GMzmV%2BWHp8L%2F1DqOtebtbZg4DyaoHJlSoZsY3Yc1FzDOa%2Bz6zhwWgvw8JxGuNCRDEOvbwf%2FNCEilvIjqaX7kYGhADIxKsWfJk6pA6P6PUWnw6HNklRqTi&X-Amz-Signature=76839c52302dad31372666486fa81e17f02f804b00b0c39d442f84ddf65c0700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

