---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625P4KNTK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICb%2FimJ2hfQwcEAz1Q2OGz6B9Wz7KupSvVlEK8p2C2BsAiAzgYlw5awmSvNDUx76zHfA6HpuZgncI4T0s7e36AuN5Cr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMZvNEOgryIF7Kg9t7KtwDXRGF8Eh2PwER77b3sTz%2Fc%2BLdvOHPotKwcZGJUzLFAoP3dTvFb4gLWDIiX7CyPKLFG1v%2BMBBfsEWkZWGXHk3A8ncILhH8c3e2CL75wIdY20HQqeVkQADHucgG31BfcnAIsuENef4V7vhAXmJCEb1mKwb%2BqLQ4nffAaZF94T7ziLIUAR273he0txlN0sW6a1GKZZRMqZLtx4eDzl7ACzXY2mEWXqdeEE8fDiTsZIrn1olyB8ntyLgzdMiH6MSg%2FggeEDstOCWBfbI4bW9g%2BzmWL5%2Fuu0o70U%2FNLmBjkmsC%2Fof4Ovv70zwLYo%2Ffv5xFtNjMGw%2BBwV4%2FzBSlkt4xKx%2BYUwhmRYer%2FFi2kapzE6SWNQIGjTAsAbkfZoq%2B6OP%2BJWNIZ2W%2Bigdl57%2FkxTbmGWIctOUNvP0zrDNv%2BL7G097BWwY2Pme6S4e5Db30Ms17TvrXi5PdzbMQqDLDZ3iQRIF0XuUvxXgiR4ctEOpexJhM16ytuLXIuzY73dSgxEFtWYiHqy9UredmR6mqSxPciRnRrx3hlOdRmEjiYfUF47vRNMt6qYjEyjpezVnIWch5myQMtTQwYt2SJFpjyhh2VJwaaNKJkZQK8Pprd9SnlZMsM5mwyVtGKR%2BhuDbjrlkw6sbKyQY6pgEIl17fjwwr2uPQdwY33Ms0Idpd2MqgyiTjClI8svIORy5jz31kgnTpbqFwtCz2BtsZnK9tq9DVkhqghtH93bzahEEboNeOblleovVkWMhTO94cLc0HetnDnVM0bvwQgd2Pc69gc43QVmqOzWv7%2FpAUxZ80n6DstVXiYR4GCBRx%2BV5FPLgHDgHzJo%2BK6BPsA9WGskfeSje%2BDyazSFp8TfkzPE2w548c&X-Amz-Signature=d9b4afe3850280012e796eab4e00c7fa0c2a870a4a9ba6ed26257464fb085aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625P4KNTK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICb%2FimJ2hfQwcEAz1Q2OGz6B9Wz7KupSvVlEK8p2C2BsAiAzgYlw5awmSvNDUx76zHfA6HpuZgncI4T0s7e36AuN5Cr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMZvNEOgryIF7Kg9t7KtwDXRGF8Eh2PwER77b3sTz%2Fc%2BLdvOHPotKwcZGJUzLFAoP3dTvFb4gLWDIiX7CyPKLFG1v%2BMBBfsEWkZWGXHk3A8ncILhH8c3e2CL75wIdY20HQqeVkQADHucgG31BfcnAIsuENef4V7vhAXmJCEb1mKwb%2BqLQ4nffAaZF94T7ziLIUAR273he0txlN0sW6a1GKZZRMqZLtx4eDzl7ACzXY2mEWXqdeEE8fDiTsZIrn1olyB8ntyLgzdMiH6MSg%2FggeEDstOCWBfbI4bW9g%2BzmWL5%2Fuu0o70U%2FNLmBjkmsC%2Fof4Ovv70zwLYo%2Ffv5xFtNjMGw%2BBwV4%2FzBSlkt4xKx%2BYUwhmRYer%2FFi2kapzE6SWNQIGjTAsAbkfZoq%2B6OP%2BJWNIZ2W%2Bigdl57%2FkxTbmGWIctOUNvP0zrDNv%2BL7G097BWwY2Pme6S4e5Db30Ms17TvrXi5PdzbMQqDLDZ3iQRIF0XuUvxXgiR4ctEOpexJhM16ytuLXIuzY73dSgxEFtWYiHqy9UredmR6mqSxPciRnRrx3hlOdRmEjiYfUF47vRNMt6qYjEyjpezVnIWch5myQMtTQwYt2SJFpjyhh2VJwaaNKJkZQK8Pprd9SnlZMsM5mwyVtGKR%2BhuDbjrlkw6sbKyQY6pgEIl17fjwwr2uPQdwY33Ms0Idpd2MqgyiTjClI8svIORy5jz31kgnTpbqFwtCz2BtsZnK9tq9DVkhqghtH93bzahEEboNeOblleovVkWMhTO94cLc0HetnDnVM0bvwQgd2Pc69gc43QVmqOzWv7%2FpAUxZ80n6DstVXiYR4GCBRx%2BV5FPLgHDgHzJo%2BK6BPsA9WGskfeSje%2BDyazSFp8TfkzPE2w548c&X-Amz-Signature=a946fefc744181bf92958955265d57e043f28a95e9af06b1a29ec8da6e353718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

