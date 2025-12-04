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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JCFDSWP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDOWwqnyc5kpKGvawIApxcQXoYlfn1y3Mm1fnY02n%2FpXAiEA98xV%2F69zrv5f8OKV03z8FLLiesze1Ry4RNnoLYnIlOwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPyXIWrpntD9glToCCrcA%2BY79SK9Aryq7xPb0GIWo2obd8hQIMZ85CeVofH3TAgk9zE2YAjU4hjkAXUohNeQVJBfmbNUWbUG7BCi%2BspTg5ayV8Q%2FkYtZPTGw%2BXcersyGgBN0krLF0XMWvSwke0vET%2FKRH9COPNRAMLjRb9sgyeSfazrlsbnIs5KO4mXnN7TAXZs8gWoR0pffycfT%2BqGW2B3yISq5N8LIaci3lsTaE7iWjYqC%2B2r2RBSaCzyGnzEsqi41JUvOAfxZqFxWTlqLyRzDcFM4t3XrmFnfCKooeJCZUToZqxoYCp9NoMrQxCA%2BH%2BgNZ77OosmMcAElHePWIummZjOMV1Elk36N9epKLim1RL6rL07MLEee4A%2Fu1Vqv1cfoaxvxo92fDGlYALLStqzQjxhKAlpgVTqBkZnf4IGWUXAlwuAQColmhZ%2Bi68ilOKibm4UNrUbyJbbuiJPvhO3G6GAea5vUqcRjTNNIGmvaNZcI2%2FB8afpJuQPT0pNVaz6qhDslV6xcVsBBwW23cmpUKlgqT0T6b1%2BM4V49d%2FDdwkV%2BiTfuYHW6uf1PgUg1c79QAeuE4kzKhzNokv0n88mwh7m6UunDL8T6Fjvwqlfjmh2g5979sd3l5EZ7Agfd687V3e4BaQklRfyAMNuuxMkGOqUBbjapHPeuLf4zTJRa9U7I43k0J2OCB9BjKhcYZyT1tu2IQdY%2BfZ1WL68JvBdtoMH7PORsMo7my9%2F26LgpB%2FicjX7sr%2BFfVNqkR%2BgbiN04lemuoA71xHEy%2FzCCqopd6VFQCRmjYlI0%2FnZexWdbUt7nHAg9ofGd3%2Fvo0sTtrdAv4fcNx%2BFkHwmLJPzD%2B7iq9DbWdLHbcl37ODqm1eiY3jxCLVFQS%2BM%2B&X-Amz-Signature=eeb99bc40bf4fa26a9a896bca7a6dbd13515d8de84a096a58cc7149549543943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

