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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PXBTQVV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmjE0kFWLVf99tW%2FPgOArULnJmRnmgIh%2BQTzK7GR4HhAIhAKRXLNO1Zpt%2B0nCMXslb%2F%2FPC0lgAxxvf47MfhUfvnrJ0Kv8DCFUQABoMNjM3NDIzMTgzODA1IgwGPTfYaWYKZNAvEYoq3APBqVrDOJxr8bqQtUqMotiXhy16AA3dTWVcwQgBBWL%2FwG6B0hflyqExypred5Wv%2F3T9%2B2fc%2Fl9ruNvDXIIvUEg8AQFmOM5kq%2FEeq373nlUgGuV%2B%2B%2Bngh6DFsRjY8sLbkIG%2Fd988PiRTNIAvNdz0IVyYf6M2hEIUBgRf8rs21yTgXO1TymHMRIA9dqU2GNSkunoIyBIgQP%2By9VB0%2FJmvjBabuQTG6qA7Igw4mgDeiC%2F5EDZND0QO0manoYStBBFQ4ItR8czTHOf18iYtoyjfsmiUQMddp3RvVLkzrQfjcsoPHAPmsVQvQp3kpFI6ETt%2BSI3KgHNTQD%2FgDtFnBu2OhfNhADZ2dxaFyby5ud5qjTZhva39pjr53sl%2Big%2Fnvgnk%2F%2FZfM42eS1iwDXIVij5YVYvF%2FyBZCOwrxBD0fZPzaXOVJOzVVJUG6ebEPJXR3kkNZiMKUHzXKysY60qLhTBPcy9u6p32FTSkUdOvdmcnjB1k%2BEcUinjCCwGA2PsLHnthullKHqcA3ZopVffidX%2Fce%2BdAXVpSOTRmuvC%2FTY0UBsZhN5IHfEXRQUnosXQuTh5qf5wkdf5eX4VSha3UgfsyYc3MiSibICUXGy%2Fc5cDn1EMdM5chkHm90%2FAVpH8SMzDWr8nJBjqkAZLbEXOmsa79qm59uXqC3POjhbSSFwSjqHfENjyknDk9tabWglsi37ZA2%2FNFuU0wPO%2BbqRrGtKri23AER7FJe4x59bBGbfBHqLyH920it%2F3LYfgn%2By3GL%2B3jdAjucUwzPDvedxPYS9uMGhgVAOrRBWfWuiWsVI2C4p2gxs867uYqgRhnGdCViSan%2B6tTfUzCIJ%2BEOuPaT4oZDGfxTnIxVenkn%2FSi&X-Amz-Signature=cb6a9d3953f2a416f126329eef217ee6efd373a9f3e2e09b0e7572496d8d743c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

