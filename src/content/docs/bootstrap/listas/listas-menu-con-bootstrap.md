---
title: "Listas menú con Bootstrap"
description: "Creación de listas menú con Bootstrap utilizando el elemento ul de HTML y la clase \"list-inline\"."
date: 2015-07-31
updatedDate: 2026-02-02
tags: ["ul","li","class","list-inline"]
slug: bootstrap/listas/listas-menu-con-bootstrap
author: victor_cuervo
type: doc
id: cca4e0b1-32c3-4f7f-983a-6bb75c803a51
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/listas/listas-menu.html
---

Una de las formas más comunes y accesibles de crear un menú de elementos es utilizando una lista y convirtiéndola en un formato menú modificando sus estilos. En este ejemplo vamos a ver como podemos crear listas menú con [Bootstrap](http://www.manualweb.net/bootstrap/).


## Crear una lista básica


Lo primero que deberemos será crear una lista desordenada mediante un [elemento ul](https://www.w3api.com/HTML/ul/) de [HTML](https://www.manualweb.net/html/):


```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>...</li>
  <li>Elemento N</li>
</ul>
```


Esto creará una lista normal con sus bullets. Quedando algo parecido a esto:

- Elemento 1
- Elemento 2
- Elemento 3
- ...
- Elemento N

## Aplicar la clase list-inline


Para convertir este tipo de listas en listas menú con [Bootstrap](http://www.manualweb.net/bootstrap/) solo tenemos que manejar la clase `list-inline`. Asignando dicha lista al atributo class del [elemento ul](https://www.w3api.com/HTML/ul/). De esta manera el código de nuestras listas menú con [Bootstrap](http://www.manualweb.net/bootstrap/) sería:


```html
<ul class="list-inline">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>...</li>
  <li>Elemento N</li>
</ul>
```


El resultado que obtendríamos en nuestra [página web](http://www.unapaginaweb.org/) se parecería a lo siguiente:

- Elemento 1 - Elemento 2 - Elemento 3 - ... - Elemento N

Aunque las listas menú con Bootstrap son la base para construir los menús de nuestras [páginas web](http://www.unapaginaweb.org/) no hace falta que profundices sobre este elemento. Ya que [Bootstrap](http://www.manualweb.net/bootstrap/) nos ofrece otros elementos más avanzados para la gestión de menús como son los nav y navbar. Pero esto ya los veremos en otros ejemplos.


Espero que os haya gustado y os sea de utilidad el saber cómo crear listas menú con [Bootstrap](http://www.manualweb.net/bootstrap/).

