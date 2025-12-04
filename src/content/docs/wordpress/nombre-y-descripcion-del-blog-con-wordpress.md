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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQ7HFVY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCd%2BQxPV619J2ULkeEUx6tjM3FMnIdxzl28VUL3oDp43QIhAOFnWZk1piVKePrjsfVfg2U2LcdJO8CgxavrXpWI93UxKv8DCEgQABoMNjM3NDIzMTgzODA1Igy%2FuwG8xx%2BJocxsM4Eq3AMJ1ylQ2VjsSuHAS7imwjNlul17sdXuzYJb7cIms9mpACbkAXMB4DIDNj6mJCuGn%2BPoi%2FBONvh0q%2FQe8BLYHb1Xx9vj5Gf0nrF8BC0W3SlVgl0I13IgLwEuUD3TIecSFwf%2FJg4xAAgBLjgfW3bj8QuhvVraB1osO%2BCccrK4bXu3cXnMdBiXE8to3AtJLbZ3KxwdYQJo9esN970rV3jvIfdYT2AyDh7%2B9C%2BmLMAS3GFBgHbaPF%2BRwL37Q7F9poJe3e2F9XA864kFZqjIdjKAz4lLrtD54%2FHPW54u8IMjUSY%2B%2BhWz5LEFsYElvzj6oUeIYU9QQX%2FcCT%2FIareWfyrO2CcES8HoIRdtFoVTQV10pVB0V75PHGSp%2BD15yGpklyDmVMs%2Bmu3ge8ErKVICfCwVI2Bd6XvR2joP%2FhU28c3qVSDn67SzCY0XQqHCj36uC08YmwiW0Ezet5ZMSr7qfbHRpK8Tz8z7ztPqqVEBucsFn1RxF5h6GnH8ZUUUGGGhKpVxNkPwHFZWbG%2BouTtrit6Aket%2FpUtoG1bfC5PmoehpHSOpl56X6vGVXrVCkppir3uD6GBrRtBi4WwFrMEV9%2FzS6QC3ij1WCAa3AqUtKSAuuQs1Is%2BsBLVp5PkXL3S4QzC7vsbJBjqkAS%2BHewD3AVSN4MqIEVbZaBJruFDcQvJDN0VGLMq7g0j9CNQLOUjvmHJabAcYng9XedzmcDOPVkF4X%2BnO6CKvE33Ai54Kcw6IzWAZq2OzZOB9fG8qxAcWEXqw48PhFfhkgm7jsm6oaKfmnP9uUroVZT%2BTWsywLAJT%2FfSyqYFoTxdf%2FDX9eKknnztq2h6tFyhqldvoylE%2B8HTkFOducjWeoqGaRRtt&X-Amz-Signature=594ddd4a4cddadb3f3b87342bc3bd3cde7a0722f253cac38f245b5ed037a7dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

