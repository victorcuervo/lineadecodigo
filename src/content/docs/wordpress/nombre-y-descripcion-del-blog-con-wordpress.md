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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEH6OBKB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl%2FwG9AexuV03b7nqEL09vLgWh00ihXneMFzkJBIGhrAIgG0aMMe1HnxsyPNBYLtaf6iNhVWs8n4YiHf9ivtOwK84q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDOqP21iGbMoMDdHm1SrcAzJz8AqBlrweCV2ykT6JuCNFvj7fNk%2FIQC5U6M%2Fu3iXX%2Brd5hatOS15AAJXqs7hq5m9y9N%2FcbjsdgOHtfYa%2B8VopGHQ38h8J%2F1NAUepLV4Wi2%2FXU9ArpfmEPWtHMmwBkYwrr0%2BsizguDSaIfhT9RBM0EG%2FjXMyTo1Llx038FSQqxPnTaMA83RR3XOUUB%2FOcxwQT%2BK9i52%2F8QqKrbD5qGD%2Feswevn2Q14FROoy%2BMBzPIRYD91x8pfPtcSuIcjjZhehQYSw1vjyaXUxCyVb8TlV3ZJI8m7GLEhHPzQ8sl4UB4HwrujJ%2BUHd5iA8j3Kh76ulwxIqU0AMhcc%2B%2BMNPdx50p%2B4yESGqOspYbtJr98n%2FKAXiC56Xx6%2FJXbB0TfpM3LrNbJKJvLvLKxAYAqa3zDapGyB%2FBONRNLYjejKd3Gp%2FTo27lNv8BDbPT2T3Z8Itc49LqPCncfQjWu%2FMs26vN4cNWiLEVTzeEU9GM0Kgs82PdqrHNbtRm%2BLafRqfyNjV6L5Mss%2F2CWRFss9r9UXh5QQd2wF521QvNYdZ8BxRVk8OEpu2QoLZx7DSCRszYPYGPXk2mcMQX87z9H7AghosRz44cHLbx0BtMv%2B8HRYuvZJRf1u4eCte17liTl5njt6MN7bxskGOqUB6cowzL7b4hNbYaFu49Fpb%2FAqeZrWHkd9XwwhZ6SYI7mjOVzj1gpIiVGLhaU7cfSIRwAH23l4JcnkaWgYQ63gzECTQZjlKWOzQgyD52A9WN985ml6LWG5mrRPJX9OfO9o2Vdx0kyBgm1dGTb55NlNL7oPD6lHbu5scfnLdQaTkoGaHSKLH33jJMlOJaqDCSgi1hjQODzwtwxSH9oFigsz3iPh7wKp&X-Amz-Signature=c2e1c6dfbbf94f5d70ab0289f19a4a2f1dd75ac6db783df149e0c5ceec821a5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

