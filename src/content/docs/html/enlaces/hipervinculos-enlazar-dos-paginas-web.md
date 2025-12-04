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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NTERFJI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIClSKuQWmKULGqELU5jaRz5UFzeyDucKistGoPKhh7egAiEAw%2FTz0mswWi8LZ2rcw5IdrBWh07nf64sd9HfcsZRsWw4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDKcSEP%2BuyMlZLeTfACrcA%2FybCl112g2FI49eZ0HnXyYK7oqE5fAWK6%2Fwn2KdEvrdT%2FmzFEZ%2FQTGZk8mY2HxqsD89cgnbU6wFDB88ij7RyUpZdftIsryPsTeWIPzf%2Bf6EzagAmsQiQK8y77OUK4kqRYS8xSuR%2B4IO7Z70kAoUq8UptycYY4VkpRea2OuxpBVjLmAQd2cc%2BtywnP398DbrMc7J5hgedXirakXzJDf87WGWF7lWFTFZGAjOSUZe7vgnS7RhBtwUNEXfkRo2s%2B1VsJnXAe9gmkVy0I201P0ZlLTF202ooixw94UrkhG6RvU0aNuOEwCAkZMkckj5KF63KurJLW0wzEfob%2BY8dQdy0c2QghumPlm4XVaIWtZAnhmI8psmU%2BTZAwaGcoiLH49gaSCA%2BbM9jipHQXf7U3sY%2F%2BYtdwnG6iFCrONOiOKTcE6nM1Ui4xgkTjA0sRSEI8lPPfJ11W8fGlg1tMq17sICd2Ba44Ih9kXNcy%2Fv40lft6JCXRNtSMYHplCVFPO3O8JjfS2Rh4sxU7gOv0JXJNHFAnAWGeXFVh6HV7rKUGohU8XjiDfWOGAbsv0NPXnC0KwkwU%2B4q5Jv34JxzJNvFz8WlT4jWEq%2FyFpW6eI7F9IW%2FkEIYGmUtwsDfxtyF%2F9nMNXnxckGOqUBViFSKRmKYK2Gak3pypmVliXxy9uCCx5mweMtL6YYtJPFJ5NVZ7SHhhvWcjqa%2BBxBfJsSVsiHVcybd9xGDS%2F5d%2FhmMJm%2F4ZFANKLUMK42Om%2FZzULf7PWVN5xk9LiXz3xiZHLDE66JWEXgCjOu24QPF4DEHk%2BCaPLeJGGTDGn81QbsuKGox3S8nVyH5NWU0XPU6NW%2FwRCEnRbNqisISuvMVAu0vXCm&X-Amz-Signature=abae26f7d2887280eedb80af64d8d59e80e17f725bc6926eb88ad03102675703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

