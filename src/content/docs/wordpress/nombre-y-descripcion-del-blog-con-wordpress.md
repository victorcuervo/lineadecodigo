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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZHYZVC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDg7gdZsOqLmJkcJGZnFiaqIC7CAGi0SCCF30nunlw3kQIhAKCBl8m6Kk1ZiIFUKbOi4VsvqXH4MKf%2BXuSOREQyzVClKv8DCDkQABoMNjM3NDIzMTgzODA1IgzaBrvceFAJTwuyDAwq3AOx%2F4JS4HheCoDD64aG7okxIvUdwfpDpZy7Jz1hO6ZBlo58GtPCkRFpsgJb%2BMBWBERoVVHy%2B2noVoausj5bL8iz%2BaSNnLpjIR8ag737sDTYdnapU8iFHGcwvKKhO09hpuiMoTHToWcUV1lFgjXZxsNgzeNkzZ6oS1eW11nF1wqzTWRhm9nv0dDHOKO8iuqSsX08kaOYq55LGADllrSELlEKF8wTB7WFDowernETY4VQZmwyy93wWAN8OS7NErVD%2Bf6nkdVE3%2Fx96K0xONgQ5zxmRQmZYm8gA%2B8hzJbDvoaU9dvlNRrR5u0yomX7v2n7mbby4UvkMP%2FYozVdIN4a5AH8HSQnbhfY1Z809VuUXAgshakaeFXpIgYuuOvcw9p%2FnhgqvYz1eHq3%2Ff6YbxeI5Vax0CtKrKI0%2BdH7L8GkduCPF7Xn9DR7h%2BO7OiTLl%2F6WeFIKWCmUk8BBoXhot1G4YnW0LyA6hFmyNjk5Tn%2FRB9wAVFnAvZYTs4sGODOiXPTMlmBZADSJLSbCCnvft%2Fupt70s%2BCSSnyKwlkUYK092o%2F%2FSuB7XCMZ%2FXiWH8bbDwUNoJNZRHw1Rqr6k5Lw2SG0%2BR6pSVb6znQdEoKwA4FOU%2BnrRqwRb2ZKj%2FlLA7ApnhTCnlcPJBjqkAX5PlL6JZo%2Bq1%2FXQyG8%2Fh9drWXejsAE%2F0Q%2Fr7fXOxvroV7T0XGfNv2GFx0Q1qOy7F9M3IY41IMuQ1yh3uQn8sLSOy8B%2BcwB%2F%2B4pRSKQDG2o157iYUOuNIKs863C2UL%2FVUXMvbmGbfoRStFqXlb2F92juiObQDBD2VJPPZXCQqUy8ZV7k3UUmHSjX1SHCTWTUAInZNZoV%2BVKupot%2FQKjV50ptnVJs&X-Amz-Signature=4ff04612287d52dc93d69ea1d0c7595a311168ef015164de29df5402046169e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

