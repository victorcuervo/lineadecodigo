---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CUYPQFL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9avJ4w%2FtdTNNaP0M941opRBICmDR4ofu7DRJsmMxAzAiEAoEEm4WFTQcGLsA30hD0bAtC7IFbcJnbuUfH%2FvLsGFV0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjl5B9kObY1shbvLCrcA6jN4Rig1Fwc74pZFuLOAcK%2BCwWsCvvtr%2FWg4eA%2ByDc%2BYpc1IEtCQxpsdMqXYhNv6wLJ6HyINOxWg9XapqxMyCaEQaQe5a8HlzX%2FTLyiWtzXWNEnLazkD%2BLESN9PiFegiNt9bGIGYoy0p32QfXSUccNIdSHkzsJo%2BpsQZoVj%2FD0IogWqSH0e%2BxtU3e7CmMV%2BXgBLDntVSQGUpa%2BzN1xzgZ0xs22dCmqSvwm7D41ydhcQQUGPLP%2BXDxRDbZpmCbzcLb30vkqQzOQKh0ShJS%2FJOCB6DF54CB8Xzc%2BnwEn2iOGR7aFR%2BFZpYFXOav8hcHoxtSIRHy%2BCAHuCQVqhxd8GznfKQoLjSsp3XOxa4kbNQSaj1tqnvdHTmjnQ%2FaC7h8EcH%2B1UTjXbl19ZjH5NBZomF8g6mrFF7gQZ6XLZyMEIFwuBxPZkfs5%2BM3w5bioDsbB%2FRmZ4m8yYRBFgHYkcENvPe%2Fa7BLygVu9M55MLZT2%2Bk5UWFkACtor%2FrZLFnMw63QizNgT%2B5r5vvWTNpEisvh%2BvMQ2HN%2F6eDtRNDj%2BNw2tB5rIBH7xbAXUWXthrLihU%2BueISZ4WDO05jnNuMPgymcaqTLXCKCB6WKXeAR4bNN7txlakr8BjoONny7bDy56BMOqZ1ckGOqUBJuREVuOKVN5Lvs3oneIf3w7pkFu80QHNlorOdKiL4aXJ5%2BBdgBKwOdhpk5rtPSs3e%2F75P7cY7ORNuBOTlZMifeAsa%2BYaC%2FpQ6l6jMW8unWd%2FjuBl2FLSGdQe4mq6XvX0HPApBZPRPgegymPx5e5n%2BuJpgd82DHTY6ugCIhCxmssy8yw0NplLeCB1RgWt96rbnDO%2FDWDROrD34bM6SfvVTwKhAmqh&X-Amz-Signature=02c1de05b55c97cb0b5758823d077bae1b5e0f7f91adf448a62ee27d68969932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CUYPQFL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9avJ4w%2FtdTNNaP0M941opRBICmDR4ofu7DRJsmMxAzAiEAoEEm4WFTQcGLsA30hD0bAtC7IFbcJnbuUfH%2FvLsGFV0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjl5B9kObY1shbvLCrcA6jN4Rig1Fwc74pZFuLOAcK%2BCwWsCvvtr%2FWg4eA%2ByDc%2BYpc1IEtCQxpsdMqXYhNv6wLJ6HyINOxWg9XapqxMyCaEQaQe5a8HlzX%2FTLyiWtzXWNEnLazkD%2BLESN9PiFegiNt9bGIGYoy0p32QfXSUccNIdSHkzsJo%2BpsQZoVj%2FD0IogWqSH0e%2BxtU3e7CmMV%2BXgBLDntVSQGUpa%2BzN1xzgZ0xs22dCmqSvwm7D41ydhcQQUGPLP%2BXDxRDbZpmCbzcLb30vkqQzOQKh0ShJS%2FJOCB6DF54CB8Xzc%2BnwEn2iOGR7aFR%2BFZpYFXOav8hcHoxtSIRHy%2BCAHuCQVqhxd8GznfKQoLjSsp3XOxa4kbNQSaj1tqnvdHTmjnQ%2FaC7h8EcH%2B1UTjXbl19ZjH5NBZomF8g6mrFF7gQZ6XLZyMEIFwuBxPZkfs5%2BM3w5bioDsbB%2FRmZ4m8yYRBFgHYkcENvPe%2Fa7BLygVu9M55MLZT2%2Bk5UWFkACtor%2FrZLFnMw63QizNgT%2B5r5vvWTNpEisvh%2BvMQ2HN%2F6eDtRNDj%2BNw2tB5rIBH7xbAXUWXthrLihU%2BueISZ4WDO05jnNuMPgymcaqTLXCKCB6WKXeAR4bNN7txlakr8BjoONny7bDy56BMOqZ1ckGOqUBJuREVuOKVN5Lvs3oneIf3w7pkFu80QHNlorOdKiL4aXJ5%2BBdgBKwOdhpk5rtPSs3e%2F75P7cY7ORNuBOTlZMifeAsa%2BYaC%2FpQ6l6jMW8unWd%2FjuBl2FLSGdQe4mq6XvX0HPApBZPRPgegymPx5e5n%2BuJpgd82DHTY6ugCIhCxmssy8yw0NplLeCB1RgWt96rbnDO%2FDWDROrD34bM6SfvVTwKhAmqh&X-Amz-Signature=280055e0cdc91a1bcdc755236837374b3eb88e55385885c2b97da13d77ddc1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

