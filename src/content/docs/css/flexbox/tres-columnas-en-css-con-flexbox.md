---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM237YXK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCf5Z3Xug3CXqbht6ICsN%2F0qrzAEp3SuQ%2BugtuIyPSwjQIhAIp0x1Xx9BowW4wvcuIWT96kdYRg%2Bh9HJKaammtITpE2Kv8DCDsQABoMNjM3NDIzMTgzODA1IgyX3%2BSixZtaGY2O%2Fvsq3APrLeamMnBRvKGy59PrAQHffwnyMUZwCuHEBcx7EWeCggUqjJp2WGOS0kJIh%2FxKdk8y9%2BSVUVkU6REF6g%2B2fZw4K89uJ%2FsKM5HV9jdvxBe1ATCswRg0Cftheo%2FU2PIkU5dZlq4RpKtOR4wq11grHtSRWOfkLRxf5NxdQ%2Bn8vyHgaX7MerPxVhB%2FXavHmUeh8QLFfXRDMP7NRr1fg6JpYgai06E6VSvV6pmrrsF53HWz7KODXeRndUPylwiMFPqdi7NU1Kjy7%2BthYLJ7KmUVawFingmVJFiSRj9ReAcqpb2LxdrX%2FPZ45%2BK25cgegboQ1ndrUwYXB%2BJZZw14yY5kxefYlYPD8ljaT9x2yV9%2FNT80bqrwOyV0Bsv2%2BXBzl%2BXoTdqXQjpab0Sj%2FzkjxGTX3ZmlBMVwuh%2FcOW2R9fuyVdninOlvR1RbAmIgEtKYr1buTc5hZJfUM76Nr%2BvM1Jo%2BQqpC8XPwTW0XxOVigSwoPvT%2Bosv%2BaNNz8I8vTpx%2BVG3tEBGh3Yu%2BROI9sn8VFqrdA6rC%2BcGwR%2B2M%2BWro6P3tYCiwotuGXEUqtWBNlZgml%2BXNh4lrhEOSLrOBNx8cGK7uvW4OjHSeA8Mwn6payXBlj%2BFxt6YoUeJ6cFD%2F4KtnSTCO1cPJBjqkAe%2FJlmonmA07Qm2IhcqOmO8uyv8o0zPJgrc1JSfvWMBveEjHAUBt9hezypFCFPEG8RbuqKB8zhNqm8%2FR6FtMJ%2FJfiTkxXl7aHIM7d0JBGmuDZ%2FUUhfid%2BezNXV14xZwxkvWVUVvG2MRjPQLayz%2Bdisc7ZiLmumGKjGnyIlD2sDK2jtnXxL7x72jc8zMpcPCQtqnk%2FU00OTD6jVlVL54F4yvp8V8a&X-Amz-Signature=35e95ff1c7b9154e0d35ef2ede55a689750c3cb6a05302bf721e74a2dfcf92bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM237YXK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCf5Z3Xug3CXqbht6ICsN%2F0qrzAEp3SuQ%2BugtuIyPSwjQIhAIp0x1Xx9BowW4wvcuIWT96kdYRg%2Bh9HJKaammtITpE2Kv8DCDsQABoMNjM3NDIzMTgzODA1IgyX3%2BSixZtaGY2O%2Fvsq3APrLeamMnBRvKGy59PrAQHffwnyMUZwCuHEBcx7EWeCggUqjJp2WGOS0kJIh%2FxKdk8y9%2BSVUVkU6REF6g%2B2fZw4K89uJ%2FsKM5HV9jdvxBe1ATCswRg0Cftheo%2FU2PIkU5dZlq4RpKtOR4wq11grHtSRWOfkLRxf5NxdQ%2Bn8vyHgaX7MerPxVhB%2FXavHmUeh8QLFfXRDMP7NRr1fg6JpYgai06E6VSvV6pmrrsF53HWz7KODXeRndUPylwiMFPqdi7NU1Kjy7%2BthYLJ7KmUVawFingmVJFiSRj9ReAcqpb2LxdrX%2FPZ45%2BK25cgegboQ1ndrUwYXB%2BJZZw14yY5kxefYlYPD8ljaT9x2yV9%2FNT80bqrwOyV0Bsv2%2BXBzl%2BXoTdqXQjpab0Sj%2FzkjxGTX3ZmlBMVwuh%2FcOW2R9fuyVdninOlvR1RbAmIgEtKYr1buTc5hZJfUM76Nr%2BvM1Jo%2BQqpC8XPwTW0XxOVigSwoPvT%2Bosv%2BaNNz8I8vTpx%2BVG3tEBGh3Yu%2BROI9sn8VFqrdA6rC%2BcGwR%2B2M%2BWro6P3tYCiwotuGXEUqtWBNlZgml%2BXNh4lrhEOSLrOBNx8cGK7uvW4OjHSeA8Mwn6payXBlj%2BFxt6YoUeJ6cFD%2F4KtnSTCO1cPJBjqkAe%2FJlmonmA07Qm2IhcqOmO8uyv8o0zPJgrc1JSfvWMBveEjHAUBt9hezypFCFPEG8RbuqKB8zhNqm8%2FR6FtMJ%2FJfiTkxXl7aHIM7d0JBGmuDZ%2FUUhfid%2BezNXV14xZwxkvWVUVvG2MRjPQLayz%2Bdisc7ZiLmumGKjGnyIlD2sDK2jtnXxL7x72jc8zMpcPCQtqnk%2FU00OTD6jVlVL54F4yvp8V8a&X-Amz-Signature=a070d51c698133fded66deb81460064c063236f241ae2685bb814d6784503a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

