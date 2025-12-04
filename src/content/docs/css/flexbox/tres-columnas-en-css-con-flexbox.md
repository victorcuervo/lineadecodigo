---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M6ZEY4Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBhhD5OYlqmWpNNiKT3vJ98GH69zozkPktaJXVpXh9kAiBseZdMgV58lt0tU3HOSZB%2Fx2xc%2BadW3lPJBnSYgujZfir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM32KO1E%2FkFQFh6nNDKtwD8eMf4m%2BPVI0T7xQruO51wsnna45pVd%2BE6zs%2Boee1hRqU9MTwJe4EobSP7ved%2BraPisfGWDjEvbaV%2FcdLiGnbIB0aV%2FB0xYTZCHX4B7qg5Xs7jx31r%2B36I6whUQcgcGLZcPf4o3THH6zjl%2FmYx52x957XttFBnUUO0XDJ22wtUQSiG8djPY65Mi%2FJedf1E%2BSjqLXa1RdU%2BZ%2FocQG5MX%2BozxBQPdJ86GQ0mZSwBTpkme4oG2qa3CtzSNXZ0xA%2BUujyPxudZC92pm6ePB34OEjn5JU8VLZNt8EjdmTykK1Rwe7%2F0WKoZai74zuzqacQeP6NwG8uQw5qfO7hrJB1hhLMTzwfH9ZupBLIO9QEVMtwKEB83CmoYBze50Mf1BCG9B5zk0ISFP5fE0AtT7OZ58hkCPrmmi9k8t%2Bct%2Bf4gd2saW9745zAC3Ymmv%2B%2BsibgF0tsO9a8Oox5vCiP1dAsTcM0We%2B5PeeLb4Mrnjnin4jAeTqsaG80QJMQZulh1g1iM43YmKBUedaO3XJWBteyjNKwD2VwOV4Fz0v2pBDSUAWpULMTOzY4wfT5qW8Ro%2B1gaTuuhNcyMqbCKPHRB4IDMUgWJFdwApY%2FhQV22NnsyIqcu8AzQiikIWJTv0E6hfow%2F%2FnGyQY6pgEkaKR6bRrPKpPF1Xqmy93Lz8TxkBvbbD8PWJGgE16Ol5sxF7XAQkeFGb2wXIqSseacNxB3S6FcqdJxXQbiaaaIyqSmvIwl4BwVnE3yWEqNzZo6dqLxqOqPPy2aQgQSRdAPe8O%2FnNKIQeLWFPgYHitNrOIv%2FHD%2BDOhZ%2BZL%2BOe6iWN0qQhKY38%2BfP3YL9diGl3ckx5sxSVcTK4hQs7RWVLFhMPdMG9j2&X-Amz-Signature=af4a155a4427723dc7dba2842674734b0d2e8abce37e2c6a26de4b01d9831337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M6ZEY4Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBhhD5OYlqmWpNNiKT3vJ98GH69zozkPktaJXVpXh9kAiBseZdMgV58lt0tU3HOSZB%2Fx2xc%2BadW3lPJBnSYgujZfir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM32KO1E%2FkFQFh6nNDKtwD8eMf4m%2BPVI0T7xQruO51wsnna45pVd%2BE6zs%2Boee1hRqU9MTwJe4EobSP7ved%2BraPisfGWDjEvbaV%2FcdLiGnbIB0aV%2FB0xYTZCHX4B7qg5Xs7jx31r%2B36I6whUQcgcGLZcPf4o3THH6zjl%2FmYx52x957XttFBnUUO0XDJ22wtUQSiG8djPY65Mi%2FJedf1E%2BSjqLXa1RdU%2BZ%2FocQG5MX%2BozxBQPdJ86GQ0mZSwBTpkme4oG2qa3CtzSNXZ0xA%2BUujyPxudZC92pm6ePB34OEjn5JU8VLZNt8EjdmTykK1Rwe7%2F0WKoZai74zuzqacQeP6NwG8uQw5qfO7hrJB1hhLMTzwfH9ZupBLIO9QEVMtwKEB83CmoYBze50Mf1BCG9B5zk0ISFP5fE0AtT7OZ58hkCPrmmi9k8t%2Bct%2Bf4gd2saW9745zAC3Ymmv%2B%2BsibgF0tsO9a8Oox5vCiP1dAsTcM0We%2B5PeeLb4Mrnjnin4jAeTqsaG80QJMQZulh1g1iM43YmKBUedaO3XJWBteyjNKwD2VwOV4Fz0v2pBDSUAWpULMTOzY4wfT5qW8Ro%2B1gaTuuhNcyMqbCKPHRB4IDMUgWJFdwApY%2FhQV22NnsyIqcu8AzQiikIWJTv0E6hfow%2F%2FnGyQY6pgEkaKR6bRrPKpPF1Xqmy93Lz8TxkBvbbD8PWJGgE16Ol5sxF7XAQkeFGb2wXIqSseacNxB3S6FcqdJxXQbiaaaIyqSmvIwl4BwVnE3yWEqNzZo6dqLxqOqPPy2aQgQSRdAPe8O%2FnNKIQeLWFPgYHitNrOIv%2FHD%2BDOhZ%2BZL%2BOe6iWN0qQhKY38%2BfP3YL9diGl3ckx5sxSVcTK4hQs7RWVLFhMPdMG9j2&X-Amz-Signature=e5468472bb2fd2a179a185c33493ff476758ed181aa76d1f75ee69845ac5c0db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

