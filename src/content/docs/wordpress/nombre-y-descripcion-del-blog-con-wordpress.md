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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THYKWYFN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnP1nYfyzYTyYt1LH0r%2BEdog6Kk6TbNn4Y%2BhffA576tAiAlZCUGVLkRk0BhzOp8%2BiiwLBRkyQs7jQdX9GHV7%2FQZXCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMW%2B0%2FgWIyxUQp2uwyKtwDgI7pKMgMbylGeWdkPb9aVvTQlfNCp1G26qBa7bb0qawRH5g3KA98JqhTWK2E2tFjOz3ic4w5ZNbtcN5L%2FS5yVabfGRXXXzKm8FeR6NCmNGDh19jvGk2l1yP%2FX0U8f1QUEiPAeJoQe%2FmsIZ4GJI%2FnuURBTKuvo%2FvpgGeQKTpn9iJp4Q7aptnF4aYHgnYv2bgZsr0NFsDtay41f2eX3as1cnG8hCccRYEL83kjU%2FQ%2B5LZiJRWclGgMdu3Zgmpht5uorR9JcicjS5zQqNS6n616s%2BhSpLgeRwDBTMErHmw5NCzaZwUpj7luPqKfxciN7O8C6mUFGTRF%2BsUsIuF3S3%2FrYWPnmraQkiEtEuyOmVNLGp%2BinAiFxqn5xem%2FlqACdgJh6tZOGdc94mFkGn7W99dLtFSeQF16rFFhsUEor1%2FVqtMFh8jzF%2Fj9i%2FT%2B06mxByXZOOQbvwHwzv7fOmcu5H1YKSf29GekIWjkOjr01%2F6EMjro6ZjbVhlGnK6TGQeUit8JwG9hE3KIl5AGMXTzsmCNK6wo3HqpqMWJD%2BfuyJqbVgeUrahDuvXobra43UKxzvyMf%2BX%2BJaG3ybbDYSwDY%2BxrPVmwrIHQnJzNVYBGeWIfZHVmq%2FyGjCqXUIX7AYswgMnKyQY6pgFeXMF3MVdm%2FhY144u5olRvFlwpWFoUywPbUVyvN4MI%2FgidVdCW0aTehQ6efKblIhuOPZkYoKTib3s0U3L0SVcKheGpUOX5WLO0159B%2BcpolyBHXdT5Sl%2BTLiEH44KPwkveTWs%2FpVBf8CfjMd6uE7dO%2FxD5O5hKE81UHNdyg2kSTn%2BN3m0wyoUkk%2BRRkkQp0ZsYmN5%2Fb%2BlL66IUduC%2BHNyrBZ840s2c&X-Amz-Signature=33e89d82ff62f537ae0b273bcfb8bcbb14589d7dda4df62ffaf75a30edf20cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

