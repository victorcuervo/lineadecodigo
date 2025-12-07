---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJRCVMJK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHj0DjLvUVczg0jKwXz%2BX60bd9Z9OJH%2F6piEksjx1%2BrkAiAdTtpbMhbU0R7JgI4LNJXOD9CEm1XLr3g3xbTafHRGWSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8d%2F0GWmo4BtPSqNFKtwDWiluUJ0s334zeI7dzQQCzRjEPaEe%2FYHViEVyKAhU3ydhX3SEipkMTfdcYnsPHYeUvmu2Bw6aMI6MYy2mbyA45Y0FvTf561PF0ctQp6hRp3n7kDJEi2Z%2B7RtT0T257LifP2gouAN1icmCjYvwFbVUGE32htnYNVTdM2NUJWJr0OTupSmJs0M93Hl0kiAN7p5Wz1eZE3yuO1c1d%2B2SJkQN4IuI%2B56d2Qb0wl0OMB4uKewYCfxd%2BL3vIsOyBrx7XyKuonGd17PUkEjll8ooPrsWnmNmQtojZb5jOJAlxmSQSIl1yH6Za0Jm%2F%2BNZwfA95tOlgsrGXakavxcWJq%2F5voCVIqUjWjWCoDUCME1RgaqTeXQcfz%2BMsR%2BQxgOrIB33w4oxNPwKarblWJRCbSyHtYGwlYF%2Bx40M025zTooIHyQWfrc3mBpR4%2B6hDZNX5XOsHPE7HvGYoqJ2NwbW3tNUXWNa3gHJkwfzY1ph6O6zRGsk71fcYvebHhKYvUcdRG4rFRXGgNi7Wc0P4H%2Ftqxw0dfNKdhll1l6VGrsyU8c%2BrVnRSBLHUSRw4UBgGZkfTGgGM06pt90vZvpPBVnvZNRzyjGHoDAhLvv6a4basgH9Y5ShtVxE5QEGgU004hbGQygwu%2F3SyQY6pgEy3TG1hEW%2FcoQobIHVf8me4j5sJfqswEuhwdh09TQgV3FU86pLSqDNoBPONo2BymG5pan9hfJNX2fxeH46oTWSDd1dEczzj4XZfPHBXYNwVY6vX8jePOsgPIhpAuf5A6%2BLDXqM4soBA%2Fi2DMZGpplDEVTQkFrkKMxjJtxMgcZq3PNbaG1SX%2FdJclmaq%2BLRFnh701ou0dVdE5D3fn6Q01luVXGTe0CW&X-Amz-Signature=385b2fe89ef5cf1cd8817c278ddc9c3e7e741e9a5a7e5906f61b107a5daa94a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJRCVMJK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHj0DjLvUVczg0jKwXz%2BX60bd9Z9OJH%2F6piEksjx1%2BrkAiAdTtpbMhbU0R7JgI4LNJXOD9CEm1XLr3g3xbTafHRGWSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8d%2F0GWmo4BtPSqNFKtwDWiluUJ0s334zeI7dzQQCzRjEPaEe%2FYHViEVyKAhU3ydhX3SEipkMTfdcYnsPHYeUvmu2Bw6aMI6MYy2mbyA45Y0FvTf561PF0ctQp6hRp3n7kDJEi2Z%2B7RtT0T257LifP2gouAN1icmCjYvwFbVUGE32htnYNVTdM2NUJWJr0OTupSmJs0M93Hl0kiAN7p5Wz1eZE3yuO1c1d%2B2SJkQN4IuI%2B56d2Qb0wl0OMB4uKewYCfxd%2BL3vIsOyBrx7XyKuonGd17PUkEjll8ooPrsWnmNmQtojZb5jOJAlxmSQSIl1yH6Za0Jm%2F%2BNZwfA95tOlgsrGXakavxcWJq%2F5voCVIqUjWjWCoDUCME1RgaqTeXQcfz%2BMsR%2BQxgOrIB33w4oxNPwKarblWJRCbSyHtYGwlYF%2Bx40M025zTooIHyQWfrc3mBpR4%2B6hDZNX5XOsHPE7HvGYoqJ2NwbW3tNUXWNa3gHJkwfzY1ph6O6zRGsk71fcYvebHhKYvUcdRG4rFRXGgNi7Wc0P4H%2Ftqxw0dfNKdhll1l6VGrsyU8c%2BrVnRSBLHUSRw4UBgGZkfTGgGM06pt90vZvpPBVnvZNRzyjGHoDAhLvv6a4basgH9Y5ShtVxE5QEGgU004hbGQygwu%2F3SyQY6pgEy3TG1hEW%2FcoQobIHVf8me4j5sJfqswEuhwdh09TQgV3FU86pLSqDNoBPONo2BymG5pan9hfJNX2fxeH46oTWSDd1dEczzj4XZfPHBXYNwVY6vX8jePOsgPIhpAuf5A6%2BLDXqM4soBA%2Fi2DMZGpplDEVTQkFrkKMxjJtxMgcZq3PNbaG1SX%2FdJclmaq%2BLRFnh701ou0dVdE5D3fn6Q01luVXGTe0CW&X-Amz-Signature=d7fcc14acbe55dc91b93524726f6ae2f4f895e9bf516a3f9e33fa86e48aa14f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

