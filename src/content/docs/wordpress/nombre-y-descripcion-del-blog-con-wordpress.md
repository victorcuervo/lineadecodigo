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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBSQHSP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOF28H%2BWBW8%2FGwcqI3DV9TorNAYzwiZZeJtdx6cFe%2FbAiBF50VaskwDyHmEBRxlUUoj9iSkjHfRKnqXHGrmTLb0Zir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMnqs8dafLF5diECcCKtwD4T5iS2A3GszGMVQvmnLuT5QyIJIGG%2F1puMSa5xTyRREv1QXC22%2BfFd%2FRDXPBo0bXB0EUNhFpUzq%2FFpknCFWkVBMvUH8dR4VqNGNfEbIJeq1LxD9wV8QeytXJ90ysb3ltsIqW%2F9ApFs3sqcRCHlDQxGbduoevRnOHSjJKYN04XYbxieLnWN%2BQjhPTNjgcUrbdg7uRDlRud%2F1m0tGzsmx8PmOhundv5aDCda%2Bdo5oCXnEJKcUx1A61D%2B9pz6WrLHmn1e01t3Fhzdc0ggr74LYE4hhjoWNHtIQBtecW3gYq%2BxIxi2Wd%2Bxmo4FjGZYuh05VfPPrkcxUBDwao42DDsCTjEtqR4YZau22AoaBfW7VsAKdVMGoyALgOu%2Bg%2BQnuADJlqaGQlhO4ypt%2Fq5ps%2FVSQg5RW7lTTDjf1STlfYGli9Jl%2F%2B1AboAOJy5TcZ9gv%2B%2FhhWKyJcMziEhduBJiD1s9AygUu0UFQDJp1UeXji41S8ItV5XJ0xnUMn5ZnXXMeE2Kw14%2FBi12Tr3c9rWZAxC3SQ9DCOkWtJVjBV7Q5u39aVigfvyK1NQlYC7qiw4oXS4ULRl1WZbe8cGJUv2ZJ3s9WX8o1JekyCBwByW%2B%2F7WN3IZ2cFQCvhdV9EhK8wqdMwysbNyQY6pgE9kbDHpb%2BbAOlkVVR4LeMYU4c9zdksrT4LNtRBEHRT%2BZZSLd4sfdhyH6HZGtbLQ8xj4yTMxO1T%2FCBRov%2Bl6C08go3QdTZzyBJo8V47Ue2JbwuporMl%2FANrWdrYu%2FNXNuZBNwA6M4KWqXYjkqwRiEm5LmltaNYF2eNscPTfPqttTkVfOAYOJbBBokaqp%2BQVHzr43qOvB73ZVgo%2BydS2T9VoIEUTL%2FBd&X-Amz-Signature=fded8262c2a8bf8bc28c9c50157d2a186de297453023583c03c08f471dce81a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

