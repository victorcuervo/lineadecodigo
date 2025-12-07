---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7MYCBTR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH65O%2BrTnLl%2BjilkUFOR6imcLKGa1MNhUR4QBNie17EwIhAKoOBnv3FNyBK%2B5XG7eYmnmYFahjcIfRDLlSktsCqMPVKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw68HaYoOYz%2BzV3QnMq3AMXIdNxxIwLIgMFChXn4POJTINJZF50aUbdL%2BeYukIA%2BK7PBRE3hROflTmBxpvE%2BCh8nMXx1vGOtnCXf3A1FTPpWOpGbHNKICXAP0vjwVr9zFb4882N7hMINomEHR9TbOMYSQvgMjUZKMlaGitDvWsn2BtTC5kbcgADI2YfVxBBQc9s3M7WgYVxjuSxGUhMCaHCxdup7x58%2F4yImGHjVXjtLIPawc6i%2BYS%2BrHCGd7gnhfxI2M0HEzL8W%2F9QiidE7G5u3UJXeMAdlVGHSwt7x9fDEr6FnANqP9AgOyN%2Bco%2FPW2IYNTVctGLz3tkLuHJBFB%2BcKApyfNxu408zmsi0cN%2BKYAXbkuD2poCt9RuUjqEX9672VakFNI506%2FuTfJjB%2FyMFFV%2Fzce%2F8%2F0KGUSinO7YqYVhbO0A7KNgypeXG1Z09rwZktI3ygle8GeYapCnuCnBtMXLfOd3TktfKSnUdHBX4uHg3OYQS3AOXBr15IN5diJZ2%2BQWzNUQl8jiBXECw02edn4iypX%2FPAc7p0EMrlj%2FS28op2JjGkGeoOXdkeO%2BX9ZWIp1vQsHUZ5tGBhBSVQmvY5gaI50wm2cIri%2FfHF2e4FLFl%2F1hsgvAcRZwvCR628rV8dDO0HPb9o%2BIVwDCL%2FtLJBjqkAS8FaLVgnAyA%2BwpiHM4CBrIrBCshU8WgQRj3pvkGAFjhJf2Adgx7mWH1rbE5H04trL4kQefPUjZNRKwd%2Fz1hJwuC6eSqUgpdOCWV%2FrFBwHDwdWDyO5o1ezJL%2FVVOAB%2F8VpchyxI3Rro%2BGGFRmmdHMQhOL3SJT2QLGXFiH9Kb7AIZHK20ubRCXZ4rdqn4gYlmHWgz2e1z6j41erp2%2FefcUlSHqTPR&X-Amz-Signature=71d998da77a7548bb73401f569552c0ddc549658bbd34995620ad08f298cffd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7MYCBTR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH65O%2BrTnLl%2BjilkUFOR6imcLKGa1MNhUR4QBNie17EwIhAKoOBnv3FNyBK%2B5XG7eYmnmYFahjcIfRDLlSktsCqMPVKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw68HaYoOYz%2BzV3QnMq3AMXIdNxxIwLIgMFChXn4POJTINJZF50aUbdL%2BeYukIA%2BK7PBRE3hROflTmBxpvE%2BCh8nMXx1vGOtnCXf3A1FTPpWOpGbHNKICXAP0vjwVr9zFb4882N7hMINomEHR9TbOMYSQvgMjUZKMlaGitDvWsn2BtTC5kbcgADI2YfVxBBQc9s3M7WgYVxjuSxGUhMCaHCxdup7x58%2F4yImGHjVXjtLIPawc6i%2BYS%2BrHCGd7gnhfxI2M0HEzL8W%2F9QiidE7G5u3UJXeMAdlVGHSwt7x9fDEr6FnANqP9AgOyN%2Bco%2FPW2IYNTVctGLz3tkLuHJBFB%2BcKApyfNxu408zmsi0cN%2BKYAXbkuD2poCt9RuUjqEX9672VakFNI506%2FuTfJjB%2FyMFFV%2Fzce%2F8%2F0KGUSinO7YqYVhbO0A7KNgypeXG1Z09rwZktI3ygle8GeYapCnuCnBtMXLfOd3TktfKSnUdHBX4uHg3OYQS3AOXBr15IN5diJZ2%2BQWzNUQl8jiBXECw02edn4iypX%2FPAc7p0EMrlj%2FS28op2JjGkGeoOXdkeO%2BX9ZWIp1vQsHUZ5tGBhBSVQmvY5gaI50wm2cIri%2FfHF2e4FLFl%2F1hsgvAcRZwvCR628rV8dDO0HPb9o%2BIVwDCL%2FtLJBjqkAS8FaLVgnAyA%2BwpiHM4CBrIrBCshU8WgQRj3pvkGAFjhJf2Adgx7mWH1rbE5H04trL4kQefPUjZNRKwd%2Fz1hJwuC6eSqUgpdOCWV%2FrFBwHDwdWDyO5o1ezJL%2FVVOAB%2F8VpchyxI3Rro%2BGGFRmmdHMQhOL3SJT2QLGXFiH9Kb7AIZHK20ubRCXZ4rdqn4gYlmHWgz2e1z6j41erp2%2FefcUlSHqTPR&X-Amz-Signature=ffb7d33ceb5e04cb9ecceed95c5ec8540947ee261dfd64a5b40fa425682aee89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

