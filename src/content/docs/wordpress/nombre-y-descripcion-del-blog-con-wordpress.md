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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RW4BWF7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCPnV5YL%2FXvyWao6KDs4puEYJUQ0pYx9D6QytEg58KGnwIhAIp77vKCQi71TMV0arZsBEw8nP%2FLkCKzv4WQgk2E885kKv8DCEMQABoMNjM3NDIzMTgzODA1IgxX6UAMn9C3i8oisfgq3APTHNn1lDr5A6lRsZYcx3BPaGcsiVzGAO0VLt%2F3jMEBXOFAEQKIN0xOiT9dizEyzp%2B5kFK9gPm9C506ooNIFUx9BUJCRqM8mRSl4p9VEd%2Bv23RNY1O0akaATCnV4R5MqJYajcBTckDBcTvYW3lZud6lTy9KV16%2FmmTn7eqf%2F6E5VXHMnKYgUikyiCp%2F2587X1p6WfSGe2URB3UmmlYgA3bKU2pcgmew%2BScy5zV1WSV2pegQvAVoeeRuRG5J5BFwC%2BAcmV7s6xu%2BAgei571SqsiWGcQYIUBdMjUdRlH%2FJvBu%2Bwb8oA9B%2FsaT6JN1v8DbT1cgWcFWTLZeixs66P%2BO7Hu8p8oGJILgmKYFlcpumEStYc1shZ4Dfyc8JCnFyl9OEjkMDiLG4QxbbzDPyoN%2FI7xXSP%2B1YtwhzaoWK4Sh3Oxl8LllOJc%2FsSuXH8blSMlhpxmH%2F102N0y8sxHCxsUAAh9IN1g8kumeFlg8xReIzQGouTsF5NC%2B3%2BPcWV8li2N%2BAG6nblp1y9yNivIeH3KsyRPgz%2FrpYRxYe04m%2BYvH4GL5w6117DDDUAQcr789XIsQk5XBWxBoHsTkRbeCPutBGlBObBpBaO9jS6AtXvVH2lfF1BRIA4wUzxVXWuUThTCFqsXJBjqkAQnBT3StDcnRTc0IiU0jJ7hV5r5TdPi8zClja2Wio27iW%2BoBOklPc5JKGlQVEU6xY2dSBj5qnzae%2BEUYW7e6NY9lKL6ZuiNoV3I4yeCUFBhBWvsWjDEVPzUXIX80tCkUl5CsWwKJ1slXGZ1hUb3mcRllQNMTRygmw7Ij%2Fb87qImkB1nlqF%2Bp8vg%2F%2Fx3eHa5fMej5dUoqW3y%2FgMS7BgjZg%2FXiXdKx&X-Amz-Signature=f21fc937b002b584bea33a4cd0c7626b848f94a5012379bf5ff3b09a430426b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

