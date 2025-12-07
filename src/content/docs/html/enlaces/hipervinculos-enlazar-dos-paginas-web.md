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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AEB76DI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzl2HS8bEIOXtCyrQsgWrazxikz1JAJdK774ibKsj9sgIhAJAohCE9%2BRyRbdc1r35R6t5GG%2BoHae3xvxujB4%2Fi3X0NKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySPJ2BTF80LrYI7ksq3AN437FDvbQR3JHqeiH4kv8uYv20Q%2BoyBdtqonC4lkm5wXYYw4RaPwRaMBreaaTOaCgOWpsZix31y4t4S%2FL1cXG0HDr2FqY3zu%2FgF9U0tdq8xvkEzIEPQkFJDEJoY5spoMQJNXQ%2FpRHy1pnivRtxU92NwkRMpjNDoMMXNqNK9%2FilfX8DrCxMvzc0nI8KFkH7odcgDk0akKWTAs%2FvzkZPJvJXF%2FT11OXfw8KvKdUI3%2FjNx7M7Z9SdsR09fDrc%2Bhk6%2BChAkpYoH%2B3aYM%2BqT4osbUVrOYpfLdLPj%2BxEEYr5gkRuaFRSlqapOJXLvVqfZOlFtmTlb4c35KFF8Sebd1lsrPz7bNrv9BoWT6b5Oxkot0JVB0yCy9mPAqyGkh8Bj4zcRJkYG8CbcZkD18zhPSdr%2F9VU%2BcljeB8jhAPXa9RI1UjgeFrIoCeZxSzzwx%2BoXNmKU6X4zHxS2oq%2Fp0%2B9JuzQTeKP2Cetiy5Rx8k8wygYhhmDzb9vgzPzu4iifM%2F321uFXdEvApOQHpdAGeaVFF8yr8f1C9dhGSU6uco6SPqCznvvpUhZp9OZmvzfQuq917OWdleL%2BNLxelMFPP4Nkfv0K4iOqI%2FkQPc2X8hSrZpl5S%2FQubEa0FrvO9JTpnLLQTD%2BmdXJBjqkAS%2B6ZwmRCa1fpcGcvP0d%2BzTp5l%2BHyvFpgtZfjAinACFS7AV5Y5R4xfAq3nLk7mmTagFMMEaz5DBgCykjgBdm47zf316Q%2Fay7%2FoMp%2BCTzc%2B%2FZPpNTNXC59%2F4OEzZabxb7zUZhWe2iOFP99gKsEzRnScEmkkVLP1m4ZC6eOn%2ByQMviqrgkl8zGxJbEuBOa8tdNM0AJfaTV8%2FKYyg3w99Us2cPXE22u&X-Amz-Signature=e55d8af1c33086ea4ad091067eb3180661c1b702eb8249c296459e701ad11151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

