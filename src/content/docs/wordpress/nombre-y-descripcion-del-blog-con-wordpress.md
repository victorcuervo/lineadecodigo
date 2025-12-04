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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEPPS7LH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCaaLnUglRTOYzBC7zE9AzLZwmqW8eT9fAt7zqfT%2BOWoQIgI%2F9XBa7srKnQscZAaNWudnX1D5EbSeRPBsf%2F%2B%2BPR9x0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMNooRlclWhBIwFiWyrcA6sBFZGMqLymzv1eHfra2115ag687bGeathqrX9ogfOC41Y6mFLFlUJhdx%2BdGhg12fY3de2vMWi%2BA497aRaC7puJnuwNj7jL4nt0uEJg%2BkwT%2BX4al6A%2F23sAr01JeP5sh2KIDYAVDuWGCRcU2uFM5ucCfpniFH8Fj0Pnr%2BnpXVQk7YvYYfjsbqMubximr5%2FUfNDO7UjR%2BOPqcWHZEYDpxrxJ4uxsKWGPzLz3gQfS6TTxqVj83Zj5VUIj67Fv52wnXFQwPi2aJfiua6CJer2KoK%2FhEEHMy6KZTfIgZDKJqZgejxiIe7FAfJmAM6RFbSFNFygfAYtzhjUS6tBZMLwZ3fSfxbVtWVsyM8NL0muaCqeolH%2BNIPiDAPO4srHc7SumybKyTiyH6q26YLoUR2FZ8YXAsXFzq0%2FWbFUarvrLW3LWQjNd3L9CKtpUmuJMgegBscQkqOCkmEoj21CInfzuMEU6TG%2BOhzpPJUfemS2hioPMrchZA4czU1OEx2%2FzgJF2ZdOqJHNkK4nj5PKJ5mRRBJACU9kflRaCupTRKh4MFiLhj%2BROuUfA4bMH1KnJL9vwdGbXLyZtIvFEmrY%2BJzNAHR%2BOVTDrA4dEi%2Fnfj5hPAbLEJvpWJ22bPewgS6idMM2hxskGOqUBLkOIo0EyEXSaBA3VUQbINpFkF593LMrau49yJYPMFrKEul4PxhHb63A3qU4845EAW%2FxBEzPbM4AkpoK%2FJiPmsUWwsEWjHKYfpAfI%2BK%2BcZilLduSQuShpGw5Kir7XkY2Qm3nnL6BkkIID7pNhKpw1LsiHQUiROiq7H3t96Jt615lZnCnkM%2FSzGmvC%2Fa58pA6Lh79oWqlpc%2FNBsGP6Ff9YXczIuhmJ&X-Amz-Signature=c6ac77cac4a6722908c91d55c7f55b3438dcfa0762301d5934bb9d90d8afd9be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

