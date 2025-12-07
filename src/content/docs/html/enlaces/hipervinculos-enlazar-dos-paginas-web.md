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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNB7F6E6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwN7XFkQten8dJFJQ6wqfSEhzmY37ZVXSy01c26bWrVAiEAoVwo7k1sfavFhXHRILKpcTUEQmS8avC313qpZ9PyjdkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHDb0pdaB7dJUZBVSrcA7MouHR9D%2BmPRJuC9sCmSsM6pvi2zPZYo7Gi%2BcW0PzQaBBJjlUqs6MzdihTH0wTpfGjIp9KooLst4dUURzERcTu80AqrwyXxanfZJ6tEBhX5mMAsA8fIxXVd1PHuXFHxBAySLDz9i23Jk4zNEKuuK6ZUjA1XadUx6zFkA3%2Bnt3p7GAkUVKeHmbZujf77FOiu3WfRWMUWBMruRq1jCDYyEFvP4gio4VlF3nq6z0BaVGJo0tO%2Fp4KH0ndGrOcBIt8F5Zo5tc5mQ9v%2Fdim873%2FX4KRt%2FO0%2BUMQ7K9JjfYzTXSfzHPOJCSdhK%2F29tKmAFAk48bEDC%2BC53TVkQuOYpI19Wpu531YpRm7I7Je1NPiwG4NJL6LfRGP%2FlGd%2Boq2kGKvbl5QY7O395RIBce84yxXjhXOq0JOjteanD8muwR41nifeIdd0uwfEGUAQT8acvxF8oknOqrNkksXjr3VXKjBT8fEGTSJSwfQPVi3U8mCHE%2F7QosGRsYrfD7qQJI54AqmVojWq23ot%2BP%2Bqz4qiTJTQ1r0ObvTK0Iod4OT%2FAsLd5890NhyzPjT1I3PIaw51eJAdLO3LJbjOx6udDww%2BWfLWEotyz%2FRjZqFlJ%2FJ8LPhPCqupMj%2BVEEYMwMIRcIUcMILI18kGOqUBotrwi79Wo6hijJ1MJTnrTJjQt5eX7eYfkpuSAaXlCop3AeyNKXxHx1YJIIRJgedO%2BCKOfF2jr8KoBhAEiW3BQFhYtFRRjD%2Boei0%2Fj651UeGEUxeYvwBEO3cOvAnhtQT1qLFBW8wL61CjJFIl%2FSk%2BApZIp99vPFfMI0P22E25eD5d07kqKYvdfDUZh4vVgjswJyrD6y7YBBWVRCTaTwS9ahACs8V0&X-Amz-Signature=d3bf60221ae29b9c54b65db8b8e1e965aed30c949e2c490587bd1b5d84ddb594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

