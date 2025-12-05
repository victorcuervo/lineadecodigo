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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCUNV274%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqsbgtJq9pbJoBX3DHO7gMfVTZujDTh3OPqv72ezTnHAiEAvA41N2gEpDG7ujepy1Gn6H03u%2FbJOPzGfkOKkSpmDb0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLwLvLaAyg%2Fbk1KEZyrcA8Lp2yTS8yx7xFeoXoiy2%2BVeAJE1m6a46Q%2BLZnlKHCQTK07dvxApTBqJWbKl3Ohma%2FhHtQ6%2BnFo%2Bqyrd15MmyRBWA4my4SFc4FK5QKCQJhFMPI1gygI2626v6Y%2F4C3Uf8eGrhtLchlmRnnvrJ2C0vzc7zpXiRXJPnhW4MePl3DGhG96NWOIr87v7DdTU6I43bmPXv%2FHuPSxJtTrFTrjUnEYaa7yW%2BPW9LcVuxfhnKMSukPYmd6kwserkFAIeFpgwByhwhoKwSta8hoysavcjGWkc3L%2BqRUpzVkxxKUzVfWR%2FjFf3A4VR58NNBhpSDt2J6au%2FD4MeUDXHNodaju1nCkkNclJZhtDEV50J8Kdmk2nwBWdIX%2BQtT3hryzUQuh%2FrSygcoMxqzuuSBlAHU5nAO%2BiMM8%2FWtS4qpj5XSE8ecTyzJun4soyYbr%2F%2BIBbWXu1acCjbzjSkmKlRT7knjugQQ935j5qqeJ%2Fdn6tlko%2Bly8pxcCN0aFr3qF70Sz27AhDihtz%2BUNp%2BwrcTaFI%2FJsrmePtrtMTFD46zkwCapaVzqCi4tSs9f%2B6SOZke9WlmBeCIfu2U2nfSR2H2Mrrqlm20kPmgmaKm%2BFP1tHXI013AfP9SBM1ycackZjtDRteyMNOyyckGOqUBRxBTgtsuLn9G%2F1cqmljMp%2BdCzJjmfMeqTqUJNj4X%2FWoK3eevvQgEOFsRXh1tmUgcm2v69GVAzfWriCPJhMUp2ZhCnzzNyj9tkSCgZ9DjHDCaoNzM6l7ZqIOtlS6bTr9HqHuPpZFr9JNPV6jgtbQkQnPgsn57UNpSgXuUrDaOke7eFwzJchNgKyqNpKcbdP%2BwpWj9%2FRLRuBt3HG%2FHLZkuAf43msyo&X-Amz-Signature=e29db95c3f28669a6fe8dd3e63edb5d7bcafa2f7e3787cc82d56de103fc1a980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

