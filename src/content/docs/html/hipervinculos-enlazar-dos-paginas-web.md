---
title: Hipervinculos: enlazar dos páginas web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DF7LO4T%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIE5Sexg08z%2BbS2nSrT6zlgDOOoXxGQliz9GVhD0yVok%2FAiBMTPBOHp7jl4qgJQ7Cn75DX8nQke8cUEzrGK28kvfJ%2Byr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMCYYG38x4LnCJe4ZnKtwD%2FwdEou4qDOYVrNIa60Nx%2FaNfuRA%2F9MiwRI4kgPl4AqomgBAW6NLnhghwLwzWGOeyhVDwIMEVYNay7QYXPQqAt7VMznu1LPn3XdkEeZ6x8lj1nEi%2BjO0aXvu%2FRAh81Ft73xmvqveSA2cIHGpgfk0UtqngIr%2FZPZa0wl8jeMZpNvuwEbG0YbbRL11j9X3Pg3N%2BxtdoVMgTJIM%2F3KFJ0NCr7WTl54xQsfQg4B0EqKzHDKYWo%2BrIUUuQq85a6Zmu97ksYKPDvEBiefhwzDGPH%2FffTVCt0p3u8iDB7iHuY13Hb73TotsHUjKPQ8EslVozF7R%2BbpiDqpvVPE4wNvGrWday7Hl6IabJmgmMAxCl7jfL3%2B3C7Gy6rYsbJMDOzuGWkKs8rsM5QQkKUnDxgZqg%2FKOLi4pR%2FTkHJG%2B%2Fi8QIFjWzkINhxxMThOE5F4pNicNvmaIVFg93vy9lWsvBhbG4MHtKJ3QmM0CxmN5bXqC2UWauQ1PcAimoCNGNdzKzvRCkjDseJkZ%2FoKB%2BZt9TNmCySKaCLw1lu%2Bhg3BpF6ru1dqSfwf5XjUkE%2FeL8YiFehHx6CqSx6bS0NWXBQ8tTn95Mauj75PwdrLMYMzhqRgyMNXfOj23%2BcyNWNzf%2Bg9ZfIX8wtvjCyQY6pgE%2BLUUPvPgGf7cI67pAmuneBl9rq0e7TwlhldkYM6p9MNK%2FuSaMxXq%2Be2e0MFMV3ZTbenAfCA%2BiO0qHAlknEnCbwYmXqWRAJAiDEseUmbEPSAhli2xoo0njCH%2F6qCfvhoVK3BXPdFEmYpzK2Gy66QZOg%2FtMvOzJ%2Fl0IYU2Yic6U10L9MzkxvZTDh56i2GP81NG%2FouJcTDWQZTqk91oeRV9MPM6pT%2F01&X-Amz-Signature=d7c717786bdc6881cf172fecaf7fd8703dcdf6654326a36b36b78c6745e93989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

