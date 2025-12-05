---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IOUEAT2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDs3axCdZ8ALUqn0t%2Fq6DJ%2FQWdF1SoWa4ZvXo24f22uCAiEAjIJSbEVlj%2Bxy2jE1RHMJ9jVdN54rQvsYXUU%2FD0y134Uq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHpjBctXfrm3SVMmlircA0xkb1g4h5oaMvuIQa%2FLwQo6lEinusbaD3KvL7Mbs5A1dCbeu%2BD16aGpociawO1M%2BZEUfmHJ6zMKEqmgbnEUw1EGxT9QpWlNhj%2BwwVoTTxr2CoWh0qD%2BniCx%2FviveTUa%2F9hB5EOVwdJfnDcH%2FHIeranLQ7%2BMCpglOWHQ4%2Fg6zaVdP2P7GQ9byVLFsNqdFBZwsUnZ9%2BVoDy6miiUYMAlldt0JRB45L%2BqQl%2FUvxZAGOkZwd3xOq9LgCnayySysIulF4jbv3GQa9qTzUYb2trjiM2j%2B%2FtbRZ5goTNt4tnum%2Bm6fwc4kDaRq8t6eZaUX5JVG1lzNJhKbhe5IjQQr%2FtfbRDjHzIKCpyjaT6r4FK4ByTlfT3L1%2BYA1Qm4gIwUHEFZZlCDegjElR6EoIJ384Vd8j5rLj%2BMCTEaqRF1w6yX%2FxttP4zK2Y8EugQeppPv7YxlSu2wkB7OuBjjEOxw4EDFk%2BOTYOmMwN141RXb2IhEWNhL%2BlZQ449pb1OIohfgRlUaRPspGb7M%2BTaresOFcZDJJTPa1rd9Gvif5Gc6SIcpbgkhwTN27Sj1jd5dnXp5XHyqWkE7MyIhdV9d%2FPXdETT8JNunjcVi%2FGU025POdPsDoH5OacR2oxMF32DUm1q%2FMMO38y8kGOqUB5zJhz9Toru5DigfaOWW7hMQhUAKomsLn0ItfiTlriB3vQe8uxKqgv5jPatLYeS4hH1cojtEX2uztsxVG46ElNji4kZPLGTVo8Wz8SpGYJrGTW%2Fymay6AO52TxnW0x2YV0CLSjNzHpetQ53yqwIH8ChFkGI9VINJ7Y1X5et%2BTAY9yZHkftQWS%2BymDcgDiDx9x26TOYdSJ3Q6q9IQCUsWfNUy1A1A0&X-Amz-Signature=8f1d7c955191ba1f4582c152538e6fd5217e119a5eb366aaf311fdfb9f5727aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IOUEAT2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDs3axCdZ8ALUqn0t%2Fq6DJ%2FQWdF1SoWa4ZvXo24f22uCAiEAjIJSbEVlj%2Bxy2jE1RHMJ9jVdN54rQvsYXUU%2FD0y134Uq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHpjBctXfrm3SVMmlircA0xkb1g4h5oaMvuIQa%2FLwQo6lEinusbaD3KvL7Mbs5A1dCbeu%2BD16aGpociawO1M%2BZEUfmHJ6zMKEqmgbnEUw1EGxT9QpWlNhj%2BwwVoTTxr2CoWh0qD%2BniCx%2FviveTUa%2F9hB5EOVwdJfnDcH%2FHIeranLQ7%2BMCpglOWHQ4%2Fg6zaVdP2P7GQ9byVLFsNqdFBZwsUnZ9%2BVoDy6miiUYMAlldt0JRB45L%2BqQl%2FUvxZAGOkZwd3xOq9LgCnayySysIulF4jbv3GQa9qTzUYb2trjiM2j%2B%2FtbRZ5goTNt4tnum%2Bm6fwc4kDaRq8t6eZaUX5JVG1lzNJhKbhe5IjQQr%2FtfbRDjHzIKCpyjaT6r4FK4ByTlfT3L1%2BYA1Qm4gIwUHEFZZlCDegjElR6EoIJ384Vd8j5rLj%2BMCTEaqRF1w6yX%2FxttP4zK2Y8EugQeppPv7YxlSu2wkB7OuBjjEOxw4EDFk%2BOTYOmMwN141RXb2IhEWNhL%2BlZQ449pb1OIohfgRlUaRPspGb7M%2BTaresOFcZDJJTPa1rd9Gvif5Gc6SIcpbgkhwTN27Sj1jd5dnXp5XHyqWkE7MyIhdV9d%2FPXdETT8JNunjcVi%2FGU025POdPsDoH5OacR2oxMF32DUm1q%2FMMO38y8kGOqUB5zJhz9Toru5DigfaOWW7hMQhUAKomsLn0ItfiTlriB3vQe8uxKqgv5jPatLYeS4hH1cojtEX2uztsxVG46ElNji4kZPLGTVo8Wz8SpGYJrGTW%2Fymay6AO52TxnW0x2YV0CLSjNzHpetQ53yqwIH8ChFkGI9VINJ7Y1X5et%2BTAY9yZHkftQWS%2BymDcgDiDx9x26TOYdSJ3Q6q9IQCUsWfNUy1A1A0&X-Amz-Signature=198624d6903d811d1c6d7c7b0c051a3278d8e79d031dabae70529249fd9ddcfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

