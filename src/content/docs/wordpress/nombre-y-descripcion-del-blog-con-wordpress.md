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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQLUBPG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIF0%2FHXwp5GI4TsM7jPlKnhXKxvbT%2BcHW%2B533weF7fnEJAiBNf2RUl5J1DBkVqtfoDePN0ZBBNFYacEdelflTROyP5Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMflJxG0L7UBT5LEPcKtwDXq8zaKujknXzekJMBqSq51ALFTox7MSb%2FLWPKmJL7RReD%2BL5mHIFzscWQMo8e4WZ9ghi4E22b%2FNs5MygKwAw5LifTgKCRTBjXSY72HHQWtf6U48ezoAGJuoLHygo30L%2FXJTSwfS5RfXtXh%2FBZv5jcAQ3jU35fzzoVDnrIBDDQCesgVm7Hd8xX%2Bpq4Emw%2FMrf9OENa%2BMD0G7xADRzxrocQ7RF7cBrAPHg%2Bi439QfjDXC4z7cAPLrdTuQuKIopsxn%2FuuWDfNETLtMgDIF6RhCPTK6Ii9ZZUqUY9Mj%2Bmu2NNrm8QmR286OXswcWzq4KoYb%2F9kY8%2BljJYuIiOW3p2dhAKQuoYT7ezX128hL2a8Ra%2FSGswx57Vdv63chpgDWBrOQlTjeQMVNGnhSz1ZfyZ3Vrfz5y7K61jEK8%2BvBdmwgwH5Ha1a15oOERMu8F4J94EHV2Qq7S97Tf%2BHPcAkgjGf1CgZRQkZTAoIWdsFr4%2FhXSAkPHJUGOJUz1i0AqtcWHh32VUJTqqJODIEO4W4gQWGjPgqp9ZqcovXB93B8GALZ7nC6%2BKqiQWixElXPJbjA1K9EFjuX4z%2FzLtwfvOPCyO%2FMlEQN0eLVzGN3ryAGltHxD7Y3kxEWo7AEFNzbapdcwyZDEyQY6pgEpEJTJ5dD7Pbvr4asv02FnQnvfhqwm%2BPVkynRdb%2FPiyAlN54FVssfOGrrDh0pz%2B0TLplgJp6vo93YyFnuU%2FQGg2PZd%2FQ%2BnGXQDjlpMMMDkYyI8uZeq8ntcYUGPUxVYybt27WXL78T4alo9U8jYLCCijl3noZYq0O8ZKjnLeSo0FhPdnlyMHRh4nzi0m8x5yIflMJfIAsfTKEM%2FY4DHJ1LHE62gUHRP&X-Amz-Signature=ad0291800453659f635c072831cc2f034f0fb7eb2b30525bca21dc89b10b4fb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

