---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastupdates: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WQOVCCW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDosYTrJdpmaABkwFCZN3XOEu73QrnvHlOsvGwL8G0tUAiEA31Pl%2Fly8FGTGhcgbdG81ThkSSMst0SG%2FNgJrLCsiRnQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCVhEg4GsYo2jurj2SrcAyR10toJOvHr1PdcUtySu4TH2RyfR024P%2FgZT5cOWyyVYPvQNA37QSUl2lr1DPAOcnzcjiylc336BsbgNty7q4x3gxIHJBweSFOBfQ%2FiGsDjsk2Ko%2BQFzc4uq8yv6jNXz78GqfYSF6GPyxQ7KX9zT13mrAcHgAFTkNmCgmAdhTr1qqAsHO6ZRr8JYOPLaVz2GUuafksqhjNpK%2BruGHQdHDPhIhfkZiY0fhRbfTZTaZwNignO1XXeizwf%2FpHTBy07ds0%2Bj7YgSHF%2F65ZtseBucXA6R0k64sbI8oYUi%2FQDCsf%2BdGduYhEHw51GM6plMmymObZsQaGqPMlqj6I207dmMlSy2EFm%2FeJtG%2BfD92mNKVDjR9hH7bDt89hUDG8JERyu6Ezf2iHGooX8Qlrvj9Q8VkOEwpVUfw9N3gFHV1iKmbExUHzjh97cG8OAUbechaCDzoWTxlFeV1mfKEV6%2FSZrWTPvR6Je4ANd%2Fcf9vnmKMuFbVjkPrQB1EdpkknbuVfXBCh1CJrzhBQcqinUi3O5iDg%2FvweB5fbKnVf1vGJxIFsb07NB5D%2B446wpJskE0L%2F5wdL9JJGUDAYNknZ2TVpYb2VWgs%2Bge2SKGag2B2m2kzj%2FqSVH6isaP3eOqIG%2BCMKrdwskGOqUBejB9BacIMoN45T4%2FfEnJg3HBYsRCTt6SDV8GXNZ4sjMh4iyWCcZ25WwVS7AkBGjAucfnndCLKHssqqRuMyQANlGgp9T4ajOoh8tdVD6nIMyzoyApzoeyGAE4COhCcCfQAN1sYws%2BFCWte5FKgeghOemYZuyr9QvJC6ZnOqGkn27RXXcJU8UNzW66ocVgoK4l%2FzhJkzQBDX%2FqOhYwitfNwGX4C0EQ&X-Amz-Signature=126caeec2b75481f8bcecf5d210df3779cc7ec90afa83bfc2b9721db762ae7e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

