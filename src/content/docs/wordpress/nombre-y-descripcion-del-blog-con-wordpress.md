---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastUpdated: 2025-02-16
slug: /wordpress/nombre-y-descripcion-del-blog-con-wordpress/
author: victor_cuervo
---

Vamos a empezar una serie de ejemplos relacionados con el desarrollo y programación sobre la [plataforma WordPress](http://lineadecodigo.com/categoria/wordpress/). Para ello queríamos empezar por uno sencillo, que será como mostrar en pantalla el nombre y descripción del blog con [WordPress](http://lineadecodigo.com/categoria/wordpress/).


### ¿Qué es WordPress?


Antes de empezar con nuestro código para saber cómo mostrar en pantalla el nombre y descripción del blog con [WordPress](http://lineadecodigo.com/categoria/wordpress/) vamos a ver un poco en detalle ¿qué es [WordPress](http://lineadecodigo.com/categoria/wordpress/)? y ¿para qué podemos utilizarlo?


[WordPress](http://lineadecodigo.com/categoria/wordpress/) es un [sistema de gestión de contenidos (CMS) de código abierto](https://arquitectoit.com/cms/que-es-un-cms/) que se ha convertido en una de las plataformas más populares para crear sitios web. Originalmente creado como una plataforma de blogs, [WordPress](http://lineadecodigo.com/categoria/wordpress/) ha evolucionado hasta convertirse en una solución completa para crear cualquier tipo de sitio web.


Siendo el [sistema de gestión de contenidos (CMS)](https://arquitectoit.com/cms/que-es-un-cms/) más utilizado en internet, muy por encima de [otros sistemas de gestión de contenidos](https://arquitectoit.com/cms/listado-cms/) como Drupal, Liferay,…


La tecnología que sustenta a [WordPress](http://lineadecodigo.com/categoria/wordpress/) es [PHP](https://www.manualweb.net/php/), por lo cual los ejemplos que mostremos de programación en [WordPress](http://www.manualweb.net/wordpress/) serán [código PHP](https://lineadecodigo.com/categoria/php/) (aunque en algunos casos también utilizaremos algo de [Javascript](https://www.manualweb.net/javascript/).


### Características de WordPress


WordPress ofrece una amplia gama de características que lo han convertido en la plataforma preferida para la creación de sitios web. Entre sus principales características podemos destacar:

- **Es gratuito y de código abierto**, lo que permite que cualquiera pueda utilizarlo sin costes de licencia y modificar el código según sus necesidades específicas. Esto ha fomentado un amplio ecosistema de desarrollo
- **Facilita la creación y gestión de contenido web** sin necesidad de conocimientos técnicos avanzados, gracias a su interfaz intuitiva y editor visual que permite crear y editar contenido de forma sencilla
- **Cuenta con miles de temas y plugins** que permiten personalizar completamente el sitio web, desde su apariencia visual hasta la incorporación de funcionalidades avanzadas como comercio electrónico, formularios de contacto o galerías multimedia
- **Es altamente escalable**, pudiendo crear desde blogs personales hasta sitios web empresariales complejos, adaptándose a las necesidades de crecimiento de cualquier proyecto sin comprometer el rendimiento
- **Tiene una gran comunidad de desarrolladores** que constantemente mejoran y actualizan la plataforma, garantizando su seguridad, rendimiento y compatibilidad con las últimas tecnologías web

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5TTS42%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnCAnvn7T6BqLUQOmR1pzssKWenfgixSZUBmUpDxE4zAiEA6xWeidPwVZJr%2BgOdSoRugpvmmZPbBSD%2F%2BBYqtP%2BL1YUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKFDmXaflwH0DGdx5SrcAwaMAF2pWWuT8K2aPDHPDQoo2%2FppoX8Sbnfi1qXy77DZRxFtnTnX1At7JJzYvMRsmKTgq2AtZIZLX9Ccx6May6kEqvMLDdbLtU%2F3Vv8VQsLDVkeQGgLypKKGfNyYTJqwweq3Dhn8l6yIU5%2FKRt2x%2BCFZfN92%2B9lhASAbbTA%2B3f2op%2F5KDQujza0YmSO0KV0wAC2SJT3oWxs%2FCNzy2dk9DoBcIO4Pb7BF%2BYsHLcZstI57yR01Un3aWICYvDs2duo%2FeZBo5LFwrBKwlefaUw3Qsz4Wh%2FFWaihCBBA9fH9vuTIAw1ydg9ww%2FNGY0a63w7f0rC3zFqgY3Fe2R5ij9Vo%2BlfSX%2B6Gej95WzwiiUWjJbo3D6oNy90YEm8Cu2eKO%2BqiAfQL4JK1Bu3M5znCTnEuT30g7TIOvgQy1C%2Fe3wEhMlXbcQ1BecmNILZxT8PGI9gvS4M1wRS1RmCov1ClKVxqo5tDSC%2FHyCeisoY7anO5CUBXGvbEwDxB3HrRYPcxznisUBG9CezW1%2Bqu1xknmxISj2LFM8qtRQls2N1WrZ65jGJwZ4Q0rgoDet8VHT0BZotlgtG2PbXFiau%2FV1zun%2F8Q5nC%2Fq5PL7wEX9TbVljcy04cUWk3dyXd57WpfmGDS%2FMKGm0MkGOqUBLP%2BUceaBhXWtV1JDXx5PXKkfKPdXghUPe%2Fp5PPkYjZVpLmGiHkIRJhnTu3GeeZGWPBzM6HcEMIKPR6UTOBEu4Sml6yvZdNe4NxQ%2BaHliaLEo6MjI1ILzgHTJkiw9EUSvh%2F%2F%2BbXlcHQ%2BL3z8CMjM8A0LLSSHaMumKU80stsFJ5C6k0MYonSpIFVVP6LZDzZ7M6rF3PieliWy4WccSpmM16EQgJk9t&X-Amz-Signature=323e25e5030b54b583c4ef1be64821ca55c58d490f3fc6ac45a0a7d4e8621e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Fichero header.php para definir la cabecera


Ahora ya pasamos a codificar nuestro ejemplo de cómo mostrar en pantalla el nombre y descripción del blog con [WordPress](http://lineadecodigo.com/categoria/wordpress/) y lo primero que tenemos que saber es la estructura de ficheros de [WordPress](http://lineadecodigo.com/categoria/wordpress/). Si bien, ya entraremos en detalle de cual es la estructura de ficheros para poder crear un tema sobre [WordPress](http://lineadecodigo.com/categoria/wordpress/).


Para este caso en el que vamos a mostrar el nombre y descripción del blog con [WordPress](http://lineadecodigo.com/categoria/wordpress/) basta con que sepas que hay un fichero que es **header.php**, al cual la plataforma lo llamará cada vez que se ejecute la función:


```php
get_header();
```


Si queremos mostrar el nombre y descripción del blog con [WordPress](http://lineadecodigo.com/categoria/wordpress/) vamos a apoyarnos en la función `bloginfo()`. Si echamos un vistazo a la función `bloginfo()` podemos ver que su sintaxis es la siguiente:


```php
bloginfo( string $show = '' )
```


Dicha función recibe como parámetro el tipo de información básica que queramos extraer de [WordPress](http://lineadecodigo.com/categoria/wordpress/), véase:

- `name` - El título del blog.
- `description` - La descripción del blog.
- `language` - Idioma en el que está instalado [WordPress](http://lineadecodigo.com/categoria/wordpress/).
- `version` - La versión de [WordPress](http://lineadecodigo.com/categoria/wordpress/).
- …

### Codificando para poder mostrar el nombre y descripción del blog con WordPress


Para poder extraer el nombre y descripción del blog en [WordPress](http://lineadecodigo.com/categoria/wordpress/) necesitaremos consultar las propiedades `name` y `description`.


De esta manera nuestro código fuente quedará así:


```php
echo 'El blog se llama ';
bloginfo('name');
echo '<br>';
echo 'Y su descripción es ';
bloginfo('description');
```


Como podéis ver, algo muy sencillo.... ¿Te atreves con tu primer tema de [WordPress](http://lineadecodigo.com/categoria/wordpress/) ahora que ya sabes extraer el nombre y descripción del blog en [WordPress](http://lineadecodigo.com/categoria/wordpress/)?

