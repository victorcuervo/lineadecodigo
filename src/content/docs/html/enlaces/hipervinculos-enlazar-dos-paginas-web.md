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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNJZKVV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPma6X3LiBBoCcaSpn4fQzuhyNhUPbK4MqW8WDGJXj9wIhAML7TXsc1Ts8TeEgTutViT3y2jDxONjXbfwA9XebIXYSKv8DCHoQABoMNjM3NDIzMTgzODA1IgypVsX%2FgZsIu1CrVP8q3AMBzmLYeAFMlwWommhUgfalj8L%2B9NXfp09Clo2228mBQnuh1P3W6Soh%2FcFG1B16cukcJBhc6HLihzK1GgcqP4NQqKJBRL3eS0OD6pKe4MfzFhckyQDuJOVdaI%2BxF0yybs4K1vT%2FSHPQeZiC4KPFyntuM3lLOc08Iu42kqLXji2QIJe%2BLkh45LLYzchdczP8KmjoRe8HXO3ufrwks3GSJYBp3rbbZOEl43kZ9r1T70x47Qc6J0Sdk%2FCFBim%2BpO6nj9g1Ipylz7es6I%2F%2BG4eGIrY7G926mpaQb0Au%2Bv2k9OJznFVqf8xlNQ9hsTC%2BjF4mI9vTIn8R5QM60jAc4YVpssUQ7TIsUqvyoCb%2FLb8LfyidvOCGnX3eJEQ7lh8CBDjVrvnVdrTReADUjRUQ8UFLe69d3GKu1rVkrFzpYvaye6mVjZfTVXHCQl9GA1UKu%2BQXD3rmTWSbSfeEVoZCT34EGRQgWY94bddOUDW9QZ%2FOiYVP4PuAlEyyPHU%2BtmX3rwtKv542B%2FbRuAr4yTl1Ara%2BFoAzMa2LUDdBdeDfPWVyD5U7HN8AAb0wDkqTuyLvDd34LTGKXZrioiJivWWxypK3zfUmjtdKATZ%2Bc2EENhMAUObpLuqtPbCK901C5R0NCzDsytHJBjqkAb3lqGqBhz7FvkGCdET%2BRwdO1z64GvwdRriqnZ7A1g80UbvTfEkQ%2BSeKnzQjAAwmlYvlM7GwbBzyam4mMbGHFUc7Xj6CvAjo6ZCrYD0ORpez3UtAJUQYMSI0gYZgr0oPVYQ%2Bv21fBhEIg5g%2FjI1W19srW7Ebp7UTKmu2%2BzMmEkWtsARKFyqXflZilEMYMSNrSjzCFADQcRwXlKjZEkheo8NPrTK5&X-Amz-Signature=7d0ef58f4b4eb99701aa3c1036a0af2154b85855bcf866019472622af234d0c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

