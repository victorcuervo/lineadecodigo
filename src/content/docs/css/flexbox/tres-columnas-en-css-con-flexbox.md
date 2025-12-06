---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6UYN7IM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyqEzCdIhjXophwdh9bQG5%2F0zmvK1A5oMgnrsR%2Fw1pdgIhAKTmErK5J1qtDQFEaQBoxK1VXbDOiW4P3IF9D2UMrnu5Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyMNFkStLStVKvZ%2F%2F4q3APNcumWUPCiaFkvvNM5VOGal9HTnDUWnMqZo%2BA5MgQobAq8hhNWpaobJHTaxJPvoIXIphsxSnqdjWo43PTytwiTv6IgKSKqZwkXjdEYYleP74bhVdtZXWmx3hOq%2Bv442Flax%2Bya7lDGjKI4kZbmgfS6Fsns0g%2BYBiUc6%2F8hKPZvtL4KIetMrdUPeUNX%2FBkJOYgUQLS4XYrOehRI5zja6BjJvOaUEAVRirjBFRbdEDEwn356N2ycqwasgSmavbCjmHLPCqE9OHna%2FkI8eX37sYHZ4gjnNUj8sG2X1yigNDWqzsiQuG5ktme%2BmEOgefJKPqARzziyRvaATk6ZQYR4bTVjpbaLYkD9wWzyj7UzIJ67tY4amvl4g8EqOr1bKAodhh58lmqMGOsZ2paTCi7eCSuAIoy3ycVZyLm8xYAao1QIKTt3DIAgQ%2FOV18D8Mbcyi0RznNp8Nd4OoDYDaQjgknBZc0GeBKFmT%2BZMRqyrKV3pfn7oAy%2BIzMdTpYb%2BzD2oNQJ7nVTCaLmQjXVYx0wH7uSpOxcHhPZehs0kAuOyp6J%2F3RMIsk2%2FRtDAEseqVuqZ4cUvMiOAGwgSbQKVg0iNxOEnj%2FrXmcTzETNtSeEJB8bWsvoC7l%2FdhxITbSZZJDDT68%2FJBjqkAcTh5VebbtuTLcSDmALgHjwWcE%2FdxFvGhSZNOzgdASqThp1ZcKhCcEJgILUvSFtdLSavMe3Zczv9S0RdPVS46QShOxX%2BwmYnBXGs%2F%2BWukRTe37IITUqb73gNPI5l%2Bh8Lql109DohsU3AqMa5Ks6VoHb4vFmCqx9Exk1lzTL5W4F%2FxFf6u8SMrWREafvFoCa1F0xDzmmUVmVhNItt6z5StkQmE3%2Bk&X-Amz-Signature=0629b05de89df6f700a8c6c8c22278bda4475a71c2c795ba6bc71b95a69b5105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6UYN7IM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyqEzCdIhjXophwdh9bQG5%2F0zmvK1A5oMgnrsR%2Fw1pdgIhAKTmErK5J1qtDQFEaQBoxK1VXbDOiW4P3IF9D2UMrnu5Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyMNFkStLStVKvZ%2F%2F4q3APNcumWUPCiaFkvvNM5VOGal9HTnDUWnMqZo%2BA5MgQobAq8hhNWpaobJHTaxJPvoIXIphsxSnqdjWo43PTytwiTv6IgKSKqZwkXjdEYYleP74bhVdtZXWmx3hOq%2Bv442Flax%2Bya7lDGjKI4kZbmgfS6Fsns0g%2BYBiUc6%2F8hKPZvtL4KIetMrdUPeUNX%2FBkJOYgUQLS4XYrOehRI5zja6BjJvOaUEAVRirjBFRbdEDEwn356N2ycqwasgSmavbCjmHLPCqE9OHna%2FkI8eX37sYHZ4gjnNUj8sG2X1yigNDWqzsiQuG5ktme%2BmEOgefJKPqARzziyRvaATk6ZQYR4bTVjpbaLYkD9wWzyj7UzIJ67tY4amvl4g8EqOr1bKAodhh58lmqMGOsZ2paTCi7eCSuAIoy3ycVZyLm8xYAao1QIKTt3DIAgQ%2FOV18D8Mbcyi0RznNp8Nd4OoDYDaQjgknBZc0GeBKFmT%2BZMRqyrKV3pfn7oAy%2BIzMdTpYb%2BzD2oNQJ7nVTCaLmQjXVYx0wH7uSpOxcHhPZehs0kAuOyp6J%2F3RMIsk2%2FRtDAEseqVuqZ4cUvMiOAGwgSbQKVg0iNxOEnj%2FrXmcTzETNtSeEJB8bWsvoC7l%2FdhxITbSZZJDDT68%2FJBjqkAcTh5VebbtuTLcSDmALgHjwWcE%2FdxFvGhSZNOzgdASqThp1ZcKhCcEJgILUvSFtdLSavMe3Zczv9S0RdPVS46QShOxX%2BwmYnBXGs%2F%2BWukRTe37IITUqb73gNPI5l%2Bh8Lql109DohsU3AqMa5Ks6VoHb4vFmCqx9Exk1lzTL5W4F%2FxFf6u8SMrWREafvFoCa1F0xDzmmUVmVhNItt6z5StkQmE3%2Bk&X-Amz-Signature=86d91cf1aef0340a6a4c1ab400fb5db7193631e80100abe8adeffe5be271f13c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

