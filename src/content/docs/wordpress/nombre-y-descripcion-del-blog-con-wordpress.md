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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ERHQWEV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpzW%2BWfTilQ9OH6PkdTulqT0xF13s3%2BzP%2Fci5crEhUZAiEA%2BbqOteXTcOdKP%2ByfmJ5EU9ZjdOg8MHsY4PgemW5f280q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFiq6kDWAMzvc5ULZyrcA%2FNs74W70yconbgitEAap8AMjkb4QAAHVv7L1%2Bk%2FcMjfzSDEpR74K00toHmk%2BherVoH8cxcfokHTepv01EXDdzFkNBxXweYG%2BM8l0qPCkHl0PPeqnSVwwhEsOCnBNq7RSYYLj%2FQxVPiF%2FBVJ2aGmtVhFdAi3FbRe98b0QOtQJ67I1yuFOB1vHDUFXIs9phgWnNNw%2BYgER1l3pBEpizgbgnTJ1akIjYCCR3UW5fcmG2B%2FoHQpQ%2Bb6ftBMCht6ARX6%2BrxbDkYSfSOVJmjwd960JPAokbBvN1ySCG%2BXnogP5d5dVGt9hd%2B1Fu%2BgOfGD6nXg%2FMS31noZKIXTwNDuU3QmWvuzFz10u22DhUWohOVrd%2Fza%2BJGCEO%2FabT17yUeWGo7yRCsCUNvWqdypXxypSJsvs3d6Jj5DGHLXDYwWrmwBnLqrGDsdJCyfMP1k3vjLiBIqZnfmRmrAWJfOMc8%2BcxrYmP%2FGiC3GlcumuxfTVQ8ULFv9nQXf668xZIWhTaiqruHSu7YL77gI%2Bd51MBge3iiNogXFd6RcFPqYwX8HEQuV1wc6cAOyCmTbWXzQAjqRXL5uk0I0l%2FUNnQLXg9PhNgHMmcGdhHcFyfMAs%2Fk%2B5kMD8uVEY1KwvdPCp%2BfQZYINMJf4y8kGOqUBSHxR7JRUBdLr%2Fb2PoKHF6TMNnjLlpn3C0v4xcmdhW%2FMflI8hLehDe7fkOIjLyGbXbYxbksKLDKa%2F4Wj9GQJ1yQAcy1pkH0PQ5XIHC4QDcwgsJCBZgeGs2cx3csVWE%2Frkm2z0Zgb34P8ZBZEgdFUT9itlZdTCjjQnfPZfrW6kJf4gjrbexS9kK7iN7NylzhvW%2FJ3piBDM4GTiMvVFN%2B%2BYoJcrUlgD&X-Amz-Signature=eae1d637c4a6e43ac62b3d04ec9caf4d2145dd1b2e1ec707c19407465f2397c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

