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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4WSTUDU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7l62gdXESv9IHH22nsF%2B7kP5LsZDgwDruYH257MAxuQIhAN94GBBKqwCUt67gtrQwSPqa2%2FdqTG%2BE8%2FcJxEZQSHsdKv8DCEoQABoMNjM3NDIzMTgzODA1Igwxq6A8b3UN34CM344q3AP7bYDRhcLZhoPSt4DMVCppkxIHZ8s9AhZdKEqnRE49MAu3t1W%2FnjJ1OLiZXsf3YSg%2BPmhiZGxxhWy%2Fd7STq%2BjMS%2FwffXfNi7S%2F8xncm3PI5MZhw5Dqc7hjaaxBk1ZbKgHWBbBgpBNBRedlsSbPJC1iZnFpfNUWcneyKrEs9UJN7bnmGX7JwpTe84yuxpT0fLvD%2Bb6onCyVHYHKROtzW%2BPIWgZNYm3b72aC5Hwv9e2PVdIrsfk9MS3bKM3unuHL%2FIhhjy24VGYapjRmQv1BOm9qx5cf98XJPt2rrS6aocxU2vMlW2BOxBt%2FbyOtmvUzJD046T7aR9zzJaEPUtRDocG4BUiLKJGLffUl9jK1sf2KWs8y4i%2F2gRMVr0iQckivHFqUWzdIpwPB6qIjGZA3Q7lc6ZqSyJzVykZJTJZW1dFgqa%2Beb5xXIFqvXM9Shiw4nzmHvhriWwb%2BXC89NyOpffvYZzkbwzmJ6KMx0mTvbWY5bNo6j38dlOhW4m9Tfomr8H2%2BkjTR8WgijzH9TVPAdFD4HkUYndMMh%2FeoC5JSrZcuHPY7YBvnZtfOdySwGYpJT8oQj6EKTvRBC%2F8BKWSmMglDqIFyibuwo7teKOW7stVx9Cd29JBv%2F1LcBmUOmjDN%2BsbJBjqkATyIhksIVul5q1dsFCSSZC65kfJ7dc%2B0x%2BIdRhRSmIFjeXIfROathQ%2FGrAmYmtzlTxRXsqqibwHsmmpG5FlOVn8zie%2BLTZ5vvf1G4Gb4VpH%2Fl3nCNlWsfgqSgeou4hc50nmw7gR4G%2Fp%2BEhNmr0cw3m3WTzpy01jXLVV4H%2FUrX9dcMxxQK22M%2FeUffBYrrlkdLvacKZgfMWj2oeI7yFZQTKS%2Br4wY&X-Amz-Signature=157efeb91fd9f3af31900aa3201789ae676e1f05f4ca6d71a2189507c03f7535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

