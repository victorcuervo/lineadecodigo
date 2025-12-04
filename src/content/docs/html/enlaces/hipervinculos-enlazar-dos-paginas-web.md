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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ72JR53%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCEtNYnyNPosp%2FgW%2FYLON%2BzPcSS77JQPoYdzn6qIbRpTAIhAKkZVTjnqBxY2fEoFfZuEfyyAVCSPoeruOrgFw8N7envKv8DCD8QABoMNjM3NDIzMTgzODA1IgzsIlPlrBlZnWMgkq0q3AMEsrbqyRP0QivMHcrlnvSLqhhPD2xnY9lZCJECt7flrLHenG30dnEoNyjDVSFtqCChcjCHYPSauI4qCdsvKz%2F5bRBXU7hzyRXl9nDGtKFlcHVdWurVYSl61E2jZnE184pdIpyrCjuW0jkWTeixfVUenUp1GM9gXihspEOsulJNR9Y%2FV3pLoogBC7jsZgbGtDWyWZvC1ZjCIEBpaiY99ycbCAoASVsFk7Gj%2FNnNN42p%2BPj%2F%2Bz6DQJ7Ff0oBevrCBLs6vEO54H4AixFPMMVS%2BBL4Mp3MkpP%2FxFPOyoF7fJh5agBT7CBqHqQQniMgp2F97bYB44IwI5mKmXRX%2FpXYHlDhrXkjeerNG3tVjHxL7khXCYqxQqde6d3WZB%2FMoFRz7Gze7MUb2ufiXZcQdt34l604v8%2F9ZduByCnNobtaydLmkeJ%2FwsKHceXiKgkHRMBqu9b%2FelmQuaUN6cipF2noTxYICBn7hMPW53UEfvDd4C4sI8PUi7BzRZca4p0K4c%2Fl%2B9SozM17raDcT%2Bihr7Jcy3U8VOHlTH8p%2BNVNaDBaOF38xByG1cndjzetbKguBlwbSWAe5iqX0XOXKj6h2xHS%2FWHFUVa6GlMxshzWPikgzZtJCI69%2FnzmhVixgnwSkTDgzMTJBjqkASmnAXyC9C%2FMR8O7AJr1iRShwMdvfJFsQA6LSyHxXr%2BnHMHZx%2Fwzpjmtx%2FVs5%2BxL4twvFyhnd6409iVb5W%2BdG1RPxAp7Ej8rEBz3e7l5xEzsKrwJdX6un%2B112KFz5Aq7e67t%2FBQnLO%2B6ML27RB1%2FQR%2FZMVwLk5Ttq%2BUK4vw7Hvmk6H5%2BB2BV75KT7Jn7xsXZ4u4Fr9ioBZ4wZwjG5QUMWGAAdUDA&X-Amz-Signature=eb30ebcc9941f5253a5a23ce2021717068fb6e4c3d50f346befa39ea98a80329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

