---
title: Nombre y descripción del blog con WordPress
description: "Cómo poner el nombre y descripción del blog con WordPress cuando estés creando tu propio tema y mostrarlos en la cabecera de tus páginas web."
lastUpdated: 2025-02-16
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGDDQBBX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC2%2B4A9Mg1951A8F3JQgdQF0spORVLsIoIZHg3X6Rz2oAIhAJaqels9hJ4ir8yYPhmZTpL7lun631NcoKZW0f95SfZBKv8DCEEQABoMNjM3NDIzMTgzODA1IgyAK6%2FxvnV38yBovE8q3ANcGBfInObfhY3f57%2B98rMgGIbO6r8PC1vw2kK1tkq5I3pLQWgFfP9%2Fxf4y%2Fcia4e7TtgPDlAXIGcpStV25oD4ycPrTfBs%2FN8MBe3m7IikFNBmTR9fHvKGCdktyCc1ZTV28JdAzMW8VhbM80Xjt0FWzPVYFKuvCm15piNLAl3CbVIW2TqetI0Rd27Jx7z5sZJxyGyaKiVglSf10WIMsYkYE4538kwrwxEsDl%2Fi301qRoQtyenGmsNzjNBBkSO%2B1%2FtNpVpEaxtwxj1piFren0sw0Ze5LZd8hUs%2FmBHdEVPd%2Bv5tR1H8q%2F3m2BVQzdJ0gxrKmY6HyV4wNTfbJ%2FOdP9eqGKPjCzD45fvL4Bc19oKyrO1%2BlmXuVj%2BxQ5Tk4KC%2FfccBXIG9VYssQVWoJBQlM4T6pNNeQ85rrkMzwGbq9339DgcFNLyBpGNNWq0ZIeD5nCRn0n2jClywh7Bil58SMunjTQs9bNcJKpWd8j5wB8mPBUaOpaalzzGfrQpR5b92%2BpUWqqQWNlhVOMyYhCHXmRLFATe5gWJC1niiNeznUFck8tHZV4mZTNe%2BxvAWGzmvsxmHCqRVD2GelG4slVWvMb1K4jXjCetNPBQHVDzsC7KN3lWWQwfIFQnLgZcv5STCxhsXJBjqkAS%2BMsLbzMoLExTrNKZbuqW3jRVHLobxu5FxV8mf2yV70t6ttNnp3g9YkCqnBPEGd42xGq6pTx20GihlzcdOsaZr64sw7PaQ96%2F%2ByvzHg6Of21V2RMnASpcPQOeCDa3FVrV6prEdXD3yQGFcfCvYnEwjADNdK%2FmK4NZcnREuOJFQLgUtnspG60EdDSLeXd38jlisgRfyRK97ai%2FzCKMyaGuZm9Qh%2F&X-Amz-Signature=8bea88ecfc12b1943c463f083b5d56dc25fd8f8ca8a0ca93fd249742a1cbf29e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

