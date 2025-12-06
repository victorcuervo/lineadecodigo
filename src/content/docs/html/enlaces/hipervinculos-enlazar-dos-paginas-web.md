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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYOZ2BQH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgaIX0Mc0rp2ksON%2FMgxu71DpQvw7zgnOIoWEEBhfx%2BAiEArio%2FjK8TXL1LSV75vqjr46JiZbTrJy5GD2y2utCXpj8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHpvN5OraqgacCH88CrcA%2B05tlxfTlYlAJKH13khqYYKWsmX3EzuDk1yB9yRdusP5LodQci4%2B5imwh1s02t8%2BypkPtE5TYK3cT4FdyKRxZyR0IxXkX%2FYwMKnjYThOVb5XkjW24RtA%2BkHRbqonK%2Ftxc4GQb0qayMpHXyoUgH3lwDgfkf1wQgn5ic12RXY2if2PpalUF58LUFSeTMRehJrNa7AqyygPgKYhHb1C2ywOvXxuG8fiPSvrdJJR2LlYtbQAKgyD3XO21j8seThOrdPEhD%2FnjOyILXMRykqrIiZhcnzibd9tERVo7shOCIufYTi3WCQEobPvVmf%2FK%2F%2FhMXmA05cGTznh13N4K1GXyI0jkT8iKhbBX1Db6K%2Bp6rdIYmxy31qDNNX0OcyehYVjhKIZh%2BES4YforLzHwCOImkMlJ%2F4BllstTP3sQ0dvP6wgIO3KfZZLE%2BeNL5dV3IRUNmBXIIHdoaj0ELzkGXhLSpIZRya3sMR2tfCWqFEY6x5saAh2eq9Lh2ldQivNi5OYXMjkilSo42pF%2FchRI%2BzWT7jMnODyAGn5lzZqPEnDebuwbBluth%2BOfLF1kA9QU66K04QaS%2F0xgtOYjsg7jj4dwbF2OSou8XUjiT942brHUSDR2TcDd%2BLtFVkz95Rw6MAMOKm0MkGOqUBr0JWT0h46xBdZrVtUJFEOtXNJPW42Xp7VBW1oKcDR%2B%2FVfQkZz00GLsShZdAHADzeTJkL9xLc61s%2B%2BTG3bCJOiB9UrH2TGY3qykXwEN0eVNeaeq7fKsWpd%2BJ2rDG%2BZefvceQPwmOLqKJ2B%2B3h3JZKVy0TUQjJE5kGjswpRwlMyAATFRMLQKFlhvS4GgCm0wmsSipy9aCsN%2FUaC9UDsvtpiPir4GD8&X-Amz-Signature=8b41623c4996c0675cb656e8e9a569b3da8c84641f268dc22c835fc1cd9aaa42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

