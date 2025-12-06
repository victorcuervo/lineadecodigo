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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SSRVHRR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoFDjHPG00VwImBNlGzu%2B4I0wR8ogcriqgRI2cqqEk1AIhALc1r5tKkVcMkHrOvFu9goAmQjz9B36KAWsL97pjhdW2Kv8DCHoQABoMNjM3NDIzMTgzODA1Igxk0qDXwtNy9CEBqe4q3APodJuXWIi9s5Siviu7jIScRtwJIvqMwf%2FaHr29OO0ELXlQrwavyddvA7N6dxJHQcQ4Ye34hTVwQ5GW7QdvSjeGCp3pOUYxmR1gb8TtBE%2FPEtAQu1C8B84nvwgcUfnjVagPF8kd1O%2BBmoNK60Eua7RCucgST1ywoW003JTWUPWT6UvH6fVRYbhSthE1%2BoyP%2BV%2FYG6vAZ7ms0872WI7Rb0CEoKrFo%2F0zDsO97slBJdB%2BURQcfjnrNp8NsKaIWMC8OAqW7CwmML%2F3Bcc2KTHBfVZ%2BbgulNrjecZVWmsXJJ51Jqargz1eSCvjYkCEIXEOiinLZICCAfjA6ZxFW98pjIzPGB6WM%2BH5%2FbDjq3%2BPiC5QIZZ6r98xX6cRYaPSe3cbboTV3EYSiMXAQ0kM6Ag%2BbP4zOhQDh%2FrxXmt1O9G%2FEametez3Xp4HX94U3terWhLe8hGJG9JwnbLlugZEbirrdMjIa75l9VL9VnHw2brIyba3%2BEcKyp1zF89q%2BmhK4MEXnY7E%2Ft%2BCAh2x6td9MVOcTPEHtKL%2B7bTRfvSH67YS%2BedPecxIIJMX6TU4ASUl9agBsSfq30jwE63XEHk4qNlnoq5Ho5WgHosB7U7bUdTL1DtTsEE9n2yGX%2Bjuk68VTrzD5wNHJBjqkAcgANA5aDJyxnUuSPtRgm3akIqJlR4zcaZJNhhAQGbLtonQOJ9S5k8b5vjiOy1VcogUMzqVpO%2BZ9hNhX9h72E5DkSbPxVg%2FMYEoNV1R8U70tcB%2B18XY9xyMCkCCDa1oaDMzNKCRJZWNfhdOKSzz6HDWbJzkTxa7M0YOuhIZgGj7RRGs8W3K3VF3GBHcWe7aHY%2FvtU7kqB51FkiFRDVK5ylP4qqoq&X-Amz-Signature=ed6f9a83de3e96c724a12f0f96906b5b8ba3dc17e5310e449c01f518feba872e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

