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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ISDL3S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYrhyWfAygCjX%2F%2BHvFKVX99fXUn9eD3BbUC%2BSjk7V1PwIgIdHaNgOv5uS1VSDEap4%2FZhCeJXmfxQ%2FjK9Ei3aJKAcIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLkbsLnd4mlfqUmpoSrcA2bf54hSGXEdNXA1Mj7aeqp2X%2B17lHWRNH9b8mgwoPT2Gt7I7FMIpQQnIt6G%2BhasWz3OwwUW6c1m9JVOu0WZ7vFj7oE%2FLnKBxZPsBMSny%2BOKrkglgWp%2BpQTGY7apPOW5MMChTxJBvZmddUwiQC08OrCsXxTZJZBKAvfxCK5chQ8bNMAM3uNeQifQSP%2BJAqd6mpTHTv3a9nwxjazjo4A1y9YZKce19cM5XDoMOXQreHkMAprfzvxKBEjzny%2FnTAZ2HnW8I9dda99FQhaaZueBdSYC4LY7f0hJQvUusjJNQLNwbCWjqARgL1l50qj9dHo3xdfxKIkveYp%2FZrXs8YVES2YRLovTrRPzDGgT0INdiC7H7bkQrXxkivx0DpY4dF5e%2FASKGcUIVIqyQKhw08cjR3j3dolq03nmY%2B8XMVnl3ueESJv5MZ2r1XXUxnhfSKuX3hE8sCU7zeW8oyqzKwTOllQScUre3laBS4Du7aH%2B7xjrQSE3l00Fy0RvX2olKQbiRKwALsRVZR%2F4CaxpPq%2BbGQBgs%2Ftb%2BRyt1x%2FJ5U6FAngA2aUZMnMYyNUTmlXkz2KuYJJ7FaiGVBjvgj%2B6IZY8keEb%2FP%2FgRH8KDSeHqKssbMvYwDPcmYsXLoa2Nqr%2FMPfJ0ckGOqUBUvxYIs7SV5LD6niviFXao%2FBqaF%2BMqPVH%2F9ifUxCZ%2BIY8%2FNdGSyb82a8p4UucyMnEIjWIpiXkXuWWiXA38G6jfl1vOVfczIdQpOfXwmGhyWrJTrvy1hgdEjVNS9TWjYYyt7%2FwR0u41N%2FL%2FB5qq83R7RGxlXUVsbVoOlBe7lgQ3y0cpnGkCF0fWFuy6aHmpXNmySVlKqzDg9AMsGy8BlnWR27nf%2FNM&X-Amz-Signature=c8358ef6755f328e497585900a76b1f674fe1e966effd1cc4c93a5d3312aafa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

