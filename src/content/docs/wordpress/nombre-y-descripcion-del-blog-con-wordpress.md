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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/be42054b-eba0-4c55-aa89-74884b02f0bd/caracteristicas-wordpress.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOUALBPC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrAaikhJ36tjQ6%2FAmq%2BpWU7VJF7p74gKPUCXO7fz8djAiEAq6d6vFY4QVAP6yZSo2rqpshgKAW3UI0DUQ2V3H231hMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDF0VyTcRaaP%2B7xI6SyrcA3hEI%2FWDkJ4HzqoKXI6Aen%2Fk9M%2FD9LdiVSiAcZM8dKpteiJ5VmdHYpBXQwNEh5YKcZKT3NWWHakmefQB%2B0lHNg%2B1M5RKgs%2F%2FNDAxbCU1Fg6s20ooPjVcwaNa1SzKZu4K3FP%2BZVdqUPFpUo0NhjprWa3OAcePmO8MinsX0tkzUUl4rxr9C3%2BzQ%2FR2mSSxxcHSVoIWamDGiRF3VQtgZItT%2B1xR5Gkx0vj55gIxIhz%2F7PU%2Fb1VFzrl12Vx7DbaMihTXfoVdlxPz%2FSvCj%2F7oVKGwzguIEfVqAuyEggrHsFhSNjgcE9qdwM4WV9Rj%2FNKMhG%2F4m5m7nP4Bp2hnJcxO%2Fz8vsPVH65F6kmIQ8rFlXeY1Yydtzt%2FdfJOh%2F9p%2FgVPpmOCJTcIiUPk%2BwDtG1WySR59n%2FX6Bhckt33vMH3g7qTFMO60NLCmwtj4U4v0Hqaz%2BW44P0aqO2JMPJoO0cqam9npgHc%2B%2FmlGjAniP5zKFoLfkbPKm4Ne090zmhMpukAVFx%2B9mNFcW6dwnJt6vVqi3SPYPn2GpC%2BUeY4%2BP4opxhbBUGhf1TmGVewJFkCN379P9v3FJp2vIV04aPI5jJIsWbDhp0ZyX6O%2BDCh82I0n2RpXU4Xev7j7g8rvVxlzqL2FqMPivyckGOqUByHXrrmH6qMHdsCHSq1%2BK0hTex01zVAFRDjOn%2B03KWfyKfHqROacV2xHnRMT3auwJYw%2BpKmAJpve3%2BrSsnoygDQ71YVwgDLzpoj42FJpatSbwZPBa%2FLp%2B2iGmaxKeqbFOiMyynSpv7HV%2B0oWTP4HrYL%2F%2B6wwoU7lblkb5bV5cRcifKjRjoHIcerJYatFDVW%2BUUC1dpPVphTxPrk46DXpIc9N3GI8n&X-Amz-Signature=4ea309521f1dd749420225a00c5201b1e66d2f342a861ca6d5146dea8ea23749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

