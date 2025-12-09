---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJJWFWG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T173806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzGMLy43XzTtnT%2FEU4nLxvu4Ncm3bumgDazIcp9atZBgIhAI9EgRXWL9WH2CwN%2BFuzsDEl7ZRUeTMKHfnDpFnYDS3MKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0BhUbO%2FoVqmPP2NEq3AOExv7Xo9tkzA9sB9HM2nTQ5834lPv8aHtY1qGpIoza5zcxEL16uiebmd4uWfCu9ZlKwWsBmon8uIbovg44c1Cdq6v5IK2sshWGC0%2B1Su5ewTzLpjmO6lTfT9roRdfEesHzcZF1WGVABG7%2B%2Fr7yy7A6I3j8mWlbxXF%2BL9kogEJgIWj97IGGEKdxx1MlmcGjNZ8ULvhXs%2Booa753oz6wbbDg0QsNHFF6InhY8EGqRwxz5aTNoOLEEgKLlXernrD5RYSTpRjjCMVLiG1TYvIoaoiFn3tFYqlv8ZyO2aN0v6LfiGTS5jICpCG%2FAKXmjZW8aFiWBZRzuPdt8CaAHY7xGn0LonaFZ6nK8bltb%2F6M7Brj%2B8WDSUkNN%2Ft1Ho42q7hpN0RuxIMcKIeSV737IuZyLwwdswxBycL%2F316LATVJrOMyZtE%2FFJ0QhSLijWeNbpik5f%2BL9%2FZrBgQbIWX2twsDQX7m7tkukNv8XFmnTbmRwZ63FPJIiGZIuw8sul95uiEzamYDQ0oumc%2FaZPHC8yoYbx8dIU5Y6HAJDB40T5fcAj5LeatP1oqkXixF%2B4ADiiDDVbzyk7Txvw4flZQbPmfL01a4rD7LdavKRltiVg7NWp%2BdQkxFMvDBK1dJUqw%2F5zDrl%2BHJBjqkASA3JPzAoxKN1TXn5R0pbwJZFAx5iGlWTgkRQHT6bFhnZYfPYrFNiGqqFvyXFT9XruWvqpGEGjbQ7qKZ9V7bdtTN7WYMvJc92V5YOMPZJ9IPOSw9TpFL1timIkoyobA3FJFEcnSprm2UfcHpdlSblLY6kD50q1eqBmQ9ZibDbqQukbNT73cPshqB8YWcQmxqEVCyaLsiV1jfvobg17EPgR7c0BYv&X-Amz-Signature=28b60f663da3f6e6c853f407c0ef895be5c4c040cabee71ea587d80fe0ea994f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

