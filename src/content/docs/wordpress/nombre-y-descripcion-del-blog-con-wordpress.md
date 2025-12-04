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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEGY7HHC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICux0KX5e3T2X4BZXjTMgFgV75vaK4YXCiJj0n9MyJxiAiEAoKlQs9ITMLSPOKew99Psdvd3%2BcjLYvxcJqNFa3Mh%2Bhwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEq5uPHqRdcl3wRy1CrcAyrlkdlrdhmgG9IzmcUCjqtPjp2%2By2pXC88gcz8%2Brak6OjztDXmoYvzscoploHRhK2IXtS19AGsEdt7b%2FhaTKE1seNAgBSuX5%2BxqpGS4rLkWlzPDvVbNs0Gdnq7nQr%2FUoK0lkTi99q6bZors%2ByPU%2B2Z7l3kqs714u8mjKtNWMKiKXMj5qA1Df1bTduJtcEwIXBP68bOB0Uq5MHXscMFLaezqjLHS1CL%2F6UaI%2FFV%2BuDZ91yurmigVXR%2FVgooG5OB0ugIDnLBsvtg%2F%2FxZuHtb9GFiGcmHrsOHGfr6mKCdlHOUwv8yCFc62VJdb6L8jyD%2FuNxFvI%2FpRoeNxALg2ndH%2F%2FF1EgqV4Pm5B1eY0GV12CmtXquqP%2F4uNS4aY9q9pXhmoC%2FtjqhHtt%2FQ53p2MYuLM5GHyjBNTgdVCQkBspADx1Yq%2F9E7LKuEyqf%2B5K%2F%2FKfwjZnHEM4H7FDGmVfRftBEzDmVVq%2FDFXGGlzyysJ%2FgqqF2uINsbUoEuWWSkZr5x25ubCHDXCiyduARsICpYYJ3wDwikMnFxQq3nzcv%2FHgwen0kOSEBCbn%2BgmPYAss71ZVH12spA68oacQd7tkNHs3ol%2Fuk%2Bp1rCCGpYmEkQewhFPvT7FA7lwy0J0m2wmu9psMJyQxMkGOqUBbbk4SOGgP6s%2BMtETZjFuAjRGpH5MtVvntKw%2B8DlNpF0D76AYkSZZAznTbmDian66B4gGK20Fv91rhX%2BvXcivw6YUhDk9lvUEIVK6oaJKi0tWjK5ivk%2Be86ZGrZe4ZdzTt2j%2BmDQG%2BTiEWeToW%2Bnq6ZFegM10NGUl1FchA1%2BZTSSYf8UAnYAlgQUjcZlyp6kadRXFp0Jvh7VPPBebjy1dpzUrJJD6&X-Amz-Signature=05ab4d88f2c570eba08bc2b46902114f20d52fc4851ff825d149d3f13ad91073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

