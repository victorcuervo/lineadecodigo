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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGPFRIVK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKU6EkcYRAxBCuvLeyCK8al2HmYd6dTACpLKVmom6iyAiEAl%2Fiqb0xyYrtcU4EpLH3EynO%2BRCSag7MUyPeZ24Qvj10q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDP%2Fk87MH%2BSUnl8tWQSrcA5E6OnRCl%2Bp7mZ%2BgZZ7e2trE1exxA1zIeCNE%2BeVwbWAOWPs5jU0jfjElmoLvgD%2FgnEZjJRNU1yVj7ccPymMC6Q1hAPukDQ8D2MALzycGNpfARfgWvzDd78%2BlMP%2Balvq5FQ7o0P8uk%2BJbFt2tpQrj0pvkAY9bQzlV9BZZntCC3%2B28srSlvyafXGOZMRDYlmpyTlndY%2Bm6P1Dumbgmncnp2WhMANvtnNH0KNfFHYGNelA%2BSoyYaGiITlePnnBIwx3ZYerRT6fSUkNTK4t9KFsf2%2FolAzrilq9PNFvhK7nZQFEBZNd2qRnfe0ppy67ajV9nydXxsvx7OAUZ%2Bdo8glA3X5kMxEKh6osQtc1XsyAJ7POkBisMu6GwOE2MIMW93hkxLQfy1UeO2vB7I9tMtTJ6FB40i5SWzLa1mqHxc%2FInerHdMziWK168PZ%2BGGQzyixOxBlxhq2EqiPpuYd1uubU5q3GO9YjWtXZxeHFdf2nfeUS40yOpKf4cIzEYzKjtCAYD%2FoTI%2BstuTDMveFPW%2BtUAOhiBjCr86l4oRzHcVVtP3Lhw4%2BYOWkfkImowAMOQM2S0VQf%2Fk3q%2BDjdVH%2FxUC1uFhBHnr2P%2FzKXTxXcSDRgk%2Ff7HdZ3QYm9su5RXejt6MPvbxskGOqUBJPiWq%2Bnlpv9uqtq3zID2GNyhQ4MTU7dXFeECt%2FsI6gM7649k01OeEMsSrhQTdiN1Jo%2BWnJuPaQRNJxIN6YdUAQ9hJMbipt%2FDYQhfZAAb2ZGKUU%2Fh0btjn8SJchLkiraTY48owX%2FY8SAAFHuumobB74NuAqTa1YcjBtlTE8gXS7%2FbY0WNruUIN5T%2FliGXKL96wLT2i919RKoNrY2w1HQGjhuwZvIF&X-Amz-Signature=c82b132ed456c33c7348236e838dc3819fe509f27d7cb2a7d423ead672a2f26b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

