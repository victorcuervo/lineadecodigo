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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZAGWGE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaKYNr4ekHXeWJF1zd04FdSaSTFY%2FYGF57J0G3iyDaIAiEAi2Nxyu%2FN6qECmovXfC8KR6YHZ1DRzXrhhIhL9C6atCkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOElG4%2FIMgYrbvB%2BDircA8j3Pjd%2BNW1rSwpwfO6K9GWhCMSauskaWyA%2BYQabUdZ9rEFu4SQJvyzKLwBK5Oq%2F9H59d3T0o5cpmpVv0VIN8neSLP2xuGFkQdK%2Bn1EAnOIGLg2rPr415PTQ%2BzVp1IHp6XV%2FgCtzP6KID9R%2FlhD%2Flz6wsQLkWUgujYh9YMGxvPFC7gvgy%2BvoBscvCu6RhzteRMXHSKuvK8lW6B%2Bt2SfLKg%2FpE2iIsnA6VtXbK10dUgQSubPaaKLHMaaXjJE%2FAcHGY6OWKMvaXBnB4B8%2FywYglJmAusJLi%2BWJ2pkEaB6TFZE8v9u4dVEK5xS45g5b0DGVxBNExOz3ej9l8kPGUq%2BF1dIl0LAdk0KRY%2F7PgiqAa8xSruhmdZ7HXQ23qxEm9X8ZJLBPY%2FeKJ0WtZ%2BGl2FfUVP3jPfhA%2BX9UvAnJ7JVleNrMvwRV6HddKI6wXrLLlfhqnnyDJJuUxEWdCuVH9Z0lB2MbBLYg812ZoVSsH9Bn%2BnCwyRrQiGQLfZsvoq2Y%2Fd%2Bj%2BFWtsIfaTbtbsvCZr3RuNKf0KvuD59sOlEpPQMHm2uGTiyShQ83iEzHp65KLpexo6CIl9O5sLvkZnWQnuLkz8aEM4uIeh2RV9JnEGVjMe0f4t4sUkgiA9DS7aDVDMNGH38kGOqUBr0m67ge3CG8X5bhg6wkvjh7ZueAMJDvy7YIRSjbxbyMQbR0AYYrCpzpLGkvm%2BZ%2FAxA65OoTui513CX7aCwHGyorFrghX03yWiGIodGMy%2FC6w5wTWXKbHrMGvyhgzlT1RNr8TVwCwTcC9z1YZmzzkI4a63IdalInacuePYp%2FQoKwO2HY8SJ98Rsgr4dixSnN2JeS8MMm7FJ%2BWINHz9Cq5YrILZKu2&X-Amz-Signature=04882f892580b75f0cd8e4a8fe0ea4f3c94df8774cee01267387410186ddc002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

