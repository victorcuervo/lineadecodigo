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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K363YXI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOxJVMzrB%2BGHht5KYjkUpZfEjf5bif3s2RLXrzJqLDeAiBv5T3BczydoPTmJJAPwEjcGWNadYPCG118Kf9p%2Fhie9SqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQppRoKz4bAthwsDKtwDA%2FQuZpUs4YOKzw37D9SU7W3bXsDk8r3jZBdIZFXSk0C0qfc2yab3bZQkuOIKxgBY2BgD1wahdQK%2BjbbFza%2F7kiVqBF%2Fc%2F9EnT4LqFzFqPlq22C6eeSlUCKoDQ40yuTmbX%2F%2BG%2BLG9iGyWvMHBDhCCo0X8loV%2Be6Ycpg9wHMknQsuL30R4690lezlNoinjYa1hCtm9tmSgH9alR1FCiha1CJOiY0EBuU052nvzm%2BoDdTOW6FSKn9oRh352iFxDV7AWMQd4vg7PWH5cCcDG05FHfqivyK%2FZ1hcMSD%2Bn%2Fs2AwWq9wO2ojRZ04TPjv5LU2ILe0VEHbBDa4%2FEbgpIVfHPzK0pUeRzUmgfMrf2qjiofGIDn%2F5ASNYvr9EE0iFCKuEcfPfCpX4iaxFge5SKJKUvMZQOVYfkVHMZX%2FaI%2FQyCbQjTGIVOLLVZ%2FS8moj2cAAIdxa5wBzSUSxJ3b07yQAaSgi9DOxN5bOXYUq7%2FPMbF1qJ0ozQ7vIVLBsXz3nfpO5CX5x4nB6eLWFWpf0MDQcRai%2B9WOSl7PGWvv7c5WBz2M7nwgUeji37fSc72hIDM0dQ7Zid7UkkzXRQHmkvlRRcAzmBvkXzNvJjdU9D%2Bw13OymJwnG5hD6G1lkLhofykwvLTZyQY6pgHvCNplS2M6FWJ3j87P%2F3Nw1hRzm4yN7k8ci1h%2FxlhnLWvwgPaHH2kuSOvRgVQHLUtxf4vbDkG40iaMu16cyTHgLNJNEqT93osTTqlZwymGNln6PVYYebI3yR7qWkQ4J%2F8SNqfsTSsKNqB6v4Bg8N%2Fi4XSS3kPRDeliyuzxrS%2BZBtsdxqCd%2FYFcvX29nA%2FpuLoAS1sxQDZYPKJDQ0EnsUi4BUNXCE1T&X-Amz-Signature=3594fa2cfe8f3072f1fc8485cb06d9583917ed6ebe7dca68477ec71c3feff6ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

