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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGXM23F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICkM2%2BFQ9zywIfYD1pLokz2YC6wZIcfT%2BVNUCnZgiGFdAiAVB1F2AqYZFWfK27hczAco3cVmBRWdOOtCFfN%2FkiHFQCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMKE1m402vBCGTRexMKtwD6FIuGa%2B2jwO9S5OnX18RG%2FOrJ8ZKe2HXq8GZS83G2D5ragOQIf0J7q2OD9Yvy65VxOYrZl9zP65uY9IBmkDLy2npChGVF810P1%2BrJTBnCxgaCA5h74U8CTvCbeGtK%2FULXgNptwzvqKacYdK3lx3gk%2B2qgDqi%2BHFZ49UgF9Zs0t%2Fc0wjaZHLQyvE0Zn13lUf%2FqPZvCD%2BjWOQcqzYB6CusRYoUZoxX0pxsTDsNSAs0uRtrUBk%2B5JGUIXlc9QHE5WgTwA92vmEH4TuKikfzrjMX20BLSDFE4Ozr7HEUunLL1ocBnYawCQgUk4AG%2Butx2isoJJdHRqp8h5%2FyR2uhj3j6ylViaYZXwhhoaCGoMztx9YeVxuveaEYfmnH6OrNz56LchOSfu7Df4UrflcwvWYvi3iaeSGGunmej5AswxprsivLPH8smo%2BAf2XrlbxA1lN0iNvCvoAPK1GjIeefGMPUWyBLg8qoTPG14A4sra5bUPYL9U2SoUmiREuV7MGGqKDIZqXZ2%2FQMwsd23mEEy3Xrh%2BXWvd8xw9tBqXvmtwTkw%2FSPvt%2FRgUFThkkB2NKz5zn%2FLp12l75MgE25R5El2IuV4faGUQM7zucpNEWHjCilZLF5y1H6jtYZ0jtCsUBIw0KDGyQY6pgEIkYNOcl3UrTeNTyGHnd6WWXTkyhJJhwd3hRPAJHmUXwlae5Js0%2BAlwqHP4Q85fkqhdCP7jbc%2F6B0ONU2v6j2AJQDxzeEzHXUgm3qqJl4zcmhyHvV8ECl4hK3gEFgaRYhA1DYZjfA6ktlZhUFlC7cHqG5njz61UGUq7ePjTyEd%2Bw%2B9gCMRK%2F6doDeZgH7bs9OvdyIrgEd0b%2FdTj5DebPYJL%2FvcFqwt&X-Amz-Signature=d763998e7cfa36ef98dcd4a9cfff3326ab95417c2f235abeeefa5810977d5134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

