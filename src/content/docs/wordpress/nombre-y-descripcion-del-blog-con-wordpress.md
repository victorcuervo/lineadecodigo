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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654Q3OTGV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZM5t8%2B9VHNF6k4HW90PD6XilN9zaFWhChu5iUHXl%2BXgIgfzBjdTaB4%2FWWAoi2YDvchcGPgfjbjUvJ%2FNNU%2FR%2B5hW8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPiLKt5eF107rtZBASrcA%2Boo7zLqLFMEV5rgseVPfgfr0dU7AlxyPpSx%2BhEeDn4VJTT7Wi33G5F8aZ6qoBimNI0dHcn0eckiXowpUncbz5HX4EvD88wuIPpl4Y3dFc1Ofi27WG7ucRI%2FrnFd1utqi9VAx0edYAKiUNMk0nxqeKV4h3SNluiSY%2BmCTj76BIzcuLaHEZSQ8gq%2B8cDhe6QqBzcVkahtVVz6HO9pyEcBMm0Vk4%2FBpLROmdzHl6IFiRf9vst5S%2BnY3ai0Fq9jgTZKKxU0I9f5tHGjJRP03WaUFlLR35%2BSIhfXuMxKvxnHi7ept0TfniY97mDAWNaN4npDycvw6rvGz4UJBmk4oD7TYmfCTXLFSJT2B9CIVXqwOXg8wM0nWRuKxhrUtRj9GVhlK48Nl%2B8mDZK9pb7zJEibaKgpAk21k%2B6wgatHzEHCS9pJSDjcCM%2BcigWHA%2FiCj25NBdHFtvgF0bm7r9XhL5y9TmdfK2NxPXLpgNKwNoOpXN3AYAbE1jmggvI30HY4r%2B0Q6ulUk3Jx6UUv95u8kWhjrec2Bqrjdw8n63QSmRatS0SGznoG1iOSwPmeHN%2Bkwj6CjxCbqc2qiVVwOBLmVG%2BD6tTC%2B%2B2ALYaJT25xOZ1t2%2BlO%2F4b0CaICpb6WG5koMJCPzckGOqUBzTUnSHvMSNFpc0t7J09bVN9PRSrlr0EFJHs4VAKitZLG0Cs8wpjgZAcOxA0K971PX%2FiDyx9TtQzxM%2BW%2BQik9VWZhoG2xDvaBR5DxfIaV38iK0kAjXnrtQ8kvAFPkkNS5jrlaYWOEnw6l5h0PkGKFjMW9pCuhyO9mOh3OcvvTEGVZHcnKGbs19mz1rX5qec6WYeroit%2BYMffO%2BOsMDUgCI7uKFDDW&X-Amz-Signature=9d472ca49b3a7e7680fc224fa25cdb7944a7ebe2c763d43f69223638bf873291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

