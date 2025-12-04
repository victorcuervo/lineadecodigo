---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWJYXBI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCP4m9rQj3N7CKKQivHL9CXW7TmA2lTvDIROEzWTYId7gIhAOid5frq%2BPuvJNYUvIuxpkllpd8JHitQqZpeXL7Wn1EsKv8DCEQQABoMNjM3NDIzMTgzODA1Igz6ZFFrFPCSBS5gQX8q3AM%2BbkX%2F7gdyGzWJlRUIkBIOntsgtXEYXsAdJyfMiMuh2pohj0%2BTo2eVkbja1QmVdrBtsUCTCOOJQkncJLEK0PwfNIXvNjxeLHgC9WChiu6iLzFIJR2n7T9IXpihrVGH3YGzd5yE6b%2FZ0ue3jdi4TLEpm5EUTQDUulOkXk3%2BLavR430XyMi3JZVlz8nTTIDEPuyeVMP9TDlPH5EpPpVJB9dfRRX5dgXFkKjDM1u4mQd%2FWS31DQ4y2wGE8vxEAYGAWOfHxEWIxM2g86k6qC9ggrDebRlM06OcmdTZztz3GxfZknRq21B%2Fr0q4GEaOeNiC8MpCJepyWbj0UWGnPhk0zrfA1HcSIhSE8WKA0QxzzHytaAjGUoGAJzRR%2FY%2FPQ5CjW9lPEAwbrWzfpHzLREJ0B6dNUj1GVKe6ws5ZvaIRN8Wjl7e8B9qVU6GCpz9kwmofxlQBxl3ucthUvCPgDXPHQJfqLbNYFbltxAq%2BjbO9Ww3sPj56%2BTNIAQPEY1NcCmKf6r0EsSx6jtKtW0EBRdRqUJXnaHXMZDo7AwO0x6qDScNv3TnG6Oi9qBlhzctaAcHi6ZxnCJjenxp7Cu9YRp0tgg60C6eKXuIIPseLa9I3Yi2wkrqZIdMTGlm9pNHlvTDoycXJBjqkAU9YhqVJPn%2FgLfR7Pm6%2F2iKeulvNAIHDXInQGGJOKahvrT7VBlhXVqh9SQI%2FQC3zscGAAzvC%2BThCccw3WxuRRn%2B2pLnxeM6riDaibqrndm3ThkD4BJhzMbOSPVbs6tzeQ58ev7edlws8L1wB3Gd1oQRVNhNEESjHF5uDIGWwBItKTG0rWRXC%2FPygpgrXn9xBDrEFC%2FV%2FdgBfBQ0v26R1nVj4lZZ%2F&X-Amz-Signature=556efd040bf6d02c7ea3f1399d51019e793e1f2b896a30a2decb5927917b2650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWJYXBI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCP4m9rQj3N7CKKQivHL9CXW7TmA2lTvDIROEzWTYId7gIhAOid5frq%2BPuvJNYUvIuxpkllpd8JHitQqZpeXL7Wn1EsKv8DCEQQABoMNjM3NDIzMTgzODA1Igz6ZFFrFPCSBS5gQX8q3AM%2BbkX%2F7gdyGzWJlRUIkBIOntsgtXEYXsAdJyfMiMuh2pohj0%2BTo2eVkbja1QmVdrBtsUCTCOOJQkncJLEK0PwfNIXvNjxeLHgC9WChiu6iLzFIJR2n7T9IXpihrVGH3YGzd5yE6b%2FZ0ue3jdi4TLEpm5EUTQDUulOkXk3%2BLavR430XyMi3JZVlz8nTTIDEPuyeVMP9TDlPH5EpPpVJB9dfRRX5dgXFkKjDM1u4mQd%2FWS31DQ4y2wGE8vxEAYGAWOfHxEWIxM2g86k6qC9ggrDebRlM06OcmdTZztz3GxfZknRq21B%2Fr0q4GEaOeNiC8MpCJepyWbj0UWGnPhk0zrfA1HcSIhSE8WKA0QxzzHytaAjGUoGAJzRR%2FY%2FPQ5CjW9lPEAwbrWzfpHzLREJ0B6dNUj1GVKe6ws5ZvaIRN8Wjl7e8B9qVU6GCpz9kwmofxlQBxl3ucthUvCPgDXPHQJfqLbNYFbltxAq%2BjbO9Ww3sPj56%2BTNIAQPEY1NcCmKf6r0EsSx6jtKtW0EBRdRqUJXnaHXMZDo7AwO0x6qDScNv3TnG6Oi9qBlhzctaAcHi6ZxnCJjenxp7Cu9YRp0tgg60C6eKXuIIPseLa9I3Yi2wkrqZIdMTGlm9pNHlvTDoycXJBjqkAU9YhqVJPn%2FgLfR7Pm6%2F2iKeulvNAIHDXInQGGJOKahvrT7VBlhXVqh9SQI%2FQC3zscGAAzvC%2BThCccw3WxuRRn%2B2pLnxeM6riDaibqrndm3ThkD4BJhzMbOSPVbs6tzeQ58ev7edlws8L1wB3Gd1oQRVNhNEESjHF5uDIGWwBItKTG0rWRXC%2FPygpgrXn9xBDrEFC%2FV%2FdgBfBQ0v26R1nVj4lZZ%2F&X-Amz-Signature=9cc6267dcfccbb4b65d26f8b0428e064b563c81ea09e40e8a3ffbd0642087c3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

