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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJRWRNF5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCQkoUB9u63QHBbWXRtFXliiiIwd37iOHI6cTc581i1egIhAPWWdx9Z9oQxihcgmPnqeW7DSXJDyuM%2Fnim7L9UaCytbKv8DCEAQABoMNjM3NDIzMTgzODA1IgxUYRPeurn%2BqNj8bv0q3ANpa%2BOqlFzvzpwZLUbYXA%2BJfOpQ9%2FKFv8vxryl%2Fu6aCpYYwwKg1Hc2J7FbFC1AruO6RM94ntu1NO0DQUamDBpCj391Ty4HE8TVjFIQfi7EUcgxnyYKjkAEgEl3PrKMRaqlyzrPj%2F7o6jK0ldc5zRqoGunPKAQSHTVQNzlQcZWsjF%2FFskAniZ31vPqWUgF2JQfnWgRE4vkFQKUgqDmPJNKg2V3gMxHfNMJUAG6P2LIEBv9P75MeTpnBVlRUkh2QerdGMuG0hCGWfv9eGHfH%2BF18f%2FxcZY5X%2FGMLBTujL0j8%2BTFmDCOr7meN%2BbU93eaMVPhFkO8XkxdbyIckd8wmxmjF%2BALNZODjerD5VC6me5scZKPaZlFQn44WtQvwQStZV8rKYfziZHxupUcI4VuYAL35shaJ56oyUe0cNp1wnX08nQ1hux6Hm7F7%2Bwc0B40b0m3stXGxGrV%2FIYIN4jQyn%2FELeM4qChZsStTU3IKIc6cDLPEYIm1Nyhai1lD2dcTQfL%2FlmdJYQjI%2BW1WLEpE3Iwl2EE%2FRFABGOqjWy8Pc8dPNXTUn5B6DWwS9lejPI7UZ0gyt%2B2jTKoiVVCaV8%2Frz%2B5FXi3z%2FkmtmT4VkaC%2BOvzxhIQSB%2Fw7Lvp%2FzkA1gnOjC058TJBjqkASfXAO7HPdL2uhILpzx9gBGNKeH%2FmaVjaB5LiBCg4K5JbFnWebmFViEQLXyUJ3mj2G0ypfFg0nu2vMLTqVgkEBOmmTUeIf%2FfT8%2F%2BArV0MAi1h%2B%2FhS4rIGzr3eMqAIXpR6RlmbBz1kVdy83nh5uu1nhCR%2Bbo%2BA9zyxkELnJEGVL%2BlEWRzVe1QYH0ZrF9kJa1UdZxJwfrahXUOFXuWPbFrj42HGXu9&X-Amz-Signature=a6825e9d74143c9d55886752897697eba12e86944f4d7ee41c3c26e04ef99824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

