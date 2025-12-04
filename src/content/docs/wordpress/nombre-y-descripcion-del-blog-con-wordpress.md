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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS3ZBQYI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDCme%2FGHXlrtiq%2BZ2A4dHVNarISN4zMgfTdcp%2FGcBGgXAiEAzhdSySnYwbIo%2F8xDbRE6O%2Bmuw0%2FQEg18J69FFxzI2FYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEpTjyQZwLvUCtq7sSrcAxwTUByMxM9rYKgkGcTr6xrAKZAOXT9nCr69rlInfKRjiCmpIOgljL7n9PqO%2Flw7L1fpnGKRFpCCqTWdS5Dac2wUOQWJ1pwZWbkOj3GvV%2Fb6aQExXafMHuHWUziSV8W2OpHp1bqSCLxGNGDh0TFZYCoy6tJPzmEDsYkxEaYcEkdRg9nsicDfr1pQeBT1NLwdJoEaLwks9dZZwg5kmt3Zk%2Ft2bpnntWvMApAQySuFXu%2BjDBEU6%2B%2BZZXOHodcRX8l83S3WkkgjYBDMPEuM%2FYQurAoEP0%2Fj489%2BgXAcs3lMiC%2FtnliBYYnHJSdMVf57sfxlU5bj%2FlkzBOaAEZ1aQnM4re2zVRMdqYK%2BgFj3QKsunwPmRfl3dvyEk5rwXocCFGM2N2gQCdjesZbblI7grbgrw%2FWBgRn5japrOvae%2F6J%2B5jBkHzU%2FYpnC6%2FqbcjAs9rvTHRVpXI%2FNAYwnTDH0WeHLV1ez0HT0B2fi98ot3locziBiEe0M34ZOIuFWrootFCSgPlQmG%2B4h5NUlQW7rWJZnRUrP3g4zMZFcdnzeb%2FsdXLQCO0nQ10bNxyuKW9vMTJuA%2F2z7LGn5gDtJI78PPYFKDsGV2tN1hlt5sT%2F0aKuNACljVna3KV3dTc7DrgvxMPXUw8kGOqUBGi41NMBbttcNf%2BVCzezSqEKujunF47Aa%2FWIOwNkflnaRohVp2AA2AZiqaV8TvSoGRpqJrAXSpogODTKk2wvQVxzTgJFxWVozXLRlVdYLv1Dj5W6D70EAEtu0TrlUQys89hmEJ3umUboHJJedDq8wtpfFKf9N3Tga%2BMF0I%2Bx5p%2FbNMQ6RmTs4lSkTAdmltZ%2FUQvNL380vsB%2F%2Fj9YO0OVT%2FluXQPm8&X-Amz-Signature=0c2c053f8084e19066efa4b599cf6b73c60cb070040dc31976784bf1226aaf62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

