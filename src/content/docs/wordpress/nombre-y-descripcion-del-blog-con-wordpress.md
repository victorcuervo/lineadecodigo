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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SV4YF4L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbXM7%2FfY%2F9lTEMg2VVAlefqSanpTddfRr6C4QBTV%2FtHAiEA0W8H%2BjAcp%2FC2OUoJPMKcOpc7AtNLKFPPWyNo52XSULcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCLs%2FSsDAlf3FHMNmircA1Hm3exwWv4Q9fy%2BnLMZdKXQEJEkniW4Y6gsiRfAVCTeqXQ2ftnWBxSYuAEoYbkA3ojWV1CZe7lj8VlM9otgwCcrfatb8GhpCbyR5b4wlJsoTWo%2BKnDCSq%2B3u55id8PNHEFdGOQfxeoxl6ppHuvaUCjMAtYD%2Bzb%2B7DvuRR02LC8CJk4vnphCQmPp3Tg9WSX75MmW7AkJYdCocR4cglYA%2BgCA5S08TQcXkFaxbpo%2Bq9rwQWX%2B2w%2Fao4m8DiWOi%2F3Ctq8zC5FaGIMpm%2FjD0CA4yf26O2hrr0VlU7I6YjDoBr3Apu%2FbbrspsffRfFquahK%2BBFbsfeHC7b5Dt98JyIOyN4cZq5nFoQ5EYL4YC0MV551JG%2FRVvC81gyk5LuTM2%2F%2FowrHXcomVEomgirbvCgCOWV3oTSBwO2ENbcmJD%2Bbz4iIgAmVl3QobzemlEUd%2F6z0WiwqHJ%2Bcrtd%2FpUt8%2Bad6tvgZOlYtmvDMgv591I6GRSidRJJLsEPthY0sWOw7ickuNNkvFedKVklHGf%2F4yB24r0O24d%2BVcxYmAbggkH9zLItsfbVUblAyGqL%2BowTLdMA4nCLG7Ok2ONILSyZFca5QSSW%2FEDuXRm%2F1kYATIsyUxsoPvdkYSGR9Mp%2BRspmdMMPmJzckGOqUB5BBz35cgaS00kqTyw35Tes5DzKIEKRsxKSDiDkfNPssBBuwl3pHjeA0uEWvf4zrUBfj3V4Q2bRBi%2BY2uG8mLWFcbQueiQ6pJs42aTWiMR1uPqrfp%2FzBZgM8p9R2K1FsFKj9WBMFpcSE07BfWmaVC1R1pVYEM%2FR5wBYjyAeB6kNFMOGiVhoy7A6r9uxBCeImTiS9ZYapmVeVuvDDZwJI120GZ1QVQ&X-Amz-Signature=b7043d6b8ac4d9f9b3b817f63b25a7519e46a8c72d58a16ae92980f4a82d5be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

