---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EDYRL3L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwB5ONlvNla4jwiL3wyju%2FhfI3kUVpuacX%2BZjSwRADgQIhAN8pxwT34nmZ93txHzT48p3eRM0NwyU4ay2XIo5827R5Kv8DCGEQABoMNjM3NDIzMTgzODA1IgwgJ%2Bs2NaWooF3i3ycq3APh%2BFlhLcjMqEKta4xhqbQzPCrmt%2BbwoEgn%2FAhGsCOGeC9rA6iSLBJBL9GiXeLZnFQkZ0HLuFspIbLzCdf4TbrYqciwu35rvz6ZEb%2Fj1edIkDdTGLKCtXaEiabtvQUg%2Blm6ZPnePlJk9FUHHyqd7jWcidSYdH1Z5BK7ASiZn8nyuFjGkSc20mr6M5cHw%2Fx3ccU%2FenfE0wLaRjcjZRVwx51fkkqsQTNEkSZ5IeQueOMJlDr0ksQmt2E8NIWhR5vBtRfzPjHf84Nu1b4xGJZ2yaab%2FXug5xew4eauMiUn4WwU3S5j97H32T51BTkFsIG7Bpd1yl34OO%2Bq500qtAHOG4zrjJ9%2BMAQW%2FKYN%2F1devjuhaiIVloiwCXhEZdzDKaXQMqznyjzgKDR4oU%2BRpOXVOvmY9EWPnyDCKlkuTPhiIsIUB%2BTyC%2FdpertaanN%2Ba4fh348xWPROQNw%2FiKp7AS%2FBGYkNbBYeIfmxFMAJwqdbgctWodOc9fzflUhq5gDMQrDSQRZvrj64UJ5tz1yo3bEHoSOyDLQW4zeBc5eZow7fCNrnqADV9fQKynz%2B%2BJtsI%2BgEFq5bcJZNRWy317dkJnj2DwMqgYYHE0ndKGfOY9jxZrvAnLh%2FKvACYcgJc54xkzDv%2FMvJBjqkAWK%2FKyN3yvBnnFVlwXti%2BA5n2NjLGo1aJgIwTkCTbFOMegIfvEoPU8t0SRHYZA%2BxBC5ftwhCdms7gc69AazGQqQBFV%2BAj7NaJLKRcoVaBINucSLEy2Tftv6wufoUzg6S%2BlKrt1Lt6gTHB2gL%2FtKhe7m08qx32Cv2dFtsc8KheKIOHq771hq2Rwr3y%2BjzUmZdHkl3BgewT1%2FY8iTY8YU%2BFAE7hm7A&X-Amz-Signature=9191feff4f44d2cf50bb9bf64da49ee3e1e38422e87c7a9dfd758768a8cce50a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EDYRL3L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwB5ONlvNla4jwiL3wyju%2FhfI3kUVpuacX%2BZjSwRADgQIhAN8pxwT34nmZ93txHzT48p3eRM0NwyU4ay2XIo5827R5Kv8DCGEQABoMNjM3NDIzMTgzODA1IgwgJ%2Bs2NaWooF3i3ycq3APh%2BFlhLcjMqEKta4xhqbQzPCrmt%2BbwoEgn%2FAhGsCOGeC9rA6iSLBJBL9GiXeLZnFQkZ0HLuFspIbLzCdf4TbrYqciwu35rvz6ZEb%2Fj1edIkDdTGLKCtXaEiabtvQUg%2Blm6ZPnePlJk9FUHHyqd7jWcidSYdH1Z5BK7ASiZn8nyuFjGkSc20mr6M5cHw%2Fx3ccU%2FenfE0wLaRjcjZRVwx51fkkqsQTNEkSZ5IeQueOMJlDr0ksQmt2E8NIWhR5vBtRfzPjHf84Nu1b4xGJZ2yaab%2FXug5xew4eauMiUn4WwU3S5j97H32T51BTkFsIG7Bpd1yl34OO%2Bq500qtAHOG4zrjJ9%2BMAQW%2FKYN%2F1devjuhaiIVloiwCXhEZdzDKaXQMqznyjzgKDR4oU%2BRpOXVOvmY9EWPnyDCKlkuTPhiIsIUB%2BTyC%2FdpertaanN%2Ba4fh348xWPROQNw%2FiKp7AS%2FBGYkNbBYeIfmxFMAJwqdbgctWodOc9fzflUhq5gDMQrDSQRZvrj64UJ5tz1yo3bEHoSOyDLQW4zeBc5eZow7fCNrnqADV9fQKynz%2B%2BJtsI%2BgEFq5bcJZNRWy317dkJnj2DwMqgYYHE0ndKGfOY9jxZrvAnLh%2FKvACYcgJc54xkzDv%2FMvJBjqkAWK%2FKyN3yvBnnFVlwXti%2BA5n2NjLGo1aJgIwTkCTbFOMegIfvEoPU8t0SRHYZA%2BxBC5ftwhCdms7gc69AazGQqQBFV%2BAj7NaJLKRcoVaBINucSLEy2Tftv6wufoUzg6S%2BlKrt1Lt6gTHB2gL%2FtKhe7m08qx32Cv2dFtsc8KheKIOHq771hq2Rwr3y%2BjzUmZdHkl3BgewT1%2FY8iTY8YU%2BFAE7hm7A&X-Amz-Signature=b1e49b5c8c448b36bc4c63c02a01acdafd8f779d347a49c617caa63564cca5a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

