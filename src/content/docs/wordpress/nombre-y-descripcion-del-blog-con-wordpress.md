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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MVAW4HP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCh607fyL315SJ4IdJdG%2FAB8XwFk1Ouinb3VeGljznaFwIgQlqKUcZ8Kc9CFjX0WqnS8KzTVKR999qum5KfzBG9OCMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIzpJ4v2WAxwa1HjYyrcAzMOFzyLttL4ij0Wm%2BWZHvWpmYTNa%2FskiyQ4EwuMSJHng%2BZchVNf8OjtOFAsEiHtQQA1wEnNVTkvdfZxFabv0dFi1rLsgv8CzqZG2KpZNg7Mhe%2BJaV3%2FMQ2QBn2u6enTv%2Bmzq%2Br4GJP548px4zpNi6TfXc1kvMcugv%2FUTXaosHiHfeTMzGkiBarYU2CdZfN6ez%2FdsB%2BTNGp0N1t8dMOf%2BnKpWvx64irsALqmbqW%2F8t00tlWk33Q06fW27CwOtHbYH%2BuRKffjobTiP1YpjslwvTbgbkQsGZNh%2BNO%2FTic6H6a%2FcXiosfnqO96eb5VtCubr2OnzSVNhmv1hJ7aUyR3t7x8C5U%2FW38%2FshK7%2BokWXG3XChL1iAOj35PocCyYlSTzJNinSEJlGNJA3Mijs7A97CjQihjlttmagsEvj4C3fg3VF1CM%2FIttTVCNd6L4%2FLWsORe1TW8SZZAEj9xasvQ0uRYRoGW7%2B92ZzGufsj9hxLvuxfv%2FsjtA3ITNpuSv1KhY791BIBqD%2F%2BBm7XUyGE%2FUdP9b%2BiijMwVy2%2FCqHPavl34soDUkIP%2BGuRZHK3NG6PqAUBo76bw15e8qFvj5CQayyRj4XYkz%2BEtDQ0t9qJ80fJ2MhQnIpG7L1jmHqpZHFMMyUw8kGOqUBwAJO2hGuv%2FxIxgeDyWSAw%2Fl9OmyLuFx27Unl%2Fle7oqab1FGgpbv%2BBvE67%2BT8phyytvexXy%2BrzD5n%2BtdQkLT7FBvFwgNp%2FDwpdFWCP2dItzEDTTZg02y05hUdTrK2twL5ojJ24nXyS%2FVycJ6uMR0RecCZNl8CyIr4h1wkcs%2BxAwSB5oqezoZuG7HNC6uLrLudBZdb5lpfbsxTVZer5rXNV9auL%2Bg5&X-Amz-Signature=52981b788cabd78cb7e078cc7a6d8c362f89d2bcd43f0401183cc4a431e2be72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

