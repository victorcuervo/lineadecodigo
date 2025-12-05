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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2VRWZ2Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0A7WfJY7omyO6OOyXrOuJFbFY%2BfFrDSDSKdHcHXNSOAIhAOfxEVHliI3ixIvgK4adYsGZYyODPILnSztdzmgunHn9Kv8DCFUQABoMNjM3NDIzMTgzODA1IgzUwZyoMxkn%2FCOi2Nkq3AM14IBL%2BBcgogI%2FUKZ9pgysCpnUJcRvgOewaQjHewcg65x4tqcKYWC7epIquGLXJpwMrUsNAYy1o50RIdACMsmzx2fra%2B%2B5twJtOqQVA7O5%2BqSa8rTOrcswekaPuERyPPFJguX%2FKkXUhB%2BVlJz8xvZ7Ujl%2B1hzO7JqFzi7eL0Cn%2BbhAhXkRqYEWnZyS%2FaUxKO2oiQbCZmXUsUyNtFkEi0A%2FhJed7UcIkR4aJhzLm8HO6OOJWogksnJ1tu1aR23zpmsjAprCOxkqyWGVIr3zLFPG3Xz6nXFMS%2FL4J9F%2B8WCvfDKNnYpinndySpoXRLxnQ42GK%2B4ZuJtafj3%2BER%2Bt53kCe6ACMXU93BjVHRZYVQ4c82H7cGFuvYB%2Bpu2Mf6rHY4tZJ1HCCFIL%2BNmVSzCNIH7iEsVdzQehaxd8vUJaum7nu2qh%2FR3FfPzZmJs%2FQdf6TbU4VTl38GAw4pe65XMh1cqcW%2BD0NU3g5eY%2Fu%2FD%2BnEKOk45ZU20xU4e73%2BTMaFkM%2BeIQcgPg4Ntbucj9Abc425jtQkcwYOaI8Q5pFxISm8blqulIk6lC93xfXSW2jRe%2BiMPvly4PuBuO%2FL1vBJD4KdxwtMBbCugtQDGGy%2BfPEHgdMRjsRQCWAcwFrbuJPjC5q8nJBjqkAaaDfh4Q8GDGCt8W8qBgnGjqzxIJYFKUiA3DGPy324zr4Fr7BiYpLSl0NfPJNsxzx5uysY4I79TXGRCiCs1k%2Fx0jeV7da1OkK3xs0NjEFPe9w3LVF5NYmR6uTSF5%2F9LTD4caXlwJ1hr33BTibk0aAF7DYtFqXU7SJ%2BcaSaWr8qKDN2hE1lmfjyh2n0Um5Bt8fz4wnkQ5vGlSHIVz7J9%2BZ1uSysMT&X-Amz-Signature=f4c6b27ada025526912314f9809d7f43b5dc0324ef5cb9bb5c4df277cfa4c343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

