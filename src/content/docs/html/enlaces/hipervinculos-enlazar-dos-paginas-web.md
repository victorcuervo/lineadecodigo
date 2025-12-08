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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR4X7HWH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnY%2Ft%2FjyCjGT2uLvrG%2B3Zij4u4QHqA4XqpRDuQj4CaiAiEAm1KjoSnXmXCuCtvdF20QRWDF%2BCCI3ojU%2Fy2jeLlIqcMqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYI8Kq6PII7UF13AircAyz4HDGLewnmtarRjMhaA2Wod69tZRB8BzC1kq3g7kSFH5%2FgF6y21TIvjf8vUioJuQJL9L19wYiZDO6YC1PHhqHkWG1mDqf%2Bwqwi%2BAA0WLck7hf%2FoUJ06WTvTqmwnxXNh99g4a1LzboEaHHSe2cgP3b2WYKWIcpPr1xjm%2BNPP%2BhB%2B4Yi7QXQbFcklmbXf77wLUJyl4RYNd7Rl4enNWJBFMFoSkyVUbtCxMc9CMvgw%2FJNsz91qXhWmflO0ADfUgJRksb06lWtNpu35LrCrA8hwKzB8r8avmB%2FADP%2FEnkbVtmdkosYbd6fK2nhiGyZa24Lrz2wyuD24mpuKp3fXKhrfWN38LAAk8fFs7Xj5zLVm%2Bn4euPu%2FOvKgYg7mosrmlk%2Fu1Pb0EFv4iPo7Iujg1C%2FcfC9HiB%2Fd2ldauo2OBDZTmCW7yBW1jz25hbpnLX%2B3ZPYKjwjyumyhovWKMeKtxrNHuPCZ8gHu4BVpc2IakXu0iuAnVLp9n%2FH8sqShfPJhyjUUkiTX5mOxK6BJ80sSrWsqaajv7iH%2BMQUyq5mCvwJZyh4UzbyJRLX5yRiY%2B10IHq2hXuNfiF11DcMGWLHBC%2Bv55cJvZpbq3AvCSXHHlV%2FNvArK2Ha4zceHs23CclaMMmH3MkGOqUB46obkQcgLPDv8Ns%2BVbnUMfnculXTKTljIJ1WUNKOrgABa%2FMGy0VSQzt5lm%2F%2BR1%2BbpfKIZ7rSUsrEiY4P%2B2jSGkdK4M8YK68FzcW%2Bhx0qeuWrJoIr1G%2FkDJkAgr42LE6pm1rZhUEZ4Z76r%2FcBS0VXHdxo6PQerkNWksKEhUMde0XUEpD8wtyU5W96j%2FytbkjxT%2B1lS8017SYR5aZPqIorYWjKuzHA&X-Amz-Signature=1105fb7f3a29d4c22d012b68af103543cbcb6fe9f83786b9d6601e425d17b679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

