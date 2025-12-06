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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEKR6XTY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqMEG%2FSYl4%2BCJlfhkJunH7FjvDHAu1li3TcdDK6s7eXAiEAoeMRePmWRRPP1Ey7Rzjfe4l4ydA6rlCgGdQq%2Fx8F5oYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDD4oa7rOPM8dSTdvJyrcA%2ByAH87AwLjDND0KHV6Ijg0vq1lIlXL9U3%2BQD0dvXjaRRrqSPgwvG1SeqTss%2F0bvKuZycttr%2F99ASubiXfsqj6CPBMduvwUYLpAzN%2Fp82TZGtuf%2B42CPeDQSy7rFm6fCMh%2BClTEY6iFpcDuRz3xCx%2Boos7kKfHNeEPVPHQsEoz9tTwMakxB0N1LJHRsvVixd5BEI5UDGM55av7nLdW9EPipgHNYHa3OQljPv29cssd6JwUgsKumYk2RHZP4zkpympwlKrfdfoIlIVnrVgKf0djkzBbjz2UZVYuoZXpeDvL5xfdoaF9%2FnNARX%2BZqW5qGAaoBqxSu%2B9Umq8NK2YGCqsFgu6zdfFwpTOu2u0R7fq67z3hG77S0wYNyCzZPtJO7Ql6tYJ79s3aPEKIlWYRFwJR6pzoE%2F76PYmenfIVBkQnqBjCiAQZ6dDZReTvl1%2FWfa3fbUS32BIq9fSTfsblXLhQ%2FjLIFUJIyNYv3EOh36iP3C8LgSHepHsPlqS%2FP7EEwxaHOZnMteWVWq332DJ%2BBmLJ33hfwA5O5VdSpD1GFbkGa0J41lyP9V8iDnJJhsl7WNRJD7Ivrfa4%2FnAMJjEEHSw6J2%2B7oSO%2FDCVuErgbd%2Fx4dewX0dp8rhkiX4pbcLMPLL0ckGOqUBKpzAbY1b5%2FcxDOfVNBiWC2tnIXx4hezQJkvdgpbkxywB9ovpwL5ypWsxlq6kNnCzQO8g%2Fu7TxTqlcIMz47Q11XDaUc1yhDwc96DYink3O%2Fq76dzGqwpfISZ0tBFKI0dMUVrowd5Kt6UXIe6sP%2BjKTDCrqHhudAyS2083ldalK%2BcthSwmJaHqkZZkRjFhpfUnaPqqotrTbGLP%2Bw2wbMl7qE%2BMlvDB&X-Amz-Signature=1eb1cd3748f2107418fcc25abe6a4a733edb68816af0142166a8416be8c82106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

