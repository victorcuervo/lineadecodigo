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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTB72ZE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2EzJEnUU15dO6ejO1uovv68koZJ9VtGKkLpFBrMa2PQIhAPqdb3nuxKhErrUX4e6WHH4nBi6PQGQTWZBUFSpvRoHIKv8DCG0QABoMNjM3NDIzMTgzODA1IgzXgkuvbcwfn9mg9C8q3AMjBp8eOTAHZQPJu5nWkTYrkyEuym0nV8JyUzl5PNglLu%2FPkGoFo0TMgc%2B1HQT78lDyfxSbRD%2BvFAlRZd%2FpTY7bdbaMnKKutgOffz1PCGbzz9H259uVDvrMRg%2BExWclJxK5pT5gbpk4lTlC%2FOb%2FzIWDP7u5YQ2YGmQtkUl9Tiffv8O4AdPqG0%2FiEutfYwINYAndv6QUnoCHWnp4S%2Bl%2Fu6p41NBzQA8bro5gYeRZrE2aVVw3IsBr%2Fz%2Bu3nTtJw13FhMGdR56u9hGRuERQodGEsHCLYTIVQKYR9iU5UKecRqXas3fPTwHnCunsIpp88SOrPrvNDJb2OXck6CRB2ohar3zF9NsyvmQ3%2FLYZ03mZfNV6gM%2B%2BCq%2Bhx0%2BEMCK3e1Ko1FHbzhbqpm6ILA7C4hM5pE3WYCow7VdloX2Hohx%2Fioqnkx0KMmnHboY6%2Fg5xP%2FCAol54QC2fVJ%2BVUbyxUMp2QlPXaXvnZyHrOBgVEqgqYAdgdoSgLNBzaOwBDuOP9YdDT2yUbBR646D3cmyyIiVMLWK1%2BYfLAAIckP%2BpDCRkQp%2Bt%2Bpm5yzVldSlHe7vzfbcKTSlGt2VyhGFQWSQU%2FpuCvv1vYXeJRRgbK9cKiKQRP56E%2F92YFso%2FU1fIhecVzDtw87JBjqkAYtBH1ycQVg23eHAiLKqUNSurpn9Zan32hBcdy7AOrtpZl%2BQRdTCLdNZT1PMOOUtn4FIr%2Bqa1AoKVsH7W%2F7LSm%2BYi7mQ2OzOwSbYAeMOpKpECCepo%2B3NMvoy6A%2FoiEhqxZBvteZ75SRbzES6NP3DjAsb59hP765XJqQ6YpB7Fg4YaL5JwUlnzatVGmF9rSuDCvvFIYJnlylpTRVz3FERY%2F0XLxMW&X-Amz-Signature=596c1ca0207dd45c75ca6abece0152bc279c6cedffcb2e60245d3600aeb46461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

